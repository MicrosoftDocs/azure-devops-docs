---
title: Proxy Command
titleSuffix: Azure Repos
description: Proxy Command
ms.assetid: c36b124d-f1cf-4e6f-a053-3b7d501a234c
ms.prod: devops
ms.technology: devops-code-tfvc
ms.manager: jillfra
ms.author: sdanie
author: steved0x
ms.topic: reference
ms.date: 08/10/2016
monikerRange: '>= tfs-2015'
---


# Proxy Command

#### Azure Repos | TFS 2018 | TFS 2017 | TFS 2015 | VS 2017 | VS 2015 | VS 2013

Configures your client computer to use a proxy server. Adds, deletes, and lists proxy records about the location and availability of one or more proxy servers within your deployment, including any remote sites.

**Required Permissions**

To use the **proxy** command to configure a client computer, you must be a member of the **User** security group on the local computer. To use the **proxy** command to work with proxy records, you must have the AdminConfiguration permission. For more information, see [Permissions and groups reference](../../organizations/security/permissions.md).

    tf proxy ([/configure [Url]) [/collection:TeamProjectCollectionUrl]
     [/login:UserName,[Password]]

    tf proxy /add Url [/name:Name] [/site:SiteName] 
    [/description:Description] [/default:(global|site|all)] 
    [/collection:TeamProjectCollectionUrl] [/login:UserName,[Password]] 

    tf proxy /delete Url [/collection:TeamProjectCollectionUrl]
    [/login:UserName,[Password]] 

    tf proxy /list [Url1 Yrl2 ...] 
    [/collection:TeamProjectCollectionUrl] [/login:UserName,[Password]]

     tf proxy /enabled:(true|false)
## Parameters

<table><thead>
<tr><th><p><strong>Argument</strong></p></th><th><p><strong>Description</strong></p></th></tr></thead><tbody>
<tr>
	<td><p><em>Url</em></p></td>
	<td><p>Identifies the proxy server. You must use the following format: http://proxyServerName:proxyPortNumber.</p><p>Where <em>proxyServerName</em> is the name of the proxy server and <em>proxyPortNumber</em> is the assigned listening port (for example, <strong>http://server:8081</strong>).</p></td></tr>
<tr>
	<td><p><em>TeamProjectCollectionUrl</em></p></td>
	<td><p>Identifies the project collection. You must use the following format: http://ApplicationTierServerName:PortNumber/<em>Directory</em>/<em>CollectionName</em>.</p><p>Where <em>ApplicationTierServerName</em> is the name of the application-tier server, <em>PortNumber</em> is the assigned listening port, and <em>Directory</em>/<em>CollectionName</em> are the names of the directory and the collection (for example, <strong>http://server:8080/tfs/newcollection1</strong>).</p></td></tr>
<tr>
	<td><p><em>UserName</em></p></td>
	<td><p>Provides a value to the <strong>/login</strong> option. You can specify a user name value as either <em>Domain</em>\<em>UserName</em> or <em>UserName</em>.</p></td></tr>
<tr>
	<td><p><em>Password</em></p></td>
	<td><p>Provides a password for the user name.</p></td></tr></tbody>
</table>

<table><thead>
<tr><th><p><strong>Option</strong></p></th><th><p><strong>Description</strong></p></th></tr></thead><tbody>
<tr>
	<td><p><strong>/configure</strong></p></td>
	<td><p>Configures your client computer to use a proxy server.</p></td></tr>
<tr>
	<td><p><strong>/collection</strong></p></td>
	<td><p>Specifies the project collection.</p></td></tr>
<tr>
	<td><p><strong>/login</strong></p></td>
	<td><p>Specifies the user name and password to authenticate.</p></td></tr>
<tr>
	<td><p><strong>/add</strong></p></td>
	<td><p>Adds a proxy record to Visual Studio Team Foundation Server about the location and availability of proxy servers on your network.</p></td></tr>
<tr>
	<td><p><strong>/name</strong></p></td>
	<td><p>Associates a name with a proxy record.</p></td></tr>
<tr>
	<td><p><strong>/site</strong></p></td>
	<td><p>Associates an Active Directory domain with a proxy record.</p></td></tr>
<tr>
	<td><p><strong>/description</strong></p></td>
	<td><p>Specifies a description of the proxy record.</p></td></tr>
<tr>
	<td><p><strong>/default</strong></p></td>
	<td><p>Specifies the scope of the proxy record. If you add a proxy record with the default set to global, the first time that a developer performs a get operation, Team Foundation Server will redirect that developer's request to the proxy that is specified by the global record. If you add a proxy record with the default set to site, the first time that a developer from within the specified Active Directory domain performs a get operation, Team Foundation Server will redirect that developer's request to the proxy that is specified by the record that is associated with the site.</p><p>You can specify one of the following values:</p><ul><li><p><strong>global</strong></p></li><li><p><strong>site</strong></p></li><li><p><strong>all</strong></p></li></ul></td></tr>
<tr>
	<td><p><strong>/delete</strong></p></td>
	<td><p>Deletes a proxy record from Team Foundation Server.</p></td></tr>
<tr>
	<td><p><strong>/list</strong></p></td>
	<td><p>Lists proxy records in Team Foundation Server.</p></td></tr>
<tr>
	<td><p><strong>/enabled</strong></p></td>
	<td><p>Enables or disables proxy.</p><ul><li><p><strong>true</strong></p></li><li><p><strong>false</strong></p></li></ul></td></tr></tbody>
</table>

## Remarks
The proxy command has two purposes, and each purpose is aimed at a different type of user.

As a developer, you can use the proxy command to configure your client to use a proxy server or to override the network defaults for a proxy server. This task is similar to configuring Team Explorer to use a proxy.

As a network administrator, you can use the proxy command to add and manage records about the location of various proxy servers within your deployment of Team Foundation Server. You can use these records to help developers configure their workstations to use a proxy. If you define a global proxy, Team Foundation Server can automatically redirect developers to use it. If you have a complex network topology with multiple Active Directory domains in various geographic locations, you can set up multiple records and associate each record with a particular domain. These records can then help you automatically direct developers from each geographical location to the appropriate proxy for their location.

For more information about how to find the **tf** command-line utility, see [Tf Command-Line Utility Commands](https://msdn.microsoft.com/library/z51z7zy0).
## Examples
The following example automatically detects and configures a client computer to use a proxy, if a proxy record has been established:

    c:\projects>tf proxy /configure

The following example overrides any proxy records on Team Foundation Server and configures a client computer to use a specified proxy:

    c:\projects>tf proxy /configure Url

The following example adds a global record to Team Foundation Server about the availability of this proxy. The first time that a developer performs a get operation, Team Foundation Server will redirect all requests from that developer to the specified proxy.

    c:\projects>tf proxy /add http://server:8081 /default:global /collection:http://tfsserver:8080/

The following example adds a site record to Team Foundation Server for developers in an Active Directory domain, which is named corp, to use this proxy server. The first time that a developer from that domain performs a get operation, Team Foundation Server will redirect all requests from that developer to the specified proxy.

    c:\projects>tf proxy /add http://server:8081 /default:site /site:corp /collection:http://tfsserver:8080/

## See Also

#### Reference

[Command-Line Syntax (Version Control)](https://msdn.microsoft.com/library/56f7w6be)

#### Other Resources

[Tf Command-Line Utility Commands](https://msdn.microsoft.com/library/z51z7zy0)
