---
title: PyPI Publisher task (Deprecated)
ms.custom: seodec18
description: How to upload a package to PyPI when building code in Azure Pipelines and TFS
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: ADFFA0DA-D282-4D83-ADC0-43B4EB7ECB52
ms.manager: madhurig
ms.author: brcrista
ms.reviewer: dastahel
ms.date: 5/7/2018
monikerRange: 'azure-devops'
---

# Package: PyPI Publisher task (deprecated)

**Azure Pipelines**

Use this task in a build or release pipeline to create and upload an sdist or wheel to a PyPI-compatible index using Twine.

This task builds an sdist package by running `python setup.py sdist` using the Python instance in `PATH`.
It can optionally build a universal wheel in addition to the sdist.
Then, it will upload the package to a PyPI index using `twine`.
The task will install the `wheel` and `twine` packages with `python -m pip install --user`.

## Deprecated

> [!WARNING]
> The PyPI Publisher task has been deprecated. You can now [publish PyPI packages using twine authentication and custom scripts](../../targets/pypi.md). 

## Demands

None

## Prerequisites
A generic service connection for a PyPI index.

> [!TIP]
> To configure a new generic service connection, go to Settings -> Services -> New service connection -> Generic.
> * **Connection Name**: A friendly connection name of your choice
> * **Server URL**: PyPI package server (for example: https://upload.pypi.org/legacy/)
> * **User name**: username for your PyPI account
> * **Password/Token Key**: password for your PyPI account

::: moniker range="> tfs-2018"
## YAML snippet
[!INCLUDE [temp](../_shared/yaml/PyPIPublisherV0.md)]
::: moniker-end

## Arguments

| Argument | Description |
|----------|-------------|
| PyPI connection | A generic service connection for connecting to the package index. |
| Python package directory | The directory of the Python package to be created and published, where setup.py is present. |
| Also publish a wheel | Select whether to create and publish a [universal wheel](https://packaging.python.org/tutorials/distributing-packages/#wheels) package (platform independent) in addition to an sdist package. |

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.

## Q & A
<!-- BEGINSECTION class="md-qanda" -->

[!INCLUDE [temp](../../_shared/qa-agents.md)]


<!-- ENDSECTION -->
