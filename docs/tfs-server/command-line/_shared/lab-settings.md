You can configure Visual Studio Lab Management by using the **TFSConfig Lab /Settings** option. The Settings option

-   Sets the name of the System Center Virtual Machine Manager (SCVMM) Server that controls the administration of virtual machines in your lab.

-   Sets the network location, such as the network domain or workgroup, that the physical computers in all host groups can connect to.

-   Sets the IP addresses and virtual DNS suffix for network-isolated networks in your lab.

	TfsConfig Lab 
	/Settings
	       [/ScVmmServerName:VMMServerName]
	       [/NetworkLocation:networkLocation]
	       [/IpBlock:networkIsolationIpRange]
	       [/DnsSuffix:networkIsolationDnsSuffix] 
	       [/NoPrompt]
	       [/List]

|Option|Description|
|---|---|
|**ScvmmServerName:** VMMServerName|Optional. Sets the fully qualified name of the System Center Virtual Machine Manager 2008 (SCVMM) server that will be used by Team Foundation Server. This is the name of the SCVMM server that will be used to manage the virtual machines.For Team Foundation Server to communicate with SCVMM, you must add the account under which Team Foundation Server is running to the Administrator role in SCVMM.|
|**NetworkLocation:** networkLocation|Optional. Sets the fully qualified name of a network, such as a network domain or workgroup, that is available on all the hosts in your lab network. When it provisions a virtual machine, Lab Management automatically connects the virtual machine to the specified network. You can find the available network locations on a host using SCVMM Administrator Console. |
|**IpBlock:** networkIsolationIpRange|Optional. Sets the range of IP addresses to be assigned to the virtual machines in an environment when an isolated network is created. Because the IP addresses are used only for internal routing among virtual machines and are not exposed beyond the boundaries of an environment, you can specify any IP range that is not used within the network specified by the **/NetworkLocation** option. In most cases, the default range of 192.168.23.0/24 should work. If you encounter problems connecting to network isolated environments, you might have to choose a different range.|
|**DnsSuffix:** networkIsolationDnsSuffix|Optional. Sets the DNS suffix that will be used to register the names of virtual machines on the isolated network for the virtual environment. To confirm that the suffix is configured correctly in the DNS hierarchy, contact your network administrator.|
|**NoPrompt**|Optional. Do not prompt for confirmation. Do not use with the **/List** option.|
|**List**|Lists the current configuration values for Lab Management.|

### Remarks

One of the **/ScvmmServerName**, **/NetworkLocation**, **/IpBlock**, **/DnsSuffix**, or **/List** options must be specified on each **TfsConfig Lab /Settings** command line.

To set up Lab Management, you must specify both **/ScVmmServerName** and the **/NetworkLocation** options. However, you can specify these options on separate command lines.

To set up network isolation, you must specify both the **/IpBlock** and **/DnsSuffix** options. However, you can specify these options on separate command lines.

Network isolation enables you to use multiple copies of a virtual machine without machine name or IP address conflicts.
You must assign both a DNS suffix and an IP range for an isolated network.
Because the IP addresses are used only for internal routing among virtual machines and are not exposed beyond the boundaries of an environment,
you can specify any IP range that is not used within your public network. In most cases, the default range of 192.168.1.0/24 should work.
If you encounter problems connecting to network-isolated environments, you might have to choose a different range.

### Examples

In the this example, Lab Management is set up by using the **/ScvmmServerName** and **/NetworkLocation** options on a single command line.

    tfsconfig lab /settings /scvmmservername:vmmserver /networklocation:lab1.contoso.com

In this example, network isolation is configured by using the **/IpBlock** and **/DNSSuffix** options on separate command lines.

    tfsconfig lab /settings /ipblock: 192.168.23.0/24
    tfsconfig lab /settings /dnssuffix:virtual1.lab1.contoso.com
