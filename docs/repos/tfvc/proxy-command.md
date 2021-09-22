---
title: Proxy Command
titleSuffix: Azure Repos
description: Proxy Command
ms.assetid: c36b124d-f1cf-4e6f-a053-3b7d501a234c
ms.technology: devops-code-tfvc
ms.topic: reference
ms.date: 08/10/2016
monikerRange: '>= tfs-2015'
---


# Proxy Command

**Azure Repos | Azure DevOps Server 2020 | Azure DevOps Server 2019 | TFS 2018 | TFS 2017 | TFS 2015 | VS 2017 | VS 2015 | VS 2013**

Configures your client computer to use a proxy server. Adds, deletes, and lists proxy records about the location and availability of one or more proxy servers within your deployment, including any remote sites.

**Required Permissions**

To use the **proxy** command to configure a client computer, you must be a member of the **User** security group on the local computer. To use the **proxy** command to work with proxy records, you must have the AdminConfiguration permission. For more information, see [Permissions and groups reference](../../organizations/security/permissions.md).

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
   *Url*
   :::column-end:::
   :::column span="3":::
   Identifies the proxy server. You must use the following format: http://proxyServerName:proxyPortNumber.

   Where *proxyServerName* is the name of the proxy server and *proxyPortNumber* is the assigned listening port (for example, **http://server:8081**).
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   *TeamProjectCollectionUrl*
   :::column-end:::
   :::column span="3":::
   Identifies the project collection. You must use the following format: http://ApplicationTierServerName:PortNumber/*Directory*/*CollectionName*.

   Where *ApplicationTierServerName* is the name of the application-tier server, *PortNumber* is the assigned listening port, and *Directory*/*CollectionName* are the names of the directory and the collection (for example, **http://server:8080/tfs/newcollection1**).
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   *UserName*
   :::column-end:::
   :::column span="3":::
   Provides a value to the **/login** option. You can specify a user name value as either *Domain*&lt;em&gt;UserName</em> or *UserName*.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   *Password*
   :::column-end:::
   :::column span="3":::
   Provides a password for the user name.
   :::column-end:::
:::row-end:::

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
   **/configure**
   :::column-end:::
   :::column span="3":::
   Configures your client computer to use a proxy server.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **/collection**
   :::column-end:::
   :::column span="3":::
   Specifies the project collection.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **/login**
   :::column-end:::
   :::column span="3":::
   Specifies the user name and password to authenticate.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **/add**
   :::column-end:::
   :::column span="3":::
   Adds a proxy record to Visual Studio Team Foundation Server about the location and availability of proxy servers on your network.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **/name**
   :::column-end:::
   :::column span="3":::
   Associates a name with a proxy record.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **/site**
   :::column-end:::
   :::column span="3":::
   Associates an Active Directory domain with a proxy record.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **/description**
   :::column-end:::
   :::column span="3":::
   Specifies a description of the proxy record.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **/default**
   :::column-end:::
   :::column span="3":::
   Specifies the scope of the proxy record. If you add a proxy record with the default set to global, the first time that a developer performs a get operation, Team Foundation Server will redirect that developer&#39;s request to the proxy that is specified by the global record. If you add a proxy record with the default set to site, the first time that a developer from within the specified Active Directory domain performs a get operation, Team Foundation Server will redirect that developer&#39;s request to the proxy that is specified by the record that is associated with the site.

   You can specify one of the following values:
   - **global**
   - **site**
   - **all**
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **/delete**
   :::column-end:::
   :::column span="3":::
   Deletes a proxy record from Team Foundation Server.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **/list**
   :::column-end:::
   :::column span="3":::
   Lists proxy records in Team Foundation Server.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **/enabled**
   :::column-end:::
   :::column span="3":::
   Enables or disables proxy.
   - **true**
   - **false**
   :::column-end:::
:::row-end:::

## Remarks
The proxy command has two purposes, and each purpose is aimed at a different type of user.

As a developer, you can use the proxy command to configure your client to use a proxy server or to override the network defaults for a proxy server. This task is similar to configuring Team Explorer to use a proxy.

As a network administrator, you can use the proxy command to add and manage records about the location of various proxy servers within your deployment of Team Foundation Server. You can use these records to help developers configure their workstations to use a proxy. If you define a global proxy, Team Foundation Server can automatically redirect developers to use it. If you have a complex network topology with multiple Active Directory domains in various geographic locations, you can set up multiple records and associate each record with a particular domain. These records can then help you automatically direct developers from each geographical location to the appropriate proxy for their location.

For more information about how to find the **tf** command-line utility, see [Tf Command-Line Utility Commands](/previous-versions/visualstudio/visual-studio-2010/z51z7zy0(v=vs.100)).
## Examples
The following example automatically detects and configures a client computer to use a proxy, if a proxy record has been established:

```
c:\projects>tf proxy /configure
```

The following example overrides any proxy records on Team Foundation Server and configures a client computer to use a specified proxy:

```
c:\projects>tf proxy /configure Url
```

The following example adds a global record to Team Foundation Server about the availability of this proxy. The first time that a developer performs a get operation, Team Foundation Server will redirect all requests from that developer to the specified proxy.

```
c:\projects>tf proxy /add http://server:8081 /default:global /collection:http://tfsserver:8080/
```

The following example adds a site record to Team Foundation Server for developers in an Active Directory domain, which is named corp, to use this proxy server. The first time that a developer from that domain performs a get operation, Team Foundation Server will redirect all requests from that developer to the specified proxy.

```
c:\projects>tf proxy /add http://server:8081 /default:site /site:corp /collection:http://tfsserver:8080/
```

## See Also

#### Reference

[Command-Line Syntax (Version Control)](/previous-versions/visualstudio/visual-studio-2010/56f7w6be(v=vs.100))

#### Other Resources

[Tf Command-Line Utility Commands](/previous-versions/visualstudio/visual-studio-2010/z51z7zy0(v=vs.100))