---
title: Assign paid extensions to users in Visual Studio Team Foundation Server (TFS)
description: Assign paid extensions to users in a team collection for Team Foundation Server
ms.topic: get-started-article
ms.prod: vs-devops-alm
ms.technology: vs-devops-marketplace
ms.assetid: ab1f1b35-6d10-47dd-b541-06321243d6ea
ms.manager: douge
ms.author: elbatk
ms.date: 9/27/2017
---

# Assign paid extension access to users

**TFS**

After you install a paid extension, you must assign that extension to users who need access, 
so they can start using that extension's capabilities.

> You only have to assign extensions to users who need access. 
> Most extensions require that users have at least Basic access, 
> not Stakeholder. If you have [Visual Studio Enterprise subscribers](https://marketplace.visualstudio.com/subscriptions), 
> they automatically get access to specific extensions that are included 
> with their subscriptions as benefits, like Test Manager. 
> If you installed these extensions, you don't have to assign 
> them to Visual Studio Enterprise subscribers in your team project. Visual Studio Test Professional subscribers 
> get access to the Test Manager extension included with their subscription. To grant them access just assign Test Manager.
> To learn more, see [change access levels](/vsts/security/change-access-levels).
> To find the access that your extension requires, see the extension's description 
> in the [Visual Studio Marketplace](https://marketplace.visualstudio.com).

## Who can assign paid extensions to users?

[Project collection administrators](../../accounts/add-administrator-project-collection.md) 
with [**Edit collection-level information** permissions](../../security/permissions.md#collection) 
can assign paid extensions to users.

0.  From your TFS home page, go to your control panel (```https://{server}:8080/tfs/_admin```).

    <img alt="Go to TFS settings" src="../../_shared/_img/tfs-server-settings-new.png" style="border: 1px solid #CCCCCC" />

0.  Go to your team project collection settings (```https://{server}:8080/tfs/{team-project-collection}/_admin```).

    <img alt="Go to your team project collection administration page" src="../_img/get-tfs-extensions/connected/view-project-collection-administration-page.png" style="border: 1px solid #CCCCCC" />

0.  Go to your Users hub (```https://{server}:8080/tfs/{team-project-collection}/_admin/_userHub```).

    <img alt="Go to Users hub" src="../../_shared/_img/users-hub-tfs-updated.png" style="border: 1px solid #CCCCCC" />

0.  Go to the extension pane, for example, Test Manager.

    <img alt="Go to extension pane" src="../_img/assign-extensions/assign-extension-no-users-tfs.png" style="border: 1px solid #CCCCCC" />

0.  Assign your extension to users who need access. 

    <img alt="Assign extension to users" src="../_img/assign-extensions/assign-extension-add-one-user-tfs.png" style="border: 1px solid #CCCCCC" />

    <img alt="Extension now assigned" src="../_img/assign-extensions/assign-extension-assigned-basic-tfs.png" style="border: 1px solid #CCCCCC" />

    You can assign the extension to one user, specific users, or to all users at the same time, even going above the number allowed 
    for your extension, if necessary.

0.  Tell your team about this extension, so they can start using its capabilities.

    [Need help?](../tfs-extension-faqs.md#get-support)
