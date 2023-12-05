---
ms.topic: include
ms.service: azure-devops-pipelines
ms.manager: mijacobs
ms.author: jukullam
author: juliakm
ms.date: 12/01/2023
---

### Create a .NET project

If you don't have a .NET project to work with create a new one.  Start by installing <a href="https://dotnet.microsoft.com/download/dotnet/6.0" target="_blank"> the latest .NET 6.0 SDK. </a>


1. Open a terminal window
1. Create a project directory and navigate into it.
1. Create a new .NET 6 webapp. 

    ```dotnetcli
    dotnet new webapp -f net6.0
    ```

1. From the same terminal session, run the application locally using the [`dotnet run`](/dotnet/core/tools/dotnet-run) command from your project directory.

    ```dotnetcli
    dotnet run
    ```

1. Once the application has start press Ctrl-C to shut it down.

### Connect git repo to GitHub

1. From the project directory, [create a local git repository and commit the application code to the main branch](../../repos/git/creatingrepo.md#create-a-local-git-repo-from-an-existing-solution).
1. [Connect your local Git repo to a GitHub repo](../../repos/git/creatingrepo.md#connect-a-local-git-repo).
