---
ms.subservice: azure-devops-analytics
ms.author: chcomley
author: chcomley
ms.topic: include
ms.date: 04/07/2025
---

::: moniker range="azure-devops"

<a id="use-ai-assistance"></a>

## Use AI to write OData queries for Power BI

If you configure the [Azure DevOps MCP Server](/azure/devops/mcp-server/mcp-server-overview), you can use AI assistants to help write, test, and troubleshoot OData queries for Power BI.

### Example prompts

| Task | Example prompt |
|------|----------------|
| Build a bug trend query | `Write an OData query for Power BI that shows a daily bug count trend grouped by state for <Contoso> project` |
| Filter by area path | `Create an OData query that trends work items under the "WebApp" area path in <Contoso> project for use in Power BI` |
| Add server-side aggregation | `Create an OData query that counts work items by state and work item type using $apply in <Contoso> project` |
| Filter by date range | `Write an OData query that returns work items created in the last 14 days in <Contoso> project` |
| Format for Power BI | `Convert this multiline OData query into the Power BI Advanced Editor M-query format with ODataOmitValues.Nulls` |
| Troubleshoot refresh errors | `My Power BI OData query is timing out — help me add server-side aggregation to reduce the data returned from <Contoso> project` |

::: moniker-end
