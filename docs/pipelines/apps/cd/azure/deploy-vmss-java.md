---
title: Tutorial - Deploy to a Linux virtual machine scale set
description: Learn how to use the Azure CLI to create and deploy a Java application on Linux VMs using a virtual machine scale set 
ms.topic: quickstart
ms.author: jukullam
author: JuliaKM
ms.date: 08/11/2020
monikerRange: 'azure-devops'
---

# Tutorial: Deploy a Java app to a virtual machine scale set

A [virtual machine scale set](https://docs.microsoft.com/azure/virtual-machine-scale-sets/overview) lets you deploy and manage identical, auto-scaling virtual machines. 

VMs are created as needed in a scale set. You define rules to control how and when VMs are added or removed from the scale set. These rules can be triggered based on metrics such as CPU load, memory usage, or network traffic.

In this tutorial, you build a Java app and deploy it to a virtual machine scale set. You learn how to:

> [!div class="checklist"]
> * Create a virtual machine scale set
> * Build a custom image with packer 
> * Deploy a custom image to a virtual machine scale set

## Prerequisites

Before you begin, you need:
- An Azure account with an active subscription. [Create an account for free](https://azure.microsoft.com/free/?WT.mc_id=A261C142F).
- An active Azure DevOps organization. [Sign up for Azure Pipelines](../../../get-started/pipelines-sign-up.md).
- A forked GitHub repo with the example java project. Fork the [pipelines-java repository](https://github.com/MicrosoftDocs/pipelines-java).
- 
## Set up your Java Pipeline

 1. Sign in to your Azure DevOps organization and navigate to your project.
 [!INCLUDE [include](includes/create-pipeline-before-template-selected.md)]

> When the **Configure** tab appears, select **Maven**.

2. When your new pipeline appears, take a look at the YAML to see what it does. When you're ready, select **Save and run**.

   > [!div class="mx-imgBorder"] 
   > ![Save and run button in a new YAML pipeline](media/save-and-run-button-new-yaml-pipeline.png)

3. You're prompted to commit a new _azure-pipelines.yml_ file to your repository. After you're happy with the message, select **Save and run** again.

   If you want to watch your pipeline in action, select the build job.

   > You just created and ran a pipeline that we automatically created for you, because your code appeared to be a good match for the [Maven](https://github.com/microsoft/azure-pipelines-yaml/blob/master/templates/maven.yml) template.

   You now have a working YAML pipeline (`azure-pipelines.yml`) in your repository that's ready for you to customize!

4. When you're ready to make changes to your pipeline, select it in the **Pipelines** page, and then **Edit** the `azure-pipelines.yml` file.


## Create a virtual machine scale set

Before you can create a scale set, create a resource group with [az group create](/cli/azure/group#az-group-create). The following example creates a resource group named *myVMSSResourceGroup* in the *eastus2* location:

```azurecli-interactive
az group create --name myVMSSResourceGroup --location eastus2
```

Next, you 



## Create a Java app

<!-- 
## Create an app to scale
For production use, you may wish to [Create a custom VM image](tutorial-custom-images.md) that includes your application installed and configured. For this tutorial, lets customize the VMs on first boot to quickly see a scale set in action.

In a previous tutorial, you learned [How to customize a Linux virtual machine on first boot](tutorial-automate-vm-deployment.md) with cloud-init. You can use the same cloud-init configuration file to install NGINX and run a simple 'Hello World' Node.js app.

In your current shell, create a file named *cloud-init.txt* and paste the following configuration. For example, create the file in the Cloud Shell not on your local machine. Enter `sensible-editor cloud-init.txt` to create the file and see a list of available editors. Make sure that the whole cloud-init file is copied correctly, especially the first line:

```yaml
#cloud-config
package_upgrade: true
packages:
  - nginx
  - nodejs
  - npm
write_files:
  - owner: www-data:www-data
  - path: /etc/nginx/sites-available/default
    content: |
      server {
        listen 80;
        location / {
          proxy_pass http://localhost:3000;
          proxy_http_version 1.1;
          proxy_set_header Upgrade $http_upgrade;
          proxy_set_header Connection keep-alive;
          proxy_set_header Host $host;
          proxy_cache_bypass $http_upgrade;
        }
      }
  - owner: azureuser:azureuser
  - path: /home/azureuser/myapp/index.js
    content: |
      var express = require('express')
      var app = express()
      var os = require('os');
      app.get('/', function (req, res) {
        res.send('Hello World from host ' + os.hostname() + '!')
      })
      app.listen(3000, function () {
        console.log('Hello world app listening on port 3000!')
      })
runcmd:
  - service nginx restart
  - cd "/home/azureuser/myapp"
  - npm init
  - npm install express -y
  - nodejs index.js
```


## Create a scale set
Before you can create a scale set, create a resource group with [az group create](/cli/azure/group#az-group-create). The following example creates a resource group named *myResourceGroupScaleSet* in the *eastus* location:

```azurecli-interactive
az group create --name myResourceGroupScaleSet --location eastus
```

Now create a virtual machine scale set with [az vmss create](/cli/azure/vmss#az-vmss-create). The following example creates a scale set named *myScaleSet*, uses the cloud-init file to customize the VM, and generates SSH keys if they do not exist:

```azurecli-interactive
az vmss create \
  --resource-group myResourceGroupScaleSet \
  --name myScaleSet \
  --image UbuntuLTS \
  --upgrade-policy-mode automatic \
  --custom-data cloud-init.txt \
  --admin-username azureuser \
  --generate-ssh-keys
```

It takes a few minutes to create and configure all the scale set resources and VMs. There are background tasks that continue to run after the Azure CLI returns you to the prompt. It may be another couple of minutes before you can access the app.


## Allow web traffic
A load balancer was created automatically as part of the virtual machine scale set. The load balancer distributes traffic across a set of defined VMs using load balancer rules. You can learn more about load balancer concepts and configuration in the next tutorial, [How to load balance virtual machines in Azure](tutorial-load-balancer.md).

To allow traffic to reach the web app, create a rule with [az network lb rule create](/cli/azure/network/lb/rule#az-network-lb-rule-create). The following example creates a rule named *myLoadBalancerRuleWeb*:

```azurecli-interactive
az network lb rule create \
  --resource-group myResourceGroupScaleSet \
  --name myLoadBalancerRuleWeb \
  --lb-name myScaleSetLB \
  --backend-pool-name myScaleSetLBBEPool \
  --backend-port 80 \
  --frontend-ip-name loadBalancerFrontEnd \
  --frontend-port 80 \
  --protocol tcp
```

## Test your app
To see your Node.js app on the web, obtain the public IP address of your load balancer with [az network public-ip show](/cli/azure/network/public-ip#az-network-public-ip-show). The following example obtains the IP address for *myScaleSetLBPublicIP* created as part of the scale set:

```azurecli-interactive
az network public-ip show \
    --resource-group myResourceGroupScaleSet \
    --name myScaleSetLBPublicIP \
    --query [ipAddress] \
    --output tsv
```

Enter the public IP address in to a web browser. The app is displayed, including the hostname of the VM that the load balancer distributed traffic to:

![Running Node.js app](./media/tutorial-create-vmss/running-nodejs-app.png)

To see the scale set in action, you can force-refresh your web browser to see the load balancer distribute traffic across all the VMs running your app.


## Management tasks
Throughout the lifecycle of the scale set, you may need to run one or more management tasks. Additionally, you may want to create scripts that automate various lifecycle-tasks. The Azure CLI provides a quick way to do those tasks. Here are a few common tasks.

### View VMs in a scale set
To view a list of VMs running in your scale set, use [az vmss list-instances](/cli/azure/vmss#az-vmss-list-instances) as follows:

```azurecli-interactive
az vmss list-instances \
  --resource-group myResourceGroupScaleSet \
  --name myScaleSet \
  --output table
```

The output is similar to the following example:

```bash
  InstanceId  LatestModelApplied    Location    Name          ProvisioningState    ResourceGroup            VmId
------------  --------------------  ----------  ------------  -------------------  -----------------------  ------------------------------------
           1  True                  eastus      myScaleSet_1  Succeeded            MYRESOURCEGROUPSCALESET  c72ddc34-6c41-4a53-b89e-dd24f27b30ab
           3  True                  eastus      myScaleSet_3  Succeeded            MYRESOURCEGROUPSCALESET  44266022-65c3-49c5-92dd-88ffa64f95da
```


### Manually increase or decrease VM instances
To see the number of instances you currently have in a scale set, use [az vmss show](/cli/azure/vmss#az-vmss-show) and query on *sku.capacity*:

```azurecli-interactive
az vmss show \
    --resource-group myResourceGroupScaleSet \
    --name myScaleSet \
    --query [sku.capacity] \
    --output table
```

You can then manually increase or decrease the number of virtual machines in the scale set with [az vmss scale](/cli/azure/vmss#az-vmss-scale). The following example sets the number of VMs in your scale set to *3*:

```azurecli-interactive
az vmss scale \
    --resource-group myResourceGroupScaleSet \
    --name myScaleSet \
    --new-capacity 3
```

### Get connection info
To obtain connection information about the VMs in your scale sets, use [az vmss list-instance-connection-info](/cli/azure/vmss#az-vmss-list-instance-connection-info). This command outputs the public IP address and port for each VM that allows you to connect with SSH:

```azurecli-interactive
az vmss list-instance-connection-info \
    --resource-group myResourceGroupScaleSet \
    --name myScaleSet
``` -->
