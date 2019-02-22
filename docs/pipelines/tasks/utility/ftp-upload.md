---
title: FTP Upload task
description: Upload files to a remote machine using the File Transfer Protocol (FTP), or securely with FTPS on Azure Pipelines and Team Foundation Server (TFS)
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: 83301736-4DC7-4581-9AFD-4678BA0D3659
ms.manager: jillfra
ms.custom: seodec18
ms.author: alewis
author: andyjlewis
ms.date: 12/07/2018
monikerRange: '>= tfs-2017'
---

# FTP Upload task

[!INCLUDE [temp](../../_shared/version-tfs-2017-rtm.md)]

Use this task in a build or release pipeline to upload files to a remote machine using the File Transfer Protocol (FTP), or securely with FTPS.

::: moniker range="<= tfs-2018"
[!INCLUDE [temp](../../_shared/concept-rename-note.md)]
::: moniker-end

## Demands

None

::: moniker range="azure-devops"
## YAML snippet
[!INCLUDE [temp](../_shared/yaml/FtpUploadV1.md)]
::: moniker-end

## Arguments

<table>
<thead>
<tr>
<th>Argument</th>
<th>Description</th>
</tr>
</thead>
<tr>
<td>FTP service connection</td>
<td>
<p>Select the service connection for your FTP server.  To create one, click the Manage link and create a new Generic service connection, enter the FTP server URL for the server URL, e.g. <b>`ftp://server.example.com`</b>, and required credentials.<p>Secure connections will always be made regardless of the specified protocol (<b>`ftp://`</b> or <b>`ftps://`</b>) if the target server supports FTPS.  To allow only secure connections, use the <b>`ftps://`</b> protocol, e.g. <b>`ftps://server.example.com`</b>.  Connections to servers not supporting FTPS will fail if <b>`ftps://`</b> is specified.</p>
</td>
</tr>
<tr>
<td>Source folder</td>
<td>The source folder to upload files from. The default file path is relative from the root folder of the repo (same as if you had specified ```$(Build.SourcesDirectory)```).</td>
</tr>
<tr>
<td>File patterns</td>
<td>File paths or patterns of the files to upload.  Supports multiple lines of match patterns.  To upload the entire folder content recursively, specify <b>`**`</b>.</td>
</tr>
<tr>
<td>Remote directory</td>
<td>Upload files to this directory on the remote FTP server.</td>
</tr>
<tr>
<td>Clean remote directory</td>
<td>Recursively delete all contents of the remote directory before uploading.</td>
</tr>
<tr>
<td>Overwrite</td>
<td>Overwrite existing files in the remote directory.</td>
</tr>
<tr>
<td>Trust server certificate</td>
<td>Selecting this option results in the FTP server's SSL certificate being trusted with ftps://, even if it is self-signed or cannot be validated by a Certificate Authority (CA).</td>
</tr>
[!INCLUDE [temp](../_shared/control-options-arguments.md)]
</table>

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.

## Q & A

<!-- BEGINSECTION class="md-qanda" -->

[!INCLUDE [include](../_shared/qa-minimatch.md)]

[!INCLUDE [temp](../_shared/build-step-common-qa.md)]

[!INCLUDE [temp](../../_shared/qa-agents.md)]

::: moniker range="<= tfs-2018"
[!INCLUDE [temp](../../_shared/qa-versions.md)]
::: moniker-end

<!-- ENDSECTION -->
