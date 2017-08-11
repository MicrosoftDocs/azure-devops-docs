## Edit the code and see it deployed

Now that you have a completely automated CI/CD pipeline, any changes that you make to the app are automatically built and deployed by VSTS. To try this, make a change to the app and commit that change to the Git repository.

You can use Visual Studio Code or Visual Studio to connect and push commits into your VSTS Git repo. (See [Share code with push](https://www.visualstudio.com/docs/git/tutorial/pushing).) However, VSTS also features a web-based editor to so that you can quickly commit small changes to source code directly in your browser.

[//]: # (TODO: edit the code; screenshot of full portal)

In the VSTS **Code** hub, edit the **Views/Home/Index.cshtml** file and make a simple change above the slide carousel `div` tag:

```html
<h1>Demo of CI/CD!!</h1>
```

[//]: # (TODO: crop screenshot down to code)

![Screenshot showing update to code](_img/aspnet-core-code-change.png)

**Commit** your changes to trigger a CI build. When the build completes, it triggers an automatic deployment.