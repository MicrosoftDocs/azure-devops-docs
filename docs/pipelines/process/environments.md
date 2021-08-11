---
title: Create target environment
description: Collection of deployment targets useful for traceability and for recording deployment history.
ms.topic: conceptual
ms.assetid: 4abec444-5d74-4959-832d-20fd0acee81d
ms.date: 06/02/2021
monikerRange: '>= azure-devops-2020'
---

# Create and target an environment

[!INCLUDE [include](../includes/version-server-2020-rtm.md)]

An environment is a collection of resources that can be targeted by pipeline deployments.
<!---
Typical examples of environment names are Dev, Test, Quality assurance (QA), Staging, and Production.


|Environment task  |Description |
|---------|---------|
|**[View deployment history](#view-deployment-history)**    | Identify the source of changes.        |
|**Trace commits and work items**    | View jobs within the pipeline run that target an environment. See the [commits and work items](#deployment-history) that get deployed to the environment.        |
|**Diagnose resource health**     | Validate whether the application is functioning at its desired state.        |
|**Manage permissions**     |Secure environments by specifying which users and pipelines are allowed to target an environment.         |
-->

While an environment is a grouping of resources, the resources themselves represent actual deployment targets. We support the [Kubernetes resource](environments-kubernetes.md) and [Virtual machines resource](environments-virtual-machines.md) types.

<a name="creation"></a>

## Create an environment

1. Sign in to your Azure DevOps organization and go to your project.

2. Select **Pipelines** > **Environments** > **Create environment**.

   > [!div class="mx-imgBorder"]
   > ![Environments](media/environments-nav.png)

3. Enter information for your environment, and then select **Create**. Resources can be added to an existing environment later.

> [!TIP]
> You can create an empty environment and reference it from deployment jobs. This action lets you record the deployment history against the environment.

> [!NOTE]
> You can use a Pipeline to create and deploy to environments as well. To learn more, see the [how to guide](../ecosystems/kubernetes/aks-template.md).

<a name="target-from-deployment-job"></a>

## Target an environment from a deployment job

A [deployment job](deployment-jobs.md) is a collection of steps to be run sequentially. A deployment job can be used to target an entire environment (group of resources) as shown in the following YAML snippet.

```YAML
- stage: deploy
  jobs:
  - deployment: DeployWeb
    displayName: deploy Web App
    pool:
      vmImage: 'Ubuntu-latest'
    # creates an environment if it doesn't exist
    environment: 'smarthotel-dev'
    strategy:
      runOnce:
        deploy:
          steps:
          - script: echo Hello world
```

> [!NOTE]
> If the specified environment doesn't already exist, an empty environment is created using the environment name provided.

<a name="target-resource-from-deployment-job"></a>

## Target a specific resource within an environment from deployment job

You can scope the target of deployment to a particular resource within the environment. This allows you to record deployment history on a specific resource within the environment. The steps of the deployment job **automatically inherit** the service connection details from the resource targeted by the deployment job. 

```YAML
environment: 'smarthotel-dev.bookings'
strategy: 
 runOnce:
   deploy:
     steps:
     - task: KubernetesManifest@0
       displayName: Deploy to Kubernetes cluster
       inputs:
         action: deploy
         namespace: $(k8sNamespace)
         manifests: $(System.ArtifactsDirectory)/manifests/*
         imagePullSecrets: $(imagePullSecret)
         containers: $(containerRegistry)/$(imageRepository):$(tag)
         # value for kubernetesServiceConnection input automatically passed down to task by environment.resource input
```

<a name="in-run-details"></a>

## Environment in run details

All  environments targeted by deployment jobs of a specific run of a pipeline can be found under the *Environments* tab of pipeline run details.

  > [!div class="mx-imgBorder"]
  > ![Environments in run details](media/environments-run.png)
  
> [!TIP]
> If you're using an AKS private cluster, the **Environments** tab isn't available.

## Manage approvals

Use approval checks to do the following tasks:

- Manually control when a stage should run and consume a resource.
- Control deployments to production environments.

### Prerequisites

- You must be assigned to the Creator or Administrator role to manage approvals and checks. The Reader role doesn't allow you to manage approvals.

Checks are a mechanism available to the *resource owner* to control when a stage in a pipeline consumes a resource. As the owner of a resource, such as an environment, you can [define approvals and checks](approvals.md) that must be satisfied before a stage consuming that resource starts.

<a name="deployment-history"></a>

## View deployment history

You can do the following tasks when you're viewing deployment history.

- View jobs from all pipelines that are targeting a specific environment. The deployment history listing helps identify all pipelines that are impacting this environment and also helps visualize the sequence of deployments by each pipeline.

   > [!div class="mx-imgBorder"]
   > ![Deployment history](media/environments-deployment-history.png)

- Drill down into the job details, where you seed the listing of commits and work items that were newly deployed to the environment.

   > [!div class="mx-imgBorder"]
   > ![Commits under deployment history](media/environments-deployment-history-commits.png)

## Manage security

You can control who can create, view, use, and manage the environments with [user permissions](#user-permissions). You can also [authorize all or selected pipelines](#pipeline-permissions) for deployment to an environment.

### User permissions

There are four roles - Creator (scope: all environments), Reader, User, and Administrator. In the specific environment's **user permissions** panel, you can set the permissions that are inherited and you can override the roles for each environment.

The following roles

- Go to the **Environment** to authorize.
- Select the overflow menu button located at the top-right part of the page next to "Add resource" and choose **Security** to view the settings.
- On the **User permissions** page, select **+Add** > **User or group**, and then choose a suitable **Role**.

[!INCLUDE [temp](../../organizations/security/includes/environment-roles.md)]

> [!NOTE]
>
> - If you create an environment in YAML, Contributors and Project Administrators get granted the **Administrator** role. This approach is typically used in provisioning Dev/Test environments.
> - If you create an environment through the user interface (UI), only the Creator gets granted the **Administrator** role. Use the UI to create protected environments.

### Pipeline permissions

- To remove **Open access** on the environment or resource for all pipelines, choose **Restrict permission** in **Pipeline permissions**.
- To allow selected pipelines to deploy to an environment or a specific resource, select **+** and choose from the list of pipelines.

## FAQ

### Why do I get an error message when I try to create an environment?

If you see the message, "Access denied: {User} needs Create permissions to perform the action", check your [organization-level permissions](../../organizations/security/view-permissions.md).  See if you have the Stakeholder role, as stakeholders can't create environments. [Change your access level](../../organizations/security/change-access-levels.md) and check to see if you can now create environments.
