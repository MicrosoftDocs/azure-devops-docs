---
title: Grant permissions for managing extensions in Visual Studio Team Foundation Server (TFS)
description: Grant users or groups permission to manage extensions for Team Foundation Server
ms.topic: get-started-article
ms.prod: vs-devops-alm
ms.technology: vs-devops-marketplace
ms.assetid: 5b0786ec-9f5e-419f-acef-c15d15985285
ms.manager: douge
ms.author: elbatk
ms.date: 9/27/2017
---

# Grant permissions to manage extensions

**TFS** 

To grant permissions for managing extensions to users or groups, use [TFSSecurity](../../tfs-server/command-line/tfssecurity-cmd.md#permissions) command-line tool.

0.	At the server level, create a group, for example, "TFS Extension Publishers".<br/>
<code>
tfssecurity /gcg "TFS Extension Publishers" "publishers who can manage extensions for the server" /server:ServerURL
</code>
<br/>
0. 	Grant access to the "TFS Extension Publishers" group to manage extensions.<br/>
<code>
tfssecurity /a+ Publisher "//" CreatePublisher n:"[TEAM FOUNDATION]\TFS Extension Publishers" allow /server:ServerURL<br/>
tfssecurity /a+ Publisher "//" PublishExtension n:"[TEAM FOUNDATION]\TFS Extension Publishers" allow /server:ServerURL<br/>
tfssecurity /a+ Publisher "//" UpdateExtension n:"[TEAM FOUNDATION]\TFS Extension Publishers" allow /server:ServerURL<br/>
tfssecurity /a+ Publisher "//" DeleteExtension n:"[TEAM FOUNDATION]\TFS Extension Publishers" allow /server:ServerURL
</code>
<br/>
For Team Foundation Server "15" RC2 or earlier, use this syntax:<br/>
<code>
tfssecurity /a+ Publisher "//" Create n:"[TEAM FOUNDATION]\TFS Extension Publishers" allow /server:ServerURL<br/>
tfssecurity /a+ Publisher "//" Publish n:"[TEAM FOUNDATION]\TFS Extension Publishers" allow /server:ServerURL<br/>
tfssecurity /a+ Publisher "//" Write n:"[TEAM FOUNDATION]\TFS Extension Publishers" allow /server:ServerURL
</code>
0. Add existing users and groups to the "TFS Extension Publishers" group.<br/>
<code>
tfssecurity /g+ "[TEAM FOUNDATION]\TFS Extension Publishers" n:User /server:ServerURL
</code>
<br/>
You can add users later to "TFS Extension Publishers". This is a server-level permission, 
so updating and deleting an extension will affect all the team project collections that use the extension.