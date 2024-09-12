---
title: Service connections
ms.custom: pipelinesresourcesrefresh, arm2024
description: Learn how to manage Azure Pipelines service connections and get a reference to service connection types.
ms.assetid: A40435C0-2053-4D99-9A75-CCB97FBB15D2
ms.topic: conceptual
ms.author: ronai
author: RoopeshNair
ms.date: 07/26/2024
monikerRange: '<= azure-devops'
---

# Manage service connections

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

This article covers service connections in Azure Pipelines. Service connections are authenticated connections between Azure Pipelines and external or remote services that you use to execute tasks in a job.

For example, your pipelines might use the following categories of service connections:

- Azure subscriptions, to use for Azure Web Site Deployment tasks.
- Different build servers or file servers, such as a standard GitHub Enterprise Server service connection to a GitHub repository.
- Online continuous integration environments, such as a Jenkins service connection for continuous integration of Git repositories.
- Services installed on remote computers, such as an Azure Resource Manager service connection to an Azure virtual machine with a managed service identity.
- External services, such as a service connection to a Docker registry, Kubernetes cluster, or Maven repository.
  
The first part of this article explains how to create, view, edit, and use service connections. The second part of the article provides a reference to [Azure Pipelines service connection types](#common-service-connection-types).

## Prerequisites

- An Azure DevOps project and pipeline.
- The appropriate assigned user roles to create, view, use, or manage a service connection. For more information, see [Service connection permissions](../policies/service-connection-permissions.md).

## Create a service connection

To create a service connection for Azure Pipelines:

1. In your Azure DevOps project, select **Project settings** > **Service connections**.

1. Select **New service connection**, select the type of service connection that you need, and then select **Next**.

1. Choose an authentication method, and then select **Next**.

1. Enter the parameters for the service connection. The parameters vary based on the [service connection type](#common-service-connection-types) and authentication method.

   Depending on the service connection type and authentication method, there might be a link to **Verify** the connection. The validation link uses a REST call to the external service with the information that you entered, and indicates whether the call succeeded.
   
1. Enter a **Service connection name** to use for the service connection in task properties.

1. Optionally, enter a **Description**.

1. Select **Grant access permission to all pipelines** to allow all pipelines to use this connection.

   If you don't select this option, you must later explicitly [authorize each pipeline to use the service connection](#authorize-pipelines).
   
1. Select **Save** or **Verify and save**.

The following example shows an Azure Resource Manager connection to an Azure subscription. You use the **Service connection name** as the `azureSubscription` or equivalent subscription name value in pipeline tasks.

:::image type="content" source="media/new-azure-resource-manager-connection.png" alt-text="Screenshot of the New Azure service connection screen.":::

## View a service connection

To view information about a service connection, from your project select **Project settings** > **Service connections**, and select the service connection that you want to view.

- The **Overview** tab shows the details of the service connection, such as connection type, creator, and authentication type.

  :::image type="content" source="media/azure-overview-page.png" alt-text="Screenshot of Azure Resource Manager overview page." lightbox="media/azure-overview-page.png":::

- The **Usage history** tab shows details about historical usage of the service connection.

  :::image type="content" source="media/azure-usage-history.png" alt-text="Screenshot of Azure Resource Manager usage history." lightbox="media/azure-usage-history.png":::

- The **Approvals and checks** tab shows the [approvals and checks](../process/approvals.md) that allow a pipeline stage to use the service connection. To add approvals and checks, select the **+** symbol or **Add new**.

  :::image type="content" source="media/azure-approvals-checks.png" alt-text="Screenshot of Azure Resource Manager approvals and checks." lightbox="media/azure-approvals-checks.png":::

## Edit a service connection

- To edit service connection properties, select **Edit** on the service connection page. The parameters that you can edit depend on the service connection type and authentication method.

- You can also select **Security** or **Delete** on the **More options** menu. For more information about managing security permissions, see [Set service connection permissions](../policies/permissions.md#set-service-connection-security-in-azure-pipelines).

- To edit existing approvals and checks, select from the **More options** menu next to the approval on the **Approvals and checks** tab.

:::image type="content" source="media/azure-edit-service-connection.png" alt-text="Screenshot of ways to edit Azure Resource Manager service connection." lightbox="media/azure-edit-service-connection.png":::

## Use a service connection

To use the service connection in pipelines:

- For YAML pipelines, use the connection name in your code as the `azureSubscription` or other connection name value.

  :::image type="content" source="media/yaml-connection-setting.png" alt-text="Screenshot of YAML service connection setting.":::

<a id="classic"></a>
- For Classic pipelines, select the connection name in the **Azure subscription** or other connection name setting in your pipeline task.

  :::image type="content" source="media/ui-connection-setting.png" alt-text="Screenshot of classic service connection setting." lightbox="media/ui-connection-setting.png":::

### Authorize pipelines

- To authorize all pipelines to use the service connection, select the **Allow all pipelines to use this connection** option in the connection properties.

- To authorize a single pipeline to use the service connection:

  1. Select **Run pipeline** on the pipeline page to queue a manual build.
  1. The message **This pipeline needs permission to access a resource before this run can continue** appears. Select **View** next to the message.
  1. On the **Waiting for review** screen, select **Permit**, and on the confirmation screen, select **Permit** again.

  This action explicitly adds the pipeline as an authorized user of the service connection.

## Common service connection types

Azure Pipelines supports the following service connection types by default. You can also create your own [custom service connections](../../extend/develop/service-endpoints.md).

| Service connection type | Description |
|-------------------------|-------------|
| [Azure Classic](#azure-classic-service-connection) | Connect to your Azure subscription via credentials or certificate. |
| [Azure Repos/Team Foundation Server](#azure-repos) | Connect to Azure Repos in your DevOps organization or collection.|
| [Azure Resource Manager](#azure-resource-manager-service-connection) | Connect to Azure resources. |
| [Azure Service Bus](#azure-service-bus-service-connection) | Connect to an Azure Service Bus queue. |
| [Bitbucket Cloud](#bitbucket-cloud-service-connection) | Connect to a Bitbucket Cloud repository.|
| [Cargo](#cargo-service-connection) | Connect to a Cargo package repository.|
| [Chef](#chef-service-connection) | Connect to a Chef repository. |
| [Docker Host](#docker-host-service-connection) | Connect to a Docker host. |
| [Docker Registry](#docker-registry-service-connection) | Connect to a Docker registry through a Docker Hub, Azure Container Registry, or other sources.  |
| [Generic](#generic-service-connection) | Connect to a generic server.|
| [GitHub](#github-service-connection) | Connect to a GitHub repository. |
| [GitHub Enterprise Server](#github-enterprise-server-service-connection) | Connect to a GitHub Enterprise repository. |
| [Incoming Webhook](#incoming-webhook-service-connection) | Connect to an incoming webhook. |
| [Jenkins](#jenkins-service-connection) | Connect to a Jenkins server.|
| [Jira](#jira-service-connection) | Connect to a Jira server. |
| [Kubernetes](#kubernetes-service-connection) | Connect to a Kubernetes cluster. |
| [Maven](#maven-service-connection) | Connect to a Maven repository. |
| [npm](#npm-service-connection) | Connect to an npm repository. |
| [NuGet](#nuget-service-connection) | Connect to a NuGet server. |
| [Other Git](#other-git-service-connection) | Connect to a git repository. |
| [Python package download](#python-package-download-service-connection) | Connect to a Python repository for download. |
| [Python package upload](#python-package-upload-service-connection) | Connect to a Python repository for upload.|
| [Service Fabric](#service-fabric-service-connection) | Connect to an Azure Service Fabric cluster.|
| [SSH](#ssh-service-connection) | Connect to a host via SSH. |
| [Subversion](#subversion-service-connection) | Connect to an Apache Subversion repository. |
| [Visual Studio App Center](#visual-studio-app-center-service-connection) | Connect to Visual Studio App Center server. |

### Azure Classic service connection

Use the following parameters to define and secure a connection to a Microsoft Azure subscription, using Azure credentials or an Azure management certificate.

| Parameter | Description |
| --------- | ----------- |
| Authentication method | Required. Select **Credentials** or **Certificate based**. |
| Environment | Required. Select **Azure Cloud**, **Azure Stack**, or one of the predefined [Azure Government Clouds](/azure/azure-government/connect-with-azure-pipelines) where your subscription is defined. |
| Subscription ID | Required. The GUID-like identifier for your Azure subscription (not the subscription Name). You can copy the subscription ID from the Azure portal. |
| Subscription Name | Required. The name of your Microsoft Azure subscription. |
| Username | Required for Credentials authentication. User name of a work or school account (for example @fabrikam.com). Microsoft accounts (for example @live or @hotmail) are't supported. |
| Password | Required for Credentials authentication. Password for the specified user. |
| Management Certificate | Required for Certificate-based authentication. Copy the value of the management certificate key from your [publish settings XML file](https://go.microsoft.com/fwlink/?LinkID=312990) or the Azure portal. |
| Connection name | Required. The name you use to refer to the service connection in task properties. If you're using YAML, use the name as the **azureSubscription** or the equivalent subscription name value in the script. |
| Description | Optional. The description of the service connection. |
| Security | Optional. Select **Grant access permission to all pipelines** to allow all pipelines to use this connection. If you don't select this option, you must explicitly authorize the service connection for each pipeline that uses it. |

For certificate authentication, select **Verify** to validate your connection information.

If your subscription is defined in an [Azure Government Cloud](/azure/azure-government/connect-with-azure-pipelines), ensure your application meets the relevant compliance requirements before you configure a service connection.

### Azure Repos

Connect to an Azure DevOps organization or project collection using basic or token-based authentication.
Use the following parameters to define and secure a connection to another Azure DevOps organization.

| Parameter | Description  |
|-----------------------|-----|
| Authentication method | Select **Token Based** or **Basic** authentication.|
| Connection URL  |  Required. The URL of DevOps organization or project collection.|
| Username | Required for Basic authentication. The username to connect to the service.|
| Password  |  Required for Basic authentication. The password for the specified username.|
| Personal Access Token | Required for Token Based authentication. The token to use to authenticate with the service. [Learn more](../../organizations/accounts/use-personal-access-tokens-to-authenticate.md). |
| Connection name | Required. The name you use to refer to the service connection in task properties. If you're using YAML, use the name as the **azureSubscription** or the equivalent subscription name value in the script. |
| Description | Optional. The description of the service connection. |
| Security | Optional. Select **Grant access permission to all pipelines** to allow all pipelines to use this connection. If you don't select this option, you must explicitly authorize the service connection for each pipeline that uses it. |

Select **Verify** to validate your connection information.

For more information, see [Authenticate access with personal access tokens for Azure DevOps](../../organizations/accounts/use-personal-access-tokens-to-authenticate.md).

### Azure Resource Manager service connection

For information about creating a service connection to an Azure Resource Manager service, see [Connect to Azure by using an Azure Resource Manager service connection](connect-to-azure.md).

### Azure Service Bus service connection

Use the following parameters to define and secure a connection to a Microsoft Azure Service Bus queue.

| Parameter  | Description  |
|---|--|
| Service Bus Queue Name | The name of an existing Azure Service Bus queue. |
| Service Bus Connection string |  Primary or secondary connection string for your queue. For information about how to get the connection string see, [Get the connection string](/azure/service-bus-messaging/service-bus-dotnet-get-started-with-queues#authenticate-the-app-to-azure).|
| Connection name | Required. The name you use to refer to the service connection in task properties. If you're using YAML, use the name as the **azureSubscription** or the equivalent subscription name value in the script. |
| Description | Optional. The description of the service connection. |
| Security | Optional. Select **Grant access permission to all pipelines** to allow all pipelines to use this connection. If you don't select this option, you must explicitly authorize the service connection for each pipeline that uses it. |


### Bitbucket Cloud service connection


Use OAuth with **Grant authorization** or a username and password with **Basic Authentication** to define a connection to Bitbucket Cloud. For pipelines to keep working, your repository access must remain active.

| Parameter | Description  |
|-----------------------|-----|
| Authentication method | Select **Grant authorization** or **Basic Authentication**.|
| OAuth configuration | Required for Grant authorization. OAuth connection to Bitbucket. |
| Username | Required for Basic authentication. The username to connect to the service.|
| Password  |  Required for Basic authentication. The password for the specified username.|
| Connection name | Required. The name you use to refer to the service connection in task properties. If you're using YAML, use the name as the **azureSubscription** or the equivalent subscription name value in the script. |
| Description | Optional. The description of the service connection. |
| Security | Optional. Select **Grant access permission to all pipelines** to allow all pipelines to use this connection. If you don't select this option, you must explicitly authorize the service connection for each pipeline that uses it. |

Select **Verify** or **Authorize** to validate your connection information.


### Cargo service connection

Use the following parameters to define and secure a connection to a [Cargo](../../artifacts/get-started-cargo.md) artifact repository.

| Parameter | Description |
| --------- | ----------- |
| Authentication method | Choose the authentication method to the artifacts repository: **Basic username/password (including Azure DevOps PATs)** or **Authorization value (including crates.io tokens)**. |
| Repository URL | Required. URL for the repository. For crates.io, use `https://crates.io` |
| Username | Required when Basic authentication is selected. Username for connecting to the endpoint. The value can be arbitrary if using personal access tokens or the Authorization value authentication method. |
| Password | Required when Basic authentication is selected. Password for connecting to the endpoint. Personal access tokens are applicable for Azure DevOps Services organizations. |
| Token | Required when **Authorization value** authentication is selected. |
| Service connection name | Name for the service connection |
| Connection name | Required. The name you use to refer to the service connection in task properties. If you're using YAML, use the name as the **azureSubscription** or the equivalent subscription name value in the script. |
| Description | Optional. The description of the service connection. |
| Security | Optional. Select **Grant access permission to all pipelines** to allow all pipelines to use this connection. If you don't select this option, you must explicitly authorize the service connection for each pipeline that uses it. |

### Chef service connection

Use the following parameters to define and secure a connection to a [Chef](https://docs.chef.io/chef_overview.html) automation server.

| Parameter | Description |
| --------- | ----------- |
| Server URL | Required. The URL of the Chef automation server. |
| Node Name (Username) | Required. The name of the node to connect to. Typically this parameter is your username. |
| Client Key | Required. The key specified in the Chef .pem file. |
| Service connection name | Name for the service connection |
| Connection name | Required. The name you use to refer to the service connection in task properties. If you're using YAML, use the name as the **azureSubscription** or the equivalent subscription name value in the script. |
| Description | Optional. The description of the service connection. |
| Security | Optional. Select **Grant access permission to all pipelines** to allow all pipelines to use this connection. If you don't select this option, you must explicitly authorize the service connection for each pipeline that uses it. |

### Docker Host service connection

Use the following parameters to define and secure a connection to a Docker host.

| Parameter | Description |
| --------- | ----------- |
| Server URL | Required. The URL of the Docker host. |
| CA certificate | Required. A trusted certificate authority certificate to use to authenticate with the host. |
| Certificate | Required. A client certificate to use to authenticate with the host. |
| Key | Required. The key specified in the Docker key.pem file. |
| Service connection name | Name for the service connection |
| Connection name | Required. The name you use to refer to the service connection in task properties. If you're using YAML, use the name as the **azureSubscription** or the equivalent subscription name value in the script. |
| Description | Optional. The description of the service connection. |
| Security | Optional. Select **Grant access permission to all pipelines** to allow all pipelines to use this connection. If you don't select this option, you must explicitly authorize the service connection for each pipeline that uses it. |

For more information about protecting your connection to the Docker host, see [Protect the Docker daemon socket](https://docs.docker.com/engine/security/https/).

### Docker Registry service connection

You can create a service connection to a Docker container registry.

Select the registry type:

* [Docker Hub](#docker-hub-or-others)
* [Others](#docker-hub-or-others)
::: moniker range="azure-devops"
* [Azure Container Registry](#azure-container-registry)
:::moniker-end

#### Docker Hub or Others

Enter the following parameters to define a connection to a **Docker Hub** registry or **Others**.

| Parameter | Description |
| --------- | ----------- |
| Docker Registry | Required. The URL of the Docker registry. |
| Docker ID | Required. The identifier of the Docker account user. |
| Docker Password | Required. The password for the Docker ID. (Docker Hub requires a PAT instead of a password.) |
| Email | Optional. An email address to receive notifications. |
| Connection name | Required. The name you use to refer to the service connection in task properties. If you're using YAML, use the name as the **azureSubscription** or the equivalent subscription name value in the script. |
| Description | Optional. The description of the service connection. |
| Security | Optional. Select **Grant access permission to all pipelines** to allow all pipelines to use this connection. If you don't select this option, you must explicitly authorize the service connection for each pipeline that uses it. |

You can select **Verify** to verify your credentials before entering the rest of the parameters.

::: moniker range="azure-devops"
#### Azure Container Registry

You can connect to an Azure Container Registry using either a [Service Principal](#service-principal-authentication-type), [Managed Identity](#managed-identity-authentication-type), or [Workload Identity federation](#workload-identity-federation-authentication-type) **Authentication Type**.

##### Service Principal authentication type

Enter the following parameters to define a connection to an Azure Container Registry using a service principal.

| Parameter | Description |
| --------- | ----------- |
| Subscription | Required. The Azure subscription containing the container registry to be used for service connection creation. |
| Azure Container Registry | Required. The Azure Container Registry to be used for creation of service connection. |
| Connection name | Required. The name you use to refer to the service connection in task properties. If you're using YAML, use the name as the **azureSubscription** or the equivalent subscription name value in the script. |
| Description | Optional. The description of the service connection. |
| Security | Optional. Select **Grant access permission to all pipelines** to allow all pipelines to use this connection. If you don't select this option, you must explicitly authorize the service connection for each pipeline that uses it. |

##### Managed Identity authentication type

Enter the following parameters to define a connection to an Azure Container Registry using a **Managed Service Identity**.

| Parameter | Description |
| --------- | ----------- |
| Subscription ID | Required. The GUID-like identifier for your Azure subscription (not the subscription name). You can copy the subscription ID from the Azure portal. |
| Subscription name | Required. The name of your Microsoft Azure subscription. |
| Tenant ID | Required. The GUID-like identifier for your Microsoft Entra ID tenant. You can copy the tenant ID from the Azure portal. |
| Azure container registry login server | Required. The login server of the Azure Container Registry. |
| Connection name | Required. The name you use to refer to the service connection in task properties. If you're using YAML, use the name as the **azureSubscription** or the equivalent subscription name value in the script. |
| Description | Optional. The description of the service connection. |
| Security | Optional. Select **Grant access permission to all pipelines** to allow all pipelines to use this connection. If you don't select this option, you must explicitly authorize the service connection for each pipeline that uses it. |

##### Workload Identity federation authentication type

Enter the following parameters to define a connection to an Azure Container Registry using **Workload Identity federation**.

| Parameter | Description |
| --------- | ----------- |
| Subscription | Required. The Azure subscription containing the container registry to use for service connection creation. |
| Azure container registry | Required. The Azure Container Registry instance to use for creation of the service connection. |
| Connection name | Required. A name to use to refer to the service connection in task properties. For YAML pipelines, use the name as the **azureSubscription** or other connection name value in the script. |
| Description | Optional. The description of the service connection. |
| Security | Optional. Select **Grant access permission to all pipelines** to allow all pipelines to use this connection. If you don't select this option, you must explicitly authorize the service connection for each pipeline that uses it. |
::: moniker-end

### Generic service connection

Use the following parameters to define and secure a connection to any generic type of service or application.

| Parameter | Description |
| --------- | ----------- |
| Server URL | Required. The URL of the service. |
| Username | Optional. The username to connect to the service. |
| Password/Token key | Optional. The password or access token for the specified username. |
| Connection name | Required. The name you use to refer to the service connection in task properties. If you're using YAML, use the name as the **azureSubscription** or the equivalent subscription name value in the script. |
| Description | Optional. The description of the service connection. |
| Security | Optional. Select **Grant access permission to all pipelines** to allow all pipelines to use this connection. If you don't select this option, you must explicitly authorize the service connection for each pipeline that uses it. |

### GitHub service connection

Use the following parameters to define a connection to a GitHub repository. 

> [!TIP]
> There's a specific service connection for [Other Git servers](#other-git-service-connection) and [GitHub Enterprise Server connections](#github-enterprise-server-service-connection).

|Parameter | Description  |
|----------------------|----|
| Choose authorization |  Required. Either **Grant authorization** or **Personal access token**. |
| Token| Required for Personal access token authorization. Your GitHub Personal Access Token (PAT). |
| Grant authorization | Required for Grant authorization. The OAuth Configuration to use to connect to the service. For example, select **AzurePipelines** to connect the Azure Pipeline. |
| Connection name | Required. The name you use to refer to the service connection in task properties. If you're using YAML, use the name as the **azureSubscription** or the equivalent subscription name value in the script. |
| Description | Optional. The description of the service connection. |
| Security | Optional. Select **Grant access permission to all pipelines** to allow all pipelines to use this connection. If you don't select this option, you must explicitly authorize the service connection for each pipeline that uses it. |

> [!NOTE]
> If you select **Grant authorization** for the **Choose authorization** option, the dialog shows an **Authorize** button that opens the GitHub signing page. If you select **Personal access token**, paste it into the **Token** textbox. The dialog shows the recommended scopes for the token: **repo, user, admin:repo_hook**. For more information, see
[Create an access token for command line use](https://help.github.com/articles/creating-an-access-token-for-command-line-use/)
Then, complete the following steps to register your GitHub account in your profile.

1. Open your **User settings** from your account name at the right of the Azure Pipelines page heading.
2. Choose **Personal access tokens**.
3. Select **Add** and enter the information required to create the token.

For more information, see [Artifact sources - version control](../release/artifacts.md#azure-repos-github-and-tfvc).

### GitHub Enterprise Server service connection

Use the following parameters to define a connection to a GitHub Enterprise repository.

> [!TIP]
> There's a specific service connection for [Other Git servers](#other-git-service-connection) and [standard GitHub service connections](#github-service-connection).

|  Parameter| Description  |
|--|----|
|Choose authorization| Required. Either **Personal access token**, **Username and Password**, or **OAuth2**. |
| Server URL |  Required. The URL of the service.|
| Accept untrusted TLS/SSL certificates|  Set this option to allow clients to accept a self-signed certificate instead of installing the certificate in the Azure Pipelines service role or the computers hosting the [agent](../agents/agents.md).|
| Token | Required for Personal access token authorization. |
| Username| Required for Username and Password authentication. The username to connect to the service. |
| Password | Required for Username and Password authentication. The password for the specified username. |
| OAuth configuration | Required for OAuth2 authorization. You can use an existing OAuth configuration or create a new configuration. |
| GitHub Enterprise Server configuration URL |The URL is fetched from OAuth configuration.|
| Connection name | Required. The name you use to refer to the service connection in task properties. If you're using YAML, use the name as the **azureSubscription** or the equivalent subscription name value in the script. |
| Description | Optional. The description of the service connection. |
| Security | Optional. Select **Grant access permission to all pipelines** to allow all pipelines to use this connection. If you don't select this option, you must explicitly authorize the service connection for each pipeline that uses it. |

> [!NOTE]
> If you select **Personal access token** (PAT) you must paste the PAT into the **Token** textbox. The dialog shows the recommended scopes for the token: **repo, user, admin:repo_hook**. For more information, see
[Create an access token for command line use](https://help.github.com/articles/creating-an-access-token-for-command-line-use/)
Then, complete the following steps to register your GitHub account in your profile.

1. Open your **User settings** from your account name at the right of the Azure Pipelines page heading.
2. Choose **Personal access tokens**.
3. Select **Add** and enter the information required to create the token.

### Incoming WebHook service connection

Use the following parameters to create an incoming Webhook service connection.

| Parameter | Description  |
|--|--|
| WebHook Name | Required. The name of the WebHook. |
| Secret | Optional. The secret to use to authenticate with the WebHook. |
| HTTP Header | Optional. The headers name on which checksum is sent. |
| Connection name | Required. The name you use to refer to the service connection in task properties. If you're using YAML, use the name as the **azureSubscription** or the equivalent subscription name value in the script. |
| Description | Optional. The description of the service connection. |
| Security | Optional. Select **Grant access permission to all pipelines** to allow all pipelines to use this connection. If you don't select this option, you must explicitly authorize the service connection for each pipeline that uses it. |

### Jenkins service connection

Use the following parameters to define a connection to the Jenkins service.

| Parameter | Description  |
|--|--|
| Server URL | Required. The URL of the Jenkins server. |
| Accept untrusted TLS/SSL certificates |  Set this option to allow clients to accept a self-signed certificate instead of installing the certificate in the Azure Pipelines service role or the computers hosting the [agent](../agents/agents.md).|
| Username | Required. The username to connect to the service. |
| Password  | Required. The password for the specified username.|
| Connection name | Required. The name you use to refer to the service connection in task properties. If you're using YAML, use the name as the **azureSubscription** or the equivalent subscription name value in the script. |
| Description | Optional. The description of the service connection. |
| Security | Optional. Select **Grant access permission to all pipelines** to allow all pipelines to use this connection. If you don't select this option, you must explicitly authorize the service connection for each pipeline that uses it. |

You can select **Verify** to verify your credentials before entering the rest of the parameters.

For more information, see [Azure Pipelines Integration with Jenkins](https://azuredevopslabs.com/labs/vstsextend/jenkins/) and [Artifact sources - Jenkins](../release/artifacts.md#jenkins).


### Jira service connection

Use the following parameters to define a connection to the Jira service.

| Parameter | Description  |
|--|--|
| Server URL | Required. The URL of the Jira server. |
| Connection name | Required. The name you use to refer to the service connection in task properties. If you're using YAML, use the name as the **azureSubscription** or the equivalent subscription name value in the script. |
| Description | Optional. The description of the service connection. |
| Security | Optional. Select **Grant access permission to all pipelines** to allow all pipelines to use this connection. If you don't select this option, you must explicitly authorize the service connection for each pipeline that uses it. |

### Kubernetes service connection

Use the following parameters when you define a connection to a Kubernetes cluster. Choose the **Authentication method** from the following options:

* Kubeconfig
* Service account
* Azure subscription

#### Kubeconfig option

| Parameter | Description |
| --------- | ----------|
| Kubeconfig | Required. Contents of the kubeconfig file. |
| Cluster context | Optional. Context within the kubeconfig file that is to be used for identifying the cluster. |
| Accept untrusted certificates | Set this option to allow clients to accept a self-signed certificate. |
| Connection name | Required. The name you use to refer to the service connection in task properties. If you're using YAML, use the name as the **azureSubscription** or the equivalent subscription name value in the script. |
| Description | Optional. The description of the service connection. |
| Security | Optional. Select **Grant access permission to all pipelines** to allow all pipelines to use this connection. If you don't select this option, you must explicitly authorize the service connection for each pipeline that uses it. |


#### Service account option

| Parameter | Description |
| --------- | ----------- |
| Server URL | Required. Cluster's API server URL. |
| Secret | Secret associated with the service account to be used for deployment. |
| Connection name | Required. The name you use to refer to the service connection in task properties. If you're using YAML, use the name as the **azureSubscription** or the equivalent subscription name value in the script. |
| Description | Optional. The description of the service connection. |
| Security | Optional. Select **Grant access permission to all pipelines** to allow all pipelines to use this connection. If you don't select this option, you must explicitly authorize the service connection for each pipeline that uses it. |

Use the following command to fetch the Server URL.

```
kubectl config view --minify -o 'jsonpath={.clusters[0].cluster.server}'
```

Use the following sequence of commands to fetch the Secret object required to connect and authenticate with the cluster.

```
kubectl get serviceAccounts <service-account-name> -n <namespace> -o 'jsonpath={.secrets[*].name}'
```

In the following command, replace the `service-account-secret-name` with the output of the previous command.

```
kubectl get secret <service-account-secret-name> -n <namespace> -o json
```

Copy and paste the Secret object fetched in YAML form into the Secret text-field.

> [!NOTE]
> When using the service account option, [ensure that a RoleBinding exists](https://kubernetes.io/docs/reference/access-authn-authz/rbac/#kubectl-create-rolebinding), which grants permissions in the `edit` `ClusterRole` to the desired service account. This is needed so that the service account can be used by Azure Pipelines for creating objects in the chosen namespace.

#### Azure subscription option

| Parameter | Description |
| --------- | ----------- |
| Azure subscription | Required. The Azure subscription containing the cluster to be used for service connection creation. |
| Cluster | Name of the Azure Kubernetes Service cluster. |
| Namespace | Namespace within the cluster. |
| Connection name | Required. The name you use to refer to the service connection in task properties. If you're using YAML, use the name as the **azureSubscription** or the equivalent subscription name value in the script. |
| Description | Optional. The description of the service connection. |
| Security | Optional. Select **Grant access permission to all pipelines** to allow all pipelines to use this connection. If you don't select this option, you must explicitly authorize the service connection for each pipeline that uses it. |

For an Azure RBAC enabled cluster, a ServiceAccount gets created in the chosen namespace along with RoleBinding object, so that the created ServiceAccount can do actions only on the chosen namespace.

For an Azure RBAC disabled cluster, a ServiceAccount gets created in the chosen namespace, but, the created ServiceAccount has cluster-wide privileges (across namespaces).

> [!NOTE]
> This option lists all the subscriptions the service connection creator has access to *across different Azure tenants*. If you can't see subscriptions from other Azure tenants, check your Microsoft Entra permissions in those tenants.

### Maven service connection

Use the following parameters when you define and secure a connection to a Maven repository.

| Parameter | Description  |
|-----------------------|---------------|
| Authentication method | Required. Select **Username and Password** or **Authentication Token**. |
| Registry URL| Required. The URL of the Maven repository. |
| Registry ID | Required. The ID of the server that matches the ID element of the repository/mirror that Maven tries to connect to. |
| Username  | Required when connection type is **Username and Password**. The username for authentication.|
| Password  | Required when connection type is **Username and Password**. The password for the username. |
| Personal Access Token | Required when connection type is **Authentication Token**. The token to use to authenticate with the service. [Learn more](../../organizations/accounts/use-personal-access-tokens-to-authenticate.md). |
| Connection name | Required. The name you use to refer to the service connection in task properties. If you're using YAML, use the name as the **azureSubscription** or the equivalent subscription name value in the script. |
| Description | Optional. The description of the service connection. |
| Security | Optional. Select **Grant access permission to all pipelines** to allow all pipelines to use this connection. If you don't select this option, you must explicitly authorize the service connection for each pipeline that uses it. |

### npm service connection

Use the following parameters when you define and secure a connection to an npm server.

| Parameter | Description  |
|-----------------------|-------------|
| Authentication method | Required. Select **Username and Password** or **Authentication Token**. |
| Registry URL| Required. The URL of the Maven repository. |
| Username  | Required when connection type is **Username and Password**. The username for authentication.|
| Password  | Required when connection type is **Username and Password**. The password for the username. |
| Personal Access Token | Required **Authentication Token** is selected. The personal access token (PAT) to authenticate with the service or registry. PATs are applicable to repositories that support them, for example https://registry.npmjs.org DevOps Services organizations or Azure DevOps Server. For more information, see [Use personal access tokens](../../organizations/accounts/use-personal-access-tokens-to-authenticate.md). |
| Connection name | Required. The name you use to refer to the service connection in task properties. If you're using YAML, use the name as the **azureSubscription** or the equivalent subscription name value in the script. |
| Description | Optional. The description of the service connection. |
| Security | Optional. Select **Grant access permission to all pipelines** to allow all pipelines to use this connection. If you don't select this option, you must explicitly authorize the service connection for each pipeline that uses it. |

### NuGet service connection

Use the following parameters when you define and secure a connection to a NuGet server.

| Parameter | Description  |
|-----------------------|---------------------|
| Authentication method | Required. Select **ApiKey**, **External Azure Pipelines**, or **Basic authentication**. |
| Feed URL  | Required. The URL of the NuGet server.|
| ApiKey| Required when connection type is **ApiKey**. The authentication key.|
| Personal Access Token | Required when connection type is **External Azure Pipelines**. The token to use to authenticate with NuGet feeds on other Azure Services organizations or Azure DevOps Server. the service. For more information, see [Use personal access tokens](../../organizations/accounts/use-personal-access-tokens-to-authenticate.md).|
| Username  | Required when connection type is **Basic authentication**. The username for authentication. |
| Password  | Required when connection type is **Basic authentication**. The password for the username. |
| Connection name | Required. The name you use to refer to the service connection in task properties. If you're using YAML, use the name as the **azureSubscription** or the equivalent subscription name value in the script. |
| Description | Optional. The description of the service connection. |
| Security | Optional. Select **Grant access permission to all pipelines** to allow all pipelines to use this connection. If you don't select this option, you must explicitly authorize the service connection for each pipeline that uses it. |

To configure NuGet to authenticate with Azure Artifacts and other NuGet repositories, see [NuGet Authenticate](/azure/devops/pipelines/tasks/reference/nuget-authenticate-v1).


### Other Git service connection

Use the following parameters to define and secure a connection to an external Git repository server.
There's a specific service connection for [GitHub](#github-service-connection) and [GitHub Enterprise Server](#github-enterprise-server-service-connection).


| Parameter | Description |
| --------- | ----------- |
| Git repository URL | Required. The URL of the Git repository server. |
| Attempt accessing this Git server from Azure Pipelines | When checked, Azure Pipelines attempts to connect to the repository before queuing a pipeline run. You can disable this setting to improve performance when working with repositories that aren't publicly accessible. [CI triggers](../repos/pipeline-options-for-git.md#trigger-options-for-other-git) don't work when an **Other Git** repository isn't publicly accessible. You can only start manual or scheduled pipeline runs. |
| Username | Optional. The username to connect to the Git repository server. |
| Password/Token | Optional. The password or access token for the specified username. |
| Connection name | Required. The name you use to refer to the service connection in task properties. If you're using YAML, use the name as the **azureSubscription** or the equivalent subscription name value in the script. |
| Description | Optional. The description of the service connection. |
| Security | Optional. Select **Grant access permission to all pipelines** to allow all pipelines to use this connection. If you don't select this option, you must explicitly authorize the service connection for each pipeline that uses it. |

For more information, see [Artifact sources](../release/artifacts.md#artifact-sources).

### Python package download service connection

Use the following parameters when you define and secure a connection to a Python repository for downloading Python packages.

| Parameter  | Description  |
|----------------|-----------------|
| Authentication method | Required. Select **Username and Password** or **Authentication Token**. |
| Python repository url for download | Required. The URL of the Python feed. |
| Personal Access Token  | Required when connection type is **Authentication Token**. The personal access token (PAT) to use to authenticate with Python feeds that support them and DevOps Services organizations. For more information see, see [Use personal access tokens](../../organizations/accounts/use-personal-access-tokens-to-authenticate.md). |
|  Username  | Required when connection type is **Username and Password**. The username for authentication.|
|  Password  | Required when connection type is **Username and Password**. The password for the username. |
| Connection name | Required. The name you use to refer to the service connection in task properties. If you're using YAML, use the name as the **azureSubscription** or the equivalent subscription name value in the script. |
| Description | Optional. The description of the service connection. |
| Security | Optional. Select **Grant access permission to all pipelines** to allow all pipelines to use this connection. If you don't select this option, you must explicitly authorize the service connection for each pipeline that uses it. |

### Python package upload service connection

Use the following parameters when you define and secure a connection to a Python repository for uploading Python packages.

|Parameter | Description  |
|-----------------------|-------------------|
| Authentication method | Required. Select **Username and Password** or **Authentication Token**. |
| Python repository url for upload | Required. The URL of the Python feed. |
| EndpointName | Required. The unique repository used for the twine upload. Spaces and special characters aren't allowed. |
| Personal Access Token | see [Use personal access tokens](../../organizations/accounts/use-personal-access-tokens-to-authenticate.md). |
| Username | Required when connection type is **Username and Password**. The username for authentication.|
| Password | Required when connection type is **Username and Password**. The password for the username. |
| Connection name | Required. The name you use to refer to the service connection in task properties. If you're using YAML, use the name as the **azureSubscription** or the equivalent subscription name value in the script. |
| Description | Optional. The description of the service connection. |
| Security | Optional. Select **Grant access permission to all pipelines** to allow all pipelines to use this connection. If you don't select this option, you must explicitly authorize the service connection for each pipeline that uses it. |

### Service Fabric service connection

When creating a service connection to a Service Fabric cluster, you have three options for the authentication method: **Certificate based**, **Microsoft Entra credential**, or **Windows security using gMSA**.

#### Certificate based authentication option

|  Parameter  | Description  |
|-------------------------------|-------------------|
| Cluster Endpoint | Required. The client connection endpoint for the cluster. Prefix the value with *tcp://*. This value overrides the publish profile. |
| Server Certificate Lookup | Select **Thumbprint** or  **Common Name** when connection type is **Certificate based** or **Microsoft Entra credential**. |
| Server Certificate Thumbprint(s) | Required when connection type is **Certificate based** or **Microsoft Entra credential** and **Server Certification Lookup** is **Thumbprint**. The thumbprints of the cluster's certificates used to verify the identity of the cluster. This value overrides the publish profile. Separate multiple thumbprints with a comma (',') |
| Client Certificate | Required when connection type is **Certificate based**. Base64 encoding of the cluster's client certificate file. You can use the following PowerShell script to encode the certificate: `[System.Convert]::ToBase64String([System.IO.File]::ReadAllBytes("C:\path\to\certificate.pfx"))`|
| Username|  Required when connection type is **Microsoft Entra credential**. The username for authentication.|
| Password|  Required when connection type is **Microsoft Entra credential**. Optional when the authentication method is **Certificate based**. The certificate password.|
| Unsecured | Optional. Select this option to skip windows security authentication. |
| Cluster SPN | Optional. Applicable if Unsecured is selected. |
| Connection name | Required. The name you use to refer to the service connection in task properties. If you're using YAML, use the name as the **azureSubscription** or the equivalent subscription name value in the script. |
| Description | Optional. The description of the service connection. |
| Security | Optional. Select **Grant access permission to all pipelines** to allow all pipelines to use this connection. If you don't select this option, you must explicitly authorize the service connection for each pipeline that uses it. |

#### Microsoft Entra credential authentication option

|  Parameter  | Description  |
|-------------------------------|-------------------|
| Cluster Endpoint | Required. The client connection endpoint for the cluster. Prefix the value with *tcp://*. This value overrides the publish profile. |
| Server Certificate Lookup | Select **Thumbprint** or  **Common Name** |
| Server Certificate Thumbprint(s) | Required when connection type is **Certificate based** or **Microsoft Entra credential** and **Server Certification Lookup** is **Thumbprint**. The thumbprints of the cluster's certificates used to verify the identity of the cluster. This value overrides the publish profile. Separate multiple thumbprints with a comma (',') |
| Server Certificate Common Name(s) | Required when the Server Certificate Lookup is **Common Name**. The common names of the cluster's certificates used to verify the identity of the cluster. This value overrides the publish profile. Separate multiple common names with a comma (',')|
| Client Certificate | Required when connection type is **Certificate based**. Base64 encoding of the cluster's client certificate file. You can use the following PowerShell script to encode the certificate: `[System.Convert]::ToBase64String([System.IO.File]::ReadAllBytes("C:\path\to\certificate.pfx"))`|
| Password|  Required when connection type is **Microsoft Entra credential**. Optional when the authentication method is **Certificate based**. The certificate password.|
| Unsecured | Optional. Select this option to skip windows security authentication. |
| Cluster SPN | Optional. Applicable if Unsecured is selected. |
| Connection name | Required. The name you use to refer to the service connection in task properties. If you're using YAML, use the name as the **azureSubscription** or the equivalent subscription name value in the script. |
| Description | Optional. The description of the service connection. |
| Security | Optional. Select **Grant access permission to all pipelines** to allow all pipelines to use this connection. If you don't select this option, you must explicitly authorize the service connection for each pipeline that uses it. |

#### Windows security using gMSA authentication option

|  Parameter  | Description  |
|-------------------------------|-------------------|
| Cluster Endpoint | Required. The client connection endpoint for the cluster. Prefix the value with *tcp://*. This value overrides the publish profile. |
| Unsecured | Optional. Select this option to skip windows security authentication. |
| Cluster SPN | Optional. Fully qualified domain SPN for gMSA account. This parameter is applicable only if **Unsecured** option is disabled. For more information about using gMSA with a cluster, see [Configure Windows security using gMSA](/azure/service-fabric/service-fabric-windows-cluster-windows-security#configure-windows-security-using-gmsa) |
| Connection name | Required. The name you use to refer to the service connection in task properties. If you're using YAML, use the name as the **azureSubscription** or the equivalent subscription name value in the script. |
| Description | Optional. The description of the service connection. |
| Security | Optional. Select **Grant access permission to all pipelines** to allow all pipelines to use this connection. If you don't select this option, you must explicitly authorize the service connection for each pipeline that uses it. |

### SSH service connection

Use the following parameters when you define and secure a connection to a remote host using Secure Shell (SSH).

|  Parameter  | Description  |
|-------------------------------|-------------------|
| Host name  |  Required. The name of the remote host machine or the IP address. |
| Port number |  Required. The port number of the remote host machine. The default is port 22. |
| Private Key |  The entire contents of the private key file if using this type of authentication.|
| Username  | Required. The username to use when connecting to the remote host machine. |
| Password/Passphrase |  The password or passphrase for the specified username if using a keypair as credentials. |
| Connection name | Required. The name you use to refer to the service connection in task properties. If you're using YAML, use the name as the **azureSubscription** or the equivalent subscription name value in the script. |
| Description | Optional. The description of the service connection. |
| Security | Optional. Select **Grant access permission to all pipelines** to allow all pipelines to use this connection. If you don't select this option, you must explicitly authorize the service connection for each pipeline that uses it. |

For more information, see [SSH task](/azure/devops/pipelines/tasks/reference/ssh-v0) and [Copy files over SSH](/azure/devops/pipelines/tasks/reference/copy-files-over-ssh-v0).

### Subversion service connection

Use the following parameters when you define and secure a connection to the Subversion repository.

| Parameter | Description  |
|-----------------------------------|--------------|
| Subversion repository URL | Required. The URL of the Subversion repository. |
| Accept untrusted TLS/SSL certificates |  Select this option to allow the SVN client to accept self-signed SSL server certificates without installing them into the Azure DevOps service role and build Agent computers. |
| Realm name | Required if the service connection for Subversion externals. If you use multiple credentials in a build or release pipeline, use this parameter to specify the realm containing the credentials specified for the service connection. |
| User name | Required. The username to connect to the service. |
| Password  | Required. The password for the specified username.|
| Connection name | Required. The name you use to refer to the service connection in task properties. If you're using YAML, use the name as the **azureSubscription** or the equivalent subscription name value in the script. |
| Description | Optional. The description of the service connection. |
| Security | Optional. Select **Grant access permission to all pipelines** to allow all pipelines to use this connection. If you don't select this option, you must explicitly authorize the service connection for each pipeline that uses it. |

You can find the realm name in a few ways:

* If you access the repository via HTTP or HTTPS: Open the repo in a web browser without saved credentials. It uses the realm name in the authentication dialog.

* Use the svn command line. If you stored the credentials, run For example, `svn info https://svnserver/repo`. The realm name is displayed when it asks you to enter a password.

* If you stored the credentials to access the repository, look for the realm name in one of the files in the Subversion authentication cache section of your user profile. For example, *~/.subversion/auth/svn/simple* or *C:\Users\yourname\Application Data\Subversion\auth\svn.simple*.

### Visual Studio App Center service connection

Use the following parameters when you define and secure a connection to Visual Studio App Center.

| Parameter | Description  |
|-----------------|---------|
| Server URL | Required. The URL of the App Center service. |
| API Token | Required. The token to use to authenticate with the service. For more information, see the [API docs](/appcenter/api-docs/). |
| Connection name | Required. The name you use to refer to the service connection in task properties. If you're using YAML, use the name as the **azureSubscription** or the equivalent subscription name value in the script. |
| Description | Optional. The description of the service connection. |
| Security | Optional. Select **Grant access permission to all pipelines** to allow all pipelines to use this connection. If you don't select this option, you must explicitly authorize the service connection for each pipeline that uses it. |

## Extensions for other service connections

Other service connection types and tasks can be installed as extensions. See the following examples of service connections available through extensions:

* [System Center Virtual Machine Manager (SCVMM) Integration](https://marketplace.visualstudio.com/items?itemname=ms-vscs-rm.scvmmapp).
  Connect to an SCVMM server to provision virtual machines and do actions on them such as:
    * Managing checkpoints
    * Starting and stopping virtual machines (VMs)
    * Running PowerShell scripts

* [VMware Resource Deployment](https://marketplace.visualstudio.com/items?itemname=ms-vscs-rm.vmwareapp).
  Connect to a VMware vCenter Server from Visual Studio Team Services or Team Foundation Server to provision, start, stop, or snapshot VMware virtual machines.

* [Power Platform Build Tools](https://marketplace.visualstudio.com/items?itemName=microsoft-IsvExpTools.PowerPlatform-BuildTools).
  Use Microsoft Power Platform Build Tools to automate common build and deployment tasks related to apps built on [Microsoft Power Platform](/power-platform/alm/devops-build-tools). After you install the extension, the **Power Platform** service connection type has the following properties.

  | Parameter  | Description  |
  |------------------------------------|--------------|
  | Connection Name  | Required. The name you use to refer to this service connection in task properties. |
  | Server URL | Required. The URL of the Power Platform instance. Example: `https://contoso.crm4.dynamics.com` |
  | Tenant ID  | Required. Tenant ID (also called directory ID in Azure portal) to authenticate to. Refer to [https://aka.ms/buildtools-spn](/power-platform/alm/devops-build-tools#configure-service-connections-using-a-service-principal) for a script that shows Tenant ID and configures Application ID and associated Client Secret. The application user must also be [created in CDS](/powerapps/developer/common-data-service/use-single-tenant-server-server-authentication#application-user-creation) |
  | Application ID| Required. Azure Application ID to authenticate with. |
  | Client secret of Application ID | Required. Client secret of the Service Principal associated to above Application ID used to prove identity. |

You can also create your own [custom service connections](../../extend/develop/service-endpoints.md).

<!--  ## FAQs and Troubleshoot service connections -->

<!-- ### Q: -->
<!-- **A:**  -->

[!INCLUDE [rm-help-support-shared](../includes/rm-help-support-shared.md)]
