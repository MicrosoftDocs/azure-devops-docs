---
title: Manage Permissions for Wikis, READMEs, and Collaboration Tools
titleSuffix: Azure DevOps
description: Learn how to set permissions to grant or secure access to wikis, README files, notifications, and other collaboration tools in Azure DevOps.
ms.subservice: azure-devops-wiki
ms.custom: wiki, devdivchpfy22
ms.topic: concept-article
ms.author: chcomley
author: chcomley
ai-usage: ai-assisted
ms.date: 07/16/2025
monikerRange: "<=azure-devops"
#customer intent: As an Azure DevOps administrator, I want to manage permissions for wikis, README files, and collaboration tools to ensure secure access for users.
---

# Manage wiki and collaboration tool permissions

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

This article describes how to set and manage permissions for collaboration tools in Azure DevOps, including team project wikis, project README files, notifications, and feedback. These tools help teams collaborate effectively while maintaining appropriate security controls.

Wiki permissions are managed through the underlying Git repository security settings. By default, all members of the Contributors group have permission to read and edit wiki pages. Project Administrators can modify these permissions to control who can read, edit, or manage wiki content.

## Prerequisites

| Requirement | Description |
|-------------|-------------|
| **Permissions** | Project Administrator permissions or Manage permissions permission for the wiki repository |
| **Project access** | Access to the project where the wiki is located |

## How wiki permissions work

Wiki permissions are controlled through the underlying Git repository that stores the wiki content. There are two types of wikis in Azure DevOps:

- **Project wiki (provisioned wiki)**: Stored in a dedicated Git repository (typically named `<ProjectName>.wiki`)
- **Code wiki (published wiki)**: Based on files in an existing Git repository

Each type uses the same Git repository permission model but might have different repository locations.

## Default permissions by role

The following table shows default permissions for collaboration tools including wikis, READMEs, notifications, and feedback:

|Task |Stakeholders  |Readers  |Contributors  |Team Administrators | Organization owner/Project Administrator |
|---------|---------|---------|---------|---------|---------|
|Set personal notifications or alerts    | ✔️ | | ✔️ | ✔️ | ✔️ |
|Set team notifications or alerts     |         |         |         | ✔️ | ✔️ |
|Set project-level notifications or alerts    |         |         |         |        | ✔️ |
|READMEs     | See Note 1  | ✔️ | ✔️ | ✔️ |✔️|
|View project wikis     |  ✔️ | ✔️ | ✔️ | ✔️ | ✔️  |
|View code wikis     |    | ✔️ | ✔️ | ✔️ | ✔️  |
|Provision or create a wiki    |  |  |  |  | ✔️ |
|Publish code as wiki     |         |  | ✔️ | See Note 2 | See Note 2 |
|View the project page   | ✔️ | ✔️ | ✔️ | ✔️ | ✔️  |
|Edit the project page    |         |         |         |        | ✔️ |
|Navigate using the project pages     | ✔️ | ✔️ | ✔️ | ✔️ | ✔️  |
|Request feedback    |   | ✔️ | ✔️ | ✔️ | ✔️  |
|Provide feedback    |✔️ | ✔️ | ✔️ | ✔️ | ✔️   |
|Powerful code search     | ✔️ | ✔️ | ✔️ | ✔️ | ✔️  |
|Powerful work tracking search     | ✔️ | ✔️ | ✔️ | ✔️ | ✔️  |

**Notes:**
1. Stakeholders can view project READMEs, but not READMEs defined for a repository.
2. Project Administrators or Team Administrators with contribute permission can publish code as wiki. Project Administrators have this permission by default.

## Manage permissions for project wikis

Project wikis (provisioned wikis) are stored in a dedicated Git repository. You can manage permissions for these wikis through the repository security settings.

### View and modify wiki permissions

1. Sign in to your organization (`https://dev.azure.com/{organization}`) and go to your project.

2. Select **Project settings**.

3. Under **Repos**, select **Repositories**.

4. Select the wiki repository. A project wiki is typically named `{ProjectName}.wiki`.

5. Select the **Security** tab.

6. Review the current permissions for users and groups. The permissions list shows:
   - **Users and groups**: Individual users, Azure DevOps groups, and Microsoft Entra ID groups
   - **Permission levels**: Explicit permissions like Allow, Deny, or inherited permissions
   - **Permission types**: Read, Contribute, Force push, Manage permissions, etc.

### Key repository permissions for wikis

The following repository permissions control wiki access:

| Permission | Description | Wiki access |
|------------|-------------|-------------|
| **Read** | View repository content | View wiki pages and history |
| **Contribute** | Read, create, and modify content | Create and edit wiki pages |
| **Force push** | Rewrite repository history | Force push wiki changes (advanced) |
| **Manage permissions** | Change repository security | Modify who can access the wiki |
| **Create branch** | Create new branches | Create wiki branches (advanced) |

> [!TIP]
> For most wiki scenarios, you only need to manage **Read** and **Contribute** permissions. Users with **Contribute** permission can create, edit, and delete wiki pages.

## Grant wiki access to users and groups

### Add a user or group to wiki permissions

1. In the wiki repository **Security** tab, select **Add** (the plus icon) in the users/groups section.

2. Search for and select:
   - **Individual users** by email address or display name
   - **Azure DevOps groups** (for example, Contributors, Readers)
   - **Microsoft Entra ID groups** if your organization is connected to Microsoft Entra ID

3. After adding the user or group, set their permissions:
   - Set **Read** to **Allow** for view-only access
   - Set **Contribute** to **Allow** for edit access
   - Set permissions to **Deny** to explicitly block access

4. Select **Save changes**.

### Modify existing permissions

1. In the **Security** tab, find the user or group you want to modify.

