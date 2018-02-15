---
title: Create and deploy a release with Release Management
description: Create and deploy a release with Release Management in Visual Studio Team Services (VSTS) and Microsoft Team Foundation Server (TFS)
ms.prod: vs-devops-alm
ms.technology: vs-devops-build
ms.assetid: DCAD8C16-242E-4672-A5C6-5894C25CAF11
ms.manager: douge
ms.author: ahomer
ms.date: 01/19/2018
---

# Create and deploy a release

[!INCLUDE [version-rm-dev14](../_shared/version-rm-dev14.md)]

You can create a [release](../concepts/releases/index.md) from the
[Releases](#create-from-release) tab, the [Builds](#create-from-build) tab, and as part of a 
[continuous deployment](../concepts/definitions/release/triggers.md) scenario.
You can also create a [draft](#create-draft) release. After you create a release,
you may need to [deploy](#deploy-command) (and redeploy) it manually.

[What's the difference between a release definition and a release?](../concepts/releases/index.md)

<h2 id="create-from-release">Create a release from the Releases tab</h2>

1. In the list of releases for a definition, choose **Create Release**
   from the **Release** drop-down list. Or select the release definition in the left
   column list of release definitions, open the shortcut menu, and choose **Release**.   

   ![Creating a new release manually](_img/create-deploy-releases/create-release-manually-01.png)

   Alternatively, open the definition for editing. Then choose **Create Release**
   from the **Release** drop-down list.   

   ![Creating a new release manually](_img/create-deploy-releases/create-release-manually-02.png)

1. In the **Create new release** panel, optionally enter a description
   for this release. Then select the version of the linked build artifacts
   you want to include in this release. If the version you want to use is not
   shown in the list, type the version number. Then choose **Create**.

   ![Specifying details of a release](_img/create-deploy-releases/create-release-manually-03.png)

   For artifact sources of type Build, you must enter the **BuildId** value,
   not the **BuildNumber**. See [Artifact variables](../concepts/definitions/release/variables.md#artifact-variables).  

>Specifying manual deployment for an environment is one way to prevent a deployment
happening until you are sure it is ready to go. However, you can also use
approvals, gates, and manual intervention at intermediate stages to pause a release and allow
it to be cancelled before it reaches the target or final environment.
For more details, see [Approvals and gates overview](../concepts/definitions/release/approvals/index.md).

<h2 id="create-from-build">Create a release from the Builds tab</h2>

If you have not set the [continuous deployment trigger](../concepts/definitions/release/triggers.md),
or you have not defined a fully orchestrated pipeline for deploying the artifacts
specified in your releases, you will need to manually initiate the deployment for some environments.

1. Open the **Builds** tab of the **Build and Release** hub and select a build result
   (not the build definition name).

   ![Selecting a build in the Builds tab](_img/create-deploy-releases/build-release-01.png)

1. In the build summary page, choose **Release**.

   ![Creating a release from the Builds tab](_img/create-deploy-releases/build-release-02.png)

   Alternatively, if the build has not yet been deployed,
   choose the **Create release** link in the **Deployments** section.

   ![Creating a release from the Builds tab build status view](_img/create-deploy-releases/build-release-03.png)

<h2 id="create-draft">Create a draft release</h2>

If you're editing a release definition and you want to test some
changes that are not yet ready for production, you can create a
draft release.

![Creating a draft release](_img/create-deploy-releases/create-draft-release.png)

Make the changes you need (they don't affect the original
definition), save the draft definition, and start it.

![Starting a draft release](_img/create-deploy-releases/start-draft-release.png)

<h2 id="deploy-command">Deploy a release</h2>

When you create a from a release definition, you can see the current
status of that release in the **Summary** view. In most cases, deployment
of the release to all environments may occur automatically through
[environment deployment triggers](../concepts/definitions/release/triggers.md#env-triggers).
However, where this is not the case (as described in [Releases](../concepts/releases/index.md)),
you must initiate deployment to environments manually. 

Start the deployment to any environments that have not been deployed
by opening the shortcut menu from the ellipses (**...**) in the **Actions**
column and choosing **Deploy**.

![Starting a deployment in a release](_img/create-deploy-releases/deploy-manually-01.png)

Alternatively, choose the environment you want to deploy to from the **Deploy**
drop-down list in the toolbar. You can choose a single target environment or
select multiple environments.

![Starting a deployment using the Deploy drop-down list](_img/view-manage-releases/deploy-03.png)

>By selecting an environment that is not the final one, you can test the initial steps
and tasks in a release safe in the knowledge that it will stop before, for example,
deployment to a live production environment. You can also insert an _agentless phase_
into a release definition, and use it to enable manual intervention in a release pipeline.
For more details, see [Task phases](../concepts/process/phases.md).

## See also

* [Releases](../concepts/releases/index.md)

* [Work with release definitions](work-with-release-definitions.md)

* [View and manage releases](view-manage-releases.md)

## Q&A

<!-- BEGINSECTION class="md-qanda" -->

### How do I programmatically create a release definition?

[Release Management REST API](../../integrate/index.md)

[!INCLUDE [qa-versions](../_shared/qa-versions.md)]

<!-- ENDSECTION -->

[!INCLUDE [rm-help-support-shared](../_shared/rm-help-support-shared.md)]
