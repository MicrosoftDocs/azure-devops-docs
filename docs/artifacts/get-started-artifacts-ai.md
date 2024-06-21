---
title: Publish your first package to an Azure artifacts feed
description: Learn how to publish your first package to your Azure Artifacts feed.
ms.service: azure-devops-artifacts
ms.topic: quickstart
ms.author: rabououn
author: ramiMSFT
ms.date: 06/21/2024
monikerRange: '<= azure-devops'
"recommendations": "true"
---

# Publish your first package to an Azure artifacts feed

With Azure Artifacts, you can manage your dependencies and store various package types from multiple sources in a single feed. In this article, we will guide you through the process of publishing your first package to an Azure Artifacts feed. You will also have the option to leverage the power of GitHub Copilot to streamline this process and explore the capabilities of the GitHub Copilot Chat right from your Visual Studio Code interface. 

## Prerequisites

* Create an Azure DevOps [organization](../organizations/accounts/create-organization.md) and a [project](../organizations/projects/create-project.md#create-a-project) if you haven't already.

* Install the [latest NuGet version](https://www.nuget.org/downloads).

* Install the [Azure Artifacts Credential Provider](https://github.com/microsoft/artifacts-credprovider#azure-artifacts-credential-provider).

* A [GitHub Copilot Subscription](https://docs.github.com/en/copilot/using-github-copilot/using-github-copilot-code-suggestions-in-your-editor?tool=vscode). Sign up for a 30-day free trial if you haven't already.

## Create a feed

[!INCLUDE [](includes/create-feed.md)]