---
title: Remove PS-TFS integration
titleSuffix: TFS   
description: Remove the integration of TFS with Project Server from an on-premises Team Foundation Server upgraded to TFS 2017    
ms.technology: devops-agile   
ms.prod: devops  
ms.assetid: B7FD5B66-CECC-48F6-B8A8-FF5D11B19D8B  
toc: show
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
ms.topic: conceptual
ms.date: 09/19/2017  
---

# Remove integration of TFS with Project Server  

**TFS 2017**

As described in [Synchronize TFS with Project Server](sync-ps-tfs.md), integration between TFS and Microsoft Project Server is now available through our partner, [Tivitie](http://www.tivitie.com/projectconnect). 

When you upgrade TFS 2015 or earlier version which has the native TFS-Project Server integration configured, some functions are automatically removed, however some elements of the integration remain. You may choose to ignore them, or you can follow the instructions provided in this topic to remove them. 

### Before you upgrade, perform this procedure: 
1. List mapped elements 

### After you upgrade, follow these procedures: 

<ol start="2">
<li>Uninstall TFS extensions for Project Server</li>
<li>Remove the Project Server tab and synchronizing fields from TFS work item types (WITs)</li>
<li>Delete the TFS-PS category from mapped projects</li>
<li>Delete TFS-PS global workflow rules from projects and project collections</li>
<li>Delete all TFS-PS related fields from project collections</li>
<li>Delete TFS tables from the Project Server database</li>
<li>Delete enterprise fields and look-up tables from Project Server</li>
<li>(Optional) Delete TFS database catalog mappings.</li> 
</ol>

###Required permissions

To run the **TFSAdmin** commands, your **Administer Project Server integration** permission for the project collection must be set to **Allow**. Also, the service account for Team Foundation Server must be granted the necessary permissions to interact with the instance of PWA that will participate in data synchronization. For more information, see [Assign permissions to support TFS-Project Server integration](assign-permissions-support-tfs-project-server-integration.md).

To run the **witadmin** commands you must be a member of the Team Foundation Administrators security group or the Project Collection Administrators security group.

<a id="list">  </a>
## 1. List mapped elements (before you upgrade)

> [!NOTE]  
> Upgrading to TFS 2017 removes the **TFSAdmin** command line tool. In order to have a list of all mapped elements to remove in procedures 3 through 6, you'll want to perform the following steps. 

1. To get a list of all mapped collections, run this command on the application tier server for TFS:  
	```TfsAdmin ProjectServer /GetMappedCollections /tfs:tfsUrl```  

2. To get a list of all mapped projects, run this command on each mapped collection:  
	```TfsAdmin ProjectServer /GetMappedProjects /collection:tpcUrl```

3. To get a list of all mapped WITs, run this command on each mapped project:  
	```TfsAdmin ProjectServer /GetMappedWorkItemTypes /collection:tpcUrl teamProject:TeamProjectName```

4. To get a list of all mapped fields, download the field mapping file:  
	```TfsAdmin ProjectServer /DownloadFieldMappings /collection:tpcUrl /filepath:mappingFile```

<a id="uninstall">  </a>
## 2. Uninstall TFS extensions for Project Server

**Where:**&#160;&#160;Each instance of Project Server where the TFS extensions for Project Server were installed and is no longer actively synchronizing with TFS.

From Project Server, open your control panel **Settings>Programs and Features** and uninstall the TFS extensions for Project Server.

If you don't remove the extensions, users will receive error messages when they open a mapped Project.  

<a id="remove">  </a>
## 3. Remove the Project Server tab and synchronizing fields from WITs 

**Where:**&#160;&#160;From all mapped WITs in all mapped projects in each mapped project collection. You should have a list of all mapped elements from step [1. List mapped elements](#list).   
 
To remove the Project Server tab and associated fields, run **witadmin** to export and then import the mapped WIT XML definition file. This will remove the Project Server integration for specific fields from the WIT and its work item form. 

1. For each mapped WIT, export the WIT XML definition file. For example here we export task: 

	```witadmin exportwitd /collection:http://fabrikam:8080/tfs/defaultcollection /p:PsAgile1 /f:task.xml /n:task```

2. Edit the task.xml file to remove from the **FIELDS** section each `<FIELD>` element with ref name <i>Microsoft.Sync.ProjSrv.&#42;</i> or <i>Mirror.&#42;</i> 

3. From the **FORM** section, remove the `<Tab Label="Project Server">` element and its child elements.
  
4. If you have enabled the new work item form on the collection post upgrade, also remove the following elements and their child elements:   

	a. `<Group Label="Publish">`  
	b. `<Group Label="Mapped Fields (Project Plan)">`  
	c. `<Group Label="Mapped Fields (Project Plan : Work Item)">`  
	d. Remaining `<Control>` elements with `FieldName="Microsoft.Sync.ProjSrv.*" or FieldName="Mirror.*"`  

5. Import the updated WIT xml file. 

	```witadmin importwitd /collection:http://fabrikam:8080/tfs/defaultcollection /p:PsAgile1 /f:task.xml```


## 4. Delete the TFS-PS category from mapped projects

**Where**: From all mapped projects. You should have a list of all mapped elements from step [1. List mapped elements](#list).   

Work item types that were mapped to Project Server will appear in the WIT category "Microsoft.Sync.ProjSrv.WorkitemCategory"? that indicates they are mapped to Project Server. You need to use the **witadmin** command to export the categories in the Team Project, remove this particular category and re-import using **witadmin**. 

> [!NOTE]    
>Remember the list of Work Item Types defined within the category as you'll need them later. 

Example steps:

1. Export categories for a mapped project collection: 

	```witadmin exportcategories /collection:http://fabrikam:8080/tfs/defaultcollection /p:PsAgile1 /f:categories.xml```

2. Remove the following section from the XML definition and then save the categories.xml file:   
	```xml
	<CATEGORY refname="Microsoft.Sync.ProjSrv.WorkitemCategory" name="Provisioned Work Item types">  
	       <DEFAULTWORKITEMTYPE name="Task" />  
	       <WORKITEMTYPE name="User Story" />   
	</CATEGORY>
	```
3. Import the updated categories.xml file. 

	```witadmin importcategories /collection:http://fabrikam:8080/tfs/defaultcollection /p:PsAgile1 /f:categories.xml```


## 5. Delete TFS-PS global workflow rules from projects and project collections  

**Where**:&#160;&#160;From all mapped projects and mapped project collections. You should have a list of all mapped elements from step [1. List mapped elements](#list).
 
Doing this doesn't remove any fields but does remove rules that were defined at the project-level and collection-level for those fields. In most cases you shouldn't have manually modified the global workflow rules. If so, simply export and import with a default content below. If you have made customization you would need to determine the customizations you made and which you want to keep, and then simply remove those rules associated with TFS-PS integration.  

Example steps:

1. Export the global workflow XML definition file for a mapped project: 

	```witadmin exportglobalworkflow /collection:http://fabrikam:8080/tfs/defaultcollection /p:PsAgile1 /f:tpgf.xml```

2. Remove all TFS-PS integration definitions, preserving any customizations not related to TFS-PS integration. An uncustomized  file should contain only the following:   
	```xml
	<?xml version="1.0" encoding="utf-8"?>
	<GLOBALWORKFLOW>
	</GLOBALWORKFLOW>
	```

3. Import the updated XML file. 

	```witadmin importcategories /collection:http://fabrikam:8080/tfs/defaultcollection /p:PsAgile1 /f:tpgf.xml```

4. Repeat steps 1 through 3 for each mapped project collection using these commands: 
	```witadmin exportglobalworkflow /collection:http://fabrikam:8080/tfs/defaultcollection /f:tpgf.xml```     

	```witadmin importglobalworkflow /collection:http://fabrikam:8080/tfs/defaultcollection /f:tpgf.xml```    
	
<!---
A copy of global workflow with default mapping fields would help.
--> 
	
## 6. Delete all TFS-PS related fields 
 
**Where**: From each mapped project collection. You should have a list of all mapped elements from step [1. List mapped elements](#list).
 
Several work item fields were added to your project collection when they were mapped for TFS-PS integration. These fields store both data and metadata related to the synchronization. In previous steps, we removed usage of these fields from the WITs and global workflow. With those steps completed, you are ready to delete these fields.
 
1. Delete all fields that begin with *Microsoft.Sync.ProjSrv.&#42;*.  

	```witadmin deletefield /collection:<your collection URL> /n:Microsoft.Sync.ProjSrv.ApprovalWatermark /noprompt```  
	```witadmin deletefield /collection:<your collection URL> /n:Microsoft.Sync.ProjSrv.AssignmentData /noprompt```  
	```witadmin deletefield /collection:<your collection URL> /n:Microsoft.Sync.ProjSrv.IsLinkedToProjSrv /noprompt```  
	```witadmin deletefield /collection:<your collection URL> /n:Microsoft.Sync.ProjSrv.IsSummaryInProjSvr /noprompt```  
	```witadmin deletefield /collection:<your collection URL> /n:Microsoft.Sync.ProjSrv.LastReviewedDate /noprompt```  
	```witadmin deletefield /collection:<your collection URL> /n:Microsoft.Sync.ProjSrv.LastReviewStatus /noprompt```  
	```witadmin deletefield /collection:<your collection URL> /n:Microsoft.Sync.ProjSrv.LastSubmitStatus /noprompt```  
	```witadmin deletefield /collection:<your collection URL> /n:Microsoft.Sync.ProjSrv.LastSubmittedDate /noprompt```  
	```witadmin deletefield /collection:<your collection URL> /n:Microsoft.Sync.ProjSrv.LastSubmittedRevision /noprompt```  
	```witadmin deletefield /collection:<your collection URL> /n:Microsoft.Sync.ProjSrv.LastSyncRevision /noprompt```  
	```witadmin deletefield /collection:<your collection URL> /n:Microsoft.Sync.ProjSrv.LastSyncType /noprompt```  
	```witadmin deletefield /collection:<your collection URL> /n:Microsoft.Sync.ProjSrv.ProjectName /noprompt```  
	```witadmin deletefield /collection:<your collection URL> /n:Microsoft.Sync.ProjSrv.ProjGuid /noprompt```  
	```witadmin deletefield /collection:<your collection URL> /n:Microsoft.Sync.ProjSrv.QueueFlags /noprompt```  
	```witadmin deletefield /collection:<your collection URL> /n:Microsoft.Sync.ProjSrv.RequestedAssnGuid /noprompt```  
	```witadmin deletefield /collection:<your collection URL> /n:Microsoft.Sync.ProjSrv.RequestedProjGuid /noprompt```  
	```witadmin deletefield /collection:<your collection URL> /n:Microsoft.Sync.ProjSrv.Submit /noprompt```  
	```witadmin deletefield /collection:<your collection URL> /n:Microsoft.Sync.ProjSrv.SubmitTag /noprompt```  
	```witadmin deletefield /collection:<your collection URL> /n:Microsoft.Sync.ProjSrv.TaskGuid /noprompt```  
	```witadmin deletefield /collection:<your collection URL> /n:Microsoft.Sync.ProjSrv.TaskModifiedRevCounter /noprompt```  

2. Depending on the field mapping, you might have additional *Mirror* fields to delete. Use **witadmin listfields** to retrieve a list of all mirror fields. If you used default mapping, then you'll want to delete the following set of fields:    

	```witadmin deletefield /collection:<your collection URL> /n:Mirror.Microsoft.VSTS.Scheduling.CompletedWork /noprompt```  
	```witadmin deletefield /collection:<your collection URL> /n:Mirror.Microsoft.VSTS.Scheduling.FinishDate /noprompt```  
	```witadmin deletefield /collection:<your collection URL> /n:Mirror.Microsoft.VSTS.Scheduling.OriginalEstimate /noprompt```  
	```witadmin deletefield /collection:<your collection URL> /n:Mirror.Microsoft.VSTS.Scheduling.RemainingWork /noprompt```  
	```witadmin deletefield /collection:<your collection URL> /n:Mirror.Microsoft.VSTS.Scheduling.StartDate /noprompt```  
	```witadmin deletefield /collection:<your collection URL> /n:Mirror.System.AssignedTo /noprompt```  
	```witadmin deletefield /collection:<your collection URL> /n:Mirror.System.Title /noprompt```  

<!---
What if we delete fields and don't update the global workflow? Would we get an error?
-->

## 7. Delete TFS tables from Project Server  

**Where**:
- For Project Server 2010: Delete from the PWA Reporting Database 
- For Project Server 2013: Delete from the PWA Database (There's only one database for Project Server 2013) 

Use the following commands to delete the TFS tables: 

`DROP TABLE [dbo].[TFS_mapped_projects]`   
`DROP TABLE [dbo].[TFS_status_approvals]`   

>**Note:** If you don't delete the TFS tables and uninstall the TFS extensions for Project Server, you'll receive an error similar to the one shown below when using Microsoft Project with your formerly mapped projects. The 'Team' ribbon needed to publish and refresh Project (not Project Server) with TFS won't be available.   
>
>![Sample screenshot of error message](_img/ps-tfs-integ-error-message.png)


## 8. Delete enterprise fields and look-up tables from Project Server

From Project Server, remove all fields that end in `(TFS)`. 

**Where**:
- From Project Server 2010, go to: **PWA Home Page>Server Settings>Enterprise Custom Fields and Lookup Tables**
- From Project Server 2013, go to: PWA home page, click the 'gear' button and then choose **PWA Settings>Enterprise Custom Fields and Lookup Tables**
 
<ol><li>Remove all TFS fields, those ending in `(TFS)`, for example: 
<ul><li>Active Assignment (TFS)</li>
<li>IsTaskTypeInitialized (TFS)</li>
<li>Submitted Revision (TFS)</li>
<li>Work Item Id (TFS)</li>
<li>Work Item Type (TFS)</li>
</ul>
<p>For example, delete the `IsTaskTypeInitialized (TFS)` field:</p> 
![Enterprise custom fields](_img/ps-tfs-integ-enterprise-custom-fields.png)
</li>
<li>Also, delete all lookup tables that start with `Microsoft.VSTS`, for example: 
<ul><li>Microsoft.VSTS.ProjSrv.SubmittedRevLT.DoNotDelete</li>
<li>Microsoft.VSTS.ProjSrv.SyncToTFSLT.DoNotDelete</li>
<li>Microsoft.VSTS.ProjSrv.TfsAssnLT.DoNotDelete</li>
<li>Microsoft.VSTS.ProjSrv.TFSMapLT.DoNotDelete </li>
<li>Microsoft.VSTS.ProjSrv.WITypeLT.DoNotDelete </li>
<li>Microsoft.VSTS.ProjSrv.WorkItemIdLT.DoNotDelete</li>
</ul>
<p>For example, here we delete the `Microsoft.VSTS.ProjSrv.TfsAssnLT.DoNotDelete` field:</p>
![Enterprise custom fields](_img/ps-tfs-integ-delete-custom-fields-from-lookup-table.png)
</li>
</ol>


## 9. (Optional) Delete TFS database catalog mappings

**Where**:&#160;&#160;From the TFS data-tier. 

The final elements which remain correspond to entries in the TFS_Configuration database that define the mappings of projects and project collections. These entries can remain as they are without causing any problems.

If you choose to remove these entries, run the following commands on the data-tier server in the order provided:  

```SQL
DELETE FROM <TFS Configuration Database>.[dbo].[tbl_CatalogNode]    
	WHERE PartitionId>=0 AND ResourceIdentifier IN     
	(SELECT [Identifier] FROM <TFS Configuration Database>.dbo.tbl_CatalogResource   
	WHERE resourcetype = '289DD275-CECA-4698-8042-38D2E86FC682' and PartitionId>=0)
```
 
```SQL
DELETE FROM <TFS Configuration Database>.dbo.tbl_CatalogResource  
	WHERE resourcetype = '289DD275-CECA-4698-8042-38D2E86FC682' and PartitionId>=0
```
 
## Related articles

- [Synchronize TFS with Project Server, third party support](sync-ps-tfs.md)  
- [Synchronize TFS with Project Server (TFS 2015 | TFS 2013)](synchronize-tfs-project-server.md)    
- [witAdmin: Customize and manage objects for tracking work](../../reference/witadmin/witadmin-customize-and-manage-objects-for-tracking-work.md)  
- [Map integration components (TFSAdmin command line tool)](map-integration-components.md)  
- [Microsoft discontinuing Project Server/TFS Integration. Partner to provide solution](https://blogs.msdn.microsoft.com/visualstudioalm/2016/09/16/microsoft-discontinuing-project-server-tfs-integration/)

