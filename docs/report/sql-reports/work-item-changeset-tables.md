---
title: Work Item Changeset tables 
description: Query for data about work items that are linked to changesets 
titleSuffix: Azure DevOps Server 
ms.technology: devops-analytics
ms.topic: reference 
ms.assetid: 0c017c1e-b19b-40b6-9927-b88b48700976
ms.author: kaelli
author: KathrynEE
ms.date: 10/17/2017
---


# Work Item Changeset tables  

[!INCLUDE [temp](../includes/tfs-report-platform-version.md)]

You can query for data about work items that are linked to changesets by using FactWorkItemChangeset and the associated dimensions. For information about the measures and dimensions that are associated with these tables in the SQL Server Analysis Services cube, see [Test cases and work items](perspective-test-analyze-report-work.md).  
  
 ![Fact Table for Work Items Linked to Changesets](media/teamproj_factworkchangeset.png "TeamProj_FactWorkChangeset")  
  
 FactWorkItemChangeset is associated with the following dimension tables:  
  
-   DimChangeset  
  
-   DimPerson  
  
-   DimWorkItem  
  
## Related articles 
-  [Test cases and work items](perspective-test-analyze-report-work.md)   
-  [Find and view changesets](../../repos/tfvc/find-view-changesets.md)   
-  [Table reference for the relational warehouse database](table-reference-relational-warehouse-database.md)