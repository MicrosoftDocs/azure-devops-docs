---
title: Team Services Quick Start - Build and Deploy a ASP.NET Core app to an Azure Windows VM | Microsoft Docs
description: Set up a continuous integration (CI) build for your ASP.NET Core app, and then a continuous deployment (CD) release an to Azure Windows VM using Visual Studio Team Services
services: vsts
documentationcenter: ''
author: alewis
manager: douge
editor: ''

ms.assetid: E13DEB83-A128-4704-A051-8465AD39B5AE
ms.service: vsts
ms.devlang: dotnetcore
ms.topic: hero-article
ms.tgt_pltfrm: vm-windows
ms.workload: ''
ms.date: 08/04/2016
ms.custom: mvc
---

# Implement CI/CD to build and deploy your ASP.NET Core app to an Azure Windows VM

Visual Studio Team Services (VSTS) provides a highly customizable continuous integration (CI) and continuous deployment (CD) pipeline for your ASP.NET Core apps. This quickstart shows how to set up CI and CD to deploy an ASP.NET Core application to a Windows virtual machine (VM) in Azure. You'll create a VM using Azure Powershell, and then you'll set up CI/CD in VSTS. In the CI process, you'll build the app using MSBuild and run tests using VSTest.

_TODO: work with artist to adapt diagram to this scenario_

![A typical release pipeline for web applications](../get-started/_img/ci-cd/part-1/ReleasePipeline.png)

With your CI/CD processes in place, you'll push a change into your team's git repo and the results will automatically show up on your site.

![Screenshot showing ASP.NET Core web app](_img/aspnet-core-to-azure-windows-vm/cicd-get-started-dotnetcore-sample.png)

[!INCLUDE [include](_shared/prerequisites.md)]
* On your dev machine, you need Azure PowerShell module version 4.0 or newer. See [Install and configure Azure PowerShell](https://docs.microsoft.com/en-us/powershell/azure/install-azurerm-ps?view=azurermps-4.2.0).

[!INCLUDE [temp](_shared/create-azure-windows-vm.md)]

## Install the .NET Core Windows Server Hosting bundle

Running an ASP.NET Core app on Windows requires some dependencies.

On your Windows VM, install the [.NET Core Windows Server Hosting](https://go.microsoft.com/fwlink/?linkid=848766) bundle. The bundle will install the .NET Core Runtime, .NET Core Library, and the [ASP.NET Core Module](https://docs.microsoft.com/en-us/powershell/azure/install-azurerm-ps). The module creates the reverse-proxy between IIS and the Kestrel server.

To effect a change to the system PATH, run the following commands.

```cmd
net stop was /y
```

```
net start w3svc
```

[!INCLUDE [temp](_shared/create-deployment-group.md)]

[!INCLUDE [temp](_shared/import-code-aspnet-core.md)]

[!INCLUDE [temp](_shared/set-up-ci-1.md)]

In the right panel, select **ASP.NET Core**, and then click **Apply**.

![Screenshot showing dotnet core template](_shared/_img/apply-aspnet-core-build-template.png)

[!INCLUDE [temp](_shared/set-up-ci-2.md)]

[!INCLUDE [temp](_shared/set-up-ci-3.md)]

[!INCLUDE [temp](_shared/set-up-cd-1.md)]

![Screenshot showing release action on build summary](_shared/_img/cicd-get-started-dotnetcore-release.png)

In the dialog that prompts to **Create release definition**, select **Yes**.

In the **Create release definition** wizard, select the **IIS Website and SQL Database deployment** template, and click **Apply**.

![Screenshot showing IIS template](_img/aspnet-core-to-azure-windows-vm/cicd-get-started-iis-template.png)

Click **Tasks**, and then select the **SQL Deployment** phase. Click 'X' to delete this phase. We won't be deploying a database in this quickstart.

Select **IIS Deployment** phase. For the **Deployment Group**, select the deployment group you created earlier, such as *myIIS*. In the **Machine tags** box, select **Add** and choose the *Web* tag.

Select the **IIS Web App Manage** task; click 'X' to delete this task. We will not create a new website for this quickstart. Instead, we will deploy to the **default web site**.

Select the **IIS Web App Deploy** task to configure your IIS instance settings as follows. For **Website Name**, enter *default web site*. Leave all the other default settings.

![Screenshot showing release definition](_img/aspnet-core-to-azure-windows-vm/cicd-get-started-release-definition.png)

[!INCLUDE [temp](_shared/set-up-cd-3.md)]

## Update to redeploy the code

Navigate to the **Code** hub in the VSTS portal. Navigate to **Views/Home/Index.cshtml** file. Make the following simple change to that file by selecting the edit action.

![Screenshot showing update to code](_img/aspnet-core-to-azure-windows-vm/cicd-get-started-dotnetcore-update-code.png)

Add the following line of text above the carousel display in the page:
```
<h1>Demo of ASP.NET Core CI/CD!!</h1>
```

Commit your changes in Git. This change triggers a CI build, and when the build completes, it triggers an automatic deployment to Azure web app.

## Browse to the app

Once deployment has completed, open the browser and test your web app.

```bash
http://<publicIpAddress>
```

**Congratulations!** You've deployed changes to your application using CI/CD.

## Clean up resources

After you're done with the VM, run the following command to remove the resource group, the VM, and all other related resources.

```ps
Remove-AzureRmResourceGroup -Name myResourceGroup
```