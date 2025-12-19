---
author: gloridelmorales
ms.author: glmorale
ms.technology: devops-release-notes
ms.date: 12/19/2025
ms.topic: include
---

### Secret asset metadata generally available via API

This feature provides additional context and classification for detected secrets, helping teams better understand and prioritize remediation efforts. You can see additional metadata through the [Alerts API](/azure/devops/advancedsecurity/alerts/get?view=azure-devops-rest-7.2), with additional UI updates to surface this information coming soon.

### Expanded CodeQL buildless support for C/C++

CodeQL now supports buildless scanning (`buildtype: none`) for C/C++ projects with CodeQL version 2.21.4 and later if managing your own CodeQL tool version, or Advanced Security task version `1.1.137` and later. Teams can analyze C++ codebases without requiring a full build, reducing setup complexity and scan times. For more information, see [Configure code scanning](/azure/devops/repos/security/github-advanced-security-code-scanning?view=azure-devops#code-scanning-build-mode-customization).

### Code scanning now supports Rust

With Advanced Security, you can now scan Rust code using CodeQL. CodeQL supports Rust with CodeQL version 2.21.1 and later if managing your own CodeQL tool version, or Advanced Security task version `1.1.137` and later, enabling security scanning for Rust projects. Buildless scanning (`buildtype: none`) for Rust is also available with CodeQL version 2.23.3 and later, streamlining the analysis process for Rust codebases. For more information, see [Rust is now generally available.](https://github.blog/changelog/2025-10-14-codeql-scanning-rust-and-c-c-without-builds-is-now-generally-available/#rust).