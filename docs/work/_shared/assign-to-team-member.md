

<a id="assign-work-items"></a>

### Assign work items to a team member
Anyone who has read-write access to a team project can assign work items to a team member. This includes team members and [stakeholders](../../quickstart/get-started-stakeholder.md).  

Within the work item form, such as the web form shown, click the Assigned To field to select a team member to assign the work item to. Or, you can begin typing the name of a team member to quickly focus your search to a select few. 

![Web work item form, Assign to field](../_shared/_img/assign-work-items.png)  

Note the following: 
- You can assign a work item only to team members recognized by the system, ones that you have added as team members 
- The default list of names available in the drop-down menu for the Assigned To field contains all user accounts added to the [Team Services account](../../setup-admin/team-services/add-team-members-vs.md) or [TFS team project](../../setup-admin/add-users.md). These accounts are all members of the Project Collection Valid Users group.  Also, these names are automatically synchronized with Azure Active Direct or Active Directory when AAD or AD is configured as part of the account (Team Services) or deployment (TFS).    
- Some drop-down menus that support assignment from the backlog or board pages in the web portal are automatically limited to team members 
- Over time, the drop-down menu of person-name fields will display most recently selected names  
- The system shows the display name and adds the account name when required to disambiguate identical display names  
- You can assign a work item to one and only one team member at a time. If work is split across two or more team members, then you should consider creating additional work items that you'll assign to each member responsible for the work to be completed  
- You can assign several work items at once from the backlog or query results, see [Bulk modify work items](../backlogs/bulk-modify-work-items.md) for details.  


>[!NOTE]  
>**On-premises TFS only**: To minimize the list of names that appear in the drop-down menus of person-name fields, you can scope the field to only those groups that you want to appear in the menu. You do this by adding one or more of the following child elements to the **FIELD** definition in the work item type definition: **ALLOWEDVALUES**, **PROHIBITEDVALUES**, and **VALIDUSER**. For details, see [Apply a field rule](../reference/apply-rule-work-item-field.md).
