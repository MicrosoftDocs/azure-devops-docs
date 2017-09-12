---
title: Verify SharePoint products for Team Foundation Server
description: Verify SharePoint products for Team Foundation Server
ms.assetid: 104566ef-2578-4b76-a73d-c5e6c10eee06
ms.prod: vs-devops-alm
ms.technology: vs-devops-admin
ms.manager: douge
ms.author: elbatk
ms.date: 09/09/2017
---

# Verify SharePoint products for Team Foundation Server

[!INCLUDE [temp](../../_shared/about-sharepoint-deprecation.md)]

If you choose to use an installation of SharePoint Products other than the one that was installed during Team Foundation Server installation, you should verify that your installation of SharePoint Products meets the following guidelines:

-   The administration site and default website are running, and other computers on the network can access them.

-   SharePoint uses NTLM, the recommended authentication. (Basic authentication is not supported by Team Foundation Server extensions for SharePoint Products.)

-   If you are using a supported enterprise edition of SharePoint Server, you must configure settings for dashboard compatibility.

**Required Permissions**

To perform this procedure, you must be a member of the **Administrators** security group on the server that is running SharePoint.

### To verify that the administration site and default website are running and that other computers on the network can access them

1.  On the server that is running SharePoint, choose **Start**, **Run**, enter **inetmgr**, and then choose **OK**.

    Internet Information Services (IIS) Manager appears.

2.  In Internet Information Services (IIS) Manager, open *ServerName* (local computer).

    *ServerName* is the name of the web server.

3.  Choose **Sites**, and then choose the default website.

4.  On the Actions pane, choose **Browse :80 (http)**.

    The default website appears in the default browser.

5.  Choose the SharePoint Central Administration site.

    On the Actions pane, choose **Browse** :*Port* **(http).**

    *Port* is the number of the port that is bound to the SharePoint Central Administration site.

    The SharePoint Central Administration site appears in the default browser.

### To verify that the default website uses recommended authentication

1.  In a web browser, open the SharePoint Central Administration site, and choose the **Security**.

2.  Under **General Security**, choose **Specify authentication providers**.

3.  In the Zone column, choose **Default**.

4.  In **Claims Authentication Types**, make sure that check boxes for **Enable Windows Authentication**, **Integrated Windows authentication**, and **NTLM** are selected.

> [!NOTE]
> You should check that the authentication setting that appears in the SharePoint Central Administration site matches the authentication setting that appears in IIS.

### To verify that a supported enterprise edition of SharePoint Server is configured for dashboard compatibility

-   If you are using a supported enterprise edition of SharePoint Server, [perform the required configurations for dashboard compatibility](install-sharepoint.md). If you are using any other version of SharePoint, you can disregard this procedure. For more information, see [Manually Install SharePoint products for Team Foundation Server](install-sharepoint.md).

## See Also

[Install Team Foundation Server](../install-2013/install-tfs.md) 

[TFS upgrade requirements](../../upgrade/upgrade-2013/upgrade-2013-requirements.md) 

[How to: Set up remote SharePoint Products for Team Foundation Server](setup-remote-sharepoint.md) 
