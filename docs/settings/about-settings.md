---
title: About project and account settings
titleSuffix: VSTS & TFS
description: Overview of configuring account and project settings
ms.technology: vs-devops-wit
ms.prod: vs-devops-alm
ms.assetid:  
ms.manager: douge
ms.author: kaelli
ms.topic: overview 
robots: NOINDEX, NOFOLLOW
ms.date: 04/01/2018
---

# About project and account settings 

From the administrative or **Settings** context, you configure resources that support your teams. 

You'll find a quick guide of those resources you can configure based on the corresponding application.  
  
## Work 

Many work tracking/Agile tools provide teams the autonomy they need to configure and manage their work independent of other teams. When you add a team, you also configure a product backlog, Kanban board, and dashboard for the teams. To learn more, see [About teams and Agile tools](about-teams-and-settings.md). 

Work items and work tracking rely heavily on the following settings which you define at the project-level. 

- [Area paths](../work/customize/set-area-paths.md)
- [Iteration paths aka sprints](../work/customize/set-iteration-paths-sprints.md)

To configure additional product backlogs, Kanban boards, and dashboards, you [configure a team](#configure-team).   

To customize the workflow, work item form, add fields or rules, or make other changes to the work tracking experience, you customize a process. For an overview of what you can customize, see [Customize a process](../work/customize/process/customize-process.md). 
 
To change permissions at the project-level, many of which are work tracking related, see [Set permissions at the project-level or project collection-level](../security/set-project-collection-level-permissions.md)
 

## Code 

You can configure the following resources to support your code development. 

- [Create a new Git repo](../git/tutorial/creatingrepo.md) 
- [Manage repository permissions](../security/set-git-tfvc-repository-permissions.md) 


## Continuous Integration/Continuous Development (CI/CD) (Build & Release) 

You can configure the following resources to support your CI/CD work. 

**Project-level:**
- [Agent queues](../build-release/concepts/agents/pools-queues.md)
- [Services](../build-release/concepts/library/service-endpoints.md)
- Release, Retention Policy Settings - TBD

**Account-level:**
-  [Build and Release, Retention policies](../build-release/concepts/policies/retention.md)
-  [Build and Release, Resource limits for pipelines](../build-release/concepts/licensing/concurrent-pipelines-ts.md)
-  [Agent pools, add and manage agent pools](../build-release/concepts/agents/pools-queues.md)
-  [Deployment pools, add and manage deployment pools](../build-release/concepts/definitions/release/deployment-groups/index.md)

## Test

At the project-level, you can configure the following test resources: 

- [Test retention policies](../manual-test/getting-started/how-long-to-keep-test-results.md)  
- [Permissions](../security/set-project-collection-level-permissions.md)
 
> [!NOTE]  
> Manual testing relies on work item types to create and manage test plans, test suites, test cases, shared steps, and shared parameters. Of these, you can customize the test plans, test suites, and test cases using an inherited process. See [Customize a process](../work/customize/process/customize-process.md).   

## Cross-application resources 

Teams, notifications, dashboards, team projects, and other resources are used by several applications. You can add or configure these resources through the admin context.

<a id="configure-teams" /> 
### Teams 

You add a team when you want to provide a group of users in your organization a set of Agile tools which they have full ownership to configure and manage.  Teams have access to a product backlog, porfolio backlogs, sprint backlogs, dashboards, team-scoped widgets, and more. For an overview of all tools that support a team, see [About teams and Agile tools](about-teams-and-settings.md).

To add a team, see [Add teams and team members](../work/scale/multiple-teams.md).

### Notifications  

As changes are made to the code, a build, work items or other development object, you or your team members can receive an email. These notifications are based on subscriptions which are defined at the following levels: 

- [Personal notifications](../notifications/manage-personal-notifications.md) 
- [Team notifications](../collaborate/manage-team-notifications.md) 
- Project-level notifications
- Account or collection-level notifications

To learn more, see [About notifications](../notifications/about-notifications.md).

### Dashboards 

New dashboards are added to a team project through a team context. To learn more, see [Add and manage dashboards](../report/dashboards/dashboards.md).

### Service hooks 

Service hooks enable you to perform tasks on other services when events happen within your team project. You can use service hooks in custom apps and services to drive activities when events happen in your projects. 

Using service hooks, you can integrate with the following services: 


> [!div class="mx-tdCol2BreakAll"]  
> | Build and release |  Collaborate | Customer support	 | Plan and track  | Integrate |
> |-------------------| -------------| ------------------| ----------------| ------------|
> |[AppVeyor](../service-hooks/services/appveyor.md)<br/>[Bamboo](../service-hooks/services/bamboo.md)<br/>[Jenkins](../service-hooks/services/jenkins.md)<br/>[MyGet](../service-hooks/services/myget.md)<br/>[Slack](../service-hooks/services/slack.md)|[Campfire](../service-hooks/services/campfire.md)<br/>[Flowdock](../service-hooks/services/flowdock.md)<br/>[HipChat](../service-hooks/services/hipchat.md)<br/>[Hubot](../service-hooks/services/hubot.md) |[UserVoice](../service-hooks/services/uservoice.md)<br/>[Zendesk](../service-hooks/services/zendesk.md) |[Trello](../service-hooks/services/trello.md) |[Azure Service Bus](../service-hooks/services/azure-service-bus.md)<br/>[Azure Storage](../service-hooks/services/azure-storage.md)<br/>[Web Hooks](../service-hooks/services/webhooks.md)<br/>[Zapier](../service-hooks/services/zapier.md) | 


### Team projects  

A team project provides the fundamental resource for storing your code, managing your CI/CD operations, and planning and tracking work for your project. In general, you'll want to minimize the number of team projects you create, to keep things simple. However, if you need to, you can add additional team projects to your account. 

From the account-level admin context, you can perform the following tasks: 
 
- [Create a team project](../accounts/create-team-project.md) 
- [Rename a team project](../accounts/rename-team-project.md)
- [Delete a team project](../accounts/delete-team-project.md) 


## Additional account-level settings

In addition to the app-specific resources that you can configure, you can also manage your account, users, extensions, and account-level permissions. 

### Settings

From the account-level **Settings** page, you can change the time zone for your account and perform the following tasks: 
- [Change account owner](../accounts/change-account-ownership-vs.md) 
- [Rename your account](../accounts/rename-vsts-account.md) 
- [Delete your account](../accounts/delete-your-vsts-account.md) 
- [Restore (a deleted) account](../accounts/recover-your-vsts-account.md)
- [Find your account region](../accounts/change-account-location.md) 
- [Connect your account to Azure Active Directory](../accounts/connect-account-to-aad.md) 
- [Set up Azure billin](../billing/set-up-billing-for-your-account-vs.md)


### Users 
From the account-level **Users** page, you can export the set of users and their access levels. You can also perform the following tasks: 
- [Add users to your account or team project](../accounts/add-account-users-from-user-hub.md)
- [Remove users from your account](../accounts/delete-account-users.md)
- [Assign access levels and extensions to users by group membership](../accounts/assign-access-levels-and-extensions-by-group-membership.md)

### Extensions 

From the account-level admin context **Extensions** page, you can [install and manage Marketplace extensions](../marketplace/install-vsts-extension.md). 

An extension is an installable unit that contributes new capabilities to your account. You can find extensions from within the [Visual Studio Marketplace](https://marketplace.visualstudio.com/vsts?utm_source=vstsproduct&utm_medium=L1BrowseMarketplace&targetId=1a7c88fb-3672-441e-9686-0f72b02ae6a4).  The Visual Studio Marketplace is home to hundreds of extensions that can be installed to help with:

- Planning and tracking of work items, sprints, scrums, etc.
- Build and release flows
- Code testing and tracking
- Collaboration among team members


### Account-level permissions or Security  

From a Security page or dialog, you can set permissions for a user or group. Permissions are managed at the object, project, and account level. To learn more, see [About permissions and groups](../security/about-permissions.md).

To manage collection-level permissions, see [Add administrators, set permissions at the project-level or project collection-level](../security/set-project-collection-level-permissions.md?toc=/vsts/security/toc.json&bc=/vsts/security/breadcrumb/toc.json). 


<!---

You must be a member of the listed administrator group or role to configure resources at the levels indicated. To learn more about security groups and roles, see [About permissions and groups](../security/about-permissions.md) and [About security roles](../security/about-security-role.md). 


## Team level  

To configure team resources, you must be a member of the [team administrator role](../work/scale/add-team-administrator.md) for the team, or a member of the Project Administrators or Project Collection Administrators groups.  

- [Overview: Add team members](../work/scale/multiple-teams.md) 
- [Add team admins](../work/scale/add-team-administrator.md)
- [Select backlog levels](../work/customize/select-backlog-navigation-levels.md) 
- [Set working days](../work/scale/capacity-planning.md) 
- [Working with bugs](../work/customize/show-bugs-on-backlog.md)
- [Work/Iterations & Areas (team defaults)](../work/scale/set-team-defaults.md)
- [Work/Templates](../work/backlogs/work-item-template.md)<br/>- [Security (manage team-level permissions)](../work/scale/team-administrator-permissions.md)
- [Notifications](../collaborate/manage-team-notifications.md)

For a complete overview of all team assets that you can configure, see  [Manage team assets](../work/scale/manage-team-assets.md) 


-->