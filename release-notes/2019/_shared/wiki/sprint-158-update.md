---
ms.topic: include
---

### Short and readable Wiki page URLs

You no longer have to use a multiline URL to share wiki page links. Leveraging the page IDs in the URLs, we have made the URLs shorter and a lot easier to read. 

The new structure of URLs will now look like:

```
https://dev.azure.com/{accountName}/{projectName}/_wiki/wikis/{wikiName}/{pageId}/{readableWiki PageName}
```
This is an example of the new URL for a page **Welcome to Azure DevOps Wiki**

```
https://dev.azure.com/microsoft/ AzureDevOps/_wiki/wikis/AzureDevOps.wiki/1/Welcome-to-Azure-DevOps-Wiki
```

This was prioritized based on this [feature suggestion ticket](https://developercommunity.visualstudio.com/content/idea/365794/make-urls-human-readable.html).

### Mermaid Diagram support in wiki

We have added support for inserting [Mermaid diagrams](https://mermaidjs.github.io/#/README) in wiki pages. You can now create, edit and manage flow charts, sequence diagrams in your design documents and add Gantt charts in your planning documents in Azure DevOps Wiki.

> [!div class="mx-imgBorder"]
> ![Badge](../../_img/156_09.gif)

This was prioritized based on this [feature suggestion ticket](https://developercommunity.visualstudio.com/content/idea/365751/wiki-mermaid-plantuml-support.html). For more on Mermaid diagrams, please see our documentation here. 