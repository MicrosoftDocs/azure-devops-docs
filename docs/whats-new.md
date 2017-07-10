---
title: What's new for Team Foundation Server | TFS
description: Your guide to new features that support DevOps - made available with Team Foundation Server 2015
ms.technology: vs-devops-overview
ms.prod: vs-devops-alm
ms.topic: get-started-article  
ms.assetid: F72EC483-F195-4157-82AB-1EBEE87F7C10
ms.manager: douge
ms.author: kaelli
ms.date: 05/10/2017
---


# What's new for Team Foundation Server

<b>TFS 2017 | TFS 2015</b>  

You can use Visual Studio Team Foundation Server to manage your product lifecycle, reduce risks, and improve team efficiency. Updates are made every few weeks to the cloud-hosted version, Team Services. These updates are then rolled up and made available through quarterly updates to the on-premises TFS. To understand the differences between the hosted and on-premises versions, see [Essential services provided with Team Services and TFS](services.md).   

To learn about  what's new with the cloud service offering, see [Visual Studio Team Services Features update](https://www.visualstudio.com/news/release-archive-vso).   

## TFS 2017


### TFS 2017.2 RC1

>[!NOTE]  
>The links provided below open related sections within the [Team Foundation Server 2017 Update 2 RC1](https://www.visualstudio.com/en-us/news/releasenotes/tfs2017-update2) release notes. 

<div style="float:left;width:300px;margin:3px">
<p style="font-weight:bold;padding-bottom:0px;text-align:center;">[Work item tracking improvements](https://www.visualstudio.com/en-us/news/releasenotes/tfs2017-update2#wit)</p>
<ul>
<li>Work item type icons</li>
<li>Delivery plans and field criteria</li>
<li>Automatic linking from work items to builds</li>
<li>Work item search </li>
</ul>
<p style="font-weight:bold;padding-bottom:0px;text-align:center;">[Pull request improvements](https://www.visualstudio.com/en-us/news/releasenotes/tfs2017-update2#pr)</p>
<ul>
<li>Improved CTAs for PR author and reviewers</li>
<li>Actionable comments</li>
<li>Updates view shows rebase and force push</li>
<li>Pull request filtering by people</li>
<li>Reason required when bypassing pull request policies</li>
<li>Share pull requests with teams</li>
<li>Pull request improvements for teams</li>
<li>Default notifications for pull request comments</li>
</ul>
</div>

 


<div style="float:left;width:300px;margin:3px">
<p style="font-weight:bold;padding-bottom:0px;text-align:center;">[Version control improvements](https://www.visualstudio.com/en-us/news/releasenotes/tfs2017-update2#vc)</p>
<ul>
<li>New branch policies configuration experience</li>
<li>New policy for no active comments</li>
<li>Files hub improvements</li>
<li>Visualize your git repository</li>
<li>View git tags on commits</li>
<li>Add tags to commits</li>
<li>Updated changeset and shelveset pages</li>
<li>Improved commit filtering</li>
<li>Import repositories from TFVC to Git</li>
<li>Git LFS file locking</li>
<li>Git commit comments use the new discussion control</li>
<li>New tree view control</li>
</ul>
 
<p style="font-weight:bold;padding-bottom:0px;text-align:center;">[Package Management improvements](https://www.visualstudio.com/en-us/news/releasenotes/tfs2017-update2#pk)</p>
<ul>
<li>Updated Package Management experience</li>
<li>npm READMEs and download button</li>
<li>NuGet Restore, Command, and Tool Installer build tasks</li>
</ul>
</div>

<div style="clear:left;font-size:100%">
</div>


<div style="float:left;width:300px;margin:3px">
<p style="font-weight:bold;padding-bottom:0px;text-align:center;">[Build & Release improvements](https://www.visualstudio.com/en-us/news/releasenotes/tfs2017-update2#build)</p>
<ul>
<li>New build definition editor</li>
<li>Template search</li>
<li>Quickly find and add a task right where you want it</li>
<li>Use process parameters to pass key arguments to your tasks</li>
<li>Conditional build tasks</li>
<li>Built-in tasks for building and deploying container based applications</li>
<li>Azure Web App deployment updates</li>
<li>.NET Core tasks support project files</li>
<li>SSH deployment improvements</li>
<li>Install an SSH key during a build or release</li>
<li>Tasks fail if Visual Studio 2017 is specified but not present on agent</li>
<li>Private agent automatic workspace cleanup</li>
<li>Build agent upgrade status</li>
<li>Selection of private agents on machines not in use</li>
<li>iOS DevOps enhancements</li>
</ul>
</div>
<div style="float:left;width:300px;margin:3px">
<p style="font-weight:bold;padding-bottom:0px;text-align:center;">&nbsp;&nbsp;&nbsp;</p>
<ul>
<li>Java code coverage enhancements</li>
<li>Maven and SonarQube improvements</li>
<li>Improved Jenkins integration</li>
<li>Azure virtual machine scale set deployment</li>
<li>Override template parameters in Azure resource group deployments</li>
<li>Multiple release triggers with branch and tag filters</li>
<li>Set defaults for artifact sources in a release</li>
<li>Separation of duties for deployment requester and approvers</li>
<li>Release level approvals</li>
<li>Deploy to Azure Government Cloud</li>
<li>Set maximum number of parallel deployments</li>
<li>Timeout enhancements for the Manual Intervention task</li>
<li>Release Management parallel execution</li>
<li>Web app deployment history in Azure portal</li>
</ul>
</div>


<div style="clear:left;font-size:100%">
</div>

<div style="float:left;width:300px;margin:3px">
<p style="font-weight:bold;padding-bottom:0px;text-align:center;">[Test improvements](https://www.visualstudio.com/en-us/news/releasenotes/tfs2017-update2#test)</p>
<ul>
<li>Run tests using agent phases</li>
<li>On-demand triggering of automated tests</li>
</ul>
</div>


<div style="float:left;width:300px;margin:3px">
<p style="font-weight:bold;padding-bottom:0px;text-align:center;">[Administrative improvements](https://www.visualstudio.com/en-us/news/releasenotes/tfs2017-update2#admin)</p>
<ul>
<li>Combined email recipients for notifications</li>
<li>Out-of-the-box notifications</li>
<li>Extension management permissions</li>
<li>Getting notified when extensions are installed, require attention, and more</li>
<li>Allowing TFS admins to add subscribers to the advanced access level</li>
</ul>
</div>

<div style="clear:left;font-size:100%">
</div>

#### Deprecated features  

- **Old work item form**: The old work item form and the old extensibility model are being deprecated. Learn more about the timeline for deprecation in this blog post, [Announcing the deprecation of the old Work Item Form in TFS](https://blogs.msdn.microsoft.com/visualstudioalm/2017/05/22/announcing-the-deprecation-of-the-old-work-item-form-in-tfs/).  



### TFS 2017.1 RC2

>[!NOTE]  
>The links provided below open related sections within the [Team Foundation Server 2017 Update 1 RC2](https://www.visualstudio.com/news/releasenotes/tfs2017-update1) release notes. 

<div style="float:left;width:300px;margin:3px">
<p style="font-weight:bold;padding-bottom:0px;text-align:center;">Process template support</p>
<ul>
<li>[Process Template Editor extension for Visual Studio 2017 has been released](https://www.visualstudio.com/news/releasenotes/tfs2017-update1#pte)</li>
</ul>
</div>



<div style="float:left;width:300px;margin:3px">
<p style="font-weight:bold;padding-bottom:0px;text-align:center;">Git improvements</p>
<ul>
<li>[Branch policy improvements](https://www.visualstudio.com/news/releasenotes/tfs2017-update1#branchpolicy)</li>
<li>[Markdown support for the Discussion control](https://www.visualstudio.com/news/releasenotes/tfs2017-update1#toolbar)</li>
<li>[More granular permissions for administrating repositories](https://www.visualstudio.com//news/releasenotes/tfs2017-update1#repoadmin)</li>
<li>[PR Comment Improvements](https://www.visualstudio.com/news/releasenotes/tfs2017-update1#prcomment)</li>
<li>[View all PRs for a commit](https://www.visualstudio.com/news/releasenotes/tfs2017-update1#viewprs)</li>
</ul>
</div>

<div style="clear:left;font-size:100%">
</div>

<div style="float:left;width:300px;margin:3px">
<p style="font-weight:bold;padding-bottom:0px;text-align:center;">Test, Build, and Release improvements</p>
<ul>
<li>[Run tests built using Visual Studio 2017](https://www.visualstudio.com/news/releasenotes/tfs2017-update1#runtestsfromvs)</li>
<li>[Group variables and values to support multiple release definitions](https://www.visualstudio.com/news/releasenotes/tfs2017-update1#variablegroups)</li>
</ul>
</div>


<div style="clear:left;font-size:100%">
</div>


### TFS 2017.1 RC1

<p style="font-weight:bold;padding-bottom:0px;text-align:left;">Personal, admin, and cross-team project features</p>
<div style="float:left;width:300px;margin:3px">
<ul>
<li>[Personalized account home page](https://www.visualstudio.com/news/releasenotes/tfs2017-update1#personal)</li>
<li>[Project description and activity page](https://www.visualstudio.com/news/releasenotes/tfs2017-update1#personal)</li>
<li>[New notification settings experience](https://www.visualstudio.com/news/releasenotes/tfs2017-relnotes#admin)</li>
</ul>
</div>


<div style="clear:left;font-size:100%">
</div>

<p style="font-weight:bold;padding-bottom:0px;text-align:left;">Source control</p>
<div style="float:left;width:300px;margin:3px">

<p style="font-weight:bold;padding-bottom:0px;text-align:center;">[Git improvements](https://www.visualstudio.com/news/releasenotes/tfs2017-update1#vc)</p>
<ul>
<li>Import a Git repository from GitHub, BitBucket, GitLab, or other locations</li>
<li>Add .gitignore during repo creation</li>
<li>Restart pull request merge</li>
<li>Markdown in pull request description</li>
<li>Attachments in PR discussions</li>
<li>Restart pull request merge)</li>
<li>Support file exclusions in the required reviewer policy</li>
<li>Highlight the PRs that have updates</li>
<li>Branch policy for PR merge strategy</li>
<li>Expose merge conflict informations</li>
<li>Search for a file or folder in commit history</li>
<li>Commit page improvements</li>
<li>Search for commits in branche</li>

</div>
<div style="float:left;width:300px;margin:3px">
<p style="font-weight:bold;padding-bottom:0px;text-align:center;">[Code hub improvements](https://www.visualstudio.com/news/releasenotes/tfs2017-update1#vc)</p>
<ul>
<li>Configurable compare branch</li>
<li>Find a file or folder in your Code hub</li>
<li>Repo favorites</li>
<li>Markdown preview button</li>
<li>Confirmation for deleting repos</li>

</ul>


 
<p style="font-weight:bold;padding-bottom:0px;text-align:center;">[Package Management improvements](https://www.visualstudio.com/news/releasenotes/tfs2017-relnotes#package)</p>
<ul>
<li>Release views in Package Management </li>
<li>npm in Package Management</li>
 </ul>

<p style="font-weight:bold;padding-bottom:0px;text-align:center;">[Code search improvements](https://www.visualstudio.com/news/releasenotes/tfs2017-relnotes#search)</p>
<ul>
<li>Code Search service includes Elasticsearch version 2.4.</li>
 </ul>

<p style="font-weight:bold;padding-bottom:0px;text-align:center;">[Code insights improvements](https://www.visualstudio.com/news/releasenotes/tfs2017-relnotes#insights)</p>
<ul>
<li>SonarQube MSBuild tasks are now available from an extension provided by SonarSource</li>
</ul>

</div>
<div style="clear:left;font-size:100%">
</div>


<p style="font-weight:bold;padding-bottom:0px;text-align:left;">DevOps</p>
<div style="float:left;width:300px;margin:3px">
<p style="font-weight:bold;padding-bottom:0px;text-align:center;">[Build improvements](https://www.visualstudio.com/news/releasenotes/tfs2017-update1#build)</p>
<ul>
<li>Rollback build definitions
</li>
<li>Disable the sync and checkout of sources in a build
</li>
<li>Git shallow close and git-lfs
</li>
<li>Task versioning for Build and Release definitions
</li>
</ul>





<p style="font-weight:bold;padding-bottom:0px;text-align:center;">[Test improvements](https://www.visualstudio.com/news/releasenotes/tfs2017-update1#test)</p>
<ul>
<li>Verify bugs from work item</li>
<li>REST client helpers for Test Step operations</li>
<li>Update existing bugs from Web Runner</li>
<li>Test case description in Web Runner</li>
<li>Test hub contribution point</li>
<li>Delete test artifacts</li>
<li>Favorites for Test Plans</li>
<li>Test Impact Analysis for managed automated tests</li>
<li>Firefox support for Test & Feedback extension</li>
</ul>
</div>

<div style="float:left;width:300px;margin:3px">
<p style="font-weight:bold;padding-bottom:0px;text-align:center;">[Cross platform improvements](https://www.visualstudio.com/news/releasenotes/tfs2017-update1#xplat)</p>

<ul>
<li>Xcode build task xcpretty formatting</li>
<li>Publish Jenkins test and code coverage results</li>
<li>Xcode 8 signing and exporting packages in the Xcode build task</li>
</ul>

<p style="font-weight:bold;padding-bottom:0px;text-align:center;">[Release Management improvements](https://www.visualstudio.com/news/releasenotes/tfs2017-relnotes#rm)</p>

<ul>
<li>Multiple schedules in releasesm</li>
<li>Inline service connections in Build and Release</li>
<li>Link build artifacts from another team project</li>
<li>Azure resource group improvements</li>
<li>Azure CLI task</li>
</ul>

</div>


<div style="clear:left;font-size:100%">
</div>

#### Deprecated features  

- **Team rooms**: Several good solutions are available that integrate well with TFS that support notifications and chat, such as [Microsoft Teams](https://marketplace.visualstudio.com/items?itemName=ms-vsts.vss-services-teams) and [Slack](collaborate/slack.md). As a result, we have made a decision to deprecate our Team Room feature from both TFS and Team Services. To learn more about this change and the timeline for deprecation, see this blog post: [Deprecation of the Team Rooms in Team Services and TFS](https://blogs.msdn.microsoft.com/visualstudioalm/2017/01/04/deprecation-of-the-team-rooms-in-team-services-and-tfs/).  


### TFS 2017 RTW

>[!NOTE]  
>The links provided below open related sections within the [Team Foundation Server 2017](https://www.visualstudio.com/news/releasenotes/tfs2017-relnotes) release notes. 


<div style="float:left;width:300px;margin:3px">
<p style="font-weight:bold;padding-bottom:0px;text-align:center;"><br/>Source control</p>
<ul>
<li><a href="https://www.visualstudio.com/news/releasenotes/tfs2017-relnotes#codesearch">Code search</a></li>
<li><a href="https://www.visualstudio.com/news/releasenotes/tfs2017-relnotes#package">Package Management</a></li>
<li><a href="https://www.visualstudio.com/news/releasenotes/tfs2017-relnotes#git">Git Improvements</a></li>
</ul>
</div>

<div style="float:left;width:300px;margin:3px">
<p style="font-weight:bold;padding-bottom:0px;text-align:center;"><br/>Agile & Reporting</p>
<ul>
<li><a href="https://www.visualstudio.com/news/releasenotes/tfs2017-relnotes#agile">Agile improvements</a></li>
<li><a href="https://www.visualstudio.com/news/releasenotes/tfs2017-relnotes#dashboards">Dashboards and widget improvements</a></li>
</ul>
</div>

<div style="clear:left;font-size:100%">
</div>

<div style="float:left;width:300px;margin:3px">
<p style="font-weight:bold;padding-bottom:0px;text-align:center;"><br/>DevOps</p>
<ul>
<li><a href="https://www.visualstudio.com/news/releasenotes/tfs2017-relnotes#build">Build improvements</a></li>
<li><a href="https://www.visualstudio.com/news/releasenotes/tfs2017-relnotes#test">Test improvements</a></li>
<li><a href="https://www.visualstudio.com/news/releasenotes/tfs2017-relnotes#rm">Release Management improvements</a></li>
</ul>
</div>

<div style="float:left;width:300px;margin:3px">
<p style="font-weight:bold;padding-bottom:0px;text-align:center;">Administration, Marketplace, & Other</p>
<ul>
<li><a href="https://www.visualstudio.com/news/releasenotes/tfs2017-relnotes#admin">Administration improvements</a></li>
<li><a href="https://www.visualstudio.com/news/releasenotes/tfs2017-relnotes#pat">Personal Access Tokens</a></li>
<li><a href="https://www.visualstudio.com/news/releasenotes/tfs2017-relnotes#Marketplace">Marketplace improvements</a></li>
</ul>
</div>

<div style="clear:left;font-size:100%">
</div>

#### Deprecated features  

- **Client version of the work item form**: In Visual Studio 2017, work items open in a browser window. To learn more about this change, see this blog post: [Work items now open in the web from Visual Studio '15'](https://blogs.msdn.microsoft.com/visualstudioalm/2016/08/22/work-items-now-open-in-the-web-from-visual-studio-15/).  
- **Lab management**: Going forward, native build and release management tools replace the previous lab management tools. To learn more, see  [Use Build and Release Management instead of Lab Management for automated testing](https://docs.microsoft.com/visualstudio/test/lab-management/use-build-or-rm-instead-of-lab-management). 
- **Microsoft Test Manager**: The web portal Test hub is a fully featured Test management solution which works across all platforms and with all browsers, we recommend you use the Test hub over Microsoft Test Manager for all your test management requirements. You can use Microsoft Test Manager to test your desktop applications by launching the Microsoft Test Runner (client) from the Test hub. To learn more, see [Guidance on Microsoft Test Manager usage](test/manual-exploratory-testing/mtm/guidance-mtm-usage.md).   
- **Project Server integration**: Team Foundation Server 2017 and later versions no longer support native integration with Microsoft Project Server. However, third-party tools are available to support synchronization. For details, see [Synchronize TFS with Project Server](work/office/sync-ps-tfs.md).  
- **Release Manager V1 Client/Server**: Release Management features have been integrated into Team Foundation Server (TFS) 2015 Update 2 and later versions, and into the web portal Release hub. The newer web-based version is the recommended alternative to the server and client version. For more information, see [Automate deployments with Release Management](release/previous-version/release-management-overview.md). 
- **UML designers**: Have been removed from Visual Studio Enterprise client, Architecture features. To learn more, see [What's new for design in Visual Studio](https://docs.microsoft.com/visualstudio/modeling/what-s-new-for-design-in-visual-studio). 

<!---  
Canned SharePoint sites: 
Team rooms
XAML builds
MTM 
MSTest.exe
Lab Management
Release Manager V1 Client/Server
Architecture tools (UML, etc.) 
--> 


## TFS 2015

### TFS 2015 Update 4

TFS 2015.4 includes 
Download: [Team Foundation Server Update 4](https://go.microsoft.com/fwlink/?LinkId=844068)

To learn more about related downloads, see the [Downloads page](https://www.visualstudio.com/downloads/download-visual-studio-vs).

To learn about what's new and the bug fixes made in this release, see the [Release notes for Team Foundation Server 2015 Update 4](https://www.visualstudio.com/en-us/news/releasenotes/tfs2015-update4-vs).   



### TFS 2015 Update 3

>[!NOTE]  
>The links provided below open related sections within the [Team Foundation Server 2015 Update 3](https://www.visualstudio.com/news/releasenotes/tfs2015-update3-vs) release notes. 

<div style="float:left;width:300px;margin:3px">
<p style="font-weight:bold;padding-bottom:0px;text-align:center;"><br/>Source control</p>
<ul>
<li><a href="https://www.visualstudio.com/news/releasenotes/tfs2015-update3-vs#ssh-support">SSH support for Git repos</a></li>
<li><a href="https://www.visualstudio.com/news/releasenotes/tfs2015-update3-vs#version-control">Version control bug fixes</a></li>
</ul>
</div>

<div style="float:left;width:300px;margin:3px">
<p style="font-weight:bold;padding-bottom:0px;text-align:center;"><br/>Agile & Reporting</p>
<ul>

<li><a href="https://www.visualstudio.com/news/releasenotes/tfs2015-update3-vs#dashboard-sdk">Dashboard widget SDK</a></li>
<li><a href="https://www.visualstudio.com/news/releasenotes/tfs2015-update3-vs#agile">Agile bug fixes</a></li>
</ul>
</div>

<div style="clear:left;font-size:100%">
</div>

<div style="float:left;width:300px;margin:3px">
<p style="font-weight:bold;padding-bottom:0px;text-align:center;"><br/>DevOps</p>
<ul>
<li><a href="https://www.visualstudio.com/news/releasenotes/tfs2015-update3-vs#build">Build bug fixes</a></li>
<li><a href="https://www.visualstudio.com/news/releasenotes/tfs2015-update3-vs#testing">Testing - New features &amp; bug fixes</a></li>
<li><a href="https://www.visualstudio.com/news/releasenotes/tfs2015-update3-vs#release-management">Release Management</a></li>

</ul>
</div>

<div style="float:left;width:300px;margin:3px">
<p style="font-weight:bold;padding-bottom:0px;text-align:center;">Administration, Marketplace, & Other</p>
<ul>
<li><a href="https://www.visualstudio.com/news/releasenotes/tfs2015-update3-vs#admin">Administration bug fixes</a></li>
<li><a href="https://www.visualstudio.com/news/releasenotes/tfs2015-update3-vs#extensibility">Extensibility bug fixes</a></li>
<li><a href="https://msdn.microsoft.com/vs-knownissues/tfs2015-update3">Known issues</a></li>
</ul>
</div>

<div style="clear:left;font-size:100%">
</div>

### TFS 2015 Update 2

>[!NOTE]  
>The links provided below open related sections within the [Team Foundation Server 2015 Update 2](https://www.visualstudio.com/news/releasenotes/tfs2015-update2-vs) release notes. 


<div style="float:left;width:300px;margin:3px">
<p style="font-weight:bold;padding-bottom:0px;text-align:center;"><br/>Source control</p>
<ul>
<li><a href="https://www.visualstudio.com/news/releasenotes/tfs2015-update2-vs#mentionsid">@mentions and #ID</a></li>
<li><a href="https://www.visualstudio.com/news/releasenotes/tfs2015-update2-vs#gatedcheck">Gated check-in for Team Foundation Version Control</a></li>
<li><a href="https://www.visualstudio.com/news/releasenotes/tfs2015-update2-vs#vcweb">Version control web</a></li>
</ul>
</div>

<div style="float:left;width:300px;margin:3px">
<p style="font-weight:bold;padding-bottom:0px;text-align:center;"><br/>Agile & Reporting</p>
<ul>
<li><a href="https://www.visualstudio.com/news/releasenotes/tfs2015-update2-vs#mentionsid">@mentions and #ID</a></li>
<li><a href="https://www.visualstudio.com/news/releasenotes/tfs2015-update2-vs#delwork">Delete work items</a></li>
<li><a href="https://www.visualstudio.com/news/releasenotes/tfs2015-update2-vs#reorder">Reorder cards on boards</a></li>

<li><a href="https://www.visualstudio.com/news/releasenotes/tfs2015-update2-vs#keyshort">Kanban board keyboard shortcuts</a></li>
<li><a href="https://www.visualstudio.com/news/releasenotes/tfs2015-update2-vs#dashedit">Dashboards edit mode</a></li>
<li><a href="https://www.visualstudio.com/news/releasenotes/tfs2015-update2-vs#autodash">Auto-refresh dashboards</a></li>
<li><a href="https://www.visualstudio.com/news/releasenotes/tfs2015-update2-vs#widgetdb">Build widget</a></li>
<li><a href="https://www.visualstudio.com/news/releasenotes/tfs2015-update2-vs#mdwidget">Markdown widget: display an existing code repository file</a></li>
<li><a href="https://www.visualstudio.com/news/releasenotes/tfs2015-update2-vs#prwidget">Pull request widget</a></li>
<li><a href="https://www.visualstudio.com/news/releasenotes/tfs2015-update2-vs#wiqdash">Work item query charts widget</a></li>
</ul>
</div>


<div style="clear:left;font-size:100%">
</div>

<div style="float:left;width:300px;margin:3px">
<p style="font-weight:bold;padding-bottom:0px;text-align:center;"><br/>DevOps</p>
<ul>
<li><a href="https://www.visualstudio.com/news/releasenotes/tfs2015-update2-vs#builditems">Build-related features and improvements</a></li>
<li><a href="https://www.visualstudio.com/news/releasenotes/tfs2015-update2-vs#testresult">Test results available in the Release summary</a></li>
<li><a href="https://www.visualstudio.com/news/releasenotes/tfs2015-update2-vs#testjava">Test in Java</a></li>
<li><a href="https://www.visualstudio.com/news/releasenotes/tfs2015-update2-vs#testing">Test: new features and improvements</a></li>
<li><a href="https://www.visualstudio.com/news/releasenotes/tfs2015-update2-vs#newrmtfs">Release Management: new features and improvements</a></li>
</ul>
</div>


<div style="float:left;width:300px;margin:3px">
<p style="font-weight:bold;padding-bottom:0px;text-align:center;">Administration, Marketplace, & Other</p>
<ul>
<li><a href="https://www.visualstudio.com/news/releasenotes/tfs2015-update2-vs#teamproj">Team project creation and deletion experience improvements</a></li>
<li><a href="https://www.visualstudio.com/news/releasenotes/tfs2015-update2-vs#globalshort">Global shortcut keys</a></li>
<li><a href="https://www.visualstudio.com/news/releasenotes/tfs2015-update2-vs#commonip">Common identity picker</a></li>
<li><a href="https://www.visualstudio.com/news/releasenotes/tfs2015-update2-vs#suppext">Team Foundation Server extensions</a></li>
<li><a href="https://www.visualstudio.com/news/releasenotes/tfs2015-update2-vs#imprlink">Improved linking between code and work items</a></li> 
<li><a href="https://msdn.microsoft.com/library/mt685943.aspx">Known issues and fixed bugs (RC2)</a></li>
<li><a href="https://msdn.microsoft.com/library/mt694161.aspx">Known issues</a></li>
</ul>
</div>

<div style="clear:left;font-size:100%">
</div>

### TFS 2015 Update 1 

>[!NOTE]  
>The links provided below open related sections within the [Team Foundation Server 2015 Update 1](https://www.visualstudio.com/news/releasenotes/tfs2015-update1-vs) release notes. 

#### Source control 
<ul>
<li><a href="https://www.visualstudio.com/news/releasenotes/tfs2015-update1-vs#idpull">#ID in pull requests</a></li>
<li><a href="https://www.visualstudio.com/news/releasenotes/tfs2015-update1-vs#git">Git and Team Foundation Version Control (TFVC) in the same project</a></li>
<li><a href="https://www.visualstudio.com/news/releasenotes/tfs2015-update1-vs#vcweb">Version control on the web - history and getting started improvements</a></li>
<li><a href="https://www.visualstudio.com/news/releasenotes/tfs2015-update1-vs#pullreq">Pull requests in Visual Studio</a></li>
<li><a href="https://www.visualstudio.com/news/releasenotes/tfs2015-update1-vs#branchpol">Branch policy to require linked work items</a></li>
<li><a href="https://www.visualstudio.com/news/releasenotes/tfs2015-update1-vs#commit">Commit details summary is easier to read</a></li>
<li><a href="https://www.visualstudio.com/news/releasenotes/tfs2015-update1-vs#improvegit">Improved experience for empty Git repositories and cloning existing repositories</a></li>
<li><a href="https://www.visualstudio.com/news/releasenotes/tfs2015-update1-vs#errorlist">Visual Studio error list filtering is governed by modified files</a></li>
</ul>
 
 
#### Agile & Reporting 
<p><i>Backlogs</i></p>
<ul>
<li><a href="https://www.visualstudio.com/news/releasenotes/tfs2015-update1-vs#dragitem">Drag any item to an iteration from anywhere</a></li>
<li><a href="https://www.visualstudio.com/news/releasenotes/tfs2015-update1-vs#addpanel">Add panel on the iteration backlog</a></li>
<li><a href="https://www.visualstudio.com/news/releasenotes/tfs2015-update1-vs#multi">Multi-select on all backlogs</a></li>
<li><a href="https://www.visualstudio.com/news/releasenotes/tfs2015-update1-vs#config">Configure settings directly from backlogs and boards</a></li>
</ul>

<p><i>Kanban</i></p>
<ul>
<li><a href="https://www.visualstudio.com/news/releasenotes/tfs2015-update1-vs#rename">Inline rename of columns and swimlanes</a></li>
<li><a href="https://www.visualstudio.com/news/releasenotes/tfs2015-update1-vs#tagcolor">Tag coloring</a></li>
<li><a href="https://www.visualstudio.com/news/releasenotes/tfs2015-update1-vs#querykan">Query on Kanban columns</a></li>
<li><a href="https://www.visualstudio.com/news/releasenotes/tfs2015-update1-vs#taskchk">Tasks as a checklist</a></li>
<li><a href="https://www.visualstudio.com/news/releasenotes/tfs2015-update1-vs#reorder">Reorder cards when changing columns</a></li>
<li><a href="https://www.visualstudio.com/news/releasenotes/tfs2015-update1-vs#cardcol">Card coloring (Kanban and task boards)</a></li>
<li><a href="https://www.visualstudio.com/news/releasenotes/tfs2015-update1-vs#hide">Hide empty fields on cards</a></li>
</ul>
<p><i>Scrum</i></p>
<ul>
<li><a href="https://www.visualstudio.com/news/releasenotes/tfs2015-update1-vs#addremov">Add/remove users from capacity</a></li>
<li><a href="https://www.visualstudio.com/news/releasenotes/tfs2015-update1-vs#multact">Multiple activities per team member (Capacity)</a></li>
<li><a href="https://www.visualstudio.com/news/releasenotes/tfs2015-update1-vs#line">Line on the burndown indicates actual capacity</a></li>
</ul>

<p><i>Dashboards and queries</i></p>
<ul>
<li><a href="https://www.visualstudio.com/news/releasenotes/tfs2015-update1-vs#dashboards">Add multiple team dashboards, add widgets</a></li>
<li><a href="https://www.visualstudio.com/news/releasenotes/tfs2015-update1-vs#querylimit">When creating a query, limit the values shown for Work Item Type</a></li>
</ul>
 

#### DevOps 
<p><i>Build</i></p>
<ul>
<li><a href="https://www.visualstudio.com/news/releasenotes/tfs2015-update1-vs#imprvacc">Improved access control for build resources</a></li>
<li><a href="https://www.visualstudio.com/news/releasenotes/tfs2015-update1-vs#imprvsci">Improved source control integration in Team Build</a></li>
<li><a href="https://www.visualstudio.com/news/releasenotes/tfs2015-update1-vs#fixed">Fixed small usability issues in Build Explorer</a></li>
<li><a href="https://www.visualstudio.com/news/releasenotes/tfs2015-update1-vs#xaml">XAML build parity progress</a></li>

<li><a href="https://www.visualstudio.com/news/releasenotes/tfs2015-update1-vs#azurergp">Azure Resource Group deployment support in build workflow</a></li>
<li><a href="https://www.visualstudio.com/news/releasenotes/tfs2015-update1-vs#cdazure">Continuous delivery: Provisioning of resources in Azure</a></li>
<li><a href="https://www.visualstudio.com/news/releasenotes/tfs2015-update1-vs#sonarqube">SonarQube works for Java programs built with a Maven Build task</a></li>
<li><a href="https://www.visualstudio.com/news/releasenotes/tfs2015-update1-vs#sonarbuild">SonarQube Analysis build tasks work with on-premises and hosted agents</a></li>
</ul>
<p><i>Test</i></p>
<ul>
<li><a href="https://www.visualstudio.com/news/releasenotes/tfs2015-update1-vs#mantest">Manual testing: Export test outcome</a></li>
<li><a href="https://www.visualstudio.com/news/releasenotes/tfs2015-update1-vs#mtresults">Manual testing: Manual test step results and iterations for data driven tests</a></li>
<li><a href="https://www.visualstudio.com/news/releasenotes/tfs2015-update1-vs#testresult">Test result retention policy</a></li>
</ul>
 


#### Administration, Marketplace, & Other 
<ul>
<li><a href="https://www.visualstudio.com/news/releasenotes/tfs2015-update1-vs#standalone">Standalone Office integration installer</a></li>
<li><a href="https://msdn.microsoft.com/library/mt622451.aspx">Known issues and fixed bugs</a></li>
</ul>




### TFS 2015 RTM 

>[!NOTE]  
>The links provided below open related sections within the [Team Foundation Server 2015 Update 1](https://www.visualstudio.com/news/releasenotes/tfs2015-rtm-vs) release notes. 

<div style="float:left;width:300px;margin:3px">
<p style="font-weight:bold;padding-bottom:0px;text-align:center;">Source control</p>
<ul>
<li><a href="https://www.visualstudio.com/en-us/news/releasenotes/tfs2015-rtm-vs#brpol">Branch policies </a></li>
<li><a href="https://www.visualstudio.com/en-us/news/releasenotes/tfs2015-rtm-vs#gatebld">Branch policies - Gated build</a></li>
<li><a href="https://www.visualstudio.com/en-us/news/releasenotes/tfs2015-rtm-vs#codepol">Branch policies - Code review</a></li>
<li><a href="https://www.visualstudio.com/en-us/news/releasenotes/tfs2015-rtm-vs#branchist">Branch history (pushes &amp; pull requests)</a></li>
<li><a href="https://www.visualstudio.com/en-us/news/releasenotes/tfs2015-rtm-vs#webhistgit">Web history view for Git projects</a></li>
<li><a href="https://www.visualstudio.com/en-us/news/releasenotes/tfs2015-rtm-vs#quicked">Quick code editing</a></li>
<li><a href="https://www.visualstudio.com/en-us/news/releasenotes/tfs2015-rtm-vs#histcon">History control</a></li>
<li><a href="https://www.visualstudio.com/en-us/news/releasenotes/tfs2015-rtm-vs#vhist">View history on a folder</a></li>
<li><a href="https://www.visualstudio.com/en-us/news/releasenotes/tfs2015-rtm-vs#mergperf">Improved merge performance</a></li>
</ul>
</div>

<div style="float:left;width:300px;margin:3px">
<p style="font-weight:bold;padding-bottom:0px;text-align:center;">Agile & Reporting</p>
<ul>
<li><a href="https://www.visualstudio.com/en-us/news/releasenotes/tfs2015-rtm-vs#indentav">Identity control and avatars</a></li>
<li><a href="https://www.visualstudio.com/en-us/news/releasenotes/tfs2015-rtm-vs#tbugs">Taskboard: Bugs on your backlogs and boards</a></li>
<li><a href="https://www.visualstudio.com/en-us/news/releasenotes/tfs2015-rtm-vs#pbacklogup">Product backlog updates</a></li>
<li><a href="https://www.visualstudio.com/en-us/news/releasenotes/tfs2015-rtm-vs#sprint">Sprint backlog and task board updates</a></li>
<li><a href="https://www.visualstudio.com/en-us/news/releasenotes/tfs2015-rtm-vs#ccards">Customize and configure your cards</a></li>
<li><a href="https://www.visualstudio.com/en-us/news/releasenotes/tfs2015-rtm-vs#kanban">Kanban board updates</a></li>
<li><a href="https://www.visualstudio.com/en-us/news/releasenotes/tfs2015-rtm-vs#cfdcol">Turn off the first column on the CFD chart</a></li>
<li><a href="https://www.visualstudio.com/en-us/news/releasenotes/tfs2015-rtm-vs#safe">SAFe support for Process Templates</a></li>
<li><a href="https://www.visualstudio.com/en-us/news/releasenotes/tfs2015-rtm-vs#proctemp">Process Templates renamed</a></li>
<li><a href="https://www.visualstudio.com/en-us/news/releasenotes/tfs2015-rtm-vs#curitoken">Current iteration query token</a></li>
<li><a href="https://www.visualstudio.com/en-us/news/releasenotes/tfs2015-rtm-vs#qprog">Query progressive disclosure</a></li>
</ul>
</div>

<div style="clear:left;font-size:100%">
</div>

<div style="float:left;width:300px;margin:3px">
<p style="font-weight:bold;padding-bottom:0px;text-align:center;">DevOps</p>
<ul>
<li><a href="https://www.visualstudio.com/en-us/news/releasenotes/tfs2015-rtm-vs#bldauto">Build automation system</a></li>
<li><a href="https://www.visualstudio.com/en-us/news/releasenotes/tfs2015-rtm-vs#multitest">Assign multiple testers</a></li>
<li><a href="https://www.visualstudio.com/en-us/news/releasenotes/tfs2015-rtm-vs#loadtest">Cloud-based load tests</a></li>
<li><a href="https://www.visualstudio.com/en-us/news/releasenotes/tfs2015-rtm-vs#autotest">Automated testing</a></li>
</ul>
</div>

<div style="float:left;width:300px;margin:3px">
<p style="font-weight:bold;padding-bottom:0px;text-align:center;">Administration, Marketplace, & Other</p>
<ul>
<li><a href="https://www.visualstudio.com/en-us/news/releasenotes/tfs2015-rtm-vs#tpr">Team project rename</a></li>
<li><a href="https://www.visualstudio.com/en-us/news/releasenotes/tfs2015-rtm-vs#restapi">REST APIs</a></li>
<li><a href="https://www.visualstudio.com/en-us/news/releasenotes/tfs2015-rtm-vs#svchook">Service hooks</a></li>
<li><a href="https://www.visualstudio.com/en-us/news/releasenotes/tfs2015-rtm-vs#apichange">Change in API behavior</a></li>
<li><a href="https://msdn.microsoft.com/library/mt622451.aspx">Known issues and fixed bugs</a></li>
</ul>
</div>

<div style="clear:left;font-size:100%">
</div>



##Related notes
You can download the latest version of TFS from the [Visual Studio download page](https://www.visualstudio.com/products/visual-studio-2015-downloads-vs).

Learn more about the latest updates available from these resources:  
- [Visual Studio 2017 (RC) Release notes](https://www.visualstudio.com/news/releasenotes/vs2017-relnotes) - to learn about updates available with Visual Studio 2017 (release candidate)
- [What's new in Visual Studio 2015](https://msdn.microsoft.com/library/bb386063%28v=vs.140%29.aspx) - to review the latest features available with Visual Studio 2015 client
- [Visual Studio Team Services](overview.md) - to get started using our cloud offering, Visual Studio Team Services which provides end-to-end support for software development without the overhead of maintaining and managing servers. 

###TFS Express  

Team Foundation Server 2015 Update 2 is free for up to five users, replacing TFS Express. Existing TFS Express users can run an upgrade to the Team Foundation Server 2015 Update 2 and continue to use it free for up to five users. For the sixth user and beyond, CALs must be used. See the [Team Foundation Server pricing page](https://www.visualstudio.com/team-services/tfs-pricing).
