---
title: Deploy to IIS servers using WinRM
description: How to deploy web apps to IIS servers with Azure Pipelines and Windows Remote Management (WinRM)
ms.assetid: 0D65C5BE-DF92-42F6-B6A4-217F0509D425
ms.topic: conceptual
ms.custom: seodec18
ms.author: ronai
author: RoopeshNair
ms.date: 28/04/2022
monikerRange: '<= azure-devops'
---

# Deploy to IIS servers with Azure Pipelines and WinRM

[!INCLUDE [version-lt-eq-azure-devops](../../../includes/version-lt-eq-azure-devops.md)]

Learn how to use Azure Pipelines and WinRM to set up a continuous delivery pipeline to deploy your ASP.NET, ASP.NET Core, or Node.js web apps to one or more IIS servers.

## Prerequisites

- An Azure DevOps Organization. [Create an organization](../../../organizations/accounts/create-organization.md), if you don't have one already.
- [Build pipeline](#build-pipeline)
- [Configure WinRM](#configure-winrm)
- [Configure IIS servers](#configure-iis-servers)

### Build Pipeline

Set up a build pipeline if you don't have one already.

#### [.NET](#tab/net/)

- [Build ASP.NET apps](../aspnet/build-aspnet-4.md)

#### [.NET Core](#tab/netcore/)

- [Build .NET Core apps](../../ecosystems/dotnet-core.md)

#### [Node](#tab/node/)

- [Build Node.js apps](../../ecosystems/javascript.md)

---

### Configure WinRM

Windows Remote Management (WinRM) requires target servers to be:

- Domain-joined or workgroup-joined.
- Able to communicate using the HTTP or HTTPS protocol.
- Addressed by using a fully qualified domain name (FQDN) or an IP address.

This table shows the supported scenarios for WinRM. Make sure that your IIS servers are set up in one of the following configurations. For example, do not use WinRM over HTTP to communicate with a Workgroup machine. Similarly, do not use an IP address to access the target server(s) when you use HTTP protocol. Instead, use HTTPS for both scenarios.

| Joined to a | Protocol |   Addressing mode  |
| ---------   | -------- |   ---------------  |
| Workgroup   |   HTTPS  | FQDN or IP address |
| Domain      |   HTTPS  | FQDN or IP address |
| Domain      |   HTTP   |       FQDN         |

> [!NOTE]
> If you need to deploy to a server that is not in the same workgroup or domain, add it to the trusted hosts in your [WinRM configuration](/windows/win32/winrm/installation-and-configuration-for-windows-remote-management).

Follow these steps to configure each target server.

1. Enable File and Printer Sharing. Run the following command in an elevated command prompt:

    ```cmd
    netsh advfirewall firewall set rule group="File and Printer Sharing" new enable=yes
    ```

1. Make sure you have PowerShell v4.0 or above installed on every target machine. To display the current
   PowerShell version, run the following command in an elevated PowerShell command prompt:

    ```powershell
    $PSVersionTable.PSVersion
    ```

1. Make sure you have the .NET Framework v4.5 or higher installed on every target machine. See [How to: Determine Which .NET Framework Versions Are Installed](/dotnet/framework/migration-guide/how-to-determine-which-versions-are-installed) for details.

1. Download the configuration script and copy them to every target machine. You will use them to configure WinRM in the following steps.

   - Windows 10 and Windows Server 2016: [ConfigureWinRM.ps1 win10-ser16](https://github.com/Microsoft/vsts-rm-extensions/blob/master/TaskModules/powershell/WinRM/WinRM-Http-Https/ConfigureWinRM.ps1)
   - Previous versions of Windows: [ConfigureWinRM.ps1](https://github.com/Microsoft/vsts-rm-extensions/blob/master/TaskModules/powershell/WinRM/WinRM-Http-Https-With-Makecert/ConfigureWinRM.ps1)

1. Decide if you want to use HTTP or HTTPS to communicate with the target machine(s).

   - If you want to use the HTTP protocol, run the following command in an elevated command prompt to create an HTTP WinRM listener and open port 5985:

    ```command
    ConfigureWinRM.ps1 {FQDN} http
    ```

   - If you want to use the HTTPS protocol, you can use either a FQDN or an IP address to access the target machine(s). To use a FQDN to access the target machine(s), run the following command in an elevated PowerShell command prompt:

    ```powershell
    ConfigureWinRM.ps1 {FQDN} https
    ```

     To use an IP address to access the target machine(s), run the following command in an elevated PowerShell command prompt:  

    ```powershell
    ConfigureWinRM.ps1 {ipaddress} https
    ```

     The script is using **MakeCert.exe** to create a test certificate and use it to create an HTTPS WinRM listener and open port 5986. The script will also increase the WinRM **MaxEnvelopeSizekb** setting to prevent certain errors such as "Request size exceeded the configured MaxEnvelopeSize quota". By default, this value is set to 500 KB in Windows Server machines.

### Configure IIS servers

If you are deploying an ASP.NET app, make sure that you have ASP.NET 4.5 or ASP.NET 4.6 installed on each of your IIS target servers. For more information, see [this topic](https://www.asp.net/web-forms/overview/deployment/visual-studio-web-deployment/deploying-to-iis).

If you are deploying an ASP.NET Core application to IIS target servers, follow the additional instructions in [this topic](/aspnet/core/publishing/iis) to install .NET Core Windows Server Hosting Bundle.

If you are deploying a Node.js application to IIS target servers, follow the instructions in [this topic](https://github.com/tjanczuk/iisnode) to install and configure IISnode on IIS servers.

In this example, we will deploy to the Default Web Site on each of the servers. If you need to deploy to another website, make sure you configure this as well.

### IIS WinRM extension

Install the [IIS Web App Deployment Using WinRM](https://marketplace.visualstudio.com/items?itemName=ms-vscs-rm.iiswebapp)
extension from Visual Studio Marketplace in Azure Pipelines or TFS.

## Define and test your CD release pipeline

Continuous deployment (CD) means starting an automated release pipeline whenever a new successful build is available. Your CD release pipeline picks up the artifacts published by your CI build and then deploys them to your IIS servers.

1. Do one of the following:

   * If you've just completed a CI build (see above), then, in the build's
     **Summary** tab under **Deployments**, choose **Create release** followed by **Yes**.
     This starts a new release pipeline that's automatically linked to the build pipeline.

   * Open the **Releases** tab of **Azure Pipelines**, open the **+** drop down
     in the list of release pipelines, and choose **Create release pipeline**.

1. Choose **Start with an empty pipeline**.

1. If you created your new release pipeline from a build summary, check that the build pipeline
   and artifact is shown in the **Artifacts** section on the **Pipeline** tab. If you created a new
   release pipeline from the **Releases** tab, choose the **+ Add** link and select your build artifact.

   ![Selecting the build artifact](../media/confirm-or-add-artifact.png)

1. Choose the **Continuous deployment** icon in the **Artifacts** section, check that the continuous deployment trigger is enabled,
   and add a filter to include the **main** branch.

   ![Checking or setting the Continuous deployment trigger](../media/confirm-or-set-cd-trigger.png)

1. On the **Variables** tab of the stage in release pipeline, configure a variable named **WebServers** with the list of IIS servers as its value; for example `machine1,machine2,machine3`.

1. Configure the following tasks in the stage:
  
   ![Windows Machine File Copy](../../tasks/deploy/media/windows-machine-file-copy-icon.png) [Deploy: Windows Machine File Copy](../../tasks/deploy/windows-machine-file-copy.md) - Copy the Web Deploy package to the IIS servers.
   
   - **Source**: Select the Web deploy package (zip file) from the artifact source.
   
   - **Machines**: `$(WebServers)`
   
   - **Admin Login**: Enter the administrator credentials for the target servers. For workgroup-joined computers, use the format `.\username`. For domain-joined computers, use the format `domain\username`.
   
   - **Password**: Enter the administrator password for the target servers.
   
   - **Destination Folder**: Specify a folder on the target server where the files should be copied to.<p />
   
   ![WinRM - IIS Web App Deployment](../../tasks/deploy/media/iis-web-application-deployment-icon.png) [Deploy: WinRM - IIS Web App Deployment](https://marketplace.visualstudio.com/items?itemName=ms-vscs-rm.iiswebapp) - Deploy the package.
   
   - **Machines**: `$(WebServers)`
   
   - **Admin Login**: Enter the administrator credentials for target servers. For workgroup-joined computers, use the format `.\username`. For domain-joined computers, use the format `domain\username`.
   
   - **Password**: Enter the administrator password for target servers.
   
   - **Protocol**: Select `HTTP` or `HTTPS` (depending on how you configured the target machine earlier). Note that if the target machine is workgroup-joined, you must choose `HTTPS`. You can use HTTP only if the target machine is domain-joined and configured to use a FQDN.
   
   - **Web Deploy Package**: Fully qualified path of the zip file you copied to the target server in the previous task.
   
   - **Website Name**: `Default Web Site` (or the name of the website if you configured a different one earlier).<p />

1. Edit the name of the release pipeline, click **Save**, and click **OK**. The default stage is named Stage1, which you can edit by clicking directly on the name.

You're now ready to create a release, which means to run the release pipeline with the artifacts produced by a specific build. This will result in deploying the build to IIS servers:

[!INCLUDE [simple-create-release](../includes/simple-create-release.md)]

## FAQ

<!-- BEGINSECTION class="md-qanda" -->

::: moniker range="tfs-2018"
[!INCLUDE [temp](../../includes/qa-versions.md)]
::: moniker-end

<!-- ENDSECTION -->

[!INCLUDE [rm-help-support-shared](../../includes/rm-help-support-shared.md)]