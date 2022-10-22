---
ms.topic: include
ms.service: azure-devops-pipelines
ms.manager: mijacobs
ms.author: jukullam
author: juliakm
ms.date: 11/05/2021
---

### Create a .NET project

If you don't have a .NET project to work with, create a new one, and upload your code to your GitHub repository or Azure Repos.  Start by installing <a href="https://dotnet.microsoft.com/download/dotnet/6.0" target="_blank"> the latest .NET 6.0 SDK. </a>

Create a new .NET 6 webapp. 

```dotnetcli
dotnet new webapp -f net6.0
```

From the same terminal session, run the application locally using the [`dotnet run`](/dotnet/core/tools/dotnet-run) command from your project directory.

```dotnetcli
dotnet run
```
---

### Upload your code

Upload your code to new webapp GitHub or Azure Repos:
* [Create a new Git repo in Azure Repos](../../repos/git/creatingrepo.md).  
* [Create a new GitHub repository](https://docs.github.com/en/get-started/quickstart/create-a-repo). 
