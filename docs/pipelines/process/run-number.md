---
title: Run and build numbers
description: Learn about Azure Pipelines run numbers and build numbers and how you can configure them in your pipelines.
ms.topic: conceptual
ms.assetid: 7C469647-117D-4867-B094-8BC811C0003E
ms.date: 07/01/2024
monikerRange: "<=azure-devops"
---

# Run and build numbers

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

This article explains how Azure Pipelines build numbers and run numbers are constructed, and how you can customize them in your pipelines.

The run number is used to identify a specific execution of a pipeline or build. The build number is synonymous with the run number. 

If you don't specify a build name in YAML pipelines, or you leave the **Name** field blank in Classic pipelines, your run gets a unique integer as its name. You can give runs more useful names that are meaningful to your team. You can use a combination of tokens, variables, and underscore characters in build names.

::: moniker range=">=azure-devops-2020"

In YAML pipelines, the build name property is called `name` and must be at the root level of a pipeline. Items specified at the root level of a YAML file are [pipeline](/azure/devops/pipelines/yaml-schema/pipeline) properties.

>[!NOTE]
>The `name` property doesn't work in template files. 

The following example code outputs a customized build number like **project_def_master_202408281**.

```yaml
name: $(TeamProject)_$(Build.DefinitionName)_$(SourceBranchName)_$(Date:yyyyMMdd)$(Rev:r)

steps:
  - script: echo '$(Build.BuildNumber)'
```

::: moniker-end

## Run number

The default value for a run number in Azure Pipelines is `$(Date:yyyyMMdd).$(Rev:r)`. `$(Rev:r)` is a special variable format that only works in the build number field. When a build completes, if nothing else in the build number changed, the `Rev` integer value increases by one.

`$(Rev:r)` resets to `1` when any other part of the build number changes. For example, if you configure your build number format as `$(Build.DefinitionName)_$(Date:yyyyMMdd).$(Rev:r)`, the build number resets when the date changes.

If the previous build number was `MyBuild_20230621.1`, the next build number that day is `MyBuild_20230621.2`. The first build number the next day is `MyBuild_20230622.1`.

`$(Rev:r)` also resets to `1` if you change the build number to indicate a version change. For example, if your build format is `1.0.$(Rev:r)` and your last build number was `1.0.3`, if you change the build number to `1.1.$(Rev:r)`, the next build number is `1.1.1`.

## Example

Consider the following data for a build run:

- Project name: Fabrikam
- Pipeline name: CIBuild
- Branch: main
- Build ID/Run ID: 752
- Date: May 6, 2024
- Time: 9:07:03 PM
- One run completed earlier today.

If you specify the following build number format, the second run on May 6, 2024 is named **Fabrikam_CIBuild_main_20240506.2**.

```yaml
$(TeamProject)_$(Build.DefinitionName)_$(SourceBranchName)_$(Date:yyyyMMdd).$(Rev:r)
```

## Tokens

The following table shows how each token resolves, based on the previous example. You can use these tokens only to define run numbers. They don't work anywhere else in a pipeline.

| Token | Example value | Notes |
| ----- | -------------- | ----------- |
| `$(Build.DefinitionName)` | CIBuild | The pipeline name can't contain invalid or whitespace characters.|
| `$(Build.BuildId)` | 752 | `$(Build.BuildId)` is an internal, immutable ID, also called the Run ID, that is unique across the Azure DevOps organization.|
| `$(DayOfMonth)` | 6 ||
| `$(DayOfYear)` | 126 ||
| `$(Hours)` | 21 ||
| `$(Minutes)` | 7 ||
| `$(Month)` | 5 ||
| `$(Rev:r)` | 2 | The third daily run is `3`, and so on. Use `$(Rev:r)` to ensure that every completed build has a unique name. |
| `$(Date:yyyyMMdd)` | 20240506 | You can specify other date formats such as `$(Date:MMddyy)`. |
| `$(Seconds)` | 3 ||
| `$(SourceBranchName)` | main ||
| `$(TeamProject)` | Fabrikam ||
| `$(Year:yy)` | 24 ||
| `$(Year:yyyy)` | 2024 ||

>[!IMPORTANT]
>If you want to show prefix zeros in the run number, you can add more `r` characters to the `Rev` token. For example, specify `$(Rev:rr)` if you want the `Rev` number to begin with `01`, `02`, and so on.
>
>If you use a zero-padded `Rev` as part of a version numbering scheme, be aware that some pipeline tasks or popular tools, like NuGet packages, remove the leading zeros. This behavior causes a version number mismatch in the artifacts that are produced.

## Expressions

If you use an expression to set the build number, you can't use some tokens, because their values aren't set at the time expressions are evaluated. These tokens include `$(Build.BuildId)`, `$(Build.BuildURL)`, and `$(Build.BuildNumber)`.

## Variables

You can use user-defined and predefined variables in your build number. For example, if you define `My.Variable`, you can specify the following number format:

```yaml
$(Build.DefinitionName)_$(Build.DefinitionVersion)_$(Build.RequestedFor)_$(Build.BuildId)_$(My.Variable)
```

In the preceding example, the first four variables are predefined. For information on how to define user variables, see [Set variables in pipelines](variables.md#set-variables-in-pipeline).

## FAQ

<!-- BEGINSECTION class="md-qanda" -->

### How large can a run number be, and what characters can I use?

Run numbers can be up to 255 characters. You can't use the characters `"`, `/`, `\`, `:`, `<`, `>`, `'`, `|`, `?`, `@`, or `*`, and you can't end the number with `.`.

### What time zone are the build number time values expressed in?

::: moniker range="azure-devops"

The time zone is UTC.

::: moniker-end

::: moniker range="<azure-devops"

The time zone is the same as the time zone of the operating system of the machine that runs your application tier server.

::: moniker-end

::: moniker range=">=azure-devops-2020"

### How can I set the build number dynamically with conditions?

You can use variables as part of your run number. In the following example, the variable `why` is used as part of the run number, and its value changes depending on the `Build.Reason`.

```yaml
variables:
  - name: why
    ${{ if eq(variables['Build.Reason'], 'PullRequest') }}:
      value: pr
    ${{ elseif eq(variables['Build.Reason'], 'Manual' ) }}:
      value: manual
    ${{ elseif eq(variables['Build.Reason'], 'IndividualCI' ) }}:
      value: indivci
    ${{ else }}:
      value: other

name: $(TeamProject)_$(SourceBranchName)_$(why)_$(Date:yyyyMMdd).$(Rev:r)

pool:
  vmImage: 'ubuntu-latest'

steps:
- script: echo '$(Build.BuildNumber)'
```

### How can I reference the run number variable within a script?

You can define a new variable that includes the run number, or call the run number directly. In the following example, `$(MyRunNumber)` is a new variable that includes the run number. You can call the run number variable by using `MyRunNumber` or `$(Build.BuildNumber)`.

```yaml
# Set MyRunNumber
variables: 
  MyRunNumber: '1.0.0-CI+$(Build.BuildNumber)'

steps:
- script: echo $(MyRunNumber)
- script: echo $(Build.BuildNumber)
```

::: moniker-end

<!-- ENDSECTION -->
## Related content

[Define variables](variables.md)
