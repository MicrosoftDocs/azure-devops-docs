---
title: "Use @mentions to further discussion in VSTS & TFS"
description: "Alert team members using the @mention control in discussions and pull requests" 
ms.prod: vs-devops-alm
ms.technology: collaborate
ms.assetid: 
toc: show
ms.manager: douge
ms.author: elbatk
ms.topic: get-started-article
ms.date: 09/01/2017
---


# Use &#64;mentions to further discussion

**VSTS | TFS 2018 | TFS 2017 | TFS 2015.2**

The **@mention** control allows you to quickly pull someone into a discussion.  You can use this control within the Discussion section of a work item form, or a pull request. 

<a id="mention-person-id">  </a>

>[!NOTE]    
><b>Feature availability: </b>The **@mention**  control is currently supported from VSTS or the web portal for TFS 2015.2 and later versions. For on-premises TFS, [you must configure an SMTP sever](../tfs-server/admin/setup-customize-alerts.md) in order for team members to receive notifications.    

When leaving a code comment in a pull request, you can type **@** to trigger the **@mention** identity picker. From the identity selector, you'll see a list of those people that you have you've recently mentioned. You can choose one of those names or type in the name of the person you are looking for to perform a directory search.  

To filter the list, enter the user name or alias until you've found a match.

<img src="_img/at-mention-pr-type-name.png" alt="Web portal, Pull Request, Type a user name or email alias to locate a match" style="border: 1px solid #CCCCCC;" /> 

To **@mention** a user you've never selected previously, just continue typing to perform your search against the full directory.  

Names of those that you mention appear in <span style="color:#0099FF">blue text</span>. Click the <span style="color:#0099FF">**@mention link name**</span> to open the user's contact card, which can provide you additional context for why they were pulled into the conversation.  

<img src="_img/at-mention-link-to-user-contact-card.png" alt="Web portal, At mention user contact card accessible]" style="border: 1px solid #CCCCCC;" /> 

Upon completion of your selection and text entry, your **@mention** user will receive an email alerting them about the mention.  

<img src="_img/mail-to-at-mention-user.png" alt="Email sent to at-mention user account]" style="border: 1px solid #CCCCCC;" /> 

When viewing their own mentioned names in conversations, users will notice that their own name is are highlighted in orange text.  

<img src="_img/at-mention-link-view-of-own-name.png" alt="Web portal, At mention of ones own name appears in orange text]" style="border: 1px solid #CCCCCC;" /> 

You can use the **@mention** control in pull request discussions, commit comments, changeset comments, and shelveset comments. You can also use the **@mention** control in the [Discussion section of work item forms](../work/work-items/work-item-form-controls.md#discussion). 

## Related notes

- [Work item form controls](../work/work-items/work-item-form-controls.md)  
- [Pull requests](../git/tutorial/pullrequest.md)