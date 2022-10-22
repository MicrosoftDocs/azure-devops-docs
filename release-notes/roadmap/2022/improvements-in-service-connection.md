---
title: Improvements in service connection usage history
author: gloridelmorales
ms.author: glmorale
ms.date: 10/12/2022
ms.topic: article
ms.service: azure-devops
ms.subservice: azure-devops-release-notes
description: Improvements in service connection usage history
hide_comments: true
---

# Improvements in service connection usage history

Service connections represent resources that are of importance to customers. For instance, they carry credentials to production environments. One can review the usage history of a service connection in the user interface. However, customers reported the following gaps in that usage history. We will be addressing these gaps and make the usage history more reliable.

- Azure service connections can be used in a variable group - for example, to connect to Azure Key Vault. When a pipeline uses that variable group, the usage is not recorded against the service connection.

- When you use different service connections in a multi-stage YAML pipeline, the usage is recorded against the service connections only when the pipeline completes. Customers would like to know of the usage as soon as the connection is used, even when the pipeline is in progress.