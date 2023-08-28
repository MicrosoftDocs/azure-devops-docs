---
title: Deploy to IIS servers using WinRM
description: How to deploy web apps to IIS servers with Azure Pipelines and Windows Remote Management (WinRM)
ms.assetid: 0D65C5BE-DF92-42F6-B6A4-217F0509D425
ms.topic: conceptual
ms.custom: seodec18
ms.author: ronai
author: RoopeshNair
ms.date: 04/28/2022
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

### Build pipeline

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

#### [ASP.NET](#tab/net/)

- [Install IIS](https://www.asp.net/web-forms/overview/deployment/visual-studio-web-deployment/deploying-to-iis)

#### [ASP.NET Core](#tab/netcore/)

- [Host ASP.NET Core on Windows with IIS](/aspnet/core/publishing/iis).

#### [Node](#tab/node/)

- [Hosting node.js applications in IIS on Windows](https://github.com/Azure/iisnode)

---

## Create a release pipeline

1. Select **Pipelines**, and then select **Releases**. Select **New pipeline**.

1. Select **Empty job**.

1. Select **+ Add** to add your build artifact, and then select your **Project** and **Source**. Select **Add** when you are done.

    :::image type="content" source="../media/confirm-or-add-artifact.png" alt-text="A screenshot showing how to add a build artifact.":::

1. Choose the **Continuous deployment trigger** icon in the **Artifacts** section, and then enable the **Continuous deployment trigger** and add a build branch filter to include the **main** branch.

    :::image type="content" source="../media/confirm-or-set-cd-trigger.png" alt-text="A screenshot showing how to add a continuous deployment trigger.":::

1. Select **Variables**, and create a variable **WebServers** with a list of IIS servers for its value; for example *machine1,machine2,machine3*.

1. Select your stage, and add the following tasks to your pipeline:
  
   :::image type="icon" source="../../tasks/deploy/media/windows-machine-file-copy-icon.png" border="false"::: [Windows Machine File Copy](../../tasks/deploy/windows-machine-file-copy.md) - Copy the Web Deploy package to the IIS servers.

   - **Source**: Select the Web deploy package path.

   - **Machines**: *$(WebServers)*

   - **Admin Login**: The administrator login on the target servers. For workgroup-joined computers, use the format *.\username*. For domain-joined computers, use the format *domain\username*.

   - **Password**: The administrator password on the target servers.

   - **Destination Folder**: The folder on the target machines to which the files will be copied.

   :::image type="icon" source="../../tasks/deploy/media/iis-web-application-deployment-icon.png" border="false"::: [WinRM - IIS Web App Deployment](https://marketplace.visualstudio.com/items?itemName=ms-vscs-rm.iiswebapp) - Deploy your package.

   - **Machines**: $(WebServers)

   - **Admin Login**: The administrator login on the target servers. For workgroup-joined computers, use the format *.\username*. For domain-joined computers, use the format *domain\username*.

   - **Password**: The administrator password on the target servers.

   - **Protocol**: Select *HTTP* or *HTTPS* (depending on how you configured the target machine earlier). Note that if the target machine is workgroup-joined, you must choose *HTTPS*. You can use HTTP only if the target machine is domain-joined and configured to use a FQDN.

   - **Web Deploy Package**: Fully qualified path of the zip file you copied to the target server in the previous task.

   - **Website Name**: *Default Web Site* (or the name of the website if you configured a different one earlier).

1. Select **Save** when you are done and then select **OK**.

## Deploy your app

1. Select **Pipelines** > **Releases**, and then select **Create release**.

1. Check that the artifact version you want to use is selected and then select **Create**.

1. Select the release link in the information bar message. For example: "Release **Release-1** has been queued".

1. Navigate to your pipeline **Logs** to see the logs and agent output.

## Related articles

- [Deploy apps to Windows VMs](./deploy-webdeploy-iis-deploygroups.md).
