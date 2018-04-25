---
title: Customize the layout of the work item web form
titleSuffix: VSTS & TFS
description: Customize the web version of the work item form in Visual Studio Team Services & Team Foundation Server    
ms.technology: devops-agile
ms.prod: devops
ms.assetid: 4DE53686-3349-41B8-A361-814B2519E60F
ms.manager: douge
ms.author: kaelliauthor: KathrynEE
ms.topic: conceptual
ms.date: 12/15/2017  
---

# Customize the work tracking web form  

<b>VSTS | TFS 2018 | TFS 2017</b>  

> [!IMPORTANT]  
><b>Feature availability: </b>This topic applies to customizations you can make when you use the Hosted XML process model, or you've update your application-tier server to Team Foundation Server 2017 or later version (which uses the On-premises XML process model). For the Inheritance process model, see [Customize a process](process/customize-process.md). 
>
>For an overview of process models, see [Customize your work tracking experience](../customize/customize-work.md). 

Just as you have been able to customize the form layout for your work item types, you can continue to do so with the new web form. The new form makes available several features that are not available with the old form.  Your account or project collection administrator manages the [switch to the new form](manage-new-form-rollout.md). When the new form is enabled for the account or team project collection, the WebLayout section is added to the XML definition for each WIT defined in the collection.  
 

> [!NOTE]    
>Prior to customizing the web form, your account administrator must have [enabled the new form for your account on VSTS and TFS](manage-new-form-rollout.md). 

You customize transformed WITs in much the same way as you have previously.  The path is slightly different depending on your platform and previous customization choices. 

## Import/export XML definition files 

Use this sequence when you use the On-premises XML process model, i.e., you manage your TFS work tracking customization  through import of individual XML definition files. 

[![Export WIT definition file](_img/cust-wit-form-export-def-file.png)](#witadmin)[![Edit XML definition file](_img/cust-wit-form-edit-def-file.png)](reference/weblayout-xml-elements.md)[![Import WIT definition file](_img/cust-wit-form-import-def-file.png)](#witadmin)![Refresh and verify changes](_img/cust-wit-form-refresh-verify.png)  

## Import/export process zip files 
Use this sequence when you use the Hosted XML process model, i.e., you manage your VSTS work tracking customization by importing a process or process template. 

[![Export process](_img/cust-wit-form-export-process.png)](import-process/import-process.md#export-process)[![Edit XML definition file(s)](_img/cust-wit-form-edit-def-file.png)](reference/weblayout-xml-elements.md)[![Import process](_img/cust-wit-form-import-process.png)](import-process/import-process.md)![Refresh and verify changes](_img/cust-wit-form-refresh-verify.png)  


The main difference is that there are now two main layout sections within the **FORM** node. The first section, contained within the **Layout** element, defines the form layout when viewed through a client such as Visual Studio. The second section, contained within the **WebLayout** element, defines the form layout when viewed through a web browser. 

> [!div class="tabbedCodeSnippets"]
```XML
<FORM>
   <Layout HideReadOnlyEmptyFields="true" HideControlBorders="true">
       . . .  
   </Layout>
   <WebLayout>
       . . .  
   </WebLayout>
</FORM>
```

See the following topics to make the indicated customizations: 
 
- To customize the form for the web portal (**WebLayout** node), see [WebLayout and Control XML elements](reference/weblayout-xml-elements.md)
- To add a scoped links control to the form for the web portal (**LinksControlOptions**), see [LinksControlOptions XML elements](reference/linkscontroloptions-xml-elements.md)
- To customize the client form (**Layout** node), see [Layout XML elements](reference/layout-xml-element-reference.md).


<a id="witadmin">  </a>  
## Import and export WIT definition files 

0.  If you don't have administration permissions for your team project, [get them](../../security/set-project-collection-level-permissions.md).  
  
[!INCLUDE [temp](../_shared/witadmin-run-tool-example.md)]

0.  Export the WIT definition file where you want to modify or add a field. Specify the name of the WIT and a name for the file.  

        witadmin exportwitd /collection:CollectionURL /p:ProjectName /n:TypeName /f:"DirectoryPath/FileName.xml"  

    An example of a *CollectionURL* for a VSTS account is https://*MyAccountName*.visualstudio.com/DefaultCollection.

0.  Edit the file. For details, see [WebLayout XML elements](reference/weblayout-xml-elements.md).  

0.  Import the WIT definition file.  

        witadmin importwitd /collection:CollectionURL /p:ProjectName /f:"DirectoryPath/FileName.xml"  

0.  Open either the web portal to view the changes. If the client is already open, refresh the page. 

    The latest updates are downloaded from the server, including the changes that you just imported. Wait several seconds until the refresh completes.

    For more information about using **witadmin**, see [Import, export, and manage work item types](reference/witadmin/witadmin-import-export-manage-wits.md).


[!INCLUDE [temp](../_shared/process-editor.md)]  

<a id="resizing">  </a>  
## Layout and resizing 

The new web form resizes depending on the width available and the number of sections defined. At maximum width, in most web browsers, each section within a page will display within its own column. As the display width decreases, each section resizes proportionally as follows: 

- For four sections: 40%, 20%, 20%, and 20%  
- For three sections: 50%, 25%, and 25%  
- For two Sections: 66% and 33%  
- For one Section: 100%.  


When the display width won't accommodate the columnar display of each section, sections appear stacked within a column. 


## Related articles  

If you're new to WIT customization, see [Add and modify a WIT](add-modify-wit.md). 

- [Manage new form rollout](manage-new-form-rollout.md)
- [New work item experience](process/new-work-item-experience.md)
- [WebLayout and Control XML elements](reference/weblayout-xml-elements.md)


### Import warnings and errors

You'll receive a warning when you import a modified WIT definition if you add a **Control** element for a required field in only the **WebLayout** or **Layout** node, but not the other. 

You'll receive an error if you enable the new form, and then modify a WIT definition in which you delete the **WebLayout** node.  

