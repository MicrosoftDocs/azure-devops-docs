---
author: gloridelmorales
ms.author: glmorale
ms.date: 7/30/2026
ms.topic: include
---

### Call Azure DevOps REST APIs from the Invoke REST API task

The [InvokeRestAPI@1](/azure/devops/pipelines/tasks/reference/invoke-rest-api-v1) task now supports the Azure DevOps service connection. This allows you to call Azure DevOps REST APIs directly from a pipeline, without the need to configure a custom generic service connection and manage authentication yourself.

Select the connection type in the connectionType input and reference your Azure DevOps service connection:

```yaml
- task: InvokeRESTAPI@1
  inputs:
    connectionType: 'connectedServiceNameAzureDevOps'
    serviceConnection: '<your-azure-devops-service-connection>'
    method: 'GET'
    urlSuffix: '<organization>/<project>/_apis/build/builds?api-version=7.1'
```
The connectionType input accepts the following values:

* `connectedServiceName` – Generic service connection (default).
* `connectedServiceNameAzureDevOps` – Azure DevOps service connection.
* `connectedServiceNameARM` – Azure Resource Manager service connection.