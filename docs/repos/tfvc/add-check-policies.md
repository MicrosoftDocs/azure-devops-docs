---
title: Add check-in policies
titleSuffix: Azure Repos
description: See how to add Team Foundation Version Control check-in policies in Visual Studio Team Explorer.
ms.assetid: 1f3046e3-1ea2-4477-99ca-76d3fc70c47b
ms.service: azure-devops-repos
ms.topic: conceptual
ms.date: 10/06/2022
monikerRange: '<= azure-devops'
ms.subservice: azure-devops-repos-tfvc
---


# Add check-in policies

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]
[!INCLUDE [version-vs-gt-eq-2019](../../includes/version-vs-gt-eq-2019.md)]

Team Foundation Version Control administrators can add check-in policy requirements. These check-in policies require users to take actions when they conduct a check-in to source control. For example, a user can be required to associate a work item with a changeset. For more information about check-ins, see [Develop code and manage pending changes](develop-code-manage-pending-changes.md).

> [!NOTE]
> You can set Visual Studio check-in policies through Team Explorer as documented in this article, the [tf.exe configure command](configure-command.md), or [through registry keys declared in the pkgdef of a Visual Studio extension](/visualstudio/extensibility/internals/createpkgdef-utility). Policies only apply to a single installation of Visual Studio on your computer. If you have multiple installations of Visual Studio, you need to set the check-in policy on each installation.

## Create a check-in policy

1. From Visual Studio Team Explorer, select **Settings**, and then select  **Source Control** under **Team Project**.
1. In the **Source Control Settings** dialog box, select the **Check-in Policy** tab, and then select **Add**.
1. In the **Add Check-in Policy** dialog box, select the policy types you want, and then select **OK**.

   You can select from the following policies:

   - **Builds** requires that the last build was successful before any new changes can be checked in.
   - **Changeset Comments Policy** requires users to provide check-in comments.
   - **Code Analysis** requires that code analysis be run before code can be checked in.
   - **Custom Path Policy** scopes the other policies to specific folders or file types.
   - **Forbidden Patterns Policy** prevents check-ins that have files with forbidden filename patterns.
   - **Work Item Query Policy** specifies a work item query whose results are the only legal work items to associate with a check-in.
   - **Work Items** requires that one or more work items be associated with every check-in.

1. If you select **Code Analysis**, in the **Code Analysis Policy Editor**, select the checkboxes for the types of code analysis that you want, and then select **OK**.

   Options are:

   - **Enforce check-in to include only files that are part of current solution**
   - **Enforce C/C++ Code Analysis (/analyze)**
   - **Enforce Code Analysis For Managed Code**. If you select this option, select the desired rule set under **Rule settings for Managed Code Analysis**.

   For more information about how to use code analysis tools, see [Create Code Analysis Check-In Policies](/visualstudio/code-quality/how-to-create-or-update-standard-code-analysis-check-in-policies).
   
1. If you select **Custom Path Policy**, in the **Custom Path Policy** dialog box, select a child policy to operate on, and enter one or more values in **Source Control Path Filter (RegEx)** to specify allowed paths. Select **Add** for each value, and then select **OK**.

   Apply a separate **Custom Path Policy** for each child policy that you want to use custom paths.

   > [!NOTE]
   > If you apply this policy to an enabled child policy, you get a message that **The selected policy is currently enabled. It should be disabled or it will end up running twice.** You can remove or disable the original policy from the **Check-in Policy** screen.
   
1. If you select **Forbidden Patterns Policy**, in the **Forbidden Patterns** dialog box, list the pattern or patterns to forbid, and then select **OK**.

1. If you select **Work Items Query Policy**, in the **Query Policy** dialog box, navigate to and select a saved shared work item query, and then select **OK**.

1. When you're satisfied with the check-in policies settings, select **OK**. The new check-in policy displays with future check-ins.

## Related articles 

- [Configure command](configure-command.md)
- [Set and enforce quality gates](set-enforce-quality-gates.md)
- [Walkthrough: Customizing checkin policies and notes](/previous-versions/ms181281(v=vs.100))