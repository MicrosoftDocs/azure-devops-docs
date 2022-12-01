---
ms.topic: include
ms.service: azure-devops-boards
ms.date: 12/01/2022
---


<a id="run-witadmin-tool" />

## How to run the `witadmin` command-line tool  

To run the `witadmin` command-line tool, open a Command Prompt window where Visual Studio is installed. The `witadmin` command-line tool installs with any version of Visual Studio. You can access this tool by installing the free version of [Visual Studio Community or Visual Studio Team Explorer](https://visualstudio.microsoft.com/downloads/).  
::: moniker range="azure-devops"
> [!NOTE]   
> If you are connecting to Azure DevOps Services, we recommend that you use the latest version of Visual Studio or Visual Studio Community.  
::: moniker-end

::: moniker range="< azure-devops"
> [!NOTE]   
> If you are connecting to an on-premises server, we recommend that you use the same or later version of Visual Studio as your Azure DevOps Server. For example, if you connect to Azure DevOps Server 2019, then connect to your project from a version of Visual Studio 2019. 
::: moniker-end

**For Visual Studio 2022** 

`%programfiles(x86)%\Microsoft Visual Studio\2022\Community\Common7\IDE\CommonExtensions\Microsoft\TeamFoundation\Team Explorer`

or `Professional` or `Enterprise` in place of `Community`, depending on the version you've installed.  

**For Visual Studio 2019**

`%programfiles(x86)%\Microsoft Visual Studio\2019\Community\Common7\IDE\CommonExtensions\Microsoft\TeamFoundation\Team Explorer`

or `Professional` or `Enterprise` in place of `Community`, depending on the version you've installed.  

**For Visual Studio 2017**

`%programfiles(x86)%\Microsoft Visual Studio\2017\Enterprise\Common7\IDE\CommonExtensions\Microsoft\TeamFoundation\Team Explorer`

or `TeamExplorer` or `Professional` in place of `Enterprise`, depending on the version you've installed.  

On a 32-bit edition of Windows, replace **%programfiles(x86)%** with **%programfiles%**. You can [install Visual Studio Community (which provides access to Team Explorer) or Visual Studio Team Explorer 2017](https://visualstudio.microsoft.com/downloads/download-visual-studio-vs) for free. 

