---
title: Use Azure Repos with Microsoft Teams
titleSuffix: Azure Repos
description: Monitor Azure Repos from Microsoft Teams.
ms.service: azure-devops
ms.subservice: azure-devops-integration
ms.topic: how-to 
ms.custom: cross-service
ms.author: chcomley
author: chcomley 
monikerRange: 'azure-devops'
ms.date: 05/22/2023
---

# Use Azure Repos with Microsoft Teams

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]  

If you use [Microsoft Teams](https://products.office.com/microsoft-teams/group-chat-software) and Azure Repos, you can use the 
[Azure Repos app for Teams](https://appsource.microsoft.com/product/office/WA200000643) to monitor your repos. The app supports monitoring both Git and Team Foundation Version Control (TFVC) repos, but it doesn't support integration with GitHub repos. 

In this article, learn how to do the following tasks: 

> [!div class="checklist"]  
> * Add the Azure Repos app to your team in Microsoft Teams
> * Connect the Azure Repos app to your repos
> * Manage subscriptions to repo related events in your channel
> * Search and share PR info using compose extension
> * Preview PR URLs
> * Remove subscriptions and repos from a channel

## Prerequisites

- Manage your subscription, so you receive notifications in your channel whenever code gets pushed or checked in, or when a pull request (PR) gets created, updated, or merged. To create subscriptions for repo-related events, you must be a member of the **Project Administrators** group, or a team administrator.  To get added, see [Change project-level permissions](../../organizations/security/change-project-level-permissions.md) or [Add a team administrator](../../organizations/settings/add-team-administrator.md). 
- To receive notifications, enable the **Third-party application access via OAuth** setting for the Azure DevOps organization. See [Change application access policies for your organization](../../organizations/accounts/change-application-access-policies.md).

> [!NOTE]
> * Notifications are currently not supported inside direct messages.
> * You can only link the Azure Repos app for Microsoft Teams to a project hosted on Azure DevOps Services.

## Add the Azure Repos app to a team in Microsoft Teams

1. Go to the Azure Repos app in Microsoft Teams, [Microsoft Teams > Azure Repos](https://teams.microsoft.com/l/app/fc057f53-bb6b-4868-9eb8-a93a8a361b71?source=app-details-dialog).
2. Select **Add** or if you already downloaded the app, select the dropdown menu next to **Open**, and then select **Add to a team**. 
   
3. Enter a team or channel name, and then select **Set up a bot**.
   
   :::image type="content" source="media/integrations-teams/welcome.png" alt-text="Screenshot of welcome message from Azure Repos in Teams.":::

## Connect the Azure Repos app to your repos

1. Once the app is installed in your team, enter the following text into the reply field: `@azure repos signin`

   If your Microsoft Teams and Azure Boards are in different tenants, select **Sign in with different email**. 
   
   :::image type="content" source="media/integrations-teams/azure-repos-signin-teams.png" alt-text="Screenshot showing Teams sign in entry for Azure Repos.":::

   :::image type="content" source="media/integrations-teams/signin-complete.png" alt-text="Screenshot showing sign in complete reply.":::

2. To monitor all Git repos in a project, enter `@azure repos subscribe [project url]` into the channel. Be sure to add your project URL. The project URL can be to any page within your project (except URLs to repos).

   You can also monitor a specific repo using: `@azure repos subscribe [repo url]`.

   The repo URL can be to any page within your repo that has your repo name, for example, `@azure repos subscribe https://dev.azure.com/myorg/myproject/_git/myrepo`, or for TFVC repos: `@azure repos subscribe https://dev.azure.com/myorg/myproject/_versionControl`.

3. The `subscribe` command gets you started with a default subscription. For Git repos, the channel gets subscribed to the **Pull request created** event (with target branch = main). For TFVC repos, the channel is subscribed to the **Code checked in** event.

    :::image type="content" source="media/integrations-teams/subscriptions-added-confirmation.png" alt-text="Screenshot showing default subscriptions creation message.":::

## Manage subscriptions

To view, add, and remove subscriptions for a channel, enter the following text: `@azure repos subscriptions`.

You see a list of all the current subscriptions for the channel and you can add new subscriptions or remove existing ones. 
Customize your notifications with various filters, as described in the following section.

> [!NOTE]
> Team administrators can't remove or modify subscriptions created by Project administrators.

> [!div class="mx-imgBorder"]
> ![View subscriptions](./media/integrations-teams/Subscriptions.png)

### Use filters to get only notifications that you want

When you subscribe to a repo with `@azure repos subscribe`, a default subscription gets created with no filters applied.
Often, users need to customize these subscriptions to be notified only when certain conditions are met. 
The following screenshots show an example of setting up notifications only when our team is in the reviewer list for a PR.

1. Enter the following text into your channel: `@azure repos subscriptions`.
2. In the list of subscriptions, if there's a subscription that you don't want or must be modified, select **Remove** to delete it.
3. Select the **Add subscription** button.
4. Choose an event type, and then select **Next**.
   
   :::image type="content" source="media/integrations-teams/filters-1.png" alt-text="Screenshot showing event type selection.":::

5. Choose a repo, and then select **Next**.
   
   :::image type="content" source="media/integrations-teams/filters-2.png" alt-text="Screenshot showing repo selection.":::

6. Select the appropriate filters to customize your subscription, and then select **Submit**.
   
   :::image type="content" source="media/integrations-teams/filters-3.png" alt-text="Screenshot showing chosen filters.":::

> [!NOTE]
> * All the filters are typically drop-downs. However, if the drop-down has greater than 100 items, you must manually enter the values.
> * For the TFVC **Code Checked in** event, the filter **Under path** must be of the format `$/myproject/path`.

## Search and share pull request information using compose extension

To help users search and share information about pull requests, Azure Repos app for Microsoft Teams supports a compose extension. You can search for pull requests by ID or name. For the extension to work, sign in to the Azure Repos project by entering `@azure repos signin` or by signing into the compose extension directly.

:::image type="content" source="media/integrations-teams/teams-repos-compose-extension.png" alt-text="Screenshot showing the compose extension.":::

## Preview pull request URLs

When you paste the URL of a PR, a preview shows like the one in the following image, which helps to keep PR-related conversations contextual and accurate. You must be signed in, and then you can preview PRs for URLs in all channels in a Team.

:::image type="content" source="media/integrations-slack/URL-Preview.png" alt-text="Screenshot showing URL unfurling.":::

## Remove subscriptions and repos from a channel

To delete all the subscriptions related to any repo in the project and remove the repos from the channel, enter the following text into Teams: `@azure repos unsubscribe all [project url]`. Make sure to enter the project URL. Only project admins can do this task.

## Threaded notifications

To link a set of related notifications and also to reduce the space occupied by notifications in a channel, notifications get threaded. All notifications linked to a particular pull request are linked together.

**Compact view of threaded notifications**
:::image type="content" source="media/integrations-teams/threads-repos-compact-view.png" alt-text="Screenshot showing compact view of threaded notifications.":::

**Expanded view of threaded notifications**
:::image type="content" source="media/integrations-teams/threads-repos-expanded-view.png" alt-text="Screenshot showing expanded view of threaded notifications.":::

## Command reference

The following table lists all the `azure repos` commands you can use in your Teams channel.

|Command	| Functionality |
| -------------------- |----------------|
|`@azure repos subscribe [repo url/ project url]`	| Subscribe to a repo or all repos in a project to receive notifications |
| `@azure repos subscriptions`	| Add or remove subscriptions for this channel |
| `@azure repos signin`	| Sign in to your Azure Repos organization |
| `@azure repos signout`	| Sign out from your Azure Repos organization |
|`@azure repos feedback`	| Report a problem or suggest a feature |
| `@azure repos unsubscribe all [project url]` | Remove all repos (belonging to a project) and their associated subscriptions from a channel |

 ## Multi-tenant support

If you're using a different email or tenant for Microsoft Teams and Azure DevOps, do the following steps to sign in, based on your use case. 

|Use case |Email ID + Microsoft Teams tenant|Email ID + Azure DevOps tenant|Steps |
|---------|---------|---------|---------|
|1  |email1@abc.com (tenant 1) | email1@abc.com (tenant 1)        | Select **Sign in**.        |
|2  |email1@abc.com (tenant 1) | email1@abc.com (tenant 2)        |Sign in to Azure DevOps. In the same browser, start a new tab and go to https://teams.microsoft.com/. Run the signin command and select **Sign in**.  |
|3  |email1@abc.com (tenant 1) | email2@pqr.com (tenant 2)        | Select **Sign in with different email address**, and then in the email ID picker use the email2 to sign in to Azure DevOps.        |
|4  |email1@abc.com (tenant 1) | email2@pqr.com (non default tenant 3)        |  This scenario isn't supported.     |

## Troubleshoot

If you're experiencing the following errors when using the Azure Repos App, follow the procedures in this section. 

[!INCLUDE [troubleshooting](./includes/repos-troubleshoot-authentication.md)]

In the **same browser**, start a new tab and sign in to `https://teams.microsoft.com/`. Run the `@Azure Repos signout` command and then run the `@Azure Repos signin` command in the channel where the Azure Repos app for Microsoft Teams is installed.

Select the `Sign in` button and you're redirected to a consent page like the one in the following example. Ensure that the directory shown beside the email is same as what was chosen in the previous step. Accept and complete the sign-in process.

> [!div class="mx-imgBorder"]
> ![Consent to the requested app permissions](media/troubleshooting/repos-consent-page-teams.png)

If these steps don't resolve your authentication issue, reach out to us at [Developer Community](https://developercommunity.visualstudio.com/spaces/21/index.html).

## Related articles

- [Azure Boards with Teams](../../boards/integrations/boards-teams.md)
- [Azure Pipelines with Teams](../../pipelines/integrations/microsoft-teams.md)
