---
title: Use work item form controls in Azure Boards
titleSuffix: Azure Boards 
description: Learn how to use work item form controls to update status, link work items, and more in Azure Boards.
ms.custom: work-items, engagement-fy23
ms.service: azure-devops-boards
ms.assetid: A9AB9B95-61B4-41E7-AE7A-B96CD4AF9B33  
ms.topic: conceptual
ms.author: chcomley
author: chcomley 
monikerRange: '<= azure-devops'
ms.date: 02/03/2023
---

# Work item form controls 

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Different types of work items track different data. Each work item form contains some standard fields&mdash;such as title, assigned to, and area and iteration path&mdash;and to fields specific to the type. You can link work items to one another and to changesets and source code files. 

### Web portal form 

As the following image shows, each work item form comes with several controls, fields, and tabs. Keep in mind that the work item tracking experience and forms that appear in Visual Studio won't show several of the features that the web portal makes available. 

![Screenshot of work item form to track features or user stories.](media/about-work-items/work-item-form-user-story.png)


::: moniker range=">= azure-devops-2019"

> [!NOTE]    
> Depending on the process chosen when the project was created&mdash;[Agile](./guidance/agile-process.md), [Basic](../get-started/plan-track-work.md), [Scrum](./guidance/scrum-process.md), or [CMMI](./guidance/cmmi-process.md)&mdash;the types of work items you can create differ. For example, backlog items may be called user stories (Agile), product backlog items (Scrum), or requirements (CMMI). All three are similar: they describe the customer value to deliver and the work to be performed.
>
> For more information, see [About processes and process templates](./guidance/choose-process.md). 

::: moniker-end

::: moniker range="< azure-devops-2019"

> [!NOTE]    
>Depending on the process chosen when the project was created&mdash;[Agile](./guidance/agile-process.md), [Scrum](./guidance/scrum-process.md), or [CMMI](./guidance/cmmi-process.md)&mdash;the types of work items you can create differ. For example, backlog items may be called user stories (Agile), product backlog items (Scrum), or requirements (CMMI). All three are similar: they describe the customer value to deliver and the work to be performed.
>
> FFor more information, see [About processes and process templates](./guidance/choose-process.md). 

::: moniker-end


<a id="wi-controls"></a>  

### Form controls

