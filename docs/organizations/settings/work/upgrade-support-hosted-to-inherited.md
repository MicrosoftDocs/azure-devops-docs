---
title: Customizations when cloning a Hosted XML process 
titleSuffix: Azure DevOps Services
description: Describes the set of customizations that are preserved versus those that are ignored when upgrading a Hosted XML process to Inheritance 
ms-custom: inherited-process
ms.technology: devops-agile
ms.prod: devops
ms.assetid: 
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
ms.topic: conceptual
monikerRange: 'azure-devops'
ms.date: 05/30/2018
---


# Supported operations when moving from Hosted XML to an inherited process   

[!INCLUDE [temp](../../../boards/_shared/version-vsts-only.md)]

<a id="hosted-xml-process-model">  </a>

Upgrading a Hosted XML process model to an inherited process  provides the convenience of customizing your work tracking system through the user interface. For an overview of supported customizations available to you with the Inheritance process, see [About process customization and inherited processes](inheritance-process-model.md). 

While the clone process attempts to model all your work tracking customizations, there are some limitations. This article outlines the set of customizations that are supported during the clone process and those which aren't.

The Inheritance process model supports most customizations, however some of the more advanced customizations you made with the Hosted XML process might not be supported. In addition, some of the customizations made to the Hosted XML process need to be manually created in the inherited process.

> [!NOTE]  
> Before you [change the process of an existing project](change-process-from-hosted-to-inherited.md) from Hosted XML to the cloned inherited process, review this article to understand which customizations are preserved and which are ignored.  

## Customizations preserved during clone

When you clone a Hosted XML process to an inherited process, the customizations listed in the following table are preserved.  

> [!div class="mx-tdCol2BreakAll"]
> |Artifact&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| Description |
> |------|---------|
> | Work item types (WITs) | All system and custom WITs are preserved. Customizations made to WIT color and icon are preserved.   | 
> | Work item fields  | All custom fields are preserved. Fields that reference global lists are updated with picklists. All default values are ignored. To learn more about supported field customizations, see [About process customization and inherited processes, Field customizations](inheritance-process-model.md#field-customizations). |  
> | Workflow states | All system and custom workflow states are preserved. |
> | Workflow state categories | All customizations made to the ProcessConfiguration XML file to map a workflow state to a state category (*Proposed, In Progress, Resolved, Completed*) are preserved. Only one workflow state can be assigned to the *Completed* state category. If you have assigned a custom workflow state to the *Completed* state category, it is preserved upon clone.<br/><br/>Any workflow state for a work item type that isn't included in a backlog level gets assigned to the *In Progress* state category. Check all custom workflow states post clone. To learn more, see [Workflow states and state categories](../../../boards/work-items/workflow-and-state-categories.md). |
> | Work item form layout  | A best effort is made to preserve the customizations made to the web form layout. However, any customizations made to the header area are ignored. Specifically, the **Weblayout** `ShowEmptyReadOnlyFields` attribute assignment is ignored. | 
> | Backlog levels | Additions and customizations made to the product backlog and  portfolio backlog levels are preserved.  |
> | Global lists | Global lists are converted to picklists for individual fields. |  
> | Default properties | The default properties set for teams that you add to a project are preserved as documented in [Process configuration XML element reference, Specify properties and behaviors](../../../reference/xml/process-configuration-xml-element.md#specify-properties-and-behaviors). | 


## Customizations ignored during clone

> [!div class="mx-tdCol2BreakAll"]
> |Artifact&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| Description |
> |------|---------|
> | Header area customization  | Any customizations made to the header area within the work item form are ignored. The header area, as shown in the following image, is managed by the system. Any customizations made within the **SystemControls** section of the **WebLayout** are ignored. <br/><br/>![Work item web form, Header area](_img/migration/header-area.png) |
> | Four column layout  and size | The inherited process supports a [a fixed relative sizing of three columns](inheritance-process-model.md#resizing) to a WIT layout, while the Hosted XML process supports up to four columns and allows you to set the first column as equal sized with the rest of the columns.  |
> | Hide Details page in layout  | The inherited process ignores any customizations made to hide the Details page in a WIT layout. | 
> | Workflow restriction | The inherited process follows an any-to-any workflow state transition. Any customizations that restrict the transition from one workflow state to another are ignored.  |
> | Workflow state reasons  | Customized reasons added to workflow states are ignored. |
> | Conditional picklists | Conditional picklists, also referred to as dependent or cascading picklists, are ignored. Multiple sets of allowed values per field are ignored. Picklists are defined for a field at the collection level and shared across processes and WITs.  | 
> | Custom rules | All custom rules to fields and workflow are ignored.   | 
> | Custom link controls  | Custom link controls are ignored. |
> | Extensions | The inherited process supports an opt-out model for custom control extensions, while the Hosted XML process supports an opt-in model. This means that work item types defined within the cloned inherited process show all contributions from all installed and enabled extensions. You can selectively hide or remove them as needed. |
> | Categories | Changes made to a [default category](../../../reference/xml/use-categories-to-group-work-item-types.md#process) are preserved, but any custom categories are ignored. Also note that system work item types such as Issue or Impediment are not supported on a backlog level. | 
> | Identity fields with string values | Lists that contain an identity value in ALLOWEDVALUES or PROHIBITEDVALUES are automatically converted into the Identity field type. Any other string values in the list are ignored. | 


[!INCLUDE [temp](../_shared/post-upgrade-steps.md)]


## Related articles

- [About process customization and inherited processes](inheritance-process-model.md)  
- [Clone a Hosted XML process to Inheritance](upgrade-hosted-to-inherited.md) 
- [Change a project from a Hosted XML process to Inheritance](change-process-from-hosted-to-inherited.md) 
 
