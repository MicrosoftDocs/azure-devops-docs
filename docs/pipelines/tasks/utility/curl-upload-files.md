---
title: cURL Upload Files task
description: Use cURL to upload files with supported protocols in Azure Pipelines and Team Foundation Server (TFS)
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: E231D775-2BCE-4DFA-8C20-C17F83ECD700
ms.manager: jillfra
ms.custom: seodec18
ms.author: dastahel
author: davidstaheli
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
<p>If you want to upload multiple files, specify a minimatch pattern filter. For example, specify <code>***.zip</code> to upload all ZIP files in all sub-folders.</p>
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
<blockquote><strong>Important: </strong> Use a <a href="../../build/variables.md" data-raw-source="[secret variable](../../build/variables.md)">secret variable</a> to avoid exposing this value.</blockquote>
</td>
</tr>
<tr>
<td>URL</td>
<td>
<p>URL to the location where you want to upload the files. If you are uploading to a folder, make sure to end the argument with a trailing slash.</p>
<p>Acceptable URL protocols include <code>DICT://</code>, <code>FILE://</code>, <code>FTP://</code>, <code>FTPS://</code>, <code>GOPHER://</code>, <code>HTTP://</code>, <code>HTTPS://</code>, <code>IMAP://</code>, <code>IMAPS://</code>, <code>LDAP://</code>, <code>LDAPS://</code>, <code>POP3://</code>, <code>POP3S://</code>, <code>RTMP://</code>, <code>RTSP://</code>, <code>SCP://</code>, <code>SFTP://</code>, <code>SMTP://</code>, <code>SMTPS://</code>, <code>TELNET://</code>, and <code>TFTP://</code>.</p>
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
<p>Select if you want to add <strong>--stderr -</strong> as an argument to cURL. Otherwise, if you clear this check box, cURL will write its progress bar to stderr, which is interpreted by the build pipeline as error output, which could cause the build to fail.</p>
</td>
</tr>


<tr>
<th style="text-align: center" colspan="2"><a href="~/pipelines/process/tasks.md#controloptions" data-raw-source="[Control options](../../process/tasks.md#controloptions)">Control options</a></th>
</tr>

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
