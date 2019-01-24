---
title: VSS/Common/Contracts/FormInput InputDescriptor API | Extensions for Azure DevOps Services
description: Describes an input for subscriptions.
ms.assetid: 95830c27-9577-a67a-13e6-8291b57d93c4
ms.prod: devops
ms.technology: devops-ecosystem
generated: true
ms.manager: jillfra
author: elbatk
ms.topic: article
ms.author: elbatk
ms.date: 08/04/2016
---

# InputDescriptor

Module path: `VSS/Common/Contracts/FormInput`


### Members

* `dependencyInputIds`: string[]. The IDs of all inputs that the value of this input is dependent on.

* `description`: string. Description of what this input is used for

* `groupName`: string. The group localized name to which this input belongs and can be shown as a header for the container that will include all the inputs in the group.

* `hasDynamicValueInformation`: boolean. If true, the value information for this input is dynamic and should be fetched when the value of dependency inputs change.

* `id`: string. Identifier for the subscription input

* `inputMode`: [InputMode](../../../../VSS/Common/Contracts/FormInput/InputMode.md). Mode in which the value of this input should be entered

* `isConfidential`: boolean. Gets whether this input is confidential, such as for a password or application key

* `name`: string. Localized name which can be shown as a label for the subscription input

* `useInDefaultDescription`: boolean. Gets whether this input is included in the default generated action description.

* `validation`: [InputValidation](../../../../VSS/Common/Contracts/FormInput/InputValidation.md). Information to use to validate this input&#x27;s value

* `valueHint`: string. A hint for input value. It can be used in the UI as the input placeholder.

* `values`: [InputValues](../../../../VSS/Common/Contracts/FormInput/InputValues.md). Information about possible values for this input

