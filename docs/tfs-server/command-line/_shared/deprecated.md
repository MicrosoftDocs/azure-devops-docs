<a id="license"></a>
### License

**Command availability:**  TFS 2015 | TFS 2013 | TFS 2012 | TFS 2010

You can use the **License** command to display, modify, or extend the licensing key for your deployment of Visual Studio Team Foundation Server.

	TFSConfig License [/ProductKey:Key] [/extend [NewTrialID]]

<table>
	<thead>
		<tr>
			<th>Option</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><strong>/ProductKey:</strong> Key</td>
			<td>Specifies that the license key for the deployment will be updated with the value of Key.</td>
		</tr>
		<tr>
			<td><strong>/extend</strong></td>
			<td>
				Specifies that the trial licensing period for Team Foundation Server will be extended by 30 days.
				This option can be used only once without a getting a new trial ID.
				If a second extension is required, you must obtain a second trial license from Microsoft.
			</td>
		</tr>
	</tbody>
</table>

### Required Permissions

To use the **License** command, you must be a member of the Team Foundation Administrators security group. For more information, see [Permission reference for Team Foundation Server](../../../security/permissions.md).

### Remarks

To view, modify, or change the licensing for your deployment interactively, you can use the administration console for Team Foundation.
For more information, see [Open the Team Foundation Administration Console](https://msdn.microsoft.com/library/d4e7d06b-fd68-43d1-8baf-ce31c8989a02) and [Locate or Change the Product Key for Team Foundation Server](https://msdn.microsoft.com/library/64f29927-b520-4c9f-b633-bcb527e562cd).

### Examples

The following example shows how to view the licensing information for a deployment of Team Foundation Server. In this example, the deployment is using a trial license.

    TFSConfig License

    TFSConfig - Team Foundation Server Configuration Tool
    Copyright © Microsoft Corporation. All rights reserved.
    Team Foundation Server Standard license
    The following features are installed:
    Team Foundation Server
    Build Services
    Build: 21106.00
    Product ID: 01234-567-8910
    Trial license with 74 days remaining, expiring on 6/30/2010
    Trial ID: ABCD-EFGH-IJKL

<a id="tcm"></a>
### TCM

**Command availability:**  TFS 2015 | TFS 2013 | TFS 2012 | TFS 2010

When upgrading to the latest version of TFS, the system automatically attempts to upgrade the Tests Management components, including test plans and suites.
If the automatic migration fails, use the **TCM** command to upgrade your test plans and test suites manually to their respective work item types (WITs).

	TFSConfig TCM /upgradeTestPlans|upgradeStatus /CollectionName:CollectionName /TeamProject:TeamProjectName

<table>
	<thead>
		<tr>
			<th>Option</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><strong>/upgradeTestPlans</strong></td>
			<td>
				Required unless <strong>/upgradeStatus</strong> is used.<br/><br/>
				Converts existing test plan and test suites to point to the work item-based test plans and test suites.
				It also updates existing test management data and links
				between other existing test artifacts such as test points, test runs, and test results.
			</td>
		</tr>
		<tr>
			<td><strong>/upgradeStatus</strong></td>
			<td>
				Required unless <strong>/upgradeTestPlans</strong> is used.<br/><br/>
				Reports the migration status of test data for the specified team project.
				It will also indicate whether the specified project has any test plans.
			</td>
		</tr>
		<tr>
			<td><strong>/CollectionName</strong>:CollectionName</td>
			<td>
				Required. Specifies the project collection that contains the team project
				for which you want to migrate test data or check the migration status.<br/><br/>
				If there are spaces in the name of the team project collection,
				enclose the name in quotation marks, for example, &quot;Fabrikam Fiber Collection&quot;.
			</td>
		</tr>
		<tr>
			<td><strong>/TeamProjectName</strong>:TeamProjectName</td>
			<td>
				Required. Specifies the team project for which you want to migrate test data or check the migration status.
				This team project must be defined in the collection that you specified by using the <strong>/collectionName</strong> parameter.
				<br/><br/>If there are spaces in the name of the team project, enclose the name in quotation marks, for example, &quot;My Team Project&quot;.
			</td>
		</tr>
	</tbody>
</table>

### Required permissions

You must be a member of the Team Foundation Administrators security group, and an administrator on the application-tier server.
See [Set administrator permissions for Team Foundation Server](https://msdn.microsoft.com/library/ed578715-f4d2-4042-b797-5f97abde9973).

### Remarks

Your application-tier server must be upgraded to the latest version of TFS to use this command.

Before you can use the TCM command, you must first import the test plan work item definition and the test plan category into the project.
To learn more about the migration and when to use this command, see [Manual updates to support test management](https://msdn.microsoft.com/library/edbe689d-7863-4273-916f-b7e93b7f00b3).

The TCM command is applied to individual team projects. If you need to upgrade test plans in more than one team project, you will have to run it against each team project individually.

You must run the **TCM** command from the tools directory for TFS. By default, that location is: `drive:\%programfiles%\TFS 12.0\Tools`.

You use the **TCM** command only in the event that automatic migration of existing test data fails.
To learn more about the migration and when to use this command, [Manual updates to support test management](https://msdn.microsoft.com/library/edbe689d-7863-4273-916f-b7e93b7f00b3).

If you can't access test plans or test suites that were defined before the server upgrade occurred, run **TFSConfig TCM upgradeStatus** to determine the status of the migration.

You run the **TCM** command for an individual team project. If you need to upgrade more than one team project, you will have to run it against each team project in turn.

### Examples

The following example shows how to check the status of test plan upgrade on the Fabrikam Fiber project hosted on the default team project collection (DefaultCollection):

    tfsconfig tcm /upgradeStatus /CollectionName:DefaultCollection /TeamProject:"Fabrikam Fiber"

<a id="import"></a>
### Import

The import command was deprecated in TFS 2013. Earlier versions are available here:

- [TFS 2012](https://msdn.microsoft.com/library/ff407080%28v=vs.110%29.aspx)
- [TFS 2010](https://msdn.microsoft.com/library/ff407080%28v=vs.100%29.aspx)

If you need assistance with upgrading data and projects from an earlier version of Team Foundation Server (TFS),
see [Upgrade Team Foundation Server](https://msdn.microsoft.com/library/f4cde7d5-4021-4b21-b9b8-ba6e51572243),
or contact [Microsoft Support](http://support.microsoft.com/ph/1117).

<a id="preparesql"></a>
### PrepareSQL

The prepareSQL command was depracated in TFS 2012. Earlier versions are available here:

- [TFS 2010](https://msdn.microsoft.com/library/ee349267%28v=vs.100%29.aspx)

<a id="repair"></a>
### Repair

The repair command was depracated in TFS 2012. Earlier versions are available here:

- [TFS 2010](https://msdn.microsoft.com/library/ee349268%28v=vs.100%29.aspx)

If you need to repair your stored procedures after a failed database patch, contact [Microsoft Support](http://support.microsoft.com/ph/1117).

<a id="diagnose"></a>
### Diagnose

The diagnose command was deprecated in TFS 2013. Earlier versions are available here:

- [TFS 2012](https://msdn.microsoft.com/library/ff407076%28v=vs.110%29.aspx)
- [TFS 2010](https://msdn.microsoft.com/library/ff407076%28v=vs.100%29.aspx)

If you need assistance with diagnosing potential mismatches between software updates on your application-tier and data-tier servers for Team Foundation Server (TFS),
contact [Microsoft Support](https://support.microsoft.com/ContactUs).

<a id="updates"></a>
### Updates

The updates command was deprecated in TFS 2013.Earlier versions are available here:

- [TFS 2012](https://msdn.microsoft.com/library/ff407078%28v=vs.110%29.aspx)
- [TFS 2012](https://msdn.microsoft.com/library/ff407078%28v=vs.100%29.aspx)

If you need assistance with installing any software updates that are missing from the databases for Team Foundation Server (TFS),
contact [Microsoft Support](http://support.microsoft.com/ph/1117).
