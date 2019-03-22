---
title: Import and export global lists using witadmin
titleSuffix: TFS  
description: Customize or update a global list by export/import using witadmin for Team Foundation Server 
ms.technology: devops-agile
ms.prod: devops
ms.assetid: 64725cfe-72f8-4ac5-8946-95e808e035f9
ms.topic: reference
ms.author: kaelli
author: KathrynEE
ms.manager: jillfra
ms.date: 02/26/2018
---

# Manage global lists for work item types


[!INCLUDE [temp](../../_shared/customization-witadmin-plus-version-header.md)]

Global lists are pick lists that you can include in one or more fields and types of work items. Use them to minimize the work that is required to update a list that is shared by multiple types of work items. Because global lists are defined for a project collection, they can be included in work item types for all projects within the collection.  
  
> [!NOTE]    
>**Feature availability:**&#160;Hosted XML customization supports adding and updating global lists. To learn more, see [Process template customizations differences](../../organizations/settings/work/import-process/differences.md).   

You can define a global list within its own definition file, in the definition file for a type of work item, or in global workflow. The global-list definition manages the global lists that are defined for a collection. The global-list definition uses the following commands in the **witadmin** command-line tool:    
-   **destroygloballist**:  Destroys a global list.    
-   **exportgloballist**:  Exports the global lists to an XML file, or to the Command Prompt window. It exports a single file, which contains all global lists that have been defined for the project collection. 
-   **importgloballist**:  Imports global lists from an XML file. If you try to import a global list that already exists on the server, a warning asks if you want to overwrite the global list that is on the server. If you try to import a global list that does not already exist, the command creates a new global list.    
-   **listgloballist**:  Displays the name of each global list defined on the server.  
  
 See [GLOBALLIST XML element reference](../xml/define-global-lists.md).  
  
[!INCLUDE [temp](../../_shared/witadmin-run-tool.md)]

[!INCLUDE [temp](../../_shared/process-editor.md)] 
  
## Prerequisites  
  
For the project collection where the global lists are defined, you must have the following permissions set:  
  
-   To export or list global lists, you must be a member of the **Project Collection Valid Users** group or have your **View collection-level information** permission set to **Allow**.    
-   To import global lists, you must be a member of the **Project Collection Administrators** security group.   
-   To destroy a global list using **witadmin destroygloballist**, you must be a member of the **Project Collection Administrators** security group.  
  
