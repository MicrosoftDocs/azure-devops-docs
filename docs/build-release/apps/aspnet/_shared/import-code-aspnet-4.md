VSTS and TFS are full-featured Git servers for hosting your team's source code. You'll import code for a sample ASP.NET app into VSTS/TFS Git repository. This is the app that you'll configure CI/CD for.

1. Open your team project in your web browser:

 * **VSTS:** `https://{your-account}.visualstudio.com/DefaultCollection/{your-team-project}`

 * **TFS:** `http://{your-server}:8080/tfs/DefaultCollection/{your-team-project}`

 [The TFS URL doesn't work for me. How can I get the correct URL?](../../../../security/websitesettings.md)

1. On the **Code** hub for your team project, select the option to **Import repository**.

 ![import repository menu item](../../_shared/_img/import-repository-menu-item.png)

1. In the **Import a Git repository** dialog box, paste the following URL into the **Clone URL** text box.

 ```bash
https://github.com/adventworks/aspnet4-sample
```

1. Click **Import** to copy the sample code into your Git repo.

The sample app in this repository is a Visual Studio solution that has two projects - an ASP.NET Web Application project targeting .NET Framework 4.5 and a Unit Test project. The instructions in this
quickstart work for applications targeting .NET Framework 4 and above.
