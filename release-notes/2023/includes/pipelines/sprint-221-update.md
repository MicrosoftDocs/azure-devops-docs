---
author: ckanyika
ms.author: ckanyika
ms.date: 5/8/2023
ms.topic: include
---

### Pipeline agents can be registered using a Service Principal

As Azure DevOps Service Service Principals support in preview, we have added the capability to use a Service Principal to register a Pipelines agent with Azure DevOps Service:
```
 --auth 'SP' --client-id 12345678-1234-1234-abcd-1234567890ab --client-secret  --tenant-id 12345678-1234-1234-abcd-1234567890ab
```
This removes the need to use a Personal Access Token (PAT)
