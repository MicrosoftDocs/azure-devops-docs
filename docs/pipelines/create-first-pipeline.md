---
title: Create your first pipeline
ms.custom: seodec18, devx-track-python, devx-track-azurecli
description: Create your first pipeline in Azure Pipelines, Azure DevOps, & Team Foundation Server
ms.topic: conceptual
ms.assetid: 038A5329-1B8F-46D9-A0C3-DA3FCFA43996
ms.author: sdanie
author: steved0x
ms.date: 12/03/2020
monikerRange: '>= tfs-2017'
---

# Create your first pipeline

[!INCLUDE [version-tfs-2017-rtm](includes/version-tfs-2017-rtm.md)]

::: moniker range="azure-devops"

This is a step-by-step guide to using Azure Pipelines to build a GitHub repository.

## Prerequisites - Azure DevOps

[!INCLUDE [include](includes/prerequisites.md)]

## Create your first pipeline

#### [Java](#tab/java)

### Get the Java sample code

To get started, fork the following repository into your GitHub account.

```
https://github.com/MicrosoftDocs/pipelines-java
```

### Create your first Java pipeline

1. Sign in to your Azure DevOps organization and navigate to your project.

2. In your project, navigate to the **Pipelines** page. Then choose the action to create a new pipeline.

3. Walk through the steps of the wizard by first selecting **GitHub** as the location of your source code.

4. You might be redirected to GitHub to sign in. If so, enter your GitHub credentials.

5. When the list of repositories appears, select your desired sample app repository.

6. Azure Pipelines will analyze your repository and recommend a Maven pipeline template. Select **Save and run**, then select **Commit directly to the main branch**, and then choose **Save and run** again.

7. A new run is started. Wait for the run to finish.

Learn more about [working with Java](ecosystems/java.md) in your pipeline.  

#### [.NET](#tab/net)

### Get the .NET Core sample code

To get started, fork the following repository into your GitHub account.

```
https://github.com/MicrosoftDocs/pipelines-dotnet-core
```

### Create your first .NET Core pipeline

[!INCLUDE [include](ecosystems/includes/create-pipeline-before-template-selected.md)]

> When the **Configure** tab appears, select **ASP.NET Core**.

1. When your new pipeline appears, take a look at the YAML to see what it does. When you're ready, select **Save and run**.

