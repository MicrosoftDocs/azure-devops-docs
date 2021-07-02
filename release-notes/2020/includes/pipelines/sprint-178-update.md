---
author: sid-ah
ms.author: simerzou
ms.technology: devops-release-notes
ms.date: 11/12/2020
ms.topic: include
---

### Improve YAML conversion in the classic build designer

With this release, we introduce a new "export to YAML" feature for designer build pipelines. Save your pipeline definition, then find "Export to YAML" on the `...` menu.

The new export function replaces the "View as YAML" function previously found in the classic build designer. That function was incomplete as it could only inspect what the web UI knew about the build, which sometimes led to incorrect YAML being generated. The new export function takes into account exactly how the pipeline will be processed and generates YAML with full fidelity to the designer pipeline.

### New web platform conversion – Repository settings

We're excited to announce the new repository settings pages are officially generally available. You can find additional information on this feature in our May 4 [release notes](../../sprint-168-update.md#new-web-platform-conversion--repository-settings).