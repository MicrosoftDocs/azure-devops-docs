---
title: Resources
ms.custom: seodec18
description: How to use resources with YAML definitions.
ms.topic: conceptual
ms.assetid: b3ca305c-b587-4cb2-8ac5-52f6bd46c25e
ms.date: 07/12/2021
monikerRange: azure-devops
---

# Resources in YAML

**Azure Pipelines**

A resource is anything used by a pipeline that lives outside the pipeline. Pipeline resources include:
* CI/CD pipelines that produce artifacts (Azure Pipelines, Jenkins, etc.)
* code repositories (Azure Repos Git repos, GitHub, GitHub Enterprise, Bitbucket Cloud)
* container image registries (Azure Container Registry, Docker Hub, etc.) 
* package feeds (GitHub packages)  

## Why resources?

Resources are defined at one place and can be consumed anywhere in your pipeline. Resources provide you the full traceability of the services consumed in your pipeline including the version, artifacts, associated commits, and work items. You can fully automate your DevOps workflow by subscribing to trigger events on your resources.

Resources in YAML represent sources of types pipelines, builds, repositories, containers, and packages. 

### Schema

```yaml
resources:
  pipelines: [ pipeline ]  
  builds: [ build ]
  repositories: [ repository ]
  containers: [ container ]
  packages: [ package ]
  webhooks: [ webhook ]
```

### Variables

When a resource triggers a pipeline, the following variables are set:

```yaml
resources.triggeringAlias
resources.triggeringCategory
```

These values will be blank if a resource does not trigger a pipeline run. The variable `Build.Reason` must be `ResourceTrigger` for these values to get set.

## Resources: `pipelines`

If you have an Azure Pipeline that produces artifacts, you can consume the artifacts by defining a `pipelines` resource. `pipelines` is a dedicated resource only for Azure Pipelines. You can also set triggers on pipeline resource for your CD workflows.

In your resource definition, `pipeline` is a unique value that you can use to reference the pipeline resource later on. `source` is the name of the pipeline that produces an artifact. 

For an alternative way to download pipelines, see tasks in [Pipeline Artifacts](../artifacts/pipeline-artifacts.md).

## [Schema](#tab/schema)

```yaml
resources:        # types: pipelines | builds | repositories | containers | packages
  pipelines:
  - pipeline: string  # identifier for the resource used in pipeline resource variables
    project: string # project for the source; optional for current project
    source: string  # name of the pipeline that produces an artifact
    version: string  # the pipeline run number to pick the artifact, defaults to latest pipeline successful across all stages; Used only for manual or scheduled triggers
    branch: string  # branch to pick the artifact, optional; defaults to all branches; Used only for manual or scheduled triggers
    tags: [ string ] # list of tags required on the pipeline to pickup default artifacts, optional; Used only for manual or scheduled triggers
    trigger:     # triggers are not enabled by default unless you add trigger section to the resource
      branches:  # branch conditions to filter the events, optional; Defaults to all branches.
        include: [ string ]  # branches to consider the trigger events, optional; Defaults to all branches.
        exclude: [ string ]  # branches to discard the trigger events, optional; Defaults to none.
      tags: [ string ]  # list of tags to evaluate for trigger event, optional
      stages: [ string ] # list of stages to evaluate for trigger event, optional
```

## [Example](#tab/example)

If you need to consume artifacts from an Azure pipeline within the current project, here is simple schema.

```yaml
resources:
  pipelines:
  - pipeline: SmartHotel-resource # identifier for the resource (used in pipeline resource variables)
    source: SmartHotel-CI # name of the pipeline that produces an artifact
```

If you need to consume a pipeline from other project, then you need to include the project name while providing source name.

```yaml
resources:
  pipelines:
  - pipeline: SmartHotel
    project: DevOpsProject
    source: SmartHotel-CI
    branch: releases/M142   # This branch is used for resolving default version when the pipeline is triggered manually or scheduled. The branch input should not have wild cards
```

Pipeline resource with simple trigger.

