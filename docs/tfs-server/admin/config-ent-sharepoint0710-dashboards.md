---
title: Configure the Enterprise Editions of SharePoint Server 2010 or Office SharePoint Server 2007 for Dashboard Compatibility with Team Foundation Server
description: Configure the Enterprise Editions of SharePoint Server 2010 or Office SharePoint Server 2007 for Dashboard Compatibility with Team Foundation Server
ms.assetid: a32b811c-00a6-4fe9-97f6-75a39900e6c9
ms.manager: douge
ms.author: elbatk
ms.date: 08/18/2016
ms.prod: vs-devops-alm
ms.technology: vs-devops-admin
---

# Configure the Enterprise Editions of SharePoint Server 2010 or Office SharePoint Server 2007 for Dashboard Compatibility with Team Foundation Server

**TFS 2015** | **TFS 2013**

Before you can use the Enterprise edition of either Microsoft Office
SharePoint Server 2007 or Microsoft SharePoint Server 2010, you must
configure it to work with your deployment of Team Foundation Server. If
you do not configure the settings that this topic describes, the
reports and dashboards in team project portals might not have all the
functionality that you expect or might not function correctly.

**Required Permissions**

To perform this procedure, you must be a member of the 
**Administrators** security group on the server that is
running Team Foundation Server. You must also be a member of the Farm
Administrators group in SharePoint Products.

## Configure SharePoint Server 2010

To manually configure the Enterprise edition of SharePoint Server 2010
for compatibility with Team Foundation Server, you must perform the
procedures in this section.

### Configure required services in SharePoint Server 2010

Team Foundation Server requires certain services to run in SharePoint
Server 2010 for reports and dashboards to appear correctly in team
project portals.

To configure services in SharePoint Server 2010:

  1.  On the server that is running SharePoint Server 2010, open
      SharePoint Central Administration, and then choose 
      **Configuration Wizards**.

  2.  Choose **Start the Wizard**.

  3.  Make sure that the **Excel Services
      Application** and **Secure Store
      Service** check boxes have been selected, and then choose 
      **Next**.

### Configure Excel services

For reports to operate correctly, you must also configure the web
application that you created for Team Foundation Server to use a trusted
file location for Excel Services.

To add a trusted file location:

  1.  In SharePoint Central Administration, under 
      **Application Management**, choose 
      **Manage service applications**.

  2.  On the Manage Service Applications page, choose 
      **Excel Services Application**.

  3.  On the Manage Excel Services Application page, choose 
      **Trusted File Locations**.

  4.  Choose **Add Trusted File Location**.

  5.  In **Address**, enter the URL of the root
      site of the web application that you will use with Team
      Foundation Server.

      You should specify the web application that you created for Team
      Foundation Server.

  6.  In **Location Type**, choose 
      **Microsoft SharePoint Foundation**.

  7.  In **Trust Children**, select the 
      **Children trusted** check box.

  8.  In the **External Data** section, under 
      **Allow External Data**, choose 
      **Trusted data connection libraries and embedded**.

  9.  (Optional) Clear the **Refresh warning
      enabled** check box.

  10. In **Maximum Concurrent Queries Per
      Session**, change the number to 20, and then choose 
      **OK**.

### Configure secure store service (optional)

In SharePoint Server 2010, the secure store service replaces the single
sign-on service in Microsoft Office SharePoint Server 2007. To configure
the secure store service, you must create a target application for the
secure store. In Microsoft Office SharePoint Server 2007, this
application was called an enterprise application definition.

