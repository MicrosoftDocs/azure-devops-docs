---
title: Extension Report | Azure DevOps Services
description: An overview of reports available for an extension. 
ms.assetid: baf829df-0975-46d8-8dea-7a5c9f6968ef
ms.prod: devops
ms.technology: devops-ecosystem
ms.topic: conceptual
ms.manager: jillfra
monikerRange: '>= tfs-2017'
ms.author: elbatk
author: elbatk
ms.date: 04/13/2018
---

# Extension reporting hub

Now that your extension is available in the [Visual Studio Marketplace](https://review.docs.microsoft.com/en-us/vsts/extend/extension-report) you can use the **Reports** feature to track and analyze how the extension is performing and take required actions. 
To visit the extension hub, browse to your [publisher page](https://aka.ms/vsmarketplace-manage) and select the extension or click **Reports** link on the extension details page.

## Acquisition 
You can view acquisition related data in this tab for the selected period. 
* Aggregated acquisition in the selected period with respect to overall acquisition
* Aggregated acquisition split by extension downloads, Azure DevOps Services and TFS connected install for free extension
* Aggregated acquisition split by trials, Azure DevOps Services and TFS connected buy for paid extension
* Daily trend of extension page views with acquisition for Azure DevOps Services and TFS connected server
* Conversion percentage from page views to acquisition

For paid extension, all transactional details for buy and trials is available with date, organization name, trial end date, and quantity. You can use the **Contact** action to reach out to your users for transactional communication. See the [Contact](#contact) section provided later in this topic for more details. 

## Uninstall
You can view how many organizations have uninstalled your extension, daily trend of uninstall, detailed feedback shared during uninstall, and top uninstall reasons.
You can use search for text and dates to analyze and draw more insights from the detailed feedback. 

For paid extensions, you can use the **Contact** action to reach out to your users for transactional communication. [Contact](#contact) section provided later in this topic for more details.

## Ratings and Review
This tab will give you the information of the average rating for the selected period with respect to overall rating, the average rating by number of reviewers, and the daily trend of average rating. The details section provides all the reviews and your responses in transactional view. 

You can **Reply** to a review or **Edit** a previous response and better manage engagement with your extension users.  You can also **Appeal** to void a rating if the issue reported is due to Marketplace or the underlying platform. If the issue is valid, we shall void the rating. 

## Q&A
This tab will give you snapshot of all questions by your extension users with the non-responded queries on the top. You can take actions of replying or editing a previous response and better manage engagement with your extension users.  

## Export to Excel
All data elements available in the reports page are also available for download in XLS format to aid creating your own custom reports. 

<a id="contact" />
## Contact
For paid extension, you can use the **Contact** action to reach out to your users for transactional communication. this functionality is available only for publishers with contributor + access on the extension. 

Marketplace will broker the first communication with the user as our privacy policy doesn't allow direct sharing of customer email addresses. Only users who have opt-ed in for communication will be sent the email. 
Last contacted date for an organization is as also updated after sending a communication. 

**Important** Please follow the below guidance on transactional and promotional communication. A publisher found to do promotional communication or spamming users will be *blacklisted* and won't be able to use the **Contact** feature for any of his/her extensions. 

**Transactional Communication**: Transactional emails convey critical information necessary for the continued use of the extension or service. Examples include critical security notices, transaction confirmations, product recall notices, specific feedback request and service discontinuation notices.
**Promotional Emails**: Promotional emails are used to market your extension, product, service, website, or event. Examples include invitations to events or web casts, information about new marketing or partner programs and offers to prospect to obtain value-added content. Almost all newsletters fall into the promotional bucket as they generally contain at least some promotional content.

Refer the [Marketplace Publisher Agreement](https://aka.ms/vsmarketplace-agreement) for more guidance on communication with customers. 

# Terminology

* **Page views** is total number of extension detail page views. Repeated views are counted.
* **Azure DevOps Services install** is the total number of organizations the extension is installed. Repeated installs on the same organization are counted. 
* **TFS install** is the total number of TFS connected accounts the extension is installed. Repeated installs on the same organization are counted. TFS disconnected server data isn't available.  

