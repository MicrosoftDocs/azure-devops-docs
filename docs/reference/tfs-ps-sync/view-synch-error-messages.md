---
title: View synchronization engine error messages
titleSuffix: TFS 
description: View synchronization engine error messages when using Team Foundation Server & Project Server integration
ms.prod: devops
ms.technology: devops-agile
ms.assetid: cd4e04e2-7a15-4a2c-8833-301f1292cdba
ms.manager: jillfra
ms.author: kaelliauthor: KathrynEE
ms.topic: troubleshooting
ms.date: 01/12/2017
---

# View synchronization engine error messages
[!INCLUDE [temp](../../_shared/tfs-ps-sync-header.md)]

<a name="Top"></a> To help troubleshoot the integration of Visual Studio Team Foundation Server (TFS) and Microsoft Project Server, you can display a list of recent synchronization errors. You can display the most recent errors that were logged for a project collection by using the `/GetSyncMessages` option of the **TFSAdmin ProjectServer** command-line tool.  
  
> [!NOTE]
>  For information about the synchronization process, see [Overview of integration features](overview-tfs-project-server-integration.md).  
  
 To run the **TfsAdmin** command-line tool, open a Command Prompt window where either Visual Studio or Team Explorer is installed and enter:  
  
```  
cd %programfiles(x86)%\Microsoft Visual Studio 12.0\Common7\IDE  
```  
  
 On a 32-bit edition of Windows, replace **%programfiles(x86)%** with **%programfiles%.**.  
  
 **Requirements**  
  
 To use this command, your **Administer Project Server integration** permission must be set to **Allow** for the project collection. Also, the service account for Team Foundation Server must be granted the necessary permissions to interact with the instance of Project Web Access or Project Web App (PWA) that will participate in data synchronization. For more information, see [Assign permissions](assign-permissions-support-tfs-project-server-integration.md).  
  
 
  
## Syntax  
  
```  
TfsAdmin ProjectServer /GetSyncMessages /collection:tpcUrl  
```  
  
#### Parameters  
  
|**Parameter**|**Description**|  
|-------------------|---------------------|  
|**/collection**: `tpcUrl`|Specifies the uniform resource locator (URL) of a project collection. You specify the URI in the following format:<br /><br /> **http**://*ServerName:Port/VirtualDirectoryName/CollectionName*<br /><br /> If you do not specify a virtual directory, you specify the URI in the following format:<br /><br /> **http**://*ServerName:Port/CollectionName*|  
|**/?** or **help**|Displays information about the command.|  
  
## Return value  
 The **/GetSyncMessages** option displays a tab-delimited set of messages with their column headers. The following information appears for each message:  
  
-   **Date**: Date when the message was logged.  
  
-   **Team Project Collection Name\Team Project Name**: Names of the project collection and the project.  
  
-   **Project Name**: Name of the enterprise project plan.  
  
-   **Message**: Content of the message.  
  
 These messages are extracted from the synchronization job log. The `/GetSyncMessages` option truncates the messages that are much longer than average. When this truncation occurs, the following message appears:  
  
 **There are additional errors that have been truncated from the log. These errors can be viewed in the event log for the application-tier server(s).**  
  
 You can view the complete message by opening the event log for the corresponding application-tier server.  
  
## Example  
 The following example retrieves the error messages that have been logged for DefaultCollection, which is defined on the MyTFSServer application-tier server.  
  
```  
TfsAdmin ProjectServer /GetSyncMessages /collection:http://MyTFSServer:8080/tfs/DefaultCollection  
  
```  
  
> [!TIP]
>  You can use standard command-line syntax to send the output to a file. For example, you can specify **>c:\output.txt**.  
  
## Related articles  
 [Overview of integration features](overview-tfs-project-server-integration.md)   
 [Known issues and workarounds](known-issues-and-workarounds.md)   
 [Map integration components](map-integration-components.md)