>**Command availability:** TFS 2016

You can use the **ssh** command to regenerate the SSH server host key, get the server key fingerprint or enable/disable the SSH service on TFS deployment.

	TFSConfig SSH {/RegenerateKey | /GetKeyFingerprint | /Enable | /Disable} 

### Parameters

<table>
	<thead>
		<tr>
			<th>Option</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><strong>/RegenerateKey</strong></td>
			<td>
				Required if <strong>/GetKeyFingerprint</strong> or <strong>/Enable</strong> or <strong>/Disable</strong> is not used.
				Generates SSH server host key and updates it in the database. The command will replace the old key, if there is any, for the current TFS deployment. 				
			</td>
		</tr>
		<tr>
			<td><strong>/GetKeyFingerprint</strong></td>
			<td>
				Required if <strong>/RegenerateKey</strong> or <strong>/Enable</strong> or <strong>/Disable</strong> is not used.
				Specifies the SSH server host key fingerprint from the current TFS deployment. 
			</td>
		</tr>
		<tr>
			<td><strong>/Enable</strong></td>
			<td>
				Required if <strong>/RegenerateKey</strong> or <strong>/GetKeyFingerprint</strong> or <strong>/Enable</strong> is not used.
				Enables SSH service for the current TFS deployment.<br /><br />
				<strong>Tip:</strong> The SSH service is installed when Application Tier is configured. The <strong>/Enable</strong> option will only enable SSH service by starting it on all the Application Tier nodes. 
			</td>
		</tr>
		<tr>
			<td><strong>/Disable</strong></td>
			<td>
				Required if <strong>/RegenerateKey</strong> or <strong>/GetKeyFingerprint</strong> or <strong>/Disable</strong> is not used.
				Disables SSH service for the current TFS deployment.<br /><br />
				<strong>Tip:</strong> The SSH service is uninstalled when Applciation Tier is configured. The <strong>/Disable</strong> option will only disable SSH service by stopping it on all the Application Tier nodes.
			</td>
		</tr>
	</tbody>
</table>

### Required permissions

To use the **SSH** command, you must be a member of the Team Foundation Administrators security group as well as the local Administrators group on the machine running **TFSConfig**. 
You must also be a member of the sysadmin security role for all the SQL Server instances used by the TFS deployment. 

For more information, see [Permission reference for Team Foundation Server](../../../security/permissions.md).

### Remarks

The **SSH** command is used by an administrator who wants to update the existing SSH server host key or look up the existing key fingerprint. 
The **/Enable** and **/Disable** options enable or disable the SSH service on each Application Tier in the TFS deployment.

### Examples

To Regenerate the SSH server host key

    TFSConfig Ssh /Regenerate

To get the existing key fingerprint

    TFSConfig Ssh /GetKeyFingerprint

To Enable the SSH service on all the application tiers

    TFSConfig Ssh /Enable

To Disable the SSH service on all the application tiers

    TFSConfig Ssh /Disable