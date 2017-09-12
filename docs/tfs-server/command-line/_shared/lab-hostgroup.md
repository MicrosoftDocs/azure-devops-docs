Use the **TfsConfig Lab /HostGroup** commands to add, edit, or delete
the assignment of a System Center Virtual Machine Manager (SCVMM) host group to a team project collection.
Host groups that are assigned in this manner are managed by Visual Studio Lab Management.

	TfsConfig Lab /hostgroup /CollectionName:collectionName
      { /Add 
            /SCVMMHostGroup:vmmHostPath 
            /Name:name 
            [LabEnvironmentPlacementPolicy:{Conservative|Aggressive}]
            [/AutoProvision:{True|False}]
            [/DNSSuffix:dnsSuffix]
       | /Delete 
            /Name:name
            [/NoPrompt]
       | /Edit 
            /Name:name
            {[/AutoProvision:{True|False}] 
            [/LabEnvironmentPlacementPolicy:{Conservative|Aggressive}] 
            [/DNSSuffix:dnsSuffix]}
            [/NoPrompt]]
       | /List
       | /ListSCVmmHostGroups }

<table><thead>
<tr><th><p>Option</p></th><th><p>Description</p></th></tr></thead><tbody>
<tr>
	<td><p><strong>CollectionName:</strong> collectionName</p></td>
	<td><p>Required. The name of the team project collection on the application-tier Team Foundation Server.</p></td></tr>
<tr>
	<td><p><strong>Add</strong></p></td>
	<td><p>Adds the specified SCVMM host group to the team project collection host groups. You must specify the <strong>/SCVmmHostGroup</strong> and <strong>/Name</strong> options with <strong>Add</strong>.</p></td></tr>
<tr>
	<td><p><strong>Delete</strong></p></td>
	<td><p>Removes the specified host group from the team project collection. You must specify the <strong>/Name</strong> option with <strong>Delete</strong>.</p></td></tr>
<tr>
	<td><p><strong>Edit</strong></p></td>
	<td><p>Sets one or both of the Lab Management <strong>AutoProvision</strong> and <strong>LabEnvironmentPlacementPolicy</strong> properties for the host group.</p><p>You must specify the <strong>/Name</strong> option and at least one of the <strong>/AutoProvision</strong> or <strong>/LabEnvironmentPlacementPolicy</strong> options with <strong>Edit</strong>.</p></td></tr>
<tr>
	<td><p><strong>SCVMMHostGroup:vmmH</strong> ostGroupPath</p></td>
	<td><p>Required with the <strong>/Add</strong> option. Specifies the host path of the SCVMM host group.</p></td></tr>
<tr>
	<td><p><strong>Name:</strong> name</p></td>
	<td><p>Required with the <strong>/Add</strong>, <strong>/Delete</strong>, or <strong>/Edit</strong> options. Specify the name of the team project collection host group to add, delete, or edit.</p></td></tr>
<tr>
	<td><p><strong>AutoProvision:</strong>{<strong>True</strong>|<strong>False</strong>}</p></td>
	<td><p>Optional with the <strong>/Add</strong> or <strong>/Edit</strong> options. Sets (<strong>True</strong>) or clears (<strong>False</strong>) the AutoProvision property of the host group. <strong>AutoProvision</strong> specifies whether the host group is automatically assigned to each team project in the collection. By default, host groups are assigned to the team projects in a collection when you use the <strong>TfsConfig Lab/HostGroup</strong> command.</p></td></tr>
<tr>
	<td><p><strong>LabEnvironmentPlacementPolicy:</strong>{<strong>Conservative</strong>|<strong>Aggressive</strong>}</p></td>
	<td><p>Optional with the <strong>/Add</strong> or <strong>/Edit</strong> options. Specifies how Lab Management treats the physical machines in a host group on which it deploys new virtual lab environments.</p><ul><li><p><strong>Conservative</strong> (Default). Consider non-running virtual environments in deployment decisions. This includes all virtual machines which are part of environments which are in &quot;Stopped&quot; state also.</p></li><li><p><strong>Aggressive</strong> Do not consider non-running virtual environments in deployment decisions.</p></li></ul></td></tr>
