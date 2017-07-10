---
title: Organize your backlog | Team Services & TFS  
description:  Organize your backlog by mapping backlog items to features, and features to epics in Visual Studio Team Services or the web portal for Team Foundation Server (TFS)  
ms.technology: vs-devops-agile-wit
ms.prod: vs-devops-alm
ms.assetid: C294ACBD-00A3-4FCF-8777-B354BC0CC1EF  
ms.manager: douge
ms.author: kaelli
ms.topic: get-started-article  
ms.date: 06/19/2017
--- 

# Organize your backlog  

**Team Services | TFS 2017 | TFS 2015 | TFS 2013**  

After you've added features to your portfolio backlog, you can quickly organize your backlog by mapping backlog items to them. With features and epics, you can quickly add and group items into a hierarchy, drill up or down within the hierarchy, reorder and reparent items, and filter hierarchical views.      

[!INCLUDE [temp](../_shared/image-differences.md)]

From the product backlog page, set Parents to Show when you want to drill up or down within the hierarchy, set Parents to Show. You can also drag and drop items to reparent items from this view. 

<img src="_img/org-backlog-intro-show-parents-ts-new-nav.png" alt="Hierarchical view of backlogs" style="border: 1px solid #CCCCCC;" />  

Use the expand ![expand icon](../_img/icons/expand_icon.png) and collapse ![collapse icon](../_img/icons/collapse_icon.png) icons to expand or collapse one level of the hierarchy. 
  
<img src="_img/org-backlog-collapse-backlog-ts-new-nav.png" alt="Collapsed hierachical view" style="border: 1px solid #CCCCCC;" />  


<a id="mapping">  </a>

## Map items to group them under a feature or epic 
If you've already created your backlog, and now you want to organize it, you can do that most easily by mapping them.   

To map a backlog item under a feature, you first turn mapping on from your backlog (Backlog items, Stories, or Requirements). Next, find the Unparented backlog items group by turning the Parents control to Show. Unparented backlog items will appear at the end of the parented set of backlog items. 
 
Drag items that are currently unparented to the feature under which they belong. Also, you can drag a backlog item to a different feature to change its parent. This mapping creates parent-child links from feature to user stories, which is captured in the ![Links tab icon](../backlogs/_img/icon-links-tab-wi.png) (links) tab.

<img src="_img/org-backlog-map-pbi-to-feature-ts-new-nav.png" alt="Map a backlog item to a portfolio backlog work item" style="border: 1px solid #CCCCCC;" />  

>[!NOTE]  
><b>Feature availability: </b> Multi-select of work items on the backlog and sprint backlogs is supported from Team Services and TFS 2015.1 or later versions. This feature works in the same way as [multi-select works within query results](../backlogs/bulk-modify-work-items.md).   

It's the same process to map features to epics. From the Features backlog, drag features to an epic listed under the mapping pane.  

<a id="reparent">  </a>

## Change parent (re-parent) and reorder items
When you need to change the order or grouping, simply drag the item to its new location. 

You can re-parent an item using the mapping pane, or simply drag it within the hierarchy to change its parent.  

<img src="_img/ALM_OB_ReparentAnItem.png" alt="Reparent or reorder work items on a backlog" style="border: 1px solid #CCCCCC;" />  

 You can only re-parent backlog items under other features, and features under other epics. 

Also, to change an item's priority within a group, you can drag the item up or down within its hierarchical group. 
This works the same as when you [moved items into priority order on your product backlog](create-your-backlog.md).   


<a id="change-parent-option">  </a>

### Change parent of multiple backlog items 

>[!NOTE]  
><b>Feature availability: </b> The **Change parent&hellip;** menu option from the backlog page is supported from Team Services. 

From the product backlog you can multi-select several work items and choose **Change parent&hellip;** to link the items to a parent work item item. 

<img src="_img/org-backlog-change-parent.png" alt="Change parent of several backlog items" style="border: 1px solid #CCCCCC;" /> 


## Related notes  

- [Define features and epics](define-features-epics.md)
- [Work with multi-team ownership of backlog items](work-multi-team-ownership-backlogs.md)
- [Select backlog navigation levels for your team](../customize/select-backlog-navigation-levels.md)
- [Filter backlogs and boards](../how-to/filter-backlog-or-board.md)  
