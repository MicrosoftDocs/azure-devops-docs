---
author: gloridelmorales
ms.author: glmorale
ms.date: 9/4/2026
ms.topic: include
---

### Faster wiki search by page title

Searching wiki pages by title is now faster and more responsive, especially for projects with large wikis.

This improvement reduces the time it takes to search a wiki for the first time and speeds up page filtering across the wiki experience, including the page tree, page move dialog, and link autocomplete.

Azure DevOps now retrieves the information needed for page title searches directly from the wiki database, avoiding the need to download and process the full Git tree. If the optimized search data is unavailable, Azure DevOps automatically uses the existing search method.
