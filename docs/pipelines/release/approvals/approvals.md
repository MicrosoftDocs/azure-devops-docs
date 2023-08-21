---
title: Control deployments with release approvals
ms.custom: seodec18, engagement-fy23
description: Understand release approvals in Azure Pipelines
ms.assetid: 3725541F-FC36-42E2-8153-21D2F9CA755B
ms.topic: conceptual
ms.author: shashban
author: azooinmyluggage
ms.date: 12/20/2022
monikerRange: '<= azure-devops'
---

# Deployment control using approvals

[!INCLUDE [version-lt-eq-azure-devops](../../../includes/version-lt-eq-azure-devops.md)]

With Azure release pipelines, You can enable manual deployment approvals for each stage in a release pipeline to control your deployment workflow. When using approvals in your pipeline, the deployment is paused at each point where approval is required until the specified approver grants approval, rejects the release, or reassigns the approval to another user.

## Deployment approvals

You can set up approvals at the start of a stage (pre-deployment approvals), at the end of a stage (post-deployment approvals), or for both.

### Pre-deployment approvals

1. Select your classic release pipeline, and then select the **Pre-deployment conditions** icon and then click the toggle button to enable **Pre-deployment approvals**.

1. Add your **Approvers** and then choose the **Timeout** period. You can add multiple users or groups to the list of approvers. You can also select your **Approval policies** depending on your deployment workflow.

    :::image type="content" source="media/pre-deployment-approvals.png" alt-text="A screenshot showing how to set up pre-deployment approvals.":::

> [!NOTE]
> Azure AD groups are not receiving notifications. Azure DevOps doesn’t expand Azure AD groups when delivering Notifications. This is the limitation of the product.

### Post-deployment approvals

1. Select your classic release pipeline, and then select the **Post-deployment conditions** icon and then click the toggle button to enable **Post-deployment approvals**.

1. Add your **Approvers** and then choose the **Timeout** period. You can add multiple users or groups to the list of approvers. You can also select your **Approval policies** depending on your deployment workflow.

    :::image type="content" source="media/post-deployment-approvals.png" alt-text="A screenshot showing how to set up post-deployment approvals.":::

> [!NOTE]
> Deployment approvers must have **View releases** [permissions](../../policies/permissions.md#set-release-permissions).

- **Approvers**:
When a group is specified as approvers, only one user from that group is needed to approve, resume, or reject deployment.

- **Timeout**:
If no approval is granted within the **Timeout** period, the deployment will be rejected.

- **Approval policies**:

   - For added security, you can add this approval policy to prevent the user who requested the release from approving it. If you're experimenting with approvals, uncheck this option so that you can approve or reject your own deployments. See [How are the identity variables set?](../../build/variables.md#how-are-the-identity-variables-set) to learn more about identity variables.
   - This policy lets you enforce multi-factor authentication in the release approval flow. If this policy is checked it will prompt approvers to re-sign in before approving releases. This feature is only available in Azure DevOps Services for Azure Active Directory backed accounts only.
   - Reduce user workload by automatically approving subsequent prompts if the specified user has already approved the deployment to a previous stage in the pipeline (applies to pre-deployment approvals only).

## Approval notifications

You can enable notifications from your project settings to subscribe to release events. Emails are sent to approvers with links to the summary page where they can approve/reject the release. 

1. From your project, select ![gear icon](../../../media/icons/gear-icon.png) **Project settings**.

1. Select **Notifications** from the left navigation pane, and then select **New subscription** > **Release** to add a new event subscription.

    :::image type="content" source="media/project-notifications.png" alt-text="A screenshot showing project notifications.":::

## Related articles

- [Release gates and approvals](index.md)
- [Use gates and approvals to control your deployment](../deploy-using-approvals.md)
- [Add stages, dependencies, & conditions](../../process/stages.md)
- [Release triggers](../triggers.md)

