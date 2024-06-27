---
title: Create and target environment
description: Learn how to create, target, secure, and view deployment history for environments, which are collections of deployment targets for pipelines.
ms.topic: how-to
ms.assetid: 4abec444-5d74-4959-832d-20fd0acee81d
ms.date: 06/26/2024
monikerRange: '>= azure-devops-2020'
---

# Create and target an environment

[!INCLUDE [version-gt-eq-2020](../../includes/version-gt-eq-2020.md)]

An Azure DevOps environment is a collection of [resources](about-resources.md) that you can target with deployments from a pipeline. An environment represents a logical target where your pipeline deploys software. Typical environment names are Dev, Test, QA, Staging, and Production.

>[!NOTE]
>Azure DevOps environments aren't available in Classic pipelines. For Classic pipelines, [deployment groups](../release/deployment-groups/index.md) offer similar functionality.

Environments provide the following benefits.

- **Deployment history**. Pipeline name and run details are recorded for deployments to an environment and its resources. In the context of multiple pipelines targeting the same environment or resource, you can use [deployment history](#deployment-history) of an environment to identify the source of changes.
- **Traceability of commits and work items**. You can view jobs within the pipeline run that target an environment. You can also view the [commits and work items](#deployment-history) that were newly deployed to the environment. Traceability also lets you track whether a code change commit or feature/bug-fix work item reached an environment.
- **Diagnostic resource health**. You can validate whether the application is functioning at its desired state.
- **Security**. You can secure environments by specifying which users and pipelines are allowed to target an environment.

An environment is a grouping of resources where the resources themselves represent actual deployment targets. Azure Pipelines environments currently support the [Kubernetes](environments-kubernetes.md) and [virtual machine](environments-virtual-machines.md) resource types.

If a YAML pipeline refers to an environment that doesn't exist:

- When the user performing the operation is known and permissions can be assigned, Azure Pipelines automatically creates the environment.
- When Azure Pipelines doesn't have information about the user performing the operation, for example in a YAML update from an external code editor, the pipeline fails.

## Prerequisites

To add an environment, you need the following prerequisites:

- An Azure DevOps organization and project.
- The [Creator role for environments](../library/add-resource-protection.md#environments) in your project.

<a name="creation"></a>
## Create an environment

To create your first environment:

1. Sign in to your Azure DevOps organization at `https://dev.azure.com/{yourorganization}` and open your project.

1. Select **Pipelines** > **Environments** > **Create environment**.

   ![Screenshot that shows Environments.](media/environments-nav.png)

1. Enter information for the environment, and then select **Create**. You can add resources to an existing environment later.

   :::image type="content" source="media/create-new-environment.png" alt-text="Screenshot of creating a new environment.":::

> [!TIP]
> You can create an empty environment and reference it from deployment jobs so you can record deployment history against the environment.

You can use Azure Pipelines to deploy to environments. For more information, see [Build and deploy to Azure Kubernetes Service with Azure Pipelines](../ecosystems/kubernetes/aks-template.md).

<a name="target-from-deployment-job"></a>
## Target an environment from a deployment job

A [deployment job](deployment-jobs.md) is a collection of steps to run sequentially. You can use a deployment job to target an entire environment group of resources, as shown in the following example YAML snippet. The pipeline runs on the `myVM` machine because that resource name is specified.

```YAML
- stage: deploy
  jobs:
  - deployment: DeployWeb
    displayName: deploy Web App
    pool:
      vmImage: 'Ubuntu-latest'
    # creates an environment if it doesn't exist
    environment: 
      name: 'smarthotel-dev'
      resourceName: myVM
      resourceType: virtualMachine
    strategy:
      runOnce:
        deploy:
          steps:
          - script: echo Hello world
```

<a name="target-resource-from-deployment-job"></a>
## Target a specific environment resource from a deployment job

You can scope the deployment target to a particular resource within the environment, so you can record deployment history on the specific resource. The steps of the deployment job automatically inherit the service connection details from the resource the deployment job targets. In the following example, the value for the `kubernetesServiceConnection` input automatically passes down to the task from the `environment.resource` input.


```YAML
environment: 
  name: 'smarthotel-dev.bookings'
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
```

## Use manual approval checks

To control deployments to production environments, you can manually control when a stage should run by using approval checks. Checks are available to resource owners to control when a stage in a pipeline consumes the resource.

Azure Pipelines supports manual approval checks on environments. As the owner of the environment, you can define approvals and checks that must be satisfied before a stage consuming that resource starts. The **Creator**, **Administrator**, and **User** roles, but not the **Reader** role, can manage approvals and checks. For more information, see [Define approvals and checks](approvals.md).

<a name="in-run-details"></a>
## See environments in run details

You can see all environments that were targeted by deployment jobs of a pipeline run under the **Environments** tab of the pipeline run details.

![Screenshot that shows Environments in run details.](media/environments-run.png)
  
>[!NOTE]
>If you're using an Azure Kubernetes Service (AKS) private cluster, the **Environments** tab isn't available.

<a name="deployment-history"></a>
## View deployment history

You can select the **Deployments** tab in **Environments** to view deployment history.

- View jobs from all pipelines that target a specific environment. For example, two microservices, each having its own pipeline, deploy to the same environment. The deployment history list helps identify all pipelines that affect this environment, and also helps visualize the sequence of deployments by each pipeline.

  ![Screenshot that shows deployment history listing.](media/environments-deployment-history.png)

- Select the tabs on a deployment page to drill down into the job details. To see the list of commits and work items that deployed to the environment, select the **Changes** and **Work items** tabs. The lists of commits and work items represent the new items between deployments.

  On the **Changes** tab, the first listing includes all the commits, and the following listings just include changes. If multiple commits are tied to the same pull request, there are multiple results on the **Changes** tab.

  ![Screenshot of commits under deployment history.](media/environment-deployment-history-changes.png)

- If multiple work items are tied to the same pull request, there are multiple results on the **Work items** tab.

  ![Screenshot of work items under deployment history.](media/environment-deployment-history-workitems.png)

## Security

You can secure your environments with user permissions and pipeline permissions.

### User permissions

You can control who can create, view, use, and manage your environments with user permissions. There are four roles: **Creator** with a scope of all environments, **Reader**, **User**, and **Administrator**.

To use the environment's **User permissions** panel to add a user:

1. Go to the specific **Environment** that you want to authorize.
1. Select the **More actions** icon and then select **Security**.
1. In the **User permissions** pane of the **Security** page, select **Add**.
1. On the **Add user** screen, select a **User or group** and suitable **Role**, and select **Add**.

In the **User permissions** panel, you can also set the permissions that are inherited and override the roles for your environment.

[!INCLUDE [temp](../../organizations/security/includes/environment-roles.md)]

### Pipeline permissions

Use the **Pipeline permissions** panel of the **Security** page to authorize all or selected pipelines for deployment to the environment.

- To remove open access on the environment or resource, select **Restrict permission** in **Pipeline permissions**.
- When permissions are restricted, you can allow specific pipelines to deploy to the environment or specific resource. Select **+** and choose from the list of pipelines to allow.

## FAQ

### Why do I get an error message when I try to create an environment?

If you see the message **Access denied: {User} needs Create permissions to do the action**, go to **Organization Settings** > **Users** and check if you have the **Stakeholder** role. The **Stakeholder** role can't create environments because stakeholders don't have access to the repository.

Change your access level and then check to see if you can create environments. For more information, see [User and permissions management FAQ](../../organizations/accounts/faq-user-and-permissions-management.yml).

### Why do I get the error "Job XXXX: Environment XXXX could not be found. The environment does not exist or has not been authorized for use"?

There are several the possible reasons for the failure.

- You can use [variables](./variables.md?tabs=yaml%2cbatch&view=azure-devops&preserve-view=true) to create an environment or use [templateContext to pass properties to templates](template-parameters.md#use-templatecontext-to-pass-properties-to-templates). [Runtime parameters](runtime-parameters.md) don't work when creating environments, because the parameters are expanded at run time.

- If Azure Pipelines doesn't have information about the user creating the environment, the pipeline fails.

  When you refer to an environment that doesn't exist in a YAML pipeline file, Azure Pipelines automatically creates the environment in the following cases:

  - You use the YAML pipeline creation wizard in the Azure Pipelines web experience and refer to an environment that hasn't been created yet.
  - You update the YAML file by using the Azure Pipelines web editor and save the pipeline after adding the reference to an environment that doesn't exist.

  In the following flows, Azure Pipelines doesn't have information about the user creating the environment, so the pipeline fails.

  - You update the YAML file by using another external code editor.
  - You add a reference to an environment that doesn't exist, and then cause a manual or continuous integration pipeline to be triggered.

  Previously, Azure Pipelines handled these cases by adding all the project contributors to the administrator role of the environment. Any member of the project could then change these permissions and prevent others from accessing the environment.

## Related articles

- [Define approvals and checks](approvals.md)
- [Define variables](variables.md)
- [Define resources in YAML](resources.md)