---
title: Trust and Top Publisher | Azure DevOps Services
description: Trusting an extension or publisher in Marketplace
ms.assetid: baf829df-0975-46d8-8dea-7a5c9f6968ef
ms.prod: devops
ms.technology: devops-marketplace
ms.manager: jillfra
ms.author: elbatk
author: elbatk
monikerRange: '>= azure-devops-2019'
ms.date: 05/06/2019
ms.topic: conceptual
---

# Trusting an extension or publisher in Marketplace 

## Can I trust an offering in the Marketplace?
The Marketplace provides you with the following resources to make an informed decision about the extensions/integrations you use or evaluate:

| Activity | Implication |
|:---------|:------------|
| Look for the Top Publisher badge <img src="../extend/publish/_img/top-publisher.png" alt="Top Publisher badge" width="25"/> | If present, it indicates that publisher has shown commitment to its customers and the Marketplace through exemplary policies, quality, reliability and support. Note: the Top Publisher program is currently only applicable to publishers of Azure DevOps offerings (extensions/integrations).|
| Read the ratings and reviews | They tell you how others precieve the offering. |
| Read the Q&A section | It may answer the questions you have and is a good mechanism to engage with the extension’s publisher(s) to have a meaningful dialogue to make yourself comfortable. You may also leverage it to understand/ask the development, testing and security practices the publisher follows. It will also give you a sense of the publisher's responsiveness. |
| Read the privacy, license, and support policies | See if the publisher has provided them and if they meet your needs/concerns. |


Important information to be aware of:
* **Malware Scan**: As a customer, you expect to not get malicious software when you acquire an extension from the Marketplace. To ensure this, the Marketplace runs a virus scan on each extension package published. This is performed for each new extension and for each extension update. Until the scan is all clear, we do not publish the extension in the Marketplace for public usage. Note: stated virus scan is run at extension publish only and not during extension's execution.
* **Content scan**: Marketplace also performs a content scan for each extension in Marketplace. This is performed for each new extension and for each extension update. Through this we avoid surfacing inappropriate or offensive content on the Marketplace pages.
* **Access to approved scopes only**: An extension can only operate within the scopes it has been granted. For example: an extension which has only read permissions on work items cannot modify your features and bugs. Azure DevOps web extensions run in a sandboxed browser iframe which ensures they are only able to access Azure DevOps data and APIs approved for the extension (during install the admin will be prompted to approve these permissions/scopes). One way to protect yourself here is to carefully review the scopes being requested by the extension. Note: if the scopes required by an extension change then that update needs to be approved by the consumer before it can become applicable on the consumer's organization/collection. 
* **Third-party build and release tasks**: Tasks are implemented as code which execute on an agent machine. Tasks are only able to access secrets explicitly provided to them (see [variable secrets](https://docs.microsoft.com/azure/devops/pipelines/process/variables?tabs=yaml%2Cbatch#secret-variables)), but tasks generally have full access to the agent machine itself. To reduce risk, run builds on Microsoft-hosted agents (VMs which are isolated from other jobs and are completely recycled after each job) or limit file, network, etc access on private hosted agent machines. Learn more about [build and release agents](https://docs.microsoft.com/en-us/azure/devops/pipelines/agents/agents?view=azure-devops#microsoft-hosted-agents).
* **Third-party code execution on the server**: There is no way for an extension to install or execute any code on an Azure DevOps Server (formerly Team Foundation Server).

Recommendation: Install an extension on an isolated organization/collection first to experience it and to rest your concerns, if any. Once comfortable, install it on your other organizations/collections. Note: Extension updates can change the behaviour of the extension. We count on our customers and publishers to keep the ecosystem clean. If a concern does surface, Marketplace team possesses means to disable an extension immediately and notify its existing customers.

## Top Publisher
>The Top Publisher program is only available for publishers with one or more public Azure DevOps extensions or integrations. It is not applicable for Visual Studio IDE and Visual Studio Code extension publishers.

The Top Publisher program in Marketplace is designed to help consumers evaluate or acquire Azure DevOps extensions/integrations with confidence. The Top Publisher badge <img src="../extend/publish/_img/top-publisher.png" alt="Top Publisher badge" width="25"/> implies that the publisher has shown commitment to their customers and the Marketplace through exemplary policies, quality, reliability, and support.

Marketplace assigns the badge to a publisher after carefully reviewing the publisher across the following parameters:
* Privacy policy
* Licensing policy
* Support policy
* Documentation
* Q&A responsiveness
* Ratings & Review for their offerings
* Active uptake and the install count for their offerings

As a customer, you can expect timely support and good overall experience when acquiring an offering from a Top Publisher. Check out the [offerings from the Top Publishers](https://marketplace.visualstudio.com/search?target=AzureDevOps&certified=certifiedpublishers).
For more details on the Top Publisher program, see the [publisher facing requirements](https://aka.ms/vsmarketplace-certification-publisher-faq).

>**Note**: Through this program, it is the publisher that is being certified. This does not cover the software or security of their extensions and integrations. We recommend you read the trust section above when evaluating the offerings from a publisher.

If you acquired an offering from a Top Publisher and aren't satisfied with your experience, consider engaging with the publisher first. If still unsatisfied, [reach out to the Marketplace team](https://docs.microsoft.com/en-us/vsts/marketplace/marketplace-billing-qa).