```yaml
resources:
  pipelines:
  - pipeline: SmartHotel
    project: DevOpsProject
    source: SmartHotel-CI
    trigger: true
```

Pipeline resource trigger with branch conditions.

```yaml
resources:
  pipelines:
  - pipeline: SmartHotel
    project: DevOpsProject
    source: SmartHotel-CI
    trigger:
      branches:
      - releases/*
      - resources.triggeringAlias
```

Stages filters for triggers

```yml
resources:
  pipelines:
  - pipeline: MyCIAlias  
    project: Fabrikam  
    source: Farbrikam-CI  
    trigger:    
      stages:            ### This stage filter is used when evaluating conditions for triggering your CD pipeline
      - PreProduction    ### stages are AND'ed. On successful completion of all the stages provided, your CD pipeline will be triggered. 
      - Production
```

Tag filters for default version evaluation and for triggers.

```yml
resources:
  pipelines:
  - pipeline: MyCIAlias
    project: Fabrikam
    source: Farbrikam-CI
    tags:               ### tags are used for resolving default version when the pipeline is triggered manually or scheduled
    - Production        ### Tags are AND'ed
    trigger:
      tags:             ### This filter is used for triggering the pipeline run
      - Production      ### Tags are AND'ed
      - Signed
```

Note: These are tags set on the CI pipeline. These tags are different from the tags set on the branches in the git repo.

---

> [!IMPORTANT]
> When you define a resource trigger, if its pipeline resource is from the same repo as the current pipeline, triggering follows the same branch and commit on which the event is raised.
> But if the pipeline resource is from a different repo, the current pipeline is triggered on the default branch.

### Default branch for triggers
Triggers for resources are created based on the default branch configuration of your YAML, which is master. However, if you want to configure resource triggers from a different branch, you need to change the default branch for the pipeline. 
1. Go to the edit view of the pipeline and click on the overflow menu on the top-right corner and choose **Triggers**.
![Triggers view in a pipeline](media/triggers-view.png)
1. Now select 'YAML' tab and go to 'Get sources'.
1. Now you can set the default branch for your pipeline.
![Triggers default branch for a pipeline](media/triggers-default-branch.png)


### Evaluation of artifact version
The pipeline version (CI build run) that gets picked in your pipeline run is controlled by how your pipeline run is triggered.

In case your pipeline run is created by manual trigger or by scheduled trigger, the default version, branch, and tags are used to evaluate the version of CI pipeline version.
*	If you provide a build version (number), that version runs.
*	If you provide a branch, the latest version from the given branch runs.
*  If you provide a list of tags, the latest run that has all the matching tags runs.
* If you provide a branch and list of tags, the latest run from the branch provided and that has the matching tags runs.
*	If you don’t provide anything, the latest version across all the branches runs.

```yml
resources:
  pipelines:
  - pipeline: MyCIAlias
    project: Fabrikam
    source: Farbrikam-CI
    branch: master      ### This branch input cannot have wild cards. It is used for evaluating default version when pipeline is triggered manually or scheduled.
    tags:               ### These tags are used for resolving default version when the pipeline is triggered manually or scheduled
    - Production        ### Tags are AND'ed
    - PreProduction
```

In case your pipeline is triggered automatically, the CI pipeline version will be picked based on the trigger event. The default version info provided irrelevant.
* If you provide branches, a new pipeline will be triggered whenever a CI run is successfully completed that matches to the branches that are included.
* If you provide tags, a new pipeline will be triggered whenever a CI run is successfully completed that matches all the tags mentioned.
* If you provide stages, new pipeline will be triggered whenever a CI run has all the stages mentioned are completed successfully.
* If you provide branches, tags and stages together, a new pipeline run is triggered whenever a CI run matches all the conditions.
* If you don't provide anything and just say `trigger: true`, a new pipeline run is triggered whenever a CI run is successfully completed.
* If you don't provide any trigger for the resource, no pipeline run will be triggered. Triggers are disabled by default unless you specifically enable them.

