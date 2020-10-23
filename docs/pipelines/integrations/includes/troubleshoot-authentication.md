---
ms.topic: include
ms.technology: devops-collab
title: Azure Pipelines with Slack
ms.manager: bijuv
ms.author: atinb
author: atinb
ms.date: 02/13/2020
---

* [Sorry, something went wrong. Please try again.](#sorry-something-went-wrong-please-try-again)
* [Configuration failed. Please make sure that the organization '{organization name}' exists and that you have sufficient permissions.](#configuration-failed-please-make-sure-that-the-organization-organization-name-exists-and-that-you-have-sufficient-permissions)

### Sorry, something went wrong. Please try again.

The Azure Pipelines app uses the OAuth authentication protocol, and requires [Third-party application access via OAuth for the organization](../../../organizations/accounts/change-application-access-policies.md) to be enabled. To enable this setting, navigate to **Organization Settings** > **Security** > **Policies**, and set the **Third-party application access via OAuth for the organization** setting to **On**.

> [!div class="mx-imgBorder"]
> ![Enable the Third-party application access via OAuth for the organization setting](../media/troubleshooting/third-party-app-consent.png)

### Configuration failed. Please make sure that the organization '{organization name}' exists and that you have sufficient permissions.

Sign out of Azure DevOps by navigating to `https://aka.ms/VsSignout` using your browser.

Open an **In private** or **incognito** browser window and navigate to `https://aex.dev.azure.com/me` and sign in. In the dropdown under the profile icon to the left, select the directory that contains the organization containing the pipeline for which you wish to subscribe.

> [!div class="mx-imgBorder"]
> ![Select the directory that contains the organization that contains the pipeline](../media/troubleshooting/profile-page.png)