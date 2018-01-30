The **Authentication** command changes the network authentication protocol that the TFS application tier or proxy website uses.

	TFSConfig Authentication [/provider:NTLM|Negotiate] [/viewAll] [/siteType:ApplicationTier|Proxy]

<table>
	<thead>
		<tr>
			<th>Option</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><strong>/viewAll</strong></td>
			<td>Displays the current authentication settings for TFS.</td>
		</tr>
		<tr>
			<td><strong>/provider</strong>: { NTLM | Negotiate }</td>
			<td>Specifies the authentication provider you want to configure for the website.
				<ul>
					<li>**NTLM**: Use the NTML authentication protocol</li>
					<li>**Negotiate**: Use the Negotiate (Kerberos) authentication protocol</li>
				</ul>
			</td>
		</tr>
		<tr>
			<td><strong>/siteType</strong></td>
			<td>Specifies the website (application tier or proxy) whose network authentication protocol you want to change. The application tier is the default.</td>
		</tr>
	</tbody>
</table>

### Required permissions
To use the **Authentication** command, you must be a member of the Team Foundation Administrators security group 
and a local administrator on the application-tier server or proxy server, depending on the value of the **siteType**
option. 

### Remarks

The **Authentication** command is used by an administrator who wants to change the network authentication protocol for one or more websites on which TFS relies.
The administrator runs this command from the application tier to update those websites that require a change in their network authentication protocol.
The command changes the **NTAuthenticationProviders** property in the IIS metabase.

>Before you use the <strong>Authentication</strong> command to change the authentication protocol, you can run the command with the <strong>/viewAll</strong> option to see what the existing settings are.

### Example

The following example displays the current value that is assigned for the network authentication protocol.

    TFSConfig Authentication /viewAll
