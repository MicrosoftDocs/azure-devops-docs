The **TfsConfig Lab /DNS** command adds, deletes, or displays DNS records that were created by Visual Studio Lab Management for network-isolated environments.

	TfsConfig Lab /DNS 
	{/Add | /Delete | /List}
	    [/CollectionName:collectionName |
	    / CollectionName:collectionName /TeamProject:projectName |
	    / CollectionName:collectionName /TeamProject:projectName /LabEnvironment:environmentUri |
	    /Name:FQDN /IP:IpAddress]
	    [/NoPrompt]


|Option|Description|
|---|---|
|**Add**|Adds the specified DNS records. To use the **/Add** option, the targeted environments must be running.|
|**Delete**|Removes the specified DNS records.|
|**List**|Displays the specified DNS records.|
|**LabEnvironment:** environmentUri|Targets the **/Add**, **/Delete**, or **/List** options to an individual network-isolated environment that is specified by environmentUri.<br /><br />To use the **LabEnvironment** option, you must also specify the **/Collection** and **/TeamProject** options.|
|**TeamProject:** projectName|When used without **/LabEnvironment**, targets the **/Add**, **/Delete**, or **/List** options to all of the network-isolated environments in the team project that is specified by projectName. Otherwise, **/TeamProject** specifies the team project that contains the environment.<br /><br />To use the **/TeamProject** option, you must also specify the **/Collection** option|
|**CollectionName:** collectionName|When used without **/TeamProject**, targets the **/Add**, **/Delete**, or **/List** options to all of the network-isolated environments in the team project collection that is specified by collectionName. Otherwise, **/Collection** specifies the team project collection that contains the team project.|
|**Name:** FQDN|Specifies the fully qualified domain name of the network location that contains the environment to target.<br /><br />You must specify the **/Name** and **/IP** options together.|
|**IP:** IPAddress|Specifies the IP address of the environment to target.<br /><br />You must specify the **/Name** and **/IP** options together.|

### Remarks

Team Foundation Server uses the suffix you enter when it registers a unique external name with DNS for each virtual machine in a network-isolated environment.
The DNS alias record makes it possible for machines and other objects outside the isolated network to communicate with machines inside the isolated network.
Because Team Foundation Server goes into the DNS zone to register the alias record, the service account under which Team Foundation runs must have permissions to add or delete alias records in the specified DNS zone.

If your Team Foundation Server deployment has more than one application tier and each application tier runs under a different service account,
then each application-tier service account must have permission to edit the DNS alias records created by the other application tiers.

>**Note:**  
>DNS record management is performed automatically by Lab Management. You should use the **/DNS** command only in the following situations:
>
>-   You change the account under which Visual Studio Team Foundation Server (TFS) runs.
>-   You move a team project collection from one instance of Team Foundation Server to another.
>
>In both these cases, the DNS records that were created by using the old TFS service account have to be removed, and then the same DNS records have to be re-created by using the new TFS service account. If these steps are not performed in the previous scenarios, the new TFS service account will not be able to perform automatic management of those DNS records. As a result, users will not be able connect to virtual environments.

Specify only one of the **/Add**, **/Delete**, or **/List** options on a **TfsConfig Lab /DNS** command line. If you do not specify any target options, the operation acts on all virtual machines of all network isolated environments that belong to all project collections in the Team Foundation Server database.

To target the DNS entries of network isolated environments of an object in the Lab Management object hierarchy, use the appropriate combination of **/Collection**, **/TeamProject**, and **/LabEnvironment** options

-   The **/LabEnvironment** option targets the command to the specified network-isolated environment. You must use the **/CollectionName** and **/TeamProject** options with the **/LabEnvironment** option to specify the team project collection and the team project that contain the environment.

    Use the format **vstfs:///LabManagement/LabEnvironment/** environmentID to specify the environment URI. You can view the environment identifier (environmnetID) in the Environment Viewer of Lab Management or from the description of the virtual machine in SCVMM Administrator Console.

-   The **/TeamProject** option targets the operation to isolated network environments in the specified team project. The **/TeamProject** option must be used with the **/CollectionName** option and the **/CollectionName** option must specify the team project collection that contains the team project.

-   The **/CollectionName** option targets the operation to network isolated environments in the specified team project collection.

The second way to target a network isolated environment is to use the **/Name** and **/IP** options to specify the fully qualified external name and external IP address of an individual virtual machine. You must specify both the **/Name** and **/IP** options on the command line. You can view the external name and external IP address of a virtual machine in the Environment Viewer of Lab Management or from the description of the virtual machine in SCVMM Administrator Console.

### Examples

In the first example, records for all network-isolated environments in a team project are added to DNS. In the second example, an individual DNS record is removed.

    REM First example
    tfsconfig lab /dns /add /collectionname:Collection0 /teamproject:Project1

    REM Second example
    tfsconfig lab /dns /delete /name:0b668996-2736-46d2-88ac-0733acbd0d9c.contoso.com /ip:111.00.000.000
