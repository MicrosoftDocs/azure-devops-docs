---
title: Visual Studio Marketplace overview | Azure DevOps
description: Overview of Visual Studio, Visual Studio Code, and Azure DevOps extensions offered through the Visual Studio Marketplace
ms.topic: conceptual
ms.subservice: azure-devops-marketplace
ms.assetid: 50c06553-9fba-40da-8c04-357497cc1db7
ms.custom: engagement-fy23
ms.author: chcomley
author: chcomley
ms.date: 10/06/2022
monikerRange: '<= azure-devops'
---

# Marketplace extensions for Azure DevOps

[!INCLUDE [version-lt-eq-azure-devops](../includes/version-lt-eq-azure-devops.md)]

Extensions are simple add-ons that you can use to customize and extend your experience with Azure DevOps. The [Marketplace](https://marketplace.visualstudio.com/azuredevops) has hundreds of extensions that can help with the following tasks and more. Most extensions are free.

- Plan and track of work items, sprints, scrums, and so on
- Build and release Pipelines flows
- Test and track code
- Collaborate among team members

## Manage extensions

- [Install an extension](install-extension.md)
- [Request an extension](request-extensions.md)
- [Uninstall or disable an extension](uninstall-disable-extensions.md)
- [FAQs](faq-extensions.yml)

## Evaluate a Marketplace extension publisher

*Can you trust an offering in the Marketplace?*

We recommend you install a Marketplace extension in an isolated organization or collection first, to experience it and to eliminate any concerns. Once you're comfortable, install it on your other organizations or collections. 

If a concern surfaces, the Marketplace team has the means to disable an extension immediately and notify its existing customers. 

### Resources for evaluating a Marketplace extension

To evaluate a Marketplace extension, review the information and resources described in the table.  

:::row:::
   :::column span="1":::
      **Information** 
   :::column-end:::
   :::column span="2":::
      **Usage**
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      **Top Publisher badge**  
      <img src="media/top-publisher-badge.png" alt="Top Publisher badge and label" width="120"/>
   :::column-end:::
   :::column span="2":::
      The publisher has demonstrated commitment to its customers and the Marketplace through excellent policies, quality, reliability, and support. Note: the Top Publisher program is currently only applicable to publishers of Azure DevOps offerings (extensions/integrations).
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      **Ratings & reviews**
   :::column-end:::
   :::column span="2":::
      Ratings and reviews indicate how others perceive the offering.
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      **Q & A**
   :::column-end:::
   :::column span="2":::
      The Q & A section of published extensions may answer questions you may have. Also, they're a good mechanism to engage with the extension’s publisher(s) to have a meaningful dialogue to make yourself comfortable. Use the Q & A information to understand the development, testing, and security practices the publisher follows. It also gives you a sense of the publisher's responsiveness. 
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      **Privacy, license, and support policies**
   :::column-end:::
   :::column span="2":::
      See if the publisher has provided them and if they meet your needs or concerns.
   :::column-end:::
:::row-end:::
---

## More information

Be aware of the following important information:

- **Malware scan**: As a customer, you don't expect to get malicious software when you get an extension from the Marketplace. The Marketplace runs a virus scan on each new and updated extension package that's published to ensure its safety. Until the scan is all clear, we don't publish the extension for public usage. 
   
   > [!NOTE]  
   > Stated virus scan is run at the extension publish only and not during the extension's execution.  

- **Content scan**: The Marketplace scans content for every new and updated extension to avoid surfacing inappropriate or offensive content on the Marketplace pages.
- **Access to approved scopes only**: An extension can only operate within the granted scopes. For example, an extension that has only read permissions on work items can't modify your features and bugs. Azure DevOps web extensions run in a sandboxed browser IFrame. They're only able to access Azure DevOps data and APIs approved for the extension. During installation, admins are  prompted to approve permissions and scopes. One way to protect yourself is to carefully review the scopes being requested by the extension.  
	
    > [!NOTE]  
	> If the scopes change for an extension, the you must approve the update before it can become applicable on your organization or collection.  

- **Third-party build and release tasks**: Tasks are implemented as code that executes on an agent machine. Tasks are only able to access secrets explicitly provided to them (see [variable secrets](../pipelines/process/variables.md?tabs=yaml%252cbatch#secret-variables)), but tasks generally have full access to the agent machine itself. To reduce risk, run builds on Microsoft-hosted agents, which are VMs isolated from other jobs and recycled after each job. Or, limit file and network access on private hosted agent machines. Learn more about [build and release agents](../pipelines/agents/agents.md?view=azure-devops&preserve-view=true#microsoft-hosted-agents).  

- **Third-party code execution on the server**: There's no way for an extension to install or execute any code on Azure DevOps Server.

## Top Publisher

The Top Publisher program is for publishers with one or more global Azure DevOps extensions or integrations. The program isn't applicable for Visual Studio IDE and Visual Studio Code extension publishers.

The Top Publisher program in the Marketplace is designed to help you evaluate or acquire Azure DevOps extensions and integrations with confidence. The Top Publisher badge <img src="../extend/publish/media/top-publisher.png" alt="Top Publisher badge" width="25"/> implies that the publisher has shown commitment to their customers and the Marketplace through exemplary policies, quality, reliability, and support.

Marketplace assigns the badge to a publisher after carefully reviewing the publisher across the following parameters:

* Privacy policy
* Licensing policy
* Support policy
* Documentation
* Q & A responsiveness
* Ratings & review for their offerings
* Active uptake and the install count for their offerings

You can expect timely support and a good overall experience when you get an extension from a Top Publisher. Check out the [offerings from the Top Publishers](https://marketplace.visualstudio.com/search?target=AzureDevOps&certified=certifiedpublishers).
For more information on the Top Publisher program, see the [publisher facing requirements](../extend/publish/publicize.md).

> [!NOTE]
> Through this program, it is the publisher that is being certified. This doesn't cover the software or security of their extensions and integrations. We recommend you read the previous trust section when you're evaluating the offerings from a publisher.

If you got an extension from a Top Publisher and aren't satisfied with your experience, consider engaging with the publisher first. Afterward, if you're still unsatisfied, [contact the Marketplace team](/vsts/marketplace/marketplace-billing-qa).
