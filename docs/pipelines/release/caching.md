---
title: Pipeline caching
description: Improve pipeline performance by caching files such as dependencies between runs.
ms.assetid: B81F0BEC-00AD-431A-803E-EDD2C5DF5F97
ms.topic: overview
ms.custom: devx-track-dotnet, devx-track-js, devx-track-python
ms.manager: adandree
ms.date: 04/23/2025
monikerRange: azure-devops
---

# Pipeline caching

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

Pipeline caching can help reduce build time by reusing downloaded dependencies from previous runs, avoiding the need to recreate or redownload the same files. This is particularly helpful in scenarios where the same dependencies are downloaded repeatedly at the start of each run. This is often a time consuming process involving hundreds or thousands of network calls.

Caching is most effective when the time required to restore and save the cache is less than the time it takes to regenerate the files. However, in some cases, caching may not provide performance benefits and could even negatively impact build time. It's important to evaluate your specific scenario to determine whether caching is the right approach.

> [!NOTE]
> Pipeline caching is not supported for Classic release pipelines.

## When to use pipeline artifacts versus pipeline caching

Pipeline caching and [pipeline artifacts](../artifacts/pipeline-artifacts.md) perform similar functions but are intended for different scenarios and shouldn't be used interchangeably.

- **Use pipeline artifacts**: when you need to take specific files produced by one job and share them with other jobs (and those other jobs would likely fail without them).

- **Use pipeline caching**: when you want to improve build time by reusing files from previous runs (and not having those files won't impact the job's ability to run).

> [!NOTE]
> Pipeline caching and pipeline artifacts are available at no cost for all tiers (free and paid). See [Artifacts storage consumption](../../artifacts/artifact-storage.md) for more details.

## Self-hosted agent requirements

The following executables must be located in a folder listed in the `PATH` environment variable. Note that these requirements apply only to self-hosted agents, as hosted agents come preinstalled with the necessary software.

| Archive software / Platform | Windows     | Linux    | Mac      |
|-----------------------------|------------ |--------- |----------|
|GNU Tar                      | Required    | Required | No       |
|BSD Tar                      | No          | No       | Required |
|7-Zip                        | Recommended | No       | No       |

## Cache task: How it works

Caching is added to a pipeline by adding the [Cache task](/azure/devops/pipelines/tasks/reference/cache-v2) to the `steps` section of a job.

During pipeline execution, when a cache step is encountered, the task attempts to restore the cache based on the provided inputs. If no cache is found, the step completes, and the next step in the job is executed.

Once all steps in the job have run successfully, a special **"Post-job: Cache"** step is automatically added and triggered for each **"restore cache"** step that wasn't skipped. This step is responsible for **saving the cache**.

> [!NOTE]
> Caches are immutable. Once a cache is created, its content cannot be modified.

## Configure the Cache task

The [Cache task](/azure/devops/pipelines/tasks/reference/cache-v2) has two required arguments: *path* and *key*:

1. **path**: The path to the folder you want to cache. This can be an absolute or relative path. Relative paths are resolved against `$(System.DefaultWorkingDirectory)`.

    > [!TIP]
    > You can use [predefined variables](../build/variables.md) to store the path to the folder you want to cache. However, wildcards are not supported.

2. **key**: This defines the identifier for the cache you want to restore or save. The key is composed of a combination of string values, file paths, or file patterns, with each segment separated by a `|` character.

    - **Strings**: <br>
    A fixed value (such as the cache name or a tool name), or taken from an environment variable (like the current OS or job name).
    
    - **File paths**: <br>
    The path to a specific file whose contents will be hashed. The file must exist at the time the task is run. Any segment that resembles a file path is treated as such, so be cautious, especially when using segments containing `.`, as this may lead to "file doesn't exist" failures. 

      > [!TIP]
      > To avoid a path-like string segment from being treated like a file path, wrap it with double quotes, for example: `"my.key" | $(Agent.OS) | key.file`
    
    - **File patterns**: <br>
    A comma-separated list of glob-style wildcard patterns that must match at least one file. Examples:
      
      - `**/yarn.lock`: all *yarn.lock* files under the sources directory.
      - `*/asset.json, !bin/**`: all *asset.json* files located in a directory under the sources directory, except those in the *bin* directory.
    
