---
title: Approve extension requests in Azure DevOps Services and Team Foundation Server
description: Approve extension requests for Azure DevOps Services and Team Foundation Server (TFS)
ms.topic: conceptual
ms.prod: devops
ms.technology: devops-marketplace
ms.assetid: c34bdc56-c731-4211-b8f4-802973d864da
ms.manager: douge
ms.author: elbatk
author: elbatk
ms.date: 09/10/2018
monikerRange: '>= tfs-2013'
---

 

# Approve extensions for a project collection

**Azure DevOps Services** | **TFS**

As a project collection administrator, you receive an email when another project member requests an extension. When you approve the request, Azure DevOps Services or Team Foundation Server (TFS) automatically installs the extension.

To approve extensions, you must have [**Edit collection-level information** permissions](../organizations/security/permissions.md#collection).

1.	Go to your Azure DevOps Services or TFS home page, then go to your project:
    * Azure DevOps Services:```https://dev.azure.com/{organization}/{project}```
    * TFS: ```https://{server}:8080/tfs/{team-project-collection}/{team-project}```

[!INCLUDE [temp](../_shared/new-navigation.md)]

# [New navigation](#tab/new-nav)

2. Select the shopping bag icon and **Manage extensions**.

   ![Manage extensions](../organizations/billing/_img/_shared/marketplace-shopping-bag-manage-extensions.png)

# [Previous navigation](#tab/previous-nav)

2. Select the shopping bag icon and **Manage extensions**.

   ![Manage extensions](../organizations/billing/_img/_shared/marketplace-shopping-bag-manage-extensions-prev-nav.png)

---

3. Review and approve your requested extensions.

    <img alt="Extensions tab, requested extensions" src="_img/get-tfs-extensions/connected/approve-request-tfs.png" style="border: 1px solid #CCCCCC" />

    After you approve extension requests, they are automatically installed.

4. If you installed paid extensions, go to the next section to [assign those extensions](./assign-paid-extensions.md) to users who need access.

5. Remember to tell your team about installed extensions, so they can start using their capabilities.
