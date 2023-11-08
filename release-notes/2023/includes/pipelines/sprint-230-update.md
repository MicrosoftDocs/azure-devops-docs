---
author: ckanyika
ms.author: ckanyika
ms.date: 11/14/2023
ms.topic: include
---

### Upgrade AzDO owned tasks to Node 16


### task deprecation warning and retirement date TBD

### AzureRmWebAppDeploymentV3/4 

### Improvements to Approvals REST API

We improved searching for approvals assigned to a user more by including in the results approvals assigned to groups the user belongs to.

Approvals now contain information about the pipeline run they belong to.

### Bypass Approvals and Checks

[Approvals and checks]() help protect access to important resources, such as service connections, repos, or agent pools. A common use case is to use Approvals and Checks when deploying to production, and you wish to protect the ARM Prod service connection. 

Say you added the following checks on the service connection: an Approval, a Business Hours check, and an Invoke Azure Function check (to enforce a delay between different regions).

Now, imagine you have to do a hotfix deployment. You start a pipeline run, but it doesn't proceed, it waits for most of the checks to complete. You cannot afford to wait for the approvals and checks to complete.

In this sprint we've added the possibility to bypass running approvals and checks, so you can completed your hotfix. 

You can bypass running Approvals, Business Hours, Invoke Azure Function, and Invoke REST API checks.

Bypass an Approval.
> [!div class="mx-imgBorder"]
> ![Screenshot of Bypass an Approval.](../../media/230-pipelines-01.png " Screenshot of Bypass an Approval.")

Bypass Business Hours check.
> [!div class="mx-imgBorder"]
> ![Screenshot of Bypass Business Hours check.](../../media/230-pipelines-02.png " Screenshot of Bypass Business Hours check.")

Bypass Invoke Azure Function check.
Bypass Business Hours check.
> [!div class="mx-imgBorder"]
> ![Screenshot of Bypass Invoke Azure Function check.](../../media/230-pipelines-03.png " Screenshot of Bypass Invoke Azure Function check.")

When a check is bypassed, you can see this in the checks panel.
> [!div class="mx-imgBorder"]
> ![Screenshot of check bypassed.](../../media/230-pipelines-04.png " Screenshot of check bypassed.")

You can bypass a check only if you are an Administrator of the resource on which the checks were defined.

### Support repository type

### Rerun Invoke Azure Function checks

Imagine you deploy your system in multiple stages. Before deploying the second stage, there is an Approval and an Invoke Azure Function check that runs a sanity check on the already-deployed part of the system. 

Say you come to review the Approval request and you notice the sanity check ran 2 days ago. Say you are aware there was another deployment that might have affected the result of the sanity check.

Starting with this sprint, you'll be able to rerun Invoke Azure Function and Invoke REST API check.

> [!div class="mx-imgBorder"]
> ![Screenshot of dynamic check.](../../media/230-pipelines-05.png " Screenshot of dynamic check.")