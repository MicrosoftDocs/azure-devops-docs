---
title: Approve extension requests in Visual Studio Team Foundation Server (TFS)
description: Approve extension requests in a team collection for Team Foundation Server
ms.topic: get-started-article
ms.prod: vs-devops-alm
ms.technology: vs-devops-marketplace
ms.assetid: 5499598e-58fa-4f9a-bb2a-17bbe03255fb
ms.manager: douge
ms.author: elbatk
ms.date: 9/27/2017
---

# Approve extensions for a team project collection

**TFS**

As a project collection administrator, you'll get an email when another team project member requests an extension. When you approve the request, TFS automatically installs the extension.

To approve extensions, you must also have 
[**Edit collection-level information** permissions](../../security/permissions.md#collection).

0.	Go to your TFS home page, then go to your team project (```https://{server}:8080/tfs/{team-project-collection}/{team-project}```).

0.	Manage your extensions.

**TFS 2015 Update 3**

<img alt="Manage extensions" src="../_shared/_img/manage-extensions.png" style="border: 1px solid #CCCCCC" />

**TFS 2017**

<img alt="Manage extensions" src="../_shared/_img/manage-extensions2-new.png" style="border: 1px solid #CCCCCC" />

0. Review and approve your requested extensions.

	<img alt="Extensions tab, requested extensions" src="../_img/get-tfs-extensions/connected/approve-request-tfs.png" style="border: 1px solid #CCCCCC" />

   After you approve extension requests, TFS automatically installs those extensions. 

0. If you installed paid extensions, go to the next section to [assign those extensions](./assign-paid-extension-access.md), to users who need access so they can start using those extensions. 

0. Remember to tell your team about installed extensions, so they can start using their capabilities.