---
title: Restrict access to Azure DevOps Services IPs only
titleSuffix: Azure DevOps
description: How to guide for preparing restricting import collection access to Azure DevOps Services IPs only
ms.topic: how-to
ms.subservice: azure-devops-migrate
ms.author: pwoosam
author: pwoosam
monikerRange: '<= azure-devops'
ms.date: 09/13/2023
---

# Restrict access to Azure DevOps Services IPs only

We highly recommend that you restrict access to your Azure Storage account to only IPs from Azure DevOps Services. You can restrict access by only allowing connections from Azure DevOps Services IPs that are involved in the collection database import process. The IPs that need to be granted access to your storage account depend on the region you're importing into.

## Option 1: Using Service Tags

You can easily allow connections from all Azure DevOps Services regions by adding the `azuredevops` [Service Tag](/azure/virtual-network/service-tags-overview) to your network security groups or firewalls either through the portal or programmatically.

## Option 2: Using IpList

Use the `IpList` command to get the list of IPs that need to be granted access to allow connections from a specific Azure DevOps Services region.

Included in the help documentation are instructions and examples for running Migrator from the Azure DevOps Server instance itself and a remote machine. If you're running the command from one of the Azure DevOps Server instance's application tiers, your command should have the following structure:

```cmdline
Migrator IpList /collection:{CollectionURI} /tenantDomainName:{name} /region:{region}
```

You can add the list of IPs to your network security groups or firewalls either through the portal or programatically.

### Configure IP firewall exceptions for SQL Azure

> The data migration tool requires the Azure DevOps Services IPs to be configured for inbound connections only on port 1433.

Granting exceptions for the necessary IPs is handled at the Azure networking layer for your SQL Azure VM. To get started, go to your SQL Azure VM in the [Azure portal](https://ms.portal.azure.com). In **Settings**, select **Networking**. You can grant exceptions for the IPs by selecting **Add inbound port rule** in the networking settings.

![Screenshot of the "Add inbound port rule" button on your SQL Azure VM network interface page.](media/migration-import/inbound.png)

On the **Add inbound security rule** pane, select **Advanced** to configure an inbound port rule for a specific IP. 

![Screenshot of the "Advanced" button on the "Add inbound security rule" pane.](media/migration-import/advanced.png)

In the **Source** drop-down list, select **IP Addresses**, enter an IP address that needs to be granted an exception, set the **Destination port range** to **1433** and, in the **Name** box, enter a name that best describes the exception you're configuring. 

Depending on other inbound port rules that have been configured, you might need to change the default priority for the Azure DevOps Services exceptions so they don't get ignored. For example, if you have a "deny on all inbound connections to 1433" rule with a higher priority than your Azure DevOps Services exceptions, the data migration tool might be unable to make a successful connection to your database. 

![Screenshot of a completed inbound port rule configuration.](media/migration-import/example.png)

Repeat adding inbound port rules until all necessary Azure DevOps Services IPs have been granted an exception. Missing one IP could result in your import failing to start. 