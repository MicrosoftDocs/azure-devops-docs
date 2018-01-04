---
title: Move a team project collection
description: Move a team project collection
ms.assetid: b5d79dcb-826e-4eb4-ab8e-de222d9b9974
ms.manager: douge
ms.author: elbatk
ms.date: 08/31/2016
ms.prod: vs-devops-alm
ms.technology: vs-devops-admin
---

# Move a team project collection

**TFS 2015** | **TFS 2013**

You can move a team project collection from one deployment of Team Foundation Server (TFS) to another. For example:

-   You have more than one deployment of TFS in your organization, and you want to move a collection to another deployment to better align with your business needs.

-   You want to move the collection to a remote office that has its own deployment of TFS.

-   You want to expand your deployment of TFS by adding another instance of SQL Server to it, and you want to distribute existing collections between the instances.

-   You need to incrementally upgrade your deployment by detaching an individual team project collection from a deployment of TFS running an earlier version, and then move it to a server running the current version of TFS. (One common reason for this is some teams might need to migrate to a newer version of TFS, while others must remain on an older version for tools or projects reasons.) In this scenario, you must also then upgrade each team project within the collection by using the Configure Features wizard. For more information, see [Configure features after a TFS upgrade](../../work/customize/configure-features-after-upgrade.md).

The steps to move a collection will depend on the particular configuration of the deployment that hosted the collection and the deployment to which you move it. For example, if you move a collection to a new domain, you will need to add users from that domain to the appropriate groups at the collection level and the project level. Similarly, if you move a collection to a deployment of TFS that uses a different SharePoint Web application, you'll either need to move the site collection database that supports the collection to that SharePoint Web application, or you must add the SharePoint Web application that supports the collection to the deployment of TFS to which you have moved it.

Here's how to move an entire team project collection. If you want to move part of a collection, see [Split a Team Project Collection](split-team-project-collection.md).

**In this topic**

