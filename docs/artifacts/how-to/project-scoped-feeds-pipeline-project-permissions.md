---
title: Allow Pipelines to access project scoped feeds that are scoped to a different project
description: How to set permissions when needing authentication to a project scoped feed that is scoped to a different project than where the Pipeline is running in
ms.technology: devops-artifacts
ms.topic: conceptual
ms.date: 08/05/2020
monikerRange: '>= Azure DevOps Server 2020'
---

# How to allow a Pipeline to access a project scoped feed that is scoped to a different project than where the Pipeline is running in

When a Pipeline needs to connect to an Artifacts feed but the feed is scoped to a different project, the project that the pipeline is running in must have access to both the project that the feed is scoped to and the feed itself.

## Steps

1. Find the Pipeline project's build service identity. It will look as follows:
`[Project name] Build Service ([Organization name])` (e.g. FabrikamFiber Build Service (codesharing-demo))

2. In the project that the feed is scoped to, go to the [permission settings](/azure/devops/organizations/security/add-users-team-project.md#add-users-to-a-project) to add the pipeline's project build service from step 1 to a the Contributors group, or an alternative group your project may have that allows contributor access to its users.

3. In the [feed permission](/azure/devops/artifacts/feeds/feed-permissions.md##Package-permissions-in-Azure-Pipelines) page, add the "ProjectName Build Service (OrganizationName)" at least Collaborator access, if the pipeline needs to be able to ingest packages from upstream sources.
