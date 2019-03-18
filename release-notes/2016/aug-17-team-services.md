---
title: Pull Requests refresh and much, much more – Aug 17
description: VSTS release notes for August 17 2016
ms.prod: devops
ms.technology: devops-release-notes
ms.manager: douge
ms.assetid: 7ecf0247-57e9-4439-97cc-730d78905324
ms.date: 06/01/2016
ms.author: douge
author: yukom
---

#Pull Requests refresh and much, much more – Aug 17

Lots of stuff this sprint, lets jump in…

##Pull requests

The pull request experience has some major updates this release, bringing some really powerful diff capabilities, a new commenting experience, and an entirely refreshed UI.

###Redesigned UI

When opening a pull request, the new look and feel is evident immediately. We’ve reorganized the header to summarize all of the critical states and actions, making them accessible from every view in the experience.

![Pull request header](_img/8_17_01.png)

###Overview

The Overview now highlights the  pull request description and makes it easier than ever to give feedback. Events and comments are shown with the newest items on top to help reviewers see the latest changes and comments front and center. Policies, work items, and reviewers are all provided in detail and reorganized to be more clear and concise.

![Pull request overview](_img/8_17_02.png)

###Files

The biggest new feature in this release is the ability to see past updates made to a pull request. A few sprints ago ([July 7th](jul-07-team-services.md)), we released the ability to properly track comments as a  pull request is updated with changes. However, it’s not always easy to see what’s between updates. In the Files view, you can now see exactly what changed each time new code is pushed to your pull request. This is really useful if you’ve given feedback on some code and want to see exactly how it changed isolated from all of the other changes in the review.

![Viewing changes on a pull request](_img/8_17_03.png)

###Updates

The new Updates view is used to show how the  pull request is changing over time.  While the Files view shows how the files have changed over time, the Updates view shows the commits added in each update. If a force push ever happens, the Updates view will continue to show the past updates as they occurred in history.

![Updates view](_img/8_17_04.png)

The Commits view is useful in conjunction with the Updates view to show the current changes to be merged when the PR is completed.

###Comments, now with markdown and emoji

Use the full power of markdown in all of your discussions, including formatting, code with syntax highlighting, links, images, and emoji. The commenting controls also have a more user friendly editing experience allowing multiple comments to be edited (and then saved) at one time.

![Comments](_img/8_17_05.png)

###Auto-complete pull requests waiting on policies

Teams that are using branch policies ([/vsts/repos/git/branch-policies-overview](/azure/devops/repos/git/branch-policies-overview?view=azure-devops)) to protect their branches will want to check out the auto-complete action. Many times, the author of a pull request will be ready to merge their PR, but they’re waiting on a build to finish before they can click Complete. Other times, the build is passing, but there is one reviewer that hasn’t given the final approval. In these cases, the auto-complete action lets the author set the PR to automatically complete as soon as the policies are all approved.

![Auto-complete](_img/8_17_06.png)

Just like the manual complete action, the author has a chance to customize the message of the merge commit and select the appropriate merge options.

![Selecting auto-complete options](_img/8_17_07.png)

Once auto-complete has been set, the pull request will display a banner that confirms that the auto-complete is set and waiting for policies to complete.

![Auto-complete banner](_img/8_17_08.png)

When all of the policies have been met (i.e., the build completes, or that final approval is granted), the  pull request will be merged using the options and comments specified. As expected, if there is a build failure or the reviewer doesn’t approve, the PR will remain active until the policies are passing.

##Code

###Clone Git repositories from your browser using Tower

