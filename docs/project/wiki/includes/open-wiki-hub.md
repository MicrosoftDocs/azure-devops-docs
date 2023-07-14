---
ms.topic: include
---

## Open the Wiki  

#### [Browser](#tab/browser) 

Connect to your project using a [supported web browser](/azure/devops/server/compatibility#supported-browsers) and choose **Wiki**.

:::image type="content" source="../media/open-wiki-vert-brn.png" alt-text="Screenshot showing highlighted Wiki menu selection.":::

If you need to switch your team project, choose :::image type="icon" source="../../../media/icons/project-icon.png" border="false"::: **Azure DevOps** to [browse all team projects and teams](../../navigation/work-across-projects.md).

#### [Azure DevOps CLI](#tab/azure-devops-cli)

::: moniker range="azure-devops"

You can view and open a wiki page defined for a project using the `az devops wiki show` command. To get started, see [Get started with Azure DevOps CLI](../../../cli/index.md).

> [!div class="tabbedCodeSnippets"]
```azurecli
az devops wiki show --wiki
                      [--open]
                      [--project]
                      [--subscription]
```

### Parameters

- **--wiki**: Required. Name or ID of the wiki.
- **--open**: Optional. Open the wiki page in your web browser.
- **--project -p**: Optional. Name or ID of the project.
- **--subscription**: Optional. Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`.

::: moniker-end

::: moniker range="azure-devops"

### Example

Open a wiki named 'myprojectwiki'.

> [!div class="tabbedCodeSnippets"]
```azurecli
az devops wiki show --wiki myprojectwiki --open
```

## View a wiki page

To get the content of a page via the Azure DevOps CLI, enter the `az devops wiki show` command. 

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

### Parameters

- **--path**: Required. Path of the wiki page.
- **--wiki**: Required. Name or ID of the wiki.
- **--include-content**: Optional. Include content of the page.
- **--open**: Optional. Open the wiki page in your web browser.
- **--project -p**: Optional. Name or ID of the project.
- **--version -v**: Optional. Version (ETag) of the wiki page.

### Example

Get wiki page content with path 'my wiki' in a wiki named 'myprojectwiki'.

> [!div class="tabbedCodeSnippets"]
```azurecli
az devops wiki page show --path 'my wiki' --wiki 'myprojectwiki' --content "Hello World"
```

::: moniker-end



* * *
