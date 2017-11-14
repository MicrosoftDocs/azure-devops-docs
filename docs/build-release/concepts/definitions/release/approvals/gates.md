---
title: Gates in Release Management
description: Understand gated releases in Release Management for Visual Studio Team Services (VSTS) and Team Foundation Server (TFS)
ms.assetid: 0824A7C4-9353-4BDA-B652-5B826E0EF2A5
ms.prod: vs-devops-alm
ms.technology: vs-devops-build
ms.manager: douge
ms.author: ahomer
ms.date: 09/26/2017
---

# Gates

**VSTS**

## Overview

Release gates allow you to configure information-driven approvals for deployments of a release
to an environment, based on the result of a query against a range of external services.

## Define a release gate for an environment

Enable release gates in the **Pre-deployment conditions** or 
**Post-deployment conditions** panel for an environment. 

![Opening the deployment conditions panel](_img/gated-releases-01.png)

Specify the **Delay before evaluation** for all the gates
you intend to use. This is a stabilization time delay at the beginning of the initial gate evaluation 
process that allows the gates to initialize and start providing results relevant
to the current release. 

![Enabling gates and specifying the stabilization time](_img/gated-releases-01a.png)

>As an example, for **pre-deployment gates**, stabilization time would be the time
required for all bugs to be logged against the artifacts being deployed.  
>For **post-deployment gates**, stabilization time would be the
maximum time taken for the deployed app to reach a steady operational state,
the time taken for execution of all the required tests on the deployed
environment, and the least time it takes for incidents to be logged after the deployment.       

Choose **+ Add**, and select the type of release gate you require.

![Adding a gate function](_img/gated-releases-02.png)

Select and enter the required parameters, depending on the type of gate you chose.
At present the gate types include:

[!INCLUDE [gate-task-list](_shared/gate-task-list.md)]

![Setting the parameters for a gate function](_img/gated-releases-03.png)

Set the options that apply to all the gates you added:

* **Timeout**. The maximum evaluation period for all gates. 
  The deployment will be rejected if the timeout is reached before
  all gates succeed during the same sampling interval. 

* **Sampling interval**. The time interval between each evaluation of 
  all the gates, effectively the frequency and duration of gate evaluation. 
  At each sampling interval, new requests are sent concurrently to each gate
  for fresh results. The sampling interval must be greater than the longest
  typical response time of any configured gate to allow time for all responses to be received.     

* **Execution order**. Select the required order of execution for gates and approvals if you have configured both.
  For pre-deployment conditions, the default is to prompt for manual (user) approvals first, then evaluate gates afterwards.
  This saves the system from evaluating the gate functions if the release is rejected by the user. 
  For post-deployment conditions, the default is to evaluate gates and prompt for manual approvals only when all gates are successful.
  This ensures the approvers have all the information required for a quality sign-off. 

![Selecting the gate and approval evaluation order](_img/gated-releases-04.png)

The following diagram illustrates the flow of gate evaluation where, after the
initial stabilization delay period and three sampling intervals, the deployment is approved.

![Successful gates](_img/gate-results-pass.png)

The following diagram illustrates the flow of gate evaluation where, after the
initial stabilization delay period, not all gates have succeeded at each sampling interval. In
this case, after the timeout period expires, the deployment is rejected.

![Failed gates](_img/gate-results-fail.png)

## View and monitor gate results
 
As a release executes, the **Summary** page shows a pop-up message when you choose
the **(i)** icon for an environment. Use this to see the current status of your release.

![Gates evaluation during a release](_img/gate-inprogress.png)

During and after a deployment, the **Logs** page shows comprehensive information
about the evaluation of all the gates you configured for the release.

![Gates log results ](_img/gate-results-view.png)

## Related topics

* [Approvals and gates overview](index.md)
* [Manual intervention](../../../../tasks/utility/manual-intervention.md)
* [Environments](../environments.md)
* [Triggers](../triggers.md)

## See also

* [Work with release definitions](../../../../actions/work-with-release-definitions.md)
* [View and manage releases](../../../../actions/view-manage-releases.md)
* [Monitor releases and debug deployment issues](../../../../actions/debug-deployment-issues.md)
* [Configure your release pipelines for safe deployments](https://blogs.msdn.microsoft.com/visualstudioalm/2017/04/24/configuring-your-release-pipelines-for-safe-deployments/)

[!INCLUDE [rm-help-support-shared](../../../../_shared/rm-help-support-shared.md)]
