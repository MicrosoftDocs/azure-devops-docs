Configure the server that runs Team Foundation Server (TFS) to use an existing SMTP server for email alerts.

	TFSConfig ConfigureMail /FromEmailAddress:emailAddress /SmtpHost:SMTPHostName

<table>
<thead>
<tr>
<th>Option</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>/FromEmailAddress:</strong> emailAddress</td>
<td>Specifies the address from which to send email notifications from TFS for a check in, work item assigned to you, or other notifications. This address is also checked for validity and, depending on your server configuration, might have to represent a valid email account on the mail server.If the address does not exist or is not valid, the default email address is used.</td>
</tr>
<tr>
<td><strong>/SmtpHost:</strong> SMTPHostName</td>
<td>Specifies the name of the server that hosts the mail server.</td>
</tr>
</tbody>
</table>

### Required permissions

To use the **ConfigureMail** command, you must be a member of the Team Foundation Administrators security group on the Team Foundation application-tier server. For more information, see [Permission reference for Team Foundation Server](../../../security/permissions.md)

### Remarks

You can also [use the administration console](../../admin/setup-customize-alerts.md) to configure TFS to use an SMPT server.

### Example

The following example shows the syntax used to configure the from email address to TFS@contoso.com and the SMTP mail server as ContosoMailServer:

    TFSConfig ConfigureMail /FromEmailAddress:TFS@contoso.com /SmtpHost:ContosoMailServer