1.  [Detach the collection](#detach-coll)

2.  [Back up the collection database](#backup-coll-db)

3.  [Move the collection database](#move-coll-db)

4.  [Attach the collection](#attach-coll)

5.  [Configure the moved team project collection](#config-moved-team-coll)

6.  [Configure projects](#config-projs)

[Q & A](#q-and-a)

-   My TFS deployment uses reporting. How do I move reports when I move a collection?

-   How do I move a collection that uses SharePoint Products?

-   How do I move a team project collection that includes Lab Management?

-   Can I move a team project collection that's integrated with Project Server?

-   I moved my collection to a TFS that has users or groups that shouldn't have access to projects or functions in some of the team projects, but need access to other projects in the moved collection. Can I keep them from seeing projects I don't want them to see?

**Before you begin**

Before you start your move, make sure that you're an administrator on the servers and in the software used by both the deployment you're moving from, and the one you're moving to. If you're not an administrator, [get added as one](../add-administrator-tfs.md).

<a name="detach-coll"></a>
## 1. Detach the collection

Before you move a collection, you must first detach it from the deployment of TFS on which it is running. It's very important that you not skip this step. When you detach a collection, all jobs and services are stopped, and then the collection database is stopped. In addition, the detach process copies over the collection-specific data from the configuration database and saves it as part of the team project collection database. This configuration data is what allows the collection database to be attached to a different deployment of TFS. If that data is not present, you cannot attach the collection to any deployment of TFS except the one from which it originated.

> [!NOTE]
>  Detaching a collection prevents users from accessing any projects in that collection.

1.  Open the administration console for Team Foundation on the server that hosts the collection that you want to move, and in **Team Project Collections**, highlight the collection that you want to move.

2.  On the **General** tab, choose **Detach Collection**.

    ![On the General tab, select then detach](_img/ic738718.png)

    The **Detach Team Project Collection Wizard** opens.

3.  (Optional) On the **Provide a servicing message for the team project collection** page, in **Servicing Message**, provide a message for users who might try to connect to projects in this collection.

4.  Choose **Next**.

5.  On the **Review settings that will be used to detach team project collection** page, review the details.

6.  If you want to changes any settings, choose **Previous**. If they appear to be correct, choose **Verify**.

7.  When all the readiness checks have completed successfully, choose **Detach**.

8.  On the **Monitor the team project collection detach progress** page, when all processes have completed, choose **Next**.

    ![The wizard shows you progress](_img/ic738719.png)

9.  (Optional) On the **Review supplemental information for this team project collection** page, either choose or note the location of the log file.

10. Choose **Close**.

    The team project collection no longer appears in the list of collections in the administration console.

    ![TFS admin console doesn't show detached](_img/ic738720.png)

<a name="backup-coll-db"></a>
## 2. Back up the collection database

After you have detached the collection, you must back up its database to move it to the other server. To perform this task, you must use the tools that are provided with SQL Server.

![Use the tools provided with SQL Server](_img/ic738721.png)
-   For information about this task, see the following page on the Microsoft website, and make sure to choose the version of SQL Server that matches your deployment: [Backing Up and Restoring Databases in SQL Server](http://go.microsoft.com/fwlink/?LinkId=115430) and [Create a backup schedule and plan](backup/config-backup-sched-plan.md).

> [!IMPORTANT]
> You can only restore a database to the same version or a more recent version of SQL Server. You can't restore a SQL Server database to an earlier version of the product </br>
> If your original deployment used the Enterprise or Datacenter editions of SQL Server, and you want to restore databases to a server running Standard edition, you must use a backup set that was made with SQL Server compression disabled. Unless you disable data compression, you will not be able to successfully restore Enterprise or Datacenter edition databases to a server running Standard edition. To turn off compression, follow the steps in the [Microsoft Knowledge Base article](http://go.microsoft.com/fwlink/?LinkId=253758).

<a name="move-coll-db"></a>
## 3. Move the collection database

As part of moving the collection, you must restore, copy, or otherwise move the collection database to an instance of SQL Server that is configured to support the deployment of TFS to which you want to move the collection. You can choose whichever method you prefer to move the database.

![Use the tools provided with SQL Server](_img/ic738722.png)

### For more information about moving a database to another instance of SQL Server, see:

-   [Use the Copy Database Wizard](http://go.microsoft.com/fwlink/?LinkId=267144)

-   [Copy Databases with Backup and Restore](http://go.microsoft.com/fwlink/?LinkId=267145)

<a name="attach-coll"></a>
## 5. Attach the collection

After you restore the collection database, you can attach the collection to the deployment of TFS to which you want to move it. If the deployment you're moving to uses reporting, a reporting folder and default reports will be built for the collection you're attaching as part of the process.

> [!NOTE]
> Warnings will appear when you attach the collection if your deployment uses SharePoint Products and the service account for TFS is not a member of the Farm Administrators group, or if your deployment uses reporting and you've already created a reporting folder and path that is identical to the previous deployment's folder and path. This behavior is expected, and you can proceed.

1.  Open the administration console for Team Foundation on the server that hosts the application tier for the deployment to which you want to move the collection.

2.  Choose **Team Project Collections**, and then choose **Attach Collection**.

    ![Use the TFS administration console](_img/ic738723.png)

    The **Attach Team Project Collection Wizard** opens.

3.  On the **Select the team project collection database to attach** page, in **SQL Server Instance**, provide the name of the server and the instance that hosts the collection database, if it is not already listed.

    ![Make sure the SQL Server instance is correct](_img/ic738724.png)

4.  In the **Databases** list, choose the collection database that you want to attach, and then choose **Next**.

5.  On the **Enter the team project collection information** page, provide a name for the collection in **Name** if one is not already present.

6.  (Optional) In **Description**, provide a description of the collection.

7.  Choose **Next**.

8.  On the **Review settings that will be used to attach the team project collection** page, review the information.

9.  If you must change any settings, choose **Previous**. If all the settings are correct, choose **Verify**.

10. When all the readiness checks have completed successfully, choose **Attach**.

11. On the **Monitor the team project collection attach progress** page, when all processes have completed, choose **Next**.

12. (Optional) On the **Review supplemental information for this team project collection** page, choose or note the location of the log file.

13. Choose **Close**.

    The team project collection appears in the list of collections in the administration console. The SharePoint Web application that supported this collection in its original deployment will appear in the list of Web applications.

    ![Stop collection if configuration isn't complete](_img/ic738725.png)

14. (Optional) Modify or remove the Web application from the list of Web applications. For more information, see [Modify or Remove Access Between a SharePoint Web Application and Team Foundation Server](modify-remove-access-shareport-tfs.md).

<a name="config-moved-team-coll"></a>
## 6. Configure the moved team project collection

You can skip this procedure if you moved the collection in the same domain, intend to use the same Web application that previously supported the collection, **and** you want to allow access for the administrators of that collection to this deployment of TFS.

After you have moved a collection, you must update the Web application and permission groups for that collection with the appropriate settings.

### To configure the moved collection

-   Open each tab for the team project collection and, if necessary, modify the settings to reflect the services and locations to match the locations of the resources on the current TFS. This is particularly important to do for SharePoint and reporting resources. If you see errors, make sure that your account has the permissions required for administrators of team project collections, and that any other team project collection administrators have been added appropriately.

    For information about this task, see [Modify a Team Project Collection](manage-team-project-collections.md) and [Set administrator permissions for team project collections](../add-administrator-tfs.md).

<a name="config-projs"></a>
## Configure projects

You can skip this procedure if you moved the collection in the same domain and you want to allow access for the users of projects in that collection to this deployment of TFS.

After you configure administrators for the moved collection, either you or those administrators must add users and groups to the projects in that collection. Depending on your deployment, you might also need to configure permissions for those users in SharePoint Products and Reporting Services.

### To add users to team projects

-   For information about this task, see [Add users to team projects](../../security/add-users-team-project.md).

### To add resources to moved team projects

-   For more information about this task, see [Configure resources to support team projects](config-tfs-resources.md).

<a name="q-and-a"></a>
## Q & A

### Q: My TFS deployment uses reporting. How do I move reports along with moving a collection?

**A:** First, you'll need to save or export any reports you want to move from the report server that supported the collection in its original deployment. Then you'll need to upload each report manually to the report server that will support the moved collection, which can be a lengthy process. Consider whether you want to upload all reports or whether a subset of reports will meet your business needs. You do not have to upload all reports or any reports, but only those reports that you upload will be available after the move process is completed.

You'll also need to rebuild the warehouse and analysis services cube on the original deployment after you've moved the collection, so that the original deployment doesn't keep trying to build reports for a collection that is no longer there.

### To move reports

1.  Export or save the reports you want to move from the report server that supported the collection in its original deployment. For information about this task, see [Exporting Reports](https://msdn.microsoft.com/library/dd239307.aspx) and [Saving Reports](https://msdn.microsoft.com/library/dd255213.aspx).

2.  Upload each report that you want to move to the appropriate folder on the report server that supports the collection in its new environment in Report Manager.

    For more information, see the following topic on the Microsoft website: [Uploading Files to a Folder](http://go.microsoft.com/fwlink/?LinkID=177729).

3.  In Report Manager, edit each report to change the data source to the new report server.

    For more information, see the following topic on the Microsoft website: How to: Configure Data Source Properties for a Report.

### Rebuild the data warehouse and Analysis Services

1.  Open the administration console for Team Foundation.

2.  In the navigation bar, choose **Reporting**.

3.  In **Reporting**, choose **Start Rebuild**.

4.  In the **Rebuild the Warehouse and Analysis Services Databases** dialog box, choose **OK**.

    > [!NOTE]
    > The warehouses will finish rebuilding and the data will finish repopulating after the Start Rebuild action completes. Depending on the size of your deployment and the amount of data, the entire process might take several hours to complete.

### Q: How do I move a collection that uses SharePoint Products?

**A:** To move a team project collection that uses a SharePoint Web application, you must move both the team project collection itself and the SharePoint site collection that supports the team project collection. The site collection must be moved to the Web application that will support the team project collection in the new deployment. Specifically, you must [back up the site collection database](https://technet.microsoft.com/library/ee748617(v=office.15).aspx) and then [move the site collection database](https://technet.microsoft.com/library/cc825328(v=office.15).aspx). Once you've done that and attached the moved team project collection to its destination TFS, you'll need to repair the connection between that TFS and its SharePoint web application to ensure that the attached collection connects properly to the moved site collection. You’ll also need to make sure that the SharePoint tab for the team project collection points to that site collection database.

> [!NOTE]
> If you are moving the collection between deployments that use SharePoint Products, it is strongly recommended that the service account for TFS be a member of the <strong>Farm Administrators</strong> group in SharePoint Products in both deployments. Otherwise, you might experience errors when you attempt to detach or attach the collection. </br>
> You can move a team project collection without granting this membership to the service account for TFS. However, errors will appear when you attach the collection, and you will need to perform additional steps to reconnect projects with their portals. Even if your operational requirements generally restrict granting this membership to the service account, you should consider adding the service account to the Farm Administrators group for the duration of the move operation.

1.  Open the administration console for Team Foundation, choose **SharePoint Web Applications**, and in the list of Web applications, choose the Web application that will support the collection that you just attached.

    The **Repair Connection** button appears after you select a Web application in the list.

2.  Choose **Repair Connection**, and in the **Repair the connection to a SharePoint Web Application** dialog box, choose **Repair**.

3.  In **Team Project Collections**, select the moved team project collection, choose the SharePoint Products tab, and modify the settings to point to the site collection database.

### Q: How do I move a team project collection that includes Lab Management?

**A:** If you moved the collection to a different domain or intend to use a different System Center Virtual Machine Manager, you must delete the virtual machines, templates, team project host groups, and team project library shares from the collection database before you start the move, and recreate them in Microsoft Test Manager after the move.

### To delete the Lab Management resources before moving the collection

-   For information about how to remove all group hosts, library shares, and environments from a specified team project collection, see [TFSConfig Lab /Delete Command](../command-line/tfsconfig-cmd.md#lab-delete) with the **/External** option.

### To configure Lab Management resources after moving the collection

1.  Configure the application tier for Team Foundation.

    For more information, see [Configuring Lab Management for SCVMM Environments](config-lab-scvmm-envs.md).

2.  Recreate the golden master virtual machines and templates in the new SCVMM and import virtual machines and templates into the team project collection.

    For more information, see [How to: Create and Store Virtual Machines and Templates Ready for Lab Management](https://msdn.microsoft.com/en-us/library/ee702479(v=vs.120).aspx).

3.  Recreate the environments for each team project.

    For more information, see [Creating an SCVMM Environment Using Stored Virtual Machines and Templates](https://msdn.microsoft.com/en-us/library/ee518915(v=vs.120).aspx).


### Q: How do I restrict access to select functions in a team project?

**A:** Users who have permissions to access one project within a collection can view other projects within that collection, even if they don't have permissions to modify work items or perform other actions in that project. You can [Grant or restrict access to select features and functions](../../security/restrict-access.md) from creating or modifying select artifacts, as well as restrict them from seeing projects, by specifically creating groups and configuring restrictions on those groups. 
