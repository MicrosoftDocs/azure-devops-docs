---
title: Prerequisites for Managed DevOps Pools
description: Learn how to configure your Azure subscription and Azure DevOps organization for use with Managed DevOps Pools.
ms.date: 10/07/2025
ms.custom: sfi-image-nochange
---

# Prerequisites for Managed DevOps Pools

There are a few things you need to prepare before using Managed DevOps Pools for the first time.

At a high level, you need:

> [!div class="checklist"]
> - An Azure account with an active subscription, with the Managed DevOps Pools resource provider registered
> - Permissions to create a Managed DevOps Pool in the Azure subscription
> - An Azure DevOps organization, connected to the Microsoft Entra ID tenant of the users who will be administering the Managed DevOps Pool
> - Permissions in the Azure DevOps organization to create a Managed DevOps Pool

This article shows you how to configure your Azure subscription and Azure DevOps organization for use with Managed DevOps Pools. These configuration steps only need to be performed a single time per Azure DevOps organization and Azure subscription.

> [!NOTE]
> If you're creating a Managed DevOps Pool from a pipeline, grant the permissions described in [Verify Azure permissions](#verify-azure-permissions) and [Verify Azure DevOps permissions](#verify-azure-devops-permissions) to the service connection's app registration or managed identity instead of your account. For more information, see [Connect to Azure with an Azure Resource Manager service connection](../pipelines/library/connect-to-azure.md) and [Use service principals & managed identities in Azure DevOps](../integrate/get-started/authentication/service-principal-managed-identity.md).

## Configure your Azure subscription

