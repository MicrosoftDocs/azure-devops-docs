VSTS and TFS are full-featured Git servers for hosting your team's source code. You'll import code for a sample ASP.NET Core app into VSTS/TFS Git repository. This is the app that you'll configure CI/CD for.

[//]: # (> [!NOTE])
[//]: # (> If you already have an ASP.NET Core application checked into your Git repository, you can use that for this quickstart, so long as your app does not depend on a database.)

1. Open your team project in your web browser:

 * VSTS: `https://{your-account}.visualstudio.com/DefaultCollection/{your-team-project}`

 * TFS: `http://{your-server}:8080/tfs/DefaultCollection/{your-team-project}`

 [The TFS URL doesn't work for me. How can I get the correct URL?](../../../../security/websitesettings.md)

1. On the **Code** hub for your team project, select the option to **Import repository**.

 ![import repository menu item](../../_shared/_img/import-repository-menu-item.png)

1. In the **Import a Git repository** dialog box, paste the following URL into the **Clone URL** text box.

  ```
  https://github.com/adventworks/dotnetcore-sample
  ```

1. Click **Import** to copy the sample code into your Git repo.

The sample app in this repository is a Visual Studio solution that has two projects - an ASP.NET Core Web Application project and a Unit Test project both targeting .Net Core 1.1 framework.
The instructions in this quickstart work for applications targeting .Net Core 2.0 framework as well.
