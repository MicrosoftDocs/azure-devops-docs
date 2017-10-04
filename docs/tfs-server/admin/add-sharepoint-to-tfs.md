---
title: Add SharePoint products to your Team Foundation Service deployment
description: Add SharePoint products to your Team Foundation Service deployment
ms.assetid: 3b5bb2e2-4142-4b9d-848e-b52ffafe9aa3
ms.prod: vs-devops-alm
ms.technology: vs-devops-admin
ms.manager: douge
ms.author: elbatk
ms.date: 09/09/2017
---

# Add SharePoint products to your Team Foundation Service deployment

[!INCLUDE [temp](../_shared/about-sharepoint-deprecation.md)]

To integrate team projects with SharePoint sites, you must add one or
more SharePoint Web applications to standard and advanced installations
of Team Foundation Server (TFS). The version of SharePoint Products must
also be compatible with TFS. For more information, see [SharePoint Products requirements for Team Foundation Server](../requirements.md#sharepoint).

For guidance about how to install SharePoint Products for TFS, see
Manually Install SharePoint Products. For guidance about how to add an
existing deployment of SharePoint Products to TFS, see [Verify SharePoint products for Team Foundation Server](../install/sharepoint/verify-sharepoint.md)

1.  [Install and configure the Extensions for SharePoint Products](../install/install-2013/install-tfs.md)
    on the server or servers hosting the SharePoint deployment you want
    to integrate with TFS.

2.  On the server where you installed the extensions, open the
    administration console for Team Foundation.

3.  Expand the tree, and choose **Extensions for
    SharePoint Products**.

4.  In the **Extensions** pane, choose <span
    **Grant access**.

    The **Access for Team Foundation Server**
    window opens.

5.  In **URL for Team Foundation Server**, the
    public URL for Team Foundation Server.

    You can look up this information in the 
    **Application Tier** node of the administration
    console where you have installed the application tier for Team
    Foundation Server.

6.  In **SharePoint Web Application**, choose the
    URL for the SharePoint web application that you want to use from the
    drop-down list.

    If you have installed the Team Foundation Server Extensions for
    SharePoint Products on the server that is hosting the SharePoint Web
    applications, all SharePoint web applications on that server appear
    in the list. If no web applications appear, either the extensions
    were not installed correctly, or no SharePoint web applications have
    been configured.

7.  (optional) In **Restrict site creation to the
    following path**, specify the path of the site collection where
    you want to create all sites that Team Foundation Server will use.

    This step is recommended for most deployments, because it helps
    ensure that the deployment can be backed up and restored correctly.

8.  In **Enterprise Application Definition**,
    specify the name of the definition that you created for Team
    Foundation Server.

    This step is required only if you are configuring a web application
    that is hosted on SharePoint Server and you want reports and
    dashboards to operate correctly. For more information, see [Configure the enterprise application definition for Team Foundation Server](../install/sharepoint/config-enterprise-app-def.md).

9.  When you have provided the required information, choose 
    **OK**.

    If all values are correct, access will be granted. This process
    might take several moments.

To grant access between Team Foundation Server and a SharePoint web application:

1.  On the server where you have installed the application tier for Team
    Foundation Server, open the administration console for
    Team Foundation.

2.  Expand the tree, and choose **SharePoint Web
    Applications**.

3.  In the **SharePoint Web Applications** pane,
    choose **Add**.

    The **SharePoint Web Application Settings**
    window opens.

4.  On the **General** tab, in 
    **Friendly Name**, specify a name for this
    SharePoint web application.

    This name will appear in the list of web applications. If you intend
    to use more than one SharePoint web application in your deployment,
    consider specifying a name that will help users distinguish this
    access grant from the access grants for other SharePoint
    web applications. You can also add a description in the 
    **Description** box to help identify this access
    grant, but the description will not appear in the list.

5.  In **Web Application URL**, specify the URL
    of the SharePoint web application for which you want to
    grant access.

    This name should match the name of the web application in
    SharePoint Products. If the SharePoint web application is configured
    to use a port number that is not the standard default (80), you must
    also specify the port number.

6.  In **Central Administration URL**, specify
    the URL and the port number for SharePoint Central Administration.
    
    > [!NOTE]
    > If you have administrative permissions on the server that is running
    > SharePoint Products, you can view this URL and port number by opening
    > SharePoint Central Administration. If not, you must obtain this
    > information from an administrator for that server.

7.  In **Default location for team project collection
    sites**, specify the relative path for the site collection that
    you want to use as the root for team project collections that use
    this SharePoint web application.

    > [!NOTE]
    > By default, the location name is **/sites**, but
    > you can use any named path for site collections as configured in
    > SharePoint Central Administration. If you are deploying Team Foundation
    > Server in an environment where another administrator manages SharePoint
    > Products, consider contacting that administrator for guidance on which
    > path to use.

8.  (optional) If you want to make sure that the relative path that you
    provided is valid, choose **Verify Path**.

9.  Choose **OK**.

    If all the values are correct, the SharePoint Web application
    appears in the list of Web applications that are available for use
    with Team Foundation Server. This process might take
    several moments.

    > [!NOTE]
    > Team Foundation Server will not only grant access but also attempt to
    > add the service accounts for the SharePoint web application to the
    > appropriate group in Team Foundation. If any one of these attempts
    > fails, the configuration information for the web application is saved,
    > but an error message appears. You must then manually configure the
    > settings that the message indicates.

## Add the Service Account for the SharePoint web Application

When you grant access between a SharePoint web application and Team
Foundation Server, you must add the service account for the web
application to the **SharePoint Web Application
Services** group in Team Foundation Server.

> [!NOTE]
> You do not have to perform the procedure to grant access between a
> SharePoint web application and Team Foundation Server if your account is
> a member of the Farm Administrators group. If your account is a member
> of that group, these settings are configured for you automatically when
> you perform the procedure to grant access between Team Foundation Server
> and the SharePoint web application. 

To add a service account for a SharePoint web application to SharePoint Web Application Services: 

1.  On the server where you have installed the application tier for Team
    Foundation Server, open the administration console for
    Team Foundation.

2.  Expand the tree, and choose **SharePoint Web
    Applications**.

3.  In the **SharePoint Web Applications** pane,
    in the **Service Accounts for SharePoint Web
    Applications** section, choose **Add
    Members**.

    The **Select Users, Computers, or Groups**
    dialog box opens.

4.  In **Enter the object names to select**,
    specify the account that you want to add, and then choose 
    **OK**.
