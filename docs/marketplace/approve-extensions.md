---
title: Approve extension requests in Visual Studio Team Services and Team Foundation Server
description: Approve extension requests for Visual Studio Team Services (VSTS) and Team Foundation Server (TFS)
ms.topic: get-started-article
ms.prod: vs-devops-alm
ms.technology: vs-devops-marketplace
ms.assetid: c34bdc56-c731-4211-b8f4-802973d864da
ms.manager: douge
ms.author: elbatk
ms.date: 12/04/2017
monikerRange: '>= tfs-2013'
---

 

# Approve extensions for a team project collection

**VSTS** | **TFS**

As a project collection administrator, you'll get an email when another team project member requests an extension. When you approve the request, Visual Studio Team Services (VSTS) or Team Foundation Server (TFS) automatically installs the extension.

To approve extensions, you must also have [**Edit collection-level information** permissions](../security/permissions.md#collection).

0.	Go to your VSTS or TFS home page, then go to your team project:
    * VSTS:```https://{account-name}.visualstudio.com/{team-project}```
    * TFS: ```https://{server}:8080/tfs/{team-project-collection}/{team-project}```

0.	Manage your extensions:

    ![Manage extensions](_img/manage-extensions-vsts.png)

0. Review and approve your requested extensions.

    <img alt="Extensions tab, requested extensions" src="_img/get-tfs-extensions/connected/approve-request-tfs.png" style="border: 1px solid #CCCCCC" />

    After you approve extension requests, TFS automatically installs those extensions. 

0. If you installed paid extensions, go to the next section to [assign those extensions](./assign-paid-extensions.md), to users who need access so they can start using those extensions. 

0. Remember to tell your team about installed extensions, so they can start using their capabilities.
