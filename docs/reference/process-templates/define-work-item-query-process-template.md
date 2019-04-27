---
title: Define a work item query for a process template
titleSuffix: TFS
description: Use Team Explorer to create a work item query, save as a .wiq file, and add to a process template 
ms.prod: devops
ms.technology: devops-agile
ms.assetid: 2e035f4a-c542-487f-96f9-d730e4700af2
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
ms.topic: reference
ms.date: 02/24/2017
---

# Define a work item query to add to a process template

[!INCLUDE [temp](../../_shared/customization-phase-0-and-1-plus-version-header.md)]

<a name="top"></a> You can create a work item query (.wiq) file most easily in Team Explorer. In an existing project, you can use Team Explorer to create all work item queries that you want to add to your process template and then follow the steps in this topic to save each query as a .wiq file. For more information about how to create work item queries, see [Use the query editor to list and manage queries](../../boards/queries/using-queries.md).  
  
 **Requirements**  
  
-   To create a query, you must be a member of the **Readers** group, or your **View work items in this node** permission must be set to **Allow** for each project in the query.  
  
-   To save a query as a team query, you must have the appropriate permissions described in [Set permissions on queries](../../boards/queries/set-query-permissions.md).  
  
<a name="create"></a> 
##  Save a work item query as a .wiq file  
  
1.  In Team Explorer, open the query that you want to save.   
2.  On the **File** menu, choose **Save \<name of query> [Query] As**.    
3.  In the **Save Query As** dialog box, choose **File**, and specify a location and file name for the .wiq file. As an alternative, choose **Browse**, specify a file name, browse to the location to save the file, and then choose **Save**.    
4.  Copy the file to the **\WorkItem Tracking\Queries** folder, which is in the folder to which you downloaded your process template.    
5.  Open the .wiq file in a text editor.    
6.  Remove the `<TeamFoundationServer>` and `<TeamProject>` elements that associate the query with a specific server that is running Visual Studio Team Foundation Server and a specific project, as the following example shows:  
  
    > [!div class="tabbedCodeSnippets"]
	```XML 
    <TeamFoundationServer>CollectionURL</TeamFoundationServer>  
    <TeamProject>ProjectName</TeamProject>  
    ```  
  
    > [!NOTE]  
    >  You must edit the .wiq file in a text editor and remove the `<TeamFoundationServer>` and `<TeamProject>` elements that associate the query with a specific server and project. Otherwise, the query will not work correctly if the process template is uploaded to a different server. As an alternative, use macros where you can so that your query does not contain the explicit name of the current project or any other values that are specific to a certain environment.  
  
7.  Remove any additional elements that are specific to a user.  
  

<a name="path"></a> 
##  Create a work item query that references an iteration path  
 You can define a query that references a specific iteration path by including the macro for the project, $$PROJECTNAME$$, and the name of an iteration path that is defined in the Classification plug-in file. For example, the following syntax specifies a query that includes only those work items whose iteration path is under Iteration 1.  
  
> [!div class="tabbedCodeSnippets"]
```XML 
AND  [Source].[System.IterationPath] UNDER '$$PROJECTNAME$$\Iteration 1'  
```  
  
 When the project is created, the macro is replaced with the name of the project.  
  
 By using this macro, you can define workbooks that reference specific iteration paths. The Agile process template contains an iteration-specific query, Iteration1Backlog.wiq, that supports the iteration-specific workbook, Iteration Backlog.xlsm.  
  
 When you upload iteration-specific queries, the task to process the Classification.xml file must complete before the task to process the query files. For more information, see [Define initial areas, iterations, and Project mapping file](define-classification-plug-in.md) and [Define the root tasks](define-root-tasks-process-template-plug-in.md).  
  
<a name="iterationspecific"></a> 
###  Example of an iteration-specific work item query  
 The following example shows the Iteration1Backlog work item query, which supports the Iteration Backlog workbook. For details on WIQL, see [Work Item Query Language](../../boards/queries/wiql-syntax.md).
  
