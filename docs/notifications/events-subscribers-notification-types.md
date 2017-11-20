---
title: Events, Subscribers, Notification types | VSTS & TFS
description: Understand how notifications or alerts are managed in Visual Studio Team Services (VSTS) or Team Foundation Server (TFS)
ms.prod: vs-devops-alm
ms.technology: collaborate
ms.assetid: 
toc: show
ms.manager: douge
ms.author: elbatk
ms.date: 08/03/2017
---


# Events, subscriptions, notification types, and roles

!!! WORK IN PROGRESS !!! 

## Event types   

 

## Subscriber levels 

 

  
## Notification types

I’m seeing these Notification Types in the UI – are there any other ones?: 
- Out of the box (Built-in subscriptions) – users can disable these at the Personal level 
- Personal  -  defined at the Person Notifications level   
- Group – defined at the Team, Team Project, or Account level 



## Delivery options 




## Event roles 


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



## Visuals/art work to provide: 
- Notification levels (Personal, Team, Team Project, Account/Collection)  and Delivery Options 
- Event types and Event Roles   
- Permissions and notifications 

To comply with the new MVC content types – I recommend: 
- About notifications and subscriptions (Concepts) topic which provides descriptions and guidance re the Concepts listed above.   types, delivery options 
- Tutorial or How-to guide for:
	- Manage your personal notifications    
	- Manage team, team project, or account-level notifications 
