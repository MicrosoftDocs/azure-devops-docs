---
title: Client authentication options
titleSuffix: Azure DevOps   
description: Learn how to enter or change authentication credentials when you connect to Analytics from Power BI or Excel.
ms.subservice: azure-devops-analytics
ms.assetid: 91C6424B-3C3D-4773-B252-C627A5CE7C6D
ms.author: chcomley
author: chcomley
ms.topic: how-to
monikerRange: "<=azure-devops"
ms.date: 02/24/2026
ai-usage: ai-assisted
ms.custom: sfi-image-nochange, pat-deprecation
---

# Enter client credentials in Power BI or Excel 

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

[!INCLUDE [use-microsoft-entra-reduce-pats](../../includes/use-microsoft-entra-reduce-pats.md)]

::: moniker range="azure-devops"

When you connect from Power BI or Excel to Analytics by using the OData feed, choose **Microsoft Entra ID** for the most secure option.
You can also authenticate with personal access tokens (PATs), but this method is less secure.

::: moniker-end

::: moniker range="<azure-devops"

When you connect from Power BI or Excel to Analytics by using the OData feed, choose Windows credentials as the most secure option.
You can also authenticate with personal access tokens (**PATs**), but this method is less secure.

::: moniker-end

## Prerequisites

|Category  | Requirements |
|-------------|-------------|
| **Access levels** | - [Project member](../../organizations/security/add-users-team-project.md).<br>- At least **Basic** access. |
| **Permissions** | By default, project members have permission to query Analytics and create views. For more information about other prerequisites regarding service and feature enablement and general data tracking activities, see [Permissions and prerequisites to access Analytics](../analytics/analytics-permissions-prerequisites.md). |
|**Tools** | [Power BI Desktop](https://powerbi.microsoft.com/desktop)    |

[!INCLUDE [temp](../includes/analytics-preview.md)]
::: moniker range="azure-devops"

<a name='azure-active-directory-azure-ad'></a>

## Microsoft Entra ID 

Microsoft Entra ID is also known as "Organizational Credential" in Power BI Desktop. You can use it in  [Power BI](https://powerbi.microsoft.com) through OAuth selection when configuring data refresh.

1. When you connect with Power BI Desktop, you're prompted to enter your credentials for the data source. Select **Organizational account** as shown here:

	:::image type="content" source="media/power-bi-organizational.png" border="true" alt-text="Screenshot of Power BI Desktop authentication dialog with the Organizational account option selected."::: 

2. Choose **Sign in** and enter your Microsoft Entra credentials. After that, you're done.

To change an existing URL to use Microsoft Entra ID instead of a PAT, see [Change authentication credentials](#update-credentials) later in this article.

::: moniker-end

::: moniker range="<azure-devops"

## Windows authentication

You can use Windows authentication in [Power BI](https://powerbi.microsoft.com) through OAuth selection when configuring data refresh.

1. When you connect with Power BI Desktop, you're prompted to enter your credentials for the data source. Select **Windows** as shown here:

	:::image type="content" source="media/power-bi-windowsauth.png" border="true" alt-text="Screenshot of Power BI Desktop authentication dialog with the Windows option selected.":::

2. Enter your Windows credentials and choose **Connect**.

To change an existing URL to use Windows instead of a PAT, see [Change authentication credentials](#update-credentials) later in this article.

::: moniker-end

## Enter credentials within a client

Both Power BI and Excel use Power Query when accessing OData.
The authentication mechanism, including the various authentication screens, is identical.
This walkthrough uses Power BI Desktop but also applies to Excel.

1. Open **Power BI Desktop**.

2. Choose **Get Data**.

3. Select **OData Feed** (or **More > Other > OData Feed**).

4. Enter the URL for the OData endpoint and choose **OK**.  

	::: moniker range="azure-devops"

    :::image type="content" source="media/authentication-6.png" border="true" alt-text="Screenshot of OData Feed dialog with the URL field for the Analytics endpoint.":::
	
	::: moniker-end  

	::: moniker range="<azure-devops"

    :::image type="content" source="media/authentication-6-onprem.png" border="true" alt-text="Screenshot of OData Feed dialog with the URL field for the on-premises Analytics endpoint.":::

	::: moniker-end

::: moniker range="azure-devops"

5. In the authentication dialog, choose **Organizational account**, then select **Sign in** and enter your Microsoft Entra credentials.

::: moniker-end

::: moniker range="<azure-devops"

5. In the authentication dialog, choose **Windows** and enter your Windows credentials.

::: moniker-end

6. Choose **Connect**.

> [!TIP]
> If you previously connected with a PAT (Basic auth), update your stored credentials to use Microsoft Entra ID or Windows authentication instead.
> For steps, see [Change authentication credentials](#update-credentials).

### Use a PAT instead (not recommended)

If you can't use Microsoft Entra ID or Windows authentication, you can authenticate with a PAT:

1. [Create a PAT](../../organizations/accounts/use-personal-access-tokens-to-authenticate.md#create-a-pat) with scope **Analytics (read)** (`vso.analytics`).
2. Copy the token. If you go to a different page, you can't retrieve it later.
3. In the authentication dialog, choose **Basic** and enter the PAT as the password.

> [!WARNING]
> PATs are less secure than Microsoft Entra ID or Windows authentication and require manual rotation.
> Use PATs only when other authentication methods aren't available for your scenario.

<a id="update-credentials">  </a>

## Change authentication credentials

If you receive an access denied message, you might need to change your authentication credentials. Power Query caches your credential information so you only have to enter it once. However, personal access tokens expire and you might need to update or change your authentication information.

### Update credentials in Power BI Desktop

1. Open **Power BI Desktop**.  

2. Select **File** > **Options and Settings** > **Data Source Settings**. Select the correct URL to the OData Feed and select **Edit**.  

	::: moniker range="azure-devops"

    :::image type="content" source="media/authentication-8.png" border="true" alt-text="Screenshot of Data Source Settings dialog with the OData feed URL and Edit button.":::

	::: moniker-end

	::: moniker range="<azure-devops"

    :::image type="content" source="media/authentication-8-onprem.png" border="true" alt-text="Screenshot of Data Source Settings dialog with the on-premises OData feed URL and Edit button.":::

	::: moniker-end

3. In the next **Data Source Settings** dialog, select the **Edit** button under the **Credentials** setting.

	::: moniker range="azure-devops"

    :::image type="content" source="media/authentication-9.png" border="true" alt-text="Screenshot of Data Source Settings dialog with the Edit button under Credentials.":::

	::: moniker-end

	::: moniker range="<azure-devops"

    :::image type="content" source="media/authentication-9-onprem.png" border="true" alt-text="Screenshot of Data Source Settings dialog with the Edit button under Credentials for on-premises.":::

	::: moniker-end

4. Edit the credentials as described earlier, select **Save**, then **Done**, then **Close**.

### Update credentials in Excel

1. Open **Excel** and select **Get data** > **Data Source Settings**.  

    :::image type="content" source="media/client-auth-excel-open-data-source-settings.png" border="true" alt-text="Screenshot of Excel Data tab with the Data Source Settings option highlighted.":::

2. Select the correct URL to the OData feed and select **Edit**.  

	::: moniker range="azure-devops"

    :::image type="content" source="media/authentication-8.png" border="true" alt-text="Screenshot of Data Source Settings dialog with the OData feed URL and Edit button.":::

	::: moniker-end

	::: moniker range="<azure-devops"

    :::image type="content" source="media/authentication-8-onprem.png" border="true" alt-text="Screenshot of Data Source Settings dialog with the on-premises OData feed URL and Edit button.":::

	::: moniker-end

3. In the next **Data Source Settings** dialog, select the **Edit** button under the **Credentials** setting.
 
	::: moniker range="azure-devops"

    :::image type="content" source="media/authentication-9.png" border="true" alt-text="Screenshot of Data Source Settings dialog with the Edit button under Credentials.":::

	::: moniker-end

	::: moniker range="<azure-devops"

    :::image type="content" source="media/authentication-9-onprem.png" border="true" alt-text="Screenshot of Data Source Settings dialog with the Edit button under Credentials for on-premises.":::

	::: moniker-end

4. Edit the credentials as described earlier, and then **Save** your update.

## Publish to Power BI

After you create a model and load it with data, you can [publish it to Power BI](publish-power-bi-desktop-to-power-bi.md).
When you use Microsoft Entra ID or Windows, make sure to select the **oAuth2** option.

## Related content
 
- [Authenticate your identity with personal access tokens](../../organizations/accounts/use-personal-access-tokens-to-authenticate.md)  
- [Access data through Excel](access-analytics-excel.md)  
- [Access data through Power BI desktop](access-analytics-power-bi.md)  
- [Publish a Power BI Desktop file to Power BI](publish-power-bi-desktop-to-power-bi.md)
