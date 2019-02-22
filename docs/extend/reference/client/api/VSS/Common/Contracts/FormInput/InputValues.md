---
title: VSS/Common/Contracts/FormInput InputValues API | Extensions for Azure DevOps Services
description: Information about the possible/allowed values for a given subscription input
ms.assetid: 628a9dff-b218-4f25-71ad-239e7090a07e
ms.prod: devops
ms.technology: devops-ecosystem
generated: true
ms.manager: jillfra
author: elbatk
ms.topic: article
ms.author: elbatk
ms.date: 08/04/2016
---

# InputValues

Module path: `VSS/Common/Contracts/FormInput`


### Members

* `defaultValue`: string. The default value to use for this input

* `error`: [InputValuesError](../../../../VSS/Common/Contracts/FormInput/InputValuesError.md). Errors encountered while computing dynamic values.

* `inputId`: string. The ID of the input

* `isDisabled`: boolean. Should this input be disabled

* `isLimitedToPossibleValues`: boolean. Should the value be restricted to one of the values in the PossibleValues (True) or are the values in PossibleValues just a suggestion (False)

* `isReadOnly`: boolean. Should this input be made read-only

* `possibleValues`: [InputValue](../../../../VSS/Common/Contracts/FormInput/InputValue.md)[]. Possible values that this input can take

