---
title: Look up your Azure DevOps platform and version
titleSuffix: Azure DevOps
description: Learn how to find your Azure DevOps Services or Azure DevOps Server platform and version by using the About page.
ms.subservice: azure-devops-new-user
ai-usage: ai-assisted
ms.author: chcomley
author: chcomley
ms.topic: how-to
ms.date: 04/13/2026
monikerRange: '<= azure-devops'
#customer intent: As a developer, I want to access the About page for Azure DevOps systems so I can look up my platform and platform version.
---

# Look up your Azure DevOps platform and version

[!INCLUDE [version-lt-eq-azure-devops](../includes/version-lt-eq-azure-devops.md)]

Access the **About** page from the UI or by URL to find the platform and version for Azure DevOps Services or Azure DevOps Server.

## Azure DevOps Services

Look up the version number for Azure DevOps Services by following these steps:

1. Open a browser window.

1. Enter the following URL. Replace the `<Your_Organization>` placeholder with the name of your organization:

   `https://dev.azure.com/<Your_Organization>/_home/About` 

A page similar to the following example opens and shows the platform in use and the version number:
 
:::image type="content" source="media/provide-feedback/version-azure-devops.png" alt-text="Screenshot of the About page for Azure DevOps Services showing the platform in use by the organization and the version number.":::

## Azure DevOps Server 

To find the version number for Azure DevOps Server, follow these steps in the UI:

1. In Azure DevOps, go to the **Overview** page for your organization.

1. Open the **Profile** menu by selecting your user picture, and then select **Help** > **About**.

A page similar to the following example opens and shows the platform in use and the version number:

:::image type="content" source="media/provide-feedback/about-menu-selection-on-premises.png" alt-text="Screenshot that shows how to open the About page for Azure DevOps Server from the user Profile menu in Azure DevOps." lightbox="media/provide-feedback/about-menu-selection-on-premises.png":::

You can also find the version number by using a URL in the browser:

1. Open a browser window.

1. Enter the following URL. Replace the `<Server>` placeholder with the name of your server, and the `<Collection>` placeholder with the name of your collection:

   `https://<Server>/<Collection>/_home/About` 

A page similar to the following example opens and shows the platform in use and the version number:

:::image type="content" source="media/provide-feedback/version-azure-devops-on-premises.png" alt-text="Screenshot of the About page for Azure DevOps Server on-premises showing the platform in use and the platform version number.":::

## Access server release notes

The following table provides links to the Release to Web (RTW) Release Notes for the most recent versions of Azure DevOps Server. You can also access notes for specific Release Updates and SHA hash values to verify download integrity.

|Version            |RTW notes |Update notes |SHA values |
|-------------------|----------|-------------|-----------|
| **Azure DevOps Server 2022** | [Release](/azure/devops/server/release-notes/azuredevops2022?view=azure-devops&preserve-view=true) | [Update 2](/azure/devops/server/release-notes/azuredevops2022u2?view=azure-devops&tabs=yaml&preserve-view=true) <br> [Update 1](/azure/devops/server/release-notes/azuredevops2022u1?view=azure-devops&tabs=yaml&preserve-view=true) | [SHA](/azure/devops/server/release-notes/azuredevops2022-sha?view=azure-devops&preserve-view=true) |
| **Azure DevOps Server 2020** | [Release](/azure/devops/server/release-notes/azuredevops2020?view=azure-devops&preserve-view=true) | [Update 1](/azure/devops/server/release-notes/azuredevops2020u1?view=azure-devops&preserve-view=true) | [SHA](/azure/devops/server/release-notes/azuredevops2020-sha?view=azure-devops&preserve-view=true) |
| **Azure DevOps Server 2019** | [Release](/azure/devops/server/release-notes/azuredevops2019?view=azure-devops&preserve-view=true) | [Update 1](/azure/devops/server/release-notes/azuredevops2019u1?view=azure-devops&preserve-view=true) | [SHA](/azure/devops/server/release-notes/azuredevops2019-sha?view=azure-devops&preserve-view=true) |

## Related content

* [Azure DevOps features timeline](/azure/devops/release-notes/features-timeline)
* [Report a problem with Visual Studio](/visualstudio/ide/how-to-report-a-problem-with-visual-studio)
