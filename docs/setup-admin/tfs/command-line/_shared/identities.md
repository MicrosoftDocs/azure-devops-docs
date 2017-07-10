The Identities command lists or changes the security identifier (SID) of users and groups in your deployment of TFS.
You might need to change or update the SID for users and groups in one of the following scenarios:

-   changing the domain of your deployment

-   changing from a workgroup to a domain or from a domain to a workgroup

-   migrating accounts across domains in Active Directory

    >**Note:**  
    >You do not need to run this command if you are changing domains within the same Active Directory forest. TFS will automatically handle SID changes for moves within the same forest.

	TFSConfig Identities [/change /fromdomain:DomainName1 /todomain:DomainName2 [/account:AccountName]
		[/toaccount:AccountName]] [/sqlInstance:ServerName /databaseName:DatabaseName] [/account:AccountName] [/usesqlalwayson]

<table>
	<thead>
		<tr>
			<th>Option</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><strong>/change</strong></td>
			<td>Specifies that you want to change identities instead of listing them.</td>
		</tr>
		<tr>
			<td><strong>/fromdomain:</strong> DomainName</td>
			<td>Required when using <strong>/change</strong>. Specifies the original domain of the identities that you want to change. If you are changing from a workgroup environment, specifies the name of the computer.</td>
		</tr>
		<tr>
			<td><strong>/todomain:</strong> DomainName</td>
			<td>Required when using <strong>/change</strong>. Specifies the domain to which you want to change identities. If you are changing to a workgroup environment, specifies the name of the computer.</td>
		</tr>
		<tr>
			<td><strong>/account:</strong> AccountName</td>
			<td>Specifies the name of an account for which you want to list or change identities.</td>
		</tr>
		<tr>
			<td><strong>/toaccount:</strong> AccountName</td>
			<td>Specifies the name of an account to which you want to change identities.</td>
		</tr>
		<tr>
			<td><strong>/SQLInstance:</strong> ServerName</td>
			<td>Specifies the name of the server that is running SQL Server and the name of the instance if you want to use an instance other than the default instance. If you specify an instance, you must use the following format:<br /><br />ServerName\InstanceName</td>
		</tr>
		<tr>
			<td><strong>/DatabaseName:</strong> DatabaseName</td>
			<td>Specifies the name of the configuration database for TFS.</td>
		</tr>
		<tr>
			<td><strong>/usesqlalwayson</strong></td>
			<td>Specifies that the databases are part of an AlwaysOn Availability Group in SQL Server. If configured, this option sets MultiSubnetFailover in the connection string.<br /><br />For more information, see <a href="http://msdn.microsoft.com/library/hh510230.aspx">AlwaysOn Availability Groups (SQL Server)</a>.</td>
		</tr>
	</tbody>
</table>

### Required permissions

To use the **Identities** command, you must be a member of the Team Foundation Administrators security group
and a member of the sysadmin role for all SQL Server instances that Team Foundation Server uses.
For more information, see [Set administrator permissions for Team Foundation Server](https://msdn.microsoft.com/library/ed578715-f4d2-4042-b797-5f97abde9973).

### Remarks

You can optionally specify the database to change identities before you configure an application-tier server for the deployment. For example, you might specify the database to change the service account when you clone a deployment of TFS.

When you change identities, the target account or accounts must already exist in Windows.

You must wait for the next identity synchronization with Windows before the properties of accounts that you change with this command will be updated. This requirement includes changes from group to user, user to group, and domain account to local account.

### Examples

The following example shows how to list the names of all Windows users and groups that are stored in TFS and to display whether the SID for each user or group matches the SID in Windows. The Contoso1 domain administrators created domain groups such as "Contoso1\\Developers" and "Contoso1\\Testers" to help ease the management of permissions across TFS, SQL Server Reporting Services, and SharePoint Products.

    TFSConfig Identities

Sample output:

    TFSConfig - Team Foundation Server Configuration Tool
    Copyright � Microsoft Corporation. All rights reserved.

    Account Name Exists (see note 1) Matches (see note 2)
    --------------------------------------------------------------------
    CREATOR OWNER True True
    Contoso1\hholt True True
    BUILTIN\Administrators True True
    Contoso1\Developers True True
    Contoso1\Testers True True
    Contoso1\PMs True True
    Contoso1\jpeoples True True
    Contoso1\Domain Admins True True
    Contoso1\SVCACCT1 True True

    9 security identifiers (SIDs) were found stored in Team Foundation Server. Of these, 9 were found in Windows. 0 had differing SIDs.

The following example shows how to change the SIDs for all accounts in Team Foundation Server from the Contoso1 domain to the SIDs for accounts that have matching names in the ContosoPrime domain. Only account names that match will have their SIDs updated. For example, if the "hholt" account exists as Contoso1\\hholt and ContosoPrime\\hholt, the account SID will be changed to the SID for ContosoPrime\\hholt. If the "ContosoPrime\\hholt" account does not exist, the SID will not be updated for Contoso1\\hholt.

    TFSConfig Identities /change /fromdomain:Contoso1 /todomain:ContosoPrime

The following example shows how to change the account for a single user account, Contoso1\\hholt, to the account for another user account, ContosoPrime\\jpeoples.

    TFSConfig Identities /change /fromdomain:Contoso1 /todomain:ContosoPrime /account:hholt /toaccount:jpeoples

The following example shows how to change the SID of the "NT AUTHORITY\\NETWORK SERVICE" service account that is used in the deployment of Team Foundation Server when changing the domain of the deployment from Contoso1 to ContosoPrime. To change a system account such as Network Service, you must follow a two-stage process. You first change the service account from NT AUTHORITY\\NETWORK SERVICE to a domain account in the new domain (TempSVC), and then you change the account back to NETWORK SERVICE on the server in the new domain. The configuration database is hosted on the server that is named "ContosoMain" on the named instance "TeamDatabases" in SQL Server.

    TFSConfig Identities /change /fromdomain:"NT AUTHORITY" /todomain:ContosoPrime /account:"NETWORK SERVICE"
		/toaccount:TempSVC /SQLInstance:ContosoMain\TeamDatabases /DatabaseName:TFS_ConfigurationDB

    TFSConfig Identities /change /fromdomain:ContosoPrime /todomain:"NT AUTHORITY" /account:TempSVC
		/toaccount:"NETWORK SERVICE"
