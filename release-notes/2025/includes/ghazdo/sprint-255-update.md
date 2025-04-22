---
author: ckanyika
ms.author: ckanyika
ms.date: 4/23/2025
ms.topic: include
---

### Advanced Security now accepts results with URI locations 

Previously, Advanced Security rejected SARIF files that contained results with URIs listed as the alert location. This typically affected container scanning tools and dynamic application scanning tools. Advanced Security can now conditionally accept and display findings from these tools.

To enable this feature, set the pipeline variable `advancedsecurity.publish.allowmissingpartialfingerprints`.  

trigger: none

variables:
  advancedsecurity.publish.allowmissingpartialfingerprints: true

```
jobs:
  - job: "AdvancedSecurityPublish"
    displayName: "🛡 Publish ZAP SARIF"
    steps:
      - task: AdvancedSecurity-Publish@1
        displayName: Publish to ZAP SARIF to Advanced Security
        inputs:
          SarifsInputDirectory: $(Build.SourcesDirectory)/sarifs/
```