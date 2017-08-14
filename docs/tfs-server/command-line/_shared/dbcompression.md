>**Command availability:** TFS 2015 and TFS 2013
> For earlier versions of TFS, see [https://support.microsoft.com/kb/2712111](https://support.microsoft.com/kb/2712111)

You use the **DBCompression** command to enable or disable database page compression for the databases used by your TFS deployment.

	TFSConfig dbCompression /pageCompression:{enable|disable}
		/sqlInstance:ServerName
		/databaseName:DatabaseName
		[/rebuildNow [/offline]]

<table>
	<thead>
		<tr>
			<th>Option</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><strong>/pageCompression</strong></td>
			<td>Specifies whether you are enabling or disabling page compression for the given SQL instance and database.</td>
		</tr>
		<tr>
			<td><strong>/sqlInstance</strong></td>
			<td>
				Specifies the name of the server that hosts the database for which page compression is being enabled or disabled,
				and the name of the instance if an instance other than the default is used.
				If you specify an instance, you must use the format: `ServerName\InstanceName`
			</td>
		</tr>
		<tr>
			<td><strong>/databaseName</strong></td>
			<td>Specifies the name of the database for which page compression is being enabled or disabled.</td>
		</tr>
		<tr>
			<td><strong>/rebuildNow</strong></td>
			<td>Optional. Specifies whether database indexes should be rebuilt (and compressed or decompressed as necessary) immediately. If not used, indexes will be rebuilt by a background job which runs weekly.</td>
		</tr>
		<tr>
			<td><strong>/offline</strong></td>
			<td>Optional. Used only in combination with <strong>/rebuildNow</strong>. If <strong>/offline</strong> is not specified, indexes will be rebuilt online. If <strong>/offline</strong> is specified, indexes will be rebuilt offline. This will block other operations, but may be faster than an online index rebuild.</td>
	</tr>
	</tbody>
</table>

### Required permissions

To use the **DBCompression** command, you must be a member of the sysadmin role for the specified SQL Server instance.

### Remarks

You would typically use the **DBCompression** command if you were moving a database from a SQL instance which supported compression to one which did not.
In this case, you would need to disable compression and decompress all indexes before you could successfully move the databases.
Similarly, if you were moving a database back to a SQL instance which supported compression you might wish to re-enable compression in order to save space. 

This command only changes whether TFS prefers to use database page compression or not - your databases must still be hosted in a SQL instance whose edition supports compression.
See [Features Supported by the Editions of SQL Server](https://msdn.microsoft.com/library/cc645993.aspx) for more information.

### Example

The following example shows how to enable page compression immediately, with indexes rebuilt online, for a database named TFS\_DefaultCollection on a SQL instance running on a server named "ContosoMain" on the named instance "TeamDatabases".

	TFSConfig dbCompression /pageCompression:enable /sqlInstance:ContosoMain\TeamDatabases /databaseName:TFS_DefaultCollection /rebuildNow