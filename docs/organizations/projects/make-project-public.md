---
title: Change your private project to public
titleSuffix: Azure DevOps Services Public Project 
description: Change your project visibility from private to public or from public to private. 
ms.subservice: azure-devops-public-projects
ms.assetid:
ms.reviewer: 
ms.author: chcomley
author: chcomley
ms.topic: quickstart
monikerRange: 'azure-devops'
ms.date: 11/04/2022
---

# Change your private project to public

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]  

When you choose to make a project public, all of its contents are included. You can't choose specific repositories, area paths, or build folders to keep private. Access is limited when the user isn't signed in. These users are also referred to as anonymous users or public users. Also, there are users, ones who are signed in to Azure DevOps, but aren't members of a project. Both of these types of users are granted limited, read-only access as indicated in the following table.

All members of the project experience the following effects:

* Permissions marked **Deny** aren't honored. The permissions automatically granted to a non-member act as a "floor" on the capabilities that can be assigned to any member in the project.
* If a build pipeline specifies a Project Collection scope, it runs with Project scope instead. This reduces the risks of a malicious user obtaining the build service's authentication token.

|Hub or Settings |Non-member access |Stakeholder access |Basic access|Readers |Contributors  |Project Administrators  |
|---------|---------|---------|---------|
|**Dashboards** | Read(1) | Partial  | Full | Read | Read-Write | Read-Write-Administer |
|**Wiki**     | Read   | Full | Full | Read | Read-Write | Read-Write-Administer        |
|**Boards (Work)** |  Read | Partial | Full | Read | Read-Write | Read-Write-Administer |
|**Repos (Code)**  | Read | Full | Full | Read | Read-Write |  Read-Write-Administer   |
|**Pipelines (Build and Release)**  | Read  | Full | Full | Read    | Read-Write | Read-Write-Administer |
|**Test Plans**  | No access | No access | Partial access (4) | Read  |Read-Write | Read-Write-Administer |
|**Notifications**  | No access | Full | Full | Read | Read-Write | Read-Write-Administer |
|**Search**   | Full| Full | Full | Full | Full | Full |
|**Settings**   | No access| Full | Full | Read | Read | Read-Write-Administer |

> [!NOTE]
> - Several widgets aren't available to non-members.
> - Stakeholders have full access to **Repos** or **Code** features in public projects, but they have no access in private projects.
> - Stakeholders have full access to **Boards** or **Work** in public projects, but they have partial access in private projects. For more information, see [Stakeholder access quick reference](../security/stakeholder-access.md).
> - Basic + Test Plans users can view and run tests from **Test Plans** or **Test**. Basic users need to upgrade their access level to Basic + Test Plans to get full access, which includes capability to create test plans and add test cases.

## Prerequisites

- You must have an organization created in Azure DevOps. If you don't have one, [do that now](../../user-guide/sign-up-invite-teammates.md).
- You must be a member of the [Project Collection Administrators group](../security/look-up-project-collection-administrators.md). Organization owners are automatically members of this group.
- View the migration checklist for 

### Migration checklist

Most existing private projects contain a large amount of historical data. Old work items, early commits, and previous build pipelines might have content you don't want to share publicly.

This checklist indicates those items you may want to review before making a project public. It also provides tips for migrating work items or files to a new project so that you can expose only current and future content.

#### Organization identities and settings

When you invite a user to become a member of a project, they gain access to additional resources and details about the organization, including the following information.

> [!div class="mx-tdCol2BreakAll"]  
> | Area             | Additional details a member receives                |
> |------------------|-----------------------------------------------------|
> | Identities       | List of all members added to the organization.       |
> | Identities       | Email contact information for each project member.   |
> | Settings         | Read-only view of all organization and project settings.  |
> | Process metadata | All picklist values in all projects in the organization.  |

Builds and releases may show the names of people who triggered them, plus identities, including email addresses, embedded in Git commits.

Git commits and work items may contain embedded identity information such as first name, last name and email address.

#### Cross-project object links

You can link objects that exist in different projects defined in the same organization. For example, you can link a bug in Project A to a pull request in Project B. If links exist between a public and a private project, details about the linked artifact in the private project are visible within the public project.

You can use the following link types: Branch, Build, Changeset, Commit, Found in build, Integrated in build, Pull Request, and Versioned Item.

![Cross project link types](../../boards/queries/media/link-tracking-artifact-to-artifact-link-types.png) 

The following cross-project links expose content from the private project.

> [!div class="mx-tdCol2BreakAll"]  
> | Link type            | Exposed content         |
> |----------------------|-------------------------|
> | Versioned item       | Project name, file name |
> | Branch               | Branch name             |
> | Wiki page            | File name               |
> | Pull request         | Pull request title      |
> | Work item            | Work item title         |

:::row:::
   :::column span=".5":::
      **Category**
   :::column-end:::
   :::column span="2.5":::
       **Used to track specified types of work**
   :::column-end:::
