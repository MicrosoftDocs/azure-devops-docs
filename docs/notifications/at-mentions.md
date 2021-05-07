---
title: Use @mentions in work items and pull requests 
titleSuffix: Azure DevOps 
description: Alert team members using the @mention control in work items and pull requests 
ms.technology: devops-collab
ms.custom: quarterly-update
ms.assetid: 
toc: show
ms.author: chcomley
author: chcomley
ms.topic: conceptual
monikerRange: '>= tfs-2015'
ms.date: 02/17/2021 
--- 

# Use &#64;mentions in work items and pull requests

[!INCLUDE [temp](../includes/version-ts-tfs-2015-2016.md)]

The **@mention** control allows you to quickly add a user or group to a work item or pull request discussion. Using the people picker of the **@mention** control, you can select a project member or group from the search list, and they'll receive an email notifying them of your comment. 

::: moniker range="azure-devops"

For organizations that manage their users and groups using Azure Active Directory (Azure AD), people pickers provide support for searching all users and groups added to Azure AD, not just those users and groups added to your project. To limit the set to project members and groups, see [Manage your project, Limit identity search and selection](../user-guide/project-admin-tutorial.md#limit-identity-selection).  

::: moniker-end

::: moniker range="< azure-devops"

For organizations that manage their users and groups using Active Directory, people pickers provide support for searching all users and groups added to the Azure AD, not just those users and groups added to your project.  

::: moniker-end

Use the **@mention** control to start or continue a discussion within the following areas:

::: moniker range=">= azure-devops-2020"

- A work item discussion or any rich-text field
- A pull request discussion
- Commit comments
- Changeset or shelveset comments

::: moniker-end

::: moniker range=">= tfs-2015 < azure-devops-2020"

- A work item discussion 
- A pull request discussion
- Commit comments
- Changeset or shelveset comments

::: moniker-end

::: moniker range="tfs-2015"

> [!NOTE]
> The <strong>@mention</strong> control is available from TFS 2015.2 and later versions.

::: moniker-end

<a id="mention-person-id">  </a>

::: moniker range=">= tfs-2015 < azure-devops"

[!INCLUDE [note-smtp-server](includes/note-smtp-server.md)]

::: moniker-end

## Identity search selection

When you leave a code comment in a pull request, enter **\@** to trigger the **\@mention** people picker. From the people picker, you see a list of users you've recently mentioned. Choose a name or enter the name of the user you're looking for to do a directory search. 

> [!WARNING]
> If you have permission to invite users to the organization, regardless of whether the **Restrict invitations** policy is disabled, you can **@mention** a user who isn't part of your organization. This action invites that user to your organization. To learn more, see [Restrict new user invitations from project and team administrators](../organizations/security/restrict-invitations.md). 

To filter the list, enter the user name or alias until you've found a match.
 
> [!div class="mx-imgBorder"]  
> ![Screenshot of people picker](media/at-mention/identity-selector.png)  

::: moniker range=">= azure-devops-2020"

You can also use group mentions. Enter the name of a team or a security group, choose :::image type="icon" source="../media/icons/search-icon.png" border="false"::: **Search**, and then select from the options listed.

::: moniker-end

To **\@mention** a user you've never selected previously, just continue to enter the entire name to do your search against the full directory.  

Names of mentioned users appear in blue text. Choose the **\@mention link name** to open the user's contact information. The contact information provides more context for why they were added to the conversation.  

::: moniker range=">= azure-devops-2019"
> [!div class="mx-imgBorder"]  
> ![Screenshot of discussion section with at mention made.](media/at-mention/at-mention-discussion.png)  
::: moniker-end

::: moniker range="< azure-devops-2019"
![Web portal, At mention user contact information accessible](media/at-mention-link-to-user-contact-card.png)  
::: moniker-end


> [!NOTE]
> Don't copy/paste **\@mention** users from a previous comment. While the resulting formatting looks identical to a properly entered mention, it doesn't register as a true mention nor send an email notification.


Upon completion of your selection and text entry, your **@mention** user receives an email alerting them about the mention.  

::: moniker range=">= azure-devops-2019"
> [!div class="mx-imgBorder"]  
> ![Screenshot of Email sent in Outlook.](media/at-mention/at-mention-work-item.png)  
::: moniker-end

::: moniker range="< azure-devops-2019"
![Email sent to at-mention user organization](media/mail-to-at-mention-user.png)
::: moniker-end


Use the **\@mention** control in pull request discussions, commit comments, changeset comments, and shelveset comments.



::: moniker range="azure-devops"

## Limited identities in search selection  

In general, people pickers search and select any user or group added to an organization's Azure Active Directory (Azure AD). 

For organizations that manage their users and groups using Azure Active Directory (Azure AD), people pickers provide support for searching users and groups added to the Azure AD. For organizations that want to limit the search and selection to just those users and groups added to a specific project, they can do so by enabling the **Limit user visibility for projects** preview feature for their organization. 

When the **Limit user visibility for projects** preview feature is enabled for an organization, the list of identities you can select from a people picker is limited in one of the following ways: 

- Users added to the **Project-Scoped Users** group are only able to select from an identity list that contains users and groups added explicitly to the project they're connected to. 
- If all project members are added to the **Project-Scoped Users** group, then people pickers are limited to only those users and groups added to the project. All project members are only able to select identities that match users and groups added explicitly to the project they're connected to. 
  
To learn how, see [Manage your project, Limit identity search and selection](../user-guide/project-admin-tutorial.md#limit-identity-selection). 

::: moniker-end


## Related articles

- [Work item form controls](../boards/work-items/work-item-form-controls.md)  
- [Pull requests](../repos/git/pull-requests.md)
