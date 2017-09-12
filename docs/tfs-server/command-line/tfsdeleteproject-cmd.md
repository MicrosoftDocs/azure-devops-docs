---
title: Delete a team project using TFSDeleteProject
description: Delete a team project in TFS from the command-line using TFSDeleteProject
ms.assetid: dc7efa4d-9c70-4b61-a910-8f1e66678866
ms.prod: vs-devops-alm
ms.technology: vs-devops-admin
ms.manager: douge
ms.author: elbatk
ms.date: 08/04/2016
---

# Delete a team project with TFSDeleteProject

**TFS 2017** | **TFS 2015** | **TFS 2013**

You can remove a team project from Team Foundation Server(TFS) when the project is no longer required by using TFSDeleteProject.
In addition, if there are components that remain undeleted after an unsuccessful team project creation, you can use TFSDeleteProject to remove them. 

To delete a team project from VSTS or from TFS using the admin console, see [Delete a team project](../../accounts/delete-team-project.md). 

> [!WARNING]
> TFSDeleteProject permanently destroys the team project, after which it cannot be recovered. You should backup all important project data before using TFSDeleteProject. 

To access the TFSDeleteProject command-line tool, open a Command Prompt window where either Visual Studio or Team Explorer is installed and enter: 

	cd %programfiles(x86)%\Microsoft Visual Studio 12.0\Common7\IDE

On a 32-bit edition of Windows, replace **%programfiles(x86)%** with **%programfiles%**.

Required permissions

To use the TFSDeleteProject command, you must be a member of the **Team Foundation Administrators** security group or the **Project Administrators** security group.
For more information, see Set administrator permissions for Team Foundation Server.

	TFSDeleteproject [/q] [/force] [/excludewss] /collection:URL TeamProjectName

<table Responsive="true">
<tr>
    <th>
    <p>
        Option
    </p>
    </th>
    <th>
    <p>
        Description
    </p>
    </th>
</tr>
<tr>
    <td>
    <p>
        <strong>/q</strong>
    </p>
    </td>
    <td>
    <p>Optional. Use the quiet mode. Do not prompt the user for confirmation.</p>
    </td>
</tr>
<tr>
    <td>
    <p>
        <strong>/force</strong>
    </p>
    </td>
    <td>
    <p>Optional. Specifies that the deletion process should continue even if some components cannot be deleted.</p>
    </td>
</tr>
<tr>
    <td>
    <p>
        <strong>/excludewss</strong>
    </p>
    </td>
    <td>
    <p>Optional. Specifies to not delete the SharePoint site that is associated with the team project. Specify this option to maintain the existing site so that other team projects can continue using it.</p>
    </td>
</tr>
<tr>
    <td>
    <p>
        <strong>/collection</strong>:<span class="parameter">URL</span></p>
    </td>
    <td>
    <p>Required. Specifies the URI of the team project collection. You must use the following format for the URI: <strong>http</strong>://<span class="parameter">ServerName:Port/VirtualDirectoryName/CollectionName</span></p>
    <p>If you do not specify a virtual directory, you must use the following format for the URI:</p>
    <p>
        <strong>http</strong>://<span class="parameter">ServerName:Port/CollectionName</span>. </p>
    </td>
</tr>
<tr>
    <td>
    <p>
        <span class="parameter">TeamProjectName</span>
    </p>
    </td>
    <td>
    <p>Required. The name of the project. If the name includes spaces, enclose it in quotations marks.</p>
    </td>
</tr>
</table>

 
## Remarks  
 
When you create a team project, Team Foundation Server creates data objects on the server that hosts Team Foundation Server,
and may create data objects on the server that hosts SharePoint Products, and the server that hosts SQL Server Reporting Services.
When you remove a team project, the reports are automatically removed from SQL Server Reporting Services.

When you remove a team project, you can choose whether or not to remove the objects that were created to support the SharePoint site.
However, an error can prevent Team Foundation Server from creating or deleting all the objects. To troubleshoot these problems,
the following sections provide background information, links to other resources, and specific steps that help you determine the cause of the problem,
fix the problem, and when necessary delete data objects that remain after running TFSDeleteProject. 

