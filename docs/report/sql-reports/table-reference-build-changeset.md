---
title: Build Changeset tables | TFS
description: Uses FactBuildChangeset to query for data about the changesets.
ms.prod: visual-studio-tfs-dev14
ms.technology: vs-devops-reporting
ms.assetid: 66ab6ac3-ff81-4ed7-9535-dd7ce9ebbb37
ms.manager: douge
ms.author: kaelli
ms.date: 10/17/17
---

# Build Changeset tables

[!INCLUDE [temp](../_shared/tfs-report-platform-version.md)]

You can query for data about the changesets that were incorporated in each build by using FactBuildChangeset and the associated dimension tables.  
  
 For information about the measures and dimensions that are associated with these tables in the SQL Server Analysis Services cube, see [Builds](perspective-build-analyze-report-build-details-coverage.md).  
  
 ![Tables for Changesets in a Build](_img/teamproj_factbuildchangeset.png "TeamProj_FactBuildChangeset")  
  
 FactBuildChangeset is associated with the following dimension tables:  
  
-   DimBuild  
  
-   DimChangeset  
  
-   DimPerson  
  
-   DimTeamProject  
  
## Related notes
- [Builds](perspective-build-analyze-report-build-details-coverage.md)   
- [Find and view changesets](../../tfvc/find-view-changesets.md)   
- [Table reference for the relational warehouse database](table-reference-relational-warehouse-database.md) 
- [Continuous integration on any platform](../../build-release/overview.md) 
