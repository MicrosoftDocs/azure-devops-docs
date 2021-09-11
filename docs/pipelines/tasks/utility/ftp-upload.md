---
title: FTP Upload task
description: Upload files to a remote machine using the File Transfer Protocol (FTP), or securely with FTPS on Azure Pipelines and Team Foundation Server (TFS)
ms.topic: reference
ms.assetid: 83301736-4DC7-4581-9AFD-4678BA0D3659
ms.custom: seodec18
ms.author: vijayma
author: vijayma
ms.date: 01/01/2020
monikerRange: '>= tfs-2017'
---

# FTP Upload task

[!INCLUDE [temp](../../includes/version-tfs-2017-rtm.md)]

Use this task to upload files to a remote machine using the File Transfer Protocol (FTP), or securely with FTPS.

::: moniker range="<= tfs-2018"

[!INCLUDE [temp](../../includes/concept-rename-note.md)]

::: moniker-end

## Demands

None

::: moniker range="azure-devops"

## YAML snippet

[!INCLUDE [temp](../includes/yaml/FtpUploadV2.md)]

::: moniker-end

## Arguments

|Argument|Description|
|--- |--- |
| `credsType` <br/>Authentication Method | (Required) Use FTP service connection or enter connection credentials <br/>Default value: serviceEndpoint <br/>Argument aliases: `credentialsOption`|
| `serverEndpoint` <br/>FTP Service Connection| (Required) Select the service connection for your FTP server.  To create one, click the Manage link and create a new Generic service connection, enter the FTP server URL for the server URL, Example, ftp://server.example.com, and required credentials. <br/>Secure connections will always be made regardless of the specified protocol (**ftp://** or **ftps://**) if the target server supports FTPS.  To allow only secure connections, use the **ftps://** protocol. For example, **ftps://server.example.com**.  Connections to servers not supporting FTPS will fail if **ftps://** is specified.|
| `serverUrl` <br/> Server URL | (Required) |
| `username` <br/> Username | (Required) |
| `password` <br/> Password | (Required) |
| `rootFolder` <br/> Root folder | (Required) The source folder to upload files from <br/>Argument aliases: `rootDirectory`|
| `filePatterns` <br/> File patterns | (Required) File paths or patterns of the files to upload.  Supports multiple lines of minimatch patterns. [More Information](./extract-files.md).<br/>Default value: **|
| `remotePath` <br/> Remote directory | (Required) Upload files to this directory on the remote FTP server. <br/>Default value: /upload/$(Build.BuildId)/ <br/>Argument aliases: `remoteDirectory`|
| `enableUtf8` <br/> Enable UTF8 support | (Optional) Enables UTF-8 support for the FTP connection ('OPTS UTF8 ON') <br/>Default value: false|
| `clean` <br/> Delete remote directory | (Required) Delete the remote directory including its contents before uploading <br/>Default value: false|
| `cleanContents` <br/>Clear remote directory contents | (Required) Recursively delete all contents of the remote directory before uploading. The existing directory will not be deleted. For better performance, consider using `Delete remote directory` instead <br/>Default value: false|
| `preservePaths` <br/> Preserve file paths | (Required) If selected, the relative local directory structure is recreated under the remote directory where files are uploaded.  Otherwise, files are uploaded directly to the remote directory without creating additional subdirectories. <br/>For example, suppose your source folder is: **/home/user/source/** and contains the file: **foo/bar/foobar.txt**, and your remote directory is: **/uploads/**. <br/>If selected, the file is uploaded to: **/uploads/foo/bar/foobar.txt**.  Otherwise, to: **/uploads/foobar.txt** <br/>Default value: false|
| `trustSSL` <br/> Trust server certificate | (Required) Selecting this option results in the FTP server's SSL certificate being trusted with ftps://, even if it is self-signed or cannot be validated by a Certificate Authority (CA). <br/>Default value: false|
| `customCmds` <br/>FTP Commands | (Optional) Optional FTP Commands that will be sent to the remote FTP server upon connection |

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.

## FAQ

<!-- BEGINSECTION class="md-qanda" -->

[!INCLUDE [include](../includes/qa-minimatch.md)]

[!INCLUDE [temp](../includes/build-step-common-qa.md)]

[!INCLUDE [temp](../../includes/qa-agents.md)]

::: moniker range="<= tfs-2018"

[!INCLUDE [temp](../../includes/qa-versions.md)]

::: moniker-end

<!-- ENDSECTION -->