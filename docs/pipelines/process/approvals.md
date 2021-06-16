---
title: Pipeline deployment approvals
description: Use approvals to determine when a deployment stage can run
ms.topic: conceptual
ms.assetid: 94977D91-5EC7-471D-9D1A-E100390B8FDD
ms.manager: shashban
ms.author: shashban
author: shashban
ms.date: 09/30/2020
monikerRange: azure-devops
---

# Define approvals and checks

[!INCLUDE [include](../includes/version-team-services.md)]

A pipeline is made up of stages. A pipeline author can control whether a stage should run by defining [conditions](conditions.md) on the stage. Another way to control if and when a stage should run is through **approvals and checks**. 

 Pipelines rely on resources such as environments, service connections, agent pools, variable groups, and secure files. Checks enable the _resource owner_ to control if and when a stage in any pipeline can consume a resource. As an owner of a resource, you can define checks that must be satisfied before a stage consuming that resource can start. For example, a _manual approval check_ on an [environment](environments.md) would ensure that deployment to that environment only happens after the designated user(s) has reviewed the changes being deployed. 

A stage can consist of many jobs, and each job can consume several resources. Before the execution of a stage can begin, all checks on all the resources used in that stage must be satisfied. Azure Pipelines pauses the execution of a pipeline prior to each stage, and waits for all pending checks to be completed. Checks are re-evaluation based on the retry interval specified in each check. If all checks are not successful till the **timeout** specified, then that stage is not executed.
If any of the checks terminally fails (for example, if you reject an approval on one of the resources), then that stage is not executed. 

Approvals and other checks are not defined in the yaml file. Users modifying the pipeline yaml file cannot modify the checks performed before start of a stage. Administrators of resources manage checks using the web interface of Azure Pipelines.

> [!IMPORTANT]
> Checks can be configured on environments, service connections, repositories, variable groups, secure files and agent pools.
> Service connections cannot be specified by variable.

## Approvals

You can manually control when a stage should run using approval checks. This is commonly used to control deployments to production environments.

1. In your Azure DevOps project, go to the resource (eg environment) that needs to be protected. 

2. Navigate to **Approvals and Checks** for the resource.

:::image type="content" source="media/checks/approvals-and-checks.png" alt-text="Approvals and Checks on environment.":::
   
3. Select **Create**, provide the approvers and an optional message, and select **Create** again to complete the addition of the manual approval check.

You can add multiple approvers to an environment. These approvers can be individual users or groups of users. When a group is specified as an approver, only one of the users in that group needs to approve for the run to move forward.

Using the advanced options, you can configure minimum number of approvers to complete the approval. A group is considered as one approver. 

You can also restrict the user who requested (initiated or created) the run from completing the approval. This option is commonly used for segregation of roles amongst the users.

When you run a pipeline, the execution of that run pauses before entering a stage that uses the environment. Users configured as approvers must review and approve or reject the deployment. If you have multiple runs executing simultaneously, you must approve or reject each of them independently. If all required approvals are not complete within the **Timeout** specified for the approval and all other checks succeed, the stage is marked skipped.

## Branch control

Using the branch control check, you can ensure all the resources linked with the pipeline are built from the **allowed** branches and that they branches have protection enabled. This helps in control the release readiness and quality of deployments. In case multiple resources are linked with the pipeline, source for all the resources is verified. If you have linked another pipeline, then the branch of the specific run being deployed is verified for protection.

To define the branch control check:

1. In your Azure DevOps project, go to the resource (eg environment) that needs to be protected. 

2. Navigate to **Approvals and Checks** for the resource.

3. Choose the **Branch control** check and provide a comma separated list of allowed branches. You can mandate that the branch should have protection enabled and the behavior of the check in case protection status for one of the branches is not known.

:::image type="content" source="media/checks/branch-control-check.png" alt-text="Configuring branch control check.":::

At run time, the check would validate branches for all linked resources in the run against the allowed list. If any one of the branches do not match the criteria, the check fails and the stage is marked failed. 

> [!NOTE]
> The check requires the branch names to be fully qualified. Make sure the format for branch name is `refs/heads/<branch name>`

## Business hours

In case you want all deployments to your environment to happen in a specific time window only, then business hours check is the ideal solution. When you run a pipeline, the execution of the stage that uses the resource waits for business hours. If you have multiple runs executing simultaneously, each of them is independently verified. At the start of the business hours, the check is marked successful for all the runs. 

:::image type="content" source="media/checks/business-hours-check.png" alt-text="Configuring business hours check.":::

