---
ms.topic: include
ms.technology: devops-cicd
ms.manager: mijacobs
ms.author: jukullam
author: juliakm
ms.date: 11/05/2021
---

### Create a .NET project

If you don't have a .NET project to work with, create a new one, and upload your code to your GitHub repository or Azure Repos. 

### [.NET 5.0](#tab/net50)

<a href="https://dotnet.microsoft.com/download/dotnet/5.0" target="_blank">
    Install the latest .NET 5.0 SDK.
</a>

### [.NET Framework 4.8](#tab/netframework48)

<a href="https://dotnet.microsoft.com/download/dotnet-framework/net48" target="_blank">
    Install the .NET Framework 4.8 Developer Pack.
</a>

> [!NOTE]
> Visual Studio Code is cross-platform, however; .NET Framework is not. If you're developing .NET Framework apps with Visual Studio Code, consider using a Windows machine to satisfy the build dependencies.


### [.NET 5.0](#tab/net50)

```dotnetcli
dotnet new webapp -f net5.0
```

From the same terminal session, run the application locally using the [`dotnet run`](/dotnet/core/tools/dotnet-run) command.

```dotnetcli
dotnet run
```

### [.NET Framework 4.8](#tab/netframework48)

```dotnetcli
dotnet new webapp --target-framework-override net48
```

> [!IMPORTANT]
> The `--target-framework-override` flag is a free-form text replacement of the target framework moniker (TFM) for the project, and makes *no guarantees* that the supporting template exists or compiles. You can only build and run .NET Framework apps on Windows.


From the same terminal session, run the application locally using the [`dotnet run`](/dotnet/core/tools/dotnet-run) command.

```dotnetcli
dotnet run
```
---

### Upload your code

Upload your code to GitHub or Azure Repos:
* [Create a new Git repo in Azure Repos](../../repos/git/creatingrepo.md).  
* [Create a new GitHub repository](https://docs.github.com/en/get-started/quickstart/create-a-repo). 