## TFSDeleteProject Process

When you use the TFSDeleteProject command-line tool, it first deletes project data and then project Web sites. 

### Phase 1: TFSDeleteProject Deletes Project Data  
 
In the first phase, TFSDeleteProject automatically performs the following steps to remove team project data: 

0. TFSDeleteProject creates an inventory of all the components that are candidates for deletion.
This includes components that integrate with Test Manager, Team Foundation Build, and Team Foundation version control. 

0. TFSDeleteProject deletes the component that displays the project node in Team Explorer. 

0. TFSDeleteProject flags the version control information for deletion, but does not immediately delete this information.
The information includes all version control branches in the specified project, but no other branches outside of the project. 

	- If a parent branch and a child branch are both in the project, TFSDeleteProject flags both for deletion. 
	- If parent and child branches are in different projects, TFSDeleteProject flags only the specified branch.
	- If another project is a branch from the specified project, TFSDeleteProject flags only the specified project.
	When the specified project is deleted, the branch project becomes an orphan. 

0. TFSDeleteProject immediately deletes build data, including information and core data, build definitions,
build agents, and test results associated with the team project. The tool does not delete build drop locations.
You do not need to delete the build drop location of an old team project before creating a team project that uses the same build drop location.

	If the specified project contains a large amount of build data, the deletion might not finish within the timeout period.
	To work around this problem, see Increase the Time-Out Period, and then run TFSDeleteProject again. 

0. TFSDeleteProject immediately deletes work items and work item fields that belong to the specified project, and it deletes all non-shared metadata. 

	If the specified project contains a large amount of work item data, the deletion might not finish within the timeout period.
	To solve this problem, see Increase the Time-Out Period, and then run TFSDeleteProject again.

### Phase 2: TFSDeleteProject Deletes Project Web Sites  
 
In the second phase, TFSDeleteProject deletes the following data: 

> [!IMPORTANT]
> These steps can take a long time to complete, and during that time they can degrade server performance. 


