---
title: Configure Team Foundation Server using the advanced configuration
description: Configure Team Foundation Server using the advanced configuration
ms.assetid: f4c1e81f-d792-4035-be2d-8e034da27b24
ms.manager: douge
ms.author: elbatk
ms.date: 09/01/2016
ms.prod: vs-devops-alm
ms.technology: vs-devops-admin
---

# Configure Team Foundation Server using the advanced configuration

**TFS 2013**

The advanced configuration for Team Foundation Server lets you customize most settings. Although you can run the advanced configuration on either a client or a server operating system, if you use a client, you won’t be able to add a portal or reporting to your deployment.

![Installing on more than one server](../../admin/_img/ic665322.png)

If you use advanced on a client operating system, you don’t need any domain accounts. On a server, you must have at least one domain account, which you can use for all of the following identities:

-   The service account for Team Foundation Server.  
-   The report reader account for creating HTML reports.  
-   The service account for new installations of SharePoint Foundation.

For more information about accounts, see [Accounts required for installation of Team Foundation Server](../../requirements.md#accounts).

> [!TIP]
> Access the Team Foundation Server Configuration tool by launching Team Foundation Server Administration Console, choosing **Application Tier**, and then choosing **Configure Installed Features**.

**Required permissions**  
You must be a member of the **Administrators** security group on the server on which you will install TFS. If you plan to configure reporting, you must also be a member of the **Administrators** security group on the server that is running SQL Server Reporting Services. If you plan to configure SharePoint, you must be a member of the **Farm Administrators** group on the SharePoint administration site. If you did not install the Database Engine that will host the configuration database or a database administrator manages the instance of SQL Server that you are using, you must be a member of **sysadmin** Server role in SQL Server.

> [!TIP]
> If you or your database administrator want a better understanding of the required SQL Server permissions, see the following page on the Microsoft website: [Database Permissions Required to Configure TFS](https://blogs.msdn.microsoft.com/bharry/2010/08/20/database-permissions-required-to-configure-tfs/).

### To configure Team Foundation Server using the advanced configuration

1.  In the Team Foundation Server Configuration tool, start the advanced wizard and read the Welcome screen.

    ![Choose Advanced](../../admin/_img/ic676478.png)

2.  In **SQL Server Instance**, type the name of the server that is running SQL Server or the named instance that will host the configuration databases.

    ![Specify a database server](../../admin/_img/ic742581.png)

    You also have these options:

    -   Select **This instance is a SQL AlwaysOn Availability Group** to specify that the SQL Server instance is an Availability Group Listener (AGL) and its availability group will host the TFS databases created during set up. See [Use SQL Server 2012 Always On Availability Groups with Team Foundation Server](../sql-server/use-always-on-groups.md).

    -   In **Server Database Label**, type a label string, which is then embedded into all three of the default database names.

        This technique enables you to use a single instance of SQL Server to host multiple configuration databases.

    -   Select the **Use pre-existing empty database(s) **check box, and then specify databases that are hosted on the server that is named in **SQL Server Instance**.

        You must create names for these databases by using the default naming structure, with or without a label. You can find the default naming structure under **Team Foundation Server Databases**.

    -   Test the connectivity to SQL Server.

    ![Specify any optional database server details](../../admin/_img/ic676480.png)

3.  Choose **Use a system account**. To use a domain or local account, choose **Use a user account**. User accounts require a password. To test the user account and password combination, choose **Test**.

    ![Specify a system account](../../admin/_img/ic742582.png)

    Network Service is the default value for the TFS service account.

    > [!TIP]
    > If your report server and SharePoint servers are not installed on the same server as TFS, you should add the account you use here to the Farm Administrators group (for SharePoint) and the content manager group on the report server. If you’re installing TFS on the same server as the report server and SharePoint, this account is added to these groups automatically.

4.  Choose **NTLM** as an **Authentication Method**. If you choose **Negotiate (Kerberos)**, Kerberos authentication is attempted first. If that attempt fails, NTLM authentication is used.

    ![Specify authentaication](../../admin/_img/ic676482.png)

    NTLM is the default setting.

5.  Accept the default **Port** number. Otherwise, enter a different one. This is the port number clients will use to connect to TFS.

    ![Specify listener port](../../admin/_img/ic742583.png)

    The default value for **Port** is **8080**.

6.  Set up your file cache location. Make sure you have at least 50 Gb of free space. If you use a drive other than your Windows drive, TFS will perform better.

    ![File cache folder](../../admin/_img/ic752293.png)

7.  Accept the default virtual directory or specify something else.

    ![Specify virtual directory](../../admin/_img/ic677247.png)

    The default value for **Virtual Directory** is **tfs**.

8.  Under **Web Site**, note the TFS Site URL, which is dynamically assembled based on your input in **Port** and **IIS Virtual Directory**. Developers will use this URL to connect to TFS.

    ![Take note of the site URL.](../../admin/_img/ic676485.png)

    On a client operating system, you must skip to step 10. You can’t add a portal or reporting (steps 8 and 9) on a client operating system.

9.  Choose **Configure Reporting for use with Team Foundation Server** to use reporting. Otherwise, clear the check box to skip it.

    ![Choose to configure reporting](../../admin/_img/ic742585.png)

    1.  Type the name of the server that is running SQL Server Reporting Services in **Reporting Services Instance** and choose **Populate URLs.**

        The URLs for the report server and its management site appear in the drop-down lists for **Report Server URL** and **Report Manager URL**.

        ![Choose Populate URLs](../../admin/_img/ic742586.png)

    2.  Make sure that the values displayed are the URLs that you want to use for TFS.

        ![Double check you have the right URLs](../../admin/_img/ic676488.png)

    3.  Type the name of the server that is running SQL Server Analysis Services in **SQL Analysis Services Instance**.

        To test the connectivity to SQL Server, choose **Test**.

        ![Specify the instance of Analysis servies](../../admin/_img/ic676780.png)

    4.  Type the name and password of the report reader account. To test the user account and password combination, choose **Test**.

        ![Specify the report reader](../../admin/_img/ic742587.png)

        > [!TIP]
        > If you specified a user account for the service account of TFS in step 3, you must select the **Use a different account than the Team Foundation Server service account for the report reader account** check box to use a different account.

10. Choose **Configure SharePoint Products for use with Team Foundation Server** to use SharePoint. Otherwise, clear the check box to skip it.

    ![Choose to configure SharePoint](../../admin/_img/ic742588.png)

    If you chose to configure SharePoint, then you have two choices—either install and configure SharePoint on this machine or specify a SharePoint location. Here are the details:

    -   Install and configure SharePoint on this machine

        1.  Choose **Install and configure SharePoint on this machine**.

            ![Choose to install SharePoint](../../admin/_img/ic742589.png)

        2.  Choose the big **Install SharePoint Foundation 2013** button. When the install finishes, choose **Next**.

            ![Choose the big button](../../admin/_img/ic676784.png)

            > [!NOTE]
            > If the SharePoint installation requires a reboot, you might need to reenter some of the information you previously entered in this wizard.

        3.  Type a user account and password for the service account for SharePoint Foundation. If you specified a user account for the service account of TFS in step 3, you must select the **Use a different account than the Team Foundation Server service account for the SharePoint farm** check box to use a different account.

            ![Use the report reader account](../../admin/_img/ic742590.png)

    -   Specify a SharePoint location

        1.  Choose **Specify a SharePoint location** and then choose **Next**.

        2.  In **Site URL**, type the URL for the SharePoint web app.

        3.  In **Administration URL**, type the URL for the SharePoint Central Administration site. To test connectivity to each of these URLs, choose **Test**.

11. Select the **Create a new team project collection** check box to create a collection, or clear that check box to skip that step.

    If you create a collection, accept the default values, or type a new name and description.

    ![Create a new team project collection](../../admin/_img/ic742591.png)

12. On the **Review** page, review the settings, and choose **Next** to let the wizard validate your configuration.

    ![Readiness checks validate your system](../../admin/_img/ic742592.png)

    If you run into a problem, you can use the detailed results to identify the issue. If you can, fix the issue, and then choose the link to run the ready checks over again. If you resolved the problem, you’ll be able to configure TFS in the next step.

    ![Use detailed results to troublshoot any problems](../../admin/_img/ic676788.png)

13. Choose **Configure**.

    The wizard applies configuration settings. This process might take several minutes.

    ![The wizard applies your configurations](../../admin/_img/ic742593.png)

14. At the success screen, choose **Next**. Review the results of the next success screen, including the connection URL for TFS and any details about the installation.

    ![Take note of your connection URL](../../admin/_img/ic742594.png)

15. Choose **Close**. In the TFS Configuration Center, note that TFS extensions for SharePoint have already been installed, if you installed TFS and SharePoint on the same server.

    ![Configuration results](../../admin/_img/ic677249.png)

    After you close the TFS Configuration Center, the Team Foundation Server Administration Console appears.

## See Also

[How to: Set up remote SharePoint Products for Team Foundation Server](../sharepoint/setup-remote-sharepoint.md)  

[Set up Team Foundation Build Service](https://msdn.microsoft.com/en-us/library/ee259687(v=vs.120).aspx)
