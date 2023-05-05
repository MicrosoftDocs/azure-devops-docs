---
ms.topic: include
ms.service: azure-devops-pipelines
ms.manager: mijacobs
ms.author: sdanie
author: steved0x
ms.date: 05/05/2023
---

## Remove and reconfigure an agent

To remove the agent:

1. Stop and uninstall the service as explained in the previous section.

2. Remove the agent.
   ```bash
   ./config.sh remove
   ```
3. Enter your credentials.

After you've removed the agent, you can [configure it again](#download-configure).
