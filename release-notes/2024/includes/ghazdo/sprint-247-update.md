---
author: ckanyika
ms.author: ckanyika
ms.date: 11/12/2024
ms.topic: include
---

### Commit-less builds supported for dependency scanning 

Dependency scanning no longer requires a new commit to trigger a results submission. With this update, all builds will submit detected components for vulnerability analysis, whether or not they include commit changes. This enhancement streamlines security workflows and broadens scan coverage.

### File previews and annotations for CodeQL scans using sourcesFolder

Now, when using the `sourcesFolder` variable in CodeQL builds, file previews and annotations display accurately in alerts and pull requests, giving you consistent, reliable visibility into scan results.