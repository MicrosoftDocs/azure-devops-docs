---
title: Create a virtual network for build-deploy-test 
description: Provision and manage VMs in SCVMM - Create a virtual network for build-deploy-test scenarios using Network Virtualization
ms.assetid: 64620E9B-D2D1-4516-921A-40A159019513
ms.topic: conceptual
ms.custom: seodec18
ms.author: ronai
author: RoopeshNair
ms.date: 02/01/2022
monikerRange: '<= azure-devops'
---

# Create a virtual network isolated environment for build-deploy-test scenarios

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

::: moniker range="tfs-2018"
[!INCLUDE [temp](../includes/concept-rename-note.md)]
::: moniker-end

Network Virtualization provides ability to create multiple virtual
networks on a shared physical network. Isolated virtual networks can
be created using SCVMM Network Virtualization concepts.
VMM uses the concept of logical networks and corresponding VM networks
to create isolated networks of virtual machines.

![Logical Networks and corresponding VM Networks](media/virtual-networks/1.png)

* You can create an isolated network of virtual machines that span across different hosts in a host-cluster or a private cloud.
* You can have VMs from different networks residing in the same host machine and still be isolated from each other.
* You can define IP address from any IP pool of your choice for a VM Network.

See also: [Hyper-V Network Virtualization Overview](/windows-server/networking/sdn/technologies/hyper-v-network-virtualization/hyperv-network-virtualization-overview-windows-server).

<a name="task-list"></a>

## To create a virtual network isolated environment:

