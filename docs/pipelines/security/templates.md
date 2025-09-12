---
title: Templates for security
description: Learn about using template features to help improve pipeline security.
ms.assetid: 73d26125-e3ab-4e18-9bcd-387fb21d3568
ms.date: 09/12/2025
ms.topic: conceptual
monikerRange: '>= azure-devops-2020'
---

# Templates for security

[!INCLUDE [version-gt-eq-2020](../../includes/version-gt-eq-2020.md)]

Azure Pipelines [templates](../process/templates.md) let you define reusable content, logic, and parameters in YAML pipelines. This article describes how templates can help enhance pipeline security by:

- Defining the outer structure of a pipeline to help prevent malicious code infiltration.
- Automatically including steps to do tasks such as credential scanning.
- Helping enforce [checks on protected resources](resources.md), which form the fundamental security framework for Azure Pipelines and apply to all pipeline structures and components.

[!INCLUDE [security-prerequisites](includes/security-prerequisites.md)]

## Includes and extends templates

Azure Pipelines provides *includes* and *extends* templates.

- An `includes` template includes the template's code directly in the outer file that references the template, similar to `#include` in C++. The following example pipeline inserts the *include-npm-steps.yml* template into the `steps` section.

  ```yaml
    steps:
    - template: templates/include-npm-steps.yml 
  ```

- An `extends` template defines the outer structure of the pipeline and offers specific points for targeted customizations. In the context of C++, `extends` templates resemble inheritance.

When you use `extends` templates, you can also use `includes` to do common configuration pieces in both the template and the final pipeline. For more information, see [Use YAML templates in pipelines for reusable and secure processes](../process/templates.md).

<a name="use-extends-templates"></a>
### Extends templates

For the most secure pipelines, start by using `extends` templates. These templates define the outer structure of the pipeline and help prevent malicious code infiltration.

The following example shows a template file named *template.yml*.

```yaml
parameters:
- name: usersteps
  type: stepList
  default: []
steps:
- ${{ each step in parameters.usersteps }}:
  - ${{ step }}
```

The following example pipeline extends the *template.yml* template.

```yaml
# azure-pipelines.yml
resources:
  repositories:
  - repository: templates
    type: git
    name: MyProject/MyTemplates
    ref: refs/tags/v1

extends:
  template: template.yml@templates
  parameters:
    usersteps:
    - script: echo This is my first step
    - script: echo This is my second step
```

>[!TIP]
>When you set up `extends` templates, consider anchoring them to a particular Git branch or tag so any breaking changes don't affect existing pipelines. The preceding example uses this feature.

## Pipeline security features

YAML pipeline syntax includes several built-in protections. `Extends` templates can enforce their use to enhance pipeline security. You can implement any of the following restrictions.

### Step targets

You can restrict specified steps to run in a container rather than on the host. Steps in containers can't access the agent's host, so they can't modify agent configuration or leave malicious code for later execution.

For example, you can prevent open network access from within a container, so user steps can't retrieve packages from unauthorized sources or upload code and secrets to external locations. The following example pipeline demonstrates running a step on the agent host before running a step inside a container.

```yaml
resources:
  containers:
  - container: builder
    image: mysecurebuildcontainer:latest
steps:
- script: echo This step runs on the agent host, so could use commands to tear down or limit the host network
- script: echo This step runs inside the builder container, which limits network access
  target: builder
```

### Type-safe parameters

Before a pipeline runs, templates and their parameters transform into constants. [Template parameters](../process/template-parameters.md) can enhance type safety for input parameters.

In the following example template, the parameters restrict the available pipeline pool options by enumerating specific choices instead of allowing any string.

```yaml
# template.yml
parameters:
- name: userpool
  type: string
  default: Azure Pipelines
  values:
  - Azure Pipelines
  - private-pool-1
  - private-pool-2

pool: ${{ parameters.userpool }}
steps:
- script: echo Hello world
```

To extend the template, the pipeline must specify one of the available pool choices.

```yaml
# azure-pipelines.yml
extends:
  template: template.yml
  parameters:
    userpool: private-pool-1
```

::: moniker range=">=azure-devops-2022"

### Agent logging command restrictions

User steps request services by using *logging commands*, which are specially formatted strings printed to standard output. You can restrict the services that logging commands provide for user steps. In `restricted` mode, most agent services such as uploading artifacts and attaching test results are unavailable.

In the following example, the `target` property instructs the agent not to allow publishing artifacts, so the artifact publishing task fails.

```yaml
- task: PublishBuildArtifacts@1
  inputs:
    artifactName: myartifacts
  target:
    commands: restricted
```

#### Variables in logging commands

The `setvariable` command remains permissible in `restricted` mode, so tasks that output user-provided data, such as open issues retrieved via a REST API, might be vulnerable to injection attacks. Malicious user content could set variables that export as environment variables to subsequent tasks and compromise the agent host.

To mitigate this risk, you can explicitly declare the variables that are settable by using the `setvariable` logging command. If you specify an empty list in `settableVariables`, all variable setting is disallowed.

The following example restricts the `settableVariables` to `expectedVar` or a variable prefixed with `ok`. The task fails because it attempts to set a different variable called `BadVar`.

