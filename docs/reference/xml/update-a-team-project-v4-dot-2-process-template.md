---
title: Update a project
titleSuffix: TFS
description: Update a project based on a Microsoft Solutions Framework (MSF) version 4.2 process template.
ms.prod: devops
ms.technology: devops-agile
ms.assetid: d2a264e1-7dd3-4cbd-ab50-735290a1ea74
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
ms.date: 12/15/2017
---

# Update a project based on a MSF v4.2 process template 

**TFS 2017 | TFS 2015 | TFS 2013** 

> [!IMPORTANT]  
> This topic applies to project that was created using a Microsoft Solutions Framework (MSF) version 4.2 process template and is defined on an on-premises Team Foundation Server (TFS). You only have to follow the procedures in this topic if you are upgrading a project that you created with a process template provided with Visual Studio Team System 2008 Team Foundation Server, or one that does not contain the work item types Test Cases and Shared Steps.   

If you have upgraded from Visual Studio Team System 2008 Team Foundation Server to TFS 2013, you can update your project manually. If your project was based on a MSF version 4.2 process template, follow the procedures in this topic. After you apply these updates, you'll be able to access the new features described in [Configure features after an upgrade](../configure-features-after-upgrade.md) as well as interface with Microsoft Test Manager.  
  
These procedures will only support access to new features available with TFS 2012 and later versions. Additional work is required to add new queries or the latest reports, update customized reports, or access dashboards. For more information, see [Additional information about changes made when upgrading TFS](#additional_info).  
  
**Update tasks required to access new features**:    
1.  [Rename system fields](#1-rename-system-fields)    
2.  [(Agile only) Rename Scenario to User Story](#2-agile-only-rename-the-scenario-work-item-type)    
3.  [Download the latest version of MSF process template](#3-download-the-latest-version-of-msf-process-template)    
4.  [Import link types](#4-import-link-types)    
5.  [(Optional) Apply as needed customizations](#5-optional-apply-customizations-to-the-latest-versions-of-work-item-types)    
6.  [Import work item types](#6-import-work-item-types)    
7.  [Import the category file](#7-import-the-categories-file)    
8.  [Import the process configuration files](#8-import-configure)  
9. [Verify access to new features](#9-verify-access-to-new-features)  
  
**Additional tasks required to interface with Microsoft Test Manager**:   
1.  [Specify the bug type to be created in Microsoft Test Manager](#map_bug_type)    
2.  [Grant permissions to test team members](#grant_permissions)    
3.  [Launch Microsoft Test Manager](#launch_mtm)  
  
**Requirements**  
  
-   To download a process template, you must be a member of the **Project Collection Administrators** group. If the required security permissions are set explicitly, your **Manage process template** permission for the project collection must be set to **Allow**.  
  
-   To run the **witadmin** and **tcm** command-line tools, you must be a member of one of the following groups: **Team Foundation Administrators**, **Project Collection Administrators**, or **Project Administrators** for the project.  
  
-   To grant permissions, you must be a member of the administrative group at the level of the group that you want to change. For example, if you want to change permissions for a group or user at the project collection level, you must be a member of the **Project Collection Administrators** group for that collection, or your **Edit Collection-Level Information** permission must be set to **Allow**.  
  
For more information, see [Add administrators, set permissions at the project-level or project collection-level](../../organizations/security/set-project-collection-level-permissions.md).  
  
## 1. Rename system fields  
 Because the friendly names of several system fields were renamed in Visual Studio Team Foundation Server 2010, you need to manually rename these fields in your project collection. System fields that were renamed include System.AreaID, System.IterationID, System.HyperLinkCount, System.ExternalLinkCount, and System.AttachedFileCount.  
  
 Perform this task for each project collection defined on the application-tier server you've upgraded.  
  
[!INCLUDE [temp](../../_shared/witadmin-run-tool-example.md)]
  
0.  Type each of the following commands, substituting your data for the arguments that are shown, and then choose the **ENTER** key.  
  
    ```  
    witadmin changefield /collection:CollectionURL /n:System.AreaId /name:"Area Id"  
    witadmin changefield /collection:CollectionURL /n:System.AttachedFileCount /name:"Attached File Count"  
    witadmin changefield /collection:CollectionURL /n:System.ExternalLinkCount /name:"External Link Count"  
    witadmin changefield /collection:CollectionURL /n:System.HyperLinkCount /name:"Hyperlink Count"  
    witadmin changefield /collection:CollectionURL /n:System.RelatedLinkCount /name:"Related Link Count"  
    ```  
  
     Use this format for *CollectionURL*: **http://ServerName:Port/VirtualDirectoryName/CollectionName**, for example: **http://srvalm:8080/tfs/DefaultCollection**.  
  
  
## 2. (Agile only) Rename the Scenario work item type  
 To minimize the amount of customizations you need to make, and to comply with future updates to the Agile process template, you should rename the Scenario work item type to User Story.  
  
> [!NOTE]   
>  Of course, renaming the Scenario work item type will require you to update existing reports and queries that reference the Scenario work item type. However, because of the schema changes made to the data warehouse with the upgrade to TFS 2010, the pre-existing or pre-upgrade reports need to be rewritten to work with the new schema. See [Locating reports after the upgrade to TFS 2010](http://msdn.microsoft.com/library/ff452588%28v=vs.100%29.aspx).  
  
 Perform this task for each project that you want to update.  
  
-   Type the following command, substituting your data for the arguments that are shown, and then choose the **ENTER** key.  
  
    ```  
    witadmin renamewitd /collection:CollectionURL /p:projectName /n:Scenario /new:"User Story"  
    ```  
  
    > [!TIP]
    >  Enclose a parameter in quotes when it contains spaces. For example, specify `/p:"My Project X"` when your project name contains spaces.  
  
 [Back to top](#top)  
  
## 3. Download the latest version of MSF process template  

- See [Download the latest process template](../../boards/work-items/guidance/manage-process-templates.md).  
  
> [!TIP]  
>  To get access to the latest versions of the default process templates, install the latest update for TFS. TFS 2012.1 provided significant updates that were made to the workflow for several work item types. These changes support backward transitions so that when you inadvertently drag a work item on the Kanban board or the task board to a resolved or closed state, you can drag it back to an earlier workflow state.  
>   
> You can obtain the upgrade for TFS 2012 from the Microsoft download site: [Quarterly Update for Microsoft Visual Studio Team Foundation Server 2012](http://go.microsoft.com/fwlink/?LinkId=272181).   
  
## 4. Import link types  
 Import the link types, SharedSteps and TestedBy, located in the LinkTypes folder in the process template that you downloaded in task 3.  
  
 Perform this task for each project collection defined on your upgraded application-tier server.  
  
-   Type the following two commands, substituting your data for the arguments that are shown, and then choose the **ENTER** key.  
  
    ```  
    witadmin importlinktype /collection:CollectionURL /f:"DirectoryPath\TestedBy.xml"  
    witadmin importlinktype /collection:CollectionURL /f:"DirectoryPath\SharedStep.xml"  
    ```  
  
     For *DirectoryPath*, specify the location of the LinkTypes folder for the process template that you downloaded. The directory path should follow this structure: *Drive*:\\*MSFTemplateFolder*\WorkItem Tracking\LinkTypes.  
  
## 5. (Optional) Apply customizations to the latest versions of work item types  
 If you have customized any of the following work item types, you should update the latest version of these types with your customizations. The following tables summarize the fields removed and added in the latest versions of each process template.  
  
### Agile work item types  
  
|Work item type|Removed fields|Added fields|  
|--------------------|--------------------|------------------|  
|Bug|-   Issue (Microsoft.VSTS.Common.Issue)<br />-   Rank (Microsoft.VSTS.Common.Rank), replaced with Stack Rank<br />-   Test Name (Microsoft.VSTS.Test.TestName)<br />-   Test Id (Microsoft.VSTS.Test.TestId)<br />-   Test Path (Microsoft.VSTS.Test.TestPath)<br />-   Triage (Microsoft.VSTS.Common.Triage)|-   [Repro steps (Microsoft.VSTS.TCM.ReproSteps)](../../boards/queries/build-test-integration.md)<br />-   [Severity (Microsoft.VSTS.Common.Severity)](../../boards/queries/planning-ranking-priorities.md)<br />-   [Stack Rank (Microsoft.VSTS.Common.StackRank)](../../boards/queries/planning-ranking-priorities.md)<br />-   [System Info (Microsoft.VSTS.TCM.SystemInfo)](../../boards/queries/build-test-integration.md)|  
|Task|-   Baseline Work (Microsoft.VSTS.Scheduling.BaselineWork), replaced with Original Estimate<br />-   Discipline (Microsoft.VSTS.Common.Discipline), replaced with Activity<br />-   Exit Criteria (Microsoft.VSTS.Common.ExitCriteria)<br />-   Issue (Microsoft.VSTS.Common.Issue)<br />-   Rank (Microsoft.VSTS.Common.Rank), replaced with Stack Rank<br />-   Task Hierarchy (Microsoft.VSTS.Scheduling.TaskHierarchy)|-   [Activity (Microsoft.VSTS.Common.Activity)](../../boards/queries/query-numeric.md)<br />-   [Original Estimate (Microsoft.VSTS.Scheduling.OriginalEstimate)](../../boards/queries/query-numeric.md)<br />-   [Stack Rank (Microsoft.VSTS.Common.StackRank)](../../boards/queries/planning-ranking-priorities.md)|  
|User Story (previously named Scenario)|-   Exit Criteria (Microsoft.VSTS.Common.ExitCriteria)<br />-   Issue (Microsoft.VSTS.Common.Issue)<br />-   Rough Order of Magnitude (Microsoft.VSTS.Common.RoughOrderOfMagnitude), replaced with Story Points|-   [Risk (Microsoft.VSTS.Common.Risk)](../../boards/queries/planning-ranking-priorities.md)<br />-   [Stack Rank (Microsoft.VSTS.Common.StackRank)](../../boards/queries/planning-ranking-priorities.md)<br />-   [Story Points (Microsoft.VSTS.Scheduling.StoryPoints)](../../boards/queries/query-numeric.md)|  
  
### CMMI work item types  
  
|Work item type|Removed fields|Added fields|  
|--------------------|--------------------|------------------|  
|Bug|-   Baseline Work (Microsoft.VSTS.Scheduling.BaselineWork), replaced with Original Estimate<br />-   Estimate (Microsoft.VSTS.CMMI.Estimate)<br />-   Issue (Microsoft.VSTS.Common.Issue)<br />-   Rank (Microsoft.VSTS.Common.Rank), replaced with Stack Rank<br />-   Steps to Reproduce (Microsoft.VSTS.CMMI.StepsToReproduce), replaced with Repro Steps<br />-   Test Name (Microsoft.VSTS.Test.TestName)<br />-   Test Id (Microsoft.VSTS.Test.TestId)<br />-   Test Path (Microsoft.VSTS.Test.TestPath)|-   [Original Estimate (Microsoft.VSTS.Scheduling.OriginalEstimate)](../../boards/queries/query-numeric.md)<br />-   [Severity (Microsoft.VSTS.Common.Severity)](../../boards/queries/planning-ranking-priorities.md)<br />-   [Stack Rank (Microsoft.VSTS.Common.StackRank)](../../boards/queries/planning-ranking-priorities.md)<br />-   [System Info (Microsoft.VSTS.TCM.SystemInfo)](../../boards/queries/build-test-integration.md)<br />-   [Repro steps (Microsoft.VSTS.TCM.ReproSteps)](../../boards/queries/build-test-integration.md)|  
|Task|-   Baseline Work (Microsoft.VSTS.Scheduling.BaselineWork), replaced with Original Estimate<br />-   Estimate (Microsoft.VSTS.CMMI.Estimate)<br />-   Exit Criteria (Microsoft.VSTS.Common.ExitCriteria)<br />-   Issue (Microsoft.VSTS.Common.Issue)<br />-   Rank (Microsoft.VSTS.Common.Rank), replaced with Stack Rank<br />-   Task Hierarchy (Microsoft.VSTS.Scheduling.TaskHierarchy)<br />-   Test Name (Microsoft.VSTS.Test.TestName)<br />-   Test Id (Microsoft.VSTS.Test.TestId)<br />-   Test Path (Microsoft.VSTS.Test.TestPath)|-   [Original Estimate (Microsoft.VSTS.Scheduling.OriginalEstimate)](../../boards/queries/query-numeric.md)<br />-   [Stack Rank (Microsoft.VSTS.Common.StackRank)](../../boards/queries/planning-ranking-priorities.md)|  
|Requirement|-   Baseline Work (Microsoft.VSTS.Scheduling.BaselineWork), replaced with Original Estimate<br />-   Completed Work (Microsoft.VSTS.Scheduling.CompletedWork)<br />-   Estimate (Microsoft.VSTS.CMMI.Estimate), replaced with Scheduling Size<br />-   Exit Criteria (Microsoft.VSTS.Common.ExitCriteria)<br />-   Issue (Microsoft.VSTS.Common.Issue)<br />-   Rank (Microsoft.VSTS.Common.Rank), replaced with Stack Rank<br />-   Remaining Work (Microsoft.VSTS.Scheduling.RemainingWork)|-   [Original Estimate (Microsoft.VSTS.Scheduling.OriginalEstimate)](../../boards/queries/query-numeric.md)<br />-   [Stack Rank (Microsoft.VSTS.Common.StackRank)](../../boards/queries/planning-ranking-priorities.md)<br />-   [Scheduling Size (Microsoft.VSTS.Scheduling.Size)](../../boards/queries/query-numeric.md)|  
  
 The types of customizations you might apply include field additions, additions or changes to pick lists, or additions to workflow reasons. Do not change the workflow states as these are used in process configuration and the Agile planning tools. If you must change the workflow, change it after you have finished the update and follow the guidance about state category mappings described in [Process configuration](process-configuration-xml-element.md).  
  
 If you use other work item types defined in the process template, and want to update them to the latest versions, then apply any customizations you have made for them as well. Also, if you have defined a custom work item type that you use to track test cases, you should apply customizations from that type to the Test Case work item type provided with the latest process template.  
  
 To learn more about working with the artifacts that these process templates provide, see [Agile process](../../boards/work-items/guidance/agile-process.md) or [CMMI process](../../boards/work-items/guidance/cmmi-process.md).   
  
  
## 6. Import work item types  
 Import the following work item types based on the process template you are working with.  
  
-   **Agile**: Bug, Task, User Story, Test Case, Shared Steps, Code Review Request, Code Review Response, Feedback Request, Feedback Response  
  
-   **CMMI**: Bug, Task, Requirement, Test Case, Shared Steps, Code Review Request, Code Review Response, Feedback Request, Feedback Response  
  
 Perform this task for each project that you want to update.  
  
-   Type the following command for each work item type that you need to import, substituting your data for the arguments that are shown, and then choose the **ENTER** key.  
  
    ```  
    witadmin importwitd /collection:CollectionURL /p:projectName /f:"DirectoryPath\WITName"  
  
    ```  
  
    > [!TIP]
    >  Specify the name of the xml file and not the friendly name of the work item type. For example, specify CodeReviewRequest.xml for the Code Review Request work item type.  
  
     For *DirectoryPath*, specify the directory location of the TypeDefinitions folder for the process template that you downloaded. The directory path should follow this structure: *Drive*:*MSFTemplateFolder* WorkItem TrackingTypeDefinitions.  
  
-   (Optional) Verify the work item types are accessible by opening Team Explorer or the web portal. You might have to [refresh the cache](../../project/navigation/index.md?toc=/azure/devops/user-guide/toc.json&bc=/azure/devops/user-guide/breadcrumb/toc.json#refresh-web-portal) to see the changes.  
  
## 7. Import the categories file  
 Import the category file located in the WorkItem Tracking folder of the process template that you downloaded. Categories support intelligent grouping of work item types. To learn more, see [Use categories to group work item types](use-categories-to-group-work-item-types.md).  
  
-   In the Command Prompt window, type the following command, substituting your data for the arguments that are shown, and then choose the **ENTER** key.  
  
    ```  
    witadmin importcategories /collection:CollectionURL /p:projectName /f:"DirectoryPath\categories.xml"  
    ```  
  
     For *DirectoryPath*, specify the path to the WorkItem Tracking folder for the process template that you downloaded. The directory path should follow this structure: *Drive*:\\*MSFTemplateFolder*\WorkItem Tracking.  
  
<a id="8-import-configure" /> 
  
## 8. Import the process configuration file  
 The process configuration file determines the layout and features available through the backlog and board pages of the web portal. To use these pages, you must import the process configuration file.  
  
-   Import the definition file for process configuration.  
  
    ```  
    witadmin importprocessconfig /collection:CollectionURL /p:" ProjectName" /f:"DirectoryPath\ProcessConfiguration.xml"  
  
    ```  
  
     For *DirectoryPath*, specify the path to the Process folder for the process template that you downloaded. The directory path should follow this structure: *Drive*:\\*TemplateFolder*\WorkItem Tracking\Process.  
  
## 9. Verify access to new features  
Open a web portal and [determine if all features are available to you](../new-features-added.md).  
  
> [!NOTE]  
>  You will not have to perform the additional steps to update the workflow for Agile projects as described here: [Update the workflow for agile projects](update-the-workflow-for-agile-team-projects.md). By following the procedures in this topic, you will have applied these changes already.  
  
## Additional tasks to interface with Microsoft Test Manager  
 Perform the following tasks to complete the updates required to interface with Test Manager.  
  


<a id="map_bug_type" /> 

### 1. Specify the bug type to be created in Microsoft Test Manager  
 To support the automatic creation of a work item to track code defects or bugs that are found when a test team member uses Test Manager, you must specify the bug type to be used for your existing project. The **tcm bugfieldmapping** command supports the import and export of a mapping file to the project. The mapping file defines the type of work item to create and the three data fields to be filled by Test Manager. The three fields are reproducible steps, system information, and the build in which the defect was found. When a tester runs a test and finds a defect, they can create a bug in which the three fields are automatically filled.  
  
1.  Open Notepad or a text editor, and copy the following code into the file:  
  
    ```xml
    <?xml version="1.0" encoding="utf-16"?>
    <BugFilerMappings workitemtypetocreate="Bug">  
          <ReproSteps>Microsoft.VSTS.TCM.ReproSteps</ReproSteps>  
          <SystemInformation>Microsoft.VSTS.TCM.SystemInfo</SystemInformation>  
          <BuildFoundIn>Microsoft.VSTS.Build.FoundIn</BuildFoundIn>  
    </BugFilerMappings>  
    ```  
  
    > [!NOTE]
    >  If the work item type that you use to create code defects is labeled something other than "Bug," replace "Bug" in the previous example with the name of that work item type.  
  
2.  Save the file, and label it bugfieldmappings.xml.  
  
3.  In the Command Prompt window, type the following command, substituting your data for the arguments that are shown, and then choose the **ENTER** key.  
  
    ```  
    tcm bugfieldmapping /import /mappingfile:"DirectoryPath\bugfieldmappings.xml" /collection:CollectionURL /teamproject:projectName  
    ```  
  
     For *DirectoryPath*, specify the folder where you saved the bugfieldmappings.xml file.  
  
     For more information, see [tcm: Customize and manage the test experience](../witadmin/tcm-customize-manage-test-experience.md).  
  
 

<a id="grant_permissions" /> 
  
###  2. Grant permissions to test team members  
 You must grant permissions to team members who will manage test environments and test configurations, create and view test runs, and perform other tasks.  
  
 The following table describes the permissions that control access to test functions and support interfacing with the project for testing. It also indicates the default assignments that are made in version 5.0 of the Agile and CMMI process templates, in addition to the recommended permissions to grant manual testers and test leads.  
  
|**Permission**|**Description**|Scope|Readers|Contributors|Builders|Recommended for manual testers|Recommended for test leads|  
|--------------------|---------------------|-----------|-------------|------------------|--------------|------------------------------------|--------------------------------|  
|**View project-level information**|Can view membership of project-level groups and the permissions of those members.|Project-level|![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|  
|**View test runs**|Can view test plans in this node.|Project-level|![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|  
|**Create test runs**|Can add and remove test results and add or modify test runs for the project.|Project-level||![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|  
|**Manage test configurations**|Can create and delete test configurations for the project.|Project-level||![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")||![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|  
|**Manage test environments**|Can create and delete test environments for the project.|Project-level||![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")||![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|  
|**Delete test runs**|Can delete a scheduled test for the project.|Project-level||![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")||![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|  
|**View this node**|Can view the security settings for an area node.|Area node|![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")||![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|  
|**Manage test plans**|Can create and edit test plans that are assigned to an area node. If test plans have not been run, you can also delete them.|Area node||![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|  
|**Manage test controllers**|Can register and unregister test controllers for the project collection.|Project collection|||||![check mark](_img/icon_witcheckgreen.png "Icon_WITcheckgreen")|  
  
 You can grant permissions by following the procedures that are indicated for the specific scope area:  
  
-   You can set project-level permissions or area node permissions from the administration page of web portal. See [Permissions reference](../../organizations/security/permissions.md) and [Customize your area or iteration paths](../../organizations/settings/set-area-paths.md).  update-a-team-project-manually-to-support-test-management.md
  
-   You can set project collection permissions from Team Explorer by choosing **Team, Team Project Collection Settings, Security**, by opening and using the administration console for Team Foundation, or by using the **TFSSecurity** and **tf** command-line tools. For more information, see [Add an administrator](../../organizations/security/set-project-collection-level-permissions.md).  
  

<a id="launch_mtm" /> 

## 3. Launch Microsoft Test Manager  
After you have completed the upgrade tasks that are described earlier in this topic, you can start Microsoft Test Manager, connect to your project, and start to plan your test efforts. 

> [!NOTE]    
>Microsoft Test Manager is in the process of being deprecated. The web portal **Test** pages for TFS 2017 and later versions is a fully featured Test management solution which works across all platforms and with all browsers, we recommend you use **Test** over Microsoft Test Manager for all your test management requirements. You can use Microsoft Test Manager to test your desktop applications by launching the Microsoft Test Runner (client) from **Test**. To learn more, see [Guidance on Microsoft Test Manager usage](../../test/mtm/guidance-mtm-usage.md). 
 


<a id="additional_info" /> 
##  Additional information about changes made when upgrading TFS  

 When you upgrade from Visual Studio Team System 2008 Team Foundation Server to TFS 2012, you receive updates made to both TFS 2010 and TFS 2012. There were a number of architectural changes made with the release of TFS 2010. To learn more about the changes made by upgrading to the latest version of TFS from Visual Studio Team System 2008 Team Foundation Server, see the following resources:  
  
-   [Team Foundation Server 2010 Key Concepts](http://blogs.msdn.com/b/bharry/archive/2009/04/19/team-foundation-server-2010-key-concepts.aspx) (blog post)   
-   [Update a customized process template to access new features](../update-customized-process-template.md)    
-    [Locating reports after the upgrade to TFS 2010](http://msdn.microsoft.com/library/ff452588%28v=vs.100%29.aspx)    
-   [Changes and Additions to the Schema for the Analysis Services Cube](http://msdn.microsoft.com/library/ff472574%28v=vs.100%29.aspx)     
-   [Changes made to process templates](../../boards/work-items/guidance/changes-to-process-templates.md)   
  
## Related articles
-  [witAdmin: Customize and manage objects for tracking work](../witadmin/witadmin-customize-and-manage-objects-for-tracking-work.md)   
-  [Configure features after an upgrade](../configure-features-after-upgrade.md) 
