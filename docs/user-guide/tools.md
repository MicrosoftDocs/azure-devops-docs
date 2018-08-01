---
title: Tools and clients that connect to VSTS and TFS
description: Understand the tools that support connecting to Visual Studio Team Services & Team Foundation Server  
ms.technology: devops-new-user 
ms.prod: devops
ms.assetid: 3836C81D-6E0A-46B5-8D1D-20E973E4F373
ms.manager: douge
ms.author: kaelli
ms.topic: conceptual
ms.date: 03/02/2017
monikerRange: '>= tfs-2013'
---


#Tools and clients that connect to VSTS and TFS

[!INCLUDE [temp](../_shared/version-vsts-tfs-all-versions.md)]

Our platform of software development tools began over 20 years ago with the releases of Visual Basic and Visual Studio as an integrated development environment (IDE). Visual Studio supports a number of plug-ins which extend its functionality. In particular, the Team Explorer plug-in allows the Visual Studio client to connect to VSTS and TFS to support source control, work tracking, build, and test operations.  

The set of tools available to you that interface with VSTS and TFS include:

- Desktop client developer tools 
- Office integration tools 
- Web based tools
- Command-line tools 
- Marketplace extensions
- REST APIs  

<!---
###Video overview
 (Video ala Robert's 1.5 min Commit)
Contrast service versus a tool
Clarify what the service provides 
IDE clients
Be clear about what they pay for and what is free

-->

## Desktop client developer tools

Developers have access to a variety of tools through these versions of Visual Studio and plug-ins. to download any version of Visual Studio, visit the [Visual Studio Downloads page](https://visualstudio.microsoft.com/downloads/). To understand what features you get with the Visual Studio versions, see [Compare Visual Studio Offerings](https://visualstudio.microsoft.com/vs/compare/). 

- **Visual Studio Community**: A fully-featured and extensible IDE for creating modern applications for Android, iOS, and Windows, as well as web applications and cloud services. (Replaces Visual Studio Express) 
- **Visual Studio Professional**: Development tools and services to support individual developers or small teams 
- **Visual Studio Enterprise**: Integrated, end-to-end development tools and solutions for teams of any size and those with a need to scale Supports designing, building and managing complex enterprise applications 
- **Visual Studio Test Professional**: Provides access to Microsoft Test in addition to development tools to support quality and collaboration throughout the development process
- **Visual Studio Team Explorer**: A free solution for non-developers to interact with Team Foundation Server and Visual Studio Team Services.  
- **[Eclipse/Team Explorer Everywhere](/vsts/java/download-eclipse-plug-in)**: Free plug-in to support teams running Eclipse on Linux, macOS, or Windows that connect to VSTS or TFS  
- **[Android Studio with the VSTS Plugin for Android Studio](/vsts/java/download-android-studio-plug-in)**: Free plug-in to support Android developers and connect to Git repositories on VSTS or TFS
- **[IntelliJ with the VSTS Plugin for IntelliJ](/vsts/java/download-intellij-plug-in)**: Free plug-in to support developers who use IntelliJ IDEA or Android Studio to connect to Git repositories on VSTS or TFS 
- **[Visual Studio Code](/vsts/java/vscode-extension)**: Free, open-source code editor with a free extension to support connecting to Git repositories on VSTS or TFS.  




**Team Explorer plug-in**

Team Explorer, a plug-in to all Visual Studio versions, provides connects Visual Studio to team projects defined in VSTS or TFS. You can manage source code, work items, and builds. To learn more, see [Work in Team Explorer](work-team-explorer.md).

> [!div class="mx-tdBreakAll"]  
> |Home page with Git |Home page with TFVC |
> |-------------|----------|
> |<img src="../organizations/projects/_img/te-home-page-git-repo.png" title="Team Explorer Home page with Git as source control" alt="Team Explorer Home page with Git as source control" /> | <img src="../organizations/projects/_img/te-home-page-tfvc-repo.png" title="Team Explorer Home page w/ TFVC as source control" alt="Team Explorer Home page w/ TFVC as source control" /> |


## Office integration tools 

When you install any edition of Visual Studio or [Team Foundation Server Standalone Office Integration 2015 (free)](https://go.microsoft.com/fwlink/?LinkId=691127), the Team Foundation plug-in installed to integrate work item tracking with select Office clients. The Team Foundation plug-in installs to your existing Office client. The plug-in supports Office 2007, Office 2010, or Office 2013 versions.

- **[Excel](../work/backlogs/office/bulk-add-modify-work-items-excel.md)**: Use Excel to add and bulk modify work items.  
- **[Project](../work/backlogs/office/create-your-backlog-tasks-using-project.md)**: Using Project you can plan projects, schedule tasks, assign resources, and track changes. You have access to features that TFS doesn't support, such as a project calendar, Gantt charts, and resource views.
- **[Project Professional](../work/tfs-ps-sync/synchronize-tfs-project-server.md)**: With Project Professional and the Team Foundation Server Extensions for Project Server you can manage projects that synchronize data that exists in both TFS and Project Server. Project managers and software development teams can use the tools that they prefer, work at the level of precision that supports their needs, and easily share information. 
- **[PowerPoint Storyboarding](../work/backlogs/office/storyboard-your-ideas-using-powerpoint.md)**: Lets you illustrate user stories and requirements using PowerPoint. The Team Foundation plug-in installs to your existing PowerPoint client.

>[!IMPORTANT]
>Support for integrating TFS with Project Server is deprecated for TFS 2017. However, synchronization support is provided by a third party. See  [Synchronize TFS with Project Server](../work/tfs-ps-sync/sync-ps-tfs.md) for details. 

### Task-specific clients

The following clients support specific tasks, such as managing testing efforts, providing feedback, or modifying work items.

- **[Microsoft Test Manager](https://msdn.microsoft.com/library/jj635157.aspx)**: Allows you to manage your test efforts, create and run manual tests, and create and track bugs that are found during test efforts. Test Manager installs with Visual Studio Test Professional and Visual Studio Enterprise. 
- **[Test & Feedback extension (previously called the Exploratory Testing extension)](../test/provide-stakeholder-feedback.md)**: Provides a lightweight, plug-in to a web browser. Stakeholders can respond to feedback requests for user stories and features generated in VSTS or TFS. This extension is free to stakeholders. 
- **[Microsoft Feedback Client](../project/feedback/give-feedback.md)**: Your stakeholders can use **Microsoft Feedback Client** to record feedback for your application as video, audio, or type-written comments. This client installs with all versions of Visual Studio, or can be [installed from the free download](https://www.microsoft.com/download/details.aspx?id=48142). All feedback is stored in the work item data store and requires [stakeholders to have required permissions](../project/feedback/give-permissions-feedback.md).  
 
>[!IMPORTANT]
>Test Manager is deprecated for TFS 2017.  

## Browser-based web tools

### Web portal

The collaboration tools supported through the web portal are summarized under [Essential services](services.md). On VSTS, new features are deployed usually every three weeks, and for TFS, usually quarterly. For release notes, see [VSTS Features Timeline](/vsts/release-notes/index).
 
You can use these browsers to access the web portal (VSTS and TFS).

Version        | Edge        | Internet Explorer | Safari (Mac)   | Firefox     | Chrome
---------------|-------------|-------------------|----------------|-------------|-------------
VSTS  | most recent | 11 and later      | 9.1 and later  | most recent | most recent
TFS 15         | most recent | 11 and later      | 9.1 and later  | most recent | most recent
TFS 2015       | most recent | 9 and later       | 5 and later    | most recent | most recent
TFS 2013       |             | 9 and later       | 5 and later    | most recent | most recent

Edge, Firefox, and Chrome automatically update themselves, so VSTS and TFS support the most recent version. 

To learn more, see [Navigation basics](../project/navigation/index.md).

### Browser-based extensions

The following extensions are available from the Visual Studio Marketplace and are built and maintained by the VSTS product team. 

- [Test Manager](https://marketplace.visualstudio.com/items?itemName=ms.vss-testmanager-web): Run tests using your browser with simple pass/fail of steps, add comments/attachments, take screenshots and file bugs. You can accomplish all of this  with automatic end-to-end traceability.  
- [Package Management](https://marketplace.visualstudio.com/items?itemName=ms.feed): Build packages of reusable code components and share them. The Package Management extension enables continuous delivery workflows by supporting multiple packaging protocols such as NuGet and npm . It makes packages available to your team, your builds, and your releases. 
- [Code search](https://marketplace.visualstudio.com/items?itemName=ms.vss-code-search): Increases cross-team collaboration and code sharing by enabling developers to quickly locate relevant information within the code base of all team projects hosted within an organization or collection. With it, you can discover implementation examples, browsing definitions, and find error text. 
- [Work item search](https://marketplace.visualstudio.com/items?itemName=ms.vss-workitem-search): Quickly find relevant work items by searching across all work item fields over all projects in an organization. Perform full text searches across all fields to efficiently locate relevant work items. Use in-line search filters, on any work item field, to quickly narrow down to a list of work items.  
  
Find additional extensions from the [Marketplace](https://marketplace.visualstudio.com) 

### Application monitoring tools

To monitor your applications you can use Application Insights for web apps or HockeyApp for mobile apps.  

#### Monitor web applications with Application Insights

Application Insights is an extensible Application Performance Management (APM) service for web developers. Use it to monitor your live web application. It will automatically detect performance anomalies. It includes powerful analytics tools to help you diagnose issues and to understand what users actually do with your app. It's designed to help you continuously improve performance and usability. It works for apps on a wide variety of platforms including .NET, Node.js and J2EE, hosted on-premises or in the cloud.  

With Application Insights you can:

- Gain actionable insights through application performance management and instant analytics
- Detect and diagnose exceptions and application performance issues
- Monitor Azure websites, including those hosted in containers, plus websites on-premises and with other cloud providers
- Seamlessly integrate with your DevOps pipeline using VSTS, GitHub, and our webhooks
- Get started from within Visual Studio, or monitor existing apps without re-deploying

To learn more, see [Microsoft Azure - Application Insights](https://azure.microsoft.com/services/application-insights/).

#### Monitor mobile applications with HockeyApp

With HockeyApp you can develop, distribute, and beta-test your mobile apps. HockeyApp supports:

- Android, Cordova, iOS, macOS, Unity, Windows, and Xamarin apps
- Live, reliable crash reports
- Collect in-app feedback from real users
- Open-source SDKs to let you know what code is running in your apps
- Integration with your existing build system and work item management solution

To learn more, see [Microsoft Azure - HockeyApp](https://docs.microsoft.com/azure/application-insights/app-insights-overview).

## Command-line tools

You can perform many code development and administrative tasks using command line tools.

- [Git commands](../repos/git/command-prompt.md)
- [TFVC commands](../repos/tfvc/use-team-foundation-version-control-commands.md)
- [TFSConfig](/tfs/server/ref/command-line/tfsconfig-cmd)
- [TFSDeleteProject](/tfs/server/ref/command-line/tfsdeleteproject-cmd)
- [TFSSecurity](/tfs/server/ref/command-line/tfssecurity-cmd)
- [TFSServiceControl](/tfs/server/ref/command-line/tfsservicecontrol-cmd)
- [witadmin (work item tracking)](../work/customize/reference/witadmin/witadmin-customize-and-manage-objects-for-tracking-work.md) 


## Marketplace extensions

While Visual Studio, VSTS, and TFS provide a wealth of features and functionality, they also provide a means to extend and share that functionality. 

Extensions are simple add-ons that you can use to customize and extend your DevOps and work tracking experiences. Written with standard technologies&mdash;HTML, JavaScript, CSS&mdash;you can develop your own extensions using your preferred dev tools. 

You build extensions using our RESTful API Library. You publish them to the Visual Studio Marketplace, where you can privately maintain them or share with millions of developers that use  Visual Studio, VSTS, and TFS.

To learn more, visit the [Marketplace](https://marketplace.visualstudio.com) and [Overview of extensions](../extend/index.md).

## REST APIs  
 
The VSTS and TFS APIs are based on REST, OAuth, Json and service hooks&mdash;all standard web technologies broadly supported in the industry.

REST APIs are provided to support building extensions to VSTS and TFS. To learn more, see [REST API overview](https://docs.microsoft.com/en-us/rest/api/vsts/).



## Related notes 
- [Key concepts](concepts.md)
- [Essential services](services.md)
- [Software development roles](roles.md)
- [Pricing](https://visualstudio.microsoft.com/team-services/pricing/)
 