The contents of any file identified by a file path or file pattern are hashed to generate a dynamic cache key. This is useful when your project has files that uniquely identify what’s being cached. For instance, files like `package-lock.json`, `yarn.lock`, `Gemfile.lock`, or `Pipfile.lock` are often referenced in a cache key, as they represent a unique set of dependencies. Relative file paths or patterns are resolved against `$(System.DefaultWorkingDirectory)`.

- **Example**:

The following example shows how to cache Yarn packages:

```yaml
variables:
  YARN_CACHE_FOLDER: $(Pipeline.Workspace)/s/.yarn

steps:
- task: Cache@2
  inputs:
    key: '"yarn" | "$(Agent.OS)" | yarn.lock'
    restoreKeys: |
       "yarn" | "$(Agent.OS)"
       "yarn"
    path: $(YARN_CACHE_FOLDER)
  displayName: Cache Yarn packages

- script: yarn --frozen-lockfile
```

In this example, the cache key consists of three parts: a static string ("yarn"), the OS the job is running on (since the cache is unique per operating system), and the hash of the `yarn.lock` file (which uniquely identifies the dependencies).

On the first run after the task is added, the cache step will report a "cache miss" because the cache identified by this key doesn't exist. After the last step, a cache will be created from the files in `$(Pipeline.Workspace)/s/.yarn` and uploaded. On the next run, the cache step will report a "cache hit" and the contents of the cache will be downloaded and restored.

When using `checkout: self`, the repository is checked out to `$(Pipeline.Workspace)/s`, and your `.yarn` folder will likely reside in the repository itself.

> [!NOTE]
> `Pipeline.Workspace` is the local path on the agent running your pipeline where all directories are created. This variable has the same value as `Agent.BuildDirectory`.
If you're not using `checkout: self`, ensure you update the `YARN_CACHE_FOLDER` variable to point to the location of `.yarn` in your repository.

### Use restore keys

`restoreKeys` allows you to query multiple exact keys or key prefixes. It's used as a fallback when the specified `key` doesn't yield a hit. A restore key searches for a key by prefix and returns the most recently created cache entry. This is helpful when the pipeline cannot find an exact match but still wants to use a partial cache hit.

To specify multiple restore keys, list them on separate lines. The order in which the restore keys are tried is from top to bottom.

- **Example**:

Here's an example of how to use restore keys to cache Yarn packages: 

```yaml
variables:
  YARN_CACHE_FOLDER: $(Pipeline.Workspace)/.yarn

steps:
- task: Cache@2
  inputs:
    key: '"yarn" | "$(Agent.OS)" | yarn.lock'
    restoreKeys: |
       yarn | "$(Agent.OS)"
       yarn
    path: $(YARN_CACHE_FOLDER)
  displayName: Cache Yarn packages

- script: yarn --frozen-lockfile
```

In this example, the cache task first attempts to restore the specified key. If the key doesn't exist in the cache, it then tries the first restore key: `yarn | $(Agent.OS)`.  This searches for any cache keys that exactly match or start with this prefix.

A prefix match can occur if the hash of the `yarn.lock` file has changed. For example, if the cache contains the key `yarn | $(Agent.OS) | old-yarn.lock` (where `old-yarn.lock` has a different hash than the current `yarn.lock`), this restore key would result in a partial cache hit.

If the first restore key doesn't yield a match, the next restore key (`yarn`) This will search for any cache key that starts with `yarn`. For prefix matches, the restore process returns the most recently created cache entry.

> [!NOTE]
> A pipeline can include multiple caching tasks, and there's no storage limit for caching. Jobs and tasks within the same pipeline can access and share the same cache.

## Use restore condition

In some scenarios, you may want to conditionally execute steps based on whether the cache was successfully restored. For example, you can skip a step that installs dependencies if the cache was restored. This can be achieved using the `cacheHitVar` argument. 

Setting this input to the name of an environment variable causes the variable to be set to `true` when there's a cache hit, `inexact` if a restore key yields a partial cache hit, and `false` if no cache is found. You can then reference this variable in a [step condition](../process/conditions.md) or within a script.

