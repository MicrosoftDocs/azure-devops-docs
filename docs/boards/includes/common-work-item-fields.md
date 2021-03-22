---
ms.topic: include
---


## Definitions for common WIT fields  

<a id="definitions-in-common"></a>

The following fields and tabs appear in most work items. Each tab is used to track specific information, such as :::image type="icon" source="/azure/devops/boards/backlogs/media/icon-history-tab-wi.png" border="false"::: history, :::image type="icon" source="/azure/devops/boards/backlogs/media/icon-links-tab-wi.png" border="false"::: links, or :::image type="icon" source="/azure/devops/boards/backlogs/media/icon-attachments-tab-wi.png" border="false"::: attachments. These three tabs provide a history of changes, view of linked work items, and ability to view and attach files.  

The only required field for all WITs is **Title**. When the work item is saved, the system assigns it a unique **ID**. The form highlights required field in yellow. For information about other fields, see [Work item field index](../work-items/guidance/work-item-field.md).   

<table><thead>
<tr><th><p>Field/tab</p></th><th><p>Usage</p></th></tr></thead>
<tbody valign="top">
<tr>
    <td width="18%"><p><a href="/azure/devops/boards/queries/titles-ids-descriptions" data-raw-source="[Title](../queries/titles-ids-descriptions.md)">Title</a> </p></td>
	<td><p>Enter a description of 255 characters or less. You can always modify the title later.</p></td></tr>
<tr>
    <td><p><a href="/azure/devops/boards/queries/query-by-workflow-changes" data-raw-source="[Assigned To](../queries/query-by-workflow-changes.md)">Assigned To</a></p></td>
	<td><p>Assign the work item to the team member responsible for performing the work. Depending on the context you are working in, the drop-down menu will list only team members or contributors to the project.</p></td></tr>
<tr>
    <td><p><a href="/azure/devops/boards/queries/query-by-workflow-changes" data-raw-source="[State](../queries/query-by-workflow-changes.md)">State</a></p></td>
	<td><p>When the work item is created, the State defaults to the first state in the workflow. As work progresses, update it to reflect the current state.</p></td></tr>
<tr>
    <td><p><a href="/azure/devops/boards/queries/query-by-workflow-changes" data-raw-source="[Reason](../queries/query-by-workflow-changes.md)">Reason</a></p></td>
	<td><p>Use the default first. Update it when you change state. Each State is associated with a default reason.</p></td></tr>
<tr>
    <td><p><a href="/azure/devops/organizations/settings/set-area-paths" data-raw-source="[Area](../../organizations/settings/set-area-paths.md)">Area</a></p></td>
    <td><p>Choose the area path associated with the product or team, or leave blank until assigned during a planning meeting.</p><p>To change the dropdown list of areas, see <a href="/azure/devops/organizations/settings/set-area-paths" data-raw-source="[Add and modify area and iteration paths](../../organizations/settings/set-area-paths.md)">Add and modify area and iteration paths</a>.</p></td>
</tr>
<tr>
    <td><p><a href="/azure/devops/organizations/settings/set-area-paths" data-raw-source="[Iteration](../../organizations/settings/set-area-paths.md)">Iteration</a></p></td>
    <td><p>Choose the sprint or iteration in which the work is to be completed, or leave it blank and assign it later, during a planning meeting.</p><p>To change the drop-down list of iterations, see <a href="/azure/devops/organizations/settings/set-area-paths" data-raw-source="[Add and modify area and iteration paths](../../organizations/settings/set-area-paths.md)">Add and modify area and iteration paths</a>.</p></td>
</tr>
<tr>
    <td><p><img src="/azure/devops/boards/backlogs/media/icon-history-tab-wi.png" alt="History tab icon"/><a href="/azure/devops/boards/queries/history-and-auditing" data-raw-source="[(History)](../queries/history-and-auditing.md)">(History)</a></p></td>
	<td><p>Review the audit trail that the system captures and capture additional information.</p><p>Every time that the work item is updated, information is appended to the history. History includes the date of the change, who made the change, and which fields were changed. You can also add formatted text to the history field.</p></td></tr>
<tr>
    <td><p><img src="/azure/devops/boards/backlogs/media/icon-links-tab-wi.png" alt="Links tab icon"/> <a href="/azure/devops/boards/queries/link-work-items-support-traceability" data-raw-source="[(Links)](../queries/link-work-items-support-traceability.md)">(Links)</a></p></td>
	<td><p>Add all types of links, such as hyperlinks, changesets, source files, and so on.</p><p>This tab also lists all links defined for the work item.</p></td></tr>
<tr>
    <td><p><img src="/azure/devops/boards/backlogs/media/icon-attachments-tab-wi.png" alt="Attachment tab icon"/><a href="/azure/devops/boards/queries/linking-attachments" data-raw-source="[(Attachments)](../queries/linking-attachments.md)">(Attachments)</a> </p></td>
	<td><p>Share more detailed information by adding files to the work item, such as email threads, documents, images, log files, or other file types.</p></td></tr>
</tbody>
</table>