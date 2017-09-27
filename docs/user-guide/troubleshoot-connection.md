---
title: Troubleshoot connecting to a team project in VSTS or TFS 
description: Steps to resolve connection issues with Visual Studio Team Services (VSTS) and Team Foundation Server (TFS)  
ms.technology: vs-devops-wit 
ms.prod: vs-devops-alm
ms.assetid: 
ms.manager: douge
ms.author: kaelli
ms.date: 07/14/2017
---

# Troubleshoot connecting to a team project in VSTS or TFS 
[!INCLUDE [temp](../_shared/version-vsts-tfs-all-versions.md)]

Here's a list of the most frequently encountered connection problems and what to do about them. Start at the top and follow it in the order indicated.

1.  Verify that you have required permissions.

    If the errors that you receive indicate read-only or blocked actions, you might not have permission to act on the data.

2.  Verify that your computer is connected to the network and can access network resources.

3.  Verify that TFS hasn't been taken offline. Talk with your TFS administrator.

4.  Verify whether your team project has been moved to another team project collection in Team Foundation Server. If it has been moved, you must create a connection to the new server name.

For additional troubleshooting tips, see [TF31002: Unable to connect to this Team Foundation Server](../work/customize/reference/error/tf31002-unable-connect-tfs.md).


## Connect to a TFS with Secure Sockets Layer (SSL) configured

If you connect to a TFS instance that has SSL configured, then you'll need to install a certificate and clear the client cache. For details, see [Set up HTTPS with Secure Sockets Layer (SSL) for TFS, Configuring Client Computers](../tfs-server/admin/setup-secure-sockets-layer.md#config-client-computers). 


## Clear the cache on client computers  

When the on-premises TFS configuration changes, such as when moving or splitting a project collection, you might have to clear the cache.

1.  Log on to your client computer for Team Foundation by using the credentials of the user whose cache you want to clear.

2.  Close any open instances of Visual Studio.

3.  Open a browser, and browse to one of the following folders, depending on the operating system that is running on the client computer:  

    -   **Windows 10**  
        *Drive*:\\Users\<i>UserName</i>\AppData\Local\Microsoft\Team Foundation\6.0\Cache  

    -   **Windows 8**  
        *Drive*:\\Users\<i>UserName</i>\AppData\Local\Microsoft\Team Foundation\4.0\Cache  

    -   **Windows Vista or Windows 7**  
        *Drive*:\\Users\<i>UserName</i>\AppData\Local\Microsoft\Team Foundation\2.0\Cache  

4.  Delete the contents of the Cache directory, including all subfolders.

