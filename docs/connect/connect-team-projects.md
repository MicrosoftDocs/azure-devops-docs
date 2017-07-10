---
title: Connect to team projects | Team Service & TFS 
description: Connect a client to the cloud service Visual Studio Team Services or on-premises Team Foundation Server (TFS) 
ms.topic: get-started-article  
ms.technology: vs-devops-overview
ms.prod: vs-devops-alm
ms.assetid: 1372e56c-b34f-42c2-b72c-94b57620c75c
ms.manager: douge
ms.author: kaelli
ms.date: 12/05/2016 
---

# Connect to team projects 

**Team Services | TFS 2017 | TFS 2015 | TFS 2013** 

To share code, build apps, track work, and collaborate with team members, you connect to a team project from one of the following clients:  
- [Web portal](#web-portal)  
- [Visual Studio or Team Explorer](#visual-studio)  
- [Eclipse/Team Explorer Everywhere](../git/share-your-code-in-git-eclipse.md)
- [Android Studio with the Visual Studio Team Services Plugin for Android Studio](http://java.visualstudio.com/Docs/tools/androidstudio)  
- [IntelliJ with the Visual Studio Team Services Plugin for IntelliJ](http://java.visualstudio.com/Docs/tools/intellij) 
- [Visual Studio Code](http://java.visualstudio.com/Docs/tools/vscode)    

>[!NOTE]
>A team project defines a process and data storage in which you manage your software projects from planning to deployment. You or a team member create a team project either on Team Services or an on-premises TFS. When you connect to a team project, you connect to an account or team project collection. Within that collection, one or more team projects may be defined. At a minimum, at least one team project must be created in order to use the system. 

If you don't have a team project yet, create one in [Visual Studio Team Services](../setup-admin/team-services/set-up-vs.md) or set one up in an [on-premises TFS](../setup-admin/create-team-project.md). If you need to add a team, see [Multiple teams](../work/scale/multiple-teams.md). If you don't have access to the team project, [get invited to the team](../work/scale/multiple-teams.md#add-team-members). 

From each of these clients, you can quickly switch context to a different team project and connect under a different account name. If you work remotely, you can configure your client to [connect to a TFS Proxy server](#proxy).

To get started with a code base, [set up Git](../git/gitquickstart.md) or [set up TFVC](../tfvc/overview.md).

<a id="web-portal">  </a>
## Connect from the web portal

1.  If you're not a member of a Team Services or TFS security group, ask your account or project admin to add you.  

2.  Open a browser window and type a URL that uses the following form:

	**Team Services:** 
	<pre><code>https://<i>AccountName</i>.visualstudio.com/<i>ProjectName</i> </code></pre>

	**TFS (on-premises):**   
	<pre><code>http://<i>ServerName</i>:8080/tfs/DefaultCollection/<i>ProjectName</i></code></pre> 

    For example, to connect to the server named **FabrikamPrime**, type: **http://FabrikamPrime:8080/tfs/**.

    The default Port is 8080. Specify the port number and directory for your server if defaults aren't used.

3.  When you access the server for the first time, a Windows Identity dialog box will appear. Fill in your credentials and choose the **OK** button.

    >[!TIP]
    >If you select the **Remember me** check box you won't have to enter your credentials the next time you connect.

4.  Choose your team project or team from the set of available links, or choose Browse to access all team projects and teams. 

	<img src="_img/connect-tp-tfs-web-portal.png" alt="Web portal, TFS, Oerview page" style="border: 1px solid #CCCCCC;" /> 

To learn more about each hub and the tasks you can perform, see [Work in the web portal](work-web-portal.md).

[!INCLUDE [temp](../_shared/switch-team-context.md)]

<!--- 
### To browse to a different team project

From the account home page, click Browse. 

<img src="_img/connect-tp-browse.png" alt="Web portal, browse team projects" style="border: 1px solid #CCCCCC;" />

### To switch context to a different team project

Choose the team project you want to work on from the team project menu. 

<img src="_img/connect-tp-switch-context.png" alt="Web portal, switch team projects" style="border: 1px solid #CCCCCC;" />

--> 


### To log on with different credentials

1.  Open Windows Security from the context menu associated with your name.

    ![Sign in As link on Account context menu](_img/connect-tp-open-profile.png)

2.  Enter your credentials.

    ![Enter user name and password to access TFS](_img/connect-team-projects-tfs/IC657077.png)

### To open the web portal from Team Explorer

-   Open the web portal  from the home page.

    ![Connect to Team Web Access](_img/connect-tp-open-web-portal.png)

<a id="visual-studio">  </a>
## Connect from Visual Studio or Team Explorer


>[!TIP]  
>If you're connecting to Team Services, see also [Connect to Visual Studio Team Services from Eclipse, Xcode, Visual Studio, and more](../setup-admin/team-services/connect-to-visual-studio-team-services.md). 

1.  If you haven't already, [download and install a version of Visual Studio](https://www.visualstudio.com/downloads/download-visual-studio-vs).

2.  If you're not a member of a TFS security group, [get added as one](../setup-admin/add-users.md).

3.  Check with a team member to determine the names of the server, team project collection, and team project that you will connect to.

<div style="background-color: #f2f0ee;padding-top:10px;padding-bottom:10px;">

<ul class="nav nav-pills" style="padding-right:15px;padding-left:15px;padding-bottom:5px;vertical-align:top;font-size:18px;">
<li style="float:left;" data-toggle="collapse" data-target="#connect-dialog">Connect to a team project</li> 

<li style="float: right;"><a style="max-width: 374px;min-width: 120px;vertical-align: top;background-color:#AEAEAE;margin: 0px 0px 0px 8px;min-width:50px;color: #fff;border: solid 2px #AEAEAE;border-radius: 0;padding: 2px 6px 0px 6px;outline-style:none;height:32px;font-size:12px;font-weight:400" data-toggle="pill" href="#vs-2017-connect-dialog">Visual Studio 2017</a></li>
<li class="active" style="float: right;"><a style="max-width: 374px;min-width: 120px;vertical-align: top;background-color:#007acc;margin: 0px 0px 0px 8px;min-width:50px;color: #fff;border: solid 2px #007acc;border-radius: 0;padding: 2px 6px 0px 6px;outline-style:none;height:32px;font-size:12px;font-weight:400" data-toggle="pill" href="#vs-2015-connect-dialog">Visual Studio 2013/2015</a></li>

</ul>

<div id="connect-dialog" class="tab-content collapse in fade" style="background-color: #ffffff;margin-left:5px;margin-right:5px;padding: 5px 5px 5px 5px;">
<div id="vs-2015-connect-dialog" class="tab-pane fade in active" style="background-color: #ffffff;margin-left: 15px;margin-right:15px;padding: 5px 5px 5px 5px;"> 
<p> From the Connect page, choose the **Connect to Team Project** link to select a different account, TFS, or team project to connect to.

    <p>![connect to team projects](_img/te-connect-page-connect-to-team-project.png)  

    <p>Select the team projects that you will work on.   

    <p>![Connect to Team Foundation Server dialog box](_img/connect-team-projects-tfs/IC671574.png)   

    <p>If it's your first time connecting, add TFS to the list of recognized servers.   

    <p>![ALM\_EXL\_AddServer](_img/connect-team-projects-tfs/IC658167.png)   

    <p>If you selected just one team project, you'll see the Home page for that project. The pages that appear differ based on the resources enabled and the source control system selected for your team project.
	
</div>
   
<div class="tab-pane fade" id="vs-2017-connect-dialog" style="background-color: #ffffff;margin-left: 15px;margin-right:15px;padding: 5px 5px 5px 5px;">
<p>
Select the connect icon in Team Explorer to open up the **Connect** page. Choose the **Connect to Team Project** link to select a team project to connect to.

    <p>![connect to team projects](_img/te-connect-page-connect-to-team-project.png)  

     <p>The **Connect to a Project** dialog will appear and show the Team Services projects you can connect to, along with the repos in those projects.

     <p>![Connect to a Project dialog box](_img/connect-team-projects-tfs/vs2017_connect_dialog.png)

    <p>Select the **Add Server** link to connect to a team project in Team Foundation Server. Enter the URL to your TFS server and select **Add**. 

     <p>![ALM\_EXL\_AddServer](_img/connect-team-projects-tfs/vs2017_add_tfs_server.png)

     <p>Select a team project from the list and select **Connect**. 
      
</div></div></div>   
<br/>   
<p>Team Explorer will display the Home page for that project. The pages that appear differ based on the resources enabled and the source control system selected for your team project.

<div style="float:left;width:320px;margin:3px;font-size:100%">
<p style="font-weight:bold;padding-bottom:0px;text-align:center;">Home page with Git</p>
<p style="text-align:center;"><img src="_img/te-home-page-git-repo.png" title="Team Explorer Home page with Git as source control" alt="Team Explorer Home page with Git as source control" /></p>

</div>

<div style="float:left;width:320px;margin:3px;font-size:100%">
<p style="font-weight:bold;padding-bottom:0px;text-align:center;">Home page with TFVC</p>
<p style="text-align:center;"><img src="_img/te-home-page-tfvc-repo.png" title="Team Explorer Home page w/ TFVC as source control" alt="Team Explorer Home page w/ TFVC as source control" /></p>

</div>

<div style="clear:left;font-size:100%">
</div>   

To learn more about each page and the tasks you can perform, see [Work in Team Explorer](work-team-explorer.md).   
   
Your client remembers the set of connections you've configured. You can quickly switch from one team project to another from the Connect page.   

### To change accounts when connecting to Team Services

<div style="background-color: #f2f0ee;padding-top:10px;padding-bottom:10px;">

<ul class="nav nav-pills" style="padding-right:15px;padding-left:15px;padding-bottom:5px;vertical-align:top;font-size:18px;">
<li style="float:left;" data-toggle="collapse" data-target="#connect-account-dialog">Connect to a project using a different account</li> 

<li style="float: right;"><a style="max-width: 374px;min-width: 120px;vertical-align: top;background-color:#AEAEAE;margin: 0px 0px 0px 8px;min-width:50px;color: #fff;border: solid 2px #AEAEAE;border-radius: 0;padding: 2px 6px 0px 6px;outline-style:none;height:32px;font-size:12px;font-weight:400" data-toggle="pill" href="#vs-2017-connect-account-dialog">Visual Studio 2017</a></li>
<li class="active" style="float: right;"><a style="max-width: 374px;min-width: 120px;vertical-align: top;background-color:#007acc;margin: 0px 0px 0px 8px;min-width:50px;color: #fff;border: solid 2px #007acc;border-radius: 0;padding: 2px 6px 0px 6px;outline-style:none;height:32px;font-size:12px;font-weight:400" data-toggle="pill" href="#vs-2015-connect-account-dialog">Visual Studio 2013/2015</a></li>

</ul>
<div id="connect-account-dialog" class="tab-content collapse in fade" style="background-color: #ffffff;margin-left:5px;margin-right:5px;padding: 5px 5px 5px 5px;">
<div id="vs-2015-connect-account-dialog" class="tab-pane fade in active" style="background-color: #ffffff;margin-left: 15px;margin-right:15px;padding: 5px 5px 5px 5px;"> 
 
<ol><li><p> From the Connect page, choose the **Connect to Team Project** link to log on with different credentials.

    <p>![connect to team projects](_img/te-connect-page-connect-to-team-project.png)  

    <p>The **Switch User** link appears only when you are actively connected to a team project hosted on Team Services.  

	<p>![Connect to Team Foundation Server dialog box](_img/connect-team-projects-tfs/IC719958.png)</li>

<li>  Sign on using a valid Microsoft account—an account that is associated with a Visual Studio Team Services team project.</li></ol>
</div>

<div class="tab-pane fade" id="vs-2017-connect-account-dialog" style="background-color: #ffffff;margin-left: 15px;margin-right:15px;padding: 5px 5px 5px 5px;">

<ol><li><p> From the Connect page, choose the **Connect to Team Project** link to log on with different credentials.

<p>![connect to team projects](_img/te-connect-page-connect-to-team-project.png)  

<p>Select a different user from the drop-down or select **Add an account...** to access a team project using a different account.

<p>![Connect with VS 2017 TFS or Team Services using a different account](_img/connect-team-projects-tfs/choose-different-user-vs2017.png)</li>

<li>  Sign on using a valid Microsoft account—an account that is associated with a Visual Studio Team Services team project.</li></ol>
</div></div></div>  </br>

### To change accounts 

-   To run Visual Studio under an account that is different from your logged on Windows account, open the context menu for **devenv.exe** to access your run as options.

    ![Context menu for Visual Studio devenv.exe](_img/connect-team-projects-tfs/IC719959.png)

    You can locate the executable in the following folder: *Drive*:\\Program Files (x86)\Microsoft Visual Studio 12.0\Common7\IDE\.


<a id="excel-project">  </a>
## Connect from Microsoft Excel or Project 

To add or modify work items by using Excel or Project, you connect your worksheet or project plan to a team project. Establishing this connection binds the document to the hosted account or selected TFS, team project collection, and team project to exchange information. 
 

>[!NOTE]  
>You can't use Office Project 365 to connect to Team Services or TFS.
 
### Connect from a worksheet or project plan 

To follow these procedures, you must be a member of the **Readers** group or have your **View work items in this node** permission set to **Allow**. See [Permission reference](../setup-admin/permissions.md) for details.


1.  If you don't have Office Excel 2007 or a more recent version, [install it](https://products.office.com/excel). For Team Services or TFS 2017, you'll need Project 2010 or a more recent version. For client compatibility, see [Requirements](../setup-admin/requirements.md)

2.  If you haven't installed a version of [Visual Studio (2010 or later)](https://www.visualstudio.com/downloads/download-visual-studio-vs) or [Team Foundation Server Standalone Office Integration 2015 (free)](https://www.visualstudio.com/downloads/#team-foundation-server-office-integration-2015-update-3-1), you'll need to install one of these versions to connect to a team project hosted on Team Services or an on-premises TFS. 

	<blockquote style="font-size: 13px"><b>Feature availability: </b> The only way to get the Team Foundation add-in to Excel is by installing one of the latest editions of Visual Studio or  TFS Standalone Office Integration. </blockquote>  

3.  Start with a blank worksheet or project plan. If you don't see the **Team** ribbon (or the **Team** menu if you use Excel 2007 or Project 2007), see step 2.

    ![Create a list connection between Excel and the data store](../work/office/_img/bulk-modify-excel-blank-list.png)

    > [!TIP]    
    > If the **Team** ribbon no longer appears, you might need to [re-enable it](https://msdn.microsoft.com/library/vstudio/ms268871.aspx).

4.  Connect to Team Services account or a TFS instance and the team project. If you can't connect, [get added as a team member](../setup-admin/add-users.md).

    ![Connect to server](../work/office/_img/IC680074.png)

    If it is your first time connecting from Excel or Project, you might have to add the Team Services account or TFS server to the list of recognized servers.

    ![Add account or server](../work/office/_img/IC658167.png)

5.  Your worksheet or project plan is now bound to your team project. What this means is that you can add work items to the team project from the Office document or add work items to the Office document from the team project.

    To learn more, see [Bulk add work items with Excel](../work/office/bulk-add-modify-work-items-excel.md) or [Create your backlog and tasks using Project](../work/office/create-your-backlog-tasks-using-project.md).

>[!NOTE]  
>If the team project is moved to a different team project collection in the same instance of TFS, your documents will automatically be reconnected. However, if the team project is moved to a different instance of TFS, you must manually reconnect your documents to the new server.

### Work offline  

An advantage to using Excel or Project is that you can work offline to add or modify work items. Complete the following procedures to disconnect an Excel worksheet or Project plan and later reconnect to synchronize your updates with the work item database.

### To disconnect the document from a team project

1.  Open the document that you want to change while you are offline.

2.  Follow one of the following steps:

    -   If you are using Excel, on the **Team** ribbon, in the **Work Items** group, choose **Refresh**.

    -   If you are using Project, on the **Team** menu, choose **Refresh**.

    This step refreshes the work item list to retrieve the latest information from the work item database.

3.  If you are using Excel, add to the work item list the columns for all fields that you want to modify.

    You cannot add columns when the work item list is not connected to TFS.

4.  Save your Excel or Project file. You can now modify the information even if you are offline, disconnected from the team project or network. 

5.  Change the work item list as needed.

	>[!NOTE]  
	>You cannot create most types of links between work items when the work item document is not connected to the team project. The exceptions are parent-child links in an Excel tree list and both parent-child and predecessor-successor links in a Project plan.

#### To reconnect the document to the team project

1.  Make sure your computer is online.  

2.  If you changed the document while you were offline, follow one of these steps:

    -   If you are using Excel, on the **Team** ribbon, in the **Work Items** group, choose **Publish**.

    -   If you are using Project, on the **Team** menu, choose **Publish Changes**.

3.  If you did not change the document while you were offline, follow one of these steps:

    -   If you are using Excel, on the **Team** ribbon, in the **Work Items** group, choose **Refresh**.

    -   If you are using Project, on the **Team** menu, choose **Refresh**.

4.  Resolve any data validation errors or conflicts that occur.

## Related notes  

Additional resources you may find of interest: 

- [Work in web portal](work-web-portal.md) 
- [Work in team Explorer](work-web-portal.md) 
- [User-focused features](user-focused-features.md)  
- [Productivity tips](../work/productivity/productivity-tips.md)
- [Keyboard shortcuts](../reference/keyboard-shortcuts.md) 
- [Collaborate using team resources](../work/scale/manage-team-assets.md)  
- [Customize the work tracking experience](../work/customize/customize-work.md)  

If all you need is a code repository and bug tracking solution, then start with the [Git get started guide](../git/get-started.md) and [Manage bugs](../work/backlogs/manage-bugs.md).  

To start planning and tracking work, see [Get started with Agile tools to plan and track work](../work/overview.md). 

### User accounts and licensing  

To connect to a team project, you need your user account added to the team project. This is typically done by the [account owner (Team Services)](../setup-admin/team-services/add-account-users-assign-access-levels-team-services.md) or a [project administrator (TFS)](../setup-admin/add-users.md). 

Team Services provides access to the first 5 account users free. After that, you need to [pay for more users (Team Services)](../setup-admin/team-services/buy-basic-access-add-team-services-users.md). For on-premises TFS, each user account must have a TFS client access license (CAL). All Visual Studio subscriptions and paid Team Services users include a TFS CAL. Find out more about licensing from the [Team Foundation Server pricing page](https://www.visualstudio.com/team-services/tfs-pricing).

In addition, you can provide access to stakeholders in your organization who will have limited access to select features as described in [Work as a Stakeholder](../quickstart/get-started-stakeholder.md).

<a name="proxy"></a>
## Configure Visual Studio to connect to TFS Proxy

If your remote team uses a [TFS Proxy server](../setup-admin/tfs/install/install-proxy-setup-remote.md) to cache files, you can configure Visual Studio to connect through that proxy server and download files under Team Foundation version control.

1.  First, make sure that you have connected to TFS as described [in the previous section](#visual-studio).

2.  From the Visual Studio **Tools** menu, open the Options dialog and expand the Source Control folder. On the Plug-in Selection page, confirm that Visual Studio Team Foundation Server is selected.

    ![Plug-in Selection page, Options dialog box](_img/connect-team-projects-tfs/IC719960.png)

3.  On the Visual Studio Team Foundation Server page, enter the name and port number for the TFS Proxy server. Select the **Use SSL encryption (https) to connect** checkbox.

    ![VS TFVC proxy configuration page, Options dialog](_img/connect-team-projects-tfs/IC719961.png)

    Make sure you specify the port number that your administrator assigned to TFS Proxy.

To **Configure User Tools** to associate a file type with a compare or merge tool, see [Associate a file type with a file-comparison tool](../tfvc/associate-file-type-file-comparison-tool.md) or [Associate a file type with a merge tool](../tfvc/associate-file-type-merge-tool.md).



###What other clients support connection to TFS?

In addition to connecting through a web browser, Visual Studio, Eclipse, Excel, and Project you can connect to a team project from these clients: 

- [Visual Studio Code](https://code.visualstudio.com/Docs)
- [Visual Studio Community](https://www.visualstudio.com/products/visual-studio-community-vs.aspx) 
- [Eclipse: Team Explorer Everywhere](http://java.visualstudio.com/Docs/tools/eclipse) 
- [PowerPoint Storyboarding](../work/office/storyboard-your-ideas-using-powerpoint.md) 
- [Microsoft Test Manager](https://msdn.microsoft.com/library/jj635157.aspx)
- [Microsoft Feedback Client](../work/connect/give-feedback.md) 

### Requirements and client compatibility 

Some tasks or features aren't available when you connect to a later version of TFS than which your client supports. For more information, see [Requirements and compatibility](../setup-admin/requirements.md).

### Determine your platform or TFS version 

See [Feedback and support](../provide-feedback.md#platform-version) 

### Connect to a TFS with Secure Sockets Layer (SSL) configured

If you connect to a TFS instance that has SSL configured, then you'll need to install a certificate and clear the client cache. For details, see [Set up HTTPS with Secure Sockets Layer (SSL) for TFS, Configuring Client Computers](../setup-admin/tfs/admin/setup-secure-sockets-layer.md#config-client-computers). 


### Clear the cache on client computers  

When the on-premises TFS configuration changes, such as when moving or splitting a project collection, you might have to clear the cache.

1.  Log on to your client computer for Team Foundation by using the credentials of the user whose cache you want to clear.

2.  Close any open instances of Visual Studio.

3.  Open a browser, and browse to one of the following folders, depending on the operating system that is running on the client computer:  

    -   **Windows 10**  
        *Drive*:\\Users\<i>UserName</i>\AppData\Local\Microsoft\Team Foundation\6.0\Cache  

    -   **Windows 8**  
        *Drive*:\\Users\<i>UserName</i>\AppData\Local\Microsoft\Team Foundation\4.0\Cache  

    -   **Windows Vista or Windows 7**  
        *Drive*:\\Users\<i>UserName</i>\AppData\Local\Microsoft\Team Foundation\2.0\Cache  

4.  Delete the contents of the Cache directory, including all subfolders.

### What can I do if I can't connect?

Here's a list of the most frequently encountered connection problems and what to do about them. Start at the top and follow it in the order indicated.

1.  Verify that you have required permissions.

    If the errors that you receive indicate read-only or blocked actions, you might not have permission to act on the data.

2.  Verify that your computer is connected to the network and can access network resources.

3.  Verify that TFS hasn't been taken offline. Talk with your TFS administrator.

4.  Verify whether your team project has been moved to another team project collection in Team Foundation Server. If it has been moved, you must create a connection to the new server name.

For additional troubleshooting tips, see [TF31002: Unable to connect to this Team Foundation Server](../work/reference/error/tf31002-unable-connect-tfs.md).

