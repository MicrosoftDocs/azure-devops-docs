---
title: Deployment gates concepts
description: Understand deployment gates in Azure Pipelines
ms.assetid: 0824A7C4-9353-4BDA-B652-5B826E0EF2A5
ms.topic: concept-article
ms.author: sandrica
author: silviuandrica
ms.date: 11/14/2024
monikerRange: '<= azure-devops'
---

# Deployment gates concepts

[!INCLUDE [version-lt-eq-azure-devops](../../../includes/version-lt-eq-azure-devops.md)]

Deployment gates in Azure Pipelines are added to release pipelines to ensure that deployments meet specific criteria before proceeding. Gates are essential for ensuring that deployments are reliable and secure by enforcing rigorous checks leading to more stable and secure software releases.

Gates are defined in the pre-deployment and post-deployment conditions of a release stage. They provide a mechanism to automatically collect health signals from external services, such as Azure Function or REST APIs, to control the promotion of releases based on these signals. Gates work with approvals to ensure that the right stakeholders approve the release and the release meets the necessary quality and compliance criteria.

## Use cases

Some common use cases for deployment gates are:

- **Incident management**: Ensure certain criteria are met before proceeding with deployment. For example, ensure deployment occurs only if no priority zero bugs exist.
- **Seek approvals**: Integrate with Microsoft Teams or Slack to notify external users such as auditors, or IT managers about a deployment and wait for their approvals.
- **Quality validation**: Query pipeline metrics such as pass rate or code coverage and deploy only if they are within a predefined threshold.
- **Security scan**: Perform security checks such as artifacts scanning, code signing, and policy checking. A deployment gate might initiate the scan and wait for it to complete, or just check for completion.
- **User experience relative to baseline**: Use product data collection to ensure the user experience regressions from the baseline state. The user experience metrics before the deployment could be used as baseline.
- **Change management**: Wait for change management procedures in a system such as ServiceNow to complete before proceeding with deployment.
- **Infrastructure health**: Execute monitoring and validate the infrastructure against compliance rules after deployment, or wait for healthy resource utilization and a positive security report.

Most of the health parameters vary over time, regularly changing their status from healthy to unhealthy and back to healthy. To account for such variations, all the gates are periodically reevaluated until all of them are successful at the same time. The release execution and deployment doesn't proceed if all gates don't succeed in the same interval and before the configured timeout.

## Define a gate for a stage

You can enable gates at the start of a stage (**Pre-deployment conditions**) or at the end of a stage (**Post-deployment conditions**) or for both. For more information, see [Set up gates](../deploy-using-approvals.md#set-up-gates).

The **Delay before evaluation** is a time delay at the beginning of the gate evaluation process that allows the gates to initialize, stabilize, and begin providing accurate results for the current deployment. For more information, see [Gate evaluation flows](#gate-evaluation-flow-examples).

:::image type="content" source="../media/deploy-using-approvals/set-delay-time-gates.png" alt-text="A screenshot showing the delay before evaluation feature in gates.":::

- For **pre-deployment gates**, the delay would be the time required for all bugs to be logged against the artifacts being deployed.  
- For **post-deployment gates**, the delay would be the maximum of the time taken for the deployed app to reach a steady operational state, the time taken for execution of all the required tests on the deployed stage, and the time it takes for incidents to be logged after the deployment.

The following gates are available by default:

- **Invoke Azure Function**: Trigger execution of an Azure function and ensure a successful completion. For more information, see [Azure function task](/azure/devops/pipelines/tasks/reference/azure-function-v1).
- **Query Azure mMnitor alerts**: Observe the configured Azure monitor alert rules for active alerts. For more information, see [Azure monitor task](/azure/devops/pipelines/tasks/reference/azure-monitor-v1).
- **Invoke REST API**: Make a call to a REST API and continue if it returns a successful response. For more information, see [Invoke REST API task](/azure/devops/pipelines/tasks/reference/invoke-rest-api-v1).
- **Query work items**: Ensure the number of matching work items returned from a query is within a threshold. For more information, see [Query Work Items task](/azure/devops/pipelines/tasks/reference/query-work-items-v0).
- **Check Azure Policy compliance**: Assess Azure Policy compliance on resources within the scope of a given subscription and resource group, and optionally at a specific resource level. For more information, see [Check Azure Policy compliance task](/azure/devops/pipelines/tasks/reference/azure-policy-check-gate-v0).

:::image type="content" source="../media/default-gates.png" alt-text="A screenshot showing the default gates.":::

You can also [create your own gates](https://github.com/Microsoft/azure-pipelines-tasks/blob/master/docs/authoring/gates.md) with Marketplace extensions.

The evaluation options that apply to all the gates are:

- **Time between re-evaluation of gates**. The time interval between successive evaluations of the gates. At each sampling interval, new requests are sent concurrently to each gate and the new results are evaluated. The recommendation is that the sampling interval is greater than the longest typical response time of the configured gates to allow time for all responses to be received for evaluation.
- **Timeout after which gates fail**. The maximum evaluation period for all gates. The deployment is rejected if the timeout is reached before all gates succeed during the same sampling interval.
- **Gates and approvals**. Select the required order of execution for gates and approvals if you configured both. For pre-deployment conditions, the default is to prompt for manual (user) approvals first, then evaluate gates afterwards saving the system from evaluating the gate functions if the user rejects the release. For post-deployment conditions, the default is to evaluate gates and prompt for manual approvals only when all gates are successful ensuring the approvers have all the information required to approve the release.

For more information about gates analytics, see [View approvals logs](../deploy-using-approvals.md#view-deployment-logs) and [Monitor and track deployments](../define-multistage-release-process.md#monitor-track).

### Gate evaluation flow examples

The following diagram illustrates the flow of gate evaluation where, after the initial stabilization delay period and three sampling intervals, the deployment is approved.

:::image type="content" source="media/gate-results-pass.png" alt-text="A screenshot showing the gates evaluation flow diagram.":::

The following diagram illustrates the flow of gate evaluation where, after the initial stabilization delay period, not all gates succeeded at each sampling interval. In this case, after the timeout period expires, the deployment is rejected.

:::image type="content" source="media/gate-results-fail.png" alt-text="A screenshot showing examples of gates approvals and failures.":::


## Related articles

- [Release gates and approvals overview](index.md)
- [Use gates and approvals to control your deployment](../deploy-using-approvals.md)
- [Classic Release triggers](../triggers.md)
