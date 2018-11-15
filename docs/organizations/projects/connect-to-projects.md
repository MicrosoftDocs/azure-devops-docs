---
title: Connect to a project from a web browser or supported client in Azure DevOps
titleSuffix: Azure DevOps & TFS
description: Learn how to connect a client to the cloud service Azure DevOps Services or on-premises Team Foundation Server (TFS) 
ms.technology: devops-new-user
ms.prod: devops
ms.topic: quickstart
ms.assetid: 1372e56c-b34f-42c2-b72c-94b57620c75c
ms.manager: douge
ms.author: sdanie
author: steved0x
ms.date: 11/14/2018 
monikerRange: '>= tfs-2013'
---

# Connect to a project in Azure DevOps Services or TFS

[!INCLUDE [temp](../../_shared/version-vsts-tfs-all-versions.md)]

To share code, build apps, track work, and collaborate with team members, you connect to a project from one of the following clients:
  
- [Web portal](#web-portal)  
- [Visual Studio or Team Explorer](#visual-studio)  
- [Eclipse/Team Explorer Everywhere](../../repos/git/share-your-code-in-git-eclipse.md)
- [Android Studio with the Azure DevOps Services Plugin for Android Studio](../../java/download-android-studio-plug-in.md)  
- [IntelliJ with the Azure DevOps Services Plugin for IntelliJ](../../java/download-intellij-plug-in.md) 
- [Visual Studio Code](../../java/vscode-extension.md)    

> [!NOTE]
> A project defines a process and data storage in which you manage your software projects from planning to deployment. When you connect to a project, you connect to an organization or project collection. Within that collection, one or more projects may be defined. At a minimum, at least one project must be created in order to use the system. For more information, see [About projects and scaling your organization](about-projects.md).

If you don't have a project yet, [create one](create-project.md). If you need to add a team, see [Add teams](../../organizations/settings/add-teams.md). If you don't have access to the project, [get invited to the team](../security/add-users-team-project.md). 

From each of these clients, you can quickly switch context to a different project and connect under a different sign-in user name. If you work remotely, you can configure your client to [connect to a TFS Proxy server](#proxy).

To get started with a code base, [set up Git](../../repos/git/gitquickstart.md) or [set up TFVC](../../repos/tfvc/overview.md).

<a id="web-portal">  </a>

## Connect from the web portal

0.  If you're not a member of a security group, ask your project administrator to add you.  

0.  Open a browser window and type a URL that uses the following form:  

	::: moniker range="vsts"
	<pre><code>https://dev.azure.com/<i>OrganizationName</i>/<i>ProjectName</i> </code></pre>
	::: moniker-end

	::: moniker range=">= tfs-2013 <= tfs-2018" 
	<pre><code>http://<i>ServerName</i>:8080/tfs/DefaultCollection/<i>ProjectName</i></code></pre> 

    For example, to connect to the server named **FabrikamPrime**, type: **http://FabrikamPrime:8080/tfs/**.

    The default Port is 8080. Specify the port number and directory for your server if defaults aren't used.
	::: moniker-end

0.  When you access the server for the first time, a Windows Identity dialog box will appear. Fill in your credentials and choose the **OK** button.

    > [!TIP]
    > If you select the **Remember me** check box you won't have to enter your credentials the next time you connect. 
 
::: moniker range=">= tfs-2017"   
0. From the project summary page, hover over a service and then choose the page of interest. To choose another project, choose the ![Azure DevOps logo](../../_img/icons/project-icon.png) Azure DevOps logo.  

	> [!div class="mx-imgBorder"]  
	> ![Choose a service page, horizontal nav](_img/connect-projects/project-summary-page-choose-app-horz.png)  

::: moniker-end  

::: moniker range=">= tfs-2013 <= tfs-2015"   
0.  Choose your project or team from the set of available links, or choose Browse to access all projects and teams.   

	![Web portal, TFS, Overview](_img/connect-tp-tfs-web-portal.png) 
::: moniker-end   

To learn more about each page and the tasks you can perform, see [Web portal navigation](../../project/navigation/index.md).


<a name="logindifferentcred"></a>

### Log on with different credentials

1.  Open Windows Security from the context menu associated with your name.

    ![Sign in As link in user profile menu](_img/connect-tp-open-profile.png)

2.  Enter your credentials.

    ![Enter user name and password to access TFS](_img/connect-projects-tfs/IC657077.png)

### Open the web portal from Team Explorer

-   Open the web portal from the home page.

    ![Connect to the web portal](_img/connect-tp-open-web-portal.png)

<a id="visual-studio">  </a>

## Connect from Visual Studio or Team Explorer

1.  If you haven't already, [download and install a version of Visual Studio](https://visualstudio.microsoft.com/downloads/download-visual-studio-vs).

2.  If you're not a member of a TFS security group, [get added as one](../security/add-users-team-project.md).

3.  Check with a team member to determine the names of the server, project collection, and project that you will connect to.

::: moniker range="tfs-2017"

<a id="vs-2017-connect-dialog" />

### Visual Studio 2017

Select the connect icon in Team Explorer to open up the **Connect** page. Choose the **Connect to Team Project** link to select a project to connect to.

![connect to projects](_img/te-connect-page-connect-to-team-project.png)  

The **Connect to a Project** dialog will appear and show the projects you can connect to, along with the repos in those projects.

![Connect to a Project dialog box](_img/connect-projects-tfs/vs2017_connect_dialog.png)

Select the **Add Server** link to connect to a project in Team Foundation Server. Enter the URL to your TFS server and select **Add**. 

![ALM\_EXL\_AddServer](_img/connect-projects-tfs/vs2017_add_tfs_server.png)

Select a project from the list and select **Connect**.

::: moniker-end

::: moniker range="tfs-2015"

<a id="connect-dialog" /> 
<a id="vs-2015-connect-dialog" /> 

### Visual Studio 2015

From the **Connect** page, choose the **Connect to Team Project** link to select a different organization, TFS, or project to connect to.

![connect to projects](_img/te-connect-page-connect-to-team-project.png)  
Select the projects that you will work on.   

![Connect to Team Foundation Server dialog box](_img/connect-projects-tfs/IC671574.png)   

If it's your first time connecting, add TFS to the list of recognized servers.   

![ALM\_EXL\_AddServer](_img/connect-projects-tfs/IC658167.png)   

If you selected just one project, you'll see the Home page for that project. The pages that appear differ based on the resources enabled and the source control system selected for your project.
	
   

Team Explorer will display the Home page for that project. The pages that appear differ based on the resources enabled and the source control system selected for your project.

> [!div class="mx-tdBreakAll"]  
> |Home page with Git  |Home page with TFVC  |
> |-------------|----------|
> |<img src="_img/te-home-page-git-repo.png" title="Team Explorer Home page with Git as source control" alt="Team Explorer Home page with Git as source control" />|<img src="_img/te-home-page-tfvc-repo.png" title="Team Explorer Home page w/ TFVC as source control" alt="Team Explorer Home page w/ TFVC as source control" />|

To learn more about each page and the tasks you can perform, see [Work in Team Explorer](../../user-guide/work-team-explorer.md).   
   
Your client remembers the set of connections you've configured. You can quickly switch from one project to another from the Connect page.

::: moniker-end

### Change sign-in credentials
 
::: moniker range="tfs-2017"

<a id="connect-account-dialog" /> 
<a id="vs-2015-connect-account-dialog" />

### Visual Studio 2017

1. From the Connect page, choose the **Connect to Team Project** link to sign in with different credentials.

	![connect to projects](_img/te-connect-page-connect-to-team-project.png)  

	Select a different user from the drop-down or select **Add an account...** to access a project using different sign-in credentials.

	![Connect with VS 2017 using different sign-in credentials](_img/connect-projects-tfs/choose-different-user-vs2017.png) 

2. Sign in using a valid Microsoft account &mdash; an account that is associated with an Azure DevOps Services or TFS project.

::: moniker-end

::: moniker range="tfs-2015"

### Visual Studio 2015

1. From the Connect page, choose the **Connect to Team Project** link to sign in with different credentials.

	![connect to projects](_img/te-connect-page-connect-to-team-project.png)  

	The **Switch User** link appears only when you are actively connected to a project on Azure DevOps Services.  

	![Connect to Team Foundation Server dialog box](_img/connect-projects-tfs/IC719958.png) 

2. Sign in using a valid Microsoft account &mdash; an account that is associated with Azure DevOps Services or a TFS project. 

::: moniker-end


### Change sign-in credentials

To run Visual Studio under sign-in credentials that are different from your signed-in Windows account, open the context menu for **devenv.exe** to access your run as options.

![Context menu for Visual Studio devenv.exe](_img/connect-projects-tfs/IC719959.png)

You can locate the executable in the following folder: *Drive*:\\Program Files (x86)\Microsoft Visual Studio 12.0\Common7\IDE\.


<a id="excel-project">  </a>

## Connect from Microsoft Excel or Project

To add or modify work items by using Excel or Project, you connect your worksheet or project plan to a project. Establishing this connection binds the document to the Azure DevOps organization or selected TFS, project collection, and project to exchange information. 
 

> [!NOTE]  
> You can't use Office Project 365 to connect to Azure DevOps Services or TFS.
 
### Connect from a worksheet or project plan

To follow these procedures, you must be a member of the **Readers** group or have your **View work items in this node** permission set to **Allow**. See [Permission reference](../security/permissions.md) for details.

1.  If you don't have Office Excel 2007 or a more recent version, [install it](https://products.office.com/excel). For Azure DevOps Services or TFS 2017, you'll need Project 2010 or a more recent version. For client compatibility, see [Client compatibility](/tfs/server/compatibility)

2.  If you haven't installed a version of [Visual Studio (2010 or later)](https://visualstudio.microsoft.com/downloads/download-visual-studio-vs) or [Team Foundation Server Standalone Office Integration (free)](https://visualstudio.microsoft.com/downloads/?q=Office+Integration), you'll need to install one of these versions to connect to a project defined on Azure DevOps Services or an on-premises TFS. 

	> [!NOTE]  
	> **Feature availability:** The only way to get the Team Foundation add-in to Excel is by installing one of the latest editions of Visual Studio or [TFS Standalone Office Integration](https://visualstudio.microsoft.com/downloads/?q=Office+Integration).   

3.  Start with a blank worksheet or project plan. If you don't see the **Team** ribbon (or the **Team** menu if you use Excel 2007 or Project 2007), see step 2.

    ![Create a list connection between Excel and the data store](../../boards/backlogs/office/_img/bulk-modify-excel-blank-list.png)

    > [!TIP]    
    > If the **Team** ribbon no longer appears, you might need to [re-enable it](/visualstudio/vsto/how-to-re-enable-a-vsto-add-in-that-has-been-disabled).

4.  Connect to an Azure DevOps organization or a TFS instance and the project. If you can't connect, [get added as a team member](../security/add-users-team-project.md).

    ![Connect to server](../../boards/backlogs/office/_img/IC680074.png)

    If it is your first time connecting from Excel or Project, you might have to add the Azure DevOps organization or TFS server to the list of recognized servers.

    ![Add organization or server](../../boards/backlogs/office/_img/IC658167.png)

5.  Your worksheet or project plan is now bound to your project. What this means is that you can add work items to the project from the Office document or add work items to the Office document from the project.

    To learn more, see [Bulk add work items with Excel](../../boards/backlogs/office/bulk-add-modify-work-items-excel.md) or [Create your backlog and tasks using Project](../../boards/backlogs/office/create-your-backlog-tasks-using-project.md).

> [!NOTE]  
> If the project is moved to a different project collection in the same instance of TFS, your documents will automatically be reconnected. However, if the project is moved to a different instance of TFS, you must manually reconnect your documents to the new server.

### Work offline

An advantage to using Excel or Project is that you can work offline to add or modify work items. Complete the following procedures to disconnect an Excel worksheet or Project plan and later reconnect to synchronize your updates with the work item database.

### Disconnect the document from a project

1.  Open the document that you want to change while you are offline.

2.  Follow one of the following steps:

    -   If you are using Excel, on the **Team** ribbon, in the **Work Items** group, choose **Refresh**.

    -   If you are using Project, on the **Team** menu, choose **Refresh**.

    This step refreshes the work item list to retrieve the latest information from the work item database.

3.  If you are using Excel, add to the work item list the columns for all fields that you want to modify.

    You cannot add columns when the work item list is not connected to TFS.

4.  Save your Excel or Project file. You can now modify the information even if you are offline, disconnected from the project or network. 

5.  Change the work item list as needed.

	>[!NOTE]  
	>You cannot create most types of links between work items when the work item document is not connected to the project. The exceptions are parent-child links in an Excel tree list and both parent-child and predecessor-successor links in a Project plan.

#### Reconnect the document to the project

1.  Make sure your computer is online.  

2.  If you changed the document while you were offline, follow one of these steps:

    -   If you are using Excel, on the **Team** ribbon, in the **Work Items** group, choose **Publish**.

    -   If you are using Project, on the **Team** menu, choose **Publish Changes**.

3.  If you did not change the document while you were offline, follow one of these steps:

    -   If you are using Excel, on the **Team** ribbon, in the **Work Items** group, choose **Refresh**.

    -   If you are using Project, on the **Team** menu, choose **Refresh**.

4.  Resolve any data validation errors or conflicts that occur.

## Related articles

- [Work in web portal](../../project/navigation/index.md)  
- [Work in Team Explorer](../../user-guide/work-team-explorer.md)  
- [Troubleshoot connection](../../user-guide/troubleshoot-connection.md)  

If all you need is a code repository and bug tracking solution, then start with the [Git get started guide](../../repos/git/gitquickstart.md) and [Manage bugs](../../boards/backlogs/manage-bugs.md).  

To start planning and tracking work, see [Get started with Agile tools to plan and track work](../../boards/get-started/what-is-azure-boards.md). 

### User accounts and licensing

To connect to a project, you need your user account added to the project. This is typically done by the [organization owner (Azure DevOps Services)](../accounts/add-organization-users.md) or a [project administrator](../security/set-project-collection-level-permissions.md). 

::: moniker range="vsts"
Azure DevOps Services provides access to the first 5 account users free. After that, you need to [pay for more users](../../billing/buy-basic-access-add-users.md). 
::: moniker-end

::: moniker range=">= tfs-2013 <= tfs-2018"

For on-premises TFS, each user account must have a TFS client access license (CAL). All Visual Studio subscriptions and paid Azure DevOps Services users include a TFS CAL. Find out more about licensing from the [Team Foundation Server pricing page](https://visualstudio.microsoft.com/team-services/tfs-pricing).

::: moniker-end

In addition, you can provide access to stakeholders in your organization who will have limited access to select features as described in [Work as a Stakeholder](../security/get-started-stakeholder.md).

<a name="proxy"></a>

## Configure Visual Studio to connect to TFS Proxy

If your remote team uses a [TFS Proxy server](/tfs/server/install/install-proxy-setup-remote) to cache files, you can configure Visual Studio to connect through that proxy server and download files under Team Foundation version control.

1.  First, make sure that you have connected to TFS as described [in the previous section](#visual-studio).

2.  From the Visual Studio **Tools** menu, open the Options dialog and expand the Source Control folder. On the Plug-in Selection page, confirm that Visual Studio Team Foundation Server is selected.

    ![Plug-in Selection page, Options dialog box](_img/connect-projects-tfs/IC719960.png)

3.  On the Visual Studio Team Foundation Server page, enter the name and port number for the TFS Proxy server. Select the **Use SSL encryption (https) to connect** checkbox.

    ![VS TFVC proxy configuration page, Options dialog](_img/connect-projects-tfs/IC719961.png)

    Make sure you specify the port number that your administrator assigned to TFS Proxy.

To **Configure User Tools** to associate a file type with a compare or merge tool, see [Associate a file type with a file-comparison tool](../../repos/tfvc/associate-file-type-file-comparison-tool.md) or [Associate a file type with a merge tool](../../repos/tfvc/associate-file-type-merge-tool.md).


### What other clients support connection to Azure DevOps Services and TFS?

In addition to connecting through a web browser, Visual Studio, Eclipse, Excel, and Project you can connect to a  project from these clients: 

- [Visual Studio Code](https://code.visualstudio.com/Docs)
- [Visual Studio Community](https://visualstudio.microsoft.com/products/visual-studio-community-vs.aspx) 
- [Eclipse: Team Explorer Everywhere](/azure/devops/java/download-eclipse-plug-in) 
- [Microsoft Test Manager](../../test/mtm/guidance-mtm-usage.md)
- [Microsoft Feedback Client](../../project/feedback/give-feedback.md) 

### Requirements and client compatibility

Some tasks or features aren't available when you connect to a later version of TFS than which your client supports. For more information, see [Client compatibility](/tfs/server/compatibility).

### Determine your platform or TFS version

See [Feedback and support](../../user-guide/provide-feedback.md#platform-version). 



