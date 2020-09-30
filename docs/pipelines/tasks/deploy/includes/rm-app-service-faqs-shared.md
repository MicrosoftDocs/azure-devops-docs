---
author: ninallam
ms.prod: devops
ms.technology: devops-cicd-tasks
ms.topic: include
ms.date: 12/10/2019
ms.manager: mijacobs
ms.author: ninallam
---

### How should I configure my service connection?

This task requires an [Azure Resource Manager service connection](/azure/devops/pipelines/release/azure-rm-endpoint).

### How should I configure Web Job Deployment with [Azure Application Insights](/azure/azure-monitor/app/app-insights-overview)?

When deploying to an App Service with Application Insights configured and you have enabled “Remove additional files at destination”, then you also need to enable “Exclude files from the App_Data folder” in order to keep the app insights extension in a safe state. This is required because App Insights continuous web job gets installed into the App_Data folder.

### How should I configure my agent if it is behind a proxy while deploying to App Service?

When your self-hosted agent requires a web proxy, you can inform the agent about the proxy during configuration. This allows your agent to connect to Azure Pipelines or TFS through the proxy. Learn more about [running a self-hosted agent behind a web proxy](/azure/devops/pipelines/agents/proxy?tabs=windows)
