---
title: Edit Check-In Policies
titleSuffix: Azure Repos
description: Edit Check-In Policies
ms.assetid: 3bc445f1-d354-4991-9381-f10739b5d0fe
ms.prod: devops
ms.technology: devops-code-tfvc
ms.manager: jillfra
ms.author: sdanie
author: steved0x
ms.topic: conceptual
ms.date: 08/18/2016
monikerRange: '>= tfs-2015'
---


# Edit Check-In Policies

#### Azure Repos | TFS 2018 | TFS 2017 | TFS 2015 | VS 2017 | VS 2015 | VS 2013

Administrators of Team Foundation version control can add and edit check-in policy requirements. These check-in policies require the user to take actions when they conduct a check-in to version control; for example a user can be required to associate a work item with a changeset. For more information on check-ins, see [Check In Pending Changes](https://msdn.microsoft.com/library/ms181411). Before editing a check-in policy, you must first create one. For more information, see [Add Check-In Policies](add-check-policies.md). The default available check-in policy types include:

-   **Builds**   Requires that the last build was successful before a check-in.  
-   **Code Analysis**   Requires that code analysis is run before check-in.  
-   **Work Items**   Requires that one or more work items are associated with the check-in.

>**Note:**  
>You can temporarily disable one or more policy types in **Source Control Settings**, on the** Check-in Policy** tab, by highlighting the policies and clicking **Disable**. To enable a disabled policy, highlight the disabled policy, and click **Enable**.

**Required Permissions**  
To complete this procedure, you must have the **Edit project-level information** permission set to **Allow**. For more information, see [Permissions and groups reference](../../organizations/security/permissions.md).

### To edit a check-in policy

1.  On the **Team** menu, click **Team** **Project** **Settings**, and then click **Source Control**.

2.  In the **Source Control Settings** dialog box, click the **Check-in Policy** tab.

3.  In the **policy type** list, click the policy type for which you want to make changes, and then click **Edit**.

4.  Continue this procedure based on the type of policy you are editing:

    -   **Builds**   Requires that the last build was successful before a check-in. This policy type cannot be modified.

    -   **Code Analysis**   Requires that code analysis be run before code is checked in. The **Code Analysis** **Policy Editor** appears.

        Click the check boxes for the types of code analysis that you want performed. Options are **Enforce check-in to only contain files that are part of current solution**, **Enforce C/C++ Code Analysis (/analyze)**, and **Enforce Code Analysis For Managed Code**. If you select the **Enforce Code Analysis For Managed Code** check box, select the desired rule settings under **Rule settings for Managed Code Analysis**.

        For more information about how to use code analysis tools, see [Creating and Using Code Analysis Check-In Policies](https://msdn.microsoft.com/library/ms182075).

    -   **Work Items**   Requires that one or more work items be associated with the check-in. This policy type cannot be modified.

5.  Click **OK**.

## See Also

#### Concepts

[Set and Enforce Quality Gates](set-enforce-quality-gates.md)  
[Working with Changesets](find-view-changesets.md)  
#### Other Resources

[Walkthrough: Customizing Checkin Policies and Notes](https://msdn.microsoft.com/library/ms181281)
