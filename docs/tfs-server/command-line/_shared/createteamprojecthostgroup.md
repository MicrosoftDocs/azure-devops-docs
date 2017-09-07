
Use the **CreateTeamProjectHostGroup** command to assign a 
*host group* from a team project collection to an
individual team project in the collection. Host groups specify one or
more physical machines that are the deployment targets for virtual
environments in Visual Studio Lab Management. Host groups are created in
System Center Virtual Machine Manager (SCVMM) and assigned to a project
collection by Visual Studio Lab Management. Use separate
**CreateTeamProjectHostGroup** commands to assign multiple host groups
to a team project. 

> **Note:**
> You can automatically assign a host group to all the projects in a team
> project collection when you assign the host group to the team project
> collection. See [TFSConfig Lab /HostGroup Commands](lab-hostgroup.md)
> and [How to: Change the Host Groups for Your Team Project Collections](https://msdn.microsoft.com/en-us/library/dd386364(v=vs.120).aspx).

**Required Permissions**

To use the **CreateTeamProjectHostGroup** command, you must have the
**Manage Lab Locations** permission at the Team Project Collection Host
Group level. By default, the members of the Team Foundation Server
Administrators and Project Collection Administrators groups have this
permission. For more information, see [Permission reference for Team Foundation Server](../../../security/permissions.md).


    TFSLabConfig CreateTeamProjectHostGroup
          /Collection:collectionUrl
          /TeamProject:{* |teamProjectName}
          /TeamProjectCollectionHostGroup:(* |teamProjectCollectionHostGroupName}
          /Name:teamProjectHostGroupName
          [/Description:teamProjectHostGroupDescription]
          [/NoPrompt]

### Parameters

| Option | Description |
| --- | --- |
| **Collection**:*collectionUrl* | Required. The URL of the team project collection on the application tier of Team Foundation Server that contains the team project. For example, ```/collection:http://abc:8080/TFS/DefaultCollection```.  |
| **TeamProject:**{ * &#124; *teamProjectName*} | Required. The name of the team project. Use quotation marks if there are spaces in the name. Use an asterisk (* ) to assign the specified host group to all team projects in the collection. |
| **TeamProjectCollectionHostGroup:**{ * &#124; *teamProjectCollectionHostGroupName*} |
| **Name:** *teamProjectHostGroupName* | Required. The name to assign to the host group in the team project. |
| **Description:** *teamProjectHostGroupDescription* | Optional. A description of the team project host group. |
| **NoPrompt** | Optional. Do not prompt the user for confirmation. |


### Example 

For increased readability in the example, command options are listed on
separate lines. In a command prompt window, type all options for a
command on the same line.

In the first example, all the host groups in the team project collection
are assigned to each team project in the collection. In the second
example, one host group in the team project collection is assigned to a
specific team project.

    REM First example
    TFSLabConfig CreateTeamProjectHostGroup
           /collection:http://abc:8080/TFS/Collection0
           /teamProject:*
           /teamProjectCollectionHostGroup:*
    REM Second example
    TFSLabConfig CreateTeamProjectHostGroup
           /collection:http://abc:8080/TFS/Collection0
           /teamProject:Project1
           /teamProjectCollectionHostGroup:tpchg1
           /name:hg1
