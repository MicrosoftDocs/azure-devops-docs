---
ms.topic: include
---

### GitHub Enterprise support in the pipeline wizard

Previously, you could use the [visual designer](https://docs.microsoft.com/azure/devops/pipelines/get-started-designer?view=azure-devops&tabs=new-nav) to create pipelines for GitHub Enterprise repositories. Now, you can also use the **New build pipeline** wizard to create your pipelines.

> [!div class="mx-imgBorder"]
> ![Badge](../../_img/146_08.png)

The wizard analyzes your GitHub Enterprise repository to suggest a YAML template which matches your project language. You can then edit and save the YAML as a direct commit to your default branch or as a pull request.

> [!div class="mx-imgBorder"]
> ![Badge](../../_img/146_10.png)

For more details, see the documentation on creating your first pipeline [here](https://docs.microsoft.com/azure/devops/pipelines/get-started-yaml?view=azure-devops).

### Automatic GitHub service connections in pipelines

When using the **New build pipeline** wizard to create a pipeline for GitHub, the page for choosing or creating a GitHub service connection led to confusion about which connection to select from the list. Now, you don’t need to choose a connection. The wizard automatically creates and re-uses a service connection for the repository you choose.

If you wish to manually choose a connection other than the one that is automatically selected, follow the **Choose connection** hyperlink. For more details, see [Build GitHub repositories](https://docs.microsoft.com/azure/devops/pipelines/repos/github?view=azure-devops).

> [!NOTE]
> The selection is based on the [Azure Pipelines GitHub App](https://github.com/apps/azure-pipelines) (if it is installed in the repository) or your personal GitHub identity (using OAuth).

### Display status for each pipeline job in GitHub Checks

Previously, a single build status was posted to GitHub Checks for your pipeline even if it included jobs for multiple platforms (e.g., Linux, macOS, and Windows). Now, status is posted to GitHub Checks for each job in the pipeline. Additionally, you can re-run the entire build or only individual failed jobs from GitHub Checks. To use this functionality, your pipeline must be configured to use the [Azure Pipelines GitHub App](https://github.com/apps/azure-pipelines). For additional details, see [Integrate using the GitHub App](https://docs.microsoft.com/azure/devops/pipelines/repos/github?view=azure-devops#integrate-using-the-github-app). To set up a pipeline with jobs for multiple platforms, see [Create a multi-platform pipeline](https://docs.microsoft.com/azure/devops/pipelines/get-started-multiplatform?view=azure-devops).

> [!div class="mx-imgBorder"]
> ![Badge](../../_img/146_09.png)

### Default authorization for YAML resources in GitHub

If you manage your source code in GitHub and use YAML to define your pipeline, you probably experienced a resource authorization build failure. When you edited your YAML file and added a reference to one of the protected resources (e.g., service connection, agent pool, variable group, or secure file), Azure Pipelines couldn’t validate the identity of the user that made that change and failed the build. To work around this issue, you had to save the build pipeline in the web editor after making a change to the YAML file. Many of the users who hit this issue simply wanted to allow all the pipelines to use the resource.

To avoid the resource authorization build failure, we changed the default behavior of all new service connections, agent pools, and variable groups to be authorized for use in all pipelines. If you want tighter controls on your resources, you can disable the default authorization model (see figure below). When you do so, someone with permissions to use the resource must save the pipeline in the web editor after a resource reference is added to the YAML file.

> [!div class="mx-imgBorder"]
> ![Badge](../../_img/146_21.png)

### Service containers for YAML pipelines

Previously, you had to install, start and stop services such as databases or memory caches if your YAML pipeline was using these services. With this update, we added **service containers** that can handle these tasks.
For example, if your pipeline uses a redis cache for integration tests, you can include the redis container image as a service in the pipeline. The agent will automatically fetch the image, start it up and network it so that your pipeline steps can refer to it by the hostname redis.  When the pipeline is complete, the agent will spin down the service container cleanly.

### Work items linked to GitHub commits in Release Summary

In December we introduced the capability to link GitHub commits to work items.  We are excited to announce that you can now see all Azure Board work items linked to GitHub commits in the release summary page. This will help teams track and retrieve more information about the commits that have been deployed to an environment.

### New Azure App Service tasks optimized for YAML

We now support four new tasks which provide an easy yet powerful way to deploy Azure App Services with modern developers in mind. These tasks have an optimized YAML syntax making it simple and intuitive to author deployments to Azure AppServices, including WebApps, FunctionApps, WebApps for Containers and FunctionApp for Containers on both Windows and Linux platforms.

We also support a new utility task for file transformation and variable substitution for XML and JSON formats.

### Azure Active Directory (AD) authentication support for Azure SQL task

The Azure SQL task has been enhanced to support connecting to a database using Azure AD (Integrated & Password) and a connection string in addition to the existing support for SQL server authentication.

> [!div class="mx-imgBorder"]
> ![Badge](../../_img/146_16.png)

### Grafana annotations service hook

We now support a new service hook that lets you add Grafana annotations for **Deployment Completed** events to a Grafana dashboard. This allows you to correlate deployments with the changes in application or infrastructure metrics that are being visualized in a Grafana dashboard.

> [!div class="mx-imgBorder"]
> ![Badge](../../_img/146_12.png)

### Query Azure Monitor alerts tasks

The previous version of the **Query Azure Monitors task** supported querying alerts only on the classic monitoring experience. With this new version of the task, you can query alerts on the unified monitoring experience recently introduced by Azure Monitor.

> [!div class="mx-imgBorder"]
> ![Badge](../../_img/146_13.png)

### Inline input of spec file in Deploy to Kubernetes task

Previously, the Kubernetes deployment task required you to provide a file path for the configuration. Now you can add the configuration inline as well.

> [!div class="mx-imgBorder"]
> ![Badge](../../_img/146_14.png)

### Docker CLI Installer task

This task allows installation of any version of Docker CLI on the agents as specified by the user.

> [!div class="mx-imgBorder"]
> ![Badge](../../_img/146_15.png)

### Java long-term support (LTS) on Microsoft hosted agents

Previously, Microsoft hosted agents had JDKs pre-installed that were overloaded by complex licensing, end-user restrictions, and lack of long-term support. In this update, we replaced the JDKs with tested, certified, LTS builds of OpenJDK from Azul Systems. Java developers using Azure can now build and run production Java applications using Azul Systems Zulu Enterprise builds of OpenJDK without incurring additional support costs.

This new offering is designed to make Microsoft hosted Java builds and deployments worry-free by incorporating quarterly security updates and bug fixes as well as critical out-of-band updates and patches as needed. If you’re currently building or running Java apps on-premises or with other JDKs, consider moving to Zulu on Azure for free support and maintenance. For more information, see the blog [Microsoft and Azul Systems bring free Java LTS support to Azure](https://azure.microsoft.com/blog/microsoft-and-azul-systems-bring-free-java-lts-support-to-azure/).

### YAML support for Bitbucket Cloud pipelines

Previously, [YAML-based pipelines](https://docs.microsoft.com/azure/devops/pipelines/get-started/pipelines-get-started?view=azure-devops) didn’t support Bitbucket Cloud. Now, you can either use YAML to define your Bitbucket Cloud pipelines or use the visual designer to do the same. To use YAML, add an **azure-pipelines.yml** file to your repository. In Azure Pipelines, choose **New build pipeline**, then select **Use the visual designer** hyperlink, select "Bitbucket Cloud" and "YAML". Here you can enter the path to your repository’s YAML file.

For more details, see the [YAML syntax guide](https://docs.microsoft.com/azure/devops/pipelines/yaml-schema?view=azure-devops&tabs=schema) and [GitHub repository of YAML samples](https://github.com/microsoft/azure-pipelines-yaml). 

### Avoid triggering multiple CI builds for pull requests

The YAML build templates included with Azure Pipelines were configured to trigger builds for any branch within a repository. This included pull request topic branches. As a result, two builds were triggered when pull requests were created. One build for the pull request branch in response to the continuous integration trigger, and a second build for the pull request branch in response to the pull request trigger.

By using the YAML snippet below, the built-in YAML templates will be configured to trigger a continuous integration build only for the **master** branch. New pull requests will still build using the pull request trigger. For more details, see the documentation for [build pipeline triggers](https://docs.microsoft.com/azure/devops/pipelines/build/triggers?view=azure-devops&tabs=yaml).

```yaml
trigger:
- master
```

### Change build numbers, upload and download artifacts in forked repository builds

Until now, pull request validation builds for forked repositories didn’t have permission to upload and download build artifacts or change the build number. Permissions were restricted because it was insecure to make the agent’s broader-scoped permissions available during a fork build triggered by an unknown user. With this update, agent permissions are scoped so that your pipeline can perform these operations if you need to.

Below is an example of the YAML that you can use to archive build outputs in a tar.gz file into the artifact staging directory. Then, it publishes the output to Azure Pipelines to be associated with the build. For more details, see the documentation on [Archive Files task](https://docs.microsoft.com/azure/devops/pipelines/tasks/utility/archive-files?view=azure-devops&tabs=yaml) and [Publish Build Artifacts task](https://docs.microsoft.com/azure/devops/pipelines/tasks/utility/publish-build-artifacts?view=azure-devops).

```yaml
- task: ArchiveFiles@2
  inputs:
    archiveType: 'tar'
    tarCompression: 'gz'
    includeRootFolder: false
    rootFolderOrFile: '$(build.sourcesDirectory)/target'
    archiveFile: '$(build.artifactStagingDirectory)/$(build.buildId).tar.gz'
- task: PublishBuildArtifacts@1
  inputs:
    pathtoPublish: '$(build.artifactStagingDirectory)'
```

### New option in Publish Test Results task to fail build on failed tests

[Publish Test Results task](https://docs.microsoft.com/azure/devops/pipelines/tasks/test/publish-test-results) is used to publish test results to Azure Pipelines when tests are run using your choice of test runner. Until now, the task would simply publish results from a results file and would not fail the build even if the results file contained failed tests. This meant that you had to write custom steps to have the build fail on test failures.

We have now added an option in the task to fail the build if there are any failed tests.

> [!div class="mx-imgBorder"]
> ![Badge](../../_img/146_11.png)

### Updates to the Azure Portal for creating an Azure DevOps project

The Azure Portal now includes additional functionality to support more frameworks and services when creating an Azure DevOps project. Below are the list of changes for each area.

**Framework**

Azure IoT is a fully managed service that delivers cloud intelligence locally on cross-platform IoT devices. Now, you can create an Azure DevOps project from the Azure Portal and use the **Simple IoT** as the application framework.

> [!div class="mx-imgBorder"]
> ![Badge](../../_img/146_19.png)

**Service**

Previously, the Create Azure DevOps Project workflow in the Azure Portal only supported **Create New** as an option for Kubernetes Service. A new option has been added to allow you to choose an existing cluster as the deployment target for the pipeline setup.

> [!div class="mx-imgBorder"]
> ![Badge](../../_img/146_18.png)

### Use the Azure Portal to setup and deploy to a CosmosDB database

Currently, you can use the Azure DevOps Project workflow in the Azure Portal to setup build and release pipelines for a Git repository. Now, you can deploy to Azure Web App for Containers (Linux) or Azure Kubernetes Service with a CosmosDB provisioned as a database backing the apps on these targets. This is currently available for all Node.js templates and we expect to add support for other templates in the future.

> [!div class="mx-imgBorder"]
> ![Badge](../../_img/146_22.png)

### Setup builds and release pipelines for Functions in Azure Portal

You can now use the Azure DevOps Project workflow in the Azure Portal to setup build and release pipelines for Git repository that deploy Azure Functions 2.0 (Windows). This is functionality is available for Node.js and .NET Core.

> [!div class="mx-imgBorder"]
> ![Badge](../../_img/146_23.png)