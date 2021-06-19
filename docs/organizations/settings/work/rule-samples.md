---
title: Sample rule definitions
titleSuffix: Azure DevOps 
description: Examples of rule definitions for inherited and XML processes 
ms.technology: devops-agile
ms.author: kaelli
author: KathrynEE
monikerRange: "<= azure-devops"
ms.topic: example-scenario
ms.date: 06/18/2021


#Customer intent: As a process designer, I need examples that illustrate how to define rules, so I can add the right rules to support my business processes.
---

# Sample custom rule scenarios  

[!INCLUDE [temp](../../../includes/version-tfs-all-versions.md)]

This article provides examples of custom rule definitions. All custom rules are defined for a work item type. Examples are provided for both the Inherited and On-premises XML process models. 

Prior to adding custom rules, read [Rules and rule evaluation](rule-reference.md) and [Add a rule to a work item type (Inheritance process)](custom-rules.md). 
 

<a name="dependent-required"></a>   

##  Define a dependent required field  

You can specify that a field is required only when another field contains a specific value. In the following example, when a customer reports an issue, the custom **Customer Reported** field is set to *True*, and the **Severity** field becomes required. If the issue isn't reported by a customer, a value for the **Severity** field isn't required.  

# [Inheritance process](#tab/inheritance) 

:::image type="content" source="media/sample-rules/set-severity-customer-reported-true.png" alt-text="Screenshot of custom rule to make Severity required when Customer REported field=true.":::

# [On-premises XML process](#tab/on-premises)

You specify a `WHEN` rule statement for the field definition within the `FIELDS` section of the work item type definition.  

> [!div class="tabbedCodeSnippets"]  
> ```XML
> <FIELDS>
>    ...
>    <FIELD refname="MyCorp.Severity" name="Customer Severity" type="String">  
>        <ALLOWEDVALUES>  
>            <LISTITEM value="Blocking" />  
>            <LISTITEM value="Major" />  
>            <LISTITEM value="Minor" />  
>        </ALLOWEDVALUES>  
>        <WHEN field="MyCorp.CustomerReported" value="true">  
>            <REQUIRED />  
>        </WHEN>  
>    </FIELD> 
>    ...
> </FIELDS>     
> ```  

---


<a name="clear-field"></a>

###  Clear the value of a dependent field  

The following example illustrates defining a custom rule to clear the value for **Story Points** when a change is made to the **Start Date**. 

# [Inheritance process](#tab/inheritance)


:::image type="content" source="media/sample-rules/clear-story-points-start-date-change.png" alt-text="Screenshot of custom rule to clear the value of Story Points when Start Date changes.":::

# [On-premises XML process](#tab/on-premises)

You specify a `WHENCHANGED` rule statement for the field definition within the `FIELDS` section of the work item type definition.  

> [!div class="tabbedCodeSnippets"]  
> ```XML
> <FIELDS>
>  ...
>    <FIELD name="Story Points" refname="Microsoft.VSTS.Scheduling.StoryPoints" type="Double" reportable="measure" formula="sum">
>        <HELPTEXT>The size of work estimated for implementing this user story</HELPTEXT>
>        <WHENCHANGED field="Microsoft.VSTS.Scheduling.StartDate">  
>            <EMPTY />  
>        </WHENCHANGED>
>    </FIELD>
>    ...
> </FIELDS>     
> ```  

---
 


<a name="copy-field"></a>  

## Set a dependent field value  

The following examples illustrate how to map the values of the **Size** field depending on the value selected for the custom field, **Tee-Shirt Size** field.

# [Inheritance process](#tab/inheritance)

 The **Tee-Shirt Size** pick-list consists of four values *Small*, *Medium*, *Large*, and *X-Large*. Four custom rules are defined to assign the **Size** field when the **Tee-Shirt Size** field is changed to a specific value. To simplify usage, the default value of the **Tee-Shirt Size** is *Small*. 


**Edit field dialog for Tee-Shirt Size field**

:::image type="content" source="media/sample-rules/tee-shirt-size-edit-field-dialog.png" alt-text="Screenshot of Edit field dialog for Tee-Shirt Size field.":::


**Custom rule**

