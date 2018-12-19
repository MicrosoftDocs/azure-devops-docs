---
title: Integrate Jenkins CI builds
description: Set up continuous integration (CI) and continuous deployment (CD) for your apps using Jenkins and Azure Pipelines
ms.prod: devops
ms.technology: devops-cicd
ms.topic: tutorial
ms.author: mlearned
author: mlearned
ms.reviewer: vijayma
ms.manager: douge
ms.assetid: CE485C57-C26A-4B9D-9D75-2FDDFB3361D6
ms.custom: "mvc, seodec18"
ms.date: 03/30/2018
monikerRange: '>= tfs-2015'
---

# Tutorial:  Integrate your Jenkins CI jobs with Azure Pipelines CD to Azure

**Azure Pipelines | TFS 2018 | TFS 2017 | TFS 2015**

::: moniker range="<= tfs-2018"
[!INCLUDE [temp](../_shared/concept-rename-note.md)]
::: moniker-end

Azure Pipelines provides integration with Jenkins so that you can use Jenkins for Continuous Integration (CI) while gaining several DevOps benefits from an Azure Pipelines release pipeline to Azure such as:

* Reusing your existing investments in Jenkins Build jobs
* Tracking work items and related code changes
* View the entire CI/CD pipeline from a central location
* Deploy various Azure services consistently via Azure Pipelines
* Enforce quality of builds to gate deployments
* Define work flows such as manual approval processes and CI triggers  

In this tutorial, you use Jenkins to build a **Java web app** that uses Maven and Azure Pipelines or Team Foundation Server (TFS) to deploy to an **Azure App Service**.

You will:

> [!div class="checklist"]
> * Get the Sample App
> * Configure Jenkins credentials and the Azure Pipelines plugin
> * Configure a Jenkins CI build with Azure Pipelines integration
> * Create a Jenkins service connection and Service Hooks in Azure Pipelines
> * Create an Azure Pipelines release pipeline for CD to Azure
> * Test the CI/CD pipeline with a pull request
> * (Optionally) Create an Azure Pipelines build pipeline to wrap the Jenkins CI job

## Before you begin

