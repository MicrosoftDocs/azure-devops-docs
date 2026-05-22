---
author: gloridelmorales
ms.author: glmorale
ms.date: 5/21/2026
ms.topic: include
---

### Standard Mermaid syntax in Markdown editors

Mermaid diagrams in Azure DevOps Markdown now support the standard fenced code block syntax (` ```mermaid `), in addition to the existing `::: mermaid` syntax. This change reduces the need to maintain different Markdown formats across tools and makes it easier to author wiki pages, pull requests, and work items that include Mermaid diagrams.

Content authored with the standard ` ```mermaid ` syntax in GitHub, VS Code, or other Markdown editors now renders consistently in Azure DevOps without requiring conversion. Existing diagrams using the `::: mermaid` syntax continue to work.

This change addresses a long-standing [Developer Community](https://developercommunity.visualstudio.com/t/support-mermaid-diagrams-in-markdown-file-preview/817244) suggestion.
