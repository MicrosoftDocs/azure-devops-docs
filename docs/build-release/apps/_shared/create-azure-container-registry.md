##  Create an Azure Container Registry    
You use [Azure Container Registry](https://docs.microsoft.com/en-us/azure/container-registry/) to host the Docker image that is deployed to Azure App Service.  Follow the steps below to create and configure the registry to store and manage the Docker container.  In later steps, you use VSTS to deploy the Docker container to Linux App Service in Azure.

1.  Sign into your Azure Account at [https://portal.azure.com](https://portal.azure.com).
2.  In the Azure Portal, **click** **New, Containers, then click Azure Container Registry**.    
3.  Choose a **Registry name**, **Resource Group**, and **Location**.    

    ![Container Registry settings](_img/createacr.png)
4.  Choose **Enable** for **Admin user**, then Click **Create**.
5.  Wait for the **Azure Container Registry** deployment to complete.