> [!NOTE]   
> Even if you sign in with administrative permissions, you must open an elevated Command Prompt window to perform this function on a server that is running Windows Server 2008. To open an elevated Command Prompt window, choose **Start**, open the **Command Prompt** shortcut window, and choose **Run as Administrator**. For more information, see this page on the Microsoft Web site: [User Access Control](http://go.microsoft.com/fwlink/?LinkId=111235).  
  
## Syntax  
  
```  
witadmin destroygloballist /collection:CollectionURL /n:GlobalListName [/noprompt] [/force]    
witadmin exportgloballist /collection:CollectionURL [/f:FileName] [/e:Encoding]    
witadmin importgloballist /collection:CollectionURL /f:FileName [/e:Encoding]   
witadmin listgloballist /collection:CollectionURL  
```  
  
### Parameters  
  
|**Parameter**|**Description**|  
|-------------------|---------------------|  
|**/collection**:`CollectionURL`|Specifies the URI of the project collection. For example:<br /><br /> **On-premises TFS format:  http**://*ServerName:Port/VirtualDirectoryName/CollectionName*<br /><br /> If no virtual directory is used, then the format for the URI is the following: **http**://*ServerName:Port/CollectionName*.|  
|**/n**:`GlobalListName`|The name of the global list to destroy.|  
|**/f**:`FileName`|The path and the name of the global list XML definition file to export or import.<br /><br />**Note:**  If the client computer runs Windows Vista, you might not have permissions to certain folders. If you try to export the global list to a location where you do not have permissions, the registry virtualization technology automatically redirects the exported file and saves it to the virtual store. For more information, see the following pages on the Microsoft Web site: [Registry Virtualization](http://go.microsoft.com/fwlink/?LinkId=92325) and [Common file and registry virtualization issues in Windows Vista](http://go.microsoft.com/fwlink/?LinkId=92323). To avoid this redirection, you can export the file to a location where you have permissions.|  
|**/e**:`Encoding`|The name of a .NET Framework 2.0 encoding format. The specified encoding will be used to export or import the XML data. For example, `/e utf-7` specifies Unicode (UTF-7) encoding. If you omit this parameter, **witadmin** attempts to detect the encoding, and if detection fails, **witadmin** uses UTF-8.|  
|**/noprompt**|Disables the prompt for confirmation.|  
|**/?** or **help**|Displays help about the command in the Command Prompt window.|  
  
## Remarks  

Importing a global list creates a list if one does not exist. If the list already exists, the **witadmin importgloballist** command will warn you that the current list will be overwritten. You can write your own program to update an existing global list, or you can update the global list yourself with the new data.  
  
To create a new global list, start with the following code and modify it as needed. This example defines a global list of disciplines that you can assign to tasks.  
  
```xml
<?xml version="1.0" encoding="utf-8"?>  
<gl:GLOBALLISTS xmlns:gl="http://schemas.microsoft.com/VisualStudio/2005/workitemtracking/globallists"> <GLOBALLIST name="Disciplines"> <LISTITEM value="Architecture" /> <LISTITEM value="Requirements" /> <LISTITEM value="Development" /> <LISTITEM value="Release Management" /> <LISTITEM value="Project Management" /> <LISTITEM value="Test" /> </GLOBALLIST></gl:GLOBALLISTS>  
```  
  
 Don't include project-scoped security groups within a global list, because global lists are scoped to a collection and not a project.  
  
 To add a global list to a field, export the definition for the work item type that contains the field and add it to the field definition, as shown in the following example:  
  
```xml
<FIELD name="Discipline" refname="Microsoft.VSTS.Common.Discipline" type="String">  
  <HELPTEXT>The discipline to which the task belongs</HELPTEXT>  
  <ALLOWEDVALUES>  
     <GLOBALLIST name="Disciplines" />  
  </ALLOWEDVALUES>  
</FIELD>  
```  
  
 To view the changes, import the type definition and refresh your browser or client cache. You might need to close any work items that reference the field and reopen them.  
  
 For information about export and import of type definitions, see [Import, export, and manage work item types](witadmin-import-export-manage-wits.md).  
  
## Examples  

Unless otherwise specified, the following values apply in each example:  
  
-   URI for the project collection: http://AdventureWorksServer:8080/tfs/DefaultCollection     
-   Server Web site port number: 8080   
  
### Display the names of global lists  

The following example shows the global lists defined on the server. The example exports the global lists using the default UTF-8 encoding:  
  
```  
witadmin listgloballist /collection:http://AdventureWorksServer:8080/tfs/DefaultCollection   
```  
  
### Export the definition of global lists  

The following example exports the global lists:  
  
```  
witadmin exportgloballist /collection:http://AdventureWorksServer:8080/tfs/DefaultCollection /f:C:mygloballists.xml  
```  
  
The following example exports the same global lists to the same server, but uses Unicode (UTF-7) encoding:  
  
```  
witadmin exportgloballist /collection:http://AdventureWorksServer:8080/tfs/DefaultCollection /f:C:mygloballists.xml /e:utf-7  
```  
  
### Import the definition of global lists  

The following example imports global lists:  
  
```  
witadmin importgloballist /collection:http://AdventureWorksServer:8080/tfs/DefaultCollection /f:C:mygloballists.xml   
```  
  
The following example imports the same global lists to the same server, but uses Unicode (UTF-7) encoding:  
  
```  
witadmin importgloballist /collection:http://AdventureWorksServer:8080/tfs/DefaultCollection /f:C:mygloballists.xml /e utf-7  
```  
  
## Related articles 

-  [GLOBALLIST XML element reference](../xml/define-global-lists.md)   
-  [Customize global workflow](../xml/global-workflow-xml-element-reference.md)   
-  [witAdmin: Customize and manage objects for tracking work](witadmin-customize-and-manage-objects-for-tracking-work.md)