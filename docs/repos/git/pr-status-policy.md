---
title: Configure a branch policy for an external service
titleSuffix: Azure Repos
description: Configure a branch policy to require status from a 3rd party pull request status server
ms.assetid: 11f567b2-e45f-434c-88eb-d5f43398b451
ms.technology: devops-code-git
ms.topic: conceptual
ms.date: 08/11/2020
monikerRange: '>= tfs-2018'
---


# Configure a branch policy for an external service 

**Azure Repos | Azure DevOps Server 2020 | Azure DevOps Server 2019 | TFS 2018 Update 2**

Branch policies are a powerful feature to ensure high quality code in your repo by establishing requirements for all pull requests. External services can use the PR [Status API](/rest/api/azure/devops/git/pull%20request%20statuses) to post detailed status to your PRs. The branch policy for external services brings the ability for those 3rd party services to participate in the PR workflow and establish policy requirements. This article guides you through the process of configuring a branch policy for a service that is posting PR status. For more information about PR status, see [Customize and extend pull request workflows with pull request status](pull-request-status.md).

## Prerequisites

* An organization in Azure DevOps with a Git repo. If you don't have an organization, [sign up](../../organizations/accounts/create-organization.md) to upload and share code in free unlimited private Git repositories.
* A service that posts status to PRs. See [Create a pull request status server](./create-pr-status-server.md).

## Configure the branch policy 

1. Navigate to Code > Branches and find the branch that you want to configure the policy on (typically `master` or `develop`). From the context menu, select the **Branch policies** option.

    ![Select Branch policies from the context menu](media/pr-status-policy/branches.png)

2. Scroll down to find **Status checks**. Select the **+** button.

    ![Select the Add policy button](media/pr-status-policy/add-service.png)

3. Select the service you want to create a policy for from the list.  If the status has been posted previously you can pick it from the list; if it is a new policy you can type in the name of the policy.

   ![Select the policy from the list](media/pr-status-policy/choose-service.png)

   - **Policy requirement** determines whether or not this policy is optional or required to complete pull requests into the branch. 
   - **Authorized identity** is used to enforce that status from only the specified identity will be counted towards the policy fulfillment. 
   - **Reset conditions** is used to determine when a posted status is no longer valid. If the status posted is specific to the latest code (i.e. a build), check **Reset status whenever there are new changes** to reset the status when the source branch changes.
   - Optionally set a **Path filter**. Learn more about [path filters](branch-policies.md#path-filters) in branch policies. 
   - **Policy applicability** determines whether this policy applies as soon as a pull request is created, or whether the policy applies only after the first status is posted to the pull request.
   - **Default display name** allows you to specify an optional display name for your policy.

## Create a new pull request

1. Create a new pull request into the branch where the policy is defined. For more information, see [Create a pull request](pull-requests.md#create-a-new-pull-request).

2. After creating the PR, the new policy will appear in the Policies section of the PR details view. Initially, the policy will appear as not set until the external service has posted status. 

    ![Policy status is visible in the Policies section](media/pr-status-policy/pr-policy-no-status.png)

    When the service has posted status, the policy will update accordingly. Completion will be blocked until the policy approves the PR.

    ![Policy status updates](media/pr-status-policy/pr-policy-status-set.png)

    When the policy criteria are met, and the service posts a `succeeded` status, the PR will be approved and completion will be unblocked.

    ![Policy status approved and completion unblocked](media/pr-status-policy/pr-policy-succeeded.png)

## Summary
In this article, you learned how to configure a branch policy for an external service.