```yaml
resources:
  pipelines:
  - pipeline: SmartHotel
    project: DevOpsProject
    source: SmartHotel-CI
    trigger:
      branches:
        include:
        - releases/*
        - master
        exclude:
        - topic/*
      tags: 
      - Verified
      - Signed
      stages:
      - Production
      - PreProduction
      
```

### `download` for pipelines

All artifacts from the current pipeline and from all `pipeline` resources are automatically downloaded and made available at the beginning of each `deployment` job. You can override this behavior. For more information, see [Pipeline Artifacts](../artifacts/pipeline-artifacts.md). Regular 'job' artifacts are not automatically downloaded. Use `download` explicitly when needed.

## [Schema](#tab/schema)

```yaml
steps:
- download: [ current | pipeline resource identifier | none ] # disable automatic download if "none"
  artifact: string ## artifact name, optional; downloads all the available artifacts if not specified
  patterns: string # patterns representing files to include; optional
```

## [Example](#tab/example)

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
---
Artifacts from the `pipeline` resource are downloaded to `$(PIPELINE.WORKSPACE)/<pipeline-identifier>/<artifact-identifier>` folder.

### Pipeline resource variables
In each run, the metadata for a pipeline resource is available to all jobs in the form of below [predefined variables](../build/variables.md). The `<Alias>` is the identifier that you gave for your pipeline resource. Pipeline resources variables are only available at runtime. 


## [Schema](#tab/schema)
```yaml
resources.pipeline.<Alias>.projectID
resources.pipeline.<Alias>.pipelineName
resources.pipeline.<Alias>.pipelineID
resources.pipeline.<Alias>.runName
resources.pipeline.<Alias>.runID
resources.pipeline.<Alias>.runURI
resources.pipeline.<Alias>.sourceBranch
resources.pipeline.<Alias>.sourceCommit
resources.pipeline.<Alias>.sourceProvider
resources.pipeline.<Alias>.requestedFor
resources.pipeline.<Alias>.requestedForID
```

## [Example](#tab/example)
```yaml
resources:
  pipelines:
  - pipeline: myresourcevars  # identifier for the pipeline resource
    source: mypipeline # source pipeline definition name
    trigger: true 

steps:
- script: |
    echo $(resources.pipeline.myresourcevars.pipelineID)
    echo $(resources.pipeline.myresourcevars.runName)
    echo $(resources.pipeline.myresourcevars.runID)
    echo $(resources.pipeline.myresourcevars.runURI)
    echo $(resources.pipeline.myresourcevars.sourceBranch)
    echo $(resources.pipeline.myresourcevars.sourceCommit)
    echo $(resources.pipeline.myresourcevars.sourceProvider)
    echo $(resources.pipeline.myresourcevars.requestedFor)
    echo $(resources.pipeline.myresourcevars.requestedForID)
```
---

## Resources: `builds`

If you have any external CI build system that produces artifacts, you can consume artifacts with a `builds` resource. A `builds` resource can be any external CI systems like Jenkins, TeamCity, CircleCI etc.

## [Schema](#tab/schema)

```yaml
resources:        # types: pipelines | builds | repositories | containers | packages
  builds:
  - build: string   # identifier for the build resource
    type: string   # the type of your build service like Jenkins, circleCI etc.
    connection: string   # service connection for your build service.
    source: string   # source definition of the build
    version: string   # the build number to pick the artifact, defaults to Latest successful build
    trigger: boolean    # Triggers are not enabled by default and should be explicitly set
```

`builds` is an extensible category. You can write an extension to consume artifacts from your builds service (CircleCI, TeamCity etc.) and introduce a new type of service as part of `builds`. Jenkins is a type of resource in `builds`.

## [Example](#tab/example)

```yaml
resources:
  builds:
  - build: Spaceworkz
    type: Jenkins
    connection: MyJenkinsServer 
    source: SpaceworkzProj   # name of the jenkins source project
    trigger: true
```
---

