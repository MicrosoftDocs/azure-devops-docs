---
title: Version Control - Branching strategies with TFVC
titleSuffix: Azure Repos
description: Learn about branching strategies for Team Foundation Version Control (TFVC) and how to select an effective strategy
ms.assetid: C9659CD5-CC5D-4522-9DB7-B887F361819F
ms.technology: devops-code-tfvc 
ms.date: 04/25/2018
author: wpschaub
ms.topic: conceptual
monikerRange: '>= tfs-2015'
---


# Select an effective branching strategy

**Azure Repos | Azure DevOps Server 2020 | Azure DevOps Server 2019 | TFS 2018 - TFS 2015**


Creating branches for your Team Foundation Version Control (TFVC) repositories are useful to isolate risk. Consider some challenges team members typically face when they work on a software project that is staffed by more than five or ten people:

-   The group has a few (or maybe several) different feature teams, each working on a set of functionality that is reasonably discrete. But each team also depends on functionality built by other teams. You need to isolate the risk of the changes introduced by the work done in each of these teams, and yet eventually, you need to merge all their efforts together into one product.

-   The test team needs a stable version of the code to test, and yet simultaneously, the developers need to continue moving forward with new features that will occasionally destabilize the product.

-   The software has two previous versions and one current version in progress. Even though most of the development effort is invested in the current version, the previous versions must still be supported with occasional releases of service packs, critical fixes and security patches, and other changes.

This article explores a few common branching strategies to help you make the right decision.

Unlike Git branches, which are repository scoped, TFVC branches are path scoped and not as lightweight. Set your bar for creating branches high and only branch when you have a need for code or release isolation.

## Main Only

The **Main Only** strategy can be folder-based or with the **main** folder [converted to a Branch](branch-folders-files.md), to enable additional visibility features. You commit your changes to the main branch and optionally indicate development and release milestones with labels.

![Main Only branching strategy](./media/branching-strategies-with-tfvc/branching-scenarios-main-only.png)

> RISK: The mutability and lack of history with TFVC labels can add risk of change control.

Start with the main only branching strategy, [branch strategically](branch-strategically.md) and adopt other strategies to evolve into more complex strategies as needed.

## Development isolation

When you need to maintain and protect a stable **main** branch, you can branch one or more **dev** branches from **main**. It enables isolation and concurrent development. Work can be isolated in development branches by feature, organization, or temporary collaboration.

![Developer Isolation branching strategy](./media/branching-strategies-with-tfvc/branching-scenarios-developer-isolation.png)

It's possible that there are changes in the **main** branch. Always forward integrate (FI) **main** to the **dev** branch and resolve merge conflicts. Then reverse integrate (RI) changes back to **main**. Maintain the same quality bar across branches. Build and run build verification tests (BVTs) on **dev** the same way you are doing on **main**.

> NOTE: With this strategy, teams are likely to keep the **dev** branch around forever, potentially building a large merge ticket history.

## Feature isolation

Feature isolation is a special derivation of the development isolation, allowing you to branch one or more **feature** branches from **main**, as shown, or from your **dev** branches. 

![Feature Isolation branching strategy](./media/branching-strategies-with-tfvc/Branching-Scenarios-Feature-Isolation.png)

When you need to work on a particular feature, it might be a good idea to create a feature branch.

Keep the lifetime of feature work and the associated feature branch short-lived. Forward integrate (FI) changes from the parent branch frequently. Reverse integrate (RI) back to the parent only when some agreed team criteria, for example definition of done, is met. Rollback of features on **main** can be costly and may reset testing.

## Release isolation

Release isolation introduces one or more **release** branches from **main**. The strategy allows concurrent release management, multiple and parallel releases, and codebase snapshots at release time.

![Release Isolation branching strategy](./media/branching-strategies-with-tfvc/branching-scenarios-release-isolation.png)

When the release is ready to be locked down, it's time to create a new branch for the release.

