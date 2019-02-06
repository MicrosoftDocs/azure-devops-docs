---
title: Add the Attachments control
titleSuffix: TFS
description: Add a file attachment control to a work item form for Team Foundation Server 
ms.prod: devops
ms.technology: devops-agile
ms.assetid: ff6ce2b2-1062-4b53-93ac-c226366281af
ms.author: kaelli
author: KathrynEE
ms.manager: jillfra
ms.topic: reference
monikerRange: '>= tfs-2013 <= tfs-2017'
ms.date: 05/10/2017  
---

# Add the Attachments control

[!INCLUDE [temp](../../_shared/version-tfs-2013-2017.md)]

> [!NOTE]  
> This topic applies to project customization for the On-premises XML process model using the old form layout. For the new form layout, see [WebLayout and Control elements](weblayout-xml-elements.md). For an overview of process models, see [Customize your work tracking experience](../customize-work.md).  

If you are designing a work item form from the ground up, you might want to add the control to attach files to the work item. In general, each work item form contains a tab that supports the attachment of files, such as an email thread, a document, an image, a log file, or another type of file.  
  
 The `Control` element `AttachmentsControl` `Type` attribute lets you enable users to see and manage the file attachments of a work item. By adding this control to a work item form, you can open, add, and remove file attachments. In the following example, a tab that is labeled "Attachments" is added to a work item form by using all the controls that are shown.  
  
**Attachments control**

```xml
<Tab Label="Attachments">  
      <Control Type="AttachmentsControl" LabelPosition="Top" />  
</Tab>  
```  
  
 ![Attach files to a work item](_img/procguid_attachment.png "ProcGuid_Attachment")  
  
  
 You must choose or attach a file before the buttons to open an attachment (![Open Attachment](_img/icon_openattachment.png "Icon_openAttachment")), save a copy (![Save](_img/icon_savewit.png "Icon_saveWIT") Save Copy), and delete an attachment (![Delete Item](_img/icon_deleteredxwit.png "Icon_deleteRedXWIT")) become available. For more information, see [Attachment control and fields](../../boards/queries/linking-attachments.md).  
  
 You can control the spacing and size of the attachment control by specifying the attributes in the following table.  
  
|Attribute|Description|Pattern value example|  
|---------------|-----------------|---------------------------|  
|`MinimumSize`|Optional. String of the form (*Width*, *Height)*. This value specifies the minimum size for the form itself. When the container control is smaller than this size, horizontal and vertical scrollbars appear.|(100,100)|  
|`Margin`|Optional. String of the form *(left, top, right, bottom)* that specifies, in pixels, the amount of space around the control and between the control and its neighbors. You can vary the amount of space on each side.|(2,0,2,0)|  
|`Padding`|Optional. String of the form *(left, top, right, bottom)* that specifies, in pixels, the amount of space around the outside border of the control and around the inside border. You can vary the amount of space on each side.|(2,0,2,0)|  
|`Label`|Optional. Specifies the visible text on the form that identifies the control.<br /><br /> You can leave the label unspecified when the attachment control is the only control on a tab. The tab label is sufficient to identify the control.|Specify a string of no more than 80 characters.|  
  
## Related articles  
- [Customize your work tracking experience](../customize-work.md)
- [Control](control-xml-element-reference.md)  
- [WebLayout and Control elements](weblayout-xml-elements.md)