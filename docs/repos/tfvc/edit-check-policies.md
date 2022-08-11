---
title: Edit Check-In Policies
titleSuffix: Azure Repos
description: Edit Check-In Policies
ms.assetid: 3bc445f1-d354-4991-9381-f10739b5d0fe
ms.technology: devops-code-tfvc
ms.topic: conceptual
ms.date: 07/13/2022
monikerRange: '<= azure-devops'
---


# Edit check-in policies

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]
[!INCLUDE [version-vs-gt-2013](../../includes/version-vs-gt-2013.md)]

Administrators of Team Foundation version control can add and edit check-in policy requirements. These check-in policies require the user to take actions when they conduct a check-in to version control; for example a user can be required to associate a work item with a changeset. For more information on check-ins, see [Develop code and manage pending changes](develop-code-manage-pending-changes.md). Before editing a check-in policy, you must first create one. For more information, see [Add Check-In Policies](add-check-policies.md). The default available check-in policy types include:

-   **Builds**   Requires that the last build was successful before a check-in.  
-   **Code Analysis**   Requires that code analysis is run before check-in.  
-   **Work Items**   Requires that one or more work items are associated with the check-in.

> [!NOTE]
> You can temporarily disable one or more policy types in **Source Control Settings**, on the **Check-in Policy** tab, by highlighting the policies and clicking **Disable**. To enable a disabled policy, highlight the disabled policy, and click **Enable**.

## Prerequisites  

To complete this procedure, you must have the **Edit project-level information** permission set to **Allow**. For more information, see [Default TFVC permissions](../../organizations/security/default-tfvc-permissions.md).

## Edit a check-in policy

1.  On the **Team** menu, click **Team** **Project** **Settings**, and then click **Source Control**.

2.  In the **Source Control Settings** dialog box, click the **Check-in Policy** tab.

3.  In the **policy type** list, click the policy type for which you want to make changes, and then click **Edit**.

4.  Continue this procedure based on the type of policy you are editing:

    -   **Builds**   Requires that the last build was successful before a check-in. This policy type cannot be modified.

    -   **Code Analysis**   Requires that code analysis be run before code is checked in. The **Code Analysis** **Policy Editor** appears.

        Click the check boxes for the types of code analysis that you want performed. Options are **Enforce check-in to only contain files that are part of current solution**, **Enforce C/C++ Code Analysis (/analyze)**, and **Enforce Code Analysis For Managed Code**. If you select the **Enforce Code Analysis For Managed Code** check box, select the desired rule settings under **Rule settings for Managed Code Analysis**.

        For more information about how to use code analysis tools, see [Creating and Using Code Analysis Check-In Policies](/visualstudio/code-quality/creating-and-using-code-analysis-check-in-policies).

    -   **Work Items**   Requires that one or more work items be associated with the check-in. This policy type cannot be modified.

5.  Click **OK**.

## Related articles

- [Set and Enforce Quality Gates](set-enforce-quality-gates.md)  
- [Working with Changesets](find-view-changesets.md)  
- [Walkthrough: Customizing Checkin Policies and Notes](/previous-versions/ms181281(v=vs.100))