2. Select the permission level (Allow, Deny, or Not set) to change it:
   - **Allow**: Grants the permission explicitly
   - **Deny**: Blocks the permission explicitly (overrides inherited permissions)
   - **Not set**: Uses inherited permissions from parent groups

3. Changes are saved automatically.

### Remove user or group access

1. In the **Security** tab, find the user or group you want to remove.

2. Select the user or group, then select **Remove** (trash icon).

3. Confirm the removal when prompted.

> [!NOTE]
> Removing a user from repository permissions doesn't remove them from the project. It only removes their explicit permissions for this specific wiki repository.

## Manage permissions for code wikis (published wikis)

Code wikis are based on files in an existing Git repository. Permissions for code wikis are managed through the source repository settings.

### Set permissions for code wikis

1. Go to **Repos** > **Files** in your project.

2. Select the repository that contains your published wiki content.

3. Select **Settings** > **Security** tab.

4. Manage permissions using the same process as project wikis, focusing on:
   - **Read**: View wiki content
   - **Contribute**: Edit wiki files

## Common permission scenarios

### Scenario 1: Read-only wiki access

To give a user view-only access to the wiki:

1. Add the user to the wiki repository security.
2. Set **Read** to **Allow**.
3. Ensure **Contribute** is **Not set** or **Deny**.

### Scenario 2: Wiki editors

To give a user edit access to the wiki:

1. Add the user to the wiki repository security.
2. Set **Read** to **Allow**.
3. Set **Contribute** to **Allow**.

### Scenario 3: Wiki administrators

To give a user full control over the wiki:

1. Add the user to the wiki repository security.
2. Set **Read**, **Contribute**, and **Manage permissions** to **Allow**.

### Scenario 4: Restrict wiki access

To prevent a user from accessing the wiki:

1. Find the user in the wiki repository security.
2. Set **Read** to **Deny**.
   
   The user's access is blocked even if they have permissions through group membership.

## Best practices for wiki permissions

### Security recommendations

- **Use groups instead of individual permissions**: Add users to appropriate Azure DevOps groups (Contributors, Readers) rather than granting individual permissions.
- **Follow principle of least privilege**: Grant only the minimum permissions needed for users to complete their work.
- **Regular permission reviews**: Periodically review who has access to your wikis and remove unnecessary permissions.
- **Use Microsoft Entra ID groups**: If your organization uses Microsoft Entra ID, use Microsoft Entra ID groups for easier user management.

### Permission inheritance

- Users inherit permissions from groups they belong to.
- **Deny** permissions override **Allow** permissions.
- Explicit permissions override inherited permissions.
- Project-level permissions don't automatically grant repository-level permissions.

### Troubleshooting permissions

**Problem**: User can't edit wiki pages
**Solution**: 
1. Verify the user has **Contribute** permission on the wiki repository
2. Check if there are any **Deny** permissions blocking access
3. Ensure the user has at least **Basic** access level in the project

**Problem**: User can't see the wiki
**Solution**:
1. Verify the user has **Read** permission on the wiki repository
2. Check if the wiki exists and is properly configured
3. Ensure the user has project access

**Problem**: Changes to permissions don't take effect
**Solution**:
1. Wait a few minutes for permissions to propagate
2. Ask the user to refresh their browser or sign out and back in
3. Verify permissions were saved correctly

## Stakeholder access and wikis

Users with [Stakeholder access](../../organizations/security/get-started-stakeholder.md) have different wiki permissions depending on project visibility.

### Private projects

**Project wikis (provisioned)**:
- **Read access**: Stakeholders can read wiki pages and view revisions
- **Edit access**: Stakeholders can't create, edit, reorder, or revert wiki pages
- **Permissions**: These limitations can't be changed through repository permissions

**Code wikis (published)**:
- **No access**: Stakeholders can't read or edit published code wikis in private projects

### Public projects

Stakeholders have full read and write access to all wiki types in public projects.

For more information, see [Stakeholder access quick reference](../../organizations/security/stakeholder-access.md#public-versus-private-feature-access).

> [!IMPORTANT]
> Wiki permissions apply to the entire wiki repository. You can't set permissions for individual wiki pages.

## README file permissions

README files in repositories follow the same permission model as the repository they're contained in:

1. Go to **Repos** > **Files**.
2. Select the repository containing the README.
3. Select **Settings** > **Security**.
4. Manage permissions using the repository security settings.

Users need **Read** permission to view README files and **Contribute** permission to edit them.

> [!NOTE]
> Stakeholders can view project READMEs but can't access READMEs defined for specific repositories in private projects.

## Related collaboration tools

### Notifications and alerts

To manage notifications and alerts:
- **Personal notifications**: See [Manage personal notifications](../../organizations/notifications/manage-your-personal-notifications.md)
- **Team notifications**: See [Manage team notifications](../../organizations/notifications/manage-team-group-global-organization-notifications.md)

> [!NOTE]
> There are no UI permissions associated with managing notifications. Instead, you can manage them using the [TFSSecurity command line tool](/azure/devops/server/command-line/tfssecurity-cmd#collection-level-permissions).

### Feedback permissions

For managing feedback permissions, see [Set feedback permissions](/previous-versions/azure/devops/project/feedback/get-feedback).

## Related content

- [Get started with permissions, access, and security groups](../../organizations/security/about-permissions.md)
- [Set Git repository permissions](../../organizations/security/permissions.md#git-repository-object-level)
- [Learn about access levels](../../organizations/security/access-levels.md)
- [Create and edit wikis](about-readme-wiki.md)
- [Choose between provisioned and published wikis](provisioned-vs-published-wiki.md)
- [Manage team notifications](../../organizations/notifications/manage-team-group-global-organization-notifications.md)
