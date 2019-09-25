---
ms.prod: devops
ms.technology: devops-ecosystem
title: Make Your Extension or Integration Public | Extensions for Azure DevOps Services
description: Guideline for making an integration or extension publicly visible on the Visual Studio Marketplace
ms.assetid: d4dab00f-5089-4754-85f0-19bff1cb364a
ms.topic: conceptual
ms.manager: jillfra
monikerRange: '>= azure-devops-2019'
ms.author: chcomley
author: chcomley
ms.date: 05/08/2019
---

# Make your extension or integration public

> **Developing for Visual Studio or Visual Studio Code?** If so, you do not need to request verification. Verification is only required for Azure DevOps integrations or extensions.

The [Visual Studio Marketplace](https://marketplace.visualstudio.com/azuredevops) is a single place users can go to find and purchase extensions, tools, products, and services that extend Visual Studio, Visual Studio Code, or Azure DevOps. 

This page covers the required steps to make your integration or extension listing publicly available in the Marketplace. 

* Learn more about developing an [extension for Azure DevOps](../index.md)
* Learn more about [packaging and publishing an extension to the Marketplace](./overview.md)
* Learn more about [packaging and publishing an integration to the Marketplace](./integration.md)

> As you are developing your extension or the content for your Marketplace page (for either an extension or integration), your extension can and should remain private.

## Qualifications

To have a public listing on the Marketplace, your integration or extension must meet the following qualifications:

1. Works with or extends Azure DevOps.
2. You (or your company) owns, develops, and is licensed to distribute and advertise the integration or extension.
3. The extension or integration is actively maintained.

Microsoft might also request a demo and to review the content planned for your Marketplace entry.

## Process

The process to have a public Azure DevOps Services listing for an integration or extension is the same. The publisher needs to be verified in order to do so. Only **verified** publishers can have public offerings for Azure DevOps in the Marketplace.

Once you are ready to publish a public Azure DevOps listing to the Marketplace, follow these steps:

1. Visit http://marketplace.visualstudio.com/manage/publishers and login with the organization using which you publish and manage Azure DevOps Services listings in Marketplace.
2. Select the publisher and through the **Details tab** apply for publisher verification. Find the appropriate section towards the bottom of the tab.
3. Expect Microsoft to approve or respond within 3 business days to your verification request.

Once your publisher is verified, you need to set the [public flag](../develop/manifest.md#public-flag) to true in your manifest for your extension to be available publicly.

> **Important**: Once your publisher is verified, you can't change its display name without contacting Microsoft.


## Top Publisher 
> The Top Publisher program is only available for publishers with one or more public Azure DevOps extensions or integrations. It is not applicable for Visual Studio IDE and Visual Studio Code extension publishers.

The Top Publisher program <img src="_img/top-publisher.png" alt="Top Publisher badge" width="25"/> recognizes publishers who have shown commitment to their customers and the Marketplace through exemplary policies, quality, reliability, and support. Once marked so, all of their public Azure DevOps offerings (extensions and integrations) display the Top Publisher badge. This helps customers feel more confident in evaluating and acquiring their offerings.

### Requirements

1. For each public Azure DevOps offering under the publisher, ensure the presence of following:

   * Comprehensive and up-to-date privacy policy
   * Comprehensive and up-to-date license i.e. end user license agreement
   * Comprehensive and up-to-date support policy. Your customers should be able to access your support URL and see a clear way to get support from you: file a ticket, email your support team, or other ways to contact you. Preferably offer support for about 8 hours a day for all business days in your local time zone for all your offerings. And a documented low response time for paid offerings for critical issues.
   * Comprehensive and high quality documentation: this could be hosted in your domain, be within your offering, or hosted in a public GitHub repo. Customers should ideally get an overview, quickstart and how-to-guides.
   * Timely and satisfactory responses to valid questions under the Q&A section: answer all valid questions under the Q&A section timely (roughly within a week) and satisfactorily. Responses to reviews are welcome too.

   Refer the [extension manifest](../develop/manifest.md) on how to add policies to your offering.

2. Update your publisher profile

    Through publisher profile, you have a way to showcase all of your offerings in one place along with key publisher related information. To provide the information which shows up in the profile:

    * Sign in to http://marketplace.visualstudio.com/manage/publishers using the account with which you publish and manage your offerings in Marketplace
    * Select the publisher and fill in the About you section under the **Details** tab. Below is an example of the About you section for Microsoft (the publisher):       
      <img src="_img/microsoft-about-you-section.png" alt="Microsoft Details" width="800" />
    * Save your changes and use the 'View profile' action towards the top of the page to see how your profile page appears to the consumers. You may use this profile page to evangelize your offering(s).


### Apply to be a Top Publisher

* Sign in to http://marketplace.visualstudio.com/manage/publishers using the account with which you publish and manage your offerings in Marketplace
* Select the publisher and navigate to its **Top Publisher** tab. Note: you need to have one or more public Azure DevOps (Server/Service) extension or integration for the tab to appear.  
* If you meet part of the requirements stated above and are the publisher's owner, you see an option to apply for the program. On application, an email is sent to the Marketplace team to review your case. They respond in under 10 business days with next steps, clarifying questions or with the grant of the badge.

> The team likely looks at additional parameters, such as active uptake of your offerings, install/get started counts and ratings & reviews across your offerings before granting the badge. <br> Microsoft reserves the right to grant, reject or revoke the Top Publisher badge at any time.

Once a publisher is a Top Publisher, then all its future updates and offerings must meet the above requirements.