| Control                  | Function                      |
|--------------------------|-------------------------------|
| ![Copy to clipboard icon](../backlogs/media/icon-copy-to-clipboard.png) | Copy URL of work item to clipboard (appears on hover over work item title)  |
| ![Discussions icon](../media/icons/icon-discussions-wi.png) | Go to Discussions section  |
|   :::image type="icon" source="../media/icons/actions-icon.png" border="false":::  | Open Actions menu for other work item tasks           |
| ![Refresh icon](../media/icons/icon-refresh-wi.png) | Refresh work item with latest changes  |  
| ![Undo icon](../media/icons/icon-undo-changes-wi.png) | Revert changes to work item           |  
| ![History tab icon](../media/icons/icon-history-tab-wi.png) | Open History tab        |
| ![Links tab icon](../media/icons/icon-links-tab-wi.png) | Open Links tab     |
| ![Attachment tab icon](../backlogs/media/icon-attachments-tab-wi.png) | Open Attachments tab   |
| ![full screen icon](../media/icons/fullscreen_icon.png) / ![exit full screen icon](../media/icons/exitfullscreen_icon.png)     | Enter or exit full display mode of a section within the form   |
|![Collapse section icon](../media/icons/collapse-wi-section.png)/![Expand section icon](../media/icons/expand-wi-section.png) | Collapse or expand a section within the form   |  
| ![New linked work item icon](../media/icons/new-linked-work-item.png) | Add new work item and link to existing work item (May appear under   :::image type="icon" source="../media/icons/actions-icon.png" border="false":::  Actions menu)  |  
| ![Change work item type icon](../media/icons/change-type-icon.png) | [Change work item type](../backlogs/remove-delete-work-items.md) (Appears under   :::image type="icon" source="../media/icons/actions-icon.png" border="false":::  Actions menu)  | 
| ![Change project icon](../media/icons/change-team-project-icon.png) | [Move work item to a different project](../backlogs/remove-delete-work-items.md) (Appears under   :::image type="icon" source="../media/icons/actions-icon.png" border="false":::  Actions menu)  | 
| ![Clone icon](../media/icons/clone-icon.png) | [Copy work item and optionally change work item type](../backlogs/copy-clone-work-items.md#copy-clone) (Appears  under   :::image type="icon" source="../media/icons/actions-icon.png" border="false":::  Actions menu)  |  
| ![Email icon](../media/icons/email-icon.png) | [Send email with work item](email-work-items.md)  (Appears  under   :::image type="icon" source="../media/icons/actions-icon.png" border="false":::  Actions menu)  |  
| ![Delete icon](../media/icons/delete_icon.png) | [Recycle work item](../backlogs/remove-delete-work-items.md)  (Appears  under   :::image type="icon" source="../media/icons/actions-icon.png" border="false":::  Actions menu)  | 
| ![Storyboard icon](../media/icons/storyboard-icon.png) | [Storyboard with PowerPoint](/previous-versions/azure/devops/boards/backlogs/office/storyboard-your-ideas-using-powerpoint)  (Appears  under   :::image type="icon" source="../media/icons/actions-icon.png" border="false":::  Actions menu)  | 

<a id="update-work-status">  </a>

## Update work status  

As work progresses, team members can update the state and reassign it as needed. 

![Product backlog item workflow, Scrum process](../backlogs/media/add-work-item-vsts-update-state.png)  

While the workflow states differ for different work item types, they usually follow a progression from New or Active to Closed or Done. The following image shows the work flow states for the Agile process user story. If you want to discard a work item, change the state to Removed.  

:::row:::
   :::column span="2":::
   
   **Typical workflow progression:** 
   - Create a user story in the default state, New.
   - Change the state from New to Active.
   - Change the state from Active to Resolved.
   - Change the state from Resolved to Closed.

   **Atypical transitions:** 
   - Change the state from New to Removed.
   - Change the state from Removed to New.
   - Change the state from Active to Removed.
   - Change the state from Resolved to Active.
   - Change the state from Closed to Resolved.
   
   :::column-end:::
   :::column span="1":::
   
   ![Work flow states for the Agile process user story.](./guidance/media/ALM_PT_Agile_WF_UserStory.png)  
   :::column-end:::
:::row-end:::

Removed work items remain in the data store and can be reactivated by changing the State. If you want to permanently remove a work item, you can [delete it](../backlogs/remove-delete-work-items.md). 

With each update, the Reason field also updates and changes are recorded in the History field, which you can view through the ![history tab icon](../media/icons/icon-history-tab-wi.png) **History** tab. To find work items based on their history, see [History & auditing](../queries/history-and-auditing.md).   

![View change history](../backlogs/media/add-work-item-history.png)  



<a id="link-wi">  </a>

## Link items to support traceability  

By linking work items using Related or Dependent link types, you can track work that is dependent on other work. Each work item contains one or more tabs with link controls. These controls support linking the work item to one or more objects.  


::: moniker range=">= azure-devops-2020"

There are four links controls provided on most forms. The **Deployment**, **Development**, and **Related Work** scoped links controls appear on the **Details** tab. The ![Links page icon](../media/icons/icon-links-tab-wi.png) **Links** tab provides access to all links made to the work item.  

:::image type="content" source="media/linkscontrol-bug-form-dev-related-links-azure-devops.png" alt-text="Screenshot of Bug work item form, Agile process, Deployment, Development, and Related links controls.":::
::: moniker-end

::: moniker range="< azure-devops-2020"

There are three links controls provided on most forms. The **Development** and **Related Work** scoped links controls appear on the **Details** tab. The ![Links page icon](../media/icons/icon-links-tab-wi.png) **Links** tab provides access to all links made to the work item.  

![Screenshot of Bug work item form, Agile process, Development and Related links controls.](media/linkscontrol-bug-form-dev-related-links.png)  

::: moniker-end


## Add links  

From each links control, you can complete these actions:  

- To open an associated item or object, select the linked item  
- To delete a link, highlight it and select the ![delete icon](../media/icons/delete_icon.png) delete icon   
- To link to an existing work item, or create and link to a new work item, select one of the menu options from the **Related Work** control.  

::: moniker range=">= azure-devops-2019"
:::image type="content" source="media/linkscontrol-related-work-menu-options-azure-devops.png" alt-text="Screenshot of Related Links control menu options. ":::
::: moniker-end
 
::: moniker range="tfs-2018"
![Screenshot of Related Links control menu options, TFS 2018.](media/linkscontrol-related-work-menu-options.png)  
::: moniker-end

For more information, see [Add links to work items](../backlogs/add-link.md).

<a id="deployment">  </a>

::: moniker range=">= azure-devops-2020"

### Deployment control  

The **Deployment** control supports a quick view of where and when a work item has been deployed and to what stage. You gain visual insight into the status of a work item as it is deployed to different release environments and quick navigation to each release stage and run. 
For more information, see [Link work items to builds and deployments](work-item-deployments-control.md).

:::image type="content" source="media/deployments-control/deployment-control-intro.png" alt-text="Screenshot of Deployment control with links to production and staging runs. "::: 

::: moniker-end


<a id="git-development">  </a>

### Development control  

The **Development** control displays all of your development links, whether based on a Git repository or Team Foundation version control (TFVC) repository. It displays links in a set order, and provides calls-to-action that support users to [drive development from a work item](../backlogs/connect-work-items-to-git-dev-ops.md).  

Git lets you link work items to commits by using the **Commit**, **Pull Request**, or **Branch link** types. To learn how, see [Manage and commit your changes](../../repos/git/commits.md).  

If you've connected your Azure DevOps project to a GitHub repository, you can link to GitHub commits, PRs, and issues. To learn how, see [Link GitHub commits, pull requests, and issues to work items](../github/link-to-from-github.md).

Team Foundation version control (TFVC) lets you link work items to version control changesets or versioned source code files by using the Changeset and Versioned Item link types. When you check in pending changes or use My Work to check in changes, [work items are automatically linked to your changes](../../repos/tfvc/check-your-work-team-codebase.md).  


### Related scoped links control 

The Related Work links control displays links to other work items in a set order on the front page of the form. It supports these link types: Duplicate/Duplicate of, Parent/Child, Predecessor/Successor, Related, and Tests/Tested by. To learn more about different link types, see [Linking, traceability, and managing dependencies](../queries/link-work-items-support-traceability.md).

### Links control tab 

Also, the Links control tab provides access to all links made to the work item&mdash;both work items and external objects. 

![Agile process, User Story work item form, Links control tab](../backlogs/media/add-work-item-links.png)

<a id="discussion">  </a>

[!INCLUDE [temp](../includes/discussion-tip.md)]

<a id="copy-url">  </a>

## Copy the URL

From the web portal, simply copy the URL from the web browser address or hover over the title and then select the :::image type="icon" source="../../media/icons/copy-clone-icon.png" border="false"::: copy icon. For other copy options, see [Copy or clone work items](../backlogs/copy-clone-work-items.md). 

![Copy hyperlink for a work item from web portal](../backlogs/media/add-work-item-copy-URL.png) 

::: moniker range="<= azure-devops-2019"


<a id="start-storyboarding">  </a>

## Use the Start storyboarding menu option  

> [!IMPORTANT]  
> Starting with Visual Studio 2019, the Azure DevOps Office Integration plug-in has deprecated support for Storyboarding with PowerPoint and Microsoft Project. Also, the Visual Studio Gallery for PowerPoint Storyboarding has been deprecated.  
 
The **Start storyboarding** menu option is only available from the new web form. However, from the old web form, you can choose the **Start Storyboarding** link from the **Storyboard** tab from a backlog item, or open PowerPoint. See [Storyboard your ideas using PowerPoint](/previous-versions/azure/devops/boards/backlogs/office/storyboard-your-ideas-using-powerpoint) for requirements and usage.    

You can storyboard your ideas using PowerPoint to bring your ideas to life with storyboard shapes, text, animation, and all the other features that PowerPoint Storyboarding provides. From any work item, you can open PowerPoint by choosing the Start storyboarding menu option.    

![Work item form, Start storyboarding menu option](../backlogs/media/add-work-item-start-storyboarding.png)


::: moniker-end

## Related articles

- [Run a semantic work item search](../queries/search-box-queries.md)
- [Keyboard shortcuts](../../project/navigation/keyboard-shortcuts.md)
- [Customize your work tracking experience](../../reference/customize-work.md) 

