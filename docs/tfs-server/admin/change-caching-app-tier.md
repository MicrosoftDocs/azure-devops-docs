---
title: Change cache settings for an application-tier server
description: Change cache settings for an application-tier server
ms.assetid: c9674fd0-badf-4820-8e7f-6bbea6dd1b2d
ms.manager: douge
ms.author: elbatk
ms.date: 08/18/2016
ms.prod: vs-devops-alm
ms.technology: vs-devops-admin
---

# Change cache settings for an application-tier server

**TFS 2015** | **TFS 2013**

You can help increase or balance performance in your deployment of Team Foundation Server (TFS) by changing the settings of the cache for files that are under version control on the application-tier server. By default, this cache is enabled so that users can download files more quickly from the cache instead of directly from the database. As an administrator, you can change the settings of this cache any time after installation.

You can change the following settings:  
-   [Specify a different cache root folder.](#specify-diff-cache-root)  
-   [Change the limit at which old files are removed from the cache.](#change-limit-old-files)

You can perform these tasks by editing the web.config file for version control, which is located in the installation directory on the application-tier server.

> [!NOTE]
> By default, the installation directory for the application tier is *%programfiles%\*TFS 12.0\Application Tier\Web Services.

**Required Permissions**  
To perform these procedures, you must be a member of the **Administrators** security group on the application-tier server for Team Foundation.

For more information, see the [Microsoft website](http://go.microsoft.com/fwlink/?LinkId=111235).

<a name="specify-diff-cache-root"></a>
## To specify a different cache root folder

1.  On the application-tier server, create a cache folder.

    You can create the folder on a local disk, in the UNC path, or on a mounted drive. For example, you might create the following folder:

    *d:\\temp\\cacheroot*

    >**Security Note:**  
    >The cache folder stores sensitive information that is not encrypted. Therefore, you should make sure that only the service account of the application tier (*TFSService*) has **Modify** permissions to this folder.

2.  Open the shortcut menu for the folder, and then choose **Properties**.

    The **Properties** dialog box for the folder opens.

3.  On the **Security** tab, choose **Edit**.

    The **Permissions** dialog box opens.

4.  Choose **Add**.

    The **Select Users, Computers, or Groups** dialog box opens.

5.  Add the local group **TFS\_APPTIER\_SERVICE\_WPG**, and then choose **OK**.

6.  Select the **Modify** check box, clear all other check boxes, and then choose **OK**.

7.  In Windows Explorer (or File Explorer), browse to *%programfiles%\\*TFS 2013\\Application Tier\\Web Services.

8.  Open the web.config file in a text or XML editor, and then locate the `\<appSettings\>` section.

9.  Add a line to the `appSettings` section to point to the folder that you just created:

        <add key="dataDirectory" value="NewCacheRootFolderLocation" />

    For example, you would add the following line if you created a cache root folder that is named *cacheroot* in the temp directory of a hard drive, as in the earlier example:

        <add key="dataDirectory" value="d:\temp\cacheroot" />

10. Save and close the web.config file.

    > [!NOTE]
    > To maximize performance, copy the files from the old cache folder to the new cache folder.

11. Open a Command Prompt window, type **iisreset**, and then press ENTER.

12. Delete the old cache root folder.

    > [!NOTE]
	> By default, the cache root folder is located at *%programfiles%*\TFS 12.0\Version Control Proxy\Web Services\VersionControlProxy\Data.


## Changing limits for removing files from the cache

You can change the maximum limit on the amount of storage space that the application-tier server can use for caching files. When this limit is reached, a cleanup routine makes room for newly requested files by deleting those files that have not been accessed in the longest time.

<a name="change-limit-old-files"></a>
### To change the limit at which old files are removed from the cache

1.  On the application-tier server, open Windows Explorer (or File Explorer), and browse to *\\%programfiles%\\*TFS 12.0\\Application Tier\\Web Services.

2.  Open the web.config file in a text or XML editor, and then locate the `\<appSettings\>` element.

3.  Add one of the following elements:

    -   To specify a percentage of available disk space to fill before old files are removed, add the `PercentageBasedPolicy` element. You must specify a whole number as the value of this element.

        For example, the following line specifies that the cache should fill up to 60% capacity of available disk space before old files are removed:

            <add key="PercentageBasedPolicy" value="60" />

    -   To specify a fixed size in MB for the cache to reach before old files are removed, add the `FixedSizeBasedPolicy` element. You must specify a whole number as the value of this element.

        For example, the following line specifies that the cache should reach 500 MB before old files are removed:

            <add key="FixedSizeBasedPolicy" value="500" />

        > [!NOTE]
		> If both the `FixedSizeBasedPolicy` and `PercentageBasedPolicy` elements are specified, the value of the `FixedSizeBasedPolicy` element is used, and the value of the `PercentageBasedPolicy` element is ignored.

4.  Save and close the web.config file.

5.  Open a Command Prompt window, type **iisreset**, and then press ENTER.

### To change the amount of cache to free when removing old files

1.  On the application-tier server, open Windows Explorer (or File Explorer), and browse to *%programfiles%\\*TFS 12.0\\Application Tier\\Web Services\\.

2.  Open the web.config file in a text or XML editor, locate the `\<appSettings\>` element, and then add the `CacheDeletionPercent` element.

    For example, the following line specifies to free 50% of the cache when removing old files:

        <add key="CacheDeletionPercent" value="50" />

3.  Save and close the web.config file.

4.  Open a Command Prompt window, type **iisreset**, and then press ENTER.

## See Also

 [Service accounts and dependencies in Team Foundation Server](service-accounts-dependencies-tfs.md) 