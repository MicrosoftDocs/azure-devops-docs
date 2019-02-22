---
title: Troubleshoot process configuration issues
titleSuffix: Azure DevOps & TFS 
description: Resolve process configuration issues in Azure DevOps Services & Team Foundation Server
ms.technology: devops-agile
ms.prod: devops
ms.assetid:  
ms.manager: jillfra
ms.author: kaelliauthor: KathrynEE
ms.topic: troubleshooting
ms.date: 09/29/2017  
---


# Resolve process configuration issues

The ProcessConfiguration.xml definition file must conform to the syntax and rules described in [ProcessConfiguration XML element reference](./xml/process-configuration-xml-element.md).   

## Error TF400917  

The following error indicates that there is a misconfiguration in either your ProcessConfiguration or Categories definition files. 

```TF400917: The current configuration is not valid for this feature. This feature cannot be used until you correct the configuration.```

To resolve the error, review the information provided in [Add bugs or other work item types to backlogs or boards](add-wits-to-backlogs-and-boards.md) to make sure that you have configured your XML definition files correctly.     

