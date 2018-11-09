---
title: Use Azure Pipelines
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
# Use Azure Pipelines

You can use either [YAML](../get-started-yaml.md) or the [visual designer](../get-started-designer.md) to define your pipelines. 

**Azure Pipelines**

You can either use [YAML](../get-started-yaml.md) to define your pipelines or use the [visual designer](../get-started-designer.md) to do the same. 

When you use YAML, you define your pipeline mostly in code (a YAML file) alongside the rest of the code for your app. 
When you use the visual designer, you define a *build pipeline* to build and test your code, and then to publish artifacts. You also define a *release pipeline* to consume and deploy those artifacts to deployment targets.

## Use Azure Pipelines with YAML

You can configure your pipelines in a YAML file that exists alongside your code.

1. Configure Azure Pipelines to use your Git repo.
2. Edit your `azure-pipelines.yml` file to define your build.
3. Push your code to your version control repository. This action kicks off the default trigger to build and deploy and then monitor the results.
4. Your code is now updated, built, tested, and packaged. It can be deployed to any target.

![Pipelines YAML intro image ](../_img/pipelines-image-yaml.png)

### Benefits of using YAML

* The pipeline is versioned with your code and follows the same branching structure. You get validation of your changes through code reviews in pull requests and branch build policies.
* Every branch you use can modify the build policy by modifying the `azure-pipelines.yml` file.
* A change to the build process might cause a break or result in an unexpected outcome. Because the change is in version control with the rest of your codebase, you can more easily identify the issue.

If you think the YAML workflow is best for you, [create your first pipeline by using YAML](../get-started-yaml.md).

## Use Azure Pipelines in the visual designer

You can create and configure your build and release pipelines in the Azure DevOps Services web portal with the visual designer. 

1. Configure Azure Pipelines to use your Git repo.
2. Use the Azure Pipelines visual designer to create and configure your build and release pipelines.
3. Push your code to your version control repository. This action triggers your pipeline and runs tasks such as building or testing code.
5. The build creates an artifact that's used by the rest of your pipeline to run tasks such as deploying to staging or production.
6. Your code is now updated, built, tested, and packaged. It can be deployed to any target.

![Pipelines designer intro image](../_img/pipelines-image-designer.png)

     
### Benefits of using the visual designer

The visual designer is great for users who are new to the world of continuous integration (CI) and continuous delivery (CD).

* The visual representation of the pipelines makes it easier to get started. 
* The visual designer is located in the same hub as the build results. This location makes it easier to switch back and forth and make changes.

If you think the designer workflow is best for you, [create your first pipeline by using the visual designer](../get-started-designer.md).

