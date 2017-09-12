>**Command availability:** TFS 2015 and TFS 2013

The **PrepareClone** command removes information about scheduled backups, SharePoint,
and reporting resources from a Team Foundation Server (TFS) deployment.
This command is used in two circumstances:
- when you move a deployment to new hardware but want to keep using the old deployment
- when you clone a TFS deployment

In either of these cases it is critical to run this command.
If you don't, the original resources will be used by both the original and the new servers.
If both the original and the new servers are live and point to the same SharePoint or reporting resources for any amount of time,
you could end up with corrupted databases.

>**Important:**  
>This command should be run before configuration, whether you move or clone TFS.
>If you run it after configuration,
>you could end up with inconsistencies between content in your databases and content in your web.config file.
>These inconsistencies might take your server offline.
>If you have already configured your moved or cloned TFS deployment and realize you need to run the command, follow these steps.
>First, quiesce your server. Next, run PrepareClone command, ChangeServerID command, and then RemapDBs command. Finally, unquiesce your server.

    TFSConfig PrepareClone /SQLInstance:ServerName /DatabaseName:TFSConfigurationDatabaseName
		[/notificationURL: TFSURL] [/usesqlalwayson]

<table>
	<thead>
		<tr>
			<th>Option</th>
			<th>What it does</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><strong>/DatabaseName</strong></td>
			<td>Specifies the name of the server that hosts the database that you want to map for TFS, in addition to the name of the configuration database itself.</td>
		</tr>
		<tr>
			<td><strong>/SQLInstance:</strong> ServerName</td>
			<td>
				Specifies the name of the server that you want to map as a server that hosts one or more databases for TFS.
				If an instance other than the default instance hosts a database, you must also specify the name of the instance.
				Use this format: ServerName <strong>\</strong> InstanceName.
			</td>
		</tr>
		<tr>
			<td><strong>/NotificationURL:</strong> TFSURL</td>
			<td>Optional. Specifies The notification URL for the application-tier server.</td>
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

To use the **PrepareClone** command, you must be a member of the Team Foundation Administrators security group
and a member of the sysadmin security group for any SQL Server databases that Team Foundation Server uses.
For more information, see [Permission reference for Team Foundation Server](../../../security/permissions.md).

### Remarks

You use the **PrepareClone** command to reconfigure TFS when you move the original installation to new hardware and want to continue to use the original deployment TFS and hardware, or when you want to clone your TFS deployment for testing purposes. You use TFSConfig PrepareClone in conjunction with TFSConfig RemapDBs and TFSConfig ChangeServerID to support the cloning configuration.

### Example

The following example shows how to use the command on a moved TFS named NewFabrikamTFS to remove old backup, reporting, and SharePoint resource information. If this information isn't removed, the original deployment of TFS still uses those same resources and databases become corrupt. In the example, the SQL Server supporting the moved TFS is also named NewFabrikamTFS, and the instance is the default instance, so no specific instance information is required, just the server name.

    TFSConfig PrepareClone /SQLInstance:NewFabrikamTFS /DatabaseName:TFS_Configuration