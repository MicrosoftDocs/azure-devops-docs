
> **Note:**
> These commands only work on SCVMM 2012 server, and are not supported on
> SCVMM 2008 R2 server.

Use the **TPCHostGroup** command to add or remove a host group from a
team project collection, or to modify the Lab Management settings of the
host group.

To run these commands, you must be a member of Team Project Collection
Administrators group in Team Foundation Server for the collection you
specify. In addition, you must be a member of Administrator or Delegated
Administrator role in the SCVMM Server from which you are adding the
host groups. Furthermore, you must ensure that no other team project
collection in any Team Foundation Server is already using the same SCVMM
host group.


    TfsLabConfig TPCHostGroup 
          /collection:collectionUrl
          [/add 
                /scvmmhostgroup:scvmmHostGroupPath
                /name:name
                [/dnssuffix:dnsSuffixForNetworkIsolation]
                [/autoprovision:{True|False}]]
          [/delete 
                /name:name
                [/noprompt]]
          [/edit 
                /name:hostGroupName
                [/autoprovision:{True|False}]
                [/dnssuffix:dnSuffixForNetworkIsolation]
                [/noprompt]]
          [/list]
          [/listscvmmhostgroups]


### Parameters


| Option | Description |
| --- | --- |
| **Collection**:*collectionUrl* | Required. The URL of the team project collection on the application tier of Team Foundation Server that contains the team project. For example, ```/collection:http://abc:8080/TFS/DefaultCollection```.  |
| **add** | Adds the specified host group to the team project collection. You must specify the /**collection**, /**scvmmhostgroup**, and name options with /**add**. |
| **scvmmhostgroup**: *scvmmHostGroupPath* | Required with /**add**. Specifies the fully qualified domain name (FDQN) of the VMM host group. The FQDN path can be found by using the VMM Admin Console. |
| **name**: *hostGroupName* | Required with /**add**. Specifies the name of the host group in the team project collection. |
| **dnsSuffix**: *dnsSuffixForNetworkIsolation* | Optional with /**add** or /**edit**. Specifies the DNS suffix that will be used to register the names of virtual machines on the isolated network for the virtual environments within this host group. To confirm that the suffix is configured correctly in the DNS hierarchy, contact your network administrator. |
| **autoProvision** : *True &#124; False* | Optional with /**add** or /**edit**. Specifies whether the host group is automatically assigned to each team project in the collection. By default, /autoProvision is set to True, and host group is automatically assigned to every team project in the collection. Note: The /**autoProvision** option affects existing team projects.|
| **Delete** | Removes the specified host group from the team project collection. You must specify the /**collection** and /**name** options. |
| **noPrompt** | Optional with /**add**, /**edit**, or /**delete**. Suppresses display progress and result data from the command window. |
| **edit** | Changes the Lab Management settings of the host group. You must specify the /**collection** and /**name** options. |
| **list** | Lists all host groups that are assigned to the specified team project collection. |
| **listVmmHostGroups** | Lists all host groups that are available in VMM. |
 

### Example

In this example, a host group is added to a team project collection:


    TFSLabConfig TPCHostGroup
          /collection:http://abc:8080/TFS/Collection0
          /name:HostGroup1