> [!IMPORTANT]
> Triggers are only supported for hosted Jenkins where Azure DevOps has line of sight with Jenkins server.

### `downloadBuild` for builds

You can consume artifacts from the `build` resource as part of your jobs using `downloadBuild` task. Based on the type of `build` resource defined (Jenkins, TeamCity etc.), this task automatically resolves to the corresponding download task for the service during the run time.

Artifacts from the `build` resource are downloaded to `$(PIPELINE.WORKSPACE)/<build-identifier>/` folder. 

> [!IMPORTANT]
> `build` resource artifacts are not automatically downloaded in your jobs/deploy-jobs. You need to explicitly add `downloadBuild` task for consuming the artifacts.

## [Schema](#tab/schema)

```yaml
- downloadBuild: string # identifier for the resource from which to download artifacts
  artifact: string # artifact to download; if left blank, downloads all artifacts associated with the resource provided
  patterns: string | [ string ] # a minimatch path or list of [minimatch paths](tasks/file-matching-patterns.md) to download; if blank, the entire artifact is downloaded
```

## [Example](#tab/example)
You can customize the download behavior for each deployment or job.
```yaml
- job: deploy_windows_x86_agent
  steps:
  - downloadBuild: Spaceworkz   # build resource identifier.
    patterns: '**/*.zip'  # mini match pattern to download specific files, optional; defaults to all files.
```
---

## Resources: `repositories`

