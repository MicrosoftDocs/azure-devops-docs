The **ChangeServerID** command changes the GUIDs that are associated with the databases for TFS.
GUIDs must be unique within a deployment of TFS. If more than one database has the same GUID, your deployment can become unstable or unusable.
You can change the GUID for the configuration database, the GUIDs for all team project collection databases in the deployment, or both.
Although you would not typically use this command in daily operations, you might use this command in the following circumstances:

-   You restored your deployment to new hardware, the old deployment is still operational, and you want to utilize both deployments. This scenario is sometimes referred to as cloning the server.

-   You want to test a software update or a hardware configuration on a duplicate deployment so that you do not risk disrupting your production environment.

-   You want to fully test the restoration of databases to new hardware in a test lab or separate environment, to ensure that your deployment can be restored.

-   You must reset the GUID for a collection database after moving it to another deployment for which that GUID is already reserved.

    >**Note:**
	>The ChangeServerID command is not reversible. After a GUID has been changed, you cannot undo that change except by restoring a previous version of that database.
	
	TFSConfig ChangeServerID /SQLInstance:ServerName /DatabaseName:ConfigurationDatabaseName
		[/ProjectCollectionsOnly] [/ConfigDBOnly] [/usesqlalwayson]

<table>
	<thead>
		<tr>
			<th>Option</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>**/SQLInstance**: ServerName</td>
			<td>Required. Specifies the name of the server that is running SQL Server and the name of the instance if you want to use an instance other than the default instance. If you specify an instance, you must use the format: `ServerName\InstanceName`</td>
		</tr>
		<tr>
			<td>**/DatabaseName**: DatabaseName</td>
			<td>Required. Specifies the name of the configuration database for TFS. By default, the name of this database is TFS_ConfigurationDB.</td>
		</tr>
		<tr>
			<td>**/ProjectCollectionsOnly**</td>
			<td>Specifies that only the GUIDs for collections will be changed.</td>
		</tr>
		<tr>
			<td>**/ConfigDBOnly**</td>
			<td>Specifies that only the GUID for the configuration database will be changed.</td>
		</tr>
		<tr>
			<td>**/usesqlalwayson**</td>
			<td>Specifies that the databases are part of an AlwaysOn Availability Group in SQL Server. If configured, this option sets MultiSubnetFailover in the connection string.<br /><br />For more information, see <a href="http://msdn.microsoft.com/library/hh510230.aspx">AlwaysOn Availability Groups (SQL Server)</a>.</td>
		</tr>
	</tbody>
</table>

### Required permissions

To use the **ChangeServerID** command, you must be a member of the Team Foundation Administrators security group and a member of the sysadmin security role for all SQL Server instances that Team Foundation Server uses. For more information, see [Permission reference for Team Foundation](../../../security/permissions.md).

### Remarks

You use the **ChangeServerID** command to create a discrete duplicate of a deployment of Team Foundation Server for testing or cloning purposes. After you use the ChangeServerID command, you must direct clients to create a connection to the changed server before it can be used.

### Example

The following example shows how to change the GUIDs of all databases in the Contoso1 deployment of TFS, where the configuration database is hosted on the server that is named "ContosoMain" on the named instance "TeamDatabases" in SQL Server.

    TFSConfig ChangeServerID /SQLInstance:ContosoMain\TeamDatabases /DatabaseName:TFS_ConfigurationDB
