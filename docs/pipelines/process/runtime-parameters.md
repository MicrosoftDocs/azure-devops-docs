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

Parameters must contain a name and data type. This pipeline accepts the boolean value of yes or no and then outputs the value. The `trigger` is set to none so that you can select the value of the variable when running your pipeline. 

```yaml
# File: azure-pipeline.yml
parameters:
- name: test # name of the parameter; required
  displayName: Test?
  type: boolean # data type of the parameter; required
  default: false

trigger: none

steps:
    - script: echo ${{ parameters.yesNo }}
```

When the pipeline runs, you can set the `VmImage`. 

![runtime parameters](media/runtime-param-ui.png)   