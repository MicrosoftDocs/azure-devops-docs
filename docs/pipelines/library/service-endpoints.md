---
title: Service connections in Azure Pipelines and Team Foundation Server
ms.custom: seodec18
description: Service connections in Azure Pipelines and Team Foundation Server (TFS)
ms.assetid: A40435C0-2053-4D99-9A75-CCB97FBB15D2
ms.prod: devops
ms.technology: devops-cicd
ms.topic: conceptual
ms.manager: jillfra
ms.author: ahomer
author: alexhomer1
ms.date: 08/24/2018
monikerRange: '>= tfs-2015'
---

# Service connections for builds and releases

[!INCLUDE [version-tfs-2015-rtm](../_shared/version-tfs-2015-rtm.md)]

::: moniker range="<= tfs-2018"

[!INCLUDE [temp](../_shared/concept-rename-note.md)]

::: moniker-end

You will typically need to connect to external and remote services to execute tasks
for a build or deployment. For example, you may need to connect to your Microsoft Azure
subscription, to a different build server or file server, to an online continuous
integration environment, or to services you install on remote computers.

You can define service connections in Azure Pipelines or Team Foundation Server (TFS) that are available for use in all
your tasks. For example, you can create a service connection for your Azure subscription
and use this service connection name in an Azure Web Site Deployment task in a release pipeline.

You define and manage service connections from the Admin settings of your project:

* Azure DevOps: `https://dev.azure.com/{organization}/{project}/_admin/_services`
* TFS: `https://{tfsserver}/{collection}/{project}/_admin/_services`

Service connections are created at project scope. A service connection created in one project is not visible in another project.

<a name="create-new"></a>

## Create a service connection

