---
ms.prod: vs-devops-alm
title: Build and release permissions
description: Build and release permissions in Microsoft Visual Studio Team Services (VSTS) and Microsoft Team Foundation Server (TFS)
ms.technology: vs-devops-build
ms.assetid: A7C38A15-C9FE-4353-8680-21BAC0F6C873
ms.manager: douge
ms.author: alewis
ms.date: 08/26/2016
---

# Build and release permissions

**VSTS | TFS 2018 | TFS 2017 | TFS 2015**

Team Build and Release Management offer several features to help you
enforce the security requirements of your team and your
organization. This security is based on the standard model in Team
Foundation Server and VSTS.

**Permissions** define the authorizations that can be granted or
denied to users and groups. These permissions can usually be granted or
denied in a hierarchical model. Within this hierarchy,
permissions can be inherited from the parent or overridden. In
certain cases, a set of permissions are grouped into a **role**
to simplify administration. Membership of these roles governs
access. There are also a few pre-defined **groups** that
provide convenient starting points for managing users.

Permissions can be set both on specific users and on Team 
Foundation user groups. If you are using Build and Release
Management in TFS, you can also use Active Directory groups to
manage permissions. If you are using VSTS, and your Team
Services account is integrated with Azure Active Directory (AAD),
you can also use AAD groups. For more details, see
[Permissions and groups in VSTS and TFS](../../../security/permissions.md).

## Security of agents and library entities

