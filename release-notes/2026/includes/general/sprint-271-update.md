---
author: gloridelmorales
ms.author: glmorale
ms.date: 3/31/2026
ms.topic: include
---

### Remote MCP Server Public Preview

We're excited to introduce the Remote Azure DevOps MCP Server, now available in public preview. This hosted endpoint enables seamless integration with Azure DevOps without the need to manage a local server. Support is currently available in Visual Studio and Visual Studio Code, with additional clients and services, including Microsoft Foundry and Copilot Studio, coming soon.

Getting started is simple. Depending on the tools that you are using, you only need to add the following server information to your `mcp.json`.

```json
{
  "servers": {
    "ado-remote-mcp": {
      "url": "https://mcp.dev.azure.com/{organization}",
      "type": "http"
    }
  },
  "inputs": []
}
```

Additional configuration options are available to customize your setup. To learn more, see the official documentation: [Remote MCP Server](/azure/devops/mcp-server/remote-mcp-server).

### Allow extensions to access local network resources

Some web browsers may block calls from iframes to resources on the local network, which can impact Azure DevOps organizations that rely on extensions connecting to back-end services hosted on internal company networks. To avoid disruptions and continue using these extensions, organizations can enable the "Allow extensions to access local network resources" security policy. [Learn more](https://go.microsoft.com/fwlink/?linkid=2354648).

> [!div class="mx-imgBorder"]
> ![Screenshot showing allow extensions to access local network resources policy.](../../media/271-general-01.png "Screenshot showing allow extensions to access local network resources policy.")
