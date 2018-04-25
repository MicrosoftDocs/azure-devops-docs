---
title: Code and Work Item Search set up
description: Setup notes and administration links for Microsoft Code Search & Work Item Search in Visual Studio Team Services (VSTS) and Team Foundation Server (TFS)
ms.assetid: A78DC9CF-4ADD-46D7-9E25-D1A0764FCB06
ms.prod: devops
ms.technology: devops-collab
ms.topic: conceptual
ms.manager: douge
ms.author: ahomer
author: alexhomer1
ms.date: 04/09/2018
monikerRange: '>= tfs-2017'
---

# Set up and administer Microsoft Code Search and Work Item Search

[!INCLUDE [version-header-shared-vsts-tfs](../_shared/version-header-shared-vsts-tfs.md)]

In this topic:

::: moniker range="vsts"

* **Configure Code Search in VSTS**
  - [Install the Code Search extension](#config-ts)
  - [Uninstall the Code Search extension](#uninstall-ts)<p />

::: moniker-end

::: moniker range=">= tfs-2017 < vsts"

* **Configure Search in Team Foundation Server**
  - [Configure Search](#config-tfs)
  - [Secure Search](#secure-search)
  - [Upgrade Search](#upgrading-search)
  - [Manage Search](#manage-tfs)
  - [Uninstall Search](#uninstall-tfs)
  - [Limitations of Search](#limit-tfs)
  - [Troubleshoot Search](#trouble-tfs)

Also see [Install and configure TFS](../../tfs-server/install/get-started.md)
and [TFS requirements and compatibility](../../accounts/requirements.md).

::: moniker-end

>Users with at least a **Basic** access can use Code Search. 
Stakeholders do not have access to code, and therefore no access to Code Search. 
All users have access to Work Item Search.

::: moniker range="vsts"

<a name="config-ts"></a>
## Install Code Search in VSTS

Go to [Visual Studio Marketplace](http://go.microsoft.com/fwlink/?LinkId=703823&clcid=0x409)
to install the extension in your VSTS account as an administrator.
Non-administrative users can also go here to request the extension be added to VSTS. 

For more details, see [Install an extension](../../marketplace/install-vsts-extension.md#install-extension) in the Marketplace documentation.

<a name="uninstall-ts"></a>
## Uninstall Code Search in VSTS

See [Uninstall or disable an extension](../../marketplace/uninstall-disable-vsts-extensions.md) in the Marketplace documentation. 

::: moniker-end

::: moniker range=">= tfs-2017 < vsts"

<a name="config-tfs"></a>
## Configure Code Search/Work Item Search in Team Foundation Server

Code Search is available in TFS 2017 and later.
Work Item Search is available in TFS 2017 Update 2 and later.
Configure the Search service using the dedicated pages in the TFS Configuration Wizard
as you install TFS. You can also [configure and unconfigure Search](#uninstall-tfs)
afterwards by running the TFS Configuration Wizard again or lauching the Search Configuration Wizard.

<a name="hardware-recommendations"></a>
### Hardware recommendations

Search can be used on any size physical server or virtual machine that runs 
TFS 2017 or above. It can be configured on the same server as TFS,
or on a separate server dedicated to Search.
When configuring Search on the same server as TFS,
you must take into account the existing CPU utlization
factor due to TFS itself. 
In most cases you should
consider configuring Search on a separate server.

For acceptable performance in multi-user scenarios, consider the 
following recommendations:

* Less than 250 users with Search co-located on the TFS server:
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

* TFS server with Multiple ATs: 
  - Install Search on a [separate server](#separate-server)<p />

* TFS server CPU utilization greater than 50% before installing Code Search:
  - Install Search on a [separate server](#separate-server)<p />

**Disk space requirement**:

The amount of disk space taken up by Search depends mainly on the type of
code files in version control that will be indexed. As a general guideline,
allocate upto 35% of the size of all the collections that will be indexed.

### Software Dependencies

Search has the following dependencies, which are installed automatically
as part of the configuration:

* [Elasticsearch](https://www.elastic.co/products/elasticsearch) by Elasticsearch BV (see Note 1)
* [Elasticsearch NEST client](https://www.elastic.co/guide/en/elasticsearch/client/net-api/current/index.html) 
* [Oracle Server JRE 8 Update 20 or higher](http://www.oracle.com/technetwork/java/javase/downloads/server-jre8-downloads-2133154.html) Java runtime environment (see Note 2)
* [Markdowndeep](http://www.toptensoftware.com/markdowndeep/) by Topten Software
* [Roslyn](https://github.com/dotnet/roslyn) compiler platform
* [ANTLR](http://www.antlr.org/) language recognition parser

**NOTES**:
 
* A modified version of Elasticsearch ships with TFS. 
  Search will work only with this version of Elasticsearch.

* The system or TFS administrator must ensure that Server JRE is
  maintained and updated in line with the software provider's recommendations. 
  Also see the [installation notes](#java-notes) that follow.

<a name="java-notes"></a>
#### Java installation notes

If the Search configuration wizard does not detect a working installation of 
Java Server JRE, it provides an option to download and install the latest version. 
Internet connectivity is required to download this from the Java website.
If the target server does not have Internet connectivity, you must download 
and install Server JRE manually before attempting to install Search.

During installation, the wizard sets the **JAVA\_HOME** environment variable 
to point to the Server JRE installation folder. The configuration wizard may fail 
to detect an existing Server JRE installation if it is not correctly configured, 
or if the **JAVA\_HOME** setting points to an earlier version than that required 
by Search. 

If there is a version of Server JRE **earlier** than the minimum required by  
Search, and the **JAVA\_HOME** variable is set to that version, we recommend 
you install Search on a separate server because changing the value 
of the **JAVA\_HOME** variable may cause other installed software to fail.

If there is a version of Server JRE **equal to or later** than the minimum required 
by Search, and it is not recognized by the configuration wizard, you
must set the value of the **JAVA\_HOME** variable to that version as described in
the **[Java troubleshooting guide](http://docs.oracle.com/javase/7/docs/webnotes/tsg/)**,
and then rerun the configuration wizard. 

If you cannot install the version of Java required by Search due to other dependencies, you can:

* Install TFS and Search together on a different server that does
  not have Java installed (not recommended for more than 250 users or CPU utilization greater than 50% or multiple ATs).

* Install Search and Java on a [separate server](#separate-server) from TFS.

>Search does not use or support any of the commercial features
of Server JRE 8 as outlined [here](http://www.oracle.com/technetwork/java/javase/terms/products/index.html).
Therefore, during Search configuration on Team Foundation Server 2017,
the commercial features of the Server JRE are not activated or unlocked.
See the Oracle documentation for examples of unlocking the commercial features of
[Java 7](http://docs.oracle.com/javase/7/docs/technotes/tools/windows/java.html)
or [Java 8](https://docs.oracle.com/javase/8/docs/technotes/guides/troubleshoot/tooldescr004.html). 

### Installation considerations

Consider the following when configuring Search:

* The Code Search extension must be installed for each TFS collection where you want to use it. 
  When initially configuring Search, you can set a checkbox to **Automatically install Code Search extension 
  for existing and new Tem Project Collections** to automate this process.

* If you do not set the checkbox to install the Code Search extension for all your Team Project Collection, while 
  configuring Search, your Project Collection administrator can install it from Visual Studio Marketplace. Make 
  sure you navigate to the Marketplace from your TFS portal page. 

* The search index folder should be located on a separate fast hard drive backed by fast storage such
  as Solid State Drive (SSD) or Storage Area Network (SAN) to maximize search performance.
  As a general guide, the Search index for a collection can be a maximum of 35% the size of the collection itself. 
  That is the worst case scenario; the actual space consumed is dictated by the amount and type of code files & amount of work items in that collection.

* The indexing service and Elasticsearch engine use the account you specify during 
  installation to create and access the index files. This account must have **Log on as a service**
  permission. 

* Restrict the permissions for the index disk and folder to protect the index
  from accidental or malicious modification or deletion, and configure appropriate 
  [security settings](#secure-search) for the service.

* When configuring Search for a TFS server with **multiple application tiers (ATs)**, make sure Search is installed on a [separate server](#separate-server). After Search is installed 
  on the remote server, use the Configuration wizard on any one of the ATs to link the search instance with your TFS instance. When unconfiguring Search in future 
  you must use the Configuration wizard on the same AT where configuration was done.

* If you are performing a **pre-production upgrade** on a TFS server where Search is already configured, you must fully
  reconfigure Search again to avoid corrupting your production instance of Search. For this reason there is no option to configure 
  Search as part of a pre-production upgrade. Instead, configure it after the pre-production upgrade is complete. 
  As this is a pre-production upgrade, you can choose to uncheck **Automatically install and configure Code Search for all existing and new collections**
  during configuration, and instead install the Code Search extension for just one or two of your collections after configuration is complete.

* If you are performing a **production upgrade** on a TFS server where Search is already configured, and want to retain the Search feature, 
  you must set the checkbox to **Install and Configure Search**. At this point the wizard will detect your existing Search instance and 
  automatically select the **Use existing Search instance** option, and pre-populate your current Search service URL.
  Use the **Install a new Search instance** option only if you want to set up a new instance of Search on the same TFS server.
  Setting up a new instance causes all your code to be indexed again, which - depending on the size of the collections - can take some time.
  During indexing, users may see partial search results. 

* If you are **upgrading your TFS server to new hardware**,
  depending on how Search was previously configured, you have two options:

  - If Search was configured on a separate server, you must select **Install and Configure Search** in the TFS wizard,
    and subsequently select **Use an existing Search instance** 
    and provide the URL of your existing Search instance to complete the Search configuration. 
    
  - If Search was configured alongside your TFS instance on the old server, you must select **Install and Configure Search**
    in the TFS wizard, and subsequently select **Install a new Search instance** 
    again on the new TFS server if you want to continue to co-host Search and TFS.
    This will cause all Search indexes for all collections to be re-created which,
    depending on the size of each collection, might take some time.<p />
    
* If you are **detaching a collection** from one TFS instance in order to attach it to another TFS instance, ensure that:

  - Search has been configured on the target TFS instance.
  - Before you detach the collection, you have uninstalled the Code Search extension for that collection from the **Manage Extensions** page of your source TFS instance.
  - After you attach the collection to the target TFS instance, you install the Code Search extension for that collection from the Marketplace by browsing to it from that TFS instance.<p />

<a name="separate-server"></a>
### Installing or Updating Search on a separate server

To install or update  Search on a separate (remote) server, typically when you have more than 250 users,
follow these steps:

1. As you install TFS on the primary server, set the **Install and configure Search** checkbox 
   in the **Search** page of the TFS Configuration Wizard.

1. Select the option to **Use an existing Search Service**. 

1. Use the **Search Service package** link provided in the wizard to access a set of Search installer files 
   on the local machine, and then copy these files to the remote server.

   ![Separate server installation](_img/administration/separate-server.png)

1. Follow the instructions in the **Readme.md** file located in the set of 
   installer files to install or update the Search service on the remote server.

1. After the installation of the Search service on the remote server is complete,
   copy the resulting Search server URL into the **Search URL** field of the 
   configuration wizard running on the TFS server.

1. When both installations are complete, configure appropriate 
   [security settings](#secure-search) for both servers.

<a name="secure-search"></a>
## Secure Search 

The Search service uses a modified version of 
[Elasticsearch](https://www.elastic.co/products/elasticsearch) 
(the terms "Search" and "Elasticsearch" are used 
interchangeably for the remainder of this section). 
Elasticsearch does not perform authentication or authorization, and it does not support HTTPS,
so it is vital you configure appropriate security settings
based on your corporate security and compliance requirements.

Typically you should aim to limit access to both searching and indexing 
to specific users or user groups - we recommend using encryption through IPSec.

When the Elasticsearch service is installed locally on the TFS server, 
it is protected by the security settings you configure for
that server. In such a configuration, Elasticsearch is bound to 
the loopback address, which prevents access from outside the local network.
However, if you set up Search on a remote server 
you must ensure that only the TFS Application Tiers can access Elasticsearch on the remote server
by creating an appropriate firewall rule to allow incoming 
requests to the Elasticsearch port on the remote server.

By default, this open port allows anonymous access to
the server. To prevent this, consider the following 
techniques for using IPSec to secure Elasticsearch 
on a Windows server.

#### Configure security with authentication only

This ensures only authorized users can access 
the Elasticsearch port. It requires only service-side
rules (firewall rules on only on the server running 
Elasticsearch).

**Prerequisite**: TFS must be configured with a domain account.

Follow the steps in [Creating Firewall Rules that Allow IPsec-protected Network Traffic](https://technet.microsoft.com/en-us/library/cc754873%28v%3Dws.10%29.aspx).

#### Configure security with authentication, integrity protection, and encryption

This ensures encryption and integrity protection 
are applied along with authentication. It requires 
both client-side and service-side rules (firewall rules
on the server running Elasticsearch and all of 
TFS App Tier servers).

**Prerequisite**: TFS must be configured with a domain account.

Follow the steps in [Isolating a Server by Requiring Encryption and Group Membership](https://technet.microsoft.com/en-us/library/cc772460%28v%3Dws.10%29.aspx).

<a name="upgrading-search"></a>
## Upgrade the Search service

TFS 2017 Update 1 includes updated Search components. If the Search
service was configured in TFS 2017 RTM then, during an upgrade, the
Search service components will be updated automatically if the Search
service was configured on the TFS server that is being upgraded.
If Search was configured on a remote server, follow
[these instructions](#separate-server) to update it.

TFS 2017 Update 2 includes Work items Search. It uses the same Search service as Code Search.
If the Search service was configured in TFS 2017 RTM/Update1 then, during an upgrade, the
Search service components will be updated automatically if the Search
service was configured on the TFS server that is being upgraded.
If Search was configured on a remote server, follow
[these instructions](#separate-server) to update it.

<a name="manage-tfs"></a>
## Manage Search in Team Foundation Server

Search is managed by running PowerShell and SQL scripts. All of
these scripts are available to download from 
**[this GitHub repository](https://github.com/Microsoft/Code-Search)**.
You may wish to download all of the scripts into a local folder on your TFS
server using the **Download ZIP** option. The PowerShell scripts require the SQL script files, so ensure 
the **SqlScripts** folder and its contents is present, along with the PowerShell scripts.

![Download script files for administration](_img/administration/script-filesv2.png)

> [!NOTE]
> When executing scripts, ensure you run the appropriate script for your TFS version:
> 
> * [TFS 2017 RTM](https://github.com/Microsoft/Code-Search/tree/master/TFS_2017RTW)
> * [TFS 2017 Update 1](https://github.com/Microsoft/Code-Search/tree/master/TFS_2017Update1)
> * [TFS 2017 Update 2](https://github.com/Microsoft/Code-Search/tree/master/TFS_2017Update2)
> * [TFS 2017 Update 3](https://github.com/Microsoft/Code-Search/tree/master/TFS_2017Update3)
> * [TFS 2018 RTM](https://github.com/Microsoft/Code-Search/tree/master/TFS_2018RTW)

<a name="check-index"></a>
### Check indexing status for TFS 2017 RTM

(For TFS 2017 Update 1, see the [next section](#index-update1))

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
### Check indexing status for TFS 2017 Update 1

(For TFS 2017 Update 2, see the [next section](#index-update2))

To check the indexing status after Search is configured, or after the extension is installed for a collection:

1. Execute the **ExtensionInstallIndexingStatus.ps1** script with administrative privileges. 
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

   - **Repositories completed indexing**: The number of repositories for which indexing has completed and are searchable.
    
   - **Status of repositories currently indexing**: A list of the names of all the repositories that are still being indexed and are partially searchable.<p />
 
1. It takes some time for indexing to complete. Execute the **RecentIndexingActivity.ps1** script at intervals to check indexing progress. This script takes the same parameters as the **ExtensionInstallIndexingStatus.ps1** script.

   - **Repositories completed fresh indexing**: The number of repositories for which indexing has completed within the specified time interval.

   - **Count of repositories with fresh indexing in progress**: The number of repositories for which indexing has not yet completed. These repositories are still being indexed and are partially searchable.

   - **Repositories completed continuous indexing**: The number of commits processed in the specified time interval. The number may not exactly match the total number of pushes to the repository because merges are committed as they are indexed.

   - **Count of repositories with continuous indexing in progress**: The number of repositories for which the commits are still being processed. These repositories will show incomplete results until indexing is completed.<p />
   
   - **Count of indexing job failures**: The number of indexing jobs that failed. Repositories associated with these indexing jobs could potentially show incomplete results until subsequent indexing jobs for the same repositories have patched the failed indexing.<p />

<a name="index-update2"></a>
### Check indexing status for TFS 2017 Update 2

To check the indexing status after Search is configured, or after the extension is installed for a collection:

1. Execute the **ExtensionInstallIndexingStatus.ps1** script with administrative privileges. 
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

   - **Repositories completed indexing**: The number of repositories for which indexing has completed and are searchable.
    
   - **Status of repositories currently indexing**: A list of the names of all the repositories that are still being indexed and are partially searchable.<p />
 
1. It takes some time for indexing to complete. Execute the **RecentIndexingActivity.ps1** script at intervals to check indexing progress. This script takes the same parameters as the **ExtensionInstallIndexingStatus.ps1** script along with an additional EntityType parameter.

   - **Repositories completed fresh indexing**: The number of repositories for which indexing has completed within the specified time interval.

   - **Count of repositories with fresh indexing in progress**: The number of repositories for which indexing has not yet completed. These repositories are still being indexed and are partially searchable.

   - **Repositories completed continuous indexing**: The number of commits processed in the specified time interval. The number may not exactly match the total number of pushes to the repository because merges are committed as they are indexed.

   - **Count of repositories with continuous indexing in progress**: The number of repositories for which the commits are still being processed. These repositories will show incomplete results until indexing is completed.<p />

   - **Count of indexing job failures**: The number of indexing jobs which failed. Repositories associated with these indexing jobs could potentially show incomplete results until subsequent indexing jobs for the same repositories have patched the failed indexing.<p />

<a name="pause-index"></a>
### Pause indexing

To pause all indexing, execute the script **PauseSearchIndexing.ps1** 
with administrative privileges. Useful if you see spikes in CPU utilization after configuring Search.

You will be prompted to enter:

* The SQL server instance name where the TFS configuration database resides.
* The name of the TFS configuration database.

<a name="resume-index"></a>
### Resume indexing

If indexing was paused, execute the script **StartSearchIndexing.ps1**
with administrative privileges, to start indexing again. 
You will be prompted to enter:

* The SQL server instance name where the TFS configuration database resides.
* The name of the TFS configuration database.

<a name="re-index"></a>
### Re-index a repository or collection

To re-index a Git or TFVC repository, execute the appropriate
version of the script **Re-IndexingRepository.ps1** for your TFS version
with administrative privileges. You will be prompted to enter:

* The SQL server instance name where the TFS configuration database resides.
* The name of the TFS collection database.
* The name of the TFS configuration database.
* The type of re-indexing to execute. This can be one of the values:
  - **Git\_Repository**
  - **TFVC\_Repository**
* The name of the collection.
* The name of the repository to re-index.

To re-index a **collection**, execute the script **TriggerCollectionIndexing.ps1**
with administrative privileges. You will be prompted to enter:

* The SQL server instance name where the TFS configuration database resides.
* The name of the TFS collection database.
* The name of the TFS configuration database.
* The name of the collection.

Re-indexing a collection can take from a few minutes 
to a few hours, depending on the size of the collection. 

Also see **[Troubleshoot Code Search](#trouble-tfs)**.

<a name="uninstall-tfs"></a>
## Unconfigure Search in Team Foundation Server

In cases such as a pre-production upgrade, production upgrade, new hardware migration, cloning,
or other maintenance operation, the TFS wizard will unconfigure Code Search in a way that makes it easy to re-configure it after the TFS 
maintenance operation is complete.

However, there might be cases where you no longer want to use Code Search, or want to perform a new and clean
install. This requires multiple steps, depending on whether Code Search is configured
[on the same server as TFS ](#unconfig-same-server) or on a [separate server](#unconfig-separate-server).

<a name="unconfig-same-server"></a>
### Unconfigure Search on the machine configured as your TFS server

1. Uninstall the Code Search extension for each collection where it is installed.
   Do this by navigating to the **Manage Extensions** page of each collection in
   your Team Foundation Server:

   ![Checking that the extension is installed](../_img/_shared/goto-marketplace.png)

1. Remove the Search feature:

   1. Open the Team Foundation Server Administration Console.
   1. In the left pane, select the name of the TFS server.
   1. In the right pane, choose **Remove Feature**.
   1. In the Remove Feature dialog, select **Team Foundation Search Service** and choose **Remove**.<p />
  
1. Remove the Elasticsearch service:

   1. Open **Command Prompt** as an administrator
   1. Change directory: 

      For TFS 2017 RTM, `cd "C:\Program Files\Microsoft Team Foundation Server 15.0\Search\ES\elasticsearch-1.7.1-SNAPSHOT\bin"`

      For TFS 2017 Update1 and above, `cd "C:\Program Files\Microsoft Team Foundation Server 15.0\Search\ES\elasticsearch-2.4.1\bin"`
      
   1. Remove the service: `"service.bat remove"`<p />
    
1. Remove Search data:

   * Delete the contents of the location described by the environment variable `SEARCH_ES_INDEX_PATH`<p />
    
1. Remove environment variables:

   1. Delete the environment variable `"SEARCH_ES_INDEX_PATH"`
   1. Delete the environment variable `"ES_HEAP_SIZE"`<p />
    
<a name="unconfig-separate-server"></a>
### Unconfigure Search when its configured on a separate server

1. Uninstall the Code Search extension for each collection where it is installed. Do this by navigating to the **Manage Extensions** page of each collection in
your Team Foundation Server.

   ![Checking that the extension is installed](../_img/_shared/goto-marketplace.png)

1. Remove the Search feature:

   1. Open the Team Foundation Server Administration Console.
   1. In the left pane, select the name of the TFS server.
   1. In the right pane, choose **Remove Feature**.
   1. In the Remove Feature dialog, select **Team Foundation Search Service** and choose **Remove**.<p />

1. Remove the Elasticsearch service and data

   1. Open **Powershell** as an administrator
   1. Go to the folder where **ConfigureTFSSearch.ps1** is installed along with the rest of the files required for a remote install of Search.
   1. Run the script again with the remove option: 
   
      For TFS 2017 RTM, `"ConfigureTFSSearch.ps1 -RemoveTFSSearch"`<p />

      For TFS 2017 Update1 and above, `"ConfigureTFSSearch.ps1 -remove"`<p />
  
<a name="limit-tfs"></a>
## Limitations of Search in Team Foundation Server

Code Search for Team Foundation Server 2017 has the following limitations: 

* If you perform a disaster recovery (DR) operation and move your TFS server back 
  to an earlier snapshot of your SQL database, you will need to re-index all your collections [re-index the collections](#re-index).  

<a name="trouble-tfs"></a>
## Troubleshoot Search in Team Foundation Server

* [Search is configured but the Search box is not displayed](#no-search-box)
* [No search results are shown after installing or configuring Search](#no-results-install)
* [How do I know if indexing was triggered for all the collections?](#indexing-status-for-collections)
* [Search stops working and no results are shown](#no-results-later)
* [Search does not show the expected results](#unexpected-results)
* [TFS server overall performance is affected](#server-slow)
* ["Unexpected error in Search service" message](https://blogs.msdn.microsoft.com/tapas_sahoos_blog/2017/09/11/resetting-search-index-in-team-foundation-server/)

<a name="no-search-box"></a>
**Search is configured but the Search box is not displayed**

1. The search box is shown only in the context of a project page. 
   Navigate to a project and check if the search box is displayed at the top right. 

   ![The Code Search textbox in the VSTS title bar](_img/get-started/title-bar-search-box-empty-outlined.png)    

1. If the search box is not shown, verify that the extension is installed for the collection. 
   If not, [install](#config-ts) or [configure](#config-tfs) the extension.

<a name="no-results-install"></a>
**No search results are shown after installing or configuring Search**

1. Wait until you are sure a sufficient time has elapsed
   after installing or configuring Search. It typically takes
   less than one hour for Search to index a collection, but 
   it may take up to 12 hours depending on 
   the size and number of code files.

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
**TFS server overall performance is affected**

1. [Pause all indexing](#pause-index) and see if performance recovers.
1. If performance does recover, consider locating Code Search 
   on a separate server if you have not already done so.

::: moniker-end

<a name="support"></a>

[!INCLUDE [shared-got-feedback](../_shared/shared-got-feedback.md)]
