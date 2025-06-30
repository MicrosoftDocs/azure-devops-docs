---
author: gloridelmorales
ms.author: glmorale
ms.date: 6/30/2025
ms.topic: include
---

### Azure DevOps MCP Server public preview

We’re excited to announce the public preview of the Azure DevOps MCP Server, a self-hosted, local server that enables GitHub Copilot in Visual Studio Code to securely access Azure DevOps data, including work items, pull requests, builds, test plans, and more. This integration empowers Copilot to deliver richer, context-aware suggestions while keeping your data within your environment.

Here are just a few examples of what you can do with the Azure DevOps MCP Server:

• Retrieve and edit individual work items  
• Perform bulk updates on work items  
• Access pull request details  
• Generate test cases from work item descriptions  
• Search across work items, wikis, and code

Check out this demo showing how to create iterations and assign them to a team:

> [!div class="mx-imgBorder"]
> ![Azure DevOp MCP Server demo.](../../media/258-boards-01.gif "Azure DevOp MCP Server demo")

Ready to get started? Visit the [Azure DevOps MCP Server repository](https://github.com/microsoft/azure-devops-mcp) for installation instructions, examples, and contribution guidelines.

### New organizations won't offer public projects

Starting this sprint, new organizations will no longer have the [Allow public projects policy](/azure/devops/organizations/projects/make-project-public?view=azure-devops#1-enable-anonymous-access-to-projects) available. This policy remains unchanged for existing customers. Microsoft recommends using [GitHub](https://github.com/) for all your public project needs.