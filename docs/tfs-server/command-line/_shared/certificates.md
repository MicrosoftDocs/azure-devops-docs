Use the **Certificates** command to change how certificates are configured for client authentication in a deployment
of TFS that utilizes HTTPS, secure sockets layer (SSL), and certificates.

	TFSConfig Certificates [/machine] [/disable] [/autoSelect] [/noprompt] [/thumbprints:thumbprint1[,thumbprint2,...]]

<table>
	<thead>
		<tr>
			<th>Option</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><strong>/machine</strong></td>
			<td>Specifies that the certificate list will be from the local machine context instead of the current user context.</td>
		</tr>
		<tr>
			<td><strong>/disable</strong></td>
			<td>Specifies that the client authentication certificate setting will be disabled.</td>
		</tr>
		<tr>
			<td><strong>/autoSelect</strong></td>
			<td>Specifies that a certificate will be automatically selected from the certificate list. The Manage Client Certificates window will not open.</td>
		</tr>
		<tr>
			<td><strong>/noprompt</strong></td>
			<td>Specifies that the Manage Client Certificates window will not open when the Certificates command is run.</td>
		</tr>
		<tr>
			<td><strong>/thumbprints:</strong> thumbprint</td>
			<td>Specifies that the certificate that matches the specified thumbprint will be used. You can specify more than one certificate by separating individual thumbprints with a comma.</td>
		</tr>
	</tbody>
</table>

### Required permissions

To use the **Certificates** command, you must be a member of the Team Foundation Administrators security group
and the local Administrators group on the computer from which you run the command.
For more information, see [Permission reference for Team Foundation Server](../../../security/permissions.md).

### Remarks

By default, the **Certificates** command will automatically select a client certificate from the certificate list for the current user.
However, you can use the options for the command to specify a specific certificate or certificates from the current user context or from the local machine context.

Before you use the **Certificates** command, you must first configure the servers in your deployment of TFS to utilize certificates.
For more information, see [Setting up HTTPS with Secure Sockets Layer (SSL)  for Team Foundation Server](https://msdn.microsoft.com/library/27540d50-ac8a-46e1-a98e-baee43ed98a3).

You use the **Certificates** command to configure the client certificates that are used by a deployment of TFS that has been configured to use HTTPS/SSL and certificates.
If you use the Certificates command with no options, a client certificate will be automatically selected from the current user context from which you run the command.

### Examples

The following example shows how to specify the local machine certificate that has the thumbprint "aa bb cc dd ee" with no prompting.

    TFSConfig Certificates /machine /thumbprint:aa bb cc dd ee /noprompt

The following example shows how to specify using automatic selection of a client certificate from the current user store.

    TFSConfig Certificates /autoselect