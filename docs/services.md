---
title: Services | Team Services & TFS
description: Understand the services that support the hosted cloud offering of Visual Studio Team Services (VSTS) and Team Foundation Server (TFS)  
ms.technology: vs-devops-overview 
ms.prod: vs-devops-alm
ms.topic: get-started-article  
ms.assetid: D861983F-CC66-4314-A3C6-E2F30A37923D
ms.manager: douge
ms.author: kaelli
ms.date: 12/07/2016
---

#Essential services provided with Team Services and TFS 
<b>Team Services | TFS 2017 | TFS 2015  </b> 

Team Services and TFS provide an integrated set of services and tools to manage your software projects, from planning and development through testing and deployment. Services are delivered through a client-server model, many of which are delivered through an easy-to-use web-based interface that you can access from all major browsers on any platform. Web services are access through the following five main hubs: 

![Team Services, main hubs](_img/services-hubs.png)  

Many of our services are either free for small teams or available through a subscription model or per use model. Where needed, you can exercise a hybrid approach where you use an on-premises TFS to manage your code and work, and purchase cloud build or testing services on an as needed basis.  

For information about client tools, see [Tools](tools.md).

<!---
###Video overview
 (Video ala Robert's 1.5 min Commit)
-->

## Core services 
When you sign up for Team Services or install an on-premises TFS, you get access to the following services. All of these services you manage through a web browser. Some services, such as source control and build definitions, can also be managed through a client.    


###Dashboards  
From the **Dashboards** hub you gain access to team-scoped dashboards and a welcome page. Tasks you can perform in this hub include: 
- Add, configure, and manage dashboards   
- Configure widgets that you add to dashboards 	
- Quickly navigate to different areas of your team project 
- View a Welcome page that references a Readme markdown file hosted in your repository  

To learn more, see [Dashboards](report/dashboards.md). 

### Collaborate on code 

From the **Code** hub you gain access to your source control Git-based or TFVC repositories to support version control of your software projects. From this hub you can perform these tasks: 
- Comment or review code comments on changesets or Git commits  
- Review and download files
- Review change history 
- Review branches   
- Review and create a pull request 

To learn more, see the overviews for [Git](git/overview.md) or [TFVC](tfvc/overview.md). 

###Plan and track work 		
From the **Work** hub you gain access to Agile tools to support planning and tracking work. Specifically, you can perform these tasks:   			
- Add and update work items 
- Define work item queries and create status and trend charts based on those queries 			
- Manage your product backlog   					
- Plan sprints using sprint backlogs 
- Review sprint tasks and update tasks through the task boards				
- Visualize the work flow and update status using Kanban boards	 				
- Manage portfolios by grouping stories under features and features under epics   

See [Backlogs and board views](work/backlogs-boards-plans.md) for an overview of each, and [Agile tools](work/overview.md) for a complete index of work tracking features and scenarios.   
 
###Build & Release 
The **Build & Release** hub provides an integrated set of features to support building and deploying your applications. 
- **Build automation**: Define the steps to take during build and the triggers that will initiate a build. 
- **Release management**: Supports a rapid release cadence and management of simultaneous releases. You can configure release definitions that represent your environments from development to production. Run automations to deploy your app to each environment. Add approvers to sign off that the app has been successfully deployed in an environment. Create your release manually or automatically from a build. Then track your releases as they are deployed to various environments.
- **System Center integration**: Enables a release definition to connect to a System Center Virtual Machine Manager (SCVMM) server to easily provision virtual machines and perform actions on them such as managing checkpoints, starting and stopping VMs, and running PowerShell scripts
- **VMware Resource Deployment**: Connect to a VMware vCenter Server from Team Services or TFS to provision, start, stop, or snapshot VMware virtual machines.  

To learn more, see [Continuous integration on any platform](build/overview.md). 


###Test 
The **Test** hub supports manual testing and product owners and business analysts to gauge how their features measure up against the acceptance criteria.  

- Customization of workflows with test plan, test suite and test case work items  
- End-to-end traceability from requirements to test cases and bugs with requirement-based test suites  
- Criteria-based test selection with query-based test suites    
- Excel-like interface with the grid for easy test case creation  
- Reusable test steps and test data with shared steps and shared parameters   
- Sharable test plans, test suites and test cases for reviewing with stakeholders  
- Browser-based test execution on any platform  
- Real-time charts for tracking test activity.  

To learn more, see [Test apps early and often](test/index.md). 			

## Additional collaboration services 

In addition to the above "hub" services, the following services work across hubs to support: 
- Linking of work items, commits, pull requests and other artifacts to support traceability
- Alerts and change notifications managed per user or for teams  
- Request and manage feedback   
- Team (chat) rooms 	 
- Reporting    						

>[!NOTE]  
>Team rooms are deprecated for TFS 2017. Instead, we recommend you use service hooks to integrate with Slack. The Slack extension is pre-installed with Team Services and TFS 2015 and later versions.


###Service hooks

Service hooks enable you to perform tasks on other services when events happen within your team project hosted on Team Services or TFS. For example, you can send a push notification to your team's mobile devices when a build fails. Service hooks can also be used in custom apps and services as a more efficient way to drive activities when events happen in your projects.

The following services are available as the target of service hooks. To learn about others apps and services that integrate with our Team Services or TFS, visit the [Visual Studio Marketplace](https://marketplace.visualstudio.com)

<div style="float:left;width:140px;margin:3px;font-size:90%">
<p style="font-weight:bold;padding-bottom:0px;text-align:center;">Build & release</p>
<ul style="padding-left:20px">
<li style="margin-bottom:2px">[AppVeyor](../integrate/get-started/service-hooks/services/appveyor.md)</li>
<li style="margin-bottom:2px">[Bamboo](../integrate/get-started/service-hooks/services/bamboo.md)</li>
<li style="margin-bottom:2px">[Jenkins](../integrate/get-started/service-hooks/services/jenkins.md)s</li> 
<li style="margin-bottom:2px">[MyGet](../integrate/get-started/service-hooks/services/myget.md)</li>
</ul>
</div>
<div style="float:left;width:140px;margin:3px;font-size:90%">
<p style="font-weight:bold;padding-bottom:0px;text-align:center;">Collaborate</p>
<ul style="padding-left:20px">
<li style="margin-bottom:2px">[Campfire](../integrate/get-started/service-hooks/services/campfire.md)</li>
<li style="margin-bottom:2px">[Flowdock](../integrate/get-started/service-hooks/services/flowdock.md)</li>
<li style="margin-bottom:2px">[HipChat](../integrate/get-started/service-hooks/services/hipchat.md)</li> 
<li style="margin-bottom:2px">[Hubot](../integrate/get-started/service-hooks/services/hubot.md)</li> 
<li style="margin-bottom:2px">[Slack](../integrate/get-started/service-hooks/services/slack.md)</li> 
</ul>
</div>

<div style="float:left;width:140px;margin:3px;font-size:90%">
<p style="font-weight:bold;padding-bottom:0px;text-align:center;">Customer support</p>
<ul style="padding-left:20px">
<li style="margin-bottom:2px">[UserVoice](../integrate/get-started/service-hooks/services/uservoice.md)</li>
<li style="margin-bottom:2px">[Zendesk](../integrate/get-started/service-hooks/services/zendesk.md)</li>
</ul>
<p style="font-weight:bold;padding-bottom:0px;text-align:center;">Plan and track</p>
<ul style="padding-left:20px">
<li style="margin-bottom:2px">[Trello](../integrate/get-started/service-hooks/services/trello.md)</li> 
</ul>
</div>
<div style="float:left;width:140px;margin:3px;font-size:90%">
<p style="font-weight:bold;padding-bottom:0px;text-align:center;">Integrate</p>
<ul style="padding-left:20px">
<li style="margin-bottom:2px">[Azure Service Bus](../integrate/get-started/service-hooks/services/azure-service-bus.md)</li>
<li style="margin-bottom:2px">[Azure Storage](../integrate/get-started/service-hooks/services/azure-storage.md)</li>
<li style="margin-bottom:2px">[Web Hooks](../integrate/get-started/service-hooks/services/webhooks.md)</li> 
<li style="margin-bottom:2px">[Zapier](../integrate/get-started/service-hooks/services/zapier.md)</li> 
</ul>
</div>

<div style="clear:left;font-size:100%">
</div>


For the lastest set of supported services, see [Integrate with service hooks](../integrate/get-started/service-hooks/get-started.md)


### Cloud-hosted services based on usage   

The following services support your DevOps operations.   
- Cloud-based build and deployment hosted agents  
- On-premises private agents to support build and deployment  
- Cloud-based performance/load testing lets you load test your code by simulating high traffic  

To learn more, see [Pricing](https://www.visualstudio.com/team-services/pricing/).


### Azure services 
Azure provides a number of cloud-hosted services to support application development and deployment. You can make use of these services solely or in combination with Team Services or TFS. 

To browse Azure's directory of integrated services, features, and bundled suites, see [Azure products](https://azure.microsoft.com/services/).  

For continuous delivery to Azure from Team Services, see [Automatically build and deploy to Azure web apps or cloud services](https://azure.microsoft.com/documentation/articles/cloud-services-continuous-delivery-use-vso/). 


## Additional on-premises TFS services  

When you deploy TFS, you can also configure the following servers or integration points: 

- **Build server**: supports on-premise builds, you can use a combination of on-premises builds and cloud-hosted builds   
- **SQL Server and SQL Analysis Server**: supports SQL Server Reports and the ability to create Excel pivot charts based on the cube 
- **SharePoint integration**: provides support for a team project portal which provides dashboards, a wiki, document repository, and other SharePoint features. 

>[!IMPORTANT]
>SharePoint integration is deprecated for TFS 2017.  


## Administrative services  

There are a number of features and tasks associated with administrating a collaborate software development environment. You perform most of these tasks through the web portal for either Team Services or TFS. 

<div style="float:left;width:320px;margin:3px;font-size:90%">
<p style="font-weight:bold;padding-bottom:0px;text-align:center;">Team Services</p>
<ul style="padding-left:30px">
<li style="margin-bottom:2px">Manage users, access, and billing</li>
<li style="margin-bottom:2px">Add and manage team projects and teams</li>
<li style="margin-bottom:2px">Customize work tracking processes</li> 
<li style="margin-bottom:2px">Manage build retention policies</li>
<li style="margin-bottom:2px">Add and manage build agent pools</li> 
<li style="margin-bottom:2px">Add and manage extensions</li>
</ul>
</div>
<div style="float:left;width:380px;margin:3px;font-size:90%">
<p style="font-weight:bold;padding-bottom:0px;text-align:center;">TFS</p>
<ul style="padding-left:20px">
<li style="margin-bottom:2px">Manage users, access, and permissions</li>
<li style="margin-bottom:2px">Add and manage teams, team projects, and collections</li>
<li style="margin-bottom:2px">Customize work tracking processes</li> 
<li style="margin-bottom:2px">Manage build retention policies</li> 
<li style="margin-bottom:2px">Add and manage build agent pools</li> 
<li style="margin-bottom:2px">Add and manage extensions</li>
<li style="margin-bottom:2px">Configure an SMTP server (supports feedback requests and notification features)</li> 
<li style="margin-bottom:2px">Configure a backup schedule and manage database backups</li>
<li style="margin-bottom:2px">Manage upgrades</li>  
</ul>
</div>

<div style="clear:left;font-size:100%">
</div>

 
## Related notes 
- [Key concepts](concepts.md)
- [Client-server tools](tools.md)
- [Software development roles](roles.md)
- [Features](alm-devops-features.md)
- [Pricing](https://www.visualstudio.com/team-services/pricing/)


### Case studies 

- [Build and Deployment Automation Case Study for World Wide Time Keeping: Higher Quality and Faster Delivery in an Increasingly Agile World](https://www.visualstudio.com/en-us/articles/build-deployment-best-practices)  

