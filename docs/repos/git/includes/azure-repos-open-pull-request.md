---
ms.technology: devops-code-git
ms.prod: devops
ms.topic: include
ms.date: 06/13/2022
---

- To open an Azure Repos PR or GitHub PR from Team Explorer in Visual Studio 2019:

    1. [Connect to your project in Visual Studio](/azure/devops/organizations/projects/connect-to-projects?tabs=visual-studio-2019#connect-from-visual-studio-or-team-explorer).
    
    1. Choose **View > Team Explorer** to open Team Explorer.

    1. In **Team Explorer**, select the **Home** button and choose **Pull Requests**.
    
        :::image type="content" source="../media/review-pull-requests/visual-studio-2019/team-explorer/pull-requests-view.png" border="true" alt-text="Screenshot showing the Pull Requests button in Team Explorer in Visual Studio 2019."::: 
    
    1. In the **Pull Requests** view, choose from the list of pull requests to open the selected pull request in your web browser.
    
        :::image type="content" source="../media/review-pull-requests/visual-studio-2019/team-explorer/pull-request-list.png" border="true" alt-text="Screenshot showing the pull request list in the Pull Request view in Team Explorer in Visual Studio 2019.":::
    
- To open a pull request using the Azure DevOps CLI, run the command:

    ```azurecli
    az repos pr show --id <pull request ID> --open
    ```
