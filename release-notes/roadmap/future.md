---
title: Azure DevOps Future Features
author: gloridelmorales
ms.author: glmorale
ms.date: 10/11/2022
ms.topic: article
ms.service: azure-devops
ms.subservice: azure-devops-release-notes
description: Azure DevOps Future Features
hide_comments: true
---
# Azure DevOps Future Features

## Admin

### Support Azure Managed Identities and Service Principals

Allow apps hosted on Azure to use managed identities and service principals to integrate with Azure DevOps through REST APIs and client libraries. 

**Important Milestones (last updated 08/29/22):**

* **September 2022:** Internal testing for select Microsoft customers with approved use cases.
* **FY22Q4:** Private Preview for Microsoft-only parties. Email [Angel Wong](mailto:wonga@microsoft.com) with the survey questions below completed.
* **FY23Q1 (TBC):** Public Preview to all internal and external customers
* **TBD:** Managed Identities and Service Principal support GA

For any other questions do not hesitate to reach out to me over email.

--

If you'd like to be considered as part of the private preview, please share your answer to these questions to wonga@microsoft.com.

1. What company/organization are you a part of?
2. Could you please provide a brief description of the tools/services you use today that need to authenticate against ADO? What authentication mechanism(s) are you using today? 
3. Do you currently use Managed Identities to authenticate against any other Azure Resources?  
4. What would you do with Managed Identity(s) if you could use them to authenticate against ADO? What does that workflow look like?
5. Can you provide a list of what APIs you might be using? See the [ADO REST API documentation](/rest/api/azure/devops/?view=azure-devops-rest-7.1&preserve-view=true) for help.
6. What kind of scopes would be useful for you in helping your MI accomplish what it needs to do? See [this list of ADO OAuth scopes](/azure/devops/integrate/get-started/authentication/oauth?view=azure-devops#scopes&preserve-view=true), as a jumping off point.
7. Is there anything else that might be helpful for us to know about your Managed Identity user scenario?
8. What is the name of your Azure DevOps organization(s) that you would like this feature enabled for?

### Auditing GA

Auditing service available in all geographies and to all customers.

### Conditional Access Policy support for device state

Azure DevOps to honor any conditional access policies that include [devihttps://docs.microsoft.com/azure/active-directory/conditional-access/concept-conditional-access-conditions#device-state-previewce state]conditions. 

### Access events for PAT, SSH will be available in the Auditing Log

Usage of (Personal Access Tokens) PATs, SSH keys, or OAuth for signing in to the service for an API call will be added to the Auditing log.

## Artifacts

### Package promote task in Azure Pipelines

Package promote task in Azure Pipelines

### Deprecate old Azure Artifacts tasks in Azure Pipelines and default to new, auth-only tasks

We get a lot of support requests and feedback from our current Azure Artifacts tasks in Azure Pipelines (NuGet, npm, Maven, etc.). Having these large, bulky tasks with built-in versions of command-line tools can create a lot of problems:
1. When something fails, it's hard to know if it's the command-line tools, the authentication, the restore/publish, etc.
2. It's hard to keep the tasks updated with the latest and greatest releases of command line tools, so we miss out on new functionality (like skipping duplicates in NuGet/Maven)
The solution we landed on was to create auth-only tasks that users can set up at the beginning of their pipelines. After successfully authenticated, users can use custom scripts to publish/restore packages. 

We now have the following lightweight, auth-only tasks in GA that we recommend customers to use. The plan is to deprecate the old unreliable tasks in the future. 
1. Maven Authenticate 
2. NuGet Authenticate
3. Python Pip Authenticate
4. Python Twine Upload Authenticate

## Boards

### Work Item support for Markdown editing

All long text fields (Description, Repo Steps, etc.) and the Work Item discussion will support Markdown editing.

### Improve GitHub Connection Experience

Improve the GitHub connection experience for Enterprise customers by supporting thousands instead of hundreds of repos and making it easier to add and delete repos to the connection.

## Pipelines

### Support Flexible Orchestration mode in scale set agent pools

A common complaint with scale set agent pools is that the time it takes to initiate scaling events is too long. In fact, Azure Pipelines checks if it needs to scale out a pool every few minutes. However, it cannot perform that task if there is a prior operation already in progress on the VM scale set. As an example, if the VM scale set is deleting VMs from an earlier request to scale in, then Azure Pipelines cannot issue a new request to scale out unless that previous operation is complete.

To address this problem, Azure Pipelines needs to rely on a new preview feature of VM scale sets called [Flexible Orchestration](/azure/virtual-machine-scale-sets/virtual-machine-scale-sets-orchestration-modes). As this feature comes out of preview in VM scale sets, Azure Pipelines will start making use of it and speed up its operations.

### Support Pipelines App with GitHub Enterprise

The integration between Azure Pipelines and GitHub is facilitated by a [GitHub App](https://github.com/marketplace/azure-pipelines). This app makes it easy to set up pipelines for a GitHub repository and to deliver events (CI, PR, Comment, etc) from GitHub to Azure Pipelines. The app also enhances the security of pull requests using [comment triggers](https://github.com/marketplace/azure-pipelines).

However, this app does not work when using Azure Pipelines with GitHub Enterprise. The goal of this work is to fix that.