:::image type="content" source="media/sample-rules/set-tshirt-size-small-rule.png" alt-text="Screenshot of custom rule to set Size value when Tee-Shirt Size is set to Small.":::

**Four custom rules**

:::image type="content" source="media/sample-rules/four-custom-tee-shirt-size-mapping-rules.png" alt-text="Screenshot of four custom rule to set Size value when Tee-Shirt Size is set.":::

# [On-premises XML process](#tab/on-premises)

You specify the value of the **Size** field in the `FIELDS` section of the work item type definition. You use a series of `WHEN` rule statements to make the mapping, setting the value of the **Size** field using the `COPY value="value"` rule. 
 

> [!div class="tabbedCodeSnippets"]  
> ```XML
> <FIELDS>
>    ...
>    <FIELD name="Tee-Shirt Size" refname="Fabrikam.TShirt.Size" type="String">
>         <HELPTEXT>Estimate of overall size for work to be done; Small (2), Medium (6), Large (18), X-Large (30).</HELPTEXT>
>         <ALLOWEDVALUES expanditems="true">
>           <LISTITEM value="Large" />
>           <LISTITEM value="Medium" />
>           <LISTITEM value="Small" />
>           <LISTITEM value="X-Large" />
>         </ALLOWEDVALUES>
>    </FIELD> 
>    <FIELD name="Size" refname="Fabrikam.Size" type="Integer">
>         <HELPTEXT>Integer estimate of overall size for work to be done; Automatically fill in based on Tee-Shirt Size. Allow any value.</HELPTEXT>
>         <WHEN field="Fabrikam.TShirt.Size" value="Small">
>           <COPY value="2" />
>         </WHEN>
>         <WHEN field="Fabrikam.TShirt.Size" value="Medium">
>           <COPY value="6" />
>         </WHEN>
>         <WHEN field="Fabrikam.TShirt.Size" value="Large">
>           <COPY value="18" />
>         </WHEN>
>         <WHEN field="Fabrikam.TShirt.Size" value="X-Large">
>           <COPY value="30" />
>         </WHEN>
>    </FIELD>
>    ...
>  </FIELDS> 
> ```  

---



<a name="require-field-state-change"></a>  

##  Require a field value upon State changes 

The following example shows how you can require specification of the **Remaining Work** field when the task workflow **State** changes to *Active*.  

# [Inheritance process](#tab/inheritance)

:::image type="content" source="media/sample-rules/make-remaining-work-required-for-task.png" alt-text="Screenshot of custom rule to make Remaining Work required when State is changed to Active.":::

# [On-premises XML process](#tab/on-premises)

 When the value of the **State** field for a work item is set to Active and the work item is saved, the values of the **Activated By** and **Assigned To** fields are automatically set to the name of the current user. That user must be a member of the Team Foundation Server Valid Users group. The value of the **Activated Date** field is also set automatically. The following example shows the elements that enforce this rule:  

> [!div class="tabbedCodeSnippets"]  
> ```XML
> <WORKFLOW>
> . . .  
>     <STATE value="Active">
>         <FIELDS>
>             <FIELD refname="Microsoft.VSTS.Scheduling.RemainingWork">
>               <REQUIRED />
>             </FIELD>
>         </FIELDS>
>     </STATE>
> . . .  
> </WORKFLOW>
> ```  

---

<a name="fields"></a> 

## Clear the value of a field upon close State  

To automate clearing the **Remaining Work** field upon closing a task, define a custom rule as indicated. 

# [Inheritance process](#tab/inheritance)

:::image type="content" source="media/sample-rules/clear-remaining-work-closed-state.png" alt-text="Screenshot of custom rule to zero out Remaining Work required when State is changed to Closed.":::


# [On-premises XML process](#tab/on-premises)


> [!div class="tabbedCodeSnippets"]  
> ```XML
> <WORKFLOW>
> . . .  
>       <STATE value="Closed">
>           <FIELDS>
>             <FIELD refname="Microsoft.VSTS.Scheduling.RemainingWork">
>               <EMPTY />
>             </FIELD>
>           </FIELDS>
>       </STATE>
> . . .  
> </WORKFLOW>
> ```  

---



## Restrict creation of work items by a group 

