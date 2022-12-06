---
title: Power BI data transformations
titleSuffix: Azure DevOps
description: Learn how to expand columns and transform Analytics data in Power BI to support report generation.
ms.subservice: azure-devops-analytics
ms.custom: powerbi
ms.author: kaelli
author: KathrynEE
ms.topic: how-to
monikerRange: '>= azure-devops-2019'
ms.date: 12/05/2022
---

# Transform Analytics data to generate Power BI reports

[!INCLUDE [version-gt-eq-2019](../../includes/version-gt-eq-2019.md)]


Expand Area Path, Iteration Path
Expand Assigned To
Expand Descendents
Expand Links
Expand Teams


## Expand columns 

The query returns several columns that you need to expand before you can use them in Power BI. Any entity pulled in using an OData **$expand** statement returns a record with potentially several fields. You need to expand the record to flatten the entity into its fields. Examples of such entities are: **AssignedTo**, **Iteration**, and **Area**. 

After closing the Advanced Editor and while remaining in the Power Query Editor, select the expand button on the entities you need to flatten.

1. Choose the expand button.

    > [!div class="mx-imgBorder"] 
    > ![Expand an entity column, Power BI + OData](/azure/devops/report/powerbi/media/odatapowerbi/expandcolumn.png)

1. Select the fields to flatten.

    > [!div class="mx-imgBorder"] 
    > ![Select the fields to flatten.](/azure/devops/report/powerbi/media/odatapowerbi/expandcolumn2.png)

1. The table now contains entity field(s).

    > [!div class="mx-imgBorder"] 
    > ![The table now contains entity field(s).](/azure/devops/report/powerbi/media/odatapowerbi/expandcolumn3.png)

1. Repeat steps 1 through 3 for all columns representing several fields. For work items, these typically include:  
	- `AssignedTo`
	- `AreaPath`
	- `IterationPath`



### Expand Descendants column

1. Choose the **Expand** button, and select the columns to report on:

	:::image type="content" source="media/transform-data/descendants-column-expand.png" alt-text="Screenshot of Power BI Descendants column. ":::

2. Check all the columns and choose **OK**.

	:::image type="content" source="media/transform-data/expand-descendents-property.png" alt-text="Screenshot of Power BI Descendants column, expand options. ":::

3. The Descendants entity is flattened to the selected columns:

	:::image type="content" source="media/transform-data/descendents-expanded-columns.png" alt-text="Screenshot of Power BI Descendants column, expand options. ":::


#### Pivot Descendants.StateCategory column

1. Select the 1Descendants.StateCategory1 column header to select it.

1. Select **Transform** menu and then **Pivot Column**. 
	:::image type="content" source="media/transform-data/transform-menu-pivot-column.png" alt-text="Transform menu, Pivot Column option.":::

1. In the Pivot Column dialog, for **Values** select `Descendants.TotalStoryPoints`, and then press **OK**.
	Power BI creates a column for every StateCategory value.

	:::image type="content" source="media/transform-data/descendants-pivot-column-dialog.png" alt-text="Dialog of Pivot Column for  Descendants.TotalStoryPoints column. ":::  

<a id="rename-column-fields" /> 

## Rename column fields

When finished with your expansion, you may choose to rename one or more columns. 

1. Right-click a column header and select **Rename...**

	> [!div class="mx-imgBorder"] 
	> ![Power BI Rename Columns](/azure/devops/report/powerbi/media/powerbi-rename-columns.png)

1. Enter a new label for the column field and then press Enter. 

## Rename the query

1. You can rename the query from the default **Query1**, to something more meaningful. 

	> [!div class="mx-imgBorder"] 
	> ![Power BI Rename Query](/azure/devops/report/powerbi/media/powerbi-rename-query.png)

1. Once done, choose **Close & Apply** to save the query and return to Power BI.

	> [!div class="mx-imgBorder"] 
	> ![Power BI Close & Apply](/azure/devops/report/powerbi/media/powerbi-close-apply.png)



## TBD 
- Create custom fields - such as a percentage 
- Can't pivot if you have unexpanded records - will get an error message about nested columns
- Must remove Null fields - use Replace values (why does this not work in some instances) 
- 