---
title: Trust a publisher in the Marketplace | Azure DevOps
description: Learn how to make an informed decision, trusting an extension or publisher in the Marketplace
ms.assetid: baf829df-0975-46d8-8dea-7a5c9f6968ef
ms.prod: devops
ms.technology: devops-marketplace
ms.manager: jillfra
ms.author: chcomley
author: chcomley
monikerRange: '>= tfs-2015'
ms.date: 07/18/2019
ms.topic: conceptual
---

# Trusting a publisher in the Marketplace 

[!INCLUDE [version-vsts-tfs-2015-on](../boards/_shared/version-vsts-tfs-2015-on.md)]

## Can I trust an offering in the Marketplace?

The Marketplace provides you with the following resources to make an informed decision about the extensions and integrations you use or evaluate:

| Activity | Implication |
|:---------|:------------|
| Look for the Top Publisher badge <img src="../extend/publish/_img/top-publisher.png" alt="Top Publisher badge" width="25"/> | The publisher has demonstrated commitment to its customers and the Marketplace through excellent policies, quality, reliability, and support. Note: the Top Publisher program is currently only applicable to publishers of Azure DevOps offerings (extensions/integrations).|
| Read the ratings and reviews | They tell you how others perceive the offering. |
| Read the Q&A section | It may answer the questions you have and is a good mechanism to engage with the extension’s publisher(s) to have a meaningful dialogue to make yourself comfortable. Use it to understand the development, testing, and security practices the publisher follows. It also gives you a sense of the publisher's responsiveness. |
| Read the privacy, license, and support policies | See if the publisher has provided them and if they meet your needs/concerns. |


Important information to be aware of:
* **Malware Scan**: As a customer, you expect to not get malicious software when you acquire an extension from the Marketplace. The Marketplace runs a virus scan on each extension package that's published, to ensure its safety. The virus scan is run for each new extension and for each extension update. Until the scan is all clear, we don't publish the extension in the Marketplace for public usage. Note: stated virus scan is run at extension publish only and not during extension's execution.
* **Content scan**: The Marketplace does a content scan for every new and updated extension in the Marketplace. With these content scans, we avoid surfacing inappropriate or offensive content on the Marketplace pages.
* **Access to approved scopes only**: An extension can only operate within the scopes it has been granted. For example: an extension that has only read permissions on work items can't modify your features and bugs. Azure DevOps web extensions run in a sandboxed browser iframe. They're only able to access Azure DevOps data and APIs approved for the extension. During installation, admins are  prompted to approve permissions and scopes. One way to protect yourself is to carefully review the scopes being requested by the extension. Note: if the scopes required by an extension change, the consumer must approve the update before it can become applicable on the consumer's organization or collection. 
* **Third-party build and release tasks**: Tasks are implemented as code that executes on an agent machine. Tasks are only able to access secrets explicitly provided to them (see [variable secrets](https://docs.microsoft.com/azure/devops/pipelines/process/variables?tabs=yaml%2Cbatch#secret-variables)), but tasks generally have full access to the agent machine itself. To reduce risk, run builds on Microsoft-hosted agents, which are VMs  isolated from other jobs and recycled after each job. Or, limit file and network access on private hosted agent machines. Learn more about [build and release agents](https://docs.microsoft.com/azure/devops/pipelines/agents/agents?view=azure-devops#microsoft-hosted-agents).
* **Third-party code execution on the server**: There's no way for an extension to install or execute any code on Azure DevOps Server.

Recommendation: Install an extension in an isolated organization or collection first, to experience it and to eliminate any concerns. Once you're comfortable, install it on your other organizations or collections. Note: Extension updates can change the behavior of the extension. We count on our customers and publishers to keep the ecosystem clean. If a concern does surface, Marketplace team has means to disable an extension immediately and notify its existing customers.

## Top Publisher

The Top Publisher program is for publishers with one or more global Azure DevOps extensions or integrations. It isn't applicable for Visual Studio IDE and Visual Studio Code extension publishers.

The Top Publisher program in Marketplace is designed to help consumers evaluate or acquire Azure DevOps extensions and integrations with confidence. The Top Publisher badge <img src="../extend/publish/_img/top-publisher.png" alt="Top Publisher badge" width="25"/> implies that the publisher has shown commitment to their customers and the Marketplace through exemplary policies, quality, reliability, and support.

Marketplace assigns the badge to a publisher after carefully reviewing the publisher across the following parameters:
* Privacy policy
* Licensing policy
* Support policy
* Documentation
* Q & A responsiveness
* Ratings & Review for their offerings
* Active uptake and the install count for their offerings

As a customer, you can expect timely support and good overall experience when acquiring an offering from a Top Publisher. Check out the [offerings from the Top Publishers](https://marketplace.visualstudio.com/search?target=AzureDevOps&certified=certifiedpublishers).
For more information on the Top Publisher program, see the [publisher facing requirements](https://aka.ms/vsmarketplace-certification-publisher-faq).

> [!NOTE]
> Through this program, it is the publisher that is being certified. This doesn't cover the software or security of their extensions and integrations. We recommend you read the trust section above when evaluating the offerings from a publisher.

If you acquired an offering from a Top Publisher and aren't satisfied with your experience, consider engaging with the publisher first. Afterward, if you're still unsatisfied, [contact the Marketplace team](https://docs.microsoft.com/vsts/marketplace/marketplace-billing-qa).
