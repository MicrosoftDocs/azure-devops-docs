Use **RegisterDB** to update name of the server that hosts the configuration database in Visual Studio Team Foundation Server (TFS).
You might use this command when restoring the configuration database to new hardware or when changing the domain of a deployment.

	TFSConfig RegisterDB /SQLInstance:ServerName /databaseName: DatabaseName [/usesqlalwayson]

<table>
	<thead>
		<tr>
			<th>Argument</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><strong>/SQLInstance:</strong> ServerName</td>
			<td>
				Required. Specifies the name of the server that is running SQL Server and the name of the instance
				if you want to use an instance other than the default instance.
				If you specify an instance, you must use the format: `ServerName\InstanceName`.
			</td>
		</tr>
		<tr>
			<td><strong>/databaseName:</strong> DatabaseName</td>
			<td>Required. Specifies the name of the configuration database. By default, this is Tfs_Configuration.</td>
		</tr>
		<tr>
			<td><strong>/usesqlalwayson</strong></td>
			<td>
				Optional. Specifies that the databases are part of an AlwaysOn Availability Group in SQL Server.
				If configured, this option sets MultiSubnetFailover in the connection string.<br/><br/>
				For more information, see <a href="http://msdn.microsoft.com/library/hh510230.aspx">AlwaysOn Availability Groups (SQL Server)</a>.
			</td>
		</tr>
	</tbody>
</table>

### Required Permissions

To use the **RegisterDB** command, you must be a member of the Team Foundation Administrators group on the application-tier server
for Team Foundation and a member of the sysadmin group in SQL Server on the data-tier server for Team Foundation.
For more information, see [Permission reference for Team Foundation Server](../../../security/permissions.md).

### Remarks

Back up the databases for TFS before you use this command.

For the RegisterDB command to succeed, the following application pools and programs must be running:

-   Team Foundation Server Application Pool (application pool)
-   ReportServer (application pool)
-   SQL Server Reporting Services (program)

You must provide the exact name or address of the configuration database for this command to operate correctly.
If you must change the server on which this database is stored, you must ensure that TFS points to the new location.

### Example

The following example redirects TFS to a configuration database that is located on the server ContosoMain in the SQL Server instance TeamDatabases.

    TFSConfig RegisterDB /SQLInstance:ContosoMain\TeamDatabases /databaseName:Tfs_Configuration
