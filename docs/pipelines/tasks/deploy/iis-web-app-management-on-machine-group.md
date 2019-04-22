---
title: IIS Web App Manage task
description: Create or update a Website, Web App, Virtual Directory, or Application Pool
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: 1b2aec60-dc49-11e6-9b76-63056e018cac
ms.manager: dastahel
ms.custom: seodec18
ms.author: dastahel
ms.date: 12/07/2018
monikerRange: 'azure-devops'
---

# IIS Web App Manage task

**Azure Pipelines**

Use this task in a build or release pipeline to create or update a Website, Web App, Virtual Directory, or Application Pool.

::: moniker range="> tfs-2018"
## YAML snippet
[!INCLUDE [temp](../_shared/yaml/IISWebAppManagementOnMachineGroupV0.md)]
::: moniker-end

## Arguments

<table><thead><tr><th>Argument</th><th>Description</th></tr></thead>
<tr><td>Enable IIS</td><td>(Optional) Check this if you want to install IIS on the machine.</td></tr>
<tr><td>Configuration type</td><td>(Required) You can create or update sites, applications, virtual directories, and application pools.</td></tr>
<tr><td>Action</td><td>(Required) Select the appropriate action that you want to perform on an IIS website.

"Create Or Update" will create a website or update an existing website.

 Start, Stop will start or stop the website respectively.</td></tr>
<tr><td>Action</td><td>(Required) Select the appropriate action that you want to perform on an IIS Application Pool.

"Create Or Update" will create app-pool or update an existing one.

