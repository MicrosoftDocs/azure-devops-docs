---
author: ckanyika
ms.author: ckanyika
ms.date: 11/1/2024
ms.topic: include
---

### Commit-less builds supported for dependency scanning 

To submit results successfully for dependency scanning, we previously required a build with a new commit. Now, all scans regardless of commit diff will have any detected components submitted and analyzed for potential vulnerabilities. 

### File previews and annotations supported for scans with CodeQL sourcesFolder variable

If you had the sourcesFolder variable specified for your CodeQL builds, file previews and pull request annotations may not have appeared as anticipated. Advanced Security will now properly render the file preview when you click into an alert, as well as place annotations on the correct file path.