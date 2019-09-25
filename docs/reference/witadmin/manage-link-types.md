---
title: Manage link types
titleSuffix: TFS  
description: Customize the link types to track related work, dependencies, and changes made over time - Team Foundation Server (TFS)
ms.prod: devops
ms.technology: devops-agile
ms.assetid: bf160228-16db-45f2-9f4f-3cda82c62a88
ms.topic: reference
ms.manager: jillfra
ms.author: kaelliauthor: KathrynEE
monikerRange: '<= azure-devops-2019'
ms.date: 03/20/2018
---

# Manage link types

[!INCLUDE [temp](../../_shared/customization-witadmin-plus-version-header.md)]

Similar to work item types, you can define and modify custom link types. However, you can't make any changes to system-defined link types. Before you add a new link type to your project collection, review the link types available for your use. See [Manage dependencies, link work items](../../boards/queries/link-work-items-support-traceability.md).  
  
You manage the link types defined for a project collection by using the following **witadmin** commands:  
-   **deactivatelinktype**:  Deactivates the specified link type. Users will no longer be able to create links of this type. Existing links of this type will continue to function correctly.    
-   **deletelinktype**:  Permanently removes the specified link type from the database. All links defined with this link type are also removed.    
-   **exportlinktype**:  Exports the definitions of link types. You can export the definition of a single link type or all link types defined for the server. 
-   **importlinktype**:  Imports the definitions of link types from an XML file. If a link type with the same reference name already exists, it will be updated to match the imported link type. If the link type does not already exist, a new link type will be created.   
-   **listlinktypes**:  Lists the available set of link types on a server. 
-   **reactivatelinktype**: Reactivates the specified link type, and optionally assigns it a new name.  
  
[!INCLUDE [temp](../../_shared/witadmin-run-tool.md)]  

## Prerequisites  
  
 For the project collection where the link types are defined, you must have the following permissions set:  
  
-   To list or export link types, you must have your **View project-level information** permission for a project in the collection set to **Allow**.    
-   To delete, import, or reactive link types, you must be a member of the **Project Collection Administrators** security group or have your **Manage work item link types** permission set to **Allow**.  
  
For more information, see [Add an administrator](../../organizations/security/set-project-collection-level-permissions.md).  
  
> [!NOTE]
>  Even if you sign in with administrative permissions, you must open an elevated Command Prompt window to perform this function on a server that is running Windows Server 2008. To open an elevated Command Prompt window, choose **Start**, open the **Command Prompt** shortcut menu, and then choose **Run as Administrator**.  For more information, see the Microsoft Web site: [User Access Control](http://go.microsoft.com/fwlink/?LinkId=111235).  
  
## Syntax  
  
```  
witadmin deactivatelinktype /collection:CollectionURL /n:LinkName  
witadmin deletelinktype /collection:CollectionURL /n:LinkName [/noprompt]   
witadmin exportlinktype /collection:CollectionURL [/n:LinkName] [/f:FileName] [/e:Encoding]   
witadmin importlinktype /collection:CollectionURL /f:FileName [/e:Encoding] [/v]  
witadmin listlinktypes /collection:CollectionURL  
witadmin reactivatelinktype /collection:CollectionURL /n:LinkName  
```  
  
#### Parameters  
  
|**Parameter**|**Description**|  
|-------------------|---------------------|  
|**/collection**:`CollectionURL`|Specifies the URI of the project collection. For example:<br /><br /> **On-premises TFS format:  http**://*ServerName:Port/VirtualDirectoryName/CollectionName*<br /><br /> If no virtual directory is used, then the format for the URI is the following: **http**://*ServerName:Port/CollectionName*. |  
|**/n:** `LinkName`|The name or the reference name of the link type to deactivate or delete.|  
|**/f:** `FileName`|The XML file of link types. Required for import, optional for export. If you omit this parameter, the command output appears on the display.|  
|**/e:** `encoding`|The name of a .NET Framework 2.0 encoding format. The specified encoding will be used to export or import the XML data. For example, `/e:utf-7` specifies Unicode (UTF-7) encoding. If you omit this parameter, **witadmin** attempts to detect the encoding, and if detection fails, **witadmin** uses UTF-8.|  
|**/v**|Validates the link type XML without importing it.|  
|**/noprompt**|Disables the prompt for confirmation.|  
|**/?** or **help**|Displays help about the command in the Command Prompt window.|  
  
## Remarks  
 
For the structure of the link type definition schema or information about how you can restrict the types of link relationships that team members can make, see [LinksControlOptions](../xml/linkscontroloptions-xml-elements.md).  
  
## Examples  
 Unless otherwise specified, the following values apply in each example:  
  
-   URI for the project collection: http://AdventureWorksServer:8080/tfs/DefaultCollection    
-   Server name: AdventureWorksServer    
-   Input or output file name: myLinkTypes.xml    
-   Link type name: mylinktype    
-   Default encoding: UTF-8  
  
### List Link Types  
 The following command displays the custom link types defined for Team Foundation AdventureWorksServer.  
  
```  
witadmin listlinktypes /collection:http://AdventureWorksServer:8080/tfs/DefaultCollection  
```  
  
### List the definition of a link type  
 The following example displays the definition of the link type in the Command Prompt window:  
  
```  
witadmin exportlinktype /collection:http://AdventureWorksServer:8080/tfs/DefaultCollection  
```  
  
### Deactivate and then reactivate a link type  
 The following examples deactivate the link type, mylinktype, and then reactivate it:  
  
```  
witadmin deactivatelinktype /collection:http://AdventureWorksServer:8080/tfs/DefaultCollection /n:mylinktype  
witadmin activatelinktype /collection:http://AdventureWorksServer:8080/tfs/DefaultCollection /n:mylinktype  
```  
  
### Export the definition of a link type  
 The following command exports the definition of all link types to the file, mylinktype.xml:  
  
```  
witadmin exportlinktype /collection:http://AdventureWorksServer:8080/tfs/DefaultCollection /f:mylinktype.xml  
```  
  
### Import the definition of link types  
 The following example imports the definition of the link types defined in the XML file:  
  
```  
witadmin importlinktype /collection:http://AdventureWorksServer:8080/tfs/DefaultCollection /f:mylinktype.xml  
```  
  
## Related articles 
- [Customize your work tracking experience](../customize-work.md)    
- [LinksControlOptions](../xml/linkscontroloptions-xml-elements.md)
- [Link controls, restrictions, and fields](../../boards/queries/linking-attachments.md)   
- [Manage dependencies, link work items](../../boards/queries/link-work-items-support-traceability.md)   
- [witAdmin: Customize and manage objects for tracking work](witadmin-customize-and-manage-objects-for-tracking-work.md)