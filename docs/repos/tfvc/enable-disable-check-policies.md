---
title: Enable and Disable Check-In Policies
titleSuffix: Azure Repos
description: Enable and Disable Check-In Policies
ms.assetid: 629bf67c-22c5-4047-92b8-aa8f7c201cc9
ms.prod: devops
ms.technology: devops-code-tfvc
ms.manager: jillfra
ms.author: sdanie
author: steved0x
ms.topic: conceptual
ms.date: 08/10/2016
monikerRange: '>= tfs-2015'
---


# Enable and Disable Check-In Policies

#### Azure Repos | TFS 2018 | TFS 2017 | TFS 2015 | VS 2017 | VS 2015 | VS 2013

Administrators of Team Foundation version control can add check-in policy requirements. These check-in policies require the user to take actions when they conduct a check-in to source control; for example a user can be required to associate a work item with a changeset. For more information, see [Add Check-In Policies](add-check-policies.md). Prior to enabling or disabling check-in policies, you must first create a check-in policy. For more information, see [Add Check-In Policies](add-check-policies.md). The following procedures demonstrate how to enable or disable check-in policies for your project.

**Required Permissions**

To complete this procedure, you must have the **Edit project-level information** permission set to **Allow**. For more information, see [Permissions and groups reference](../../organizations/security/permissions.md).

## Procedure

### To enable a check-in policy

1.  On the **Team** menu, click **Project Settings**, and then click **Source Control**.

2.  In the **Source Control Settings** dialog box, click the **Check-in Policy** tab.

3.  In the policy type list, select the policy type you want to enable, and click **Enable**.

4.  Click **OK**.

### To disable a check-in policy

1.  On the **Team** menu, click **Project Settings**, and then click **Source** **Control**.

2.  In the **Source** **Control** **Settings** dialog box, click the **Check-in Policy** tab.

3.  In the policy type list, select the policy type you want to delete, and click **Disable**.

4.  Click **OK**.

## See Also

#### Concepts

[Set and Enforce Quality Gates](set-enforce-quality-gates.md)

[Working with Changesets](find-view-changesets.md)

#### Other Resources

[Walkthrough: Customizing Check-in Policies and Notes](https://msdn.microsoft.com/library/ms181281)
