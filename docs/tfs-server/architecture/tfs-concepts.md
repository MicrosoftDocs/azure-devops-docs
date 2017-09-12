---
title: Team Foundation Server concepts
description: Describes several concepts related to Team Foundation Server
ms.assetid: cfe7f112-1f35-4df4-8bd3-8fc361db8248
ms.manager: douge
ms.author: elbatk
ms.date: 08/16/2016
ms.prod: vs-devops-alm
ms.technology: vs-devops-admin
---


# Components, terms, and key concepts

**TFS 2017** | **TFS 2015** | **TFS 2013**

To deploy and manage Visual Studio Team Foundation Server effectively, you must understand how it works and communicates with other components of Team Foundation. As an administrator for Team Foundation Server, you should be familiar with Windows authentication, network protocols and traffic, and the structure of the business network on which Team Foundation Server is installed. You should also have an understanding of groups and permissions in Team Foundation Server. You might also find an understanding of SQL Server, SQL Server Reporting Services, and SharePoint Products useful as you manage Team Foundation Server.

## Understanding components and terms  
 
You will be better able to plan, deploy, and manage Team Foundation Server if you understand the following components and terms:

* **Application tier, data tier, and client tier**: The logical tiers that compose Team Foundation Server. These tiers might all be deployed on the same physical computer, or they might be installed across multiple computers. For more information, see [Team Foundation Server architecture](architecture.md).

* **Team project collection**: The primary organizational unit for all data in Team Foundation Server. Collections can include one or more team projects. For more information, see [Manage team project collections](../admin/manage-team-project-collections.md).