Start, Stop, Recycle will start, stop or recycle the application pool respectively.</td></tr>
<tr><td>Website name</td><td>(Required) Provide the name of the IIS website.</td></tr>
<tr><td>Website name</td><td>(Required) Provide the name of the IIS website to create or update.</td></tr>
<tr><td>Physical path</td><td>(Required) Provide the physical path where the website content will be stored. The content can reside on the local Computer, or in a remote directory, or on a network share, like C:\Fabrikam or \\\\ContentShare\Fabrikam.</td></tr>
<tr><td>Physical path authentication</td><td>(Required) Select the authentication mechanism that will be used to access the physical path of the website.</td></tr>
<tr><td>Username</td><td>(Required) Provide the user name that will be used to access the website's physical path.</td></tr>
<tr><td>Password</td><td>(Optional) Provide the user's password that will be used to access the website's physical path. <br/>The best practice is to create a variable in the Build or Release pipeline, and mark it as 'Secret' to secure it, and then use it here, like '$(userCredentials)'. <br> Note: Special characters in password are interpreted as per <a href="https://go.microsoft.com/fwlink/?linkid=843470">command-line arguments</a></td></tr>
<tr><td>Add binding</td><td>(Optional) Select the option to add port binding for the website.</td></tr>
<tr><td>Protocol</td><td>(Required) Select HTTP for the website to have an HTTP binding, or select HTTPS for the website to have a Secure Sockets Layer (SSL) binding.</td></tr>
<tr><td>IP address</td><td>(Required) Provide an IP address that end-users can use to access this website. <br>If 'All Unassigned' is selected, then the website will respond to requests for all IP addresses on the port and for the host name, unless another website on the server has a binding on the same port but with a specific IP address.<br></td></tr>
<tr><td>Port</td><td>(Required) Provide the port, where the Hypertext Transfer Protocol Stack (HTTP.sys) will listen to the website requests.</td></tr>
<tr><td>Server Name Indication required</td><td>(Optional) Select the option to set the Server Name Indication (SNI) for the website. <br>SNI extends the SSL and TLS protocols to indicate the host name that the clients are attempting to connect to. It allows, multiple secure websites with different certificates, to use the same IP address.<br></td></tr>
<tr><td>Host name</td><td>(Optional) Enter a host name (or domain name) for the website. <br>If a host name is specified, then the clients must use the host name instead of the IP address to access the website.<br></td></tr>
<tr><td>Host name</td><td>(Optional) Enter a host name (or domain name) for the website. <br>If a host name is specified, then the clients must use the host name instead of the IP address to access the website.<br></td></tr>
<tr><td>Host name</td><td>(Required) Enter a host name (or domain name) for the website. <br>If a host name is specified, then the clients must use the host name instead of the IP address to access the website.<br></td></tr>
<tr><td>SSL certificate thumbprint</td><td>(Required) Provide the thumb-print of the Secure Socket Layer certificate that the website is going to use for the HTTPS communication as a 40 character long hexadecimal string. The SSL certificate should be already installed on the Computer, at Local Computer, Personal store.</td></tr>
<tr><td>Add bindings</td><td>(Required) Click on the extension [...] button to add bindings for the website.</td></tr>
<tr><td>Create or update app pool</td><td>(Optional) Select the option to create or update an application pool. If checked, the website will be created in the specified app pool.</td></tr>
<tr><td>Configure authentication</td><td>(Optional) Select the option to configure authentication for website.</td></tr>
<tr><td>Name</td><td>(Required) Provide the name of the IIS application pool to create or update.</td></tr>
<tr><td>.NET version</td><td>(Required) Select the version of the .NET Framework that is loaded by the application pool. <br>If the applications assigned to this application pool do not contain managed code, then select the 'No Managed Code' option from the list.<br></td></tr>
<tr><td>Managed pipeline mode</td><td>(Required) Select the managed pipeline mode that specifies how IIS processes requests for managed content. Use classic mode only when the applications in the application pool cannot run in the Integrated mode.</td></tr>
<tr><td>Identity</td><td>(Required) Configure the account under which an application pool's worker process runs. Select one of the predefined security accounts or configure a custom account.</td></tr>
<tr><td>Username</td><td>(Required) Provide the username of the custom account that you want to use.</td></tr>
<tr><td>Password</td><td>(Optional) Provide the password for custom account. <br/>The best practice is to create a variable in the Build or Release pipeline, and mark it as 'Secret' to secure it, and then use it here, like '$(userCredentials)'. <br> Note: Special characters in password are interpreted as per <a href="https://go.microsoft.com/fwlink/?linkid=843470">command-line arguments</a></td></tr>
<tr><td>Anonymous authentication</td><td>(Optional) Select the option to enable anonymous authentication for website.</td></tr>
<tr><td>Basic authentication</td><td>(Optional) Select the option to enable basic authentication for website.</td></tr>
<tr><td>Windows authentication</td><td>(Optional) Select the option to enable windows authentication for website.</td></tr>
<tr><td>Parent website name</td><td>(Required) Provide the name of the parent Website of the virtual directory.</td></tr>
<tr><td>Virtual path</td><td>(Required) Provide the virtual path of the virtual directory.

Example: To create a virtual directory Site/Application/VDir enter /Application/Vdir. The parent website and application should be already existing.</td></tr>
<tr><td>Physical path</td><td>(Required) Provide the physical path where the virtual directory's content will be stored. The content can reside on the local Computer, or in a remote directory, or on a network share, like C:\Fabrikam or \\\\ContentShare\Fabrikam.</td></tr>
<tr><td>Physical path authentication</td><td>(Optional) Select the authentication mechanism that will be used to access the physical path of the virtual directory.</td></tr>
<tr><td>Username</td><td>(Required) Provide the user name that will be used to access the virtual directory's physical path.</td></tr>
<tr><td>Password</td><td>(Optional) Provide the user's password that will be used to access the virtual directory's physical path. <br/>The best practice is to create a variable in the Build or Release pipeline, and mark it as 'Secret' to secure it, and then use it here, like '$(userCredentials)'. <br> Note: Special characters in password are interpreted as per <a href="https://go.microsoft.com/fwlink/?linkid=843470">command-line arguments</a></td></tr>
<tr><td>Parent website name</td><td>(Required) Provide the name of the parent Website under which the application will be created or updated.</td></tr>
<tr><td>Virtual path</td><td>(Required) Provide the virtual path of the application.

