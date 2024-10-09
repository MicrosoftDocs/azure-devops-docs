---
author: ckanyika
ms.author: ckanyika
ms.date: 10/15/2024
ms.topic: include
---

### Pull request annotations for dependency and code scanning

As indicated in the Advanced Security roadmap item, [Pull-request annotations](/azure/devops/release-notes/roadmap/2024/ghazdo/pull-request-annotation), you will now receive in-line annotations on any pull requests that utilize a pipeline assigned to your build validation policy with dependency scanning and/or code scanning tasks included.

There is no opt-in needed aside from creating a build validation policy to be applied against select branches.

Clicking on `Show more details` in the annotation will bring you to the alert detail view for the alert in question. 

> [!div class="mx-imgBorder"]
> [![Screenshot of Clicking on Show more details.](../../media/246-ghazdo-01.png "Screenshot of Clicking on Show more details")](../../media/246-ghazdo-01.png#lightbox)


### New pip detection strategy for dependency scanning 

Dependency scanning is now using a new detection strategy for Python: PipReport, based on the [pip installation report](https://pip.pypa.io/en/stable/reference/installation-report/) functionality. The changes improve accuracy by respecting environment specifiers to determine the exact versions that a real `pip install` run would pull. By default, the detector will use `pypi.org` to construct the dependency graph. Optionally, you can set a pipeline environment variable, `PIP_INDEX_URL` to construct the dependency graph instead. Ensure that you also have the `PipAuthenticate@1` pipeline task set up so that your feed can be accessed.

For more information on detection strategy, see [Pip Detection](https://github.com/microsoft/component-detection/blob/main/docs/detectors/pip.md#installation-report-pipreportdetector) documentation.