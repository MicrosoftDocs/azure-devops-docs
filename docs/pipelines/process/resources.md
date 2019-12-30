---
title: Resources
ms.custom: seodec18
description: How to use resources with YAML definitions.
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: b3ca305c-b587-4cb2-8ac5-52f6bd46c25e
ms.manager: mijacobs
ms.author: jukullam
author: juliakm
ms.date: 5/23/2019
monikerRange: azure-devops
---

# Resources in YAML

**Azure Pipelines**

Any external service that is consumed as part of your pipeline is a resource.

An example of a resource can be another CI/CD pipeline that produces artifacts (say Azure pipelines, Jenkins etc.), code repositories (GitHub, Azure Repos, Git), container image registries (ACR, Docker hub etc.) or package feeds (Azure Artifact feed, Artifactory package etc.).  

## Why resources?

Resources are defined at one place and can be consumed anywhere in your pipeline. Resources provide you the full traceability of the services consumed in your pipeline including the version, artifacts, associated commits and work-items. You can fully automate your DevOps workflow by subscribing to trigger events on your resources.

Resources in YAML represent sources of types pipelines, builds, repositories, containers and packages. 

#### [Schema](#tab/schema/)

```yaml
resources:
  pipelines: [ pipeline ]  
  builds: [ build ]
  repositories: [ repository ]
  containers: [ container ]
  packages: [ package ]
```

---

## Resources: `pipelines`

If you have an Azure Pipeline that produces artifacts, you can consume the artifacts by defining a `pipelines` resource. `pipelines` is a dedicated resource only for Azure Pipelines.

# [Schema](#tab/schema)

```yaml
resources:        # types: pipelines | builds | repositories | containers | packages
  pipelines:
  - pipeline: string  # identifier for the pipeline resource
    connection: string  # service connection for pipelines from other Azure DevOps organizations
    project: string # project for the source; optional for current project
    source: string  # source definition of the pipeline
    version: string  # the pipeline run number to pick the artifact, defaults to Latest pipeline successful across all stages
    branch: string  # branch to pick the artifact, optional; defaults to master branch
    tag: string # picks the artifacts on from the pipeline with given tag, optional; defaults to no tags
```

# [Example](#tab/example)

If you need to consume artifacts from another azure pipeline from the current project and if you don't require setting branch, version and tags etc., here is simple schema.

```yaml
resources:
  pipelines:
  - pipeline: SmartHotel
    source: SmartHotel-CI # name of the pipeline source definition
```

In case you need to consume a Pipeline from other project, then you need to include the project name while providing source name.

```yaml
resources:
  pipelines:
  - pipeline: SmartHotel
    project: DevOpsProject
    source: SmartHotel-CI
    branch: releases/M142
```

### `download` for pipelines

