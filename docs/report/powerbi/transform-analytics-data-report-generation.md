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

	:::image type="content" source="media/transform-data/descendents-expanded-columns.png" alt-text="Screenshot of Power BI expanded Descendants column. ":::


links-target-work-item-column-expand.png


#### Pivot Descendants.StateCategory column

1. Select the 1Descendants.StateCategory1 column header to select it.

1. Select **Transform** menu and then **Pivot Column**. 
	:::image type="content" source="media/transform-data/transform-menu-pivot-column.png" alt-text="Transform menu, Pivot Column option.":::

1. In the Pivot Column dialog, for **Values** select `Descendants.TotalStoryPoints`, and then press **OK**.
	Power BI creates a column for every StateCategory value.

	:::image type="content" source="media/transform-data/descendants-pivot-column-dialog.png" alt-text="Dialog of Pivot Column for  Descendants.TotalStoryPoints column. ":::  


### Expand the Links column

1. Select the expand button on the Links column.

    > [!div class="mx-imgBorder"] 
    > ![Power BI + OData - expanding a Links column](media/odatapowerbi-expandlinks.png)  
	:::image type="content" source="media/transform-data/links-column-expand.png" alt-text="Screenshot of Power BI Links column, expand options. ":::

1. Select all the fields to flatten.

    > [!div class="mx-imgBorder"] 
    > ![Select all the fields to flatten.](media/odatapowerbi-expandlinks2.png)  
	:::image type="content" source="media/transform-data/links-column-expand.png" alt-text="Screenshot of Power BI Links column, expand options. ":::

1. Select the expand button on the Links.TargetWorkItem column.

    > [!div class="mx-imgBorder"] 
    > ![Select the expand button on the Links.TargetWorkItem column.](media/odatapowerbi-expandlinks3.png)
	:::image type="content" source="media/transform-data/links-target-work-item-column-expand.png" alt-text="Screenshot of Power BI Links.TargetWorkItem column, expand options. ":::

1. Select the fields of the Target Work Item to flatten.

    > [!div class="mx-imgBorder"] 
    > ![Select the fields of the Target Work Item to flatten.](media/odatapowerbi-expandlinks4.png)

	The Table now contains flattened Link and Target Work Item field(s).

    > [!div class="mx-imgBorder"] 
    > ![The Table now contains flattened Link and Target Work Item field(s).](media/odatapowerbi-expandlinks5.png)

> [!NOTE]
> If the link represents a one-to-many or many-to-many relationship, then multiple links will
> expand to multiple rows, one for each link. 
> 
> For example, if Work Item #1 is linked to Work Item's #2 and #3, then when you expand the Links record, 
> you will have 2 rows for Work Item #1. One that represents its link to Work Item #2, and another that
> represents its link to Work Item #3.


<"id ="transform-data-type" />

## Transform a column data type 

<"id ="leadtimedays-cycletimedays" />


### Transform the LeadTimeDays and CycleTimeDays columns to whole Numbers

The `LeadTimeDays` and `CycleTimeDays` are decimal fields. For example if **Lead Time** is 10 and 1/2 days, the value is 10.5. Since most Lead/Cycle Time reports assume that it's rounded to the nearest day, we need to convert these fields to an Integer. Making this conversion converts all values less than 1 to 0. 

From the Power Query Editor, select the ribbon **Transform** menu. 

1. Select the `LeadTimeDays` column by selecting the column header.
1. Select **Data Type** and change to **Whole Numbers**.
   :::image type="content" source="media/transform-data/change-data-type-lead-time.png" alt-text="Screenshot of Power BI Transform menu, Data type selection.":::

1. Repeat for `CycleTimeDays`.

### Change CompletedDateSK to a Date field

The `CompletedDateSK` column data corresponds to an integer rendering of the **Completed Date** field in the format `YYYYMMDD`. For example, the integer value of 2022-July-01 is 20220701. For easier reporting, we change it to a **Date** field.

From the Power Query Editor, select the ribbon **Transform** menu. 

1. Select the `CompletedDateSK` column header. 
1. Select **Data Type** and change to **Text**.
	When the **Change Column Type** dialog appears, select **Add new step** (rather than **Replace current step**). This two-step process is the easiest way to change it to a proper **Date** field in Power BI.

   :::image type="content" source="media/transform-data/change-column-type-add-new-step.png" alt-text="Screenshot of Power BI Transform menu, Change Column Type dialog.":::

1. Next, select **Date Type** again and choose **Date**. 
	In the **Change Column Type** dialog, select **Add new step**.
 

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