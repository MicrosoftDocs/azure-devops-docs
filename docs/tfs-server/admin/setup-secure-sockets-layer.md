---
title: Setting up HTTPS with Secure Sockets Layer (SSL) for Team Foundation Server
description: Setting up HTTPS with Secure Sockets Layer (SSL) for Team Foundation Server
ms.assetid: 27540d50-ac8a-46e1-a98e-baee43ed98a3
ms.manager: douge
ms.author: elbatk
ms.date: 08/31/2016
ms.prod: vs-devops-alm
ms.technology: vs-devops-admin
---

# Setting up HTTPS with Secure Sockets Layer (SSL) for Team Foundation Server

**TFS 2015** | **TFS 2013**

You can strengthen the security of your deployment of Visual Studio Team Foundation Server (TFS) by configuring it to use Hypertext Transfer Protocol Secure (HTTPS) with Secure Sockets Layer (SSL). You can choose either to require this protocol, which maximizes the security of your deployment, or you can choose to support HTTPS with SSL in addition to the default protocol, HTTP. If you use Release Management for Visual Studio 2013, you can also configure that to use HTTPS with SSL, although you cannot configure it to support both HTTP and HTTPS with SSL.

Before you choose a configuration, review the advantages and disadvantages described here. After you identify the configuration that best meets the security needs of your organization, follow the steps in this topic to configure your deployment.

## In this topic

