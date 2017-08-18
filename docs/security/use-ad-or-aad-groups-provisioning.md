---
title: Use AD or AAD for automated provisioning | Team Services & TFS
description: Understand how permissions are managed in Visual Studio Team Services (VSTS) or Team Foundation Server (TFS)
ms.prod: vs-devops-alm
ms.technology: vs-devops-tfs
ms.assetid: 
toc: show
ms.manager: douge
ms.author: kaelli
ms.date: 08/04/2017
---

# Use AD or AAD for automated provisioning 


**Team Services | TFS 2017 | TFS 2015 | TFS 2013** 

!!! WORK IN PROGRESS !!! 

<!--- TO BE COMPLETED  ---> 

* Describe the benefits of using AD or AAD to define groups and manage security 

!!! WORK IN PROGRESS !!! 


## Manage large numbers of users using Active Directory, Azure Active Directory, or Windows groups

If you need to set permissions for large numbers of users,
create a group in Windows, Active Directory, or Azure Active Directory,
add these groups to TFS groups or Team Services groups,
and add the same groups to grant access to additional resources.

<img src="_img/permissions/grant-permissions.png" style="border: 1px solid #CCCCCC" />

Of course, you don't need to grant permissions for reports or the project portal
if your team project doesn't use SQL Server Reporting Services or a SharePoint site.