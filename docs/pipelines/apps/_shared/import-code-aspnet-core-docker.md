---
ms.topic: include
---

## Import code for sample app into VSTS

VSTS is a full-featured Git server for hosting your team's source code. You'll import code for a sample ASP.NET Core app into VSTS Git repository. This is the app that you will configure CI/CD for.

<!--
> [!NOTE]
> If you already have an ASP.NET Core application checked into your VSTS Git repository, you can use that for this quickstart, so long as your app does not depend on a database.
-->

1. In VSTS, on the **Code** hub for your VSTS project, select the option to **Import repository**.

 ![import repository menu item](_img/import-repository-menu-item.png)

1. In the **Import a Git repository** dialog box, paste the following URL into the **Clone URL** textbox.

  ```
  https://github.com/adventworks/dotnetcore-docker-sample
  ```

1. Click **Import** to copy the sample code into your Git repo.