2. You're prompted to commit a new _azure-pipelines.yml_ file to your repository. After you're happy with the message, select **Save and run** again.

   If you want to watch your pipeline in action, select the build job.

   > You just created and ran a pipeline that we automatically created for you, because your code appeared to be a good match for the [ASP.NET Core](https://github.com/Microsoft/azure-pipelines-yaml/blob/master/templates/asp.net-core.yml) template.

   You now have a working YAML pipeline (`azure-pipelines.yml`) in your repository that's ready for you to customize!

3. When you're ready to make changes to your pipeline, select it in the **Pipelines** page, and then **Edit** the `azure-pipelines.yml` file.

Learn more about [working with .NET Core](ecosystems/dotnet-core.md) in your pipeline.

#### [Python](#tab/python)

### Get the Python sample code

To get started, fork the following repository into your GitHub account.

```
https://github.com/Microsoft/python-sample-vscode-flask-tutorial
```

### Create your first Python pipeline

[!INCLUDE [include](ecosystems/includes/create-pipeline-before-template-selected.md)]

> When the **Configure** tab appears, select **Python package**. This will create a Python package to test on multiple Python versions.

7. When your new pipeline appears, take a look at the YAML to see what it does. When you're ready, select **Save and run**.

8. You're prompted to commit a new _azure-pipelines.yml_ file to your repository. After you're happy with the message, select **Save and run** again.

   If you want to watch your pipeline in action, select the build job.

   > You just created and ran a pipeline that we automatically created for you, because your code appeared to be a good match for the [Python package](https://github.com/microsoft/azure-pipelines-yaml/blob/master/templates/python-package.yml) template.

   You now have a working YAML pipeline (`azure-pipelines.yml`) in your repository that's ready for you to customize!

9. When you're ready to make changes to your pipeline, select it in the **Pipelines** page, and then **Edit** the `azure-pipelines.yml` file.

Learn more about [working with Python](ecosystems/python.md) in your pipeline.

#### [JavaScript](#tab/javascript)

### Get the JavaScript sample code

To get started, fork the following repository into your GitHub account.

```
https://github.com/MicrosoftDocs/pipelines-javascript
```

### Create your first JavaScript pipeline

1. Sign in to your Azure DevOps organization and navigate to your project.

2. In your project, navigate to the **Pipelines** page. Then choose the action to create a new pipeline.

3. Walk through the steps of the wizard by first selecting **GitHub** as the location of your source code.

4. You might be redirected to GitHub to sign in. If so, enter your GitHub credentials.

5. When the list of repositories appears, select your Node.js sample repository.

6. Azure Pipelines will analyze the code in your repository and recommend `Node.js` template for your pipeline. Select that template.

7. Azure Pipelines will generate a YAML file for your pipeline. Select **Save and run**, then select **Commit directly to the main branch**, and then choose **Save and run** again.

8. A new run is started. Wait for the run to finish.

When you're done, you'll have a working YAML file (`azure-pipelines.yml`) in your repository that's ready for you to customize.

Learn more about [working with JavaScript](ecosystems/javascript.md) in your pipeline.


#### [Azure CLI (Java)](#tab/azure-cli)


1. From a command prompt, sign in to the Azure CLI.

    ```azurecli-interactive
    az login
    ```

1. Fork the following repository into your GitHub account:

    ```
    https://github.com/MicrosoftDocs/pipelines-java
    ```

    After you've forked it, clone it to your dev machine. 
    Learn how: [Fork a repo](https://help.github.com/en/articles/fork-a-repo).

1. Navigate to the cloned directory.

1. Create a new pipeline:

    ```azurecli-interactive
    az pipelines create --name "First-Java.CI"
    ```

    The repository and branch details are picked up from the git configuration available in the cloned directory.   

1. If prompted, enter your GitHub user name and password to authenticate Azure Pipelines.
   
    ```azurecli-interactive
    Enter your GitHub username (Leave blank for using already generated PAT): 
    Enter your GitHub password:
    ``` 

1. Add a name, `ContosoPipelineServiceConnection`, for the service connection created to enable Azure Pipelines to communicate with the GitHub Repository.
    
    ```azurecli-interactive
    Enter a service connection name to create? ContosoPipelineServiceConnection
    ```

1. Select the Maven pipeline template from the list of recommended templates. 

    ```azurecli-interactive
    Which template do you want to use for this pipeline?
    [1] Maven
    [2] Maven package Java project Web App to Linux on Azure
    [3] Android
    [4] Ant
    [5] ASP.NET
    [6] ASP.NET Core
    [7] ASP .NET Core (.NET Framework)
    [8] Starter pipeline
    [9] C/C++ with GCC
    [10] Go
    [11] Gradle
    [12] HTML
    [13] Jekyll site
    [14] .NET Desktop
    [15] Node.js
    [16] Node.js with Angular
    [17] Node.js with Grunt
    [18] Node.js with gulp
    [19] Node.js with React
    [20] Node.js with Vue
    [21] Node.js with webpack
    [22] PHP
    [23] Python Django
    [24] Python package
    [25] Ruby
    [26] Universal Windows Platform
    [27] Xamarin.Android
    [28] Xamarin.iOS
    [29] Xcode
    Please enter a choice [Default choice(1)]:
    ```

1. Select *2* to view the YAML in your default editor and make changes.

    ```azurecli-interactive
    Do you want to view/edit the template yaml before proceeding?
    [1] Continue with the generated yaml
    [2] View or edit the yaml
    Please enter a choice [Default choice(1)]:2
    ```
    
1. Select *1* to commit the the YAML file to the main branch.

    ```azurecli-interactive
    How do you want to commit the files to the repository?
    [1] Commit directly to the main branch.
    [2] Create a new branch for this commit and start a pull request.
    Please enter a choice [Default choice(1)]:
    ```

1. Azure DevOps will automatically start a pipeline run. Wait for the run to finish.

--- 

[!INCLUDE [include](includes/get-status-badge.md)]

::: moniker-end

::: moniker range="azure-devops"

## Manage your pipeline with Azure CLI

You can manage the pipelines in your organization using these `az pipelines` commands:

- [az pipelines run](#run-a-pipeline): Run an existing pipeline
- [az pipelines update](#update-a-pipeline): Update an existing pipeline
- [az pipelines show](#show-pipeline): Show the details of an existing pipeline

These commands require either the name or ID of the pipeline you want to manage. You can get the ID of a pipeline using the [az pipelines list](/cli/azure/pipelines#ext-azure-devops-az-pipelines-list) command.

### Run a pipeline

You can queue (run) an existing pipeline with the [az pipelines run](/cli/azure/pipelines#ext-azure-devops-az-pipelines-run) command. To get started, see [Get started with Azure DevOps CLI](../cli/index.md).

```azurecli 
az pipelines run [--branch]
                 [--commit-id]
                 [--folder-path]
                 [--id]
                 [--name]
                 [--open]
                 [--org]
                 [--project]
                 [--variables]
``` 

#### Parameters

- **branch**: Name of the branch on which the pipeline run is to be queued, for example, *refs/heads/main*.
- **commit-id**: Commit-id on which the pipeline run is to be queued.
- **folder-path**: Folder path of pipeline. Default is root level folder.
- **id**: Required if **name** is not supplied. ID of the pipeline to queue.
- **name**: Required if **ID** is not supplied, but ignored if **ID** is supplied. Name of the pipeline to queue.
- **open**: Open the pipeline results page in your web browser.
- **org**: Azure DevOps organization URL. You can configure the default organization using `az devops configure -d organization=ORG_URL`. Required if not configured as default or picked up using `git config`. Example: `--org https://dev.azure.com/MyOrganizationName/`.
- **project**: Name or ID of the project. You can configure the default project using `az devops configure -d project=NAME_OR_ID`. Required if not configured as default or picked up using `git config`.
- **variables**: Space separated "name=value" pairs for the variables you would like to set.

#### Example

The following command runs the pipeline named **myGithubname.pipelines-java** in the branch **pipeline** and shows the result in table format.  

```azurecli 
az pipelines run --name myGithubname.pipelines-java --branch pipeline --output table

Run ID    Number      Status      Result    Pipeline ID    Pipeline Name                Source Branch    Queued Time               Reason
--------  ----------  ----------  --------  -------------  ---------------------------  ---------------  --------------------------  --------
123       20200123.2  notStarted            12             myGithubname.pipelines-java  pipeline           2020-01-23 11:55:56.633450  manual
```

### Update a pipeline

You can update an existing pipeline with the [az pipelines update](/cli/azure/pipelines#ext-azure-devops-az-pipelines-update) command. To get started, see [Get started with Azure DevOps CLI](../cli/index.md).

```azurecli 
az pipelines update [--branch]
                    [--description]
                    [--id]
                    [--name]
                    [--new-folder-path]
                    [--new-name]
                    [--org]
                    [--project]
                    [--queue-id]
                    [--yaml-path]
``` 

#### Parameters

- **branch**: Name of the branch on which the pipeline run is to be configured, for example, *refs/heads/main*.
- **description**: New description for the pipeline.
- **id**: Required if **name** is not supplied. ID of the pipeline to update.
- **name**: Required if **ID** is not supplied. Name of the pipeline to update.
- **new-folder-path**: New full path of the folder to which the pipeline is moved, for example, *user1/production_pipelines*.
- **new-name**: New updated name of the pipeline.
- **org**: Azure DevOps organization URL. You can configure the default organization using `az devops configure -d organization=ORG_URL`. Required if not configured as default or picked up using `git config`. Example: `--org https://dev.azure.com/MyOrganizationName/`.
- **project**: Name or ID of the project. You can configure the default project using `az devops configure -d project=NAME_OR_ID`. Required if not configured as default or picked up using `git config`.
- **queue-id**: Queue ID of the agent pool where the pipeline needs to run.
- **yaml-path**: Path of the pipeline's yaml file in the repo.

#### Example 

The following command updates the pipeline with the **ID** of 12 with a new name and description and shows the result in table format.

```azurecli 
az pipelines update --id 12 --description "rename pipeline" --new-name updatedname.pipelines-java --output table

ID    Name                        Status    Default Queue
----  --------------------------  --------  ------------------
12    updatedname.pipelines-java  enabled   Hosted Ubuntu 1604
```

### Show pipeline

You can view the details of an existing pipeline with the [az pipelines show](/cli/azure/pipelines#ext-azure-devops-az-pipelines-show) command. To get started, see [Get started with Azure DevOps CLI](../cli/index.md).

```azurecli 
az pipelines show [--folder-path]
                  [--id]
                  [--name]
                  [--open]
                  [--org]
                  [--project]
``` 

#### Parameters

- **folder-path**: Folder path of pipeline. Default is root level folder.
- **id**: Required if **name** is not supplied. ID of the pipeline to show details.
- **name**: Required if **name** is not supplied, but ignored if **ID** is supplied. Name of the pipeline to show details.
- **open**: Open the pipeline summary page in your web browser.
- **org**: Azure DevOps organization URL. You can configure the default organization using `az devops configure -d organization=ORG_URL`. Required if not configured as default or picked up using `git config`. Example: `--org https://dev.azure.com/MyOrganizationName/`.
- **project**: Name or ID of the project. You can configure the default project using `az devops configure -d project=NAME_OR_ID`. Required if not configured as default or picked up using `git config`.

#### Example 

The following command shows the details of the pipeline with the **ID** of 12 and returns the result in table format.  

```azurecli 
az pipelines show --id 12 --output table

ID    Name                        Status    Default Queue
----  --------------------------  --------  ------------------
12    updatedname.pipelines-java  enabled   Hosted Ubuntu 1604
```

::: moniker-end


::: moniker range="<= azure-devops-2020"

[!INCLUDE [temp](includes/concept-rename-note.md)]

::: moniker-end

::: moniker range="tfs-2017"

> [!NOTE]
> 
> This guidance applies to TFS version 2017.3 and newer.

::: moniker-end

::: moniker range="azure-devops-2019 || azure-devops-2020"

We'll show you how to use the classic editor in Azure DevOps Server 2019 to create a build and release that prints "Hello world".

::: moniker-end

::: moniker range="<= tfs-2018"

We'll show you how to use the classic editor in TFS to create a build and a release that prints "Hello world".

::: moniker-end

::: moniker range="<= azure-devops-2020"

## Prerequisites

* A [self-hosted Windows agent](agents/v2-windows.md).

<a name="initialize-repo"></a>
## Initialize your repository

> If you already have a repository in your project, you can skip to the next step: [Skip to adding a script to your repo](#add-a-script-to-your-repository)

::: moniker-end

::: moniker range="azure-devops-2019 || azure-devops-2020"

1. Go to **Azure Repos**. (The **Code** hub in the previous navigation)

   ![Repos files](./media/create-first-pipeline/repos-files.png)

2. If your project is empty, you will be greeted with a screen to help you add code to your repository. Choose the bottom choice to **initialize** your repo with a `readme` file: 

   ![Initialize repository](media/initialize-repo.png)

::: moniker-end

::: moniker range="< azure-devops-2019"

1. Navigate to your repository by clicking **Code** in the top navigation. 

2. If your project is empty, you will be greeted with a screen to help you add code to your repository. Choose the bottom choice to **initialize** your repo with a `readme` file: 

   ![Initialize repository](media/initialize-repo.png)

::: moniker-end

::: moniker range="<= azure-devops-2020"

<a name="add-script"></a>

## Add a script to your repository

Create a PowerShell script that prints `Hello world`.

::: moniker-end

::: moniker range="azure-devops-2019 || azure-devops-2020"

1. Go to **Azure Repos**.

2. Add a file.

   > [!div class="mx-imgBorder"] 
   >![On the Files tab, from the repo node, select the New File option](media/get-started-designer/add-a-file-newnav-tfs-2018-2.png)
   > 

3. In the dialog box, name your new file and create it.
   ```
   HelloWorld.ps1
   ```

4. Copy and paste this script.
   ```ps
   Write-Host "Hello world"
   ```

5. **Commit** (save) the file.

::: moniker-end

::: moniker range="<= tfs-2018"

1. Go to the **Code** hub.

2. Add a file.

   ::: moniker-end

   ::: moniker range="tfs-2018"

   #### [TFS 2018.2](#tab/tfs-2018-2)
   ![On the Files tab, from the repo node, select the 'New -> File' option](media/get-started-designer/add-a-file-tfs-2018-2.png) 

   #### [TFS 2018 RTM](#tab/tfs-2018-rtm)
   ![Select the 'New -> File' option](media/get-started-designer/add-a-file-tfs-2018.png) 

   * * * 

   ::: moniker-end

   ::: moniker range="tfs-2017"

   ![On the Files tab, from the repo node, select the 'Add file' option](media/get-started-designer/add-a-file.png)

   ::: moniker-end

::: moniker range="< azure-devops-2019"

1. In the dialog box, name your new file and create it.
   ```
   HelloWorld.ps1
   ```

2. Copy and paste this script.
   ```ps
   Write-Host "Hello world"
   ```

3. **Commit** (save) the file.

::: moniker-end

::: moniker range="<= azure-devops-2020"

> In this tutorial, our focus is on CI/CD, so we're keeping the code part simple. We're working in an Azure Repos Git repository directly in your web browser.
>
> When you're ready to begin building and deploying a real app, you can use a wide range of version control clients and services with Azure Pipelines CI builds. [Learn more](#version-control).

## Create a build pipeline

Create a build pipeline that prints "Hello world."

::: moniker-end

::: moniker range="azure-devops-2019 || azure-devops-2020"

1. Select **Azure Pipelines**, it should automatically take you to the **Builds** page.

   > [!div class="mx-imgBorder"] 
   > ![Go to Builds tab](media/get-started-designer/navigate-to-builds-tab-newnav-tfs-2018-2.png)
   >

2. Create a new pipeline.

   > [!div class="mx-imgBorder"] 
   > ![Select the build tab button](media/get-started-designer/builds-tab-mine-new-button-vsts-newnavon.png)
   >

   For new Azure DevOps users, this will automatically take you to the _YAML pipeline creation experience_. To get to the classic editor and complete this guide, you must turn off the **preview feature** for the _New YAML pipeline creation experience_:

   ![Click settings in top right of screen and click preview features](media/preview-features.png)

   ![Click toggle to turn yaml preview feature off](media/yaml-preview-feature-off.png)

3. Make sure that the **source**, **project**, **repository**, and default **branch** match the location in which you created the script.

4. Start with an **Empty job**.

5. On the left side, select **Pipeline** and specify whatever **Name** you want to use. For the **Agent pool**, select **Hosted VS2017**.

6. On the left side, select the plus sign **( + )** to add a task to **Job 1**. On the right side, select the **Utility** category, select the **PowerShell** task from the list, and then choose **Add**.

   > [!div class="mx-imgBorder"] 
   > ![Add the build task to the job](media/get-started-designer/builds-tab-add-task-azure-devops-newnavon.png)
   
7. On the left side, select your new **PowerShell** script task.

8. For the **Script Path** argument, select the <span style="background-color: rgb(244,244,244);font-weight:bold;padding:5px">...</span> button to browse your repository and select the script you created.

   > [!div class="mx-imgBorder"] 
   > ![Select your script](media/get-started-designer/powershell-task-1-azure-devops-newnavon.png)
 
9. Select **Save & queue**, and then select **Save**.

   ::: moniker-end

   ::: moniker range="tfs-2018"

10. Select **Build and Release**, and then choose **Builds**.

    ![Choose build tab](media/get-started-designer/navigate-to-builds-tab-tfs-2018-2.png)

11. Create a new pipeline.

    ![Create a new pipeline](media/get-started-designer/builds-tab-mine-new-button-tab-tfs-2018-2.png)

12. Start with an **empty pipeline**

13. Select **Pipeline** and specify whatever **Name** you want to use. For the **Agent pool**, select **Default**.

14. On the left side, select **+ Add Task** to add a task to the job, and then on the right side select the **Utility** category, select the **PowerShell** task, and then choose **Add**.

    ![Add the task to the job](media/get-started-designer/builds-tab-add-task-tfs-2018.png)

15. On the left side, select your new **PowerShell** script task.

16. For the **Script Path** argument, select the <span style="background-color: rgb(244,244,244);font-weight:bold;padding:5px">...</span> button to browse your repository and select the script you created.

    ![Select the PowerShell task](media/get-started-designer/powershell-task-1-tfs-2018.png)

17. Select **Save & queue**, and then select **Save**.

    ::: moniker-end

::: moniker range="tfs-2017"

1. Select **Azure Pipelines**, and then the **Builds** tab.

   ![Go to the tab for builds](media/get-started-designer/navigate-to-builds-tab.png)

2. Create a new pipeline.

   ![Screenshot showing the Builds tab and the New button.](media/get-started-designer/builds-tab-mine-new-button.png)

3. Start with an **empty pipeline**.

4. Select **Pipeline** and specify whatever **Name** you want to use.

5. On the **Options** tab, select **Default** for the **Agent pool**, or select whichever pool you want to use that has Windows build agents.

6. On the **Tasks** tab, make sure that **Get sources** is set with the **Repository** and **Branch** in which you created the script.

7. On the left side select **Add Task**, and then on the right side select the **Utility** category, select the **PowerShell** task, and then select **Add**.

8. On the left side, select your new **PowerShell** script task.

9. For the **Script Path** argument, select the <span style="background-color: rgb(244,244,244);font-weight:bold;padding:5px">...</span> button to browse your repository and select the script you created.

   ![Browse to find the script](media/get-started-designer/powershell-task-1.png)

10. Select **Save & queue**, and then select **Save**.

::: moniker-end

::: moniker range="<= azure-devops-2020"

> A build pipeline is the entity through which you define your automated build pipeline. In the build pipeline, you compose a set of tasks, each of which perform a step in your build. The task catalog provides a rich set of tasks for you to get started. You can also add PowerShell or shell scripts to your build pipeline.

## Publish an artifact from your build

A typical build produces an artifact that can then be deployed to various stages in a release. Here to demonstrate the capability in a simple way, we'll simply publish the script as the artifact.

::: moniker-end

::: moniker range="azure-devops-2019 || azure-devops-2020"

1. On the **Tasks** tab, select the plus sign **( + )** to add a task to **Job 1**.

1. Select the **Utility** category, select the **Publish Build Artifacts** task, and then select **Add**.

   ![Add the publish artifact task](media/get-started-designer/publish-artifact-task-tfs-2018-2.png)

   **Path to publish**: Select the <span style="background-color: rgb(244,244,244);font-weight:bold;padding:5px">...</span> button to browse and select the script you created.

   **Artifact name**: Enter `drop`.

   **Artifact publish location**: Select **Azure Artifacts/TFS**.

::: moniker-end


::: moniker range="<= tfs-2018"

1. On the **Tasks** tab, select **Add Task**.

2. Select the **Utility** category, select the **Publish Build Artifacts** task, and then select **Add**.

   ![Select add to add the publish artifact task](media/get-started-designer/publish-artifact-task.png)

   **Path to Publish**: Select the <span style="background-color: rgb(244,244,244);font-weight:bold;padding:5px">...</span> button to browse and select the script you created.

   **Artifact Name**: Enter `drop`.

   **Artifact Type**: Select **Server**.

::: moniker-end

::: moniker range="<= azure-devops-2020"

> Artifacts are the files that you want your build to produce. Artifacts can be nearly anything your team needs to test or deploy your app. For example, you've got a .DLL and .EXE executable files and .PDB symbols file of a C# or C++ .NET Windows app.
>
> To enable you to produce artifacts, we provide tools such as copying with pattern matching, and a staging directory in which you can gather your artifacts before publishing them. See [Artifacts in Azure Pipelines](artifacts/artifacts-overview.md).

## Enable continuous integration (CI)

1. Select the **Triggers** tab.

1. Enable **Continuous integration**.

>  A continuous integration trigger on a build pipeline indicates that the system should automatically queue a new build whenever a code change is committed. You can make the trigger more general or more specific, and also schedule your build (for example, on a nightly basis). See [Build triggers](build/triggers.md).

## Save and queue the build

Save and queue a build manually and test your build pipeline.

::: moniker-end

::: moniker range="azure-devops-2019 || azure-devops-2020"

1. Select **Save & queue**, and then select **Save & queue**.

1. On the dialog box, select **Save & queue** once more.

   This queues a new build on the Microsoft-hosted agent.

1. You see a link to the new build on the top of the page.

   > [!div class="mx-imgBorder"] 
   > ![build console](media/get-started-designer/build-console-link-to-new-build-azure-devops-newnavon.png)

   Choose the link to watch the new build as it happens. Once the agent is allocated, you'll start seeing the live logs of the build. Notice that the PowerShell script is run as part of the build, and that "Hello world" is printed to the console.

   > [!div class="mx-imgBorder"] 
   > ![Watch in the build console](media/get-started-designer/build-console-azure-devops-newnavon.png)

1. Go to the build summary. On the **Artifacts** tab of the build, notice that the script is published as an artifact.

   > [!div class="mx-imgBorder"] 
   > ![Open the build console to see the artifact](media/get-started-designer/artifacts-explorer-azure-devops-newnavon.png)

::: moniker-end

::: moniker range="tfs-2018"

1. Select **Save & queue**, and then select **Save & queue**.

2. On the dialog box, select **Save & queue** once more.

   This queues a new build on the Microsoft-hosted agent.
   
3. You see a link to the new build on the top of the page.

   ![Go to the build console](media/get-started-designer/build-console-link-to-new-build-tfs-2018-2.png)

   Choose the link to watch the new build as it happens. Once the agent is allocated, you'll start seeing the live logs of the build. Notice that the PowerShell script is run as part of the build, and that "Hello world" is printed to the console.

   #### [TFS 2018.2](#tab/tfs-2018-2)
   ![See the build console](media/get-started-designer/build-console.png)

   #### [TFS 2018 RTM](#tab/tfs-2018-rtm)
   ![Go to the build console for TFS 2018](media/get-started-designer/build-console-vsts.png)

   * * *

4. Go to the build summary.

   ![build console link to build summary](media/get-started-designer/build-console-link-to-build-summary.png)

5. On the **Artifacts** tab of the build, notice that the script is published as an artifact.

   ![artifacts explorer](media/get-started-designer/artifacts-explorer.png)

> You can view a summary of all the builds or drill into the logs for each build at any time by navigating to the **Builds** tab in **Azure Pipelines**. For each build, you can also view a list of commits that were built and the work items associated with each commit. You can also run tests in each build and analyze the test failures.

::: moniker-end

::: moniker range="tfs-2017"

1. Select **Save & queue**, and then select **Save & queue**.

1. On the dialog box, select the **Queue** button.

   This queues a new build on the agent. Once the agent is allocated, you'll start seeing the live logs of the build. Notice that the PowerShell script is run as part of the build, and that "Hello world" is printed to the console.

   ![Open the build console to see hello world](media/get-started-designer/build-console.png)

1. Go to the build summary.

   ![See the build  console link to build summary](media/get-started-designer/build-console-link-to-build-summary.png)

1. On the **Artifacts** tab of the build, notice that the script is published as an artifact.

   ![artifacts explorer](media/get-started-designer/artifacts-explorer.png)

> You can view a summary of all the builds or drill into the logs for each build at any time by navigating to the **Builds** tab in **Build and Release**. For each build, you can also view a list of commits that were built and the work items associated with each commit. You can also run tests in each build and analyze the test failures.

::: moniker-end

::: moniker range="<= azure-devops-2020"

## Add some variables and commit a change to your script

We'll pass some build variables to the script to make our pipeline a bit more interesting. Then we'll commit a change to a script and watch the CI pipeline run automatically to validate the change.  

1. Edit your build pipeline.

2. On the **Tasks** tab, select the PowerShell script task.

3. Add these arguments.

   ::: moniker-end

   ::: moniker range="azure-devops-2019 || azure-devops-2020"

   > [!div class="mx-imgBorder"] 
   > ![Open the PowerShell task in the build console](media/get-started-designer/powershell-task-2-azure-devops-newnavon.png)

   ::: moniker-end

   ::: moniker range="tfs-2018"

   #### [TFS 2018.2](#tab/tfs-2018-2)
   ![PowerShell task - TFS 2018.2](media/get-started-designer/powershell-task-2-tfs-2018-2.png)

   #### [TFS 2018 RTM](#tab/tfs-2018-rtm)
   ![PowerShell task - 2018 RTM](media/get-started-designer/powershell-task-2.png)

   * * *

   ::: moniker-end

   ::: moniker range="tfs-2017"

   ![PowerShell task - TFS 2017](media/get-started-designer/powershell-task-2.png)

   ::: moniker-end

   ::: moniker range="<= azure-devops-2020"

   **Arguments**

   ```
   -greeter "$(Build.RequestedFor)" -trigger "$(Build.Reason)"
   ```

Finally, save the build pipeline. 

Next you'll add the arguments to your script.

1. Go to your **Files** in **Azure Repos** (the **Code** hub in the previous navigation and TFS).

2. Select the **HelloWorld.ps1** file, and then **Edit** the file.

3. Change the script as follows:

   ```ps
   Param(
   [string]$greeter,
   [string]$trigger
   )
   Write-Host "Hello world" from $greeter
   Write-Host Trigger: $trigger
   ```

4. **Commit** (save) the script.

::: moniker-end

::: moniker range="azure-devops-2019 || azure-devops-2020"

Now you can see the results of your changes. Go to **Azure Pipelines** and select **Queued**. Notice under the **Queued or running** section that a build is automatically triggered by the change that you committed.

::: moniker-end

::: moniker range="<= tfs-2018"

Now you can see the results of your changes. Go to the **Build and Release** page and select **Queued**. Notice under the **Queued or running** section that a build is automatically triggered by the change that you committed.

::: moniker-end

::: moniker range="<= azure-devops-2020"

1. Select the new build that was created and view its log.

2. Notice that the person who changed the code has their name printed in the greeting message. You also see printed that this was a CI build.

   ::: moniker-end

   ::: moniker range="azure-devops-2019 || azure-devops-2020"

   > [!div class="mx-imgBorder"] 
   > ![Build a summary PowerShell script log](media/get-started-designer/build-summary-powershell-script-log-azure-devops-newnav.png)

   ::: moniker-end

   ::: moniker range="<= tfs-2018"

   > [!div class="mx-imgBorder"]
   > ![build summary powershell script log](media/get-started-designer/build-summary-powershell-script-log.png)

   ::: moniker-end

::: moniker range="<= azure-devops-2020"

> We just introduced the concept of build variables in these steps. We printed the value of a variable that is automatically predefined and initialized by the system. You can also define custom variables and use them either in arguments to your tasks, or as environment variables within your scripts. To learn more about variables, see [Build variables](build/variables.md).

## You've got a build pipeline. What's next?

You've created a build pipeline that automatically builds and validates whatever code is checked in by your team. At this point, you can continue to the next section to learn about release pipelines. Or, if you prefer, you can [skip ahead](#next-steps) to create a build pipeline for your app.

## Create a release pipeline

Define the process for running the script in two stages.

::: moniker-end

::: moniker range="azure-devops-2019 || azure-devops-2020"

1. Go to the **Pipelines** tab, and then select **Releases**.

1. Select the action to create a **New pipeline**. If a release pipeline is already created, select the plus sign **( + )** and then select  **Create a release pipeline**.

1. Select the action to start with an **Empty job**.

1. Name the stage **QA**.

1. In the Artifacts panel, select **+ Add** and specify a **Source (Build pipeline)**. Select **Add**.

1. Select the **Lightning bolt** to trigger continuous deployment and then enable the **Continuous deployment trigger** on the right.

   > [!div class="mx-imgBorder"] 
   > ![Select lightning bolt to trigger continuous deployment](media/get-started-designer/trigger-continuous-deployment-release-environment-azure-devops-newnavon.png)
   >   

1. Select the **Tasks** tab and select your **QA** stage.

1. Select the plus sign **( + )** for the job to add a task to the job.

1. On the **Add tasks** dialog box, select **Utility**, locate the **PowerShell** task, and then select its **Add** button.

1. On the left side, select your new **PowerShell** script task.

1. For the **Script Path** argument, select the <span style="background-color: rgb(244,244,244);font-weight:bold;padding:5px">...</span> button to browse your artifacts and select the script you created.

1. Add these **Arguments**:

   ```
   -greeter "$(Release.RequestedFor)" -trigger "$(Build.DefinitionName)"
   ```

1. On the **Pipeline** tab, select the **QA** stage and select **Clone**.

   > [!div class="mx-imgBorder"] 
   > ![Clone the release environment in QA](media/get-started-designer/clone-release-environment-azure-devops-newnavon.png)
   >   

1. Rename the cloned stage **Production**.

1. Rename the release pipeline **Hello world**.

   > [!div class="mx-imgBorder"] 
   > ![Rename the release pipeline hello world](media/get-started-designer/rename-release-pipeline-azure-devops-newnavon.png)
   >

1. Save the release pipeline.

::: moniker-end

::: moniker range="tfs-2018"

1. Go to the **Build and Release** tab, and then select **Releases**.

2. Select the action to create a **New pipeline**. If a release pipeline is already created, select the plus sign **( + )** and then select  **Create a release definition**.

3. Select the action to start with an **Empty definition**.

4. Name the stage **QA**.

5. In the Artifacts panel, select **+ Add** and specify a **Source (Build pipeline)**. Select **Add**.

6. Select the **Lightning bolt** to trigger continuous deployment and then enable the **Continuous deployment trigger** on the right.
  
   #### [TFS 2018.2](#tab/tfs-2018-2)
   > [!div class="mx-imgBorder"] 
   > ![trigger continuous deployment - TFS 2018.2](media/get-started-designer/trigger-continuous-deployment-release-environment-tfs-2018-2.png)

   #### [TFS 2018 RTM](#tab/tfs-2018-rtm)
   > [!div class="mx-imgBorder"] 
   > ![trigger continuous deployment - TFS 2018 RTM](media/get-started-designer/trigger-continuous-deployment-release-environment-tfs-2018-rtm-new-editor.png)

   * * *

7. Select the **Tasks** tab and select your **QA** stage.

8. Select the plus sign **( + )** for the job to add a task to the job.

9. On the **Add tasks** dialog box, select **Utility**, locate the **PowerShell** task, and then select its **Add** button.

10. On the left side, select your new **PowerShell** script task.

11. For the **Script Path** argument, select the <span style="background-color: rgb(244,244,244);font-weight:bold;padding:5px">...</span> button to browse your artifacts and select the script you created.

12. Add these **Arguments**:

    ```
    -greeter "$(Release.RequestedFor)" -trigger "$(Build.DefinitionName)"
    ```

13. On the **Pipeline** tab, select the **QA** stage and select **Clone**.

    > [!div class="mx-imgBorder"] 
    > ![clone the release environment](media/get-started-designer/clone-release-environment-tfs-2018-2.png)
    >
   
14. Rename the cloned stage **Production**.

15. Rename the release pipeline **Hello world**.

    > [!div class="mx-imgBorder"] 
    > ![rename the release pipeline](media/get-started-designer/rename-release-definition-tfs-2018-2.png)
    >   

16. Save the release pipeline.

::: moniker-end

::: moniker range="tfs-2017"

1. Go to **Azure Pipelines**, and then to the **Releases** tab.

2. Select the action to create a **New pipeline**.

3. On the dialog box, select the **Empty** template and select **Next**.

4. Make sure that your **Hello world** build pipeline that you created above is selected. Select **Continuous deployment**, and then select **Create**.

5. Select **Add tasks** in the stage.

6. On the **Task catalog** dialog box, select **Utility**, locate the **PowerShell** task, and then select its **Add** button. Select the **Close** button.

7. For the **Script Path** argument, select the <span style="background-color: rgb(244,244,244);font-weight:bold;padding:5px">...</span> button to browse your artifacts and select the script you created.

8. Add these **Arguments**:

   ```
   -greeter "$(Release.RequestedFor)" -trigger "$(Build.DefinitionName)"
   ```

9. Rename the stage **QA**.

   ![Rename release environment for QA](media/get-started-designer/rename-release-environment.png)

10. **Clone** the **QA** stage.

    ![Select Clone in the QA stage.](media/get-started-designer/clone-release-environment.png)

    Leave **Automatically approve** and **Deploy automatically...** selected, and select **Create**.

11. Rename the new stage **Production**.

12. Rename the release pipeline **Hello world**.

    ![Rename the release pipeline to hello world](media/get-started-designer/rename-release-definition.png)

13. Save the release pipeline.

::: moniker-end

::: moniker range="<= azure-devops-2020"

> A release pipeline is a collection of stages to which the application build artifacts are deployed. It also defines the actual deployment pipeline for each stage, as well as how the artifacts are promoted from one stage to another.
>
> Also, notice that we used some variables in our script arguments. In this case, we used [release variables](release/variables.md) instead of the build variables we used for the build pipeline.

## Deploy a release

Run the script in each stage.

::: moniker-end

 ::: moniker range="azure-devops-2019 || azure-devops-2020"

1. Create a new release.

   > [!div class="mx-imgBorder"] 
   > ![Create release - DevOps 2019 and 2020](media/get-started-designer/create-release-azure-devops-newnavon.png)

   When **Create new release** appears, select **Create**.

2. Open the release that you created.

   > [!div class="mx-imgBorder"] 
   > ![release created - DevOps 2019 and 2020](media/get-started-designer/release-created-azure-devops-newnavon.png)
   >
 
3. View the logs to get real-time data about the release.

   > [!div class="mx-imgBorder"] 
   > ![release logs - DevOps 2019 and 2020](media/get-started-designer/release-logs-azure-devops-newnavon.png)
   >

   ::: moniker-end

   ::: moniker range="tfs-2018"

4. Create a new release.

   ![create release - TFS 2018](media/get-started-designer/create-release-tfs-2018-2.png)

   When **Create new release** appears, select **Create** (TFS 2018.2) or **Queue** (TFS 2018 RTM).

5. Open the release that you created.

   ![release created - TFS 2018](media/get-started-designer/release-created-tfs-2018-2.png)

6. View the logs to get real-time data about the release.

   ![release logs - TFS 2018](media/get-started-designer/release-logs-tfs-2018-2.png)

   ::: moniker-end

   ::: moniker range="tfs-2017"

7. Create a new release.

   ![create release - TFS 2017](media/get-started-designer/create-release.png)

8. Open the release that you created.

   ![release created - TFS 2017](media/get-started-designer/release-created.png)

9. View the logs to get real-time data about the release.

   ![release logs - TFS 2017](media/get-started-designer/release-logs.png)

   ::: moniker-end

::: moniker range="<= azure-devops-2020"

> You can track the progress of each release to see if it has been deployed to all the stages. You can track the commits that are part of each release, the associated work items, and the results of any test runs that you've added to the release pipeline.

## Change your code and watch it automatically deploy to production

We'll make one more change to the script. This time it will automatically build and then get deployed all the way to the production stage.

1. Go to the **Code** hub, **Files** tab, edit the **HelloWorld.ps1** file, and change it as follows:

   ```ps
   Param(
   [string]$greeter,
   [string]$trigger
   )
   Write-Host "Hello world" from $greeter
   Write-Host Trigger: $trigger
   Write-Host "Now that you've got CI/CD, you can automatically deploy your app every time your team checks in code."
   ```

2. **Commit** (save) the script.

3. Select the **Builds** tab to see the build queued and run.

4. After the build is completed, select the **Releases** tab, open the new release, and then go to the **Logs**.

Your new code automatically is deployed in the **QA** stage, and then in the **Production** stage.

::: moniker-end

::: moniker range="azure-devops-2019 || azure-devops-2020"

> [!div class="mx-imgBorder"] 
> ![release script step final log - DevOps 2019 and 2020](media/get-started-designer/release-script-step-final-log-azure-devops-newnavon.png)
>

::: moniker-end

::: moniker range="tfs-2018"

> [!div class="mx-imgBorder"] 
> ![release script step final log - - TFS 2018](media/get-started-designer/release-script-step-final-log-tfs-2018-2.png)
>
   
::: moniker-end

::: moniker range="tfs-2017"

![release script step final log - TFS 2017](media/get-started-designer/release-script-step-final-log.png)

::: moniker-end

::: moniker range="<= azure-devops-2020"

> In many cases, you probably would want to edit the release pipeline so that the production deployment happens
  only after some testing and approvals are in place. See [Approvals and gates overview](release/approvals/index.md).

::: moniker-end

<a name="next-steps"></a>

## Next steps

:::moniker range="azure-devops"

[!INCLUDE [include](includes/create-first-pipeline-next-steps.md)]

:::moniker-end

::: moniker range=">= tfs-2017 <= azure-devops-2020"

You've learned the basics of creating and running a pipeline.
Now you're ready to configure your build pipeline for the programming language you're using.
Go ahead and create a new build pipeline, and this time, use one of the following templates.

| Language | Template to use | 
|-|-|
| [.NET](apps/aspnet/build-aspnet-4.md) | ASP.NET |
| [.NET Core](ecosystems/dotnet-core.md) | ASP.NET Core |
| [C++](apps/windows/cpp.md) | .NET Desktop | 
| [Go](./ecosystems/go.md) | Go |
| [Java](ecosystems/java.md) | Gradle |
| [JavaScript](ecosystems/javascript.md) | Node.js |
| [Xcode](ecosystems/xcode.md) | Xcode |

::: moniker-end

::: moniker range=">= tfs-2017"

## FAQ

### Where can I read articles about DevOps and CI/CD?

<!-- BEGINSECTION class="md-qanda" -->

[What is Continuous Integration?](/devops/develop/what-is-continuous-integration)

[What is Continuous Delivery?](/devops/deliver/what-is-continuous-deliverywhat-is-continuous-delivery)

[What is DevOps?](https://azure.microsoft.com/overview/what-is-devops/)

<a name="version-control"></a>

### What kinds of version control can I use?

When you're ready to get going with CI/CD for your app, you can use the version control system of your choice:

::: moniker-end

::: moniker range="azure-devops"

* Clients

  * [Visual Studio Code for Windows, macOS, and Linux](https://code.visualstudio.com)
  * [Visual Studio with Git for Windows](../repos/git/share-your-code-in-git-vs.md) or [Visual Studio for Mac](https://visualstudio.microsoft.com/vs/visual-studio-mac/)
  * [Eclipse](../repos/git/share-your-code-in-git-eclipse.md)
  * [Xcode](../repos/git/share-your-code-in-git-xcode.md)
  * [IntelliJ](/previous-versions/azure/devops/java/download-intellij-plug-in)
  * [Command line](../repos/git/share-your-code-in-git-cmdline.md)

* Services
  * [Azure Pipelines](https://visualstudio.microsoft.com/team-services/)
  * Git service providers such as GitHub and Bitbucket Cloud
  * Subversion

::: moniker-end

::: moniker range="<= azure-devops-2020"

* Clients

  * [Visual Studio Code for Windows, macOS, and Linux](https://code.visualstudio.com)
  * [Visual Studio with Git for Windows](../repos/git/share-your-code-in-git-vs.md) or [Visual Studio for Mac](https://visualstudio.microsoft.com/vs/visual-studio-mac/)
  * [Visual Studio with TFVC](../repos/tfvc/share-your-code-in-tfvc-vs.md)
  * [Eclipse](../repos/git/share-your-code-in-git-eclipse.md)
  * [Xcode](../repos/git/share-your-code-in-git-xcode.md)
  * [IntelliJ](/previous-versions/azure/devops/java/download-intellij-plug-in)
  * [Command line](../repos/git/share-your-code-in-git-cmdline.md)

* Services
  * [Azure Pipelines](https://visualstudio.microsoft.com/team-services/)
  * Git service providers such as GitHub and Bitbucket Cloud
  * Subversion

::: moniker-end

::: moniker range=">= azure-devops-2019 < azure-devops" 

### How do I replicate a pipeline?

If your pipeline has a pattern that you want to replicate in other pipelines, clone it, export it, or save it as a template.

> [!div class="mx-imgBorder"] 
> ![all-definitions-build-action-menu-replicate-actions](media/get-started-designer/all-definitions-build-action-menu-replicate-actions-newnav.png)
>

::: moniker-end

::: moniker range="<= tfs-2018"

![Screenshot showing how to replicate a pipeline.](media/get-started-designer/all-definitions-build-action-menu-replicate-actions.png)

::: moniker-end

::: moniker range="< azure-devops"

After you clone a pipeline, you can make changes and then save it.

After you export a pipeline, you can import it from the **All pipelines** tab.

After you create a template, your team members can use it to follow the pattern in new pipelines.

> [!TIP]
>
> If you're using the **New Build Editor**, then your custom templates are shown at the bottom of the list.


### How do I work with drafts?

If you're editing a build pipeline and you want to test some changes that are not yet ready for production, you can save it as a draft.

::: moniker-end

::: moniker range="azure-devops-2019 || azure-devops-2020"

> [!div class="mx-imgBorder"] 
> ![save-as-draft](media/get-started-designer/save-as-draft-newnav.png)
>

::: moniker-end

::: moniker range="<= tfs-2018"

![Screenshot that shows saving as draft.](media/get-started-designer/save-as-draft.png)

::: moniker-end

::: moniker range="<= azure-devops-2020"

You can edit and test your draft as needed.

::: moniker-end

::: moniker range="azure-devops-2019 || azure-devops-2020"

> [!div class="mx-imgBorder"] 
> ![edit draft - DevOps 2019 and 2020](media/get-started-designer/edit-draft-newnav.png)
>

::: moniker-end

::: moniker range="tfs-2017"

![edit draft - TFS 2017](media/get-started-designer/edit-draft.png)

::: moniker-end

::: moniker range="<= azure-devops-2020"

When you're ready you can publish the draft to merge the changes into your build pipeline.

::: moniker-end

::: moniker range="azure-devops-2019 || azure-devops-2020"

> [!div class="mx-imgBorder"] 
> ![publish draft - DevOps 2019 and 2020](media/get-started-designer/publish-draft-newnav.png)
>

::: moniker-end

::: moniker range="<= tfs-2018"

![publish draft - TFS 2018](media/get-started-designer/publish-draft.png)

::: moniker-end

::: moniker range="<= azure-devops-2020"

Or, if you decide to discard the draft, you can delete it from the **All Pipeline** tab shown above.

::: moniker-end

::: moniker range=">=tfs-2013"

### How can I delete a pipeline?

To delete a pipeline, navigate to the summary page for that pipeline, and choose **Delete** from the **...** menu in the top-right of the page. Type the name of the pipeline to confirm, and choose **Delete**.

::: moniker-end

::: moniker range="<= azure-devops"

<a name="queueabuild"></a>

### What else can I do when I queue a build?

::: moniker-end

::: moniker range="<= azure-devops-2020"

You can queue builds [automatically](build/triggers.md) or manually.

When you manually queue a build, you can, for a single run of the build:

* Specify the [pool](agents/pools-queues.md) into which the build goes.

* Add and modify some [variables](build/variables.md).

* Add [demands](process/demands.md).

* In a Git repository

  - Build a [branch](../repos/git/create-branch.md) or a [tag](https://git-scm.com/book/en/v2/Git-Basics-Tagging).

  - Build a [commit](../repos/git/commits.md).

* In a TFVC repository

  - Specify the source version as a [label](../repos/tfvc/use-labels-take-snapshot-your-files.md?viewFallbackFrom=vsts) or [changeset](../repos/tfvc/find-view-changesets.md?viewFallbackFrom=vsts).

  - Run a private build of a [shelveset](../repos/tfvc/suspend-your-work-manage-your-shelvesets.md?viewFallbackFrom=vsts). (You can use this option on either a [Microsoft-hosted agent](agents/hosted.md) or a [self-hosted agent](agents/agents.md).)

::: moniker-end

::: moniker range="azure-devops"

You can queue builds [automatically](build/triggers.md) or manually.

When you manually queue a build, you can, for a single run of the build:

* Specify the [pool](agents/pools-queues.md) into which the build goes.

* Add and modify some [variables](build/variables.md).

* Add [demands](process/demands.md).

* In a Git repository

  - Build a [branch](../repos/git/create-branch.md) or a [tag](https://git-scm.com/book/en/v2/Git-Basics-Tagging).

  - Build a [commit](../repos/git/commits.md).

::: moniker-end

::: moniker range=">=tfs-2013"

### Where can I learn more about build pipeline settings?

::: moniker-end

::: moniker range=">=tfs-2013 <= tfs-2018"

To learn more about build pipeline settings, see:

* [Getting sources](repos/index.md)
* [Tasks](tasks/index.md)
* [Variables](build/variables.md)
* [Triggers](build/triggers.md)
* [Options](build/options.md)
* [Retention](policies/retention.md)
* [History](build/history.md)

::: moniker-end

::: moniker range="azure-devops"

To learn more about build pipeline settings, see:

* [Getting sources](repos/index.md)
* [Tasks](tasks/index.md)
* [Variables](build/variables.md)
* [Triggers](build/triggers.md)
* [Retention](policies/retention.md)
* [History](build/history.md)

::: moniker-end

::: moniker range="<= azure-devops"

### How do I programmatically create a build pipeline?

[REST API Reference: Create a build pipeline](../integrate/index.md)

> [!NOTE]
> You can also manage builds and build pipelines from the command line or scripts using the [Azure Pipelines CLI](/cli/azure/?view=azure-cli-latest&preserve-view=true).

<!-- ENDSECTION -->

::: moniker-end

::: moniker range="azure-devops"

### Can I use a single command at the command line to run multiple pipelines in Azure DevOps Services?

Currently, the Azure CLI and Azure APIs don't offer commands that run multiple pipelines from the command line. You can use [Azure CLI commands](/cli/azure/pipelines) to list all pipelines and definitions and provide a *single* release or build ID as a parameter. All commands are designed to work for independent runs of independent pipelines, and they require unique ID requests that allow only one, unique value. To learn about pipeline triggers, see [Specify events that trigger pipelines](./build/triggers.md).

::: moniker-end

