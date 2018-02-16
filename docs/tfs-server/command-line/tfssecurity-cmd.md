---
title: Change groups and permissions with TFSSecurity
description: Change groups and permissions in VSTS and TFS from the command-line using TFSSecurity
ms.assetid: 58b780cb-9678-4d45-96dd-64447a6d5b17
ms.prod: vs-devops-alm
ms.technology: vs-devops-admin
ms.manager: douge
ms.author: elbatk
ms.date: 02/12/2018
---

# Change groups and permissions with TFSSecurity

**VSTS** | **TFS 2017** | **TFS 2015** | **TFS 2013**

You can use the **TFSSecurity** command-line tool to create, modify, and delete groups and users in Visual Studio Team Foundation Server (TFS), in addition to modifying permissions for groups and users. For information about how to perform these tasks in the user interface, see <span sdata="link"> Manage users or groups </span>.

This server-level tool is located in Drive:\\%programfiles%\\TFS 12.0\\Tools on the TFS application-tier server.

> Even if you are logged on with administrative credentials,
> you must open an elevated Command Prompt to perform this function.

## Use with VSTS
The **TFSSecurity** command-line tool can be used with Visual Studio Team Services (VSTS) as well. To use it for VSTS, use the same commands as TFS but replace the *CollectionURL* with your *AccountURL* (ServerURL is not applicable with VSTS). 

### Example:
```
tfssecurity /a+ Namespace Token Action Identity (ALLOW | DENY)[/collection:AccountURL]
```

