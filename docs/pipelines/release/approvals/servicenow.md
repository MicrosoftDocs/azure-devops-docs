---
title: Control deployments by using ServiceNow
ms.custom: seodec18
description: Understand ServiceNow gated releases in Azure Pipelines
ms.assetid: 0824A7C4-9353-4BDA-B652-5B826E0EF2A5
ms.topic: conceptual
ms.author: shashban
author: shashban
ms.date: 08/29/2022
monikerRange: '<= azure-devops'
"recommendations": "true"
---

# Integrate with ServiceNow change management

[!INCLUDE [version-lt-eq-azure-devops](../../../includes/version-lt-eq-azure-devops.md)]

Azure Pipelines support integration with ServiceNow to improve collaboration between development and IT teams. By including change management in release pipelines, teams can reduce the risks associated with changes and follow service management methodologies such as ITIL while taking full advantage of Azure Pipelines.

In this article, you'll learn how to:

> [!div class="checklist"]
>
> - Configure ServiceNow instances.
> - Include ServiceNow change management process as a release gate.
> - Monitor change management process from release pipelines.
> - Keep ServiceNow change requests updated with deployment results.

## Prerequisites 

- This tutorial expands on [Use approvals and gates](../deploy-using-approvals.md) and [Define approvals & checks](../../process/approvals.md).

- An Azure DevOps organization. [Create an organization](../../../organizations/accounts/create-organization.md), if you don't have one already.

