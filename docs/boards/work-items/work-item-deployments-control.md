---
title: Link work items to deployments
titleSuffix: Azure Boards
description: Link your work item to releases to visualize which deployments include your work items
ms.custom: boards-work-items  
ms.technology: devops-agile
ms.assetid: 
ms.topic: conceptual
ms.author: kaelli
author: KathrynEE
monikerRange: 'azure-devops'
ms.date: 10/14/2019
--- 

# Link work items to deployments

[!INCLUDE [temp](../includes/version-vsts-only.md)]

The release deployments control shows release information for those work items that have been associated to a commit which is part of a build being released. To learn how to associate work items to commits, see [Drive Git development from a work item](../backlogs/connect-work-items-to-git-dev-ops.md).

> [!NOTE]  
> The release deployments control currently works with classic release pipelines and with Azure DevOps Services (cloud) only. If your project is customized using a Hosted XML process, you need to update your work item type definitions to display the control. For details, see [Hosted XML process model, Add release deployment support to a work item type](../../organizations/settings/work/hosted-xml-process-model.md#add-support-wit).

## Configure release

First thing you must do is configure the release definition to post deployment information back to Azure Boards. 

1. Open Release definition, choose **Options** and then **Integrations**.

   > [!div class="mx-imgBorder"]  
   > ![Release Settings](media/deployments-control/release-settings-1.png)

2. Select the **Report deployment status to Boards** checkbox and configure the stages and deployment types

   > [!div class="mx-imgBorder"]  
   > ![Release Settings Stages](media/deployments-control/release-settings-stages-1.png)

## Deployment control

Once the release is configured to send deployment information to Azure Boards, and you have work items associated to the commits in the build, the work item will display the status of the release. In the following example we have multiple environments that the release targets.

> [!div class="mx-imgBorder"]  
> ![Release Settings Stages](media/deployments-control/releases-stages-1.png)

When you open the work item, you can see in real time the release deployment stages.

> [!div class="mx-imgBorder"]  
> ![Release Settings Stages](media/deployments-control/deployments-control-1.png)

## Related articles  

- [Create a release](../../pipelines/release/define-multistage-release-process.md)
- [Associate work items to commits](../backlogs/connect-work-items-to-git-dev-ops.md)


