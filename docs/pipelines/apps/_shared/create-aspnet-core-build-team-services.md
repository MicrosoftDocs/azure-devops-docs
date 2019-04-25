---
ms.topic: include
---

1. On the **Files** tab of the **Code** hub, click **Set up build**.

 ![Screenshot showing button to set up build for a repository](_img/set-up-first-build-from-code-hub.png)

 You are taken to Azure Pipelines and asked to **Choose a template**.

1. In the right panel, click **ASP.NET Core**, and then click **Apply**.

 ![Screenshot showing dotnet core template](../aspnet/_shared/_img/apply-aspnet-core-build-template.png)

 You now see all the tasks that were automatically added to the build pipeline by the template. These are the steps that will automatically run every time you push code changes.

1. For the **Agent pool**, select _Hosted VS2017_. This is how you can use our pool of agents that have the software you need to build your app.
