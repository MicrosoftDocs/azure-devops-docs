---
title: Runtime and type-safe parameters
ms.custom: seodec18
description: You can use runtime parameters in pipelines or as part of a template 
ms.topic: conceptual
ms.date: 02/27/2020
monikerRange: '>= azure-devops-2019'
---

# Runtime parameters

Runtime parameters let you have more control over what values can be passed to a pipeline. With runtime parameters you can:
- Supply different values to scripts and tasks at runtime
- Control parameter types, ranges allowed, and defaults
- Dynamically select jobs and stages with template expressions

You can specify runtime parameters in templates and in the pipeline. Parameters have data types such as number and string, and they can be restricted to a subset of values. The `parameters` section in a YAML defines what parameters are available. Parameters are expanded just before the pipeline runs so that values surrounded by `${{ }}` are replaced with parameter values.

### Passing parameters

Parameters must contain a name and data type. This pipeline accepts the value of `image` and then outputs the value in the job. The `trigger` is set to none so that you can select the value of `image` when you manually trigger your pipeline to run. 

```yaml
# File: azure-pipeline.yml
parameters:
- name: image
  displayName: Pool Image
  type: string
  default: ubuntu-latest
  values:
  - windows-latest
  - vs2017-win2016
  - ubuntu-latest
  - ubuntu-16.04
  - macOS-latest
  - macOS-10.14

trigger: none

jobs:
- job: build
  displayName: build
  pool: 
    vmImage: ${{ parameters.image }}
  steps:
    - script: echo building $(Build.BuildNumber) with ${{ parameters.image }}
```

When the pipeline runs, you can select the `image`. 

![runtime parameters](media/runtime-param-ui.png){ width=60% }