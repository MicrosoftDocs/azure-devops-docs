---
author: bjanousek
ms.author: bjanousek
ms.date: 8/23/2023
ms.topic: include
---

### Blobless and treeless filter support

Azure DevOps now support two additional filtering while cloning/fetching. These are:
`--filter:blob=none`
and
`--filter:tree:0`
The first option (blobless clone) is best used for regular development while the second option (treeless clone) fits better for those case where you discard of the clone after, for example running a build.
