---
title: Service endpoints in Visual Studio Team Services and Team Foundation Server
description: Understand Service endpoints in Visual Studio Team Services (VSTS) and Team Foundation Server (TFS)
ms.assetid: A40435C0-2053-4D99-9A75-CCB97FBB15D2
ms.prod: vs-devops-alm
ms.technology: vs-devops-release
ms.topic: get-started-article
ms.manager: douge
ms.author: ahomer
ms.date: 10/20/2016
---

# Service endpoints for Build and Release

**TFS 2015 | TFS 2017 | Team Services**

You will typically need to connect to external and remote services to execute tasks
for a build or deployment. For example, you may need to connect to your Microsoft Azure
subscription, to a different build server or file server, to an online continuous
integration environment, or to services you install on remote computers.

Watch this video on Channel 9 to learn about service endpoints.

<iframe width="640" height="360" src="//channel9.msdn.com/Series/DevOps-Release-Management/Service-Endpoints-with-Visual-Studio-Team-Services/player" frameborder="0" allowfullscreen="true"></iframe><p />

You can define endpoints in Team Services or Team Foundation Server that are available for use in all
your tasks. For example, you can create an endpoint for your Azure subscription
and use this endpoint name in an Azure Web Site Deployment task in a release definition.

You define and manage service endpoints from the Admin settings of your team project.
* Team Services: `https://{account}.visualstudio.com/{teamproject}/_admin/_services`
* TFS: `https://{tfsserver}/{collection}/{teamproject}/_admin/_services`

Service endpoints are created at project scope. An endpoint created in one project is not visible in another team project.

## Common endpoint types

Team Services and TFS support a variety of endpoint types by default. Some of these are described below:

