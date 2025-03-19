---
author: ckanyika
ms.author: ckanyika
ms.date: 3/19/2025
ms.topic: include
---

### Improvements on the Publish code coverage results v2 task

This release contains includes several improvements to the v2 task:
* Expanded support for various code coverage formats, including: .coverage,.covx,.covb,.cjson,.xml,.lcov,and pycov1.
* Generation of a comprehensive cjson file (and a Code Coverage report) that contains detailed code coverage information such as file names, lines covered/not covered, etc.

> [!div class="mx-imgBorder"]
> [![Screenshot of code coverage.](../../media/253-testplans-01.png "Screenshot of code coverage")](../../media/253-testplans-01.png#lightbox)

* Support for diff coverage (PR coverage): v2 can generate diff coverage PR comments for multiple languages within the same pipeline.
* v2 now supports the Build Quality Check task, which wasn't supported in v1.

### Default resume for paused test case

**“Resume”** is now the default action for paused test cases, allowing you to pick up right where you left off without extra navigation. This update streamlines your workflow, making it faster and easier to continue your work without interruption. To further protect your progress, we’ve introduced a confirmation prompt to prevent accidental overwrites of paused test progress. This safeguard ensures your partially saved work remains intact, giving you peace of mind while managing your test runs. Give it a try and let us know via [email](mailto:adocustomerfeedback@service.microsoft.com) what you think!

### Export test cases with custom columns in XLSX

You can now export test cases with custom columns in XLSX. Based on your feedback, Test Plans supports exporting test cases with custom columns, giving you greater flexibility and control over the data you share and analyze. This enhancement helps you tailor exports to your needs, ensuring the information you export is relevant and actionable.