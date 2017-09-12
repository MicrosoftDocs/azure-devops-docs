---
title: TfsPreUpgrade On-premises
description: Use TfsPreUpgrade to reduce the time required to upgrade TFS 2013 to TFS 2015
ms.prod: vs-devops-alm
ms.technology: vs-devops-admin
ms.assetid: 445ae357-cea6-48f8-85cb-037613a240cb
ms.manager: douge
ms.author: elbatk
ms.date: 08/04/2016
---

# Use TfsPreUpgrade to reduce downtime

**TFS 2017** | **TFS 2015** | **TFS 2013**

## Requirements
TfsPreUpgrade is only supported for Team Foundation Server deployments which:

- Are currently on TFS 2013 Update 4 or Update 5.
- Have their relevant collection databases on an Enterprise edition of SQL Server.
- Have their relevant collection databases on either SQL Server 2012 SP1 (or greater) or SQL Server 2014 CU3 (or greater).

See below for more information.

## Introduction
Team Foundation Server 2015 includes schema changes to a large number of tables in order to 
support renaming team projects. As a result, upgrading to Team Foundation Server 2015 can take 
a significant amount of time, depending on the size of your database. Because TFS upgrades are 
offline, Microsoft is providing a tool, TfsPreUpgrade.exe, which can be used to do the most expensive 
parts of the work to upgrade to TFS 2015 while your TFS 2013 deployment is still online.
You don't have to run this tool before you upgrade.
We recommend running it for collection databases that exceed 1 TB in size
to reduce the time that TFS will need to be offline.

Generally TfsPreUpgrade.exe works by creating new copies of the tables most impacted by the schema changes 
present in TFS 2015 and then migrating data from the original tables to the new copies. In order to handle 
ongoing user activity, it also puts triggers in place that keep changes to the original tables flowing to 
the new copies. Microsoft has optimized TfsPreUpgrade.exe extensively in order to minimize its performance 
impacts on your servers and users, but it can and will have an impact on performance. For large operations 
such as Team Foundation Version Control (TFVC) creating and deleting of branches, this could lead to user 
dissatisfaction and even database timeouts. See below for a complete list of the operations known to be 
substantially impacted. 

As a result, TfsPreUpgrade.exe should be started as close as possible to the planned date of the offline 
upgrade while still having time to complete its work, and should be run during a window where these large 
operations can be avoided. Many factors will go in to how long it takes TfsPreUpgrade.exe to complete, but 
we generally expect it to take two weeks or less, and therefore generally recommend beginning TfsPreUpgrade.exe 
two weeks before your planned offline upgrade. TfsPreUpgrade.exe can provide a rough estimate of how long it
will take to execute by running the Estimate command. 

    TfsPreUpgrade.exe Estimate /TargetDatabaseNames:"{SQL Instance};{Collection Database Name}"

Because of how it works, TfsPreUpgrade.exe requires stable source and target database schemas. As such, it can 
only be run against TFS 2013 Update 4 and Update 5 databases. If your TFS deployment is not yet on TFS 2013 Update 4 or 5, 
you will need to upgrade to one of those versions before running TfsPreUpgrade.exe. TFS 2013 Update 5 can be downloaded here: 
https://www.visualstudio.com/downloads/download-visual-studio-vs.

## What does TfsPreUpgrade.exe do?
TfsPreUpgrade.exe will:

- Enable compression for a small number of tables that were not compressed in 2013 but will be in 2015.
- Scan for and fix a very rare but well understood data corruption in TFS version control data. 
- Create new tables and migrate existing data to them.
- Create triggers.
- Update stored procedures. 
- Create indexes. (Enterprise editions of SQL Server are required in order to allow these operations to be performed online.)
 
