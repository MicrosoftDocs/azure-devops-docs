---
title: Track information and changes for review meetings in Azure Boards 
titleSuffix: Azure Boards
description: Learn about the fields used to track review meetings in the CMMI process for Azure Boards and Azure DevOps.
ms.service: azure-devops-boards
ms.assetid: 35b045a4-1332-499d-97a6-f7797033990d
ms.topic: conceptual
ms.author: kaelli
author: KathrynEE
monikerRange: '<= azure-devops'
ms.date: 10/27/2021
---

# Review meeting field reference

[!INCLUDE [version-lt-eq-azure-devops](../../../../includes/version-lt-eq-azure-devops.md)]

The following fields track information and changes for review meetings. Your team can specify this kind of information by using the Review type of work item that is provided with the [CMMI process](../cmmi-process.md).  
  
 None of these fields are reportable or indexed. For more information about data types, see [Work item fields and attributes](../../work-item-fields.md).  
  

<a id="fields" />

> [!div class="mx-tdCol2BreakAll"]
> |**Field name**|**Description**|**Data type**|  
> |--------------------|---------------------|------------------------ 
> |**Purpose**|The purpose and focus of the meeting.<br/><br/>Reference name=Microsoft.VSTS.CMMI.Purpose|HTML|  
> |**Comments**|Additional information that you want to record.<br/><br/>Reference name=Microsoft.VSTS.CMMI.Comments|HTML|  
> |**Minutes**|The details of what the team discussed and agreed upon during the meeting. You can use this field to record what the team reviewed, what criteria the team applied, and what problems the team identified.<br/><br/>Reference name=Microsoft.VSTS.CMMI.Minutes|HTML|  
> |**Meeting Type**|The meeting venue. You can specify one of the following values:<br/>- Meeting<br/>- Offline<br/><br/>Reference name=Microsoft.VSTS.CMMI.MeetingType|String|  
> |**Called Date**|The date and time when the meeting is scheduled.<br/><br/>Reference name=Microsoft.VSTS.CMMI.CalledDate|DateTime|  
> |**Called By**|The name of the team member who scheduled the meeting.<br/><br/>Reference name=Microsoft.VSTS.CMMI.CalledBy|String|  
> |**Required Attendee 1**<br />**&hellip;**<br />**Required Attendee 8**|The names of each team member who is required to attend the meeting.<br/><br/>Reference name=Microsoft.VSTS.CMMI.RequiredAttendee1 &hellip; Microsoft.VSTS.CMMI.RequiredAttendee8|String|  
> |**Optional Attendee 1**<br />**&hellip;**<br />**Optional Attendee 8**|The name of each team member who is invited but not required to attend the meeting.<br/><br/>Reference name=Microsoft.VSTS.CMMI.OptionalAttendee1 &hellip; Microsoft.VSTS.CMMI.OptionalAttendee8|String|  
> |**Actual Attendee 1**<br />**&hellip;**<br />**Actual Attendee 8**|The name of each team member who attended the meeting.<br/><br/>Reference name=Microsoft.VSTS.CMMI.ActualAttendee1 &hellip; Microsoft.VSTS.CMMI.ActualAttendee8|String|  
  
## Related articles
 [Index of work item fields](../work-item-field.md)