---
title: Power BI integration overview | Team Services
description: Overview of the different integration options to connect to Power BI and Team Services.
ms.assetid: 8026A5ED-CD58-417A-913F-72A20272E7DC
ms.prod: vs-devops-alm
ms.technology: vs-devops-reporting
ms.manager: douge
ms.author: stansw
ms.topic: get-started-article 
ms.date: 05/21/2017
---

# Power BI integration overview

<b>Team Services</b>

[!INCLUDE [temp](../_shared/analytics-preview.md)]

Gain insight and analyze the progress and quality of your project by connecting Power BI to the data collected and stored in Team Services.
Currently, you can choose between two different options depending on your reporting requirements.

The first option, the **Content Pack**, contains a complete analytic data model (tables, relationships and measures), a set of default reports and a default dashboard. Reports and dashboard are fully customizable but the data model is not.

This option is great for users who want to get quick insights without the need of building custom models.
The data model is shared between all users and therefore does not support process customization, this is one of the primary reasons to consider the second option. To learn more, see [Connect to Team Services with Power BI Content Pack](connect-vso-pbi-vs.md). 


The second option, **Data Connector**, has been released with the *Power BI Desktop January 2017 Update*.
This option is available in the *Power BI Desktop*. It allows users to select the data they are interested in, which includes support for a fully customized data model by including project-specific fields, work item customizations, and adding tables from additional data sources.

Since you select which data to load, this approach works well for very large accounts, that could not use the *Content Pack* in the past.To learn more, see [Connect to Team Services with Power BI Data Connector](data-connector-connect.md). 

The following table contains a detailed comparison of both options.

