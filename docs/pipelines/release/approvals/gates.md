---
title: Control deployments with gates in Release Management
description: Understand gated releases in Release Management for Visual Studio Team Services (VSTS) and Team Foundation Server (TFS)
ms.assetid: 0824A7C4-9353-4BDA-B652-5B826E0EF2A5
ms.prod: devops
ms.technology: devops-cicd
ms.topic: conceptual
ms.manager: douge
ms.author: ahomer
author: alexhomer1
ms.date: 04/09/2018
monikerRange: '>= tfs-2017'
---

# Release deployment control using gates 

**VSTS**

Gates allow automatic collection of health signals from external services, and then
promote the release when all the signals are successful at the same time or stop the
deployment on timeout. 
Typically, gates are used in connection with incident management, problem management,
change management, monitoring, and external approval systems. 

## Scenarios for gates

Some scenarios and use cases for gates are:

  * **Incident and issues management**. Ensure the required status for work items, incidents, and issues. For example, ensure deployment occurs only if no priority zero bugs exist, and validation that there are no active incidents takes place after deployment. 
  * **Seek approvals outside VSTS**. Notify non-VSTS users such as legal approval departments, auditors, or IT managers about a deployment by integrating with approval collaboration systems such as Microsoft Teams or Slack, and waiting for the approval to complete.
  * **Quality validation**. Query metrics from tests on the build artifacts such as pass rate or code coverage and deploy only if they are within required thresholds.
  * **Security scan on artifacts**. Ensure security scans such as anti-virus checking, code signing, and policy checking for build artifacts have completed. A gate might initiate the scan and wait for it to complete, or just check for completion.
  * **User experience relative to baseline**. Using product telemetry, ensure the user experience hasn't regressed from the baseline state. The experience level before the deployment could be considered a baseline.
  * **Change management**. Wait for change management procedures in a system such as ServiceNow complete before the deployment occurs.
  * **Infrastructure health**. Execute monitoring and validate the infrastructure against compliance rules after deployment, or wait for healthy resource utilization and a positive security report.

Most of the health parameters vary over time, regularly changing their status from healthy to unhealthy and back to healthy. 
To account for such variations, all the gates are periodically re-evaluated until all of them are successful at the same time. 
The release execution and deployment does not proceed if all gates do not succeed in the same interval and before the configured timeout.

## Define a gate for an environment

1. Enable gates in the **Pre-deployment conditions** or **Post-deployment conditions** panel for an environment. 

   ![Opening the deployment conditions panel](_img/gated-releases-01.png)