```yaml
- task: PowerShell@2
  target:
    commands: restricted
    settableVariables:
    - expectedVar
    - ok*
  inputs:
    targetType: 'inline'
    script: |
      Write-Host "##vso[task.setvariable variable=BadVar]myValue"
```

### Conditional stage or job execution

You can restrict stages and jobs to run only under specific conditions. The following example ensures that restricted code builds only for the `main` branch.

```yaml
jobs:
- job: buildNormal
  steps:
  - script: echo Building the normal, unsensitive part
- ${{ if eq(variables['Build.SourceBranchName'], 'refs/heads/main') }}:
  - job: buildMainOnly
    steps:
    - script: echo Building the restricted part that only builds for main branch
```

### Syntax modification

Azure Pipelines templates have the flexibility to iterate over and modify YAML syntax. By using iteration, you can enforce specific YAML security features.

A template can also rewrite user steps, allowing only approved tasks to run. For example, the template can prevent inline script execution.

The following example template prevents the script step types `bash`, `powershell`, `pwsh`, and `script` from running. For complete lockdown of scripts, you could also block `BatchScript` and `ShellScript`.

```yaml
# template.yml
parameters:
- name: usersteps
  type: stepList
  default: []
steps:
- ${{ each step in parameters.usersteps }}:
  - ${{ if not(or(startsWith(step.task, 'Bash'),startsWith(step.task, 'CmdLine'),startsWith(step.task, 'PowerShell'))) }}:  
    - ${{ step }}
  # The following lines replace tasks like Bash@3, CmdLine@2, PowerShell@2
  - ${{ else }}:  
    - ${{ each pair in step }}:
        ${{ if eq(pair.key, 'inputs') }}:
          inputs:
            ${{ each attribute in pair.value }}:
              ${{ if eq(attribute.key, 'script') }}:
                script: echo "Script removed by template"
              ${{ else }}:
                ${{ attribute.key }}: ${{ attribute.value }}
        ${{ elseif ne(pair.key, 'displayName') }}:
          ${{ pair.key }}: ${{ pair.value }}

          displayName: 'Disabled by template: ${{ step.displayName }}'
```

In the following example pipeline that extends the preceding template, the script steps are stripped out and not run.

```yaml
# azure-pipelines.yml
extends:
  template: template.yml
  parameters:
    usersteps:
    - task: MyTask@1
    - script: echo This step is stripped out and not run
    - bash: echo This step is stripped out and not run
    - powershell: echo "This step is stripped out and not run"
    - pwsh: echo "This step is stripped out and not run"
    - script: echo This step is stripped out and not run
    - task: CmdLine@2
      displayName: Test - stripped out
      inputs:
        script: echo This step is stripped out and not run
    - task: MyOtherTask@2
```

:::moniker-end

::: moniker range=">=azure-devops"
### Template steps

A template can automatically include steps in a pipeline, for example to do credential scanning or static code checks. The following template inserts steps before and after the user steps in every job.

```yaml
parameters:
  jobs: []

jobs:
- ${{ each job in parameters.jobs }}: 
  - ${{ each pair in job }}:  
      ${{ if ne(pair.key, 'steps') }}:
        ${{ pair.key }}: ${{ pair.value }}
    steps:                            
    - task: CredScan@1 
    - ${{ job.steps }} 
    - task: PublishMyTelemetry@1 
      condition: always()
```
::: moniker-end

## Template enforcement

The effectiveness of templates as a security mechanism relies on enforcement. The key control points for enforcing template usage are [protected resources](resources.md).

You can configure [approvals and checks](../process/approvals.md) for your agent pool or other protected resources such as repositories. For an example, see [Add a repository resource check](../process/repository-resource.md#add-a-repository-resource-check).

<a name="set-required-templates"></a>
### Required templates

To enforce the use of a specific template, configure the [required template](../process/approvals.md#required-template) check on the service connection for a resource. This check applies only when the pipeline extends from a template.

When you view the pipeline job, you can monitor the check's status. If the pipeline doesn't extend from the required template, the check fails. The run stops and notifies you of the failed check.

:::image type="content" source="../process/media/approval-fail.png" alt-text="Screenshot showing a failed approval check.":::

When you use the required template, the check passes.

:::image type="content" source="../process/media/approval-pass.png" alt-text="Screenshot showing a passed approval check.":::

For example, the following *params.yml* template must be referenced in any pipeline that extends it.

```yaml
# params.yml
parameters:
- name: yesNo 
  type: boolean
  default: false
- name: image
  displayName: Pool Image
  type: string
  default: ubuntu-latest
  values:
  - windows-latest
  - ubuntu-latest
  - macOS-latest

steps:
- script: echo ${{ parameters.yesNo }}
- script: echo ${{ parameters.image }}
```

The following example pipeline extends the *params.yml* template and requires it for approval. To demonstrate a pipeline failure, comment out the reference to *params.yml*.

```yaml
# azure-pipeline.yml

resources:
 containers:
     - container: my-container
       endpoint: my-service-connection
       image: mycontainerimages

extends:
    template: params.yml
    parameters:
        yesNo: true
        image: 'windows-latest'
```

## Related content

- [Template usage](../process/templates.md)
- [Template parameters](../process/template-parameters.md)
- [Resource security](resources.md)
- [Approvals and checks](../process/approvals.md)
