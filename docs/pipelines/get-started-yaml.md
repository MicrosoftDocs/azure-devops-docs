---
title: 创建你的第一个pipeline
titleSuffix: Azure Pipelines 和 TFS
description: 使用Azure DevOps服务和Team Foundation Server（TFS）来创建你的第一个pipeline
ms.prod: devops
ms.technology: devops-cicd
ms.topic: quickstart
ms.assetid: 5A8F1A12-72BF-4985-9B27-65CBC08462F7
ms.manager: douge
ms.author: alewis
author: andyjlewis
ms.date: 8/23/2018
monikerRange: 'vsts'
---

# 创建你的第一个pipeline

**Azure Pipelines**

这是一个使用Azure Pipelines构建Github仓库的分步指南。

## 先决条件

[!INCLUDE [include](_shared/ci-cd-prerequisites-vsts.md)]

* 你需要一个GitHub账户，在那里你可以创建一个仓库。

## 获取示例代码

你可以使用Azure Pipelines来构建任何语言编写的应用程序。
根据你的选择从下列语言选取一个示例仓库并把它fork到你的Github账户里：

| 编程语言 | 包含示例应用程序的仓库 |
|----------------------|----------------------------|
| .NET Core | https://github.com/MicrosoftDocs/pipelines-dotnet-core |
| Go | https://github.com/MicrosoftDocs/pipelines-go |
| Java | https://github.com/MicrosoftDocs/pipelines-java |
| Node.js | https://github.com/MicrosoftDocs/pipelines-javascript |
| Python | https://github.com/MicrosoftDocs/pipelines-python-django |

现在在你的Github账户里应该有一个示例应用程序了。

## 获取你的第一次构建

1. 登录到你的Azure DevOps组织并导航到你的项目。

1. 在你的项目里，导航到 **Pipelines** 这个页面。 然后选择 **New pipeline**。

1. 按照向导的步骤来完成操作，首先选择**GitHub**作为你的源码的位置。

   ![选择 GitHub](_img/get-started-yaml/new-pipeline.png)

1. 第二步，选择**Authorize**以便**使用OAuth进行授权**。你可能会被重定向到Github的登陆页面。输入你的Github凭证。

1. 当你被重定向回Azure Pipelines的时候，选择**sample app**这个仓库。

1. 第三步，Azure Pipelines会分析你的仓库里的代码。如果你的仓库已经包含了`azure-pipelines.yml`文件，所有的示例仓库都应该是这样的，那么就可以跳过这一步。否则，Azure Pipelines会基于你仓库里的代码推荐一个起始模板。

1. 最后一步，你将看到将要使用的YAML文件。

1. 选择 **Save and run**。选择选项 **Commit directly to the master branch**。

1. 现在YAML文件就被推送到你的GitHub仓库了，一次新的构建就自动开始了。

1. 等待构建结束。

## 获取状态徽章

1. 在Azure Pipelines里，转到Build页面来查看pipelines列表。

1. 选择为你创建的pipeline。

1. 在管道的右键菜单里，选择**Status badge**。

   ![Status badge](_img/get-started-yaml/status-badge.png)

1. 从状态徽章面板里复制示例的Markdown。

## 将状态徽章添加到仓库

在GitHub中执行以下步骤：

1. 查看你仓库根目录的 `azure-pipelines.yml` 文件。这个YAML文件里包含着pipeline的说明。下次你在该仓库里修改任意文件的时候，Azure Pipelines将会自动构建你的代码。

1. 回到文件列表并选择`Readme.md`文件。然后选择**Edit**。

1. 将您在上一节中复制的状态徽章Markdown粘贴到`Readme.md`文件的开头。

1. 提交master分支的变更。

1. 请注意，状态徽章会出现在你的仓库的描述中。

返回到Azure Pipelines，可以看到一个新的构建已在排队。它的状态可能是未启动或正在运行。

## 后续步骤

你刚刚学会了Azure Pipelines基本的使用知识。现在你已经准备好进一步配置pipeline以便运行测试、发布测试结果、创建容器镜像、甚至部署应用到云服务中。 根据你选择的语言选定一条路线：

* [.NET Core](languages/dotnet-core.md)
* [Docker](languages/docker.md)
* [Go](languages/go.md)
* [Java](languages/java.md)
* [Node.js](languages/javascript.md)
* [Python](languages/python.md)

要调整你的工作的超时设置，请查阅 [Timeouts](process/phases.md#timeouts)。

要在容器里运行你的pipeline，请查阅 [Container jobs](process/container-phases.md)。

有关构建GitHub仓库的详细信息， 请查阅 [Build GitHub repositories](repos/github.md)。
