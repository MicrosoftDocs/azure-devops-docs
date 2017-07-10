# Overview
## [TFS Administration (TFS Parts)](../get-started.md)

# Quickstarts
## [Single server install](./install/single-server.md)
## [Dual server install](./install/dual-server.md)
## [Multiple server install](./install/multiple-server.md)

# Tutorials
## [Restore a TFS deployment to new hardware](./admin/backup/tut-single-svr-home.md)
### [Tutorial restore to new server: (1) prepare new hardware](./admin/backup/tut-single-svr-prep-new-hw.md)
### [Tutorial restore to new server: (2) restore databases](./admin/backup/tut-single-svr-restore-dbs.md)
### [Tutorial restore to new server: (3) install and configure TFS](./admin/backup/tut-single-svr-install-config-tfs.md)
### [Tutorial restore to new server: (4) reconnect services and users](./admin/backup/tut-single-svr-reconn-svcs-users.md)

# Samples

# How-to
## Install TFS
### [Get started](./install/get-started.md)
### [Requirements](requirements.md)
### [Requirement changes](requirement-changes-tfs15.md)
### TFS 2013
#### [Get started](./install/install-2013/install-tfs.md)
#### [Basic configuration](./install/install-2013/config-tfs-basic.md)
#### [Standard configuration](./install/install-2013/config-tfs-standard.md)
#### [Advanced configuration](./install/install-2013/config-tfs-advanced.md)
#### [Create high-availability farm](./install/create-tfs-farm.md)
#### [Add TFS service account to Report Server](./install/install-2013/add-tfs-svc-acct-report-svr.md)
## Install SharePoint
### [Configure enterprise app definition](./install/sharepoint/config-enterprise-app-def.md)
### [Install on same server](./install/sharepoint/install-sharepoint.md)
### [Install on different server](./install/sharepoint/setup-remote-sharepoint.md)
### [Verify SharePoint](./install/sharepoint/verify-sharepoint.md)
### [Move SharePoint to new hardware](./install/sharepoint/move-sharepoint-new-hardware.md)
### [Share information using the project portal](/docs/report/sharepoint-dashboards/share-information-using-the-project-portal)
## Install SQL Server
### [Install SQL Server](./install/sql-server/install-sql-server.md)
### [Collation requirements](./install/sql-server/collation-requirements.md)
### [Reporting services roles](./install/sql-server/reporting-services-roles.md)
### [Use always-on availability groups](./install/sql-server/use-always-on-groups.md)
### [Use always-on availability groups](./install/sql-server/use-always-on-groups.md)
### [SQL Server Reporting Services reports](/docs/report/sql-server/reporting-services-reports)
## Administer TFS
### [Configure and manage TFS resources](./admin/config-tfs-resources.md)
### [Move team project collection](./admin/move-project-collection.md)
### [Manage team project collections](./admin/manage-team-project-collections.md)
### [Split team project collection](./admin/split-team-project-collection.md)
### [Set up AD groups for TFS users](./admin/setup-ad-groups.md)
### [Change app tier caching](./admin/change-caching-app-tier.md)
### [Change service account password](./admin/change-service-account-password.md)
### [Change service account or password for SQL reporting](./admin/change-service-account-or-password-sql-reporting.md)
### [Change the deployment configuration](./admin/change-deployment.md)
### [Add SharePoint products to TFS](./admin/add-sharepoint-to-tfs.md)
### [Modify or remove access between sharePoint web app and TFS](./admin/modify-remove-access-shareport-tfs.md)
### [Configure SharePoint Server 2010 or 2007 for Dashboards](./admin/config-ent-sharepoint0710-dashboards.md)
### [Set up email alerts and feedback requests](./admin/setup-customize-alerts.md)
### [Move or clone to new hardware](./admin/move-clone-hardware.md)
### [Rebuild the client cache](./admin/rebuild-client-cache.md)
### [Move TFS between network domains](./admin/move-across-domains.md)
### [Service accounts dependencies](./admin/service-accounts-dependencies-tfs.md)
### [Configure Lab Management for SCVMM environments](./admin/config-lab-scvmm-envs.md)
### [Set up secure sockets layer](./admin/setup-secure-sockets-layer.md)
### [Stop and start services, app pools, and websites](./admin/stop-start-stuff.md)
### [Managing file types](./admin/manage-file-types.md)
## [Upgrade TFS](./upgrade/get-started.md)
### [Requirements](requirements.md)
### [Pre-upgrade](./upgrade/pre-upgrade.md)
### [Pre-production](./upgrade/pre-production.md)
### [Locate or change TFS product key](./upgrade/change-product-key.md)
### [TFS Express](./upgrade/express.md)
### [Walkthrough](./upgrade/walkthrough.md)
### Upgrade 2013
#### [Upgrade requirements](./upgrade/upgrade-2013/upgrade-2013-requirements.md)
#### [Use new app tier hardware](./upgrade/upgrade-2013/new-app-tier-hardware.md)
#### [Use same app tier hardware](./upgrade/upgrade-2013/same-app-tier-hardware.md)
#### [Set up SQL Server](./upgrade/upgrade-2013/setup-sql-server.md)
#### [Use same SharePoint site](./upgrade/upgrade-2013/use-same-sharepoint-site.md)
#### [Back up and restore TFS data](./upgrade/upgrade-2013/backup-and-restore-data.md)
#### [Run upgrade wizard](./upgrade/run-upgrade-wizard.md)
### [From 2005](./upgrade/tfs-2005-to-2015.md)
## [Backup TFS](./admin/backup/back-up-restore-tfs.md)
### [Databases and deployment topologies](./admin/backup/backup-db-architecture.md)
### [Manually back up](./admin/backup/manually-backup-tfs.md)
### [Configure backup schedule and plan](./admin/backup/config-backup-sched-plan.md)

### [Refresh data caches on clients](./admin/backup/refresh-data-caches.md)
### [Restore app tier server (data is elsewhere)](./admin/backup/restore-application-tier-server.md)
### [Restore data same server with TFS](./admin/backup/restore-data-same-location.md)
### [Restore data different server than current](./admin/backup/restore-data-different-instance.md)
### [Restore Lab Management components](./admin/backup/restore-lab-management-components.md)
## [Install proxy server and set up remote site](./install/install-proxy-setup-remote.md)
## [Change site and certificate settings](../websitesettings.md)


# Concepts
## TFS Architecture
### [Overview](./architecture/architecture.md)
### [TFS concepts](./architecture/tfs-concepts.md)
### [Examples of simple topology](./architecture/examples-simple-topo.md)
### [Examples of moderate topology](./architecture/examples-moderate-topo.md)
### [Examples of complex topology](./architecture/examples-complex-topo.md)
### [Required ports](./architecture/required-ports.md)
### [SQL Server databases](./architecture/sql-server-databases.md)
### [Background job agent](./architecture/background-job-agent.md)
## Command-line tools
### [Open the admin console](./command-line/open-admin-console.md)
### [TFSConfig](./command-line/tfsconfig-cmd.md)
### [TFSLabConfig](./command-line/tfslabconfig-cmd.md)
### [TFSDeleteProject](./command-line/tfsdeleteproject-cmd.md)
### [TFSSecurity](./command-line/tfssecurity-cmd.md)
### [TFSServiceControl](./command-line/tfsservicecontrol-cmd.md)


# Reference


# Troubleshooting
















