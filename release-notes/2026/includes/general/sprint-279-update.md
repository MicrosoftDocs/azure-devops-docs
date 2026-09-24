---
author: gloridelmorales
ms.author: glmorale
ms.date: 9/4/2026
ms.topic: include
---

### Remote MCP Server handling rate limits

Tools can now detect when remote MCP Server requests are approaching service rate limits and receive guidance on when to slow down or retry. This helps reduce failed requests and unnecessary retries during periods of high usage.

When a request is rate limited, tool responses now include available retry guidance from Azure DevOps, allowing the calling agent to wait before trying the request again.

### Azure DevOps plugin now available in GitHub Copilot app

The Azure DevOps plugin is now available for the GitHub Copilot app. With the plugin, you can view and open your Azure DevOps work items and pull requests, edit work items, and make basic pull request updates and complete pull requests directly from the Copilot app. Install the Azure DevOps plugin from **Editor's picks** under **Customize**, then sign in and connect to your Azure DevOps organization and project to get started.

<!-- TODO: Download source image https://dev.azure.com/mseng/b924d696-3eae-4116-8443-9a18392d8544/_apis/wit/attachments/84297396-8345-4eb1-8dd8-ad1a96c08262 to ../../media/279-general-01.png -->

See the [blog post announcement](https://devblogs.microsoft.com/devops/azure-devops-in-the-github-copilot-app) to learn more.
