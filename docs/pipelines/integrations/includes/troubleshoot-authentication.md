---
ms.topic: include
ms.subservice: azure-devops-integration
title: Azure Pipelines with Slack
ms.manager: bijuv
ms.author: atinb
author: atinb
ms.date: 3/27/2023
---

If you are experiencing the following errors when using the Azure Pipelines App for Slack, follow the procedures in this section. 

### Sorry, something went wrong. Please try again

The Azure Pipelines app uses the OAuth authentication protocol, and requires [Third-party application access via OAuth](../../../organizations/accounts/change-application-access-policies.md) to be enabled. To enable this setting, navigate to **Organization Settings** > **Security** > **Policies**, and turn on the **Third-party application access via OAuth for the organization**.

:::image type="content" source="../media/troubleshooting/third-party-app-consent.png" alt-text="A screenshot showing how to enable third party access via OAuth.":::

### Configuration failed. Please make sure that the organization exists and that you have sufficient permissions

Sign out of Azure DevOps by navigating to this URL: `https://aka.ms/VsSignout`.

Open a private/incognito browser window and navigate to `https://aex.dev.azure.com/me` and sign in. Select the directory that contains the organization where the pipeline you want to subscribe to is located.

:::image type="content" source="../media/troubleshooting/profile-page.png" alt-text="A screenshot showing how to select your pipeline directory.":::

Using the **same browser**, open a new tab and go to `https://slack.com`. Log in to your workspace using the web client, and then run the `/azpipelines signout` command followed by the `/azpipelines signin`. 

Select the `Sign in` button and you'll be redirected to a consent page as shown in the example below. Verify that the directory displayed next to your email address matches the one selected in the previous step. Select **Accept** to complete the sign-in process.

:::image type="content" source="../media/troubleshooting/consent-page-slack.png" alt-text="A screenshot showing how to allow pipelines slack integration.":::
