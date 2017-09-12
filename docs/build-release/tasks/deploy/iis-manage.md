---
title: Build and Deploy - IIS Web App Manage task
description: VSTS and TFS build task step to create or update, start or stop IIS
ms.prod: vs-devops-alm
ms.technology: vs-devops-build
ms.assetid: 96E96D35-71D9-4A15-AA34-B9355D05AD98
ms.manager: douge
ms.author: ahomer
ms.date: 05/03/2017
---

# Deploy: IIS Web App Manage

[!INCLUDE [version-team-services](../../_shared/version-team-services.md)]

![icon](_img/iis-manage-icon.png) Manage an IIS Website.

Use this task to create or update, start or stop, and recycle IIS Websites, IIS Web Applications,
Virtual Directories, and IIS Application Pools. Supports adding application pools, and 
configuring bindings and authentication. 

>To use this task, you must first install the
[IIS Web App Deployment Using WinRM extension](https://marketplace.visualstudio.com/items?itemName=ms-vscs-rm.iiswebapp)
from Visual Studio Marketplace.

## Basic options

| Argument | Description |
| -------- | ----------- |
| **Configuration type** | Choose whether you want to manage an [IIS Website](#website-args), an [IIS Web Application](#webapp-args), an [IIS Virtual Directory](#virtdir-args), or an [IIS Application Pool](#app-pool-args). An IIS Virtual Directory or an IIS Web Application is created as a child of an existing IIS Website. |
| **Action** | Available when **Configuration type** is `IIS Website` or `IIS Application Pool`. Select the action to be performed. `Create or Update`, `Start`, `Stop`, and `Recycle` actions are supported based on the **Configuration type** selected. |

<a name="website-args"></a>
## Parameters for IIS Website configuration

| Argument | Description |
| -------- | ----------- |
| **Website name** | The display name of the IIS Website to create or reconfigure. |
| **Physical path** | The physical path where the content of the website will be stored. The content can reside on the local computer, in a remote directory, or on a network share. Examples: `C:\Fabrikam` and `\ContentShare\Fabrikam` |
| **Physical path authentication** | Select the authentication mechanism that will be used to access the physical path of the website. Options are `Application User (Pass-through)` and `Windows Authentication` (which requires a username and password). |
| **Username** | The Windows or domain account that will be used to access the physical path. Example: `YOURDOMAIN\YourAccount` |
| **Password** | The password for the account. Good practice is to create a variable in the build or release definition, mark it as 'Secret' to secure it, and use it here. Example: `$(userCredentials)`. Note: special characters in passwords are interpreted as described in [Parsing C Command-Line Arguments](https://docs.microsoft.com/en-us/cpp/c-language/parsing-c-command-line-arguments). |
| **Add binding** | Set this option to add a port binding for the website. See [Binding arguments](#binding-args)|
| **Create or update app pool** | Set this option to create or update the application pool. If checked, the website will be created in the specified application pool. See [IIS Application pool arguments](#app-pool-args). |
| **Configure authentication** | Set this option to configure authentication for the website. See [Authentication options](#auth-options). |

Also see [Advanced options](#advanced-opts) and [Control options](../../concepts/process/tasks.md#controloptions)

<a name="webapp-args"></a>
## Parameters for IIS Application configuration

| Argument | Description |
| -------- | ----------- |
| **Parent website name** | The display name of the parent IIS Website under which the application will be created or updated. |
| **Virtual path** | Enter the virtual path in IIS relative to the parent website. The parent website must already exist. Example: to create an application named **Site/Application** enter `/Application`. |
| **Physical path** | The physical path where the content of the web application will be stored. The content can reside on the local computer, in a remote directory, or on a network share. Examples: `C:\Fabrikam` and `\ContentShare\Fabrikam` |
| **Physical path authentication** | Select the authentication mechanism that will be used to access the physical path of the web application. Options are `Application User (Pass-through)` and `Windows Authentication` (which requires a username and password). |
| **Username** | The Windows or domain account that will be used to access the physical path. Example: `YOURDOMAIN\YourAccount` |
| **Password** | The password for the account. Good practice is to create a variable in the build or release definition, mark it as 'Secret' to secure it, and use it here. Example: `$(userCredentials)`. Note: special characters in passwords are interpreted as described in [Parsing C Command-Line Arguments](https://docs.microsoft.com/en-us/cpp/c-language/parsing-c-command-line-arguments). |
| **Add binding** | Set this option to add a port binding for the application. See [Binding arguments](#binding-args)|
| **Create or update app pool** | Set this option to create or update the application pool. If checked, the application will be created in the specified application pool. See [IIS Application pool arguments](#app-pool-args). |

Also see [Advanced options](#advanced-opts) and [Control options](../../concepts/process/tasks.md#controloptions)

<a name="virtdir-args"></a>
## Parameters for IIS Virtual Directory configuration

| Argument | Description |
| -------- | ----------- |
| **Parent website name** | The display name of the parent IIS Website under which the virtual directory will be created or updated. |
| **Virtual path** | Enter the virtual path in IIS relative to the parent website. The parent website and application must already exist. Example: to create a virtual directory named **Site/Application/VDir** enter `/Application/Vdir`. |
| **Physical path** | The physical path where the content of the virtual directory will be stored. The content can reside on the local computer, in a remote directory, or on a network share. Examples: `C:\Fabrikam` and `\ContentShare\Fabrikam` |
| **Physical path authentication** | Select the authentication mechanism that will be used to access the physical path of the virtual directory. Options are `Application User (Pass-through)` and `Windows Authentication` (which requires a username and password). |
| **Username** | The Windows or domain account that will be used to access the physical path. Example: `YOURDOMAIN\YourAccount` |
| **Password** | The password for the account. Good practice is to create a variable in the build or release definition, mark it as 'Secret' to secure it, and use it here. Example: `$(userCredentials)`. Note: special characters in passwords are interpreted as described in [Parsing C Command-Line Arguments](https://docs.microsoft.com/en-us/cpp/c-language/parsing-c-command-line-arguments). |

Also see [Advanced options](#advanced-opts) and [Control options](../../concepts/process/tasks.md#controloptions)

<a name="app-pool-args"></a>
## IIS Application Pool arguments for all configurations

| Argument | Description |
| -------- | ----------- |
| **Name** | The display name of the application pool to create or update. |
| **.NET version** | The version of the .NET common language runtime that is loaded by the application pool. Choose `v2.0` for applications built against .NET 2.0, 3.0 or 3.5. Choose `v4.0` for .NET 4.0 or 4.5. If the applications assigned to this application pool do not contain managed code, select `No Managed Code`. |
| **Managed pipeline mode** | Select the mode that specifies how IIS processes requests for managed content. Use `Classic` mode only when the applications in the application pool cannot run in the `Integrated` mode. |
| **Identity** | Configure the built-in account under which an application pool's worker process runs. Select one of the predefined security accounts or configure a custom account. |
| **Username** | The Windows or domain account that the application pool will run under. Ensure that this account has permission to run as an application pool. Example: `YOURDOMAIN\YourAccount`. |
| **Password** | The password for the account. Good practice is to create a variable in the build or release definition, mark it as 'Secret' to secure it, and use it here. Example: `$(userCredentials)`. Note: special characters in passwords are interpreted as described in [Parsing C Command-Line Arguments](https://docs.microsoft.com/en-us/cpp/c-language/parsing-c-command-line-arguments). |

Also see [Advanced options](#advanced-opts) and [Control options](../../concepts/process/tasks.md#controloptions)

<a name="binding-args"></a>
## Binding arguments for all configurations

| Argument | Description |
| -------- | ----------- |
| **Protocol** | Select `HTTP` or `HTTPS` |
| **IP address** | Enter an IP address that can be used to access this website or application. If `All Unassigned` is selected, the website or application will respond to requests for all IP addresses on the port and for the host name, unless another website on the server has a binding on the same port but with a specific IP address. |
| **Port** | Specify the port where the Hypertext Transfer Protocol Stack (HTTP.sys) will listen for requests. |
| **Server Name Indication required** | Set this option to specify Server Name Indication (SNI) for the website or application. SNI extends the SSL and TLS protocols to indicate the host name that the clients are attempting to connect to. It allows multiple secure websites with different certificates to use the same IP address. |
| **Host name** | Enter a host name (or domain name) for the website or application. Leave empty to use any host header. If a host name is specified, clients can use the host name instead of the IP address to access the website. Example: `www.contoso.com`. |
| **SSL certificate thumbprint** | The thumbprint of the certificate that the website or application will use for the HTTPS communication, as a 40-character hexadecimal string. The certificate must already be installed on the computer in the **Local Computer - Personal** store. |

<a name="auth-options"></a>
## Authentication options for all configurations

| Argument | Description |
| -------- | ----------- |
| **Anonymous authentication** | Set this option to enable anonymous authentication for the website. |
| **Basic authentication** | Set this option to enable basic authentication for the website. |
| **Windows authentication** | Set this option to enable Windows authentication for the website. |

<a name="advanced-opts"></a>
## Advanced options

| Argument | Description |
| -------- | ----------- |
| **Additional appcmd.exe commands** | Enter any additional AppCmd.exe commands. For more than one command, place each on a new line. Examples: `list apppools`, `list sites`, `recycle apppool /apppool.name:ExampleAppPoolName` |

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
