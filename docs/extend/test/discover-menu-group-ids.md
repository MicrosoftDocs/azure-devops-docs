---
ms.prod: devops
ms.technology: devops-ecosystem
title: Discover menu group identifiers | Extensions for Azure DevOps Services
description: Discover the group IDs for existing menus in Azure DevOps Services.
ms.assetid: ca1b49b5-d36c-4742-a85b-fe9ad83a7a9a
ms.topic: conceptual
ms.manager: douge
monikerRange: '>= tfs-2017'
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Discover menu group identifiers

Many Azure DevOps Services context menus have named groups of actions. This helps ensure related actions are grouped together when the context menu is presented to the user. When you [contribute an action to a menu](../develop/add-action.md), you can optionally specify a `groupId` property, which will place the action within that group.

To discover the possible group identifiers for a context menu:

1. Navigate to the page with the context menu
2. Open your browser's JavaScript console (typically by pressing F12)
3. Paste in this snippet (you may have to press enter to execute it) 
   ```
   VSS.UI.Controls.Menus.Menu.prototype.getGroupedItems=function(){if(!$.isArray(this._itemsSource))return this._itemsSource;var r=[],e={__ungrouped__:[]};if(this._itemsSource.forEach(function(r){r.groupId&&!r.separator?e[r.groupId]?e[r.groupId].push(r):e[r.groupId]=[r]:e.__ungrouped__.push(r)}),e.__ungrouped__.length===this._itemsSource.length)return this._itemsSource;var u=null;for(e.__ungrouped__=e.__ungrouped__.reduce(function(r,e,t,o){return e.separator&&(u&&u.separator||0===r.length||t===o.length-1)||r.push(e),u=e,r},[]),$.each(e,function(e,u){return'__ungrouped__'===e?!0:(r.push({id:'group_'+e,text:'Group: '+e,title:'Group: '+e}),Array.prototype.push.apply(r,u),void r.push({separator:!0}))}),Array.prototype.push.apply(r,e.__ungrouped__),0===e.__ungrouped__.length&&r.splice(r.length-1,1);r.length>0&&r[r.length-1].separator;)r.splice(r.length-1,1);return r};
   ```
4. Right-click to show the context menu, which will now show the group identifiers
   ![Menu Groups](../_img/menu-groups.png)
5. Set the `groupId` property of your action contribution, for example: 
   ```
   {
         "id": "my-edit-action",
         "type": "ms.vss-web.action",
         "targets": [
             "ms.vss-code-web.source-grid-item-menu"
         ],
         "properties": {
             "title": "My custom edit action",
             "groupId": "editing",
             "uri": "action.html"
         }
   }
   ```     

> Not all menus have defined groups.