A custom rule that restricts the transition to the *Proposed* state category of a work item type effectively disallows creation of work items of that type. By applying the rule to a specific group, you effectively disallow that group from creating work items of that type.  

# [Inheritance process](#tab/inheritance)

The following custom rule restricts a project team from creating work items as the *Proposed* state category maps to the *New* workflow state. 

:::image type="content" source="media/sample-rules/restrict-work-item-creation.png" alt-text="Screenshot of custom rule to restrict creation of a work item by a group.":::

# [On-premises XML process](#tab/on-premises)

The following custom rule restricts the Fabrikam Review Team (*for* attribute) from creating work items by disallowing the transition to the *New* workflow state. 

> [!div class="tabbedCodeSnippets"]  
> ```XML
> <WORKFLOW>
> ... 
> <TRANSITION from=" " to="New"  
>    for="[Project]\Developers" 
>    not="[Project]\Fabrikam Review Team"  
>    . . .  
> </TRANSITION> 
> ...  
> </WORKFLOW>
> ```  
 
---


## Restrict modification of work items by a group  

For an Inheritance process, you can prevent users from modifying a work item by setting the deny permission for a group on an Area Path. For an On-premises XML process, you can place restrictions on each workflow state for a group that prevents them from saving the work item in any state. 

# [Inheritance process](#tab/inheritance)

It's not possible to define a custom rule that restricts modification of work items of a specific type. You can only specify restriction by state. If the user doesn't change the state, then they can modify other fields, unless all fields are made read-only for the group. 

