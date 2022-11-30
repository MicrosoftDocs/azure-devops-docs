---
title: View the branch hierarchy of a project
titleSuffix: Azure Repos
description: In Team Foundation Version Control, view the branch hierarchy of a project. See properties of branches, and take actions like merging or comparing branches.
ms.assetid: 7ecab78e-f9f5-43d1-982f-b300ee1c4c16
ms.service: azure-devops-repos
ms.topic: conceptual
ms.date: 11/22/2022
monikerRange: '<= azure-devops'
ms.subservice: azure-devops-repos-tfvc
---


# View the branch hierarchy of a project

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]
[!INCLUDE [version-vs-gt-eq-2019](../../includes/version-vs-gt-eq-2019.md)]

As a project grows, its branch structure typically also grows and becomes more complex. You and your team members might need answers to the following questions:

- What branches are in the project?
- How are these branches related to each other?
- Who owns the various branches?
- If changes are needed from a feature team, which branches do those changes have to go through to get to your branch?

The following procedures explain how to use Team Foundation Version Control (TFVC) to answer these types of questions.

## View and work with your branches

You can use the **Hierarchy** window to perform the following tasks:

- View all your branches in a hierarchical view.
- View a subset of your branches in a hierarchical view.
- View properties of a specific branch.
- Complete tasks for a specific branch.

> [!IMPORTANT]
> You can perform these procedures on a branch but not on a folder. In the following screenshot, *BuildProcessTemplates* is a folder, and *Dev* is a branch.
>
> :::image type="content" source="media/view-branch-hierarchy-team-project/IC268252.png" alt-text="Screenshot of the Folders window in Visual Studio. The DinnerNow folder contains a folder named BuildProcessTemplates and a branch named Dev.":::
>
> For more information, see [Branch folders and files](branch-folders-files.md).

## Display the hierarchy window from Source Control Explorer

1. In Visual Studio, on the **View** menu, select **Other Windows** > **Source Control Explorer**.

1. In **Source Control Explorer**, select the branch that you want to explore the structure of.

1. On the **File** menu, select **Source Control** > **Branching and Merging** > **View Hierarchy**.

## Adjust the view to show the data you want

By default, when you open the **Hierarchy** window, you see the hierarchy for the branch that you opened the window from. The view includes the ancestors and descendants of the branch.

The following screenshot shows the **Hierarchy** window for the DinnerNow **Test** branch:

:::image type="content" source="media/view-branch-hierarchy-team-project/IC363705.png" alt-text="Screenshot of Visual Studio with the Test branch hierarchy. Main is a parent branch, Dev is a child, and Dev has two child branches for features.":::

Use the following options to modify your view of the hierarchy:

- On the **Show** menu, select any of the following views:
  - **All hierarchies**
  - **Full hierarchy**
  - **Ancestors and descendants**
  - **Ancestors**
  - **Parent and children**
  - **Children**
  - **Customized**

  :::image type="content" source="media/view-branch-hierarchy-team-project/branch-hierarchy-show-menu.png" alt-text="Screenshot of Visual Studio with the Test branch hierarchy. The Show menu is highlighted, and Ancestors and descendants is selected.":::

  > [!TIP]
  > If you want to see the full hierarchy for every version control path in your project, select **All hierarchies**. This view includes hierarchies that are outside the scope of the active project in **Source Control Explorer**.

- Next to the **Show** menu, select the **Customize branch list** button to individually select the specific branches that you want to see.

  :::image type="content" source="media/view-branch-hierarchy-team-project/branch-hierarchy-customize-branch-list.png" alt-text="Screenshot of Visual Studio with the Test branch hierarchy. A button to the right of the Show menu is highlighted.":::

  The **Select Branches** dialog appears.

  - In the **Branches** list, select or clear the branches that you want to show or hide. As you select or clear branches, a preview of your selections appears on the right side of the dialog.
  - If your team has many branches, use the buttons above the preview to easily specify the branches that you want to see. Hover over a button to get information about what it does.

- To fine-tune the details of your diagram, select a specific branch and then select one of the following controls:

  - Select **X** to hide the branch. Alternatively, select **Delete** while the branch is selected.
  - Select the plus sign (**+**) to specify which child branches you want to see. Alternatively, select **Insert** while the branch is selected.

  :::image type="content" source="media/view-branch-hierarchy-team-project/branch-hierarchy-branch-controls.png" alt-text="Screenshot of Visual Studio with the Test branch hierarchy. On a rectangle that represents the Dev branch, controls on two corners are highlighted.":::

## View properties and take actions

After you view the branch hierarchy, you might need more information, or you might be ready to take some action. You can right-click any branch in the **Hierarchy** window and take any of the following steps:

- Select **Properties** to view information about the branch, including its path, who owns it, and who has permissions to work with it. The **Owner** field is only for information. The person that's named in the **Owner** field doesn't necessarily have extra permissions.

- Select an action such as **Branch**, **Merge**, **Compare**, or **Open in Source Control Explorer**.