1. In Azure DevOps, open the **Service connections** page from the [project settings page](../../project/navigation/go-to-service-page.md#open-project-settings).
   In TFS, open the **Services** page from the "settings" icon in the top menu bar.

1. Choose **+ New service connection** and select the type of service connection you need.

1. Fill in the parameters for the service connection. The list of parameters differs for each  type of service connection - see the [following list](#ep-types).
   For example, this is the default **Azure Resource Manager** connection dialog:

   ![Azure Resource Manager connection dialog](../release/_img/azure-rm-endpoint/azure-rm-endpoint-01.png)

1. Decide if you want the service connection to be accessible for any pipeline by
   setting the **Allow all pipelines to use this connection** option. This option allows pipelines
   defined in YAML, which are not automatically authorized for service connections,
   to use this service connection. See [Use a service connection](#use-connection).

1. Choose **OK** to create the connection.

> For more information about Azure Resource Manager service connections, see [Connect to Microsoft Azure](connect-to-azure.md).
> You can also create your own [custom service connections](../../extend/develop/service-endpoints.md).

## Manage a service connection

1. In Azure DevOps, open the **Service connections** page from the [project settings page](../../project/navigation/go-to-service-page.md#open-project-settings).
   Or, in TFS, open the **Services** page from the "settings" icon in the top menu bar.

1. Select the service connection you want to manage.

1. Choose from the list of **Actions** in the **Details** tab in the right pane.

The actions available depend on the chosen type of connection. You can update only
some properties of connections; for example, to change the selected subscription
you must re-create the connection. Choose **Disconnect** to delete or remove a connection.

<a name="security"></a>

## Secure a service connection

You can control who can define new service connections in a library, and who can use an existing service connection.
**Roles** are defined for  service connections, and **membership** in these roles governs the operations you can perform on those service connections.

| Role on a library service connection | Purpose |
|------------------------------------|---------|
| User | Members of this role can use the service connection when authoring build or release pipelines. |
| Administrator | In addition to using the service connection, members of this role can manage membership of all other roles for the service connection. The user that created the service connection is automatically added to the Administrator role for that service connection.

Two special groups for service connections, endpoint administrators and creators, are added to every project.
Members of the administrators group can manage all service connections.
By default, project administrators are added as members of this group.
This group is also added as an administrator to every service connection created.
Members of the creators group can create new service connections.
By default, project contributors are added as members of this group.

To modify the security for a connection:

1. In Azure DevOps, open the **Service connections** page from the [project settings page](../../project/navigation/go-to-service-page.md#open-project-settings).
   In TFS, open the **Services** page from the "settings" icon in the top menu bar.

1. Choose the **Roles** link to open the security tab.

   ![Editing the roles](_img/endpoint-roles.png)

1. Add users or groups, turn on and off inheritance, or change the role for existing users and groups as required.

> For more information about securing an Azure Resource Manager service connection, see [Connect to Microsoft Azure](connect-to-azure.md).

<a name="use-connection"></a>

## Use a service connection

After the new service connection is created:

* If you are using it in the UI, select the connection name you assigned in the **Azure subscription** (or the equivalent connection name) setting of your pipeline.

  ![If you are using it in the UI](_img/ui-connection-setting.png)

* If you are using it in YAML, copy the connection name into your code as the **azureSubscription** (or the equivalent connection name) value.

  ![If you are using it in YAML](_img/yaml-connection-setting.png)

  Next you must authorize the service connection.
  To do this, or if you encounter a resource authorization error in your build,
  use one of the following techniques:

  - If you want to authorize any pipeline to use the service connection,
    go to Azure Pipelines, open the Settings page, select Service connections,
    and enable the setting **Allow all pipelines to use this connection** option for the connection.

  - If you want to authorize a service connection for a specific pipeline, open the pipeline
    by selecting **Edit** and queue a build manually. You will see a resource authorization error
    and a "Authorize resources" action on the error. Choose this action to explicitly add the pipeline as an
    authorized user of the service connection.

> You can also create your own [custom service connections](../../extend/develop/service-endpoints.md).

<a name="ep-types"></a>

## Common service connection types

Azure Pipelines and TFS support a variety of service connection types by default. Some of these are described below:

* [Azure Classic service connection](#sep-azure-classic)
* [Azure Resource Manager service connection](#sep-azure-rm)
* [Azure Service Bus service connection](#sep-servbus)
* [Bitbucket Cloud service connection](#sep-bbucket)
* [Chef service connection](#sep-chef)
* [Docker Host service connection](#sep-dochost)
* [Docker Registry service connection](#sep-docreg)
* [External Git service connection](#sep-extgit)
* [Generic service connection](#sep-generic)
* [GitHub service connection](#sep-github)
* [GitHub Enterprise Server service connection](#sep-githubent)
* [Jenkins service connection](#sep-jenkins)
* [Kubernetes service connection](#sep-kuber)
* [npm service connection](#sep-npm)
* [NuGet service connection](#sep-nuget)
* [Python package download service connection](#sep-python-download)
* [Python package upload service connection](#sep-python-upload)
* [Service Fabric service connection](#sep-fabric)
* [SSH service connection](#sep-ssh)
* [Subversion service connection](#sep-subversion)
* [Team Foundation Server / Azure Pipelines service connection](#sep-tfsts)
* [Visual Studio App Center service connection](#sep-vsmobile)

After you enter the parameters when creating a service connection, validate the
connection. The validation link uses a REST call to the external service with
the information you entered, and indicates if the call succeeded.

<h3 id="sep-azure-classic">Azure Classic service connection</h3>

Defines and secures a connection to a Microsoft Azure subscription
using Azure credentials or an Azure management certificate.
[How do I create a new service connection?](#create-new)

| Parameter | Description |
| --------- | ----------- |
| \[authentication type\] | Required. Select **Credentials** or **Certificate based**. |
| Connection Name | Required. The name you will use to refer to this service connection in task properties. This is not the name of your Azure account or subscription. If you are using YAML, use this name as the **azureSubscription** or the equivalent subscription name value in the script. |
| Environment | Required. Select **Azure Cloud**, **Azure Stack**, or one of the pre-defined [Azure Government Clouds](government-cloud.md) where your subscription is defined. |
| Subscription ID | Required. The GUID-like identifier for your Azure subscription (not the subscription name). You can copy this from the Azure portal. |
| Subscription Name | Required. The name of your Microsoft Azure subscription (account). |
| User name | Required for Credentials authentication. User name of a work or school account (for example @fabrikam.com). Microsoft accounts (for example @live or @hotmail) are not supported. |
| Password | Required for Credentials authentication. Password for the user specified above. |
| Management Certificate | Required for Certificate based authentication. Copy the value of the management certificate key from your [publish settings XML file](https://go.microsoft.com/fwlink/?LinkID=312990) or the Azure portal. |

> If your subscription is defined in an [Azure Government Cloud](government-cloud.md), ensure your application meets the relevant compliance requirements before you configure a service connection.

*****

<a name="sep-azure-rm-conditions"></a>
<a name="arm-auto-connect"></a>
<a name="arm-manual-connect"></a>
<a name="sep-azure-rm-existingsp"></a>

<h3 id="sep-azure-rm">Azure Resource Manager service connection</h3>

Defines and secures a connection to a Microsoft Azure subscription
using Service Principal Authentication (SPA) or an Azure Managed Service Identity.
The dialog offers two main modes:

* **Automated subscription detection**. In this mode, Azure Pipelines and TFS will attempt to query Azure for all of the subscriptions and instances to which you have access using the credentials you are currently logged on with in Azure Pipelines or TFS (including Microsoft accounts and School or Work accounts).
  If no subscriptions are shown, or subscriptions other than the one you want to use, you must sign out of Azure Pipelines or TFS and sign in again
  using the appropriate account credentials.

* **Manual subscription pipeline**. In this mode, you must specify the service principal you want to use to connect to Azure. The service principal specifies the resources and the access levels that will be available over the connection.
  Use this approach when you need to connect to an Azure account using different credentials from those you are currently logged on with in Azure Pipelines or TFS.
  This is also a useful way to maximize security and limit access.

For more information, see [Connect to Microsoft Azure](connect-to-azure.md)

**NOTE**: If you don't see any Azure subscriptions or instances, or you have problems validating the connection, see [Troubleshoot Azure Resource Manager service connections](../release/azure-rm-endpoint.md).

*****

<h3 id="sep-servbus">Azure Service Bus service connection</h3>

Defines and secures a connection to a Microsoft Azure Service Bus queue.

| Parameter | Description |
| --------- | ----------- |
| Connection Name | Required. The name you will use to refer to this service connection in task properties. This is not the name of your Azure account or subscription. If you are using YAML, use this name as the **azureSubscription** or the equivalent subscription name value in the script. |
| Service Bus ConnectionString | The URL of your Azure Service Bus instance. [More information](/azure/service-bus-messaging/service-bus-fundamentals-hybrid-solutions). |
| Service Bus Queue Name | The name of an existing Azure Service Bus queue. |
<p />

[How do I create a new service connection?](#create-new)

<!--

*****

<h3 id="sep-servfabric">Azure Service Fabric service connection</h3>

Defines and secures a connection to a Microsoft Azure Service Fabric cluster.

| Parameter | Description |
| --------- | ----------- |
| \[authentication type\] | Required. Select **No authentication**, **Azure Active Directory credentials**, or **Certificate based**. |
| Connection Name | Required. The name you will use to refer to this connection in task properties. This is not the name of your Azure account or subscription. If you are using YAML, use this name as the **azureSubscription** or the equivalent subscription name value in the script. |
| Cluster connection | Required. The client connection of the remote cluster to connect to. Prefix with **tcp://**. |
| Username | Required for Azure Active Directory authentication. The username to use when connecting to the remote cluster. |
| Password | Required for Azure Active Directory authentication. The password for the specified username. |
| Client certificate | Required for certificate based authentication. The Base64-encoded contents of the client certificate. |
| Password | The password for the certificate when using certificate based authentication. |
<p />

[How do I create a new service connection?](#create-new)

You can use the following PowerShell script to obtain a Base64-encoded representation of a certificate:

```powershell
[System.Convert]::ToBase64String([System.IO.File]::ReadAllBytes("path-to-certificate-file\certificate.pfx"))
```

-->

*****

<h3 id="sep-bbucket">Bitbucket Cloud service connection</h3>

Defines a connection to Bitbucket Cloud.

| Parameter | Description |
| --------- | ----------- |
| Connection Name | Required. The name you will use to refer to this service connection in task properties. This is not the name of your Azure account or subscription. If you are using YAML, use this name as the **azureSubscription** or the equivalent subscription name value in the script. |
| User name | Required. The username to connect to the service. |
| Password | Required. The password for the specified username. |

[How do I create a new service connection?](#create-new)

*****

<h3 id="sep-chef">Chef service connection</h3>

Defines and secures a connection to a [Chef](https://docs.chef.io/chef_overview.html) automation server.

| Parameter | Description |
| --------- | ----------- |
| Connection Name | Required. The name you will use to refer to this service connection in task properties. This is not the name of your Azure account or subscription. If you are using YAML, use this name as the **azureSubscription** or the equivalent subscription name value in the script. |
| Server URL | Required. The URL of the Chef automation server. |
| Node Name (Username) | Required. The name of the node to connect to. Typically this is your username. |
| Client Key | Required. The key specified in the Chef .pem file. |

[How do I create a new service connection?](#create-new)

*****

<h3 id="sep-dochost">Docker Host service connection</h3>

Defines and secures a connection to a Docker host.

| Parameter | Description |
| --------- | ----------- |
| Connection Name | Required. The name you will use to refer to this service connection in task properties. This is not the name of your Azure account or subscription. If you are using YAML, use this name as the **azureSubscription** or the equivalent subscription name value in the script. |
| Server URL | Required. The URL of the Docker host. |
| CA Certificate | Required. A trusted certificate authority certificate to use to authenticate with the host. |
| Certificate | Required. A client certificate to use to authenticate with the host. |
| Key | Required. The key specified in the Docker key.pem file. |

Ensure you protect your connection to the Docker host. [Learn more](https://docs.docker.com/engine/security/https/).

[How do I create a new service connection?](#create-new)
 
*****

<h3 id="sep-docreg">Docker Registry service connection</h3>

Defines and secures a connection to a Docker registry.

| Parameter | Description |
| --------- | ----------- |
| Connection Name | Required. The name you will use to refer to this service connection in task properties. This is not the name of your Azure account or subscription. If you are using YAML, use this name as the **azureSubscription**, **endpoint**, or the equivalent name value in the script. |
| Docker Registry | Required. The URL of the Docker registry. A default value is provided. |
| Docker ID | Required. The identifier of the Docker account user. For Azure Container Registry, this is likely to be a service principal. |
| Password | Required. The password for the account user identified above. |
| Email | Optional. An email address to receive notifications. |

[How do I create a new service connection?](#create-new)

*****

<h3 id="sep-extgit">External Git service connection</h3>

Defines and secures a connection to a Git repository server.
Note that there is a specific service connection for [GitHub](#sep-github)
and [GitHub Enterprise Server](#sep-githubent) connections.

| Parameter | Description |
| --------- | ----------- |
| Connection Name | Required. The name you will use to refer to this service connection in task properties. This is not the name of your Azure account or subscription. If you are using YAML, use this name as the **azureSubscription** or the equivalent subscription name value in the script. |
| Server URL | Required. The URL of the Git repository server. |
| User name | Required. The username to connect to the Git repository server. |
| Password/Token Key | Required. The password or access token for the specified username. |

Also see [Artifact sources](../release/artifacts.md#sources).

[How do I create a new service connection?](#create-new)

*****

<h3 id="sep-generic">Generic service connection</h3>

Defines and secures a connection to any other type of service or application.

| Parameter | Description |
| --------- | ----------- |
| Connection Name | Required. The name you will use to refer to this service connection in task properties. This is not the name of your Azure account or subscription. If you are using YAML, use this name as the **azureSubscription** or the equivalent subscription name value in the script. |
| Server URL | Required. The URL of the service. |
| User name | Required. The username to connect to the service. |
| Password/Token Key | Required. The password or access token for the specified username. |

[How do I create a new service connection?](#create-new)

*****

<h3 id="sep-github">GitHub service connection</h3>

Defines a connection to a GitHub repository.
Note that there is a specific service connection for [External Git servers](#sep-extgit)
and [GitHub Enterprise Server](#sep-githubent) connections.

| Parameter | Description |
| --------- | ----------- |
| Choose authorization | Required. Either **Grant authorization** or **Personal access token**. See notes below. |
| Token | Required for Personal access token authorization. See notes below. |
| Connection Name | Required. The name you will use to refer to this service connection in task properties. This is not the name of your Azure account or subscription. If you are using YAML, use this name as the **azureSubscription** or the equivalent subscription name value in the script. |
<p />

[How do I create a new service connection?](#create-new)

> [!NOTE]
> If you select **Grant authorization** for the **Choose authorization** option,
the dialog shows an **Authorize** button that opens the GitHub login page.
If you select **Personal access token** you must obtain a suitable token
and paste it into the **Token** textbox. The dialog shows the recommended scopes
for the token: **repo, user, admin:repo_hook**. See
[this page](https://help.github.com/articles/creating-an-access-token-for-command-line-use/)
on GitHub for information about obtaining an access token. Then register your
GitHub account in your profile:

* Open your profile from your organization name at the right of the Azure Pipelines page heading.
* At the top of the left column, under **DETAILS**, choose **Security**.
* In the **Security** tab, in the right column, choose **Personal access tokens**.
* Choose the **Add** link and enter the information required to create the token.

Also see [Artifact sources](../release/artifacts.md#tfvcsource).

*****

<h3 id="sep-githubent">GitHub Enterprise Server service connection</h3>

Defines a connection to a GitHub repository.
Note that there is a specific service connection for [External Git servers](#sep-extgit)
and [standard GitHub service connections](#sep-github).

| Parameter | Description |
| --------- | ----------- |
| Choose authorization | Required. Either **Personal access token**, **Username and Password**, or **OAuth2**. See notes below. |
| Connection Name | Required. The name you will use to refer to this service connection in task properties. This is not the name of your Azure account or subscription. If you are using YAML, use this name as the **azureSubscription** or the equivalent subscription name value in the script. |
| Server URL | Required. The URL of the service. |
| Accept untrusted SSL certificates | Set this option to allow clients to accept a self-signed certificate instead of installing the certificate in the TFS service role or the computers hosting the [agent](../agents/agents.md). |
| Token | Required for Personal access token authorization. See notes below. |
| User name | Required for Username and Password authentication. The username to connect to the service. |
| Password | Required for Username and Password authentication. The password for the specified username. |
| OAuth configuration | Required for OAuth2 authorization. The OAuth configuration specified in your account. |
| GitHub Enterprise Server configuration URL| The URL is fetched from OAuth configuration. |
<p />

[How do I create a new service connection?](#create-new)

> [!NOTE]
> If you select **Personal access token** you must obtain a suitable token
and paste it into the **Token** textbox. The dialog shows the recommended scopes
for the token: **repo, user, admin:repo_hook**. See
[this page](https://help.github.com/articles/creating-an-access-token-for-command-line-use/)
on GitHub for information about obtaining an access token. Then register your
GitHub account in your profile:

* Open your profile from your account name at the right of the Azure Pipelines page heading.
* At the top of the left column, under **DETAILS**, choose **Security**.
* In the **Security** tab, in the right column, choose **Personal access tokens**.
* Choose the **Add** link and enter the information required to create the token.

*****

<h3 id="sep-jenkins">Jenkins service connection</h3>

Defines a connection to the Jenkins service.

| Parameter | Description |
| --------- | ----------- |
| Connection Name | Required. The name you will use to refer to this service connection in task properties. This is not the name of your Azure account or subscription. If you are using YAML, use this name as the **azureSubscription** or the equivalent subscription name value in the script. |
| Server URL | Required. The URL of the service. |
| Accept untrusted SSL certificates | Set this option to allow clients to accept a self-signed certificate instead of installing the certificate in the TFS service role or the computers hosting the [agent](../agents/agents.md). |
| User name | Required. The username to connect to the service. |
| Password | Required. The password for the specified username. |
<p />

[How do I create a new service connection?](#create-new)

Also see [Azure Pipelines Integration with Jenkins](https://blogs.msdn.microsoft.com/visualstudioalm/2017/04/25/vsts-visual-studio-team-services-integration-with-jenkins/) 
and [Artifact sources](../release/artifacts.md#jenkinssource).

*****

<h3 id="sep-kuber">Kubernetes service connection</h3>

Defines and secures a connection to a [Kubernetes](https://kubernetes.io/docs/home/) automation account.

| Parameter | Description |
| --------- | ----------- |
| Connection Name | Required. The name you will use to refer to this service connection in task properties. This is not the name of your Azure account or subscription. If you are using YAML, use this name as the **azureSubscription** or the equivalent subscription name value in the script. |
| Server URL | Required. The URL of the Kubernetes automation service. |
| Kubeconfig | The contents of the kubectl configuration file. |
<p />

[How do I create a new service connection?](#create-new)

*****

<h3 id="sep-npm">npm service connection</h3>

Defines and secures a connection to an npm server.

| Parameter | Description |
| --------- | ----------- |
| Connection Name | Required. The name you will use to refer to this service connection in task properties. This is not the name of your Azure account or subscription. If you are using YAML, use this name as the **azureSubscription** or the equivalent subscription name value in the script. |
| Registry URL | Required. The URL of the npm server. |
| Username | Required when connection type is **Username and Password**. The username for authentication. |
| Password | Required when connection type is **Username and Password**. The password for the username. |
| Personal Access Token | Required when connection type is **External Azure Pipelines**. The token to use to authenticate with the service. [Learn more](../../organizations/accounts/use-personal-access-tokens-to-authenticate.md). |
<p />

[How do I create a new service connection?](#create-new)

*****

<h3 id="sep-nuget">NuGet service connection</h3>

Defines and secures a connection to a NuGet server.

| Parameter | Description |
| --------- | ----------- |
| Connection Name | Required. The name you will use to refer to this service connection in task properties. This is not the name of your Azure account or subscription. If you are using YAML, use this name as the **azureSubscription** or the equivalent subscription name value in the script. |
| Feed URL | Required. The URL of the NuGet server. |
| ApiKey | Required when connection type is **ApiKey**. The authentication key. |
| Personal Access Token | Required when connection type is **External Azure Pipelines**. The token to use to authenticate with the service. [Learn more](../../organizations/accounts/use-personal-access-tokens-to-authenticate.md). |
| Username | Required when connection type is **Basic authentication**. The username for authentication. |
| Password | Required when connection type is **Basic authentication**. The password for the username. |
<p />

[How do I create a new service connection?](#create-new)

*****

<h3 id="sep-python-download">Python package download service connection</h3>

Defines and secures a connection to a Python repository for downloading Python packages.

| Parameter | Description |
| --------- | ----------- |
| Connection Name | Required. The name you will use to refer to this service connection in task properties. This is not the name of your Azure account or subscription. If you are using YAML, use this name as the **azureSubscription** or the equivalent subscription name value in the script. |
| Python repository url for download | Required. The URL of the Python repository. |
| Personal Access Token | Required when connection type is **Authentication Token**. The token to use to authenticate with the service. [Learn more](../../organizations/accounts/use-personal-access-tokens-to-authenticate.md). |
| Username | Required when connection type is **Username and Password**. The username for authentication. |
| Password | Required when connection type is **Username and Password**. The password for the username. |
<p />

[How do I create a new service connection?](#create-new)

*****

<h3 id="sep-python-upload">Python package upload service connection</h3>

Defines and secures a connection to a Python repository for uploading Python packages.

| Parameter | Description |
| --------- | ----------- |
| Connection Name | Required. The name you will use to refer to this service connection in task properties. This is not the name of your Azure account or subscription. If you are using YAML, use this name as the **azureSubscription** or the equivalent subscription name value in the script. |
| Python repository url for upload | Required. The URL of the Python repository. |
| EndpointName | Required. Unique repository name used for twine upload. Spaces and special characters are not allowed. |
| Personal Access Token | Required when connection type is **Authentication Token**. The token to use to authenticate with the service. [Learn more](../../organizations/accounts/use-personal-access-tokens-to-authenticate.md). |
| Username | Required when connection type is **Username and Password**. The username for authentication. |
| Password | Required when connection type is **Username and Password**. The password for the username. |
<p />

[How do I create a new service connection?](#create-new)

*****

<h3 id="sep-fabric">Service Fabric service connection</h3>

Defines and secures a connection to a Service Fabric cluster.

| Parameter | Description |
| --------- | ----------- |
| Connection Name | Required. The name you will use to refer to this service connection in task properties. This is not the name of your Azure account or subscription. If you are using YAML, use this name as the **azureSubscription** or the equivalent subscription name value in the script. |
| Cluster Endpoint  | Required. The TCP endpoint of the cluster. |
| Server Certificate Thumbprint | Required when connection type is **Certificate based** or **Azure Active Directory**. |
| Client Certificate | Required when connection type is **Certificate based**. |
| Password | Required when connection type is **Certificate based**. The certificate password. |
| Username | Required when connection type is **Azure Active Directory**. The username for authentication. |
| Password | Required when connection type is **Azure Active Directory**. The password for the username. |
| Use Windows security | Required when connection type is **Others**. |
| Cluster SPN | Required when connection type is **Others** and using Windows security. |
<p />

[How do I create a new service connection?](#create-new)

*****

<h3 id="sep-ssh">SSH service connection</h3>

Defines and secures a connection to a remote host using Secure Shell (SSH).

| Parameter | Description |
| --------- | ----------- |
| Connection Name | Required. The name you will use to refer to this service connection in task properties. This is not the name of your Azure account or subscription. If you are using YAML, use this name as the **azureSubscription** or the equivalent subscription name value in the script. |
| Host name | Required. The name of the remote host machine or the IP address. |
| Port number | Required. The port number of the remote host machine to which you want to connect. The default is port 22. |
| User name | Required. The username to use when connecting to the remote host machine. |
| Password or passphrase | The password or passphrase for the specified username if using a keypair as credentials. |
| Private key | The entire contents of the private key file if using this type of authentication. |
<p />

[How do I create a new service connection?](#create-new)

Also see [SSH task](../tasks/deploy/ssh.md)
and [Copy Files Over SSH](../tasks/deploy/copy-files-over-ssh.md).

*****

<h3 id="sep-subversion">Subversion service connection</h3>

Defines and secures a connection to the Subversion repository.

| Parameter | Description |
| --------- | ----------- |
| Connection Name | Required. The name you will use to refer to this service connection in task properties. This is not the name of your Azure account or subscription. If you are using YAML, use this name as the **azureSubscription** or the equivalent subscription name value in the script. |
| Server repository URL | Required. The URL of the repository. |
| Accept untrusted SSL certificates | Set this option to allow the client to accept self-signed certificates installed on the agent computer(s). |
| Realm name | Optional. If you use multiple credentials in a build or release pipeline, use this parameter to specify the realm containing the credentials specified for this service connection. |
| User name | Required. The username to connect to the service. |
| Password | Required. The password for the specified username. |
<p />

[How do I create a new service connection?](#create-new)

*****

<h3 id="sep-tfsts">Team Foundation Server / Azure Pipelines service connection</h3>

Defines and secures a connection to another TFS or Azure DevOps organization.

| Parameter | Description |
| --------- | ----------- |
| (authentication) | Select **Basic** or **Token Based** authentication. |
| Connection Name | Required. The name you will use to refer to this service connection in task properties. This is not the name of your Azure account or subscription. If you are using YAML, use this name as the **azureSubscription** or the equivalent subscription name value in the script. |
| Connection URL | Required. The URL of the TFS or Azure Pipelines instance. |
| User name | Required for Basic authentication. The username to connect to the service. |
| Password | Required for Basic authentication. The password for the specified username. |
| Personal Access Token | Required for Token Based authentication (TFS 2017 and newer and Azure Pipelines only). The token to use to authenticate with the service. [Learn more](../../organizations/accounts/use-personal-access-tokens-to-authenticate.md). |
<p />

[How do I create a new service connection?](#create-new)

Use the **Verify connection** link to validate your connection information.

See also [Authenticate access with personal access tokens for Azure DevOps and TFS](../../organizations/accounts/use-personal-access-tokens-to-authenticate.md).

*****

<h3 id="sep-vsmobile">Visual Studio App Center service connection</h3>

Defines and secures a connection to Visual Studio App Center.

| Parameter | Description |
| --------- | ----------- |
| Connection Name | Required. The name you will use to refer to this service connection in task properties. This is not the name of your Azure account or subscription. If you are using YAML, use this name as the **azureSubscription** or the equivalent subscription name value in the script. |
| API Token | Required. The token to use to authenticate with the service. [Learn more](/appcenter/api-docs/). |
<p />

[How do I create a new service connection?](#create-new)

*****

## Extensions for other service connections

Other service connection types and tasks can be installed in Azure Pipelines
and Team Foundation Server as extensions. Some examples of service connections currently
available through extensions are:

* [TFS artifacts for Azure Pipelines](https://marketplace.visualstudio.com/items?itemName=ms-vscs-rm.vss-services-externaltfs).
  Deploy on-premises TFS builds with Azure Pipelines
  through a TFS service connection
  connection and the **Team Build (external)** artifact,
  even when the TFS machine is not reachable directly
  from Azure Pipelines. For more information, see
  [External TFS](../release/artifacts.md#onpremtfssource) and
  [this blog post](https://blogs.msdn.microsoft.com/visualstudioalm/2016/04/05/deploy-artifacts-from-onprem-tfs-server-with-release-management-service/).

* [TeamCity artifacts for Azure Pipelines](https://marketplace.visualstudio.com/items?itemName=ms-devlabs.vss-services-teamcity).
  This extension provides integration with TeamCity through a TeamCity service connection,
  enabling artifacts produced in TeamCity to be deployed
  by using Azure Pipelines. See
  [TeamCity](../release/artifacts.md#teamcitysource)
  for more details.

* [SCVMM Integration](https://marketplace.visualstudio.com/items?itemname=ms-vscs-rm.scvmmapp).
  Connect to a System Center Virtual Machine Manager (SCVMM) server to easily
  provision virtual machines and perform actions on
  them such as managing checkpoints, starting and
  stopping VMs, and running PowerShell scripts.

* [VMware Resource Deployment](https://marketplace.visualstudio.com/items?itemname=ms-vscs-rm.vmwareapp).
  Connect to a VMware vCenter Server from Visual Studio Team
  Services or Team Foundation Server to provision,
  start, stop, or snapshot VMware virtual machines.

> You can also create your own [custom service connections](../../extend/develop/service-endpoints.md).

[!INCLUDE [rm-help-support-shared](../_shared/rm-help-support-shared.md)]
