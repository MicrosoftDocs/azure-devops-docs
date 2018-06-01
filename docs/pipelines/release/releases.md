---
title: Releases in VSTS and Team Foundation Server
description: Understand releases in Release Management for Microsoft Visual Studio Team Services (VSTS) and Microsoft Team Foundation Server (TFS)
ms.assetid: 2FF35C3B-FBF9-407F-8467-2D336973E63C
ms.prod: devops
ms.technology: devops-cicd
ms.topic: conceptual
ms.manager: douge
ms.author: ahomer
author: alexhomer1
ms.date: 04/09/2018
monikerRange: '>= tfs-2015'
---

# Releases in Release Management

[!INCLUDE [version-rm-dev14](../_shared/version-rm-dev14.md)]

A **release** is the package or container that holds a versioned set of artifacts
specified in a [release definition](index.md).
It includes a snapshot of all the information required to carry out all the tasks
and actions in the release definition, such as the
[environments](environments.md),
the tasks for each one, the values of task parameters
and variables, and the release policies such as triggers, approvers, and release
queuing options. There can be multiple releases from one released definition, and information
about each one is stored and displayed in Release Management for the specified
[retention period](../policies/retention.md#release).  

A **deployment** is the action of running the [tasks](../process/tasks.md)
for one environment, which results in the application
[artifacts](artifacts.md)
being deployed, tests being run, and whatever other
actions are specified for that environment. Initiating a release
starts each deployment based on the settings and policies defined in the original
release definition. There can be multiple deployments of each release even for one environment.
When a deployment of a release fails for an environment, you can redeploy the same release
to that environment.

The following schematic shows the relationship between release definitions, releases, and deployments.

![Relationship between release definitions, releases, and deployments](_img/release-deploy.png)

Releases (and, in some cases, draft releases) can be created from a release definition in several ways:

* By a [continuous deployment trigger](triggers.md)
  that creates a release when a new version of the source build artifacts is available.

* By using the **Release** command in the UI to create a release manually from the Releases or the Builds summary.

* By sending a command over the network to the [REST interface](../../integrate/index.md).

**However**, the action of creating a release **_does not_** mean it will automatically
or immediately start a deployment. For example:

* There may be [deployment triggers](triggers.md)
  defined for an environment, which force the deployment to wait; this could be for a manual
  deployment, until a scheduled day
  and time, or for successful deployment to another environment.

* A deployment started manually from the **[Deploy]** command in the UI,
  or from a network command sent to the [REST interface](../../integrate/index.md), may
  specify a final target environment other than the last environment in a release pipeline.
  For example, it may specify that the release is deployed only as far as the QA environment
  and not to the production environment.   

* There may be [queuing policies](environments.md#queuing-policies)
  defined for an environment, which specify which of multiple deployments will occur,
  or the order in which releases are deployed.

* There may be [pre-deployment approvers or gates](approvals/index.md)
  defined for an environment, and the deployment will not occur until all
  necessary approvals have been granted.

* Approvers may defer the release to an environment until a specified date and time using a
  [scheduled trigger](triggers.md#env-triggers).

[!INCLUDE [rm-help-support-shared](../_shared/rm-help-support-shared.md)]
