---
title: Change project visibility to public or private
titleSuffix: Azure DevOps Services
description: Learn how to change your project visibility between private and public, understand access levels, and review security considerations for public projects.
ms.subservice: azure-devops-public-projects
ms.assetid:
ms.author: chcomley
author: chcomley
ms.topic: how-to
monikerRange: 'azure-devops'
ms.date: 08/27/2025
---

# Change project visibility to public or private

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]  

Learn how to change the visibility of your Azure DevOps project between public and private, and understand the security and access implications of each visibility setting.

> [!IMPORTANT]
> - When you change a private project to public visibility, **all project contents become publicly accessible**. You can't selectively keep certain repositories, area paths, or build artifacts private within a public project.
> - Only organizations with the [Allow public project policy already enabled](#step-1-enable-public-projects-for-your-organization) can create projects of change the visibility of a project to public. The policy is no longer available to organizations that aren't using it already. Microsoft recommentds using [GitHub](https://github.com/) for all your public project needs.

## What changes when you make a project public

Making a project public affects permissions, access levels, and available features:

### Security and permissions changes

When switching from private to public:

* **Deny permissions are ignored**: Any permissions explicitly set to "Deny" aren't enforced for public users
* **Minimum access granted**: Nonmembers automatically receive baseline read access to public content
* **Build pipeline scope**: Pipelines set to *Project Collection* scope automatically run with *Project* scope to enhance security

### Access level differences

|User Type|Private Project Access|Public Project Access|
|---------|---------------------|---------------------|
|**Anonymous users**|No access|Read-only access to most content|
|**Stakeholders**|Limited Boards access, no Repos access|Full access to Repos and Boards|
|**Basic users**|Full access except Test Plans|Full access except Test Plans|
|**Basic + Test Plans**|Full access including Test Plans|Full access including Test Plans|

### Feature availability for nonmembers

The following table shows what features are available to users who aren't project members:

|Service Area|Nonmember Access|Notes|
|------------|----------------|-----|
|**Dashboards**|Read-only, limited widgets|Many widgets unavailable|
|**Wiki**|Read-only|Full content visible|
|**Boards**|Read work items only|Backlogs, Boards, Sprints hidden|
|**Repos**|Read-only Git repos|TFVC repositories hidden|
|**Pipelines**|Read build/release results|Editors and Library hidden|
|**Test Plans**|No access|Manual testing unavailable|
|**Search**|Full search capability|Across accessible content|
|**Settings**|No access|Administrative features hidden|

## Prerequisites

Before changing project visibility, ensure you meet these requirements:

|Requirement|Details|
|-----------|-------|
|**Permissions**|[Project Collection Administrator](../security/look-up-project-collection-administrators.md) or Organization Owner|
|**Organization setup**|Must enable "Allow public projects" policy|
|**Security review**|Complete the [migration checklist](#premigration-security-checklist) |

## Premigration security checklist

> [!WARNING]
> Public projects expose historical data including old commits, work items, and build logs. Review all content carefully before making a project public.

### Organization and identity exposure

- [ ] **Member information**: All organization members' names and email addresses become visible
- [ ] **Organization settings**: Read-only view of all organization and project settings exposed
- [ ] **Process metadata**: All picklist values across organization projects become visible
- [ ] **Build history**: Names and email addresses from build triggers and Git commits exposed

### Cross-project considerations

- [ ] **Linked artifacts**: Check for links to private projects that might expose sensitive information
- [ ] **Shared resources**: Review organization-level resources accessed by the project

### Content security review

#### Work items and Agile tools
- [ ] **Historical work items**: Review all work items, including closed ones, for sensitive information
- [ ] **Area path security**: Confirm no area paths have special security restrictions (denied permissions ignored in public projects)
- [ ] **Discussions and comments**: Check all work item discussions for sensitive or inappropriate content

#### Source code repositories
- [ ] **Commit history**: Review entire Git history for credentials, security vulnerabilities, or proprietary code
- [ ] **Commit messages**: Check all commit messages for sensitive information or inappropriate content
- [ ] **File contents**: Ensure no files contain credentials, API keys, or confidential data

#### Build and release pipelines
- [ ] **Pipeline definitions**: Review for exposed credentials, internal URLs, or environment details
- [ ] **Build logs**: Check historical build logs for sensitive information
- [ ] **Service connections**: Verify no private feed dependencies that nonmembers can't access

#### Artifacts and packages
- [ ] **Package contents**: Review all packages in project-scoped feeds for privacy concerns
- [ ] **Feed settings**: Understand that upstream settings are disabled for public project feeds

#### Extensions and customizations
- [ ] **Custom extensions**: Verify extensions work properly for nonmembers
- [ ] **Work item form customizations**: Test custom controls and fields with nonmember access

## Step 1: Enable public projects for your organization

1. Sign in to your organization (`https://dev.azure.com/{yourorganization}`).

2. Select **Organization settings**.

   ![Screenshot showing Organization settings button](../../media/settings/open-admin-settings-vert.png)

3. Select **Policies**.

4. Under **Security policies**, turn on **Allow public projects**.

   :::image type="content" source="media/rename-project/org-policies-change-anon.png" alt-text="Screenshot showing Organization settings, Policy page, Security policies":::

## Step 2: Change project visibility

1. Navigate to your project (`https://dev.azure.com/{yourorganization}/{yourproject}`).

2. Select **Project settings**.

3. Select **Overview**.

4. In the **Visibility** dropdown menu, choose **Public** or **Private**.

5. Select **Save**.

   ![Screenshot showing Project Settings, Overview, Visibility options.](media/switch-to-public.png)

## Managing contributors in public projects

### Adding project members

Add contributors to public projects the same way as private projects:

1. Go to **Project settings** > **Permissions**.
2. Select **Add** to invite users.
3. Assign appropriate access levels (Stakeholder, Basic, or Basic + Test Plans).

For more information, see [Add users to your organization](../accounts/add-organization-users.md).

### External user considerations

When [inviting external users](../accounts/add-external-user.md) to public projects:
- They gain access to all public content in your organization
- Consider creating separate organizations for public projects if you have sensitive content elsewhere

## Alternative approaches for sensitive content

### Option 1: Separate organization for public projects

If your current organization contains sensitive material:
1. Create a new organization specifically for public projects
2. Migrate only nonsensitive content to the new organization
3. Keep sensitive projects in the original private organization

### Option 2: Selective content migration

#### Moving sensitive work items
- Use the [move work items feature](../../boards/backlogs/move-change-type.md#move) to transfer sensitive items to a private project
- Cross-project links continue working for members but remain hidden from nonmembers

#### Git repository tip migration
For repositories with problematic history, migrate only the current state:

> [!WARNING]
> This action creates a new repository with no connection to the original. Pull request history and change tracking are lost.

```bash
# Clone the existing repository
git clone <original_clone_URL>
cd <repository_name>

# Ensure you're on the desired branch
git checkout main

# Remove Git history
rm -rf .git  # On Windows: rmdir /s .git

# Initialize new repository
git init

# Connect to new repository in public project
git remote add origin <new_public_repo_URL>

# Push current state as initial commit
git add .
git commit -m "Initial public release"
git push --set-upstream origin main
```

## Limitations for nonmembers

Nonmembers of public projects can't do the following actions:
- Edit or create any content (files, work items, pipelines)
- View email addresses or contact information of project members
- Access administrative settings or configuration pages
- Use advanced search features across the organization
- Navigate between multiple public projects in the same organization
- Favorite or follow artifacts

## Troubleshooting public project access

### Common issues

**Problem**: Nonmembers can't access the project after making it public
- **Solution**: Verify the organization's "Allow public projects" policy is enabled

**Problem**: Some content still appears restricted
- **Solution**: Check for deny permissions that might affect specific areas

**Problem**: External users can't contribute
- **Solution**: Ensure they're added as project members with appropriate access levels

## Next step

> [!div class="nextstepaction"]
> [Set up Git for your project](../../user-guide/code-with-git.md)

## Related content

- [About public projects](about-projects.md)
- [Delete a project](delete-project.md)
- [Add external users](../accounts/add-external-user.md)
- [Add a privacy policy URL](../accounts/add-privacy-policy-url.md)
