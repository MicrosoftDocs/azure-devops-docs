---
ms.topic: include
ms.service: azure-devops-pipelines
ms.manager: mijacobs
ms.author: jukullam
author: juliakm
ms.date: 11/05/2021
---

## Deploy to an Azure Government cloud or to Azure Stack

Create a suitable service connection:

* [Azure Government Cloud deployment](/azure/azure-government/connect-with-azure-pipelines)
* [Azure Stack deployment](../../../library/connect-to-azure.md#connect-stack)

## Deployment mechanisms

The preceding examples rely on the built-in [Azure Web App task](/azure/devops/pipelines/tasks/reference/azure-web-app-v1),
which provides simplified integration with Azure.

If you use a Windows agent, this task uses Web Deploy technology to interact with the Azure Web App.
Web Deploy provides several convenient deployment options, such as renaming locked files and excluding files from the App_Data folder during deployment.

If you use the Linux agent, the task relies on the [Kudu REST APIs](https://github.com/projectkudu/kudu/wiki/REST-API).

One thing worth checking before deploying is the Azure App Service access restrictions list. This list can include IP addresses or Azure Virtual Network subnets. When there are one or more entries, there is then an implicit "deny all" that exists at the end of the list. To modify the access restriction rules to your app, see [Adding and editing access restriction rules in Azure portal](/azure/app-service/app-service-ip-restrictions#adding-and-editing-access-restriction-rules-in-the-portal).
You can also [modify/restrict access to your source control management (scm) site](/azure/app-service/app-service-ip-restrictions#scm-site).

The [Azure App Service Manage task](/azure/devops/pipelines/tasks/reference/azure-app-service-manage-v0) is another task that's useful for deployment.
You can use this task to start, stop, or restart the web app before or after deployment.
You can also use this task to swap slots, install site extensions, or enable monitoring of the web app.

You can use the [File Transform task](/azure/devops/pipelines/tasks/reference/file-transform-v2) to apply file transformations and variable substitutions on any configuration and parameters files.

If the built-in tasks don't meet your needs, you can use other methods to script your deployment.
View the YAML snippets in each of the following tasks for some examples:

* [Azure PowerShell task](/azure/devops/pipelines/tasks/reference/azure-powershell-v5)
* [Azure CLI task](/azure/devops/pipelines/tasks/reference/azure-cli-v2)
* [FTP task](../../../tasks/utility/ftp-upload.md)
