---
title: Configure a network adapter to automatically adjust speed
titleSuffix: TFS
description: Configure to automatically adjust the link speed of its network adapter - Team Foundation Server (TFS)
ms.prod: devops
ms.technology: devops-agile
ms.assetid: 26b43d25-a60e-4d8d-b12b-890d152b0d14
ms.author: kaelliauthor: KathrynEE
ms.manager: jillfra
ms.date: 02/22/2017 
---


# Configure a network adapter to automatically adjust speed

**TFS 2013**

When a client computer is not configured to automatically adjust the link speed of its network adapter, some functions might take a long time to finish. Such functions include creating projects, saving work items, or merging code changes. In some cases, these functions might never finish, and an error message might appear that contains the phrase "The underlying connection was closed."  
  
The speed with which a function finishes depends, in part, on the speed of the computer network. The configuration of network switches and your computers' network adapters can affect the network throughput. For example, "autosense mode" or "auto-negotiation" might be turned on, and information might be transmitted in either full-duplex mode or half-duplex mode.  
  
To minimize the time required for a function to finish, you should confirm that these settings are set appropriately for maximum throughput. For more information about how full-duplex mode differs from half-duplex mode, contact your network administrator.  
   
  
**Required Permissions**  
  
To perform these procedures, you must be a member of the **Administrators** security group on your local computer.  
  
### To configure a computer to automatically adjust the link speed of its network adapter in Windows Server 2008  
  
1.  On the **Start** menu, click **Control Panel**.  
  
2.  Click **Network and Internet**.  
  
3.  Click **Network and Sharing Center**, and then click **Manage network connections**.  
  
     The **Network Connections** folder opens.  
  
4.  Right-click the relevant network connection (by default, **Local Area Connection**), and then click **Properties**.  
  
     The **Local Area Connection Properties** dialog box opens.  
  
5.  Click **Configure**.  
  
     The properties dialog box for the adapter opens.  
  
6.  Click the **Advanced** tab.  
  
7.  In the **Property** list, click the property that corresponds to the connection type, such as **Connection Type**, **Duplex Mode**, **Media**, **Media Type**, or **Link Speed & Duplex**, depending on the adapter's attributes.  
  
8.  In the **Value** list, click **Autosense**.  
  
9. Click **OK**.