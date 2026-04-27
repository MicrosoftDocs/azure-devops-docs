---
ms.topic: include
ms.service: azure-devops-boards
ms.date: 02/10/2026
---


<a id="run-witadmin-tool"></a>

## Run the witadmin command-line tool  

The witadmin command-line tool installs with Visual Studio. Open a Command Prompt window and navigate to the directory where Visual Studio is installed. You can also install the free [Visual Studio Community](https://visualstudio.microsoft.com/downloads/) edition.

::: moniker range="azure-devops"
> [!NOTE]   
> For Azure DevOps Services, use the latest version of Visual Studio.  
::: moniker-end

::: moniker range="< azure-devops"
> [!NOTE]   
> For on-premises Azure DevOps Server, use the same or later version of Visual Studio. For example, use Visual Studio 2019 or later to connect to Azure DevOps Server 2019. 
::: moniker-end

#### [Visual Studio 2022](#tab/visual-studio-2022)

```
%programfiles(x86)%\Microsoft Visual Studio\2022\Community\Common7\IDE\CommonExtensions\Microsoft\TeamFoundation\Team Explorer
```

Replace `Community` with `Professional` or `Enterprise`, depending on the version you installed.

#### [Visual Studio 2019](#tab/visual-studio-2019)

```
%programfiles(x86)%\Microsoft Visual Studio\2019\Community\Common7\IDE\CommonExtensions\Microsoft\TeamFoundation\Team Explorer
```

Replace `Community` with `Professional` or `Enterprise`, depending on the version you installed.

#### [Visual Studio 2017](#tab/visual-studio-2017)

```
%programfiles(x86)%\Microsoft Visual Studio\2017\Enterprise\Common7\IDE\CommonExtensions\Microsoft\TeamFoundation\Team Explorer
```

Replace `Enterprise` with `Professional` or `TeamExplorer`, depending on the version you installed.

---

On a 32-bit edition of Windows, replace `%programfiles(x86)%` with `%programfiles%`. 