You use pre-defined roles and manage membership in those roles to
configure [security on agent pools and queues](../agents/pools-queues.md#security).
You can configure this in a hierarchical manner either for all
pools and queues, or for an individual pool or queue.  

Roles are also defined to help you configure security on shared
[library entities](../library/index.md) such as [variable groups](../library/index.md#security)
and [service endpoints](../library/service-endpoints.md#security).
Membership of these roles can be configured hierarchically, as well
as at either team project level or individual entity level.

## Build permissions

Permissions in Build follow a hierarchical model. Defaults for all the permissions can be set at the team project level and can be overridden on an individual build definition.

To set the permissions at project level for all build definitions in a project, choose **Security** from the action bar on the main page of Builds hub.

To set or override the permissions for a specific build definition, choose **Security** from the context menu of the build definition.

The following permissions are defined in Build. All of these can be set at both the levels.

| Permission | Description |
|------------|-------------|
| **Administer build permissions** | Can change any of the other permissions listed here. |
| **Queue builds** | Can queue new builds. |
| **Delete build definition** | Can delete build definition(s). |
| **Delete builds** | Can delete builds for a definition. Builds that are deleted are [retained](retention.md) in the **Deleted** tab for a period of time before they are destroyed. |
| **Destroy builds** | Can delete builds from the **Deleted** tab. |
| **Edit build definition** | Can save any changes to a build definition, including configuration variables, triggers, repositories, and retention policy. |
| **Edit build quality** | Can add tags to a build. |
| **Override check-in validation by build** | Applies to [TFVC gated check-in builds](../../../build-release/concepts/definitions/build/triggers.md#gated). This does not apply to PR builds. |
| **Retain indefinitely** | Can toggle the retain indefinitely flag on a build. |
| **Stop builds** | Can stop builds queued by other team members or by the system.  |
| **View build definition** | Can view build definition(s). |
| **View builds** | Can view builds belonging to build definition(s). |
| **Update build information** | It is recommended to leave this alone. It's intended to enable service accounts, not team members. |
| **Manage build qualities** | _Only applies to XAML builds_ |
| **Manage build queue** | _Only applies to XAML builds_ |
<p />
Default values for all of these permissions are set for team
project collections and team project groups. For example,
**Project Collection Administrators**, **Project Administrators**, and
**Release Administrators** are given all of the above permissions by
default. **Contributors** are given all permissions except
**Administer release permissions**. **Readers**, by default,
are denied all permissions except **View release definition** and
**View releases**.

When it comes to security, there are different best practices and levels of permissiveness. While there's no one right way to handle permissions, we hope these examples help you empower your team to work securely with builds.

* By default, contributors in a team project cannot create or edit build definitions. To grant permissions to work on build definitions, select _Contributors_ and set the **Edit build definition** permission to _Allow_.

* In many cases you probably also want to set **Delete build definition** to _Allow_. Otherwise these team members can't delete even their own build definitions.

* Without **Delete builds** permission, users cannot delete even their own completed builds. However, keep in mind that they can automatically delete old unneeded builds using [retention policies](retention.md).

* We recommend that you do not grant these permissions directly to a person. A better practice is to add the person to the build administrator group or another group, and manage permissions on that group.

## Release permissions

Permissions in Release Management follow a hierarchical model.
Defaults for all the permissions can be set at the team project
level and can be overridden on an individual release definition.
Some of the permissions can also be overridden on a specific
environment within a definition. The hierarchical model helps
you define default permissions for all definitions at one extreme,
and to lock down the production environment for an application at
the other extreme.

To set permissions at project level for all release
definitions in a project, open the shortcut menu from the ![drop-down list](_img/drop-down-list-icon.png)
icon next to **All release definitions** and choose **Security**.

To set or override the permissions for a specific release
definition, open the shortcut menu from the ![drop-down list](_img/drop-down-list-icon.png)
icon next to that definition name. Then choose **Security** to open the
**Permissions** dialog.

To specify security settings for individual environments in a release definition, open
the **Permissions** dialog by choosing **Security** on the shortcut menu that opens
from the ellipses (**...**) on an environment in the release definition editor.

The following permissions are defined in Release Management. The scope column explains whether the permission can be set at the team project, release definition, or environment level.

| Permission | Description | Scopes |
|------------|-------------|--------|
| **Administer release permissions** | Can change any of the other permissions listed here. | Project, Release definition, Environment |
| **Create releases** | Can create new releases. | Project, Release definition |
| **Delete release definition** | Can delete release definition(s). | Project, Release definition |
| **Delete release environment** | Can delete environment(s) in release definition(s). | Project, Release definition, Environment |
| **Delete releases** | Can delete releases for a definition. | Project, Release definition |
| **Edit release definition** | Can save any changes to a release definition, including configuration variables, triggers, artifacts, and retention policy as well as configuration within an environment of the release definition. To make changes to a specific environment in a release definition, the user also needs **Edit release environment** permission. | Project, Release definition |
| **Edit release environment** | Can edit environment(s) in release definition(s). To save the changes to the release definition, the user also needs **Edit release definition** permission. This permission also controls whether a user can edit the configuration inside the environment of a specific release instance. The user also needs **Manage releases** permission to save the modified release. | Project, Release definition, Environment |
| **Manage deployments** | Can initiate a direct deployment of a release to an environment. This permission is only for direct deployments that are manually initiated by selecting the **Deploy** or **Redeploy** actions in a release. If the condition on an environment is set to any type of automatic deployment, the system automatically initiates deployment without checking the permission of the user that created the release. | Project, Release definition, Environment |
| **Manage release approvers** | Can add or edit approvers for environment(s) in release definition(s). This permissions also controls whether a user can edit the approvers inside the environment of a specific release instance. | Project, Release definition, Environment |
| **Manage releases** | Can edit the configuration in releases. To edit the configuration of a specific environment in a release instance, the user also needs **Edit release environment** permission. | Project, Release definition |
| **View release definition** | Can view release definition(s). | Project, Release definition |
| **View releases** | Can view releases belonging to release definition(s). | Project, Release definition |
<p />
Default values for all of these permissions are set for team
project collections and team project groups. For example,
**Project Collection Administrators**, **Project Administrators**, and
**Release Administrators** are given all of the above permissions by
default. **Contributors** are given all permissions except
**Administer release permissions**. **Readers**, by default,
are denied all permissions except **View release definition** and
**View releases**.
