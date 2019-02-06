---
title: Release Management deployment tools for Release Management
ms.custom: seodec18
description: Learn about the release Management tools to deploy an app in Release Management for Azure Pipelines and Team Foundation Server (TFS.
ms.assetid: 0FD15EFD-35AA-4F56-9603-64D3302C0941
ms.prod: devops
ms.technology: devops-cicd
ms.topic: conceptual
ms.manager: jillfra
ms.author: ahomer
author: alexhomer1
ms.date: 07/16/2018
monikerRange: '>= tfs-2013'
---

# Release Management tools to deploy an app

[!INCLUDE [previous-version-header](../../_shared/previous-version-header.md)]

Each release action uses a release management tool. For example, Command Line Runner is a tool that runs a specific executable for an action. If you need to perform a task that the provided tools do not support, you can create your own custom tool and add that to a custom release action. Tools can also be used to deploy a component of your app.

The following sections describe the tools provided with Release Management:

* [Database Deployment Agent - Execute Script](#database_da)
* [Reporting Services Deployment Agent](#rs_da)
* [MSI Deployment Agent](#msi_da)
* [XCopy Deployment Agent](#xcopy_da)
* [Command Line Runner](#clr)
* [Windows Registry Manager](#wrm)
* [Windows Common IO](#wcio)
* [Windows Service Manager](#wsm)
* [DACPAC Database Deployment Agent](#dacpac_da)
* [IIS Deployment Agent](#iis_da)
* [Microsoft Azure VM Manager](#mavmm)
* [XBAP Deployer](#xbapd)
* [Microsoft Test Manager Command-Line Utility](#mtm_clu)
* [INI File Manager](#ini_fm)
* [Windows Process](#wproc)

<a name="database_da"></a>
## Database Deployment Agent - Execute Script

This tool executes a SQL query in a specific database. It is based on the 
standard sqlcmd executable distributed with SQL Server. Refer to the 
**[sqlcmd](https://msdn.microsoft.com/library/ms162773%28v%3Dsql.120%29.aspx)** 
documentation for further information about this executable. The 
configuration variables for this tool are:

| **Parameter** | **Variable** | **Mandatory** | **Description** |
|---------------|--------------|---------------|-----------------|
| -S | ServerName | Yes | The server name of the SQL database. |
| -i | ScriptName | Yes | The name of the script to be executed. |
| -b | N/A | No | This parameter is a switch. If present, it means that if an error occurs, the batch will be aborted. |
 
<a name="rs_da"></a>
## Reporting Services Deployment Agent

This tool deploys reporting services reports and related objects. It is based 
on a custom release management executable. The configuration variables of this
tool are:

| **Parameter** | **Variable** | **Mandatory** | **Description** |
|---------------|--------------|---------------|-----------------|
| -s | serverUrl | Yes | The complete URL of the reporting services server. |
| -l | itemLocation | Yes if multiple items | The location of the items. If specified, the folder must be provided (-f). |
| -f | folder | Yes if multiple items | The folder of the items. If specified, the item location must be provided (-l). |
| -t |  | Yes | The item type to be processed. The allowed values are Report and Picture. |
| -sp |  | No | List of search patterns to use to filter the items. Each search pattern must be separated by a comma or a semicolon (for example, \*.bmp;\*.jpg). If not specified, the search pattern will be as follows based on the selected item type (-t) : Report (\*.rdl) or Picture (\*.bmp,\*.gif,\*.jpg,\*.jpeg,\*.png) |
| -i |  | Yes if single items | Item file. If specified, the item name must be provided (-n). This parameter is used when a single item must be deployed. If so, the item location (-l) and folder (-f) parameters must not be present. |
| -n |  | Yes if single items | Item name. If specified, the item file must be provided (-i). This parameter is used when a single item must be deployed. If so, the item location (-l) and folder (-f) parameters must not be present. |
| -log |  | No | A log file with this given name will be generated in the physical directory. |
| -o | N/A | No | This parameter is a switch. If present, it means that the destination will be overwritten if it already exists. |
| -ds ds1,...,dsN |  |  | Comma-delimited fully qualified name of all data sources to associate with the item. These are case-sensitive. This option only applies to reports. The data source can be in the format **\[name\]: reference**. Name is the name of the data source, as specified in the report where the references are to be replaced. Reference is the fully qualified reference to the data source in the target server to use for the report. |

<a name="msi_da"></a>
## MSI Deployment Agent

This tool deploys an MSI. It uninstalls the previous installation of the 
product before it installs the new one. It is based on a custom release 
management PowerShell script. The configuration variables of this tool are:

| **Parameter** | **Variable** | **Mandatory** | **Description** |
|---------------|--------------|---------------|-----------------|
| -command | N/A | Yes | Fixed value ./msiexec.ps1. |
| -MsiFileName | Installer | Yes | The complete path (if required) and name of the .msi file to install. |
| -MsiCustomArgs | MsiCustomArgs | No | The custom arguments to use to install the .msi file. These arguments will be passed directly to the msiexec executable. If no custom arguments are needed, the parameter will have to be removed from the arguments. |
| -PrevProductName |  | No | Allows the user to specify the previous product name to be uninstalled prior to installing the .msi file. By default, the system will use the product name in the .msi file to install. |

<a name="xcopy_da"></a>
## XCopy Deployment Agent

This tool copies a package location to a specific destination. It is based on 
a custom release management batch script. The configuration variables of this 
tool are:

| **Parameter** | **Variable** | **Mandatory** | **Description** |
|---------------|--------------|---------------|-----------------|
| -source | N/A | Yes | Fixed value indicating that all the source location must be copied |
| -destination | Installation Path | Yes | The destination of the copy. |

<a name="clr"></a>
## Command Line Runner

This tool runs a specific executable. It is based on a custom release 
management PowerShell script. The configuration variables of this tool are:

| **Parameter** | **Variable** | **Mandatory** | **Description** |
|---------------|--------------|---------------|-----------------|
| -file | N/A | Yes | Fixed value ./RunCommandLine.ps1. |
| -FilePath | FilePath | Yes | The complete path (if required) and filename of the executable to be run. |
| -Arguments | Arguments | No | The arguments needed when the executable is run. |
| -UserDomain | UserDomain | No | The domain of the user to use if the executable has to be run under a specific identity. If not provided, the local user will be used (.\localuser). |
| -UserName | UserName | No | The name of the user to use if the executable has to be run under a specific identity. |
| -UserPassword | UserPassword | No | The password of the user to use if the executable has to be run under a specific identity. |

<a name="wrm"></a>
## Windows Registry Manager

This tool manipulates registry information in Windows. It is based on a custom
release management PowerShell script. The configuration variables of this tool 
are:

| **Parameter** | **Variable** | **Mandatory** | **Description** |
|---------------|--------------|---------------|-----------------|
| -command | N/A | Yes | Fixed value ./ManageWindowsRegistry.ps1. |
| -Action | Action | Yes | The action to be performed. The allowed values are **CreateKey** (create a new registry key), **ModifyKey** (modify a registry key or its data), **DeleteKey** (delete a registry key with all its values and sub keys), **CreateValue** (create a new registry value located under a key), **ModifyValue** (modify a registry value located under a key), **DeleteValue** (delete a registry value located under a key). |
| -OperatingSystemType |  | No | Indicates if the key/value is accessed in the 32-bit or 64-bit registry. If not provided, the default is 32-bit. |
| -RegistryKey | RegistryKey | Yes | Path and name of the registry key (for example, HKLM\\Software\MyKey). |
| -RegistryValue |  | No\* | Registry value to which changes will be applied (for example, MyValue). Required for CreateValue, ModifyValue and DeleteValue. |
| -ValueType |  | No | Type of the value being affected. The accepted values are **REG\_SZ** : String (default value if not specified), **REG\_QWORD\_LITTLE\_ENDIAN** : A 64-bit number in little-endian format, **REG\_QWORD** : A 64-bit number, **REG\_NONE** : No value, **REG\_MULTI\_SZ** : Multi-line string (separated by \\0), **REG\_LINK** : Symbolic Link, **REG\_EXPAND\_SZ** : String with unexpanded references to environment variables, **REG\_DWORD\_BIG\_ENDIAN** : A 32-bit number in big-endian format, **REG\_DWORD_LITTLE\_ENDIAN** : A 32-bit number in little-endian format, **REG\_DWORD** : A 32-bit number, **REG\_BINARY** : Binary data in any form. |
| -RegistryData |  | No | The data to apply to either the value (if using CreateValue or ModifyValue) or to the default value of the key (if using CreateKey or ModifyKey). |
| -RegistryKeyDestination |  | No\* | The registry key name to use when using the ModifyKey action to rename a registry key. For example, RegistryKey = HKLM\\Software\\MyKey or RegistryKeyDestination = HKLM\\Software\\MyModifiedKey. Required for ModifyKey. |

<a name="wcio"></a>
## Windows Common IO

This tool performs common IO under Windows. It is based on a custom release 
management PowerShell script. The configuration variables of this tool are:

| **Parameter** | **Variable** | **Mandatory** | **Description** |
|---------------|--------------|---------------|-----------------|
| -command | N/A | Yes | Fixed value ./ManageWindowsIO.ps1. |
| -Action | Action | Yes | Indicate the action to be performed: **Create** (create a new folder), **Delete** (delete files or folder), **Rename** (rename a file or folder), **Move** (move a file or folder), **Attrib** (modify the attributes, including ownership, of files or folder). |
| -FileFolderName | FileFolderName | Yes | The file or folder path and name. |
| -DestinationName |  | No\* | The destination name (for rename action) or the folder path and name (for move action). Required for Rename and Move actions. |
| -ReadOnly |  | No | Allow the user to set or reset the files or folder read-only attribute: **+** (set the flag), **-** (reset the flag), any other value leaves the flag as it is. |
| -Archive |  | No | Allow the user to set or reset the files or folder archive attribute: **+** (set the flag), **-** (reset the flag), any other value leaves the flag as it is. |
| -System |  | No | Allow the user to set or reset the files or folder system attribute: **+** (set the flag), **-** (reset the flag), any other value leaves the flag as it is. |
| -Hidden |  | No | Allow the user to set or reset the files or folder hidden attribute: **+** (set the flag), **-** (reset the flag), any other value leaves the flag as it is. |
| -OwnerDomain |  | No | Represent the domain of the new owner for the file or folder. |
| -OwnerName |  | No | Represent the name of the new owner for the file or folder. |

<a name="wsm"></a>
## Windows Service Manager

This tool manages Windows services. It is based on a custom release management 
PowerShell script. The configuration variables of this tool are:

| **Parameter** | **Variable** | **Mandatory** | **Description** |
|---------------|--------------|---------------|-----------------|
| -command | N/A | Yes | Fixed value ./ManageWindowsServices.ps1. |
| -Action | Action | Yes | Indicate the action to be performed: **Create** (create a new service), **Config** (configure an existing service), **Delete** (delete an existing service), **Start** (start a service), **Stop** (stop a service), **Restart** (stop and start the service).  |
| -ServiceName | ServiceName | Yes | Name of the service. |
| -ServerName |  | No | The name of the server where this action will be performed. If not specified, the current server will be used. |
| -BinPath |  | No\* | Binary path and name of the service. Required for Create action, optional for Config action and ignored by all others. |
| -DisplayName |  | No | Display name that will be used for this service. Optional for Create and Config actions and ignored by all others. |
| -Description |  | No | Description that will be given to the service. Optional for Create and Config actions and ignored by all others. |
| -UserName |  | No | User name that will be used for the credentials to start the service (must be in the form DOMAIN\USER). If provided, the parameter -Password must also be provided. If not provided, the LocalSystem account will be used by default. Optional for Create and Config actions and ignored by all others. To reset the credentials to the LocalSystem, enter LocalSystem as the user and "" as the password. |

<a name="dacpac_da"></a>
## DACPAC Database Deployment Agent

This tool deploys a DACPAC package. It is based on a SQL Server command line 
utility. There are a lot of possible parameters for this executable but this 
is the list of parameters that are used for this tool. See 
[SQL package command line utility](https://msdn.microsoft.com/library/hh550080.aspx) 
for more details. The configuration variables of this tool are:

| **Parameter** | **Variable** | **Mandatory** | **Description** |
|---------------|--------------|---------------|-----------------|
| /Action: |  | Yes | Fixed value: Publish - specifies that the package will be published. |
| /SourceFile: | FileName | Yes | The complete path (if required) and file name of the DACPAC. |
| /TargetServerName: | ServerName | Yes | The name of the SQL Server to publish the package to. |
| /TargetDatabaseName: | DatabaseName | Yes | The name of the SQL Server database to publish the package to. |

<a name="iis_da"></a>
## IIS Deployment Agent

This tool manipulates IIS objects and settings. It is based on a custom release 
management executable. The configuration variables of this tool vary depending 
of the type of actions to perform.

**For application pool actions:** 

| **Parameter** | **Variable** | **Mandatory** | **Description** |
|---------------|--------------|---------------|-----------------|
| -Action |  | Yes | Indicate the action to be performed: CreateApplicationPool, ConfigureApplicationPool, DropApplicationPool, StartApplicationPool, StopApplicationPool, or RecycleApplicationPool. |
| -ap |  | Yes | Application Pool name. |
| -apAllow32Bit |  | No | Flag that indicates if the application pool must allow 32 bit applications. This parameter is allowed only for IIS 7.0, 7.5, 8.0, and 8.5. The allowed values are 1 or True (32 bit applications are allowed), 0 or False (32 bit applications are not allowed). |
| -apIdentUserDomain |  | No | Domain of the user to use as the identity of the application pool. This parameter is allowed only for IIS 7.0, 7.5, 8.0 and 8.5. If not defined and the "IdentityUserName" is defined, the user will be considered as a local user (.\localuser). |
| -apIdentUserName |  | No | User name to use as the identity of the application pool. This parameter is allowed only for IIS 7.0, 7.5, 8.0 and 8.5. If not defined, "IdentityUserDomain" and "IdentityUserPassword" will be ignored and the default value of IIS will be used (ApplicationPoolIdentity). |
| -apIdentUserPassword |  | No | The password of the user to use as the identity of the application pool. This parameter is allowed only for IIS 7.0, 7.5, 8.0 and 8.5. |
| -apNetVers |  | No | The .NET Framework version to use for the application pool. This parameter is allowed only for IIS 7.0, 7.5, 8.0 and 8.5. The allowed values are v1.0, v1.1, v2.0, v4.0 |
| -apPipelineMode |  | No | The managed pipeline mode to use in the application pool. This parameter is allowed only for IIS 7.0, 7.5, 8.0 and 8.5. The allowed values are Classic or Integrated. |
| -apProcessIdleTimeout |  | No | The number of minutes a process can be idle in the application pool. This parameter is allowed only for IIS 7.0, 7.5, 8.0 and 8.5. |
| -apRecycleKbMemory |  | No | The maximum number of KB of memory that be used before the application pool is recycled. This parameter is allowed only for IIS 7.0, 7.5, 8.0 and 8.5. |
| -apRecycleMinutes |  | No | A fixed number of minutes after which the application pool is recycled. This parameter is allowed only for IIS 7.0, 7.5, 8.0 and 8.5. |
| -apRecycleSpecificTime |  | No | A fixed time at which the application pool is recycled. This parameter is allowed only for IIS 7.0, 7.5, 8.0 and 8.5. The required format is HH:MM (for example, 23:58 or 01:23). |
| -apStartMode |  | No | The start mode to be used for the application pool. This parameter is allowed only for IIS 8.0 and 8.5. The allowed values are OnDemand or AlwaysRunning. |
| -AutoStart |  | No | Flag that indicates if the application pool must be started automatically. This parameter is allowed only for IIS 7.0, 7.5, 8.0 and 8.5. The allowed values are 1 or True: The application pool will be started automatically when Windows starts, and 0 or False: The application pool will not be started automatically when Windows starts. |
<p />
**For Web Site actions:**

| **Parameter** | **Variable** | **Mandatory** | **Description** |
|---------------|--------------|---------------|-----------------|
| -Action |  | Yes | Indicate the action to be performed: CreateWebSite, ConfigureWebSite, DropWebSite, StartWebSite, StopWebSite, or RestartWebSite. |
| -sn |  | Yes | Web site name. |
| -port |  | No\* | The port number of the website. Mandatory for create action and optional in configure. |
| -pd |  | No\* | The full path routing to the location where the application was published. Mandatory for create action and optional in configure. **Note**: Ensure that there is no trailing slash in the path. |
| -ap |  | No | Name of the application pool. If not defined when creating an application pool, the default application pool will be used. Optional in Create and Configure actions. |
| -EnablePreload |  | No | Allowed on IIS 7.0, 7.5, 8.0 and 8.5. Flag that indicates if the web site must be preloaded. Optional in Create and Configure actions. Allowed values are 1 or True: Preload enabled and 0 or false: Preload disabled. |
| -AutoStart |  | No | Allowed on IIS 7.0, 7.5, 8.0 and 8.5. Flag that indicates if the web site must be automatically started. Optional in Create and Configure actions. Allowed values are 1 or True: start automatically and 0 or False: do not start automatically. |
| -log |  | No | A log file with this given name will be generated in the physical directory. |
<p />
**For Web Application actions:** 

| **Parameter** | **Variable** | **Mandatory** | **Description** |
|---------------|--------------|---------------|-----------------|
| -Action |  | Yes | Indicate the action to be performed: CreateWebApplication, ConfigureWebApplication, or DropWebApplication. |
| -ws |  | Yes | Name of the application to create. |
| -pd |  | No\* | The full path routing to the location where the application was published. Mandatory for create action and optional in configure. |
| -sn |  | No | Website name. If not specified, the system will use Default web site when creating a new application. Optional in Create and Configure actions. |
| -ap |  | No | Name of the application pool. If not defined when creating an application pool, the default application pool will be used. Optional in Create and Configure actions. |
| -EnablePreload |  | No | Allowed on IIS 7.0, 7.5, 8.0 and 8.5. Flag that indicates if the web site must be preloaded. Optional in Create and Configure actions. Allowed values are: 1 or True: preload enabled and 0 or False: preload disabled. |
| -log |  | No | A log file with this name will be generated in the physical directory. |
<p />
**For virtual directory actions:**

| **Parameter** | **Variable** | **Mandatory** | **Description** |
|---------------|--------------|---------------|-----------------|
| -Action |  | Yes | Indicate the action to be performed: CreateVirtualDirectory, ConfigureVirtualDirectory, or DropVirtualDirectory. |
| -vd |  | Yes | Name of the virtual directory. |
| -pd |  | No\* | The full path of the virtual directory. Mandatory for create action and optional in configure. |
| -sn |  | No | Website name. If not specified, the system will use Default web site when creating a new application. Optional in Create and Configure actions. |
| -ws |  | No | Web application name. If not specified, the system will use the root web application when creating a new virtual directory. Optional in Create and Configure actions. |
| -log |  | No | A log file with this name will be generated in the physical directory. |

<a name="mavmm"></a>
## Microsoft Azure VM Manager

This tool manages a VM in Microsoft Azure. It is based on a custom release 
management PowerShell script. The configuration variables of this tool are:

| **Parameter** | **Variable** | **Mandatory** | **Description** |
|---------------|--------------|---------------|-----------------|
| -command | N/A | Yes | Fixed value ./ControlAzureVM.ps1. |
| -Command |  | Yes | Indicate the action to be performed: **Start** (start the VM) or **Stop** (stop the VM) |
| -ServiceName | ServiceName | Yes | The name of the Microsoft Azure service in which the VM exists. |
| -Name | Name | Yes | The name of the Microsoft Azure VM. |

<a name="xbapd"></a>
## XBAP Deployer

This tool deploys an XBAP application. It is based on a custom release 
management executable. The configuration variables of this tool are:

| **Parameter** | **Variable** | **Mandatory** | **Description** |
|---------------|--------------|---------------|-----------------|
| -pn | ProjectName | Yes | The XBAP project name to be deployed. |
| -d | Installation Path | Yes | The installation path for the XBAP application. |
| -ml |  | No | The complete path to the mage utility executable. If not defined, the tool will use the one provided as a resource in the tool. |
| -pl |  | No | The complete path where the XBAP project to deploy is located. If not specified, the tool will use the package location where it is executed. |

<a name="mtm_clu"></a>
## Microsoft Test Manager Command-Line Utility

This tool creates and launches automated tests run on Microsoft Test 
Manager. It is based on a custom release management PowerShell script. The 
configuration variables of this tool are:

| **Parameter** | **Variable** | **Mandatory** | **Description** |
|---------------|--------------|---------------|-----------------|
| -command | N/A | Yes | Fixed value ./TcmExec.ps1. |
| -Title | TestRunTitle | Yes | The name that will be used when creating the test run. |
| -PlanId | PlanId | Yes | The identifier of the Test Plan under which the tests must run (Unique ID as defined in Test Manager). |
| -SuiteId | SuiteId | Yes | The identifier of the Suite that you want to run (Unique ID as defined in Test Manager). |
| -ConfigId | ConfigId | Yes | The identifier of the Test Configuration under which the tests must run (Unique ID as defined in Test Manager). |
| -Collection | TFSCollection | Yes | The Team Foundation Server Collection URL for which the automated tests will execute. |
| -TeamProject | TeamProject | Yes | The name of the project in which the automated tests were configured. |
| -TestEnvironment | TestEnvironment | Yes | The Test Environment in which the Tests are to be executed (the test environment is associated to a corresponding test controller). |
| -BuildDirectory | BuildDirectory | No\* | The location of the automated tests. In Microsoft Test Manager 2010, this parameter is required. In Microsoft Test Manager 2012 and 2013 this parameter is still supported, but you should preferably use BuildDefinition and BuildNumber parameters. |
| -BuildDefinition |  | No\* | Allows the user to specify the build definition in which the automated tests are included. This parameter can only be used with Microsoft Test Manager 2012. If defined, the BuildNumber parameter must also be specified. If not specified, the field "build" visible in the details of a test run will not be affected by the test run. |
| -BuildNumber |  | No\* | Allows the user to specify the build number whose drop location will contain the automated tests. This parameter can only be used under Microsoft Test Manager 2012. If defined, the BuildDefinition parameter must also be specified. If not specified, the field "build" visible in the details of a test run, will not be affected by the test run. |
| -SettingsName |  | No | Allows the user to specify the settings to use for the test run. If not specified, the default test settings will be used. |
| -TestRunWaitDelay |  | No | Allows the user to specify the delay, in seconds, between each call to the test controller. This is required to allow the test run to complete before processing the test results. If not specified, it will default to 10 seconds. |
| -InconclusiveFailsTests | N/A | No | When this flag is set, the existence of inconclusive tests will fail the deployment. By default, an inconclusive test will not fail the deployment. |
| -RemoveIncludeParameter | N/A | No | When this flag is set, the /include parameter will not be appended to the test creation command. This means that any tests that have a status different than Active will not be included in the test run. |
<p />
If the automated tests are included in the same build pipeline as the 
application being deployed, it is possible to use metadata as the variable 
value and it will be automatically replaced at release time. The following is 
the currently available metadata that can be used with configuration 
variables:

| **Variable** | **Variable Value Metadata** |
|---------------|--------------|---------------|-----------------|
| BuildDirectory | $(PackageLocation) |
| BuildNumber | $(BuildNumber) |
| BuildDefinition | $(BuildDefinition) |
| TFSCollection | $(TFSUrlWithCollection) |
| TeamProject | $(TeamProject) |

<a name="ini_fm"></a>
## INI File Manager

This tool modifies the content of a .ini file and can create a new .ini file 
if specified. It is based on a custom release management executable. The 
configuration variables of this tool are:

| **Parameter** | **Variable** | **Mandatory** | **Description** |
|---------------|--------------|---------------|-----------------|
| -Action |  | Yes | Indicate the action to be performed: **ModifySection**, **RemoveSection**, **CreateKeyValue**, **ModifyKeyValue**, **RemoveKeyValue** |
| -INIFile | INIFileName | Yes | The .ini file name and path (if required) |
| -SectionName | SectionName | No | The section name to affect. If not specified, the root section will be considered (all keys that are at the beginning of the file before the first section are considered in the root). |
| -NewSectionName |  | No | The new section name. If not specified, the root section will be considered (all keys that are at the beginning of the file before the first section are considered in the root). Required for ModifySection action. |
| -KeyName |  | No | The key name to affect. Required for CreateKeyValue, ModifyKeyValue and RemoveKeyValue. |
| -KeyValue |  | No | The value to use for the key. When using the ModifyKeyValue action and this parameter is not specified and the NewKeyName is specified, the system will use the actual value. If not specified and the NewKeyName is not specified, the value will be empty. |
| -NewKeyName |  | No | The new name to give to the key. Used only in the ModifyKeyValue action. |
| -CreateFileIfNotExists |  | No | Indicate to the tool that a file must be created if it does not exist. |

<a name="wproc"></a>
## Windows Process

This tool can kill a Windows Process. The configuration variables of this 
tool are:

| **Parameter** | **Variable** | **Mandatory** | **Description** |
|---------------|--------------|---------------|-----------------|
| -command | N/A | Yes | Fixed value ./WindowsProcess.ps1. |
| -ProcessName |  | Yes | The name of the Windows process to kill. |
| -UserName |  | No | The user account running the process. If not specified, the process will be killed for all users. |
| -IsKillProcessTree |  | No | Flag that indicates if the process tree must be killed. Allowed values are 1 (kill process tree) and 0 or empty (do not kill process tree). |

## Related topics

* [Release actions to deploy an app](../release-actions.md)
* [Overview of Release Management](../release-management-overview.md)
* [Install Release Management](../install-release-management.md)
* [Manage your release](../manage-your-release.md)
* [Release without deployment agents](../release-without-agents.md)
* [Release with deployment agents](../release-with-agents.md)
* [Trigger a release from a build](../trigger-a-release.md)
* [Deploy continuously to Azure](../deploy-continuously-to-azure.md)
 
[!INCLUDE [wpfver-back-to-index-shared](../../_shared/wpfver-back-to-index-shared.md)]
 
[!INCLUDE [wpfver-support-shared](../../_shared/wpfver-support-shared.md)]
