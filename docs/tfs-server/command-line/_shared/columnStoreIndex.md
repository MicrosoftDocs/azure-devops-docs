>**Command availability:** TFS 2015 Update 2

You use the **ColumnStoreIndex** command to enable or disable column store indexes for the databases used by your TFS deployment.

	TfsConfig columnStoreIndex /enabled:{true|false}
		/sqlInstance:ServerName
		/databaseName:DatabaseName

<table>
	<thead>
		<tr>
			<th>Option</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><strong>/enabled</strong></td>
			<td>Specifies whether you are enabling or disabling column store index for the given SQL instance and database.</td>
		</tr>
		<tr>
			<td><strong>/sqlInstance</strong></td>
			<td>
				Specifies the name of the server that hosts the database for which column store index is being enabled or disabled,
				and the name of the instance if an instance other than the default is used.
				If you specify an instance, you must use the format: `ServerName\InstanceName`
			</td>
		</tr>
		<tr>
			<td><strong>/databaseName</strong></td>
			<td>Specifies the name of the database for which column store index is being enabled or disabled.</td>
		</tr>
	</tbody>
</table>

### Required permissions

To use the **ColumnStoreIndex** command, you must be a member of the sysadmin role for the specified SQL Server instance.

### Remarks

You would typically use the **ColumnStoreIndex** command if you were moving a database from a SQL instance which supported column store index to one which did not.
In this case, you would need to disable all column store indexes before you could successfully move the databases.
Similarly, if you were moving a database back to a SQL instance which supported column store index you might wish to re-enable column store index in order to save space and gain performance. 

### Example

The following example shows how to enable column store index, for a database named TFS\_DefaultCollection on a SQL instance running on a server named "ContosoMain" on the named instance "TeamDatabases".

	TFSConfig columnStoreIndex /enabled:true /sqlInstance:ContosoMain\TeamDatabases /databaseName:TFS_DefaultCollection