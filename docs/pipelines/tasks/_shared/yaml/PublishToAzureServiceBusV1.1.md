## YAML snippet

```YAML
# Publish To Azure Service Bus
# Sends a message to azure service bus using a service connection (no agent required).
- task: PublishToAzureServiceBus@1
  inputs:
    azureSubscription: 
    #messageBody: # Optional
    #signPayload: false 
    #certificateString: # Required when signPayload == True
    #signatureKey: 'signature' # Optional
    #waitForCompletion: false 
```
