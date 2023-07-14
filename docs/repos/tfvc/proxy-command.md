---
title: Proxy command (Team Foundation Version Control)
titleSuffix: Azure Repos
description: Use the Team Foundation Version Control proxy command to configure your client computer to use a proxy server.
ms.assetid: c36b124d-f1cf-4e6f-a053-3b7d501a234c
ms.service: azure-devops-repos
ms.topic: reference
ms.date: 11/29/2022
monikerRange: '<= azure-devops'
ms.subservice: azure-devops-repos-tfvc
---

# Proxy command  (Team Foundation Version Control)

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]
[!INCLUDE [version-vs-gt-eq-2019](../../includes/version-vs-gt-eq-2019.md)]

The Team Foundation Version Control (TFVC) `tf proxy` command configures your client computer to use a proxy server. The command adds, deletes, and lists proxy records about the location and availability of one or more proxy servers within your deployment, including any remote sites.

## Prerequisites

To use the `proxy` command to configure a client computer, you must be a member of the **User** security group on the local computer. To use the `proxy` command to work with proxy records, you must have the **AdminConfiguration** permission. 
For more information, see  [Security namespace and permission reference](../../organizations/security/namespace-reference.md).

## Syntax

```
tf proxy ([/configure [Url]) [/collection:TeamProjectCollectionUrl]
[/login:UserName,[Password]]
```

```
tf proxy /add Url [/name:Name] [/site:SiteName] 
[/description:Description] [/default:(global|site|all)] 
[/collection:TeamProjectCollectionUrl] [/login:UserName,[Password]] 
```

```
tf proxy /delete Url [/collection:TeamProjectCollectionUrl]
[/login:UserName,[Password]] 
```

```
tf proxy /list [Url1 Yrl2 ...] 
[/collection:TeamProjectCollectionUrl] [/login:UserName,[Password]]
```

```
tf proxy /enabled:(true|false)
```

## Parameters


### Arguments

:::row:::
   :::column span="1":::
   **Argument**
   :::column-end:::
   :::column span="3":::
   **Description**
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `<url>`
   :::column-end:::
   :::column span="3":::
   Identifies the proxy server. You must use the format `http://<proxyServerName>:<proxyPortNumber>`, where `proxyServerName` is the name of the proxy server and `proxyPortNumber` is the assigned listening port, for example `http://server:8081`.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `<TeamProjectCollectionUrl>`
   :::column-end:::
   :::column span="3":::
   Identifies the project collection. You must use the format `http://<ApplicationTierServerName>:<PortNumber>/<Directory>/<CollectionName>`. where `ApplicationTierServerName` is the name of the application-tier server, `PortNumber` is the assigned listening port, and `Directory/CollectionName` are the names of the directory and the collection. For example, `http://server:8080/tfs/newcollection1`.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `<username>`
   :::column-end:::
   :::column span="3":::
   Provides a value to the `/login` option. You can specify a user name value as either `DOMAIN\username` or `username`.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `<password>`
   :::column-end:::
   :::column span="3":::
   Provides a password for the user name.
   :::column-end:::
:::row-end:::


### Options

:::row:::
   :::column span="1":::
   **Option**
   :::column-end:::
   :::column span="3":::
   **Description**
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/configure`
   :::column-end:::
   :::column span="3":::
   Configures your client computer to use a proxy server.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/collection`
   :::column-end:::
   :::column span="3":::
   Specifies the project collection.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/login`
   :::column-end:::
   :::column span="3":::
   Specifies the user name and password to authenticate.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/add`
   :::column-end:::
   :::column span="3":::
   Adds a proxy record to Azure DevOps Server about the location and availability of proxy servers on your network.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/name`
   :::column-end:::
   :::column span="3":::
   Associates a name with a proxy record.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/site`
   :::column-end:::
   :::column span="3":::
   Associates an Active Directory domain with a proxy record.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/description`
   :::column-end:::
   :::column span="3":::
   Specifies a description of the proxy record.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/default`
   :::column-end:::
   :::column span="3":::
   Specifies the scope of the proxy record. You can specify one of the following values:
   - `global`
   - `site`
   - `all`
   
   If you add a proxy record with the default set to `global`, the first time a developer does a `get` operation, Azure DevOps Server redirects that request to the proxy that the global record specifies. If you add a proxy record with the default set to `site`, the first time a developer from within the specified Active Directory domain does a `get` operation, Azure DevOps Server redirects that request to the proxy that the record associated with the site specifies.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/delete`
   :::column-end:::
   :::column span="3":::
   Deletes a proxy record from Azure DevOps Server.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/list`
   :::column-end:::
   :::column span="3":::
   Lists proxy records in Azure DevOps server.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/enabled`
   :::column-end:::
   :::column span="3":::
   Enables or disables a proxy.
   - `true`
   - `false`
   :::column-end:::
:::row-end:::

## Remarks

The `proxy` command has two purposes, and each purpose is aimed at a different type of user.

As a developer, you can use the `proxy` command to configure your client to use a proxy server or to override the network defaults for a proxy server. This task is similar to configuring Azure DevOps to use a proxy.

As a network administrator, you can use the `proxy` command to add and manage records about the location of various proxy servers within your deployment of Azure DevOps Server. You can use these records to help developers configure their workstations to use a proxy. If you define a global proxy, Azure DevOps Server can automatically redirect developers to use it.

If you have a complex network topology with multiple Active Directory domains in various geographic locations, you can set up multiple records and associate each record with a particular domain. These records can then help you automatically direct developers from each geographical location to the appropriate proxy for their location.

For more information on how to use the `tf` command-line utility, see [Use Team Foundation version control commands](use-team-foundation-version-control-commands.md).

## Examples

The following example automatically detects and configures a client computer to use a proxy, if a proxy record has been established:

```
c:\projects>tf proxy /configure
```

The following example overrides any proxy records on Azure DevOps Server and configures a client computer to use a specified proxy:

```
c:\projects>tf proxy /configure <Url>
```

The following example adds a global record to Azure DevOps Server about the availability of the `server` proxy. The first time that a developer does a `get` operation, Azure DevOps Server redirects all requests from that developer to the specified proxy.

```
c:\projects>tf proxy /add http://server:8081 /default:global /collection:http://tfsserver:8080/
```

The following example adds a site record to Azure DevOps Server for developers in an Active Directory domain, which is named `corp`, to use this `server` proxy. The first time that a developer from that domain does a `get` operation, Azure DevOps Server redirects all requests from that developer to the specified proxy.

```
c:\projects>tf proxy /add http://server:8081 /default:site /site:corp /collection:http://tfsserver:8080/
```

## Related articles

- [Use Team Foundation version control commands](use-team-foundation-version-control-commands.md)

