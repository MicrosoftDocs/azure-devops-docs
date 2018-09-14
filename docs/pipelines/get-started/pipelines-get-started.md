---
title: How to use Azure Pipe
titleSuffix: Azure DevOps Services
description: Learn the basics about Azure Pipelines and how to use it to automatically build and release code.
ms.prod: devops
ms.technology: devops-cicd
ms.topic: overview
ms.manager: douge
ms.author: douge
ms.date: 07/06/2018
monikerRange: 'vsts'
---

# How to use Azure Pipelines

You can either use [YAML](../get-started-yaml.md) to define your pipelines or use the [visual designer](../get-started-designer.md) to do the same. 

When you use YAML, you define your pipeline mostly in code (a YAML file) alongside the rest of the code for your app. 
When you use the visual designer, you define a **build pipeline** to build and test your code, and then to publish artifacts. You also define a **release pipeline** to consume and deploy those artifacts to deployment targets.

## Use Azure Pipelines with YAML

You can configure your pipelines in a YAML file that exists alongside your code.

1. Configure Azure Pipelines to use your Git repo.
2. Edit your `azure-pipelines.yml` file to define your build.
3. Push your code to your version control repository, this will kick off the default trigger to build and deploy, and monitor the results.
4. Your code is now updated, built, tested, and packaged and can be deployed to any target.

![Pipelines YAML intro image ](../_img/pipelines-image-yaml.png)

### Benefits of using YAML

* The pipeline is versioned with your code and follows the same branching structure as your code, so you get validation of your changes through code reviews in pull requests and branch build policies.
* Every branch you use can modify the build policy by modifying the `azure-pipelines.yml` file.
* If a change to the build process causes a break or results in an unexpected outcome, you can much more easily identify the issue because the change is in version control with the rest of your codebase.

If you think the YAML workflow is best for you, take the next step by [creating your first pipeline using YAML](../get-started-yaml.md).

## Use Azure Pipelines in the visual designer

You can create and configure your build and release pipelines in the Azure DevOps web portal with the visual designer. 

1. Configure Azure Pipelines to use your Git repo.
2. Use the Azure Pipelines visual designer to create  and configure your build and release pipelines.
3. Push your code to your version control repository which triggers your pipeline, running any tasks such as building or testing code.
5. The build creates an artifact that is used by the rest of your pipeline, running any tasks such as deploying to staging or production.
6. Your code is now updated, built, tested, and packaged and can be deployed to any target.

![Pipelines designer intro image](../_img/pipelines-image-designer.png)

     
### Benefits of using the visual designer

The visual designer is great for users that are new to the world of CI and CD.

* The visual representation of the pipelines makes it easier to get started. 
* The visual designer is located in the same hub as the build results, making it easier to switch back and forth and make changes if needed.

If you think the designer workflow is best for you, take the next step by [creating your first pipeline using the visual designer](../get-started-designer.md).

