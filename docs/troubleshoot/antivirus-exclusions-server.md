---
title: Configure antivirus exclusions for Azure DevOps Server
description: Learn which processes, folders, and files to exclude from antivirus scanning to avoid performance issues and application pool crashes in Azure DevOps Server.
ms.topic: troubleshooting
ms.author: chcomley
author: chcomley
ms.date: 02/23/2026
ai-usage: ai-assisted
---

# Configure antivirus exclusions for Azure DevOps Server

Antivirus software scanning files on your Azure DevOps Server can lock files, slow down builds, and cause application pool crashes.
This article lists the processes and directories to exclude from antivirus scanning to avoid these issues.

> [!WARNING]
> Excluding files or processes from antivirus scanning can make your server more vulnerable.
> Evaluate the risks and only exclude paths you're confident are safe.

## Symptoms

When antivirus software interferes with Azure DevOps Server operations, you might experience:

- Builds take longer than expected to complete.
- Intermittent application pool crashes with errors such as:
  - `Event ID 5002: Application pool Team Foundation Server Application Pool is being automatically disabled due to a series of failures in the process(es) serving that application pool.`
  - `TF400850: The request context was not disposed by the caller`
- File or folder in use errors during builds or deployments.

## Processes to exclude

Exclude the following processes from antivirus scanning:

| Process | Typical location |
|---------|-----------------|
| **TFSJobAgent.exe** | `%ProgramFiles%\Azure DevOps Server <Version>\Application Tier\TFSJobAgent\TFSJobAgent.exe` |
| **w3wp.exe** (IIS worker process) | `C:\Windows\System32\inetsrv\w3wp.exe` |

> [!TIP]
> For better performance of source control and other Azure DevOps Server operations, add the IIS worker process (`w3wp.exe`) to your antivirus exclusion list.

## Directories to exclude

Exclude the following directories and their subdirectories from antivirus scanning:

### Application tier

| Directory | Description |
|-----------|-------------|
| `%ProgramFiles%\Azure DevOps Server <Version>` | Azure DevOps Server installation directory |
| `%ProgramFiles%\Azure DevOps Server <Version>\Application Tier\Web Services\bin` | Web services binaries |
| `%ProgramFiles%\Azure DevOps Server <Version>\Application Tier\TFSJobAgent` | Job agent directory |
| `C:\AzureDevOpsData\ApplicationTier\_fileCache` | Application tier file cache |

### IIS and ASP.NET

| Directory | Description |
|-----------|-------------|
| `C:\inetpub\temp` | IIS temporary files |
| `C:\Windows\Microsoft.NET\Framework\<Version>\Temporary ASP.NET Files` | ASP.NET temporary files (32-bit) |
| `C:\Windows\Microsoft.NET\Framework64\<Version>\Temporary ASP.NET Files` | ASP.NET temporary files (64-bit) |

### Cache directories

| Directory | Description |
|-----------|-------------|
| `C:\Users\<ServiceAccountName>\AppData\Local\Microsoft\Azure DevOps\<Version>\Cache` | Server-side cache (service account) |
| `C:\Users\<ServiceAccountName>\AppData\Local\Temp` | Service account temp directory |

Replace `<ServiceAccountName>` with the account running the Azure DevOps Server application pool.

### Client-side cache

On developer workstations connecting to Azure DevOps Server:

| Directory | Description |
|-----------|-------------|
| `C:\Users\<UserName>\AppData\Local\Microsoft\Azure DevOps\<Version>\Cache` | Client-side cache |

## SQL Server exclusions

If SQL Server is hosted on the same server or on a dedicated data tier, configure antivirus exclusions for SQL Server as well.
For guidance, see [Configure antivirus software to work with SQL Server](/troubleshoot/sql/database-engine/security/antivirus-and-sql-server).

## Self-hosted build agents

If you run self-hosted build agents on your Azure DevOps Server or on separate machines, see [Anti-virus exclusion](/azure/devops/pipelines/troubleshooting/troubleshooting#anti-virus-exclusion) for the agent-specific directories and processes to exclude.

## Related content

- [Azure DevOps Server requirements](/azure/devops/server/requirements)
