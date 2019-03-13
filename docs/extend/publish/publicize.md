---
ms.prod: devops
ms.technology: devops-ecosystem
title: Make Your Extension or Integration Public | Extensions for Azure DevOps Services
description: Guideline for making an integration or extension publicly visible on the Visual Studio Marketplace
ms.assetid: d4dab00f-5089-4754-85f0-19bff1cb364a
ms.topic: conceptual
ms.manager: jillfra
monikerRange: '>= tfs-2017'
ms.author: elbatk
author: elbatk
ms.date: 08/29/2016
---

# Make your extension or integration public

The [Visual Studio Marketplace](https://marketplace.visualstudio.com/azuredevops) is a single place users can go to find and purchase extensions, tools, products, and services that extend Visual Studio, Azure DevOps Services, Visual Studio Code, or Team Foundation Server. 

This page covers the required steps to make your integration or extension listing publicly available in the Marketplace. 

* Learn more about developing an [extension for Azure DevOps Services](../index.md)
* Learn more about [packaging and publishing an extension to the Marketplace](./overview.md)
* Learn more about [packaging and publishing an integration to the Marketplace](./integration.md)


> As you are developing your extension or the content for your Marketplace page (for either an extension or integration), your extension can and should remain private.

## Qualifications

To have a public listing on the Marketplace, your integration or extension must meet the following qualifications:

1. Works with or extends one of the following Microsoft products or services:
   * Visual Studio, or
   * Azure DevOps Services (formerly Visual Studio Online), or
   * Visual Studio Code, or
   * Visual Studio Team Foundation Server (2012, 2013, or 2015)
2. You (or your company) owns, develops, and is licensed to distribute and advertise the integration or extension.
3. The extension or integration is actively maintained.

Microsoft might also request a demo and to review the content planned for your Marketplace entry. For more details, refer to the [Visual Studio Marketplace Publisher Agreement](https://cdn.vsassets.io/v/M146_20190123.39/_content/Visual-Studio-Marketplace-Publisher-Agreement.pdf), which you agreed to when creating your publisher.

## Process

The process to have a public Azure DevOps Services listing for an integration or extension is the same. The publisher needs to be verified in order to do so. Only **verified** publishers can have public Azure DevOps Services items in the Marketplace.

> **Developing for Visual Studio, Visual Studio for Mac or Visual Studio Code?** If so, you do not need to request verification. Verification is only required for Azure DevOps Services integrations or extensions.

Once you are ready to publish a public Azure DevOps Services listing to the Marketplace, follow these steps:

1. Visit http://marketplace.visualstudio.com/manage/publishers and login with the organization using which you will publish and manage Azure DevOps Services listings in Marketplace.
2. Select the publisher and through the **Details tab** apply for publisher verification. You will find the appropriate section towards the bottom of the tab.
3. Expect Microsoft to approve or respond within 3 business days to your verification request.

Once your publisher is verified, you need to set the [public flag](../develop/manifest.md#public-flag) to true in your manifest for your extension to be available publicly.

> **Important**: Once your publisher is verified, you will not be able to change its display name without contacting Microsoft.

## Contact

Send questions about publishing items to the Visual Studio Marketplace to [vsmarketplace@microsoft.com](https://aka.ms/vsmarketplace-contact).
