>**Command availability:** TFS 2015 and TFS 2013

You use the **Setup** command to uninstall features which are currently configured on the machine where the command is being run. 

    TfsConfig setup /uninstall:{feature[,feature,...]}

<table>
	<thead>
		<tr>
			<th>Option</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><strong>/uninstall</strong></td>
			<td>
				Specifies one or more features to be uninstalled from the machine where the command is being run.
				Options include: All, ApplicationTier, SharePointExtensions, TeamBuild, VersionControlProxy.
			</td>
		</tr>
	</tbody>
</table>

### Required permissions

To use the **Setup** command, you must be a member of the Team Foundation Administrators security group.

### Examples

The following example uninstalls all TFS features from the current machine.

    TfsConfig setup /uninstall:ALL

The following example uninstalls the application tier and build features from the current machine.

    TfsConfig setup /uninstall:ApplicationTier,TeamBuild