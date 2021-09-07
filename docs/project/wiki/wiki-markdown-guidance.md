---
title: Markdown syntax for wikis in Azure DevOps
titleSuffix: Azure DevOps
description: Learn how to share information, add tables & mathematical notation using Markdown within wikis
ms.technology: devops-collab
ms.assetid:
ms.author: chcomley
author: chcomley
ms.reviewer: gopinach
ms.topic: reference
monikerRange: '>= tfs-2018'
ms.date: 04/26/2021 
---

# Syntax guidance for Markdown usage in Wiki

[!INCLUDE [version-vsts-tfs-2018](../../includes/version-vsts-tfs-2018.md)]

[!INCLUDE [version-selector](../../includes/version-selector.md)]

In this article, find some Wiki-specific Markdown syntax guidance for use in Azure DevOps.

::: moniker range=">= azure-devops-2019"

<a id="toc-wiki" > </a>

## Table of contents (TOC) for Wiki pages

To create a table of contents, add a \[[\_TOC\_]]. The TOC is generated when the tag gets added and there's at least one heading on the page.

> [!div class="mx-imgBorder"]
> ![Table of contents](media/toc_sample.png)

The \[[\_TOC\_]] can be placed anywhere in the page to render the table of contents.
Only Markdown headings are considered for TOC (HTML heading tags aren't considered).

All HTML and Markdown tags get stripped from the headings while adding it inside the TOC block.
For example, adding bold and italics to a heading text renders the TOC as follows.

> [!div class="mx-imgBorder"]
> ![Tags for TOC](media/toc_tags.png)

Consistency is maintained in the formatting in TOC.

> [!NOTE]
> The tag \[[\_TOC\_]] is case-sensitive. For example, \[[\_toc\_]] may not render the TOC. Also, only the first instance of [[\_TOC\_]] is rendered and the rest are ignored.

::: moniker-end

::: moniker range=">= azure-devops-2020"

## Add Mermaid diagrams to a Wiki page

Wiki supports the following Mermaid diagram types:

- [Sequence diagrams](https://mermaid-js.github.io/mermaid/#/sequenceDiagram)
- [Gantt Charts](https://mermaid-js.github.io/mermaid/#/gantt)
- [Flowcharts](https://mermaid-js.github.io/mermaid/#/flowchart)

To add Mermaid diagrams to a wiki page, use the following syntax:

``` wiki-mermaid
::: mermaid
<mermaid diagram syntax>
:::
```

There's also a toolbar button to add a default Mermaid diagram to a wiki page.

![Mermaid diagram visual](media/wiki/mermaid-diagram.png)

> [!NOTE]
> Most HTML tags and fontawesome aren't supported in the Mermaid diagram syntax. Mermaid isn't supported in the Internet Explorer browser.
> 
> This feature is supported only in Azure DevOps Services (not in Azure DevOps Server).

::: moniker-end

::: moniker range=">= azure-devops-2019"

## Embed videos in a Wiki page

To embed videos from YouTube and Microsoft Streams in a wiki page, use the following syntax:

```markdown
::: video
<iframe width="560" height="315" src="https://www.youtube.com/embed/OtqFyBA6Dbk" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
:::
```
The iframe is the embed iframe block of the YouTube or Microsoft Streams video.

**Result:**

<iframe width="560" height="315" src="https://www.youtube.com/embed/OtqFyBA6Dbk" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

(The ending ":::" is required to prevent a break in the page)

## YAML tags

Any file that contains a YAML block in a Wiki gets processed by a table with one head and one row. The YAML block must be the first thing in the file and must take the form of valid YAML set between triple-dashed lines. It supports all basic data types, lists, and objects as values. The syntax is supported in wiki, code file preview.

Basic example:

```yaml
---
tag: post
title: Hello world
---
```

![YAML tag, basic example](media/wiki/yaml_basic_example.png)

Tags with list:
```yaml
---
tags:
- post
- code
- web
title: Hello world
---
```

![YAML tags with list example](media/wiki/yaml_tags_with_list.png)





## Embed Azure Boards query results in Wiki

To embed Azure Boards query results in a wiki page as a table, use the following syntax:

> [!div class="tabbedCodeSnippets"]
```Query syntax
::: query-table <queryid>
:::
```

You can also use the **toolbar** and the **query selector** to embed the query results in a wiki page.

![Query Results Icon](media/query_selector_icon.png)

![Query Selector Pane](media/query_selector_pane.png)


## @mention users and groups

To @mention users or groups in wiki, key in "@" in the wiki editor. This @mention opens autosuggest, from which you can mention users or groups to get notified by email.

> ![Mention Autosuggest](media/mention-autosuggest.png)

You can also select "@mention" from the edit toolbar.

> ![Mention from edit toolbar](media/mention-toolbar.png)

::: moniker-end

::: moniker range=">= azure-devops-2020"

## Page visits for wiki pages

Automatically, you see an aggregated page visits count for the last 30 days on every page.

Use the batch API `pagesBatch` to see the daily quantity of visits to all pages in a paginated way. They aren't sorted by number of visits, however. For data over 30 days old, you can get all page visits using the rest API. Sort these pages based on the number of visits to get the top 100. You can store these visits in a dashboard or database.

![Wiki page visits](media/wiki/wiki-page-visits.png)

> [!NOTE]
> A page visit is defined as a page view by a given user in a 15-minute interval.

::: moniker-end

<a id="link-work-items">  </a>

## Link to work items from a Wiki page

::: moniker range="> tfs-2018"

Enter the pound sign (`#`), and then enter a work item ID.

::: moniker-end

::: moniker range="tfs-2018"

> [!NOTE]
> This feature is available with TFS 2018.2 and later versions.

::: moniker-end


<a name="html"></a>

## HTML tag support in wiki pages

In wiki pages, you can also create rich content using HTML tags.

> [!TIP]
> You can nest markdown within your HTML, but you must include a blank line between the HTML element and the markdown.


 ```HTML
<p>
  
  [A markdown link](https://microsoft.com) 
</p>
```

::: moniker range=">= tfs-2018"

> [!NOTE]
> Pasting rich content as HTML is supported in Azure DevOps Server 2019.1 and later versions.


**Example - Embedded video**

```HTML
<video src="path of the video file" width=400 controls>
</video>
```

```HTML
<video src="https://sec.ch9.ms/ch9/7247/7c8ddc1a-348b-4ba9-ab61-51fded6e7247/vstswiki_high.mp4" width=400 controls>
</video>
```

</br>
<strong>Result:</strong>
</br>
<video src="media/markdown-guidance/vstswiki_mid.mp4" width="600" controls>
</video>

**Example - Rich text format**

```HTML
<p>This text needs to <del>strikethrough</del> <ins>since it is redundant</ins>!</p>
<p><tt>This text is teletype text.</tt></p>
<font color="blue">Colored text</font>
<center>This text is center-aligned.</center>
<p>This text contains <sup>superscript</sup> text.</p>
<p>This text contains <sub>subscript</sub> text.</p>
<p>The project status is <span style="color:green;font-weight:bold">GREEN</span> even though the bug count / developer may be in <span style="color:red;font-weight:bold">red.</span> - Capability of span
<p><small>Disclaimer: Wiki also supports showing small text</small></p>
<p><big>Bigger text</big></p>
```

**Result:**

![Light theme view](media/wiki/green-red-light-theme.png)

![Dark theme view](media/wiki/green-red-dark-theme.png)

<!---
<p>This text needs to <del>strikethrough</del> <ins>since it is redundant</ins>!</p>
<p><tt>This text is teletype text.</tt></p>
<font color="blue">Colored text</font>
<center>This text is center-aligned.</center>
<p>This text contains <sup>superscript</sup> text.</p>
<p>This text contains <sub>subscript</sub> text.</p>
<p>The project status is <span style="color:green;font-weight:bold">GREEN</span> even though the bug count / developer may be in <span style="color:red;font-weight:bold">red.</span> - Capability of span
<p><small>Disclaimer: Wiki also supports showing small text</small></p>
<p><big>Bigger text</big></p>
-->

::: moniker-end

## Related articles

- [Project wiki](add-edit-wiki.md)
- [Wiki file structure](wiki-file-structure.md)
- [Wiki view history](wiki-view-history.md)