* An Azure subscription. You can get one free through [Visual Studio Dev Essentials](https://visualstudio.microsoft.com/dev-essentials/).

* A Tomcat and Java 8 based Azure Web App.  You can follow the steps for creating one [here](/java/azure/java-quickstart-maven-webapps)

* Basic Jenkins and Git knowledge.

* You need access to a Jenkins server with Maven configured. If you have not yet created a Jenkins server,
  see [Create a Jenkins master on an Azure Virtual Machine](/azure/jenkins/install-jenkins-solution-template).

* Sign in to your Azure DevOps organization (`https://dev.azure.com/{your-organization}`).
  You can get a [free Azure DevOps organization](https://go.microsoft.com/fwlink/?LinkId=307137&clcid=0x409&wt.mc_id=o~msft~vscom~home-vsts-hero~27308&campaign=o~msft~vscom~home-vsts-hero~27308).

  > [!NOTE]
  > For more information, see [Connect to Azure Pipelines](https://visualstudio.microsoft.com/docs/setup-admin/team-services/connect-to-visual-studio-team-services).

## Get the sample app

You need an app stored in a Git repository.  You use this app to build and deploy.
For this tutorial, we recommend you use [this sample Java app available from
GitHub](https://github.com/Azure-Samples/app-service-maven).  This tutorial uses a Java and Maven sample application that is configured for deployment to Azure App Service.  If you want to work with your own repository, you should configure a similar sample.

1. In Azure Pipelines, on the **Code** page for your Azure DevOps project, select the option to **Import repository**.

1. In the **Import a Git repository** dialog box, paste the following URL into the **Clone URL** text box.
  ```
  https://github.com/Azure-Samples/app-service-maven
  ```

1. Click **Import** to copy the sample code into your Git repo.

1.  Select **Clone** at the top right, and keep the **clone url** for future steps in this tutorial.

## Configure Jenkins credentials and the Azure Pipelines plugin

You must configure credentials for connecting to Azure Pipelines, and a plug in for **VS Team Services Continuous Deployment** on your Jenkins server.  When using credentials to connect to Azure Pipelines, it is a best practice to use a **personal access token (PAT)**.  You also need to create a Jenkins credential to use in your Jenkins build jobs.

  > [!NOTE]
  Ensure the PAT you use for the following steps contains the **Release (read, write, execute and manage), Code (read), Build (read and execute) permissions in Azure Pipelines**.
 
1. Create a PAT in your Azure DevOps account. Jenkins requires this information to access your Azure DevOps organization.  Ensure you **store** the token information for upcoming steps in this section.
  Read [How do I create a personal access token for Azure Pipelines and TFS](../../organizations/accounts/use-personal-access-tokens-to-authenticate.md) to learn how to generate a PAT, or use an existing PAT if you have one.

1. Open your Jenkins account and select **Credentials**, **System**, and then choose **Add Domain**.

1. Enter a **name**, **description**, and then select **Add** **hostname**.

1. In the **Include** text box, enter ```\dev.azure.com/*``` to enable this credential for all Azure DevOps organizations.  You can optionally enter your specific Azure DevOps organization.

1. Select **Ok**.  You will see a message about empty credentials.  Select the link for **adding some credentials**.

1. For **Kind**, choose **Username with password**.  Enter the **Username** and the **PAT** you created earlier for **Password**.  Select **Ok**.

1. **Navigate** back to the **Jenkins** home page.

1. Choose **Manage Jenkins**.

1. In the **Manage Jenkins** page, choose **Manage Plugins**.

1. Filter the **available list** to find the **VS Team Services Continuous Deployment** plug in and choose the **Install without restart** option.  You can find additional information about the **Azure Pipelines plugin** [here](https://github.com/jenkinsci/tfs-plugin).

## Configure a Jenkins CI build with Azure Pipelines integration

You create a Jenkins build job to use the source code stored in your Azure Pipelines repository and execute a basic build.  Ensure your Jenkins server has **Maven** installed and configured.  You also create triggers to enable CI builds when code changes are pushed to the repository, and a CD trigger to initiate an Azure Pipelines release after the Jenkins build completes via a post build action.

1. Navigate to your Jenkins server.  Click **New Item**.  Enter an **item name**.

1. Choose **Freestyle project**.  Select **OK**.

1. In the **Source Code Management** tab, select **Git** and enter the **clone url** you saved earlier for the Azure Pipelines **Repository URL** and the branch containing your app code. If you are using Team Foundation Server, you can choose the option for **Team Foundation Version Control (TFVC)**.   
    ![Add a repo to your build](_img/integrate-jenkins-vsts-cicd/jenkins-git.png)

1. Select the **Credentials** drop down and choose the credential you created earlier.  You should successfully authenticate to your Azure Pipelines repository and not receive errors before continuing.  If you see errors, you likely have an issue with your credentials and Azure Pipelines **PAT**.

1. Select the **Build Triggers** tab, then **tick** the check boxes for **Build when a change is pushed to TFS/Team Services** and **Build when a change is pushed to a TFS pull request**.  These two options rely on **Azure Pipelines Service Hooks** which you create in the next section.

1. Select the **Build** tab, **Add build step**, and then choose **Invoke top-level Maven targets**.

1. Select **Advanced...**.  Enter **clean package** for **Goals**, and then enter **pom.xml** for **POM**.

1. Select the **Post-build Actions** tab.  Choose **Add post-build action**, then select **Archive the artifacts**.

1. For **Files to archive** enter the following:  
 	 ```
  	target/*.war
  	```

1. Select the **Post-build Actions** tab.  Choose **Add post-build action**, then select **Trigger release in TFS/Team Services**.

1. Enter a **collection URL**. An example is 
`http://dev.azure.com/{your-organization}/DefaultCollection`

1. Enter the **project** and choose a **release pipeline** name. Store the **release pipeline** name since it is needed in later steps of this tutorial.

1. Enter the **username** and **PAT** you created earlier.
 
1. **Save** the Jenkins project.

## Create a Jenkins service connection and Service Hooks in Azure Pipelines

You configure a Jenkins service connection to allow Azure Pipelines to connect to your Jenkins server.  You must also configure two Jenkins service hooks so you can execute CI builds via automated triggers for both simple commits as well as pull requests to your Azure Repos Git repository.

1. Open the **Services** page in Azure Pipelines, open the **New service connection** list, and choose **Jenkins**.
    ![Add a Jenkins endpoint](_img/integrate-jenkins-vsts-cicd/add-jenkins-endpoint.png)

1. Enter a name for the connection.

1. Enter the URL of your Jenkins server, and if using **http** tick the **Accept untrusted SSL certificates** option.  An example URL is:
 	`http://{YourJenkinsURL}.westcentralus.cloudapp.azure.com`

1. Enter the **user name and password** for your Jenkins account.

1. Choose **Verify connection** to check that the information is correct.

1. Choose **OK** to create the service connection.

1. From the **Service Hooks** page in Azure Pipelines, Select the **+** to add a new service and choose **Jenkins**.  Select **next**.

1. Choose **Code pushed** for the type of event trigger.  Select your **code repository** that contains the sample application you imported earlier.  Select **Next**.

1. Enter the URL of your Jenkins server.  An example is below.
 	`http://{YourJenkinsURL}.westcentralus.cloudapp.azure.com`

1. Enter the **user name and password** for your Jenkins account.

1. Select the Jenkins build you created earlier.

1. Choose **Test** to check that the information is correct.

1. Choose **Finish** to create the service connection.

1. Repeat the steps in this section to create another **service hook** for the **pull request merge attempted** trigger type.  This will allow either simple commits to the repository as well as pull requests to both trigger the Jenkins build.

## Create an Azure Pipelines release pipeline for CD to Azure

A release pipeline specifies the process Azure Pipelines executes to deploy the app.  In this example, you deploy your app that originates from the Jenkins CI system.  You deploy to an Azure App Service running Tomcat and Java.

To create the release pipeline in Azure Pipelines:

1. Open **Releases** in Azure Pipelines, and choose **Create release pipeline**.

1. Select the **Empty** template by choosing **Start with an empty pipeline**.

1. In the **Artifacts** section, click on **+ Add Artifact** and choose **Jenkins** for **Source type**. Select your Jenkins service connection. Then select the Jenkins source job and choose **Add**.

1. Next to the **1 job, 0 stages** link, select the **+** on the **Agent Job** to add a task to the job.

1. Search for the **Azure App Service Deploy** task. Select **Add** to add the task.

1. Choose your **Azure Subscription**.  If you do not have an existing Azure connection in Azure Pipelines, you can follow the steps [here](../library/connect-to-azure.md) to create one.

1. Enter a name for your existing Web App for the **App Service name**.  This **name** must match your existing **Web App name** from the prerequisites.

1. For the **Package or folder** setting, select the ellipsis to browse, and then select your **.war artifact**.

1. Ensure the **name** for your release pipeline matches the same name you chose earlier during the **Create a Jenkins service connection and Service Hooks in Azure Pipelines** steps.

1. Click **Save**, and then click **OK** to save the release pipeline.

## Test the CI/CD pipeline with a pull request

You can initiate the CI build and the subsequent CD deployment to Azure by completing a pull request into your master branch.  The Jenkins build will initiate due to the service hook you set up earlier, and the Jenkins post build action will initiate an Azure Pipelines release which will deploy your app to the Azure App Service.

1. Navigate to **Code** in Azure Repos, then select your **repository**.

1. Select **New branch** to create a branch from the master branch.  Enter a **name** for your new branch, and then select **Create branch**.

1. Select your new branch, then navigate to the **src/main/webapp/index.jsp** file.

1. Select **Edit**, then make a change to the **Title** for the **index.jsp page**, and then **Commit** your changes.

1. Select **Pull Requests**, then select **New Pull Request**.  Select **Create** to issue a pull request from your branch to master.

1. Select **Approve**, then select **Complete**, then **Complete Merge**.  This code change will initiate a CI build in Jenkins.

1. Navigate to your **Jenkins dashboard** and examine the build that is executing.  Once it finishes, you can navigate to Azure Pipelines to watch the **Release Pipeline** execute.  In a few moments your latest changes will be deployed to the **Azure App service.** 

You are now using Jenkins CI builds with an Azure Repos code repository and an Azure Pipelines release pipeline to perform CI/CD to Azure App Service.  You can easily track your code changes and deployments via the rich reporting capabilities of Azure Pipelines, and leverage Jenkins to execute CI builds.

## (Optionally) Create an Azure Pipelines build pipeline to wrap the Jenkins CI job

There is an additional approach (pattern) possible when integrating Jenkins and Azure Pipelines CI/CD.  You can optionally create an Azure Pipelines build pipeline to wrap the Jenkins build job, which will help you monitor the Jenkins job from Azure Pipelines.  This pattern works slightly differently by using the built-in Azure Pipelines build capabilities to trigger the pipeline when new code is pushed to the repository.  The approach for using both Azure Pipelines build and Jenkins together requires both Azure Pipelines build and Jenkins agents.  To enable this pattern, you will modify a few items for the Azure Pipelines and Jenkins CI/CD pipeline that you created in earlier steps.

1. Navigate to the Jenkins build job you created earlier.

1. Select the **Build Triggers** tab, then remove the **tick** for the check boxes for **Build when a change is pushed to TFS/Team Services** and **Build when a change is pushed to a TFS pull request**.  These two options are not needed for this pattern since the Azure Pipelines build pipeline has the ability to trigger the CI/CD pipeline when new code is pushed to the repo.

1. Navigate to your **Azure DevOps organization**.

1. Open **Builds** in Azure Pipelines, and choose **+ New** to create a new build pipeline.

1. Ensure **Azure Repos Git** is selected for the source, and then select **Continue**.

1. Search for the **Jenkins** template, and then select **Apply**.

1. Select **Pipeline**, and then select **Hosted VS 2017** for the **Agent pool**.

1. For the **Job name** parameter, enter the **Jenkins Job name** you created in the earlier steps of this tutorial.  This name must match exactly.  This will allow you to queue the Jenkins job and download the artifacts it produces.

1. Select the **Jenkins service connection**.
 
1. Select **Get sources**, and then check the **Don't sync sources** option.  Since the Jenkins job is handling fetching the sources from Azure Pipelines, we do not need the Azure Pipelines build pipeline to perform this step.  However, this step will configure a local working directory on the Azure Pipelines build agent.

1. Ensure the **Report build status** option is enabled so the build status will be reported on the code tab for the Azure Pipelines repository.

1. Select the **Jenkins** build tasks under **Job 1**, and then examine the additional options provided by the tasks.  There is a task to queue the Jenkins job, download the artifacts produced by the job, and then finally to publish the artifacts which can later be used by the Azure Pipelines release pipeline.

1. Select the **Queue Jenkins Job** task.  **Capture console output and wait for completion** is enabled to help provide the Jenkins logging information to Azure Pipelines, and also it will cause the Azure Pipelines build to wait for this step to complete successfully in Jenkins before proceeding.  This causes the Azure Pipelines build to succeed for fail based on the Jenkins result.  **Capture pipeline output and wait for completion** is similarly enabled to ensure Azure Pipelines succeeds or fails based on the entire Jenkins pipeline result.  These two options help you view Jenkins logging information in a single place (Azure Pipelines) for the entire CI/CD pipeline.

1. Open **Releases** in Azure Pipelines, and choose the **release pipeline** you created earlier. Select the **ellipsis** and choose **Edit**.

1. **Delete** the artifact you used earlier.  **Add** a new artifact by choosing your Azure Pipelines build pipeline.  The Azure Pipelines build pipeline will now provide the artifact for the CD part of the pipeline.

1. In the **Artifacts** section, click on **+ Add Artifact** and choose **Jenkins** for **Source type**. Select your Jenkins service connection. Then select the Jenkins source job and choose **Add**.

You can now test the pipeline (as you did on earlier steps) with a pull request or by pushing new code to your branch.  An Azure Pipelines build will initiate, a Jenkins job executes, and an Azure Pipelines release pipeline will deploy your changes to Azure.

## Next Steps

In this tutorial, you automated the deployment of an app to Azure using Jenkins for the CI build and Azure Pipelines for release. You learned how to:

> [!div class="checklist"]
> * Get the Sample App
> * Configure Jenkins credentials and Azure Pipelines plugin
> * Configure a Jenkins CI build with Azure Pipelines integration
> * Create a Jenkins service connection and service hooks in Azure Pipelines
> * Create an Azure Pipelines release pipeline for CD to Azure
> * Test the CI/CD pipeline with a pull request
> * (Optionally) Create an Azure Pipelines build pipeline to wrap the Jenkins CI job

> [!div class="nextstepaction"]
> [Improve code quality with branch policies](../../repos/git/branch-policies.md)