To configure the secure store service:

  1.  In SharePoint Central Administration, under 
      **Application Management**, choose 
      **Manage service applications**.

  2.  On the Manage Service Applications page, choose 
      **Secure Store Service**.

  3.  Choose **New** to create a secure store
      target application for Team Foundation Server.

      > [!TIP]
      > If you have not created a key, SharePoint Products prompts you to create
      > one by choosing **Generate New Key**. Without a
      > key, you cannot create a target application for the secure store.

  4.  On the Create New Secure Store Target Application page, in 
      **Target Application ID** and 
      **Display Name**, enter 
      ```TFS```.

      > [!TIP]
      > You do not have to use ```TFS``` for
      > **Target Application ID** or
      > **Display Name**, but take note of whatever you use
      > here, because you will need it to configure Team Foundation
      > Server later.
      
  5.  In **Contact E-mail**, enter the e-mail
      address of the person or group you want email messages about this
      application to be sent to.

  6.  In the **Target Application Type** list,
      choose **Group**.

  7.  In **Target Application Page URL**, choose
      **None**, and then choose 
      **Next**.

  8.  In **Specify the credential fields for your Secure
      Store Target Application**, choose 
      **Next** to accept the default settings for the
      credential fields.

  9.  In **Specify the membership settings**, enter
      the administrative account for the application in 
      **Target Application Administrators**.

  10. In **Members**, enter the global security
      group from the domain that contains all the users to whom you want
      to grant access to dashboards and reports in Team Foundation Server,
      and then choose **OK**.

  11. On the Secure Store Service Application page, select the check box
      for the target application that you just created (named TFS if you
      used the naming guidance that was provided earlier in this topic),
      and then choose **Set Credentials** in
      the ribbon.

  12. In the **Set Credentials for Secure Store Target
      Application (Group)** dialog box, enter the name and password,
      confirm the password of the report reader account for Team
      Foundation Server, and then choose **OK**.

      > [!TIP]
      > TFSReports is the placeholder name of the report reader account.


## Configure Office SharePoint Server 2007

To manually configure the Enterprise edition of Microsoft Office
SharePoint Server 2007 for compatibility with Team Foundation Server,
you must perform the procedures in this section.

### Configure required services in Office SharePoint Server 2007

Team Foundation Server requires certain services to run in Microsoft
Office SharePoint Server 2007 for reports and dashboards to appear
correctly in team project portals.

To configure services in Office SharePoint Server 2007:

  1.  On the server that is running Microsoft Office SharePoint Server
      2007, open SharePoint Central Administration.

  2.  Choose the **Operations ** tab, and under
      **Topology and Services**, choose 
      **Services on server**.

  3.  In **Select server role to display services you
      will need to start in the table below**, choose 
      **Single Server or Web Server for small server
      farms** or **Web server for medium server
      farms**.

      > [!NOTE]
      > For this procedure, both options are equally valid. The services are the
      > same for both options.

  4.  In **Start services in the table below**,
      find **Excel Calculation Services**, choose
      **Start**, and then wait for the operation
      to complete.

  5.  In **Start services in the table below**,
      find **Office SharePoint Server Search**, and
      then choose **Start**.

      The **Configure Office SharePoint Server Search
      Service Settings** page opens.

  6.  In **Query and Indexing**, select the 
      **Use this server for indexing content** and 
      **Use this server for serving search queries**
      check boxes.

  7.  In **Contact E-mail Address**, enter the
      address of an email account to which external users should send mail
      about problems with this server.

  8.  In **Farm Search Service Account**, enter the
      user name and password of a domain account to use as the search
      service account for Office SharePoint Server.

  9.  Leave the rest of the settings in their default configurations,
      choose **Start**, and then wait for the
      operation to complete.

      > [!NOTE]
      > The search service account that you specify for Office SharePoint Server
      > requires special permissions and has security implications. For this
      > account, you should not specify the service account that you use for
      > SharePoint Products or a system account, such as Network Services. For
      > more information, see the following page on the Microsoft website:
      > [Service Accounts and Dependencies in Team Foundation Server](service-accounts-dependencies-tfs.md).

  10. In **Start services in the table below**,
      find **Windows SharePoint Services Search**,
      and then choose **Start**.

      The **Configure Windows SharePoint Services Search
      Service Settings** page opens.

  11. In **Service Account**, enter the user name
      and password of a domain account to use as the service account.

  12. In **Content Access Account**, enter the user
      name and password of an account to use as the read-only
      access account.

  13. Leave the rest of the settings in their default configurations,
      choose **Start**, and then wait for the
      operation to complete.

      > [!NOTE]
      > The accounts that you specify for the service account and the content
      > access account both require special permissions and have
      > security implications. For more information, see the following page on
      > the Microsoft website: [Service Accounts and Dependencies in Team Foundation Server](service-accounts-dependencies-tfs.md).


