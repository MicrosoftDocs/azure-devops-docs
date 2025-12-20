---
author: gloridelmorales
ms.author: glmorale
ms.technology: devops-release-notes
ms.date: 12/19/2025
ms.topic: include
---

### Secret asset metadata generally available via API

This feature adds richer context and classification to detected secrets, helping teams more quickly understand risk and prioritize remediation. Additional metadata is available via the [Alerts API](https://learn.microsoft.com/rest/api/azure/devops/advancedsecurity/alerts/get), with upcoming UI enhancements planned to surface this information directly in the product experience.

### Code scanning now supports Rust

With GitHub Advanced Security, you can now scan Rust code using CodeQL. Rust is supported with CodeQL version 2.21.1+ when managing your own CodeQL toolchain, or with Advanced Security task version 1.1.137+, enabling security scanning for Rust projects. Buildless scanning (`buildtype: none`) for Rust is also available with CodeQL 2.23.3+, streamlining the analysis process for Rust codebases.
For more details, see the [Rust is now generally available blog](https://github.blog/changelog/2025-10-14-codeql-scanning-rust-and-c-c-without-builds-is-now-generally-available/#rust).

### Expanded CodeQL buildless scanning for C/C++

CodeQL now supports buildless scanning (`buildtype: none`) for C/C++ projects, allowing teams to analyze code without requiring a full build. This is available with CodeQL version 2.21.4+ (when managing your own CodeQL toolchain) or Advanced Security task version 1.1.137+. Buildless scanning reduces setup complexity and shortens scan times while maintaining analysis coverage. For setup details, see [Configure code scanning](/azure/devops/repos/security/github-advanced-security-code-scanning?view=azure-devops#code-scanning-build-mode-customization).