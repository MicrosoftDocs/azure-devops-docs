---
ms.topic: include
---


<a id="run-witadmin-tool" />

## How to run the witadmin command-line tool  

To run the **witadmin** command-line tool, open a Command Prompt window where Visual Studio is installed. The **witadmin** command-line tool installs with any version of Visual Studio. You can access this tool by installing the free version of [Visual Studio Community or Visual Studio Team Explorer](https://visualstudio.microsoft.com/downloads/).  

> [!NOTE]   
> If you are connecting to an on-premises server, you must use the same or later version of Visual Studio or Team Explorer as Azure DevOps Server or TFS. For example, if you connect to a TFS 2017 instance, you must connect from Visual Studio 2017 or Team Explorer 2017. There is no Team Explorer 2015 version. 
  

::: moniker range="azure-devops-2019"

*Visual Studio 2019 or Team Explorer 2019 client:*

`%programfiles(x86)%\Microsoft Visual Studio\2019\Community\Common7\IDE\CommonExtensions\Microsoft\TeamFoundation\Team Explorer`

or, `TeamExplorer`, `Professional` or `Enterprise` in place of `Community`, depending on the version you've installed.  

::: moniker-end


::: moniker range=">= tfs-2017 <= tfs-2018"

*Visual Studio 2017 or Team Explorer 2017 client:*

`%programfiles(x86)%\Microsoft Visual Studio\2017\Community\Common7\IDE\CommonExtensions\Microsoft\TeamFoundation\Team Explorer`

or, `TeamExplorer`, `Professional` or `Enterprise` in place of `Community`, depending on the version you've installed.  

::: moniker-end

::: moniker range="tfs-2015"

*Visual Studio 2015 client:*

`cd %programfiles(x86)%\Microsoft Visual Studio 14.0\Common7\IDE`

::: moniker-end

::: moniker range="tfs-2013"

*Visual Studio 2013 client:*

`cd %programfiles(x86)%\Microsoft Visual Studio 12.0\Common7\IDE`

*Team Explorer 2013 client:* 

`cd %programfiles%\Microsoft Visual Studio 12.0\Common7\IDE\CommonExtensions\Microsoft\TeamFoundation\Team Explorer`

::: moniker-end

On a 32-bit edition of Windows, replace **%programfiles(x86)%** with **%programfiles%**. You can [install Visual Studio Community (which provides access to Team Explorer) or Visual Studio Team Explorer 2017](https://visualstudio.microsoft.com/downloads/download-visual-studio-vs) for free. 


