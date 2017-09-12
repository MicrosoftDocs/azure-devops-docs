---
title: Use SQL Server Always-on Availability Groups with Team Foundation Server
description: Use SQL Server Always-on Availability Groups with Team Foundation Server
ms.assetid: ffbd4565-169c-4e00-82c3-981725cc9bdd
ms.manager: douge
ms.author: elbatk
ms.date: 09/01/2016
ms.prod: vs-devops-alm
ms.technology: vs-devops-admin
---

# Use SQL Server Always-on Availability Groups with Team Foundation Server

**TFS 2015** | **TFS 2013**

This topic provides general guidelines for enabling AlwaysOn Availability Groups with Team Foundation Server. AlwaysOn Availability Groups requires a small amount of TFS-specific configuration, which can help you provide high availability (HA) to TFS relational databases like TFS_Configuration and TFS_Collection database. The TFS-specific configuration sets the MultisubnetFailover option to true in the connection string that TFS uses for the data tier and is not necessary for providing HA support for reporting or SharePoint. To provide high availability to the TFS report server or SharePoint deployment, use the documentation for those products. 

TFS support for AlwaysOn Availability Groups is an on or off proposition: if you use it, you must include your TFS_Configuration database as well as all of your TFS_Collection databases in the availability group. If you add a team project collection in the future, the database for that collection must be added to the availability group in SQL Server.

You can use more than one SQL Server availability group.

Use SQL Server documentation for guidance about configuring AlwaysOn Availability Groups. TFS does not require any specific AlwaysOn Availability Group configuration. Use the configuration that best meets your team’s needs and the recommendations found in SQL Server guidance. See [Getting Started with AlwaysOn Availability Groups (SQL Server)](https://technet.microsoft.com/library/gg509118.aspx).

## Setting up a new TFS installation with AlwaysOn Availability Groups

This a high level walkthrough of the steps required to implement AlwaysOn Availability Groups during TFS installation.

> [!TIP]
> To set the MultisubnetFailover option to true in the connection string for an already running deployment of TFS, use the RegisterDB command of TFSConfig with the /usesqlalwayson argument. You will need to use the TFSService Control Command to stop and start TFS before you can set the MultisubnetFailover option. See [RegisterDB Command](../../command-line/tfsconfig-cmd.md#registerdb) and [TFSServiceControl Command](../../command-line/tfsservicecontrol-cmd.md).

###One: set up AlwaysOn Availability Groups

The SQL Server AlwaysOn Availability Group must be ready before you install TFS. See [Getting Started with AlwaysOn Availability Groups (SQL Server)](https://technet.microsoft.com/library/gg509118.aspx)

###Two: install TFS using the advanced wizard

![Select AlwaysOn checkbox](_img/ic630622.png)

If you’re installing TFS for the first time, use the Advanced configuration wizard, which gives you access to the **SQL AlwaysOn Availability Group** check box (pictured above). On this screen, enter the Availability Group Listener in the **SQL Server Instance** text box. TFS will create TFS\_Configuration and the DefaultCollection databases on the Primary replica of your AlwaysOn Availability Group. The databases for SharePoint will also be created, if you allow TFS to install SharePoint Foundation.

> [!TIP]
> You can also access the **SQL AlwaysOn Availability Group** check box by using the Application-Tier Only or Upgrade wizards. See [How to: Create a Team Foundation server farm (high availability)](../create-tfs-farm.md) or [TFS upgrade requirements](../../upgrade/upgrade-2013/upgrade-2013-requirements.md).

###Three: add the new TFS databases to the AlwaysOn Availability Group

![Add TFS databases to AlwaysOn Availibility Group](_img/ic630623.png)

You’ll need to back up any databases that you want to add to the AlwaysOn Availability Group to bring them into compliance for data stored in an AlwaysOn Availability Group. Next, use the Availability Group Wizard to add the databases to the group. See [Creation and Configuration of Availability Groups (SQL Server)](https://technet.microsoft.com/library/ff878265.aspx), and [Use the New Availability Group Wizard (SQL Server Management Studio)](https://technet.microsoft.com/library/hh403415.aspx).

> [!TIP]
> If you add a new team project collection to TFS, remember to add the database for the collection to your availability group in SQL Server. You cannot have some databases for team project collections in and some outside the availability group.

## AlwaysOn Availability Groups Support for Reporting and SharePoint

The TFS-specific configurations described in this topic are not necessary to provide HA support for reporting or SharePoint. To provide AlwaysOn support for those features, use the guidance available for those products, or implement some other TFS-supported HA feature.

**Reporting and AlwaysOn Availability Groups**

-   [Reporting Services with AlwaysOn Availability Groups (SQL Server)](https://technet.microsoft.com/library/hh882437.aspx)

-   [Analysis Services with AlwaysOn Availability Groups](https://technet.microsoft.com/library/hh967523.aspx)

**SharePoint and HA**

-   [Configure and manage SQL Server availability groups for SharePoint Server](https://technet.microsoft.com/library/hh913923.aspx)

-   [Plan for availability (SharePoint Server 2010)](https://technet.microsoft.com/library/cc748824.aspx)

-   [SQL Server 2008 R2 and SharePoint 2010 Products: Better Together (white paper) (SharePoint Server 2010)](https://technet.microsoft.com/library/cc990273.aspx)
