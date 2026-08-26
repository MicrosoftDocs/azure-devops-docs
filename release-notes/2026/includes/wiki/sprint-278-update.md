---
author: gloridelmorales
ms.author: glmorale
ms.date: 8/20/2026
ms.topic: include
---

### Improved Wiki page recovery

We've improved Azure DevOps Wiki to make recovering accidentally deleted pages more reliable. If a wiki page is deleted and then recreated at the same path within 30 days, it now retains its original page ID instead of receiving a new one.

This change preserves existing links to the page, helping prevent broken URLs after a page is restored. In most cases, the change is transparent to users, but it makes recovering deleted wiki pages much smoother.
