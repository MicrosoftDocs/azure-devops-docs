---
title: Upload or download the Microsoft Project Mapping file
titleSuffix: TFS
description: Upload or download the Microsoft Project mapping file using the TFSFieldMapping command
ms.prod: devops
ms.technology: devops-agile
ms.assetid: 43474098-a23a-49c2-bfa8-2f4beb0e5399
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
monikerRange: '<= tfs-2018'
ms.date: 01/28/2019
---


# Upload or download the Microsoft Project Mapping file

[!INCLUDE [temp](../../_shared/version-tfs-2018-earlier.md)]  
  
Use **TFSFieldMapping** to upload and download the Microsoft Project mapping file. This file controls how Microsoft Project publishes tasks to a project that connects to an on-premises Team Foundation Server (TFS). For example, you can modify the file to support fields you added to work item types or modify the way in which existing fields are published and refreshed.  

[!INCLUDE [temp](_shared/project-integration-deprecated.md)]

You can specify which work tracking fields map to Project fields. You can also control publishing behavior through the **PublishOnly** attribute, and designate special fields such as the context field. For the complete XML syntax of the mapping file, see [Customize the Microsoft Project field mapping file](customize-project-field-mapping-file.md). This file is the same file that was defined in the process template that was used to create the project. See [Map Microsoft Project fields](map-microsoft-project-fields-to-tf-fields.md)  
  
The **TFSFieldMapping** command-line tool works for only on-premises deployments. To run the tool, open a Command Prompt window where Team Foundation Server is installed. 
 
|Version | Change directory |
|--------|-----------|
|TFS 2018|`cd %programfiles(x86)%\Common Files\microsoft shared\Team Foundation Server\16.0 ` |
|TFS 2017|`cd %programfiles(x86)%\Common Files\microsoft shared\Team Foundation Server\15.0 ` |
|TFS 2015|`cd %programfiles(x86)%\Common Files\microsoft shared\Team Foundation Server\14.0 ` |
|TFS 2013|`cd %programfiles(x86)%\Common Files\microsoft shared\Team Foundation Server\12.0 ` |
  

On a 32-bit edition of Windows, replace **%programfiles(x86)%** with **%programfiles%**.  

  
> [!NOTE]  
>  Even if you are logged on with administrative permissions, you must open an elevated Command Prompt to perform this function on a server that is running Windows Server 2008. To open an elevated Command Prompt, choose **Start**, open the context menu for **Command Prompt**, and then choose **Run as Administrator**. For more information, see the [User Account Control](/previous-versions/windows/it-pro/windows-server-2008-R2-and-2008/cc772207(v=ws.10)).  
  
 **Requirements**  
  
 To use the **TFSFieldMapping** command, you must be a member of the **Team Foundation Administrators** or the **Project Collection Administrators** security group. For more information, see [Add administrators, set permissions at the project-level or project collection-level](../../organizations/security/set-project-collection-level-permissions.md).  
  
## Syntax  
  
```  
TFSFieldMapping upload | download /collection:CollectionURL /teamproject:ProjectName /mappingfile:MappingFile   
```  
  
#### Parameters  
  
|**Argument**|**Description**|  
|------------------|---------------------|  
|**upload &#124; download**|Specifies whether to download or upload the field mapping file.|  
|**/collection**:<i>CollectionURL</i>|Specifies the URI of the project collection in the following format: **http**://*ServerName:Port/VirtualDirectoryName/CollectionName*<br /><br /> If you do not specify a virtual directory is used, you must use the following format:<br /><br /> **http**://*ServerName:Port/CollectionName*<br /><br /> If you have previously connected to the server, you can specify the friendly name for the server instead of the URI.|  
|**/teamproject:**<i>ProjectName</i>|Specifies the name of the project whose mapping parameters you want to modify. If the name contains spaces, enclose it in quotation marks.|  
|**/mappingfile:**<i>MappingFile</i>|Specifies the name and file path of the mapping file.|  
  
## To change how work item fields are mapped to Project  
  
1.  Open a Command Prompt window where you have installed TFS and change the directory to point to the tools. For example:  
  
    ```  
    cd %programfiles(x86)%\Common Files\microsoft shared\Team Foundation Server\16.0 
    ```  
  
    > [!TIP]  
    >  Project isn't required to download the mapping file, however, it is required to upload it.  
  
2.  Download the mapping file by entering the following command:  
  
    ```  
    TFSFieldMapping download /collection:CollectionURL /teamproject:ProjectName /mappingfile:MappingFile  
    ```  
  
    > [!TIP]  
    >  If a name contains spaces, enclose the name in quotes.  
  
3.  Open the mapping file in a text editor or XML editor.  
  
4.  Add new mappings or edit existing mappings in the following format:  
  
    > [!div class="tabbedCodeSnippets"]
	```XML   
    <Mapping WorkItemTrackingFieldReferenceName="System.Id"   
       ProjectField=""  
       ProjectName=""  
       ProjectUnits=""  
       PublishOnly=""  
       IfSummaryRefreshOnly=""/>    
    ```  
  
     For example, to add additional scheduling fields to a project created using the Scrum process template, add the following mappings:  
  
    > [!div class="tabbedCodeSnippets"]
	```XML   
    <Mapping WorkItemTrackingFieldReferenceName="Microsoft.VSTS.Scheduling.StartDate" ProjectField="pjTaskStart" PublishOnly="true" />  
    <Mapping WorkItemTrackingFieldReferenceName="Microsoft.VSTS.Scheduling.FinishDate" ProjectField="pjTaskFinish" PublishOnly="true" />  
    <Mapping WorkItemTrackingFieldReferenceName="Microsoft.VSTS.Scheduling.OriginalEstimate" ProjectField="pjTaskBaselineWork" ProjectUnits="pjHour" IfSummaryRefreshOnly="true" />  
    <Mapping WorkItemTrackingFieldReferenceName="Microsoft.VSTS.Scheduling.CompletedWork" ProjectField="pjTaskActualWork" ProjectUnits="pjHour" IfSummaryRefreshOnly="true" />    
    ```  
  
     The default Scrum template only maps the Remaining Work field to Project.  
  
    > [!NOTE]  
    >  For a full list of all Project field values for the ProjectField attribute, see [Field mappings in Microsoft Project](field-mappings-in-microsoft-project.md).  
  
5.  (Optional) Indicate if the field is to be published but not refreshed. Add the `PublishOnly` attribute to the mapping section for that field and set the attribute to `true`. This attribute can be used to allow for team members to see a field value but not be able to change it in Team Foundation.  
  
6.  (Optional) Indicate how summary tasks are to be refreshed  in Project. Add `fSummaryRefreshOnly="true"` attribute to indicate that the field is never published to the work item database but is refreshed from the work item database when  the row for the field is a summary task in Project, the summary task has **Publish and Refresh=Yes**, and the summary task contains at least one child task that is published to work tracking.  
  
7.  Save and upload the file:  
  
    > [!div class="tabbedCodeSnippets"]
	```   
    TFSFieldMapping upload /collection:CollectionURL /teamproject:ProjectName /mappingfile:MappingFile  
    ```  
  
## Related articles
-  [Customize the Microsoft Project field mapping file](customize-project-field-mapping-file.md)   
-  [Field mappings in Microsoft Project](field-mappings-in-microsoft-project.md)
