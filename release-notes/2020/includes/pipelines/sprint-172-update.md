---
author: sid-ah
ms.author: simerzou
ms.technology: devops-release-notes
ms.date: 07/09/2020
ms.topic: include
---

### Exclusive deployment lock policy

With this update, you can ensure that only a single run deploys to an environment at a time. By choosing the "Exclusive lock" check on an environment, only one run will proceed. Subsequent runs which want to deploy to that environment will be paused. Once the run with the exclusive lock completes, the latest run will proceed. Any intermediate runs will be canceled.

:::image type="content" source="../../media/172-pipelines-0-0.png" alt-text="In the Add check page, select Exclusive Lock to ensure that only a single run deploys to an environment at a time.":::

### Stages filters for pipeline resource triggers

In this sprint, we added support for 'stages' as a filter for pipeline resources in YAML. With this filter, you don't need to wait for the entire CI pipeline to be completed to trigger your CD pipeline. You can now choose to trigger your CD pipeline upon completion of a specific stage in your CI pipeline.

```yml
resources:
  pipelines:
  - pipeline: MyCIAlias  
    project: Fabrikam  
    source: Farbrikam-CI  
    trigger:    
      stages:            ### This stage filter is used when evaluating conditions for triggering your CD pipeline
      - PreProduction    ### stages are AND'ed. On successful completion of all the stages provided, your CD pipeline will be triggered. 
      - Production
```

When the stages provided in the trigger filter are successfully completed in your CI pipeline, a new run is automatically triggered for your CD pipeline.


### Generic webhook based triggers for YAML pipelines

Today, we have various resources (such as pipelines, containers, build, and packages) through which you can consume artifacts and enable automated triggers. Until now, however, you could not automate your deployment process based on other external events or services. In this release, we are introducing webhook trigger support in YAML pipelines to enable integration of pipeline automation with any external service. You can subscribe to any external events through its webhooks (Github, Github Enterprise, Nexus, Aritfactory, etc.) and trigger your pipelines. 

Here are the steps to configure the webhook triggers:
1. Setup a webhook on your external service. When creating your webhook, you need to provide the following info:
    - Request Url - "https://dev.azure.com/<**ADO Organization**>/_apis/public/distributedtask/webhooks/<**WebHook Name**>?api-version=6.0-preview"
    - Secret - This is optional. If you need to secure your JSON payload, provide the **Secret** value
2. Create a new "Incoming Webhook" service connection. This is a newly introduced Service Connection Type that will allow you to define three important pieces of information:
    - **Webhook Name**: The name of the webhook should match webhook created in your external service.
    - **HTTP Header** - The name of the HTTP header in the request that contains the payload hash value for request verification. For example, in the case of the GitHub, the request header will be "**X-Hub-Signature**"
    - **Secret** - The secret is used to parse the payload hash used for verification of the incoming request (this is optional). If you have used a secret in creating your webhook, you will need to provide the same secret key  

    :::image type="content" source="../../media/172-pipelines-0-1.png" alt-text="In the Edit service connection page, configure webhook triggers.":::

3. A new resource type called `webhooks` is introduced in YAML pipelines. For subscribing to a webhook event, you need to define a webhook resource in your pipeline and point it to the Incoming webhook service connection. You can also define additional filters on the webhook resource based on the JSON payload data to further customize the triggers for each pipeline, and you can consume the payload data in the form of variables in your jobs.

```yml
resources:
  webhooks:
    - webhook: MyWebhookTrigger          ### Webhook alias
      connection: MyWebhookConnection    ### Incoming webhook service connection
      filters:
        - path: repositoryName      ### JSON path in the payload
          value: maven-releases     ### Expected value in the path provided
        - path: action
          value: CREATED
steps:
- task: PowerShell@2
  inputs:
    targetType: 'inline'
    ### JSON payload data is available in the form of ${{ parameters.<WebhookAlias>.<JSONPath>}}
    script: |
      Write-Host ${{ parameters.MyWebhookTrigger.repositoryName}}
      Write-Host ${{ parameters.MyWebhookTrigger.component.group}}
```

4. Whenever a webhook event is received by the Incoming Webhook service connection, a new run will be triggered for all the pipelines subscribed to the webhook event. 

### YAML resource trigger issues support and traceability

It can be confusing when pipeline triggers fail to execute as you expect them to. To help better understand this, we've added a new menu item in the pipeline definition page called 'Trigger Issues' where information is surfaced regarding why triggers are not executing.

Resource triggers can fail to execute for two reasons.

1. If the source of the service connection provided is invalid, or if there are any syntax errors in the trigger, the trigger will not be configured at all. These are surfaced as errors.
2. If trigger conditions are not matched, the trigger will not execute. Whenever this occurs, a warning will be surfaced so you can understand why the conditions were not matched.  

    :::image type="content" source="../../media/172-pipelines-0-2.png" alt-text="This pipeline definition page called Trigger Issues displays information regarding why triggers are not running.":::


### Banner for live site incidents impacting pipelines

We've added a warning banner to the pipelines page to alert users of ongoing incidents in your region, which may impact your pipelines. 
