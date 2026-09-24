---
author: gloridelmorales
ms.author: glmorale
ms.date: 7/9/2026
ms.topic: include
---

### Pull request link added to git push output

When you push a new branch to Azure Repos, the git push output now includes a direct link to create a pull request. This makes it faster to open a PR right after pushing, without needing to navigate to the web UI manually.

Example output:

```
remote:
remote: Create a pull request for 'my-branch' on Azure DevOps by visiting:
remote:   https://dev.azure.com/org/project/_git/repo/pullrequestcreate?sourceRef=my-branch&targetRef=main
remote:
```
