---
ms.topic: include
author: RoopeshNair
ms.author: ronai
ms.date: 12/07/2018
ms.prod: devops
ms.technology: devops-cicd-tasks
---

```YAML
# Publish To Azure Service Bus
# Sends a message to Azure Service Bus using a service connection (no agent is required)
- task: PublishToAzureServiceBus@1
  inputs:
    azureSubscription: 
    #messageBody: # Optional
    #sessionId: # Optional
    #signPayload: false 
    #certificateString: # Required when signPayload == True
    #signatureKey: 'signature' # Optional
    #waitForCompletion: false 
```
