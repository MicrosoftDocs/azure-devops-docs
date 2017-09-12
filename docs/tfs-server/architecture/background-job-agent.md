---
title: Team Foundation Background Job Agent
description: Team Foundation Background Job Agent
ms.assetid: 0755031e-29d6-4dfa-83fb-fcd823470932
ms.manager: douge
ms.author: elbatk
ms.date: 09/01/2016
ms.prod: vs-devops-alm
ms.technology: vs-devops-admin
---

# Team Foundation Background Job Agent

**TFS 2017** | **TFS 2015** | **TFS 2013**

The Visual Studio Team Foundation Background Job Agent service provides a general scheduling mechanism for Web services and jobs for Team Foundation. This Windows service is also used to run the tasks spawned by various wizards, such as the New Team Project wizard and Create a Team Project Collection wizard. The service uses the service account for Team Foundation Server (TFS), referred to as *TFSService*. The service runs on any server that is running a Web service or Web application in the logical application tier for Team Foundation. To operate correctly, the service account for the Team Foundation Background Job Agent service must have the permissions required for the tasks that it performs.

Some Team Foundation services have tasks that recur at regular intervals. For example, administrators might want to schedule builds on a nightly basis. To accomplish this, build services must be able to set up an automatically scheduled event in the registration database. The Team Foundation Background Job Agent service provides a single Windows-based service to schedule repeating tasks on servers that are running Team Foundation. The service runs through the registration database, identifies all Team Foundation Server Web services that have scheduled events, and schedules these tasks.

> [!IMPORTANT]
> To perform tasks such as creating team project collections, the service account that the Team Foundation Background Job Agent uses must have certain permissions granted to it. For more information, see [Service accounts and dependencies in Team Foundation Server](../admin/service-accounts-dependencies-tfs.md).

## Instances

Only one instance of the Team Foundation Background Job Agent service should be running on any application-tier server for Team Foundation. By default, the service runs under the service account that you specified when you installed Team Foundation Server. To view the status of this service on an application-tier server, open Services and browse to find the service.

## Permissions

The Team Foundation Background Job Agent service uses the same service account as TFS does, *TFSService*. To operate correctly, this account requires the following permissions:

-   Log on as a service

-   Farm Administrators group for any SharePoint Web applications that Team Foundation Server uses

-   **TFSExecRole** or both of the following for any databases that Team Foundation Server uses:

    -   db\_owner

    -   db\_create

## Assumptions and limitations

The Team Foundation Background Job Agent service runs continuously on all application-tier servers. Administrators should not need to manually stop or start this service except during system recovery. For example, you must stop this service before you restore databases. The service should restart automatically when a server is restarted.

Administrators will not directly configure the Team Foundation Background Job Agent service. Tasks that need to be scheduled are configured directly in individual components of Team Foundation, such as Team Foundation Build. When an event is added or deleted, the service automatically reconfigures the tasks scheduled in the registration database.

The Team Foundation Background Job Agent service will log only one instance of any given error until that error is resolved and a success message is recorded in the Event Log, or until the service is manually restarted. If you want to monitor the Event Log for that error message, you must first stop and restart the service.

The Team Foundation Background Job Agent service is not designed to be an all-purpose scheduling mechanism. It is not designed to provide scheduling precision beyond day of the week, hour of the day, and minute of the day. Most administrators will not need to schedule tasks beyond this level of granularity.

## See Also

 [Change the service account or password for Team Foundation Server](../admin/change-service-account-password.md) 

 [Change the service account or password for SQL Server Reporting Services](../admin/change-service-account-or-password-sql-reporting.md) 
