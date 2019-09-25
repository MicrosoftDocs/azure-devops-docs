---
title: Use @mentions in work items and pull requests 
titleSuffix: Azure DevOps 
description: Alert team members using the @mention control in work items and pull requests 
ms.prod: devops
ms.technology: devops-collab
ms.assetid: 
toc: show
ms.manager: jillfra
ms.author: chcomley
author: chcomley
ms.topic: conceptual
monikerRange: '>= tfs-2015'
ms.date: 08/22/2019
---

# Use &#64;mentions in work items and pull requests

[!INCLUDE [temp](../_shared/version-ts-tfs-2015-2016.md)]

The <strong>@mention</strong> control allows you to quickly pull someone into a work item or pull request discussion. With this control, you select a project member from the search list and they get notified of the comment you enter. 

Use the <strong>@mention</strong> control to start or continue a discussion within the following areas:

::: moniker range="azure-devops"
- A work item discussion or any rich-text field
- A pull request discussion
- Commit comments
- Changeset or shelveset comments. 
::: moniker-end

::: moniker range=">= tfs-2015 < azure-devops"
- A work item discussion 
- A pull request discussion
- Commit comments
- Changeset or shelveset comments. 
::: moniker-end

::: moniker range="tfs-2015"
> [!NOTE]
> The <strong>@mention</strong> control is available from TFS 2015.2 and later versions.
::: moniker-end

<a id="mention-person-id">  </a>

::: moniker range=">= tfs-2015 <= azure-devops-2019"

For team members to receive notifications, [you must configure an SMTP server](/azure/devops/server/admin/setup-customize-alerts).

::: moniker-end

When you're leaving a code comment in a pull request, you can enter **@** to trigger the <strong>@mention</strong> identity picker. From the identity selector, you see a list of those people that you've recently mentioned. Choose one of those names or enter the name of the person you are looking for to perform a directory search.  

To filter the list, enter the user name or alias until you've found a match.

![Web portal, Pull Request, Type a user name or email alias to locate a match](_img/at-mention-pr-type-name.png)  

::: moniker range="azure-devops"
You can also use group mentions. Enter the name of a team or a security group, choose the search icon, and then select from the options listed.
::: moniker-end

To <strong>@mention</strong> a user you've never selected previously, just continue to enter the entire name to perform your search against the full directory.  

Names of those that you mention appear in <span style="color:#0099FF">blue text</span>. Choose the<strong>@mention link name</strong> to open the user's contact card, which can provide you additional context for why they were pulled into the conversation.  

![Web portal, At mention user contact card accessible](_img/at-mention-link-to-user-contact-card.png)  

Upon completion of your selection and text entry, your <strong>@mention</strong> user receives an email alerting them about the mention.  

![Email sent to at-mention user organization](_img/mail-to-at-mention-user.png)

Use the <strong>@mention</strong> control in pull request discussions, commit comments, changeset comments, and shelveset comments.

## Related articles

- [Work item form controls](../boards/work-items/work-item-form-controls.md)  
- [Pull requests](../repos/git/pullrequest.md)