* [Azure Classic service endpoint](#sep-azure-classic)
* [Azure Resource Manager service endpoint](#sep-azure-rm)
* [Azure Service Bus service endpoint](#sep-servbus)
* [Azure Service Fabric service endpoint](#sep-servfabric)
* [Chef service endpoint](#sep-chef)
* [Docker Host service endpoint](#sep-dochost)
* [Docker Registry service endpoint](#sep-docreg)
* [External Git service endpoint](#sep-extgit)
* [Generic service endpoint](#sep-generic)
* [GitHub service endpoint](#sep-github)
* [Jenkins service endpoint](#sep-jenkins)
* [Kubernetes service endpoint](#sep-kuber)
* [SSH service endpoint](#sep-ssh)
* [Subversion service endpoint](#sep-subversion)
* [Team Foundation Server / Team Services service endpoint](#sep-tfsts)
* [Visual Studio Mobile Center service endpoint](#sep-vsmobile)

After you enter the parameters when creating a service endpoint, validate the
connection. The validation link uses a REST call to the external service with
the information you entered, and indicates if the call succeeded.

<h3 id="sep-azure-classic">Azure Classic service endpoint</h3>

Defines and secures a connection to a Microsoft Azure subscription
using Azure credentials or an Azure management certificate.

| Parameter | Description |
| --------- | ----------- |
| \[authentication type\] | Required. Select **Credentials** or **Certificate based**. |
| Connection Name | Required. The name you will use to refer to this endpoint in task properties. This is not the name of your Azure account or subscription. |
| Environment | Required. Select **Azure Cloud** or one of the pre-defined [Azure Government Clouds](government-cloud.md) where your subscription is defined. |
| Subscription ID | Required. The GUID-like identifier for your Azure subscription (not the subscription name). You can copy this from the Azure portal. |
| Subscription Name | Required. The name of your Microsoft Azure subscription (account). |
| User name | Required for Credentials authentication. User name of a work or school account (for example @fabrikam.com). Microsoft accounts (for example @live or @hotmail) are not supported. |
| Password | Required for Credentials authentication. Password for the user specified above. |
| Management Certificate | Required for Certificate based authentication. Copy the value of the management certificate key from your [publish settings XML file](https://go.microsoft.com/fwlink/?LinkID=312990) or the Azure portal. |

>If your subscription is defined in an [Azure Government Cloud](government-cloud.md), ensure your application meets the relevant compliance requirements before you configure a service endpoint.

<h3 id="sep-azure-rm">Azure Resource Manager service endpoint</h3>

Defines and secures a connection to a Microsoft Azure subscription
using Service Principal Authentication (SPA). The dialog offers two modes:

**Automated subscription detection**. 

You cannot use this version of the dialog to connect to an [Azure Government Cloud](government-cloud.md).

| Parameter | Description |
| --------- | ----------- |
| Connection Name | Required. The name you will use to refer to this endpoint in task properties. This is not the name of your Azure account or subscription. |
| Subscription | Select an existing Azure subscription. [More information](#sep-azure-rm-conditions). |
<p />

**Manual subscription definition**

You must use this version of the dialog when connecting to an [Azure Government Cloud](government-cloud.md).

| Parameter | Description |
| --------- | ----------- |
| Connection Name | Required. The name you will use to refer to this endpoint in task properties. This is not the name of your Azure account or subscription. |
| Environment | Required. Select **Azure Cloud** or one of the pre-defined [Azure Government Clouds](government-cloud.md) where your subscription is defined. |
| Subscription ID | Required only if you want to use an existing service principal. The GUID-like identifier for your Azure subscription (not the subscription name). [More information](#sep-azure-rm-existingsp). |
| Subscription Name | Required only if you want to use an existing service principal. The name of your Microsoft Azure subscription (account). [More information](#sep-azure-rm-existingsp). |
| Service Principal ID | Required only if you want to use an existing service principal. The Azure Active Directory client ID of the account. [More information](#sep-azure-rm-existingsp). |
| Service Principal Key | Required only if you want to use an existing service principal. The Azure Active Directory client key of the account. [More information](#sep-azure-rm-existingsp). |
| Tenant ID | Required only if you want to use an existing service principal. The ID of the client tenant in Azure Active Directory. [More information](#sep-azure-rm-existingsp). |
<p />

>If your subscription is defined in an [Azure Government Cloud](government-cloud.md), ensure your application meets the relevant compliance requirements before you configure a service endpoint.

<a name="sep-azure-rm-conditions"></a>
When you start to create the endpoint, the code interrogates Azure
for subscriptions that are valid for the credentials you are currently
signed into Team Services or TFS with. This applies to both Microsoft
accounts and School or Work accounts. It displays a list of these for
you to select the one you want to use.

If no subscriptions are shown, or subscriptions other than the one you
want to use, you must sign out of Team Services or TFS and sign in again
using the appropriate account credentials. See also
[Troubleshoot Azure Resource Manager service endpoints](../../actions/azure-rm-endpoint.md).

<a name="sep-azure-rm-existingsp"></a>
Selecting an existing subscription automatically creates a new Azure
service principal that is assigned the **Contributor** role and so has
access to all resources within the subscription.
You can edit this service principal in the Azure portal,
**Subscriptions | Users | Roles** section. For more details, see
[Team Services: Access with Azure Active Directory (Azure AD)](https://www.visualstudio.com/en-us/docs/setup-admin/team-services/manage-organization-access-for-your-account-vs).

If you want to use an existing service principal instead of creating
a new one:

1. Download and run [this PowerShell script](https://github.com/Microsoft/vsts-rm-documentation/blob/master/Azure/SPNCreation.ps1) in an Azure PowerShell window.
   When prompted, enter your subscription name, password, role (optional), and the type of cloud such as Azure Cloud (the default) or an Azure Government Cloud.
1. Switch from the simplified version of the dialog to the full version using the link in the dialog.

   ![Opening the full version of the service endpoint dialog](_img/rm-endpoint-link.png)

1. Enter a user-friendly name to use when referring to this service endpoint connection.
1. Select the Environment name (such as Azure Cloud or an Azure Government Cloud).
1. Copy these fields from the output of the PowerShell script into the Azure subscription dialog textboxes:
   - Subscription ID
   - Subscription Name
   - Service Principal ID
   - Service Principal Key
   - Tenant ID<p/>

See
[this blog post](http://blogs.msdn.com/b/visualstudioalm/archive/2015/10/04/automating-azure-resource-group-deployment-using-a-service-principal-in-visual-studio-online-build-release-management.aspx)
for details about using service principal authentication.

<h3 id="sep-servbus">Azure Service Bus service endpoint</h3>

Defines and secures a connection to a Microsoft Azure Service Bus queue.

| Parameter | Description |
| --------- | ----------- |
| Connection Name | Required. The name you will use to refer to this endpoint in task properties. This is not the name of your Azure account or subscription. |
| Service Bus ConnectionString | The URL of your Azure Service Bus instance. [More information](https://docs.microsoft.com/en-us/azure/service-bus-messaging/service-bus-fundamentals-hybrid-solutions). |
| Service Bus Queue Name | The name of an existing Azure Service Bus queue. |
<p />

<h3 id="sep-servfabric">Azure Service Fabric service endpoint</h3>

Defines and secures a connection to a Microsoft Azure Service Fabric cluster.

| Parameter | Description |
| --------- | ----------- |
| \[authentication type\] | Required. Select **No authentication**, **Azure Active Directory credentials**, or **Certificate based**. |
| Connection Name | Required. The name you will use to refer to this endpoint in task properties. |
| Cluster endpoint | Required. The client endpoint of the remote cluster to connect to. Prefix with **tcp://**. |
| Username | Required for Azure Active Directory authentication. The username to use when connecting to the remote cluster. |
| Password | Required for Azure Active Directory authentication. The password for the specified username. |
| Client certificate | Required for certificate based authentication. The Base64-encoded contents of the client certificate. |
| Password | The password for the certificate when using certificate based authentication. |
<p />

You can use the following PowerShell script to obtain a Base64-encoded representation of a certificate:

```
[System.Convert]::ToBase64String([System.IO.File]::ReadAllBytes("path-to-certificate-file\certificate.pfx"))
```

<h3 id="sep-chef">Chef service endpoint</h3>

Defines and secures a connection to a [Chef](https://docs.chef.io/chef_overview.html) automation server.

| Parameter | Description |
| --------- | ----------- |
| Connection Name | Required. The name you will use to refer to this endpoint in task properties. This is not the name of your account or subscription with the service. |
| Server URL | Required. The URL of the Chef automation server. |
| Node Name (Username) | Required. The name of the node to connect to. Typically this is your username. |
| Client Key | Required. The key specified in the Chef .pem file. |

<h3 id="sep-dochost">Docker Host service endpoint</h3>

Defines and secures a connection to a Docker host.

| Parameter | Description |
| --------- | ----------- |
| Connection Name | Required. The name you will use to refer to this endpoint in task properties. This is not the name of your account or subscription with the service. |
| Server URL | Required. The URL of the Docker host. |
| CA Certificate | Required. A trusted certificate authority certificate to use to authenticate with the host. |
| Certificate | Required. A client certificate to use to authenticate with the host. |
| Key | Required. The key specified in the Docker key.pem file. |

Ensure you protect your connection to the Docker host. [Learn more](https://docs.docker.com/engine/security/https/).
  
<h3 id="sep-docreg">Docker Registry service endpoint</h3>

Defines and secures a connection to a Docker registry.

| Parameter | Description |
| --------- | ----------- |
| Connection Name | Required. The name you will use to refer to this endpoint in task properties. This is not the name of your account or subscription with the service. |
| Docker Registry | Required. The URL of the Docker registry. A default value is provided. |
| Docker ID | Required. The identifier of the Docker account user. |
| Password | Required. The password for the account user identified above. |
| Email | Optional. An email address to receive notifications. |

<h3 id="sep-extgit">External Git service endpoint</h3>

Defines and secures a connection to a Git repository server.
Note that there is a specific endpoint for [GitHub](#sep-github).

| Parameter | Description |
| --------- | ----------- |
| Connection Name | Required. The name you will use to refer to this endpoint in task properties. This is not the name of your account or subscription with the service. |
| Server URL | Required. The URL of the Git repository server. |
| User name | Required. The username to connect to the Git repository server. |
| Password/Token Key | Required. The password or access token for the specified username. |

Also see [Artifact sources](../definitions/release/artifacts.md#sources).

<h3 id="sep-generic">Generic service endpoint</h3>

Defines and secures a connection to any other type of service or application.

| Parameter | Description |
| --------- | ----------- |
| Connection Name | Required. The name you will use to refer to this endpoint in task properties. This is not the name of your account or subscription with the service. |
| Server URL | Required. The URL of the service. |
| User name | Required. The username to connect to the service. |
| Password/Token Key | Required. The password or access token for the specified username. |

<h3 id="sep-github">GitHub service endpoint</h3>

Defines a connection to a GitHub repository.
Note that there is a specific endpoint for [other Git servers](#sep-extgit).

| Parameter | Description |
| --------- | ----------- |
| Choose authorization | Required. Either **Grant authorization** or **Personal access token**. See notes below. |
| Token | Required for Personal access token authorization. See notes below. |
| Connection name | Required. The name you will use to refer to this endpoint in task properties. This is not the name of your GitHub account or subscription. |
<p />

**Notes**: If you select **Grant authorization** for the **Choose authorization** option,
the dialog shows an **Authorize** button that opens the GitHub login page.
If you select **Personal access token** you must obtain a suitable token
and paste it into the **Token** textbox. The dialog shows the recommended scopes
for the token: **repo, user, admin:repo_hook**. See
[this page](https://help.github.com/articles/creating-an-access-token-for-command-line-use/)
on GitHub for information about obtaining an access token. Then register your
GitHub account in your profile:

* Open your profile from your account name at the right of the Visual Studio Team Services page heading.
* At the top of the left column, under **DETAILS**, choose **Security**.
* In the **Security** tab, in the right column, choose **Personal access tokens**.
* Choose the **Add** link and enter the information required to create the token.

Also see [Artifact sources](../definitions/release/artifacts.md#tfvcsource).

<h3 id="sep-jenkins">Jenkins service endpoint</h3>

Defines a connection to the Jenkins service.

| Parameter | Description |
| --------- | ----------- |
| Connection Name | Required. The name you will use to refer to this endpoint in task properties. This is not the name of your account or subscription with the service. |
| Server URL | Required. The URL of the service. |
| Accept untrusted SSL certificates | Set this option to allow Jenkins clients to accept a self-signed certificate instead of installing the certificate in the TFS service role or the computers hosting the [agent](../agents/agents.md). |
| User name | Required. The username to connect to the service. |
| Password | Required. The password for the specified username. |

Also see [Visual Studio Team Services Integration with Jenkins](https://blogs.msdn.microsoft.com/visualstudioalm/2017/04/25/vsts-visual-studio-team-services-integration-with-jenkins/) 
and [Artifact sources](../definitions/release/artifacts.md#jenkinssource).

<h3 id="sep-kuber">Kubernetes service endpoint</h3>

Defines and secures a connection to a [Kubernetes](https://kubernetes.io/docs/home/) automation account.

| Parameter | Description |
| --------- | ----------- |
| Connection Name | Required. The name you will use to refer to this endpoint in task properties. This is not the name of your account or subscription with the service. |
| Server URL | Required. The URL of the Kubernetes automation service. |
| Kubeconfig | The contents of the kubectl configuration file. |

<h3 id="sep-ssh">SSH service endpoint</h3>

Defines and secures a connection to a remote host using Secure Shell (SSH).

| Parameter | Description |
| --------- | ----------- |
| Connection Name | Required. The name you will use to refer to this endpoint in task properties. |
| Host name | Required. The name of the remote host machine or the IP address. |
| Port number | Required. The port number of the remote host machine to which you want to connect. The default is port 22. |
| User name | Required. The username to use when connecting to the remote host machine. |
| Password or passphrase | The password or passphrase for the specified username if using a keypair as credentials. |
| Private key | The entire contents of the private key file if using this type of authentication. |

Also see [SSH task](../../steps/deploy/ssh.md)
and [Copy Files Over SSH](../../steps/deploy/copy-files-over-ssh.md).

<h3 id="sep-subversion">Subversion service endpoint</h3>

Defines and secures a connection to the Subversion repository.

| Parameter | Description |
| --------- | ----------- |
| Connection Name | Required. The name you will use to refer to this endpoint in task properties. This is not the name of your account or subscription with the service. |
| Server repository URL | Required. The URL of the repository. |
| Accept untrusted SSL certificates | Set this option to allow the client to accept self-signed certificates installed on the agent computer(s). |
| Realm name | Optional. If you use multiple credentials in a build or release definition, use this parameter to specify the realm containing the credentials specified for this endpoint. |
| User name | Required. The username to connect to the service. |
| Password | Required. The password for the specified username. |

<h3 id="sep-tfsts">Team Foundation Server / Team Services service endpoint</h3>

Defines and secures a connection to another Team Foundation Server or Team Services account.

| Parameter | Description |
| --------- | ----------- |
| (authentication) | Select **Basic** or **Token Based** authentication. |
| Connection Name | Required. The name you will use to refer to this endpoint in task properties. This is not the name of your account or subscription with the service. |
| Connection URL | Required. The URL of the Team Foundation Server or Team Services instance. |
| User name | Required for Basic authentication. The username to connect to the service. |
| Password | Required for Basic authentication. The password for the specified username. |
| Personal Access Token | Required for Token Based authentication (TFS 2017 and Team Services only). The token to use to authenticate with the service. [Learn more](../../../setup-admin/team-services/use-personal-access-tokens-to-authenticate.md). |

Use the **Verify connection** link to validate your connection information.

See also [Authenticate access with personal access tokens for Team Services and TFS](../../../setup-admin/team-services/use-personal-access-tokens-to-authenticate.md).

<h3 id="sep-vsmobile">Visual Studio Mobile Center service endpoint</h3>

Defines and secures a connection to Visual Studio Mobile Center.

| Parameter | Description |
| --------- | ----------- |
| Connection Name | Required. The name you will use to refer to this endpoint in task properties. This is not the name of your account or subscription with the service. |
| API Token | Required. The token to use to authenticate with the service. [Learn more](https://docs.microsoft.com/en-us/mobile-center/api-docs/). |

## Extensions for other endpoints

Other service endpoint types and tasks can be installed in Team Services
and Team Foundation Server as extensions. Some examples of service endpoints currently
available through extensions are:

* [TFS artifacts for Release Management](https://marketplace.visualstudio.com/items?itemName=ms-vscs-rm.vss-services-externaltfs).
  Deploy on-premises TFS builds with Team Services
  Release Management through a TFS service endpoint
  connection and the **Team Build (external)** artifact,
  even when the TFS machine is not reachable directly
  from Team Services. For more information, see
  [External TFS](../definitions/release/artifacts.md#onpremtfssource) and
  [this blog post](https://blogs.msdn.microsoft.com/visualstudioalm/2016/04/05/deploy-artifacts-from-onprem-tfs-server-with-release-management-service/).

* [TeamCity artifacts for Release Management](https://marketplace.visualstudio.com/items?itemName=ms-devlabs.vss-services-teamcity).
  This extension provides integration with TeamCity through a TeamCity service endpoint,
  enabling artifacts produced in TeamCity to be deployed
  by using Release Management. See
  [TeamCity](../definitions/release/artifacts.md#teamcitysource)
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

For information about creating your own custom extensions, see
[Overview of extensions for Visual Studio Team Services](../../../extend/overview.md).

<h2 id="security">Endpoint security</h2>

You can control who can define new service endpoints in a library, and who can use an existing service endpoint. **Roles** are defined for  service endpoints, and **membership** in these roles governs the operations you can perform on those endpoints.

| Role on a library service endpoint | Purpose |
|------------------------------------|---------|
| User | Members of this role can use the endpoint when authoring build or release definitions. |
| Administrator | In addition to using the endpoint, members of this role can manage membership of all other roles for the service endpoint. The user that created the service endpoint is automatically added to the Administrator role for that service endpoint.

A special group called **Endpoint administrators** is added to every team project. Members of this group can create new endpoints. By default, project administrators are added as members of this group. This group is also added as an administrator to every endpoint created.

[!INCLUDE [rm-help-support-shared](../../_shared/rm-help-support-shared.md)]
