---
title: Control releases with deployment gates
ms.custom: seodec18
description: Understand deployment gates in Azure Pipelines
ms.assetid: 0824A7C4-9353-4BDA-B652-5B826E0EF2A5
ms.topic: conceptual
ms.author: sandrica
author: silviuandrica
ms.date: 08/01/2022
monikerRange: '<= azure-devops'
---

# Deployment gates

[!INCLUDE [version-lt-eq-azure-devops](../../../includes/version-lt-eq-azure-devops.md)]

Gates allow automatic collection of health signals from external services and then promote the release when all the signals are successful or stop the deployment on timeout. Typically, gates are used in connection with incident management, problem management, change management, monitoring, and external approval systems.

## Use cases

Some common use cases for deployment gates are:

- **Incident management**: Ensure certain criteria are met before proceeding with deployment. For example, ensure deployment occurs only if no priority zero bugs exist.
- **Seek approvals**: Notify external users such as legal departments, auditors, or IT managers about a deployment by integrating with other services such as Microsoft Teams or Slack and wait for their approvals.
- **Quality validation**: Query pipeline metrics such as pass rate or code coverage and deploy only if they are within a predefined threshold.
- **Security scan**: Perform security checks such as artifacts scanning, code signing, and policy checking. A deployment gate might initiate the scan and wait for it to complete, or just check for completion.
- **User experience relative to baseline**: Using product telemetry, ensure the user experience hasn't regressed from the baseline state. The user experience metrics before the deployment could be used as baseline.
- **Change management**: Wait for change management procedures in a system such as ServiceNow to complete before proceeding with deployment.
- **Infrastructure health**: Execute monitoring and validate the infrastructure against compliance rules after deployment, or wait for healthy resource utilization and a positive security report.

Most of the health parameters vary over time, regularly changing their status from healthy to unhealthy and back to healthy. To account for such variations, all the gates are periodically reevaluated until all of them are successful at the same time. The release execution and deployment does not proceed if all gates do not succeed in the same interval and before the configured timeout.

## Define a gate for a stage

You can enable gates at the start of a stage (Pre-deployment conditions) or at the end of a stage (Post-deployment conditions) or for both. See [Set up gates](../deploy-using-approvals.md#set-up-gates) for more details.

The **Delay before evaluation** is a time delay at the beginning of the gate evaluation process that allows the gates to initialize, stabilize, and begin providing accurate results for the current deployment. see [Gate evaluation flows](#gate-evaluation-flow-examples) for more details.

:::image type="content" source="../media/deploy-using-approvals/set-delay-time-gates.png" alt-text="A screenshot showing the delay before evaluation feature in gates.":::

- For **pre-deployment gates**, the delay would be the time required for all bugs to be logged against the artifacts being deployed.  
- For **post-deployment gates**, the delay would be the maximum of the time taken for the deployed app to reach a steady operational state, the time taken for execution of all the required tests on the deployed stage, and the time it takes for incidents to be logged after the deployment.

The following gates are available by default:

- **Invoke Azure function**: Trigger execution of an Azure function and ensure a successful completion. See [Azure function task](/azure/devops/pipelines/tasks/reference/azure-function-v1) for more details.
- **Query Azure monitor alerts**: Observe the configured Azure monitor alert rules for active alerts. See [Azure monitor task](/azure/devops/pipelines/tasks/reference/azure-monitor-v1) for more details.
- **Invoke REST API**: Make a call to a REST API and continue if it returns a successful response. See [Invoke REST API task](/azure/devops/pipelines/tasks/reference/invoke-rest-api-v1) for more details.
- **Query Work items**: Ensure the number of matching work items returned from a query is within a threshold. See [Query Work Items task](/azure/devops/pipelines/tasks/reference/query-work-items-v0) for more details.
- **Security and compliance assessment**: Assess Azure Policy compliance on resources within the scope of a given subscription and resource group, and optionally at a specific resource level. See [Check Azure Policy compliance task](/azure/devops/pipelines/tasks/reference/azure-policy-check-gate-v0) for more details.

:::image type="content" source="../media/default-gates.png" alt-text="A screenshot showing the default gates.":::

You can also [create your own gates](https://github.com/Microsoft/azure-pipelines-tasks/blob/master/docs/authoring/gates.md) with Marketplace extensions.

The evaluation options that apply to all the gates are:

- **Time between re-evaluation of gates**. The time interval between successive evaluations of the gates. At each sampling interval, new requests are sent concurrently to each gate and the new results are evaluated. It is recommended that the sampling interval is greater than the longest typical response time of the configured gates to allow time for all responses to be received for evaluation.
- **Timeout after which gates fail**. The maximum evaluation period for all gates. The deployment will be rejected if the timeout is reached before all gates succeed during the same sampling interval.
- **Gates and approvals**. Select the required order of execution for gates and approvals if you have configured both. For pre-deployment conditions, the default is to prompt for manual (user) approvals first, then evaluate gates afterwards. This saves the system from evaluating the gate functions if the release is rejected by the user. For post-deployment conditions, the default is to evaluate gates and prompt for manual approvals only when all gates are successful. This ensures the approvers have all the information required to approve.

See [View approvals logs](../deploy-using-approvals.md#set-up-manual-validation) and [Monitor and track deployments](../define-multistage-release-process.md#monitor-track) for more information on gates analytics.

### Gate evaluation flow examples

The following diagram illustrates the flow of gate evaluation where, after the initial stabilization delay period and three sampling intervals, the deployment is approved.

:::image type="content" source="media/gate-results-pass.png" alt-text="A screenshot showing the gates evaluation flow diagram.":::

The following diagram illustrates the flow of gate evaluation where, after the initial stabilization delay period, not all gates have succeeded at each sampling interval. In this case, after the timeout period expires, the deployment is rejected.

:::image type="content" source="media/gate-results-fail.png" alt-text="A screenshot showing examples of gates approvals and failures.":::

## Resources

- [Create custom gates](https://github.com/Microsoft/azure-pipelines-tasks/blob/master/docs/authoring/gates.md)
- [Twitter sentiment as a release gate](https://blogs.msdn.microsoft.com/bharry/2017/12/15/twitter-sentiment-as-a-release-gate/)
- [GitHub issues as a release gate](https://www.visualstudiogeeks.com/DevOps/github-issues-as-deployment-gate-in-vsts-rm)

## Related articles

- [Release gates and approvals overview](index.md)
- [Use gates and approvals to control your deployment](../deploy-using-approvals.md)
- [Add stages, dependencies, & conditions](../../process/stages.md)
- [Release triggers](../triggers.md)
