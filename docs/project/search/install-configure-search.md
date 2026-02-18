---
title: Install, configure Search
titleSuffix: Azure DevOps 
description: Install, configure, secure, and uninstall Code, Wiki, and Work Item Search in Azure DevOps Server, including hardware recommendations and software dependencies.
ms.subservice: azure-devops-search
ms.topic: how-to
ai-usage: ai-assisted
ms.author: chcomley
author: chcomley
monikerRange: '< azure-devops'
ms.date: 02/18/2026
ms.custom: engagement-fy23, sfi-image-nochange
---

# Install and configure Search

[!INCLUDE [version-lt-azure-devops](../../includes/version-lt-azure-devops.md)] 

This article shows you how to install, [configure](#configure-search), and [uninstall](#uninstall-search) a secure search engine for Azure DevOps Server that runs on your own hardware. For more information, see the following articles:
- [Manage Search and indexing](manage-search.md)
- [Software dependencies](#software-dependencies), further in this article

## Prerequisites

**Permissions:** Member of the **Project Collection Administrators** group for the organization. Non-administrative users can also request to add the extension to their PCA.
For more information, see [Install and configure Azure DevOps Server](/azure/devops/server/install/get-started) and [Requirements and compatibility](/azure/devops/server/requirements).

### Hardware recommendations

Search works on any physical server or virtual machine that runs Azure DevOps Server. You can set up Search on the same server or a different server. If you use the same server, consider the CPU usage.

> [!TIP]
> Configure Search on a separate server for production environments.

For acceptable performance in multi-user scenarios, consider the following recommendations:

* Fewer than 250 users with Search located on the server (typically used for demonstration and trial purposes):
  - Quad core processor, 16 GB (minimum) RAM
  - CPU Utilization factor less than 50%
  - Fast hard drive backed by Solid State Drive (SSD) storage
* Fewer than 500 users with Search located on a [separate server](#install-or-update-search-on-a-separate-server): 
  - Dual core processor, 8 GB (minimum) RAM
  - Fast hard drive backed by Solid State Drive (SSD) storage
* Fewer than 1,000 users with Search located on a [separate server](#install-or-update-search-on-a-separate-server):
  - Quad core processor, 16 GB (minimum) RAM
  - Fast hard drive backed by Solid State Drive (SSD) storage
* More than 1,000 users with Search located on a [separate server](#install-or-update-search-on-a-separate-server):
  - Quad core processor, 16 GB (minimum) RAM
  - Fast hard drive backed by Solid State Drive (SSD) or Storage Area Network (SAN) storage
* Azure DevOps Server with multiple application tiers (ATs): 
  - Install Search on a [separate server](#install-or-update-search-on-a-separate-server)
* Azure DevOps Server CPU utilization greater than 50% before Search installation:
  - Install Search on a [separate server](#install-or-update-search-on-a-separate-server)

**Disk space requirement**:

The amount of disk space used by Search depends mainly on the type and size of files indexed. For code search, many times repositories can be large and have different code files in version control. The disk space requirement can be significant. **Allocate up to 150% of the size of all the repositories to be indexed.** You can exclude folders from your repositories for indexing to optimize the disk space consumed by search.

### Software dependencies

Search has the following dependencies, which the configuration process installs automatically:

* [Elasticsearch](https://www.elastic.co/products/elasticsearch) by Elastic.
  * Search uses a modified version of Elasticsearch. It works only with this modified version.
* [Elasticsearch NEST client](https://www.elastic.co/guide/en/elasticsearch/client/net-api/current/index.html). 
* [Microsoft Build of OpenJDK](/java/openjdk/download) Version 11.
  * The Microsoft Build of OpenJDK doesn't automatically install updates.
* [Markdowndeep](https://www.toptensoftware.com/markdowndeep/) by Topten Software.
* [Roslyn](https://github.com/dotnet/roslyn) compiler platform.
* [ANTLR](https://www.antlr.org/) language recognition parser.

> [!NOTE]
> - The system or server administrator must ensure that Server JRE is maintained and updated in line with the software provider's recommendations. Also see the [Java installation notes](#java-installation-notes) that follow.
> - Regularly [check for updates](/java/openjdk/download).

#### Java installation notes

- If the Search configuration wizard doesn't detect a working installation of a Java Runtime Environment (JRE), it provides an option to download and install the latest supported version. Internet connectivity is required to download. If the target server doesn't have Internet connectivity, you must download and install a JRE manually before attempting to install Search.
- Azure DevOps Server uses Elasticsearch version 7.17.0, which has a bundled version of OpenJDK.
- During installation, the wizard sets the **JAVA\_HOME** environment variable to point to the JRE installation folder. The configuration wizard might not detect an existing JRE installation if it wasn't correctly configured, or if the **JAVA\_HOME** setting points to an earlier version than required by Search. 

   > [!NOTE]   
   > Avoid installing Elasticsearch on a machine where resources are shared, especially in a large enterprise environment with multiple application tiers. Set up Elasticsearch on a separate dedicated machine so the JAVA environment isn't shared across machines for other purposes.

- If there's a version of a JRE **earlier** than the minimum required by Search, and the **JAVA\_HOME** variable was set to that version, install Search on a [separate server](#install-or-update-search-on-a-separate-server). 
- If there's a version of Server JRE **equal to or later** than the minimum required by Search and the configuration wizard doesn't recognize it, ensure the **JAVA\_HOME** variable is not set. Then, rerun the configuration wizard (`& "C:\Program Files\Azure DevOps Server XXX\Search\ES\vX.XX\bin\elasticsearch-service.bat" manager`) and select the version by setting the path for the *Java Virtual Machine*.
- If you can't install the version of Java required by Search because of other dependencies, you can do the following tasks:
  - Install Azure DevOps Server with the Search extension on a server that doesn't have Java installed. This option isn't recommended for more than 250 users or CPU utilization greater than 50% or multiple ATs.
  - Install Search and the JRE on a [separate server](#install-or-update-search-on-a-separate-server) from Azure DevOps Server.

## Feature availability

* Work Item and Wiki search are built-in extensions that the configuration process installs by default.
* Code Search is an opt-in feature. You can install Code Search later from the Local Gallery. Go to **Local Gallery** (```http://{server}/_gallery```) as an administrator. Non-administrative users can also request the extension for Azure DevOps Server. For more information, see [Install an extension](../../marketplace/get-tfs-extensions.md).

## Configure Search

Configure the Search service by using the dedicated pages in the Server Configuration Wizard as you install Azure DevOps Server. You can also [unconfigure Search](#uninstall-search)
by running the Server Configuration Wizard again or by launching the Search Configuration Wizard.

### Configuration considerations

Consider the following information when you configure Search:

* Both Work Item and Wiki search are enabled by default when you configure Search. You can later remove these extensions if necessary from the **Manage Extensions** page of Azure DevOps Server.
* You must install the Code Search extension for each Azure DevOps Server collection where you want to use it. When you initially configure Search, you can set a checkbox to **Automatically install Code Search extension for existing and new Project Collections** to automate this process.
* If you don't set the checkbox to install the Code Search extension for all your project collections, your PCA can install it from the Local Gallery. Ensure you go to the Local Gallery (`http://{Server}/_gallery`) from your Azure DevOps Server portal page. For more information, see [Install an extension](../../marketplace/get-tfs-extensions.md).
* It typically takes less than one hour for Search to index a collection. But, it can take up to 12 hours based on the size and number of code files, work items, or wiki pages. If you get no results after this period, [check the indexing status](manage-search.md#check-indexing-status).

#### Use a second hard drive and remote server

* For maximum performance, the search index folder should be on a separate fast hard drive and backed by fast storage, such as a solid-state drive (SSD) or Storage Area Network (SAN). **Allocate up to 150%** of the size of all the repositories to be indexed, which is the worst-case scenario. The actual consumed space depends on the amount and type of code files, and the number of work items and wiki pages in that collection.
  * Unless specified, the indexing service and Elasticsearch engine use the network service account during installation to create and access the index files. If you choose a different account, it must have **Log on as a service** permission.
  * Restrict the permissions for the index disk and folder to protect the index from accidental or malicious modification or deletion. Configure appropriate [security settings](#secure-search) for the service.
* When you configure Search for a server with **multiple ATs**, install it on a [separate server](#install-or-update-search-on-a-separate-server). After you install Search on the remote server, use the Configuration Wizard on any one of the AT servers to link the remote Search instance with your Azure DevOps Server instance. When you unconfigure Search, you must use the Configuration Wizard on the same AT server where configuration was originally carried out.

#### Upgrade your server

* If you're doing a **preproduction upgrade** on a server where Search was already configured, you must fully reconfigure Search again to avoid corrupting your production instance. There's no option to configure Search as part of a preproduction upgrade. Instead, configure it after the preproduction upgrade is complete. You can uncheck **Automatically install and configure Code Search for all existing and new collections** during configuration. Instead, install the Search extension for just one or two of your collections after configuration is complete.
* If you're doing a **production upgrade** on a server where Search is configured and you want to keep it, check the box next to **Install and Configure Search**. The wizard detects your existing Search instance and automatically selects **Use existing Search instance** , and prepopulates your current Search service URL. Use the **Install a new Search instance** option only if you want to set up a new instance of Search on the same server. Setting up a new instance causes all your code, work items, and wiki to be indexed again, which - depending on the size of the collections - can take some time. During indexing, users might see partial search results.
* If you're **upgrading your server to new hardware**, you have the following two options. Select from these options, depending on how Search was previously configured:
  - If Search is on a separate server from Azure DevOps Server, you must select **Install and Configure Search** in the Server Configuration Wizard, and then select **Use an existing Search instance** and provide the URL of your existing Search instance to complete the Search configuration.
  - If Search is configured alongside your Azure DevOps Server instance on the old server, you must select **Install and Configure Search** in the Server Configuration Wizard. Then, select **Install a new Search instance** again on the new server if you want to continue to cohost Search and Azure DevOps Server. All Search indexes for all collections are re-created which, depending on the size of each collection, might take some time.   
* If you're **detaching a collection** from one Azure DevOps Server instance to attach it to another instance, complete the following steps:
   1. Detach the collection from source Azure DevOps Server instance.
   1. Configure Search on the target Azure DevOps Server instance (if not yet done already).
   1. Attach the collection to the target Azure DevOps Server.
   1. Uninstall your Search extensions, like Code, Work item, or Wiki for the collection from the **Local Gallery** within your Azure DevOps Server.
   1. Install the Search extension for the collection from the **Local Gallery** by browsing to it from your target Azure DevOps Server instance.

### Install or update Search on a separate server

To install or update Search on a separate or remote server, typically when there are more than 250 users, complete the following steps:

1. As you install Azure DevOps Server on the primary server, set the **Install and configure Search** checkbox. 
   in the **Search** page of the Server Configuration Wizard.
1. Select the option to **Use an existing Search service**. 
1. Use the **Search service package** link provided in the wizard to access a set of Search installer files on the local machine. Then, copy these files to the remote server.
1. Follow the instructions in the **Readme.txt** file, located in the set of 
   installer files, to install or update the Search service on the remote server.
1. After installation completes, copy the resulting Search server URL into the **Search URL** field of the configuration wizard that runs on the Azure DevOps Server instance.
1. When both installations are complete, configure appropriate [security settings](#secure-search) for both servers.

## Secure search

The Search service uses a modified version of [Elasticsearch](https://www.elastic.co/products/elasticsearch). For the rest of this section, the terms "Search" and "Elasticsearch" are used interchangeably. Administrators must provide credentials whether the Search service is on the same machine as Azure DevOps Server, or on a separate machine. This action is part of configuring the Search feature through the server or the Search configuration wizard. These credentials are new and aren't related to any preexisting account or server credentials. Use these credentials to set up and connect to the Search service. These new sets of credentials enable basic authentication in the search service.

:::image type="content" source="media/administration/tfsU3_search_cred1.png" alt-text="Screenshot showing search credentials." border="true":::

If the Search service is on the same machine as Azure DevOps Server, administrators can provide a new set of credentials in the Configuration Wizard to set up the Search service, if wanted. However, if the Search service is on a remote machine, administrators must first provide the new credentials to the Search service setup script.

> [!NOTE]
> * Credential values should both be between 8 and 64 characters in length.
> * Search credentials only authenticate the users and make sure that unauthenticated users can't access the Elasticsearch endpoint. However, Elasticsearch doesn't support HTTPS and so these credentials get sent over the network as Base64 encoded strings. If there's a possibility of intermediate access to request, configure appropriate security settings based on your corporate security and compliance requirements.
> * Aim to limit access to both searching and indexing to specific users or user groups using encryption through IPSec, described as follows. 

Consider the following techniques for using IPSec to secure Elasticsearch on a Windows server:

* **Configure security with authentication only:**
  - Ensures only authorized users can access the Elasticsearch port. It requires only service-side rules (firewall rules on only the server running Elasticsearch)
  - Prerequisite: Azure DevOps Server must be configured with a domain account
  - Follow the steps in [Creating Firewall Rules that Allow IPsec-protected Network Traffic](/previous-versions/windows/it-pro/windows-server-2008-R2-and-2008/cc754873(v=ws.10))

* **Configure security with authentication, integrity protection, and encryption:**
  - Ensures encryption and integrity protection are applied along with authentication. It requires 
    both client-side and service-side rules (firewall rules on the server running Elasticsearch and all Azure DevOps Server App Tier servers)
  - Prerequisite: Azure DevOps Server must be configured with a domain account
  - Follow the steps in [Isolating a Server by Requiring Encryption and Group Membership](/previous-versions/windows/it-pro/windows-server-2008-R2-and-2008/cc772460(v=ws.10))

## Uninstall Search

For a preproduction upgrade, production upgrade, new hardware migration, cloning, or other maintenance operation, the Server Configuration Wizard unconfigures Search. But, you can easily reconfigure it after the server maintenance operation is complete.

You might encounter cases where you no longer want to use Search or you want to do a new and clean install. This operation requires multiple steps, depending on whether Search is configured on the [same server](#unconfig-same-server) as Azure DevOps Server, or on a [separate server](#unconfig-separate-server).

<a name="unconfig-same-server"></a>

### Unconfigure Search on the machine configured as your Azure DevOps Server

1. Uninstall the Search extension for each collection.
   Go to the **Manage Extensions** page of each collection in your Azure DevOps Server instance:

   ::: moniker range="<=azure-devops"
   :::image type="content" source="media/shared/goto-marketplace-new.png" alt-text="Screenshot of checking that the extension is installed." border="true":::
   ::: moniker-end

   

1. Remove the Search feature:
   
   1. Open the Azure DevOps Server Administration Console.
   1. Select the name of the server.
   1. Choose **Remove Feature**.
   1. Select **Search service**, and then choose **Remove**.

1. Remove the Elasticsearch service:
   
   1. Open **Command Prompt** as an administrator.
   1. Change the directory, `cd "C:\Program Files\Microsoft Team Foundation Server 15.0\Search\ES\elasticsearch-5.4.1\bin"`.
   1. Remove the service, `"elasticsearch-service.bat remove"`.   

1. Remove Search data:
   - Delete the contents of the location described by the environment variable, `SEARCH_ES_INDEX_PATH`.
1. Delete the environment variable, `"SEARCH_ES_INDEX_PATH"`.

<a name="unconfig-separate-server"></a>

### Unconfigure Search on a separate server

Complete the following steps to unconfigure Search, like for Code, Work item, or Wiki, for each collection. 

1. Go to the **Manage Extensions** page for each collection in your Azure DevOps Server instance.

   ::: moniker range="<=azure-devops"
   :::image type="content" source="media/shared/goto-marketplace-new.png" alt-text="Screenshot of checking that the extension is installed." border="true":::
   ::: moniker-end

   

1. Remove the Search feature:

   1. Open the *Remove Feature* dialog,  Administration Console.
   1. In the left pane, select the name of the Azure DevOps Server.
   1. In the right pane, choose **Remove Feature**.
   1. In the *Remove Feature* dialog, select **Search service**, and then choose **Remove**.

3. Remove the Elasticsearch service and data.

   1. Open **PowerShell** as an administrator.
   1. Open the **Configure Search.ps1** folder, along with the rest of the files that are required for a remote install of Search.
   1. Run the script again with the remove option: `"ConfigureTFSSearch.ps1 -remove".`

<a name="limit-tfs"></a>

## Limitations of Search

Search for Azure DevOps Server has the following limitations: 

* You need to [reindex all your collections](manage-search.md#reindex-a-repository-or-collection) if you perform a disaster recovery (DR) operation and move your server back to an earlier snapshot of your SQL database.
* Search isn't extensible, but you can submit a new feature request on the [Developer Community](https://developercommunity.visualstudio.com/home).

## Related content

- [Manage indexing for Search](manage-search.md)
- [Get started with Search](get-started-search.md)
