---
title: cURL Upload Files task
description: Use cURL to upload files with supported protocols in Azure Pipelines and Team Foundation Server (TFS)
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: E231D775-2BCE-4DFA-8C20-C17F83ECD700
ms.manager: jillfra
ms.custom: seodec18
ms.author: alewis
author: andyjlewis
ms.date: 12/07/2018
monikerRange: '>= tfs-2015'
---

# cURL Upload Files task

[!INCLUDE [temp](../../_shared/version-tfs-2015-rtm.md)]

Use this task in a build or release pipeline to use [cURL](http://curl.haxx.se/) to upload files with supported protocols
such as FTP, FTPS, SFTP, HTTP, and more.

## Demands

curl

::: moniker range="> tfs-2018"
## YAML snippet
[!INCLUDE [temp](../_shared/yaml/CUrlUploaderV2.md)]
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
<td>Files</td>
<td>
<p>If you want to upload a single file, click the <strong>...</strong> button and select the file.</p>
<p>If you want to upload multiple files, specify a minimatch pattern filter. For example, specify `**\*.zip` to upload all ZIP files in all sub-folders.</p>
</td>
</tr>
<tr>
<td>Username</td>
<td>
Specify the username for server authentication.
</td>
</tr>
<tr>
<td>Password</td>
<td>
<p>Specify the password for server authentication.</p>
<blockquote><strong>Important: </strong> Use a [secret variable](../../build/variables.md) to avoid exposing this value.</blockquote>
</td>
</tr>
<tr>
<td>URL</td>
<td>
<p>URL to the location where you want to upload the files. If you are uploading to a folder, make sure to end the argument with a trailing slash.</p>
<p>Acceptable URL protocols include `DICT://`, `FILE://`, `FTP://`, `FTPS://`, `GOPHER://`, `HTTP://`, `HTTPS://`, `IMAP://`, `IMAPS://`, `LDAP://`, `LDAPS://`, `POP3://`, `POP3S://`, `RTMP://`, `RTSP://`, `SCP://`, `SFTP://`, `SMTP://`, `SMTPS://`, `TELNET://`, and `TFTP://`.</p>
</td>
</tr>
<tr>
<td>Optional Arguments</td>
<td>
Arguments to pass to cURL.
</td>
</tr>
<tr>
<th style="text-align: center" colspan="2">Advanced</th>
</tr>
<tr>
<td>Redirect Standard Error to Standard Out</td>
<td>
<p>In most cases you should leave this selected.</p>
<p>Select if you want to add **--stderr -** as an argument to cURL. Otherwise, if you clear this check box, cURL will write its progress bar to stderr, which is interpreted by the build pipeline as error output, which could cause the build to fail.</p>
</td>
</tr>
[!INCLUDE [temp](../_shared/control-options-arguments.md)]
</table>

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.

## Q & A
<!-- BEGINSECTION class="md-qanda" -->

[!INCLUDE [include](../_shared/qa-minimatch.md)]

### Where can I learn FTP commands?

[List of raw FTP commands](http://www.nsftools.com/tips/RawFTP.htm)

[!INCLUDE [temp](../../_shared/qa-agents.md)]

::: moniker range="< azure-devops"
[!INCLUDE [temp](../../_shared/qa-versions.md)]
::: moniker-end

<!-- ENDSECTION -->