1. [Verify Azure permissions](#verify-azure-permissions)
1. [Register the Managed DevOps Pools resource provider in your Azure Subscription](#register-the-managed-devops-pools-resource-provider-in-your-azure-subscription)
1. [Review Managed DevOps Pools quotas](#review-managed-devops-pools-quotas)
1. [Create a dev center and dev center project](#create-a-dev-center-and-dev-center-project) (If you plan to create your Managed DevOps Pools using the Azure portal, you can create the dev center and dev center project during the pool creation process.)

## Verify Azure permissions

To create and manage Managed DevOps Pools, you must have one of the following roles assigned to your account in the Azure subscription where you want to create the Managed DevOps Pools. The following roles are listed in order of least privileged to most privileged. **DevOps Infrastructure Contributor** is the least privileged role that allows you to create and manage Managed DevOps Pools.

| Role | Description |
|------|-------------|
| [DevOps Infrastructure Contributor](/azure/role-based-access-control/built-in-roles/devops#devops-infrastructure-contributor) | This role allows you to create and manage Managed DevOps Pools in the designated [scope](/azure/role-based-access-control/role-assignments-steps#step-3-identify-the-needed-scope), but not other Azure DevOps resources. |
| [Contributor](/azure/role-based-access-control/built-in-roles/privileged#contributor) | This [privileged](/azure/role-based-access-control/built-in-roles#privileged) role allows you to create and manage Managed DevOps Pools, as well as other Azure resources. |
| [Owner](/azure/role-based-access-control/built-in-roles/privileged#owner) | This [privileged](/azure/role-based-access-control/built-in-roles#privileged) role allows you to create and manage Managed DevOps Pools, as well as other Azure resources, including the ability to assign roles. |

To check the role assignments for your account, see [List Azure role assignments](/azure/role-based-access-control/role-assignments-list-portal).

For information on assigning roles, see [Steps to assign an Azure role](/azure/role-based-access-control/role-assignments-steps).

> [!NOTE]
> If you're creating a Managed DevOps Pool from a pipeline, assign one of the roles from the previous table to the service connection's app registration or managed identity. For more information, see [Connect to Azure with an Azure Resource Manager service connection](../pipelines/library/connect-to-azure.md) and [Use service principals & managed identities in Azure DevOps](../integrate/get-started/authentication/service-principal-managed-identity.md).

If you're creating a dev center and dev center project during Managed DevOps Pool creation, you must have the [Contributor](/azure/role-based-access-control/built-in-roles/privileged#contributor) or [Owner](/azure/role-based-access-control/built-in-roles/privileged#owner) role assigned to your account for the [scope](/azure/role-based-access-control/role-assignments-steps#step-3-identify-the-needed-scope) in which you want to create the dev center. For more information, see [Create a dev center and dev center project](#create-a-dev-center-and-dev-center-project).

### Register the Managed DevOps Pools resource provider in your Azure Subscription

To use Managed DevOps Pools, register the following resource providers with your Azure subscription.

| Resource provider | Description |
|-------------------|-------------|
| **Microsoft.DevOpsInfrastructure** | Resource provider for Managed DevOps Pools |
| **Microsoft.DevCenter** | Resource provider for dev center and dev center project |

Registering a resource provider uses the `/register/action` operation. Permission to perform this operation is included if the [contributor or owner role](/azure/role-based-access-control/built-in-roles) on your subscription is assigned to your account.


#### [Azure portal](#tab/azure-portal/)

### Azure portal

1. Sign in to the [Azure portal](https://portal.azure.com/).
1. On the Azure portal menu, search for **Subscriptions**. Select it from the available options.
1. Select the Azure subscription you plan to use for Managed DevOps Pools.
1. On the left menu, under **Settings**, select **Resource providers**.
1. Search for **Microsoft.DevOpsInfrastructure**, select the check box from the list, and choose **Register**.

   :::image type="content" source="./media/prerequisites/register-resource-provider.png" alt-text="Screenshot of registering the Managed DevOps Pools Azure Resource provider.":::

1. Search for **Microsoft.DevCenter**. If **Microsoft.DevCenter** isn't registered, select the check box from the list, and choose **Register**.

1. To see the Azure regions that support Managed DevOps Pools in your subscription, first register the **Microsoft.DevOpsInfrastructure** provider, select it from the list, and choose **Locations**.

   :::image type="content" source="media/prerequisites/view-provider-regions-small.png" lightbox="media/prerequisites/view-provider-regions.png" alt-text="Screenshot of Azure regions that support Managed DevOps Pools.":::

#### [Azure CLI](#tab/azure-cli/)

### Azure CLI

If you prefer using Azure CLI to register the Azure Resource Provider, run the following command using [Azure CLI](/cli/azure/).

```bash
az provider register --namespace 'Microsoft.DevOpsInfrastructure'
az provider register --namespace 'Microsoft.DevCenter'
```

#### [PowerShell](#tab/powershell/)

### PowerShell

If you prefer using PowerShell to register the Azure Resource Provider, run the following command using the [Az.Resources module](/powershell/module/az.resources/register-azresourceprovider).

```PowerShell
Register-AzResourceProvider -ProviderNamespace 'Microsoft.DevOpsInfrastructure'
Register-AzResourceProvider -ProviderNamespace 'Microsoft.DevCenter'
```

* * *

For more information about Azure resource providers, see [Azure resource providers and types](/azure/azure-resource-manager/management/resource-providers-and-types).

### Review Managed DevOps Pools quotas

Managed DevOps Pools uses [Azure Quotas](/azure/quotas/quotas-overview) to manage the usage of the virtual machine resources that run your agents. Managed DevOps Pools quotas are based on CPU cores per Azure VM SKU family. By default, regions that support Managed DevOps Pools have five cores of quota granted for the following [SKU families](/azure/virtual-machines/sizes/overview).

* `standardBSFamily`
* `standardDADSv5Family`
* `standardDASv5Family`
* `standardDDSv5Family`
* `standardDLDSv5Family`
* `standardDPLDSv5Family`
* `standardDPLSv5Family`
* `standardDPSv5Family`
* `standardDSv2Family`
* `standardDSv5Family`
* `standardDv2Family`
* `standardEASv4Family`
* `standardEDSv5Family`
* `standardESv5Family`
* `standardFSv2Family`
* `standardLSv3Family`

> [!NOTE]
> Certain Azure regions require customers to go through a [request process in order to gain access](/troubleshoot/azure/general/region-access-request-process), and your subscription may not be granted the default quota. See [View your quotas](#view-your-quotas) to view the quotas for your subscription, and if you don't have quota for your desired virtual machine sizes, see [request a quota adjustment](#request-a-quota-adjustment) for instructions on how to request quota.

The default agent size for new Managed DevOps Pools resources is **Standard D2ads v5**, which is part of the **standardDADSv5Family**. **Standard D2ads v5** uses two cores, so you can create a pool with up to two agents, for a total of four cores, without requesting additional quota. To create more, you must [request a quota adjustment](#request-a-quota-adjustment).

#### View your quotas

1. To view the quotas for SKU families in your region, sign in to the [Azure portal](https://portal.azure.com/), enter **quotas** in the search box, and choose **Quotas** from the list.

   :::image type="content" source="./media/quotas/quotas-search.png" alt-text="Screenshot of Azure portal search for quotas.":::

1. Choose **Managed DevOps Pools**.

   :::image type="content" source="./media/quotas/quotas-overview.png" alt-text="Screenshot of quotas overview.":::

1. Choose your subscription and the region where you want to create the pool. In the following example, the **Standard DADSv5 Family vCPUs** quota is **8 of 8**, which means eight cores are available, but all eight are being used. If you want to use more than eight cores for this SKU, or you want to use a different SKU that doesn't have any quota, you can request a quota adjustment.

   :::image type="content" source="./media/quotas/quotas-list.png" alt-text="Screenshot of quotas list.":::

#### Request a quota adjustment

1. To request an increase in quota, choose **Request adjustment** for the desired SKU in your region.

   :::image type="content" source="./media/quotas/request-adjustment-menu.png" alt-text="Screenshot of request adjustment menu item.":::

2. Specify the desired number of cores for the selected SKU, and choose **Submit**. In the following example, 20 cores are requested for **Standard DSv2 Family vCPUs**.

   :::image type="content" source="./media/quotas/new-quota-request.png" alt-text="Screenshot of selecting an increased number of cores.":::

3. The quota request takes a few moments to process. The following example shows the result of a successful quota adjustment.

   :::image type="content" source="./media/quotas/quota-request-granted.png" alt-text="Screenshot of granted quota request.":::

   If the quota adjustment can't be autoapproved, you'll be directed to submit a support request, as described in the following section.

##### Create a quota support request

If your subscription doesn't have the capacity to configure your pool with desired Azure VM SKU and maximum agents count, pool creation fails with an error similar to the following message:

`Cores needed to complete this request is 8, which exceeds the current limit of 0 for SKU family standardDDSv4Family in region eastus. Please choose a different region if possible, or request additional quota at https://portal.azure.com/#view/Microsoft_Azure_Support/NewSupportRequestV3Blade/issueType/quota/subscriptionId/subscription_id_placeholder/topicId/3eadc5d3-b59a-3658-d8c6-9c729ba35b97`.

1. Go to the link to start a **New support request** to request a quota increase. Choose **Next**.

   :::image type="content" source="./media/quotas/new-support-request.png" alt-text="Screenshot of new quota support request":::

1. Choose **Enter details**.

   :::image type="content" source="./media/quotas/support-request-enter-details-link.png" alt-text="Screenshot of new quota support request.":::

1. Enter the **Region**, **Sku Family**, **New limit**, and choose **Save and continue**. In th following example, 100 cores are requested for **Standard DDSv4 Family vCPUs**.

   :::image type="content" source="./media/quotas/new-support-request-quota-details.png" alt-text="Screenshot of quota details.":::

1. Fill the following details in this form:

   * **Severity**: Choose one of the available severity levels based on the business impact.

   * **Preferred contact method**: You can either choose to be contacted over **Email** or by **Phone**.

1. Select **Next: Review+Create**. Validate the information provided and select **Create** to create a support request.

Within 24 hours, the Managed DevOps Pools support team will evaluate your request and get back to you.

### Create a dev center and dev center project

Managed DevOps Pools requires a dev center and dev center project. You have the option to create a dev center and dev center project when you create your pool in the Azure portal, but if you want to create them ahead of time, perform the following steps.

* [Create a dev center](#create-a-dev-center)
* [Create a dev center Project](#create-a-dev-center-project)

Multiple Managed DevOps Pools can use the same dev center and dev center project, and the dev center project isn't required to be in the same region or the same subscription as your Managed DevOps Pool.

To create a dev center and dev center project, you must have the [Contributor](/azure/role-based-access-control/built-in-roles/privileged#contributor) or [Owner](/azure/role-based-access-control/built-in-roles/privileged#owner) role assigned to your account for the [scope](/azure/role-based-access-control/role-assignments-steps#step-3-identify-the-needed-scope) in which you want to create the dev center.

#### Create a dev center

1. Sign in to the [Azure portal](https://portal.azure.com/).
1. On the Azure portal menu, search for **Dev centers**, select it from the available options, and choose **Create**.

   ![Screenshot of the Dev centers create button.](./media/prerequisites/dev-center-create-button.png)

1. Choose the desired **Subscription**, **Resource group**, **Name**, and **Location**, and choose **Review + Create**.

   ![Screenshot of Create a dev center.](./media/prerequisites/create-dev-center.png)

1. On the confirmation window, choose **Create** to create the dev center.
1. Wait until the new dev center is created, and proceed to the next section and create a dev center Project.

#### Create a dev center Project

1. Go to the dev center created in the previous section, and choose **Create project**.

   ![Screenshot of Create dev center Project button](./media/prerequisites/create-dev-center-proect-button.png)

1. Choose the desired **Subscription**, **Resource group**, **dev center**, **Name**, and choose **Review + Create**.

   ![Screenshot of Create a dev center project.](./media/prerequisites/create-dev-center-project.png)

1. On the confirmation window, choose **Create** to create the dev center project.

1. When you create your Managed DevOps Pool, specify the dev center and dev center project you created in these steps.

## Configure your Azure DevOps organization

1. [Connect your Azure DevOps organization to Microsoft Entra ID and verify membership](#connect-your-azure-devops-organization-to-microsoft-entra-id-and-verify-membership)
1. [Verify Azure DevOps permissions](#verify-azure-devops-permissions)

### Connect your Azure DevOps organization to Microsoft Entra ID and verify membership

To create a Managed DevOps Pool in your Azure DevOps organization, your Azure DevOps organization must be connected to Microsoft Entra ID, and your user account must be a member of the following Microsoft Entra ID [tenants](/entra/identity-platform/developer-glossary#tenant):

* The tenant of the Azure subscription that contains your Managed DevOps Pool
* The tenant your Azure DevOps organization is connected to

1. [View your current directory (Azure tenant) in the Azure portal](/azure/azure-portal/set-preferences#directories--subscriptions).
1. [View the tenant for your Azure DevOps organization](../organizations/accounts/connect-organization-to-azure-ad.md#connect-your-organization-to-microsoft-entra-id). You can go directly to this page in the Azure DevOps portal here: `https://dev.azure.com/<your-organization>/_settings/organizationAad`.
1. If your Azure DevOps organization isn't connected to Microsoft Entra ID, follow the steps in [Connect your organization to Microsoft Entra ID](../organizations/accounts/connect-organization-to-azure-ad.md#connect-your-organization-to-microsoft-entra-id) and connect to the desired tenant, such as the same tenant as your Azure subscription.

## Verify Azure DevOps permissions

When you create a Managed DevOps Pool, the account you use to sign in to the Azure subscription that contains your Managed DevOps Pool is used to create a corresponding agent pool in your Azure DevOps organization. To successfully create a Managed DevOps Pool, your account must have the following permissions in your Azure DevOps organization.

> [!NOTE]
> In [October 2025](./features-timeline.md#october-2025), Managed DevOps Pools enabled a new mode of pool creation, removing the requirement for organization-level agent pools administrator permission. Creating a pool now requires only project-level permissions for each project where you want to create a Managed DevOps Pool.

| Permission | Description |
|------------|-------------|
| [Azure DevOps organization member](#verify-membership-in-the-azure-devops-organization) | You must be a member of the Azure DevOps organization where you want to create Managed DevOps Pools. |
| [Azure DevOps project member](#verify-azure-devops-project-membership) | You must be a member of each project in which you want to make your Managed DevOps Pools available to pipelines. |
| [Project level agent pools administrator or creator](#verify-project-level-agent-pools-administrator-or-creator-permissions) | You must have **Administrator** or **Creator** agent pools permissions at the project level for each project in which you want to make your Managed DevOps Pools available to pipelines. |

> [!NOTE]
> If you're creating a Managed DevOps Pool from a pipeline, add the service connection's app registration or managed identity to the Azure DevOps organization and grant it the permissions described in the previous table. For more information, see [Connect to Azure with an Azure Resource Manager service connection](../pipelines/library/connect-to-azure.md) and [Use service principals & managed identities in Azure DevOps](../integrate/get-started/authentication/service-principal-managed-identity.md).

### Verify membership in the Azure DevOps organization

You must be a member of the Azure DevOps organization before the permissions in this section can be assigned to your account.

> [!TIP]
> If you're currently working in an Azure DevOps organization, for example using Azure Boards, working with Azure Repos, or using Azure Pipelines, you're already a member of that Azure DevOps organization, and you can skip this step and proceed to [Verify Azure DevOps project membership](#verify-azure-devops-project-membership).

To verify your membership in an Azure DevOps organization:

1. Go to `https://dev.azure.com/{organization}/_settings/users`, replacing `{organization}` with the name of your Azure DevOps organization.
2. If you can access the page, review the user list and verify that you're a member of the Azure DevOps organization.

   If you don't see your account listed, or you can't access the page, ask a [Project Collection administrator](../organizations/security/look-up-project-collection-administrators.md) to [add you as a member](../organizations/accounts/add-organization-users.md#add-users-to-your-organization).

### Verify Azure DevOps project membership    

You must be a project member (any role is acceptable including [Readers](../organizations/security/add-users-team-project.md#add-users-or-groups-to-a-project)) for each project in which you want to make your Managed DevOps Pools available to pipelines.

> [!TIP]
> If you're currently working in an Azure DevOps project, for example using Azure Boards, working with Azure Repos, or using Azure Pipelines, you're already a member of that Azure DevOps project, and you can skip this step and proceed to [Verify project level agent pools administrator or creator permissions](#verify-project-level-agent-pools-administrator-or-creator-permissions).

To verify your membership in a project:

1. Go to `https://dev.azure.com/{organization}/{project}/_settings/permissions`, replacing `{organization}` with the name of your Azure DevOps organization, and `{project}` with the name of the project.
1. If you can access the page, choose **Users**, and verify that you're listed as a user.

   :::image type="content" source="./media/prerequisites/project-users.png" alt-text="Screenshot of verifying Azure DevOps project membership.":::

   If you don't see your account listed, or you can't access the page, ask a [Project Collection administrator](../organizations/security/look-up-project-collection-administrators.md) or a [Project administrator](../organizations/security/change-organization-collection-level-permissions.md#add-members-to-the-project-administrators-group) to [add you as a project member](../organizations/security/add-users-team-project.md#add-users-or-groups-to-a-project) by 

> [!IMPORTANT]
> If creation of your Managed DevOps Pool appears to succeed but the pool isn't added to your Azure DevOps project, verify that you're a project member in addition to having one of the project level agent pools permissions described in [Verify project level agent pools administrator or creator permissions](#verify-project-level-agent-pools-administrator-or-creator-permissions). If you have the project level agent pools permissions but aren't a project member, Managed DevOps Pool creation may silently fail.

### Verify project level agent pools administrator or creator permissions

In addition to the project membership requirement described in the previous step, you must have project level agent pools **Administrator** or **Creator** permissions for each project in which you want to make your Managed DevOps Pools available to pipelines.

* You can be directly assigned the **Administrator** or **Creator** permission by a [Project Collection Administrator](../organizations/security/look-up-project-collection-administrators.md), a [Project administrator](../organizations/security/change-organization-collection-level-permissions.md#add-members-to-the-project-administrators-group), or another **Project-level agent pools administrator**.
* If you're a [Project Collection administrator](../organizations/security/look-up-project-collection-administrators.md) or [Project administrator](../organizations/security/change-organization-collection-level-permissions.md#add-members-to-the-project-administrators-group), your account is automatically assigned the **Administrator** permission.

Managed DevOps Pools has two different modes for adding a Managed DevOps Pool to the projects in your Azure DevOps organization.

  * If you create your Managed DevOps Pool with **Add pool to all projects** set to **Yes**, Managed DevOps Pools configures the pool to be available in all projects for which you have the **Administrator** or **Creator** permission, and skips any projects where you lack these permissions. You can manually add the pool to additional projects after the **Administrator** permission or **Creator** permission is assigned to your account for those projects.
  * If you provide a list of projects when creating your Managed DevOps Pool, you must have the **Administrator** or **Creator** permission for every listed project or else pool creation fails.

To check your agent pools permissions at the project level:

1. Go to the Azure DevOps portal and sign in to your Azure DevOps organization (`https://dev.azure.com/{your-organization}`), go to the project where you want to run pipelines using your Managed DevOps Pool, and choose **Project settings**.

   :::image type="content" source="./media/prerequisites/project-settings.png" alt-text="Screenshot of Project settings button.":::

1. Go to **Pipelines** > **Agent pools** > **Security**.

   :::image type="content" source="./media/prerequisites/project-agent-pools.png" alt-text="Screenshot of Project level agent pools list.":::

   You can also go directly to project level agent pools security settings by going to `https://dev.azure.com/{organization name}/{project name}/_settings/agentqueues`, and choosing **Security**.

1. View the list of user permissions for the project level agent pools scope. In this example no specific users are added, so only Project Collection Administrators and the default project level group administrators have permission to create pools at the project level, or assign users to this role.

   :::image type="content" source="./media/prerequisites/project-agent-pools-security.png" alt-text="Screenshot of Project level agent pools security page.":::

1. If you need to create Managed DevOps Pools for use in this Project, ask a Project Collection administrator, a Project administrator (or anyone in one of the listed administrator groups), or an administrator listed here, to choose **Add**, add you as an **Administrator** or **Creator**, and choose **Save**. For more information, see [Set agent pool security in Azure Pipelines](../pipelines/policies/permissions.md#set-agent-pool-security-in-azure-pipelines).

   > [!TIP]
   > If the **Add** button is enabled, you have permission to create Managed DevOps Pools for use in this project.
   >
   > If the **Add** button is disabled, you don't have permission to create Managed DevOps Pools for use in this project, unless you have the **Creator** permission, in which case your name (or the name of a group for which you're a member) would be listed in the **User permissions** list as having the **Creator** permission.


## Next steps

* [Create your first Managed DevOps Pool](./quickstart-azure-portal.md)
