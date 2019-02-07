---
ms.topic: include
---

<a id="definitions-in-common"></a>

## Definitions for common WIT fields  

The following fields and tabs appear in most work items. Each tab is used to track specific information, such as ![History tab icon](/azure/devops/boards/backlogs/_img/icon-history-tab-wi.png) history, ![Links tab icon](/azure/devops/boards/backlogs/_img/icon-links-tab-wi.png) links, or ![Attachment tab icon](/azure/devops/boards/backlogs/_img/icon-attachments-tab-wi.png) attachments. These three tabs provide a history of changes, view of linked work items, and ability to view and attach files.  

The only required field for all WITs is **Title**. When the work item is saved, the system assigns it a unique **ID**. The form highlights required field in yellow. For information about other fields, see [Work item field index](/azure/devops/boards/work-items/guidance/work-item-field).   

<table><thead>
<tr><th><p>Field/tab</p></th><th><p>Usage</p></th></tr></thead>
<tbody valign="top">
<tr>
	<td width="18%"><p>[Title](/azure/devops/boards/queries/titles-ids-descriptions) </p></td>
	<td><p>Enter a description of 255 characters or less. You can always modify the title later.</p></td></tr>
<tr>
	<td><p>[Assigned To](/azure/devops/boards/queries/query-by-workflow-changes)</p></td>
	<td><p>Assign the work item to the team member responsible for performing the work. Depending on the context you are working in, the drop-down menu will list only team members or contributors to the project.</p></td></tr>
<tr>
	<td><p>[State](/azure/devops/boards/queries/query-by-workflow-changes)</p></td>
	<td><p>When the work item is created, the State defaults to the first state in the workflow. As work progresses, update it to reflect the current state.</p></td></tr>
<tr>
	<td><p>[Reason](/azure/devops/boards/queries/query-by-workflow-changes)</p></td>
	<td><p>Use the default first. Update it when you change state. Each State is associated with a default reason.</p></td></tr>
<tr>
	<td><p>[Area](/azure/devops/organizations/settings/set-area-paths)</p></td>
	<td><p>Choose the area path associated with the product or team, or leave blank until assigned during a planning meeting.</p><p>To change the dropdown list of areas, see [Add and modify area and iteration paths](/azure/devops/organizations/settings/set-area-paths).</p></td>
</tr>
<tr>
	<td><p>[Iteration](/azure/devops/organizations/settings/set-area-paths)</p></td>
	<td><p>Choose the sprint or iteration in which the work is to be completed, or leave it blank and assign it later, during a planning meeting.</p><p>To change the drop-down list of iterations, see [Add and modify area and iteration paths](/azure/devops/organizations/settings/set-area-paths).</p></td>
</tr>
<tr>
	<td><p>![History tab icon](/azure/devops/boards/backlogs/_img/icon-history-tab-wi.png)[(History)](/azure/devops/boards/queries/history-and-auditing)</p></td>
	<td><p>Review the audit trail that the system captures and capture additional information.</p><p>Every time that the work item is updated, information is appended to the history. History includes the date of the change, who made the change, and which fields were changed. You can also add formatted text to the history field.</p></td></tr>
<tr>
	<td><p>![Links tab icon](/azure/devops/boards/backlogs/_img/icon-links-tab-wi.png) [(Links)](/azure/devops/boards/queries/link-work-items-support-traceability)</p></td>
	<td><p>Add all types of links, such as hyperlinks, changesets, source files, and so on.</p><p>This tab also lists all links defined for the work item.</p></td></tr>
<tr>
	<td><p>![Attachment tab icon](/azure/devops/boards/backlogs/_img/icon-attachments-tab-wi.png)[(Attachments)](/azure/devops/boards/queries/linking-attachments) </p></td>
	<td><p>Share more detailed information by adding files to the work item, such as email threads, documents, images, log files, or other file types.</p></td></tr>
</tbody>
</table>



