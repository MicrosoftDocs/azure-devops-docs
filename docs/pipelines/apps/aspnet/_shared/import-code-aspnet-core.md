To configure a CI build process for your app, the source code needs to be in a version control system. VSTS and TFS integrate with various version control systems such as Git in VSTS or TFS, Team Foundation Version Control (TFVC), GitHub, and Subversion.

For a simple way to follow this quickstart, get the following sample app code and put it into your own version control repository:

```
https://github.com/adventworks/dotnetcore-sample
```

You've got a few version control options. Some common ones are:

* To import the sample app into a Git repo in VSTS or TFS:

 1. On the **Code** hub for your project in VSTS/TFS, select the option to **Import repository**.

 1. In the **Import a Git repository** dialog box, paste the above URL into the **Clone URL** text box.

 1. Click **Import** to copy the sample code into your Git repo.

* To fork the sample app into your own GitHub repository:

 1. Navigate to the above GitHub repository URL in your browser.

 1. Select **Fork** to create your own copy of the repository.

This quickstart works for apps targeting the .Net Core 1.1 or 2.0 frameworks. The sample app is a Visual Studio solution that has two projects: an ASP.NET Core Web Application project and a Unit Test project (both targeting .Net Core 1.1 framework).