> While this tool is supported, we recommend using our [Security REST API](https://docs.microsoft.com/en-us/rest/api/vsts/security/) when working with security groups and permissions in VSTS as our APIs are updated faster and more often.

## Permissions

<a id="aplus"></a>
### /a+: Add permissions
Use **/a+** to add permissions for a user or a group in a server-level, collection-level, or project-level group. To add users to groups from the user interface, see [Manage users or groups](https://msdn.microsoft.com/library/30493f4c-d3e6-42f0-bca2-2ad749246944).

```
tfssecurity /a+ Namespace Token Action Identity (ALLOW | DENY)[/collection:CollectionURL] [/server:ServerURL]
```

#### Required Permissions

To use the **/a+** command, you must have the View collection-level information or the View instance-level information permission set to Allow, depending on whether you are using the **/collection** or **/server** parameter, respectively. If you are changing permissions for a team project, you must also have the Edit project-level information permission for the team project set to Allow. For more information, see [Permission reference for Team Foundation Server](../../security/permissions.md).

#### Parameters

| Argument | Description |
| --- | --- |
| Namespace | The namespace that contains the group to which you want to add permissions for a user or group. You can also use the **tfssecurity /a** command to view a list of namespaces at the server, collection, and project level. |
| Token | The name or GUID of the object on which you want to add permissions.<br>**Note:** Tokens vary depending on the namespace you specify. Some namespaces do not have tokens that apply for this command. |
| Action | The name of the permission for which you are granting or denying access. For a list of valid IDs, see <a href="https://msdn.microsoft.com/library/39997de5-b7fb-4777-b779-07de0543abe6">Permission reference for Team Foundation Server</a>, or use the **tfssecurity /a** command to view a list of valid actions for a namespace that you specify. |
| Identity | The identity of the user or the group. For more information about identity specifiers, see [TFSSecurity Identity and Output Specifiers](#specifiers).<br><ul><li>**ALLOW**<br>The group or user can perform the operation that the Action specifies.</li><li>**DENY**<br>The group or user cannot perform the operation that the Action specifies.</li></ul> |
| **/collection** :CollectionURL | Required if **/server** is not used. Specifies the URL of a team project collection in the following format: **http://** ServerName **:** Port **/** VirtualDirectoryName **/** CollectionName |
| **/server** :ServerURL | Required if **/collection** is not used. Specifies the URL of an application-tier server in the following format: **http://** ServerName **:** Port **/** VirtualDirectoryName |

#### Remarks

Run this command on an application-tier server for Team Foundation.

Access control entries are security mechanisms that determine which operations a user, group, service, or computer is authorized to perform.

#### Examples

The following example displays what namespaces are available at the server level for the application-tier server that is named ADatumCorporation.

> [!NOTE]
> The examples are for illustration only and are fictitious. No real association is intended or inferred.

```
tfssecurity /a /server:ServerURL 
```

Sample output:

```
    TFSSecurity - Team Foundation Server Security Tool
    Copyright (c) Microsoft Corporation.  All rights reserved.

    The target Team Foundation Server is http://ADatumCorporation:8080/.

    The following security namespaces are available to have permissions set on them:

         Registry
         Identity
         Job
         Server
         CollectionManagement
         Warehouse
         Catalog
         EventSubscription
         Lab

    Done.
```

The following example displays what actions are available for the Server namespace at the collection level.

```
tfssecurity /a Server /collection:CollectionURL 
```

Sample output:

    TFSSecurity - Team Foundation Server Security Tool
    Copyright (c) Microsoft Corporation.  All rights reserved.

    The target Team Foundation Server is http://ADatumCorporation:8080/.

    The following actions are available in the security namespace Server:
        GenericRead
        GenericWrite
        Impersonate
        TriggerEvent

    Done.

The following example grants the server-level "View instance-level information" permission to the ADatumCorporation deployment for the Datum1 domain user John Peoples (Datum1\\jpeoples).

     tfssecurity /a+ Server FrameworkGlobalSecurity GenericRead n:Datum1\jpeoples ALLOW /server:http://ADatumCorporation:8080 

Sample output:

    TFSSecurity - Team Foundation Server Security Tool
    Copyright (c) Microsoft Corporation.  All rights reserved.

    The target Team Foundation Server is http://ADatumCorporation:8080/.
    Resolving identity "n:Datum1\jpeoples"...
      [U] Datum1\jpeoples (John Peoples)
    Adding the access control entry...
    Verifying...

    Effective ACL on object "FrameworkGlobalSecurity":
      [+] GenericRead                        [INSTANCE]\Team Foundation Valid Users
      [+] GenericRead                        [INSTANCE]\SharePoint Web Application Services
      [+] Impersonate                        [INSTANCE]\SharePoint Web Application Services
      [+] GenericRead                        [INSTANCE]\Team Foundation Service Accounts
      [+] GenericWrite                       [INSTANCE]\Team Foundation Service Accounts
      [+] Impersonate                        [INSTANCE]\Team Foundation Service Accounts
      [+] TriggerEvent                       [INSTANCE]\Team Foundation Service Accounts
      [+] GenericRead                        [INSTANCE]\Team Foundation Administrators
      [+] GenericWrite                       [INSTANCE]\Team Foundation Administrators
      [+] TriggerEvent                       [INSTANCE]\Team Foundation Administrators
      [+] GenericRead                        DATUM1\jpeoples

    Done.

The following example grants the collection-level "View collection-level information" permission to the Collection0 team project collection for Datum1 domain user John Peoples (Datum1\\jpeoples).

     tfssecurity /a+ Server FrameworkGlobalSecurity GenericRead n:Datum1\jpeoples ALLOW /collection:http://ADatumCorporation:8080/Collection0

Sample output:

    TFSSecurity - Team Foundation Server Security Tool
    Copyright (c) Microsoft Corporation.  All rights reserved.
    The target Team Foundation Server is http://ADatumCorporation:8080/COLLECTION0.
    Resolving identity "n:Datum1\jpeoples"...
      [U] DATUM1\jpeoples (John Peoples)
    Adding the access control entry...
    Verifying...

    Effective ACL on object "FrameworkGlobalSecurity":
      [+] GenericRead                        [Collection0]\Project Collection ValidUsers
      [+] GenericRead                        [Collection0]\Project Collection Service Accounts
      [+] GenericWrite                       [Collection0]\Project Collection Service Accounts
      [+] Impersonate                        [Collection0]\Project Collection Service Accounts
      [+] TriggerEvent                       [Collection0]\Project Collection Service Accounts
      [+] GenericRead                        [Collection0]\Project Collection Administrators
      [+] GenericWrite                       [Collection0]\Project Collection Administrators
      [+] TriggerEvent                       [Collection0]\Project Collection Administrators
      [+] GenericRead                        [INSTANCE]\SharePoint Web Application Services
      [+] Impersonate                        [INSTANCE]\SharePoint Web Application Services
      [+] GenericRead                        [Collection0]\Project Collection Build Service Accounts
      [+] GenericRead                        DATUM1\jpeoples

    Done.

<a id="aminus"></a>
### /a-: Remove a user or a group from membership in a group
Use the **/a-** command to remove a user or a group from membership in a server-level, collection-level, or project-level group. To add users to groups from the user interface, see [Manage users or groups](https://msdn.microsoft.com/library/30493f4c-d3e6-42f0-bca2-2ad749246944).

	tfssecurity /a- Namespace Token Action Identity (ALLOW | DENY) [/collection:CollectionURL] [/server:ServerURI]

#### Required Permissions

To use the **/a-** command, you must have the View collection-level information or the View instance-level information permission set to Allow, depending on whether you are using the **/collection** or **/server** parameter, respectively. If you are changing permissions for a team project, you must also have the Edit project-level information permission for the team project set to Allow.

#### Parameters

| Argument | Description |
| --- | --- |
| Namespace | The namespace that contains the group to which you want to remove permissions for a user or group. You can also use the **tfssecurity /a** command to view a list of namespaces at the server, collection, and project level. |
| Token | The name or GUID of the object on which you want to set permissions.<br>**Note:** Tokens vary depending on the namespace you specify. Some namespaces do not have tokens that apply for this command. |
| Action | The name of the permission for which you are granting or denying access. For a list of valid IDs, see <a href="https://msdn.microsoft.com/library/39997de5-b7fb-4777-b779-07de0543abe6">Permission reference for Team Foundation Server</a>, or use the **tfssecurity /a** command to view a list of valid actions for a namespace that you specify. |
| Identity | The identity of the user or the group. For more information about identity specifiers, see [TFSSecurity Identity and Output Specifiers](#specifiers).<br><ul><li>**ALLOW**<br>The group or user can perform the operation that the Action specifies.</li><li>**DENY**<br>The group or user cannot perform the operation that the Action specifies.</li></ul> |
| **/collection** :CollectionURL | Required if **/server** is not used. Specifies the URL of a team project collection in the following format: **http://** ServerName **:** Port **/** VirtualDirectoryName **/** CollectionName |
| **/server** :ServerURL | Required if **/collection** is not used. Specifies the URL of an application-tier server in the following format: **http://** ServerName **:** Port **/** VirtualDirectoryName |

#### Remarks

Run this command on an application-tier server for Team Foundation.

Access control entries are security mechanisms that determine which operations a user, group, service, or computer is authorized to perform on a computer or server.

#### Examples

The following example displays what namespaces are available at the server level for the application-tier server that is named ADatumCorporation.

> [!NOTE]
> The examples are for illustration only and are fictitious. No real association is intended or inferred.

     tfssecurity /a /server:ServerURL 

Sample output:

    TFSSecurity - Team Foundation Server Security Tool
    Copyright (c) Microsoft Corporation.  All rights reserved.

    The target Team Foundation Server is http://ADatumCorporation:8080/.

    The following security namespaces are available to have permissions set on them:

         Registry
         Identity
         Job
         Server
         CollectionManagement
         Warehouse
         Catalog
         EventSubscription
         Lab

    Done.

The following example displays what actions are available for the Server namespace at the collection level.

    tfssecurity /a Server /collection:CollectionURL 

Sample output:

    TFSSecurity - Team Foundation Server Security Tool
    Copyright (c) Microsoft Corporation.  All rights reserved.

    The target Team Foundation Server is http://ADatumCorporation:8080/.

    The following actions are available in the security namespace Server:
        GenericRead
        GenericWrite
        Impersonate
        TriggerEvent

    Done.

The following example removes the server-level "View instance-level information" permission to the ADatumCorporation deployment for the Datum1 domain user John Peoples (Datum1\\jpeoples).

    tfssecurity /a- Server FrameworkGlobalSecurity GenericRead n:Datum1\jpeoples ALLOW /server:http://ADatumCorporation:8080 

Sample output:

    TFSSecurity - Team Foundation Server Security Tool
    Copyright (c) Microsoft Corporation.  All rights reserved.

    The target Team Foundation Server is http://ADatumCorporation:8080/.
    Resolving identity "n:Datum1\jpeoples"...
      [U] Datum1\jpeoples (John Peoples)
    Removing the access control entry...
    Verifying...

    Effective ACL on object "FrameworkGlobalSecurity":
      [+] GenericRead                        [INSTANCE]\Team Foundation Valid Users
      [+] GenericRead                        [INSTANCE]\SharePoint Web Application Services
      [+] Impersonate                        [INSTANCE]\SharePoint Web Application Services
      [+] GenericRead                        [INSTANCE]\Team Foundation Service Accounts
      [+] GenericWrite                       [INSTANCE]\Team Foundation Service Accounts
      [+] Impersonate                        [INSTANCE]\Team Foundation Service Accounts
      [+] TriggerEvent                       [INSTANCE]\Team Foundation Service Accounts
      [+] GenericRead                        [INSTANCE]\Team Foundation Administrators
      [+] GenericWrite                       [INSTANCE]\Team Foundation Administrators
      [+] TriggerEvent                       [INSTANCE]\Team Foundation Administrators

    Done.

The following example removes the collection-level "View collection-level information" permission to the Collection0 team project collection for Datum1 domain user John Peoples (Datum1\\jpeoples).

    tfssecurity /a+ Server FrameworkGlobalSecurity GenericRead n:Datum1\jpeoples ALLOW /collection:http://ADatumCorporation:8080/Collection0

Sample output:

    TFSSecurity - Team Foundation Server Security Tool
    Copyright (c) Microsoft Corporation.  All rights reserved.
    The target Team Foundation Server is http://ADatumCorporation:8080/COLLECTION0.
    Resolving identity "n:Datum1\jpeoples"...
      [U] DATUM1\jpeoples (John Peoples)
    Removing the access control entry...
    Verifying...

    Effective ACL on object "FrameworkGlobalSecurity":
      [+] GenericRead                        [Collection0]\Project Collection ValidUsers
      [+] GenericRead                        [Collection0]\Project Collection Service Accounts
      [+] GenericWrite                       [Collection0]\Project Collection Service Accounts
      [+] Impersonate                        [Collection0]\Project Collection Service Accounts
      [+] TriggerEvent                       [Collection0]\Project Collection Service Accounts
      [+] GenericRead                        [Collection0]\Project Collection Administrators
      [+] GenericWrite                       [Collection0]\Project Collection Administrators
      [+] TriggerEvent                       [Collection0]\Project Collection Administrators
      [+] GenericRead                        [INSTANCE]\SharePoint Web Application Services
      [+] Impersonate                        [INSTANCE]\SharePoint Web Application Services
      [+] GenericRead                        [Collection0]\Project Collection Build Service Accounts

    Done.

<a id="acl"></a>
### /acl: Display the access control list

Use **/acl** to display the access control list that applies to a particular object.

	tfssecurity /acl Namespace Token [/collection:CollectionURL] [/server:ServerURL]

#### Required permissions

To use the **/acl** command, you must have the **View collection-level information**
or the **View instance-level information** permission set to **Allow**,
depending on whether you are using the **/collection** or **/server** parameter, respectively.
For more information, see [Permission reference for Team Foundation Server](../../security/permissions.md).

#### Parameters

| Argument | Description |
| --- | --- |
| Namespace | The namespace that contains the group to which you want to view permissions for a user or group. |
| Token | The name or GUID of the object on which you want to view permissions.<br>**Note:** Tokens vary depending on the namespace you specify. Some namespaces do not have tokens that apply for this command. |
| **/collection** :CollectionURL | Required if **/server** is not used. Specifies the URL of a team project collection in the following format: **http://** ServerName **:** Port **/** VirtualDirectoryName **/** CollectionName |
| **/server** :ServerURL | Required if **/collection** is not used. Specifies the URL of an application-tier server in the following format: **http://** ServerName **:** Port **/** VirtualDirectoryName |

#### Remarks  

Run this command on an application-tier server for Team Foundation.

Access control entries are security mechanisms that determine which operations a user, group, service, or computer is authorized to perform on a computer or server.

#### Examples  
 
The following example displays what users and groups have access to the FrameworkGlobalSecurity token in the Server namespace within the ADatumCorporation deployment.

> [!NOTE]
> The examples are for illustration only and are fictitious. No real association is intended or inferred.

	tfssecurity /acl Server FrameworkGlobalSecurity /server:ServerURL 

Sample output:

	TFSSecurity - Team Foundation Server Security Tool
	Copyright (c) Microsoft Corporation.  All rights reserved.
	The target Team Foundation Server is http://ADatumCorporation:8080/.
	Retrieving the access control list for object "Server"...

	Effective ACL on object "FrameworkGlobalSecurity":
	  [+] GenericRead                        [INSTANCE]\Team Foundation Valid Users
	  [+] GenericRead                        [INSTANCE]\SharePoint Web Application Services
	  [+] Impersonate                        [INSTANCE]\SharePoint Web Application Services
	  [+] GenericRead                        [INSTANCE]\Team Foundation Service Accounts
	  [+] GenericWrite                       [INSTANCE]\Team Foundation Service Accounts
	  [+] Impersonate                        [INSTANCE]\Team Foundation Service Accounts
	  [+] TriggerEvent                       [INSTANCE]\Team Foundation Service Accounts
	  [+] GenericRead                        [INSTANCE]\Team Foundation Administrators
	  [+] GenericWrite                       [INSTANCE]\Team Foundation Administrators
	  [+] TriggerEvent                       [INSTANCE]\Team Foundation Administrators
	  [+] GenericRead                        DATUM1\jpeoples

	Done.

	
## Groups

<a id="g"></a>
### /g: List the groups
Use **/g** to list the groups in a team project, in a team project collection, or across Team Foundation Server.

	tfssecurity /g [scope] [/collection:CollectionURL] [/server:ServerURL]

#### Required Permissions

To use the **/g** command, you must have the View collection-level information or the View instance-level information permission set to Allow, depending on whether you are using the **/collection** or **/server** parameter, respectively. To use the /g command within the scope of a single team project, you must have the View project-level information permissions set to Allow. For more information, see [Permission reference for Team Foundation Server](https://msdn.microsoft.com/library/39997de5-b7fb-4777-b779-07de0543abe6).

#### Parameters

|Argument|Description|
|---|---|
|scope|Optional. Specifies the URI of the team project for which you want to display groups. To obtain the URI for a team project, open Team Explorer, right-click the team project, click Properties, and copy the entire entry for URL.|
|**/collection** :CollectionURL|Required if **/server** is not used. Specifies the URL of a team project collection in the following format: **http://** ServerName **:** Port **/** VirtualDirectoryName **/** CollectionName|
|**/server** :ServerURL|Required if **/collection** is not used. Specifies the URL of an application-tier server in the following format: **http://** ServerName **:** Port **/** VirtualDirectoryName|

#### Remarks

Run this command on an application-tier server for Team Foundation.

The **/g** command of the **TFSSecurity** command-line utility displays information about every group within the selected scope. This scope can be the team project collection (**/server**) or the application-tier server (**/instance**). If used with the scope of a team project, it will display information only about the groups associated with that team project.

#### Example

The following example displays information for all the groups within a team project collection.

    tfssecurity /g /collection:CollectionURL

<a id="gplus"></a>
### /g+: Add a user or another group to an existing group
Use **/g+** to add a user or another group to an existing group.

	tfssecurity /g+ groupIdentity memberIdentity [/collection:CollectionURL] [/server:ServerURL]

#### Required Permissions

To use the **/g+** command, you must have the View collection-level information and Edit collection-level information or the View instance-level information and Edit instance-level information permissions set to Allow, depending on whether you are using the /collection or /server parameter, respectively. For more information, see [Permission reference for Team Foundation Server](https://msdn.microsoft.com/library/39997de5-b7fb-4777-b779-07de0543abe6).

#### Parameters

|Argument|Description|
|---|---|
|groupIdentity|Specifies the group identity. For more information on valid identity specifiers, see [TFSSecurity Identity and Output Specifiers](#specifiers).|
|memberIdentity|Specifies the member identity. For more information on valid identity specifiers, see [TFSSecurity Identity and Output Specifiers](#specifiers).|
|**/collection** :CollectionURL|Required if **/server** is not used. Specifies the URL of a team project collection in the following format: **http://** ServerName **:** Port **/** VirtualDirectoryName **/** CollectionName|
|**/server** :ServerURL|Required if **/collection** is not used. Specifies the URL of an application-tier server in the following format: **http://** ServerName **:** Port **/** VirtualDirectoryName|

#### Remarks

Run this command on an application-tier server for Team Foundation.

You can also add users and groups to an existing group using Team Explorer. For more information, see [Add Users to a Collection-Level Group](https://msdn.microsoft.com/library/65e3df75-0700-47d2-9877-5a16e3065d22).

#### Examples

The following example adds the Datum1 domain user John Peoples (Datum1\\jpeoples) to the Team Foundation Administrators group.

> [!NOTE]
> The examples are for illustration only and are fictitious. No real association is intended or inferred.

    tfssecurity /g+ "Team Foundation Administrators" n:Datum1\jpeoples /server:http://ADatumCorporation:8080

Sample output:

    TFSSecurity - Team Foundation Server Security Tool
    Copyright (c) Microsoft Corporation.  All rights reserved.

    The target Team Foundation Server is http://ADatumCorporation:8080/.
    Resolving identity "Team Foundation Administrators"...
    a [A] [INSTANCE]\Team Foundation Administrators
    Resolving identity "n:Datum1\jpeoples"...
      [U] DATUM1\jpeoples (John Peoples)
    Adding John Peoples to [INSTANCE]\Team Foundation Administrators...
    Verifying...

    SID: S-1-9-XXXXXXXXXX-XXXXXXXXXX-XXXXXXXXXX-XXXXXXXXXX-0-0-0-0-1

    DN:

    Identity type: Team Foundation Server application group
       Group type: AdministrativeApplicationGroup
    Project scope: Server scope
     Display name: [INSTANCE]\Team Foundation Administrators
      Description: Members of this group can perform all operations on the Team Foundation Application Instance.

    4 member(s):
      [U] Datum1\hholt (Holly Holt)
      [U] Datum1\jpeoples (John Peoples)
      [G] BUILTIN\Administrators (BUILTIN\Administrators)
    s [A] [INSTANCE]\Team Foundation Service Accounts

    Member of 2 group(s):
    a [A] [Collection0]\Project Collection Administrators
    e [A] [INSTANCE]\Team Foundation Valid Users

    Done.

<a id="gminus"></a>
### /g-: Remove a user or group

Use **/g-** to remove a user or a user group from an existing group.

	tfssecurity /g- groupIdentity memberIdentity [/collection:CollectionURL] [/server:ServerURL]

#### Required Permissions

To use the **/g-** command, you must have the View collection-level information and Edit collection-level information or the View instance-level information and Edit instance-level information permissions set to Allow, depending on whether you are using the **/collection** or **/server** parameter, respectively. For more information, see [Permission reference for Team Foundation Server](https://msdn.microsoft.com/library/39997de5-b7fb-4777-b779-07de0543abe6).

#### Parameters

|Argument|Description|
|---|---|
|groupIdentity|Specifies the group identity. For more information about valid identity specifiers, see [TFSSecurity Identity and Output Specifiers](#specifiers).|
|memberIdentity|Specifies the member identity. For more information about valid identity specifiers, see [TFSSecurity Identity and Output Specifiers](#specifiers).|
|**/collection** :CollectionURL|Required if **/server** is not used. Specifies the URL of a team project collection in the following format: **http://** ServerName **:** Port **/** VirtualDirectoryName **/** CollectionName|
|**/server** :ServerURL|Required if **/collection** is not used. Specifies the URL of an application-tier server in the following format: **http://** ServerName **:** Port **/** VirtualDirectoryName|

#### Remarks

Run this command on an application-tier server for Team Foundation.

You can also add users and groups to an existing group using Team Explorer. For more information, see [Remove Users from a Team Project Group](https://msdn.microsoft.com/library/a4af4029-0202-4b56-8053-40b3a8c0f175), [Remove Users from a Default Group](https://msdn.microsoft.com/library/4e495381-f55a-480e-b7a0-da221ad0ae1a) or [Remove Users from a Collection-Level Group](https://msdn.microsoft.com/library/1c4b2566-3381-4d7a-ba50-e4633abf617d).

#### Examples

The following example removes the Datum1 domain user John Peoples (Datum1\\jpeoples) from the Team Foundation Administrators group.

> [!NOTE]
> The examples are for illustration only and are fictitious. No real association is intended or inferred.

    tfssecurity /g- "Team Foundation Administrators" n:Datum1\jpeoples /server:http://ADatumCorporation:8080

Sample output:

    TFSSecurity - Team Foundation Server Security Tool
    Copyright (c) Microsoft Corporation.  All rights reserved.

    The target Team Foundation Server is http://ADatumCorporation:8080/.
    Resolving identity "Team Foundation Administrators"...
    a [A] [INSTANCE]\Team Foundation Administrators
    Resolving identity "n:Datum1\jpeoples"...
      [U] DATUM1\jpeoples (John Peoples)
    Removing John Peoples from [INSTANCE]\Team Foundation Administrators...
    Verifying...

    SID: S-1-9-XXXXXXXXXX-XXXXXXXXXX-XXXXXXXXXX-XXXXXXXXXX-0-0-0-0-1

    DN:

    Identity type: Team Foundation Server application group
       Group type: AdministrativeApplicationGroup
    Project scope: Server scope
     Display name: [INSTANCE]\Team Foundation Administrators
      Description: Members of this group can perform all operations on the Team Foundation Application Instance.

    3 member(s):
      [U] Datum1\hholt (Holly Holt)
      [G] BUILTIN\Administrators (BUILTIN\Administrators)
    s [A] [INSTANCE]\Team Foundation Service Accounts

    Member of 2 group(s):
    a [A] [Collection0]\Project Collection Administrators
    e [A] [INSTANCE]\Team Foundation Valid Users

    Done.

<a id="gc"></a>
### /gc: Create a project-level group
Use **/gc** at a command prompt to create a project-level group. To create a project-level group from the user interface, see <span sdata="link"> Manage users or groups </span>.

	tfssecurity /gc Scope GroupName [GroupDescription] [/collection:CollectionURL]

#### Required Permissions

To use the **/gc** command, you must have the Edit Project-Level Information permission for that team project set to Allow. For more information, see <span sdata="link"> Permission reference for Team Foundation Server </span>.

#### Parameters

|Argument|Description|
|---|---|
|Scope|The URI of the team project to which you want to add a project-level group. To obtain the URI for a team project, connect to it, and open Team Explorer, hover over the name of the project in Home, and read the address. Alternatively, connect to the project in Web Access and copy the URL.|
|GroupName|The name of the new group.|
|GroupDescription|A description of the project group. Optional.|
|**/collection** :CollectionURL|The URL of the team project collection. Required. The group will be created within the team project collection. The format for the URL is **http://** ServerName **:** Port **/** VirtualDirectoryName **/** CollectionName|

#### Remarks

Run this command on an application-tier server for Team Foundation.

A project-level group is a security group for your team project. You can use project groups to grant read, write, and administrative permissions that meet the security requirements of your organization.

#### Example

The following example creates a group that is specific to the project that the URI "vstfs://Classification/TeamProject/00000000-0000-0000-0000-000000000000" specifies. The group is named "Test Group" and has the description "This group is for testing."

> [!NOTE]
> The examples are for illustration only and are fictitious. No real association is intended or inferred.

You must replace the placeholder GUID with the URI of the team project for which you want to create this group. To obtain the URI for a team project, open Team Explorer, right-click the team project, click Properties, and copy the entire value of the URL property.

After you run the command, you can verify the group in Team Explorer. Right-click the team project that you used in the command, click Team Project Settings, and then click Group Memberships. In the Project Groups on  TeamProjectName dialog box, the Groups list includes Test Group .

> [!NOTE]
> You can use the **/gc** command to create groups but not to add any users to the groups or assign any permissions. To change the membership of the group, see [/g+: Add a user or another group to an existing group](#gplus) and [/g-: Remove a user or group](#gminus). To change the permissions for the group, see [/a+: Add permissions](#aplus) and [/a-: Remove a user or a group from membership in a group](#aminus).

    tfssecurity /gc "vstfs:///Classification/TeamProject/00000000-0000-0000-0000-000000000000" "Test Group"
		"This group is for team members who test our code" /collection:CollectionURL

<a id="gcg"></a>
### /gcg: Create a server or collection-level group
Use the **/gcg** command to create a server-level or collection-level group. To create a server-level or collection-level group from the user interface, see [Manage users or groups](https://msdn.microsoft.com/library/30493f4c-d3e6-42f0-bca2-2ad749246944).

	tfssecurity /gcg GroupName [GroupDescription] [/collection:CollectionURL] [/server:ServerURL]

#### Required Permissions

To use the **/gcg** command, you must have the Edit project-level information permission for that team project set to Allow. For more information, see [Permission reference for Team Foundation Server](https://msdn.microsoft.com/library/39997de5-b7fb-4777-b779-07de0543abe6).

#### Parameters

|Argument|Description|
|---|---|
|GroupName|The group name.|
|GroupDescription|A description of the group. Optional.|
|**/collection** :CollectionURL|Required if **/server** is not used. Specifies the URL of a team project collection in the following format: **http://** ServerName **:** Port **/** VirtualDirectoryName **/** CollectionName|
|**/server** :ServerURL|Required if **/collection** is not used. Specifies the URL of an application-tier server in the following format: **http://** ServerName **:** Port **/** VirtualDirectoryName|

#### Remarks

Run this command on an application-tier server for Team Foundation.

Server-level groups are created directly on the application tier and apply to all team project collections. Collection-level are created at the team project collection level. They apply to that collection and have implications for all team projects within the collection. In contrast, team project groups apply to a specific project within a collection but not any other projects in that collection. You can assign permissions to server-level groups so that members of those groups can perform tasks in Team Foundation Server (TFS) itself, such as creating team project collections. You can assign permissions to collection-level groups so that members of those groups can perform tasks across a team project collection, such as administering users.

> [!NOTE]
> You can use the <b>/gcg</b> command to create groups, but you cannot use it to add any users to the groups or assign any permissions. For information about how to change the membership of a group, see [/g+: Add a user or another group to an existing group](#gplus) and [/g-: Remove a user or group](#gminus). For information about how to change the permissions for the group, see [/a+: Add permissions](#aplus) and [/a-: Remove a user or a group from membership in a group](#aminus).

#### Example

The following example creates a collection-level group that is named "Datum Testers" with the description "A. Datum Corporation Testers."

> [!NOTE]
> The examples are for illustration only and are fictitious. No real association is intended or inferred.

    tfssecurity /gcg "Datum Testers" "A. Datum Corporation Testers" /collection:CollectionURL

The following example creates a server-level group that is named "Datum Auditors" with the description "A. Datum Corporation Auditors."

    tfssecurity /gcg "Datum Auditors" "A. Datum Corporation Auditors" /server:ServerURL

<a id="gd"></a>
### /gd: Delete a server or collection-level group
Use **/gd** to delete a server-level or collection-level group.

	tfssecurity /gd groupIdentity [/collection:CollectionURL] [/server:ServerURL]

#### Required Permissions

To use the **/gd** command, you must have the View collection-level information and Edit collection-level information or the View instance-level information and Edit instance-level information permissions set to Allow, depending on whether you are using the **/collection** or **/server** parameter, respectively. For more information, see [Permission reference for Team Foundation Server](https://msdn.microsoft.com/library/39997de5-b7fb-4777-b779-07de0543abe6).

#### Parameters

|Argument|Description|
|---|---|
|groupIdentity|Specifies the group identity. |
|**/collection** :CollectionURL|Required if **/server** is not used. Specifies the URL of a team project collection in the following format: **http://** ServerName **:** Port **/** VirtualDirectoryName **/** CollectionName|
|**/server** :ServerURL|Required if **/collection** is not used. Specifies the URL of an application-tier server in the following format: **http://** ServerName **:** Port **/** VirtualDirectoryName|

#### Remarks

Run this command on an application-tier server for Team Foundation.

You can also remove groups on Team Explorer. For more information, see [Remove a Collection-Level Group](https://msdn.microsoft.com/library/68582caf-aa57-47a0-924a-6de7f541c246) and [Remove a Team Project Group](https://msdn.microsoft.com/library/dfb686ca-5a8b-4da9-bd00-6d68ae85f9fa).

#### Example

The following example deletes a group from the team project collection. The group is identified by "S-1-5-21-2127521184-1604012920-1887927527-588340", the security identifier (SID). For more information about finding the SID of a group, see [/im: Display information about identities that compose direct membership](#im). You can also use the friendly name to delete a group.

> [!NOTE]
> The examples are for illustration only and are fictitious. No real association is intended or inferred.

    tfssecurity /gd S-1-5-21-2127521184-1604012920-1887927527-588340 /collection:CollectionURL

<a id="gud"></a>
### /gud: Change the description for a server or collection-level group
Use **/gud** to change the description for a server-level or collection-level group.

	tfssecurity /gud GroupIdentity GroupDescription [/collection:CollectionURL] [/server:ServerURL]

#### Required Permissions

To use the **/gud** command, you must have the Edit project-level information permission set to Allow. For more information, see [Permission reference for Team Foundation Server](https://msdn.microsoft.com/library/39997de5-b7fb-4777-b779-07de0543abe6).

#### Parameters

|Argument|Description|
|---|---|
|GroupIdentity|Specifies the group identity. For more information about valid identity specifiers, see [TFSSecurity Identity and Output Specifiers](#specifiers).|
|GroupDescription|Specifies the new description for the group.|
|**/collection** :CollectionURL|Required if **/server** is not used. Specifies the URL of a team project collection in the following format: **http://** ServerName **:** Port **/** VirtualDirectoryName **/** CollectionName|
|**/server** :ServerURL|Required if **/collection** is not used. Specifies the URL of an application-tier server in the following format: **http://** ServerName **:** Port **/** VirtualDirectoryName|

#### Remarks

Run this command on an application-tier server for Team Foundation.

#### Example

The following example associates the description "The members of this group test the code for this project" with the group "Datum Testers."

> [!NOTE]
> The examples are for illustration only and are fictitious. No real association is intended or inferred.

    tfssecurity /gud "Datum Testers" "The members of this group test the code for this project" /collection:CollectionURL

<a id="gun"></a>
### /gun: Rename a group
Use **/gun** to rename a server-level or collection-level group.

	tfssecurity /gun GroupIdentity GroupName [/collection:CollectionURL] [/server:ServerURL]

#### Required Permissions

To use the **/gun** command, you must have the View collection-level information and Edit collection-level information or the View instance-level information and Edit instance-level information permissions set to Allow, depending on whether you are using the **/collection** or **/server** parameter, respectively. For more information, see [Permission reference for Team Foundation Server](https://msdn.microsoft.com/library/39997de5-b7fb-4777-b779-07de0543abe6)>.

#### Parameters

|Argument|Description|
|---|---|
|GroupIdentity|Specifies the group identity. For more information about valid identity specifiers, see [TFSSecurity Identity and Output Specifiers](#specifiers).|
|GroupName|Specifies the new name of the group.|
|**/collection** :CollectionURL|Required if **/server** is not used. Specifies the URL of a team project collection in the following format: **http://** ServerName **:** Port **/** VirtualDirectoryName **/** CollectionName|
|**/server** :ServerURL|Required if **/collection** is not used. Specifies the URL of an application-tier server in the following format: **http://** ServerName **:** Port **/** VirtualDirectoryName|

#### Remarks

Run this command on an application-tier server for Team Foundation.

#### Example

The following example renames the collection-level group "A. Datum Corporation Testers" to "A. Datum Corporation Test Engineers."

> [!NOTE]
> The examples are for illustration only and are fictitious. No real association is intended or inferred.

    tfssecurity /gun "A. Datum Corporation Testers" "A. Datum Corporation Test Engineers" /collection:CollectionURL

## Identities and membership

<a id="i"></a>
### /i: Display identity information for a specified group
Use **/i** to display identity information for a specified group in a deployment of Team Foundation Server.

	tfssecurity /i Identity [/collection:CollectionURL] [/server:ServerURL]

#### Required Permissions

To use the **/i** command, you must have the View collection-level information or the View instance -level information permission set to Allow, depending on whether you are using the /collection or /server parameter, respectively. For more information, see <[Permission reference for Team Foundation Server](https://msdn.microsoft.com/library/39997de5-b7fb-4777-b779-07de0543abe6).

#### Parameters

|Argument|Description|
|---|---|
|Identity|The identity of the user or the application group. For more information about identity specifiers, see [TFSSecurity Identity and Output Specifiers](#specifiers).|
|**/collection** :CollectionURL|Required if **/server** is not used. Specifies the URL of a team project collection in the following format: **http://** ServerName **:** Port **/** VirtualDirectoryName **/** CollectionName|
|**/server** :ServerURL|Required if **/collection** is not used. Specifies the URL of an application-tier server in the following format: **http://** ServerName **:** Port **/** VirtualDirectoryName|

#### Remarks

Run this command on an application-tier server for Team Foundation.

The **/i** command of the **TFSSecurity** command-line utility displays information about each group within the team project collection (/server) or the application-tier server (/instance). It does not display any membership information.

#### Examples

The following example displays identity information for the "Team Foundation Administrators" group.

> [!NOTE]
> The examples are for illustration only and are fictitious. No real association is intended or inferred.

    tfssecurity /i "Team Foundation Administrators" /server:ServerURL 

Sample output:

    Resolving identity "Team Foundation Administrators"...

    SID: S-1-9-XXXXXXXXXX-XXXXXXXXXX-XXXXXXXXXX-XXXXXXXXXX-0-0-0-0-1

    DN:

    Identity type: Team Foundation Server application group
       Group type: AdministrativeApplicationGroup
    Project scope: Server scope
     Display name: Team Foundation Administrators
      Description: Members of this application group can perform all privileged operations on the server.

The following example displays identity information for the Project Collection Administrators group using the adm: identity specifier.

    tfssecurity /i adm: /collection:CollectionURL 

Sample output:

    Resolving identity "adm:"...

    SID: S-1-9-XXXXXXXXXX-XXXXXXXXXX-XXXXXXXXXX-XXXXXXXXXX-0-0-0-0-1

    DN:

    Identity type: Team Foundation Server application group
       Group type: AdministrativeApplicationGroup
    Project scope: Server scope
     Display name: [DatumOne]\Project Collection Administrators
      Description: Members of this application group can perform all privileged operations on the team project collection.

The following example displays identity information for the Project Administrators group for the "Datum" project by using the adm: identity specifier.

    tfssecurity /i adm:vstfs:///Classification/TeamProject/ProjectGUID /collection:CollectionURL 

Sample output:

    Resolving identity "adm:vstfs:///Classification/TeamProject/ProjectGUID"...

    SID: S-1-9-XXXXXXXXXX-XXXXXXXXXX-XXXXXXXXXX-XXXXXXXXXX-0-0-0-0-1

    DN:

    Identity type: Team Foundation Server application group
       Group type: AdministrativeApplicationGroup
    Project scope: Datum
     Display name: [Datum]\Project Administrators
      Description: Members of this application group can perform all operations in the team project.

<a id="im"></a>
### /im: Display information about identities that compose direct membership
Use **/im** to display information about the identities that compose the direct membership of a group that you specify.

	tfssecurity /im Identity [/collection:CollectionURL] [/server:ServerURL]

#### Required Permissions

To use the **/im** command, you must have the View collection-level information or the View instance-level information permission set to Allow, depending on whether you are using the /collection or /server parameter, respectively. For more information, see [Permission reference for Team Foundation Server](https://msdn.microsoft.com/library/39997de5-b7fb-4777-b779-07de0543abe6).

#### Parameters

|Argument|Description|
|---|---|
|Identity|The identity of the user or the group. For more information about identity specifiers, see [TFSSecurity Identity and Output Specifiers](#specifiers).|
|**/collection** :CollectionURL|Required if **/server** is not used. Specifies the URL of a team project collection in the following format: **http://** ServerName **:** Port **/** VirtualDirectoryName **/** CollectionName|
|**/server** :ServerURL|Required if **/collection** is not used. Specifies the URL of an application-tier server in the following format: **http://** ServerName **:** Port **/** VirtualDirectoryName|

#### Remarks

Run this command on an application-tier server for Team Foundation.

The **/im** command of **TFSSecurity** displays the direct members of the specified group only. This list includes other groups that are members of the specified group. However, the actual members of the member groups are not listed.

#### Examples

The following example displays direct membership identity information for the "Team Foundation Administrators" group in the domain "Datum1" at the fictitious company "A. Datum Corporation".

> [!NOTE]
> The examples are for illustration only and are fictitious. No real association is intended or inferred.

    tfssecurity /im "Team Foundation Administrators" /server:ServerURL

Sample output:

    Resolving identity "Team Foundation Administrators"...

    SID: S-1-9-XXXXXXXXXX-XXXXXXXXXX-XXXXXXXXXX-XXXXXXXXXX-0-0-0-0-1

    DN:

    Identity type: Team Foundation Server application group
    Group type: AdministrativeApplicationGroup
    Project scope: Server scope
    Display name: Team Foundation Administrators
    Description: Members of this application group can perform all privileged operations on the server.

    3 member(s):
      [U] Datum1\hholt (Holt, Holly)
      [G] BUILTIN\Administrators (BUILTIN\Administrators)
    s [A] [InstanceName]\Team Foundation Service Accounts

    Member of 2 group(s):
    a [A] [DatumOne]\Project Collection Administrators ([DatumOne]\Project Collection Administrators)
    e [A] [InstanceName]\Team Foundation Valid Users

    Done.

The following example displays identity information for the Project Collection Administrators group in the "DatumOne" team project collection in the domain "Datum1" at the fictitious company "A. Datum Corporation" by using the adm: identity specifier.

    tfssecurity /im adm: /collection:CollectionURL 

Sample output:

    Resolving identity "adm: "...

    SID: S-1-9-XXXXXXXXXX-XXXXXXXXXX-XXXXXXXXXX-XXXXXXXXXX-0-0-0-0-1

    DN:

    Identity type: Team Foundation Server application group
    Group type: AdministrativeApplicationGroup
    Project scope: Server scope
    Display name: [DatumOne]\Project Collection Administrators
    Description: Members of this application group can perform all privileged operations on the team project collection.

    5 member(s):
      [U] Datum1\jpeoples (Peoples, John)
      [U] Datum1\hholt (Holt, Holly)
      [G] BUILTIN\Administrators (BUILTIN\Administrators)
    a [A] [InstanceName]\Team Foundation Administrators
    s [A] [DatumOne]\Project Collection Service Accounts ([DatumOne]\Project Collection Service Accounts)

    Member of 1 group(s):
    e [A] [DatumOne]\Project Collection Valid Users ([DatumOne]\Project Colleciton Valid Users)

    Done.

The following example displays identity information for the Project Administrators group for the "Datum" project in the "DatumOne" team project collection in the domain "Datum1" at the fictitious company "A. Datum Corporation" using the adm: identity specifier.

    tfssecurity /im adm:vstfs:///Classification/TeamProject/ProjectGUID /collection:CollectionURL 

Sample output:

    Resolving identity "adm:vstfs:///Classification/TeamProject/ProjectGUID"...

    SID: S-1-9-XXXXXXXXXX-XXXXXXXXXX-XXXXXXXXXX-XXXXXXXXXX-XXXXXXX

    DN:

    Identity type: Team Foundation Server application group
    Group type: AdministrativeApplicationGroup
    Project scope: Datum
    Display name: [Datum]\Project Administrators
    Description: Members of this application group can perform all operations in the team project.

    2 member(s):
      [U] Datum1\jpeoples (Peoples, John)
      [U] Datum1\hholt (Holt, Holly)

    Member of 1 group(s):
    e [A] [DatumOne]\Project Collection Valid Users ([DatumOne]\Project Collection Valid Users)

    Done.

<a id="imx"></a>
### /imx: Display information about the identities that the expanded membership
Use **/imx** to display information about the identities that compose the expanded membership of a specified group.

	tfssecurity /imx Identity [/collection:CollectionURL] [/server:ServerURL]

#### Required Permissions

To use the **/imx** command, you must have the View collection-level information or the View instance-level information permission set to Allow, depending on whether you are using the **/collection** or **/server** parameter, respectively. For more information, see [Permission reference for Team Foundation Server](https://msdn.microsoft.com/library/39997de5-b7fb-4777-b779-07de0543abe6).

#### Parameters

|Argument|Description|
|---|---|
|Identity|The identity of the user or the group. For more information about identity specifiers, see [TFSSecurity Identity and Output Specifiers](#specifiers).|
|**/collection** :CollectionURL|Required if **/server** is not used. Specifies the URL of a team project collection in the following format: **http://** ServerName **:** Port **/** VirtualDirectoryName **/** CollectionName|
|**/server** :ServerURL|Required if **/collection** is not used. Specifies the URL of an application-tier server in the following format: **http://** ServerName **:** Port **/** VirtualDirectoryName|

#### Remarks

Run this command on an application-tier server for Team Foundation.

The **/imx** command of **TFSSecurity** displays the expanded members of the specified group only. This list includes not only other groups that are members of the specified group but also the members of the member groups.

#### Examples

The following example displays expanded membership identity information for the "Team Foundation Administrators" group in the domain "Datum1" at the fictitious company "A. Datum Corporation".

> [!NOTE]
> The examples are for illustration only and are fictitious. No real association is intended or inferred.

    tfssecurity /imx "Team Foundation Administrators" /server:ServerURL

Sample output:

    Resolving identity "Team Foundation Administrators"...

    SID: S-1-9-XXXXXXXXXX-XXXXXXXXXX-XXXXXXXXXX-XXXXXXXXXX-0-0-0-0-1

    DN:

    Identity type: Team Foundation Server application group
    Group type: AdministrativeApplicationGroup
    Project scope: Server scope
    Display name: Team Foundation Administrators
    Description: Members of this application group can perform all privileged operations on the server.

    10 member(s):
      [U] Datum1\hholt (Holly Holt)
      [U] Datum1\jpeoples (John Peoples)
      [U] Datum1\tommyh (Tommy Hartono)
      [U] Datum1\henriea (Henriette Andersen)
      [U] Datum1\djayne (Darcy Jayne)
      [U] Datum1\aprilr (April Reagan)
      [G] Datum1\InfoSec Secure Environment
      [U] Datum1\nbento (Nuno Bento)
      [U] Datum1\cristp (Cristian Petculescu)
      [G] BUILTIN\Administrators (BUILTIN\Administrators)
    s [A] [InstanceName]\Team Foundation Service Accounts

    Member of 3 group(s):
    a [A] [DatumOne]\Project Collection Administrators ([DatumOne]\Project Collection Administrators)
    e [A] [DatumOne]\Project Collection Valid Users ([DatumOne]\Project Collection Valid Users)
    e [A] [InstanceName]\Team Foundation Valid Users

    Done.

The following example displays identity information for the Project Collection Administrators group in the "DatumOne" team project collection in the domain "Datum1" at the fictitious company "A. Datum Corporation" using the adm: identity specifier.

    tfssecurity /imx adm: /collection:CollectionURL 

Sample output:

    Resolving identity "adm: "...

    SID: S-1-9-XXXXXXXXXX-XXXXXXXXXX-XXXXXXXXXX-XXXXXXXXXX-0-0-0-0-1

    DN:

    Identity type: Team Foundation Server application group
    Group type: AdministrativeApplicationGroup
    Project scope: Server scope
    Display name: [DatumOne]\Project Collection Administrators
    Description: Members of this application group can perform all privileged operations on the team project collection.

    6 member(s):
      [U] Datum1\jpeoples (Peoples, John)
      [U] Datum1\hholt (Holt, Holly)
      [G] BUILTIN\Administrators (BUILTIN\Administrators)
    a [A] [InstanceName]\Team Foundation Administrators
    s [A] [InstanceName]\Team Foundation Service Accounts
    s [A] [DatumOne]\Project Collection Service Accounts ([DatumOne]\Project Collection Service Accounts)

    Member of 1 group(s):
    e [A] [DatumOne]\Project Collection Valid Users ([DatumOne]\Project Collection Valid Users)

    Done.

The following example displays identity information for the Project Administrators group for the "Datum" project in the "DatumOne" team project collection in the domain "Datum1" at the fictitious company "A. Datum Corporation" using the adm: identity specifier.

    tfssecurity /imx adm:vstfs:///Classification/TeamProject/ProjectGUID /collection:CollectionURL 

Sample output:

    Resolving identity "adm:vstfs:///Classification/TeamProject/ProjectGUID"...

    SID: S-1-9-XXXXXXXXXX-XXXXXXXXXX-XXXXXXXXXX-XXXXXXXXXX-XXXXXXX

    DN:

    Identity type: Team Foundation Server application group
    Group type: AdministrativeApplicationGroup
    Project scope: Datum
    Display name: [Datum]\Project Administrators
    Description: Members of this application group can perform all operations in the team project.

    2 member(s):
      [U] Datum1\jpeoples (Peoples, John)
      [U] Datum1\hholt (Holt, Holly)

    Member of 2 group(s):
    e [A] [DatumOne]\Project Collection Valid Users ([DatumOne]\Project Collection Valid Users)
    e [A] [InstanceName]\Team Foundation Valid Users

    Done.

For more information about the output specifiers, such as [G] and [U], see [TFSSecurity Identity and Output Specifiers](#specifiers).

<a id="m"></a>
### /m: Check explicit and implicit group membership
Use **/m** to check explicit and implicit group membership information for a specified group or user.

	tfssecurity /m GroupIdentity [MemberIdentity] [/collection:CollectionURL] [/server:ServerURL]

#### Required Permissions

To use the **/m** command, you must be a member of the Team Foundation Administrators security group. For more information, see [Permission reference for Team Foundation Server](https://msdn.microsoft.com/library/39997de5-b7fb-4777-b779-07de0543abe6).

> [!NOTE]
> Even if you are logged on with administrative credentials, you must open an elevated Command Prompt to perform this function.

#### Parameters

|Argument|Description|
|---|---|
|GroupIdentity|Specifies the group identity. For more information on valid identity specifiers, see [TFSSecurity Identity and Output Specifiers](#specifiers).|
|MemberIdentity|Specifies the member identity. By default, the value of this argument is the identity of the user who is running the command. For more information on valid identity specifiers, see [TFSSecurity Identity and Output Specifiers](#specifiers).|
|**/collection** :CollectionURL|Required if **/server** is not used. Specifies the URL of a team project collection in the following format: **http://** ServerName **:** Port **/** VirtualDirectoryName **/** CollectionName|
|**/server** :ServerURL|Required if **/collection** is not used. Specifies the URL of an application-tier server in the following format: **http://** ServerName **:** Port **/** VirtualDirectoryName|

#### Remarks

Run this command on the local application-tier computer.

The **/m** command of the **TFSSecurity** command-line utility checks both direct and extended memberships.

#### Examples

The following example verifies whether the user "Datum1\\jpeoples" belongs to the Team Foundation Administrators server-level group.

> [!NOTE]
> The examples are for illustration only and are fictitious. No real association is intended or inferred.

```cmdline
tfssecurity /m "Team Foundation Administrators" n:Datum1\jpeoples /server:http://ADatumCorporation:8080
```

Sample output:

    TFSSecurity - Team Foundation Server Security Tool
    Copyright (c) Microsoft Corporation.  All rights reserved.

    The target Team Foundation Server is http://ADatumCorporation:8080/.
    Resolving identity "Team Foundation Administrators"...
    a [A] [INSTANCE]\Team Foundation Administrators
    Resolving identity "n:Datum1\jpeoples"...
      [U] DATUM1\jpeoples (John Peoples)
    Checking group membership...

    John Peoples IS a member of [INSTANCE]\Team Foundation Administrators.

    Done.

<a id="permissions"></a>
## Permission namespaces and actions

<a id="server-level-permissions"></a>
### Server level

|Permission|Namespace|Action|
|---|---|---|
|[Administer warehouse](../../security/permissions.md#administer-warehouse-permission)|Warehouse|Administer|
|[Create team project collection](../../security/permissions.md#create-team-project-collection-permission)|CollectionManagement|CreateCollection|
|[Delete team project collection](../../security/permissions.md#delete-team-project-collection-permission)|CollectionManagement|DeleteCollection|
|[Edit instance-level information](../../security/permissions.md#edit-instance-level-information-permission)|Server|GENERIC_WRITE<br /><br />tf: AdminConfiguration<br /><br />tf: AdminConnections|
|[Make requests on behalf of others](../../security/permissions.md#make-requests-on-behalf-of-others-permission)|Server|Impersonate|
|[Trigger events](../../security/permissions.md#trigger-events-permission)|Server|TRIGGER_EVENT|
|[Use full Web Access features](../../security/permissions.md#use-full-web-access-features-permission)|Server|FullAccess|
|[View instance-level information](../../security/permissions.md#view-instance-level-information-permission)|Server|GENERIC_READ|
|[Publish extensions](../../extend/publish/overview.md)| Publisher| **For TFS 2017 or earlier**:<br />Create<br/>Publish<br />Write<br /><br />**For TFS 2017**:<br />CreatePublisher<br />PublishExtension<br />UpdateExtension<br />DeleteExtensions<br />|

<a id="collection-level-permissions"></a>
### Collection level

|Permission|Namespace|Action|
|---|---|---|
|[Administer build resource permissions](../../security/permissions.md#administer-build-resource-permissions-permission)|BuildAdministration|AdministerBuildResourcePermissions|
|[Administer Project Server integration](../../security/permissions.md#administer-Project-Server-integration-permission)|ProjectServerAdministration|AdministerProjectServer|
|[Administer shelved changes](../../security/permissions.md#administer-shelved-changes-permission)|VersionControlPrivileges|AdminShelvesets<br /><br />tf: AdminShelvesets|
|[Administer workspaces](../../security/permissions.md#administer-workspaces-permission)|VersionControlPrivileges|AdminWorkspaces<br /><br />tf: AdminWorkspaces|
|[Alter trace settings](../../security/permissions.md#alter-trace-settings-permission)|Collection|DIAGNOSTIC_TRACE|
|[Create a workspace](../../security/permissions.md#create-a-workspace-permission)|VersionControlPrivileges|tf: CreateWorkspace|
|[Create new projects](../../security/permissions.md#create-new-team-projects-permission)|Collection|CREATE_PROJECTS|
|[Delete team project](../../security/permissions.md#delete-team-project-permission)|Project|Delete|
|[Edit collection-level information](../../security/permissions.md#edit-collection-level-information-permission)|Collection<br /><br />VersionControlPrivileges|GENERIC_WRITE<br /><br />tf: AdminConfiguration<br /><br />tf: AdminConnections|
|[Make requests on behalf of others](../../security/permissions.md#make-requests-on-behalf-of-others-permission)|Server|Impersonate|
|[Manage build resources](../../security/permissions.md#manage-build-resources-permission)|BuildAdministration|ManageBuildResources|
|[Manage process template](../../security/permissions.md#manage-process-template-permission)|Collection|MANAGE_TEMPLATE|
|[Manage test controllers](../../security/permissions.md#manage-test-controllers-permission)|Collection|MANAGE_TEST_CONTROLLERS|
|[Trigger events](../../security/permissions.md#trigger-events-permission)|Collection|TRIGGER_EVENT|
|[Use build resources](../../security/permissions.md#use-build-resources-permission)|BuildAdministration|UseBuildResources|
|[View build resources](../../security/permissions.md#view-build-resources-permission)|BuildAdministration|ViewBuildResources|
|[View collection-level information](../../security/permissions.md#view-collection-level-information-permission)|Collection|GENERIC_READ|
|[View system synchronization information](../../security/permissions.md#view-system-synchronization-information-permission)|Collection|SYNCHRONIZE_READ|
|Can create a SOAP-based web service subscription. |EventSubscription|CREATE_SOAP_SUBSCRIPTION|
|Can view subscription events defined for a team project. |EventSubscription|GENERIC_READ|
|Can create alerts for other users or for a team. |EventSubscription|GENERIC_WRITE|
|Can unsubscribe from an event subscription. |EventSubscription|UNSUBSCRIBE|

<a id="team-project-level-permissions"></a>
### Team project level

|Permission|Namespace|Action|
|---|---|---|
|[Create tag definition](../../security/permissions.md#create-tag-definition-permission)|Tagging|Create|
|[Create test runs](../../security/permissions.md#create-test-runs-permission)|Project| PUBLISH_TEST_RESULTS
|[Delete team project](../../security/permissions.md#delete-team-project-permission)|Project|DELETE|
|[Delete work items](../../security/permissions.md#delete-work-items-in-this-project-permission) (TFS 2015.2)| Project | WORK_ITEM_DELETE | 
|[Delete test runs](../../security/permissions.md#delete-test-runs-permission)|Project|DELETE_TEST_RESULTS|
|[Edit project-level information](../../security/permissions.md#edit-team-project-level-information-permission)|Project|GENERIC_WRITE|
|[Move work items out of this project](../../security/permissions.md#move-work-items-out-of-this-project-permission) (TFS 2015.2)| Project| WORK_ITEM_MOVE | 
|[Manage test configurations](../../security/permissions.md#manage-test-configurations-permission)|Project|MANAGE_TEST_CONFIGURATIONS|
|[Manage test environments](../../security/permissions.md#manage-test-environments-permission)|Project|MANAGE_TEST_ENVIRONMENTS|
|[Permanently delete (destroy) work items in this project](../../security/permissions.md#permanently-delete-work-items-in-this-project-permission) (TFS 2015.2)| Project | WORK_ITEM_PERMANENTLY_DELETE | 
|[View project-level information](../../security/permissions.md#view-team-project-level-information-permission)|Project|GENERIC_READ|
|[View test runs](../../security/permissions.md#view-test-runs-permission)|Project|VIEW_TEST_RESULTS|

<a id="build-permissions"></a>
### Build

|Permission|Namespace|Action|
|---|---|---|
|[Administer build permissions](../../security/permissions.md#administer-build-permissions-permission)|Build|AdministerBuildPermissions|
|[Delete build definition](../../security/permissions.md#delete-build-definition-permission)|Build|DeleteBuildDefinition|
|[Delete builds](../../security/permissions.md#delete-builds-permission)|Build|DeleteBuilds|
|[Destroy builds](../../security/permissions.md#destroy-builds-permission)|Build|DestroyBuilds|
|[Edit build definition](../../security/permissions.md#edit-build-definition-permission)|Build|EditBuildDefinition|
|[Edit build quality](../../security/permissions.md#edit-build-quality-permission)|Build|EditBuildDefinition|
|[Manage build qualities](../../security/permissions.md#manage-build-qualities-permission)|Build|ManageBuildQualities|
|[Manage build queue](../../security/permissions.md#manage-build-queue-permission)|Build|ManageBuildQueue|
|[Override check-in validation by build](../../security/permissions.md#override-check-in-validation-by-build-permission)|Build|OverrideBuildCheckInValidation|
|[Queue builds](../../security/permissions.md#queue-builds-permission)|Build|QueueBuilds|
|[Retain indefinitely](../../security/permissions.md#retain-indefinitely-permission)|Build|RetainIndefinitely|
|[Stop builds](../../security/permissions.md#stop-builds-permission)|Build|StopBuilds|
|[Update build information](../../security/permissions.md#update-build-information-permission)|Build|UpdateBuildInformation|
|[View build definition](../../security/permissions.md#view-build-definition-permission)|Build|ViewBuildDefinition|
|[View builds](../../security/permissions.md#view-builds-permission)|Build|ViewBuilds|

<a id="work-item-query-permissions"></a>
### Work item query

|Permission|Namespace|Action|
|---|---|---|
|[Contribute](../../security/permissions.md#workitemqueryfolders-contribute-permission)|WorkItemQueryFolders|CONTRIBUTE|
|[Delete](../../security/permissions.md#workitemqueryfolders-delete-permission)|WorkItemQueryFolders|DELETE|
|[Manage permissions](../../security/permissions.md#workitemqueryfolders-manage-permissions-permission)||MANAGEPERMISSIONS|
|[Read](../../security/permissions.md#workitemqueryfolders-read-permission)|WorkItemQueryFolders|READ|

<a id="tagging-permissions"></a>
### Tagging

|Permission|Namespace|Action|
|---|---|---|
|[Create tag definition](../../security/permissions.md#create-tag-definition-permission)|Tagging|CREATE|
|[Delete tag definition](../../security/permissions.md#delete-tag-definition-permission)|Tagging|DELETE|
|[Enumerate tag definition](../../security/permissions.md#enumerate-tag-definition-permission)|Tagging|ENUMERATE|
|[Update tag definition](../../security/permissions.md#update-tag-definition-permission)|Tagging|UPDATE|


<a id="area-permissions"></a>
### Area

|Permission|Namespace|Action|
|---|---|---|
|[Create child nodes](../../security/permissions.md#area-create-child-nodes-permission)|CSS|CREATE_CHILDREN|
|[Delete this node](../../security/permissions.md#area-delete-this-node-permission)|CSS|DELETE|
|[Edit this node](../../security/permissions.md#area-edit-this-node-permission)|CSS|GENERIC_WRITE|
|[Edit work items in this node](../../security/permissions.md#area-edit-work-items-in-this-node-permission)|CSS|WORK_ITEM_WRITE|
|[Manage test plans](../../security/permissions.md#area-manage-test-plans-permission)|CSS|MANAGE_TEST_PLANS|
|[Manage test suites](../../security/permissions.md#area-manage-test-suites-permission)|CSS|MANAGE_TEST_SUITES|
|[View permissions for this node](../../security/permissions.md#area-view-permissions-for-this-node-permission)|CSS|GENERIC_READ|
|[View work items in this node](../../security/permissions.md#area-view-work-items-in-this-node-permission)|CSS|WORK_ITEM_READ|

<a id="iteration-permissions"></a>
### Iteration

|Permission|Namespace|Action|
|---|---|---|
|[Create child nodes](../../security/permissions.md#iteration-create-child-nodes-permission)|Iteration|CREATE_CHILDREN|
|[Delete this node](../../security/permissions.md#iteration-delete-this-node-permission)|Iteration|DELETE|
|[Edit this node](../../security/permissions.md#iteration-edit-this-node-permission)|Iteration|GENERIC_WRITE|
|[View permissions for this node](../../security/permissions.md#iteration-view-permissions-for-this-node-permission)|Iteration|GENERIC_WRITE|

<a id="tfvc-permissions"></a>
### TFVC

|Permission|Namespace|Action|
|---|---|---|
|[Administer labels](../../security/permissions.md#administer-labels-permission)|VersionControlItems|LabelOthers|
|[Check in](../../security/permissions.md#check-in-permission)|VersionControlItems|Checkin|
|[Check in other users' changes](../../security/permissions.md#check-in-other-users-changes-permission)|VersionControlItems|CheckinOther|
|[Check out](../../security/permissions.md#check-out-permission)|VersionControlItems|PendChange|
|[Label](../../security/permissions.md#label-permission)|VersionControlItems|Label|
|[Lock](../../security/permissions.md#lock-permission)|VersionControlItems|Lock|
|[Manage branch](../../security/permissions.md#manage-branch-permission)|VersionControlItems|ManageBranch|
|[Manage permissions](../../security/permissions.md#manage-permissions-permission)|VersionControlItems|AdminProjectRights|
|[Merge](../../security/permissions.md#merge-permission)|VersionControlItems|VersionControlItems|
|[Read](../../security/permissions.md#read-permission)|VersionControlItems||
|[Revise other users' changes](../../security/permissions.md#revise-other-users-changes-permission)|VersionControlItems|ReviseOther|
|[Undo other users' changes](../../security/permissions.md#undo-other-users-changes-merge-permission)|VersionControlItems|UndoOther|
|[Unlock other users'-changes](../../security/permissions.md#unlock-other-users-changes-permission)|VersionControlItems|UnlockOther|

<a id="git-repo-permissions"></a>
### Git repository

TFS 2017 Update 1 and later

|Permission|Namespace|Action|
|---|---|---|
|[Contribute](../../security/permissions.md#git-contribute-permission)|GitRepositories|GenericContribute|
|[Contribute to Pull Requests](../../security/permissions.md#git-contribute-to-pull-requests-permission)|GitRepositories|PullRequestContribute|
|[Create Branch](../../security/permissions.md#git-create-branch-permission)|GitRepositories|CreateBranch|
|[Create Repository](../../security/permissions.md#git-create-repository-permission)|GitRepositories|CreateRepository|
|[Create Tag](../../security/permissions.md#git-create-tag-permission)|GitRepositories|CreateTag|
|[Delete Repository](../../security/permissions.md#git-delete-repository-permission)|GitRepositories|DeleteRepository|
|[Edit Policies](../../security/permissions.md#git-edit-policies-permission)|GitRepositories|EditPolicies|
|[Exempt From Policy Enforcement](../../security/permissions.md#git-repository)|GitRepositories|PolicyExempt|
|[Force Push (Rewrite History and Delete Branches)](../../security/permissions.md#git-force-push-permission)|GitRepositories|ForcePush|
|[Manage Notes](../../security/permissions.md#git-repository)|GitRepositories|ManageNote|
|[Manage Permissions](../../security/permissions.md#git-repository)|GitRepositories|ManagePermissions|
|[Read](../../security/permissions.md#git-read-permission)|GitRepositories|GenericRead|
|[Remove Others' Locks](../../security/permissions.md#git-remove-others-locks-permission)|GitRepositories|RemoveOthersLocks|
|[Rename Repository](../../security/permissions.md#git-rename-repository-permission)|GitRepositories|RenameRepository|

TFS 2017 RTM and earlier

|Permission|Namespace|Action|
|---|---|---|
|[Administer](../../security/git-permissions-before-2017.md#git-administer-permission)|GitRepositories|Administer|
|[Branch Creation](../../security/git-permissions-before-2017.md#git-branch-creation-permission)|GitRepositories|CreateBranch|
|[Contribute](../../security/git-permissions-before-2017.md#git-contribute-permission)|GitRepositories|GenericContribute|
|[Note Management](../../security/git-permissions-before-2017.md#git-note-management-permission)|GitRepositories|ManageNote|
|[Read](../../security/git-permissions-before-2017.md#git-read-permission)|GitRepositories|GenericRead|
|[Rewrite and destroy history (force push)](../../security/git-permissions-before-2017.md#git-rewrite-and-destroy-history-permission)|GitRepositories|ForcePush|
|[Tag Creation](../../security/git-permissions-before-2017.md#git-tag-creation-permission)|GitRepositories|CreateTag|

<a id="specifiers"></a>
## Identity specifiers

You can reference an identity by using one of the notations in the following table.

|Identity specifier|Description|Example|
|---|---|---|
|**sid:** Sid.|References the identity that has the specified security identifier (SID).|**sid:S-1-5-21-2127521184-1604012920-1887927527-588340**|
|**n:**[D omain\]Name|References the identity that has the specified name. For Windows, Name is the account name. If the referenced identity is in a domain, the domain name is required. For application groups, Name is the group display name, and Domain is the URI or GUID of the containing project. In this context, if Domain is omitted, the scope is assumed to be at the collection level.|To reference the identity of the user &quot;John Peoples&quot; in the domain &quot;Datum1&quot; at the fictitious company &quot;A. Datum Corporation:&quot;<br /><br />**n:DATUM1\jpeoples**<br /><br />To reference application groups:<br /><br />**n:&quot;Full-time Employees&quot;**<br /><br />**n:00a10d23-7d45-4439-981b-d3b3e0b0b1ee\Vendors**|
|**adm:**[Scope]|References the administrative application group for the scope, such as &quot;Team Foundation Administrators&quot; for the server level or &quot;Project Collection Administrators&quot; at the collection level. The optional parameter Scope is a project URI or URL, including its GUID and connection string. If scope is omitted, the server or collection scope is assumed based on whether the /instance or /server parameter is used. In either case, the colon is still required.|**adm:vstfs:///Classification/TeamProject/** GUID|
|**srv:**|References the application group for service accounts.|Not applicable|
|**all:**|References all groups and identities.|Not applicable|
|String|References an unqualified string. If String starts with **S-1-**, it is identified as a SID. If String starts with **CN=** or **LDAP://** it is identified as a distinguished name. Otherwise, String is identified as a name.|&quot;Team testers&quot;|

## Type Markers

The following markers are used to identify types of identities and ACEs in output messages.

### Identity type markers 

|Identity type marker|Description|
|---|---|
|**U**|Windows user.|
|**G**|Windows group.|
|**A**|Team Foundation Server (TFS) application group.|
|**a \[** A **\]**|Administrative application group.|
|**s \[** A **\]**|Service account application group.|
|**X**|Identity is not valid.|
|**?**|Identity is unknown.|

 
### Access control entry markers 

|Access control entry marker|Description|
|---|---|
|**+**|ALLOW access control entry.|
|**-**|DENY access control entry.|
|**\* \[\]**|Inherited access control entry.|
