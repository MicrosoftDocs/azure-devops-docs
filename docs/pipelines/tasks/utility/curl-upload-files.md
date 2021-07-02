---
title: cURL Upload Files task
description: Use cURL to upload files with supported protocols in Azure Pipelines and Team Foundation Server (TFS)
ms.topic: reference
ms.assetid: E231D775-2BCE-4DFA-8C20-C17F83ECD700
ms.custom: seodec18
ms.author: vijayma
author: vijayma
ms.date: 02/12/2020
monikerRange: '>= tfs-2015'
---

# cURL Upload Files task

[!INCLUDE [temp](../../includes/version-tfs-2015-rtm.md)]

Use this task to use [cURL](https://curl.haxx.se/) to upload files with supported protocols
such as FTP, FTPS, SFTP, HTTP, and more.

## Demands

curl

::: moniker range="> tfs-2018"

## YAML snippet

[!INCLUDE [temp](../includes/yaml/CUrlUploaderV2.md)]

::: moniker-end

## Arguments

|Argument|Description|
|--- |--- |
|`files`<br/>Files|(Required) File(s) to be uploaded. Wildcards can be used. <br/>For example, **`**/*.zip`** for all ZIP files in all subfolders|
|authType<br/>Authentication Method| Default value: `ServiceEndpoint`|
|`serviceEndpoint`<br/>Service Connection| (Required) The service connection with the credentials for the server authentication. <br/>Use the Generic service connection type for the service connection| 
|`username`<br/>Username|(Optional) Specify the username for server authentication.|
|`password`<br/>Password|(Optional) Specify the password for server authentication. <br/>**Important**: Use a [secret variable](../../build/variables.md) to avoid exposing this value|
|`url`<br/>URL|(Required) URL to the location where you want to upload the files. <br/>If you are uploading to a folder, make sure to end the argument with a trailing slash. <br/><br/>Acceptable URL protocols include `DICT://, FILE://, FTP://, FTPS://, GOPHER://, HTTP://, HTTPS://, IMAP://, IMAPS://, LDAP://, LDAPS://, POP3://, POP3S://, RTMP://, RTSP://, SCP://, SFTP://, SMTP://, SMTPS://, TELNET://,` and `TFTP://`|
|`remotePath`<br/>Remote Directory|(Optional) If supplied, this is the sub-folder on the remote server for the URL supplied in the credentials <br/>Default value: `upload/$(Build.BuildId)/`|
|`options`<br/>Optional Arguments|(Optional) Arguments to pass to cURL.|
|`redirectStderr`<br/>Redirect Standard Error to Standard Out|Adds **`--stderr -`** as an argument to cURL. By default, cURL writes its progress bar to stderr, which is interpreted by the build as error output. Enabling this checkbox suppresses that behavior <br/>Default value: `true`|

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.

## FAQ
<!-- BEGINSECTION class="md-qanda" -->

[!INCLUDE [include](../includes/qa-minimatch.md)]

### Where can I learn FTP commands?

[List of raw FTP commands](https://www.nsftools.com/tips/RawFTP.htm)

[!INCLUDE [temp](../../includes/qa-agents.md)]

::: moniker range="< azure-devops"

[!INCLUDE [temp](../../includes/qa-versions.md)]

::: moniker-end

<!-- ENDSECTION -->
