---
title: Antivirus scanning exclusions for Azure DevOps
description: This article describes the system processes that you should consider excluding from antivirus scanning on computers that are running Azure DevOps Server or self-hosted agents.
ms.date: 03/25/2024
ms.custom: sap:Installation, Migration, and Move
ms.reviewer: vimalt, manojm
---

# Antivirus scanning exclusions for Azure DevOps

This article provides information about the processes and folders that may have to be excluded from antivirus scanning on computers that are running Team Foundation Server (TFS), Azure DevOps Server or self-hosted agents of Azure DevOps Services. It also provides links to Microsoft Knowledge Base articles that discuss antivirus exclusions that may be defined on servers hosting deployments of Microsoft SQL Server and SharePoint Server that have been integrated with Azure DevOps Server.

_Original product version:_ &nbsp; Microsoft Team Foundation Server, Azure DevOps Server    
_Original KB number:_ &nbsp; 2636507

## Symptoms

Target files will be locked when the antivirus software is scanning. Builds may take a longer time to complete and you might encounter errors if proper folders aren't added to the antivirus software's directory exclusion list. These errors might include intermittent instances where the Team Foundation Server Application Pool crashes. The following list includes errors that you might encounter:

- The following event is added to the system's Application log: `Event ID 5002 Application pool Team Foundation Server Application Pool is being automatically disabled due to a series of failures in the process(es) serving that application pool.`

- The following event is added to the system's Application log before the Team Foundation Server Application Pool crashes: `TF400850: The request context was not disposed by the caller. Exception Message: Cannot access a disposed object.`

## Exclusion list

> [!WARNING]
> Excluding a file or process from antivirus scanning could make your device or data more vulnerable. You should evaluate the risks and use discretion when implementing exclusions, and only exclude files that you are confident are safe.

If you encounter the issue described previously, you might have to configure your antivirus software to exclude the following processes, folders, and their sub-folders from antivirus scanning.

TFS, Azure DevOps Server:

- `%ProgramFiles%\Azure DevOps Server\<VersionNumber\>`
- `%ProgramFiles%\Azure DevOps Server\<VersionNumber\>\Application Tier\TFSJobAgent`
- `C:\Users\<TFS_Service_Account\>\AppData\Local\Temp`
- `C:\inetpub\temp`
- `%ProgramFiles%\Azure DevOps Server <VersionNumber\>\Application Tier\Web Services\bin`
- `C:\AzureDevOpsData\ApplicationTier\_fileCache`
- TFS/Azure DevOps Server cache folder
  - On the server: `C:\Users\<ServiceAccountName\>\AppData\Local\Microsoft\Azure DevOps\<VersionNumber\>\Cache`
  - On the client: `C:\Users\<UserName\>\AppData\Local\Microsoft\Azure DevOps\<VersionNumber\>\Cache`
- The _TFSJobAgent.exe_ process that is typically located at:
   - `%ProgramFiles%\Microsoft Team Foundation Server\<VersionNumber\>\Application Tier\TFSJobAgent\TFSJobAgent.exe` (for TFS)
   - `%ProgramFiles%\Azure DevOps Server\<VersionNumber\>\Application Tier\TFSJobAgent\TFSJobAgent.exe` (for Azure DevOps Server)

Azure DevOps Server, Azure DevOps Services (self-hosted agents):

- Pipeline agent folders
- `TFSbuildServicehost.exe` process for XAML builds
- Processes for vNext builds like `Agent.Listener.exe`, `Agent.Worker.exe`, and `AgentService.exe`
- Self-Hosted Agent folders like `\Builds`, `\Symbols`, `\Drop`, `\bin`, `\_diag`, `\_work`
- `%ProgramFiles%\Microsoft Visual Studio\<VersionNumber\>`
- `C:\Windows\Microsoft.NET\Framework\`
- `C:\Windows\Microsoft.NET\Framework\<VersionNumber>\Temporary ASP.NET Files\`
- `C:\Windows\Microsoft.NET\Framework64\<VersionNumber>\Temporary ASP.NET Files\`

## More information

For better performance of source control and other TFS/Azure DevOps Server operations, we recommend adding the Internet Information Services (IIS) worker process (`w3wp.exe`) to the list of antivirus exclusions. This is not a requirement for Azure DevOps Services.

The `w3wp.exe` process is typically located at `C:\Windows\System32\inetsrv\w3wp.exe`. You can also locate this process by following these steps:

1. Make a TFS/Azure DevOps Server web request by connecting to the server using Team Explorer.
2. On the TFS/Azure DevOps Server application tier or the TFS/Azure DevOps Server proxy machine, open **Task Manager**, and then select the **Details** tab.
3. In the list of processes that are running, find **w3wp.exe**.
4. Right-click **w3wp.exe**, and then select **Open file location**.

For more information about SQL Server and SharePoint Server folder exclusions, see the following articles:

- [Configure antivirus software to work with SQL Server](/troubleshoot/sql/database-engine/security/antivirus-and-sql-server)

- [Certain folders may have to be excluded from antivirus scanning when you use file-level antivirus software in SharePoint](https://support.microsoft.com/office/certain-folders-may-have-to-be-excluded-from-antivirus-scanning-when-you-use-file-level-antivirus-software-in-sharepoint-01cbc532-a24e-4bba-8d67-0b1ed733a3d9)
