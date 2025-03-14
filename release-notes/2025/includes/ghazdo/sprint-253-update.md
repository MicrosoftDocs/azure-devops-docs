---
author: ckanyika
ms.author: ckanyika
ms.date: 3/17/2025
ms.topic: include
---

### Security overview risk page enhanced with new columns and filtering options

Under the "Risk" tab, you can now find additional columns for new, fixed, and dismissed security alerts across your organization. We've also added the ability to filter by project, tool (secrets, dependencies, or code scanning results), and a time-based filter to add bounds to your search. 

Additionally, when a filter is applied, it is added as URL query parameter. This is so you can share the pre-filtered view with others in your organization.

> [!div class="mx-imgBorder"]
> [![Screenshot of Security overview risk page.](../../media/253-ghazdo-01.png "Screenshot of Security overview risk page")](../../media/253-ghazdo-01.png#lightbox)

### pnpm 9 support comes to Advanced Security dependency scanning

Ahead of the end-of-life date for pnpm v8 at the end of April, the next update for dependency scanning will add support for scanning with pnpm v9. This addresses the [Developer Community](https://developercommunity.visualstudio.com/t/AdvancedSecurity-Dependency-Scanning1-T/10743452) request for pnpm v9 support.

### Multi-repository publishing scenarios supported for Advanced Security

When one repository houses the pipeline definition and another repository contains the source code to be scanned by Advanced Security, the results were processed and submitted to the incorrect repository. Rather than publishing results to the repository containing the source code, alerts would show up in the repository where the pipeline was defined. 

Now, both dependency scanning and code scanning will properly route alerts to the repository containing the source code scanned for analysis for multi-repository scenarios. 

Set the pipeline environment variable `advancedsecurity.publish.repository.infer: true` to infer the repository to publish to from the repository in the working directory. Alternatively, if you do not explicitly checkout a repository or use an alias to checkout your repository, utilize the variable `advancedsecurity.publish.repository: $[ convertToJson(resources.repositories['YourRepositoryAlias']) ]` instead.

> YAML code snippet

```yaml
    trigger:
  - main

resources:
  repositories:
    - repository: BicepGoat
      type: git
      name: BicepGoat
      ref: refs/heads/main
      trigger:
        - main

jobs:
  # Explicit - `advancedsecurity.publish.repository` explicitly defines the repository to submit SARIF to.
  - job: "AdvancedSecurityCodeScanningExplicit"
    displayName: "🛡 Infrastructure-as-Code Scanning (Explicit)"
    variables:
      advancedsecurity.publish.repository: $[ convertToJson(resources.repositories['BicepGoat']) ]
    steps:
      - checkout: BicepGoat
      - task: TemplateAnalyzerSarif@1
        displayName: Scan with Template Analyzer
      - task: AdvancedSecurity-Publish@1
        displayName: Publish to IaC Scanning Results to Advanced Security


  # Infer - `advancedsecurity.publish.repository.infer` specifies that the `AdvancedSecurity-Publish` must
  # infer repository to submit SARIF to from the working directory on the build agent.
  - job: "AdvancedSecurityCodeScanningInfer"
    displayName: "🛡 Infrastructure-as-Code Scanning (Infer)"
    variables:
      advancedsecurity.publish.repository.infer: true
    steps:
      - checkout: BicepGoat
      - task: TemplateAnalyzerSarif@1
        displayName: Scan with Template Analyzer
      - task: AdvancedSecurity-Publish@1
        displayName: Publish to IaC Scanning Results to Advanced Security
```

### Service hooks for Advanced Security alerts (preview) 

You can now configure service hooks for Advanced Security alert events, including new alert created, alert data changed, and alert state changed. Just like other repository events, you can filter by repository and branch. For alerts specifically, you can filter by alert type (dependencies, code scanning, or secrets) and alert severity.

> [!div class="mx-imgBorder"]
> [![Screenshot of  filter by alert type .](../../media/253-ghazdo-02.png "Screenshot of S filter by alert type ")](../../media/253-ghazdo-02.png#lightbox)

To participate in the preview, fill out the [preview interest form](https://aka.ms/ghazdo-service-hooks-preview) or send us an [email](mailto:ghazdopreview@microsoft.com)!