- A non-developer instance of [ServiceNow](https://www.servicenow.com/).

## Configure the ServiceNow instance

1. Install the [Azure Pipelines](https://store.servicenow.com/sn_appstore_store.do#!/store/application/fa788cb5dbb5630040669c27db961940) extension on your ServiceNow instance. You'll need **Hi** credentials to complete the installation. See [Buying Overview](https://store.servicenow.com/sn_appstore_store.do#!/store/help?article=KB0010019) for more details on installing apps from the ServiceNow store.

1. Create a new user in ServiceNow and grant it the following role: `x_mioms_azpipeline.pipelinesExecution`.

    :::image type="content" source="media/servicenow-01.png" alt-text="A screenshot showing how to set up a new user in ServiceNow.":::

## Set up the Azure DevOps organization

1. Install the [ServiceNow Change Management extension](https://marketplace.visualstudio.com/items?itemName=ms-vscs-rm.vss-services-servicenowchangerequestmanagement) on your Azure DevOps organization.

    :::image type="content" source="media/servicenow-02.png" alt-text="A screenshot showing the ServiceNow Change Management extension.":::

1. Create a new ServiceNow [service connection](../../library/service-endpoints.md) in your Azure DevOps project as follows. Alternatively, you can also use [OAuth2 authentication](https://github.com/microsoft/azure-pipelines-extensions/blob/master/Extensions/ServiceNow/Src/readme.md#create-service-connection-for-servicenow-in-azure-pipelines).
   
    :::image type="content" source="media/servicenow-03.png" alt-text="A screenshot showing how to configure ServiceNow service connection.":::

## Configure the release pipeline

1. Navigate to your release pipeline, and then select the **Pre-deployment conditions** icon. Select **Gates** and the **ServiceNow Change Management** pre-deployment gate.
 
    :::image type="content" source="media/servicenow-04.png" alt-text="A screenshot showing how to add a pre-deployment gate.":::

1. Select the service connection you created earlier and fill out the required fields as follows:

    :::image type="content" source="media/servicenow-05.png" alt-text="A screenshot showing how to configure the ServiceNow Change Management gate.":::

   - **ServiceNow connection**: Connection to the ServiceNow instance used for change management.
   - **Short description**: A summary of the change.
   - **Description**: A detailed description of the change.
   - **Category**:  The category of the change. Example: Hardware, Network, Software.
   - **Priority**: Priority of the change.
   - **Risk**: The risk level for the change.
   - **Impact**: The effect that the change has on business.
   - **Configuration Item**: Configuration item (CI) that the change applies to.
   - **Assignment group**:  The group that the change is assigned to.
   - **Schedule of change request**: Schedule of the change as honored by the ServiceNow workflow. Date and time should be in UTC and format should be *yyyy-MM-ddTHH:mm:ssZ*. Example: 2018-01-31T07:56:59Z.
   - **Additional change request parameters**: Name must be field name (not label) prefixed with 'u_'. Example: *u_backout_plan*. Value must be a valid value in ServiceNow. Invalid entries are ignored.
   - **Desired state of change request**: The gate would succeed and the pipeline continues when the change request status is the same as the provided value.
   - **Advanced**: Specifies an expression that controls when this gate should succeed. The change request is defined as *root['result']* in the response from ServiceNow. Example - "and(eq(root['result'].state, 'New'),eq(root['result'].risk, 'Low'))". See [Expressions](../../process/expressions.md) for more details.
   - **Output Variables** : You must specify a reference name to be able to use output variables in your deployment workflow. Gate variables can be accessed by using "PREDEPLOYGATE" as a "prefix" in **an agentless job**. For example when the reference name is set to 'gate1', the change number can be obtained as follows: *$(PREDEPLOYGATE.gate1.CHANGE_REQUEST_NUMBER)*.
   - **CHANGE_REQUEST_NUMBER** : Number of the change request.
   - **CHANGE_SYSTEM_ID** : System Id of the change request.

1. At the end of your release pipeline, add an **Agentless job** with a task **Update ServiceNow Change Request**.

    :::image type="content" source="media/servicenow-06.png" alt-text="A screenshot showing how to configure the Update ServiceNow Change Request task.":::

- **ServiceNow connection**: Connection to the ServiceNow instance used for change management.
- **Change request number**: Number of the change request to update.
- **Updated status of change request** : Status to set for the change request. This input is available if *Update status* is selected.
- **Close code and Close notes**: Return status.

> [!NOTE]
> The Update ServiceNow Change Request task will fail if none of the change request fields are updated during execution. ServiceNow ignores invalid fields and values passed to the task. 

## Create a release pipeline

1. Select **Create release** to start a new release pipeline.

1. Your pipeline should create a new change request in ServiceNow as part of the pre-deployment conditions you created earlier.

    :::image type="content" source="media/servicenow-07.png" alt-text="A screenshot showing the execution of the pre-deployment gate.":::

1. The pipeline will wait for all the gates to succeed within the same sample interval. To check the change number, select the status icon to view your pipeline logs.

    :::image type="content" source="media/servicenow-08.png" alt-text="A screenshot showing the pipeline logs.":::

1. The change request will be queued in ServiceNow and can be viewed by the change owner.

    :::image type="content" source="media/servicenow-09.png" alt-text="A screenshot showing a new change request in ServiceNow.":::
   
1. The release pipeline that triggered the new change request can be found under the **Azure DevOps Pipeline metadata** section.

    :::image type="content" source="media/servicenow-10.png" alt-text="A screenshot showing the release pipeline metadata.":::

1. When the change is ready for implementation (moved to **Implement** state), the pipeline will resume execution and the gate status should return *succeeded*.

    :::image type="content" source="media/servicenow-11.png" alt-text="A screenshot showing the deployment gate status.":::

1. The change request will be closed automatically after deployment.

## Yaml pipelines

This tutorial assumes you have a yaml pipeline with a single stage that deploys to a "latest" environment. 

### Add a check

1. Navigate to your environment "latest", select the ellipsis button and then select **Approvals and checks**.

1. Select the plus sign to add a new check, and then add the **ServiceNow Change Management** check to your environment. Use the same configuration you used for your pre-deployment gate.

    :::image type="content" source="media/servicenow-12.png" alt-text="A screenshot showing how to add a ServiceNow Change Management check.":::

### Add the yaml task

1. Add a [server job](../../process/phases.md#server-jobs) to your stage to update the change request.

   :::image type="content" source="media/servicenow-13.png" alt-text="A screenshot showing the agentless task.":::

1. Save and run your pipeline. A new change request will be automatically created and the pipeline will pause and wait for the checks to complete.

1. Once the checks are completed, the pipeline should resume execution. The change request will be closed automatically after deployment.

:::image type="content" source="media/servicenow-14.png" alt-text="A screenshot showing the pipeline execution.":::

## FAQs

### Q: What versions of ServiceNow are supported?

::: moniker range="azure-devops"

**A**: We support the following versions: Kingston, London, New York, Paris, Quebec, Rome, San Diego, and Tokyo.

::: moniker-end

::: moniker range="<= azure-devops-2022"

**A**: We support the following versions: Kingston, London, New York, Paris, and Quebec.

::: moniker-end

### Q: What types of change request are supported?

**A**: Normal, standard and emergency change requests are supported with this integration.

### Q: How do I set additional change properties?

**A**: You can specify additional change properties from the **Additional change request parameters** field. Use a key-value pairs JSON format, with the name being the field name (not the label) prefixed with `u_`.

### Q: Can I update custom fields in the change request with additional change request parameters?

**A**: If custom fields are defined in the change request, you must [add mapping for custom fields in Import set transform map](https://github.com/Microsoft/azure-pipelines-extensions/tree/master/Extensions/ServiceNow/Src#steps-to-add-mapping-for-custom-fields-in-import-set-transform-map-).

### Q: I don't see drop-down values populated for Category, Status, and other fields. What should I do?

**A**: Change Management Core and Change Management - State Model plugins must be active on your ServiceNow instance for the drop-downs to work. See [Upgrade change management](https://docs.servicenow.com/bundle/quebec-it-service-management/page/product/change-management/task/migrate-change-mgmt-pre-geneva.html) and [Update change request states](https://docs.servicenow.com/bundle/quebec-it-service-management/page/product/change-management/task/state-model-activate-tasks.html) for more details.

## Resources

- [Configure your release pipelines for safe deployments](https://devblogs.microsoft.com/devops/configuring-your-release-pipelines-for-safe-deployments/)
- [Twitter sentiment as a release gate](https://blogs.msdn.microsoft.com/bharry/2017/12/15/twitter-sentiment-as-a-release-gate/)
- [GitHub issues as a release gate](https://www.visualstudiogeeks.com/DevOps/github-issues-as-deployment-gate-in-vsts-rm)
- [Author custom gates](https://github.com/Microsoft/azure-pipelines-tasks/blob/master/docs/authoring/gates.md).
- [ServerTaskHelper Library example](https://github.com/Microsoft/vsts-rm-extensions/tree/master/ServerTaskHelper/DistributedTask.ServerTask.Remote.Common) 

## Related articles

- [Release gates and approvals](index.md)
- [Define approvals and checks](../../process/approvals.md)
- [Set up manual intervention](../deploy-using-approvals.md#set-up-manual-intervention)
- [Use gates and approvals to control your deployment](../../release/deploy-using-approvals.md)
- [Add stages, dependencies, & conditions](../../process/stages.md)
- [Release triggers](../triggers.md)
