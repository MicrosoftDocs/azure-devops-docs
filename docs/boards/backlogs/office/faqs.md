---
title: FAQs for working in Excel
titleSuffix: Azure Boards
description: Find answers to frequently asked questions about working in Microsoft Excel to track work in Azure Boards
ms.prod: devops
ms.technology: devops-agile
ms.manager: mijacobs
ms.author: kaelli
author: KathrynEE
ms.topic: conceptual
monikerRange: '>= tfs-2013'
ms.date: 11/22/2019
---


# FAQs: Work in Excel connected to Azure Boards 

[!INCLUDE [temp](../../_shared/version-vsts-tfs-all-versions.md)]

## Q: What do I need to use Excel to add or modify work items?

**A:**  You must get the Azure DevOps Office Integration add-in available from the [Downloads page, Other Tools and Frameworks](https://visualstudio.microsoft.com/downloads/#other-family). This add-in typically installs when you install any version of Visual Studio or Team Explorer. Also, you need to use Microsoft Excel 2010 or later version, including Microsoft Office Excel 365. 

Once you've installed the add-in, open Excel and look for the **Team** ribbon.

## Q: Can I use Excel on my Mac?

**A:** No. macOS is not supported. You need to use Excel on the same computer where you have installed Visual Studio or Team Explorer in order to get the Team Foundation add-in. These applications require Windows.

## Q: Can I open a query in Excel from the web portal?  

**A:** Yes. To open Excel from the web portal, install the [Azure DevOps Open in Excel](https://marketplace.visualstudio.com/items?itemName=blueprint.vsts-open-work-items-in-excel) Marketplace extension. Otherwise, you can open [Excel](bulk-add-modify-work-items-excel.md) and then open a query that you've created in the web portal or from Team Explorer. 

::: moniker range="azure-devops" 

## Q: Can I import work items without using Excel?  

**A:** Yes. You can perform a bulk import of new work items without using Excel. To learn how, see [Import work items](../../queries/import-work-items-from-csv.md).

::: moniker-end  

## Q: How do I connect an existing Excel workbook to Azure DevOps?  

**A:** See [Azure Boards and Office integration, Connect from Excel or Project](track-work.md#excel-project). 


## Q: How do I publish to a tree? 



## Q: Can I bulk-edit link types other than parent-child links? 





## Q: How can I show additional fields?

**A:** 




## Q: Can I use multiple worksheets within Excel? 

**A:** Yes. Each worksheet in Excel can contain a different input list or query. However, all worksheets within the workbook must connect to the same project within an organization or project collection.  

To bulk add or modify work items in a different project, open a new Excel workbook. 

## Q: Can I use Excel cut and paste functions

**A:** Yes. You can use many Excel features, such as cut, paste, automatic fill, format, sort (flat list only), filter, and add formulas.  You can cut and paste rows to re-sequence items within a list and change link relationships among work items.

To drag a work item, select the work item or contiguous set of work items that you want to move, open the context menu and choose **Select**, **Table Row**, point to the border of the selection, and&mdash;when the pointer becomes a move pointer ![Move Pointer](_img/bulk-modify-excel-pointer-icon.png)&mdash;drag the row to another location.

> [!TIP]  
> When you refresh the work item list, not all formats may be retained. For example, date formats are set by the server data store. Changes you make to a date format field are overwritten with the date format used by the server.  



## Q: How do I disable the Team menu? 

**A:** If you want to disable the add-in, see [Add or remove an add-in](https://support.office.com/en-sg/article/Add-or-remove-add-ins-0af570c4-5cf3-4fa9-9b88-403625a0b460). 

## Q: How do I enable the Developer tab? 

**A:** See [Show the Developer Tab on the Ribbon](/visualstudio/vsto/how-to-show-the-developer-tab-on-the-ribbon).



## Related articles

- [Bulk add or modify work items with Excel](bulk-add-modify-work-items-excel.md) 
- [Create your backlog](../../backlogs/create-your-backlog.md)



- [Create your backlog and tasks using Project](create-your-backlog-tasks-using-project.md)  
 

