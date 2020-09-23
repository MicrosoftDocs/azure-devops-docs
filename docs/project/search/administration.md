---
title: Administer code, wiki, and work item search
description: Setup notes and administration links for Microsoft Code, Wiki & Work Item Search in Azure DevOps Services, Azure DevOps Server, and Team Foundation Server (TFS)
ms.assetid: A78DC9CF-4ADD-46D7-9E25-D1A0764FCB06
ms.technology: devops-collab
ms.topic: conceptual
ms.author: chcomley
author: chcomley
monikerRange: '>= tfs-2017 < azure-devops'
ms.date: 07/23/2020
---

# Install and manage Search

**Azure DevOps Server 2020 | Azure DevOps Server 2019 | TFS-2018 - TFS 2017**

Learn how to install and uninstall the Search extension for Code, Wiki, and Work item in Azure DevOps Server.


* **Configure Search (Code, Work Item, and Wiki) in Azure DevOps Server or Team Foundation Server (TFS)**
  - [Configure Search](#config-tfs)
  - [Secure Search](#secure-search)
  - [Upgrade Search](#upgrading-search)
  - [Manage Search](#manage-tfs)
  - [Uninstall Search](#uninstall-tfs)
  - [Limitations of Search](#limit-tfs)
  - [Troubleshoot Search](faq-search.md)

Also see [Install and configure Azure DevOps Server or TFS](/azure/devops/server/install/get-started) 
and [Requirements and compatibility](/azure/devops/server/requirements).

> [!NOTE]
> Users with at least a **Basic** access can use Code Search. 
**Stakeholders** don't have access to code, and therefore no access to Code Search. 
All users have access to Work Item and Wiki Search.
 

<a name="config-ts-azuredevops"></a>

## Prerequisites

To install the Search extension, you must be a Project Collection Administrator (PCA) for the organization.
Non-administrative users can also request the extension is added.

<a name="config-tfs"></a>

## Configure Search

Configure the Search service using the dedicated pages in the Server Configuration Wizard
as you install Azure DevOps Server. You can also [configure and unconfigure Search](#uninstall-tfs)
afterwards by running the Server Configuration Wizard again or by launching the Search Configuration Wizard.

### Availability

* Code Search is available in TFS 2017 and later versions.

* Work Item Search is available in TFS 2017 Update 2 and later versions.

* Wiki Search is available in TFS 2018 Update 2 and and later versions.

* Work Item and Wiki search are built-in extensions that are installed by default during Search configuration.

<a name="hardware-recommendations"></a>

### Hardware recommendations

Search can be used on any size physical server or virtual machine that runs 
TFS 2017 or later, or Azure DevOps Server. It can be configured on the same server,
or on a separate server dedicated to Search.
When configuring Search on the same server, you must consider the existing CPU utilization
factor because of Azure DevOps Server or TFS itself.

**For production environments, we recommend you configure Search on a separate server.**

For acceptable performance in multi-user scenarios, consider the 
following recommendations:

* Fewer than 250 users with Search colocated on the server (typically used for demonstration and trial purposes):
  - Quad core processor, 16 GB (minimum) RAM
  - CPU Utilization factor less than 50%
  - Fast hard drive backed by Solid State Drive (SSD) storage<p />

* Fewer than 500 users with Search located on a [separate server](#separate-server): 
  - Dual core processor, 8 GB (minimum) RAM
  - Fast hard drive backed by Solid State Drive (SSD) storage<p />

* Fewer than 1,000 users with Search located on a [separate server](#separate-server):
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

The amount of disk space taken up by Search depends mainly on the type and size of files indexed. 
For Code search, since many times repositories can be large and can have different
code files in version control, disk space requirement could be significant. As a general guideline,
allocate up to 150% of the size of all the repositories to be indexed. From TFS 2018 Update 3 onwards
and Azure DevOps Server, users can exclude folders from their repositories during the time of indexing to optimize the disk space that's consumed by search.

### Software dependencies

Search has the following dependencies, which are installed automatically
as part of the configuration:

* [Elasticsearch](https://www.elastic.co/products/elasticsearch) by Elasticsearch BV (see Notes 1 and 2)
* [Elasticsearch NEST client](https://www.elastic.co/guide/en/elasticsearch/client/net-api/current/index.html) 
* [Azul Zulu OpenJDK](https://www.azul.com/products/zulu-community/) (see [Java installation notes](#java-notes))
* [Markdowndeep](https://www.toptensoftware.com/markdowndeep/) by Topten Software
* [Roslyn](https://github.com/dotnet/roslyn) compiler platform
* [ANTLR](https://www.antlr.org/) language recognition parser

**NOTES**:
 
1. Search uses a modified version of Elasticsearch. It works only with this modified version.  
2. A newer version of Elasticsearch ships with TFS 2018 Update 2 and above, and Azure DevOps Server.
   Upgrading from an older version of Search results in all content being reindexed after the installation.
   Depending on the volume of content (code files, work items, and wiki pages), reindexing can take some time to complete.
3. The system or server administrator must ensure that Server JRE is
   maintained and updated in line with the software provider's recommendations. 
   Also see the [Java installation notes](#java-notes) that follow.
4. The Azul Zulu OpenJDK doesn't automatically install updates.
   Ensure you regularly [check for updates](https://www.azul.com/downloads/zulu-community/?&version=java-8-lts&os=windows&os-details=Windows&architecture=x86-64-bit&package=jdk).

<a name="java-notes"></a>

#### Java installation notes

If the Search configuration wizard doesn't detect a working installation of a 
Java Runtime Environment (JRE), it provides an option to download and install the latest supported version. 
Internet connectivity is required to download.
If the target server doesn't have Internet connectivity, you must download 
and install a JRE manually before attempting to install Search.

> Versions of Search prior to Azure DevOps Server used the [Oracle Server Java Runtime Environment](https://www.oracle.com/technetwork/java/javase/downloads/server-jre8-downloads-2133154.html).
> In Azure DevOps Server, the default JRE is [Azul Zulu OpenJDK](https://www.azul.com/products/zulu-community/).

During installation, the wizard sets the **JAVA\_HOME** environment variable 
to point to the JRE installation folder. The configuration wizard may fail 
to detect an existing JRE installation if it isn't correctly configured, 
or if the **JAVA\_HOME** setting points to an earlier version than required by Search. 

> [!NOTE]   
> We don't advise installing Elasticsearch on a machine where resources are shared, especially on a large enterprise environment with multiple application tiers. Instead, we recommend setting up Elasticsearch in a separate dedicated machine. In that way, the JAVA environment isn't shared across machines for other purposes.


If there is a version of a JRE **earlier** than the minimum required by 
Search, and the **JAVA\_HOME** variable is set to that version, we recommend 
you install Search on a separate server because changing the value 
of the **JAVA\_HOME** variable may cause other installed software to fail.

If there is a version of Server JRE **equal to or later** than the minimum required 
by Search, and it is not recognized by the configuration wizard, you
must set the value of the **JAVA\_HOME** variable to that version as described in
the JRE installation guide and then rerun the configuration wizard.

* [Zulu OpenJDK installation guide](https://docs.azul.com/zulu/zuludocs/index.htm)
* [Oracle JRE troubleshooting guide](https://docs.oracle.com/javase/7/docs/webnotes/tsg/) 

If you can't install the version of Java required by Search due to other dependencies, you can:

* Install Azure DevOps Server or TFS together with the Search extension on a server that doesn't have Java installed (not recommended for more than 250 users or CPU utilization greater than 50% or multiple ATs).

* Install Search and the JRE on a [separate server](#separate-server) from Azure DevOps Server or TFS.

> [!NOTE]
> If you're using Oracle Server JRE 8, which was the default for Search in TFS (Azure DevOps Server doesn't use Oracle Server JRE 8), be aware that:
>
> * Search doesn't use or support any of the commercial features of Server JRE 8.
>   Therefore, during Search configuration,the commercial features of the Server JRE are neither activated nor unlocked.
>
> * If you choose to continue with Oracle JRE, contact Oracle for a [Java SE Subscription](https://www.oracle.com/java/java-se-subscription.html), so that you can continue to receive JRE updates.

#### Migrateto Zulu OpenJDK from Oracle Server JRE

Search in Azure DevOps Server and TFS supports both Azul Zulu OpenJDK and Oracle JRE, allowing you to choose between them based on your needs.
When selecting a JRE during installation, Azure DevOps Server defaults to Azul Zulu OpenJDK 8.

To change to the Azul Zulu OpenJDK, follow these steps:

![Java Migration flow](media/administration/java-migration-flow.png)

More details are available [here](https://github.com/microsoft/Code-Search/tree/master/Java%20Migration).

> [!NOTE]
> * If you choose to use Azul Zulu OpenJDK, ensure you [download the latest updates](https://www.azul.com/downloads/zulu-community/?&version=java-8-lts&os=windows&os-details=Windows&architecture=x86-64-bit&package=jdk). It doesn't automatically install updates.

### Installation considerations

Consider the following points when configuring Search:

* Both Work Item and Wiki search are enabled by default when Search is configured. These extensions can 
  be later removed if necessary from the **Manage Extensions** page of Azure DevOps Server or TFS.

* The Code Search extension must be installed for each Azure DevOps Server or TFS collection where you want to use it. 
  When initially configuring Search, you can set a checkbox to **Automatically install Code Search extension 
  for existing and new Project Collections** to automate this process.

* If you don't set the checkbox to install the Code Search extension for all your project collections when 
  configuring Search, your project collection administrator can install it from the Local Gallery. Ensure you
  navigate to the Local Gallery (`http://{Server}/_gallery`) from your Azure DevOps Server or TFS portal page. For more information, see [Install an extension](../../marketplace/get-tfs-extensions.md) 
in the Local gallery documentation.

* The search index folder should be on a separate fast hard drive, backed by fast storage such
  as a solid-state drive (SSD) or Storage Area Network (SAN) to maximize search performance.
  As a general guideline, allocate up to 150% of the size of all the repositories to be indexed. 
  That's the worst-case scenario; the actual space that's consumed is dictated by the amount and type of code files, and the number of work items and wiki pages in that collection.

* Unless specified, the indexing service and Elasticsearch engine use the network service account during 
  installation to create and access the index files. If you choose a different account, it must have **Log on as a service**
  permission. 

* Restrict the permissions for the index disk and folder to protect the index
  from accidental or malicious modification or deletion, and configure appropriate 
  [security settings](#secure-search) for the service.

* When configuring Search for a server with **multiple application tiers (ATs)**, make sure it's installed on a [separate remote server](#separate-server). After Search is installed 
  on the remote server, use the Configuration Wizard on any one of the AT servers to link the remote Search instance with your Azure DevOps Server or TFS instance.
  When unconfiguring Search in the future you must use the Configuration Wizard on the same AT server where configuration was originally carried out.

* If you're performing a **pre-production upgrade** on a server where Search is already configured, you must fully
  reconfigure Search again to avoid corrupting your production instance. For this reason, there's no option to configure 
  Search as part of a pre-production upgrade. Instead, configure it after the pre-production upgrade is complete. 
  As this is a pre-production upgrade, you can uncheck **Automatically install and configure Code Search for all existing and new collections**
  during configuration, and instead install the Search extension for just one or two of your collections after configuration is complete.

* If you're performing a **production upgrade** on a server where Search is already configured, and want to retain the Search feature, 
  you must set the checkbox to **Install and Configure Search**. At this point, the wizard detects your existing Search instance and 
  automatically selects the **Use existing Search instance** option, and pre-populates your current Search service URL.
  Use the **Install a new Search instance** option only if you want to set up a new instance of Search on the same server.
  Setting up a new instance causes all your code, work items, and wiki to be indexed again, which - depending on the size of the collections - can take some time.
  During indexing, users may see partial search results. 

* If you're **upgrading your server to new hardware**,
  depending on how Search was previously configured, you have the following two options:

  - If Search was configured on a separate server from Azure DevOps Server or TFS, you must select **Install and Configure Search** in the Server Configuration Wizard,
    and then select **Use an existing Search instance** 
    and provide the URL of your existing Search instance to complete the Search configuration. 
    
  - If Search was configured alongside your Azure DevOps Server or TFS instance on the old server, you must select **Install and Configure Search**
    in the Server Configuration Wizard, and then select **Install a new Search instance** 
    again on the new server if you want to continue to cohost Search and Azure DevOps Server or TFS.
    All Search indexes for all collections are re-created which,
    depending on the size of each collection, might take some time.<p />
    
* If you're **detaching a collection** from one Azure DevOps Server or TFS instance to attach it to another 
  instance, follow the below sequence:

  - Detach the collection from source Azure DevOps Server or TFS instance.

  - Configure Search on the target Azure DevOps Server or TFS instance (if not yet done already).

  - Attach the collection to the target Azure DevOps Server or TFS instance

  - Uninstall all the Search extensions, like Code, Work item, or Wiki, for that collection from the **Local Gallery** 
    in your Azure DevOps Server or TFS instance.

  - Install the Search extension, like Code, Work item, or Wiki, for that collection from the **Local Gallery** by
    browsing to it from your target Azure DevOps Server or TFS instance.

<a name="separate-server"></a>

### Install or update Search on a separate server

To install or update  Search on a separate (remote) server, typically when you have more than 250 users,
follow these steps:

1. As you install Azure DevOps Server or TFS on the primary server, set the **Install and configure Search** checkbox 
   in the **Search** page of the Server Configuration Wizard.

2. Select the option to **Use an existing Search service**. 

3. Use the **Search service package** link that's provided in the wizard to access a set of Search installer files 
   on the local machine. Then, copy these files to the remote server.

   ![Separate server installation](media/administration/separate-server.png)

4. Follow the instructions in the **Readme.txt** file that's located in the set of 
   installer files to install or update the Search service on the remote server.

5. After the installation of the Search service on the remote server is complete,
   copy the resulting Search server URL into the **Search URL** field of the 
   configuration wizard that runs on the Azure DevOps Server or TFS instance.

6. When both installations are complete, configure appropriate 
   [security settings](#secure-search) for both servers.

<a name="secure-search"></a>

## Secure search

The Search service uses a modified version of 
[Elasticsearch](https://www.elastic.co/products/elasticsearch) 
(the terms "Search" and "Elasticsearch" are used 
interchangeably for the rest of this section). 
TFS Admins need to provide credentials as part of configuring Search feature 
(through Server or Search configuration wizard) whether Search service 
is on the same machine as Azure DevOps Server or TFS,
or on a separate machine. These are new sets of credentials (not related to any pre-existing account or server credentials) 
and are used to set up and connect to Search service.
These new sets of credentials enable basic authentication in search service. 

![Search credentials](media/administration/tfsU3_search_cred1.png)

For an upgrade from TFS 2018 Update 1.1 to TFS 2018 Update 3, or search reconfiguration, 
only the user information is autopopulated and administrators must provide password credentials. 
Administrators have an option to provide different username and password if they wish. If the Search service is 
on the same machine as Azure DevOps Server or TFS, administrators can provide a new set of credentials in the Configuration Wizard to set up the Search service, if desired. 
However, if the Search service is on a remote machine, administrators must first provide the new credentials
to the Search service setup script.

> [!NOTE]
>  
> * Username and password values should both be between 8 and 64 characters in length. While the password can be assigned any value, the username can contain only alphanumeric and underscore characters. 
>
> * Search credentials only authenticate the users and make sure that unauthenticated users can't access the Elasticsearch endpoint. 
>   However, Elasticsearch doesn't support HTTPS and so these credentials are sent over the network as Base64 encoded strings.
>   If there is a possibility of intermediate access to request, configure appropriate security settings based on your corporate security and compliance requirements.
>
> * Irrespective of the Azure DevOps Server or TFS version you use, aim to limit access to both searching and indexing to specific users or user groups using encryption through IPSec, as described below. 

Consider the following techniques for using IPSec to secure Elasticsearch on a Windows server:

* **Configure security with authentication only:**
  - Ensures only authorized users can access the Elasticsearch port. It requires only service-side rules (firewall rules on only the server running Elasticsearch).
  - Prerequisite: Azure DevOps Server or TFS must be configured with a domain account.
  - Follow the steps in [Creating Firewall Rules that Allow IPsec-protected Network Traffic](https://technet.microsoft.com/library/cc754873%28v%3Dws.10%29.aspx).<p />

* **Configure security with authentication, integrity protection, and encryption:**
  - Ensures encryption and integrity protection are applied along with authentication. It requires 
    both client-side and service-side rules (firewall rules on the server running Elasticsearch and all Azure DevOps Server or TFS App Tier servers).
  - Prerequisite: Azure DevOps Server or TFS must be configured with a domain account.
  - Follow the steps in [Isolating a Server by Requiring Encryption and Group Membership](https://technet.microsoft.com/library/cc772460%28v%3Dws.10%29.aspx).

<a name="upgrading-search"></a>

## Upgrade search

TFS 2017 Update 1 includes updated Search components. If the Search
service was configured in TFS 2017 RTM during an upgrade, the
Search service components are updated automatically if the Search
service was configured on the TFS that's getting upgraded.
If Search was configured on a remote server, follow
[these instructions](#separate-server) to update it.

TFS 2017 Update 2 includes Work items Search. It uses the same Search service as Code Search.
If the Search service was configured in TFS 2017 RTM/Update1 during an upgrade, the
Search service components are updated automatically if the Search
service was configured on the TFS that's being upgraded.
If Search was configured on a remote server, follow
[these instructions](#separate-server) to update it.

TFS 2018 Update 2 includes updated Search components and Wiki Search. If the Search service was configured in TFS 2017 RTM, Update1, Update2, or TFS 2018 RTM during an upgrade, the
Search service components are updated automatically if the Search
service was configured on the TFS that's being upgraded.
If Search was configured on a remote server, follow
[these instructions](#separate-server) to update it. In both cases, all existing content (code files and work items) is automatically reindexed to support the updated components after configuration. Depending on the volume of content, this upgrade might take some time to complete.

TFS 2018 Update 1.1 and TFS 2018 Update 3 include basic authentication for the communication 
between the TFS and Search service to make it more secure. Any installation or upgrade 
to TFS 2018 Update 1.1 or TFS 2018 Update 3, needs to provide credentials as part of configuring Search feature, through Server or the Search configuration wizard.

Update from TFS 2018 Update 2 (or higher) to version Azure DevOps Server 2019 Update 1, when search is configured on a separate server, requires a reinstallation of search. While following [the instructions for an upgrade](#separate-server), in step 4 instead of updating `Configure-TFSSearch.ps1 – Operation update`, run the following command to re-install search:

```
Configure-TFSSearch.ps1 -Operation remove
Configure-TFSSearch.ps1 -Operation install -TFSSearchInstallPath <install location> -TFSSearchIndexPath $env:SEARCH_ES_INDEX_PATH
```


<a name="manage-tfs"></a>

## Manage search

Search is managed by running PowerShell and SQL scripts. All of
these scripts are available to download from 
**[this GitHub repository](https://github.com/Microsoft/Code-Search)**.
You can download all of the scripts into a local folder on the server running the database for Azure DevOps Server
using the **Download ZIP** option. The PowerShell scripts require the SQL script files, so ensure 
the **SqlScripts** folder and its contents is present, along with the PowerShell scripts.

![Download script files for administration](media/administration/script-filesv2.png)

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
   You're prompted to enter:

   - The SQL server instance name where the TFS configuration database is.
   - The name of the TFS collection database.
   - The name of the TFS configuration database.
   - The name of the collection.
   - The number of previous days to check indexing status.<p />

2. Check the following outputs:
 
   - **Collection indexing was triggered successfully**: Indicates that 
     indexing is in progress. If it's displayed, check the following outputs.
     If it isn't displayed, go to step 3 below. 

   - **Repositories Indexing Completed**: The repositories whose indexing 
      has been completed and are now searchable.  

   - **Repositories in File Discovery Phase**: The repositories where files
      are yet to be discovered. The files are indexed after this stage. 
      Repositories in this state aren't yet searchable. The number of 
      files that are already discovered for indexing in each repository is shown. This 
      number increases as more files are discovered. 

   - **Repositories Indexing In Progress**: These repositories are partially
     indexed and should be searchable now, even if the results are only partial.<p />
 
3. It takes some time for indexing to complete. Execute the **CheckIndexingStatus.ps1** script
   at intervals to check indexing progress.

4. If indexing isn't occurring, or it's in progress but the number of 
   files pending or the number of files that are discovered hasn't changed for some time,
   or you get no results for a search, run
   the **TriggerCollectionIndexing.ps1** script in a PowerShell window with administrative permission. 

5. If the problem persists, contact customer support at the address shown at the end of this topic. 

<a name="index-update1"></a>

### Check indexing status for TFS 2017 Update 1 and later, and Azure DevOps Server

To check the indexing status after Search is configured, or after the extension is installed for a collection:

1. Execute the **ExtensionInstallIndexingStatus.ps1** script with administrative privileges. 
   You're prompted to enter:

   - The SQL server instance name where the Azure DevOps Server or TFS configuration database is.
   - The name of the Azure DevOps Server or TFS collection database.
   - The name of the Azure DevOps Server or TFS configuration database.
   - The name of the collection.
   - The number of previous days to check indexing status.<p />
 
2. Check the following outputs:

   - **Collection indexing was triggered successfully**: Indicates that 
     indexing is in progress. If it's displayed, check the following outputs.
     If it isn't displayed, go to step 3 below. 

   - **Repositories completed indexing**: The number of repositories for which indexing has completed and are searchable.
    
   - **Status of repositories currently indexing**: A list of the names of all the repositories that are still being indexed and are partially searchable.<p />
 
3. It takes some time for indexing to complete. Execute the **RecentIndexingActivity.ps1** script at intervals to check indexing progress. This script takes the same parameters as the **ExtensionInstallIndexingStatus.ps1** script.

   - **Repositories completed fresh indexing**: The number of repositories for which indexing has completed within the specified time interval.

   - **Count of repositories with fresh indexing in progress**: The number of repositories for which indexing hasn't yet completed. These repositories are still being indexed and are partially searchable.

   - **Repositories completed continuous indexing**: The number of commits processed in the specified time interval. The number may not exactly match the total number of pushes to the repository because merges are committed as they're indexed.

   - **Count of repositories with continuous indexing in progress**: The number of repositories for which the commits are still being processed. These repositories show incomplete results until indexing is completed.<p />
   
   - **Count of indexing job failures**: The number of indexing jobs that failed. Repositories associated with these indexing jobs could potentially show incomplete results until later indexing jobs for the same repositories have patched the failed indexing.<p />

<a name="pause-index"></a>

### Pause indexing

To pause all indexing, execute the script **PauseSearchIndexing.ps1** 
with administrative privileges. Useful if you see spikes in CPU utilization after configuring Search.

You're prompted to enter:

* The SQL server instance name where the Azure DevOps Server or TFS configuration database is.
* The name of the Azure DevOps Server or TFS configuration database.

<a name="resume-index"></a>

### Resume indexing

If indexing was paused, execute the script **ResumeIndexing.ps1**
with administrative privileges, to start indexing again. 
You're prompted to enter:

* The SQL server instance name where the Azure DevOps Server or TFS configuration database is.
* The name of the Azure DevOps Server or TFS configuration database.

<a name="re-index"></a>

### Reindex a repository or collection

To reindex a Git or TFVC repository, execute the appropriate
version of the script **Re-IndexingRepository.ps1** for your Azure DevOps Server or TFS version
with administrative privileges. You're prompted to enter:

* The SQL server instance name where the Azure DevOps Server or TFS configuration database is.
* The name of the Azure DevOps Server or TFS collection database.
* The name of the Azure DevOps Server or TFS configuration database.
* The type of reindexing to execute. Can be one of the following values:
  - **Git\_Repository**
  - **TFVC\_Repository**
* The name of the collection.
* The name of the repository to reindex.

To reindex a **collection**, execute the script **TriggerCollectionIndexing.ps1**
with administrative privileges. You're prompted to enter:

* The SQL server instance name where the Azure DevOps Server or TFS configuration database is.
* The name of the Azure DevOps Server or TFS collection database.
* The name of the Azure DevOps Server or TFS configuration database.
* The name of the collection.
* The entities to reindex. Can be one of the following values:
  - **All**
  - **Code**
  - **WorkItem**
  - **Wiki**

Reindexing a collection can take from a few minutes 
to a few hours, depending on the size of the collection. 

Also see **[Troubleshoot Search](faq-search.md)**.

<a name="uninstall-tfs"></a>

## Uninstall Search

For a pre-production upgrade, production upgrade, new hardware migration, cloning,
or other maintenance operation, the Server Configuration Wizard unconfigures Search. But, it's easy to reconfigure after the server maintenance operation is complete.

However, there might be cases where you no longer want to use Search or you want to do a new and clean
install. This operation requires multiple steps, depending on whether Search is configured
on the [same server](#unconfig-same-server) as Azure DevOps Server or TFS, or on a [separate server](#unconfig-separate-server).

<a name="unconfig-same-server"></a>

### Unconfigure Search on the machine configured as your Azure DevOps Server

1. Uninstall the Search extension for each collection where it's installed.
   Navigate to the **Manage Extensions** page of each collection in
   your Azure DevOps Server or TFS instance:

   ::: moniker range=">= azure-devops-2019"
   ![Screenshot of checking that the extension is installed](media/shared/goto-marketplace-new.png)
   ::: moniker-end

   ::: moniker range="<= tfs-2018"
   ![Screenshot of Checking the extension is installed](media/shared/goto-marketplace.png)
   ::: moniker-end

2. Remove the Search feature:

   - Open the Azure DevOps Server or TFS Administration Console.
   - In the left pane, select the name of the server.
   - In the right pane, choose **Remove Feature**.
   - In the Remove Feature dialog, select **Search service**, and then choose **Remove**.<p />
  
3. Remove the Elasticsearch service:

   - Open **Command Prompt** as an administrator
   - Change directory:
     * For TFS 2017 RTM, `cd "C:\Program Files\Microsoft Team Foundation Server 15.0\Search\ES\elasticsearch-1.7.1-SNAPSHOT\bin"`
     * For TFS 2017 Update 1, `cd "C:\Program Files\Microsoft Team Foundation Server 15.0\Search\ES\elasticsearch-2.4.1\bin"`
     * For TFS 2018 Update 2 and above, and Azure DevOps Server, `cd "C:\Program Files\Microsoft Team Foundation Server 15.0\Search\ES\elasticsearch-5.4.1\bin"`<p />

   - Remove the service:
     * For TFS 2017, `"service.bat remove"`
     * For TFS 2018 and Azure DevOps Server, `"elasticsearch-service.bat remove"`<p />
    
4. Remove Search data:

   - Delete the contents of the location described by the environment variable `SEARCH_ES_INDEX_PATH`<p />
    
5. Remove environment variables:

   - Delete the environment variable `"SEARCH_ES_INDEX_PATH"`
   - Delete the environment variable `"ES_HEAP_SIZE"` (this environment variable is obsolete for TFS 2018 Update 2 and later, and Azure DevOps Server).<p />
    
<a name="unconfig-separate-server"></a>

### Unconfigure Search when it's configured on a separate server

1. Uninstall the Search extension, like for Code, Work item, or Wiki, for each collection where it's installed. Navigate to the **Manage Extensions** page of each collection in your Azure DevOps Server or TFS instance.

   ::: moniker range=">= azure-devops-2019"
   ![Screenshot Checking that the extension is installed](media/shared/goto-marketplace-new.png)
   ::: moniker-end

   ::: moniker range="< azure-devops-2019"
   ![Screenshot of Checking that the extension's installed](media/shared/goto-marketplace.png)
   ::: moniker-end

::: moniker range="<= azure-devops-2019"
1. Remove the Search feature:

   - Open the In the Remove Feature dialog,  Administration Console.
   - In the left pane, select the name of the Azure DevOps Server.
   - In the right pane, choose **Remove Feature**.
   - In the Remove Feature dialog, select **Search service**, and then choose **Remove**.<p />

2. Remove the Elasticsearch service and data

   - Open **PowerShell** as an administrator.
   - Open the **Configure Search.ps1** folder, along with the rest of the files that are required for a remote install of Search.
   - Run the script again with the remove option: 
     * For TFS 2017 RTM, `"Configure Search.ps1 -RemoveTFSSearch"`
     * For TFS 2017 Update1 and above, and Azure DevOps Server, `"ConfigureTFSSearch.ps1 -remove"`<p />
::: moniker-end

<a name="limit-tfs"></a>

## Search limitaitons

Search for Azure DevOps Server and TFS has the following limitation: 

* If you do a disaster recovery (DR) operation and move your server back 
  to an earlier snapshot of your SQL database, you need to [reindex all your collections](#re-index).  




