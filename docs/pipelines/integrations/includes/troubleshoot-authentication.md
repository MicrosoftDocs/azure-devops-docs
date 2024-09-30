---
ms.topic: include
ms.subservice: azure-devops-integration
title: Azure Pipelines with Slack
ms.manager: bijuv
ms.author: atinb
author: atinb
ms.date: 7/22/2024
---

If you get the following errors when using the Azure Pipelines App for Slack, try the procedures in this section.

### Sorry, something went wrong. Please try again.

The Azure Pipelines app uses the OAuth authentication protocol, and requires [Third-party application access via OAuth](../../../organizations/accounts/change-application-access-policies.md) to be enabled. To enable this setting, navigate to **Organization Settings** > **Security** > **Policies**, and enable **Third-party application access via OAuth**.

:::image type="content" source="../media/troubleshooting/third-party-app-consent.png" alt-text="A screenshot showing how to enable third party access via OAuth.":::

### Configuration failed. Please make sure that the organization exists and that you have sufficient permissions.

1. Sign out of Azure DevOps by navigating to `https://aka.ms/VsSignout`.

1. In a private/incognito browser window, navigate to `https://aex.dev.azure.com/me` and sign in. Make sure to select the directory containing the organization that has your pipeline.

   :::image type="content" source="../media/troubleshooting/profile-page.png" alt-text="A screenshot showing how to select your pipeline directory.":::

1. In the same browser, open a new tab and go to `https://slack.com`. Sign in to your workspace using the web client, and then run `/azpipelines signout` followed by `/azpipelines signin`. 

1. Select the `Sign in` button. If you're redirected to a consent page, verify that the directory displayed next to your email address matches the one you signed in to.

