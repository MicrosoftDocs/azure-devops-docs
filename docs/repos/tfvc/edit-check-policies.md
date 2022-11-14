---
title: Edit check-in policies
titleSuffix: Azure Repos
description: See how TFVC administrators can edit check-in policies in Team Foundation Version Control (TFVC).
ms.assetid: 3bc445f1-d354-4991-9381-f10739b5d0fe
ms.service: azure-devops-repos
ms.topic: conceptual
ms.date: 11/01/2022
monikerRange: '<= azure-devops'
ms.subservice: azure-devops-repos-tfvc
---


# Edit check-in policies

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]
[!INCLUDE [version-vs-gt-eq-2019](../../includes/version-vs-gt-eq-2019.md)]

Team Foundation Version Control (TFVC) administrators can add and edit check-in policy requirements. These check-in policies require users to take actions when they conduct check-ins to version control. For example, users can be required to associate work items with changesets. For more information on check-ins, see [Develop code and manage pending changes](develop-code-manage-pending-changes.md).

Before editing a check-in policy, you must first create one. For more information, see [Add check-in policies](add-check-policies.md). The following default check-in policy types are available:

- **Builds** requires that the last build was successful before any new changes can be checked in.
- **Changeset Comments Policy** requires users to provide check-in comments.
- **Code Analysis** requires that code analysis be run before code can be checked in.
- **Custom Path Policy** scopes the other policies to specific folders or file types.
- **Forbidden Patterns Policy** prevents check-ins that have files with forbidden filename patterns.
- **Work Item Query Policy** specifies a work item query whose results are the only legal work items to associate with a check-in.
- **Work Items** requires that one or more work items be associated with every check-in.

> [!NOTE]
> You can temporarily disable one or more policy types in the **Source Control Settings** dialog box. On the **Check-in Policy** tab, highlight the policies and select **Disable**. To enable a disabled policy, highlight the disabled policy, and click **Enable**. Then select **OK**.

## Prerequisites  

To complete this procedure, you must have the **Edit project-level information** permission set to **Allow**. For more information, see [Default TFVC permissions](../../organizations/security/default-tfvc-permissions.md).

## Edit a check-in policy

1. On the Visual Studio **Team** menu, select **Team Project Settings** > **Source Control**.

   Or, in the Visual Studio **Team Explorer** window, select **Settings** and then select **Source Control** under **Team Project**.

1. In the **Source Control Settings** dialog box, select the **Check-in Policy** tab.

1. In the **Policy Type** list, select the policy type for which you want to make changes, and then select **Edit**.

1. Continue this procedure based on the type of policy you're editing:

   - **Builds** requires that the last build was successful before any new changes can be checked in. This policy type can't be modified.

   - **Changeset Comments Policy** requires users to provide check-in comments. This policy type can't be modified.

   - **Code Analysis** requires that code analysis be run before code can be checked in. If you select this type, in the **Code Analysis Policy Editor** dialog box, select the check boxes for the types of code analysis that you want performed. Options are:
     - **Enforce check-in to only contain files that are part of current solution**
     - **Enforce C/C++ Code Analysis (/analyze)**
     - **Enforce Code Analysis For Managed Code**. If you select this option, select the desired rule settings under **Rule settings for Managed Code Analysis**.

   - **Custom Path Policy** scopes the other policies to specific folders or file types. If you select this type, in the **Custom Path Policy** dialog box, select a child policy to operate on, and enter one or more values in **Source Control Path Filter (RegEx)** to specify allowed paths. Apply a separate **Custom Path Policy** for each child policy that you want to use custom paths.

     > [!NOTE]
     > If you apply this policy to an enabled child policy, you get a message that **The selected policy is currently enabled. It should be disabled or it will end up running twice.** You can remove or disable the original policy from the **Check-in Policy** list.
   
   - **Forbidden Patterns Policy** prevents check-ins that have files with forbidden filename patterns. If you select this type, in the **Forbidden Patterns** dialog box, list the pattern or patterns to forbid, and then select **OK**.

   - **Work Item Query Policy** specifies a work item query whose results are the only legal work items to associate with a check-in. If you select this type, in the **Query Policy** dialog box, navigate to and select a saved shared work item query, and then select **OK**.

   - **Work Items** requires that one or more work items be associated with every check-in. This policy type can't be modified.

1. When you're satisfied with the check-in policies settings, select **OK**.

## Related articles

- [Set and enforce quality gates](set-enforce-quality-gates.md)  
- [Work with changesets](find-view-changesets.md)  
- [Walkthrough: Customize checkin policies and notes](/previous-versions/ms181281(v=vs.100))