Here’s an example where the `install-deps.sh` step is skipped when the cache is restored:

```yaml
steps:
- task: Cache@2
  inputs:
    key: mykey | mylockfile
    restoreKeys: mykey
    path: $(Pipeline.Workspace)/mycache
    cacheHitVar: CACHE_RESTORED

- script: install-deps.sh
  condition: ne(variables.CACHE_RESTORED, 'true')

- script: build.sh
```

## Cache isolation and security

To ensure isolation between caches from different pipelines and different branches, every cache is stored within a logical container called a *scope*. Scopes act as a security boundary that guarantees:

1. Jobs from one pipeline can’t access caches from a different pipeline.

1. Jobs building pull requests can read caches from the target branch (for the same pipeline), but can't write (create) caches in the target branch's scope.

When a cache step is encountered during a run, the cache identified by the key is requested from the server. The server then looks for a cache with this key from the scopes visible to the job, and returns the cache (if available). On cache save (at the end of the job), a cache is written to the scope representing the pipeline and branch. 

#### CI, manual, and scheduled runs

| Scope                                             | Read | Write |
|---------------------------------------------------|------|-------|
| Source branch                                     | Yes  | Yes   |
| `main` branch                                     | Yes  | No    |
| `master` branch                                   | Yes  | No    |

#### Pull request runs

| Scope                                             | Read | Write |
|---------------------------------------------------|------|-------|
| Source branch                                     | Yes  | No    |
| Target branch                                     | Yes  | No    |
| Intermediate branch (such as `refs/pull/1/merge`) | Yes  | Yes   |
| `main` branch                                     | Yes  | No    |
| `master` branch                                   | Yes  | No    |

#### Pull request fork runs

| Branch                                            | Read | Write |
|---------------------------------------------------|------|-------|
| Target branch                                     | Yes  | No    |
| Intermediate branch (such as `refs/pull/1/merge`) | Yes  | Yes   |
| `main` branch                                     | Yes  | No    |
| `master` branch                                   | Yes  | No    |

> [!TIP]
> Because caches are already scoped to a project, pipeline, and branch, there's no need to include any project, pipeline, or branch identifiers in the cache key.

## Examples

### [Bundler](#tab/bundler)

