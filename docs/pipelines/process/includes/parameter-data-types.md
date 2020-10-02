---
ms.topic: include
ms.technology: devops-cicd
ms.manager: mijacobs
ms.author: jukullam
author: juliakm
ms.date: 02/28/2020
---

| Data type | Notes |
|-----------|-------|
| `string` | string
| `number` | may be restricted to `values:`, otherwise any number-like string is accepted
| `boolean` | `true` or `false`
| `object` | any YAML structure
| `step` | a single step
| `stepList` | sequence of [steps](../../yaml-schema.md#steps)
| `job` | a single job
| `jobList` | sequence of [jobs](../../yaml-schema.md#job)
| `deployment` | a single deployment job
| `deploymentList` | sequence of deployment [jobs](../../yaml-schema.md)
| `stage` | a single stage
| `stageList` | sequence of [stages](../../yaml-schema.md)

The step, stepList, job, jobList, deployment, deploymentList, stage, and stageList data types all use standard YAML schema format. This example includes string, number, boolean, object, step, and stepList. 

```yaml
parameters:
- name: myString
  type: string
  default: a string
- name: myMultiString
  type: string
  default: default
  values:
  - default
  - ubuntu
- name: myNumber
  type: number
  default: 2
  values:
  - 1
  - 2
  - 4
  - 8
  - 16
- name: myBoolean
  type: boolean
  default: true
- name: myObject
  type: object
  default:
    foo: FOO
    bar: BAR
    things:
    - one
    - two
    - three
    nested:
      one: apple
      two: pear
      count: 3
- name: myStep
  type: step
  default:
    script: echo my step
- name: mySteplist
  type: stepList
  default:
    - script: echo step one
    - script: echo step two

trigger: none

jobs: 
- job: stepList
  steps: ${{ parameters.mySteplist }}
- job: myStep
  steps:
    - ${{ parameters.myStep }}
```