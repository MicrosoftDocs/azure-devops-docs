---
title: Administer code, wiki and workitem search
description: Setup notes and administration links for Microsoft Code, Wiki & Work Item Search in Azure DevOps Services, Azure DevOps Server, and Team Foundation Server (TFS)
ms.assetid: A78DC9CF-4ADD-46D7-9E25-D1A0764FCB06
ms.prod: devops
ms.technology: devops-collab
ms.topic: conceptual
ms.manager: jillfra
ms.author: ahomer
author: alexhomer1
ms.date: 12/07/2018
monikerRange: '>= tfs-2017'
---

# Set up and administer Code Search, Wiki Search, and Work Item Search

[!INCLUDE [version-header](../../_shared/version-tfs-2017-through-vsts.md)]

In this topic:

* **Configure Search (Code, Work Item, and Wiki) in Azure DevOps Services**
  - [Install the Search extension in Azure DevOps Services](#config-ts-azuredevops)
  - [Uninstall the Search extension from Azure DevOps Services](#uninstall-ts-azuredevops)<p />

* **Configure Search (Code, Work Item, and Wiki) in Azure DevOps Server or Team Foundation Server (TFS)**
  - [Install the Search extension in Azure DevOps Server or TFS](#install-tfs)
  - [Configure Search in Azure DevOps Server or TFS](#config-tfs)
  - [Secure Search in Azure DevOps Server and TFS](#secure-search)
  - [Upgrade Search in Azure DevOps Server and TFS](#upgrading-search)
  - [Manage Search in Azure DevOps Server and TFS](#manage-tfs)
  - [Uninstall Search from Azure DevOps Server or TFS](#uninstall-tfs)
  - [Limitations of Search in Azure DevOps Server and TFS](#limit-tfs)
  - [Troubleshoot Search in Azure DevOps Server and TFS](#trouble-tfs)

Also see [Install and configure Azure DevOps Server or TFS](../../tfs-server/install/get-started.md)
and [Requirements and compatibility](/azure/devops/server/requirements).

> Users with at least a **Basic** access can use Code Search. 
**Stakeholders** do not have access to code, and therefore no access to Code Search. 
All users have access to Work Item and Wiki Search.

*****

<a name="config-ts-azuredevops"></a>
##  Install the Search extension in Azure DevOps Services

* For Work Item and Wiki search, there is no installation required because these are built-in features of Azure DevOps Services.

* For Code Search, go to [Azure DevOps Marketplace](https://marketplace.visualstudio.com/) to install the Code Search extension in Azure DevOps as an administrator.
  Non-administrative users can also go here to request the Code Search extension be added to Azure DevOps Services. 

For more details, see [Install an extension](../../marketplace/install-extension.md) in the Marketplace documentation.

<a name="uninstall-ts-azuredevops"></a>
## Uninstall the Search extension from Azure DevOps Services

* For Work Item and Wiki search, users cannot uninstall them as these come as built-in extensions in Azure DevOps Server and TFS.

* For Code Search, see [Uninstall or disable an extension](../../marketplace/uninstall-disable-extensions.md) in the Marketplace documentation. 

*****

<a name="install-tfs"></a>
## Install Search extension in Azure DevOps Server or TFS

### Availability

* Code Search is available in TFS 2017 and later, and in Azure DevOps Server.

* Work Item Search is available in TFS 2017 Update 2 and later, and in Azure DevOps Server.

* Wiki Search is available in TFS 2018 Update 2 and later, and in Azure DevOps Server.

* Work Item and Wiki search are built-in extensions that are installed by default during Search configuration.

### Installation

Code Search is an opt-in feature, and can be installed later from the Local Gallery. 
To do this, go to **Local Gallery** (`http://{Server}/tfs/_gallery`) as an administrator.
Non-administrative users can also go here to request the extension be added to TFS or Azure DevOps Server. 

For more details, see [Install an extension](../../marketplace/get-tfs-extensions.md) in the Marketplace documentation.

<a name="config-tfs"></a>
## Configure Search in Azure DevOps Server or TFS

Configure the Search service using the dedicated pages in the Server Configuration Wizard
as you install Azure DevOps Server or TFS. You can also [configure and unconfigure Search](#uninstall-tfs)
afterwards by running the Server Configuration Wizard again or by launching the Search Configuration Wizard.

<a name="hardware-recommendations"></a>
### Hardware recommendations

Search can be used on any size physical server or virtual machine that runs 
TFS 2017 or later, or Azure DevOps Server. It can be configured on the same server,
or on a separate server dedicated to Search.
When configuring Search on the same server, you must consider the existing CPU utilization
factor due to Azure DevOps Server or TFS itself.

**For production environments we recommend you configure Search on a separate server.**

For acceptable performance in multi-user scenarios, consider the 
following recommendations:

* Less than 250 users with Search co-located on the server (typically used for demonstration and trial purposes):
  - Quad core processor, 8 GB (minimum) RAM
  - CPU Utilization factor less than 50%
  - Fast hard drive backed by Solid State Drive (SSD) storage<p />

* Less than 500 users with Search located on a [separate server](#separate-server): 
  - Dual core processor, 8 GB (minimum) RAM
  - Fast hard drive backed by Solid State Drive (SSD) storage<p />

* Less than 1,000 users with Search located on a [separate server](#separate-server):
  - Quad core processor, 16 GB (minimum) RAM
  - Fast hard drive backed by Solid State Drive (SSD) storage<p />

* More than 1,000 users with Search located on a [separate server](#separate-server):
  - Quad core processor, 16 GB (minimum) RAM
  - Fast hard drive backed by Solid State Drive (SSD) or Storage Area Network (SAN) storage<p />

* Azure DevOps Server with Multiple ATs: 
  - Install Search on a [separate server](#separate-server)<p />

* Azure DevOps Server CPU utilization greater than 50% before installing Search:
  - Install Search on a [separate server](#separate-server)<p />

**Disk space requirement**:

The amount of disk space taken up by Search depends mainly on the type and size of files that will be indexed. 
For Code search, since many times repositories can be large and can have different
code files in version control, disk space requirement could be significant. As a general guideline,
allocate up to 150% of the size of all the repositories that will be indexed. From TFS 2018 Update 3 onwards
and Azure DevOps Server, users can exclude desired folders from their repositories during the time of indexing if they want to optimize the disk space consumed by search.

### Software Dependencies

Search has the following dependencies, which are installed automatically
as part of the configuration:

* [Elasticsearch](https://www.elastic.co/products/elasticsearch) by Elasticsearch BV (see Notes 1 and 2)
* [Elasticsearch NEST client](https://www.elastic.co/guide/en/elasticsearch/client/net-api/current/index.html) 
* [Azul Zulu OpenJDK](https://www.azul.com/downloads/zulu/zulu-windows/) (see [Java installation notes](#java-notes))
* [Markdowndeep](http://www.toptensoftware.com/markdowndeep/) by Topten Software
* [Roslyn](https://github.com/dotnet/roslyn) compiler platform
* [ANTLR](http://www.antlr.org/) language recognition parser

**NOTES**:
 
1. Search uses a modified version of Elasticsearch. It will work only with this modified version.  
2. A newer version of Elasticsearch ships with TFS 2018 Update 2 and above, and Azure DevOps Server.
   Upgrading from an older version of Search will result in all content being re-indexed after the installation.
   Depending on the volume of content (code files, work items, and wiki pages), re-indexing can take some time to complete.
3. The system or server administrator must ensure that Server JRE is
   maintained and updated in line with the software provider's recommendations. 
   Also see the [Java installation notes](#java-notes) that follow.
4. The Azul Zulu OpenJDK does not automatically install updates.
   Ensure you regularly [check for updates](https://www.azul.com/downloads/zulu/zulu-windows/).

<a name="java-notes"></a>
#### Java installation notes

If the Search configuration wizard does not detect a working installation of a 
Java Runtime Environment (JRE), it provides an option to download and install the latest version. 
Internet connectivity is required to download this.
If the target server does not have Internet connectivity, you must download 
and install a JRE manually before attempting to install Search.

> Versions of Search prior to Azure DevOps Server used the [Oracle Server Java Runtime Environment](http://www.oracle.com/technetwork/java/javase/downloads/server-jre8-downloads-2133154.html).
> In Azure DevOps Server, the default JRE is [Azul Zulu OpenJDK](https://www.azul.com/downloads/zulu/zulu-windows/).

During installation, the wizard sets the **JAVA\_HOME** environment variable 
to point to the JRE installation folder. The configuration wizard may fail 
to detect an existing JRE installation if it is not correctly configured, 
or if the **JAVA\_HOME** setting points to an earlier version than that required 
by Search. 

If there is a version of a JRE **earlier** than the minimum required by  
Search, and the **JAVA\_HOME** variable is set to that version, we recommend 
you install Search on a separate server because changing the value 
of the **JAVA\_HOME** variable may cause other installed software to fail.

If there is a version of Server JRE **equal to or later** than the minimum required
by Search, and it is not recognized by the configuration wizard, you
must set the value of the **JAVA\_HOME** variable to that version as described in
the JRE installation guide and then rerun the configuration wizard.

* [Zulu OpenJDK installation guide](http://docs.azul.com/zulu/zuludocs/index.htm)
* [Oracle JRE troubleshooting guide](http://docs.oracle.com/javase/7/docs/webnotes/tsg/) 

If you cannot install the version of Java required by Search due to other dependencies, you can:

* Install Azure DevOps Server or TFS together with the Search extension on a server that does
  not have Java installed (not recommended for more than 250 users or CPU utilization greater than 50% or multiple ATs).

* Install Search and the JRE on a [separate server](#separate-server) from Azure DevOps Server or TFS.

> [!NOTE]
> If you are using Oracle Server JRE 8, which was the default for Search in TFS (Azure DevOps Server does not use Oracle Server JRE 8), be aware that:
>
> * Search does not use or support any of the commercial features of Server JRE 8.
>   Therefore, during Search configuration,the commercial features of the Server JRE are neither activated nor unlocked.
>
> * If you choose to continue with Oracle JRE, contact Oracle for a [Java SE Subscription](https://www.oracle.com/java/java-se-subscription.html), so that you can continue to receive JRE updates.

#### Migrating to Zulu OpenJDK from Oracle Server JRE

Search in Azure DevOps Server and TFS supports both Azul Zulu OpenJDK and Oracle JRE, allowing you to choose between them based on your needs.
When selecting a JRE during installation, Azure DevOps Server defaults to Azul Zulu OpenJDK 8.

To change to the Azul Zulu OpenJDK, follow these simple steps:

![Java Migration flow](_img/administration/java-migration-flow.png)

More details are available [here](https://github.com/msftazdev/Code-Search/tree/master/Java%20Migration).

> [!NOTE]
> * If you choose to use Azul Zulu OpenJDK, ensure you [download the latest updates](https://www.azul.com/downloads/zulu/zulu-windows/). It does not automatically install updates.

### Installation considerations

Consider the following when configuring Search:

* Both Work Item and Wiki search are enabled by default when Search is configured. These extensions can 
  be later removed if required from the **Manage Extensions** page of Azure DevOps Server or TFS.

* The Code Search extension must be installed for each Azure DevOps Server or TFS collection where you want to use it. 
  When initially configuring Search, you can set a checkbox to **Automatically install Code Search extension 
  for existing and new Project Collections** to automate this process.

* If you do not set the checkbox to install the Code Search extension for all your project collections when 
  configuring Search, your project collection administrator can install it from the Local Gallery. Ensure you
  navigate to the Local Gallery (`http://{Server}/tfs/_gallery`) from your Azure DevOps Server or TFS portal page. 

* The search index folder should be located on a separate fast hard drive backed by fast storage such
  as a solid-state drive (SSD) or Storage Area Network (SAN) to maximize search performance.
  As a general guideline, allocate up to 150% of the size of all the repositories that will be indexed. 
  That is the worst-case scenario; the actual space consumed is dictated by the amount and type of code files, amount of work items and wiki pages in that collection.

* Unless specified, the indexing service and Elasticsearch engine use the network service account during 
  installation to create and access the index files. If you choose a different account, it must have **Log on as a service**
  permission. 

* Restrict the permissions for the index disk and folder to protect the index
  from accidental or malicious modification or deletion, and configure appropriate 
  [security settings](#secure-search) for the service.

* When configuring Search for a server with **multiple application tiers (ATs)**, make sure it is installed on a [separate remote server](#separate-server). After Search is installed 
  on the remote server, use the Configuration Wizard on any one of the AT servers to link the remote Search instance with your Azure DevOps Server or TFS instance.
  When unconfiguring Search in the future you must use the Configuration Wizard on the same AT server where configuration was originally carried out.

* If you are performing a **pre-production upgrade** on a server where Search is already configured, you must fully
  reconfigure Search again to avoid corrupting your production instance. For this reason, there is no option to configure 
  Search as part of a pre-production upgrade. Instead, configure it after the pre-production upgrade is complete. 
  As this is a pre-production upgrade, you can choose to uncheck **Automatically install and configure Code Search for all existing and new collections**
  during configuration, and instead install the Search extension for just one or two of your collections after configuration is complete.

* If you are performing a **production upgrade** on a server where Search is already configured, and want to retain the Search feature, 
  you must set the checkbox to **Install and Configure Search**. At this point the wizard will detect your existing Search instance and 
  automatically select the **Use existing Search instance** option and pre-populate your current Search service URL.
  Use the **Install a new Search instance** option only if you want to set up a new instance of Search on the same server.
  Setting up a new instance causes all your code, work item and wiki to be indexed again, which - depending on the size of the collections - can take some time.
  During indexing, users may see partial search results. 

* If you are **upgrading your server to new hardware**,
  depending on how Search was previously configured, you have two options:

  - If Search was configured on a separate server from Azure DevOps Server or TFS, you must select **Install and Configure Search** in the Server Configuration Wizard,
    and subsequently select **Use an existing Search instance** 
    and provide the URL of your existing Search instance to complete the Search configuration. 
    
  - If Search was configured alongside your Azure DevOps Server or TFS instance on the old server, you must select **Install and Configure Search**
    in the Server Configuration Wizard, and subsequently select **Install a new Search instance** 
    again on the new server if you want to continue to co-host Search and Azure DevOps Server or TFS.
    This will cause all Search indexes for all collections to be re-created which,
    depending on the size of each collection, might take some time.<p />
    
* If you are **detaching a collection** from one Azure DevOps Server or TFS instance in order to attach it to another instance, ensure that:

  - Search has been configured on the target Azure DevOps Server or TFS instance.

  - Before you detach the collection, you have uninstalled the Search extension (Code, Work Item, or Wiki) for that collection from the **Manage Extensions** page of your source server instance.

  - After you attach the collection to the target Azure DevOps Server or TFS instance, you install the Search extension (Code, Work Item, or Wiki) for that collection from the Local Gallery by
    browsing to it from that Azure DevOps Server or TFS instance.

<a name="separate-server"></a>
### Installing or updating Search on a separate server

To install or update  Search on a separate (remote) server, typically when you have more than 250 users,
follow these steps:

1. As you install Azure DevOps Server or TFS on the primary server, set the **Install and configure Search** checkbox 
   in the **Search** page of the Server Configuration Wizard.

1. Select the option to **Use an existing Search service**. 

1. Use the **Search service package** link provided in the wizard to access a set of Search installer files 
   on the local machine, and then copy these files to the remote server.

   ![Separate server installation](_img/administration/separate-server.png)

1. Follow the instructions in the **Readme.txt** file located in the set of 
   installer files to install or update the Search service on the remote server.

1. After the installation of the Search service on the remote server is complete,
   copy the resulting Search server URL into the **Search URL** field of the 
   configuration wizard running on the Azure DevOps Server or TFS instance.

1. When both installations are complete, configure appropriate 
   [security settings](#secure-search) for both servers.

<a name="secure-search"></a>
## Secure Search in Azure DevOps Server and TFS

The Search service uses a modified version of 
[Elasticsearch](https://www.elastic.co/products/elasticsearch) 
(the terms "Search" and "Elasticsearch" are used 
interchangeably for the remainder of this section). 
TFS Admins will need to provide credentials as part of configuring Search feature 
(through Server or Search configuration wizard) whether Search service 
is on the same machine as Azure DevOps Server or TFS,
or on a separate machine. These are new set of credentials (not related to any pre-existing account or server credentials) 
and are used to set up and connect to Search service.
These new set of credentials will enable basic authentication in search service. 

![Search credentials](_img/administration/tfsU3_search_cred1.png)

In the case of an upgrade from TFS 2018 Update 1.1 to TFS 2018 Update 3, or search re-configuration, 
only the user information is auto-populated and administrators must provide password credentials. 
Administrators have an option to provide different username and password if they wish. If the Search service is 
on the same machine as Azure DevOps Server or TFS, and administrators want to change the credentials,
they can simply provide a new set of credentials in the Configuration Wizard to set up the Search service. 
However, if the Search service is on a remote machine, administrators must first provide the new credentials
to the Search service setup script.

> [!NOTE]
>  
> * Username and password values should both be between 8 and 64 characters in length. While the password can be assigned any value, the username can contain only alphanumeric and underscore characters. 
>
> * Search credentials will only authenticate the users and make sure that unauthenticated users cannot access the Elasticsearch endpoint. 
>   However, Elasticsearch does not support HTTPS and so these credentials are sent over the network as Base64 encoded strings.
>   If there is a possibility of intermediate access to request, configure appropriate security settings based on your corporate security and compliance requirements.
>
> * Irrespective of the Azure DevOps Server or TFS version you use, aim to limit access to both searching and indexing to specific users or user groups using encryption through IPSec, as described below. 

Consider the following techniques for using IPSec to secure Elasticsearch on a Windows server:

* **Configure security with authentication only:**
  - This ensures only authorized users can access the Elasticsearch port. It requires only service-side rules (firewall rules on only the server running Elasticsearch).
  - Prerequisite: Azure DevOps Server or TFS must be configured with a domain account.
  - Follow the steps in [Creating Firewall Rules that Allow IPsec-protected Network Traffic](https://technet.microsoft.com/library/cc754873%28v%3Dws.10%29.aspx).<p />

* **Configure security with authentication, integrity protection, and encryption:**
  - This ensures encryption and integrity protection are applied along with authentication. It requires 
    both client-side and service-side rules (firewall rules on the server running Elasticsearch and all Azure DevOps Server or TFS App Tier servers).
  - Prerequisite: Azure DevOps Server or TFS must be configured with a domain account.
  - Follow the steps in [Isolating a Server by Requiring Encryption and Group Membership](https://technet.microsoft.com/library/cc772460%28v%3Dws.10%29.aspx).

<a name="upgrading-search"></a>
## Upgrade Search in Azure DevOps Server and TFS

TFS 2017 Update 1 includes updated Search components. If the Search
service was configured in TFS 2017 RTM then, during an upgrade, the
Search service components will be updated automatically if the Search
service was configured on the TFS that is being upgraded.
If Search was configured on a remote server, follow
[these instructions](#separate-server) to update it.

TFS 2017 Update 2 includes Work items Search. It uses the same Search service as Code Search.
If the Search service was configured in TFS 2017 RTM/Update1 then, during an upgrade, the
Search service components will be updated automatically if the Search
service was configured on the TFS that is being upgraded.
If Search was configured on a remote server, follow
[these instructions](#separate-server) to update it.

TFS 2018 Update 2 includes updated Search components and Wiki Search. If the Search service was configured in TFS 2017 RTM, Update1, Update2, or TFS 2018 RTM then, during an upgrade, the
Search service components will be updated automatically if the Search
service was configured on the TFS that is being upgraded.
If Search was configured on a remote server, follow
[these instructions](#separate-server) to update it. In both cases, all existing content (code files and work items) will be automatically re-indexed to support the updated components after configuration. Depending on the volume of content, this might take some time to complete.

TFS 2018 Update 1.1 and TFS 2018 Update 3 include basic authentication for the communication 
between the TFS and Search service to make it more secure. Any user installing or upgrading 
to TFS 2018 Update 1.1 or TFS 2018 Update 3 will need to provide credentials as part of configuring Search feature 
(through Server or Search configuration wizard).

<a name="manage-tfs"></a>
## Manage Search in Azure DevOps Server and TFS

Search is managed by running PowerShell and SQL scripts. All of
these scripts are available to download from 
**[this GitHub repository](https://github.com/Microsoft/Code-Search)**.
You may wish to download all of the scripts into a local folder on your Azure DevOps Server
server using the **Download ZIP** option. The PowerShell scripts require the SQL script files, so ensure 
the **SqlScripts** folder and its contents is present, along with the PowerShell scripts.

![Download script files for administration](_img/administration/script-filesv2.png)

> [!NOTE]
> When executing scripts, ensure you run the appropriate script for your Azure DevOps Server or TFS version:
> 
> * [TFS 2017 RTM](https://github.com/Microsoft/Code-Search/tree/master/TFS_2017RTW)
> * [TFS 2017 Update 1](https://github.com/Microsoft/Code-Search/tree/master/TFS_2017Update1)
> * [TFS 2017 Update 2](https://github.com/Microsoft/Code-Search/tree/master/TFS_2017Update2)
> * [TFS 2017 Update 3](https://github.com/Microsoft/Code-Search/tree/master/TFS_2017Update3)
> * [TFS 2018 RTM](https://github.com/Microsoft/Code-Search/tree/master/TFS_2018RTW)
> * [TFS 2018 Update 1](https://github.com/Microsoft/Code-Search/tree/master/TFS_2018Update1)
> * [TFS 2018 Update 2](https://github.com/Microsoft/Code-Search/tree/master/TFS_2018Update2)
> * [Azure DevOps Server and TFS 2018 Update 3](https://github.com/Microsoft/Code-Search/tree/master/TFS_2018Update3)

<a name="check-index"></a>
### Check indexing status for TFS 2017 RTM

(For TFS 2017 Update 1 and later, and Azure DevOps Server, see the [next section](#index-update1))

To check the indexing status after Search is configured, or after the extension is installed for a collection:

1. Execute the **CheckIndexingStatus.ps1** script with administrative privileges. 
   You will be prompted to enter:

   - The SQL server instance name where the TFS configuration database resides.
   - The name of the TFS collection database.
   - The name of the TFS configuration database.
   - The name of the collection.
   - The number of previous days to check indexing status.<p />

1. Check the following outputs:
 
   - **Collection indexing was triggered successfully**: Indicates that 
     indexing is in progress. If it is displayed, check the following outputs.
     If it is not displayed, go to step 3 below. 

   - **Repositories Indexing Completed**: The repositories whose indexing 
      has been completed and are now searchable.  

   - **Repositories in File Discovery Phase**: The repositories where files
      are yet to be discovered. The files are indexed after this stage. 
      Repositories in this state are not yet searchable. The number of 
      files already discovered for indexing in each repository is shown, and this 
      number should be increasing as more files are discovered. 

   - **Repositories Indexing In Progress**: These repositories are partially
     indexed and should be searchable now, even if the results are only partial.<p />
 
1. It takes some time for indexing to complete. Execute the **CheckIndexingStatus.ps1** script
   at intervals to check indexing progress.

1. If indexing is not occurring, or indexing is in progress but the number of 
   files pending or the number of files discovered has not changed for some time,
   or no results are returned for a search, trigger indexing again by running 
   the **TriggerCollectionIndexing.ps1** script in a PowerShell window with administrative permission. 

1. If the problem persists, contact customer support at the address shown at the end of this topic. 

<a name="index-update1"></a>
### Check indexing status for TFS 2017 Update 1 and later, and Azure DevOps Server

To check the indexing status after Search is configured, or after the extension is installed for a collection:

1. Execute the **ExtensionInstallIndexingStatus.ps1** script with administrative privileges. 
   You will be prompted to enter:

   - The SQL server instance name where the Azure DevOps Server or TFS configuration database resides.
   - The name of the Azure DevOps Server or TFS collection database.
   - The name of the Azure DevOps Server or TFS configuration database.
   - The name of the collection.
   - The number of previous days to check indexing status.<p />
 
1. Check the following outputs:

   - **Collection indexing was triggered successfully**: Indicates that 
     indexing is in progress. If it is displayed, check the following outputs.
     If it is not displayed, go to step 3 below. 

   - **Repositories completed indexing**: The number of repositories for which indexing has completed and are searchable.
    
   - **Status of repositories currently indexing**: A list of the names of all the repositories that are still being indexed and are partially searchable.<p />
 
1. It takes some time for indexing to complete. Execute the **RecentIndexingActivity.ps1** script at intervals to check indexing progress. This script takes the same parameters as the **ExtensionInstallIndexingStatus.ps1** script.

   - **Repositories completed fresh indexing**: The number of repositories for which indexing has completed within the specified time interval.

   - **Count of repositories with fresh indexing in progress**: The number of repositories for which indexing has not yet completed. These repositories are still being indexed and are partially searchable.

   - **Repositories completed continuous indexing**: The number of commits processed in the specified time interval. The number may not exactly match the total number of pushes to the repository because merges are committed as they are indexed.

   - **Count of repositories with continuous indexing in progress**: The number of repositories for which the commits are still being processed. These repositories will show incomplete results until indexing is completed.<p />
   
   - **Count of indexing job failures**: The number of indexing jobs that failed. Repositories associated with these indexing jobs could potentially show incomplete results until subsequent indexing jobs for the same repositories have patched the failed indexing.<p />

<a name="pause-index"></a>
### Pause indexing

To pause all indexing, execute the script **PauseSearchIndexing.ps1** 
with administrative privileges. Useful if you see spikes in CPU utilization after configuring Search.

You will be prompted to enter:

* The SQL server instance name where the Azure DevOps Server or TFS configuration database resides.
* The name of the Azure DevOps Server or TFS configuration database.

<a name="resume-index"></a>
### Resume indexing

If indexing was paused, execute the script **StartSearchIndexing.ps1**
with administrative privileges, to start indexing again. 
You will be prompted to enter:

* The SQL server instance name where the Azure DevOps Server or TFS configuration database resides.
* The name of the Azure DevOps Server or TFS configuration database.

<a name="re-index"></a>
### Re-index a repository or collection

To re-index a Git or TFVC repository, execute the appropriate
version of the script **Re-IndexingRepository.ps1** for your Azure DevOps Server or TFS version
with administrative privileges. You will be prompted to enter:

* The SQL server instance name where the Azure DevOps Server or TFS configuration database resides.
* The name of the Azure DevOps Server or TFS collection database.
* The name of the Azure DevOps Server or TFS configuration database.
* The type of re-indexing to execute. This can be one of the values:
  - **Git\_Repository**
  - **TFVC\_Repository**
* The name of the collection.
* The name of the repository to re-index.

To re-index a **collection**, execute the script **TriggerCollectionIndexing.ps1**
with administrative privileges. You will be prompted to enter:

* The SQL server instance name where the Azure DevOps Server or TFS configuration database resides.
* The name of the Azure DevOps Server or TFS collection database.
* The name of the Azure DevOps Server or TFS configuration database.
* The name of the collection.

Re-indexing a collection can take from a few minutes 
to a few hours, depending on the size of the collection. 

Also see **[Troubleshoot Search](#trouble-tfs)**.

<a name="uninstall-tfs"></a>
## Uninstall Search from Azure DevOps Server or TFS

In cases such as a pre-production upgrade, production upgrade, new hardware migration, cloning,
or other maintenance operation, the Server Configuration Wizard will unconfigure Search in a way
that makes it easy to re-configure it after the server maintenance operation is complete.

However, there might be cases where you no longer want to use Search or you want to perform a new and clean
install. This requires multiple steps, depending on whether Search is configured
on the [same server](#unconfig-same-server) as Azure DevOps Server or TFS, or on a [separate server](#unconfig-separate-server).

<a name="unconfig-same-server"></a>
### Unconfigure Search on the machine configured as your Azure DevOps Server

1. Uninstall the Search extension for each collection where it is installed.
   Do this by navigating to the **Manage Extensions** page of each collection in
   your Azure DevOps Server or TFS instance:

   ::: moniker range=">= azure-devops-2019"

   ![Checking that the extension is installed](_img/_shared/goto-marketplace-new.png)

   ::: moniker-end

   ::: moniker range="< azure-devops-2019"

   ![Checking that the extension is installed](_img/_shared/goto-marketplace.png)

   ::: moniker-end

1. Remove the Search feature:

   - Open the Azure DevOps Server or TFS Administration Console.
   - In the left pane, select the name of the server.
   - In the right pane, choose **Remove Feature**.
   - In the Remove Feature dialog, select the **Search service** and choose **Remove**.<p />
  
1. Remove the Elasticsearch service:

   - Open **Command Prompt** as an administrator
   - Change directory:
     * For TFS 2017 RTM, `cd "C:\Program Files\Microsoft Team Foundation Server 15.0\Search\ES\elasticsearch-1.7.1-SNAPSHOT\bin"`
     * For TFS 2017 Update 1, `cd "C:\Program Files\Microsoft Team Foundation Server 15.0\Search\ES\elasticsearch-2.4.1\bin"`
     * For TFS 2018 Update 2 and above, and Azure DevOps Server, `cd "C:\Program Files\Microsoft Team Foundation Server 15.0\Search\ES\elasticsearch-5.4.1\bin"`<p />

   - Remove the service:
     * For TFS 2017, `"service.bat remove"`
     * For TFS 2018 and Azure DevOps Server, `"elasticsearch-service.bat remove"`<p />
    
1. Remove Search data:

   - Delete the contents of the location described by the environment variable `SEARCH_ES_INDEX_PATH`<p />
    
1. Remove environment variables:

   - Delete the environment variable `"SEARCH_ES_INDEX_PATH"`
   - Delete the environment variable `"ES_HEAP_SIZE"` (this environment variable is obsolete for TFS 2018 Update 2 and later, and Azure DevOps Server).<p />
    
<a name="unconfig-separate-server"></a>
### Unconfigure Search when its configured on a separate server

1. Uninstall the Search extension (Code, Work Item, or Wiki) for each collection where it is installed. Do this by navigating to the **Manage Extensions** page of each collection in your Azure DevOps Server or TFS instance.

   ::: moniker range=">= azure-devops-2019"

   ![Checking that the extension is installed](_img/_shared/goto-marketplace-new.png)

   ::: moniker-end

   ::: moniker range="< azure-devops-2019"

   ![Checking that the extension is installed](_img/_shared/goto-marketplace.png)

   ::: moniker-end

1. Remove the Search feature:

   - Open the In the Remove Feature dialog,  Administration Console.
   - In the left pane, select the name of the Azure DevOps Server.
   - In the right pane, choose **Remove Feature**.
   - In the Remove Feature dialog, select **Search service** and choose **Remove**.<p />

1. Remove the Elasticsearch service and data

   - Open **PowerShell** as an administrator
   - Go to the folder where **Configure Search.ps1** is installed along with the rest of the files required for a remote install of Search.
   - Run the script again with the remove option: 
     * For TFS 2017 RTM, `"Configure Search.ps1 -RemoveTFSSearch"`
     * For TFS 2017 Update1 and above, and Azure DevOps Server, `"ConfigureTFSSearch.ps1 -remove"`<p />
  
<a name="limit-tfs"></a>
## Limitations of Search in Azure DevOps Server and TFS

Search for Azure DevOps Server and TFS has the following limitation: 

* If you perform a disaster recovery (DR) operation and move your server back 
  to an earlier snapshot of your SQL database, you will need to [re-index all your collections](#re-index).  

<a name="trouble-tfs"></a>
## Troubleshoot Search in Azure DevOps Server and TFS

* [Search is configured but the Search box is not displayed](#no-search-box)
* [No search results are shown after installing or configuring Search](#no-results-install)
* [How do I know if indexing was triggered for all the collections?](#indexing-status-for-collections)
* [Search stops working and no results are shown](#no-results-later)
* [Search does not show the expected results](#unexpected-results)
* [Azure DevOps Server or TFS overall performance is affected](#server-slow)
* ["Unexpected error in Search service" message](https://blogs.msdn.microsoft.com/tapas_sahoos_blog/2017/09/11/resetting-search-index-in-team-foundation-server/)

<a name="no-search-box"></a>
**Search is configured but the Search box is not displayed**

1. The search box is shown only in the context of a project page. 
   Navigate to a project and check if the search box is displayed at the top right. 

1. If the search box is not shown, verify that the extension is installed for the collection. 
   If not, [install](#install-tfs) or [configure](#config-ts-azuredevops) the extension.

<a name="no-results-install"></a>
**No search results are shown after installing or configuring Search**

1. Wait until you are sure sufficient time has elapsed
   after installing or configuring Search. It typically takes
   less than one hour for Search to index a collection, but 
   it may take up to 12 hours depending on the size and number of code files, work items, or wiki pages.

1. If no results are shown after this period, 
   [check indexing status](#check-index). 

<a name="indexing-status-for-collections"></a>
**How do I know if indexing was triggered for all the collections?**

* [Check indexing status](#check-index) separately for each collection.

<a name="no-results-later"></a>
**Search stops working and no results are shown**

Follow these steps. Replace "SearchServer" with the 
name of the server where Search is installed:

1. Access the URL `http://SearchServer:9200` from a web browser
   on a computer in the same domain as the server running Search.
   - If the status returned is `200 - OK`, go to step 2.
   - If any other status is returned, contact support at 
     the address shown at the end of this topic.
   - If you don't get a response, verify that the 
     **elasticsearch-service-x64** service is running on 
     the server where Search is configured. If the service
     is stopped, start it and access the Search server again.  
     If you still get no response, or a response other than
     `200 - OK`, contact support at 
     the address shown at the end of this topic.<p />

1. If the status is 200, access the URL `http://SearchServer:9200/_cat/health?v`
   from a web browser on a computer in the same domain as the server running Search.
   - If the status column shows green/OK, and 
     Search is still not working, contact support at 
     the address shown at the end of this topic. 
   - If the status column shows red/fault, look at the value
     in the **init** or **unassigned** columns. If these are 
     greater than zero, wait for 30 minutes and then
     repeat this step. If the values are unchanged, go to step 3.<p />

1. Access the URL `http://SearchServer:9200/_cat/shards?v`
   from a web browser on a computer in the same domain as the server running Search.
   - Make a note of the values in the **Shard** column for the 
     rows with a **state** value of **unassigned** and contact 
     support at the address shown at the end of this topic.<p />

<a name="unexpected-results"></a>
**Search does not show the expected results**

1. If the files were added in the last few minutes,
   wait for ten minutes or so while they are indexed.
1. [Check indexing status](#check-index) for the collection. 
1. If the files are still not shown in the results, 
   [re-index the repository or collection](#re-index)
   where the files are located.

<a name="server-slow"></a>
**Azure DevOps Server or TFS overall performance is affected**

1. [Pause all indexing](#pause-index) and see if performance recovers.
1. If performance does recover, consider locating Search 
   on a separate server if you have not already done so.

<a name="support"></a>

[!INCLUDE [shared-got-feedback](_shared/shared-got-feedback.md)]
