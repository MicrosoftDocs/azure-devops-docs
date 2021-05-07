---
ms.topic: include
ms.technology: devops-cicd
ms.manager: mijacobs
ms.author: jukullam
author: juliakm
ms.date: 02/19/2020
---

## Create an Azure Web App using the CLI

> [!NOTE]
> If you already have a web app that you want to use, you can skip this and move to the next section.  

The Azure Cloud Shell is a free Bash shell that you can run directly within the Azure portal.
It has the Azure CLI preinstalled and configured to use with your Azure subscription.
Click the **Cloud Shell** button on the menu in the upper-right of the [Azure portal](https://portal.azure.com).

[![Cloud Shell](/azure/includes/media/cloud-shell-try-it/cloud-shell-menu.png)](https://portal.azure.com)

The button launches an interactive shell that you can use to run all of the following steps:

[![Screenshot showing the Cloud Shell window in the portal]((https://docs.microsoft.com/azure/includes/media/cloud-shell-try-it/cloud-shell-safari.png)](https://portal.azure.com)

Create a resource group with the [az group create](/cli/azure/group#az_group_create) command. The following example creates a resource group named *myResourceGroup* in the *eastus* location.

```azurecli-interactive
az group create --name myResourceGroup --location eastus
```

Create an App Service plan with the [az appservice plan create](/cli/azure/appservice/plan#az_appservice_plan_create) command. The following example creates an App Service plan named `myAppServicePlan` in the **Free** pricing tier:

```azurecli-interactive
az appservice plan create --name myAppServicePlan --resource-group myResourceGroup --sku FREE
```

Create a [web app](/azure/app-service-web/app-service-web-overview) in the `myAppServicePlan` App Service plan with the [az webapp create](/cli/azure/webapp#az_webapp_create) command. In the following command, replace `<app_name>` with a unique name (valid characters are `a-z`, `0-9`, and `-`). If `<app_name>` is not unique, you get the error message "Website with given name <app_name> already exists." The default URL of the web app is `https://<app_name>.azurewebsites.net`.

```azurecli-interactive
az webapp create --name <app_name> --resource-group myResourceGroup --plan myAppServicePlan
```