- TFSDeleteProject Uses the Reporting Services APIs to delete reports on the server that hosts Reporting Services.
- TFSDeleteProject Deletes the project portal Web site from the server that hosts SharePoint Products.
This step occurs only if the project owns the site and site deletion is not excluded in the command line.
(Consider that multiple projects may point to a single site, but only one of them can be the owner where reports/dashboards are by default using this project).

	> [!NOTE]
	> Prior to deleting a team project, you can confirm that Reporting Services and SharePoint Products
	> are using the correct project URLs by verifying the portal settings.
	> For more information, see [How to: Add a Team Project Portal](https://msdn.microsoft.com/library/dd386320.aspx).

If TFSDeleteProject successfully deletes all of the above data elements, it returns the message Done.
To verify this result, see Verify Team Project Components Are Deleted.

If one or more components are not removed, you can rerun TFSProjectDelete by using the /force option
to continue the deletion process even if it is unable to delete all data elements.
With this option TFSDeleteProject, skips a component that it cannot delete, returns an error message,
deletes the next component, and leaves the team project metadata and security settings intact. 

## Data That May Remain Undeleted

The following data might remain in the deployment after TFSDeleteProject successfully completes:

- **Team project data in the cube**.
Team project data remains in the cube until the cube is rebuilt, at which time the warehouse controller service
removes all of the historic build data that has been deleted from the Team Foundation databases. 
- **Build drop files and folders**.
Build binaries, build log files, and log files containing test results are published during the build process.
The locations for these files are not deleted. If you want to remove these files, you must remove them manually. 
- **Work item tracking metadata that is shared**.
TFSDeleteProject does not delete any metadata for work item tracking that is shared between team projects.
- **Version control shelvesets containing shared code**.
Version control shelvesets are not deleted if there is code in the shelveset from multiple team projects. 


## Verify Project Deletion  

You can verify the success of a project deletion by confirming that the team project node no longer appears
in Team Explorer and that its project portal Web site and reports folders no longer exist. 

0. Open Team Explorer and verify that the project does not appear as a project node. 

0. Open Internet Explorer and type the URL of the project portal Web site. Verify that the site no longer exists. 

0. In Internet Explorer, in the Address box, type the URL of the Reporting Services Web site using one of the following URL formats:

	- ```http://ReportingServices/Reports```
	- ```http://ReportingServices/Reports_TFSInstance```

0. In Report Manager, choose Show Details.

0. Verify that the folder for the deleted team project no longer appears.
Choose the root folder TfsReports, and then choose the folder named for the team project collection.
There should no longer be a folder with the name of the deleted project.

0. If either the reports or the Web site remain, see the next procedure. 

## Remove Remaining Components After Partial Project Deletion  

If the project portal Web site and reports folder remain after you delete a team project, remove the site and folder manually.

0. Log on to the server that hosts Reporting Services for the team project that you deleted. 

0. Open Internet Explorer, and in the Address box type the URL of the Reporting Services Web site using one of the following URL formats:

	- ```http://localhost/Reports```
	- ```http://localhost/Reports_TFSInstance```

0. In Report Manager, choose Show Details.

0. Choose the root folder TfsReports, and then choose the folder named for the team project collection. 

0. Select the check box for the team project that was deleted.

0. Choose Delete. 

0. Choose OK to confirm that you want to delete the reports folder for the team project.

0. To remove the project portal Web site of a deleted team project, see the following page on the Microsoft Web site:
[How to: Create, Edit, and Delete Windows SharePoint Services Sites](http://go.microsoft.com/fwlink/?LinkId=131660).


## Increase the Time-Out Period  

By default, each Web service call that the TFSDeleteProject command issues to delete a component must complete within 10 minutes.
If there are six calls, then the process could take up to an hour.
If you want to delete a team project that is associated with a large amount of data, you can temporarily increase this time-out period. 

> [!NOTE]
> When you increase the time-out period, the change affects all Web service calls.
> In general, you want to keep the time-out period to within 10 minutes to prevent
> Web service calls from degrading server performance and causing users to be locked out
> from using the user interface for long periods of time.
> Therefore, after the project is successfully deleted, you should change the time-out period back to 10 minutes.

Required Permissions 

To complete these procedures, you must be a Windows Administrator on the application-tier server. 

> [!IMPORTANT]
> Improperly modifying your computer's registry can cause your computer to become unstable.
> If you are not familiar with the registry, you should not add or remove entries, or modify it in any way.

0. Log on to the application-tier server. 

0. Choose Start, Run, type regedit, and then choose OK.

0. In the browser pane, expand HKEY_ LOCAL_MACHINE:

	- If the server runs a 32-bit operating system,
	expand: HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\VisualStudio\11.0\TeamFoundation\RequestSettings. 
	- If the server runs a 64-bit operating system,
	expand: HKEY_LOCAL_MACHINE\SOFTWARE\Wow6432\Microsoft\VisualStudio\11.0\TeamFoundation\RequestSettings. 

0. If the TeamFoundation\RequestSettings key does not exist, follow these steps to create it: 

	0. Open the context menu for TeamFoundation, point to New, and choose Key.
	0. Name the key RequestSettings.
	0. Open the context menu for RequestSettings, point to New, and choose DWORD Value.
	0. Name the new value DefaultTimeout.

0. Open the context menu for DefaultTimeout and choose Modify. 

0. In Value Data, type the time-out period in milliseconds, and then choose Decimal. 

	For example, to increase the time-out period to 30 minutes, type 1800000. To change the time-out period back to 10 minutes, type 600000.

0. Choose OK.

0. On the File menu, choose Exit.

## Example

The following command removes all components associated with the team project StoreFront
on the Team Foundation Server AdventureWorks1 server in project collection Collection1 and from Team Explorer.

	TFSDeleteProject /force /collection:http://AdventureWorks1:8080/tfs/Collection1 StoreFront
