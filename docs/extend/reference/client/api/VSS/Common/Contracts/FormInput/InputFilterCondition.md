---
title: VSS/Common/Contracts/FormInput InputFilterCondition API | Extensions for Azure DevOps Services
description: An expression which can be applied to filter a list of subscription inputs
ms.assetid: 100e189f-71b9-6cf6-a2eb-066c90596283
ms.prod: devops
ms.technology: devops-ecosystem
generated: true
ms.manager: jillfra
author: elbatk
ms.topic: article
ms.author: elbatk
ms.date: 08/04/2016
---

# InputFilterCondition

Module path: `VSS/Common/Contracts/FormInput`


### Members

* `caseSensitive`: boolean. Whether or not to do a case sensitive match

* `inputId`: string. The ID of the input to filter on

* `inputValue`: string. The &quot;expected&quot; input value to compare with the actual input value

* `operator`: [InputFilterOperator](../../../../VSS/Common/Contracts/FormInput/InputFilterOperator.md). The operator applied between the expected and actual input value