All artifacts from the current pipeline and from all `pipeline` resources are automatically downloaded and made available at the beginning of each of the `deployment` job. You can override this behavior: see [Pipeline Artifacts](./artifacts/pipeline-artifacts.md#downloading-artifacts) for more details. For regular 'job' artifacts are not automatically downloaded. You need to use `download` explicitly wherever needed.

```yaml
- job: deploy_windows_x86_agent
  steps:
  - download: SmartHotel   # pipeline resource identifier.
    artifact: WebTier1  # artifact to download, optional; defaults to all the artifacts from the resource.
    patterns: '**/*.zip'  # mini match pattern to download specific files, optional; defaults to all files.
```

Or to avoid downloading any of the artifacts at all:

```yaml
- download: none
```

Artifacts from the `pipeline` resource are downloaded to `$(PIPELINE.WORKSPACE)/<pipeline-identifier>/<artifact-identifier>` folder; see [artifact download location](#artifact-download-location) for more details.

## Resources: `builds`

If you have any external CI build system that produces artifacts, you can consume the artifacts by defining a `builds` resource. A `builds` resource can be any external CI systems like Jenkins, TeamCity, CircleCI etc.

# [Schema](#tab/schema)

```yaml
resources:        # types: pipelines | builds | repositories | containers | packages
  builds:
  - build: string   # identifier for the build resource
    type: string   # the type of your build service like Jenkins, circleCI etc.
    connection: string   # service connection for your build service.
    source: string   # source definition of the build
    version: string   # the build number to pick the artifact, defaults to Latest successful build
    branch: string   # branch to pick the artifact; defaults to master branch
```

`builds` is an extensible category. You can write an extension to consume artifacts from your builds service (CircleCI, TeamCity etc.) and introduce a new type of service to be part of `builds`. Currently, we are providing Jenkins resource as a type in `builds`.

# [Schema](#tab/example)

```yaml
resources:
  builds:
  - build: Spaceworkz
    type: Jenkins
    connection: MyJenkinsServer 
    source: SpaceworkzProj   # name of the jenkins source project
```

### `downloadBuild` for builds

You can consume artifacts from the `build` resource as part of your jobs using `downloadBuild` task. Based on the type of `build` resource defined (Jenkins, TeamCity etc.), this task automatically resolves to the corresponding download task for the service during the run time.

Artifacts from the `build` resource are downloaded to `$(PIPELINE.WORKSPACE)/<build-identifier>/` folder. 
Note: `build` resource artifacts are not automatically downloaded in your jobs/deploy-jobs and you need to explicitly add `downloadBuild` task for consuming the artifacts.

# [Schema](#tab/schema)

```yaml
- downloadBuild: string # identifier for the resource from which to download artifacts
  artifact: string # artifact to download; if left blank, downloads all artifacts associated with the resource provided
  patterns: string | [ string ] # a minimatch path or list of [minimatch paths](tasks/file-matching-patterns.md) to download; if blank, the entire artifact is downloaded
```

# [Schema](#tab/example)
You can customize the download behavior for each deployment or job.
```yaml
- job: deploy_windows_x86_agent
  steps:
  - downloadBuild: Spaceworkz   # build resource identifier.
    patterns: '**/*.zip'  # mini match pattern to download specific files, optional; defaults to all files.
```
## Resources: `repositories`

::: moniker range="azure-devops-2019"

If your pipeline has [templates in another repository](process/templates.md#using-other-repositories), you must let the system know about that repository.
The `repository` keyword lets you specify an external repository.

::: moniker-end

::: moniker range="> azure-devops-2019"

If your pipeline has [templates in another repository](process/templates.md#using-other-repositories), or if you want to use [multi-repo checkout](repos/multi-repo-checkout.md) with a repository that requires a service connection, you must let the system know about that repository.
The `repository` keyword lets you specify an external repository.

::: moniker-end

# [Schema](#tab/schema)

```yaml
resources:
  repositories:
  - repository: string  # identifier (A-Z, a-z, 0-9, and underscore)
    type: enum  # see the following "Type" topic
    name: string  # repository name (format depends on `type`)
    ref: string  # ref name to use; defaults to 'refs/heads/master'
    endpoint: string  # name of the service connection to use (for types that aren't Azure Repos)
```

# [Example](#tab/example)
```yaml

resources:
  repositories:
  - repository: common
    type: github
    name: Contoso/CommonTools
    endpoint: MyContosoServiceConnection
```

---

#### Type

Pipelines support the following values for the repository type: `git`, `github`, and `bitbucket`.
The `git` type refers to Azure Repos Git repos.

- If you specify `type: git`, the `name` value refers to another repository in the same project.
  An example is `name: otherRepo`.
  To refer to a repo in another project within the same organization, prefix the name with that project's name.
  An example is `name: OtherProject/otherRepo`.

- If you specify `type: github`, the `name` value is the full name of the GitHub repo and includes the user or organization.
  An example is `name: Microsoft/vscode`.
  GitHub repos require a [GitHub service connection](library/service-endpoints.md) for authorization.

- If you specify `type: bitbucket`, the `name` value is the full name of the Bitbucket Cloud repo and includes the user or organization.
  An example is `name: MyBitBucket/vscode`.
  Bitbucket Cloud repos require a [Bitbucket Cloud service connection](library/service-endpoints.md#sep-bbucket) for authorization.


### `checkout` your repository

Use `checkout` keyword to consume your repos defined as part of `repository` resource.

Note: Repos from `repository` resource are not automatically synced in your jobs and you need to explicitly use `checkout` to fetch your repos as part of your jobs.

```yaml
steps:
- checkout: self  # identifier for your repository resource
  clean: boolean  # if true, execute `execute git clean -ffdx && git reset --hard HEAD` before fetching
  fetchDepth: number  # the depth of commits to ask Git to fetch; defaults to no limit
  lfs: boolean  # whether to download Git-LFS files; defaults to false
  submodules: true | recursive  # set to 'true' for a single level of submodules or 'recursive' to get submodules of submodules; defaults to not checking out submodules
  path: string  # path to check out source code, relative to the agent's build directory (e.g. \_work\1); defaults to a directory called `s`
  persistCredentials: boolean  # if 'true', leave the OAuth token in the Git config after the initial fetch; defaults to false
```

For more information, see [Check out multiple repositories in your pipeline](repos/multi-repo-checkout.md).

## Resources: `containers`

If you need to consume a container image as part of your CI/CD pipeline, you can achieve it using `containers`. A container resource can be a Docker Registry, Azure Container Registry or any private Docker registry.


If you need to consume images from Docker registry as part of your pipeline, you can define a generic container resource (not `type` keyword required). 

# [Schema](#tab/schema)

```yaml
resources:
  containers:
  - container: string  # identifier (A-Z, a-z, 0-9, and underscore)
    image: string  # container image name
    options: string  # arguments to pass to container at startup
    endpoint: string  # reference to a service connection for the private registry
    env: { string: string }  # list of environment variables to add
    ports: [ string ] # ports to expose on the container
    volumes: [ string ] # volumes to mount on the container
```
A generic container resource can be used as an image resource to be consumed as part of your job or it can also be used for [Container jobs](process/container-phases.md).

# [Schema](#tab/example)

```yaml
resources:         
  containers:
  - container: smartHotel 
    endpoint: myDockerRegistry
    image: smartHotelApp 
```
# [Schema](#tab/schema)

We have introduced a first class container resource type for Azure Container registry (ACR) which can be used for consuming your ACR images as part of your jobs.

```yaml
resources:          # types: pipelines | repositories | containers | builds | packages
  containers:
  - container: string # identifier for the container resource      
    type: string # type of the registry like ACR, GCR etc. 
    azureSubscription: string # Azure subscription (ARM service connection) for container registry;
    resourceGroup: string # resource group for your ACR
    registry: string: # registry for container images
    repository: string # name of the container image repository in ACR
```
### Examples

```yaml
resources:         
  containers:
  - container: petStore      
    type: ACR  
    azureSubscription: ContosoARMConnection
    resourceGroup: ContosoGroup
    registry: petStoreRegistry
    repository: myPets
```
ACR container resource enables you to use Azure service principal (ARM service connection) for authentication. 
ACR container resource provides you with triggers experience.

#### variables
Once you define a container as resource, container image metadata is passed to the pipeline in the form of variables. Information like image, registry and connection details are made accessible across all the jobs so that your kubernetes deploy tasks can extract the image pull secrets and pass it to the cluster.

## Traceability


