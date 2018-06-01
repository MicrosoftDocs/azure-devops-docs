---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2013'
title: WIT Attachments | REST API Reference for Visual Studio Team Services and Team Foundation Server
description: Work with work item attachments programmatically using the REST APIs for Visual Studio Team Services and Team Foundation Server. 
ms.assetid: 55EF1F80-21BC-4497-9D17-1171C5F504BD
ms.manager: douge
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Work item attachments
[!INCLUDE [API_version](../_data/version.md)]

[!INCLUDE [GET_STARTED](../_data/get-started.md)]

## Upload an attachment
<a name="uploadanattachment" />

To attach a file to a work item, upload the attachment to the attachment store, then [attach it to the work item](./work-items.md#addanattachment).


>[!NOTE]  
For Team Services, you can add up to 100 attachments to a work item. Attempts to add more result in an error message upon saving the work item. 


```no-highlight
POST https://{instance}/DefaultCollection/_apis/wit/attachments?api-version={version}&filename={string}
```
```http
Content-Type: application/octet-stream
```
```
{ file-contents }
```

| Parameter | Type    | Notes	
|:----------|:--------|:------------------------------
| URL
| instance  | string  | [VS Team Services account](/integrate/get-started/rest/basics.md) ({account}.visualstudio.com) or [TFS server](/integrate/get-started/rest/basics.md) ({server:port}).
| Query
| api-version| string | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| filename  | string  | The name of the file in the attachment store (typically the same as the name of the source of the attachment).
| uploadType| enum{simple, chunked} | Default is simple. Use chunked upload type for uploading large files (>130 MB).
| Body
| file-contents | string | The contents of the file.

### A text file
[!code-REST [POST__wit_attachments_api-version-_version__fileName-_textFile__json](./_data/attachments/POST__wit_attachments_fileName-_textFile_.json)]

### Sample code
[View sample](./work-items.md#addanattachment) for a full example on uploading an attachment to a work item.

* [C# (UploadTextFile method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/WorkItemTracking/AttachmentsSample.cs#L23)
* [C# (UploadBinaryFile method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/WorkItemTracking/AttachmentsSample.cs#L49)


>[!div class="tabbedCodeSnippets" cs='C#' javascript='JavaScript']
>```javascript
>function UploadAttachment() {
>    var files = document.getElementById('fileselect').files;
>    
>    if (!files.length) {
>        alert('Please select a file!');
>        return;
>    }
>    
>    var file = files[0];
>    var filename = file.name;
>    var reader = new FileReader();
>    
>    reader.onloadend = function (evt) {
>        if (evt.target.readyState == FileReader.DONE) {
>            // Post file content to server
>            $.ajax({
>                url: "http://fabrikam.visualstudio.com/DefaultCollection/_apis/wit/attachments?filename=" + filename + "&api-version=1.0",
>                data: evt.target.result,
>                processData: false,
>                contentType: "application/octet-stream",
>                type: "POST"
>            });
>        }
>    };
>    
>    reader.readAsArrayBuffer(file);
>}
```
<!-- ENDSECTION --> 

### Chunked upload

On accounts with higher attachment upload limits (>130MB), you will need to used "chunked" upload to upload your file. First, register your chunked upload by doing the following:
 
```no-highlight
POST https://{account}.VisualStudio.com/DefaultCollection/_apis/wit/attachments?uploadType=chunked&fileName={filename}&api-version={version}
```

[!code-REST [POST__wit_attachments_api-version-_version__fileName_chunked_register__json](./_data/attachments/POST_wit_attachments_fileName_chunked_register.json)]

Next, upload your content to the attachment endpoint returned in the previous request via PUT.

```no-highlight
PUT https://{account}.VisualStudio.com/DefaultCollection/_apis/wit/attachments/{attachmentid}?uploadType=chunked&api-version={version}
```

Specify the byte range of the chunk using Content-Length. For example: "Content-Length": "bytes 0-39999/50000" for the first 40000 bytes of a 50000 byte file.

[!code-REST [POST__wit_attachments_api-version-_version__fileName_chunked_content1__json](./_data/attachments/POST_wit_attachments_fileName_chunked_content1.json)]

[!code-REST [POST__wit_attachments_api-version-_version__fileName_chunked_content2__json](./_data/attachments/POST_wit_attachments_fileName_chunked_content2.json)]

## Download an attachment

```no-highlight
GET https://{instance}/DefaultCollection/_apis/wit/attachments/{attachment}?api-version={version}
```

| Parameter  | Type    | Notes	
|:-----------|:--------|:------------------------------
| URL
| instance   | string  | [VS Team Services account](/integrate/get-started/rest/basics.md) ({account}.visualstudio.com) or [TFS server](/integrate/get-started/rest/basics.md) ({server:port}).
| attachment | GUID    | ID of the attachment to download.
| Query
| api-version| string  | [Version](../../concepts/rest-api-versioning.md) of the API to use.

####Sample request
```no-highlight
GET https://fabrikam-fiber-inc.VisualStudio.com/DefaultCollection/_apis/wit/attachments/fbb31ee5-740d-4254-9453-07c1bd189ead?api-version=1.0
```

####Response
Status code: 200
```json
{ file-contents }
```

#### Sample code

* [C# (DownloadAttachment method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/WorkItemTracking/AttachmentsSample.cs#L69)