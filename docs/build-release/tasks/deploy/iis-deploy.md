---
title: VSTS and TFS Build and Deploy - IIS Web App Deploy task
description: VSTS and Team Foundation Server build and release task for Microsoft VSTS and TFS  
ms.prod: vs-devops-alm
ms.technology: vs-devops-build
ms.assetid: 69A09C16-9113-45AC-A058-BC5E12412C62
ms.manager: douge
ms.author: ahomer
ms.date: 05/03/2017
---

# Deploy: IIS Web App Deploy

[!INCLUDE [version-team-services](../../_shared/version-team-services.md)]

![icon](_img/iis-deploy-icon.png) Deploy a Website or Web Application.

Use this task to deploy IIS Websites and Virtual Applications using WebDeploy.
Supports file transforms and variable substitution, removing additional files at destination,
excluding files from App_Data, and taking the app offline.

>To use this task, you must first install the
[IIS Web App Deployment Using WinRM extension](https://marketplace.visualstudio.com/items?itemName=ms-vscs-rm.iiswebapp)
from Visual Studio Marketplace.

## Basic arguments

| Argument | Description |
| -------- | ----------- |
| **Website name** | The display name of the existing IIS Website or IIS Web Application to deploy to. |
| **Virtual Application** | The name of existing virtual application. You can use the [IIS Web App Manage task](iis-manage.md) to create an IIS Website or an IIS Web Application. |
| **Package or Folder** | The folder or file path to the web app package to deploy. Build and Release variables and wild cards are supported. Example: `$(System.DefautlWorkingDirectory\**\*.zip)` |

## File Transforms and Variable Substitution options

| Argument | Description |
| -------- | ----------- |
| **XML transformation** | Set this option to specify that [configuration transforms](../transforms-variable-substitution.md) will run for `*.Release.config` and `*.<EnvironmentName>.config` on the `*.config file`. Configuration transforms will run prior to the XML variable substitution. XML transforms are supported for only Windows platforms. |
| **XML variable substitution** | Set this option to specify that variables defined in the Build or Release definition will be matched against the **key** or **name** entries in the `appSettings`, `applicationSettings`, and `connectionStrings` sections of any configuration file and **parameters.xml**. [Variable substitution](../transforms-variable-substitution.md) runs after Configuration transforms. **Note**: If same variables are defined in the Release definition and in the Environment, the Environment variables supersede the Release definition variables. |
| **JSON variable substitution** | Enter a newline-separated list of JSON files to [substitute the variable values](../transforms-variable-substitution.md). Build and Release system definition variables are excluded from substitution. Files names must be relative to the root folder. Variable substitution runs after Configuration transforms.|

To substitute JSON variables that are nested or hierarchical, specify them using JSONPath expressions. For example, to replace the value of `ConnectionString` in the sample below, you must define a variable as `Data.DefaultConnection.ConnectionString` in the build or release definition (or the release definition's environment):

```json
{
  "Data":
  {
    "DefaultConnection":
    {
      "ConnectionString": "Server=(localdb)\SQLEXPRESS;Database=MyDB;Trusted_Connection=True"
    }
  }
}
```

## Advanced Deployment options

| Argument | Description |
| -------- | ----------- |
| **SetParameters File** | Optional. Location of the **SetParameters.xml** file to use. |
| **Remove Additional Files at Destination** | Set this option to delete files in the Website or Web Application that have no matching files in the Web App zip package. |
| **Exclude Files from the App_Data Folder** | Set this option to prevent files in the **App_Data** folder from being deployed. |
| **Take App Offline** | Set this option to take the website or app offline by placing an **app_offline.htm** file in the root directory before the deployment begins. The file will be removed after the synchronization operation completes successfully. |
| **Additional Arguments** | Additional Web Deploy arguments that will be applied when deploying the website or app. Examples: `-disableLink:AppPoolExtension` and `-disableLink:ContentExtension` |

## Control options

| Argument | Description |
| -------- | ----------- |
| **Control options** | See [Control options](../../concepts/process/tasks.md#controloptions) |

This task is contained in the
[IIS Web App Deployment Using WinRM extension](https://marketplace.visualstudio.com/items?itemName=ms-vscs-rm.iiswebapp)
available from Visual Studio Marketplace. For an example of it's use, see:

* [Deploy your Web Deploy package to IIS servers](../../apps/cd/deploy-webdeploy-iis-deploygroups.md)
* [Deploy your Web Deploy package to IIS servers using WinRM](../../apps/cd/deploy-webdeploy-iis-winrm.md)

## Q&A
<!-- BEGINSECTION class="md-qanda" -->

[!INCLUDE [qa-agents](../../_shared/qa-agents.md)]

<!-- ENDSECTION -->

[!INCLUDE [rm-help-support-shared](../../_shared/rm-help-support-shared.md)]
