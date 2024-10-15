---
author: ckanyika
ms.author: ckanyika
ms.date: 10/15/2024
ms.topic: include
---

### Pull request annotations for dependency and code scanning

As part of the Advanced Security roadmap, [Pull-request annotations](/azure/devops/release-notes/roadmap/2024/ghazdo/pull-request-annotation) are now available. You'll receive in-line annotations on any pull requests that use a pipeline associated with your build validation policy, which includes dependency and/or code scanning tasks. 

No additional opt-in is required beyond creating a build validation policy for the relevant branches. 

Clicking on `Show more details` in the annotation brings you to the alert detail view for the alert in question. 

> [!div class="mx-imgBorder"]
> [![Screenshot of Clicking on Show more details.](../../media/246-ghazdo-01.png "Screenshot of Clicking on Show more details")](../../media/246-ghazdo-01.png#lightbox)


### New pip detection strategy for dependency scanning 

Dependency scanning now uses a new detection strategy for Python: PipReport, based on the [pip installation report](https://pip.pypa.io/en/stable/reference/installation-report/) functionality. This update improves accuracy by respecting environment specifiers to determine the exact versions a real `pip install` would retrieve. By default, the detector uses `pypi.org` to build the dependency graph. Optionally, you can set a pipeline environment variable, `PIP_INDEX_URL` to construct the dependency graph instead.  Make sure the `PipAuthenticate@1` pipeline task is configured so that your feed can be accessed.

For more information on the detection strategy, see the [Pip Detection](https://github.com/microsoft/component-detection/blob/main/docs/detectors/pip.md#installation-report-pipreportdetector) documentation.

