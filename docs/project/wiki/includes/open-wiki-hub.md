---
ms.topic: include
ms.date: 06/02/2025
---

## Open the Wiki  

You can open and view the wiki page for your team project from Azure DevOps in the browser or use the Azure DevOps CLI.

#### [Browser](#tab/browser) 

Connect to your project by using a [supported web browser](/azure/devops/server/compatibility#supported-browsers) and select **Wiki**:

:::image type="content" source="../media/open-wiki-overview-page.png" border="false" alt-text="Screenshot of a wiki open in the browser and showing the wiki overview page." lightbox="../media/open-wiki-overview-page.png":::

If you need to switch your team project, select :::image type="icon" source="../../../media/icons/project-icon.png"::: **Azure DevOps** to [browse all team projects and teams](../../navigation/work-across-projects.md).

#### [Azure DevOps CLI](#tab/azure-devops-cli)

::: moniker range="azure-devops"

You can view and open a wiki page for a project by using the `az devops wiki show` command: 

> [!div class="tabbedCodeSnippets"]
```azurecli
az devops wiki show --wiki
                      [--open]
                      [--project]
                      [--subscription]
```

For more information, see [Get started with the Azure DevOps CLI](../../../cli/index.md).

### Basic parameters

The following parameters are available for the `wiki show` command:

| Parameter        | Required | Description |
|------------------|:--------:|-------------|
| `--wiki`         | Yes      | The name or ID of the wiki. |
| `--open`         | No       | Open the wiki page in your web browser. |
| `--project -p`   | No       | The name or ID of the project. |
| `--subscription` | No       | The name or ID of the subscription. You can configure the default subscription with the `az account set -s NAME_OR_ID` command. |

For more information, see the Azure DevOps CLI [command reference](/cli/azure/devops/wiki#az-devops-wiki-show).

### Example: View the project wiki

The following example shows how to open a wiki named "MyProjectwiki":

> [!div class="tabbedCodeSnippets"]
```azurecli
az devops wiki show --wiki MyProjectwiki --open
```

## View a wiki page

You can view the content of a specific page by using the Azure DevOps CLI `az devops wiki show` command:

> [!div class="tabbedCodeSnippets"]
```azurecli
az devops wiki page show --path
                         --wiki
                         [--include-content]
                         [--open]
                         [--project]
                         [--subscription]
                         [--version]
```

### More parameters

The following table lists [more parameters](#basic-parameters) for the `wiki show` command when you want to view a specific page:

| Parameter           | Required | Description |
|---------------------|:--------:|-------------|
| `--path`            | Yes      | The fully qualified path for the wiki page. |
| `--include-content` | No       | Include content of the page. |
| `--version -v`      | No       | The version of the wiki page, which corresponds to the `ETag` entity tag value. |


For more information, see the Azure DevOps CLI [command reference](/cli/azure/devops/wiki#az-devops-wiki-show).

### Example: View a specific page

<!-- Reviewer: Please clarify what the "include-content" parameter does. The reference page doesn't provide any more info. 
     The example doesn't make sense. If I run the command to view an existing page, why include something like "Hello World"
     in the command? Is this option meant to target existing content on the page that matches the value? So, in this case, the opened page would jump to show the existing text "Hello World"? -->

The following example shows how to get content for the "Get Started" page of the "MyProjectwiki" wiki:

> [!div class="tabbedCodeSnippets"]
```azurecli
az devops wiki page show --path 'Get Started' --wiki 'MyProjectwiki' --content "Hello World"
```

::: moniker-end

[!INCLUDE [temp](../../../includes/note-cli-not-supported.md)] 

* * *
