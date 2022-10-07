---
title: Credential-free pipelines
author: gloridelmorales
ms.author: glmorale
ms.date: 10/11/2022
ms.topic: article
ms.service: azure-devops
ms.subservice: azure-devops-release-notes
description: Credential-free pipelines
hide_comments: true
---

### Credential-free pipelines

Pipelines often depend on service connections that store secrets. A common use case for Pipelines is to deploy applications to Azure resources using an ARM service connection. Each connection stores either the Azure service principal's password or certificate in Azure DevOps. The main drawbacks of storing these credentials in Azure DevOps are (a) You will have to update the service connections in Azure DevOps every time you update them in Azure (b) Tasks in a pipeline will have access to these secrets. Many customers would like to avoid storing secrets in Azure DevOps. They do not want the trouble of rotating these secrets on a regular basis. And, they want to reduce the risk of these secrets getting exposed.

One way to do this is by using managed identity in ARM service connections. However, this approach only works with self-hosted agents or scale-set agents. As part of this work, we will explore how to make managed identity work with Microsoft-hosted agents. The goal of the resulting scheme is to promote credential-free pipelines that are simply based on managed identity, whose resource access can be managed within AAD.

The solution proposed as part of this work will be specific to Azure service connections and will not work for other types of service connections.