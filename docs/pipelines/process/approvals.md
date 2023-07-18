---
title: Pipeline deployment approvals
description: Use approvals to determine when a deployment stage can run
ms.topic: conceptual
ms.assetid: 94977D91-5EC7-471D-9D1A-E100390B8FDD
ms.manager: shashban
ms.author: shashban
author: shashban
ms.date: 07/13/2022
monikerRange: ">= azure-devops-2020"
---

# Define approvals and checks

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

A pipeline is made up of stages. A pipeline author can control whether a stage should run by defining [conditions](conditions.md) on the stage. Another way to control if and when a stage should run is through **approvals and checks**. 

 Pipelines rely on resources such as environments, service connections, agent pools, variable groups, and secure files. Checks enable the _resource owner_ to control if and when a stage in any pipeline can consume a resource. As an owner of a resource, you can define checks that must be satisfied before a stage consuming that resource can start. For example, a _manual approval check_ on an [environment](environments.md) would ensure that deployment to that environment only happens after the designated user(s) has reviewed the changes being deployed. 

A stage can consist of many jobs, and each job can consume several resources. Before the execution of a stage can begin, all checks on all the resources used in that stage must be satisfied. Azure Pipelines pauses the execution of a pipeline prior to each stage, and waits for all pending checks to be completed. Checks are reevaluated based on the retry interval specified in each check. If all checks aren't successful until the **timeout** specified, then that stage is not executed.
If any of the checks terminally fails (for example, if you reject an approval on one of the resources), then that stage is not executed. 

Approvals and other checks aren't defined in the yaml file. Users modifying the pipeline yaml file can't modify the checks performed before start of a stage. Administrators of resources manage checks using the web interface of Azure Pipelines.

> [!IMPORTANT]
> Checks can be configured on environments, service connections, repositories, variable groups, secure files, and agent pools.
> 
> Service connections cannot be specified by variable.

## Approvals

You can manually control when a stage should run using approval checks. This check is commonly used to control deployments to production environments.

1. In your Azure DevOps project, go to the resource (for example, environment) that needs to be protected. 

2. Navigate to **Approvals and Checks** for the resource.

:::image type="content" source="media/checks/approvals-and-checks.png" alt-text="Approvals and Checks on environment.":::
   
3. Select **Create**, provide the approvers and an optional message, and select **Create** again to complete the addition of the manual approval check.

You can add multiple approvers to an environment. These approvers can be individual users or groups of users. When a group is specified as an approver, only one of the users in that group needs to approve for the run to move forward.

Using the advanced options, you can configure minimum number of approvers to complete the approval. A group is considered as one approver. 

You can also restrict the user who requested (initiated or created) the run from completing the approval. This option is commonly used for segregation of roles amongst the users.

When you run a pipeline, the execution of that run pauses before entering a stage that uses the environment. Users configured as approvers must review and approve or reject the deployment. If you have multiple runs executing simultaneously, you must approve or reject each of them independently. If all required approvals aren't completed within the **Timeout** specified for the approval and all other checks succeed, the stage is marked as skipped.

## Branch control

Using the branch control check, you can ensure all the resources linked with the pipeline are built from the **allowed** branches and that the branches have protection enabled. This check helps in controlling the release readiness and quality of deployments. In case multiple resources are linked with the pipeline, source for all the resources is verified. If you've linked another pipeline, then the branch of the specific run being deployed is verified for protection.

To define the branch control check:

1. In your Azure DevOps project, go to the resource (for example, environment) that needs to be protected. 

2. Navigate to **Approvals and Checks** for the resource.

3. Choose the **Branch control** check and provide a comma-separated list of allowed branches. You can mandate that the branch should have protection enabled. You can also define the behavior of the check in case protection status for one of the branches isn't known.

:::image type="content" source="media/checks/branch-control-check.png" alt-text="Configuring branch control check.":::

At run time, the check would validate branches for all linked resources in the run against the allowed list. If any of the branches doesn't match the criteria, the check fails and the stage is marked failed. 

> [!NOTE]
> The check requires the branch names to be fully qualified. Make sure the format for branch name is `refs/heads/<branch name>`

## Business hours

In case you want all deployments to your environment to happen in a specific time window only, then business hours check is the ideal solution. When you run a pipeline, the execution of the stage that uses the resource waits for business hours. If you have multiple runs executing simultaneously, each of them is independently verified. At the start of the business hours, the check is marked successful for all the runs. 

:::image type="content" source="media/checks/business-hours-check.png" alt-text="Configuring business hours check.":::

