---
title: Import and export global workflow using witadmin
titleSuffix: TFS  
description: Manage the global workflow to minimize the work required by defining and updating the work item fields and global lists that multiple projects and types of work items share - Team Foundation Server (TFS)
ms.prod: devops
ms.technology: devops-agile
ms.assetid: ac1a2973-6c8f-439d-bb7d-e141aaadc124
ms.topic: reference
ms.manager: jillfra
ms.author: kaelliauthor: KathrynEE
monikerRange: '<= azure-devops-2019'
ms.date: 03/20/2018
---

# Import and export global workflow

[!INCLUDE [temp](../../_shared/customization-witadmin-plus-version-header.md)]

By using global workflow, you can minimize the work required to define and update work item fields and global lists that multiple projects and types of work items share. With global workflow, you can define and update fields and global lists. You can manage the global workflow for a project collection or a project by using the following commands in the **witadmin** command-line tool:  
  
-   **exportglobalworkflow**:  Exports the global workflow to an XML file or the Command Prompt window.   
-   **importglobalworkflow**:  Imports global workflow from an XML file.  
  
[!INCLUDE [temp](../../_shared/witadmin-run-tool.md)]  

  
 **Requirements**  
  
-   To export a global workflow, you must be a valid user of the project or project collection.    
-   To import a global workflow to a project, you must be a member of the following security groups: **Team Foundation Administrators**, **Project Collection Administrators**, or **Project Administrators**.    
-   To import a global workflow to a project collection, you must be a member of either the **Team Foundation Administrators** or **Project Collection Administrators**.  
  
See [Add administrators, set permissions at the project-level or project collection-level](../../organizations/security/set-project-collection-level-permissions.md).  
  
> [!NOTE]    
>Even if you sign in with administrative permissions, you must open an elevated Command Prompt window to perform this function on a server that is running Windows Server 2008. To open an elevated Command Prompt window, choose **Start**, open the **Command Prompt** shortcut menu, and then choose **Run as Administrator**. For more information, see the following page on the Microsoft website: [User Access Control](http://go.microsoft.com/fwlink/?LinkId=111235).  
  
## Syntax  
  
```  
witadmin exportglobalworkflow /collection:CollectionURL [/p:ProjectName] [/f:FileName] [/e:Encoding] [/exportgloballists]   
 
witadmin importglobalworkflow /collection:CollectionURL [/p:ProjectName] /f:FileName [/e:Encoding] [/v]  
```  
  
#### Parameters  
  
|**Parameter**|**Description**|  
|-------------------|---------------------|  
|**/collection**:`CollectionURL`|Specifies the URI of the collection. You must specify the URI in the following format: **http**://*ServerName:Port/VirtualDirectoryName/CollectionName*<br /><br /> If you do not specify a virtual directory, you must specify the URI in the following format:<br /><br /> **http**://*ServerName:Port/CollectionName*.|  
|**/p**:`ProjectName`|Optional. The project for which you want to export or import the global workflow. This project must be defined in the collection that you specified by using the /collection parameter. If you do not specify a project, the global workflow is imported or exported for the collection.|  
|**/f**:`FileName`|The path and the name of the XML definition file for global workflow to export or import.<br /><br /> **Note:**  If the client computer is running Windows Vista, you might not have permissions to certain folders. If you try to export the global list to a location where you do not have permissions, the registry virtualization technology automatically redirects the exported file and saves it to the virtual store. For more information, see the following pages on the Microsoft web site: [Registry Virtualization](http://go.microsoft.com/fwlink/?LinkId=92325) and [Common file and registry virtualization issues in Windows Vista](http://go.microsoft.com/fwlink/?LinkId=92323). To avoid this redirection, you can export the file to a location where you have permissions.|  
|**/e**:`Encoding`|Optional. The name of a .NET Framework 2.0 encoding format. The specified encoding will be used to export or import the XML data. For example, `/e utf-7` specifies Unicode (UTF-7) encoding. If you omit this parameter, **witadmin** attempts to detect the encoding and uses UTF-8 if detection fails.|  
|**/v**|Optional. Validates the XML that defines the global workflow but does not import the definition file.|  
|**/exportgloballists**|Optional. Exports the definitions of global lists that the global workflow references. The definitions for global lists will be embedded into the XML definition of the global workflow. If you do not specify this parameter, the definitions for global lists are omitted.|  
|**/?** or **help**|Displays help about the command in the Command Prompt window.|  
  
## Remarks  
 You can define work item fields by importing them through a global workflow. However, you cannot change the properties of existing fields by using global workflow. If you import a global workflow that does not contain a **FIELDS** element, all previously imported rules for global workflow will be deleted. Field definitions will not be affected.  
  
## Examples  
 Unless otherwise specified, the following values apply in each example:  
  
-   URI for the collection: http://AdventureWorksServer:8080/tfs/DefaultCollection    
-   Project: Contoso    
-   Port number for the server website: 8080  
  
### Export the definition of a global workflow for a project  
 The following example exports the global workflow for a project:  
  
```  
witadmin exportglobalworkflow /collection:http://AdventureWorksServer:8080/tfs/DefaultCollection /p:Contoso /f:C:myGlobalWorkflow.xml  
```  
  
### Import the definition of a global workflow to a project  
 The following example imports the global workflow to the Contoso project:  
  
```  
witadmin importglobalworkflow /collection:http://AdventureWorksServer:8080/tfs/DefaultCollection /p:Contoso /f:C:collectionGlobalWorkflow.xml   
```  
  
### Import the definition of a global workflow to a collection  
 The following example imports the global workflow to the collection:  
  
```  
witadmin importglobalworkflow /collection:http://AdventureWorksServer:8080/tfs/DefaultCollection /f:C:collectionGlobalWorkflow.xml   
```  
  
## Related articles 
- [witAdmin: Customize and manage objects for tracking work](witadmin-customize-and-manage-objects-for-tracking-work.md)