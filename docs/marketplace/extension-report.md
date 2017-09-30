---
title: Extension Report | VSTS
description: An overview of reports available for an extension. 
ms.assetid: baf829df-0975-46d8-8dea-7a5c9f6968ef
ms.prod: vs-devops-alm
ms.technology: vs-devops-marketplace
ms.manager: douge
ms.author: elbatk
---

# Extension reporting hub

Extension developers have access to statistics and feedback about how their extension is performing in the [Visual Studio Marketplace](https://marketplace.visualstudio.com). Once you've created and published your extension to the Marketplace, you can use the **Reports** feature to track and analyze how the extension is performing and take required actions. 
To visit the extension hub, browse to your [publisher page](https://aka.ms/vsmarketplace-manage) and select the extension or click **Reports** link on the extension details page.

## Acquisition 
You can view all acquisition related data in this tab for the selected period. Based on the extension type, acqusition includes all events for install, buy, trial, download and get started clicks. 
* Aggregated acquisition in the selected period with respect to acquisition till date
* Aggregated acquisition in the selected period with respect to overall acquisition
* Aggregated acquisition split by extension downloads, VSTS and TFS connected install for free extension
* Aggregated acquisition split by trials, VSTS and TFS connected buy for paid extension
* Aggregated acquisition split by extension download from marketplace and VS IDE for VS extension 
* Daily trend of extension page views with acquisition 
* Conversion percentage from page views to acquisition

For paid extension, all transactional details for buy and trials is available with date, account name, trial end date, and quantity. You can use the **Contact** action to reach out to your users for transactional communication. Refer [here](/vsts/extend/extension-report#contact) for more details. 

![acqusition](_img/acq.png)

## Uninstall (VSTS only)
You can view how many VSTS accounts have uninstalled your extension, daily trend of uninstall, detailed feedback shared during uninstall, and top uninstall reasons.
You can use search for text and dates to analyze and draw more insights from the detailed feedback. 

For VSTS paid extension, all transactional details for buy and trials is available with date, account name, trial end date, and quantity. You can use the **Contact** action to reach out to your users for transactional communication. Refer [here](/vsts/extend/extension-report#contact) for more details. 

![uninstall](_img/uninstall.png)

## Sales transaction
This tab is only available for VSTS paid extensions and gives the details of sales with respect to quantity and accounts to help understand how the extension is performing. Selection of the users button gives the aggregated details of sales and churn events, i.e. number of new, upgrade, downgrade and cancelled user licenses respectively with the trend. Selection of the accounts button gives similar aggregated details of sales and churn events with respect to account and its trend. 

All transactional details for trials, new purchase, upgrade, downgrade and cancellations is available in details section. You can use search for text and dates to analyze and draw more insights. 
This data can also be pivoted by account to understand the lifecycle of an account or sorted to understand the top account with respect to user licensees / resources purchased. **Contact** feature is also available. 

![sales](_img/sales.png)

## Ratings and Review
This tab will give you the information of the average rating for the selected period with respect to overall rating, the average rating by number of reviewers, and the daily trend of average rating. The details section provides all the reviews and your responses in transactional view. 

You can **Reply** to a review or **Edit** a previous response and better manage engagement with your extension users.  You can also **Appeal** to void a rating if the issue reported is due to Marketplace or the underlying platform. If the issue is valid, we shall void the rating. 

![rating](_img/rnr.png)

## Q&A
This tab will give you snapshot of all questions by your extension users with the non-responded queries on the top. You can take actions of replying or editing a previous response and better manage engagement with your extension users.  

![qna](_img/qna.png)

## Export to Excel
All data elements available in the reports page are also available for download in XLS format to aid creating your own custom reports. 

## Contact
For paid extension, you can use the **Contact** action to reach out to your users for transactional communication. this functionality is available only for publishers with contributor + access on the extension. 

Marketplace will broker the first communication with the user as our privacy policy doesn’t allow direct sharing of customer email addresses. Only users who have opt-ed in for communication will be sent the email. 
Last contacted date for an account is as also updated after sending a communication. 

**Important** Please follow the below guidance on transactional and promotional communication. A publisher found to do promotional communication or spamming users will be *blacklisted* and won't be able to use the **Contact** feature for any of his/her extensions. 

**Transactional Communication**: Transactional emails convey critical information necessary for the continued use of the extension or service. Examples include critical security notices, transaction confirmations, product recall notices, specific feedback request and service discontinuation notices.
**Promotional Emails**: Promotional emails are used to market your extension, product, service, website, or event. Examples include invitations to events or web casts, information about new marketing or partner programs and offers to prospect to obtain value-added content. Almost all newsletters fall into the promotional bucket as they generally contain at least some promotional content.

Refer the [Marketplace Publisher Agreement](http://aka.ms/vsmarketplace-agreement) for more guidance on communication with customers. 

# Terminology

* **Acquisition** is the total count of all applicable acquisition events for the extension; install, buy, trial, get started clicks and downloads
* **Page views** is the total number of extension detail page views. Repeated views by users are counted.
* **VSTS Install** is the total number of VSTS accounts the extension is installed. Repeated installs on the same account are counted. 
* **TFS Install** is the total number of TFS connected accounts the extension is installed. Repeated installs on the same account are counted. TFS disconnected server data isn't available.  
* **VSTS Trial** is the total number of VSTS accounts that started trial. In the same period if the VSTS account makes a purchase, that would be counted too. 
* **VSTS Buy** is the total number of buy events for VSTS accounts. Repeated buy on the same account are counted. 
* **TFS Buy** is the total number of buy events for TFS connected accounts. Repeated buy on the same account are counted. TFS disconnected server data isn't available.  
* **Download from IDE** is the total number of VS extension downloads from Visual Studio IDE to help understand extension uptake directly in VS IDE
* **Download from Marketplace** is the total number of VS extension downloads from the Marketplace
* **Conversion funnel** is the conversion ration from page views to acquisition from Marketplace. It excludes extension acquisition directly from the products. 
* **Top reasons for uninstall** is uninstall reasons categorized by reason code shared by users during the process of uninstall. Note: Reason code and reason are optional fields. 
* **Last contacted** is the most recent date the account admin was contacted. 
* **New users** represents the count of users purchased by a new account. 
* **Upgrade users** represents the count of users purchased by an existing account. 
* **Downgrade users** represents the count of users reduced by an existing account. 
* **Cancel users** represents the count of users cancelled when an existing account cancelled.  
* **New accounts** represents the count of new accounts that purchased. 
* **Upgrade accounts** represents the count of existing accounts that purchased more users. 
* **Downgrade accounts** represents the count of existing accounts that reduced the quantity of users purchased. 
* **Cancel accounts** represents the count of accounts which cancelled their purchase. 



