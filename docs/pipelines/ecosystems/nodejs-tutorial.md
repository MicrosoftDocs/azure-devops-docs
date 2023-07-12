---
title: 'Tutorial: Automate Node.js deployments with Azure Pipelines'
description: Tutorial that shows how to create an Azure Pipeline that builds and deploys a basic Node.js application to Azure App Service.
ms.topic: tutorial 
ms.date: 07/12/2023
---

# Tutorial: Automate Node.js deployments with Azure Pipelines

In this tutorial, you'll learn how Azure and Azure DevOps support Node.js applications by building an Azure DevOps pipeline that deploys a Node.js app to Azure App Service. With Azure DevOps Pipelines, you'll be able to deploy your Node.js app automatically and reduce the risk of errors and downtime with continuous integration and continuous delivery. 

In this tutorial, you learn how to:

> [!div class="checklist"]
> * [Fork a sample application in GitHub](#fork-the-sample-application)
> * [Create Azure App Service resources](#create-azure-app-service-resources)
> * [Select the Azure Pipelines Node.js Express Web App to Linux on Azure Azure DevOps template](#create-the-pipeline-from-a-template)
> * [Deploy a basic Node.js application to Azure App Service](#deploy-the-nodejs-app-to-azure-app-service)


## Prerequisites

- An [Azure subscription](https://azure.microsoft.com/free/?azure-portal=true). You can get started with Azure for free.
- A GitHub account where you can create a repository. [Create one for free](https://github.com).
- An [Azure DevOps organization](/azure/devops/pipelines/get-started/pipelines-sign-up) with access to [parallel jobs](/azure/devops/pipelines/licensing/concurrent-jobs). If your organization doesn't have access to parallel jobs, you can request parallel jobs for free for public or private projects using [this form](https://aka.ms/azpipelines-parallelism-request). Your request takes 2-3 business days.
- Familiarity with [Azure App Service](/azure/app-service/) and [Azure DevOps](/azure/devops/). 


## Fork the sample application

To fork the sample application, you'll need to sign in to GitHub, go to the sample repository, and create a fork.

1. Go to [GitHub](https://github.com), and sign in.

1. Navigate to the [Node.js sample](https://github.com/Azure-Samples/nodejs-docs-hello-world) project.

1. Select **Fork**.

    :::image type="content" source="media/nodejs-tutorial/select-fork.png" alt-text="Screenshot of GitHub to select the Node.js project to fork. ":::
    
1. Select **Create fork** to create a fork in your repository.

    :::image type="content" source="media/nodejs-tutorial/create-fork.png" alt-text="Screenshot of create fork in GitHub. ":::

1. Verify that you now have a version of the repository in your GitHub account by checking the URL path in a browser. Your URL should be `https://github.com/{GitHub User}/nodejs-docs-hello-world`.


## Create Azure App Service resources
TODO: Add introduction sentence(s)
[Include a sentence or two to explain only what is needed to complete the procedure.]
TODO: Add ordered list of procedure steps
1. Step 1
1. Step 2
1. Step 3

## Create the pipeline from a template
TODO: Add introduction sentence(s)
[Include a sentence or two to explain only what is needed to complete the procedure.]
TODO: Add ordered list of procedure steps
1. Step 1
1. Step 2
1. Step 3

## Deploy the Node.js app to Azure App Service
TODO: Add introduction sentence(s)
[Include a sentence or two to explain only what is needed to complete the procedure.]
TODO: Add ordered list of procedure steps
1. Step 1
1. Step 2
1. Step 3



## Clean up resources

If you're not going to continue to use this application, delete
<resources> with the following steps:

1. From the left-hand menu...
2. ...click Delete, type...and then click Delete

<!-- 9. Next step/Related content ------------------------------------------------------------------------ 

Optional: You have two options for manually curated links in this pattern: Next step and Related content. You don't have to use either, but don't use both.
  - For Next step, provide one link to the next step in a sequence. Use the blue box format
  - For Related content provide 1-3 links. Include some context so the customer can determine why they would click the link. Add a context sentence for the following links.

-->

## Next step

TODO: Add your next step link(s)

> [!div class="nextstepaction"]
> [Write concepts](article-concept.md)

<!-- OR -->

## Related content

TODO: Add your next step link(s)

- [Write concepts](article-concept.md)

<!--
Remove all the comments in this template before you sign-off or merge to the main branch.
-->
