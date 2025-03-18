---
author: ckanyika
ms.author: ckanyika
ms.date: 3/18/2025
ms.topic: include
---

### macOS-15 Sequia is generally available

The `macOS-15` image is now generally available in Azure Pipelines hosted agents. To use this image, update your YAML file to include `vmImage:'macos-15'`:  

```yaml
- job: macOS15
  pool:
    vmImage: 'macOS-15'
  steps:
  - bash: |
      echo Hello from macOS Sequia
      sw_vers
```

For macOS-15 installed software, see [image configuration](https://github.com/actions/runner-images/blob/main/images/macos/macos-15-Readme.md).

The `macOS-14` image will still be used when specifying `macOS-latest`. We will update `macOS-latest` will to use `macOS-15` in April.

### Windows-2025 is available in preview

The `windows-2025` image is now available in preview for Azure Pipelines hosted agents. To use this image, update your YAML file to include `vmImage:'windows-2025'`:  

```yaml
- job: win2025
  pool:
    vmImage: 'windows-2025'
  steps:
  - pwsh: |
      Write-Host "(Get-ComputerInfo).WindowsProductName"
      Get-ComputerInfo | Select-Object WindowsProductName
      Write-Host "`$PSVersionTable.OS"
      $PSVersionTable.OS
```

For windows-2025 installed software, see [image configuration](https://github.com/actions/runner-images/blob/main/images/windows/Windows2025-Readme.md).


### The ubuntu-latest pipeline image will start using ubuntu-24.04

Over the coming weeks, pipeline jobs that specify `ubuntu-latest` will start using `ubuntu-24.04` instead of `ubuntu-22.04`.

Fore more information about the `ubuntu-24.04` image look [here](https://aka.ms/azdo-ubuntu-24.04). To keep using Ubuntu 22.04, use the `ubuntu-22.04` image label:

```yaml
- job: ubuntu2404
  pool:
    vmImage: 'ubuntu-24.04'
  steps:
  - bash: |
      echo Hello from Ubuntu 24.04
      lsb_release -d
  - pwsh: |
      Write-Host "`$PSVersionTable.OS"
      $PSVersionTable.OS
```


### Workload identity federation uses Entra issuer

Just over a year ago, we made [Workload identity federation generally available](https://devblogs.microsoft.com/devops/workload-identity-federation-for-azure-deployments-is-now-generally-available/). Workload identity federation allows you to configure a service connection without a secret. The identity (App registration, Managed Identity) underpinning the service connection can only be used for the intended purpose: the service connection the federated credential configured.

We are now changing the format of the federated credential.

|         | Azure DevOps issuer                                                 | Entra issuer (new)                                            |
|---------|---------------------------------------------------------------------|---------------------------------------------------------------|
| Issuer  | `https://vstoken.dev.azure.com/<organization id>`                   | `https://login.microsoftonline.com/<Entra tenant id>/v2.0`    |
| Subject | `sc://<organization name>/<project name>/<service connection name>` | `<entra prefix>/sc/<organization id>/<service connection id>` |

This change does not change the way tokens are obtained. Pipeline tasks do not need to be updated and work as before.

The steps to create a service connection do not change. In most cases the change in configuration is not visible. When [configuring an Azure service connection manually](https://learn.microsoft.com/azure/devops/pipelines/release/configure-workload-identity), you will see the new federated credentials displayed:

> [!div class="mx-imgBorder"]
> [![Screenshot of FIC example.](../../media/253-pipelines-01.png "Screenshot of FIC example")](../../media/253-pipelines-01.png#lightbox)

Copy these values as before when creating a federated credential for an App registration or Managed Identity.

## Automation

When creating a service connection in automation with the [REST API], use the federated credential returned by the API:

```json
authorization.parameters.workloadIdentityFederationIssuer
authorization.parameters.workloadIdentityFederationSubject
```

When creating a service connection with the Terraform azuredevops provider, the [azuredevops_serviceendpoint_azurerm](https://registry.terraform.io/providers/microsoft/azuredevops/latest/docs/resources/serviceendpoint_azurerm#attributes-reference) resource returns `workload_identity_federation_issuer` and `workload_identity_federation_subject` attributes.

## More information

[Connect to Azure with an Azure Resource Manager service connection](https://learn.microsoft.com/azure/devops/pipelines/library/connect-to-azures)  
[Troubleshoot an Azure Resource Manager workload identity service connection](https://learn.microsoft.com/azure/devops/pipelines/release/troubleshoot-workload-identity)

###  Gradle@4 task

A new [Gradle@4](https://learn.microsoft.com/azure/devops/pipelines/tasks/reference/gradle-v4) task has been created with support for [Gradle 8](https://docs.gradle.org/8.0/userguide/upgrading_version_7.html). The built-in code coverage option is removed from the `Gradle` task starting with `Gradle@4`. To use code coverage with Gradle in your pipeline:

- Specify code coverage plugins in your build.gradle file. For more information, see [Gradle code analysis options](https://docs.gradle.org/current/userguide/plugin_reference.html#code_analysis).
- Use the [PublishCodeCoverageResults@2](https://learn.microsoft.com/azure/devops/pipelines/tasks/reference/publish-code-coverage-results-v2) task in your pipeline after the `Gradle@4` task.

Configuration of the SonarQube analysis was moved to the [SonarQube](https://marketplace.visualstudio.com/items?itemName=SonarSource.sonarqube) or [SonarCloud](https://marketplace.visualstudio.com/items?itemName=SonarSource.sonarcloud) extensions in the task `Prepare Analysis Configuration`.


### StringList parameter type

One of the top requested YAML pipelines features is to [define parameters that contain a list of items](https://developercommunity.visualstudio.com/t/parameters-that-support-multiselect/1224839).

Starting with this sprint, weve added a new parameter type, named `StringList`, that provides this capability.

Say you want to allow those who queue pipeline runs to choose which regions they want to deploy a payload to. Now you can do this as shown in the example below.

```yaml
parameters:
- name: regions
  type: stringList
  displayName: Regions
  values:
    - WUS
    - CUS
    - EUS

stages:
- ${{ each stage in parameters.regions}}:
  - stage: ${{stage}}
    displayName: Deploy to ${{stage}}
    jobs:
    - job:
      steps:
      - script: ./deploy ${{stage}}
```

When queuing this pipeline, you'll now have the option of choosing multiple regions to deploy to, as shown in the screenshot below.


### Identity of user who requested a stage to run

to improve security of your YAML pipelines, you may wish to know who requested a stage to run. To address this need, were adding two new predefined variables, `Build.StageRequestedBy` and `Build.StageRequestedById`. These variables are similar to the `Build.RequestedFor` and `Build.RequestedForId` variables, but for a stage, not a run.

When a user explicitly triggers a user, for example, in case of a manually triggered stage or rerunning a stage, their identity will be used to fill in the two variables.

