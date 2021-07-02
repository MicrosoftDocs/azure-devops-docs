---
title: Extension Report | Azure DevOps
description: Use the Reports feature to track and analyze how your extension is doing and take required actions. 
ms.assetid: baf829df-0975-46d8-8dea-7a5c9f6968ef
ms.technology: devops-ecosystem
ms.topic: conceptual
monikerRange: '>= tfs-2017'
ms.author: chcomley
author: chcomley
ms.date: 11/12/2019
---

# Extension reporting hub

[!INCLUDE [version-tfs-2017-through-vsts](../includes/version-tfs-2017-through-vsts.md)]

Once your extension is available in the [Visual Studio Marketplace]() you can use the **Reports** feature. With this feature, you can track and analyze how the extension is performing and take required actions. 
To visit the extension hub, browse to your [publisher page](https://aka.ms/vsmarketplace-manage) and select the extension or select the **Reports** link on the extension details page.

## Acquisition 

You can view acquisition-related data in this tab for the selected period. 
* Aggregated acquisition in the selected period for overall acquisition
* Aggregated acquisition split by extension downloads Azure DevOps connected install for free extension
* Aggregated acquisition split by trials Azure DevOps connected buy for paid extension
* Daily trend of extension page views with acquisition for Azure DevOps and connected server
* Conversion percentage from page views to acquisition

For paid extensions, all transactional details for buy and trials are available with date, organization name, trial end date, and quantity. You can use the **Contact** action to communicate with your users. For more information, see the [Contact](#contact) section provided later in this article. 

## Uninstall

You can view the following statistics:
- how many organizations have uninstalled your extension
- daily trend of uninstalls
- detailed feedback shared during uninstalls
- top uninstall reasons

You can use search for text and dates to analyze and draw more insights from the detailed feedback. 

For paid extensions, you can use the **Contact** action to communicate with your users. [Contact](#contact) section provided later in this article for more details.

## Ratings and review

This tab gives you the following information:
- the average rating for the selected period versus overall rating
- the average rating by number of reviewers
- the daily trend of average rating

The details section provides all the reviews and your responses in transactional view. 

You can **Reply** to a review or **Edit** a previous response and better manage engagement with your extension users.  You can also **Appeal** to void a rating if the issue reported is because of the Marketplace or underlying platform. If the issue is valid, we'll void the rating. 

## Q & A

This tab gives you snapshot of all questions by your extension users with the non-responded queries on the top. You can take actions of replying or editing a previous response and better manage engagement with your extension users.  

## Export to Excel

All data elements available in the reports page are also available for download in XLS format to aid creating your own custom reports. 

## Contact

For paid extensions, you can use the <strong>Contact</strong> action to communicate with your users. This functionality is available only for publishers with contributor + access on the extension. 

Marketplace brokers the first communication with the user as our privacy policy doesn't allow direct sharing of customer email addresses. Only users who have opted in for communication are sent the email. 
Last contacted date for an organization is as also updated after sending a communication. 

**Important** Follow the guidance on transactional and promotional communication. A publisher found to do promotional communication or spamming users gets *added to a deny list*. They also can't use the **Contact** feature for any of their extensions. 

**Transactional Communication**: Transactional emails convey critical information necessary for the continued use of the extension or service. The following examples include:
- critical security notices
- transaction confirmations
- product recall notices
- specific feedback requests
- service discontinuation notices

**Promotional Emails**: Promotional emails are used to market your extension, product, service, website, or event. Examples include invitations to events or web casts, information about new marketing or partner programs, and offers the prospect to obtain value-added content. Almost all newsletters fall into the promotional bucket as they generally contain at least some promotional content.

For more information and guidance on communication with customers, see  the [Marketplace Publisher Agreement](https://aka.ms/vsmarketplace-agreement).

## Terminology

* **Page views**: total number of extension detail page views. Repeated views are counted.
* **Azure DevOps installs**: total number of organizations the extension is installed in. Repeated installs on the same organization are counted. 
* **TFS installs**: total number of TFS connected accounts the extension is installed in. Repeated installs on the same organization are counted. TFS disconnected server data isn't available.
