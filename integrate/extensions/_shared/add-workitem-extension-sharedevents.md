<p></p>

### Events

<table>
	<thead>
		<tr>
			<th>Event</th>
			<th>Event description</th>
			<th>Argument</th>
			<th>Argument description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td rowspan="2">onFieldChanged</td>
			<td rowspan="2">Fired after a field has changed. If the field change ran rules which updated other fields, all these changes are part of a single event.</td>
			<td>id</td>
			<td>The ID of the work item.</td>
		</tr>
		<tr>
			<td>changedFields</td>
			<td>Array with the reference name of all changed fields.</td>
		</tr>
		<tr>
			<td rowspan="1">onLoaded</td>
			<td rowspan="1">Fired after when the data is loaded in the work item form when the user opens a work item, or when the user navigates to another work item in the triage view.</td>
			<td>id</td>
			<td>The ID of the work item.</td>
		</tr>
		<tr>
			<td rowspan="1">onReset</td>
			<td rowspan="1">Fired after the user undoes the changes to the work item.</td>
			<td>id</td>
			<td>The ID of the work item.</td>
		</tr>
		<tr>
			<td rowspan="1">onRefreshed</td>
			<td rowspan="1">Fired after the user refreshed the work item manually.</td>
			<td>id</td>
			<td>The ID of the work item.</td>
		</tr>
		<tr>
			<td rowspan="1">onSaved</td>
			<td rowspan="1">Fired after a work item is saved.</td>
			<td>id</td>
			<td>The ID of the work item.</td>
		</tr>
		<tr>
			<td rowspan="1">onUnloaded</td>
			<td rowspan="1">Fired before the user closes the dialog, or before the user moves to another work item in the triage view.</td>
			<td>id</td>
			<td>The ID of the work item.</td>
		</tr>
	</tbody>
</table>
