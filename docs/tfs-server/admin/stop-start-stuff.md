---
title: Stop and start services, application pools, and websites
description: Stop and start services, application pools, and websites
ms.assetid: 1c3471fc-6ecc-4e9f-b25b-748f70672134
ms.manager: douge
ms.author: elbatk
ms.date: 09/01/2016
ms.prod: vs-devops-alm
ms.technology: vs-devops-admin
ms.topic: get-started-article
---

# Stop and start services, application pools, and websites

**TFS 2015** | **TFS 2013**

For Visual Studio Team Foundation Server (TFS) to operate correctly, all required services, application pools, and Web sites must be running on the appropriate server. In single-server deployments, each component must run on the server that runs TFS. In multiple-server deployments, each component must run on the appropriate server. In addition, you might need to stop an element to perform a particular task, such as moving your deployment to a different set of hardware.

For operations such as backing up or restoring databases, you can run the [TFSServiceControl Command](../command-line/tfsservicecontrol-cmd.md) to start or stop all TFS services and application pools.

## To stop or start a service, application pool, or Web site

1.  If you’re not a member of the **Administrators** group on the server that hosts the service, application pool, or Web site that you want to manage, get added now. See [Set administrator permissions for Team Foundation Server](../add-administrator-tfs.md).

2.  Log on to the server that hosts the service, application pool, or Web site.

3.  Open **Computer Management**.

4.  In the navigation pane, expand **Services and Applications**.

5.  Perform one of the following steps based on what element you want to stop or start:

    -   For a service, open the navigation menu for the service, and then choose **Stop** or **Start**.

    -   For an application pool, open **Internet Information Services (IIS) Manager**, expand the local computer and open **Application Pools**. Open the navigation menu and choose **Stop** or **Start**.

    -   For a Web site, open **Internet Information Services (IIS) Manager**, expand the local computer, and open **Web Sites** or **Sites**. Open the navigation menu and then choose **Stop** or **Start**.

## Location of services, application pools, and web sites

The following table lists the server on which each service, application pool, and web site must be running. The Name column lists the display name for each element with service names in parentheses. Which services you need will vary based on which features of Team Foundation you have installed.

| Element | Location | Name |
| --- | --- | --- |
| Services | Application-tier server | Code Coverage Analysis Service </br> Internet Information Services Administration Service (IISADMIN) </br> HTTP SSL (HTTPFilter) </br> Visual Studio Team Foundation Build (VSTFBUILD) (only when Team Foundation Build is installed) </br> Visual Studio Team Foundation Background Job Agent (TFSJobAgent) </br> World Wide Web Publishing Service (W3SVC) |
| . | Server that hosts the databases for Team Foundation | SQL Server (<em>TFSINSTANCE</em>) </br> SQL Server Agent (<em>TFSINSTANCE</em>) (SQLSERVERAGENT) |
| . | Server that hosts SQL Server Reporting Services | IIS Admin Service (IISADMIN) </br> HTTP SSL (HTTPFilter) </br> SQL Server Reporting Services (<em>TFSINSTANCE</em>) (ReportServer) </br> World Wide Web Publishing Service (W3SVC) |
| . | Server that hosts SQL Server Analysis Services | SQL Server Analysis Services |
| . | Server that hosts SharePoint Products  | Internet Information Services Administration (IISADMIN) </br> HTTP SSL (HTTPFilter) </br> Windows SharePoint Services Timer (SPTimer) </br> World Wide Web Publishing Service (W3SVC) |
| Application pools | Application-tier server | TFS Application Pool </br> TFS Proxy Application Pool (only when Team Foundation Server Proxy is installed) |
| . | Server that hosts SharePoint Products | DefaultAppPool (used by the Team Project portal) </br> **Note**: The name might vary based on how SharePoint Products was installed. </br> SharePoint Central Administration v3 |
| Web sites | Application-tier server | Team Foundation Server </br> Team Foundation Server Proxy (only if Team Foundation Server Proxy is installed) |
| . | Server that hosts SharePoint Products | Default Web Site or Team Web site </br> **Note**: The name might vary based on how SharePoint Products was installed. </br> SharePoint Central Administration v3 |</tbody>


## Q & A

**Q: Which service account supports each service?**

**A:** [See Service accounts and dependencies in Team Foundation Server](service-accounts-dependencies-tfs.md).

**Q: Are there additional services that TFS supports?**

**A:** Yes, TFS includes a set of Web services and application-level services See [Team Foundation Server architecture](../architecture/architecture.md).

**Q: What services depend on service accounts?**

**A:** [See Service accounts and dependencies in Team Foundation Server](service-accounts-dependencies-tfs.md).

**Q: How do I change the TFS service account or password?**

**A:** See [Change the service account or password for Team Foundation Server](change-service-account-password.md).

**Q: How do I change the service account or password for SQL Server Reporting Service?**

**A:** See [Change the service account or password for SQL Server Reporting Services](change-service-account-or-password-sql-reporting.md).
