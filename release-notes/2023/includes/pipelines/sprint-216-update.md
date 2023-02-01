---
author: ckanyika
ms.author: ckanyika
ms.date: TBD
ms.topic: include
---
### Red Hat 6 will no longer receive Pipeline agent updates

Pipeline agents running Red Hat 6 will no longer receive updates after agent version v2.214.2. Customers still using Red Hat 6 should upgrade or replace Red Hat 6 agents with a compatible operating system version. To make customers aware they are running the last agent version released for Red Hat 6, an agent knob is required to be set for continues agent operation. A [blog post](https://aka.ms/azdo-pipeline-agent-rhel6) will provide details and answer frequently asked questions.

### Pipeline UI - Stages Side Panel



### PM Updates Pending 



### PM Updates Still Pending 


### Service Hook for Job State Change

Service Hooks allow you to react in response to events related to state changes in your pipeline. Up until now, you could configure service hooks for pipeline run and stage state changes. 

Starting now, you can configure service hooks that fire when the state of a job in your pipeline changes. The payload structure of the new service hook is similar to the following example.

```json
{
    "subscriptionId": "8d91ad83-1db5-4d43-8c5a-9bb2239644b1",
    "notificationId": 29,
    "id": "fcad4962-f3a6-4fbf-9653-2058c304503f",
    "eventType": "ms.vss-pipelines.job-state-changed-event",
    "publisherId": "pipelines",
    "message":
    {
        "text": "Run 20221121.5 stage Build job Compile succeeded.",
        "html": "Run 20221121.5 stage Build job <a href=\"https://dev.azure.com/fabrikamfiber/fabrikamfiber-viva/_build/results?buildId=2710088\">Compile</a> succeeded.",
        "markdown": "Run 20221121.5 stage Build job [Compile](https://dev.azure.com/fabrikamfiber/fabrikamfiber-viva/_build/results?buildId=2710088) succeeded."
    },
    "detailedMessage":
    {
        "text": "Run 20221121.5 stage Build job Compile succeeded.",
        "html": "Run 20221121.5 stage Build job <a href=\"https://dev.azure.com/fabrikamfiber/fabrikamfiber-viva/_build/results?buildId=2710088\">Compile</a> succeeded.",
        "markdown": "Run 20221121.5 stage Build job [Compile](https://dev.azure.com/fabrikamfiber/fabrikamfiber-viva/_build/results?buildId=2710088) succeeded."
    },
    "resource":
    {
        "job":
        {
            "_links":
            {
                "web":
                {
                    "href": "https://dev.azure.com/fabrikamfiber/fabrikamfiber-viva/_build/results?buildId=2710088"
                },
                "pipeline.web":
                {
                    "href": "https://dev.azure.com/fabrikamfiber/fabrikamfiber-viva/_build/definition?definitionId=4647"
                }
            },
            "id": "e87e3d16-29b0-5003-7d86-82b704b96244",
            "name": "Compile",
            "state": "completed",
            "result": "succeeded",
            "startTime": "2022-11-21T16:10:28.49Z",
            "finishTime": "2022-11-21T16:10:53.66Z"
        },
        "stage": { ... },
        "run": { ... },
        "pipeline": { ... },
        "repositories": [ ... ]
    },
    "resourceVersion": "5.1-preview.1",
    "createdDate": "2022-11-21T16:11:02.9207334Z"
}
```
Run, stage, and job state change service hook events now contain a `repository` property that shows source code version information associated to the pipeline run. For example,

```json
"repositories":
[
    {
        "type": "Git",
        "change":
        {
            "author":
            {
                "name": "Fabrikam John",
                "email": "john@fabrikamfiber.com",
                "date": "2022-11-11T15:09:21Z"
            },
            "committer":
            {
                "name": "Fabrikam John",
                "email": "john@fabrikamfiber.com",
                "date": "2022-11-11T15:09:21Z"
            },
            "message": "Added Viva support"
        },
        "url": "https://fabrikamfiber@dev.azure.com/fabrikamfiber/fabrikamfiber-viva/_git/fabrikamfiber"
    },
    {
        "type": "GitHub",
        "change":
        {
            "author":
            {
                "name": "Fabrikam John",
                "email": "john@github.com",
                "date": "2022-08-11T15:05:20Z"
            },
            "committer":
            {
                "name": "Fabrikam John",
                "email": "john@github.com",
                "date": "2022-08-11T15:05:20Z"
            },
            "message": "Added Viva open source REST API library"
        },
        "url": "https://api.github.com/repos/FabrikamFiber/Viva"
    }
]
```

