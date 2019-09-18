## Open the Wiki  

#### [Browser](#tab/browser) 

Connect to your project using a [supported web browser](/azure/devops/server/compatibility#supported-browsers) and choose **Wiki**.

> [!div class="mx-imgBorder"]  
> ![Create wiki, provision a Git repo for your wiki or publish existing repo Markdown files](/azure/devops/project/wiki/_img/wiki/open-wiki-vert-brn.png)

If you need to switch your team project, choose the ![ ](/azure/devops/boards/_img/icons/project-icon.png) Azure DevOps logo to [browse all team projects and teams](/azure/devops/project/navigation/work-across-projects).

#### [Azure DevOps CLI](#tab/azure-devops-cli)

To open the wiki, enter the `az devops wiki show` command.

> [!div class="tabbedCodeSnippets"]
```CLI
az devops wiki show --message
                           [--wiki]
                           [--open]

[!INCLUDE [note-cli-not-supported](../../../_shared/note-cli-not-supported.md)]

* * *