:::row-end:::
:::row:::
   :::column span=".5":::
      Agile tools and work items
   :::column-end:::
   :::column span="2.5":::
       Because work-items maintain their history when migrated from a private to public project, check the following: 
	   Confirm that your work items, even closed ones, don't contain sensitive details: undisclosed security flaws, credentials, and customer data.
	   Be aware that all discussions and descriptions are available. Check that none contain problematic speech.
	   Confirm that none of your area paths have special, locked-down security settings. Denied permissions are not enforced in a public project, so restricted area paths become public.
	   If you aren't comfortable exposing the whole work item database, there are migration options.
	   For more information, see [Instructions for moving work items](#move-work-items).
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      Code
   :::column-end:::
   :::column span="2":::
Confirm that you have no sensitive details in your repositories' history: unpatched security bugs, credentials, and code you don't have the right to distribute.
Be aware that all file contents and commit messages are available. Check that none contain embarrassing or problematic speech.
If you aren't comfortable exposing an entire repository, you can migrate the tip to another project.
For more information, see [Instructions for a tip migration](#git-tip-only-migration).
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      Build and release
   :::column-end:::
   :::column span="2":::
Confirm that none of your pipelines expose sensitive data: credentials/secrets, obscure URLs, and private environment names.
Confirm that non-members don't require access to your private feeds. Builds can still access feeds, but non-members cannot.
If you need to migrate build pipelines to a new project (perhaps because you're moving code or work items), you can import and export them using [YAML](../../pipelines/create-first-pipeline.md).
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      Test
   :::column-end:::
   :::column span="2":::
       Understand that manual and cloud load testing features aren't available to non-members in a public project.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      Analytics and dashboards
   :::column-end:::
   :::column span="2":::
       Consider building a dashboard intended for the public. Some [widgets are unavailable](about-projects.md#dashboard-widget-support) to non-members, so don't rely on these.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      Artifacts
   :::column-end:::
   :::column span="2":::
       Confirm that none of the packages in any of the feeds that are scoped to the project have privacy concerns. All packages in the feeds that are scoped to the project become public. Public feeds can't have upstream sources. All existing upstream settings of the feeds that are scoped to the project are disabled once the project becomes public.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      Extensions
   :::column-end:::
   :::column span="2":::
       Are any extensions vital to your project's experience?
For instance, do you have a control on your work item form which renders data in a particular way?
Are there custom extensions which expose important details?
Confirm that each extension's author has made it available for non-members by testing it.
If not, ask the extension author to add support for non-members. For details, see [Extensions and public project support](../../extend/develop/public-project.md).
   :::column-end:::
:::row-end:::

#### Agile tools and work items

Because work-items maintain their history when migrated from a private to public project, check the following: 

* Confirm that your work items, even closed ones, don't contain sensitive details: undisclosed security flaws, credentials, and customer data.
* Be aware that all discussions and descriptions are available. Check that none contain problematic speech.
* Confirm that none of your area paths have special, locked-down security settings. Denied permissions are not enforced in a public project, so restricted area paths become public.

> [!TIP]
> If you aren't comfortable exposing the whole work item database, there are migration options.
> For more information, see [Instructions for moving work items](#move-work-items).

#### Code

* Confirm that you have no sensitive details in your repositories' history: unpatched security bugs, credentials, and code you don't have the right to distribute.
* Be aware that all file contents and commit messages are available. Check that none contain embarrassing or problematic speech.

If you aren't comfortable exposing an entire repository, you can migrate the tip to another project.
For more information, see [Instructions for a tip migration](#git-tip-only-migration).

#### Build and release 

* Confirm that none of your pipelines expose sensitive data: credentials/secrets, obscure URLs, and private environment names.
* Confirm that non-members don't require access to your private feeds. Builds can still access feeds, but non-members cannot.

If you need to migrate build pipelines to a new project (perhaps because you're moving code or work items), you can import and export them using [YAML](../../pipelines/create-first-pipeline.md).

#### Test

* Understand that manual and cloud load testing features aren't available to non-members in a public project.

#### Analytics and dashboards

* Consider building a dashboard intended for the public. Some [widgets are unavailable](about-projects.md#dashboard-widget-support) to non-members, so don't rely on these.

#### Artifacts

* Confirm that none of the packages in any of the feeds that are scoped to the project have privacy concerns. All packages in the feeds that are scoped to the project become public.
* Be aware that public feeds cannot have upstream sources. All existing upstream settings of the feeds that are scoped to the project are disabled once the project becomes public.

#### Extensions

Are any extensions vital to your project's experience?
For instance, do you have a control on your work item form which renders data in a particular way?
Are there custom extensions which expose important details?

* Confirm that each extension's author has made it available for non-members by testing it.
* If not, ask the extension author to add support for non-members. For details, see [Extensions and public project support](../../extend/develop/public-project.md).

## Access levels and unavailable features for public projects

A project member has access to features based on the access level assigned. Non-members / public users are granted limited access automatically. 
To contribute to a public project, you must be added as a member of that project and assigned either Stakeholder, Basic, or Basic + Test Plans access. Access levels determine the user interfaces that you can access. The security group you're assigned to determines the features you can exercise. For more information, see [About access levels](../security/access-levels.md).

You [add project members](../accounts/add-organization-users.md) in the same way you do for private projects. Be sure you understand what it means to [invite an external user](../accounts/add-external-user.md) to have access to your project. If you created the project, you're automatically assigned to the Project Administrators group.

The following user interface elements are hidden for non-members.

* **Boards**: **Work items** are available, but **Backlogs**, **Boards**, **Sprints**, **Queries**, and **Plans** are hidden. 
* **Repos**: Team Foundation Version Control (TFVC) repositories are hidden 
* **Pipelines**: **Builds** and **Releases** are available, but **Library**, **Task Groups**, **Deployment Groups**, **Packages**, and XAML build system are hidden.
	* Pipeline and task editors for build and release pipelines are unavailable  
	* Only the new **Releases*** page, which is in Public preview, is available.
* **Test Plans**: **Test Plans** and its associated manual and cloud load testing features are hidden.
* **Analytics**: **Analytics views** is hidden, and the Analytics OData feed is not supported for non-members. Power BI integration in general is not supported.
* Settings and administrative pages are hidden.

> [!NOTE]
> When you enable the **Free access to Pipelines for Stakeholders** preview feature for the organization, Stakeholders get access to all **Pipeline** features. Without this feature enabled, Stakeholders can only view and approve releases. For more information, see [Provide Stakeholders access to edit build and release pipelines](../security/provide-stakeholder-pipeline-access.md).

In addition, non-members can't do the the following tasks:

* Edit or create artifacts, such as files, work items, and pipelines.
* Favorite and follow existing artifacts.
* View project members' email addresses and other contact information; non-members can only see name and picture. Also, filter lists of artifacts by identity.
* Switch between two public projects in the same organization; non-members must go directly to a public project using a URL.
* Perform code or work item searches across an organization.

## Partial migration

Organizations containing sensitive material should't enable the public projects policy.
In that case, we recommend that you create an entirely separate organization to host your public projects.

<a id="move-work-items" />

### Move work items to a private project

If one or a handful of work items are sensitive, you can [move them](../../boards/backlogs/move-change-type.md#move) into a separate, private project.
Cross-project links continue to work for members.
Non-members won't have access to the content since it resides in a private project.

If you have a large number of sensitive work items, consider keeping your current project private.
Instead, create a new public project in another organization.
Migrating work items can be accomplished using the open source [WiMigrator](https://github.com/Microsoft/vsts-work-item-migrator) maintained by Microsoft.

### Git tip-only migration

If a repository cannot be shared due to problematic history, consider doing a tip-only migration to a new repository in a different project.
The project containing the problematic repository should remain private.
The new repository should be created in a project you don't mind making public.

> [!WARNING]
> The new repository won't have connection to the old one.
> You won't easily be able to migrate changes between them in the future.
> Also, your pull request history won't be migrated.

- Clone the existing repository: `git clone <clone_URL>`
- Make sure you're in the root of the repository: `cd <reponame>`
- Ensure you're on the tip of the branch you want to start from, usually main: `git checkout main`
- Delete the Git data: `rmdir /s .git` on Windows, `rm -rf .git` on macOS or Linux
- Initialize a new Git repository: `git init`
- Create a new, empty repository in your public project.
- Add the new repository as your origin remote: `git remote add origin <new_clone_URL>`
- Push up your new repository: `git push --set-upstream origin main`

## 1. Enable anonymous access to projects

Before you can change a private project to a public project, you must enable anonymous access for your organization.

1. From your web browser, sign in to Azure DevOps. You must be signed in to create a public project.

2. Choose :::image type="icon" source="../../media/icons/project-icon.png" border="false"::: **Azure DevOps** to open **Projects**. Then choose **Organization settings**.

	> [!div class="mx-imgBorder"]  
	> ![Screenshot showing highlighted Organization settings button.](../../media/settings/open-admin-settings-vert.png)  

3. Choose the **Policies** page, and select **On** for **Allow public projects**.

	> [!div class="mx-imgBorder"]  
	> ![Organization settings, Policy page, Security policies](media/create-public-project/org-policies-change-anon.png)



## 2. Make a private project public

1. Choose **Project Settings** in the sidebar.

	> [!div class="mx-imgBorder"]  
	> ![Open project settings](media/make-public-private/open-project-settings-public-vert-brn.png)  

2. Choose **Overview**.  

3. To switch from private to public, choose **Public** from the **Visibility** menu of options.  

	> [!div class="mx-imgBorder"]  
	> ![Project Settings, Overview, Visibility](media/make-public-private/switch-to-public.png) 

	To switch from public to private, choose **Private** from the **Visibility** menu of options.

4. Choose **Save**.   


## Next steps

> [!div class="nextstepaction"]
> [Code with Git](../../user-guide/code-with-git.md)

