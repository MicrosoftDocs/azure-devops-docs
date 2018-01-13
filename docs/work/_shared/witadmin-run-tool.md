
<a id="run-witadmin-tool" />
## How to run the witadmin command-line tool  

To run the **witadmin** command-line tool, open a Command Prompt window where Visual Studio is installed. The **witadmin** command-line tool installs with any version of Visual Studio. You can access this tool by installing the free version of [Visual Studio Community or Visual Studio Team Explorer](https://www.visualstudio.com/downloads/).   
  
|Version | Visual Studio or<br/>Team Explorer | Change directory |
|--------|----------------------|---------------------------------|
|TFS 2018| Visual Studio 2018 | `cd %programfiles(x86)%\Microsoft Visual Studio 16.0\Common7\IDE` |
|TFS 2017| Visual Studio 2017<br/>Team Explorer 2017 |`cd %programfiles(x86)%\Microsoft Visual Studio 15.0\Common7\IDE`<br/>`cd %programfiles%\Microsoft Visual Studio 15.0\Common7\IDE\CommonExtensions\Microsoft\TeamFoundation\Team Explorer` |
|TFS 2015|`cd %programfiles(x86)%\Microsoft Visual Studio 14.0\Common7\IDE` |
|TFS 2013| Visual Studio 2013<br/>Team Explorer 2013 |`cd %programfiles(x86)%\Microsoft Visual Studio 12.0\Common7\IDE`<br/>`cd %programfiles%\Microsoft Visual Studio 12.0\Common7\IDE\CommonExtensions\Microsoft\TeamFoundation\Team Explorer`   |
  

On a 32-bit edition of Windows, replace **%programfiles(x86)%** with **%programfiles%**. You can [install Visual Studio Community (which provides access to Team Explorer) or Visual Studio Team Explorer 2017](https://www.visualstudio.com/downloads/download-visual-studio-vs) for free. 

> [!NOTE]   
> If you are connecting to VSTS, you must use the latest version of Visual Studio or  Team Explorer. If you are connecting to TFS, you must use the same version of Visual Studio or Team Explorer as TFS. For example, if you connect to a TFS 2017 instance, you must connect from Visual Studio 2017 or Team Explorer 2017. 
> 
> There is no Team Explorer 2015 version. To learn more, see the blog post, [Reintroducing the Team Explorer standalone installer](https://blogs.msdn.microsoft.com/devops/2017/04/05/reintroducing-the-team-explorer-standalone-installer/).
