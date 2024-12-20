---
title: Set user preferences
titleSuffix: Azure DevOps
description: Learn how to change a user's picture, preferred email address, and other user preferences from the user's Azure DevOps profile.
ms.subservice: azure-devops-settings
ms.author: chcomley
author: chcomley
ms.topic: how-to
monikerRange: '<= azure-devops'
ms.date: 12/19/2024
---

# Set user preferences

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

::: moniker range="azure-devops"

You can set user preferences on the user profile page in Azure DevOps. Changes can include the user picture, display name, preferred email address, and UI theme. These settings only apply to Azure DevOps.

::: moniker-end

::: moniker range=" < azure-devops"

On the Azure DevOps user profile page, you can change the user picture, display name, preferred email address, language, date and time pattern, time zone, and other user interface preferences.

::: moniker-end

## Set preferences

#### [Current page](#tab/current-page) 

Do the following steps to set your preferences.

::: moniker range="azure-devops"

1. From the home page, select :::image type="icon" source="../../media/icons/user-settings-gear.png" border="false"::: **User settings**, and then select **Profile**.

   ![Screenshot shows buttons to get to Azure DevOps profile.](../../media/open-user-settings-profile-preview.png)

2. From the **Profile** page, you can change the profile picture, display name, contact email address, and region. Select **Save**.

   ![Screenshot to choose and edit the Profile page.](media/edit-about-page-preview.png)

::: moniker-end

::: moniker range=" < azure-devops"

1. Open the user profile menu, and then select **My profile**.

	:::image type="content" source="media/user-preferences/open-profile-menu-2020.png" alt-text="Screenshot of select the user profile menu, and then My profile.":::

2. From the **General** tab, you can change the following information:
   - Profile picture
   - Display name
   - Preferred email address
   - Whether borders appear for fields on work item forms.

	:::image type="content" source="media/user-preferences/user-profile-dialog-general-tab.png" alt-text="Screenshot of User Profile dialog, General tab.":::

3. From the **Locale** tab, you can change the preferred language, date and time pattern, and time zone. 

	:::image type="content" source="media/user-preferences/user-profile-dialog-locale-tab.png" alt-text="Screenshot of User Profile dialog, Locale tab.":::

4. To change the UI theme, go back to the profile menu and select **Theme**. Choose between **Dark** and **Light**.
5. Select **Save**.

::: moniker-end

User profile settings get updated.

#### [Microsoft Entra profile preview](#tab/preview-page) 

::: moniker range="azure-devops"

We're previewing the ability to use your profile picture, display name, contact email address, and region as configured in Microsoft Entra within Azure DevOps.

:::image type="content" source="media/entra-profile-preview.png" alt-text="Screenshot shows Microsoft Entra profile information in the Profile page.":::

If you encounter any issues using Microsoft Entra profile information, let us know! You can [turn it off](../../project/navigation/preview-features.md) and restore your original profile information, and when you do, be sure to share detailed feedback. We review the feedback carefully to address any concerns. 

:::image type="content" source="media/turn-off-entra-profile-information.png" alt-text="Screenshot shows window for entering feature improvements and feedback for Microsoft Entra profile information.":::

To receive information, tips, and resources related to Azure DevOps, enter a check in the box and select **Save**.

User profile settings get updated.

## FAQs

See the following frequently asked questions and answers.

#### Q: How can I change my profile picture in Microsoft Entra?
A: 
1. Sign in to your [Microsoft 365 account](https://www.microsoft365.com/).
2. Select the camera icon or **Change Photo**, next to your current profile picture.
3. Upload a new photo from your device and adjust it as needed.
4. **Save** your changes.

#### Q: Why did I stop getting email notifications from Azure DevOps?

A: Azure DevOps sends notification emails to the email address configured for your account in Microsoft Entra. If you're not getting notifications, make sure an email address is configured in Microsoft Entra. 

::: moniker-end

[!INCLUDE [temp](../../includes/note-new-teams-not-supported.md)]

---

## Related articles

- [Set your time zone](../settings/timezone-settings-usage.md)
- [Manage your personal notifications](../../organizations/notifications/manage-your-personal-notifications.md)
- [Understand usage and rate limits](../../integrate/concepts/rate-limits.md)
- [Set your favorites](../../organizations/notifications/manage-your-personal-notifications.md)
- [Use personal access tokens](../accounts/use-personal-access-tokens-to-authenticate.md)