* **Team project**: A central point for your team to share team activities that are required to develop a specific software technology or product. Team projects are organized in team project collections. For more information, see [Track work with Visual Studio devops and TFS](https://msdn.microsoft.com/en-us/library/dd286619(v=vs.120).aspx).

* **Team Foundation Server Administration Console**: The centralized management tool for TFS administrators to configure and manage resources. For more information, see [Configure and manage TFS resources](../admin/config-tfs-resources.md).

* **Service accounts**: The account or accounts that the Web services and applications in Team Foundation use. Team Foundation Server requires service accounts to perform operations across servers and Web services. These service accounts have specific requirements. For more information, see [Service accounts and dependencies in Team Foundation Server](../admin/service-accounts-dependencies-tfs.md).

* **SharePoint Products**: Software that provides support for team project portals and dashboards. You can include one or more SharePoint Web applications as part of your deployment of Team Foundation Server. To include one of these applications, you must install and configure Team Foundation Server extensions for SharePoint Products, and you must configure permissions across the deployment. For more information, see [Share information using the project portal](https://msdn.microsoft.com/en-us/library/ms242883(v=vs.120).aspx).

* **SQL Server and SQL Server Reporting Services**: Software that provides a database platform for data warehousing and a business intelligence platform for data integration, analysis, and reporting solutions. TFS stores its data in SQL Server databases. You can also optionally include a server that is running SQL Server Reporting Services and that automatically generates reports for team projects. For more information, see [Manage TFS reports, data warehouse, and analysis services cube](../../report/admin/manage-reports-data-warehouse-cube.md).


## Understanding Team Foundation Server Security  

To optimize the security of Team Foundation Server, you should understand the following concepts:

* [Topology](#topos), which includes where and how servers that are running components of Team Foundation are deployed, the network traffic that passes between Team Foundation Server and clients of Team Foundation, and the services that must run on Team Foundation Server.

* [Authentication](#auth), which includes the determination of the validity of users, groups, and services in Team Foundation Server.

* [Authorization](#authorization), which includes the determination of whether valid users, groups, and services in Team Foundation Server have the appropriate permissions to perform specific actions.


You should also consider the other components and services on which Team Foundation Server depends.

When you consider security for Team Foundation Server, you must understand the difference between authentication and authorization. Authentication is the verification of the credentials of a connection attempt from a client, server, or process. Authorization is the verification that the identity that is trying to connect has permissions to access the object or method. Authorization occurs only after successful authentication. If a connection is not authenticated, it fails before any authorization checking is performed. If authentication of a connection succeeds, a specific action might still be disallowed because the user or group was not authorized to perform that action.

<a name="topos"></a> 
### Topologies, Ports, and Services  

The first element of deployment and security for Team Foundation Server is whether the components of your deployment can connect to one another to communicate. Your goal is to enable connections between clients of Team Foundation and Team Foundation Server and to limit or prevent other connection attempts.

Team Foundation Server depends on certain ports and services so that it can function. You can secure and monitor these ports to help meet business security needs. You must permit network traffic for Team Foundation Server to pass between clients of Team Foundation, the servers that host the logical components of the application tier and the data tier for Team Foundation, computers for Team Foundation Build, and remote clients that are using Team Foundation Server Proxy. By default, Team Foundation Server is configured to use HTTP for its Web services. For a full list of ports and services that Team Foundation Server uses and how they are used within its architecture, see [Team Foundation Server architecture](architecture.md). 

You can deploy Team Foundation Server in an Active Directory domain or in a workgroup. Active Directory provides more built-in security features than workgroups provide. You can use Active Directory features to help secure your deployment of Team Foundation Server. For example, you can configure Active Directory to prevent duplicate computer names so that a malicious user cannot spoof the computer name with a rogue server that is running Team Foundation Server. To mitigate the same kind of threat in a workgroup, you must configure computer certificates. 

Whether you deploy Team Foundation Server in a workgroup or a domain, you must comply with certain constraints imposed by the requirements of Team Foundation Server itself. For more information about topologies for Team Foundation Server, see [A Simple Team Foundation Server Topology](examples-simple-topo.md), [A Moderate Team Foundation Server Topology](examples-moderate-topo.md), [A Complex Team Foundation Server Topology, Understanding Windows SharePoint Services](examples-complex-topo.md), and [Understanding SQL Server and SQL Server Reporting Services](sql-server-databases.md).

<a name="auth"></a>
### Authentication  

Security for Team Foundation Server is integrated with and relies on Windows integrated authentication and the security features of the Windows operating system. You can use Windows integrated authentication to authenticate accounts for connections between Team Foundation clients and TFS, for Web services on the servers that host the logical application and data tiers, and for connections between application-tier and data-tier servers themselves. 

> [!NOTE]
> You can configure TFS to support Kerberos for mutual authentication of both the client and the server after you install TFS. 
 
You should not configure any SQL Server database connections between Team Foundation Server and SharePoint Products to use SQL Server Authentication because it is not as secure as Windows authentication. When you connect to the database, the user name and the password for the database administrator account are sent in an unencrypted format. Windows integrated authentication does not send the user name and password. Instead, it uses Windows integrated authentication security protocols to transfer service account identity information that is associated with the host Internet Information Services (IIS) application pool to SQL Server.

<a name="authorization"></a>
### Authorization  

Team Foundation Server authorization is based on users and groups in Team Foundation, the permissions that are assigned directly to both those users and groups, and permissions that those users and groups might inherit by belonging to other groups in Team Foundation Server. Users and groups in Team Foundation can be local users or groups, Active Directory users and groups, or both.

Team Foundation Server is preconfigured with default groups at the server, collection, and project level. You can populate these groups by adding individual users. However, you might find management easier if you populate these groups by using Active Directory security groups. By taking this approach, you can manage group membership and permissions more efficiently across multiple computers or applications, such as SharePoint Products and SQL Server.

Your specific deployment might require that you configure users, groups, and permissions on multiple computers and within several applications. For example, you must configure permissions for users and groups in Reporting Services, SharePoint Products, and Team Foundation Server if you want to include reports and project portals as part of your deployment. In Team Foundation Server, you can set permissions for each project, for each collection, and across a deployment (at the server level). Additionally, certain permissions are granted by default to any user or group that you add to Team Foundation Server, as that user or group is automatically added to Team Foundation Valid Users. For more information, see [Manage users or groups in TFS](../../security/permissions.md).

Besides configuring permissions for authorization in Team Foundation Server, you might need authorization within version control and work items. You manage these permissions separately at a command prompt, but they are integrated as part of the interface for Team Explorer. 


## See Also 
[Team Foundation Server architecture](architecture.md)
