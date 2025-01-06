---
title: Why did I get this email
titleSuffix: Azure DevOps 
description: Troubleshoot why you're receiving automatic notification emails from Azure DevOps.
ms.subservice: azure-devops-notifications
ms.reviewer: wismythe
ms.author: chcomley 
author: chcomley
ms.topic: conceptual
ms.date: 12/30/2019  
monikerRange: '<= azure-devops'
---

# Why did I get this email

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

If you get a notification email that you didn't expect, it could be for one of the following reasons:

* The email is sent to a group of which you're a member
* An unexpected subscription triggered the email

Do the following tasks to determine if any resolve the issue:

## Inspect the 'To:' line on the email

Your email address or a group address appears on this line. If you receive unexpected emails, you might be part of a group receiving the email. The subscription administrator maybe configured the email delivery preferences to a wider group than intended.

## Inspect the footer of the unexpected email

All emails have a footer containing a link to view the subscription that triggered the email. Select the link to view the subscription. You received the email because you're subscribed to this subscription. If it's an organization or team subscription, you can opt out of it.

> [!div class="mx-imgBorder"] 
>![Screenshot shows email footer.](media/email-footer-view.png)

## Contact customer support

If you can't resolve the issue with the previously mentioned steps, consider contacting [customer support](../../user-guide/provide-feedback.md).