For Ruby projects using Bundler, override the `BUNDLE_PATH` environment variable to set the [path](https://bundler.io/v2.3/man/bundle-config.1.html) where Bundler looks for Gems.

**Example**:

```yaml
variables:
  BUNDLE_PATH: $(Pipeline.Workspace)/.bundle

steps:
- task: Cache@2
  displayName: Bundler caching
  inputs:
    key: 'gems | "$(Agent.OS)" | Gemfile.lock'
    path: $(BUNDLE_PATH)
    restoreKeys: | 
      gems | "$(Agent.OS)"
      gems   
```

### [Ccache](#tab/ccache)

[Ccache](https://ccache.dev/) is a compiler cache for C/C++. To use Ccache in your pipeline make sure `Ccache` is installed, and optionally added to your `PATH` (see [Ccache run modes](https://ccache.dev/manual/3.7.1.html#_run_modes)). Set the `CCACHE_DIR` environment variable to a path under `$(Pipeline.Workspace)` and cache this directory.

**Example**:

```yaml
variables:
  CCACHE_DIR: $(Pipeline.Workspace)/ccache

steps:
- bash: |
    sudo apt-get install ccache -y    
    echo "##vso[task.prependpath]/usr/lib/ccache"
  displayName: Install ccache and update PATH to use linked versions of gcc, cc, etc

- task: Cache@2
  displayName: Ccache caching
  inputs:
    key: 'ccache | "$(Agent.OS)" | $(Build.SourceVersion)'
    path: $(CCACHE_DIR)
    restoreKeys: | 
      ccache | "$(Agent.OS)"
```

See [Ccache configuration settings](https://ccache.dev/manual/latest.html#_configuration_settings) for more details.

### [Docker](#tab/docker)

Caching Docker images can significantly reduce the time it takes to run your pipeline.

```yaml
variables:
  repository: 'myDockerImage'
  dockerfilePath: '$(Build.SourcesDirectory)/app/Dockerfile'
  tag: '$(Build.BuildId)'

pool:
  vmImage: 'ubuntu-latest'
steps:
  - task: Cache@2
    displayName: Cache task
    inputs:
      key: 'docker | "$(Agent.OS)" | cache'        ## A unique identifier for the cache
      path: $(Pipeline.Workspace)/docker           ## Path of the folder or file that you want to cache
      cacheHitVar: CACHE_RESTORED                  ## Variable to set to 'true' when the cache is restored
    
  - script: |
      docker load -i $(Pipeline.Workspace)/docker/cache.tar
    displayName: Docker restore
    condition: and(not(canceled()), eq(variables.CACHE_RESTORED, 'true'))

  - task: Docker@2
    displayName: 'Build Docker'
    inputs:
      command: 'build'
      repository: '$(repository)'
      dockerfile: '$(dockerfilePath)'
      tags: |
        '$(tag)'

  - script: |
      mkdir -p $(Pipeline.Workspace)/docker
      docker save -o $(Pipeline.Workspace)/docker/cache.tar $(repository):$(tag)
    displayName: Docker save
    condition: and(not(canceled()), not(failed()), ne(variables.CACHE_RESTORED, 'true'))
```

- **Example using docker buildx**:

    ```yaml
    steps:
      - task: Cache@2
        displayName: Cache Docker
        inputs:
          key: 'docker | "$(Agent.OS)" | mydockerimage | ./Dockerfile'
          path: $(Pipeline.Workspace)/docker_image_cache
          restoreKeys: |
            docker | "$(Agent.OS)" | mydockerimage
    
      - script: |
          docker buildx create --name builder --driver docker-container --use
          docker buildx build \
            --cache-from=type=local,src=$(Pipeline.Workspace)/docker_image_cache \
            --cache-to=type=local,dest=$(Pipeline.Workspace)/docker_image_cache,mode=max \
            --file ./Dockerfile \
            --output=type=docker,name=mydockerimage \
            .
        displayName: docker buildx
        env:
          DOCKER_BUILDKIT: 1
    ```

### [Go](#tab/golang)

For Golang projects, you can specify the packages to be downloaded in the *go.mod* file. If your `GOCACHE` variable isn't already set, set it to where you want the cache to be downloaded.

**Example**:

```yaml
variables:
  GO_CACHE_DIR: $(Pipeline.Workspace)/.cache/go-build/

steps:
- task: Cache@2
  inputs:
    key: 'go | "$(Agent.OS)" | go.mod'
    restoreKeys: | 
      go | "$(Agent.OS)"
    path: $(GO_CACHE_DIR)
  displayName: Cache GO packages

```

### [Gradle](#tab/gradle)

Using Gradle's [built-in caching support](https://docs.gradle.org/current/userguide/build_cache.html) can have a significant impact on build time. To enable the build cache, set the `GRADLE_USER_HOME` environment variable to a path under `$(Pipeline.Workspace)` and either run your build with `--build-cache` or add `org.gradle.caching=true` to your `gradle.properties` file.

**Example**:

```yaml
variables:
  GRADLE_USER_HOME: $(Pipeline.Workspace)/.gradle

steps:
- task: Cache@2
  inputs:
    key: 'gradle | "$(Agent.OS)" | **/build.gradle.kts' # Swap build.gradle.kts for build.gradle when using Groovy
    restoreKeys: |                                      # The fallback keys if the primary key fails (Optional)
      gradle | "$(Agent.OS)"
      gradle
    path: $(GRADLE_USER_HOME)
  displayName: Configure gradle caching

- task: Gradle@2
  inputs:
    gradleWrapperFile: 'gradlew'
    tasks: 'build'
    options: '--build-cache'
  displayName: Build

- script: |   
    # stop the Gradle daemon to ensure no files are left open (impacting the save cache operation later)
    ./gradlew --stop    
  displayName: Gradlew stop
```

> [!NOTE]
> Caches are immutable. Once a cache with a particular key is created for a specific scope (such as a branch), it can't be updated. This means that if you use a fixed key value, all subsequent builds for the same branch won't be able to update the cache—even if the cache contents have changed. If you use a fixed key, be sure to specify the `restoreKeys` input as a fallback option.

### [Maven](#tab/maven)

Maven uses a local repository to store downloaded dependencies and built artifacts. To enable caching, set the `maven.repo.local` option to a path under `$(Pipeline.Workspace)` and cache this folder.

**Example**:

```yaml
variables:
  MAVEN_CACHE_FOLDER: $(Pipeline.Workspace)/.m2/repository
  MAVEN_OPTS: '-Dmaven.repo.local=$(MAVEN_CACHE_FOLDER)'

steps:
- task: Cache@2
  inputs:
    key: 'maven | "$(Agent.OS)" | **/pom.xml'
    restoreKeys: |
      maven | "$(Agent.OS)"
      maven
    path: $(MAVEN_CACHE_FOLDER)
  displayName: Cache Maven local repo

- script: mvn install -B -e
```

If you're using a [Maven task](/azure/devops/pipelines/tasks/reference/maven-v3), make sure to also pass the `MAVEN_OPTS` variable because it gets overwritten otherwise:

```yaml
- task: Maven@4
  inputs:
    mavenPomFile: 'pom.xml'
    mavenOptions: '-Xmx3072m $(MAVEN_OPTS)'
```

### [.NET/NuGet](#tab/nuget)

If you use `PackageReferences` to manage NuGet dependencies directly within your project file and have a `packages.lock.json` file, you can enable caching by setting the `NUGET_PACKAGES` environment variable to a path under `$(UserProfile)` and caching this directory. See [Package reference in project files](/nuget/consume-packages/package-references-in-project-files) for more details on how to lock dependencies.

If you want to use multiple *packages.lock.json*, you can still use the following example without making any changes. The content of all the *packages.lock.json* files will be hashed and if one of the files is changed, a new cache key is generated.

**Example**:

```yaml
variables:
  NUGET_PACKAGES: $(Pipeline.Workspace)/.nuget/packages

steps:
- task: Cache@2
  inputs:
    key: 'nuget | "$(Agent.OS)" | $(Build.SourcesDirectory)/**/packages.lock.json'
    restoreKeys: |
       nuget | "$(Agent.OS)"
       nuget
    path: $(NUGET_PACKAGES)
  displayName: Cache NuGet packages
```

This approach is also valid for .NET Core projects if your project uses *packages.lock.json* to lock package versions. You can enable this by setting `RestorePackagesWithLockFile` to `True` in your *Csproj* file, or by using the following command: `dotnet restore --use-lock-file`.

### [Npm](#tab/npm)

There are different ways to enable caching in a Node.js project, but the recommended approach is to cache npm's [shared cache directory](https://docs.npmjs.com/misc/config#cache). This directory is managed by npm and contains a cached version of all downloaded modules. During installation, npm checks this directory first (by default), which can reduce or eliminate network calls to the public npm registry or a private registry.

Because the default path to npm's shared cache directory [varies across platforms](https://docs.npmjs.com/misc/config#cache), it's recommended to override the `npm_config_cache` environment variable and set it to a path under `$(Pipeline.Workspace)`. This also ensures the cache is accessible from both container and noncontainer jobs.

**Example**:

```yaml
variables:
  npm_config_cache: $(Pipeline.Workspace)/.npm

steps:
- task: Cache@2
  inputs:
    key: 'npm | "$(Agent.OS)" | package-lock.json'
    restoreKeys: |
       npm | "$(Agent.OS)"
    path: $(npm_config_cache)
  displayName: Cache npm
```

If your project doesn't have a `package-lock.json` file, reference the `package.json` file in the cache key input instead.

> [!TIP]
> Since `npm ci` deletes the `node_modules` folder to ensure a consistent and repeatable set of modules, avoid caching `node_modules` when using `npm ci`.

### [Yarn](#tab/yarn)

Like npm, Yarn offers several ways to cache installed packages.  The recommended approach is to cache Yarn's [shared cache folder](https://yarnpkg.com/lang/en/docs/cli/cache/). This directory is managed by Yarn and stores cached versions of all downloaded packages. During installation, Yarn checks this directory first (by default), which can reduce or even eliminate network calls to public or private registries.

**Example**:

```yaml
variables:
  YARN_CACHE_FOLDER: $(Pipeline.Workspace)/.yarn

steps:
- task: Cache@2
  inputs:
    key: 'yarn | "$(Agent.OS)" | yarn.lock'
    restoreKeys: |
       yarn | "$(Agent.OS)"
       yarn
    path: $(YARN_CACHE_FOLDER)
  displayName: Cache Yarn packages

- script: yarn --frozen-lockfile
```

### [Python/Anaconda](#tab/python)

Set up your pipeline caching with Anaconda environments:

### Example

```yaml
variables:
  CONDA_CACHE_DIR: /usr/share/miniconda/envs

# Add conda to system path
steps:
- script: echo "##vso[task.prependpath]$CONDA/bin"
  displayName: Add conda to PATH

- bash: |
    sudo chown -R $(whoami):$(id -ng) $(CONDA_CACHE_DIR)
  displayName: Fix CONDA_CACHE_DIR directory permissions

- task: Cache@2
  displayName: Use cached Anaconda environment
  inputs:
    key: 'conda | "$(Agent.OS)" | environment.yml'
    restoreKeys: | 
      python | "$(Agent.OS)"
      python
    path: $(CONDA_CACHE_DIR)
    cacheHitVar: CONDA_CACHE_RESTORED

- script: conda env create --quiet --file environment.yml
  displayName: Create Anaconda environment
  condition: eq(variables.CONDA_CACHE_RESTORED, 'false')
```

- **Windows**

    ```yaml
    - task: Cache@2
      displayName: Cache Anaconda
      inputs:
        key: 'conda | "$(Agent.OS)" | environment.yml'
        restoreKeys: | 
          python | "$(Agent.OS)"
          python
        path: $(CONDA)/envs
        cacheHitVar: CONDA_CACHE_RESTORED
    
    - script: conda env create --quiet --file environment.yml
      displayName: Create environment
      condition: eq(variables.CONDA_CACHE_RESTORED, 'false')
    ```

### [PHP/Composer](#tab/php)

For PHP projects using Composer, override the `COMPOSER_CACHE_DIR` [environment variable](https://getcomposer.org/doc/06-config.md#cache-dir) used by Composer.

**Example**:

```yaml
variables:
  COMPOSER_CACHE_DIR: $(Pipeline.Workspace)/.composer

steps:
- task: Cache@2
  inputs:
    key: 'composer | "$(Agent.OS)" | composer.lock'
    restoreKeys: |
      composer | "$(Agent.OS)"
      composer
    path: $(COMPOSER_CACHE_DIR)
  displayName: Cache composer

- script: composer install
```

---

## Known issues and feedback

If you're having trouble setting up caching in your pipeline, check the list of [open issues](https://github.com/microsoft/azure-pipelines-tasks/labels/Area%3A%20PipelineCaching) in the :::no-loc text="microsoft/azure-pipelines-tasks"::: repo. If you don't see your issue listed, [create](https://github.com/microsoft/azure-pipelines-tasks/issues/new?labels=Area%3A%20PipelineCaching) a new one and provide the necessary information about your scenario.

## Q&A

#### Q: Can I clear a cache?

A: Clearing a cache is not supported. However, you can avoid hits on existing caches by adding a string literal (such as `version2`) to your cache key. For example, change the following cache key from this:

```yaml
key: 'yarn | "$(Agent.OS)" | yarn.lock'
```

To this:

```yaml
key: 'version2 | yarn | "$(Agent.OS)" | yarn.lock'
```

#### Q: When does a cache expire?

A: Caches expire after seven days of no activity.

#### Q: When does the cache get uploaded?

A:  A cache is created from your specified `path` and uploaded after the last step of the job. See the [example](#configure-the-cache-task) for more details.

#### Q: Is there a limit on the size of a cache?

A: There's no enforced limit on the size of individual caches or the total cache size within an organization.

## Related content

- [Publish and download pipeline artifacts](../artifacts/pipeline-artifacts.md)

- [Secure your Azure Pipelines](../security/overview.md)

- [Manage permissions](../policies/permissions.md)