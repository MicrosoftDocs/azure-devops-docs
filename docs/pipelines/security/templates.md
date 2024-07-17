---
title: Use templates for security
description: Learn about using template features to improve pipeline security.
ms.assetid: 73d26125-e3ab-4e18-9bcd-387fb21d3568
ms.reviewer: vijayma
ms.date: 07/17/2024
ms.topic: conceptual
monikerRange: '>= azure-devops-2020'
---

# Use templates for security

[!INCLUDE [version-gt-eq-2020](../../includes/version-gt-eq-2020.md)]

This article describes how templates can streamline security for Azure Pipelines. Templates can define the outer structure of your pipeline and help prevent malicious code infiltration. Templates can also automatically include steps to do tasks such as credential scanning. If multiple pipelines within your team or organization share the same structure, consider using templates.

>[!IMPORTANT]
>[Checks on protected resources](resources.md) form the fundamental security framework for Azure Pipelines. These checks apply regardless of pipeline structure, stages, and jobs.

## Includes and extends templates

Azure Pipelines provides *includes* and *extends* templates.

- Includes templates include the template's code directly in the outer file that references it, similar to `#include` in C++. The following example pipeline inserts the *include-npm-steps.yml* template into the `steps` section.

  ```yaml
    steps:
    - template: templates/include-npm-steps.yml 
  ```

- Extends templates define the outer structure of the pipeline and offer specific points for targeted customizations. In the context of C++, `extends` templates resemble inheritance.

When you use `extends` templates, you can also use `includes` in both the template and the final pipeline to do common configuration pieces. For a complete reference, see the [Template usage reference](../process/templates.md).

<a name="use-extends-templates"></a>
## Extends templates

For the most secure pipelines, start by using extends templates. These templates define the outer structure of the pipeline and prevent malicious code from infiltrating the pipeline.

For example, the following template file is named *template.yml*.

```yaml
parameters:
- name: usersteps
  type: stepList
  default: []
steps:
- ${{ each step in parameters.usersteps }}:
  - ${{ step }}
```

The following pipeline extends the *template.yml* template.

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
>When you set up `extends` templates, consider anchoring them to a particular Git branch or tag so if there are breaking changes, existing pipelines aren't affected. The preceding example uses this feature.

## YAML pipeline security features

The YAML pipeline syntax includes several built-in protections. Extends template can enforce their use. To enhance pipeline security, you can implement any of the following restrictions.

### Step targets

You can restrict certain steps to run in a container rather than on the host. Steps in containers don't have access to the agent's host, preventing these steps from modifying agent configuration or leaving malicious code for later execution.

For example, consider limiting network access. Without open network access, user steps can't retrieve packages from unauthorized sources or upload code and secrets to external network locations.

The following example pipeline runs steps on the agent host before running steps inside a container.

```yaml
resources:
  containers:
  - container: builder
    image: mysecurebuildcontainer:latest
steps:
- script: echo This step runs on the agent host, and it could use Docker commands to tear down or limit the container's network
- script: echo This step runs inside the builder container
  target: builder
```

::: moniker range=">=azure-devops-2022"

### Agent logging command restrictions

You can restrict the services the Azure Pipelines agent provides to user steps. User steps request services by using *logging commands*, which are specially formatted strings printed to standard output. In restricted mode, most of the agent's services, such as uploading artifacts and attaching test results, are unavailable.

The following example task fails because its `target` property instructs the agent not to allow publishing artifacts.

```yaml
- task: PublishBuildArtifacts@1
  inputs:
    artifactName: myartifacts
  target:
    commands: restricted
```

In restricted mode, the `setvariable` command remains permissible, but caution is necessary because pipeline variables are exported as environment variables to subsequent tasks. If tasks output user-provided data, such as open issues retrieved via a REST API, they might be vulnerable to injection attacks. Malicious user content could set environment variables that might be exploited to compromise the agent host.

To mitigate this risk, pipeline authors can explicitly declare which variables are settable by using the `setvariable` logging command. When you specify an empty list, all variable setting is disallowed.

The following example task fails because the task is only allowed to set the `expectedVar` variable or a variable prefixed with `ok`.

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

You can restrict stages and jobs to run only under specific conditions. In the following example, the condition ensures that restricted code builds only for the main branch.

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

A template can also rewrite user steps, allowing only approved tasks to run. For example, you can prevent inline script execution.

The following example template prevents the step types `bash`, `powershell`, `pwsh`, and `script` from running. For complete lockdown of ad-hoc scripts, you could also block `BatchScript` and `ShellScript`.

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

In the following pipeline that extends the preceding template, the script steps are stripped out and not run.

```yaml
# azure-pipelines.yml
extends:
  template: template.yml
  parameters:
    usersteps:
    - task: MyTask@1
    - script: echo This step will be stripped out and not run!
    - bash: echo This step will be stripped out and not run!
    - powershell: echo "This step will be stripped out and not run!"
    - pwsh: echo "This step will be stripped out and not run!"
    - script: echo This step will be stripped out and not run!
    - task: CmdLine@2
      displayName: Test - Will be stripped out
      inputs:
        script: echo This step will be stripped out and not run!
    - task: MyOtherTask@2
```

:::moniker-end

### Type-safe parameters

Before a pipeline runs, templates and their parameters are transformed into constants. [Template parameters](../process/template-parameters.md) can enhance type safety for input parameters.

In the following example template, the parameters restrict the available pipeline pool options by providing an enumeration of specific choices instead of allowing freeform strings.

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
- script: # ... removed for clarity
```

When the pipeline extends the template, it has to specify one of the available pool choices.

```yaml
# azure-pipelines.yml
extends:
  template: template.yml
  parameters:
    userpool: private-pool-1
```

::: moniker range=">=azure-devops"

### Template steps

A template can automatically include steps in a pipeline. These steps can do tasks such as credential scanning or static code checks. The following template inserts steps before and after the user steps in every job.

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

Templates are a valuable security mechanism, but their effectiveness relies on enforcement. The key control points for enforcing template usage are [protected resources](resources.md). You can configure approvals and checks for your agent pool or other protected resources such as repositories. For an example, see [Add a repository resource check](../process/repository-resource.md#add-a-repository-resource-check).

<a name="set-required-templates"></a>
### Required templates

To enforce the use of a specific template, configure the [required template check](../process/approvals.md#required-template) for a resource. This check applies only when the pipeline extends from a template.

When you view the pipeline job, you can monitor the check's status. If the pipeline doesn't extend from the required template, the check fails. The run stops and notifies you of the failed check.

:::image type="content" source="../process/media/approval-fail.png" alt-text="Screenshot showing a failed approval check.":::

When you use the required template, the check passes.

:::image type="content" source="../process/media/approval-pass.png" alt-text="Screenshot showing a passed approval check.":::

The following *params.yml* template must be referenced in any pipeline that extends it.

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

- [Template usage reference](../process/templates.md)
- [Secure variables and parameters in pipelines](inputs.md)
- [Resource security](resources.md)
- [Approvals and checks](../process/approvals.md)
