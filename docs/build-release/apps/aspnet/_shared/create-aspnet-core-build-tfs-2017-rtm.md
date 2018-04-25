1. On the **Files** tab of the **Code** hub, click **Set up build**.

 ![Screenshot showing button to set up build for a repository](../../_shared/_img/set-up-first-build-from-code-hub.png)

 You are taken to the **Build and Release** hub in VSTS and asked to **Choose a template**.

1. In the right panel, click **ASP.NET Core**, and then click **Apply**.

 ![Screenshot showing dotnet core template](_img/apply-aspnet-core-build-template.png)

 You now see all the tasks that were automatically added to the build definition by the template. These are the steps that will automatically run every time you push code changes.

1. For the **Agent queue**, select _Hosted VS2017_. This is how you can use our pool of agents that have the software you need to build your app.
