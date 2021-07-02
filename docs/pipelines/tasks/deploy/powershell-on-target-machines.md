---
title: PowerShell on Target Machines task
description: PowerShell on Target Machines build task
ms.assetid: 7E6E54ED-4605-471A-B1E6-9D00C10CA66E
ms.topic: reference
ms.custom: seodec18
ms.author: ronai
author: RoopeshNair
ms.date: 12/07/2018
monikerRange: '>= tfs-2015'
---

# PowerShell on Target Machines task

[!INCLUDE [temp](../../includes/version-tfs-2015-rtm.md)]

Use this task to execute PowerShell scripts on remote machine(s).

This task can run both PowerShell scripts and PowerShell-DSC scripts:

* For PowerShell scripts, the computers must have PowerShell 2.0 or higher installed.
* For PowerShell-DSC scripts, the computers must have 
  [the latest version of the Windows Management Framework](https://www.microsoft.com/download/details.aspx?id=54616)
  installed. This is installed by default on Windows 8.1, Windows Server 2012 R2, and later.

::: moniker range="<= tfs-2018"

[!INCLUDE [temp](../../includes/concept-rename-note.md)]

::: moniker-end

## Prerequisites

[!INCLUDE[deploy-winrm-setup](../includes/deploy-winrm-setup.md)]

::: moniker range="> tfs-2018"

## YAML snippet

[!INCLUDE [temp](../includes/yaml/PowerShellOnTargetMachinesV3.md)]

::: moniker-end

## Arguments

|                 Argument                  |                                                                                                                                                                                                                                                                                                            Description                                                                                                                                                                                                                                                                                                             |
|-------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|               **Machines**                | A comma-separated list of machine FQDNs or IP addresses, optionally including the port number. Can be:<br />- The name of an <a href="/azure/azure-resource-manager/management/overview">Azure Resource Group</a>.<br />- A comma-delimited list of machine names. Example: `dbserver.fabrikam.com,dbserver_int.fabrikam.com:5986,192.168.34:5986`<br />- An output variable from a previous task.<br />If you do not specify a port, the default WinRM port is used. This depends on the protocol you have configured: for WinRM 2.0, the default HTTP port is 5985 and the default HTTPS port is 5986. |
|              **Admin Login**              |                                                                                                                                  The username of either a domain or a local administrative account on the target host(s).<br />- Formats such as **username**, **domain\username**, **machine-name\username**, and **.\username** are supported.<br />- UPN formats such as <strong>username@domain.com</strong> and built-in system accounts such as **NT Authority\System** are not supported.                                                                                                                                   |
|               **Password**                |                                                                                                                                                                                                                    The password for the administrative account specified above. Consider using a secret variable global to the build or release pipeline to  hide the password. Example: `$(passwordVariable)`                                                                                                                                                                                                                     |
|               **Protocol**                |                                                                                                                                                                                                                                                                    The protocol that will be used to connect to the target host, either **HTTP** or **HTTPS**.                                                                                                                                                                                                                                                                     |
|           **Test Certificate**            |                                                                                                                                                                                                                                    If you choose the **HTTPS** option, set this checkbox to skip validating the authenticity of the machine's certificate by a trusted certification authority.                                                                                                                                                                                                                                    |
|    **Deployment - PowerShell Script**     |                                                                                                                                                                                                                       The location of the PowerShell script on the target machine. Can include environment variables such as `$env:windir` and `$env:systemroot` Example: `C:\FabrikamFibre\Web\deploy.ps1`                                                                                                                                                                                                                        |
|     **Deployment - Script Arguments**     |                                                                                                                                                                                                                                            The arguments required by the script, if any. Example: `-applicationPath $(applicationPath) -username $(vmusername) -password $(vmpassword)`                                                                                                                                                                                                                                            |
|  **Deployment - Initialization Script**   |                                                                                                                                                                                                                                      The location on the target machine(s) of the data script used by PowerShell-DSC. It is recommended to use arguments instead of an initialization script.                                                                                                                                                                                                                                      |
|    **Deployment - Session Variables**     |                                                                                                                                                                     Used to set up the session variables for the PowerShell scripts. A comma-separated list such as `$varx=valuex, $vary=valuey` Most commonly used for backward compatibility with earlier versions of the release service. It is recommended to use arguments instead of session variables.                                                                                                                                                                      |
| **Advanced - Run PowerShell in Parallel** |                                                                                                                                                                                                                                                                      Set this option to execute the PowerShell scripts in parallel on all the target machines                                                                                                                                                                                                                                                                      |
|     **Advanced - Select Machines By**     |                                                                                                                                                                                                                                         Depending on how you want to specify the machines in the group when using the **Filter Criteria** parameter, choose **Machine Names** or **Tags**.                                                                                                                                                                                                                                         |
|      **Advanced - Filter Criteria**       |                        Optional. A list of machine names or tag names that identifies the machines that the task will target. The filter criteria can be:<br />- The name of an <a href="/azure/azure-resource-manager/management/overview">Azure Resource Group</a>.<br />- An output variable from a previous task.<br />- A comma-delimited list of tag names or machine names.<br />Format when using machine names is a comma-separated list of the machine FQDNs or IP addresses.<br />Specify tag names for a filter as {TagName}**:**{Value} Example: `Role:DB;OS:Win8.1`                        |
|            **Control options**            |                                                                                                                                                                                                                                                                                    See [Control options](../../process/tasks.md#controloptions)                                                                                                                                                                                                                                                                                    |

> Version 3.x of the task includes the **Inline script** setting where you can enter your PowerShell script code.

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.

## FAQ
<!-- BEGINSECTION class="md-qanda" -->

[!INCLUDE [qa-agents](../../includes/qa-agents.md)]

::: moniker range="<= tfs-2018"

[!INCLUDE [qa-versions](../../includes/qa-versions.md)]

::: moniker-end

<!-- ENDSECTION -->