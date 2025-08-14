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

If you are seeing this error, you are most likely a Guest user in the Entra tenant connected to your Azure DevOps organization. You will need to have an Entra Member go through the configuration steps.