If execution of the stage hasn't started at the end of business hours (held up by to some other check), then the business hours approval is automatically withdrawn and a reevaluation is scheduled for the next day.
The check fails if execution of the stage doesn't start within the **Timeout** period specified for the check, and the stage is marked as  failed.

## Invoke Azure function

Azure functions are the serverless computation platform offered by Azure. With Azure functions, you can run small pieces of code (called "functions") without worrying about application infrastructure. 
Given the high flexibility, Azure functions provide a great way to author your own checks. You include the logic of the check-in Azure function such that each execution is triggered on http request, has a short execution time and returns a response. While defining the check, you can parse the response body to infer if the check is successful. The evaluation can be repeated periodically using the Time between evaluations setting in control options. [Learn More](/azure/devops/pipelines/tasks/reference/azure-function-v1)

:::image type="content" source="media/checks/azure-function-check.png" alt-text="Configuring Azure function check.":::

The checks fail if the stage has not started execution within the specified **Timeout** period. See [Azure Function App task](/azure/devops/pipelines/tasks/reference/azure-function-app-v1) for more details.

> [!NOTE]
> User defined pipeline variables are not accessible to the check. You can only access the predefined variables and variables from the linked variable group in the request body.

[Read more about the recommended way to use Invoke Azure Function checks](invoke-checks.md). Checks [need to follow specific rules](invoke-checks.md#check-compliance) depending on their mode and the number of retries to be compliant. 

## Invoke REST API

Invoke REST API check enables you to integrate with any of your existing services. Periodically, make a call to a REST API and continue if it returns a successful response. [Learn More](/azure/devops/pipelines/tasks/reference/invoke-rest-api-v1)

The evaluation can be repeated periodically using the **Time between evaluations** setting in control options. The checks fail if the stage has not started execution within the specified **Timeout** period. See [Invoke REST API task](/azure/devops/pipelines/tasks/reference/invoke-rest-api-v1) for more details.

> [!NOTE]
> User defined pipeline variables are not accessible to the check. You can only access the predefined variables and variables from the linked variable group in the request body.

[Read more about the recommended way to use Invoke REST API checks](invoke-checks.md).

## Query Azure Monitor Alerts
Azure Monitor offers visualization, query, routing, alerting, autoscale, and automation on data from the Azure infrastructure and each individual Azure resource. Alerts are a standard means to detect issues with the health of infrastructure or application, and take corrective actions. 
Canary deployments and staged rollouts are common deployment strategies used to lower risk of regressions to critical applications. After deploying to a stage (set of customers), the application is observed for a period of time. Health of the application after deployment is used to decide whether the update should be made to the next stage or not.

Query Azure Monitor Alerts helps you observe Azure Monitor and ensure no alerts are raised for the application after a deployment. The check succeeds if no alert rules are activated at the time of evaluation. [Learn More](/azure/devops/pipelines/tasks/reference/azure-monitor-v1)

The evaluation is repeated after **Time between evaluations** setting in control options. The checks fail if the stage hasn't started execution within the specified **Timeout** period.  

## Required template

With the required template check, you can enforce pipelines to use a specific YAML template. When this check is in place, a pipeline will fail if it doesn't extend from the referenced template. 

To define a required template approval:

1. In your Azure DevOps project, go to the [service connection](../library/service-endpoints.md) that you want to restrict. 

2. Open **Approvals and Checks** in the menu next to **Edit**. 

3. In the **Add your first check** menu, select  **Required template**. 

4. Enter details on how to get to your required template file. 
    * **Repository type**: The location of your repository (GitHub, Azure, or Bitbucket).
    * **Repository**: The name of your repository that contains your template. 
    * **Ref**: The branch or tag of the required template. 
    * **Path to required template**: The name of your template. 


You can have multiple required templates for the same service connection. In this example, the required template is `required.yml`.

:::image type="content" source="media/checks/required-template.png" alt-text="Configuring required template check.":::

## Disable a check

When debugging a check, you may want to temporarily disable and then enable it again. To disable or enable a check:

1. In your Azure DevOps project, go to the resource with a check.  

2. Open **Approvals and Checks**. 

3. In the contextual menu, select **Disable** or **Enable**. 

    :::image type="content" source="media/checks/disable-check-approvals.png" alt-text="Screenshot of disable a check option.":::

## Evaluate artifact

You can evaluate artifact(s) to be deployed to an environment against custom policies.

> [!NOTE]
> Currently, this works with container image artifacts only

To define a custom policy evaluation over the artifact(s), follow the below steps.

1. In your Azure DevOps Services project, navigate to the environment that needs to be protected. Learn more about [creating an environment](environments.md).

:::image type="content" source="media/checks/environments.png" alt-text="View environment.":::


2. Navigate to **Approvals and checks** for the environment.

:::image type="content" source="media/checks/approvals-and-checks.png" alt-text="Add checks to environment.":::

3. Select **Evaluate artifact**.
    
:::image type="content" source="media/checks/evaluate-artifact.png" alt-text="Add evaluate artifact check.":::
   
4. Paste the policy definition and click **Save**. [See more](artifact-policy.md) about writing policy definitions.

:::image type="content" source="media/checks/policy-definition.png" alt-text="Add policy definition.":::
 
When you run a pipeline, the execution of that run pauses before entering a stage that uses the environment. The specified policy is evaluated against the available image metadata. The check passes when the policy is successful and fails otherwise. The stage is marked failed if the check fails.

### [Passed](#tab/check-pass)

:::image type="content" source="media/checks/checks-passed.png" alt-text="Viewing passed checks.":::

You can also see the complete logs of the policy checks from the pipeline view.

:::image type="content" source="media/checks/policy-check-pass-logs.png" alt-text="Viewing passed check logs.":::

### [Failed](#tab/check-failed)

:::image type="content" source="media/checks/checks-failed.png" alt-text="Viewing failed check logs.":::

You can also see the complete logs of the policy checks from the pipeline view.

:::image type="content" source="media/checks/policy-check-failed-logs.png" alt-text="Viewing detailed logs.":::

* * *

## Exclusive lock

:::moniker range="> azure-devops-2020"

The **exclusive lock** check allows only a single run from the pipeline to proceed. All stages in all runs of that pipeline that use the resource are paused. When the stage using the lock completes, then another stage can proceed to use the resource. Also, only one stage will be allowed to continue.

The behavior of any other stages that attempt to take a lock is configured by the `lockBehavior` value that is configured in the YAML file for the pipeline.

* `runLatest` - Only the latest run acquires the lock to the resource. `runLatest` is the default if no `lockBehavior` is specified.
* `sequential` - All runs acquire the lock sequentially to the protected resource.

To use exclusive lock check with `sequential` deployments or `runLatest`, follow these steps:

 1. Enable the exclusive lock check on the environment (or another protected resource).
 2. In the YAML file for the pipeline, specify a property called `lockBehavior`. This can be specified for the whole [pipeline](/azure/devops/pipelines/yaml-schema/pipeline) or for a given [stage](/azure/devops/pipelines/yaml-schema/stages-stage):

Set on a stage:

```yaml
stages:
- stage: A
  lockBehavior: sequential
  jobs:
  - job: Job
    steps:
    - script: Hey!
```
Set on the pipeline:

```yaml
lockBehavior: runLatest
stages:
- stage: A
  jobs:
  - job: Job
    steps:
    - script: Hey!
```

If you don't specify a `lockBehavior`, the default value of `runLatest` is used. 

:::moniker-end

:::moniker range="=azure-devops-2020"

The **exclusive lock** check allows only a single run from the pipeline to proceed.
All stages in all runs of that pipeline that use the resource are paused.
When the stage using the lock completes, then another stage can proceed to use the resource.
Also, only one stage will be allowed to continue.
Any other stages that tried to take the lock will be canceled.

:::moniker-end

## ServiceNow Change Management

**This checks needs the [ServiceNow Change Management extension](https://marketplace.visualstudio.com/items?itemName=ms-vscs-rm.vss-services-servicenowchangerequestmanagement) to be installed from the marketplace**

The **servicenow change management** check allows for an integration of ServiceNow change management process in the pipelines. 
By adding the check, a new change request in ServiceNow can be automatically created at the start of the stage. The pipeline waits for the change process to complete before starting the stage.
More details are available [here](../release/approvals/servicenow.md).


## Multiple Approvals and Checks

A stage can consist of many jobs, and each job can consume several resources. Before the execution of a stage can begin, all checks on all the resources used in that stage must be satisfied. Azure Pipelines pauses the execution of a pipeline prior to each stage, and waits for all pending checks to be completed.

A single final negative decision causes the pipeline to be denied access and the stage to fail. The decisions of all Approvals and Checks except for Invoke Azure Function / REST API and [Exclusive lock](#exclusive-lock) are final.

When using Invoke Azure Function / REST API checks in the [recommended way](invoke-checks.md), their access decisions are also final. 

When you specify _Time between evaluations_ for an Invoke Azure Function / REST API check to be non-zero, the check's decision is non-final. This scenario is worth exploring. 

Let us look at an example. Imagine your YAML pipeline has a stage that uses a Service Connection. This Service Connection has two checks configured for it:
1. An asynchronous check, named _External Approval Granted_, that verifies that [an external approval is given](invoke-checks.md#external-approval-must-be-granted) and is configured in the recommended way.
1. A synchronous check, named _Deployment Reason Valid_, that verifies that [the deployment reason is valid](invoke-checks.md#deployment-reason-must-be-valid) and for which you set the _Time between evaluations_ to 7 minutes.

A possible checks execution is shown in the following diagram.
:::image type="content" source="media/checks/checks-timeline.png" alt-text="Diagram that shows the timeline of an asynchronous and a synchronous checks' executions.":::

In this execution:
- Both checks, _External Approval Granted_ and _Deployment Reason Valid_, are invoked at the same time. _Deployment Reason Valid_ fails immediately, but because _External Approval Granted_ is pending, it will be retried. 
- At minute 7, _Deployment Reason Valid_ is retried and this time it passes. 
- At minute 15, _External Approval Granted_ calls back into Azure Pipelines with a successful decision. Now, both checks pass, so the pipeline is allowed to continue to deploy the stage.

Let us look at another example, involving two synchronous checks. Assume your YAML pipeline has a stage that uses a Service Connection. This Service Connection has two checks configured for it:
1. A synchronous check, named _Sync Check 1_, for which you set the _Time between evaluations_ to 5 minutes.
1. A synchronous check, named _Sync Check 2_, for which you set the _Time between evaluations_ to 7 minutes.

A possible checks execution is shown in the following diagram.
:::image type="content" source="media/checks/checks-timeline-sync.png" alt-text="Diagram that shows the timeline of two synchronous checks' executions.":::

In this execution:
- Both checks, _Sync Check 1_ and _Sync Check 2_, are invoked at the same time. _Sync Check 1_ passes, but it will be retried, because _Sync Check 2_ fails. 
- At minute 5, _Sync Check 1_ is retried but fails, so it will be retried.
- At minute 7, _Sync Check 2_ is retried and succeeds. The pass decision is valid for 7 minutes. If _Sync Check 1_ doesn't pass in this time interval, _Sync Check 2_ will be retried.
- At minute 10, _Sync Check 1_ is retried but fails, so it will be retried.
- At minute 14, _Sync Check 2_ is retried and succeeds. The pass decision is valid for 7 minutes. If _Sync Check 1_ doesn't pass in this time interval, _Sync Check 2_ will be retried.
- At minute 15, _Sync Check 1_ is retried and succeeds. Now, both checks pass, so the pipeline is allowed to continue to deploy the stage.

Let us look at an example that involves an Approval and a synchronous check. Imagine you configured a synchronous check and an Approval for a Service Connection with a _Time between evaluations_ of 5 minutes. Until the approval is given, your check will run every 5 minutes, regardless of decision.

## FAQ

### The checks defined did not start. What happened?
The evaluation of checks starts once the stage conditions are satisfied. You should confirm run of the stage started after the checks were added on the resource and that the resource is consumed in the stage.

### How can I use checks for scheduling a stage?
Using the business hours check, you can control the time for start of stage execution. You can achieve the same behavior as [predefined schedule on a stage](../release/triggers.md?#stage-scheduled-triggers) in designer releases. 

### How can I take advance approvals for a stage scheduled to run in future?
This scenario can be enabled 
1.	The business hours check enables all stages deploying to a resource to be scheduled for execution between the time window
2.	When approvals are configured on the same resource, the stage would wait for approvals before starting.
3.	You can configure both the checks on a resource. The stage would wait on approvals and business hours. It would start in the next scheduled window after approvals are complete. 

### Can I wait for completion of security scanning on the artifact being deployed?
In order to wait for completion of security scanning on the artifact being deployed, you would need to use an external scanning service like AquaScan. The artifact being deployed would need to be uploaded at a location accessible to the scanning service before the start of checks, and can be identified using [predefined variables](../build/variables.md?tabs=yaml#build-variables).
Using the Invoke REST API check, you can add a check to wait on the API in the security service and pass the artifact identifier as an input.

### How can I use output variables from previous stages in a check?
By default, only predefined variables are available to checks. You can use a linked variable group to access other variables. The output variable from the previous stage can be written to the variable group and accessed in the check.


## Learn more
- [Invoke Azure Function / REST API checks](invoke-checks.md)
- [Approvals and Checks REST API](/rest/api/azure/devops/approvalsandchecks/)
- [Approvals Query REST API](/rest/api/azure/devops/approvalsandchecks/approvals/query)
