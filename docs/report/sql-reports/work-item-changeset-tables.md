---
title: Work Item Changeset tables 
titleSuffix: Azure DevOps Server
description: Learn how to query for data about work items that are linked to changesets.
ms.technology: devops-analytics
ms.topic: reference 
ms.assetid: 0c017c1e-b19b-40b6-9927-b88b48700976
ms.author: kaelli
author: KathrynEE
ms.date: 10/20/2021
---

# Work Item Changeset tables  

[!INCLUDE [version-lt-azure-devops](../../includes/version-lt-azure-devops.md)]

You can query for data about work items that are linked to changesets by using FactWorkItemChangeset and the associated dimensions. For information about the measures and dimensions that are associated with these tables in the SQL Server Analysis Services cube, see [Test cases and work items](perspective-test-analyze-report-work.md).  
  
 ![Fact Table for Work Items Linked to Changesets](media/teamproj_factworkchangeset.png "TeamProj_FactWorkChangeset")  
  
 FactWorkItemChangeset is associated with the following dimension tables:  
  
- DimChangeset  
  
- DimPerson  
  
- DimWorkItem  
  
For more information, see these articles:
- [Test cases and work items](perspective-test-analyze-report-work.md)   
- [Find and view changesets](../../repos/tfvc/find-view-changesets.md)   
- [Table reference for the relational warehouse database](table-reference-relational-warehouse-database.md)