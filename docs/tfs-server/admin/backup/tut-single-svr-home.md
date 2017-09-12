---
title: Restore a TFS deployment to new hardware
description: Restore a TFS deployment to new hardware
ms.assetid: 4601dd68-3b9e-4d29-aa71-432566d4e4bd
ms.manager: douge
ms.author: elbatk
ms.date: 09/01/2016
ms.prod: vs-devops-alm
ms.technology: vs-devops-admin
ms.topic: get-started-article
---

# Restore a TFS deployment to new hardware

**TFS 2015** | **TFS 2013**

If the server that hosts your deployment of Team Foundation Server (TFS) fails, you can use the backups you made of the databases and of SharePoint Foundation to restore the deployment to new server hardware. You need reliable data backups and installation media for TFS, SQL Server, and SharePoint Foundation, including access to all service packs and cumulative updates you applied to your original deployment.

You must install and configure the software on the same operating system as the original server, and you should ensure that you restore the backups to the same versions, editions, and servicing levels of the software that you backed up.

>**Note:**  
>This tutorial contains fictitious users, servers, and companies as part of the examples that help illustrate the procedures. The example companies, organizations, products, domain names, e-mail addresses, logos, people, places, and events depicted herein are fictitious. No association with any real company, organization, product, domain name, email address, logo, person, places, or events is intended or should be inferred.


## Tutorial procedures

|Title|Description|
|---|---|
| [Prepare the new hardware](tut-single-svr-prep-new-hw.md) |Learn how to choose the right replacement hardware, review the prerequisites for a replacement server, and install the software you'll need in order to restore the deployment. As part of this process, you must choose a replacement server, and then install SQL Server, SharePoint Foundation, and the tools that are required to reconfigure the restored TFS databases.|
| [Restore the databases](tut-single-svr-restore-dbs.md) |Learn how to restore the databases from backups, and to restore the SharePoint farm. As part of this process, you must restore the configuration, collection, and reporting databases, and restore the SharePoint farm from backup.|
| [Install and configure Team Foundation Server](tut-single-svr-install-config-tfs.md) |Learn how to use the Application-Tier Only wizard to install the web services and applications for TFS. As part of this process, you must install Team Foundation Server and the extensions for SharePoint Products, and configure URLs, service accounts, reporting, and analysis resources to complete the data restoration part of the recovery.|
| [Reconnect services and users](tut-single-svr-reconn-svcs-users.md) |Learn how to complete configuration of TFS after its databases have been restored. As part of this process, you will start team project collections, add groups of users to the new server, and clear the data caches to help prevent data errors. Learn how to clear the work item cache on the new server, and learn how users can clear their version control caches on their own computers so that they don't experience data caching problems when connecting to the new server.|

## Try this next

> [!div class="nextstepaction"]
> * [Prepare the new hardware](tut-single-svr-prep-new-hw.md)
