---
title: Pipeline caching
description: Improve pipeline performance by caching files, like dependencies, between runs
ms.assetid: B81F0BEC-00AD-431A-803E-EDD2C5DF5F97
ms.topic: conceptual
ms.manager: adandree
ms.date: 09/16/2021
monikerRange: azure-devops
---

# Pipeline caching

Pipeline caching can help reduce build time by allowing the outputs or downloaded dependencies from one run to be reused in later runs, thereby reducing or avoiding the cost to recreate or redownload the same files again. Caching is especially useful in scenarios where the same dependencies are downloaded over and over at the start of each run. This is often a time consuming process involving hundreds or thousands of network calls.

Caching can be effective at improving build time provided the time to restore and save the cache is less than the time to produce the output again from scratch. Because of this, caching may not be effective in all scenarios and may actually have a negative impact on build time.

Caching is currently supported in CI and deployment jobs, but not classic release jobs.

### When to use artifacts versus caching

Pipeline caching and [pipeline artifacts](../artifacts/pipeline-artifacts.md) perform similar functions but are designed for different scenarios and should not be used interchangeably. In general:

* **Use pipeline artifacts** when you need to take specific files produced in one job and share them with other jobs (and these other jobs will likely fail without them).

* **Use pipeline caching** when you want to improve build time by reusing files from previous runs (and not having these files will not impact the job's ability to run).

> [!NOTE]
> Caching is currently free, and caches are stored in Azure blob storage.

## Use Cache task

Caching is added to a pipeline using the `Cache` pipeline task. This task works like any other task and is added to the `steps` section of a job. 

When a cache step is encountered during a run, the task will restore the cache based on the provided inputs. If no cache is found, the step completes and the next step in the job is run. After all steps in the job have run and assuming a successful job status, a special "save cache" step is run for each "restore cache" step that was not skipped. This step is responsible for saving the cache.   

> [!NOTE]
> Caches are immutable, meaning that once a cache is created, its contents cannot be changed.

### Configure Cache task

The `Cache` task has two required inputs: `key` and `path`. 

#### Path input

`path` the path of the folder to cache. Can be an absolute or a relative path. Relative paths are resolved against `$(System.DefaultWorkingDirectory)`. You can use predefined variables however wildcards are not supported.

#### Key input

`key` should be set to the identifier for the cache you want to restore or save. Keys are composed of a combination of string values, file paths, or file patterns, where each segment is separated by a `|` character.

* **Strings**: <br>
fixed value (like the name of the cache or a tool name) or taken from an environment variable (like the current OS or current job name)

* **File paths**: <br>
path to a specific file whose contents will be hashed. This file must exist at the time the task is run. Keep in mind that *any* key segment that "looks like a file path" will be treated like a file path. In particular, this includes segments containing a `.`. This could result in the task failing when this "file" does not exist. 
  > [!TIP]
  > To avoid a path-like string segment from being treated like a file path, wrap it with double quotes, for example: `"my.key" | $(Agent.OS) | key.file`

* **File patterns**: <br>
comma-separated list of glob-style wildcard pattern that must match at least one file. For example:
  * `**/yarn.lock`: all yarn.lock files under the sources directory
  * `*/asset.json, !bin/**`: all asset.json files located in a directory under the sources directory, except under the bin directory

The contents of any file identified by a file path or file pattern is hashed to produce a dynamic cache key. This is useful when your project has file(s) that uniquely identify what is being cached. For example, files like `package-lock.json`, `yarn.lock`, `Gemfile.lock`, or `Pipfile.lock` are commonly referenced in a cache key since they all represent a unique set of dependencies.

Relative file paths or file patterns are resolved against `$(System.DefaultWorkingDirectory)`.

**Example**:

Here is an example showing how to cache dependencies installed by Yarn:

```yaml
variables:
  YARN_CACHE_FOLDER: $(Pipeline.Workspace)/.yarn

steps:
- task: Cache@2
  inputs:
    key: '"yarn" | "$(Agent.OS)" | yarn.lock'
    restoreKeys: |
       yarn | "$(Agent.OS)"
    path: $(YARN_CACHE_FOLDER)
  displayName: Cache Yarn packages

- script: yarn --frozen-lockfile
```

In this example, the cache key contains three parts: a static string ("yarn"), the OS the job is running on since this cache is unique per operating system, and the hash of the `yarn.lock` file that uniquely identifies the set of dependencies in the cache.

On the first run after the task is added, the cache step will report a "cache miss" since the cache identified by this key does not exist. After the last step, a cache will be created from the files in `$(Pipeline.Workspace)/.yarn` and uploaded. On the next run, the cache step will report a "cache hit" and the contents of the cache will be downloaded and restored.

#### Restore keys

`restoreKeys` can be used if one wants to query against multiple exact keys or key prefixes. This is used to fallback to another key in the case that a `key` does not yield a hit. A restore key will search for a key by prefix and yield the latest created cache entry as a result. This is useful if the pipeline is unable to find an exact match but wants to use a partial cache hit instead. To insert multiple restore keys, simply delimit them by using a new line to indicate the restore key (see the example for more details). The order of which restore keys will be tried against will be from top to bottom.

#### Required software on self-hosted agent

| Archive software / Platform | Windows | Linux | Mac |
|--------|-------- |------ |-------|
|GNU Tar | Required| Required | No |
|BSD Tar | No | No | Required |
|7-Zip    | Recommended | No | No |

The above executables need to be in a folder listed in the PATH environment variable.
Please note that the hosted agents come with the software included, this is only applicable for self-hosted agents. 

**Example**:

Here is an example on how to use restore keys by Yarn:

```yaml
variables:
  YARN_CACHE_FOLDER: $(Pipeline.Workspace)/.yarn

steps:
- task: Cache@2
  inputs:
    key: '"yarn" | "$(Agent.OS)" | yarn.lock'
    restoreKeys: |
       yarn | "$(Agent.OS)"
    path: $(YARN_CACHE_FOLDER)
  displayName: Cache Yarn packages

- script: yarn --frozen-lockfile
```

In this example, the cache task will attempt to find if the key exists in the cache. If the key does not exist in the cache, it will try to use the first restore key `yarn | $(Agent.OS)`.
This will attempt to search for all keys that either exactly match that key or has that key as a prefix. A prefix hit can happen if there was a different `yarn.lock` hash segment.
For example, if the following key `yarn | $(Agent.OS) | old-yarn.lock` was in the cache where the old `yarn.lock` yielded a different hash than `yarn.lock`, the restore key will yield a partial hit.
If there is a miss on the first restore key, it will then use the next restore key `yarn` which will try to find any key that starts with `yarn`. For prefix hits, the result will yield the most recently created cache key as the result.

> [!NOTE]
> A pipeline can have one or more caching task(s). There is no limit on the caching storage capacity, and jobs and tasks from the same pipeline can access and share the same cache.

## Cache isolation and security

To ensure isolation between caches from different pipelines and different branches, every cache belongs to a logical container called a scope. Scopes provide a security boundary that ensures a job from one pipeline cannot access the caches from a different pipeline, and a job building a PR has read access to the caches for the PR's target branch (for the same pipeline), but cannot write (create) caches in the target branch's scope.

When a cache step is encountered during a run, the cache identified by the key is requested from the server. The server then looks for a cache with this key from the scopes visible to the job, and returns the cache (if available). On cache save (at the end of the job), a cache is written to the scope representing the pipeline and branch. See below for more details.

### CI, manual, and scheduled runs

| Scope | Read | Write |
|--------|------|-------|
| Source branch | Yes | Yes |
| main branch | Yes | No |

### Pull request runs

| Scope | Read | Write |
|--------|------|-------|
| Source branch | Yes | No |
| Target branch | Yes | No |
| Intermediate branch (such as `refs/pull/1/merge`) | Yes | Yes |
| main branch | Yes | No |

### Pull request fork runs

| Branch | Read | Write |
|--------|------|-------|
| Target branch | Yes | No |
| Intermediate branch (such as `refs/pull/1/merge`) | Yes | Yes |
| main branch | Yes | No |

> [!TIP]
> Because caches are already scoped to a project, pipeline, and branch, there is no need to include any project, pipeline, or branch identifiers in the cache key.

## Conditioning on cache restoration

In some scenarios, the successful restoration of the cache should cause a different set of steps to be run. For example, a step that installs dependencies can be skipped if the cache was restored. This is possible using the `cacheHitVar` task input. Setting this input to the name of an environment variable will cause the variable to be set to `true` when there is a cache hit, `inexact` on a restore key cache hit, otherwise it will be set to `false`. This variable can then be referenced in a [step condition](../process/conditions.md) or from within a script.

In the following example, the `install-deps.sh` step is skipped when the cache is restored:

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

## Bundler

For Ruby projects using Bundler, override the `BUNDLE_PATH` environment variable used by Bundler to set the [path Bundler](https://bundler.io/v0.9/bundle_install.html) will look for Gems in.

**Example**:

```yaml
variables:
  BUNDLE_PATH: $(Pipeline.Workspace)/.bundle

steps:
- task: Cache@2
  inputs:
    key: 'gems | "$(Agent.OS)" | my.gemspec'
    restoreKeys: | 
      gems | "$(Agent.OS)"
      gems
    path: $(BUNDLE_PATH)
  displayName: Cache gems

- script: bundle install
```

## Ccache (C/C++)

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
  inputs:
    key: 'ccache | "$(Agent.OS)"'
    path: $(CCACHE_DIR)
    restoreKeys: | 
      ccache | "$(Agent.OS)"
  displayName: ccache
```

See [Ccache configuration settings](https://ccache.dev/manual/latest.html#_configuration_settings) for more details.

## Docker images

Caching Docker images dramatically reduces the time it takes to run your pipeline.

```yaml
pool:
  vmImage: 'Ubuntu-16.04'
steps:
  - task: Cache@2
    displayName: Cache task
    inputs:
      key: 'docker | "$(Agent.OS)" | cache'
      path: $(Pipeline.Workspace)/docker
      cacheHitVar: CACHE_RESTORED                #Variable to set to 'true' when the cache is restored
    
  - script: |
      docker load -i $(Pipeline.Workspace)/docker/cache.tar
    displayName: Docker restore
    condition: and(not(canceled()), eq(variables.CACHE_RESTORED, 'true'))

  - script: |
      mkdir -p $(Pipeline.Workspace)/docker
      docker save -o $(Pipeline.Workspace)/docker/cache.tar cache
    displayName: Docker save
    condition: and(not(canceled()), or(failed(), ne(variables.CACHE_RESTORED, 'true')))
```

- **key**: (required) - a unique identifier for the cache.
- **path**: (required) - path of the folder or file that you want to cache.

## Golang

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

## Gradle

Using Gradle's [built-in caching support](https://docs.gradle.org/current/userguide/build_cache.html) can have a significant impact on build time. To enable the build cache, set the `GRADLE_USER_HOME` environment variable to a path under `$(Pipeline.Workspace)` and either run your build with `--build-cache` or add `org.gradle.caching=true` to your `gradle.properties` file.

**Example**:

```yaml
variables:
  GRADLE_USER_HOME: $(Pipeline.Workspace)/.gradle

steps:
- task: Cache@2
  inputs:
    key: 'gradle | "$(Agent.OS)" | **/build.gradle.kts' # Swap build.gradle.kts for build.gradle when using Groovy
    restoreKeys: |
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
  displayName: Build
```

- **restoreKeys**: The fallback keys if the primary key fails (Optional)

> [!NOTE]
> Caches are immutable, once a cache with a particular key is created for a specific scope (branch), the cache cannot be updated. This means that if the key is a fixed value, all subsequent builds for the same branch will not be able to update the cache even if the cache's contents have changed. If you want to use a fixed key value, you must use the `restoreKeys` argument as a fallback option.

## Maven

Maven has a local repository where it stores downloads and built artifacts. To enable, set the `maven.repo.local` option to a path under `$(Pipeline.Workspace)` and cache this folder.

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

If you are using a [Maven task](../tasks/build/maven.md), make sure to also pass the `MAVEN_OPTS` variable because it gets overwritten otherwise:

```yaml
- task: Maven@3
  inputs:
    mavenPomFile: 'pom.xml'
    mavenOptions: '-Xmx3072m $(MAVEN_OPTS)'
```

## .NET/NuGet

If you use `PackageReferences` to manage NuGet dependencies directly within your project file and have `packages.lock.json` file(s), you can enable caching by setting the `NUGET_PACKAGES` environment variable to a path under `$(UserProfile)` and caching this directory.

**Example**:

```yaml
variables:
  NUGET_PACKAGES: $(Pipeline.Workspace)/.nuget/packages

steps:
- task: Cache@2
  inputs:
    key: 'nuget | "$(Agent.OS)" | $(Build.SourcesDirectory)/packages.lock.json'
    restoreKeys: |
       nuget | "$(Agent.OS)"
    path: $(NUGET_PACKAGES)
  displayName: Cache NuGet packages
```

> [!TIP]
> Environment variables always override any settings in the NuGet.Config file. If your pipeline failed with the error: `Information, There is a cache miss.`, you must create a pipeline variable for `NUGET_PACKAGES` to point to the new local path on the agent (exp d:\a\1\). Your pipeline should pick up the changes then and continue the task successfully.

In the above example, the `$(Build.SourcesDirectory)` points to your project's generated lock file. See [Package reference in project files](/nuget/consume-packages/package-references-in-project-files) for more details on how to enable lock file creation.

## Node.js/npm

There are different ways to enable caching in a Node.js project, but the recommended way is to cache npm's [shared cache directory](https://docs.npmjs.com/misc/config#cache). This directory is managed by npm and contains a cached version of all downloaded modules. During install, npm checks this directory first (by default) for modules that can reduce or eliminate network calls to the public npm registry or to a private registry.

Because the default path to npm's shared cache directory is [not the same across all platforms](https://docs.npmjs.com/misc/config#cache), it is recommended to override the `npm_config_cache` environment variable to a path under `$(Pipeline.Workspace)`. This also ensures the cache is accessible from container and non-container jobs.

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

- script: npm ci
```

If your project does not have a `package-lock.json` file, reference the `package.json` file in the cache key input instead.

> [!TIP]
> Because `npm ci` deletes the `node_modules` folder to ensure that a consistent, repeatable set of modules is used, you should avoid caching `node_modules` when calling `npm ci`.

## Node.js/Yarn

Like with npm, there are different ways to cache packages installed with Yarn. The recommended way is to cache Yarn's [shared cache folder](https://yarnpkg.com/lang/en/docs/cli/cache/). This directory is managed by Yarn and contains a cached version of all downloaded packages. During install, Yarn checks this directory first (by default) for modules, which can reduce or eliminate network calls to public or private registries.

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
    path: $(YARN_CACHE_FOLDER)
  displayName: Cache Yarn packages

- script: yarn --frozen-lockfile
```

## Python/pip

For Python projects that use pip or Poetry, override the `PIP_CACHE_DIR` environment variable. If you use Poetry, in the `key` field, replace `requirements.txt` with `poetry.lock`.

### Example

```yaml
variables:
  PIP_CACHE_DIR: $(Pipeline.Workspace)/.pip

steps:
- task: Cache@2
  inputs:
    key: 'python | "$(Agent.OS)" | requirements.txt'
    restoreKeys: | 
      python | "$(Agent.OS)"
      python
    path: $(PIP_CACHE_DIR)
  displayName: Cache pip packages

- script: pip install -r requirements.txt
```

## Python/Pipenv

For Python projects that use Pipenv, override the `PIPENV_CACHE_DIR` environment variable.

### Example

```yaml
variables:
  PIPENV_CACHE_DIR: $(Pipeline.Workspace)/.pipenv

steps:
- task: Cache@2
  inputs:
    key: 'python | "$(Agent.OS)" | Pipfile.lock'
    restoreKeys: | 
      python | "$(Agent.OS)"
      python
    path: $(PIPENV_CACHE_DIR)
  displayName: Cache pipenv packages

- script: pipenv install
```

## Python/Anaconda

Set up your pipeline caching with Anaconda environments 

### Example

```yaml
variables:
  CONDA_CACHE_DIR: $(Pipeline.Workspace)/.condarc

# Add conda to system path
steps:
- script: echo "##vso[task.prependpath]$CONDA/bin"
  displayName: Add conda to PATH

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

## PHP/Composer

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

## Known issues and feedback

If you are experiencing issues setting up caching for your pipeline, check the list of [open issues](https://github.com/microsoft/azure-pipelines-tasks/labels/Area%3A%20PipelineCaching) in the :::no-loc text="microsoft/azure-pipelines-tasks"::: repo. If you don't see your issue listed, [create](https://github.com/microsoft/azure-pipelines-tasks/issues/new?labels=Area%3A%20PipelineCaching) a new one and provide the necessary information about your scenario.

## Q&A

### Q: Can I clear a cache?

A: Clearing a cache is currently not supported. However you can add a string literal (such as `version2`) to your existing cache key to change the key in a way that avoids any hits on existing caches. For example, change the following cache key from this:

```yaml
key: 'yarn | "$(Agent.OS)" | yarn.lock'
```

to this:

```yaml
key: 'version2 | yarn | "$(Agent.OS)" | yarn.lock'
```

### Q: When does a cache expire?

A: Caches expire after seven days of no activity.

### Q: Is there a limit on the size of a cache?

A: There is no enforced limit on the size of individual caches or the total size of all caches in an organization.