Now, when viewing a Team Services Git repository in your browser, you can invoke cloning of the repository with the Tower Git client by selecting the “Clone with Tower” button. Tower is an excellent Git client for Mac, and a Windows version is in beta. For more information, see [https://www.git-tower.com/](https://www.git-tower.com/).

##Packages

###Download packages without NuGet

You can now download a package directly from the Package Management web interface. Look for the Download button on any package.

![Package download button on Package Management UI](_img/8_17_09.png)

###Get started quickly

We’ve also updated the empty feed and connect to feed experiences to help you jump quickly into the most common Package Management tasks: pushing and restoring packages. Look for the new bright blue Connect to feed button in the upper right.

![Connect to feed button](_img/8_17_10.png)

![Connect to feed options](_img/8_17_11.png)

##Continuous integration

###Queue Jenkins jobs from builds and releases

In addition to the existing Jenkins service hook, Team Services provides a new way to integrate with Jenkins. The “Jenkins Queue Job” task allows queuing Jenkins jobs and pipelines from Team Services builds and releases. This enables scenarios such as building with Team Services and deploying with Jenkins, using Jenkins for continuous integration (CI) with a Team Services Git repository, or configuring a Jenkins job to validate Team Services pull requests. For more information, see [https://youtu.be/9F7Gmc13oDM](https://youtu.be/9F7Gmc13oDM) and [https://github.com/jenkinsci/tfs-plugin](https://github.com/jenkinsci/tfs-plugin).

###Jenkins service hook enhancements

The Jenkins service hook has been enhanced to support Jenkins’ Cross-Site Request Forgery (CSRF) prevention using crumbs. Also, the service hook now has optional, tighter integration with the TFS Plugin for Jenkins for added traceability between Team Services Git commits and Jenkins builds.

###Run SSH commands on remote machines from builds and releases

The SSH task provides a way to run commands and scripts on remote machines via secure shell (SSH) as part of Team Services builds and releases. This enables deployment and validation scenarios such as installation of build artifacts on a Docker container or Linux virtual machine. For more information, see [https://blogs.msdn.microsoft.com/visualstudioalm/2016/07/30/ssh-build-task/](https://blogs.msdn.microsoft.com/visualstudioalm/2016/07/30/ssh-build-task/).

###Create archives from builds and releases

A new build task called “Archive Files” allows packaging and compressing files in multiple archive formats such as .zip, .tar, .tar.gz, and .7z. For more information, see [https://blogs.msdn.microsoft.com/visualstudioalm/2016/07/12/archive-files-build-task-for-team-services/](https://blogs.msdn.microsoft.com/visualstudioalm/2016/07/12/archive-files-build-task-for-team-services/).

###Copy files over SSH from builds and releases

The “Copy Files Over SSH” task allows copying files from Team Services builds and releases to remote machines using the secure SCP or SFTP protocol. This enables deployment and validation scenarios such as copying build artifacts to a Docker container or Linux virtual machine for testing or deployment.

###Download Jenkins artifacts to builds and releases

The “Jenkins Download Artifacts” task allows downloading build artifacts from Jenkins to Team Services for use in a build or release process. This enables scenarios such as building in Jenkins and testing, signing, packaging, consuming, or releasing from Team Services. For more information, see [https://youtu.be/9F7Gmc13oDM](https://youtu.be/9F7Gmc13oDM).

###Use FTP or FTPS to upload files from builds and releases

The “FTP Upload” task allows uploading files via FTP or FTPS as part of Team Services builds and releases. Upload entire folder structures, file patterns, or precisely selected individual files. You may choose to overwrite an existing structure or flatten directory structures on the FTP server. For more information, see [https://youtu.be/oPnVyXlku4I](https://youtu.be/oPnVyXlku4I).

###Google Play Extension improvements

The VSTS Extension for Google Play contains deployment tasks for automating the release, promotion, and roll- out of app updates to the Google Play store from Team Services builds or releases. It has had numerous improvements, including support for apps with multiple APKs. For more information, see [https://marketplace.visualstudio.com/items?itemName=ms-vsclient.google-play](https://marketplace.visualstudio.com/items?itemName=ms-vsclient.google-play).

###Maven and Gradle tasks produce a build summary when running a SonarQube analysis

When you enable the “Run SonarQube Analysis” option in the Maven or Gradle build tasks, you will now get a link on the SonarQube project. This is a first step. We are working on a richer build summary showing quality gate results.

##Build Definitions

Welcome to the new build definitions UX! The experience focuses on the builds you own and care about. We hope you enjoy the richer and more personalized views into the status and quality of your code. 

###Favorites and more in the Mine tab

Here you'll find the builds you care about most. The **Mine** tab features your favorites, team favorites, and builds of code that you've checked in.

![Definitions, Mine](_img/8_17_12.png)

The 7-day pass rate shows the percentage of builds that succeeded or partially succeeded out of all the builds completed during the past week. The arrow tells you if today's builds are doing better or worse than the 7-day rate.

###Queued tab shows current builds and recent history

When you want to see what's happening right now and in recent history, check out the **Queued** tab.

![Definitions, Queued](_img/8_17_13.png)

###All Definitions tab adds folders

Does your team have a lot of build definitions. You can now use folders to keep them organized in the **All Definitions** tab.

![Definitions, All](_img/8_17_14.png)

![Manage folders](_img/8_17_15.png)

**Tip:** Have a batch of definitions that need the same permissions? Put them in a folder and then you can give permissions to the folder.

![Manage folders](_img/8_17_16.png)

###Improved build details

When you click down to focus on a specific build, we now give you a lot more information about what's happening and overall code quality. 

![Definition summary](_img/8_17_17.png)

![Definition history](_img/8_17_18.png)

###View and queue XAML builds

Still have some XAML builds? Visual Studio is still your primary tool for editing and managing XAML builds. The **XAML** tab provides a companion experience so you can view and queue those builds in your web browser.

##Work

###Work item templates

We added the ability to create rich work item templates directly into the native web experience. This capability was previously very limited in the web, and only available in this new form through a Visual Studio power tool. Teams can now create and manage a set of templates for quickly modifying common fields.

![Work item template option](_img/8_17_19.png)

###Quickly “Unfollow” work item

The “Followed work items” view now lets you quickly unfollow one (or many) work items by unfollowing directly from the context menu.

###Drag and drop attachments

Work item attachments can now be created by simply dragging and dropping a file directly onto the Attachments tab. We also added support for attaching multiple files and editing the comments of attachments.

![Drag and drop work item attachment](_img/8_17_20.png)

###Assigned to Me widget

We added a new widget to the catalog that summarizes all the open work assigned to the logged in user. This widget can be dragged onto any dashboard to allow users to “at a glance” see the work on their plate that needs attention. The widget supports sorting and quick filtering by type.

![Assigned to Me widget](_img/8_17_21.png)

###Dashboard permissions

You can now adjust the permissions team members have with regards to dashboards. Click the wrench icon on the top of the dashboard and pick the setting you’d like. You can choose between the following options:

-Team admins only can add, edit, and delete dashboards
-Team admins and team members can add, edit, and delete dashboards
-Team members can edit dashboards (add and configure widgets)

###Sprint Overview widget

We heard your feedback that the Sprint Overview was confusing, and made a few adjustments. The widget has been redesigned to  show clearly the number of days remaining in the sprint, and a quick summary of the work not started, in progress, and completed.

![Sprint Overview widget](_img/8_17_22.png)

##Test

###Configure test outcomes for tests across different test suites

We have now added the ability to configure the behavior of test outcomes for tests shared across different test suites under the same test plan. If this option is selected, and you set the outcome for a test (mark it as Pass/Fail/Blocked either from the Test hub, Web runner, Microsoft Test Runner or from cards on Kanban board), that outcome will propagate to all the other tests present across different test suites under the same test plan, with the same configuration. Users can set the “Configure test outcomes” option for a particular test plan either from the Test hub test plan context menu or from the Kanban board test page in the common settings configuration dialog. This option is turned off by default and you will have to explicitly enable it to take effect.

###Test Run and Test Result summary - traceability to Releases and manual test artifacts

We are added more properties Test Run and Test Result summary pages to help you navigate to the artifacts like Releases and Test plans with a single click. If tests are run in the Release workflow, the properties show the Release and Environments in which the tests ran. For manual tests, you can find the Test Plan, Test Suite and the Test Case associated with a manual test result.

![Test run and test result summary views](_img/8_17_23.png)

##Marketplace

###Unpublish extension - Removing a public extension from the Marketplace

You can unpublish free extensions, if you no longer want to offer them in the Marketplace or published by mistake. Here are some scenarios where you might want to remove your extension from Marketplace:

-You developed another extension and no longer want to offer the current one.
-Your extension has a problem, so you want to remove your extension from Marketplace until you have resolved the problem.
-You published your extension as public by mistake

To unpublish, select the extension on your [Marketplace publisher page](https://aka.ms/vsmarketplace-manage) and choose Unpublish on the menu. Your extension will be unpublished immediately from Marketplace and new users won’t be able to install it. Ratings and reviews for your extension will stay intact. To offer your extension again in Marketplace, choose Publish on the menu.

Important: If you must remove your extension due to legal or security problems, contact the [Marketplace team](https://aka.ms/vsmarketplace-contact). We will review the request and manually delete the extension.

##Administration

###Rate Limits – Delaying user requests to avoid outages

Team Services, like many Software-as-a-Service solutions, uses multi-tenancy to reduce costs and to enhance scalability and performance. This leaves users vulnerable to performance issues and even outages when other users of their shared resources have spikes in their consumption. To combat these problems, we are beginning to introduce rate limiting, which slows down user requests for individuals above our thresholds when their shared resources are in danger of being overwhelmed.

Our current thresholds are quite high: two hundred times the consumption of a typical user. As such, we do not expect a large number of users to be impacted. When users experience rate limiting, their requests will be delayed, not blocked. The amount of the delay will depend on their sustained level of consumption—it may be as little as a few milliseconds per request or as much as thirty seconds. If their consumption goes to zero, or if their shared resources are no longer in danger of being overwhelmed, the delays will stop after a period of not more than five minutes. If their consumption remains high and their shared resources remain in danger of being overwhelmed, the delays can continue indefinitely.

When an individual user’s requests are slowed down by a significant amount, an email will be sent to that user and a warning banner will appear in the Web UI.

![Rate limit warning banner](_img/8_17_24.png)

If the user does not have an email address—for example, if the “user” is actually a build service account—the notification email will be sent to the members of the project collection administrators group. The warning banner and the notification email will both include links to a new Usage page, which can be used to investigate the usage that exceeded our thresholds, as well as the requests that were delayed.

![Usage page showing rate limiting instance](_img/8_17_25.png)

These changes will be rolled out slowly to avoid having unexpected impacts on large numbers of users. As such, the Usage page may not be available in all accounts for some time. For more information, see [https://visualstudio.microsoft.com/docs/reference/rate-limits](https://visualstudio.microsoft.com/docs/reference/rate-limits).

That’s it for this sprint. If you have ideas on things you’d like to see us prioritize, head over to [UserVoice](https://visualstudio.uservoice.com/forums/330519-vso) to add your idea or vote for an existing one.

Thanks,

Jamie Cool