* Ensure you meet the prerequisite conditions described in [this section](#prereqs).

* Set up Network Virtualization using SCVMM. This is a one-time setup task you don’t need to repeat.
  Follow [these steps](#setup-net-virt).

* Decide on the network topology you want to use. You'll specify this when you create the
  virtual network. The options and steps are described in [this section](#select-topology).

* Enable your build-deploy-test scenario as shown in [these steps](#enable-scenario).

* You can perform a range of operations to manage VMs using SCVMM. For examples, see [SCVMM deployment](scvmm.md).
  
<a name="prereqs"></a>

## Prerequisites

* SCVMM Server 2012 R2 or later.
* Window 2012 R2 host machines with Hyper-V set up with at least two physical NICs attached.
* One NIC (perhaps external) with corporate network or Internet access.
* One NIC configured in Trunk Mode with a VLAN ID (such as 991) and routable IP subnets (such as 10.10.30.1/24). You network administrator can configure this.
* All Hyper-V hosts in the host group have the same VLAN ID. This host group will be used for your isolated networks.

Verify the setup is working correctly by following these steps:

1. Open an RDP session to each of the host machines and open an administrator PowerShell session.

1. Run the command `Get-NetVirtualizationProviderAddress`. This gets the provider address for the physical NIC configured in trunk mode with a VLAN ID.

   ![Run Get-NetVirtualizationProviderAddress](media/virtual-networks/2.png)

1. Go to another host and open an administrator PowerShell session. Ping other machines using the command `ping -p <Provider address>`.
   This confirms all host machines are connected to a physical NIC in trunk mode with IPs routable across the host machines.
   If this test fails, contact your network administrator.

   ![Ping other machines](media/virtual-networks/3.png)

[Back to list of tasks](#task-list)

<a name="setup-net-virt"></a>

## Create a Network Virtualization layer in SCVMM

Setting up a network visualization layer in SCVMM includes creating logical networks,
port profiles, logical switches, and adding the switches to the Hyper-V hosts.

### Create logical networks

1. Log into the SCVMM admin console.

1. Go to **Fabric** -> **Networking** -> **Logical Networks** -> **Create new Logical Network**.

   ![Create a new Logical Network](media/virtual-networks/4.png)

1. In the popup, enter an appropriate name and select **One Connected Network** ->
   **Allow new networks created on this logical network to use network virtualization**, then select **Next**.

   ![Name the network and select One connected Network](media/virtual-networks/5.png)

1. Add a new **Network Site** and select the host group to which the network site will be scoped.
   Enter the VLAN ID used to configure physical NIC in the Hyper-V host group and the corresponding routable IP subnet(s).
   To assist tracking, change the network site name to one that is memorable.

   ![Add a new Network Site](media/virtual-networks/6.png)

1. Select **Next** and **Save**.

1. Create an IP pool for the new logical networks, enter a name, and select **Next**.

   ![Create an IP pool](media/virtual-networks/7.png)

1. Select **Use and existing network site** and select **Next**. Enter the routable IP address range your network administrator
   configured for your VLAN and select **Next**. If you have multiple routable IP subnets associated with your VLAN, create an
   IP pool for each one.

   ![Provide the routable IP address range](media/virtual-networks/8.png)

1. Provide the gateway address. By default, you can use the first IP address in your subnet.

   ![Provide the gateway address](media/virtual-networks/9.png)

1. Select **Next** and leave the existing DNS and WINS settings. Complete the creation of the network site.

1. Now create another **Logical Network** for external Internet access, but this time select
   **One Connected network** -> **Create a VM network with same name to allow virtual machines to access this logical network directly**
   and then select **Next**.

   ![Create a Logical network for external internet access](media/virtual-networks/10.png)

1. Add a network site and select the same host group, but this time add the VLAN as `0`. This means the communication uses
   the default access mode NIC (Internet).
   
   ![Add a network site and select the same host group](media/virtual-networks/11.png)

1. Select **Next** and **Save**.

1. The result should look like the following in your administrator console after creating the logical networks.

   ![Viewing the result](media/virtual-networks/11_1.png)

### Create port profiles 

1. Go to **Fabric** -> **Networking** -> **Port profiles** and **Create Hyper-V port profile**.

   ![Creating a Hyper-V port profile](media/virtual-networks/12.png)

1. Select **Uplink port profile** and select **Hyper-V Port** as the load-balancing algorithm, then select **Next**.

   ![Setting the load balancing algorithm](media/virtual-networks/13.png)

1. Select the Network Virtualization site created previously and choose the **Enable Hyper-V Network Virtualization**
   checkbox, then save the profile.

   ![Enabling Hyper-V Network Virtualization](media/virtual-networks/14.png)

1. Now create another Hyper-V port profile for external logical network. Select **Uplink** mode and **Host default** as the
   load-balancing algorithm, then select **Next**.

   ![Creating another Hyper-V port profile for external logical network](media/virtual-networks/15.png)

1. Select the other network site to be used for external communication, but and this time don't enable network virtualization.
   Then save the profile.

   ![Selecting the network site to be used for external communication](media/virtual-networks/16.png)

<a name="create-switch"></a>

### Create logical switches 

1. Go to **Fabric** -> **Networking** -> **Logical switches** and **Create Logical Switch**.

   ![Creating a Logical Switch](media/virtual-networks/17.png)

1. In the getting started wizard, select **Next** and enter a name for the switch, then select **Next**.

   ![Entering a name for the switch](media/virtual-networks/18.png)

1. Select **Next** to open to **Uplink** tab. Select **Add uplink port profile** and add the network virtualization
   port profile you just created.

   ![Adding an uplink port profile](media/virtual-networks/19.png)

1. Select **Next** and save the logical switch.

1. Now create another logical switch for the external network for Internet communication. This time add the other
   uplink port profile you created for the external network.

   ![Creating another logical switch for the external network](media/virtual-networks/20.png)

### Add logical switches to Hyper-V hosts

1. Go to **VM and Services** -> [Your host group] -> [each of the host machines in turn].

1. Right select and open the **Properties** -> **Virtual Switches** tab.

   ![Opening the Virtual Switches tab](media/virtual-networks/21.png)

1. Select **New Virtual Switch** -> **New logical switch for network virtualization**.
   Assign the physical adapter you configured in trunk mode and select the network virtualization port profile.

   ![Assigning the physical adapter](media/virtual-networks/22.png)

1. Create another logical switch for external connectivity, assign the physical adapter used for external communication,
   and select the external port profile.

   ![Creating another logical switch for external connectivity](media/virtual-networks/23.png)

1. Do the same for all the Hyper-V hosts in the host group.

This is a one-time configuration for a specific host group of machines. After completing this setup, you can dynamically
provision your isolated network of virtual machines using the **SCVMM extension** in TFS and Azure Pipelines builds and releases.

[Back to list of tasks](#task-list)

<a name="select-topology"></a>

## Create the required virtual network topology

Isolated virtual networks can be broadly classified into three topologies.

**Topology 1: AD-backed Isolated VMs**

* A boundary VM with Internet/TFS connectivity.
* An Azure Pipelines/TFS deployment group agent installed on the boundary VM.
* An AD-DNS VM if you want to use a local Active Directory domain.
* Isolated app VMs where you deploy and test your apps.

   ![Topology 1 AD-backed Isolated VMs](media/virtual-networks/24.png)

**Topology 2: Non-AD backed isolated VMs**

* A boundary VM with Internet/TFS connectivity.
* An Azure Pipelines/TFS deployment group agent installed on the boundary VM.
* Isolated app VMs where you deploy and test your apps.

   ![Topology 2 Non-AD backed isolated VMs](media/virtual-networks/25.png)

**Topology 3: AD-backed non-isolated VMs**

* A boundary VM with Internet/TFS connectivity.
* An Azure Pipelines/TFS deployment group agent installed on the boundary VM.
* An AD-DNS VM if you want to use a local Active Directory domain.
* App VMs that are also connected to the external network where you deploy and test your apps.

   ![Topology 3 AD-backed non-isolated VMs](media/virtual-networks/26.png)

You can create any of the above topologies using the SCVMM extension, as shown in the following steps.

1. Open your TFS or Azure Pipelines instance and install the **SCVMM extension** if not already installed.
   For more information, see [SCVMM deployment](scvmm.md).

   >The **SCVMM task** provides a more efficient way capability to perform lab management operations using build and release
   pipelines. You can manage SCVMM environments, provision isolated virtual networks, and implement build-deploy-test scenarios.
   
1. In a build or release pipeline, add a new **SCVMM** task.

1. In the **SCVMM** task, select a service connection for the SCVMM server where you want to provision
   your virtual network and then select **New Virtual machines using Templates/Stored VMs and VHDs**
   to provision your VMs.

   ![Selecting a service connection for the SCVMM server](media/virtual-networks/27.png)

1. You can create VMs from templates, stored VMs, and VHD/VHDx.
   Choose the appropriate option and enter the VM names and corresponding source information.

   ![Choosing the option to create VMs from templates, stored VMs, and VHD or VHDx](media/virtual-networks/28.png)

1. In case of topologies **1** and **2**, leave the **VM Network name** empty, which will clear all the old VM networks
   present in the created VMs (if any). For topology **3**, you must provide information about the external VM network here.

   ![Specifying the topology settings](media/virtual-networks/29.png)

1. Enter the **Cloud Name** of the host where you want to provision your isolated network. In case of private cloud, ensure the host
   machines added to the cloud are connected to the same logical and external switches [as explained above](#create-switch).

   ![Entering the Cloud Name](media/virtual-networks/30.png)

1. Select the **Network Virtualization** option to create the virtualization layer.

   ![Creating the virtualization layer](media/virtual-networks/31.png)

1. Based on the topology you would like to create, decide if the network requires an Active Directory VM.
   For example, to create Topology **2** (AD-backed isolated network), you require an Active directory VM.
   Select the **Add Active Directory VM** checkbox, enter the AD VM name and the stored VM source.
   Also enter the static IP address configured in the AD VM source and the DNS suffix.

   ![Deciding if the network requires an Active Directory VM](media/virtual-networks/32.png)

1. Enter the settings for the **VM Network** and subnet you want to create, and the backing-logical network
   you created in the [previous section](#setup-net-virt) (Logical Networks). Ensure the VM network name
   is unique. If possible, append the release name for easier tracking later.

   ![Entering the settings for the VM Network and subnet](media/virtual-networks/33.png)

1. In the **Boundary Virtual Machine options** section, set **Create boundary VM for communication with Azure Pipelines/TFS**.
   This will be the entry point for external communication.

1. Enter the boundary VM name and the source template (the boundary VM source should always be a VM template),
   and enter name of the existing external VM network you created for external communication.

   ![Entering the boundary VM name and the source template](media/virtual-networks/34.png)

1. Provide details for configuring the boundary VM agent to communicate with Azure Pipelines/TFS. You can configure a
   deployment agent or an automation agent. This agent will be used for app deployments.

   ![Configuring the boundary VM agent to communicate with TFS or Azure Pipelines](media/virtual-networks/35.png)

1. Ensure the agent name you provide is unique. This will be used as demand in succeeding job properties
   so that the correct agent will be selected. If you selected the deployment group agent option, this
   parameter is replaced by the value of the tag, which must also be unique.

1. Ensure the boundary VM template has the agent configuration files downloaded and saved in the VHD before
   the template is created. Use this path as the agent installation path above.

<a name="enable-scenario"></a>

## Enable your build-deploy-test scenario

1. Create a new job in your pipeline, after your network virtualization job.

1. Based on the boundary VM agent (deployment group agent or automation agent) that is created as part of your
   boundary VM provisioning, choose **Deployment group job** or **Agent job**.

1. In the job properties, select the appropriate deployment group or automation agent pool.

1. In the case of an automation pool, add a new **Demand** for **Agent.Name** value. Enter the unique name
   used in the network virtualization job. In the case of deployment group job, you must set the tag in
   the properties of the group machines.

   ![Entering an agent demand or tag name](media/virtual-networks/36.png)

1. Inside the job, add the tasks you require for deployment and testing.

   ![Adding the tasks required for deployment and testing](media/virtual-networks/37.png)

1. After testing is completed, you can destroy the VMs by using the **Delete VM** task option.

Now you can create release from this release pipeline. Each release will dynamically provision your
isolated virtual network and run your deploy and test tasks in the environment. You can find the test
results in the release summary. After your tests are completed, you can automatically decommission your
environments. You can create as many environments as you need with just a select from **Azure Pipelines**.

[Back to list of tasks](#task-list)

## See also

* [SCVMM deployment](scvmm.md)
* [Hyper-V Network Virtualization Overview](/windows-server/networking/sdn/technologies/hyper-v-network-virtualization/hyperv-network-virtualization-overview-windows-server)

## FAQ

<!-- BEGINSECTION class="md-qanda" -->

::: moniker range="tfs-2018"
[!INCLUDE [temp](../includes/qa-versions.md)]
::: moniker-end

<!-- ENDSECTION -->

[!INCLUDE [rm-help-support-shared](../includes/rm-help-support-shared.md)]
