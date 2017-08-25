---
title: About notifications | VSTS & TFS
description: Understand how notifications or alerts are managed in Visual Studio Team Services (VSTS) or Team Foundation Server (TFS)
ms.prod: vs-devops-alm
ms.technology: collaborate
ms.assetid: 
toc: show
ms.manager: douge
ms.author: kaelli
ms.date: 08/03/2017
---



# What are notifications?  

!!! WORK IN PROGRESS !!! 


Notifications help you and your team stay informed about activity in your VSTS projects. With notifications, you are notified when changes occur to work items, code reviews, pull requests, source control files, and builds, you can be notified via email. For example, you can get notified whenever a bug that you opened is resolved or a work item is assigned to you. 

## What are subscriptions? 


 
## Address the following: 
- How they are managed
	- personal
	- team
	- team project
	- collection level 
- prerequisites - for TFS 
- permissions
- customizing the format  
- REST API 


## Setting notifications
It appears that one can set notifications at these different levels – it seems we should have some guidance as to when they should use the specific level: 
- Personal level - https://mseng.visualstudio.com/_notifications   
- Team level - https://mseng.visualstudio.com/TechnicalContent/VSTS-TFS/_admin/_notifications  
- Team Project level - https://mseng.visualstudio.com/TechnicalContent/_admin/_notifications   
- Account level - https://mseng.visualstudio.com/_admin/_notifications?  tab=Subscriptions 

## Notification types

I’m seeing these Notification Types in the UI – are there any other ones?: 
- Out of the box (Built-in subscriptions) – users can disable these at the Personal level 
- Personal  -  defined at the Person Notifications level   
- Group – defined at the Team, Team Project, or Account level 


## Tasks/Scenarios we need to document: 
- Navigating to a Notifications settings page – guidance on when to create notifications at which level 
- Create/edit/delete a personal notification  
- Create/edit/delete a team/team project/or account/collection-level notification  
- Opt out of an Out of Box notification or a team/team project notification (Personal level)  
- Disable team/team project notification/subscription 
- Account admin level tasks
	- Disable an Out of Box notification 
	- Configure notifications to work with third party services (Campfire, Flowdock, etc) – Is this all done through Service Hooks? (i.e., no need to setup a notification?)  
	- Find notifications set for a team member or team 
	- Create, edit, or delete a notification set for a team or team member 
	- View subscription statistics – what is useful about this? 


## Concepts to explain/guidance to provide – not in any particular order:
- Definitions of Notifications v Subscriptions 
- What are event types
- What are notification types 
- What are Subscriber levels
- What delivery options are supported and when to use which  
	- What is the SOAP delivery option used for? and when should I select it? Does the format of the notification automatically change from HTML to SOAP when SOAP is selected as the delivery option? 
	- Can I customize the email format or the SOAP format?  
- What notification levels can be set and guidance on usage  
- What event Roles are supported, descriptions for each –– I suppose these change based on the Event type. 
	- 	Build: Last changed by, Requested by, Requested for
	- 	Pull Request: Last changed by, Requested by, Requested for 
	- 	Git commit: Pushed by 
	- 	TVFC code check in: Committer, Owner (Skip Initiator) 
	- 	Work Assignee (Current), Assignee (Previous)
	- 	Release: Deployment requested for, Environment Owner, Release requested by, Approved by 
- When they can’t opt-out-of a subscription  
- What is the difference between Opting out of a Built-in-subscription and Disabling it at the team/team-project level  
- Disable a notification – guidance (such as when you go on vacation, others?) 
- What notifications can/cannot be edited (appears that ALL Out-of-box notifications cannot be edited – only disabled or opted-out). 
- Tips for “blocking” notifications you can’t opt out of/unsubscribe from – use an email filter 
- Applying Filters to a notification (Team Project and other useful filters) – guidance on this  
- Security – permission-levels required at each level and task 
	- Member of the Project Collection Administrator group can create/edit/delete/disable notifications at the account/collection level and administrate notifications for all users and team projects
	- Member of the Project Administrator group can create/edit/delete/disable notifications at the team project level and administrate notifications for their team project(s) and users that belong to their team project(s)
	- Team Administrators can create/edit/delete/disable notifications at the team level and manage team member notifications 
	- Users (including Stakeholders) can create/edit/delete/disable or opt-out of notifications for themselves


## Visuals/art work to provide: 
- Notification levels (Personal, Team, Team Project, Account/Collection)  and Delivery Options 
- Event types and Event Roles   
- Permissions and notifications 

To comply with the new MVC content types – I recommend: 
- About notifications and subscriptions (Concepts) topic which provides descriptions and guidance re the Concepts listed above.   types, delivery options 
- Tutorial or How-to guide for:
	- Manage your personal notifications    
	- Manage team, team project, or account-level notifications 
