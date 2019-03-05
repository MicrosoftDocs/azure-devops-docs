---
title: Resolve problems working with Excel workbooks or SharePoint Server 
titleSuffix: TFS
description: Resolve an error that occurs with the integration of SharePoint, Team Foundation Server, and Excel workbooks 
ms.prod: devops
ms.technology: devops-agile
ms.assetid: fdb0f881-7ead-45f5-85c0-189a86d29d7a
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
ms.topic: troubleshooting
ms.date: 02/22/2017  
---


# Resolve problems working with Excel workbooks and SharePoint server


<b>TFS 2017 | TFS 2015 | TFS 2013</b> 

Before you use Excel 2010 to publish a workbook to a server that is running Microsoft Office SharePoint Server 2007, you must first install MSOLAP.4 on the server that is running SharePoint Products. To install MSOLAP.4, you add it to the list of approved providers in Excel Services.  
  
## Required permissions  
  
To perform this procedure, you must be a member of the Administrators group on the server that hosts the SharePoint web application. For more information about permissions, see [Set SharePoint site permissions](../../../organizations/security/set-sharepoint-permissions.md).  
  
## To install MSOLAP.4  
  
1.  On the server that is running SharePoint Products, click **Start**, point to **Administrative Tools**, and then click **SharePoint Central Administration**.  
  
2.  Click **Shared Services Administration**, click **Excel Services**, and then click **Trusted Data Providers**.  
  
3.  Click **Add Trusted Data Provider**.  
  
4.  In the **Provider ID** box, type the following code:  
  
    ```  
    Provider ID = MSOLAP.4  
    Data Provider Type = OLE DB  
    Description = Microsoft OLE DB Provider for OLAP Services 10.0.  
    ```  
  
5.  Click **OK**.  
  
## Related articles
 
- [Verify SharePoint products for Team Foundation Server](/azure/devops/server/install/sharepoint/verify-sharepoint)
