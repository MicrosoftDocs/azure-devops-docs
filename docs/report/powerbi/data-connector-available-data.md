---
title: Data available in Power BI | Team Services
description: Learn about what data is available in the Power BI content pack for Visual Studio Team Services (VSTS)  
ms.technology: vs-devops-reporting
ms.prod: vs-devops-alm
ms.topic: get-started-article  
ms.assetid: 8E92B372-B312-4BAD-960A-B3CB0202E2A1  
ms.manager: douge
ms.author: stansw
ms.date: 03/02/2017
---

#Available data tables in the Power BI Content Pack for Team Services

<b>Team Services</b>

[!INCLUDE [temp](../_shared/analytics-preview.md)]

To connect to the Analytics Services for Team Services from the Power BI Desktop, you must download the *Power BI Desktop January 2017 Update* or a newer version. You can download it from the official [Power BI Desktop download page](https://powerbi.microsoft.com/desktop/).

The current release of the Data Connector supports custom fields added to the process references by a team project. 

<!---
In the first release of the Data Connector we aimed to overcome the limitations of Content Pack in terms of process customization.
I wouldn't add this statement. 
--> 

## Currently available data  
<table width="100%">
    <tr>
        <th width="25%">Data</th>
        <th width="75%">Details</th>
    </tr>
    <tr>
        <td>Work Items - Current state</td>
        <td>Load current state of Work Items.</td>
    </tr>
    <tr>
        <td>Work Items - History</td>
        <td>Load all changes that happened to work items in the last 30 days.</td>
    </tr>
    <tr>
        <td>Work Items - Customization</td>
        <td>Load values of custom fields defined added to process templates.</td>
    </tr>
</table>

## Currently available tables

<table width="100%">
    <tr >
        <th width="25%">Table</th>
        <th width="75%">Description</th>
    </tr>
    <tr>
        <td>Work Items - Today</td>
        <td>
            <p>Contains all Work Items.
            Suffix "Today" indicates that it contains one days' worth of data in contrast to *Work Items - Last 30 Days* table, which loads also historical data.
            Each column corresponds to a data field available in a work item type used in the team project.
            </p>
        </td>
    </tr>
    <tr>
        <td>Work Items - Last 30 Days</td>
        <td>
            <p>Similar to the *Work Items - Today* table in that it contains the same column-fields, however, it loads work item history for the last 30 days, which can be used to create trend reports.</p>
            <p>It has been modelled as a <b>periodic snapshot fact table</b> with one day period.
            The grain of this table is the period, not the individual work item.
            What this means is that <b>a single Work Item can appear 30 times</b> (once per day).
            When working with this table you should partition the data by the <code>Date</code> column.
            Additionally, it contains a field named <code>Is Current</code>, which can be used instead of the <code>Date</code> column if you are interested in only the current state of each work item.
            </p>
        </td>
    </tr>
</table>

## Related notes  
- [Power BI integration overview](overview.md)
- [Connect to Team Services with Power BI Data Connector](./data-connector-connect.md)
- [Data Connector - Example reports](./data-connector-examples.md)
- [Functions available in Power BI Data Connector](data-connector-functions.md) 