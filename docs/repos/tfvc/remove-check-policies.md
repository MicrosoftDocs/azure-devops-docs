---
title: Remove Check-In Policies
titleSuffix: Azure Repos
description: Remove Check-In Policies
ms.assetid: fb4b62ef-e413-4f03-81fe-ae560c9f60ff
ms.prod: devops
ms.technology: devops-code-tfvc
ms.manager: jillfra
ms.author: sdanie
author: steved0x
ms.topic: conceptual
ms.date: 08/10/2016
monikerRange: '>= tfs-2015'
---


# Remove Check-In Policies

#### Azure Repos | TFS 2018 | TFS 2017 | TFS 2015 | VS 2017 | VS 2015 | VS 2013

Administrators of Team Foundation version control can add check-in policy requirements. These check-in policies require the user to take actions when they conduct a check-in to source control. For example, a user can be required to associate a work item with a changeset. For more information, see [Add Check-In Policies](add-check-policies.md). The following procedure demonstrates how to remove a check-in policy from your project.

**Required Permissions**

To complete this procedure, you must have the **Edit project-level information** permission set to **Allow**. For more information, see [Permissions and groups reference](../../organizations/security/permissions.md).
## Procedure
### To remove a check-in policy

1.  From the **Team** menu, choose **Project Settings**, and then select **Source Control**.

2.  In the **Source Control Settings** dialog box, choose the **Check-in Policy** tab.

3.  In the policy type list, click the policy type that you want to delete, and click **Remove**.

4.  Click **OK**.

## See Also

#### Concepts

[Set and Enforce Quality Gates](set-enforce-quality-gates.md)

[Working with Changesets](find-view-changesets.md)

#### Other Resources

[Walkthrough: Customizing Checkin Policies and Notes](https://msdn.microsoft.com/library/ms181281)
