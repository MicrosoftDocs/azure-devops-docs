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
