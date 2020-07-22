---
title: Navigating the notifications UI
titleSuffix: Azure DevOps 
description: Navigate and explore the notifications pages in Azure DevOps and Team Foundation Server (TFS)  
ms.technology: devops-collab
ms.reviewer: wismythe
ms.author: chcomley
author: chcomley
ms.topic: conceptual
ms.date: 12/30/2019 
monikerRange: '>= tfs-2017'
---

# Access notification settings

[!INCLUDE [version-vsts-tfs-2017-on](../includes/version-tfs-2017-through-vsts.md)]

Learn about navigating the notifications user interface.

> [!NOTE]  
> This article applies to Azure DevOps, TFS 2017 Update 1 and later versions. For information on TFS 2017 and earlier versions, see [Manage personal notifications](manage-your-personal-notifications.md) and select the TFS 2015 content version. 

## Notifications settings

You can set notifications at the following four levels:

* Personal
* Team
* Project
* Organization or collection (organization for the cloud and project collection for on-premises)

[!INCLUDE [note-smtp-server](includes/note-smtp-server.md)]


## Prerequisites

* Each user can manage their personal notifications
* To manage team notifications, you must be added as a [team administrator](../organizations/settings/add-team-administrator.md) or be a member of a [Project Administrator Group or Project Collection Administrators group](../organizations/security/set-project-collection-level-permissions.md)
* To manage project-level notifications, you must be a member of the  [Project Administrator Group or Project Collection Administrators group](../organizations/security/set-project-collection-level-permissions.md)
* To manage organization notifications, you must be a member of the [Project Collection Administrators group](../organizations/security/set-project-collection-level-permissions.md). 

For additional permission settings regarding notifications, see [Permissions and groups, Notifications or alerts](../organizations/security/permissions.md#notifications-or-alerts).


<a id="open-person-level" />

## Open your personal notifications 

Enter the following URL to reach your personal notifications page, replacing {organization} with your organization's name. 

::: moniker range="azure-devops"

```URL
https://dev.azure.com/{organization}/usersSettings/notifications
```

![Navigate to personal notifications page](media/personal-notifications-preview.png)  

![View personal notifications page](media/personal-notifications-page.png)

::: moniker-end

::: moniker range=">= azure-devops-2019 < azure-devops"

```URL
https://dev.azure.com/{organization}/_notifications
```

> [!div class="mx-imgBorder"] 
>![Navigate to personal notifications page](media/nav-personal-notifications-hub-newnav.png)  

> [!div class="mx-imgBorder"] 
>![View personal notifications page](media/view-personal-notification-hub-newnav.png)

::: moniker-end

::: moniker range="<= tfs-2018"

```URL
https://dev.azure.com/{organization}/_notifications
```

> [!div class="mx-imgBorder"] 
>![Navigate to personal notifications page](media/nav-personal-notifications-hub.png)

::: moniker-end



## Open team or project level notifications

Enter the following URL to reach a team or project-level notifications page, replacing {organization} and {project} with your organization's and project's name. 

::: moniker range=">= tfs-2018" 

```URL
https://dev.azure.com/{organization}/{project}/_settings/notifications
```

> [!div class="mx-imgBorder"]  
>![Navigate to team notifications page](media/nav-team-notifications-hub-newnav.png)  

::: moniker-end

::: moniker range="< tfs-2018"  

```URL
https://dev.azure.com/{organization}/{project}/_admin/_notifications
```

> [!div class="mx-imgBorder"] 
>![Navigate to team notifications page](media/nav-team-notifications-hub.png)

> [!div class="mx-imgBorder"] 
>![View team level notifications page](media/view-team-notification-hub.png)

   ::: moniker-end

<a id="open-org-level" />


## Open organization-level notifications

Enter the following URL to reach the organization-level notifications page, replacing {organization} with your organization's name. 

::: moniker range=">= azure-devops-2019" 

```URL
https://dev.azure.com/{organization}/_settings/notifications
```

![Navigate to organization notifications page](media/nav-organization-notifications-hub-newnav.png) 

::: moniker-end

::: moniker range="<= tfs-2018" 

```URL
https://dev.azure.com/{organization}/_admin/_notifications
```

> [!div class="mx-imgBorder"] 
>![Navigate to organization notifications page](media/nav-organization-notifications-hub.png)  

> [!div class="mx-imgBorder"] 
>![View organization level notifications page](media/view-organization-notification-hub.png)  

::: moniker-end

## Related articles

- [Manage personal notification settings](manage-your-personal-notifications.md)
- [Follow a specific work item](../boards/work-items/follow-work-items.md)  
- [Manage notifications for a team](manage-team-notifications.md)  
- [Change your preferred email address](change-email-address.md)