If execution of the stage has not started at the end of business hours (held up by to some other check), then the business hours approval is automatically withdrawn and a re-evaluation is scheduled for the next day.
The check fails if execution of the stage does not start within the **Timeout** period specified for the check, and the stage is marked failed.

## Invoke Azure function

Azure functions are the serverless computation platform offered by Azure. With Azure functions, you can run small pieces of code (called "functions") without worrying about application infrastructure. 
Given the high flexibility, Azure functions provide a great way to author your own checks. You include the logic of the check in Azure function such that each execution is triggered on http request, has a short execution time and returns a response. While defining the check, you can parse the response body to infer if the check is successful. The evaluation can be repeated periodically using the Time between evaluations setting in control options. [Learn More](../tasks/utility/azure-function.md)

:::image type="content" source="media/checks/azure-function-check.png" alt-text="Configuring Azure function check.":::

The checks fails if the stage has not started execution within the specified **Timeout** period.  

> [!NOTE]
> User defined pipeline variables are not accessbile to the check. You can only access the pre-defined variables and variables from the linked variable group in the request body.


## Invoke REST API

Invoke REST API check enables you to integrate with any of your existing services. Periodically, make a call to a REST API and continue if it returns a successful response. [Learn More](../tasks/utility/http-rest-api.md)

The evaluation can be repeated periodically using the **Time between evaluations** setting in control options. The checks fails if the stage has not started execution within the specified **Timeout** period.  

> [!NOTE]
> User defined pipeline variables are not accessbile to the check. You can only access the pre-defined variables and variables from the linked variable group in the request body.

## Query Azure Monitor Alerts
Azure Monitor offers visualization, query, routing, alerting, autoscale, and automation on data from the Azure infrastructure and each individual Azure resources. Alerts are a standard means to detect issues with the health of infrastructure or application, and take corrective actions. 
Canary deployments and staged rollouts are common deployment strategies used to lower risk of regressions to critical applications. After deploying to a stage (set of customers), the application is observed for a period of time. Health of the application after deployment is used to decide whether the update should be made to the next stage or not.

Query Azure Monitor Alerts helps you observe Azure Monitor and ensure no alerts are raised for the application after a deployment. The check succeeds if no alert rules are activated at the time of evaluation. [Learn More](../tasks/utility/azure-monitor.md)

The evaluation is repeated after **Time between evaluations** setting in control options. The checks fails if the stage has not started execution within the specified **Timeout** period.  

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

The **exclusive lock** check allows only a single run from the pipeline to proceed.
All stages in all runs of that pipeline which use the resource are paused.
When the stage using the lock completes, then another stage can proceed to use the resource.
Also, only one stage will be allowed to continue.
Any other stages which tried to take the lock will be cancelled.

## ServiceNow Change Management

**This checks needs the [ServiceNow Change Management extension](https://marketplace.visualstudio.com/items?itemName=ms-vscs-rm.vss-services-servicenowchangerequestmanagement) to be installed from the marketplace**

The **servicenow change management** check allows for an integration of ServiceNow change management process in the pipelines. 
By adding the check, a new change request in ServiceNow can be automatically created at the start of the stage. The pipeline waits for the change process to complete before starting the stage.
More details are available [here](../release/approvals/servicenow.md).

## FAQ

### The checks defined did not start. What happened?
The evaluation of checks starts once the stage conditions are satisfied. You should confirm run of the stage started after the checks were added on the resource and that the resource is consumed in the stage.

### How can I use checks for scheduling a stage?
Using the business hours check, you can control the time for start of stage execution. You can achieve the same behavior as [predefined schedule on a stage](../release/triggers.md?#stage-scheduled-triggers) in designer releases. 

### How can I take advance approvals for a stage scheduled to run in future?
This scenario can be enabled 
1.	The business hours check enables all stages deploying to a resource to be scheduled for execution between the time window
2.	When approvals configured on the same resource, then the stage would wait for approvals before starting.
3.	You can configure both the checks on a resource. The stage would wait on approvals and business hours. It would start in the next scheduled window after approvals are complete. 

### Can I wait for completion of security scanning on the artifact being deployed?
In order to wait for completion of security scanning on the artifact being deployed, you would need to use an external scanning service like AquaScan. The artifact being deployed would need to be uploaded at a location accessible to the scanning service before the start of checks, and can be identified using [pre-defined variables](../build/variables.md?tabs=yaml#build-variables).
Using the Invoke REST API check, you can add a check to wait on the API in the security service and pass the artifact identifier as an input.

### How can I use output variables from previous stages in a check?
By default, only pre-defined variables are available to checks. You can use a linked variable group to access other variables. The output variable from the previous stage can be written to the variable group and accessed in the check.


