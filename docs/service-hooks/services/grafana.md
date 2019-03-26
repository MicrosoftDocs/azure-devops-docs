---
ms.prod: devops
ms.technology: devops-collab
ms.topic: conceptual
title: Create a service hook for Azure DevOps Services and TFS with Grafana
description: Annotate Grafana dashboards upon completion of deployments in Azure Pipelines
ms.assetid: d588f4a0-8081-4684-b87e-64d3140b8b1c
ms.manager: shasb
monikerRange: 'azure-devops'
ms.author: shasb
author: shashankbarsin
ms.date: 03/24/2019
---

# Create a service hook for Azure DevOps Services and TFS with Grafana

Grafana is an open source, feature rich metrics dashboard and graph editor for Graphite, Elasticsearch, OpenTSDB, Prometheus and InfluxDB. The service hook described in this document can be used to annotate Grafana dashboards upon completion of deployments in Azure Pipelines.

![Grafana dashboard with annotations](./_img/grafana/dashboard-with-annotations.png)

## Create a service hook subscription
1. Navigate to project settings: 

	`https://dev.azure.com/{orgName}/{project_name}/_settings/serviceHooks`

	![Project settings page](./_img/add-devops-service-hook.png)

	Select **Create Subscription**.

2. Choose **Grafana** among the list of services and click on **Next**

    ![Choose Grafana service](./_img/grafana/choose-grafana.png)

3. For **Release deployment completed** event, configure the optional filters - **Release pipeline name**, **Stage name** and **Status**

    ![Configure release deployment completed filters](./_img/grafana/deployment-completed-filters.png)

4. Provide the Grafana URL and [API token](https://go.microsoft.com/fwlink/?linkid=2085301) required for Azure DevOps to post annotations. If the **Annotate deployment duration window** checkbox is checked, the annotation added corresponds to the duration of the deployment (start and end timestamps of deployment). If unchecked, annotation corresponds to only the completion timestamp of the deployment. The dashboard input can be used to choose a specific dashboard as the target of annotations rather than the default behaviour of annotating all dashboards. Click on **Test** to verify that Azure DevOps is able to use the provided configuration and successfully create a subscription. Once verified, click on **Finish** to complete the creation of subscription.

    ![Annotation settings](./_img/grafana/annotation-settings.png)
