---
title: Modify or Remove Access Between a SharePoint Web Application and TFS
description: Modify or Remove Access Between a SharePoint Web Application and Team Foundation Server
ms.assetid: 0ba027bb-bfb9-490e-9220-2fe98230ee40
ms.manager: douge
ms.author: elbatk
ms.date: 08/31/2016
ms.prod: vs-devops-alm
ms.technology: vs-devops-admin
---

# Modify or Remove Access Between a SharePoint Web Application and Team Foundation Server

**TFS 2017** | **TFS 2015** | **TFS 2013**

After you grant access between a SharePoint web application and Visual
Studio Team Foundation Server, you can modify or delete either or both
access grants. Over time, you might need to modify the access grants in
your deployment to reflect changes in your organization. For example, if
you change your deployment to use HTTPS and Secure Socket Layer (SSL)
instead of HTTP, you must update the access grant for the web
application to reflect these changes.

> [!NOTE]
> When you remove an access grant, you should verify whether the service
> account for the SharePoint web application is being used by another web
> application in the deployment. If it is not, you should remove the
> account from the SharePoint Web Application Services group.

**Required Permissions**

To perform these procedures, you must be a member of the 
**Team Foundation Administrators** group or your 
**Edit Server-Level Information** permission must be
set to **Allow** in Team Foundation Server. You
must also be a member of the local 
**Administrators** group on each server that hosts the
administration console for Team Foundation. For more information about
permissions, see [Team Foundation Server Permissions](../../security/permissions.md).

To modify or delete access from a SharePoint web application to Team Foundation Server:

1.  On the server that is running the Team Foundation Server Extensions
    for SharePoint Products, open the administration console for Team
    Foundation, and expand the tree.

    For more information, see [Open the Team Foundation Administration Console](../command-line/open-admin-console.md).

2.  Under **Team Foundation**, choose 
    **Extensions for SharePoint Products**.

3.  In the **Grant access to a SharePoint Web
    application for Team Foundation Server** pane, highlight the
    access grant that you want to modify, and then perform one of the
    following sets of steps:

    -   Choose **Modify access**, change the
        access grant, and then choose **OK**.

    -   Choose **Remove access**, and in the
        confirmation dialog box, choose **Yes**.

To modify or delete access from Team Foundation Server to a SharePoint web application:

1.  On the server where you have installed the application tier for Team
    Foundation Server, open the administration console for Team
    Foundation, and expand the tree.

    For more information, see [Open the Team Foundation Administration Console](../command-line/open-admin-console.md).

2.  Under **Team Foundation**, choose 
    **SharePoint Web Applications**.

3.  In the **SharePoint Web Applications** pane,
    highlight the access grant that you want to modify or delete, and
    perform one of the following steps:

    -   Choose **Change**, change the access
        grant, and then choose **OK**.

        > [!NOTE]
        > Any changes that you make to the access settings for the web application
        > might have a significant impact on the team projects and team project
        > collections that use this SharePoint web application. On the 
        > **Dependents** tab, you can review the list of
        > collections and projects that use this web application. You should
        > consider verifying whether each of these sites still operates as you
        > expect after you modify the web application.

    -   Choose **Remove**. In the 
        **Remove SharePoint Web Application** dialog
        box, choose **Yes** if you are sure that
        you want to remove access to the web application. If you are not
        sure, choose **No**.

        > [!IMPORTANT]
        > When you remove a web application, you will have a significant impact on
        > any team projects and team project collections that use this SharePoint
        > web application. If you remove access for a SharePoint web application,
        > any team project or team project collection that uses this web
        > application will lose whatever SharePoint libraries or team project
        > portals that were hosted on that web application. Before you remove a
        > web application, you should make sure that you understand what projects
        > and collections will be affected. To review the list of collections and
        > projects that use this web application, you highlight the access grant,
        > choose **Change**, and choose the 
        > **Dependents** tab. Before you remove access for the
        > web application, you should consider verifying whether any of these
        > sites is still needed.


## Remove a service account for a SharePoint web application from SharePoint Web Application Services: 

When you remove a SharePoint web application or change the service
account that a web application uses, you might still need to manually
remove its service account. If a service account is no longer used by
any SharePoint web application in the deployment, you should remove that
service account from the **SharePoint Web Application
Services** group in Team Foundation Server.

1.  On the server where you have installed the application tier for Team
    Foundation Server, open the administration console for Team
    Foundation, and expand the tree.

    For more information, see [Open the Team Foundation Administration Console](../command-line/open-admin-console.md).

2.  Under **Team Foundation**, choose 
    **SharePoint Web Applications**.

3.  In the **SharePoint Web Applications** pane,
    in the **Service Accounts for SharePoint Web
    Applications** section, highlight the service account that you
    want to remove, and choose **Remove**.

    > [!IMPORTANT]
    > You will not be asked to verify the removal of the service account. Make
    > sure that you have clicked the service account that you intend to remove
    > before you choose **Remove**. If you remove the
    > wrong service account, the portals that use the SharePoint web
    > application might stop functioning correctly. You can re-add the service
    > account at any time.
