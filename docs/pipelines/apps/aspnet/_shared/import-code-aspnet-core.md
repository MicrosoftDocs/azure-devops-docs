To configure a CI build pipeline for your app, the source code needs to be in a version control system. Azure Pipelines and TFS integrate with various version control systems such as Git in Azure Repos or TFS, Team Foundation Version Control (TFVC), GitHub, and Subversion.

For a simple way to follow this quickstart, get the following sample app code and put it into your own version control repository:

```
https://github.com/MicrosoftDocs/pipelines-dotnet-core
```

You've got a few version control options. Some common ones are:

* To import the sample app into a Git repo in Azure Repos or TFS:

  1. on the **Code** page for your project in Azure Repos/TFS, select the option to **Import repository**.

  1. In the **Import a Git repository** dialog box, paste the above URL into the **Clone URL** text box.

  1. Click **Import** to copy the sample code into your Git repo.

* To fork the sample app into your own GitHub repository:

  1. Navigate to the above GitHub repository URL in your browser.

  1. Select **Fork** to create your own copy of the repository.

This quickstart works for apps targeting the .NET Core 1.1 or 2.0 frameworks. The sample app is a Visual Studio solution that has two projects: an ASP.NET Core Web Application project and a Unit Test project (both targeting .NET Core 1.1 framework).
