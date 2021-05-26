---
ms.topic: include
ms.technology: devops-cicd
ms.manager: mijacobs
ms.author: sdanie
author: steved0x
ms.date: 02/12/2020
---

## Remove and re-configure an agent

To remove the agent:

1. Stop and uninstall the service as explained above.

2. Remove the agent.
   ```bash
   ./config.sh remove
   ```
3. Enter your credentials.

After you've removed the agent, you can [configure it again](#download-configure).