Instead, if you want to restrict a group of users from modifying select work items of any type, you can assign those work items to an Area Path. Define a security group, and then set restrictions for editing work items for that Area Path for that group as shown in the following image. To learn more, see [Set permissions and access for work tracking, Create child nodes and modify work items under an area path](../../security/set-permissions-access-work-tracking.md#create-child-nodes-modify-work-items-under-an-area-path)

:::image type="content" source="media/sample-rules/restrict-modifications-by-area-path-permissions.png" alt-text="Screenshot of PErmissions dialog for an Area Path to restrict modifications of work items.":::

# [On-premises XML process](#tab/on-premises)

The following custom rule restricts the Fabrikam Review Team (*for* attribute) from modifying user stories by disallowing all workflow states defined for the user story work item type. Because no workflow state is valid for the specific team, members of that team are prevented from saving the work item with any changes.   

> [!div class="tabbedCodeSnippets"]  
> ```XML
> <WORKFLOW>
> ... 
>  <STATE value="New">  
>    not="[Project]\Fabrikam Review Team"  
> </STATE>  
> <STATE value="Active">  
>    not="[Project]\Fabrikam Review Team"  
> </STATE>  
> <STATE value="Resolved">  
>    not="[Project]\Fabrikam Review Team"  
> </STATE>  
> <STATE value="Closed">  
>    not="[Project]\Fabrikam Review Team"  
> </STATE>  
> ...  
> </WORKFLOW>
> ```  

---


## Restrict state transitions 

For inherited processes, any-to-any state transitions are automatically defined. This allows users to advanced the workflow state from new to completed, but also to move backwards in case that is needed. When defining custom rules to restrict a transition, keep in mind that if a user makes a mistake in updating the workflow, they may not be able to correct it. For example, they could update the status by moving a work item card to a later stage on the Kanban board, but not move it back. 

> [!TIP]  
> Consider restricting a state transition for some but not all users. That way, if a user makes a mistake, they can ask another team member to reset the State value to bypass the restriction.

Before defining state transition rules, review [Rules and rule evaluation, Auto-generated rules](rule-reference.md#auto-generated-rules) and [How workflow states and state categories are used in Backlogs and Boards](../../../boards/work-items/workflow-and-state-categories.md).

 
<a id="restrict-modification-closed-wi" />

## Restrict modification of closed work items

Depending on your business processes, you may want to prevent users from continuing to modify or update work items that have been closed or completed. You can add rules to work item types to prevent users from re-opening closed work items.

# [Inheritance process](#tab/inheritance)

For the Inherited process, you can add a rule that restricts state transition. For example, the following rule restricts transitioning from closed to the other two States, New and Active. 


> [!NOTE]  
> The `A work item state moved from ...`  condition is available for Azure DevOps Server 2020 and later versions. 

:::image type="content" source="/azure/devops/organizations/settings/work/media/rules/rule-no-open-after-close.png" alt-text="Custom rule, Current user is not a member of a group, disallow transitions to New or Active state from Closed":::

> [!NOTE]   
> Depending on the rule action you specify, either the **Save** button on the work item form may be disabled, or an error message displays when a restricted user attempts to modify the work item. 
 

# [On-premises XML process](#tab/on-premises)

For on-premises deployments, you can add rules to a work item type to prevent re-opening after a work item has been closed. For example, the following workflow transition rules allow Testers to reopen a work item, but not members of the Developers group. 

```
<TRANSITION from="Closed" to="New"  
   for="[Project]\Testers"  
   not="[Project]\Developers">  
   . . .  
</TRANSITION>  
<TRANSITION from="Closed" to="Active"  
   for="[Project]\Testers"  
   not="[Project]\Developers">  
   . . .  
</TRANSITION>  
```


---

::: moniker range=">= azure-devops-2020"

## Hide or restrict modification of a field based on a user or group 

When you select the `Current user is a member of group...` or `Current user is not a member of group...`, you can hide a field, make a field read-only, or make a field required. 

For example, the following condition indicates that the Justification field is hidden for members who don't belong to the Fabrikam Fiber\Voice group.  

:::image type="content" source="media/rules/rule-hide-justification-field.png" alt-text="Custom rule, Current user is not a member of a group, Hide Justification field":::


[!INCLUDE [temp](../../../boards/includes/note-work-item-caching-rules-simple.md)]

::: moniker-end


<a id="restrict-modifications-wits" /> 

## Restrict modification of select fields based on a user or group 

You can customize work item types to restrict who can modify a specific field for a work item type. 


::: moniker range="azure-devops-2019"
> [!NOTE]
> For Azure DevOps Server 2019 and earlier versions, you can only restrict modification of work items based on a user or group with the On-premises XML process model. 
::: moniker-end


# [Inheritance process](#tab/inheritance)

Using one of the following two conditions, you can make select fields required for a user of a security group or who are not a member of a security group. 

- `current user is a member of a group...`
- `current user is not a member of a group...`

> [!TIP]    
> To avoid rule evaluation issues that may arise, specify Azure DevOps security groups and not Azure Active Directory or Active Directory security groups. To learn more, see [Default rules and the rule engine](rule-reference.md).

For example, you can make the **Title** or the **State** fields **Read-only** for select users or groups. 

For example, the **Priority** field, for the User Story work item type, becomes read-only for members of the Fabrikam Fiber\Voice group. When a user of this group opens a User Story, they are unable to change the value on the Priority field.

:::image type="content" source="/azure/devops/organizations/settings/work/media/rules/rule-priority-field-read-only-for-not.png" alt-text="Custom rule, Current user is not a member of a group, make Priority field read-only":::
 
 

# [On-premises XML process](#tab/on-premises)

For the [On-premises XML process model](../../../reference/on-premises-xml-process-model.md), you can customize work item types to support these restriction requests: 
- Restrict who can create or modify a work item 
- Restrict who can create specific work item types, such as Epics or Features 

For example, you can restrict modification of work items by adding a rule to the work item type, usually within the **WORKFLOW** section. 

You restrict access to work tracking objects in one of two ways:
- [Set a condition field rule](rule-reference.md), [a condition-based field rule](../../../reference/xml/assign-conditional-based-values-and-rules.md) or a combination of the two that applies to a group. You can restrict changes from being made to a field by specifying a qualifying rule and making it apply for a specific group. Conditional rules can include **CANNOTLOSEVALUE**, **EMPTY**, **FROZEN**, **NOTSAMEAS**, **READONLY**, and **REQUIRED** elements. 
- By [adding WITs to the Hidden Categories group](../../../reference/xml/use-categories-to-group-work-item-types.md), you can prevent the majority of project contributors from creating them. You [can create a hyperlink to a template](../../../boards/backlogs/work-item-template.md) that opens the work item form and share that link with those team members who you do want to create them. 

---



## Related articles

- [Apply rules to workflow states (Inheritance process)](apply-rules-to-workflow-states.md)
- [Rules and rule evaluation](rule-reference.md)
  