1. Specify the required **Delay before evaluation**. This is a time delay at the beginning of gate evaluation 
   process that allows the gates to initialize, stabilize, and begin providing accurate results
   for the current deployment. See [Gate evaluation flows](#eval-examples).

   ![Enabling gates and specifying the delay before evaluation](_img/gated-releases-01a.png)

   As an example:

   * For **pre-deployment gates**, the delay would be the time required for all bugs to be logged
     against the artifacts being deployed.  
   * For **post-deployment gates**, the delay would be the maximum of the time taken for the deployed app
     to reach a steady operational state, the time taken for execution of all the required tests on
     the deployed environment, and the time it takes for incidents to be logged after the deployment.<p />

1. Choose **+ Add** and select the type of release gate you require.

   ![Adding a gate function](_img/add-gates.png)

   The following gates are provided by default:

   * **Invoke Azure function**: Trigger execution of an Azure function and ensure a successful completion.
     For more details, see [Azure function task](../../tasks/utility/azure-function.md).
   * **Query Azure monitor alerts**: Observe the configured Azure monitor alert rules for active alerts.
     For more details, see [Azure monitor task](../../tasks/utility/azure-monitor.md).
   * **Invoke REST API**: Make a call to a REST API and continue if it returns a successful response.
     For more details, see [HTTP REST API task](../../tasks/utility/http-rest-api.md).
   * **Query Work items**: Ensure the number of matching work items returned from a query is within a threshold.
     For more details, see [Work item query task](../../tasks/utility/work-item-query.md).

   You can [create your own gates](https://github.com/Microsoft/vsts-tasks/blob/master/docs/authoring/gates.md) with Marketplace extensions.
   
1. Select and enter the required gate arguments, depending on the type of gate you chose.

   ![Setting the arguments for a gate function](_img/query-workitems.png)

1.  Set the evaluation options that apply to all the gates you've added:

   * **Time between re-evaluation of gates**. The time interval between successive evaluations of 
     the gates. At each sampling interval, new requests are sent concurrently to each gate
     and the new results are evaluated. It is recommended that the sampling interval is greater than the longest
     typical response time of the configured gates to allow time for all responses to be received for evaluation.     

   * **Timeout after which gates fail**. The maximum evaluation period for all gates. 
     The deployment will be rejected if the timeout is reached before all gates succeed during the same sampling interval. 

   * **Gates and approvals**. Select the required order of execution for gates and approvals if you have configured both.
     For pre-deployment conditions, the default is to prompt for manual (user) approvals first, then evaluate gates afterwards.
     This saves the system from evaluating the gate functions if the release is rejected by the user. 
     For post-deployment conditions, the default is to evaluate gates and prompt for manual approvals only when all gates are successful.
     This ensures the approvers have all the information required for a sign-off. 

   ![Selecting the gate and approval evaluation order](_img/gated-releases-04.png)
   
### Gate evaluation flow examples

<a name="eval-examples"></a>The following diagram illustrates the flow of gate evaluation where, after the
initial stabilization delay period and three sampling intervals, the deployment is approved.

![Successful gates](_img/gate-results-pass.png)

The following diagram illustrates the flow of gate evaluation where, after the
initial stabilization delay period, not all gates have succeeded at each sampling interval. In
this case, after the timeout period expires, the deployment is rejected.

![Failed gates](_img/gate-results-fail.png)

## View and monitor gate results
 
1. Open the **Summary** page for your release. As the release executes, the pop-up message when you choose
   the ![info](_img/info-icon.png) icon for an environment indicates the current status of your deployment to each environment.

   ![Gates evaluation during a release](_img/waiting-on-delay-before-evaluation.png)

1. Open the **Logs** page for your release. During and after a deployment, it shows comprehensive information
about the evaluation of all the gates you configured for the release.

   ![Gates log results ](_img/logs-page.png)

## Related topics

* [Approvals and gates overview](index.md)
* [Manual intervention](../../tasks/utility/manual-intervention.md)
* [Use approvals and gates to control your deployment](../../release/deploy-using-approvals.md)
* [Environments](../environments.md)
* [Triggers](../triggers.md)

## See also

* [Video: Deploy quicker and safer with gates in VSTS](https://channel9.msdn.com/Events/Connect/2017/T181)
* [Configure your release pipelines for safe deployments](https://blogs.msdn.microsoft.com/visualstudioalm/2017/04/24/configuring-your-release-pipelines-for-safe-deployments/)
* [Tutorial: Use approvals and gates to control your deployment](../../release/deploy-using-approvals.md)
* [Twitter sentiment as a release gate](https://blogs.msdn.microsoft.com/bharry/2017/12/15/twitter-sentiment-as-a-release-gate/)
* [GitHub issues as a release gate](https://www.visualstudiogeeks.com/DevOps/github-issues-as-deployment-gate-in-vsts-rm)
* [Author custom gates](https://github.com/Microsoft/vsts-tasks/blob/master/docs/authoring/gates.md). [Library with examples](https://github.com/Microsoft/vsts-rm-extensions/tree/master/ServerTaskHelper/DistributedTask.ServerTask.Remote.Common) 


[!INCLUDE [rm-help-support-shared](../../_shared/rm-help-support-shared.md)]
