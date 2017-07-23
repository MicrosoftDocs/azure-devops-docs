## Import sample code into VSTS

VSTS is a full-featured Git server for hosting your source code.

> [!NOTE]
> If you already have an ASP.NET Core application checked into your VSTS Git repository, you can use that for this quickstart, so long as your app does not depend on a database. To learn how to deploy your app with a database, see _TODO: link_.

If you need a simple app to try this quickstart, you can import our sample app into your VSTS repo:

1. Sign in to VSTS and navigate to the **Code** hub for your VSTS project. Select the option to **Import repository**.

 ![import repository menu item](_img/import-repository-menu-item.png)

1. In the **Import a Git repository** dialog, paste the following for **Clone URL**.

  ```
  https://github.com/adventworks/dotnetcore-sample
  ```

1. Choose **Import** to copy the sample app code into your Team Services Git repository.