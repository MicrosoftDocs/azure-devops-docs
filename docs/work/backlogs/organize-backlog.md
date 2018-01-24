---
title: Organize your backlog using Agile tools provided by VSTS & TFS  
description:  Organize your backlog by mapping backlog items to features, and features to epics in VSTS or the web portal for Team Foundation Server (TFS)  
ms.technology: vs-devops-wit
ms.prod: vs-devops-alm
ms.assetid: C294ACBD-00A3-4FCF-8777-B354BC0CC1EF  
ms.manager: douge
ms.author: kaelli
ms.topic: get-started-article
ms.date: 08/29/2017
---

# Organize your backlog, map child work items to parents 

[!INCLUDE [temp](../_shared/version-vsts-tfs-all-versions.md)]


After you've added [features or epics](define-features-epics.md) to your portfolio backlog, you can quickly organize your backlog by mapping backlog items to them. With features and epics, you can quickly add and group items into a hierarchy, drill up or down within the hierarchy, reorder and reparent items, and filter hierarchical views.   
 

In this topic you'll learn:  

> [!div class="checklist"] 
> * How to change the backlog view to show the tree hierarchy  
> * How to group backlog items under a feature or epic using the Mapping pane  
> * How to reparent items using drag-and-drop or the **Change parent** option       




## Show parents and expand the tree hierarchy  
From the product backlog page, set Parents to Show when you want to drill up or down within the hierarchy, set Parents to Show. You can also drag and drop items to reparent items from this view. 

<img src="_img/org-backlog-intro-show-parents-ts-new-nav.png" alt="Hierarchical view of backlogs" style="border: 1px solid #C3C3C3;" />  

Use the expand ![expand icon](../_img/icons/expand_icon.png) and collapse ![collapse icon](../_img/icons/collapse_icon.png) icons to expand or collapse one level of the hierarchy. 
  
<img src="_img/org-backlog-collapse-backlog-ts-new-nav.png" alt="Collapsed hierachical view" style="border: 1px solid #C3C3C3;" />  


<a id="mapping">  </a>

## Map items to group them under a feature or epic 
If you've already created your backlog, and now you want to organize it, you can do that most easily by mapping them.   

To map a backlog item under a feature, you first turn mapping on from your backlog (Backlog items, Stories, or Requirements). Next, find the Unparented backlog items group by turning the Parents control to Show. Unparented backlog items will appear at the end of the parented set of backlog items. 
 
Drag items that are currently unparented to the feature under which they belong. Also, you can drag a backlog item to a different feature to change its parent. This mapping creates parent-child links from feature to user stories, which is captured in the ![Links tab icon](../backlogs/_img/icon-links-tab-wi.png) (links) tab.

<img src="_img/org-backlog-map-pbi-to-feature-ts-new-nav.png" alt="Map a backlog item to a portfolio backlog work item" style="border: 1px solid #C3C3C3;" />  

>[!NOTE]  
><b>Feature availability: </b> Multi-select of work items on the backlog and sprint backlogs is supported from VSTS and TFS 2015.1 or later versions. This feature works in the same way as [multi-select works within query results](../backlogs/bulk-modify-work-items.md).   

It's the same process to map features to epics. From the Features backlog, drag features to an epic listed under the mapping pane.  

<a id="reparent">  </a>

## Change parent (re-parent) and reorder items
When you need to change the order or grouping, simply drag the item to its new location. 

You can re-parent an item using the mapping pane, or simply drag it within the hierarchy to change its parent.  

<img src="_img/ALM_OB_ReparentAnItem.png" alt="Reparent or reorder work items on a backlog" style="border: 1px solid #C3C3C3;" />  

 You can only re-parent backlog items under other features, and features under other epics. 

Also, to change an item's priority within a group, you can drag the item up or down within its hierarchical group. 
This works the same as when you [moved items into priority order on your product backlog](create-your-backlog.md).   


<a id="change-parent-option">  </a>

### Change parent of multiple backlog items 

>[!NOTE]  
><b>Feature availability: </b> The **Change parent&hellip;** menu option from the backlog page is supported from VSTS. 

From the product backlog you can multi-select several work items and choose **Change parent&hellip;** to link the items to a parent work item item. 

<img src="_img/org-backlog-change-parent.png" alt="Change parent of several backlog items" style="border: 1px solid #C3C3C3;" /> 


## Related topics  

- [Define features and epics](define-features-epics.md)
- [Work with multi-team ownership of backlog items](work-multi-team-ownership-backlogs.md)
- [Select backlog navigation levels for your team](../customize/select-backlog-navigation-levels.md)
- [Product backlog controls](product-backlog-controls.md)
- [Filter product and portfolio backlogs ](filter-backlogs.md)
- [Backlog keyboard shortcuts](backlogs-keyboard-shortcuts.md)

[!INCLUDE [temp](../_shared/image-differences.md)]
