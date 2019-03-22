---
title: Import and export categories
titleSuffix: TFS  
description: Import and export categories defined for a project in Team Foundation Server 
ms.prod: devops
ms.technology: devops-agile
ms.assetid: da37f5a5-1a52-457c-b0fc-c91fee134788
ms.topic: reference
ms.manager: jillfra
ms.author: kaelliauthor: KathrynEE
monikerRange: '<= azure-devops-2019'
ms.date: 03/20/2018
---


# Import and export categories

[!INCLUDE [temp](../../_shared/customization-witadmin-plus-version-header.md)]  

You can import and export categories defined for a project by using the following **witadmin** commands:   
-   **exportcategories**:  Exports the XML definition of categories defined on a server that runs Team Foundation Server.   
-   **importcategories**:  Imports a work item type XML definition file into a project on a server that runs TFS.  If a category with the same name already exists, this command overwrites the existing definition. If the work item type does not already exist, this command creates a new category.  
  
To learn about the default categories and how they are used, see [Use categories to group work item types](../xml/use-categories-to-group-work-item-types.md).  
  
[!INCLUDE [temp](../../_shared/witadmin-run-tool.md)]    
  
[!INCLUDE [temp](../../_shared/process-editor.md)]
  
## Prerequisites   
  
For the project for which the categories are defined, you must have the following permissions set:   
-   To export categories of work item types, you must have your **View project-level information** permission set to **Allow**.   
-   To import categories of work item types, you must be a member of the **Project Administrators** security group or have the **Edit project-level information** permission set to **Allow**.  
  
For more information, see [Add an administrator](../../organizations/security/set-project-collection-level-permissions.md). 

## Syntax  
  
```  
witadmin exportcategories /collection:CollectionURL /p:Project [/f:FileName] [/e:Encoding]   
  
witadmin importcategories /collection:CollectionURL /p:Project /f:FileName [/e:Encoding]   
```  
  
#### Parameters  
  
|**Parameter**|**Description**|  
|-------------------|---------------------|  
|**/collection**:`CollectionURL`|Specifies the URI of the project collection. For example:<br /><br /> **On-premises TFS format:  http**://*ServerName:Port/VirtualDirectoryName/CollectionName*<br /><br /> If no virtual directory is used, then the format for the URI is the following: **http**://*ServerName:Port/CollectionName*.|  
|**/p**:`Project`|The name of the project from which the categories are exported or to which the categories are imported.|  
|**/f**:*FileName*|The path and file name of the XML definition file that contains the categories to be exported or imported. If you omit this parameter when you use the **exportcategories** command, the command lists the categories in the Command Prompt window.|  
|**/e**:*Encoding*|The name of a .NET Framework 2.0 encoding format. The specified encoding will be used to export or import the XML data. For example, `/e`:`utf-7` specifies Unicode (UTF-7) encoding. If you omit this parameter, **witadmin** attempts to detect the encoding, and if detection fails, **witadmin** uses UTF-8.|  
|**/?** or **help**|Displays help about the command in the Command Prompt window.|  
  
## Remarks  

Importing a categories file creates the categories if they do not already exist. If categories already exist, the **witadmin importcategories** command will warn you that the current list will be overwritten. You can write your own program to update an existing set of categories, or you can update the categories yourself with new data.  
  
> [!IMPORTANT]  
>  Changes you make to categories can impact process configuration. See [ProcessConfiguration XML elements](../xml/process-configuration-xml-element.md).  
  
 For information about the categories XML file structure, see [Categories XML element reference](../xml/categories-xml-element-reference.md).  
  
## Examples  

Unless otherwise specified, the following values apply in each example:  
  
- URI for the project collection: http://AdventureWorksServer:8080/tfs/DefaultCollection    
- Project name: AdventureWorks    
- Input or output file name: myCategories.xml   
- Default encoding: UTF-8  
  
### List categories  

The following command lists the work item type categories defined for the AdventureWorks project.  
  
```  
witadmin exportcategories /collection:http://AdventureWorksServer:8080/tfs/DefaultCollection /p:AdventureWorks   
```  
  
### Add a category to the Hidden Types categories  

You add a category to the Hidden Types categories to remove support for users to create work item types in that category.  
  
1.  Export the definition file for categories for your project.  
  
    ```  
    witadmin exportcategories /collection:http://AdventureWorksServer:8080/tfs/DefaultCollection /p:AdventureWorks /f:myCategories.xml   
    ```  
  
2.  Open the Categories file in your preferred text editor, and locate the `CATEGORY` element for the `"Hidden Types Category"`.  
  
    > [!div class="tabbedCodeSnippets"]
	```XML  
    <CATEGORY name="Hidden Types Category" refname="Microsoft.HiddenCategory">  
       <DEFAULTWORKITEMTYPE name="Code Review Request" />  
       <WORKITEMTYPE name="Code Review Response" />  
       <WORKITEMTYPE name="Feedback Request" />  
       <WORKITEMTYPE name="Feedback Response" />  
       <WORKITEMTYPE name="Shared Steps" />  
    </CATEGORY>  
    ```  
  
3.  Add a `WORKITEMTYPE` element that specifies the friendly name of the work item type that you want to add.  
  
     For example, the following syntax adds the custom work item type of "Integration Build" to the Hidden Types Category.  
 
    > [!div class="tabbedCodeSnippets"]
	```XML
    <CATEGORY name="Hidden Types Category" refname="Microsoft.HiddenCategory">  
       <DEFAULTWORKITEMTYPE name="Code Review Request" />  
       <WORKITEMTYPE name="Code Review Response" />  
       <WORKITEMTYPE name="Feedback Request" />  
       <WORKITEMTYPE name="Feedback Response" />  
       <WORKITEMTYPE name="Shared Steps" />  
       <WORKITEMTYPE name="Integration Build" />  
    </CATEGORY>  
    ```  
  
4.  Import the definition file for categories to your project.  
  
    ```  
    witadmin importcategories /collection:http://AdventureWorksServer:8080/tfs/DefaultCollection /p:AdventureWorks /f:myCategories.xml   
    ```  
  
## Related articles
- [ProcessConfiguration XML elements](../xml/process-configuration-xml-element.md)  
- [Customize your work tracking experience](../customize-work.md)     
- [Use categories to group work item types](../xml/use-categories-to-group-work-item-types.md)   
