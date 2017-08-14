<a id="add-project-reports">  </a>
>**Command availability:** TFS 2017.1 (RC2) 

You use the **AddProjectReports** command to add or overwrite reports for an existing team project.

	TfsConfig addProjectReports
		/collection:teamProjectCollectionUrl
		/teamProject:projectName
		/template:templateName
		[/force]

<table>
	<thead>
		<tr>
			<th>Option</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><strong>/collection</strong></td>
			<td>Required. URL of Team Project Collection.</td>
		</tr>
		<tr>
			<td><strong>/teamProject</strong></td>
			<td>Required. Specifies the name of the team project.</td>
		</tr>
		<tr>
			<td><strong>/template</strong></td>
			<td>Required. Specifies the name of the process template. Available options are Agile, CMMI and Scrum</td>
		</tr>
		<tr>
			<td><strong>/force</strong></td>
			<td>Optional. Specifies that reports should be overwritten if they already exist.</td>
		</tr>
	</tbody>
</table>

### Required permissions

To use the **AddProjectReports** command, you must have permissions to run **TFSConfig** and to [upload reports to the Reporting Service](../../../report/admin/grant-permissions-to-reports.md). 

### Remarks

You use the **AddProjectReports** command when your team project does not have reports or you want to update the reports defined for a process. 

You may need to use this command when:
-   the team project was created in the TFS web portal and not from Visual Studio
-   the team project was created from Visual Studio, however reporting was not configured in TFS.

If you would like to overwrite reports in your project with default reports because you upgraded TFS and old reports in your team project are no longer compatible, use the **/force** option. If you have customized reports, please make a backup before doing this. 

To learn more about adding reports to an on-premises TFS, see [Add reports to a team project](../../../report/admin/add-reports-to-a-team-project.md).

### Example

The following example shows how to add Agile reports to MyProject team project in http://myTfsServer:8080/tfs/DefaultCollection project collection
	
	TFSConfig addprojectreports /collection:http://myTfsServer:8080/tfs/DefaultCollection /teamproject:MyProject /template:Agile