---
title: Tools and Clients that Connect to Azure DevOps
titleSuffix: Azure DevOps
description: Review tools that support connecting to Azure DevOps, including browser and command-line tools, tools for developers and Office integration, and more.
ms.subservice: azure-devops-new-user
ms.assetid: 3836C81D-6E0A-46B5-8D1D-20E973E4F373
ms.author: chcomley
author: chcomley
ms.topic: concept-article
monikerRange: 'azure-devops || >= azure-devops-2020'
ms.date: 04/25/2025
#customer intent: As a developer, I want to understand the tools and clients that support connecting to Azure DevOps, so I can use the appropriate tools for my development.
---

# Tools and clients that connect to Azure DevOps

[!INCLUDE [version-lt-eq-azure-devops](../includes/version-lt-eq-azure-devops.md)]

The Microsoft platform of software development tools is well established. The Visual Basic and Visual Studio integrated development environment (IDE) supports teams in their software development, and offers a catalog of plug-ins to extend the product functionality. In particular, the Team Explorer plug-in allows the Visual Studio client to connect to Azure DevOps to support source control, work tracking, build, and test operations. This article describes various tools and clients you can use to connect with Azure DevOps and enhance your development.

## Desktop client developer tools

Developers have access to many tools through the following versions of Visual Studio and plug-ins. To download any version of Visual Studio, go to the [Visual Studio Downloads page](https://visualstudio.microsoft.com/downloads/). To understand what features you get with the Visual Studio versions, see [Compare Visual Studio offerings](https://visualstudio.microsoft.com/vs/compare/).

|Visual Studio version |Description |
|----------------------|------------|
| **Visual Studio Community**         | _Full-featured, extensible IDE for creating modern applications for Android, iOS, and Windows, including web applications and cloud services. (Replaces Visual Studio Express)_ |
| **Visual Studio Professional**      | _Development tools and services to support individual developers or small teams._ |
| **Visual Studio Enterprise**        | _Integrated, end-to-end development tools and solutions for teams of any size, and with a need to scale. Supports designing, building, and managing complex enterprise applications._ |
| **Visual Studio Test Professional** | _Access to Microsoft Test and development tools to support quality and collaboration throughout the development process._ |
| **[Visual Studio Code](https://code.visualstudio.com/docs)** | _Free, open-source code editor with a free extension to support connecting to Git repositories on Azure DevOps._ | 
| **[Android Studio with Azure DevOps Services Plug-in](/previous-versions/azure/devops/all/java/download-android-studio-plug-in)** | _Free plug in to support Android developers and connect to Git repositories on Azure DevOps._ |
| **[IntelliJ with Azure DevOps Services Plugin](/previous-versions/azure/devops/all/java/download-intellij-plug-in)** | _Free plug in to support developers who use IntelliJ IDEA or Android Studio to connect to Git repositories on Azure DevOps._ |

To get started with client libraries, see [Client library samples](../integrate/get-started/client-libraries/samples.md).

### Team Explorer plug-in

Team Explorer, a plug-in to all Visual Studio versions, connects Visual Studio to projects defined in Azure DevOps. You can manage source code, work items, and builds. Team Explorer supports using Git and Team Foundation Version Control (TFVC) for source control. For more information, see [Work in Team Explorer](work-team-explorer.md).

::: moniker range=">= azure-devops-2020"

:::row:::
:::column span="":::

**Home page with Git in Visual Studio 2022**

:::image type="content" source="../organizations/projects/media/te-home-page-git-repo-visual-studio-2022.png" border="false" alt-text="Screenshot of the Team Explorer home page showing Git as the form of source control in Visual Studio 2022." lightbox="../organizations/projects/media/te-home-page-git-repo-visual-studio-2022.png":::

:::column-end:::
:::column span="":::

**Home page with TFVC in Visual Studio 2022**

:::image type="content" source="../organizations/projects/media/te-home-page-tfvc-repo-visual-studio-2022.png" border="false" alt-text="Screenshot of the Team Explorer home page showing TFVC as the form of source control in Visual Studio 2022." lightbox="../organizations/projects/media/te-home-page-tfvc-repo-visual-studio-2022.png":::

:::column-end:::
:::row-end:::

::: moniker-end
::: moniker range="azure-devops"

:::row:::
:::column span="":::

**Home page with Git in Visual Studio 2019**

:::image type="content" source="../organizations/projects/media/te-home-page-git-repo.png" border="false" alt-text="Screenshot of the Team Explorer home page showing Git as the form of source control." lightbox="../organizations/projects/media/te-home-page-git-repo.png":::

:::column-end:::
:::column span="":::

**Home page with TFVC in Visual Studio 2019**

:::image type="content" source="../organizations/projects/media/te-home-page-tfvc-repo.png" border="false" alt-text="Screenshot of the Team Explorer home page showing TFVC as the form of source control." lightbox="../organizations/projects/media/te-home-page-tfvc-repo.png":::

:::column-end:::
:::row-end:::

::: moniker-end

### Visual Studio Git experience 

Visual Studio 2019 and later provides a new Git experience through the **Git** menu as shown in the following image. For more information, see [Git experience in Visual Studio](/visualstudio/version-control/git-with-visual-studio) and [Side-by-side comparison of Git and Team Explorer](/visualstudio/version-control/git-team-explorer-feature-comparison).  

:::image type="content" source="media/tools/visual-studio-git-menu.png" border="false" alt-text="Screenshot of the Git menu in Visual Studio." lightbox="media/tools/visual-studio-git-menu.png":::

## Office integration tools

If you want to add and bulk-modify work items with Azure DevOps, you can integrate [Microsoft Office Excel](../boards/backlogs/office/bulk-add-modify-work-items-excel.md). To support the integration, you need to install the [Azure DevOps Office Integration 2019](https://visualstudio.microsoft.com/downloads/#other-family) add-in. 

### Task-specific clients

The following clients support specific tasks, such as managing testing efforts, providing feedback, and modifying work items:

- [**Azure Test Plans**](../organizations/billing/try-additional-features-vs.md): Manage your test efforts, create and run manual tests, and create and track bugs found during test efforts.  
- [**Test & Feedback extension** (previously, the Exploratory Testing extension)](../test/perform-exploratory-tests.md): Access a lightweight plug-in to a web browser. Stakeholders can respond to feedback requests for user stories and features created in Azure DevOps. This extension is free to Stakeholders. 
- [**Microsoft Feedback Client**](/previous-versions/azure/devops/project/feedback/give-feedback): Enable Stakeholders to use this client to record feedback for your application as video, audio, or type-written comments. This client is installed with all versions of Visual Studio, or it can be [installed from the free download](https://www.microsoft.com/download/details.aspx?id=48142). All feedback is stored in the work item data store and requires [Stakeholders to have permissions](/previous-versions/azure/devops/project/feedback/give-permissions-feedback).  

## Browser-based web tools

Browser-based web tools are available for connecting with Azure DevOps. You can use collaboration tools that are supported through the web portal or extensions built and maintained by the Azure DevOps Services product team.

### Web portal support

Collaboration tools supported through the web portal are summarized under [Essential services](services.md). New features are deployed every three weeks for Azure DevOps Services, and quarterly for Azure DevOps Server. Microsoft Edge, Firefox, and Chrome automatically update themselves, so Azure DevOps supports the most recent version. For release notes, see [Azure DevOps Services features timeline](/azure/devops/release-notes/features-timeline). 
 
You can use the following browsers to access the web portal:

|Version |Edge |Internet Explorer |Safari (Mac) |Firefox |Chrome |
|--------|-----|------------------|-------------|--------|-------|
|Azure DevOps Services <br/> Azure DevOps Server 2022 <br/> Azure DevOps Server 2020.1 | Most recent | Not supported | 14.1 and later | Most recent | Most recent |
|Azure DevOps Server 2020 <br/> Azure DevOps Server 2019 | Most recent | 11 and later | 14.1 and later | Most recent | Most recent |

For more information, see [Web portal navigation](../project/navigation/index.md).

### Browser-based extensions

The Azure DevOps Services product team maintains the following built-in extensions:

- [**Code search**](https://marketplace.visualstudio.com/items?itemName=ms.vss-code-search): Increase cross-team collaboration and code sharing. Enable developers to quickly locate relevant information within the code base of all projects hosted within an organization or collection. Discover implementation examples, browsing definitions, and error text.
- [**Work item search**](https://marketplace.visualstudio.com/items?itemName=ms.vss-workitem-search): Quickly find relevant work items and search across all work item fields over all projects in an organization. Run full-text searches across all fields to efficiently locate relevant work items. Use inline search filters, on any work item field, and quickly narrow down a list of work items.  
  
You can find more extensions in Azure DevOps under **Organization settings** > **Extensions** > **Browse marketplace**. For more information, see [About migrating and integrating work tracking data](../boards/extensions/migrate-integrate.md).

## Command-line tools

You can complete many code development and administrative tasks by using the following command-line tools:

- [Azure DevOps CLI commands (az devops)](../cli/quick-reference.md)
- [Git commands](../repos/git/command-prompt.md)
- [TFVC commands](../repos/tfvc/use-team-foundation-version-control-commands.md)
- [Test Case Management (TCM) commands](../test/copy-clone-test-items.md)
- [Manage permissions with command line tool (az devops security)](../organizations/security/manage-tokens-namespaces.md) 
- [witAdmin (work item tracking)](../reference/witadmin/witadmin-customize-and-manage-objects-for-tracking-work.md)

## Integrated tool support for third-party applications

Several tools provide support for monitoring and interacting with Azure DevOps from a third-party application.

|Service |Integrated tools |References |
|--------|-----------------|-----------|
| **Azure Boards**    | Slack, Microsoft Teams | - [Azure Boards with Slack](../boards/integrations/boards-slack.md) <br/> - [Azure Boards with Microsoft Teams](../boards/integrations/boards-teams.md) |
| **Azure Repos**     | Slack, Microsoft Teams | - [Azure Repos with Slack](../repos/integrations/repos-slack.md) <br/> - [Azure Repos with Microsoft Teams](../repos/integrations/repos-teams.md) |
| **Azure Pipelines** | Slack, Microsoft Teams, ServiceNow, Jenkins | - [Azure Pipelines with Slack](../pipelines/integrations/slack.md) <br/> - [Azure Pipelines with Microsoft Teams](../pipelines/integrations/microsoft-teams.md) <br/> - [Change management with ServiceNow](../pipelines/release/approvals/servicenow.md) <br/> - [Continuous deployment from Jenkins](../pipelines/release/artifacts.md#jenkins) |

## Marketplace extensions

Visual Studio and Azure DevOps offer various features and functionality, and the ability to extend and share the functionality. Extensions are simple add-ons you can use to customize and extend your Azure DevOps and work tracking experiences. The extensions are written with standard technologies like HTML, JavaScript, and CSS. You can also develop your own extensions by using your preferred dev tools:

- Build custom extensions by using the [RESTful API library](#rest-apis).
- Publish your extensions to the Azure DevOps Marketplace.
- Maintain your extensions for private use, or share your extensions with millions of developers who use Visual Studio and Azure DevOps.

For more information, see the [Azure DevOps Marketplace](https://marketplace.visualstudio.com) and [Overview of extensions](../extend/overview.md).

## REST APIs  
 
The Azure DevOps APIs are based on REST, OAuth, JSON, and service hook. These resources are standard web technologies that are broadly supported in the industry. REST APIs are provided to support building extensions to Azure DevOps. For more information, see [REST API overview](/rest/api/azure/devops).

## Related content

- [A tour of the services in Azure DevOps](services.md)
- [Software development roles](roles.md)
- [Azure DevOps Pricing](https://azure.microsoft.com/pricing/details/devops/azure-devops-services/)
- [Azure DevOps data protection overview](../organizations/security/data-protection.md)
