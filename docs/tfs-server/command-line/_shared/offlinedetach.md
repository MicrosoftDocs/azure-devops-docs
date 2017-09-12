>**Command availability:** TFS 2015 Update 3 and newer

You use the **OfflineDetach** command to make an offline collection database into 
a detached offline collection database. 

	TFSConfig offlineDetach /configurationDB:DatabaseName
		/collectionDB:DatabaseName

<table>
	<thead>
		<tr>
			<th>Option</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><strong>/configurationDB</strong></td>
			<td>Specifies the name of the configuration database to be used.</td>
		</tr>
		<tr>
			<td><strong>/collectionDB</strong></td>
			<td>Specifies the name of the collection database to be detached.</td>
		</tr>
	</tbody>
</table>

### Required permissions

To use the **OfflineDetach** command, you must be a member of the sysadmin role for the specified SQL Server instance.

### Remarks

This command modifies the schema of the specified collection database and should never be run
against databases which are in use by a Team Foundation Server deployment. If your databases
are in use by a Team Foundation Server deployment, use TfsConfig collection /detach instead. 

This command is useful when you need to restore an individual collection database from backup
without restoring other collection databases that are part of the same TFS deployment.
Previously this required restoring a complete and consistent set of databases (configuration
and all collections) to a staging environment, configuring a TFS deployment using those
databases, and detaching the one collection of interest. 

Instead, you can now restore consistent copies of the configuration database
and the collection database of interest and run the OfflineDetach command. 
The detached collection database can then be attached to any TFS deployment
at an appropriate version. 

### Example

The following example illustrates detaching a collection database named TFS_PrimaryCollection, using a 
configuration database named TFS_Configuration, with both on a SQL instance running on a server named
"ContosoTemp" on the named instance "Backups".

        TFSConfig offlineDetach /configDB:ContosoTemp\Backups;TFS_Configuration /collectionDB:ContosoTemp\Backups;TFS_PrimaryCollection