<tr>
	<td><p><strong>DNSSuffix:</strong>[dnsSuffix]</p></td>
	<td><p>Optional. Sets or the DNS suffix of the virtual computers in the host group.</p><ul><li><p>If the <strong>/DNSSuffix:</strong> option is specified without a dnsSuffix value, sets or resets the DNS suffix the suffix of the virtual computers to the suffix of the host computer in the host group.</p></li><li><p>If the <strong>/DNSSuffix</strong> option is not specified with the <strong>/Add</strong> option, the suffix of virtual computers are set to the suffixes of the their host computers in the host group.</p></li><li><p>If the <strong>/DNSSuffix</strong> option is not specified with the <strong>/Edit</strong> option, the suffix of virtual computers is not changed.</p></li></ul></td></tr>
<tr>
	<td><p><strong>NoPrompt</strong></p></td>
	<td><p>Optional with the <strong>/Delete</strong> or <strong>/Edit</strong> options. Do not prompt user for confirmation.</p></td></tr>
<tr>
	<td><p><strong>List</strong></p></td>
	<td><p>Displays the host groups assigned to the team project collection.</p></td></tr>
<tr>
	<td><p><strong>ListSCVmmHostGroups</strong></p></td>
	<td><p>Displays the host groups available from SCVMM.</p></td></tr></tbody>
</table>

### Remarks

Host groups are containers that an administrator creates within SCVMM to group a set of virtual machine hosts for easy management.
Host groups are hierarchical; a host group can contain other host groups.

Each host group is identified by its host path, a sequence of host group names that specifies
the location of a host or host group within the hierarchy of host groups in SCVMM.
All host paths begin with the root host group.
For example, the host path `All Hosts\\New York\\Site21\\VMHost05` indicates that the host
VMHost05 belongs to the host group Site21, which is a child host group of the host group New York.

Use only one of the **/Add**, **/Delete**, or **/Edit** options on a command line. Use separate **TfsConfig Lab /HostGroup** command lines to assign multiple host groups to a team project collection.

You can also use **TfsConfig Lab /HostGroup** commands to set properties that are specific to Lab Management:

-   AutoProvision specifies whether the host group is assigned to each team project in the team project collection.
By default, AutoProvision is on.
To assign a host group in a project collection to an individual team project,
use the [TFSLabConfig CreateTeamProjectHostGroup Command](../tfslabconfig-cmd.md#createteamprojecthostgroup).

    -   **True** (Default). The host group is assigned to each team project in the team project collection.

    -   **False**. The host group is not assigned to each team project in the team project collection.

-   LabEnvironmentPlacementPolicy specifies whether Lab Management considers the existing virtual machines when it deploys new environments on a physical machine in a host group.

    -   **Conservative** (Default). Consider non-running virtual environments in deployment decisions. This includes all virtual machines that are part of environments and that are in "Stopped" state also.

    -   **Aggressive** Do not consider non-running virtual environments in deployment decisions.

-   **DNSSuffix** specifies a DNS suffix to use for the virtual computers created in the host group. The following table describes how the DNS suffixes of virtual computers are affected by the /DNSSuffix setting.

|DNSSuffix|/Add|/Edit|
|---|---|---|
|**DNSSuffix:** dnsValue|The DNS suffix is set to dnsValue.|The DNS suffix is set to dnsValue.|
|**DNSSuffix:**|The DNS suffix is inherited from host computer.|The existing suffix value is removed and the DNS suffix is inherited from host computer.|
|&lt;Not Specified&gt;|The DNS suffix is inherited from host computer.|DNS suffix not changed.|

### Example

In the following example a SCVMM host group is assigned to a team project collection.
Because the **/AutoProvision** options is not specified, the host group is automatically assigned to all team projects in the collection.

    tfsconfig lab /hostgroup /add /scvmmhostgroup:"All Hosts\Lab1\HostGroup1" /collection:Collection0
		/name:Lab1Collection0_Lab1_HostGroup1
