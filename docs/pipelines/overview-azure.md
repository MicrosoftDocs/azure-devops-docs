---
title: Deploy to Azure index to content
ms.custom: seodec18, contperf-fy21q4
description: Learn how to deploy to Azure using Azure Pipelines. Tutorials, references, and other documentation.  
ms.assetid: BC7FACEF-6E79-4BBA-BF53-07BD27EEB235  
ms.author: jukullam
author: juliakm
ms.date: 08/17/2021
ms.type: reference
monikerRange: '>= tfs-2015'
---

# Deploy to Azure

[!INCLUDE [version-tfs-2015-rtm](includes/version-tfs-2015-rtm.md)]

 Azure Pipelines combines continuous integration (CI) and continuous delivery (CD) to test and build your code and ship it to any target. While you do not have to use Azure services with Pipelines, Pipelines can help you take advantage of Azure. You can use Pipelines to integrate your CI/CD process with most Azure services. 

To learn more about selecting an Azure service for hosting your application code, see [Choose an Azure compute service for your application](/azure/architecture/guide/technology-choices/compute-decision-tree).

If you're just getting started, we recommend you review and get started with the following resources.   

:::row:::
   :::column span="1":::
      **Azure service**
   :::column-end::: 
   :::column span="3":::
      **Integration points**  
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      [Azure DevOps Projects/Azure DevOps Starter](https://azure.microsoft.com/features/devops-projects/)
   :::column-end::: 
   :::column span="3":::
      Start using Azure Pipelines to automate the setup of a CI/CD of your application to Azure. Choose where to  deploy your application such as Virtual Machines, App Service, Azure Kubernetes Services (AKS), Azure SQL Database, or Azure Service Fabric.  
      To learn more, see [Overview of DevOps Starter](/azure/devops-project/overview).
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      [Azure portal](/azure/azure-portal/azure-portal-overview)
   :::column-end::: 
   :::column span="3":::
      The Azure portal is a web-based, unified console from which you can build, manage, and monitor everything from simple web apps to complex cloud deployments. Also, you can create custom dashboards for an organized view of resources and configure accessibility options. If you have an Azure DevOps Services organization, you have access to the Azure portal.  
      [Sign in to your Azure portal](https://portal.azure.com/).
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      [DevOps solutions on Azure](https://azure.microsoft.com/solutions/devops/#products)
   :::column-end::: 
   :::column span="3":::
      Use end-to-end solutions on Azure to implement DevOps practices throughout application planning, development, delivery, and operations. Apply the right combination of DevOps technologies, culture, and processes to enable continual software delivery and better value for customers. Get started with the following learn modules: 
      - [Deploy applications with Azure DevOps](/learn/paths/deploy-applications-with-azure-devops/)  
      - [Build applications with Azure DevOps](/learn/paths/build-applications-with-azure-devops/)  
      - [Deploy and maintain cloud-native apps with GitHub actions and Azure Pipelines](/learn/modules/cna-deploy-maintain/)
      - [Load test Azure web apps by using Azure DevOps](/learn/modules/load-test-web-app-azure-devops/)
   :::column-end:::
:::row-end:::
---

Follow the links provided in the following table to learn more about the Azure services that support continuous integration (CI) and continuous delivery (CD) using Azure Pipelines. For a complete list of Azure pipeline tasks, see [Build and release tasks](tasks/index.md).


:::row:::
   :::column span="1":::
      **Azure service**
   :::column-end::: 
   :::column span="3":::
      **Integration points**  
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      [Azure App Service](https://azure.microsoft.com/services/app-service/#overview)
   :::column-end::: 
   :::column span="3":::
       An HTTP-based service for hosting web applications, REST APIs, and mobile back ends; the Azure App Service employs Azure Pipelines to deliver CI/CD. To learn more, see:  
      - [App Service overview](/azure/app-service/overview)
      - [Deploy an Azure Web App](targets/webapp.md)
      - [Deploy a web app to Azure App Services (Classic)](apps/cd/deploy-webdeploy-webapps.md)
      - [Use CI/CD to deploy a Python web app to Azure App Service on Linux](ecosystems/python-webapp.md)
      - [Continuously deploy from a Jenkins build](release/integrate-jenkins-pipelines-cicd.md)
      - [Azure App Service Deploy task](tasks/deploy/azure-rm-web-app-deployment.md)
      - [Azure App Service Manage task](tasks/deploy/azure-app-service-manage.md)
      - [Azure App Service Settings task](tasks/deploy/azure-app-service-settings.md)
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      [Azure App Configuration](https://azure.microsoft.com/services/app-configuration/)
   :::column-end::: 
   :::column span="3":::
      Service to centrally manage application settings and feature flags. To learn more, see the following articles: 
      - [Push settings to App Configuration with Azure Pipelines](/azure/azure-app-configuration/push-kv-devops-pipeline)
      - [Pull settings to App Configuration with Azure Pipelines](/azure/azure-app-configuration/pull-key-value-devops-pipeline).
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      [Azure Blob Storage](https://azure.microsoft.com/services/storage/blobs/)
      [Azure Storage](https://azure.microsoft.com/services/#storage)
   :::column-end::: 
   :::column span="3":::
      Store and access unstructured data at scale using Azure Pipelines and Azure Blob Storage. 
      - [Build a data pipeline by using Azure Data Factory, DevOps, and machine learning](apps/cd/azure/build-data-pipeline.md)
      - [Azure File Copy task](tasks/deploy/azure-file-copy.md)
   :::column-end:::
:::row-end:::
--- 
:::row:::
   :::column span="1":::
      [Azure Container Registry](https://azure.microsoft.com/services/container-registry/)
   :::column-end::: 
   :::column span="3":::
       Build, store, secure, scan, replicate, and manage container images and artifacts. For example, build and publish a private Docker registry service. To learn more, see [Build and push Docker images to Azure Container Registry](ecosystems/containers/acr-template.md).
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      **Azure Databases**  
      [Azure SQL Database](https://azure.microsoft.com/products/azure-sql/database/)  
      [Azure Database for MySQL](https://azure.microsoft.com/services/mysql/)  
      [Azure Cosmos DB](https://azure.microsoft.com/services/cosmos-db/)  
   :::column-end::: 
   :::column span="3":::
      Use Azure Pipelines to deploy to Azure SQL Database, Azure Database for MySQL, or Azure Cosmos DB. To learn more, see the following articles: 
      - [Deploy to Azure SQL Database](targets/azure-sqldb.md)
      - [Azure SQL Database Deployment task](tasks/deploy/sql-azure-dacpac-deployment.md)
      - [Azure Database for MySQL Deployment task](tasks/deploy/azure-mysql-deployment.md)
      - [Quickstart: Deploy to Azure MySQL](targets/azure-mysql.md)
      - [How-To: CI/CD with App Service and Azure Cosmos DB](targets/cosmos-db.md)
   :::column-end:::
:::row-end:::
--- 
:::row:::
   :::column span="1":::
      [Azure Databricks](https://azure.microsoft.com/services/databricks)  
      [Azure Data Factory](https://azure.microsoft.com/services/data-factory/)
      [Azure Machine Learning](https://azure.microsoft.com/services/machine-learning/) 
   :::column-end::: 
   :::column span="3":::
      Configure a pipeline to integrate with a fully managed, serverless data integration service and unlock insights from all your data. Create an Azure Pipeline that builds and deploys a machine learning model as a web service and to automate the machine learning lifecycle. To learn more, see the following resources: 
      - [Build a data pipeline by using Azure Data Factory, DevOps, and machine learning; Configure Azure Databricks and Azure Data Factory](apps/cd/azure/build-data-pipeline.md#configure-azure-databricks-and-azure-data-factory)
      - [DevOps for Azure Databricks](https://marketplace.visualstudio.com/items?itemName=riserrad.azdo-databricks)
      - [Prepare data, train, deploy, and monitor machine learning models with Azure Pipelines](targets/azure-machine-learning.md).
   :::column-end:::
:::row-end:::
--- 
:::row:::
   :::column span="1":::
      [Azure DevTest Labs](https://azure.microsoft.com/services/devtest-lab/)   
   :::column-end::: 
   :::column span="3":::
      Quickly provision development and test stages using reusable templates. To learn more, see [Manage a virtual machine in Azure DevTest Labs](apps/cd/azure/deploy-provision-devtest-lab.md).
   :::column-end:::
:::row-end:::
--- 
:::row:::
   :::column span="1":::
      [Azure Functions](https://azure.microsoft.com/services/functions/)
   :::column-end::: 
   :::column span="3":::
      Provides a fully managed Platform as a service (PaaS) to implement serverless architecture. To learn more, see:
      - [Deploy an Azure Function](targets/azure-functions.md)
      - [Azure Function App task](tasks/deploy/azure-function-app.md)
      - [Azure Function App for Containers task](tasks/deploy/azure-rm-functionapp-containers.md) 
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      [Azure Government](https://azure.microsoft.com/global-infrastructure/government/get-started/)
   :::column-end::: 
   :::column span="3":::
      Use Azure Pipelines to set up CI/CD of your web app running in Azure Government.To learn more, see [Deploy an app in Azure Government with Azure Pipelines](/azure/azure-government/connect-with-azure-pipelines).
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      [Azure IoT Edge](https://azure.microsoft.com/services/iot-edge/)
   :::column-end::: 
   :::column span="3":::
      Use Azure Pipelines to managed services built on Azure IoT Hub. To learn more, see [Continuous integration and continuous deployment to Azure IoT Edge devices](/azure/iot-edge/how-to-continuous-integration-continuous-deployment) and [Create a CI/CD pipeline for IoT Edge with Azure DevOps Starter](/azure/iot-edge/how-to-devops-starter).
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      [Azure Key Vault](https://azure.microsoft.com/services/key-vault/)
   :::column-end::: 
   :::column span="3":::
      Use Azure Pipelines to managed services for storing secret data. To learn more, see [Use Azure Key Vault secrets in Azure Pipelines](release/azure-key-vault.md) and [Azure Key Vault task](tasks/deploy/azure-key-vault.md).   
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      [Azure Kubernetes Services (AKS)](https://azure.microsoft.com/services/kubernetes-service/)
   :::column-end::: 
   :::column span="3":::
      Deploy and manage containerized applications with a fully managed Kubernetes service. To learn more, see [Build and deploy to Azure Kubernetes Service](ecosystems/kubernetes/aks-template.md). 
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      [Azure Monitor](https://azure.microsoft.com/services/monitor/) 
   :::column-end::: 
   :::column span="3":::
      Configure alerts on available metrics for an Azure resource. Observe the configured Azure monitor rules for active alerts in a release pipeline. Define pre or post-deployment gates based on Query Azure Monitor Alerts. For details, see the following articles: 
      - [Define approvals and checks, Query Azure Monitor Alerts](process/approvals.md#query-azure-monitor-alerts)
      - [Release deployment control using gates]()
      - [Azure Monitor Alerts task](tasks/deploy/azure-monitor-alerts.md)
      - [Query Azure Monitor Alerts task](tasks/utility/azure-monitor.md).
   :::column-end:::
:::row-end:::
--- 
:::row:::
   :::column span="1":::
      [Azure Policy](https://azure.microsoft.com/services/azure-policy/) 
   :::column-end::: 
   :::column span="3":::
        Manage and prevent IT issues by using policy definitions that enforce rules and effects for your resources. To learn how, see [Check policy compliance with gates](policies/azure-policy.md).
   :::column-end:::
:::row-end:::
--- 
:::row:::
   :::column span="1":::
      [Azure Resource Manager (ARM)](https://azure.microsoft.com/features/resource-manager/)  
      [ARM Templates](https://azure.microsoft.com//services/arm-templates/)
   :::column-end::: 
   :::column span="3":::
      Use ARM templates to define the infrastructure and dependencies and streamline authentication to deploy your app using Azure Pipelines. Specifically, you can: 
      - Create an ARM service connection using automated security
      - Create an ARM service connection with an existing service principal
      - Create an ARM service connection to a VM with a managed service identity
      - Connect to an Azure Government Cloud
      - Connect to Azure Stack<br/>
      To learn more, see [Connect to Microsoft Azure](library/connect-to-azure.md).
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      [Azure Service Bus](https://azure.microsoft.com/services/service-bus/)
   :::column-end::: 
   :::column span="3":::
       In a release pipeline, send a message to an Azure Service Bus using a service connection. To learn more, see [Publish To Azure Service Bus task](tasks/utility/publish-to-azure-service-bus.md) and [Manage service connections, Azure Service Bus service connection](library/service-endpoints.md#azure-service-bus-service-connection).
   :::column-end:::
:::row-end:::
--- 
:::row:::
   :::column span="1":::
      [Azure Service Fabric](https://azure.microsoft.com/services/service-fabric)
   :::column-end::: 
   :::column span="3":::
       Distributed systems platform that can run in many environments, including Azure or on-premises. To learn more, see the following articles: [Tutorial: Deploy an application with CI/CD to a Service Fabric cluster](/azure/service-fabric/service-fabric-tutorial-deploy-app-with-cicd-vsts) and [Service Fabric Application Deployment task](tasks/deploy/service-fabric-deploy.md).  
   :::column-end:::
:::row-end:::
--- 
:::row:::
   :::column span="1":::
      [Azure Stack](https://azure.microsoft.com/overview/azure-stack/)
   :::column-end::: 
   :::column span="3":::
      Build, deploy, and run hybrid and edge computing apps consistently across your ecosystems. To learn more, see [Deploy to Azure Stack Hub App Service using Azure Pipelines](targets/azure-stack.md). 
   :::column-end:::
:::row-end:::
--- 
:::row:::
   :::column span="1":::
      [Azure Virtual Machines](https://azure.microsoft.com/services/virtual-machines/)  
      [Azure Virtual Machine Scale Sets](https://azure.microsoft.com/services/virtual-machine-scale-sets/)  
   :::column-end::: 
   :::column span="3":::
      Simplify continuous delivery to Azure VMs using Azure Pipelines. To learn more, see these articles:
     - [Build an Azure virtual machine using an Azure RM template](apps/cd/azure/build-azure-vm-template.md)
     - [Deploy to Azure VMs using deployment groups in Azure Pipelines](release/deployment-groups/deploying-azure-vms-deployment-groups.md)
     - [Tutorial: Deploy a Java app to a virtual machine scale set](apps/cd/azure/deploy-virtual-scale-set-java.md)  
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      [Azure WebApps](https://azure.microsoft.com/services/app-service/web/)   
   :::column-end::: 
   :::column span="3":::
      Use publish profile to deploy Azure WebApps for Windows from the Deployment Center. To learn more, see the following articles:   
     - [Deploy an Azure Web App](targets/webapp-linux.md)
     - [Deploy an Azure Web App Container](targets/webapp-on-container-linux.md)
     - [Deploy to Azure App Service using Visual Studio Code](targets/deploy-to-azure-vscode.md)
     - [Azure App Service Deploy task](tasks/deploy/azure-rm-web-app-deployment.md)
     - [Azure App Service Manage task](tasks/deploy/azure-app-service-manage.md)
     - [Azure App Service Settings task](tasks/deploy/azure-app-service-settings.md) 
   :::column-end:::
:::row-end:::
---



<!---


| Service                                             | Description                                                                                                                                           | Resources                                                    |
| --------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| Azure Web App Service / App Service for Containers  | A managed service for hosting web apps, mobile app back ends, RESTful APIs, or automated business processes                                           | [Deploy an Azure Web App](targets/webapp-linux.md), [Deploy an Azure Web App Container](targets/webapp-on-container-linux.md), [Deploy to Azure App Service using Visual Studio Code](targets/deploy-to-azure-vscode.md), [Azure App Service Deploy task](tasks/deploy/azure-rm-web-app-deployment.md), [Azure App Service Manage task](tasks/deploy/azure-app-service-manage.md), [Azure App Service Settings task](tasks/deploy/azure-app-service-settings.md) |
| Azure Static Web Apps                               | Automatically builds and deploys full stack web apps to Azure from a code repository                                                                  | [Tutorial: Publish Azure Static Web Apps with Azure DevOps](/azure/static-web-apps/publish-devops)                                                           |
| Azure Functions                                     | Serverless solution for hosting applications                                                                                                          |  [Deploy an Azure Function](targets/azure-functions.md), [Azure Function App task](tasks/deploy/azure-function-app.md), [Azure Function App for Containers task](tasks/deploy/azure-rm-functionapp-containers.md) |
| Azure Databases (SQL, MySQL)              | Managed database solutions | [Deploy to Azure SQL Database](targets/azure-sqldb.md), [Azure SQL Database Deployment task](tasks/deploy/sql-azure-dacpac-deployment.md), [Azure Database for MySQL Deployment task](tasks/deploy/azure-mysql-deployment.md), [Quickstart: Deploy to Azure MySQL](targets/azure-mysql.md)
| Azure DevOps Starter                                | Azure portal tool for quickly setting up a CI/CD pipeline   | [Overview of DevOps Starter](/azure/devops-project/overview) |
| Azure App Configuration   | Service to centrally manage application settings and feature flags | [Push settings to App Configuration with Azure Pipelines](/azure/azure-app-configuration/push-kv-devops-pipeline), [Pull settings to App Configuration with Azure Pipelines](/azure/azure-app-configuration/pull-key-value-devops-pipeline)                                                            |
| Azure Blob Storage                                  | Object storage solution for storing large amounts of unstructured data in the cloud  |     [Azure File Copy task](tasks/deploy/azure-file-copy.md)                                                         | 
| Azure Kubernetes Service                            | Managed Kubernetes service for running containerized applications |  [Build and deploy to Azure Kubernetes Service](ecosystems/kubernetes/aks-template.md)  |
| Azure Machine Learning                              | Cloud-based environment for working with machine learning models |  [Prepare data, train, deploy, and monitor machine learning models with Azure Pipelines](targets/azure-machine-learning.md)                                                            |
| Azure Resource Manager                              | Deployment and management service for Azure. Azure Resource Manager templates (ARM templates) are a way of quickly deploying infrastructure as code.  |    [Integrate ARM templates with Azure Pipelines](/azure/azure-resource-manager/templates/add-template-to-azure-pipelines), [Quickstart: Use an ARM template to deploy a Linux web app to Azure](apps/cd/azure/deploy-arm-template.md) |
| Azure Container Registry                            | Managed, private Docker registry service   |  [Build and push Docker images to Azure Container Registry](ecosystems/containers/acr-template.md)    |
| Azure Service Fabric                                | Distributed systems platform that can run in many environments, including Azure or on premises   |    [Tutorial: Deploy an application with CI/CD to a Service Fabric cluster](/azure/service-fabric/service-fabric-tutorial-deploy-app-with-cicd-vsts), [Service Fabric Application Deployment task](tasks/deploy/service-fabric-deploy.md)                                                         |
| Azure IoT Edge                                      | Managed service built on Azure IoT Hub.                                       |  [Continuous integration and continuous deployment to Azure IoT Edge devices](/azure/iot-edge/how-to-continuous-integration-continuous-deployment), [Create a CI/CD pipeline for IoT Edge with Azure DevOps Starter](/azure/iot-edge/how-to-devops-starter)                                                           |
| Azure Key Vault   | Managed service for storing secret data.    | [Use Azure Key Vault secrets in Azure Pipelines](release/azure-key-vault.md), [Azure Key Vault task](tasks/deploy/azure-key-vault.md)


-->

