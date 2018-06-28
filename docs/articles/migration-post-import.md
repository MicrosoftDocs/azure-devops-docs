---
title: Post Import
description: Guidance on how to validate and configure a Visual Studio Team Services (VSTS) account after it has been imported.
ms.prod: devops
ms.topic: article
ms.technology: devops-learn
ms.contentid: db186305-0d82-4152-bb04-e7b44b56305f
ms.manager: douge
ms.author: elbatk
author: elbatk
monikerRange: '>= tfs-2013'
ms.date: 04/13/2018
---

# Post Import

> [!NOTE]
> It's recommended that you use the [Migration Guide](https://aka.ms/tfsimport) to progress through your import. The guide links to the technical documentation as needed.

A Visual Studio Team Services (VSTS) account is ready for use once an import has completed successfully. However, there are common tasks that you should perform before opening the account up to all of your users. Below is a list of the most common after import tasks that should be completed. Tasks are listed in recommended order of completion. 

## Immediately After Import
Immediately after the account becomes available you will want to take a small team and perform spot checks on the account. It's recommended that this team consists of the project collection administrators. This shouldn't be an in-depth check, but rather making sure that major pieces from your collection were brought over. Did your source code get imported? Are you seeing your build history? Are all of our area paths still present? It's best to confirm these artifacts are present before opening the account to the entirety of your user base. 

After spot checking the account you will want to consider if you want to rename it. [Renaming a VSTS account](../organizations/accounts/rename-vsts-account.md) is a simple operation, but it has [large impacts](https://support.microsoft.com/en-us/kb/2793597) on users currently using the account. Some examples being Team Explore connections breaking or bookmarks no longer working. Getting a rename out of the way while it's just a small group of users using the account allows the rest of the users to come in and configure their connections once. 

## Set up Billing

To pay for users or services in VSTS, like hosted build and deployment agents, you'll need to set up billing for your VSTS account. You can do this when you make your first purchase by selecting an Azure subscription that you'd like to use for billing. This links the subscription to your VSTS account, so that all future purchases for your VSTS account will use the same Azure subscription for billing.

## Manage Users and Access

Your VSTS account includes 5 free users with [Basic](https://visualstudio.microsoft.com/products/visual-studio-team-services-feature-matrix-vs) access. Basic includes features like Git and Team Foundation version control, tools for agile planning and Java teams, and more. Also, you can add [Visual Studio subscribers](https://visualstudio.microsoft.com/products/how-to-buy-vs) for free - they get basic features plus additional features, based on their subscription level. Add [Stakeholder](https://visualstudio.microsoft.com/products/visual-studio-team-services-feature-matrix-vs) for free, too-they can access your work items and view your backlogs.

This means that you shouldn't have to take any other import steps if your identity mapping file has just 5 users with Basic access, Visual Studio subscriptions, and Stakeholder access. If you have more than 5 users with Basic access, you'll need to [pay for these users in your VSTS account](../billing/buy-basic-access-add-users.md). Just make sure to do this before the end of the calendar month when you import. Otherwise, these users' feature access will change from Basic to Stakeholder on the 1st day of the next calendar month. To find out how many additional users you'll need to pay for, visit your VSTS account (```https://{youraccount}.visualstudio.com/_user```) so you can find the number of paid users that you've assigned:

![User Summary on a VSTS account](_img/migration-post-import/UserSummary.png)

Dry run imports do not have their licenses reset on the 1st of the month. Unlike production imports, their grace period extends for the life of the account. So you don't need to worry about purchasing licenses while testing out an import. 

## Builds
Next, you will want to configure your build agents. As part of the migration, all of your build definitions have been brought over, but agents and pools need to be reconfigured against the new VSTS account. VSTS offers the ability to use a hosted pool of build agents that you can pay to use, or you can connect your private build agent(s). It's important to note that only one private build agent is included for free. After that there is a [fee](https://visualstudio.microsoft.com/en-us/products/visual-studio-team-services-pricing-vs.aspx) for having additional private build agents. To pay for hosted and private build agents you will need to link a subscription to your VSTS account. See the following resources for details on performing this task:

* [Build Agents](../pipelines/agents/agents.md) 

If you plan on using your existing on-premises private build agents, there is one more recommended step that needs to be taken after registering them to your new account. Clearing their cache will ensure that you don't encounter any build issues related to older TFVC or Git pointers to your on-premises TFS collection. See [refreshing caches on client computers](/tfs/server/admin/backup/refresh-data-caches) for details on how to accomplish this task. 

## Release Management
If you used Release Management in TFS then your release definitions and history data will be included with your import. However, like builds, [agents](../pipelines/agents/agents.md) and pools need to be reconfigured against the new VSTS account. 

## Package Management (Preview)
If you elected to include [preview](https://aka.ms/vstsimportpreview) features with your import and you had [Package Management](https://visualstudio.microsoft.com/team-services/package-management/) data in your TFS collection, then you will need to install the Package Management [extension](https://marketplace.visualstudio.com/items?itemName=ms.feed#) on your account post import. 

## Notifying the Team
After getting your builds running and license subscription configured, it's recommended that the account be opened up to all users for validation. This is when individual users can ensure that all of the content is in place, they have the right access level, and that they can pull code. Be sure to point users to our [documentation](../organizations/accounts/set-up-vs.md) on connecting to VSTS from all of our supported IDEs and Team Explorer.  Users of TFVC with local workspaces will need to remap their workspaces against the new account and Git users will have to reconfigure their remotes to be able to pull code. If anything is reported as missing from the migrated account, please reach out to [vstsdataimport@microsoft.com](mailto:vstsdataimport@microsoft.com). For other functional issues, please reach out to [customer support](https://visualstudio.microsoft.com/support/).  
