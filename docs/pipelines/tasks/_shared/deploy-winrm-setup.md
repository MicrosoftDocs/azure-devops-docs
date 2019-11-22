---
ms.topic: include
---

<!-- Windows Remote Management details and setup -->

This task uses [Windows Remote Management](https://msdn.microsoft.com/library/aa384426.aspx)
(WinRM) to access 
on-premises physical computers or virtual computers that are
domain-joined or workgroup-joined.

**To set up WinRM for on-premises physical computers or virtual machines**

Follow the steps described in [domain-joined](../../apps/cd/deploy-webdeploy-iis-winrm.md)

**To set up WinRM for Microsoft Azure Virtual Machines**

Azure Virtual Machines require WinRM to use the HTTPS protocol.
You can use a self-signed Test Certificate. In this case, the
automation agent will not validate the authenticity of the 
certificate as being issued by a trusted certification authority.

* **Azure Classic Virtual Machines**. When you create a 
[classic virtual machine](https://azure.microsoft.com/documentation/articles/virtual-machines-windows-tutorial-classic-portal/)
from the Azure portal, the virtual machine is already set up for 
WinRM over HTTPS, with the default port 5986 already opened in the firewall
and a self-signed certificate installed on the machine. These virtual 
machines can be accessed with no further configuration required.
Existing Classic virtual machines can be also selected by using the 
[Azure Resource Group Deployment](https://github.com/Microsoft/azure-pipelines-tasks/tree/master/Tasks/AzureResourceGroupDeploymentV2)
task.

* **Azure Resource Group**. If you have an 
[Azure Resource Group](https://azure.microsoft.com/documentation/articles/virtual-machines-windows-hero-tutorial/)
already defined in the Azure portal, you must configure it to use the WinRM HTTPS 
protocol. You need to open port 5986 in the firewall, and install a 
self-signed certificate.

To dynamically deploy Azure Resource Groups that contain virtual machines, use the 
[Azure Resource Group Deployment](https://github.com/Microsoft/azure-pipelines-tasks/tree/master/Tasks/AzureResourceGroupDeploymentV2)
task. This task has a checkbox named **Enable Deployment Pre-requisites**. Select 
this to automatically set up the WinRM HTTPS protocol on the virtual machines, 
open port 5986 in the firewall, and install a test certificate. The virtual machines 
are then ready for use in the deployment task.