<table>
<tbody valign="top">
    <tr>
        <th width="50%"></th>
        <th width="25%">Content Pack</th>
        <th width="25%">Data Connector</th>
    </tr>
    <tr>
        <td>First release date</td>
        <td><a href="https://powerbi.microsoft.com/en-us/documentation/powerbi-content-pack-visual-studio">May 27, 2015</a></td>
        <td><a href="https://powerbi.microsoft.com/en-us/blog/power-bi-desktop-january-feature-summary/#visualStudioTeamServices">January 9, 2017</a></td>
    </tr>
    <tr>
        <td>Last update date</td>
        <td>September 2, 2015</td>
        <td>-</td>
    </tr>
    <tr>
        <td>Data Source</td>
        <td><a href="https://www.visualstudio.com/en-us/docs/integrate/api/overview">Team Services REST API</a></td>
        <td><a href="https://www.visualstudio.com/en-us/docs/report/analytics/overview-analytics-service">Analytics Service</a><sup> 1</sup></td>
    </tr>
    <tr>
        <td>Power BI Service</td>
        <td><img alt="checked" src="_img/icons/checkmark.png"></td>
        <td><img alt="checked" src="_img/icons/checkmark.png"><sup> 2</sup></td>
    </tr>
    <tr>
        <td>Power BI Desktop</td>
        <td><img alt="unchecked" src="_img/icons/delete-icon.png"></td>
        <td><img alt="checked" src="_img/icons/checkmark.png"></td>
    </tr>
    <tr>
        <td style="text-align: center" colspan="3">
            <b>Available Data</b>
        </td>
    </tr>
    <tr>
        <td>Work Items - Current state</td>
        <td><img alt="checked" src="_img/icons/checkmark.png"></td>
        <td><img alt="checked" src="_img/icons/checkmark.png"></td>
    </tr>
    <tr>
        <td>Work Items - History</td>
        <td><img alt="checked" src="_img/icons/checkmark.png"></td>
        <td><img alt="checked" src="_img/icons/checkmark.png"></td>
    </tr>
    <tr>
        <td>Work Items - Customization</td>
        <td><img alt="unchecked" src="_img/icons/delete-icon.png"></td>
        <td><img alt="checked" src="_img/icons/checkmark.png"></td>
    </tr>
    <tr>
        <td>Source Control - Git</td>
        <td><img alt="checked" src="_img/icons/checkmark.png"></td>
        <td><img alt="unchecked" src="_img/icons/delete-icon.png"></td>
    </tr>
    <tr>
        <td>Source Control - TFVC</td>
        <td><img alt="checked" src="_img/icons/checkmark.png"></td>
        <td><img alt="unchecked" src="_img/icons/delete-icon.png"></td>
    </tr>
    <tr>
        <td>Builds - XAML</td>
        <td><img alt="checked" src="_img/icons/checkmark.png"></td>
        <td><img alt="unchecked" src="_img/icons/delete-icon.png"></td>
    </tr>
        <tr>
        <td style="text-align: center" colspan="3">
            <b>Elements</b>
        </td>
    <tr>
    <tr>
        <td>Tables</td>
        <td><img alt="checked" src="_img/icons/checkmark.png"></td>
        <td><img alt="checked" src="_img/icons/checkmark.png"></td>
    </tr>
    <tr>
        <td>Relationships</td>
        <td><img alt="checked" src="_img/icons/checkmark.png"></td>
        <td><img alt="unchecked" src="_img/icons/delete-icon.png"></td>
    </tr>
    <tr>
        <td>Measures</td>
        <td><img alt="checked" src="_img/icons/checkmark.png"></td>
        <td><img alt="unchecked" src="_img/icons/delete-icon.png"></td>
    </tr>
    <tr>
        <td>Reports</td>
        <td><img alt="checked" src="_img/icons/checkmark.png"></td>
        <td><img alt="unchecked" src="_img/icons/delete-icon.png"></td>
    </tr>
    <tr>
        <td>Dashboard</td>
        <td><img alt="checked" src="_img/icons/checkmark.png"></td>
        <td><img alt="unchecked" src="_img/icons/delete-icon.png"></td>
    </tr>
    <tr>
        <td>Power Query Functions</td>
        <td><img alt="unchecked" src="_img/icons/delete-icon.png"></td>
        <td><img alt="checked" src="_img/icons/checkmark.png"></td>
    </tr>
    <tr>
        <td style="text-align: center" colspan="3">
            <b>Authentication</b>
        </td>
    <tr>
    <tr>
        <td>Microsoft Account (Live ID)</td>
        <td><img alt="checked" src="_img/icons/checkmark.png"></td>
        <td><img alt="checked" src="_img/icons/checkmark.png"></td>
    </tr>
    <tr>
        <td>Azure Active Directory (AAD)</td>
        <td><img alt="checked" src="_img/icons/checkmark.png"></td>
        <td><img alt="checked" src="_img/icons/checkmark.png"></td>
    </tr>
    <tr>
        <td>OAuth</td>
        <td><img alt="checked" src="_img/icons/checkmark.png"></td>
        <td><img alt="checked" src="_img/icons/checkmark.png"></td>
    </tr>
    <tr>
        <td>Personal access token</td>
        <td><img alt="unchecked" src="_img/icons/delete-icon.png"></td>
        <td><img alt="checked" src="_img/icons/checkmark.png"></td>
    </tr>
    <tr>
        <td>Alternate credentials</td>
        <td><img alt="unchecked" src="_img/icons/delete-icon.png"></td>
        <td><img alt="checked" src="_img/icons/checkmark.png"></td>
    </tr>
    <tr>
        <td style="text-align: center" colspan="3">
            <b>Other</b>
        </td>
    <tr>
    <tr>
        <td>Support for large accounts<sup> 3</sup></td>
        <td><img alt="unchecked" src="_img/icons/delete-icon.png"></td>
        <td><img alt="checked" src="_img/icons/checkmark.png"></td>
    </tr>
    <tr>
        <td>Support for custom measures</td>
        <td><img alt="unchecked" src="_img/icons/delete-icon.png"></td>
        <td><img alt="checked" src="_img/icons/checkmark.png"></td>
    </tr>
    <tr>
        <td>Support for mashup with additional data sources<sup> 4</sup></td>
        <td><img alt="unchecked" src="_img/icons/delete-icon.png"></td>
        <td><img alt="checked" src="_img/icons/checkmark.png"></td>
    </tr>
</tbody>
</table>

**Notes:**  
1. The Analytics Service is in private preview and only available to select customers of Visual Studio Team Services at this time.
2. The data model is created in *Power BI Desktop*. Then, it can be published and refreshed in *Power BI Service*.
3. There is a limit on how long a refresh operation can take before it gets terminated by the system.
Using the number of work items as a proxy measure for the size of account, an account is considered "large" accounts when it has over 400k work items.
4. Power BI Desktop allows users to load tables from different sources and combine them into a single data model (e.g. custom working days calendar).



## Related notes

To get started using Power BI and the Analytics service, make sure you have [permissions required to access the Analytics service](../analytics/analytics-security.md) and then review the [knowledge base of articles](https://support.powerbi.com/).

- [Connect to services with content packs for Power BI](https://powerbi.microsoft.com/documentation/powerbi-content-packs-services/)
- [Connect to Team Services with Power BI Data Connector](./data-connector-connect.md)
- [Data Connector - Example reports](./data-connector-examples.md)
- [Functions available in Power BI Data Connector](data-connector-functions.md)  
- [Available data tables in the Power BI Content Pack](data-connector-available-data.md) 
