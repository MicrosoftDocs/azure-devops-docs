---
title: Troubleshooting Excel workbooks integration to SharePoint
titleSuffix: TFS
description: Learn how to resolve an error that occurs during the integration of SharePoint and an Excel workbook. 
ms.service: azure-devops-boards
ms.assetid: fdb0f881-7ead-45f5-85c0-189a86d29d7a
ms.author: kaelli
author: KathrynEE
ms.topic: troubleshooting
ms.date: 10/08/2021
---

# Resolve problems working with Excel workbooks and SharePoint server


**TFS 2017 | TFS 2015 | TFS 2013**

Before you use Excel 2010 to publish a workbook to a server that is running Microsoft Office SharePoint Server 2007, install MSOLAP.4 on the server that is running SharePoint Products. To install MSOLAP.4, you add it to the list of approved providers in Excel Services.  
  
## Prerequisites   
  
To complete this procedure, you must be a member of the Administrators group on the server that hosts the SharePoint web application. For more information about permissions, see [Set SharePoint site permissions](/previous-versions/azure/devops/report/sharepoint-dashboards/set-sharepoint-permissions).  
  
## To install MSOLAP.4  
  
1.  On the server that is running SharePoint Products, select **Start**, point to **Administrative Tools**, and then select **SharePoint Central Administration**.  
  
2.  Select **Shared Services Administration**, select **Excel Services**, and then select **Trusted Data Providers**.  
  
3.  Select **Add Trusted Data Provider**.  
  
4.  In the **Provider ID** box, type the following code:  
  
    ```  
    Provider ID = MSOLAP.4  
    Data Provider Type = OLE DB  
    Description = Microsoft OLE DB Provider for OLAP Services 10.0.  
    ```  
  
5.  Select **OK**.  
  
## Related articles
 
- [Verify SharePoint products for Team Foundation Server](/previous-versions/azure/devops/server/sharepoint/verify-sharepoint)
