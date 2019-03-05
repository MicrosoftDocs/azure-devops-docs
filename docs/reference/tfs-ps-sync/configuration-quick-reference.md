---
title: Configuration quick reference
titleSuffix: TFS 
description: Install and configure the Team Foundation Server Extensions for the Project Server to support Team Foundation Server-Project Server integration  
ms.prod: devops
ms.technology: devops-agile
ms.assetid: 55197d77-ff30-4534-8f59-7cf8cc329806
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
ms.topic: reference
ms.date: 01/12/2017
---

# Configuration quick reference

[!INCLUDE [temp](../../_shared/tfs-ps-sync-header.md)]

<a name="Top"></a> Before you can synchronize data between Visual Studio Team Foundation Server and Microsoft Project Server, you must first install the Team Foundation Server Extensions for Project Server and configure the two server products. You can use this topic as a quick reference to install software, assign permissions, configure integration, and verify data synchronization. To perform more customized configurations or for more detailed procedures, see [Configure TFS-Project Server integration](configure-tfs-project-server-integration.md).  
  
> [!NOTE]
>  To ask a question of the community, see the following forum post on the Microsoft website: [Team Foundation Server and Project Server Integration](http://go.microsoft.com/fwlink/?LinkId=207282).  
  
  
 **Requirements**  
  
 To follow the procedures in this topic, you must belong to the following groups or have the following permissions:  
  
-   To register an instance of Project Web Access or Project Web App (PWA), you must belong to the **Team Foundation Administrators** group and to the Administrators group for each instance of PWA that you will register.  
  
-   To grant Team Foundation permissions: you must belong to the **Team Foundation Administrators** group or your **View instance-level information** and **Edit instance-level information** permissions must be set to **Allow**. You must also have access to the **Team Foundation Administration Console** or the **Group Membership** dialog box for a project collection by using Team Explorer.  
  
-   To grant Project Server permissions: you must have **Manage users and groups global permission** for an instance of PWA. You must also have access to Project Server through PWA.  
  
-   To grant SSP permissions: you must belong to the **Farm Administrators** group, the **SharePoint Administration** group, or the administrators group for the Web application that supports Project Server. Group membership will depend on the security architecture of your deployment.  
  
-   To use `stsadm.exe`: you must be an administrator on the local computer.  
  
 For more information, see [Assign permissions](assign-permissions-support-tfs-project-server-integration.md).  
  
##  <a name="prerequisites"></a> Prerequisite software  
 The following table summarizes the prerequisite software that you must install and configure before you install Team Foundation Server Extensions for Project Server.  
  
> [!IMPORTANT]
>  Installing or upgrading to Visual Studio Team Foundation Server 2012 requires 64-bit machines. Also, to install Team Foundation Server Extensions for Project Server requires that Project Server is installed on 64-bit machines.  
  
|Step|Task|Machine|Notes|  
|----------|----------|-------------|-----------|  
|![Step 1](_img/procguid_1.png "ProcGuid_1")|Install one of the following versions of Project Server:<br /><br /> - Project Server 2010 with SP1.<br /><br /> - Project Server 2013.|On each web-tier and application-tier server that hosts Project Server 2010 or Project Server 2013 and that will participate in data synchronization.|**Important:** For Project Server 2010, the SharePoint web application for the instance of PWA must be set to **Classic Mode Authentication**. You will not be able to register the instance of PWA if it is set to **Claims Based Authentication**.<br /><br /> For Project Server 2013, you can configure the SharePoint web application for the instance of PWA to either **Classic Mode Authentication** or **Claims Based Authentication**.|  
|![Step 2](_img/procguid_2.png "ProcGuid_2")|Install one of the following versions of Office Project:<br /><br /> - Project Professional 2007 with SP2 and the update that you can download from the following page on the Microsoft website: [Description of the Office Project 2007 hotfix package (Project-x-none.msp): February 23, 2010](http://go.microsoft.com/fwlink/?LinkId=211633).<br /><br /> - Project Professional 2007 with SP3.<br /><br /> - Project Professional 2010.<br /><br /> - Project Professional 2013.|Each client machine on which Project Professional will be used to synchronize data between enterprise project plans and projects.|You must install Visual Studio 2012 or Team Explorer 2012 on each client machine to get the plug-in that supports integration between Team Foundation Server and Project Server.|  
  
> [!NOTE]
>  You do not need to deploy Active Directory, but it is highly recommended so that you can more easily synchronize the accounts of users, groups, and services that are valid within Team Foundation Server and Project Server.  
  
##  <a name="install"></a> Install software  
 The following table summarizes the installation steps that you must perform. To install software, you must have administrative permissions on the machine where the software is installed.  
  
|Step|Task|Machine|Notes|  
|----------|----------|-------------|-----------|
|![Step 1](_img/procguid_1.png "ProcGuid_1")|Install Visual Studio Team Foundation Server 2013.|Each application-tier server for Team Foundation Server that will participate in data synchronization with Project Server.|The software that supports data synchronization is automatically installed with Team Foundation Server. For more information, see [Install](/azure/devops/server/install/get-started).|  
|![Step 2](_img/procguid_2.png "ProcGuid_2")|Install Team Foundation Server Extensions for Project Server.|On each Web tier and App tier server that hosts Project Server 2010 or Project Server 2013 and that will participate in data synchronization.|Only those machines that have Team Foundation Server Extensions for Project Server installed can participate in data synchronization between the two products.<br /><br /> For more information, see [How to: Add Project Server to Team Foundation Server](https://msdn.microsoft.com/library/hh548139.aspx).|  
|![Step 3](_img/procguid_3.png "ProcGuid_3")|Install Visual Studio 2013 or Team Explorer 2013.<br /><br /> For downloads, see: [Visual Studio 2013 downloads](http://go.microsoft.com/fwlink/?LinkId=262122)|Each client machine on which Project Professional will be used to synchronize data between enterprise project plans and projects.<br /><br /> Each client machine or server that you will use to configure and administer the integration of the two products.<br /><br /> **Important:** You must install Visual Studio 2012 to obtain the add-in for Project Professional, but you do not require a client access license (CAL) to interface with the integration of Team Foundation Server and Project Server.|Each project manager who will manage enterprise project plans that will participate in data synchronization with Team Foundation must install the add-in to Project Professional. Also, each administrator who will configure the integration of the two server products requires the software that is installed with Visual Studio 2012. This software configures the add-in to Project for the integration.|  
  
  
##  <a name="assign"></a> Assign permissions  
 To assign permissions, you must have administrative permissions for the software elements that you are configuring. You must assign administrative permissions for Team Foundation Server and an instance of Project Web Access or Project Web App (PWA) to the user who will configure the integration of these products. The following table summarizes the permissions that you must assign. You should make these assignments after you have installed Team Foundation Server Extensions for Project Server. You assign most permissions through the Team Foundation administration console for a project collection, the **Project Security** dialog box for a project, or through the Manage Users or Manage Groups web pages for an instance of PWA.  
  
 To assign permissions, see [Assign permissions](assign-permissions-support-tfs-project-server-integration.md).  
  
##  <a name="configure"></a> Configure integration  
 The following table summarizes the minimum set of steps that you must take to configure integration of the two products. Each step uses the `TfsAdmin` command-line tool, which you can access by opening a Command Prompt window where either Visual Studio or Team Explorer is installed and enter:  
  
```  
cd %programfiles(x86)%\Microsoft Visual Studio 12.0\Common7\IDE  
```  
  
 On a 32-bit edition of Windows, replace **%programfiles(x86)%** with **%programfiles%**.  
  
 To perform more customized configurations, see [Configure TFS-Project Server integration](configure-tfs-project-server-integration.md).  
  
> [!NOTE]
>  Even if you sign in with administrative permissions, you must open an elevated Command Prompt window to run the `TfsAdmin` command-line tool on a server that is running Windows Server 2008. To open an elevated Command Prompt window, click **Start**, right-click **Command Prompt**, and then click **Run as Administrator**. For more information, see the following page on the Microsoft website: [User Access Control](http://go.microsoft.com/fwlink/?LinkId=111235).  
  
|Step|Task|  
|----------|----------|
|![Step 1](_img/procguid_1.png "ProcGuid_1")|**Register an instance of PWA**. You must register each instance of PWA that supports the enterprise project plans with the application-tier server that hosts the projects that will participate in data synchronization. You should register all instances of PWA that are used by enterprise project plans that must synchronize their data with a project.<br /><br /> `TfsAdmin ProjectServer /RegisterPWA /pwa:pwaUrl /tfs:tfsUrl`<br /><br /> Replace *pwaUrl* with the Uniform Resource Locator (URL) of the instance of PWA and *tfsUrl* with the URL of the application-tier server.<br /><br /> The following example registers *PWAInstance* to AdventureWorksServer:<br /><br /> **TfsAdmin ProjectServer /RegisterPWA /pwa:http://PWAServerName/PWAInstance /tfs:http://AdventureWorksServer:8080/tfs/**<br /><br /> **Note:** The default port for Team Foundation Server is 8080. For more information, see [Verify or Correct Port Assignments](/azure/devops/server/architecture/required-ports).|  
|![Step 2](_img/procguid_2.png "ProcGuid_2")|**Map the PWA instance with a project collection**. You must map each instance of PWA that supports an enterprise project plan. You should map all instances of PWA that are used by enterprise project plans that must synchronize data with projects.<br /><br /> `TfsAdmin ProjectServer /MapPWAtoCollection /pwa:pwaUrl /collection:tpcUrl`<br /><br /> Replace *tpcUrl* with the URL of the project collection.<br /><br /> The following example maps DefaultCollection to PWAInstance, which is defined on AdventureWorksServer:<br /><br /> **TfsAdmin ProjectServer /MapPWAToCollection /pwa:http://PWAServerName/PWAInstance /collection:http://AdventureWorksServer:8080/tfs/DefaultCollection**|  
|![Step 3](_img/procguid_3.png "ProcGuid_3")|**Upload default field mappings**. You must define the field mappings for each project collection that you have mapped to an instance of PWA. You can use the default field mappings as a starting place and customize them only if necessary.<br /><br /> `TfsAdmin ProjectServer /UploadFieldMappings /collection:tpcUrl /useDefaultFieldMappings`<br /><br /> The following example uploads the default field mappings to DefaultCollection on the AdventureWorksServer:<br /><br /> **TfsAdmin ProjectServer /UploadFieldMappings /collection:http://AdventureWorksServer:8080/tfs/DefaultCollection /useDefaultFieldMappings**<br /><br /> For more information, see [Customize the field mapping](customize-field-mapping-tfs-project-server.md).|  
|![Step 4](_img/procguid_4.png "ProcGuid_4")|**Associate an enterprise project plan with a project**. Before you can map a project plan, you must first publish it to Project Server, and the project must be defined in the collection. You must map each enterprise project plan to the project that contains data that you want to synchronize. You also must indicate which types of work items you want to participate in synchronization.<br /><br /> `TfsAdmin ProjectServer /MapPlanToTeamProject /collection:tpcUrl /enterpriseproject:PlanName /teamproject:ProjectName /workitemtypes:ListOfTypes`<br /><br /> Replace *PlanName* with the name of the enterprise project plan, *ProjectName* with the name of the project, and *ListOfTypes* with the names of the types of work items. For example, you can specify the following types of work items to support an agile process as "*User Story,Task*" or *"User Story", Task*. If your project is based on a formal (CMMI) process template, you can specify "*Requirement,Task*". Do not include a space after the comma.<br /><br /> The following example maps MyEnterpriseProjA to MyTeamProjB in DefaultCollection on AdventureWorksServer and specifies that user stories and tasks will participate in synchronization:<br /><br /> **TfsAdmin ProjectServer /MapPlanToTeamProject /collection:http://AdventureWorksServer:8080/tfs/DefaultCollection/ enterpriseproject:MyEnterpriseProjA /teamproject:MyTeamProjB /workitemtypes:"User Story,Task"**<br /><br /> **Note:** The `/nofixedwork` flag is optional. Specify this flag only if you want Project Server tasks that are mapped to work items in Team Foundation not to be assigned to the **Fixed Work** task type.<br /><br /> If you mapped your project plan while it was open, you should close and re-open it for the changes to register. When you open the plan, you should verify whether the **Publish to Team Project** and **Work Item Type** (Text30) columns appear. The presence of these columns indicates that the project plan has been mapped to a project.|  
|![Step 5](_img/procguid_6.png "ProcGuid_6")|**Add team members to the enterprise resource pool**. For each task that is published to the project, you must assign a valid contributor of the project as a resource. You must also identify as a valid contributor any team member who submits work items that are synchronized with Project Server. To identify valid contributors, you must add team members from the enterprise resource pool to the resources for the enterprise project plan. For more information, see [Add resources to the enterprise resource pool](http://go.microsoft.com/fwlink/?LinkId=203356).|  
  
##  <a name="verify"></a> Verify data synchronization  
 You can verify that data is being synchronized by performing the steps that the following table summarizes. Perform these steps by using the enterprise project plan and the project that you mapped when you configured the integration.  
  
|Step|Task|Procedure|  
|----------|----------|---------------|  
|![Step 1](_img/procguid_1.png "ProcGuid_1")|**Program Manager**: Add a task, and set it to synchronize with Team Foundation Server.|**Important:** Make sure that you close the project plan after it was mapped and then re-open it.<br /><br /> In a mapped enterprise project plan, define a user story, task, or requirement. Make sure that you assign the following fields: **Resource Names**, **Publish to Team Project**, and **Work Item Type (TFS)**. Save the plan, and then publish it to Project Server.<br /><br /> You can verify that the plan has been published if you check the status bar in your project plan.|  
|![Step 2](_img/procguid_2.png "ProcGuid_2")|**Team Lead**: Verify that the tasks that were added in step 1 appear as work items in Team Foundation.|In Team Explorer, run the Product Backlog or Work Breakdown query. The new work items should appear within a few minutes of the plan being published to Project Server.<br /><br /> Open the work item, and verify that the **Project Server Sync** message has been added to the history field.|  
|![Step 3](_img/procguid_3.png "ProcGuid_3")|**Team Lead**: Change one of the work items that was replicated in Team Foundation. Add a work item, and set it to publish to Project Server.|Open the replicated work item, click the **Project Server** tab, and modify a field. For example, you can modify the **Remaining Work** field.<br /><br /> Create a work item, set the **Submit to Project Server** field to **Yes**, and save the work item.<br /><br /> **Note:** You can submit only those work items that are types that were configured to participate in data synchronization.|  
|![Step 4](_img/procguid_4.png "ProcGuid_4")|**Program Manager**: Review and approve the updated status for the submitted work items.|From a web browser, open your Approval Center, and verify that a status update appears for the updated work item and the newly created work item. You should expect the status update to appear after a few minutes. Accept the status updates, and add a comment.<br /><br /> **Note:** If your integration is with Project Server 2010, you can verify whether the comments that you add to a status update appear in the History field of the work item.<br /><br /> To update your enterprise project plan with the changes that were submitted from Team Foundation, you must accept the updates.|  
|![Step 5](_img/procguid_5.png "ProcGuid_5")|**Program Manager**: Verify that the approved work items appear in the enterprise project plan.|Open the enterprise project plan, and confirm that the approved work items appear. You may have to close the project plan and reopen it to view the updates.|  
|![Step 6](_img/procguid_6.png "ProcGuid_6")|**Team Lead**: Review the Project Server Sync messages and the status of the submitted work items.|In Team Explorer, refresh your project. Open the work items that were submitted to Project Server, and review the message that was added to the **History** field. Click the **Project Server** tab, and review the values that were assigned to the status fields for Project Server. You should expect the updates to appear after a few minutes.|  
  
## Related articles  
 [System and setup requirements](system-and-setup-requirements.md)   
 [Map integration components](map-integration-components.md)   
 [Synchronization process overview](synchronization-process-overview.md)   
 [Configure TFS-Project Server integration](configure-tfs-project-server-integration.md)