Never forward integrate (FI) from **main**. Lock release branches using access permissions, to prevent unintended modifications to a **release**. Patches and hot fixes made to the **release** branch can be reverse integrated (RI) back to the **main** branch.

> NOTE: None of the branching scenarios are immutable, which is why you notice emergency hotfixes performed on release branches. Evolve each strategy to match your requirements, without losing sight of complexity and associated cost.

## Servicing and release isolation

Servicing and Release Isolation strategy introduces **servicing** branches. This strategy allows concurrent service management of service packs, and codebase snapshots at release time.

![Service Release Isolation branching strategy](./media/branching-strategies-with-tfvc/branching-scenarios-service-release-isolation.png)

Use this strategy if you need a servicing model for customers to upgrade to the next major release and additional service packs per release.

Like the release isolation, the **servicing** isolation and **release** branches are created when the release is ready to be locked down. Never forward integrate from **main** to **servicing**, or from **servicing** to **release**. Lock the **release** branch to prevent modifications. Future servicing changes can be done on the **servicing** branch.

Create new servicing and release branches for subsequent releases if you require that level of isolation.

## Servicing, hotfix, release isolation

Although not recommended, you can continue to evolve the strategies, by introducing additional **hotfix** branches and associated release scenarios.

![Service HotFix Release Isolation branching strategy](./media/branching-strategies-with-tfvc/branching-scenarios-service-hotfix-release-isolation.png)

At this point, you have successfully explored a few of the common TFVC branching scenarios. You can evolve them, or investigate other strategies such as [feature toggling](/archive/msdn-magazine/2014/may/alm-rangers-software-development-with-feature-toggles), toggling features on and off to determine whether a feature is available at run time.

## Q&A

### Why should branches be short-lived?

By keeping branches short-lived,  merge conflicts are kept to as few as possible. 

### Why only branch if necessary?

To embrace [DevOps](/devops/), you need to rely on automation of build, test, and deployment. Change is **continuous**, frequent, and merge operations more challenging as merge conflicts often require manual intervention. It is therefore recommended to avoid branching and rely on other strategies, such as feature toggling.

### Why remove branches?

Your goal should be to get changes back into **main** as soon as possible, to mitigate long-term merge consequences. Temporary, unused, and abundant branches cause confusion and overhead for the team.

### Can a codebase be branched across projects?

Yes. It is not recommended, unless teams must share source and cannot share a common process.

### What about the code promotion strategy?

The Code Promotion strategy feels like a relic from the waterfall development era. It is typically with long testing cycles, and separate development and testing teams. The strategy is no longer recommended. For more information on this strategy, see the [branching guidance](/archive/blogs/visualstudioalmrangers/library-of-tooling-and-guidance-solutions-aka-msvsarsolutions). 

### When merging **dev** to **main** branch, why are no changes detected?

You have likely ignored changes in previous merges, for example, using the `keep source` conflict resolution option. See [merging development branch to main: there were no changes to merge](https://stackoverflow.com/questions/27590388/merging-development-branch-to-main-there-were-no-changes-to-merge) for details.

### Are there similarities between TFVC and Git branch strategies?

The TFVC Feature Isolation branching strategy is similar to the Git [topic branches](https://www.git-scm.com/book/en/v2/Git-Branching-Branching-Workflows#Topic-Branches).

> Authors: Jesse Houwing, Marcus Fernandez, Mike Fourie, and Willy Schaub from the ALM | DevOps Rangers. You can contact them [here](https://github.com/ALM-Rangers/Guidance).
 
*(c) 2015 Microsoft Corporation. All rights reserved. This document is
provided "as-is." Information and views expressed in this document,
including URL and other Internet Web site references, may change without
notice. You bear the risk of using it.*

*This document does not provide you with any legal rights to any
intellectual property in any Microsoft product. You may copy and use
this document for your internal, reference purposes.*