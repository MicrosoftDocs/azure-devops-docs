>**Command availability:** TFS 2015 and TFS 2013

The **Unattend** command is designed for users who are familiar with Team Foundation Server (TFS) and the configuration process, and who need to install TFS on different machines.

For example, if you use Team Foundation Build, you can use the **Unattend** command to install multiple build servers using the same configuration file.

Use the *Unattend* /create option to create an unattend file.
This file defines all configuration parameters for a TFS installation.
Next, use the *Unattend /configure* option to actually perform the configuration.

This process allows you to configure TFS from start to finish without having to provide input during the installation process.
In the case of multiple installations, this also helps ensure that the exact same configuration parameters are used across multiple servers.

	TFSConfig unattend /create|unattend /type:InstallType /unattendfile:ConfigurationFileName [/inputs:Key1=Value1; Key2=Value2;...] [/verify] [/continue]

<table>
	<thead>
		<tr>
			<th>Option</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><strong>/create</strong></td>
			<td>Creates the unattend file with the name and parameters you specify.</td>
		</tr>
		<tr>
			<td><strong>/configure</strong></td>
			<td>
				Configures TFS using the unattend file and parameters you specify.
				You must use /type or /unattendfile with this option.
			</td>
		</tr>
		<tr>
			<td><strong>/type</strong>:InstallType</td>
			<td>
				<p>Specifies the type of configuration to use.</p>
				<ul>
					<li><p>Basic: Configures TFS in the basic configuration, including SQL Server Express.</p></li>
					<li><p>Standard: Configures TFS in the standard single-server configuration.</p></li>
					<li><p>ATOnly: Configures an additional application-tier for an existing TFS deployment.</p></li>
					<li><p>Build: Configures the Team Foundation Build Service.</p></li>
					<li><p>Proxy: Configures Team Foundation Server Proxy.</p></li>
					<li><p>SPInstall: Installs and configures SharePoint Foundation 2013 for use with a TFS deployment.</p></li>
					<li>
						<p>Upgrade: Upgrades a previous version of Team Foundation Server to the latest version of the software.</p>
						<p>You must have downloaded and installed that version locally before running this command with /configure.</p>
					</li>
					<li><p>SPExtensions: Configures the SharePoint Extensions for Team Foundation Server.</p></li>
				</ul>
				<p>When you use /configure, either /type or /unattendfile are required, but you cannot use both.</p>
			</td>
		</tr>
		<tr>
			<td><strong>/unattendfile</strong>:ConfigurationFileName</td>
			<td>Specifies the unattend file to create or use, depending on whether the initial parameter is /create or /configure. When you use /configure, either /unattendfile or /type is required.</td>
		</tr>
		<tr>
			<td><strong>/inputs</strong>:Key1=Value1; Key2=Value2;...</td>
			<td>
				Optional. If you use /create, specifies settings and values to use when creating the unattend file.
				If you use /configurespecifies additional settings and values to use in conjunction with the unattend file.<br/><br/>
				As an alternative to using /inputs, you can manually edit the unattend file in any plain-text editor.
				This is necessary for certain input types, such as <span sdata="langKeyword" value="ServiceAccountPassword"> ServiceAccountPassword </span> or <span sdata="langKeyword" value="PersonalAccessToken"> PersonalAccessToken </span>
				as those secret values cannot be set using the <span sdata="langKeyword" value="/inputs"> /inputs </span> parameter.
			</td>
		</tr>
		<tr>
			<td><strong>/verify</strong></td>
			<td>
				Optional. Specifies a configuration run that only completes verification checks based on the unattend file, inputs, and configuration type.
				This is an alternative to performing a complete configuration.
			</td>
		</tr>
		<tr>
			<td><strong>/continue</strong></td>
			<td>Optional. Specifies that /create or /configure should continue regardless of warnings from verification checks.</td>
		</tr>
		<tr>
			<td><strong>/?</strong></td>
			<td>Optional. Provides command-line help for the unattend command.</td>
		</tr>
	</tbody>
</table>

### Required permissions

-   You must be a member of the Administrators group on the computer where you are installing the software.

