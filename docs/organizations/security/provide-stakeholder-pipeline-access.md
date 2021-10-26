---
title: Provide free access to pipelines for Stakeholders 
titleSuffix: Azure DevOps Services
description: Add & update work items, approve releases, view work tracking progress with Stakeholder access
ms.technology: devops-new-user
ms.assetid:  
ms.author: kaelli
author: KathrynEE
ms.topic: tutorial
monikerRange: 'azure-devops'
ms.date: 07/28/2020
---


# Provide Stakeholders access to edit build and release pipelines

[!INCLUDE [temp](../../includes/version-vsts-only.md)]
 
To provide Stakeholders permissions to create, edit, and manage build and release pipelines, you can enable the **Free access to Pipelines for Stakeholders** account-level preview feature. This feature essentially enables an unlimited number of free users to manage and configure pipelines in your projects. 

> [!IMPORTANT]  
> The **Free access to Pipelines for Stakeholders** preview feature is turned on by default for all organizations created after July, 7th 2018. It is only available from Azure DevOps Services.

Without this feature enabled, stakeholders can only [view and approve releases](permissions-access.md#pipelines).

## Turn on Free access to Pipelines for Stakeholders

To enable the **Free access to Pipelines for Stakeholders** feature, see [Manage or enable features](../../project/navigation/preview-features.md). You can only enable it at the account level. 

> [!div class="mx-imgBorder"]  
> ![Preview feature, account level](media/stakeholder-security/preview-features-s172.png)

When the feature is turned on, all Stakeholders in your account have full access to **Pipelines** and it's associated features. This includes the ability to view, create, and delete automated test runs. For a complete list of associated features and tasks, see [Build and release permissions and roles](../../pipelines/policies/permissions.md). 

Stakeholders are still subject to the permissions set for their security group. For example, if they are in the Project Readers security group they have Read-only access to **Build and Release**.  If you need more fine grained control over what features Stakeholders can access, you can create a custom security group and set more fine grained permissions to certain groups of users as described in the next section. 


## Limit access to select Stakeholders to CI/CD features

After turning on the **Free access to Pipelines for Stakeholders** preview feature, you can limit access to select features or tasks by setting permissions. The general steps are: 

1. Create a custom, project-level, security group in Azure DevOps. 
2. Add users to this group 
3. Set permissions to **Deny** or **Not set** for those CI/CD features you want to limit access to. You can set permissions for these CI/CD artifacts:
	- All build pipelines or select build pipelines
	- All release pipelines or select release pipelines 
	- Task groups
1. Add the security group to a Library security role for these artifacts: 
	- Variable groups
	- Secure files
	- Deployment groups 


## Create a custom security group 

Create a custom security group at the project-level or the collection-level. The method for creating a custom security group is the same, no matter at what level you add it. 

> [!TIP]    
> You only need to create a project-level security group if you are going to limit CI/CD tasks at the project level. 

To create a project-level security group, open the web portal and choose the project where you want to add users or groups. 

> [!NOTE]   
> To enable the Project Permissions Settings Page user interface that is in preview, see [Enable preview features](../../project/navigation/preview-features.md).

#### [Preview page](#tab/preview-page) 

1. Choose **Project settings**, and then **Permissions**.

	![Choose Project settings, and then Permissions](media/permissions/choose-project-settings-permissions.png)

2. Choose **New group** to open the dialog for adding a group.

	![Choose New group](media/permissions/permissions-select-new-group.png)

3. Enter a name for the group, add users or groups, and optionally a description. Choose **Create**.

	:::image type="content" source="media/stakeholder-security/add-new-group.png" alt-text="Create group dialog":::  

#### [Current page](#tab/current-page)

1. Choose **Project Settings** in the sidebar.

    > [!div class="mx-imgBorder"]  
	> ![Web portal, open project admin context, vertical nav](../../media/settings/open-project-settings-vert-brn.png)

2. Open the **Security** page and choose **Create group** to open the dialog for adding a group.

	> [!div class="mx-imgBorder"]  
	> ![Create security group](media/stakeholder-security/create-group-option-vert.png)

3. Enter a name for the group, and optionally a description.

    For example, here we define a *Stakeholder Access* group.

	> [!div class="mx-imgBorder"]  
	> ![Create group dialog](media/stakeholder-security/create-group-dialog.png) 

4. Choose **Create group**.

* * *

## Add members to the custom security group 

#### [Preview page](#tab/preview-page) 

1. To add members to the group, choose the security group, choose **Members**, and then choose **Add**.

	:::image type="content" source="media/stakeholder-security/add-users-to-group.png" alt-text="Permissions, Group, Members tab, Choose Add":::  

1. Type the name of the user account into the text box. You can enter several identities into the text box, separated by commas. Specify individual emails, groups defined in an existing Azure Active Directory  or existing Azure DevOps groups. The system automatically searches for matches. Choose the matches that meet your requirements.

	:::image type="content" source="media/stakeholder-security/invite-members-dialog.png" alt-text="Invite members dialog":::  

1. Choose **Save**. 

1. To remove a user account from the group, select the checkbox of the account and choose **Remove**. 

	:::image type="content" source="media/stakeholder-security/remove-member.png" alt-text="Remove a member from group":::  

	Confirm your removal by choosing Remove in the dialog that appears.

#### [Current page](#tab/current-page)

1. To add members to the group, choose the security group, choose **Members**, and then choose **Add**.

	> [!div class="mx-imgBorder"]  
	> ![Add members](media/stakeholder-security/choose-members-add.png) 

1. Type the name of the user account into the text box. You can enter several identities into the text box, separated by commas. Specify individual emails, groups defined in an existing Azure Active Directory  or existing Azure DevOps groups. The system automatically searches for matches. Choose the matches that meet your requirements.

    <img src="media/project-level-permissions-add-a-user.png" alt="Add users and group dialog" />

2. Choose **Save changes**.

* * *

<a id="build-permissions" /> 

## Set permissions for build pipelines

Open the Security dialog for all or a select build pipeline. 

1. To set the permissions for all build pipelines, choose **Pipelines>Builds**, choose the :::image type="icon" source="../../media/icons/folder.png" border="false"::: folder icon, and then, with **All build pipelines** selected, choose the :::image type="icon" source="../../media/icons/actions-icon.png" border="false":::actions icon and select **Security**.

	> [!div class="mx-imgBorder"]  
	> ![Open the Security dialog for all build pipelines, vertical nav](media/stakeholder-security/open-security-all-build-pipelines-new-nav.png)  

1. To set the permissions for a specific build pipeline, open the :::image type="icon" source="../../media/icons/actions-icon.png" border="false"::: actions icon for the specific build and choose **Security**.

	> [!div class="mx-imgBorder"]  
	> ![Open the security dialog for a build pipeline](media/stakeholder-security/open-security-build-pipeline-new-nav.png)  


## Add and set permissions for the custom security group  

1. Enter the name of the group you want to add to the Permissions dialog. For example, here we enter *Stakeholder Access* group to the Permissions dialog. 

	> [!div class="mx-imgBorder"]  
	> ![Enter custom security group name into the search box](media/stakeholder-security/pipeline-stakeholder-group-permissions.png)  
 
    Set the permissions you want for the  group and then close the dialog. Change the permission settings to **Deny** for those permissions you want to limit access to. 
 
	There is no Save button. 


<a id="build-permissions" /> 

## Set permissions for release definitions

You can follow the steps provided in the previous two procedures to set permissions for release definitions. 

Open the Security dialog for all or a select release pipeline. 

1. To set the permissions for a specific release pipeline, open the :::image type="icon" source="../../media/icons/actions-icon.png" border="false"::: actions icon menu for the build and choose **Security**.

2. Enter the custom security group, such as *Stakeholder Access*, to the search box on the Permissions page.

	Change the permission settings to **Deny** for those permissions you want to limit access to. 

	> [!div class="mx-imgBorder"]  
	> ![Choose Add link to add a group](media/stakeholder-security/release-permissions-dialog.png)  

    Set the permissions you want for the  group and then close the dialog. Change the permission settings to **Deny** for those permissions you want to limit access to. 
 
	There is no Save button. 

## Limit access to Library resources 

To prevent Stakeholders from editing Library resources, add your custom security group to the Library reader role. To learn how, see [Manage Library roles for variable groups, secure files, and deployment groups](../../pipelines/policies/set-permissions.md).


## Limit access to task group 

To prevent Stakeholders from editing task groups, add your custom security group to the task group permissions and set all permissions to **Deny**. To learn how, see [Manage Library roles for variable groups, secure files, and deployment groups](../../pipelines/policies/set-permissions.md).


## Related articles

- [Set build and release permissions](../../pipelines/policies/set-permissions.md) 
- [Build and release permissions and roles (Security)](../../pipelines/policies/permissions.md) 
- [Get started as a stakeholder](get-started-stakeholder.md)