Because it creates new tables in order to migrate data in an online manner, TfsPreUpgrade.exe requires a 
potentially large amount of additional disk space for both data and transaction logs. As part of the execution 
of TfsPreUpgrade.exe, it will check to see whether that amount of space is already available. If not, it will 
attempt to pre-allocate that much space. If that fails, it will generate an error. TfsPreUpgrade.exe can provide
an estimate of how much space it will attempt to pre-allocate by running the Estimate command.

    TfsPreUpgrade.exe Estimate /TargetDatabaseNames:"{SQL Instance};{Collection Database Name}"
 
Because TfsPreUpgrade.exe performs potentially expensive operations (bulk copying of data, index creations, etc.) 
it can have an impact on the performance of your server. Microsoft does not expect this impact to be dramatic, 
and we have optimized the operations performed by TfsPreUpgrade.exe to minimize the impact on your servers and 
your users. If you do experience performance problems while TfsPreUpgrade.exe is running, it can always be canceled 
by typing Ctrl-C. TfsPreUpgrade.exe is written so that canceling it cancels the operations it is performing. It 
should never leave your database in a bad state, and can always be re-run multiple times if it exits before it has 
run to completion. 
 
Because TfsPreUpgrade.exe creates triggers which keep the original and new copies of tables in sync after the 
initial migration, even after canceling TfsPreUpgrade.exe it is possible that it will continue having an impact 
on the performance of your server. Again, Microsoft does not expect this impact to be dramatic, and we have 
optimized the performance of these triggers in order to minimize the impact on your servers and your users. If 
you do continue to experience performance problems after canceling TfsPreUpgrade.exe, you can use the 
TfsPreUpgrade.exe Revert command to undo most of the actions performed by the Run command. Revert will remove all 
of the triggers installed by the Run command, will delete all of the new tables it created, etc. For the set of 
actions taken by Run which are not reverted by Revert, see below.

TFVC operations that deal with very large numbers of items
are the most likely to be negatively impacted by the triggers that TfsPreUpgrade.exe creates.
If you can, avoid these TFVC operations while TfsPreUpgrade.exe is running
and before offline upgrade to TFS 2015 is completed.

- Creating, deleting and renaming branches. 
- Destroy operations which impact large numbers of items.
- Deleting team projects that use TFVC.

If you do need to perform these operations,
you can expect them to take at least twice as long to complete with the TfsPreUpgrade triggers in place.

## How do I run TfsPreUpgrade.exe?

The recommended procedure for running TfsPreUpgrade.exe is:

