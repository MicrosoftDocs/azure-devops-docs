---
ms.topic: include
---

### Kubernetes integration for Azure Pipelines

Kubernetes and Docker containers have become an important part of many organizations’ technology stack. Kubernetes allows you to increase the agility of your infrastructure when running your apps at scale. Combining containers with DevOps practices can make the development process much more agile through continuous integration and continuous delivery practices built around containers.

To help you move forward with containers, we've made it easy to get started in Azure Pipelines so you can build applications with Docker containers and deploy them to Kubernetes clusters, in any cloud. We have also added a dedicated Kubernetes Environments view in Azure Pipelines. 

You can see the details on new features and the full announcement [here](https://devblogs.microsoft.com/devops/announcing-kubernetes-integration-for-azure-pipelines/). 

### Multi-stage YAML pipelines

We now offer a unified YAML experience so you can configure your pipelines to utilize both continuous integration (CI) and continuous delivery (CD). Defining your pipelines using YAML documents allows you to check the pipeline configuration into source control along with your application’s code, for easy management, versioning, and control.

With the new YAML support, we’re also adding a new UI to help you visualize all multi-stage pipelines across the product. In addition, we have a new log viewing experience that lets you easily jump between stages and jobs along with helping you quickly identify errors and warnings. 

Finally, we have also added the concept of Environments to help diagnose deployment failures, improve traceability and track multiple deployments.

To enable these features, go to the preview features page and turn on **Multi-stage pipelines**.

For more details about these features you can see the full announcement [here](https://devblogs.microsoft.com/devops/whats-new-with-azure-pipelines/).
