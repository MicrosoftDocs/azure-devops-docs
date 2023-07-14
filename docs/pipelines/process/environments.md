---
title: Create target environment
description: Collection of deployment targets useful for traceability and recording deployment history.
ms.topic: how-to
ms.assetid: 4abec444-5d74-4959-832d-20fd0acee81d
ms.date: 04/10/2023
monikerRange: '>= azure-devops-2020'
---

# Create and target an environment

[!INCLUDE [version-gt-eq-2020](../../includes/version-gt-eq-2020.md)]

An environment is a collection of [resources](about-resources.md) that you can target with deployments from a pipeline. Typical examples of environment names are Dev, Test, QA, Staging, and Production. An Azure DevOps environment represents a logical target where your pipeline deploys software. 

Azure DevOps environments aren't available in classic pipelines. For classic pipelines, [deployment groups](../release/deployment-groups/index.md) offer similar functionality. 


Environments provide the following benefits.

| Benefit                                    | Description                                                                                                                                                                                                                                                                                                 |
|--------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Deployment history**                     | Pipeline name and run details get recorded for deployments to an environment and its resources. In the context of multiple pipelines targeting the same environment or resource, [deployment history](#deployment-history) of an environment is useful to identify the source of changes.                   |
| **Traceability of commits and work items** | View jobs within the pipeline run that target an environment. You can also view the [commits and work items](#deployment-history) that were newly deployed to the environment. Traceability also allows one to track whether a code change (commit) or feature/bug-fix (work items) reached an environment. |
| **Diagnostic resource health**               | Validate whether the application is functioning at its wanted state.                                                                                                                                                                                                                                       |
| **Security**                            | Secure environments by specifying which users and pipelines are allowed to target an environment.                                                                                                                                                                                                           |

While an environment is a grouping of resources, the resources themselves represent actual deployment targets. The [Kubernetes resource](environments-kubernetes.md) and [virtual machine resource](environments-virtual-machines.md) types are currently supported.

When you author a YAML pipeline and refer to an environment that doesn't exist, Azure Pipelines automatically creates the environment when the user performing the operation is known and permissions can be assigned. When Azure Pipelines doesn't have information about the user creating the environment (example: a YAML update from an external code editor), your pipeline fails if the environment doesn't already exist. 

## Prerequisites

* You need to have the [**Creator** role for Environments](../library/add-resource-protection.md) to add an Environment.

<a name="creation"></a>

## Create an environment

1. Sign in to your organization: ```https://dev.azure.com/{yourorganization}``` and select your project.

2. Select **Pipelines** > **Environments** > **Create environment**.

   > [!div class="mx-imgBorder"]
   > ![Environments](media/environments-nav.png)

3. Enter information for the environment, and then select **Create**. Resources can be added to an existing environment later.

   :::image type="content" source="media/create-new-environment.png" alt-text="Screenshot of creating a new environment.":::

Use a Pipeline to create and deploy to environments, too. For more information, see the [how-to guide](../ecosystems/kubernetes/aks-template.md).

> [!TIP]
> You can create an empty environment and reference it from deployment jobs. This lets you record the deployment history against the environment.

<a name="target-from-deployment-job"></a>

## Target an environment from a deployment job

A [deployment job](deployment-jobs.md) is a collection of steps to be run sequentially. A deployment job can be used to target an entire environment (group of resources) as shown in the following YAML snippet. The pipeline will run on the myVM machine because the resource name is specified.

```YAML
- stage: deploy
  jobs:
  - deployment: DeployWeb
    displayName: deploy Web App
    pool:
      vmImage: 'Ubuntu-latest'
    # creates an environment if it doesn't exist
    environment: 'smarthotel-dev'
      resourceName: myVM
      resourceType: virtualMachine
    strategy:
      runOnce:
        deploy:
          steps:
          - script: echo Hello world
```


<a name="target-resource-from-deployment-job"></a>

## Target a specific resource within an environment from deployment job

You can scope the target of deployment to a particular resource within the environment. Then, you can record deployment history on a specific resource within the environment. The steps of the deployment job *automatically inherit* the service connection details from the resource targeted by the deployment job.

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

All environments that get targeted by deployment jobs of a specific run of a pipeline can be found under the *Environments* tab of pipeline run details.

  > [!div class="mx-imgBorder"]
  > ![Environments in run details](media/environments-run.png)
  
If you're using an AKS private cluster, the **Environments** tab isn't available.

## Approvals

Manually control when a stage should run using approval checks. Use approval checks to control deployments to production environments. Checks are available to the resource Owner to control when a stage in a pipeline consumes a resource. As the owner of a resource, such as an environment, you can [define approvals and checks](approvals.md) that must be satisfied before a stage consuming that resource starts.

We support manual approval checks on environments. For more information, see [Approvals](approvals.md).

The Creator, Administrator, and user roles can manage approvals and checks. The Reader role can't manage approvals and checks.

<a name="deployment-history"></a>

## Deployment history

The deployment history view within environments provides the following advantages.

- View jobs from all pipelines that target a specific environment. For example, two micro-services, each having its own pipeline, are deploying to the same environment. The deployment history listing helps identify all pipelines that affect this environment and also helps visualize the sequence of deployments by each pipeline.

   > [!div class="mx-imgBorder"]
   > ![Screenshot of deployment history listing.](media/environments-deployment-history.png)

- Drill down into the job details to see the list of commits and work items that were deployed to the environment. The list of commits and work items are the new items between deployments. Your first listing includes all of the commits and the following listings will just include changes. If multiple commits are tied to the same pull request, you'll see multiple results on the work items and changes tabs.

   > [!div class="mx-imgBorder"]
   > ![Screenshot of commits under deployment history.](media/environment-deployment-history-changes.png)

- If multiple work items are tied to the same pull request, you'll see multiple results on the work items  tab.

   > [!div class="mx-imgBorder"]
   > ![Screenshot of work items under deployment history.](media/environment-deployment-history-workitems.png)


## Security

### User permissions

Control who can create, view, use, and manage the environments with user permissions. There are four roles - Creator (scope: all environments), Reader, User, and Administrator. In the specific environment's **user permissions** panel, you can set the permissions that are inherited and you can override the roles for each environment.

1. Go to the specific **Environment** that you want to authorize.
1. Select :::image type="icon" source="../../media/icons/more-actions.png" border="false"::: > **Security** to view the settings.
1. Select **User permissions** > **+Add** > **User or group**, and then select a suitable role.

[!INCLUDE [temp](../../organizations/security/includes/environment-roles.md)]

### Pipeline permissions

Use pipeline permissions to authorize all or selected pipelines for deployment to the environment.

- To remove **Open access** on the environment or resource, select **Restrict permission** in **Pipeline permissions**.
- To allow specific pipelines to deploy to an environment or specific resource, select **+** and choose from the list of pipelines.

## Next steps

[Define approvals and checks](approvals.md)

## FAQ

### Q: Why do I get an error message when I try to create an environment?

A: If you see the message "Access denied: {User} needs Create permissions to do the action", check your organization-level permissions. Go to **Organization Settings** > **Users** and check if you have the stakeholder role. The stakeholder role can't create environments. Change your access level and then check to see if you can create environments. For more information, see [User and permissions management FAQ](../../organizations/accounts/faq-user-and-permissions-management.yml).

### Q: Why am I getting error "Job XXXX: Environment XXXX could not be found. The environment does not exist or has not been authorized for use"?

A: These are some of the possible reasons of the failure:

  * When you author a YAML pipeline and refer to an environment that doesn't exist in the YAML file, Azure Pipelines automatically creates the environment in some cases:  
    * You use the YAML pipeline creation wizard in the Azure Pipelines web experience and refer to an environment that hasn't been created yet.
    * You update the YAML file using the Azure Pipelines web editor and save the pipeline after adding a reference to an environment that does not exist.  

  * In the following flows, Azure Pipelines doesn't have information about the user creating the environment: you update the YAML file using another external code editor, add a reference to an environment  that doesn't exist, and then cause a manual or continuous integration pipeline to be triggered. In this case, Azure Pipelines doesn't know about the user. Previously, we handled this case by adding all the project contributors to the administrator role of the environment. Any member of the project could then change these permissions and prevent others from accessing the environment. 

  * You can use [variables](./variables.md?tabs=yaml%2cbatch&view=azure-devops&preserve-view=true) to create the environment or use [templateContext to pass properties to templates](template-parameters.md#use-templatecontext-to-pass-properties-to-templates). [Runtime parameters](runtime-parameters.md) won't work when creating the environment because they are expanded at run time. 

  * A user with stakeholder access level can't create the environment as stakeholders don't have access to the repository.
  
## Related articles

- [Define variables](variables.md)
- [Define resources in YAML](resources.md)