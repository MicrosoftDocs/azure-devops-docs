---
title: Python Twine Upload Authenticate
ms.custom: seodec18, devx-track-python
description: Sets up authentication with twine to Python feeds so you can publish Python packages in your pipeline. 
ms.topic: reference
ms.date: 08/02/2019
monikerRange: 'azure-devops'
---

# Package: Python Twine Upload Authenticate

**Version 1.\* | [Other versions](#versions)**

**Azure Pipelines**

Provides `twine` credentials to a `PYPIRC_PATH` environment variable for the scope of the build. This enables you to publish Python packages to feeds with `twine` from your build. 

::: moniker range="> tfs-2018"

## YAML snippet

[!INCLUDE [temp](../includes/yaml/TwineAuthenticateV1.md)]

::: moniker-end

## Arguments

| Argument | Description |  
| -------- | ----------- |  
|`artifactFeed` | (Optional) The Azure Artifacts feed name to authenticate with twine. For project-scoped feeds, use this syntax: ***projectName/feedName*** |  
|`pythonUploadServiceConnection` | (Optional) A [twine service connection](../../library/service-endpoints.md#python-package-upload-service-connection) name from external organization to authenticate with twine. The credentials stored in the endpoint must have package upload permissions.|  

> [!TIP]
> See [organization-scoped feeds vs project-scoped feeds](../../../artifacts/feeds/project-scoped-feeds.md#understanding-the-difference-between-an-organization-scoped-feed-and-a-project-scoped-feed) to understand the difference between the two types and learn how to check if your feed is project-scoped or organization-scoped.

## Examples

The following examples demonstrate how to publish python distribution to Azure Artifacts feed and the official python registry.

### Publish python distribution to Azure Artifacts feed

In this example, we are setting authentication for publishing to a private Azure Artifacts Feed. The authenticate task creates a `.pypirc` file that contains the auth credentials required to publish a distribution to the feed.

```YAML 
# Install python distributions like wheel, twine etc
- script: |
     pip install wheel
     pip install twine
  
# Build the python distribution from source
- script: |
     python setup.py bdist_wheel
   
- task: TwineAuthenticate@1
  displayName: Twine Authenticate
  inputs:
    # In this case, name of the feed is 'myTestFeed' in the project 'myTestProject'. Project is needed because the feed is project scoped.
    artifactFeed: myTestProject/myTestFeed
  
# Use command line script to 'twine upload', use -r to pass the repository name and --config-file to pass the environment variable set by the authenticate task.
- script: |
     python -m twine upload -r myTestFeed --config-file $(PYPIRC_PATH) dist/*.whl
```

The `artifactFeed` input will contain the project and the feed name if the feed is project scoped. If the feed is organization scoped, only the feed name must be provided. [Learn more](../../../artifacts/feeds/project-scoped-feeds.md).

### Publish python distribution to official python registry

In this example, we are setting authentication for publishing to official python registry. Create a <a href="~/pipelines/library/service-endpoints.md#python-package-upload-service-connection" data-raw-source="[twine service connection](~/pipelines/library/service-endpoints.md#python-package-upload-service-connection)">twine service connection</a> entry for [pypi](https://pypi.org). The authenticate task uses that service connection to create a `.pypirc` file that contains the auth credentials required to publish the distribution.

```YAML 
# Install python distributions like wheel, twine etc
- script: |
     pip install wheel
     pip install twine
  
# Build the python distribution from source
- script: |
     python setup.py bdist_wheel
   
- task: TwineAuthenticate@1
  displayName: Twine Authenticate
  inputs:
    # In this case, name of the service connection is "pypitest".
    pythonUploadServiceConnection: pypitest
  
# Use command line script to 'twine upload', use -r to pass the repository name and --config-file to pass the environment variable set by the authenticate task.
- script: |
     python -m twine upload -r "pypitest" --config-file $(PYPIRC_PATH) dist/*.whl
```

<a name="versions" />

## Task versions: Twine Authenticate

| Task version                                  | Azure Pipelines          | TFS                                           |
|-----------------------------------------------|--------------------------|-----------------------------------------------|
| 1.*                                           | Available                | Not supported                                 |
| [0.*](./prev-versions/twine-authenticate-0.md)| Available                | Not supported                                 |

## FAQ

<!-- BEGINSECTION class="md-qanda" -->

### When in my pipeline should I run this task?

This task must run before you use twine to upload python distributions to an authenticated package source such as Azure Artifacts. There are no other ordering requirements. Multiple invocations of this task will not stack credentials. Every run of the task will erase any previously stored credentials.

### My agent is behind a web proxy. Will TwineAuthenticate set up twine to use my proxy?

No. While this task itself will work behind a web proxy <a href="~/pipelines/agents/proxy.md" data-raw-source="[secret variable](~/pipelines/agents/proxy.md)">your agent has been configured to use</a>, it does not configure twine to use the proxy.

### My Pipeline needs to access a feed in a different project

If the pipeline is running in a different project than the project hosting the feed, you must set up the other project to grant read/write access to the build service. See [Package permissions in Azure Pipelines](../../../artifacts/feeds/feed-permissions.md#pipelines-permissions) for more details.

## Open-source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.

