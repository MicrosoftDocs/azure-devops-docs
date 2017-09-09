##  Create an Azure Container Registry    

You use [Azure Container Registry](https://docs.microsoft.com/en-us/azure/container-registry/) to host the Docker image that is published by the CI process.  Follow the steps below to create and configure the registry to store and manage the Docker container.  In later steps, you use VSTS to deploy the Docker container to Linux App Service in Azure.

1. Sign into your Azure Account at [https://portal.azure.com](https://portal.azure.com).

1. In the Azure Portal, choose **New**, **Containers**, then choose **Azure Container Registry**.    

1. Enter a **Registry name**, **Resource Group**, and select a **Location**.    

   ![Container Registry settings](_img/createacr.png)

1. For **Admin user**, choose **Enable** and then choose **Create**.

1. Wait for the Azure Container Registry deployment to finish.
