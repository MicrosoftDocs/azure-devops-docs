---
title: Enable DevSecOps with Azure and GitHub
titleSuffix: DevSecOps
description: Use Azure and GitHub tools to build and deliver applications with a focus on security in every step of the process.
ms.custom: boards-kanban 
ms.technology: devops-agile
ms.author: mijacobs
author: mijacobs
ms.topic: conceptual
ms.date: 05/14/2020
monikerRange: '>= tfs-2013'
---

# Enable DevSecOps with Azure and GitHub

DevSecOps, sometimes called Secure DevOps, builds on the principles of [DevOps](https://azure.microsoft.com/overview/what-is-devops/) but adds an increased focus on security. With DevSecOps, security becomes a central part of the entire lifecycle of the application, and it’s required that every team and person working on an application considers security. We call this concept “shift-left security”: moving the security thinking from something that is only for production, to something that’s relevant from the early stages of planning and development. 

Microsoft and GitHub offer solutions to have confidence in the code you’re running in production, by inspecting your code and allowing its traceability down to the work items and insights on the third-party components that are in use. 

## Secure your code with GitHub

With code scanning, developers can quickly and automatically analyze the code in a GitHub repository to find security vulnerabilities and coding errors.

You can use code scanning to find, triage, and prioritize fixes for existing problems in your code. Code scanning also prevents developers from introducing new problems. You can schedule scans for specific days and times, or trigger scans when a specific event occurs in the repository, such as a push. You can also track your repository's dependencies and receive security alerts when GitHub detects vulnerable dependencies.

- [Scan your code with CodeQL and token scanning](https://help.github.com/github/finding-security-vulnerabilities-and-errors-in-your-code/automatically-scanning-your-code-for-vulnerabilities-and-errors)  
- [Manage security advisories for your projects](https://help.github.com/github/managing-security-vulnerabilities/managing-security-vulnerabilities-in-your-project)  
 - [Secure your code's dependencies](https://help.github.com/github/managing-security-vulnerabilities/managing-vulnerabilities-in-your-projects-dependencies), including automated security updated (Dependabot)

## Track your work with Azure Boards  

With the Azure Boards web service, teams can manage their software projects. It provides a rich set of capabilities including native support for Scrum and Kanban, customizable dashboards, and integrated reporting.

- [Plan and track work with Azure Boards](../boards/get-started/plan-track-work.md)  
- [Connect Azure Boards with GitHub](../boards/github/index.md)   


## Build and deploy containers with Azure Pipelines

It's easy to integrate Azure Pipelines with Kubernetes clusters. You can use the same YAML documents to build multi-stage pipelines-as-code for both Continuous Integration and Continuous Delivery.

Azure Pipelines integrates tracing metadata into your container images, including commit hashes and issue numbers from Azure Boards, giving you the ability to inspect with confidence the applications that you're running.

Adding the ability to create deployment pipelines with YAML files and store them in source control helps drive a tighter feedback loop between development and operation teams, relying on clear, readable documents.

- [Store Docker images in Azure Container Registry](../pipelines/ecosystems/containers/acr-template.md) 
- [Build a Docker image with Azure Pipelines](../pipelines/ecosystems/containers/build-image.md)   
- [Deploy to Kubernetes with full traceability](../pipelines/process/environments-kubernetes.md)   
- [Secure your Azure Pipelines](../pipelines/security/overview.md)   


## Run and debug containers with Dev Spaces

Developing a Kubernetes application can be challenging. You need Docker and Kubernetes configuration files. You need to figure out how to test your application locally and interact with other dependent services. You might need to handle developing and testing multiple services at once and with a team of developers.

Azure Dev Spaces is an extension to AKS that allows you to easily run and debug your code in the context of a larger application. You can test your code end-to-end, hit breakpoints on code running in the cluster, and share a development cluster between team members without interference.

- [Using Azure Dev Spaces](/azure/dev-spaces/how-dev-spaces-works)  


## Enforce container security with Azure Security Center and Azure Policy

Azure Policy integrates with the Azure Kubernetes Service (AKS) to apply at-scale enforcements and safeguards on your clusters in a centralized, consistent manner.

 - [Perform image security scanning with Azure Security Center](/azure/security-center/azure-container-registry-integration)
- [Policy enforcement on AKS with Azure Policy](/azure/governance/policy/concepts/rego-for-aks) 
- [Managed Kubernetes with Azure Kubernetes Service (AKS)](/azure/aks/)   

## Manage identities and access with Azure

Microsoft identity platform is an evolution of the Azure Active Directory (Azure AD) developer platform. It allows developers to build applications that sign in all Microsoft identities and get tokens to call Microsoft APIs, such as Microsoft Graph, or APIs that developers have built.

- [Authenticate with your app using the Microsoft identity platform](/azure/active-directory/develop/)  

Azure Active Directory B2C provides business-to-customer identity as a service. Your customers use their preferred social, enterprise, or local account identities to get single sign-on access to your applications and APIs.

- [Manage consumer identities with Azure AD B2C](/azure/active-directory-b2c/)   

Access management for cloud resources is a critical function for any organization that is using the cloud. Azure role-based access control (Azure RBAC) helps you manage who has access to Azure resources, what they can do with those resources, and what areas they have access to.

- [Role-Based Access Control (RBAC) for Azure resources](/azure/role-based-access-control/overview)   

You can use the Microsoft identity platform to authenticate with the rest of your DevOps tools, including native support within Azure DevOps and integrations with GitHub Enterprise:

- [Authenticating to GitHub Enterprise with Azure AD](https://help.github.com/en/github/setting-up-and-managing-organizations-and-teams/connecting-your-identity-provider-to-your-organization)

Currently, an Azure Kubernetes Service (AKS) cluster (specifically, the Kubernetes cloud provider) requires an identity to create additional resources like load balancers and managed disks in Azure, this identity can be either a managed identity or a service principal. If you use a service principal, you must either provide one or AKS creates one on your behalf. If you use managed identity, this will be created for you by AKS automatically. Clusters using service principals eventually reach a state in which the service principal must be renewed to keep the cluster working. Managing service principals adds complexity, which is why it's easier to use managed identities instead. The same permission requirements apply for both service principals and managed identities.

Managed identities are essentially a wrapper around service principals, and make their management simpler. 

- [Use a Managed Identity with AKS](/azure/aks/use-managed-identity)  


## Manage keys and secrets with Azure Key Vault

Azure Key Vault can be used to securely store and control access to tokens, passwords, certificates, API keys, and other secrets. Centralizing storage of application secrets in Azure Key Vault allows you to control their distribution. Key Vault greatly reduces the chances that secrets may be accidentally leaked. When using Key Vault, application developers no longer need to store security information in their application. Not having to store security information in applications eliminates the need to make this information part of the code. For example, an application may need to connect to a database. Instead of storing the connection string in the app's code, you can store it securely in Key Vault.

- [Store certificates, keys, and secrets on Azure Key Vault](/azure/key-vault/)   


## Monitor your applications  

With Azure Monitor, you can monitor both your application and infrastructure in real-time, identifying issues with your code and potential suspicious activities and anomalies. Azure Monitor integrates with release pipelines in Azure Pipelines to enable automatic approval of quality gates or release rollback based on monitoring data. 

Learn how to monitor your applications and infrastructure using Azure Application Insights and Azure Monitor.  

- [Application Performance Management with Application Insights](/azure/azure-monitor/app/app-insights-overview) 
- [Monitor containerized applications with Azure Monitor](/azure/azure-monitor/insights/container-insights-overview) 

## Build the right architecture 
Security is one of the most important aspects of any architecture. It provides confidentiality, integrity, and availability assurances against deliberate attacks and abuse of your valuable data and systems. Losing these assurances can negatively impact your business operations and revenue, as well as your organization’s reputation in the marketplace. 

- [Applications and services architecture](/azure/architecture/framework/security/applications-services)  
- [DevSecOps architecture](/azure/architecture/solution-ideas/articles/devsecops-in-azure)