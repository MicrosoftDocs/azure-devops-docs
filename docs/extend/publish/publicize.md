---
ms.prod: vs-devops-alm
ms.technology: vs-devops-extensions-api
title: Make Your Extension or Integration Public | Extensions for VSTS
description: Guideline for making an integration or extension publicly visible on the Visual Studio Marketplace
ms.assetid: d4dab00f-5089-4754-85f0-19bff1cb364a
ms.manager: douge
ms.author: elbatk
ms.date: 08/29/2016
---

# Make your extension or integration public

The [Visual Studio Marketplace](https://marketplace.visualstudio.com) is a single place users can go to find and purchase extensions, tools, products, and services that extend Visual Studio, VSTS, Visual Studio Code, or Team Foundation Server. 

This page covers the required steps to make your integration or extension listing publicly available in the Marketplace. 

* Learn more about developing an [extension for VSTS](../index.md)
* Learn more about [packaging and publishing an extension to the Marketplace](./overview.md)
* Learn more about [packaging and publishing an integration to the Marketplace](./integration.md)


> As you are developing your extension or the content for your Marketplace page (for either an extension or integration), your extension can and should remain private.

## Qualifications

To have a public listing on the Marketplace, your integration or extension must meet the following qualifications:

1. Works with or extends one of the following Microsoft products or services:
   * Visual Studio, or
   * VSTS (formerly Visual Studio Online), or
   * Visual Studio Code, or
   * Visual Studio Team Foundation Server (2012, 2013, or 2015)
2. You (or your company) owns, develops, and is licensed to distribute and advertise the integration or extension.
3. The extension or integration is actively maintained.

Microsoft might also request a demo and to review the content planned for your Marketplace entry. For more details, refer to the [Visual Studio Marketplace Publisher Agreement](http://aka.ms/vsmarketplace-agreement), which you agreed to when creating your publisher.

## Process

The process to have a public VSTS listing for an integration or extension is the same. The first step is verification of your publisher. Only **verified** publishers can have public items on the Marketplace.

> **Developing for Visual Studio Code?** If so, you do not need to request verification. Verification is only required for VSTS integrations or extensions.

Once you are ready to publish a public VSTS listing to the Marketplace, follow these steps:

1. Send an email to [vsmarketplace@microsoft.com](http://aka.ms/vsmarketplace-contact).
   * Use the subject `Publisher verification request`.
   * Include your publisher ID in the e-mail.
   * Send from your organization/company e-mail address.   
   * Share details of your association with a business/company and other information such as:
        * Link to your site 
        * Link to your LinkedIn account 
        * Link to your GitHub account 
        * Link to your blog 
   * Share details about your extension/integration.
2. Microsoft will respond within 2 business days.

You might be asked to provide more details about yourself or your organization/company. You might also be asked to share more details about your integration or share your extension with Microsoft.

Once your publisher id has been verified you need to set the [public flag](../develop/manifest.md#public-flag) to true in your manifest for your extension to be available publicly.

> **Important**: Once your publisher is verified, you will not be able to change its display name without contacting Microsoft.

> Please make sure that the publisher ID has no reference to Microsoft or any of its products. Create a publisher ID that is representative of you and/or your company. For instance, if your company name is Fabrikam Fiber, a good publisher name is "fabrikam-fiber". Microsoft reserves the rights to reject publisher IDs that do not meet its review criteria.

## Contact

Send questions about publishing items to the Visual Studio Marketplace to [vsmarketplace@microsoft.com](http://aka.ms/vsmarketplace-contact).