### Create a shared service provider for use with Team Foundation Server

After you enable the services that Team Foundation Server requires, you
must create a shared service provider (SSP) for use with Team Foundation
Server. You will also create a SharePoint web application to support
this SSP.

To create a shared service provider and the web application that it will use:

1.  Choose **Home** to display the main page for
    Central Administration, and then choose **Shared
    Services Administration**.

2.  On the **Manage this Farm's Shared Services**
    page, choose **New SSP**.

    The **New Shared Services Provider**
    page appears.

3.  In **SSP Name**, either enter a name for the
    new SSP, or accept the default name.

    By default, the name is **SharedServices**
    followed immediately by a number (for example, **SharedServices1**).

4.  Choose **Create a new Web application**.

    The **Create New Web Application**
    page appears.

5.  In **IIS Web site**, choose 
    **Create a new IIS Web site**.

6.  (Optional) In **Description**, change the
    value from the default value, **SharePoint**,
    to the name that you provided in the previous step (for
    example, SharedServices1).

    > [!IMPORTANT]
    > Do not change the port number or remove the port number reference from
    > the description.

7.  In **Security Configuration**, choose 
    **NTLM**, and then choose 
    **Create a new application pool**.

8.  In **Application Pool**, configure the
    following options:

      -   In **Application pool name**, ensure that
          the name matches the name in 
          **Description**.

      -   In the **Select a security account for this
          application pool** section, choose 
          **Configurable**, and then enter the user name
          and password of the service account for SharePoint Products.

9.  Leave the rest of the settings in their default configurations, and
    then choose **OK**.

    After the web application is created, the **New
    Shared Services Provider** page appears with an error message
    in the title bar. This behavior is expected.

10. In **SSP Name**, in **Web
    Application**, verify that the name of the web application that
    you just created for the SSP appears, and do not modify the values
    of any settings in this section.

11. In **My Site Location**, under 
    **My Site Location URL**, in 
    **Relative URL**, enter a relative URL if a site
    already exists at /.

    This URL is required only if a site already exists at 
    **/**. Users typically specify **/My**, but you can
    specify any name that does not use prohibited characters. For more
    information, see the following page on the Microsoft website:
    [Naming Restrictions in Team Foundation](../../collaborate/naming-restrictions.md).

12. In **Enter the SSP Service Credentials**,
    enter the user name and password of a domain account that you want
    to use as the account for the service credentials.

    > [!NOTE]
    > You must specify a domain user account, but it doesn't have to be a
    > member of any particular security group. Specify a unique user account
    > that doesn't have administrative permissions. Do not use the service
    > account for Team Foundation (TFSService) or the data reader
    > account (TFSReports) because they both require permissions that this
    > account should not have. For more information, see the following page on
    > the Microsoft website: [Service Accounts and Dependencies in Team Foundation Server](service-accounts-dependencies-tfs.md).

13. Leave the rest of the settings in their default configurations,
    choose **OK**, and then wait for the
    operation to complete.

    > [!NOTE]
    > If a warning message appears about hosting the administration site for
    > SSP and the root site on the same server, choose <span
    > **OK**.

14. On the **Success** page, choose **OK**.


### Configure single sign-on

To configure single sign-on, you must create an enterprise application
definition. During the following procedure, you might need to log on
with two sets of credentials. To successfully complete this procedure,
the account with which you log on to the server that is running
Microsoft Office SharePoint Server 2007 must be:

-   A domain user account, not a group account.

-   A member of the **Farm
    Administrators** group.

-   A member of the local Administrators group on the
    encryption-key server.

-   A member of the **securityadmin** and 
    **db\_creator** roles on the instance of SQL Server
    that will host the single sign-on database.

-   Either the same account that is used as the 
    **Single Sign-On Administrator Account** or a
    member of the group account that is used as the 
    **Single Sign-On Administrator Account**.