> [!div class="tabbedCodeSnippets"]
```XML
<?xml version="1.0" encoding="utf-8"?>  
<WorkItemQuery Version="1">  
  <Wiql>  
    SELECT [System.Id],  
           [System.WorkItemType],  
           [System.Title],  
           [System.State],  
           [System.AssignedTo],  
           [Microsoft.VSTS.Scheduling.RemainingWork],  
           [Microsoft.VSTS.Scheduling.CompletedWork],  
           [Microsoft.VSTS.Scheduling.StoryPoints],  
           [Microsoft.VSTS.Common.StackRank],  
           [Microsoft.VSTS.Common.Priority],  
           [Microsoft.VSTS.Common.Activity],  
           [System.IterationPath],  
           [System.AreaPath]  
      FROM WorkItemLinks  
     WHERE (Source.[System.TeamProject] = @project   
       AND  [Source].[System.AreaPath] UNDER @project  
       AND  [Source].[System.IterationPath] UNDER '$$PROJECTNAME$$\Iteration 1'  
       AND (  
               Source.[System.WorkItemType] = 'User Story'   
            OR Source.[System.WorkItemType] = 'Task'  
           )  
           )  
       AND [System.Links.LinkType] = 'System.LinkTypes.Hierarchy-Forward'  
       AND [Target].[System.WorkItemType] = 'Task'  
       ORDER BY [Microsoft.VSTS.Common.StackRank], [Microsoft.VSTS.Common.Priority]  
       mode(Recursive)  
  </Wiql>  
</WorkItemQuery>  
```  
  
<a name="elements"></a> 
## WorkItemQuery element reference  
 The following syntax shows the structure of the **WorkItemQuery** element and its child elements.  
  
> [!div class="tabbedCodeSnippets"]
```XML 
<WorkItemQuery Version="1">  
      <TeamFoundationServer>collectionURL </TeamFoundationServer>  
      <TeamProject>TeamProjectName </TeamProject>  
      <Wiql>  
      WorkItemQueryLanguage  
      </Wiql>  
</WorkItemQuery>  
```  
  
> [!NOTE]    
>For queries made against VSTS, the WIQL length must not exceed 32K characters. The system won't allow you to create or run queries that exceed that length.   

|Element|Syntax|Description|  
|-------------|------------|-----------------|  
|**TeamFoundationServer**|`<TeamFoundationServer>`<br />      `collectionURL`<br /> `</TeamFoundationServer>`|Optional child element of **WorkItemQuery**.<br /><br /> **Important:** In general, you remove this element from queries that you add to process templates.<br /><br /> Specifies the URI of the project collection in the following format:<br /><br /> **http://** *ServerName:Port/VirtualDirectoryName/CollectionName*<br /><br /> If no virtual directory is used, use the following format for the URI:<br /><br /> **http://** *ServerName:Port/CollectionName*<br /><br /> The attribute type is **ServerNameType** with a maximum length of 2047.|  
|**TeamProject**|`<TeamProject>`<br />      `TeamProjectName`<br /> `</TeamProject>`|Optional child element of **WorkItemQuery**.<br /><br /> **Important:** In general, you remove this element from queries that you add to process templates.<br /><br /> Specifies the project against which to run the query.<br /><br /> The attribute type is **ProjectNameType** with a maximum length of 255 characters.|  
|**Wiql**|`<Wiql>`<br />      `WorkItemQueryLanguage`<br /> `</Wiql>`|Required child element of **WorkItemQuery**.<br /><br /> Specifies a sequence of Structured Query Language (SQL) commands that act as filter criteria to find a set of work items in a project and return the values that are assigned to a set number of fields. For details, see [Work Item Query Language](../../boards/queries/wiql-syntax.md). <br /><br /> The default process templates provide several examples of the SQL commands that the **Wiql** element supports. These files are located in the Queries folder of the WorkItem Tracking folder. |  
  
## Related articles   
-  [Create managed queries](../../boards/queries/example-queries.md)  
-  [Use the query editor to list and manage queries](../../boards/queries/using-queries.md)      
-  [Define objects for tracking work items](define-objects-track-work-items-plug-in.md)  
-  [Work Item Query Language](../../boards/queries/wiql-syntax.md) 
-  [Wiql Editor, a Marketplace extension](https://marketplace.visualstudio.com/items?itemName=ottostreifel.wiql-editor)