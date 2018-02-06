---
description: Windows Machine File Copy build task
title: Windows Machine File Copy build and release task for VSTS and TFS
ms.prod: vs-devops-alm
ms.technology: vs-devops-build
ms.assetid: 1451866C-180E-4D8A-88ED-3B76BC30C09F
ms.manager: douge
ms.author: ahomer
ms.date: 01/19/2018
---

# Deploy: Windows Machine File Copy

[!INCLUDE [temp](../../_shared/version-tfs-2015-rtm.md)]

![icon](_img/windows-machine-file-copy-icon.png) Copy files to remote machines.

Use this task to copy application files and other artifacts such as
PowerShell scripts and PowerShell-DSC modules that are required to 
install the application on Windows Machines. It uses RoboCopy, the 
command-line utility built for fast copying of data.

## Arguments

| Argument | Description |
| -------- | ----------- |
| **Source** | The path to the files to copy. Can be a local physical path such as `c:\files` or a UNC path such as `\\myserver\fileshare\files`. You can use pre-defined system variables such as `$(Build.Repository.LocalPath)` (the working folder on the agent computer), which makes it easy to specify the location of the build artifacts on the computer that hosts the automation agent. |
| **Machines** | A comma-separated list of machine FQDNs or IP addresses, optionally including the port number. Can be:<br />- The name of an <a href="https://azure.microsoft.com/en-gb/documentation/articles/resource-group-overview/">Azure Resource Group</a>.<br />- A comma-delimited list of machine names. Example: `dbserver.fabrikam.com, dbserver_int.fabrikam.com:5986,192.168.34:5986`<br />- An output variable from a previous task. |
| **Admin Login** | The username of either a domain or a local administrative account on the target host(s).<br />- Formats such as **domain\username**, **username**, and **machine-name\username** are supported.<br />- UPN formats such as **username@domain.com** and built-in system accounts such as **NT Authority\System** are not supported. |
| **Password** | The password for the administrative account specified above. Consider using a secret variable global to the build or release definition to hide the password. Example: `$(passwordVariable)` |
| **Destination Folder** | The folder on the Windows machine(s) to which the files will be copied. Example: `C:\FabrikamFibre\Web` |
| **Advanced - Clean Target** | Set this option to delete all the files in the destination folder before copying the new files to it. |
| **Advanced - Copy Files in Parallel** | Set this option to copy files to all the target machines in parallel, which can speed up the copying process. |
| **Advanced - Additional Arguments** | Arguments to pass to the RoboCopy process. Example: `/min:33553332 /l` |
| **Select Machines By** | Depending on how you want to specify the machines in the group when using the **Filter Criteria** parameter, choose **Machine Names** or **Tags**. |
| **Filter Criteria** | Optional. A list of machine names or tag names that identifies the machines that the task will target. The filter criteria can be:<br />- The name of an <a href="https://azure.microsoft.com/en-gb/documentation/articles/resource-group-overview/">Azure Resource Group</a>.<br />- An output variable from a previous task.<br />- A comma-delimited list of tag names or machine names.<br />Format when using machine names is a comma-separated list of the machine FDQNs or IP addresses.<br />Specify tag names for a filter as {TagName}<strong>:</strong>{Value} Example: `Role:DB;OS:Win8.1` |
| **Control options** | See [Control options](../../concepts/process/tasks.md#controloptions) |

## Q&A
<!-- BEGINSECTION class="md-qanda" -->

### I get a system error 53 when using this task. Why?

Typically this occurs when the specified path cannot be located.
This may be due to a firewall blocking the necessary ports for file and printer sharing,
or an invalid path specification. For more details, see
[Error 53](https://technet.microsoft.com/library/cc940100.aspx) on Technet and
[Troubleshooting System Error: 53 - Network Path not found errors](http://support.dameware.com/kb/article.aspx?ID=300059) on the Dameware knowledgebase.

[!INCLUDE [qa-agents](../../_shared/qa-agents.md)]

[!INCLUDE [qa-versions](../../_shared/qa-versions.md)]

<!-- ENDSECTION -->

[!INCLUDE [rm-help-support-shared](../../_shared/rm-help-support-shared.md)]
