---
title: Pipeline caching
description: Improve pipeline performance by caching files, like dependencies, between runs
ms.assetid: B81F0BEC-00AD-431A-803E-EDD2C5DF5F97
ms.prod: devops
ms.technology: devops-cicd
ms.topic: conceptual
ms.manager: amullans
ms.author: wismythe
author: willsmythe
ms.date: 07/05/2019
monikerRange: 'azure-devops'
---

# Pipeline caching (preview)

> [!NOTE]
> Pipeline caching is in preview and should not be used in production pipelines. Please [report any issues](#known-issues-and-feedback) you experience, including problems determining the appropriate settings for your scenario.

Pipeline caching can help reduce build time by allowing the outputs or downloaded dependencies from one run to be reused in later runs, thereby reducing (or avoid) the cost to recreate or redownload the same files again. Caching is especially useful in scenarios where the same dependencies are downloaded over and over at the start of each run. This is often a time consuming process involving hundreds or thousands of network calls.

Caching can be effective at improving build time provided the time to restore and save the cache is less than the time to produce the output again from scratch. Because of this, caching may not be effective in all scenarios and may actually have a negative impact on build time.

### Comparison with artifacts

Pipeline caching and [pipeline artifacts](../artifacts/pipeline-artifacts.md) perform similar functions, but are designed for different scenarios and should not be used interchangeably. In general:

* Use pipeline artifacts when you need to pass specific files from one job to another, and the second job will fail without them.

* Use pipeline caching when you want to improve build time by reusing files from the previous run. Not having these files will not impact the job's ability to run.

## Get started

Caching is enabled via the `CacheBeta` pipeline task. This task works like any other task and is added to the `steps` section of a job. When a cache step is encountered during a run, the task will restore the cache based on the provided inputs. If no cache is found, the step completes and the next step in the job is run. After all steps have run and assuming a successful job status, a special "post" step is run for each cache step. This step is responsible for saving the cache.

> [!NOTE]
> Currently there is no way to control when (or if) the cache save operation occurs; it always runs if the job completed successfully.

### Task configuration

The Cache task has two required inputs: `key` and `path`. The key is the identifier of the cache you want to restore (or save). The path is the directory you want to restore the cache into and is also the directory that the cache is populated from when the cache is created.

> [!NOTE]
> Caches are immutable, meaning that once a cache is created, its contents cannot be changed.

The key is composed of one or more strings (like the name of the tool, name of the job, current OS name) or file paths separated by a newline. For file paths, a hash is produced from the contents of the file. Using file paths in your cache key is useful when your project has a file that uniquely identifies a set of dependencies to be cached, like `package-lock.json`, `yarn.lock`, `Gemfile.lock`, or `Pipfile.lock`.

> [!NOTE]
> Currently file paths in the cache key cannot contain wildcard characters, but we are working to add support for glob-style patterns.

Here is an example showing how to cache dependencies installed by Yarn:

```yaml
variables:
  YARN_CACHE_FOLDER: $(Pipeline.Workspace)/.yarn

steps:
- task: CacheBeta@0
  inputs:
    key: |
      yarn
      $(Agent.OS)
      $(Build.SourcesDirectory)/yarn.lock
    path: $(YARN_CACHE_FOLDER)
  displayName: Cache Yarn packages

- script: yarn --frozen-lockfile
```

In this example, the cache key contains three parts: a static string ("yarn"), the OS the job is running on since this cache is unique per operating system, and the hash of the `yarn.lock` file which uniquely identifies the set of dependencies in the cache.

On the first run after the task is added, the cache step will report a "cache miss" since the cache identified by this key does not exist. After the last step, a cache will be created from the files in `$(Pipeline.Workspace)/.cache/yarn` and uploaded. On the next run, the cache step will report a "cache hit" and the contents of the cache will be downloaded and restored.

## Cache isolation and security

To ensure isolation between caches from different pipelines and different branches, every cache belongs to a logical container called a scope. Scopes provide a security boundary that ensures a job from one pipeline cannot access the caches from a different pipeline, and a job building a PR has read access to the caches for the PR's target branch (for the same pipeline), but cannot write (create) caches in the target branch's scope.

> [!NOTE]
> Because caches are scoped to a project, pipeline, and branch, there is no need to include project, pipeline, or branch identifiers in your cache key.

When a cache step is encountered during a run, the cache identified by the key is requested from the server. The server then looks for a cache with this key from the scopes visible to the job, and returns the cache (if available). On cache save (at the end of the job), a cache is written to the scope representing the pipeline and branch. See below for more details.

### CI, manual, and scheduled runs

| Scope | Read | Write |
|--------|------|-------|
| Source branch | Yes | Yes |

### Pull request runs

| Scope | Read | Write |
|--------|------|-------|
| Source branch | Yes | No |
| Target branch | Yes | No |
| Intermediate branch (e.g. `refs/pull/1/merge`) | Yes | Yes |

### Pull request fork runs

| Branch | Read | Write |
|--------|------|-------|
| Target branch | Yes | No |
| Intermediate branch (e.g. `refs/pull/1/merge`) | Yes | Yes |

## Conditioning on cache restoration

In some scenarios, the successful restoration of the cache should cause a different set of steps to be run. For example, a step that installs dependencies can be skipped if the cache was restored. This is possible using the `cacheHitVar` task input. Setting this input to the name of an environment variable will cause the variable to be set to `true` when there is a cache hit, otherwise it will be set to `false`. This variable can then be referenced in a [step condition](../process/conditions.md) or from within a script.

In the following example, the `install-deps.sh` step is skipped when the cache is restored:

```yaml
steps:
- task: CacheBeta@0
  inputs:
    key: mykey
    path: $(Pipeline.Workspace)/mycache
    cacheHitVar: CACHE_RESTORED

- script: install-deps.sh
  condition: ne(variables.CACHE_RESTORED, 'true')

- script: build.sh
```

## Bundler

For Ruby projects using Bundler, override the `BUNDLE_PATH` environment variable used by Bundler to set the [path Bundler](https://bundler.io/v0.9/bundle_install.html) will look for Gems in.

### Example

```yaml
variables:
  BUNDLE_PATH: $(Pipeline.Workspace)/.cache/bundle

steps:
- task: CacheBeta@0
  inputs:
    key: |
      gems
      $(Agent.OS)
      $(Build.SourcesDirectory)/my.gemspec
    path: $(BUNDLE_PATH)
- script: bundle install
```

## ccache (C/C++)

[ccache](https://ccache.dev/) is a compiler cache for C/C++. To use ccache in your pipeline make sure `ccache` is installed, and optionally added to your `PATH` (see [ccache run modes](https://ccache.dev/manual/3.7.1.html#_run_modes)). Set the `CCACHE_DIR` environment variable to a path under `$(Pipeline.Workspace)` and cache this directory.

### Example


```yaml
variables:
  CCACHE_DIR: $(Pipeline.Workspace)/ccache

steps:
- bash: |
    sudo apt-get install ccache -y    
    echo "##vso[task.prependpath]/usr/lib/ccache"
  displayName: Install ccache and use linked version of gcc, cc, etc

- task: CacheBeta@0
  inputs:
    key: $(Agent.OS)
    path: $(CCACHE_DIR)
  displayName: ccache
```

> [!NOTE]
> In this example, the key is a fixed value (the OS name) and because caches are immutable, once a cache with this key is created for a particular scope (branch), the cache cannot be updated. This means subsequent builds for the same branch will not be able to update the cache even if the cache's contents have changed. This problem will be addressed in an upcoming feature:  [10842: Enable fallback keys in Pipeline Caching](https://github.com/microsoft/azure-pipelines-tasks/issues/10842)

See [ccache configuration settings](
https://ccache.dev/manual/latest.html#_configuration_settings) for more options, including settings to control compression level.

## Gradle

Using Gradle's [built-in caching support](https://docs.gradle.org/current/userguide/build_cache.html) can have a significant impact on build time. To enable, set the `GRADLE_USER_HOME` environment variable to a path under `$(Pipeline.Workspace)` and either pass `--build-cache` on the command line or set `org.gradle.caching=true` in your `gradle.properties` file.

### Example

```yaml
variables:
  GRADLE_USER_HOME: $(Pipeline.Workspace)/.gradle

steps:
- task: CacheBeta@0
  inputs:
    key: $(Agent.OS)
    path: $(GRADLE_USER_HOME)
  displayName: Gradle build cache

- script: |
    ./gradlew --build-cache build    
    # stop the Gradle daemon to ensure no files are left open (impacting the save cache operation later)
    ./gradlew --stop    
  displayName: Build
```

> [!NOTE]
> In this example, the key is a fixed value (the OS name) and because caches are immutable, once a cache with this key is created for a particular scope (branch), the cache cannot be updated. This means subsequent builds for the same branch will not be able to update the cache even if the cache's contents have changed. This problem will be addressed in an upcoming feature:  [10842: Enable fallback keys in Pipeline Caching](https://github.com/microsoft/azure-pipelines-tasks/issues/10842).

## Maven

Maven has a local repository where it stores downloads and built artifacts. To enable, set the `maven.repo.local` option to a path under `$(Pipeline.Workspace)` and cache this folder.

### Example

```yaml
variables:
  MAVEN_CACHE_FOLDER: $(Pipeline.Workspace)/.m2/repository
  MAVEN_OPTS: '-Dmaven.repo.local=$(MAVEN_CACHE_FOLDER)'

steps:
- task: CacheBeta@0
  inputs:
    key: $(Build.SourcesDirectory)/pom.xml
    path: $(MAVEN_CACHE_FOLDER)
  displayName: Cache Maven local repo

- script: mvn install -B -e
```

## npm

There are different ways to enable caching in a Node.js project, but the recommended way is to cache npm's [shared cache directory](https://docs.npmjs.com/misc/config#cache). This directory is managed by npm and contains a cached version of all downloaded modules. During install, npm checks this directory first (by default) for modules which can reduce or eliminate network calls to the public npm registry or to a private registry.

Because the default path to npm's shared cache directory is [not the same across all platforms](https://docs.npmjs.com/misc/config#cache), it is recommended to override the `npm_config_cache` environment variable to a path under `$(Pipeline.Workspace)`. This also ensures the cache is accessible from container and non-container jobs.

### Example

```yaml
variables:
  npm_config_cache: $(Pipeline.Workspace)/.npm

steps:
- task: CacheBeta@0
  inputs:
    key: $(Build.SourcesDirectory)/package-lock.json
    path: $(npm_config_cache)
  displayName: Cache npm

- script: npm ci
```

If your project does not have a `package-lock.json` file, reference the `package.json` file in the cache key input instead.

> [!NOTE]
> The `npm ci` command deletes the `node_modules` folder to ensure a consistent, repeatable set of modules is used. Therefore you should avoid caching `node_modules` when using `npm ci`.

## Yarn

Like with npm, there are different ways to cache packages installed with Yarn. The recommended way is to cache Yarn's [shared cache folder](https://yarnpkg.com/lang/en/docs/cli/cache/). This directory is managed by Yarn and contains a cached version of all downloaded packages. During install, Yarn checks this directory first (by default) for modules, which can reduce or eliminate network calls to public or private registries.

### Example

```yaml
variables:
  YARN_CACHE_FOLDER: $(Pipeline.Workspace)/.yarn

steps:
- task: CacheBeta@0
  inputs:
    key: |
      yarn
      $(Agent.OS)
      $(Build.SourcesDirectory)/yarn.lock
    path: $(YARN_CACHE_FOLDER)
  displayName: Cache Yarn packages

- script: yarn --frozen-lockfile
```

## Known issues and feedback

If you experience problems enabling caching for your project, first check the list of [pipeline caching issues](https://github.com/microsoft/azure-pipelines-tasks/labels/Area%3A%20PipelineCaching) in the microsoft/azure-pipelines-tasks repo. If you don't see your issue listed, [create a new issue](https://github.com/microsoft/azure-pipelines-tasks/issues/new?labels=Area%3A%20PipelineCaching).

### Top feature requests

* [10859 - Support wildcard/glob file patterns in cache key](https://github.com/microsoft/azure-pipelines-tasks/issues/10859)
* [10842 - Enable fallback keys](https://github.com/microsoft/azure-pipelines-tasks/issues/10842)
* [10841 - Include file attributes](https://github.com/microsoft/azure-pipelines-tasks/issues/10841)

### Top bugs

* [10858 - Relative file paths in cache key should be resolved against $(System.DefaultWorkingDirectory)](https://github.com/microsoft/azure-pipelines-tasks/issues/10858)

