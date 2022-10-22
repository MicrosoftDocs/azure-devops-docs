---
author: gloridelmorales
ms.author: glmorale
ms.date: 3/29/2022
ms.topic: include
---

### Remove the ability to download a deleted attachment from work item history

We fixed a small issue where users were able to download attachments from the work item history, even after the attachment was removed from the form. Now, once the attachment is removed, it cannot be downloaded from the history, nor will the download URL be available from the REST API response.