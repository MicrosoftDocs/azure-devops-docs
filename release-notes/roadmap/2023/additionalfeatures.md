---
title: Azure DevOps Additional Features
author: gloridelmorales
ms.author: glmorale
ms.date: 9/15/2022
ms.topic: article
ms.service: azure-devops
ms.subservice: azure-devops-release-notes
description: Azure DevOps Additional Features
hide_comments: true
---
# Additional Features

## Admin
### Associate all public APIs with PAT scopes

Using scopes is a great way to limit the risk posed by [personal access tokens](/azure/devops/organizations/accounts/use-personal-access-tokens-to-authenticate?toc=%2fazure%2fdevops%2forganizations%2ftoc.json&bc=%2fazure%2fdevops%2forganizations%2fbreadcrumb%2ftoc.json&view=azure-devops&tabs=preview-page&preserve-view=true) (PATs). We even have a policy allowing administrators to [restrict the creation of full-scoped PATs altogether](/azure/devops/organizations/accounts/manage-pats-with-policies-for-administrators?view=azure-devops#restrict-creation-of-full-scoped-pats&preserve-view=true). 

However, some of our public APIs are currently unassociated with a PAT scope and can only be used with “full-scoped” PATs. Because of this, restricting the creation of full-scoped PATs might block some workflows. We're working to identify, document, and associate all our public APIs with the appropriate scopes.

## Pipelines

### Pipelines scalability improvements

The usage of YAML pipelines continues to increase among our top customers. At the same time, the complexity of their pipelines also continues to increase in terms of number of stages, jobs, steps, conditions, checks, and templates. This results in much larger orchestration graphs (a data structure that we use internally to track each pipeline run). Another reason for the explosion in these graph sizes is the move from classic release pipelines to YAML pipelines. In classic releases, each stage was handled as a separate orchestration graph. In YAML pipelines, the entire run is a single orchestration graph.

As a result of various architectural choices we made over many years, we have been running into a few support cases for some of our largest customers. These problems arise only when you run several thousands of jobs each day and if the complexity of the orchestration graphs is high. In this effort, we will work on some architectural improvements to improve the scalability of the orchestration engine. This should help reduce bottlenecks in:

* Running hundreds of activity nodes per pipeline run
* Accessing the database to store or retrieve large graphs
* Running a large number of retries on checks in between stages