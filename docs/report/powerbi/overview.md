---
title: Power BI integration overview | VSTS
description: Overview of the different integration options to connect to Power BI and VSTS.
ms.assetid: 8026A5ED-CD58-417A-913F-72A20272E7DC
ms.prod: vs-devops-alm
ms.technology: vs-devops-reporting
ms.manager: douge
ms.author: stansw
ms.topic: get-started-article
ms.date: 10/31/2017
---

# Power BI integration

**VSTS**

Gain insight and analyze the progress and quality of your project by connecting Power BI to the data collected and stored in Visual Studio Team Services(VSTS).

[!INCLUDE [temp](../_shared/analytics-preview.md)]

The **Beta VSTS Power BI Desktop Data Connector**, was shipped with the *January 2017 Update* and is currently under development. The Data Connector will be updated in early 2018, until the updated Data Connector is available we recommend using the [Power BI OData Connector](../analytics/access-analytics-power-bi.md).


[!INCLUDE [temp](../_shared/content-pack-deprecation.md)]

The following table contains a detailed overview of the **Data Connector**.

<table width="75%">
<tbody valign="top">
    <tr>
        <th>
        <tr>
        <td style="text-align: center" colspan="2">
            <b>Data Connector Details</b>
        </td>
    <tr>
    </tr>
    <tr>
        <td>First release date</td>
        <td><a href="https://powerbi.microsoft.com/en-us/blog/power-bi-desktop-january-feature-summary/#visualStudioTeam Services">January 9, 2017</a></td>
    </tr>
    <tr>
        <td>Last update date</td>
        <td>-</td>
    </tr>
    <tr>
        <td>Data Source</td>
        <td>[Analytics Service](../analytics/what-is-analytics.md)<sup> 1</sup></td>
    </tr>
    <tr>
        <td>Power BI Service</td>
        <td><img alt="checked" src="_img/icons/checkmark.png"><sup> 2</sup></td>
    </tr>
    <tr>
        <td>Power BI Desktop</td>
        <td><img alt="checked" src="_img/icons/checkmark.png"></td>
    </tr>
    <tr>
        <td style="text-align: center" colspan="2">
            <b>Available Data</b>
        </td>
    </tr>
    <tr>
        <td>Work Items - Current state</td>
        <td><img alt="checked" src="_img/icons/checkmark.png"></td>
    </tr>
    <tr>
        <td>Work Items - History</td>
        <td><img alt="checked" src="_img/icons/checkmark.png"></td>
    </tr>
    <tr>
        <td>Work Items - Customization</td>
        <td><img alt="checked" src="_img/icons/checkmark.png"></td>
    </tr>
    <tr>
        <td>Source Control - Git</td>
        <td><img alt="unchecked" src="_img/icons/delete-icon.png"></td>
    </tr>
    <tr>
        <td>Source Control - TFVC</td>
        <td><img alt="unchecked" src="_img/icons/delete-icon.png"></td>
    </tr>
    <tr>
        <td>Builds - XAML</td>
        <td><img alt="unchecked" src="_img/icons/delete-icon.png"></td>
    </tr>
        <tr>
        <td style="text-align: center" colspan="2">
            <b>Elements</b>
        </td>
    <tr>
    <tr>
        <td>Tables</td>
        <td><img alt="checked" src="_img/icons/checkmark.png"></td>
    </tr>
    <tr>
        <td>Relationships</td>
        <td><img alt="unchecked" src="_img/icons/delete-icon.png"></td>
    </tr>
    <tr>
        <td>Measures</td>
        <td><img alt="unchecked" src="_img/icons/delete-icon.png"></td>
    </tr>
    <tr>
        <td>Reports</td>
        <td><img alt="unchecked" src="_img/icons/delete-icon.png"></td>
    </tr>
    <tr>
        <td>Dashboard</td>
        <td><img alt="unchecked" src="_img/icons/delete-icon.png"></td>
    </tr>
    <tr>
        <td>Power Query Functions</td>
        <td><img alt="checked" src="_img/icons/checkmark.png"></td>
    </tr>
    <tr>
        <td style="text-align: center" colspan="2">
            <b>Authentication</b>
        </td>
    <tr>
    <tr>
        <td>Microsoft Account (Live ID)</td>
        <td><img alt="checked" src="_img/icons/checkmark.png"></td>
    </tr>
    <tr>
        <td>Azure Active Directory (AAD)</td>
        <td><img alt="checked" src="_img/icons/checkmark.png"></td>
    </tr>
    <tr>
        <td>OAuth</td>
        <td><img alt="checked" src="_img/icons/checkmark.png"></td>
    </tr>
    <tr>
        <td>Personal access token</td>
        <td><img alt="checked" src="_img/icons/checkmark.png"></td>
    </tr>
    <tr>
        <td>Alternate credentials</td>
        <td><img alt="checked" src="_img/icons/checkmark.png"></td>
    </tr>
    <tr>
        <td style="text-align: center" colspan="2">
            <b>Other</b>
        </td>
    <tr>
    <tr>
        <td>Support for large accounts<sup> 3</sup></td>
        <td><img alt="checked" src="_img/icons/checkmark.png"></td>
    </tr>
    <tr>
        <td>Support for custom measures</td>
        <td><img alt="checked" src="_img/icons/checkmark.png"></td>
    </tr>
    <tr>
        <td>Support for mashup with additional data sources<sup> 4</sup></td>
        <td><img alt="checked" src="_img/icons/checkmark.png"></td>
    </tr>
</tbody>
</table>

**Notes:**  
1. The data model is created in *Power BI Desktop*. Then, it can be published and refreshed in the *Power BI Service*.
2. There is a limit on how long a refresh operation can take before it gets terminated by Power BI.com.
3. Power BI Desktop allows users to load tables from different sources and combine them into a single data model (e.g. custom working days calendar).



## Related notes

To get started using Power BI and the Analytics service, make sure you have [permissions required to access the Analytics service](../analytics/analytics-security.md) and then review the [knowledge base of Power BI articles](https://powerbi.microsoft.com/en-us/documentation/powerbi-landing-page/).

- [Data Connector - Example reports](../powerbi/data-connector-examples.md)
- [Functions available in Power BI Data Connector](../powerbi/data-connector-functions.md)  
