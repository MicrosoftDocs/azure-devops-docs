---
title: Add work item queries to a process template
titleSuffix: Azure DevOps & TFS
description: Define the initial set of shared queries and query folder structure for a project in Team Foundation Server
ms.prod: devops
ms.technology: devops-agile
ms.assetid: 74f21c5c-76a0-4b0f-9cdf-d599f7a08eeb
ms.author: kaelliauthor: KathrynEE
ms.manager: jillfra
ms.topic: reference
ms.date: 04/11/2019
---


# Add work item queries to a process template

[!INCLUDE [temp](../../_shared/customization-phase-0-and-1-plus-version-header.md)]

By adding work item queries to your process template, you can define the initial set of shared queries and query folder structure for a project. All team members use queries to find the bugs, tasks, and other work items on which they must take action.  
  
Work item queries specify criteria for generating a list of work items, such as a list of active bugs or closed tasks. Files for work item queries have a .wiq extension and are stored in the Queries subfolder of the WorkItem Tracking folder for the default process templates.  


::: moniker range="azure-devops-2019"

> [!IMPORTANT]  
> The default process templates define a few queries that appear under My Queries on the Queries page. They no no longer define Shared Queries. You can always define shared queries and add them to a custom process template. Query definitions depend on the fields and work item types defined in the process template. Also, some workbooks that are uploaded within the Portal plug-in depend on the query definitions.    

::: moniker-end

::: moniker range="<= tfs-2018"

> [!IMPORTANT]  
> The default process templates define several queries which differ based on the process&mdash;[Agile](../../boards/work-items/guidance/agile-process.md), [Scrum](../../boards/work-items/guidance/scrum-process.md), or [CMMI](../../boards/work-items/guidance/cmmi-process.md). Query definitions depend on the fields and work item types defined in the process template. Also, some workbooks that are uploaded within the Portal plug-in depend on the query definitions.    

::: moniker-end


 You specify the query definitions to upload as a task within the WorkItemTracking plug-in. This task may be required because several artifacts in a process template may depend on a query. In addition, the task to upload queries depends on the successful completion of the task for uploading work item types. You specify each query file to upload within the **taskXml** element.  
  
  After a project is created from the process template, you can add, remove, and change queries by using the Query Editor. For more information, see [Use the query editor to list and manage queries](../../boards/queries/using-queries.md).  
  
 For information about how to assign query permissions to groups, see [Control access to functional areas](control-access-to-functional-areas.md). For information about how to create query folders, see [Define objects for tracking work items](define-objects-track-work-items-plug-in.md).  
  
<a name="create"></a> 
##  Create a work item query (.wiq) file 
 Each query definition must be specified in its own file with an extension of .wiq, using the **WorkItemQuery** parent element, and conform to the schema that is defined in the wiq.xsd file.   
  
 The following example shows the high-level syntax structure that defines a work item query:  
  
> [!div class="tabbedCodeSnippets"]
```XML 
<WorkItemQuery Version="1">  
<TeamFoundationServer>collectionURL</TeamFoundationServer>  
<TeamProject>TeamProjectName</TeamProject>  
  <Wiql>  
      WorkItemQueryLanguage  
  </Wiql>  
</WorkItemQuery>  
```  
  
 For more information about how to create a work item query to add to a process template, see [Define a work item query](define-work-item-query-process-template.md).  
  
<a name="upload"></a>   
##  Specify queries to upload  
 To include the work item queries in the process template, create one or more tasks in the workitems.xml file, which you can find in the \WorkItem Tracking folder, which is in the folder to which you downloaded your process template. Use the **Query** element to specify the file for the work item query. For example, the following XML specifies the query that is defined in the ActiveBugs.wiq file to be uploaded and named Active Bugs.  
  
> [!div class="tabbedCodeSnippets"]
```XML 
<Query name="Active Bugs" fileName="WorkItem Tracking\Queries\ActiveBugs.wiq" />  
```  
  
 You add the set of queries to upload as a task in the WorkItemTracking plug-in.  
  
 The following example shows how to specify a task to create a query folder that is named Product Management and upload a query that is named All User Stories to that folder.  
  
> [!div class="tabbedCodeSnippets"]
```XML
<task id="Queries" name="Stored Query Definitions" plugin="Microsoft.ProjectCreationWizard.WorkItemTracking" completionMessage=" Work item queries uploaded" />  
   <dependencies>  
      <dependency taskId="WITs" />  
   </dependencies>  
   <taskXml>  
      <QUERIES>  
         <QueryFolder name="Product Management" >  
               <Query name="All User Stories" fileName="WorkItem Tracking\Queries\AllUserStories.wiq" />  
         </QueryFolder>  
         . . .  
      </QUERIES>  
   </taskXml>  
</task>  
```  
  
 For more information, see [Define objects for tracking work items](define-objects-track-work-items-plug-in.md).  
  
<a name="elements"></a>   
##  QUERY elements  
 The following syntax shows the structure of the **QUERIES** element and its child elements.  
  
> [!div class="tabbedCodeSnippets"]
```XML 
<QUERIES>  
      <Permission />  
      <QueryFolder >  
      <Query />  
      </QueryFolder>  
</QUERIES>  
```  
  
 The following table describes the elements that you use to specify the query folder structure, permissions, and queries to upload. You specify these elements within a **taskXml** container element in the WorkItemTracking plug-in file.  
  
|Element|Description and syntax|  
|-------------|------------| 
|**Permission**|Optional child element of **Query**. Specifies the default permissions that are assigned to shared queries. For more information, see [Assign permissions for work item queries](control-access-to-functional-areas.md#Queries).<br />`<permission allow="ListOfPermissions" identity="GroupName" />` |  
|**Query**|Required child element of **QUERIES**. Specifies the name and the path of the .wiq file that defines a query to upload.<br />`<Query name="QueryName" fileName="QueryFilePathName" />`<br /><br /> As the following example shows, you can upload the query that is labeled "Active Bugs? and that is defined in the ActiveBugs.wiq file:<br /><br />```<Query name="Active Bugs" fileName="WorkItem Tracking\Queries\ActiveBugs.wiq" />```<br /> |  
|**QueryFolder**|Optional child element of **QUERIES**. Specifies the name of a query folder.<br/><code>&lt;QueryFolder name="FolderName"&gt; <br/>      &lt;Query /&gt; <br/>&lt;/QueryFolder&gt; </code> |  
|**QUERIES**|Optional child element of the **taskXml** element for the WorkItemTracking plug-in. Specifies which query definition files to use to create default queries.<br/><code>&lt;QUERIES&gt; <br/>       . . . <br/>&lt;/QUERIES&gt; </code> |  
  
<br/><code>&lt;QueryFolder name="FolderName"&gt; <br/>      &lt;Query /&gt; <br/>&lt;/QueryFolder&gt; </code> 


<br/><code>&lt;QUERIES&gt; <br/>       . . . <br/>&lt;/QUERIES&gt; </code> 


## Related articles
-  [Use the query editor to list and manage queries](../../boards/queries/using-queries.md)     
-  [Define objects for tracking work items](define-objects-track-work-items-plug-in.md)