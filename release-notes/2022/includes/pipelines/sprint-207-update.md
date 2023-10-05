---
author: gloridelmorales
ms.author: glmorale
ms.date: 9/8/2022
ms.topic: include
---

### Azure Pipelines support for San Diego release of ServiceNow

Azure Pipelines has an existing integration with ServiceNow. The integration relies on an app in ServiceNow and an extension in Azure DevOps. We have now updated the app to work with the San Diego version of ServiceNow. To ensure that this integration works, upgrade to the new version of the app (4.205.2) from the [ServiceNow store](https://store.servicenow.com/sn_appstore_store.do#!/store/application/fa788cb5dbb5630040669c27db961940).

For more information, see the [Integrate with ServiceNow Change Management documentation](/azure/devops/pipelines/release/approvals/servicenow?view=azure-devops&preserve-view=true).

### Pipelines REST API Security Improvements

Majority of the REST APIs in Azure DevOps use scoped PAT tokens. However, some of them require fully-scoped PAT tokens. In other words, you would have to create a PAT token by selecting 'Full access' in order to use some of these APIs. Such tokens pose a security risk since they can be used to call any REST API. We have been making improvements across Azure DevOps to remove the need for fully-scoped tokens by incorporating each REST API into a specific scope. As part of this effort, the [REST API to update pipeline permissions for a resource](/rest/api/azure/devops/approvalsandchecks/pipeline-permissions/update-pipeline-permisions-for-resources?view=azure-devops-rest-7.1&preserve-view=true) now requires a specific scope. The scope depends on the type of resource being authorized for use:

* `Code (read, write, and manage)` for resources of type `repository`
* `Agent Pools (read, manage)` or `Environment (read, manage)` for resources of type `queue` and `agentpool`
* `Secure Files (read, create, and manage)` for resources of type `securefile`
* `Variable Groups (read, create and manage)` for resources of type `variablegroup`
* `Service Endpoints (read, query and manage)` for resources of type `endpoint`
* `Environment (read, manage)` for resources of type `environment`

To bulk edit pipelines permissions, you will still need a fully-scoped PAT token. To learn more about updating Pipeline permissions for resources, see the [Pipeline Permissions - Update Pipeline Permissions For Resources](/rest/api/azure/devops/approvalsandchecks/pipeline-permissions/update-pipeline-permisions-for-resources?view=azure-devops-rest-7.1&preserve-view=true) documentation. 

### Use proxy URLs for GitHub Enterprise integration

Azure Pipelines integrates with on-premises GitHub Enterprise Servers to run continuous integration and PR builds. In some cases, the GitHub Enterprise Server is behind a firewall and requires the traffic to be routed through a proxy server. To support this scenario, the GitHub Enterprise Server service connections in Azure DevOps lets you configure a proxy URL. Previously, not all the traffic from Azure DevOps was being routed through this proxy URL. With this update, we are ensuring that we route the following traffic from Azure Pipelines to go through the proxy URL:
* Get branches
* Get pull request information
* Report build status

### Scheduled builds improvements

We fixed an issue that was causing a pipeline's schedule information to become corrupted, and the pipeline to not load. This was caused for example, when the name of the branch exceeded a certain number of characters.

### Announcing retirement of Windows 2016 image

Azure Pipelines is removing Windows 2016 image (`vs2017-win2016`) from our hosted pools on July 31st. To learn more on how to identify pipelines using deprecated images including Windows 2016, check out our blog post [Hosted Pipelines Image Deprecation](https://devblogs.microsoft.com/devops/hosted-pipelines-image-deprecation/).

### Announcing deprecation of macOS 10.15 Catalina images (updated)

Azure Pipelines is deprecating macOS 10.15 Catalina images (`macOS-1015`) on our hosted pools. This image will be retired September 30th. You may start to see longer queue times.

To help you better identify which pipelines are using the macOS-1015 image, we are planning brownouts. Jobs will fail during a brownout period.
* Warning messages are displayed on pipeline runs using the macOS-1015 image
* A [script](https://github.com/microsoft/azure-pipelines-agent/tree/master/tools/FindPipelinesUsingRetiredImages) is available to help you find pipelines using deprecated images, including macOS-1015
* We are scheduling short "brownouts". Any macOS-1015 runs will fail during the brownout period. Therefore, it is recommended to migrate your pipelines prior to the brownouts.

#### Brownout schedule (updated)
* October 7, 10:00 UTC - October 7, 16:00 UTC
* October 14, 12:00 UTC - October 14, 18:00 UTC
* October 21, 14:00 UTC - October 21, 20:00 UTC
* October 28, 16:00 UTC - October 28, 22:00 UTC
* November 4, 22:00 UTC - November 5, 04:00 UTC
* November 11, 04:00 UTC - November 11, 10:00 UTC
* November 18, 06:00 UTC - November 18, 12:00 UTC
* November 25, 08:00 UTC - November 25, 14:00 UTC

### Updates to "Run stage state changed" service hook event

Service hooks let you run tasks on other services when events happen in your project in Azure DevOps, the [Run stage state changed](/azure/devops/service-hooks/events?view=azure-devops#run-stage-state-changed&preserve-view=true) is one of these events. The Run stage state changed event must contain information about the run including the name of the pipeline and the state of the overall run. Previously, it only included information about the id and name of the run. With this update, we made changes to the event to include missing information. 

### Change in the default scope of access tokens in classic build pipelines

To improve the security of classic build pipelines, when creating a new one, the _build job authorization scope_ will be _Project_, by default. Until now, it used to be _Project Collection_. Read more about [Job access tokens](/azure/devops/pipelines/process/access-tokens?view=azure-devops&tabs=classic&preserve-view=true). This change does not impact any of the existing pipelines. It only impacts new classic build pipelines that you create from this point on.