1.	[Download TfsPreUpgrade.exe](http://www.microsoft.com/en-us/download/details.aspx?id=48263).
	Note that the machine on which you install TfsPreUpgrade is not 
	important so long as it can access the relevant SQL instance(s) - it comes zipped up with all of its dependencies. 
2.	Unzip it to a local directory. 
3.	Determine which collection databases you wish to run TfsPreUpgrade.exe on. It can be run on any collection 
databases without negative impacts on their upgrade-ability, but is generally only needed on databases that are 
large enough to require significant downtime during an offline upgrade. Microsoft recommends using TfsPreUpgrade.exe 
on databases above 1 TB in size.
4.	As a user who is a sysadmin on the SQL instance (TfsPreUpgrade sets several traceflags during its execution), 
execute the Run command:

    TfsPreUpgrade.exe Run /TargetDatabaseNames:"{SQL Instance};{Collection Database Name}"
 
5.	If you wish to run TfsPreUpgrade.exe on more than one collection database, you can either use multiple 
invocations of TfsPreUpgrade.exe (in which case they will run in parallel) or you can specify multiple 
comma-separated SQL instance / Collection Database strings in a single invocation (in which case they will run 
sequentially). 
 
TfsPreUpgrade.exe will run for quite some time, depending on the size of the collection database(s) that it is 
running against. It will report progress along the way so that you can have some idea of how far along it is and 
how much time might be left.  Once TfsPreUpgrade.exe has completed, the triggers that it installs will keep any 
additional changes made due to the server being online flowing into the migrated tables. As such, there is no need 
to run it again before performing your offline upgrade to TFS 2015.

## Code churn statistics
One advanced option you can consider when running TfsPreUpgrade.exe is skipping the migration of code churn statistics 
older than some threshold. Code churn statistics are calculated by a background process when changes are checked in to 
TFVC, and are stored in one of the tables migrated by TfsPreUpgrade.exe. This data then flows into the warehouse and 
cube and can then be used in reports. See [here](https://msdn.microsoft.com/library/ms244661.aspx) for more information.

If old code churn statistics are not of interest to you (or if any code churn statistics are not of interest to you), you can 
save some time during the execution of TfsPreUpgrade.exe and the subsequent execution of offline upgrade by skipping 
the migration of statistics older than a given date. This can be accomplished using the optional 
/SkipCodeChurnBefore parameter to the Run command. For example, if you wanted to skip the migration of code churn 
statistics older than January 1st, 2015, you could use the following command line:

    TfsPreUpgrade.exe Run /TargetDatabaseNames:"{SQL Instance};{Collection Database Name}" /SkipCodeChurnBefore:"1/1/2015"

If you use this option, the relevant code churn statistics will not be migrated and will not be present in the warehouse 
and cube after your offline upgrade. 

## Offline upgrade to TFS 2015 

You are now ready to do your offline upgrade to TFS 2015, for which you can follow the normal procedures for 
upgrading TFS. 
 
See below for additional data on some infrequently performed operations which are blocked by TfsPreUpgrade.exe 
and for more information on database changes made by TfsPreUpgrade.exe which are not reverted by running 
TfsPreUpgrade.exe Revert. 
 
### Blocked operations 

Early on during the execution of TfsPreUpgrade.exe a number of "safety" triggers are put in place to block 
operations which were allowed by TFS 2013 but which are either no longer allowed by TFS 2015 or which would 
cause problems in the presence of the triggers put in place by TfsPreUpgrade.exe. These include:
 
1.	Deletion of team projects. It is not recommended to delete team projects once you have run TfsPreUpgrade.exe 
against a collection database. If you do delete a team project, it will fail just before finalizing the deletion, 
leaving the project behind in a Deleting state. Team project deletion will be supported again once you upgrade to 
TFS 2015.
2.	Creation of workspaces with references to root folders which do not exist. These will fail with error 
TF10169. Note that one scenario where this could surface is in build definitions whose workspace templates reference 
root folders which do not exist - in these scenarios, builds may fail during workspace creation with the given error. 
This scenario will continue to be unsupported in TFS 2015 due to changes related to Team Project rename but will 
fail with a more relevant error message. 
3.	Calling VersionControlServer.CreateTeamProjectFolder() via code written against the TFS client OM. This will 
fail with error TF10169. This scenario will continue to be unsupported in TFS 2015 due to changes related to Team 
Project rename but will fail with a more relevant error message. 
 
### Exceptions to TfsPreUpgrade.exe Revert
Running TfsPreUpgrade.exe Run has a number of side effects which are not reverted by running TfsPreUpgrade.exe Revert. 
Of most interest, any pre-allocation of database and/or transaction log space done by TfsPreUpgrade.exe will not be reverted,
meaning that your database files may be significantly larger than they were prior to running TfsPreUpgrade.exe. The extra
space will be unused, however, since the additional tables created by TfsPreUpgrade.exe will be deleted. We recommend 
leaving this space in place, both since it will naturally be filled in as the size of the data in your database files
goes up, and because it will be needed eventually by the upgrade to TFS 2015. 

The other side effects which are not reverted are not impactful and are listed here only for your information. These changes 
would have been made by an upgrade to TFS 2015 in any case, and should not have any impact on the functioning of your server
or on its eventual upgrade.
 
1.	Any corruptions found and fixed in TFS version control data will not be reverted.
2.	A column added to tbl_Version by the corruption detection and fixup script will not be removed.
3.      Tables for which compression is enabled will not have it disabled again. 