---
title: How to Install Team Foundation Proxy and set up a remote site
description: How to Install Team Foundation Proxy and set up a remote site
ms.assetid: 21880717-de0c-4ded-8e07-92312d7f5216
ms.manager: douge
ms.author: elbatk
ms.date: 08/31/2016
ms.prod: vs-devops-alm
ms.technology: vs-devops-admin
---

# How to: Install Team Foundation Proxy and set up a remote site

**TFS 2013**

![Team Foundation Proxy](_img/ic588492.png)  
 
If you have developers at a remote site who are sharing code with developers at the main site, you might save bandwidth by caching version control files at the remote location. Team Foundation Server Proxy distributes popular version control files from its cache at the remote site, rather than having multiple developers from the remote site each download the same file from the main site. Your team at the remote site works like they always have, without managing which version control files get loaded into the cache.

To set this up, you install and configure the proxy server at the remote site, connect the proxy server to the application tier, and then connect the version control feature of Team Explorer to the proxy. Before you can start to cache files at the remote site, you must add the service account for the proxy server to Team Foundation Server at the main site.

## To cache version control files at a remote site

| | Task | Detailed instructions |
| --- | --- | --- |
| ![Step 1](_img/ic646324.png) | **Check for supported hardware and software**. Verify that the operating system meets requirements for Team Foundation Server Proxy and that the hardware can run it. | [System requirements for Team Foundation Server Proxy](../requirements.md#proxy-server) |
| ![Step 2](_img/ic646325.png) | **Set up Team Foundation Server Proxy**. Install Team Foundation Server Proxy. After the installation is finished, use the Team Foundation Server Configuration Tool to configure your proxy server. | [Run Team Foundation Server installation](install-2013/install-tfs.md#installer) <br/> [How to: Configure Team Foundation Server Proxy Using the Team Foundation Server Configuration Tool](#config--proxy-with-config-tool) |
| ![Step 3](_img/ic646326.png) | **Connect Team Explorer to Team Foundation Server Proxy**. After you configure the proxy server to connect to Team Foundation Server, you must configure Team Explorer to access version control files through the proxy server. | [How to: Configure Team Foundation version control to use Proxy server](#config-to-use-proxy) |


<a name="config--proxy-with-config-tool"></a>
## Configure Team Foundation Server Proxy Using the Team Foundation Server Configuration Tool

![](_img/ic588492.png)

You can use these procedures to configure Team Foundation Server Proxy.

>**Note:**  
>You can access the Team Foundation Server Configuration tool from the **Start** menu by launching Team Foundation Server Administration Console, choosing **Proxy Server**, and then choosing **Configure Installed Features**.

**Required permissions**: To follow this procedure, you must be a member of the **Administrators** security group on the server on which you are configuring Team Foundation Server Proxy. You must be a member of the Project Collection Administrators group on TFS. 

For VSTS you either need to be a collection admin or have manage proxy permissions on the Proxy namespace. You can grant that using:

> [!NOTE]
> You must have a proxy server at TFS 2017 Update 2 and newer to use the following command.

```no-highlight
tfssecurity /a+ Proxy Proxy Manage <user account> ALLOW /collection:{collection url}
```

<br />
To configure Proxy Server, you must have TFS installed on a server operating system. For more information, see [System requirements for Team Foundation Server](../requirements.md).

To configure Team Foundation Server Proxy by using Team Foundation Server Configuration tool, follow these steps:

1.  Choose **Configure Team Foundation Server Proxy**, and then choose **Start Wizard**.

    The Team Foundation Server Proxy Configuration wizard appears.

2.  Read the Welcome screen, and then choose **Next**. If you had a version of TFS 2013 proxy (this feature only works with TFS 2013 proxy and forward) set up on this server, you're prompted to restore your settings. If you want to configure this proxy server with different resources, choose **No** and move on to the next step. If you want to connect proxy to the same TFS servers, choose **Yes**. TFS will attempt to authenticate. If TFS successfully authenticates all endpoints, skip to step 4.

    If there is a problem with one or more endpoints, you have the following troubleshooting options for each failed connection:

    -   **Connect**: Use this option to manually authenticate endpoints. Manual authentication is a good place to start with any failed connection.

    -   **Skip**: Use this option to skip authentication. Skip is useful if you don't have the password to authenticate this endpoint, but you want to save the connection information for another try, sometime in the future, perhaps when you have someone available who knows the password and can authenticate the endpoint.

    -   **Remove**: Use this option to completely remove the endpoint.

	>**Tip:**  
	>Would you like more details about what happens with any of these options? See this [blog post](http://blogs.msdn.com/b/tfsao/archive/2013/06/27/how-to-verify-skipped-proxy-endpoints.aspx).

3.  Choose **Browse**, and then choose the team project collection to which you want this proxy server to connect. Choose **Next**.

	>**Note:**  
	>If your team project collection is on VSTS, you're prompted to authenticate. Enter the Microsoft account you used to set up the service.

4.  Under **Service Account**, choose **Use a system account** to use Network Service or **Use a user account** to use a domain or local account. If you are using a user account, you must type the password. To test the user account and password combination, choose **Test.**

    Network Service is the default value for the proxy server service account.

5.  The following optional configurations appear under **Advanced Configuration**:
    - If you're connected to the hosted service, **Account Name** appears here.

        When you created the instance of Team Foundation Server on the hosted service, Account Name was automatically created for you. This account will be added to the **Project Collection Proxy Service Accounts** group on the hosted service. To use a different account, enter the account name and choose **Test**. To reset to the default service account automatically created for you, choose **Reset to default service account**. *This is no longer applicable for TFS 2017 Update 2 and newer proxy servers.*

    -   You can change authentication settings. Under **Authentication Method**, choose **NTLM** to use NTLM authentication or **Negotiate (Kerberos)** to first attempt Kerberos authentication, the more secure option, and if that fails, fall back to NTLM.

        NTLM is the default value.

6.  Choose **Next**.

7.  In **Port**, accept the default value of 8081 or type a different listener port number for incoming connections to Team Foundation Server Proxy.

    8081 is the default value.

8.  In **Cache Root Directory**, accept the default value, or type the path of a different location in which to store cache files.

    The default value is *Drive*:\\Program Files\\TFS 12.0\\Version Control Proxy\\ \_tfs\_data

    *Drive* is the letter of the drive on which you want to store cache files. You can specify a mapped network drive.

9.  Choose **Next**.

10. On the Review page, review the settings, and then choose **Next**.

    The wizard validates your configuration.

11. Choose **Configure** for the wizard to apply configuration settings.

12. Choose **Next** on the success screen to read the detailed results on the next success screen. You will also find a link to a log on this screen that contains the results of the configuration.

13. Choose **Close** twice and the TFS administration console will appear.



<a name="config-to-use-proxy"></a>
## Configure Team Foundation version control to use Proxy server

You can configure Team Foundation version control to use a proxy server, which caches copies of version control files in the location of a distributed team. You may reduce bandwidth requirements for remote developers by using a proxy server.

To follow this procedure, you must be a member of the Users security group on the computer on which you are configuring Team Explorer. 

To configure Team Explorer to use Team Foundation Server Proxy:

1.Launch Visual Studio.

2.On the **Tools** menu, choose **Options**.

3.In the **Options** dialog box, expand **Source Control**, and then choose **Visual Studio Team Foundation Server**.

4.Select the **Use proxy server for file downloads** check box.

5.In the **Proxy server name box**, type the name of the server running Team Foundation Server Proxy.

6.In the **Port** box, type the listener port for Team Foundation Server Proxy. By default, Team Foundation Server Proxy listens for client requests on port 8081.



## Q&A

### Q: Is TFS 2013 Proxy backward compatible with previous versions of TFS?

**A**: Yes. TFS 2013 Proxy is fully compatible with TFS 2010 and TFS 2012. In fact, TFS Proxy 2010, TFS Proxy 2012, and TFS Proxy 2013 are fully compatible with one another in any combination. For example, you can use TFS Proxy 2010 with TFS Server 2013 or vice versa.

### Q: Does any version of TFS Proxy have cache cleanup improvements to support disks larger than 1 TB?

**A**: Yes. TFS Proxy 2012 and TFS Proxy 2013 have cache cleanup improvements to support large disks.

### Q: Does TFS Proxy 2013 have corruption detection logic?

**A**: Yes. If a cached file becomes corrupted on a disk after it was stored, TFS Proxy 2013 has logic to detect the corruption.

### Q: Does TFS Proxy 2013 fully support caching against VisualStudio.com?

**A**: Yes.

### Q: What happens to the proxy cache when I upgrade from one version of TFS to another?

**A**: If you upgrade from TFS Proxy 2010, TFS Proxy 2012, or TFS Proxy 2013, the cache is preserved during upgrade.  You will be able to continue accessing TFS from remote locations right away, without any performance impact, because TFS will not need to recreate or repopulate the cache.