If your pipeline has [templates in another repository](../process/templates.md#use-other-repositories), or if you want to use [multi-repo checkout](../repos/multi-repo-checkout.md) with a repository that requires a service connection, you must let the system know about that repository. 
The `repository` keyword lets you specify an external repository.

## [Schema](#tab/schema)

```yaml
resources:
  repositories:
  - repository: string  # identifier (A-Z, a-z, 0-9, and underscore)
    type: enum  # see the following "Type" topic
    name: string  # repository name (format depends on `type`)
    ref: string  # ref name to use; defaults to 'refs/heads/master'
    endpoint: string  # name of the service connection to use (for types that aren't Azure Repos)
    trigger:  # CI trigger for this repository, no CI trigger if skipped (only works for Azure Repos)
      branches:
        include: [ string ] # branch names which will trigger a build
        exclude: [ string ] # branch names which will not
      tags:
        include: [ string ] # tag names which will trigger a build
        exclude: [ string ] # tag names which will not
      paths:
        include: [ string ] # file paths which must match to trigger a build
        exclude: [ string ] # file paths which will not trigger a build
```

## [Example](#tab/example)
```yaml

resources:
  repositories:
  - repository: common
    type: github
    name: Contoso/CommonTools
    endpoint: MyContosoServiceConnection
```

---

### Type

Pipelines support the following values for the repository type: `git`, `github`, `githubenterprise`, and `bitbucket`.
The `git` type refers to Azure Repos Git repos.

- If you specify `type: git`, the `name` value refers to another repository in the same project.
  An example is `name: otherRepo`.
  To refer to a repo in another project within the same organization, prefix the name with that project's name.
  An example is `name: OtherProject/otherRepo`.

- If you specify `type: github`, the `name` value is the full name of the GitHub repo and includes the user or organization.
  An example is `name: Microsoft/vscode`.
  GitHub repos require a [GitHub service connection](../library/service-endpoints.md#github-service-connection) for authorization.

- If you specify `type: githubenterprise`, the `name` value is the full name of the GitHub Enterprise repo and includes the user or organization.
  An example is `name: Microsoft/vscode`.
  GitHub Enterprise repos require a [GitHub Enterprise service connection](../library/service-endpoints.md#github-service-connectionent) for authorization.

- If you specify `type: bitbucket`, the `name` value is the full name of the Bitbucket Cloud repo and includes the user or organization.
  An example is `name: MyBitbucket/vscode`.
  Bitbucket Cloud repos require a [Bitbucket Cloud service connection](../library/service-endpoints.md#bitbucket-cloud-service-connection) for authorization.


### `checkout` your repository

Use `checkout` keyword to consume your repos defined as part of `repository` resource. 


### Schema

```yaml
steps:
- checkout: string  # identifier for your repository resource
  clean: boolean  # if true, execute `execute git clean -ffdx && git reset --hard HEAD` before fetching
  fetchDepth: number  # the depth of commits to ask Git to fetch; defaults to no limit
  lfs: boolean  # whether to download Git-LFS files; defaults to false
  submodules: true | recursive  # set to 'true' for a single level of submodules or 'recursive' to get submodules of submodules; defaults to not checking out submodules
  path: string  # path to check out source code, relative to the agent's build directory (e.g. \_work\1); defaults to a directory called `s`
  persistCredentials: boolean  # if 'true', leave the OAuth token in the Git config after the initial fetch; defaults to false
```

Repos from the `repository` resource are not automatically synced in your jobs. Use `checkout` to fetch your repos as part of your jobs.

For more information, see [Check out multiple repositories in your pipeline](../repos/multi-repo-checkout.md).

## Resources: `containers`

If you need to consume a container image as part of your CI/CD pipeline, you can achieve it using `containers`. A container resource can be a public or private Docker Registry, or Azure Container Registry.


If you need to consume images from Docker registry as part of your pipeline, you can define a generic container resource (not `type` keyword required). 

## [Schema](#tab/schema)

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
    mapDockerSocket: bool # whether to map in the Docker daemon socket; defaults to true
    mountReadOnly:  # volumes to mount read-only - all default to false
      externals: boolean  # components required to talk to the agent
      tasks: boolean  # tasks required by the job
      tools: boolean  # installable tools like Python and Ruby
      work: boolean # the work directory
```
A generic container resource can be used as an image consumed as part of your job or it can also be used for [Container jobs](../process/container-phases.md).

## [Example](#tab/example)

```yaml
resources:         
  containers:
  - container: smartHotel 
    endpoint: myDockerRegistry
    image: smartHotelApp 
```
---

You can use a first class container resource type for Azure Container Registry (ACR) to consume your ACR images. This resources type can be used as part of your jobs and also to enable automatic pipeline triggers.

## [Schema](#tab/schema)

```yaml
resources:          # types: pipelines | repositories | containers | builds | packages
  containers:
  - container: string # identifier for the container resource      
    type: string # type of the registry like ACR, GCR etc. 
    azureSubscription: string # Azure subscription (ARM service connection) for container registry;
    resourceGroup: string # resource group for your ACR
    registry: string # registry for container images
    repository: string # name of the container image repository in ACR
    trigger: # Triggers are not enabled by default and need to be set explicitly
      enabled: boolean # set to 'true' to trigger on all image tags if 'tags' is unset.
      tags:
        include: [ string ]  # image tags to consider the trigger events, optional; defaults to any new tag
        exclude: [ string ]  # image tags on discard the trigger events, optional; defaults to none
```

> [!NOTE]
> The syntax that's used to enable container triggers for all image tags (that is, `enabled: 'true'`) is different from the syntax that's used for other resource triggers. Pay close attention to using the correct syntax for a specific resource.


## [Example](#tab/example)

```yaml
resources:         
  containers:
  - container: petStore      
    type: ACR  
    azureSubscription: ContosoARMConnection
    resourceGroup: ContosoGroup
    registry: petStoreRegistry
    repository: myPets
    trigger: 
      tags:
        include: 
        - production* 
```
---
#### Container resource variables
Once you define a container as resource, container image metadata is passed to the pipeline in the form of variables. Information like image, registry, and connection details are made accessible across all the jobs to be used in your container deploy tasks. 

## [Schema](#tab/schema)

```yaml
resources.container.<Alias>.type
resources.container.<Alias>.registry
resources.container.<Alias>.repository
resources.container.<Alias>.tag 
resources.container.<Alias>.digest
resources.container.<Alias>.URI
resources.container.<Alias>.location
```
Note: location variable is only applicable for `ACR` type of container resources.

## [Example](#tab/example)

In this example, there is an [Azure Resource Manager service connection](../library/service-endpoints.md#common-service-connection-types) named `arm-connection`. Learn more about [Azure container registries, repositories, and images](/azure/container-registry/container-registry-concepts). 

```yaml
resources:
  containers:
  - container: mycontainer # name of the container (Alias) 
    type: ACR # type of registry
    azureSubscription: arm-connection # name of the ARM service connection
    resourceGroup: rg-storage-eastus # Azure resource group with the container
    registry: mycontainerregistry # Azure container registry name
    repository: hello-world # name of the of container image collection
    trigger:
      tags:
      - latest # tag for the container image to use

steps:
- script: echo |
    echo $(resources.container.mycontainer.type)
    echo $(resources.container.mycontainer.registry)
    echo $(resources.container.mycontainer.repository)
    echo $(resources.container.mycontainer.tag)
    echo $(resources.container.mycontainer.digest)
    echo $(resources.container.mycontainer.URI)
    echo $(resources.container.mycontainer.location)

```
---

## Resources: `packages`

You can consume NuGet and npm GitHub packages as a resource in YAML pipelines. 

When specifying `package` resources, set the package as NuGet or npm. You can also enable automated pipeline triggers when a new package version gets released. 

To use GitHub packages, you will need to use PAT-based authentication and create a GitHub service connection that uses PAT. 

By default, packages will not be automatically downloaded into jobs. To download, use `getPackage`. 

## [Schema](#tab/schema)

```yaml
resources:
  packages:
    - package: myPackageAlias # alias for the package resource
      type: Npm # type of the package NuGet/npm
      connection: GitHubConnectionName # Github service connection with the PAT type
      name: nugetTest/nodeapp # <Repository>/<Name of the package>
      version: 1.0.1 # Version of the packge to consume; Optional; Defaults to latest
      trigger: true # To enable automated triggers (true/false); Optional; Defaults to no triggers
```

## [Example](#tab/example)

In this example, there is an [GitHub service connection](../library/service-endpoints.md#common-service-connection-types) named `pat-contoso` to a GitHub npm package named `contoso`. Learn more about [GitHub packages](https://github.com/features/packages). 

```yaml
resources:
  packages:
    - package: contoso
      type: npm
      connection: pat-contoso
      name: yourname/contoso 
      version: 7.130.88 
      trigger: true

pool:
  vmImage: 'ubuntu-latest'

steps:
- getPackage: contoso 
```
---

## Resources: `webhooks`

With other resources (such as pipelines, containers, build, and packages) you can consume artifacts and enable automated triggers. However, you could not automate your deployment process based on other external events or services. `webhooks` resource enables you to integrate your pipeline with any external service and automate the workflow. You can subscribe to any external events through its webhooks (GitHub, GitHub Enterprise, Nexus, Artifactory, etc.) and trigger your pipelines. 

Here are the steps to configure the webhook triggers:
1. Set up a webhook on your external service. When creating your webhook, you need to provide the following info:
    - Request Url - `https://dev.azure.com/<ADO Organization>/_apis/public/distributedtask/webhooks/<WebHook Name>?api-version=6.0-preview`
    - Secret - This is optional. If you need to secure your JSON payload, provide the **Secret** value
2. Create a new "Incoming Webhook" service connection. This is a newly introduced Service Connection Type that will allow you to define three important pieces of information:
    - **Webhook Name**: The name of the webhook should match webhook created in your external service.
    - **HTTP Header** - The name of the HTTP header in the request that contains the payload's HMAC-SHA1 hash value for request verification. For example, in the case of the GitHub, the request header will be "**X-Hub-Signature**"
    - **Secret** - The secret is used to verify the payload's HMAC-SHA1 hash used for verification of the incoming request (this is optional). If you have used a secret in creating your webhook, you will need to provide the same secret key 
  
![Incoming Webhook Service connection](media/incoming-webhook.png)

3. A new resource type called `webhooks` is introduced in YAML pipelines. For subscribing to a webhook event, you need to define a webhook resource in your pipeline and point it to the Incoming webhook service connection. You can also define additional filters on the webhook resource based on the JSON payload data to further customize the triggers for each pipeline, and you can consume the payload data in the form of variables in your jobs.

4. Whenever a webhook event is received by the Incoming Webhook service connection, a new run will be triggered for all the pipelines subscribed to the webhook event. You can consume the JSON payload data in your jobs using the format ${{ parameters.<WebhookAlias>.<JSONPath>}}

## [Schema](#tab/schema)
```yml
resources:
  webhooks:
    - webhook: MyWebhookTriggerAlias           ### Webhook alias
      connection: IncomingWebhookConnection    ### Incoming webhook service connection
      filters:                                 ### List of JSON parameters to filter; Parameters are AND'ed
        - path: JSONParameterPath              ### JSON path in the payload
          value: JSONParameterExpectedValue    ### Expected value in the path provided
```
Webhooks are a great way to automate your workflow based on any external webhook event that is not supported by first class resources like pipelines, builds, containers, and packages. Also, for on-premise services where Azure DevOps doesn't have visibility into the process, you can configure webhooks on the service and to trigger your pipelines automatically.

## [Example](#tab/example)
```yml
resources:
  webhooks:
    - webhook: MyWebhookTrigger          
      connection: MyWebhookConnection    
      filters:
        - path: repositoryName      
          value: maven-releases     
        - path: action
          value: CREATED
steps:
- task: PowerShell@2
  inputs:
    targetType: 'inline'
    script: |
      Write-Host ${{ parameters.MyWebhookTrigger.repositoryName}} ### JSON payload data is available in the form of ${{ parameters.<WebhookAlias>.<JSONPath>}}
      Write-Host ${{ parameters.MyWebhookTrigger.component.group}}
```
---

## Manual version picker for resources in the create run dialogue
When you manually trigger a CD YAML pipeline, we automatically evaluate the default version for the resources defined in the pipeline based on the inputs provided. However, you can choose to pick a different version from resource version picker in create run dialogue. 
1. In the create run pane, you can see resources section. 
2. Clicking on it shows the list of resources consumed in this pipeline. 
3. You can select each of the resource and pick a specific version from the list of versions available.
Resource version picker is supported for pipeline, build, repository, container, and package resources. 
![Pipeline Version Picker](media/pipeline-version-picker.png)

For pipeline resources, you can see all the available runs across all branches. You can search them based on the pipeline number or branch. And you can pick a run that is successful, failed or in-progress run. This flexibility is given to ensure you can run your CD pipeline if you are sure your CI pipeline produced all the artifacts you need and you don't need to wait for the CI run is complete or rerun due to some unrelated stage in the CI run failed. However, when we evaluate default version for scheduled triggers or if you don't use manual version picker, we only consider successfully completed CI runs. 

For resources where you can't fetch available versions (like GitHub packages), we will show a text box as part of version picker so that user can provide the version to be picked in the run.

## Troubleshooting authorization for a YAML pipeline
Resources must be authorized before they can be used. A resource owner controls the users and pipelines that can access that resource. The pipeline must be authorized to use the resource. There are multiple ways to accomplish this.

* Navigate to the administration experience of the resource. For example, variable groups and secure files are managed in the **Library** page under **Pipelines**. Agent pools and service connections are managed in **Project settings**. Here you can authorize **all pipelines** to be able to access that resource. This is convenient if you do not have a need to restrict access to a resource - for example, test resources.

* When you create a pipeline for the first time, all the resources that are referenced in the YAML file are automatically authorized for use by the pipeline, provided that you are a member of the **User** role for that resource. So, resources that are referenced in the YAML file at pipeline creation time are automatically authorized.

* When you make changes to the YAML file and add additional resources (assuming that these not authorized for use in all pipelines as explained above), then the build fails with a resource authorization error that is similar to the following: `Could not find a <resource> with name <resource-name>. The <resource> does not exist or has not been authorized for use.`

    > In this case, you will see an option to authorize the resources on the failed build. If you are a member of the **User** role for the resource, you can select this option. Once the resources are authorized, you can start a new build.
 
* If you continue to have problems authorizing resources, verify that the [agent pool security roles](../../organizations/security/about-security-roles.md) for your project are correct. 

## Set approval checks for resources
You can manually control when a resource runs with approval checks and templates. With the [required template approval check](approvals.md#required-template), you can require that any pipeline using a resource or environment also extends from a specific YAML template. 
Setting a required template approval enhances security. You can make sure that your resource only gets used under specific conditions with a template. Learn more about how to [enhance pipeline security](../security/templates.md#set-required-templates) with templates and resources. 

## Traceability
We provide full traceability for any resource consumed at a pipeline or deployment-job level.

### Pipeline traceability
For every pipeline run, we show the info about the 
1. The resource that has triggered the pipeline (if it is triggered by a resource).
![Resource trigger in a pipeline](media/runs-resource-trigger.png)
2. Version of the resource and the artifacts consumed.
 ![Consumed artifacts in pipeline run](media/runs-consumed-artifacts.png)
3. Commits associated with each resource.
![Commits in pipeline run](media/runs-commits.png)
4. Work items for each resource.

### Environment traceability
Whenever a pipeline deploys to an environment, you can see a list of resources that are consumed in the environments view. This view includes resources consumed as part of the deployment-jobs and their associated commits and work items.
![Commits in environment](media/environments-commits.png)

### Showing associated CD pipelines info in CI pipelines
To provide end to end traceability, user should be able to track which CD pipelines are consuming a giving CI pipeline. You can see the list of CD YAML pipelines runs where a CI pipeline run is consumed through `pipeline` resource. In your CI pipeline run view, if it is consumed by other pipeline(s), you will see a 'Associated pipelines' tab where you can find all the pipeline runs that consume your pipeline and artifacts from it.
![CD pipelines info in CI pipeline](media/cdinfo-in-ci-pipelines.png)

### YAML resource trigger issues support and traceability
It can be confusing when pipeline triggers fail to execute. To help better understand this, we've added a new menu item in the pipeline definition page called **Trigger Issues** where you can learn why triggers are not executing. To access this page, open your pipeline history. Select **Trigger Issues** in the menu. The **Trigger Issues** option will only appear for non-repository resources. 

:::image type="content" source="media/trigger-menu.png" alt-text="Select Trigger Issues from the navigation.":::

Resource triggers can fail to execute for two reasons.
* If the source of the service connection provided is invalid, or if there are any syntax errors in the trigger, the trigger will not be configured at all. These are surfaced as errors.
* If trigger conditions are not matched, the trigger will not execute. Whenever this occurs, a warning will be surfaced so you can understand why the conditions were not matched.  
![Trigger Issues Supportability](media/trigger-supportability.png)

## FAQ

### Why should I use pipelines `resources` instead of the `download` shortcut? 

Using a `pipelines` resource is a first class way to consume artifacts from a CI pipeline and also configure automated triggers. It gives you full visibility into the process by displaying the version consumed, artifacts, commits, and work items. When you define a pipeline resource, the associated artifacts are automatically downloaded in deployment jobs. 

You can choose to download the artifacts in build jobs or to override the download behavior in deployment jobs with `download`. The `download` task internally uses the [Download Pipeline Artifacts task](../tasks/utility/download-pipeline-artifact.md).


### Why should I use `resources` instead of the Download Pipeline Artifacts task?

When you use the [Download Pipeline Artifacts task](../tasks/utility/download-pipeline-artifact.md) directly, you miss traceability and triggers. At the same time, there are times when it makes sense to use the Download Pipeline Artifacts task directly. 
For example, you might have a script task stored in a different template and the script task requires artifacts from a build to be downloaded. Or, you may not know if someone using a template will add a pipeline resource. To avoid dependencies, you can use the Download Pipeline Artifacts task to pass all the build info to a task.