To configure single sign-on: 

  1.  In SharePoint Central Administration, choose the 
      **Operations** tab.

  2.  Under **Security Configuration**, choose
      **Service accounts**.

  3.  On the Service Accounts page, in the **Credential
      Management** section, choose **Windows
      service**, and then choose **Single Sign-on
      Service** from the list of services.

  4.  In the **Select an account for this
      component** section, choose 
      **Configurable**.

  5.  Enter the user name and password of an account that you have
      configured to use as the sign-on account, and then choose 
      **OK**.

      > [!NOTE]
      > The service account that you specify requires special permissions and
      > has security implications. The account must have the permissions that
      > are required to log on interactively on this server and must be a member
      > of the Administrators group on the single sign-on server. For this
      > account, you should not specify the service account that you use for
      > SharePoint Products or a system account, such as Network Services. For
      > more information, see the following pages on the Microsoft website:
      > [Service Accounts and Dependencies in Team Foundation Server](service-accounts-dependencies-tfs.md), 
      > [Plan for administrative and service accounts](http://go.microsoft.com/fwlink/?LinkID=165826), 
      > [Single Sign-On Service](http://go.microsoft.com/fwlink/?LinkID=147676), and
      > [Start the Single Sign-On Service](http://go.microsoft.com/fwlink/?LinkID=147677).

  6.  Choose **Start**, 
      **Administrative Tools**, 
      **Services**.

  7.  In **Services**, open the shortcut menu for
      **Microsoft Single Sign-On Service**, and
      then choose **Properties**.

  8.  On the **General** tab, in 
      **Startup type**, choose 
      **Automatic**, choose 
      **Start**, and then choose 
      **OK**.

  9.  In SharePoint Central Administration, choose the 
      **Operations** tab.

  10. Under **Security Configuration**, choose
      **Manage settings for single sign-on**.

      > [!NOTE]
      > To open this page, you might need to log on with the account and
      > credentials that you configured in the previous step. In that case, you
      > should switch users or start another session and log on to the server
      > with that account. You should not log off your current user session. As
      > an alternative, you can try the **Sign In as a
      > Different User** function in SharePoint Central Administration, but
      > that function might not work for this operation. To try to use this
      > function, choose **Welcome **<span
      > *UserName* at the top of the window, choose <span
      > **Sign In As A Different User**, and then sign in with
      > that account.

  11. On the **Manage Settings For Single Sign-On**
      page, choose **Manage server settings**.

      The **Manage Server Settings for Single
      Sign-On** page appears.

  12. In **Single Sign-on Administrator Account**,
      enter the user name and password of an account that you have
      configured to use as the sign-on account.

      > [!NOTE]
      > The service account that you specify requires special permissions and
      > has security implications. The account must have the permissions that
      > are required to log on interactively on this server and must be a member
      > of the Administrators group on the single sign-on server. For this
      > account, you should not specify the service account that you use for
      > SharePoint Products or a system account, such as Network Services. For
      > more information, see the following pages on the Microsoft website:
      > [Service Accounts and Dependencies in Team Foundation Server](service-accounts-dependencies-tfs.md), [Plan for
      > administrative and service accounts](http://go.microsoft.com/fwlink/?LinkID=165826), [Single Sign-On Service](http://go.microsoft.com/fwlink/?LinkID=147676), and
      > [Start the Single Sign-On Service](http://go.microsoft.com/fwlink/?LinkID=147677).

  13. In **Enterprise Application Definition
      Administrator Account**, enter the user name of the person or
      group of people whom you want to assign as the manager or managers
      of enterprise application definitions on this server.

      You should consider creating and using a group that you will use for
      all members of the Team Foundation Administrators group.

  14. Leave the rest of the settings in their default configurations, and
      then choose **OK**.

  15. On the **Manage Settings For Single Sign-On**
      page, choose **Manage encryption key**.

  16. On the **Manage Encryption Key** page, choose
      **Create Encryption Key**.

  17. On the **Create Encryption Key** page, choose
      **OK**.

      > **Important:**
      > Make sure that you back up the encryption key to a secure location.

  18. Return to the **Manage Settings For Single
      Sign-On** page.

      > [!NOTE]
      > If you signed into SharePoint Central Administration with a different
      > user account to change the settings for single sign-on, you should
      > change back to a session that you are running with your own account.
      > After you make this change, the top two options disappear from the
      > **Manage settings for Single Sign-On** page.

  19. Choose **Manage settings for the enterprise
      application definitions**.

  20. On the **Manage Settings for the Enterprise
      Application Definitions** page, choose **New
      Item**.

      The **Create an Enterprise Application
      Definition** page appears.

  21. (Optional) In **Application and Contact
      Information**, in both **Display name**
      and **Application name**, enter 
      ```TFS```.

      This step is not required, but it can be useful for convenience in
      later identification.

  22. In **E-mail address**, enter the email
      address of the person or group to whom you want to email messages
      about this application to be sent.

  23. In **Account type**, choose 
      **Group**.

  24. In **Authentication type**, choose 
      **Windows Authentication**, and then choose 
      **OK**.

  25. Return to the **Manage Settings For Single
      Sign-On** page, and then choose **Manage
      account information for enterprise application definitions**.

      The **Manage Account Information for Enterprise
      Application Definitions** page appears.

  26. In the **Account information** section, in
      the **Enterprise account definition** list,
      choose the name of the enterprise account definition that you
      created to support Team Foundation Server.

      If you followed the suggested naming convention, the name will be
      **TFS**.

  27. In **Group account name**, enter the name of
      a global security group in the domain that contains all the users to
      whom you want to grant access to dashboards and reports in Team
      Foundation Server, and then choose **Set**.

  28. In **Provide Server Account Information**,
      enter the name and password for the report reader account (referred
      to with the placeholder *TFSReports*),
      and then choose **OK**.

  29. On the **Manage Account Information for Enterprise
      Application Definitions** page, choose 
      **Done**.

### Add a trusted file location for Excel Services

For reports to operate correctly, you must also configure the web
application that you created for Team Foundation Server to use a trusted
file location for Excel Services.

To add a trusted file location:

  1.  In SharePoint Central Administration, choose 
      **Home** to return to the home page for SharePoint
      Central Administration.

  2.  Under **Shared Services Administration**,
      choose the name of the shared service provider that you created.

      If you followed the suggested naming convention, this application
      will be called **SharedServices1**.

      The home page for administering the web application opens.

  3.  Under **Excel Services Settings**, choose
      **Trusted file locations**.

  4.  On the **Trusted File Locations** page,
      choose **Add trusted file location**.

      The **Excel Services Add Trusted File
      Location** page appears.

  5.  In **Address**, enter the URL of the root
      site of the web application that you will use with Team
      Foundation Server.

      You should specify the web application that you created in the 
      **Create a Web Application** section.

  6.  In **Location Type**, choose 
      **Windows SharePoint Services**.

  7.  In **Trust Children**, select the 
      **Children trusted** check box.

  8.  In the **External Data** section, under 
      **Allow External Data**, choose 
      **Trusted data connection libraries and embedded**.

  9.  (Optional) Clear the **Refresh Warning
      Enabled** check box.

  10. In **Maximum Concurrent Queries Per
      Session**, change the number to 20, make sure that the 
      **Refresh warning enabled** check box is cleared,
      and then choose **OK**.


### Set the access model

After you configure all the settings and services that Team Foundation
Server requires, you must configure the access model for the web
application for single sign-on for delegation. If you do not configure
the access model, Team Foundation Server and the web application cannot
interoperate.

To set the access model:

  1.  On the server that is running SharePoint Central Administration,
      open a Command Prompt window.

  2.  Change directories to %programfiles%\\Common Files\\Microsoft
      Shared\\Web Server Extensions\\12\\bin, and enter the following
      command:

      **stsadm -o set-ecssecurity -ssp** *SharedServiceProviderName* **-accessmodel delegation**

      *SharedServiceWebApplicationName* is the name of the shared service provider that you created. If you
      followed the suggested naming convention, this name of that provider
      is **SharedServices1**.

  3.  At the command prompt, enter ```iisreset``` to
      restart IIS.
