You can use the **Jobs** command to create a log file that provides the details of the most recent job activity for a specific team project collection,
or to retry a job for one or all team project collections.

	TFSConfig Jobs /retry|dumplog [/CollectionName:CollectionName] [/CollectionID:ID]

<table>
	<thead>
		<tr>
			<th>Option</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><strong>/retry</strong></td>
			<td>Required if <strong>/dumplog</strong> is not used. Specifies that the most recent job will be reattempted for the specified team project collection. If you use this option, you must also use either the <strong>/CollectionName</strong> or the <strong>/CollectionID</strong> option.</td>
		</tr>
		<tr>
			<td><strong>/dumplog</strong></td>
			<td>Required if <strong>/retry</strong> is not used. Specifies that the most recent job activity for the collection will be sent to a log file. If you use this option, you must also use either the <strong>/CollectionName</strong> or <strong>/CollectionID</strong> option.</td>
		</tr>
		<tr>
			<td><strong>/CollectionName:</strong> CollectionName</td>
			<td>Required if <strong>/CollectionID</strong> is not used. Specifies the name of the collection for which the most recent job will be either retried (<strong>/retry</strong>) or logged (<strong>/dumplog</strong>). If you want to specify all collections, you can use an asterisk (*).</td>
		</tr>
		<tr>
			<td><strong>/CollectionID:</strong> ID</td>
			<td>Required if <strong>/CollectionName</strong> is not used. Specifies the identification number of the collection for which the most recent job will be either retried (<strong>/retry</strong>) or logged (<strong>/dumplog</strong>).</td>
		</tr>
	</tbody>
</table>

### Required permissions

To use the **Jobs** command, you must be a member of the Team Foundation Administrators security group. For more information, see [Permission reference for Team Foundation Server](../../../security/permissions.md).

### Remarks

To retry a job interactively, you can open the administration console for Team Foundation, click the Status tab for the collection, and then click Retry Job.
For more information, see [Open the Team Foundation Administration Console](https://msdn.microsoft.com/library/d4e7d06b-fd68-43d1-8baf-ce31c8989a02).

### Example

The following example shows how to create a log file that lists the most recent job activity for the "Contoso Summer Intern Projects" team project collection in Team Foundation Server.

    TFSConfig Jobs /dumplog /CollectionName:"Contoso Summer Intern Projects"
