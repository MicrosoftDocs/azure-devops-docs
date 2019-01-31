---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2015 < azure-devops'
title: WIT Attachments | REST API Reference for Team Foundation Server
description: Work with work item attachments programmatically using the REST APIs for Team Foundation Server. 
ms.assetid: 55EF1F80-21BC-4497-9D17-1171C5F504BD
ms.manager: jillfra
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Work item attachments

[!INCLUDE [azure-devops](../_data/azure-devops-message.md)]

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
| instance  | string  | TFS server name ({server:port}).
| Query
| api-version| string | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| filename  | string  | The name of the file in the attachment store (typically the same as the name of the source of the attachment).
| uploadType| enum{simple, chunked} | Default is simple. Use chunked upload type for uploading large files (>130 MB).
| Body
| file-contents | string | The contents of the file.

### A text file
#### Sample request

```
POST https://mytfsserver/DefaultCollection/_apis/wit/attachments?fileName=textAsFileAttachment.txt&api-version=1.0
```
```json
"User text content to upload"
```

#### Sample response

```json
{
  "id": "6b2266bf-a155-4582-a475-ca4da68193ef",
  "url": "https://mytfsserver/DefaultCollection/_apis/wit/attachments/6b2266bf-a155-4582-a475-ca4da68193ef?fileName=textAsFileAttachment.txt"
}
```


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
>```
<!-- ENDSECTION --> 

### Chunked upload

On accounts with higher attachment upload limits (>130MB), you will need to used "chunked" upload to upload your file. First, register your chunked upload by doing the following:
 
```no-highlight
POST https://{account}.VisualStudio.com/DefaultCollection/_apis/wit/attachments?uploadType=chunked&fileName={filename}&api-version={version}
```

#### Sample request

```
POST https://mytfsserver/DefaultCollection/_apis/wit/attachments?uploadType=chunked&fileName=largefile.zip&api-version=2.0
```

#### Sample response

```json
{
  "id": "de471719-27b2-40ab-ac40-4890f3eb1443",
  "url": "https://mytfsserver/DefaultCollection/_apis/wit/attachments/de471719-27b2-40ab-ac40-4890f3eb1443?fileName=test.txt"
}
```


Next, upload your content to the attachment endpoint returned in the previous request via PUT.

```no-highlight
PUT https://{account}.VisualStudio.com/DefaultCollection/_apis/wit/attachments/{attachmentid}?uploadType=chunked&api-version={version}
```

Specify the byte range of the chunk using Content-Length. For example: "Content-Length": "bytes 0-39999/50000" for the first 40000 bytes of a 50000 byte file.

#### Sample request

```
POST https://mytfsserver/DefaultCollection/_apis/wit/attachments/de471719-27b2-40ab-ac40-4890f3eb1443?uploadType=chunked&api-version=2.0
```
```json
"{zip content chunk 1}"
```

#### Sample response

```json
{
  "id": "de471719-27b2-40ab-ac40-4890f3eb1443",
  "url": "https://mytfsserver/DefaultCollection/_apis/wit/attachments/de471719-27b2-40ab-ac40-4890f3eb1443"
}
```


#### Sample request

```
PUT https://mytfsserver/DefaultCollection/_apis/wit/attachments/de471719-27b2-40ab-ac40-4890f3eb1443?uploadType=chunked&api-version=2.0
```
```json
"{zip content chunk 2}"
```

#### Sample response

```json
{
  "id": "de471719-27b2-40ab-ac40-4890f3eb1443",
  "url": "https://mytfsserver/DefaultCollection/_apis/wit/attachments/de471719-27b2-40ab-ac40-4890f3eb1443"
}
```


## Download an attachment

```no-highlight
GET https://{instance}/DefaultCollection/_apis/wit/attachments/{attachment}?api-version={version}
```

| Parameter  | Type    | Notes	
|:-----------|:--------|:------------------------------
| URL
| instance   | string  | TFS server name ({server:port}).
| attachment | GUID    | ID of the attachment to download.
| Query
| api-version| string  | [Version](../../concepts/rest-api-versioning.md) of the API to use.

####Sample request
```no-highlight
GET https://fabrikam-fiber-inc:8080/DefaultCollection/_apis/wit/attachments/fbb31ee5-740d-4254-9453-07c1bd189ead?api-version=1.0
```

####Response
Status code: 200
```json
{ file-contents }
```

#### Sample code

* [C# (DownloadAttachment method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/WorkItemTracking/AttachmentsSample.cs#L69)