-   **Conceptual information**

    -   [Advantages of Supporting HTTPS with SSL in Addition to HTTP](#advantages-supporting-tfs-ssl)

    -   [Advantages of Requiring HTTPS with SSL for All Connections](#advantages-requiring-https)

    -   [Disadvantages of Supporting or Requiring HTTPS with SSL](#disadvantages-supporting-https)

    -   [Prerequisites](#prereqs)

    -   [Assumptions](#assumptions)

-   **Server configuration**

    -   [Obtaining a Certificate](#obtaining-certificate)

    -   [Requesting, installing, and configuring websites with a certificate](#request-install-config-websites)

    -   [Configuring Your Firewall](#config-firewall)

    -   [Configuring SQL Server Reporting Services](#config-sql-svr-reporting)

    -   [Configuring HTTPS for TFS](#config-https)

-   **Optional configuration tasks**

    -   [Testing Access to Your Deployment (Optional)](#test-access-to-deployment)

    -   [Configuring Your Deployment to Require HTTPS with SSL (Optional)](#config-deply-require-https)

-   **Build configuration**

    -   [Installing the Certificate on Build Servers](#installing-certificats-build-svrs)

    -   [Updating the Build Configuration](#updating-build-configs)

-   **Release Management configuration**

    -   [Release Management and TFS](#release-mgt-tfs)

    -   [Configure Release Management Server to use HTTPS](#config-release-mgt-server)

    -   [Making all the Release Management connections with HTTPS](#making-release-mgt-conn)

-   **Client configuration**

    1.  [Configuring Client Computers](#config-client-computers)

-   **Git repository configuration**

    1.  [Configuring Git for certificates](#config-git)

<a name="advantages-supporting-tfs-ssl"></a>
## Advantages of Supporting HTTPS with SSL in Addition to HTTP

If you configure your deployment of TFS to support both protocols, users whose computers have been configured for HTTPS with SSL will connect by using that protocol, which makes your deployment more secure. In addition, users whose computers are configured for HTTP only can still connect to your deployment. Although you should not deploy this configuration over public networks, you can gain the following advantages by continuing to support HTTP connections in a controlled network environment:

-   You can increase the security of your deployment over time by configuring client computers for HTTPS with SSL as your schedule permits. If you take a phased approach, you do not need to upgrade all computers at the same time, and users whose computers have not yet been upgraded can still connect to the deployment.

-   You can more easily configure and maintain Team Foundation Server.

-   Calls from one Web service to another are faster over HTTP than over HTTPS with SSL. Therefore, you can continue to support HTTP connections from client computers for which the performance requirements outweigh the security risks.

<a name="advantages-requiring-https"></a>
## Advantages of Requiring HTTPS with SSL for All Connections

If you require HTTPS with SSL for all connections, you gain the following advantages:

-   All web connections between the application tier, the data tier, and the client tier for Team Foundation are more secure because they require certificates.

-   You can control access more easily by configuring certificates to expire when a project phase is expected to end.

<a name="disadvantages-supporting-https"></a>
## Disadvantages of Supporting or Requiring HTTPS with SSL

Before you configure TFS to support or require HTTPS with SSL, you should consider the following disadvantages:

-   You might complicate ongoing administration tasks. For example, you might have to reconfigure your deployment to stop supporting HTTPS with SSL before you can apply service packs or other updates.

-   You must not only configure but also manage a certification authority (CA) and certificate trusts. You can use Certificate Services in Windows Server 2003 and Windows Server 2008, but you might not want to invest the time and resources that deploying a secure public key infrastructure (PKI) requires.

-   You must spend significant time setting up and testing either of these configurations, and troubleshooting your deployment will become more difficult.

-   If you continue to support both protocols, external connections might not be encrypted if the application tier for Team Foundation is not appropriately secured.

-   If you require HTTPS with SSL, your deployment's performance will be slower.

## Configuring Your Deployment to Support or Require HTTPS with SSL

The procedures in this topic describe one process for requesting, issuing, and assigning certificates that are required for SSL connections in TFS. If you are using different software than what this topic describes, you might need to perform different steps. To support external connections to your TFS deployment, you must also enable Basic authentication, Digest authentication, or both in Internet Information Services (IIS).

By following the procedures in this topic, you will accomplish the following tasks:

1.  Obtain certificates for your deployment of Team Foundation Server and the websites that it uses.

2.  Install and assign the certificates.

3.  Configure Team Foundation Server.

4.  Configure Team Foundation Build.

5.  Configure Release Management for Visual Studio 2013

6.  Configure client computers.

<a name="prereqs"></a>
## Prerequisites

To perform the procedures in this topic, you must first meet the following requirements:

-   The logical components in the data and application tiers of Team Foundation must be installed, although in the case of TFS itself, not necessarily configured. These tiers include IIS, SQL Server, and any additional components you might have integrated, such as SharePoint Products, Team Foundation Build, Release Management and SQL Server Reporting Services.

    The procedures in this topic refer to the server or servers that are running the logical components in the application tier for Team Foundation and the data tier for Team Foundation. The application and data tiers might be running on the same server or multiple servers, as described in [Team Foundation Server install guide](../install/get-started.md).

-   You must have a certification authority (CA) from which you can issue certificates, or have subscribed to a third-party certifying authority with a trusted chain. This topic assumes that you are using Certificate Services as your CA, but you can use any CA that you have configured for your deployment, or certificates from a trusted third-party certification authority. If you do not have a certification authority, you can install Certificate Services and configure one. For more information, see the one of the following sets of documentation on the Microsoft website:

    -   For Windows Server 2012: [Active Directory Certificate Services](https://technet.microsoft.com/library/hh831740.aspx)

    -   For Windows Server 2008: [Active Directory Certificate Services and Public Key Management](http://go.microsoft.com/fwlink/?LinkId=199272)

**Required Permissions**

 * You need to be an administrator to configure all the components of your deployment for HTTPS and SSL. If you work in a distributed deployment where different people have administrative permissions for individual components, such as SharePoint, you'll need to coordinate with those people to complete configuration.

 * Specifically, you must belong to the **Team Foundation Administrators** group, and you must belong to the **Administrators** group on the application-tier, data-tier, and TFS Proxy server or servers for Team Foundation. 

 * To configure a build server, you must belong to the **Administrators** group on that server. 
 
 * To configure Release Management, you must belong to the **Administrators** group on the server that hosts Release Management Server and be a member of the **Release Manager** role in Release Management. 
 
 * If your deployment uses SharePoint Products, you must belong to the **Administrators** group on the server that hosts SharePoint Central Administration. You must also belong to the **Farm Administrators** group. 
 
 * If your deployment uses reporting, you must be a member of an administrative security group or have equivalent permissions individually set for configuring reporting services. 
 
 For more information about permissions, see [Permission reference for Team Foundation Server](../../security/permissions.md).

<a name="assumptions"></a>
## Assumptions

The procedures in this topic assume that the following conditions are true:

-   The data-tier and application-tier server or servers have been installed and deployed in a secure environment and configured according to security best practices.

-   You have installed Release Management for Visual Studio 2013.

-   You are familiar with how to configure and manage PKIs and requesting, issuing, and assigning certificates.

-   You have a working knowledge of the network topology of the development environment, and you are familiar with configuring network settings, IIS, and SQL Server.

<a name="obtaining-certificate"></a>
## Obtaining a certificate

Before you configure TFS to use HTTPS with SSL, you must obtain and install a server certificate for the servers in your deployment. To obtain a server certificate, you must install and configure your own certification authority, or you must use a certification authority from an external organization that you trust (third-party certificates).

For more information about how to install a certification authority, see the following topics on the Microsoft website:

-   For Windows Server 2012: [Deploying an AD CS Two-Tier PKI Hierarchy](https://technet.microsoft.com/library/hh831348.aspx)

-   For Windows Server 2008: [Active Directory Certificate Services and Public Key Management](http://go.microsoft.com/fwlink/?LinkId=199272)

<a name="request-install-config-websites"></a>
## Requesting, installing, and configuring websites with a certificate

After you enlist in a certification authority, you must either request a certificate by using IIS Manager, or you must manually install the certificate on each of the following servers in your deployment:

-   Each application-tier server.

-   Each server that is running Team Foundation Server Proxy, if any are configured for your deployment.

-   Each server that is running Team Foundation Build Service as either a build controller or a build agent, if any are configured for your deployment.

-   Each server that is running Release Management Server, or any servers¹ in a release environment that are running the deployment agent, if Release Management is part of your deployment.

-   Each server that is running SharePoint Products, if SharePoint Products is configured for your deployment.

    > [!NOTE]
    > Configuring a SharePoint site to use HTTPS and certificates often requires additional steps, such as [configuring alternate access mappings](https://technet.microsoft.com/library/cc263208(v=office.15).aspx) and [configuring authentication infrastructure](https://technet.microsoft.com/library/jj219795(v=office.15).aspx). For more information, consult the latest SharePoint documentation for your version of the product.

-   The server that is running Reporting Services, if one is configured for your deployment.

In addition, the client computers in your deployment will need to be enrolled in the certificate chain and request the needed certificate. If you’re using Release Management, this includes any computers running the Release Management client, as well as any clients¹ running the deployment agent in your release environments. If one or more of your projects uses Git for version control, users in those projects will also have to configure Git on their computers to recognize and use the client certificate. For information about how to request a client certificate from a specific CA, see the documentation for that certification authority.

¹ Clients and servers are called out separately here, but that’s just a convention of this document. Any computer running the deployment agent needs the certificate installed.

1.  Open **Internet Information Services (IIS) Manager**.

2.  Expand your server, navigate to **Server Certificates**, and create and complete your certificate request.

    ![Open IIS Manager and request a certificate](_img/ic728993.png)

    ![Create a request, then complete it](_img/ic712598.png)

    For more information, see [Configuring Server Certificates in IIS](http://go.microsoft.com/fwlink/?LinkId=201844).

3.  Import the certificate.

4.  Now you need to configure each website that will require this certificate with the appropriate settings, (with the exception of the Release Management website, which you will configure later). Specifically, you'll need to do this for each of the following websites:

    -   Default Website

    -   Team Foundation Server

    -   TFS Proxy (if your deployment uses it)

    -   SharePoint Central Administration (if your deployment uses SharePoint)

    On each server that hosts a website that you want to configure, open **Internet Information Services (IIS) Manager**.

5.  Expand *ComputerName*, expand **Sites**, open the submenu for the website that you want to configure (for example, Team Foundation Server), and then choose **Bindings** from the Actions pane.

    ![You must configure bindings for all sites](_img/ic712599.png)

6.  In **Site Bindings**, choose **Add**.

    The **Add Site Binding** dialog box appears.

7.  In the **Type** list, choose **https**.

    In **Port**, type a different port number.

    > [!IMPORTANT]
    > The default port number for SSL connections is 443, but you must assign a unique port number for each of the following sites: Default Website, Team Foundation Server, TFS Proxy (if your deployment uses it), and SharePoint Central Administration (if your deployment uses SharePoint).</p>
    <p>You should record the SSL port number for each website that you configure. You will need to specify these numbers in the administration console for Team Foundation.

    In **SSL Certificate**, choose the certificate that you imported, and then choose **OK** and close the Bindings page.

    ![Make sure to choose a unique port number](_img/ic720089.png)

8.  On the **Home** page for the website that you are configuring, open the **Features** view.

9.  Under **IIS**, choose **Authentication**.

10. Choose an authentication method that you want to configure, open its submenu, and then enable, disable, or perform additional configuration on the method, as best meets your security needs. For example, if you wanted to disable anonymous authentication, you would choose the Anonymous Authentication method and the choose Disable from the Actions menu.

    ![Choose the method, and then the action to perform](_img/ic720090.png)

11. Once you have finished configuration, restart web services.

<a name="config-firewall"></a>
## Configuring Your Firewall

You must configure your firewall to allow traffic through the SSL ports that you just specified in IIS. For more information, see the documentation for your firewall.

> [!IMPORTANT]
> Make sure to test traffic on the ports you specified from another computer. If you cannot access the default website or Team Web Access, double-check the port settings you specified for these websites in IIS, and make sure that the firewall is configured appropriately to allow traffic on those ports.

<a name="config-sql-svr-reporting"></a>
## Configure SQL Server Reporting Services

If your deployment uses reporting, you must configure SQL Server Reporting Services to support HTTPS with SSL and to use the port that you specified in IIS for Team Foundation Server. Otherwise, the report server will not function correctly for your deployment. For more information, see [Configuring a Report Server for Secure Sockets Layer (SSL) Connections](https://technet.microsoft.com/library/ms345223(v=sql.110).aspx).

> [!TIP]
> If your deployment does not use reporting, you can skip this procedure.

<a name="config-https"></a>
## Configuring HTTPS for TFS

Follow these steps to configure your TFS deployment with the HTTPS ports and values that you configured in IIS for the default and Team Foundation Server websites.

### To reconfigure Team Foundation Server to use or require HTTPS

1.  Open the administration console for Team Foundation and browse to the application tier node.

2.  In **Application Tier Summary**, choose **Change URLs**.

    The **Change URLs** window opens.

3.  In **Notification URL**, type the HTTPS URL that you configured for the Team Foundation Server website in IIS.

    For example, you might have configured the website to use port 444. In this case, you type https://*ServerName*:444/tfs. Make sure that you use the fully qualified domain name of the server instead of localhost.

    ![Specify HTTPS, server, and port in the address](_img/ic712602.png)

4.  Choose **Test**. Don't choose **OK** if the test doesn't pass. Go back and make sure that you entered the correct URL and port information, that all firewalls are configured to allow traffic on those ports, and that the site is available and running in IIS Manager.

5.  To require HTTPS, choose **Use** in **Server URL**, and then type the HTTPS URL that you configured for the Team Foundation Server website.

    Make sure that you use the fully qualified domain name of the server instead of localhost.

6.  Choose **Test**, and then choose **OK** if the test passes.

7.  If your deployment uses SharePoint Products, choose **SharePoint Web Applications** in the administration console. Otherwise, skip the next six steps.

8.  In **SharePoint Web Applications**, in the **Name** list, choose a web application, and then choose **Change**.

    The **SharePoint Web Application Settings** page opens.

9.  In **Web Application URL**, change the URL to the HTTPS value for the application.

10. In **Central Administration URL**, change the URL to the HTTPS value for the Central Administration website.

11. (Optional) In **Friendly Name**, change the value to reflect the HTTPS address of this application.

12. Choose **OK**.

13. Repeat the previous five steps for every SharePoint web application in your deployment.

14. If your deployment uses Reporting Services, in the administration console, choose **Reporting**. Otherwise, skip the rest of this procedure.

15. In **Reporting**, choose **Edit**.

    If the **Take Offline** dialog box opens, choose **OK**.

    The **Reporting** window opens.

16. Choose the **Reports** tab. In **URLs for Report Server**, type the HTTPS URLs for **Web Service** and **Report Manager**, and then choose **OK**.

<a name="test-access-to-deployment"></a>
## Test Access to Your Deployment

You should test whether your changes are functioning as you expect. This step is optional but strongly recommended.

### To test access to your deployment

1.  On a computer that does not host the application tier, open a web browser and navigate to a team home page.

2.  Verify whether you can access your teams and projects from Team Web Access, including the administration pages.

3.  If you cannot access your deployment through Team Web Access, review the steps that you just completed, and make sure that you have made all configuration changes correctly.

<a name="config-deply-require-https"></a>
## Configuring Your Deployment to Require HTTPS with SSL (Optional)

You can require all connections to the TFS application tier to use HTTPS with SSL. This additional security is optional but recommended.

### To require SSL connections

1.  On the server that hosts the website that you want to configure, choose **Start**, choose **Administrative Tools**, and then choose **Internet Information Services (IIS) Manager**.

2.  Follow the appropriate steps for your version of IIS:

    **For deployments that use IIS 7.0:**

    1.  Expand *ComputerName*, expand **Web Sites**, and then choose the website that you want to configure.

    2.  On the home page for that website, choose **SSL Settings**.

    3.  In the **SSL Settings** pane, select the **Require SSL** check box.

        (Optional) Select the **Require 128-bit SSL** check box.

    4.  In **Client Certificates**, choose **Ignore**, **Accept**, or **Require**, depending on the security requirements of your deployment.

    5.  In **Actions**, choose **Apply**.

    6.  Repeat these steps for each website for which you want to require SSL.

<a name="installing-certificats-build-svrs"></a>
## Installing the Certificate on Build Servers

If you installed Team Foundation Build Service on one or more servers, you must install the certificate in the Trusted Root Certification Authorities store of each server. For more information, see [Obtaining a Certificate](#obtaining-certificate) and [Requesting, installing, and configuring websites with a certificate](#request-install-config-websites) earlier in this topic. Both the controller and the agent require a certificate with a private key with which to identify themselves in HTTPS connections.

> [!NOTE]
> To perform builds over SSL, the certificate must be installed in the trusted root store on both the build controller and the build agent.

<a name="updating-build-configs"></a>
## Updating Build Configurations

To configure Team Foundation Build for SSL connections, you must configure the build service to use the HTTPS URL that you configured for the application tier and the collection that the build configuration supports. You must configure this URL for each build configuration in your deployment.

### To change a build configuration to use HTTPS

1.  On the server that hosts the build configuration that you want to configure, open the administration console for Team Foundation.

2.  Under **Team Foundation**, expand the name of the server, and then choose **Build Configuration**.

    The **Build Configuration** pane appears.

3.  Under the service configuration, choose **Stop**, and then choose **Properties**.

    The **Build Service Properties** dialog box opens.

4.  In **Communications**, make sure that the URL for the team project collection is using the correct HTTPS address and full server name.

5.  In **Local Build Service Endpoint (incoming)**, choose **Change**.

    The **Build Service Endpoint** dialog box opens.

6.  In **Endpoint Details**, verify that the port number matches your configuration details.

7.  In **Protocol**, choose **HTTPS**.

8.  In the **SSL Certificates** list, choose the certificate that you installed and configured for use with this deployment, and then choose **OK**.

    ![Make sure the configuration details match](_img/ic712603.png)

9.  In the **Build Service Properties** dialog box, choose **Start**.

<a name="release-mgt-tfs"></a>
## Release Management and TFS

You can deploy Release Management with HTTPS completely separate from TFS, regardless of the protocol you’re using for TFS, or if you’re using TFS at all. However you decide to deploy Release Management, the instructions for creating a secure deployment for Release Management are very similar to what’s set down here for TFS. The big difference is the procedure for binding the HTTPS protocol to the Release Management website, which is covered below.

To deploy Release Management with HTTPS, use the task list below. If you’re configuring Release Management with TFS, skip over any tasks you might have already completed for TFS configuration.

1.  Obtain a certificate. For more information, see [Obtaining a Certificate](#obtaining-certificate).

2.  Configure Release Management Server to use HTTPS. See the next section, [Configure Release Management Server to use HTTPS](#config-release-mgt-server).

3.  Install the certificate in the trusted root store of any computer running Release Management Client or the Microsoft Deployment Agent. For more information, see [Configuring Client Computers](#config-client-computers) below.

4.  Open any firewalls. After you install the certificates, make sure to open any ports you used for SSL traffic. For more information, see [Configure Your Firewall](#config-firewall).

5.  Test. The website for Release Management Server is not configured for browsing, so to test that it’s available, you should connect to it with Release Management Client, connect the agents in your environment and then make a release. For more information, see [Making all the Release Management connections with HTTPS](#making-release-mgt-conn) and [Manage your release](../../build-release/archive/release/previous-version/manage-your-release.md).

<a name="config-release-mgt-server"></a>
### Configure Release Management Server to use HTTPS

Release Management supports either the HTTPS or HTTP protocol but not both protocols at the same time. Use this procedure to bind the HTTPS protocol to the Release Management website.

1.  In Release Management Server, select **HTTPS**, enter the port number you want to use for HTTPS traffic in **Web service port**, and then choose **Apply settings**.

    ![Configure Release Managment Server for HTTPS](_img/ic729494.png)

2.  Open **Internet Information Services (IIS) Manager**.

3.  Expand *ComputerName*, expand **Sites**, open the submenu for the Release Management website, and then choose **Bindings** from the Actions pane.

4.  In **Site Bindings**, choose **Add**.

5.  In the **Type** list, choose **https**.

6.  In **Port**, type a different port number. This is a just temporary port number necessary to complete the configuration.

    ![Add a temporary port](_img/ic729495.png)

7.  In **SSL Certificate**, choose the certificate you will use, and then choose **OK** and close the Bindings page.

    You see the original HTTP binding, and the HTTPS binding you just created.

8.  Select the original HTTP binding and choose **Remove**.

9.  Select the HTTPS binding and choose **Edit**.

10. Change **Port** from the temporary value you added in step 6, to the port number you used in the Release Management Server in step 1, and then choose **OK** and **Close**.

    ![Edit the temporary port](_img/ic729496.png)

    The HTTPS port binding on the Release Management website in IIS matches the port that you originally entered in Release Management Server configuration tool.

    ![Port in IIS matches port in server](_img/ic729692.png)

<a name="making-release-mgt-conn"></a>
### Making all the Release Management connections with HTTPS

Once the certificates have been installed on all the computers running Release Management Client and Microsoft Deployment Agent, you can connect the computers to the Release Management Server over SSL. If TFS is running HTTPS with SSL, you must configure the TFS connection to use HTTPS.

Setting up a TFS connection for the first time? There are some additional steps and some account permission requirements. For more information, see [Connect Release Management to TFS](../../build-release/archive/release/previous-version/install-release-management/connect-to-tfs.md)

### Connect Release Management Client to Release Management Server using HTTPS

1.  Launch the Release Management Client.

    > [!TIP]
    > If you get an error message saying you no longer have access to the server, you can reinstall the Release Management client, or you can use a command line tool to point the client to the server using the new port and protocol. For more information, see this [blog post](http://blogs.msdn.com/b/visualstudioalm/archive/2014/04/02/did-you-uninstall-release-management-server-and-lose-access-to-the-release-management-client.aspx).

2.  Choose **Administration**, and then choose **Settings**.

3.  In **Release Management Server URL**, choose **Edit**.

4.  In the **Configure Services** dialog box, select HTTPS and enter the fully qualified domain name and the SSL port of the Release Management Server, and then choose **OK**. You’ll be prompted to restart the application.

![Connect client using HTTPS/SSL](_img/ic726408.png)

### Connect Microsoft Deployment Agent to Release Management Server using HTTPS

1.  Launch the Microsoft Deployment Agent.

2.  In **Release Management Server**, enter the URL for the Release Management Server and choose **Apply Settings**. Remember to use HTTPS protocol, the fully qualified domain name for the server, and the port you set up in IIS.

![Connect agent using HTTPS/SSL](_img/ic726728.png)

### Connect Release Management Server to TFS using HTTPS

1.  Launch the Release Management Client.

2.  Choose **Administration**, and then choose **Manage TFS**.

3.  Change the protocol of the connection to HTTPS, update the port (if necessary) and choose **Verify**.

![Connect to TFS using HTTPS/SSL](_img/ic728936.png)

<a name="config-client-computers"></a>
## Configuring Client Computers

On every client computer from which users access Team Foundation, you must install the certificate locally and clear the client cache for any user who has accessed Team Foundation from that computer. Otherwise, users will not be able to connect to Team Foundation from that computer. For more information, see [Manage Trusted Root Certificates](http://go.microsoft.com/fwlink/?LinkId=164939).

> [!IMPORTANT]
> Do not follow this procedure for computers that are running both Team Foundation Server and one or more clients of Team Foundation.

### To install the certificate on a client computer

1.  Log on to the computer by using an account that belongs to the **Administrators** group on that computer.

2.  Install the certificate into the Trusted Root Certification Authorities folder for the local computer.

### To clear the cache on a client computer

1.  Log on to the computer by using the credentials of the user whose cache you want to clear.

2.  Close any open instances of Visual Studio.

3.  In a browser window, open the following folder:

    *Drive* **:\\Users\\** *UserName* **\\AppData\\Local\\Microsoft\\Team Foundation\\4.0\\Cache**

4.  Delete the contents of the Cache directory. Make sure that you delete all subfolders.

5.  Choose **Start**, choose **Run**, type **devenv /resetuserdata**, and then choose **OK**.

6.  Repeat these steps for the account of every user who has accessed Team Foundation from that computer.

    > [!NOTE]
    > You might want to distribute instructions for clearing the cache to all of your Team Foundation users so that they can clear the caches for themselves.

### To connect client computers to the reconfigured deployment

-   In Visual Studio, connect to Team Foundation Server by using the new HTTPS URL.

    For more information, see [Connect to team projects in Team Foundation Server](../../user-guide/connect-team-projects.md).

<a name="config-git"></a>
## Configuring Git

By default, projects that use Git for version control will fail to validate the SSL certificate you have configured for TFS. This is because unlike TFS and Visual Studio, Git does not recognize the Windows certificate store. Instead, it uses OpenSSL for its certificate store. In order to use a Git repository for projects configured with SSL, you'll need to configure Git with the certificate at the root of the certification chain for your TFS 2013 deployment. This is a client configuration task that only applies to Git repository projects.

For more information about how Git network operations work in Visual Studio 2013, see this [blog post](http://blogs.msdn.com/b/phkelley/archive/2013/10/20/git-network-operations-in-visual-studio-2013.aspx).

> [!TIP]
> For other Git credential management tasks, such as Windows authentication, consider downloading and installing [Windows Credential Store for Git](http://gitcredentialstore.codeplex.com/).

### To configure the certificate store for Git

-   Log on to the computer by using an account that belongs to the **Administrators** group on that computer.

-   Make sure that the required certificate has been installed and configured on the computer, as per above.

-   In your supported web browser, extract the TFS root certificate as a base64-encoded X.509 CER/PEM file.

-   Create a private copy of the Git root certificate store and add that to your private user copy of the store.

For a full walkthrough of this procedure, including screenshots, see [Philip Kelley's blog](http://blogs.msdn.com/b/phkelley/archive/2014/01/20/adding-a-corporate-or-self-signed-certificate-authority-to-git-exe-s-store.aspx).

