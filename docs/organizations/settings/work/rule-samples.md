---
title: Sample rule definitions
titleSuffix: Azure DevOps 
description: Examples of rule definitions for inherited and XML processes 
ms.technology: devops-agile
ms.author: kaelli
author: KathrynEE
monikerRange: "<= azure-devops"
ms.topic: example-scenario
ms.date: 06/07/2021


#Customer intent: As a process designer, I need some examples that illustrate how to define rules, so I can add the right rules to support my business processes.
---

# Sample rule scenarios 

Intro

You restrict modification by adding a custom rule to the work item type.

Please consider to include an example of a customized workflow with restricted state transitions.
Example: show a user story where an "Active" can only move to "Resolved", and "Closed" can not move to any state.


<!--- what about custom controls and rules??? --> 


## Restrict state transition from Active to New 
 


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
 


<a id="restrict-modification-closed-wi" />


# [On-premises XML process](#tab/on-premises)

For the [On-premises XML process model](../../../reference/on-premises-xml-process-model.md), you can customize work item types to support these restriction requests: 
- Restrict who can create or modify a work item 
- Restrict who can create specific work item types, such as Epics or Features 

For example, you can restrict modification of work items by adding a rule to the work item type, usually within the **WORKFLOW** section. To learn more, see [Rules and rule evaluation, User or group membership rule restrictions](rule-reference.md#apply-ignore). 

You  restrict access to work tracking objects in one of two ways:
- [Set a condition field rule](../settings/work/rule-reference.md), [a condition-based field rule](../../../reference/xml/assign-conditional-based-values-and-rules.md) or a combination of the two that applies to a group. You can restrict changes from being made to a field by specifying a qualifying rule and making it apply for a specific group. Conditional rules can include **CANNOTLOSEVALUE**, **EMPTY**, **FROZEN**, **NOTSAMEAS**, **READONLY**, and **REQUIRED** elements. 
- By [adding WITs to the Hidden Categories group](../../../reference/xml/use-categories-to-group-work-item-types.md), you can prevent the majority of project contributors from creating them. You [can create a hyperlink to a template](../../../boards/backlogs/work-item-template.md) that opens the work item form and share that link with those team members who you do want to create them. 

---

<a id="restrict-modifications-wits" /> 


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


<a name="DependentRequired"></a>   


##  Define a dependent required field  

# [Inheritance process](#tab/inheritance)

TBD 


# [On-premises XML process](#tab/on-premises)



 You can specify that a field is required only when another field contains a specific value. In the following example, when a customer reports a bug, a customer severity must be specified. If the bug was not reported by a customer, a customer severity is not required.  

> [!div class="tabbedCodeSnippets"]
> ```XML
> <FIELD refname="MyCorp.Severity" name="Customer Severity" type="String">  
>        <ALLOWEDVALUES>  
>            <LISTITEM value="Blocking" />  
>            <LISTITEM value="Major" />  
>            <LISTITEM value="Minor" />  
>        </ALLOWEDVALUES>  
>        <WHEN field="MyCorp.CustomerReported" value="true">  
>            <REQUIRED />  
>        </WHEN>  
> </FIELD>  
> ```  


<a name="fields"></a> 

## Update a field during a workflow change  


# [Inheritance process](#tab/inheritance)

TBD 


# [On-premises XML process](#tab/on-premises)


You can define rules that update fields whenever the following events occur:  

- Assign a field rule under `STATE` when you want the rule to apply for all transitions to and reasons for entering that state.  

- Assign a field rule under `TRANSITION` when you want the rule to apply for that transition and all reasons for making that transition.  

- Assign a field rule under `DEFAULTREASON` or `REASON` when you want the rules to apply only for that specific reason.  

  If a field should always contain the same value, you define the rule under the `FIELD` element that defines that field. To learn more about rule usage, see [Rules and rule evaluation](../../organizations/settings/work/rule-reference.md).  

  You should try to minimize the number of conditions that you define for any one type of work item. With each conditional rule that you add, you increase the complexity of the validation process that occurs every time that a team member saves a work item. Complex rule sets might increase the time that is required to save the work item.  

  The following examples show some of the rules that are applied to system fields in the process template for MSF Agile Software Development.  

---

<a name="DefineField"></a>  

##  Change the value of a field when the state changes


# [Inheritance process](#tab/inheritance)

TBD 


# [On-premises XML process](#tab/on-premises)

 When the value of the **State** field for a work item is set to Active and the work item is saved, the values of the **Activated By** and **Assigned To** fields are automatically set to the name of the current user. That user must be a member of the Team Foundation Server Valid Users group. The value of the **Activated Date** field is also set automatically. The following example shows the elements that enforce this rule:  

```xml
<STATE value="Active">  
<FIELDS>  
      <FIELD refname="Microsoft.VSTS.Common.ActivatedBy">  
      <COPY from="currentuser"/>  
      <VALIDUSER/>  
      <REQUIRED/>  
      </FIELD>  
      <FIELD refname="Microsoft.VSTS.Common.ActivatedDate">  
      <SERVERDEFAULT from="clock"/></FIELD>  
      <FIELD refname="System.AssignedTo">  
      <DEFAULT from="currentuser"/>  
      </FIELD>  
. . .  
</FIELDS>  
</STATE>  
```  

---


<a name="ClearField"></a>


# [Inheritance process](#tab/inheritance)

TBD 


# [On-premises XML process](#tab/on-premises)



##  Clear the value of a field when the value of another field changes  

 When the value of the **State** field for a work item is set to Active and the work item is saved, the Closed Date and Closed By fields are automatically set to null and made read-only if you use the `EMPTY` element, as the following example shows.  

```xml
<STATE value="Active">  
      <FIELDS>  
. . .  
      <FIELD refname="Microsoft.VSTS.Common.ClosedDate"><EMPTY/></FIELD>  
      <FIELD refname="Microsoft.VSTS.Common.ClosedBy"><EMPTY/></FIELD>  
      </FIELDS>  
</STATE>  
```  

---

<a name="CopyField"></a>  

##  Define a field based on the contents of another field  


# [Inheritance process](#tab/inheritance)

TBD 


# [On-premises XML process](#tab/on-premises)


When the value of the **State** field for a work item changes to Resolved and the work item is saved, the value of the **Resolved Reason** field is set to the value that the user specified in the **Reason** field. The following example shows the elements that enforce this rule:  

```xml
<STATE value="Resolved">  
      <FIELDS>  
. . .  
      <FIELD refname="Microsoft.VSTS.Common.ResolvedReason">  
         <COPY from="field" field="System.Reason"/>  
      </FIELD>  
      </FIELDS>  
</STATE>  
```  

---



<a name="WhenChanged"></a>  

##  Define a field when the user changes another field   



# [Inheritance process](#tab/inheritance)

TBD 


# [On-premises XML process](#tab/on-premises)

(WHENCHANGED)
In the following example, when a user changes the value of the MyCorp.State field, the MyCorp.StateDate field is set to the current date and time, as the server clock shows.  

> [!div class="tabbedCodeSnippets"]
> ```XML
> <FIELD refname="MyCorp.StateDate" name="Date Of Last State Change" type="DateTime">  
>        <WHENCHANGED field="MyCorp.State">  
>            <COPY from="clock" />  
>        </WHENCHANGED>  
> </FIELD>   
> ```  

In the following example, when a user changes the value of the MyCorp.State field, the value of the MyCorp.Status field is cleared.  

> [!div class="tabbedCodeSnippets"]
> ```XML  
> <!-- Clear the status field whenever someone changes the state -->  
> <FIELD refname="MyCorp.Status" name="Status" type="String">  
>        <WHENCHANGED field="MyCorp.State">  
>            <COPY from="value" value="">  
>        </WHENCHANGED>  
> </FIELD>  
> ```  

---

<a name="WhenNotChanged"></a> 

## Define a field value based on a user not modifying a field (WHENNOTCHANGED)  




# [Inheritance process](#tab/inheritance)

TBD 


# [On-premises XML process](#tab/on-premises)


In the following example, when a user does not change the value of the MyCorp.State field, the MyCorp.StateDate field becomes read-only.  
> 
> [!div class="tabbedCodeSnippets"]
> ```XML
> <FIELD refname="MyCorp.StateDate" name="Date Of Last State Change" type="DateTime">  
> <!-- Make the StateDate field read-only when the State field is not changed -->  
>        <WHENNOTCHANGED field="MyCorp.State">  
>            <READONLY />  
>        </WHENNOTCHANGED>  
> </FIELD>  
> ```  

---



## Related articles

- [Apply rules to workflow states (Inheritance process)](apply-rules-to-workflow-states.md)
- [Rules and rule evaluation](rule-reference.md)
  