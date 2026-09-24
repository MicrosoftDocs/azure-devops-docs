---
title: Rename your organization
titleSuffix: Azure DevOps Services
description: Learn how to rename your organization and what to do before and after you rename it.
ms.subservice: azure-devops-organizations
ms.topic: how-to
ai-usage: ai-assisted
ms.author: chcomley
author: chcomley
ms.date: 09/10/2026
monikerRange: 'azure-devops'
ms.custom: sfi-image-nochange, support-driven-update
---

# Rename your organization in Azure DevOps

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

You can change your organization name (URL) at any time in Azure DevOps. This action allows you to update the URL to better reflect your organization's branding or structure. Changing the organization name updates the URL used to access your Azure DevOps resources, including the URLs of your projects, repositories and other resources in the organization. Follow the steps in this article to rename your organization and ensure a smooth transition for your team.

> [!CAUTION]
> The rename operation affects your organization's connections and individuals who are currently working with your organization. Before you start, meet the [prerequisites](#prerequisites). The URLs of projects, repositories, and other resources within the organization change when you enable the new organization URL. After the rename, complete the applicable [required updates](#update-references-after-the-rename).

## Prerequisites

| Category | Requirements |
|--------------|-------------|
|**Permissions** |[Organization owner](change-organization-ownership.md).|
|**Access levels**| At least **Basic** access.|
|**Tasks**|- Save your work.<br>- Ensure other members aren't using the service.|

> [!NOTE]
> Wait at least one hour after the most recent rename operation before renaming an organization again.

## Rename your organization

1. Sign in to your organization (`https://dev.azure.com/{yourorganization}`).

2. Select :::image type="icon" source="../../media/icons/gear-icon.png" border="false"::: **Organization settings**.

   :::image type="content" source="../../media/settings/open-admin-settings-vert.png" alt-text="Screenshot showing a gear icon and Organization settings emphasized.":::

3. Select **Overview**, enter a new name for the organization, and then select **Save**. Move the toggle if you want to use the new URL.

   :::image type="content" source="media/rename-vso-organization/rename-organization-new.png" alt-text="Screenshot showing the Organization tab, Name entry, and Save button all emphasized.":::

   [!INCLUDE [organization-name-limitation](../../includes/organization-name-limitation.md)]

4. Confirm that you want to rename your organization and save your changes.

   :::image type="content" source="media/rename-vso-organization/VSOConfirmOrganizationRename.png" alt-text="Screenshot showing confirmation screen for organization rename.":::

Your organization is renamed.

## Update references after the rename

When you enable the new organization URL, notify your users and update references that contain the previous organization name. Complete the following actions as applicable:

- **Bookmarks and links:** Update saved links to projects, repositories, work items, pipelines, and other resources.
- **Client connections:** Reconnect clients such as Visual Studio and Azure DevOps Office Integration to the new organization URL.
- **Git remotes:** Update the remote URL in each local repository. For more information, see [Update the Git remotes on your dev machines](../../repos/git/repo-rename.md#update-the-git-remotes-on-your-dev-machines).
- **TFVC workspaces:** Update the cached organization URL by running the following command for each affected workspace. For more information, see [Workspaces command](../../repos/tfvc/workspaces-command.md).

   ```cmd
   tf workspaces /collection:https://dev.azure.com/{neworganization}
   ```

- **Self-hosted agents:** Remove and reconfigure agents that you registered with the previous organization URL. For more information, see [Remove and reconfigure a Windows agent](../../pipelines/agents/windows-agent.md#remove-and-reconfigure-an-agent), [Linux agent](../../pipelines/agents/linux-agent.md), or [macOS agent](../../pipelines/agents/osx-agent.md).
- **Analytics and Power BI:** Update OData feed URLs and other data source URLs that contain the previous organization name. For the OData URL format, see [Connect with Power BI Data Connector](../../report/powerbi/access-analytics-power-bi.md).
- **Tools and integrations:** Update hardcoded organization URLs in scripts, REST API clients, extensions, pipeline variables, webhooks, and other external integrations. Then, test each integration with the new URL.
- **Workload identity federation:** Check Azure Resource Manager service connections that use a name-based subject in the format `sc://<organization-name>/<project-name>/<service-connection-name>`. If the subject contains the previous organization name, update the federated credential. ID-based subjects don't require an update. For more information, see [Check the issuer URL for accuracy](../../pipelines/release/troubleshoot-workload-identity.md#check-the-issuer-url-for-accuracy).

## Frequently asked questions (FAQs)

### Q: If I change the organization URL, can I switch back?

A: The organization URL setting is two-way toggle. You can turn on the new domain name URL. You can also turn off the new URL - then, you go back to using old URL format.  

## Related content

- [Resolve orphaned organization](resolve-orphaned-organization.md)
- [Delete an organization](delete-your-organization.md)
- [Connect your organization to Microsoft Entra ID](connect-organization-to-azure-ad.md)
