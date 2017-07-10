You can use the **Settings** command to automate changes to the uniform resource locator (URL)
that is used by the notification interface and for the server address for Visual Studio Team Foundation Server (TFS).
By default, the notification interface URL and the server URL match in TFS, but you can configure separate URLs.
For example, you might want to use a different URL for the automatic e-mails that TFS generates.
You must run this tool from the application tier to update all servers so that they use the new URLs.

To change these URLs interactively or to just view the current settings, you can use the administration console for Team Foundation. See [Configure and manage TFS resources](https://msdn.microsoft.com/library/d553c7b0-e794-41dc-a7ef-91d7a5e1e46b).

	TFSConfig Settings [/ServerURL:URL] [/NotificationURL:URL]

<table>
	<thead>
		<tr>
			<th>Option</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><strong>/ServerURL:</strong> URL</td>
			<td>Specifies the URL of the application-tier server for Team Foundation. This value is stored in the configuration database for Team Foundation.</td>
		</tr>
		<tr>
			<td><strong>/NotificationURL:</strong> URL</td>
			<td>Specifies the URL to use in the text of e-mail alerts, if that URL differs from the URL of the application-tier server for Team Foundation. This value is stored in the configuration database.</td>
		</tr>
	</tbody>
</table>

### Required permissions

You must be a member of the Team Foundation Administrators security group and the Administrators group on the application-tier server. For more information, see [Set administrator permissions for Team Foundation Server](https://msdn.microsoft.com/library/ed578715-f4d2-4042-b797-5f97abde9973).

### Remarks

The **Settings** command changes connection information for server-to-server communication in a deployment of TFS. The URL that is specified in **/ServerURL** must be available to all servers within the deployment.

### Example

The following example changes the value of NotificationURL to `http://contoso.example.com/tfs` and the value of ServerURL to `http://contoso.example.com:8080/tfs`.

    TFSConfig Settings /NotificationURL:http://contoso.example.com/tfs /ServerURL:http://contoso.example.com:8080/tfs
