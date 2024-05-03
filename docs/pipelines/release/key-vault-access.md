---
title: Access private key vaults from your pipeline
description: How to access a key vault with disabled public access from your pipeline.
ms.author: rabououn
author: ramiMSFT
ms.date: 05/02/2024
monikerRange: '>= azure-devops-2019'
"recommendations": "true"
---

# Access private key vaults from your pipeline

Azure Key Vaults offer a robust solution for managing credentials such as keys, secrets, and certificates with seamless security. Using Azure pipelines, you can streamline the process of accessing and using key vaults, making it effortless to store and retrieve credentials.

In certain scenarios, organizations prioritize security by restricting access to key vaults exclusively to designated Azure virtual networks to ensure the highest level of security for critical applications.

This article will walk you through configuring your inbound access points to access and use a private key vault in your pipeline.

## Prerequisites

- An Azure DevOps organization and a project. Create an [organization](../../organizations/accounts/create-organization.md) or a [project](../../organizations/projects/create-project.md#create-a-project) if you haven't already.

- An Azure subscription. [Create a free Azure account](https://azure.microsoft.com/free) if you don't have one already.

## Link key vault to a variable group

Azure Pipelines enables developers to link an Azure key vault to a variable group and map selective vault secrets to it. A key vault that is used as a variable group can be accessed:

1. From Azure DevOps, during the variable group configuration time.
1. From a Self-hosted agent, during the pipeline job runtime.

Follow the steps outlined in [Add & use variable groups](../library/variable-groups.md#link-secrets-from-an-azure-key-vault) to link your secrets to a variable group. See also [Manage key vault secrets](../library/variable-groups.md#link-secrets-from-an-azure-key-vault) for additional guidance on effectively managing your secrets.

:::image type="content" source="media/access-private-key-vault.png" alt-text="A diagram showing the two different paths to access a private key vault.":::   

## 1. Configure inbound access from Azure DevOps

To enable access to your key vault from Azure DevOps, you must grant access from specific static IP ranges. These ranges are determined by the geographical location of your Azure DevOps organization.

1. Sign in to your Azure DevOps organization.

1. Select **Organization settings**.

1. Navigate to **Overview**, where you'll find the geographical location listed towards the bottom of the page.

    :::image type="content" source="media/organization-geographical-location.png" alt-text="A screenshot showing how to find the geographical location of your Azure DevOps organization.":::   

1. [Find your geography IP V4 ranges](../../organizations/security/allow-list-ip-url.md#inbound-connections).

1. [Configure your key vault](/azure/key-vault/general/network-security#key-vault-firewall-enabled-ipv4-addresses-and-ranges---static-ips) to allow access from static IP ranges.