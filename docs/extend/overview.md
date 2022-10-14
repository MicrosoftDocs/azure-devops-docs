---
ms.subservice: azure-devops-ecosystem
title: Extensions overview
description: Overview of extensions for Azure DevOps.
ms.assetid: bd7bd829-e80e-4234-849f-d4b273605a22
ms.topic: conceptual
ms.custom: engagement-fy23
monikerRange: '<= azure-devops'
ms.author: chcomley
author: chcomley
ms.date: 10/12/2022
---

# Extensions overview

[!INCLUDE [version-lt-eq-azure-devops](../includes/version-lt-eq-azure-devops.md)]

Extensions are add-ons which you can use to customize and extend your experience with Azure DevOps.
They're written with standard technologies - HTML, JavaScript, CSS - and developed using your preferred development tools.

Extensions get published at the [Visual Studio Marketplace](https://marketplace.visualstudio.com/azuredevops), where they can be kept private for you and your team or [shared publicly](publish/publicize.md) with the millions of developers currently using Azure DevOps.

Extensions use our [RESTful API Library](/rest/api/azure/devops/) to easily interact with Azure DevOps and applications/services.

## Understand parts of an extension

> [!div class="mx-imgBorder"]  
> ![Screenshot of components of an extension.](./media/extension-components.png)

The following items make up an extension:

- [JSON manifest file](./develop/manifest.md): Contains basic info about the extension.
- Discovery assets: Markdown and images that make up the extension's overview and aesthetics in the Marketplace. 
- Static files: Contain the logic of the extension, including HTML, JS, and CSS files. Static files are only applicable to contribution-based extensions.

These files and assets get bundled up to make a [VSIX file](/visualstudio/extensibility/anatomy-of-a-vsix-package?view=vs-2022&preserve-view=true) that's published to the Marketplace. 

From the Marketplace, users can [install extensions](../marketplace/install-extension.md) directly into their organization. If you don't have permissions to install an extension, but you're a project member, you can [request an extension](../marketplace/request-extensions.md) instead.

## Use an extension

There are dozens of ways you can use an extension and places where you can add to the user interface, and we're adding more every sprint. Learn about all of the places where you can add a hub in the [Extensibility points](reference/targets/overview.md).

- [Provide new Azure Pipelines tasks](./develop/add-build-task.md) that teams can use in their builds.
- Use [dashboard widgets](./develop/add-dashboard-widget.md) to get custom views within Azure DevOps. 
- Extend the [work item form](./develop/add-workitem-extension.md) with new tabs, sections, and actions.
- Create [your own hub](./develop/add-hub.md) to embed new capabilities within our Agile, code, build, and test experiences. 
- Develop [actions](./develop/add-action.md) that can be run on hubs, whether they're ours or ones you've created. 

## Evaluate a Marketplace extension

To evaluate a Marketplace extension, review the information and resources described in the following table. You can find this information in the extension information

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
      :::image type="content" source="../marketplace/media/top-publisher-badge.png" alt-text="Screenshot showing Top Publisher badge and label.":::
   :::column-end:::
   :::column span="2":::
      The publisher has demonstrated commitment to its customers and the Marketplace through excellent policies, quality, reliability, and support. For more information, go to [Top Publisher](#top-publisher).
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
      **Ratings & reviews**
   :::column-end:::
   :::column span="2":::
      Ratings and reviews indicate how others perceive the offering.
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      **Privacy, license, and support policies**
   :::column-end:::
   :::column span="2":::
      See if the publisher has provided them and if they meet your needs or concerns. For more information, go to [Safety information](#safety-information).
   :::column-end:::
:::row-end:::
---

### Safety information

- **Malware scan**: The Marketplace runs a virus scan on each new and updated extension package that's published to ensure its safety. Until the scan is all clear, we don't publish the extension for public usage. If a concern surfaces, the Marketplace team has the means to disable an extension immediately and notify its existing customers. 
- **Content scan**: The Marketplace scans content for every new and updated extension to avoid surfacing inappropriate or offensive content on the Marketplace pages.
- **Access to approved scopes only**: An extension can only operate within the granted scopes. For example, an extension that has only read permissions on work items can't modify your features and bugs. Azure DevOps web extensions run in a sandboxed browser IFrame. They're only able to access Azure DevOps data and APIs approved for the extension. During installation, admins are  prompted to approve permissions and scopes. One way to protect yourself is to carefully review the scopes being requested by the extension.  

    > [!NOTE]  
	> If the scopes change for an extension, the you must approve the update before it can become applicable on your organization or collection.  

- **Third-party build and release tasks**: Tasks are implemented as code that executes on an agent machine. Tasks are only able to access secrets explicitly provided to them (see [variable secrets](../pipelines/process/variables.md?tabs=yaml%252cbatch#secret-variables)), but tasks generally have full access to the agent machine itself. To reduce risk, run builds on Microsoft-hosted agents, which are VMs isolated from other jobs and recycled after each job. Or, limit file and network access on private hosted agent machines. Learn more about [build and release agents](../pipelines/agents/agents.md?view=azure-devops&preserve-view=true#microsoft-hosted-agents).  
- **Third-party code execution on the server**: There's no way for an extension to install or execute any code on Azure DevOps Server.

### Top Publisher

The Top Publisher program in the Marketplace is designed to help you evaluate or acquire Azure DevOps extensions and integrations with confidence. The Top Publisher badge implies that the publisher has shown commitment to their customers and the Marketplace through exemplary policies, quality, reliability, and support. It's for publishers with one or more global Azure DevOps extensions or integrations and isn't applicable for Visual Studio IDE and Visual Studio Code extension publishers.

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
> Through this program, it is the publisher that is being certified. This doesn't cover the software or security of their extensions and integrations. We recommend you read the previous section when you're evaluating the offerings from a publisher.

If you got an extension from a Top Publisher and aren't satisfied with your experience, consider engaging with the publisher first. Afterward, if you're still unsatisfied, [contact the Marketplace team](/vsts/marketplace/marketplace-billing-qa).

## Build an extension 

Before you build an extension, familiarize yourself with the extension types already available within the Marketplace, [Extensions for Azure DevOps](https://marketplace.visualstudio.com/azuredevops).
Learn how to build your first extension and check out our full set samples.
- [Develop your first extension](./get-started/node.md)
- [Samples](./develop/samples-overview.md)

For more information about building extensions, see the following articles:
- [REST APIs](/rest/api/azure/devops/)
- [Service Hooks](../service-hooks/overview.md)
- [Package, publish, and install your extension](./publish/overview.md)
- [Package and publish your integration with an external app or service](./publish/integration.md)
- [Share your work publicly with the entire community](./publish/publicize.md)
 
## Next steps

> [!div class="nextstepaction"]
> [Develop an extension](./get-started/node.md)

## Related articles

* [Visual Studio Marketplace](https://marketplace.visualstudio.com/azuredevops)
* [Extension Publisher Page](https://marketplace.visualstudio.com/manage)
* [Visual Studio Partner Program](https://partner.microsoft.com/solutions/microsoft-visual-studio)
* [Extension manifest reference](./develop/manifest.md)
