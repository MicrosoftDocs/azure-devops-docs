---
title: Why did I get this email
titleSuffix: Azure DevOps 
description: Troubleshoot why you're receiving automatic notification emails from Azure DevOps.
ms.technology: devops-collab
ms.reviewer: wismythe
ms.author: chcomley 
author: chcomley
ms.topic: conceptual
ms.date: 12/30/2019  
monikerRange: '>= tfs-2017'
---

# Why did I get this email

[!INCLUDE [version-vsts-tfs-2017-on](../includes/version-tfs-2017-through-vsts.md)]


If you receive a notification email that you didn't expect, it could be for one of the following reasons:

* The email is sent to a group of which you're a member
* The email was triggered by a different subscription than you expected

Do the following tasks to determine if any resolve the issue:

## Inspect the 'To:' line on the email

Your email address or a group address is on this line. If you're receiving unexpected emails, you may be part of a group that's receiving the email. The subscription administrator might have configured the email delivery preferences to a wider than intended group.

## Inspect the footer of the unexpected email

All emails have a footer, which contains a link to view the subscription that triggered the email.  Select the link and view the subscription. You received the email because this subscription to which your are subscribed.  If it's an organization or team subscription, you can opt out of the subscription.

> [!div class="mx-imgBorder"] 
>![Email footer](media/email-footer-view.png)

## Contact customer support

If you can't resolve the issue with the previously mentioned steps, consider contacting [customer support](troubleshoot-contact-support.md).