Example: To create an application Site/Application enter /Application. The parent website should be already existing.</td></tr>
<tr><td>Physical path</td><td>(Required) Provide the physical path where the application's content will be stored. The content can reside on the local Computer, or in a remote directory, or on a network share, like C:\Fabrikam or \\\\ContentShare\Fabrikam.</td></tr>
<tr><td>Physical path authentication</td><td>(Optional) Select the authentication mechanism that will be used to access the physical path of the application.</td></tr>
<tr><td>Username</td><td>(Required) Provide the user name that will be used to access the application's physical path.</td></tr>
<tr><td>Password</td><td>(Optional) Provide the user's password that will be used to access the application's physical path. <br/>The best practice is to create a variable in the Build or Release pipeline, and mark it as 'Secret' to secure it, and then use it here, like '$(userCredentials)'. <br> Note: Special characters in password are interpreted as per <a href="https://go.microsoft.com/fwlink/?linkid=843470">command-line arguments</a></td></tr>
<tr><td>Create or update app pool</td><td>(Optional) Select the option to create or update an application pool. If checked, the application will be created in the specified app pool.</td></tr>
<tr><td>Name</td><td>(Required) Provide the name of the IIS application pool to create or update.</td></tr>
<tr><td>.NET version</td><td>(Required) Select the version of the .NET Framework that is loaded by the application pool. <br>If the applications assigned to this application pool do not contain managed code, then select the 'No Managed Code' option from the list.<br></td></tr>
<tr><td>Managed pipeline mode</td><td>(Required) Select the managed pipeline mode that specifies how IIS processes requests for managed content. Use classic mode only when the applications in the application pool cannot run in the Integrated mode.</td></tr>
<tr><td>Identity</td><td>(Required) Configure the account under which an application pool's worker process runs. Select one of the predefined security accounts or configure a custom account.</td></tr>
<tr><td>Username</td><td>(Required) Provide the username of the custom account that you want to use.</td></tr>
<tr><td>Password</td><td>(Optional) Provide the password for custom account. <br/>The best practice is to create a variable in the Build or Release pipeline, and mark it as 'Secret' to secure it, and then use it here, like '$(userCredentials)'. <br> Note: Special characters in password are interpreted as per <a href="https://go.microsoft.com/fwlink/?linkid=843470">command-line arguments</a></td></tr>
<tr><td>Name</td><td>(Required) Provide the name of the IIS application pool to create or update.</td></tr>
<tr><td>.NET version</td><td>(Required) Select the version of the .NET Framework that is loaded by the application pool. <br>If the applications assigned to this application pool do not contain managed code, then select the 'No Managed Code' option from the list.<br></td></tr>
<tr><td>Managed pipeline mode</td><td>(Required) Select the managed pipeline mode that specifies how IIS processes requests for managed content. Use classic mode only when the applications in the application pool cannot run in the Integrated mode.</td></tr>
<tr><td>Identity</td><td>(Required) Configure the account under which an application pool's worker process runs. Select one of the predefined security accounts or configure a custom account.</td></tr>
<tr><td>Username</td><td>(Required) Provide the username of the custom account that you want to use.</td></tr>
<tr><td>Password</td><td>(Optional) Provide the password for custom account. <br/>The best practice is to create a variable in the Build or Release pipeline, and mark it as 'Secret' to secure it, and then use it here, like '$(userCredentials)'. <br> Note: Special characters in password are interpreted as per <a href="https://go.microsoft.com/fwlink/?linkid=843470">command-line arguments</a></td></tr>
<tr><td>Application pool name</td><td>(Required) Provide the name of the IIS application pool.</td></tr>
<tr><td>Additional appcmd.exe commands</td><td>(Optional) Enter additional AppCmd.exe commands. For more than one command use a line separator, like <br/> list apppools <br/> list sites<br/> recycle apppool /apppool.name:ExampleAppPoolName</td></tr>
[!INCLUDE [temp](../_shared/control-options-arguments.md)]
</table>

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.
