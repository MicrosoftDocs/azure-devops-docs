---
ms.technology: devops-ecosystem
title: Make Your Extension or Integration Public | Extensions for Azure DevOps
description: Guideline for making an integration or extension publicly visible on the Visual Studio Marketplace
ms.assetid: d4dab00f-5089-4754-85f0-19bff1cb364a
ms.topic: conceptual
monikerRange: '>= azure-devops-2019'
ms.author: chcomley
author: chcomley
ms.date: 05/08/2019
---

# Make your extension or integration public

[!INCLUDE [version-vsts-plus-azdevserver-2019](../../includes/version-vsts-plus-azdevserver-2019.md)]

> **Developing for Visual Studio or Visual Studio Code?** If so, you do not need to request verification. Verification is only required for Azure DevOps integrations or extensions.

The [Visual Studio Marketplace](https://marketplace.visualstudio.com/azuredevops) is where users can get extensions, tools, products, and services that extend Visual Studio, Visual Studio Code, or Azure DevOps. 

This page covers the required steps to make your integration or extension listing publicly available in the Marketplace. 

* Learn more about developing an [extension for Azure DevOps](../overview.md)
* Learn more about [packaging and publishing an extension to the Marketplace](./overview.md)
* Learn more about [packaging and publishing an integration to the Marketplace](./integration.md)

> As you are developing your extension or the content for your Marketplace page (for either an extension or integration), your extension can and should remain private. To make your extension available publicly, you need to set the [public flag](../develop/manifest.md#public-flag) to true in your manifest.

## Qualifications

To have a public listing on the Marketplace, your integration or extension must meet the following qualifications:

- Works with or extends Azure DevOps.
- You (or your company) own, develops, and is licensed to distribute and advertise the integration or extension.
- The extension or integration is actively maintained.

Microsoft might also request a demo and to review the content planned for your Marketplace entry.


## Top Publisher 
> The Top Publisher program is only available for publishers with one or more public Azure DevOps extensions or integrations. It is not applicable for Visual Studio IDE and Visual Studio Code extension publishers.

The Top Publisher program <img src="media/top-publisher.png" alt="Top Publisher badge" width="25"/> recognizes publishers who have shown commitment to their customers and the Marketplace through exemplary policies, quality, reliability, and support. Once marked so, all of their public Azure DevOps offerings (extensions and integrations) display the Top Publisher badge. This helps customers feel more confident in evaluating and acquiring their offerings.

### Requirements

1. For each global Azure DevOps offering under the publisher, ensure you have the following items:

   * Comprehensive and up-to-date privacy policy
   * Comprehensive and up-to-date license that is, end-user license agreement
   * Comprehensive and up-to-date support policy. Your customers should have access your support URL and see a clear way to get support from you: file a ticket, email your support team, or other ways to contact you. You should offer support for about 8 hours a day for all business days in your local time zone for all your offerings. And a documented low response time for paid offerings for critical issues.
   * Comprehensive and high-quality documentation, which could be hosted in your domain, be within your offering, or hosted in a public GitHub repo. Customers should ideally get an overview, quickstart, and how-to-guides.
   * Timely and satisfactory responses to valid questions under the Q&A section: answer all valid questions under the Q&A section timely (roughly within a week) and satisfactorily. Responses to reviews are welcome too.

   Refer the [extension manifest](../develop/manifest.md) on how to add policies to your offering.

2. Update your publisher profile

    Through publisher profile, you have a way to showcase all of your offerings in one place along with key publisher-related information. To provide the information, which shows up in the profile:

    * Sign in to https://marketplace.visualstudio.com/manage/publishers using the account with which you publish and manage your offerings in Marketplace
    * Select the publisher and fill in the About you section under the **Details** tab. Below is an example of the About you section for Microsoft (the publisher):       
      <img src="media/microsoft-about-you-section.png" alt="Microsoft Details" width="800" />
    * Save your changes and use the 'View profile' action towards the upper portion of the page to see how it appears to consumers. You may use this profile page to evangelize your offering(s).


### Apply to be a Top Publisher

1. Sign in to https://marketplace.visualstudio.com/manage/publishers using the account with which you publish and manage your offerings in Marketplace
2. Select the publisher and navigate to its **Top Publisher** tab. Note: you need to have one or more global Azure DevOps (Server/Service) extension or integration for the tab to appear.  
3. If you meet part of the previously listed requirements and are the publisher's owner, you see an option to apply for the program. On application, an email is sent to the Marketplace team to review your case. They respond in under 10 business days with next steps, clarifying questions or with the grant of the badge.

> The team likely looks at additional parameters, such as active uptake of your offerings, install/get started counts and ratings & reviews across your offerings before granting the badge. <br> Microsoft reserves the right to grant, reject or revoke the Top Publisher badge at any time.

Once a publisher is a Top Publisher, then all its future updates and offerings must meet the previously listed requirements.
