---
title: Open Team Foundation Server administration console
description: Open Team Foundation Server administration console
ms.prod: vs-devops-alm
ms.technology: vs-devops-admin
ms.assetid: 8278b2af-1733-4b6a-a548-ad2cae4b0cab
ms.manager: douge
ms.author: douge
ms.date: 09/26/2016
---

# Open Team Foundation Server administration console

**TFS 2017** | **TFS 2015** | **TFS 2013**

You can configure and manage various aspects of your deployment of Team Foundation by using the administration console for Team Foundation. For example, you can add a server for hosting team project portals, create and modify team project collections, and change the service account for Visual Studio Team Foundation Server. This administration console is installed when you install one or more of the following components on a server:

* an application-tier for Team Foundation Server
* the extensions for SharePoint Products
* Team Foundation Build
* Visual Studio Lab Management

Required Permissions: you must be a member of the local Administrators group on the server where you want to open the console, and either a member of the **Team Foundation Administrators** group or your **Edit Server-Level Information** permission must be set to **Allow**.

To open the administration console from the Start menu on a server that is running one or more components of Team Foundation, type and choose **Team Foundation Server Administration Console**.  On older versions of Windows, you may need to choose **All Programs**, then choose **Microsoft Team Foundation Server**, and then choose **Team Foundation Server Administration Console**.

> [!NOTE]
> If **Team Foundation Server Administration Console** does not appear as a menu option, you might not have permission to open it. You can try to open it at a command prompt, but you might not be able to access some or all of the administration console's functionality.
 
The administration console opens. You might have to wait briefly for all the information to populate throughout the nodes of the console.


To open the administration console at a command prompt:

1. On a server that is running one or more components of Team Foundation, open a Command Prompt window and change directories to the tools directory for Team Foundation Server.

By default, the tools directory is located in `Drive:\Program Files\TFS <version>\Tools`.

2. Type TFSMgmt.exe and press ENTER.

The administration console opens. You might have to wait briefly for all the information to populate throughout the nodes of the administration console.

> [!NOTE]
> You can open the administration console at a command prompt even if you do not have all the required permissions to view or modify some or all of the information that the console shows.

