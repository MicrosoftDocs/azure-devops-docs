---
title: Configure Team Foundation Server using the basic configuration
description: Configure Team Foundation Server using the basic configuration
ms.assetid: c76177bf-0530-4a49-ac13-8d5153036046
ms.manager: douge
ms.author: elbatk
ms.date: 09/01/2016
ms.prod: vs-devops-alm
ms.technology: vs-devops-admin
---

# Configure Team Foundation Server using the basic configuration

**TFS 2013**

![](../_img/ic552206.png)

You can configure Team Foundation Server to use the basic configuration, which enables you to use SQL Server Express. 

> [!TIP]
> You can access the Team Foundation Server Configuration tool by launching Team Foundation Server Administration Console, choosing **Application Tier**, and then choosing **Configure Installed Features**.

**Required Permissions**

To perform this procedure, you must be a member of the **Administrators** security group on the server that is running Team Foundation Server. 

### To configure Team Foundation Server by using the basic configuration

1.  In the Team Foundation Server Configuration tool, choose **Basic**, **Start Wizard**.

2.  Read the Welcome screen and decide whether to participate in the program.

3.  Choose **Install SQL Server Express** to host the configuration database on an instance of SQL Server Express.

	> [!TIP]
	> You don’t have to use SQL Server Express. You can also choose **Use an existing SQL Server Instance ** and then type the name of the server that is running a supported version of SQL Server or the named instance that will host the configuration database in **SQL Server Instance**. Choose **Test** to test the connectivity to SQL Server.

4.  Review your configurations settings and then choose **Next**.

    The wizard validates your configuration. If you run into a problem, you can use the detailed results to identify the issue. If you can, fix the issue, and then choose the link to run the ready checks over again. If you resolved the problem, you’ll be able to configure TFS in the next step.

5.  Choose **Configure**.

    The wizard applies configuration settings. After the wizard completes, close it.

	> [!TIP]
	> Did you get error TF255356 you tried install TFS Basic or Express? It’s a misleading error message. Read this blog post to recover: [TF255356: Known Issue with Configuring TFS 2013 RTM Express and Basic](http://blogs.msdn.com/b/visualstudioalm/archive/2013/12/04/known-issue-with-configuring-tfs-2013-rtm-express-and-basic.aspx)

6.  In the TFS Configuration tool, choose **Configure Team Foundation Build Service**, **Start Wizard**.

7.  Read the Welcome screen, and then choose **Next**. The build service will automatically connect to TFS.

    If you connect to a collection that previously hosted resources for the build service on this server, you're prompted to restore your settings. If you want the same number of controllers and agents, choose **Yes** and then skip to step 9. (If you're upgrading from TFS 2012 or later, we'll save any other build service customizations you made, too.) If you want to configure this build server with different resources, choose **No**.

8.  Choose Use the default setting and specify one build agent.

9.  Choose **Use a system account** to run the build service as Network Service or Local Service.

	> [!TIP]
	> You can also run the build service as a domain or local account. Enter the account name and password and choose **Test**.

10. Review your settings and then choose **Next**. If you run into a problem, use the detailed results to fix the issue, and then run the checks again.

11. Choose **Configure**.

    The wizard applies configuration settings. After the wizard completes, close it.

    The Team Foundation Server Administration Console appears.

> [!TIP]
> After you set up TFS and the build service, the next thing to do is [create a team project](../../../accounts/create-team-project.md).

## See Also

[Install Team Foundation Server](../get-started.md) 