-   Depending on the type of installation, you might also require additional administrator permissions.
For example, if you are using the **Unattend** command to install Team Foundation Server,
you must be a member of the sysadmin group on the instance of SQL Server that will support TFS.
For more information, see the Q & A section of [Set administrator permissions for Team Foundation Server](https://msdn.microsoft.com/library/ed578715-f4d2-4042-b797-5f97abde9973).

### Remarks

Before you can use the **Unattend** command to configure TFS,
you must [create the service accounts](../../requirements.md#accounts) that you will use as part of your deployment.
You must also install any prerequisite software for your chosen installation type. This includes TFS itself.
You must install TFS but you don't have to configure it because the **Unattend** command will do that for you.

The Unattend command configures TFS components. It does not perform the initial installation of the software.
It configures the software according to your specifications after the bits are present on the computer.

### Examples

The following example shows how to create an unattend file for a basic installation of Team Foundation Server.

	TFSConfig Unattend /create /type:basic /unattendfile:configTFSBasic.ini

In this example, the unattend file is created in the same directory as the command. A log file is created as part of the command, and the location of the file is returned in the command as part of executing the command.

The following example shows how to specify a Git repository for use with GVFS during configuration.

	TFSConfig Unattend /configure /type:proxy /inputs:ProjectCollectionUrl=http://FabrikamFiberTFS:8080/tfs/defaultcollection;GvfsProjectName=Fabrikam-Fiber-Git;GvfsRepositoryName=TestGit

The following example shows how to create an unattend file for the configuration of a Team Foundation Proxy server.

>**Important:** 
>In this example, if the administrators want to use a personal access token for authentication they will need to manually edit the file to specify the personal access token value. This can be achieved by adding a line for the personal access token in the created unattend file like: &quot;PersonalAccessToken=PersonalAccessTokenValue&quot;.
	
	TfsConfig Unattend /create /type:proxy "/inputs:ProjectCollectionUrl=http://FabrikamFiberTFS:8080/tfs/defaultcollection" /unattendFile:c:\unattend.txt

The following example shows how to create an unattend file for the configuration of Team Foundation Build on a server using "FabrikamFiber\\BuildSVC" as the build service account, and then configure Team Foundation Build using that unattend file.

>**Important:**  
>In this example, after creating the unattend file, the administrator manually edits the file to specify the password for the build service account. Adding the password as an input using &quot;ServiceAccountPassword=Password&quot; doesn't add the password information to the file.

	TFSConfig Unattend /create /type:build /unattendfile:configTFSBuild.ini
		/inputs:IsServiceAccountBuiltIn=false;ServiceAccountName=FabrikamFiber\\BuildSVCTFSConfig
		Unattend /configure /unattendfile:configTFSBuild.ini

The first command returns the following:

    Microsoft (R) TfsConfig - Team Foundation Server Configuration Tool
    Copyright (c) Microsoft Corporation. All rights reserved.

    Command: unattend
    Logging sent to file C:\ProgramData\Microsoft\Team Foundation\Server Configuration\Logs\TFS_Build Configuration_0512_203133.log

The second command returns the following information, including the name of the server where Team Foundation Build was configured (FabrikamFiberTFS) and the team project collection associated with the controller (DefaultCollection):

    Microsoft (R) TfsConfig - Team Foundation Server Configuration Tool
    Copyright (c) Microsoft Corporation. All rights reserved.

    Command: unattend

    ---------------------------------------------
            Inputs:
    ---------------------------------------------

    Feedback
            Send Feedback: True

    Build Resources
            Configuration Type: create
            Agent Count: 1
            New Controller Name: FabrikamFiberTFS - Controller
            Clean Up Resources: False

    Team Project Collection
            Collection URL: http://FabrikamFiberTFS:8080/tfs/defaultcollection

    Windows Service
            Service Account: FabrikamFiber\BuildSVC
            Service Password: ********

    Advanced Settings *
            Port: 9191


    ---------------------------------------------
            Running Readiness Checks
    ---------------------------------------------

    [1/2] System Verifications
    [2/2] Build Service Verifications

    ---------------------------------------------
            Configuring
    ---------------------------------------------

            root
    [1/4] Install Team Foundation Build Service
            Installing Windows services ...
            Adding service account to groups ...
            Setting ACL on a windows service
    [2/4] Enable Event Logging
            Adding event log sources ...
            Token replace a config file
            RegisterBuildEtwProvider
            Configuring ETW event sources ...
    [3/4] Register with Team Foundation Server
            Registering the build service
    [4/4] Start Team Foundation Build Service
            StartBuildHost
            Starting Windows services ...
            Marking feature configured status
    [Info] [Register with Team Foundation Server] Firewall exception added for port
    9191


    TeamBuild completed successfully.
    Logging sent to file C:\ProgramData\Microsoft\Team Foundation\Server Configuration\Logs\TFS_Build Configuration_0512_203322.log
