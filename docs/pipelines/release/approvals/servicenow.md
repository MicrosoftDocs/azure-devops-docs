---
title: Integrate with ServiceNow change management
description: Learn how to integrate ServiceNow change management by using gated releases with the Azure Pipelines ServiceNow extension.
ms.assetid: 0824A7C4-9353-4BDA-B652-5B826E0EF2A5
ms.topic: tutorial
ms.author: ericvan
author: geekzter
ms.date: 08/19/2024
monikerRange: '<= azure-devops'
"recommendations": "true"
---

# Integrate Azure Pipelines with ServiceNow change management

[!INCLUDE [version-lt-eq-azure-devops](../../../includes/version-lt-eq-azure-devops.md)]

To improve collaboration between development and IT teams, Azure Pipelines supports integration with ServiceNow. Teams can reduce the risks associated with changes and follow service management methodologies such as Information Technology Infrastructure Library (ITIL) by including change management gates in release pipelines.

In this tutorial, you learn how to:

> [!div class="checklist"]
>
> - Configure ServiceNow instances.
> - Include the ServiceNow change management process as a release gate.
> - Monitor the change management process from release pipelines.
> - Keep ServiceNow change requests updated with deployment results.

## Prerequisites 

- Have a HI account in a nondeveloper instance of [ServiceNow](https://www.servicenow.com/).
- Have an Azure DevOps [organization](../../../organizations/accounts/create-organization.md) and [project](../../../organizations/projects/create-project.md) with organization-level permissions to install extensions.
- Have either a [Classic release pipeline](../define-multistage-release-process.md), or a [YAML pipeline](../../create-first-pipeline.md) that deploys to an environment, in your Azure DevOps project.
- Make sure you understand and can follow the procedures in [Use gates and approvals to control your deployment](../deploy-using-approvals.md) and [Define approvals and checks](../../process/approvals.md).

## Configure the ServiceNow instance

1. Install the [Azure Pipelines extension](https://store.servicenow.com/sn_appstore_store.do#!/store/application/fa788cb5dbb5630040669c27db961940) on your ServiceNow instance. See [Buying Overview](https://store.servicenow.com/sn_appstore_store.do#!/store/help?article=KB0010019) for more details on installing apps from the ServiceNow store. You need **HI** credentials to complete the installation.

1. In ServiceNow, create a new user for the Azure Pipelines Service Account and grant it the **x_mioms_azpipeline.pipelinesExecution** role.

   :::image type="content" source="media/servicenow-01.png" alt-text="A screenshot showing how to set up a new user in ServiceNow.":::

## Set up the Azure DevOps organization

1. In your Azure DevOps organization, install the [ServiceNow Change Management extension](https://marketplace.visualstudio.com/items?itemName=ms-vscs-rm.vss-services-servicenowchangerequestmanagement).

   :::image type="content" source="media/servicenow-02.png" alt-text="A screenshot showing the ServiceNow Change Management extension.":::

1. In your Azure DevOps project, create a new ServiceNow service connection by using either **Basic authentication** or [OAuth2 authentication](https://github.com/microsoft/azure-pipelines-extensions/blob/master/Extensions/ServiceNow/Src/readme.md#create-service-connection-for-servicenow-in-azure-pipelines). For more information, see [Create a service connection](../../library/service-endpoints.md#create-a-service-connection).

   :::image type="content" source="media/servicenow-03.png" alt-text="A screenshot showing how to configure ServiceNow service connection.":::

#### [Classic](#tab/classic/)

## Configure the release pipeline

1. In an Azure Pipelines release pipeline, select the **Pre-deployment conditions** icon.

1. On the **Pre-deployment conditions** screen, expand and enable **Gates**, select **Add** next to **Deployment gates**, and select the **ServiceNow Change Management** pre-deployment gate.
 
   :::image type="content" source="media/servicenow-04.png" alt-text="A screenshot showing how to add a pre-deployment gate.":::

1. In the **ServiceNow Change Management** settings, under **ServiceNow connection**, select the ServiceNow service connection you created earlier.

1. Complete the rest of the fields as follows:

   |Setting|Description|
   |-------|-----------|
   | **Action** | Select **Create new change request** or **Use existing change request**.
   | **Change type** | Select **Normal**, **Standard**, or **Emergency**.
   | **Short description** | Enter a summary of the change.|
   | **Schedule of change request** | Schedule of the change as honored by the ServiceNow workflow. Under **Planned start date** and **Planned end date**, enter UTC date and time in format *yyyy-MM-ddTHH:mm:ssZ*.|
   | **Description** | Detailed description of the change.|
   | **Category** | Category of the change, such as **Hardware**, **Network**, or **Software**.|
   | **Priority** | Priority of the change.|
   | **Risk** | Risk level for the change.|
   | **Impact** | Effect that the change has on business.|
   | **Configuration item** | Configuration item that the change applies to.|
   | **Assignment group** |  Group that the change is assigned to.|
   | **Advanced** > **Additional change request parameters** | Select the ellipsis next to the field and then select **Add**. Names must be field names, not labels, prefixed with `u_`, such as `u_backout_plan`. Values must be valid in ServiceNow. Invalid entries are ignored.|
   | **Success criteria** | Select either **Desired state of change request** or **Advanced success criteria**.
   | **Desired state of change request** | The gate succeeds and the pipeline continues when the change request status is this value.
   | **Advanced success criteria** | An expression that controls when this gate should succeed. The change request is defined as `root['result']` in the response from ServiceNow. For example, `and(eq(root['result'].state, 'New'),eq(root['result'].risk, 'Low'))`. For more information, see [Expressions](../../process/expressions.md).
   | **Output Variables** > **Reference name** | To be able to use output variables in your deployment workflow, you must specify a reference name. You can access gate variables by using `PREDEPLOYGATE` as a prefix in an agentless job. For example, when the reference name is set to *gate1*, you can get the change request number by using the variable `$(PREDEPLOYGATE.gate1.CHANGE_REQUEST_NUMBER)`.
   | **Variables list** | **CHANGE_REQUEST_NUMBER** is the number of the change request.<br> **CHANGE_SYSTEM_ID** is the System ID of the change request.|

   :::image type="content" source="media/servicenow-newform.png" alt-text="A screenshot showing how to configure the ServiceNow Change Management gate.":::

1. At the end of your release pipeline, add an **Agentless job** with the task **Update ServiceNow Change Request**.

1. In the settings form, under **ServiceNow connection**, select your ServiceNow service connection.
1. Under **Change request number**, enter the ServiceNow change request number to update.
1. Select **Update status**, and then under **Updated status of change request**, choose or enter the status to set for the change request.
1. In **Work Notes** under **Advanced**, optionally enter any work notes to be added for the change request update.

    :::image type="content" source="media/servicenow-06.png" alt-text="A screenshot showing how to configure the Update ServiceNow Change Request task.":::

> [!NOTE]
> The Update ServiceNow Change Request task fails if none of the change request fields are updated during execution. ServiceNow ignores invalid fields and values passed to the task.

## Create a release

Select **Create release** to start a new release.

Your pipeline should create a new change request in ServiceNow as part of the pre-deployment conditions you created earlier.

:::image type="content" source="media/servicenow-07.png" alt-text="A screenshot showing the execution of the pre-deployment gate.":::

The pipeline waits for all the gates to succeed within the same sample interval. To check the change number, select the status icon to view your pipeline logs.

:::image type="content" source="media/servicenow-08.png" alt-text="A screenshot showing the pipeline logs.":::

The change request is queued in ServiceNow, and the change owner can view it.

:::image type="content" source="media/servicenow-09.png" alt-text="A screenshot showing a new change request in ServiceNow.":::
   
You can find the release pipeline that triggered the new change request under the **Azure DevOps Pipeline metadata** section.

:::image type="content" source="media/servicenow-10.png" alt-text="A screenshot showing the release pipeline metadata.":::

When the change is ready for implementation and moved to **Implement** state, the pipeline resumes execution and the gate status should return **succeeded**.

:::image type="content" source="media/servicenow-11.png" alt-text="A screenshot showing the deployment gate status.":::

The change request closes automatically after deployment.

#### [YAML](#tab/yaml/)

## Configure the YAML pipeline

1. In your Azure DevOps project, select **Pipelines** > **Environments** in the left menu, and select the environment that your YAML pipeline deploys to.

1. On the **Approvals and checks** tab, select **+** to add a new check, and then select and add the **ServiceNow Change Management** check to your environment.

    :::image type="content" source="media/servicenow-12.png" alt-text="A screenshot showing how to add a ServiceNow Change Management check.":::

1. In the **ServiceNow Change Management** settings, under **ServiceNow connection**, select the ServiceNow service connection you created earlier.

1. Complete the rest of the fields as follows:

   |Setting|Description|
   |-------|-----------|
   | **Action** | Select **Create new change request** or **Use existing change request**.
   | **Change type** | Select **Normal**, **Standard**, or **Emergency**.
   | **Short description** | Enter a summary of the change.|
   | **Schedule of change request** | Schedule of the change as honored by the ServiceNow workflow. Under **Planned start date** and **Planned end date**, enter UTC date and time in format *yyyy-MM-ddTHH:mm:ssZ*.|
   | **Description** | Detailed description of the change.|
   | **Category** | Category of the change, such as **Hardware**, **Network**, or **Software**.|
   | **Priority** | Priority of the change.|
   | **Risk** | Risk level for the change.|
   | **Impact** | Effect that the change has on business.|
   | **Configuration item** | Configuration item that the change applies to.|
   | **Assignment group** |  Group that the change is assigned to.|
   | **Advanced** > **Additional change request parameters** | Select the ellipsis next to the field and then select **Add**. Names must be field names, not labels, prefixed with `u_`, such as `u_backout_plan`. Values must be valid in ServiceNow. Invalid entries are ignored.|
   | **Success criteria** | Select either **Desired state of change request** or **Advanced success criteria**.
   | **Desired state of change request** | The gate succeeds and the pipeline continues when the change request status is this value.
   | **Advanced success criteria** | An expression that controls when this gate should succeed. The change request is defined as `root['result']` in the response from ServiceNow. For example, `and(eq(root['result'].state, 'New'),eq(root['result'].risk, 'Low'))`. For more information, see [Expressions](../../process/expressions.md).
   | **Output Variables** > **Reference name** | To be able to use output variables in your deployment workflow, you must specify a reference name. You can access gate variables by using `PREDEPLOYGATE` as a prefix in an agentless job. For example, when the reference name is set to *gate1*, you can get the change request number by using the variable `$(PREDEPLOYGATE.gate1.CHANGE_REQUEST_NUMBER)`.
   | **Variables list** | **CHANGE_REQUEST_NUMBER** is the number of the change request.<br> **CHANGE_SYSTEM_ID** is the System ID of the change request.|

   :::image type="content" source="media/servicenow-newform.png" alt-text="A screenshot showing how to configure the ServiceNow Change Management gate.":::

## Add the YAML task

To update the change request, add the following [server job](../../process/phases.md#server-jobs) and `UpdateServiceNowChange Request@2` task to your YAML pipeline.

```yaml
stages:
- stage: Stage1
  jobs:
  - deployment: DeployLatest
    environment: <environment-name>
  ...
  - job: UpdateChangeRequest
    steps:
    - task: UpdateServiceNowChangeRequest@2
      displayName: 'Update ServiceNow Change Request'
      inputs:
        ServiceNowConnection: '<servicenow connection name>'
        NewStatus: 'Assess'
        WorkNotes: 'sample work notes'
        otherParameters: '{"u_hello": "hello"}'
pool: server
```

:::image type="content" source="media/servicenow-13.png" alt-text="A screenshot showing the agentless task.":::

Save and run your pipeline. A new change request is automatically created, and the pipeline pauses and waits for the checks to complete. When the checks complete, the pipeline resumes execution.

:::image type="content" source="media/servicenow-14.png" alt-text="A screenshot showing the pipeline execution.":::

The change request closes automatically after deployment.

---

## FAQs

### Q: What versions of ServiceNow are supported?

::: moniker range="azure-devops"
**A**: The Azure Pipelines ServiceNow extension supports the Kingston, London, New York, Paris, Quebec, Rome, San Diego, Tokyo, and Utah releases.
::: moniker-end

::: moniker range="azure-devops-2022"
**A**: The Azure Pipelines ServiceNow extension supports the Kingston, London, New York, Paris, Quebec, San Diego, Tokyo, and Utah releases.
::: moniker-end

::: moniker range="< azure-devops-2022"
**A**: The Azure Pipelines ServiceNow extension supports the Kingston, London, New York, Paris, and Quebec releases.
::: moniker-end

### Q: What types of change request are supported?

**A**: Azure Pipelines ServiceNow integration supports normal, standard, and emergency change requests.

### Q: How do I set more change properties?

**A**: You can specify more change properties from the **Additional change request parameters** field. Use a key-value pairs JSON format, with the name being the field name, not the label, prefixed with `u_`.

### Q: Can I update custom fields in the change request with more change request parameters?

**A**: If you define custom fields in the change request, you must [add mapping for custom fields in Import set transform map](https://github.com/Microsoft/azure-pipelines-extensions/tree/master/Extensions/ServiceNow/Src#steps-to-add-mapping-for-custom-fields-in-import-set-transform-map-).

### Q: How can I see dropdown values populated for Category, Status, and other fields?

**A**: Change Management Core and Change Management - State Model plugins must be active on your ServiceNow instance for the dropdowns to work. For more information, see [Upgrade change management](https://docs.servicenow.com/bundle/quebec-it-service-management/page/product/change-management/task/migrate-change-mgmt-pre-geneva.html) and [Update change request states](https://docs.servicenow.com/bundle/quebec-it-service-management/page/product/change-management/task/state-model-activate-tasks.html).

## Resources

- [Configure your release pipelines for safe deployments](https://devblogs.microsoft.com/devops/configuring-your-release-pipelines-for-safe-deployments/)
- [X sentiment as a release gate](https://blogs.msdn.microsoft.com/bharry/2017/12/15/twitter-sentiment-as-a-release-gate/)
- [GitHub issues as a release gate](https://www.visualstudiogeeks.com/DevOps/github-issues-as-deployment-gate-in-vsts-rm)
- [Author custom gates](https://github.com/Microsoft/azure-pipelines-tasks/blob/master/docs/authoring/gates.md).
- [ServerTaskHelper Library example](https://github.com/Microsoft/vsts-rm-extensions/tree/master/ServerTaskHelper/DistributedTask.ServerTask.Remote.Common) 

## Related content

- [Release gates and approvals](index.md)
- [Define approvals and checks](../../process/approvals.md)
- [Set up manual intervention](../deploy-using-approvals.md#set-up-manual-intervention)
- [Use gates and approvals to control your deployment](../../release/deploy-using-approvals.md)
- [Add stages, dependencies, and conditions](../../process/stages.md)
- [Release triggers](../triggers.md)
