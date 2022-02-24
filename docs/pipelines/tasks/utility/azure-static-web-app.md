---
title: Azure Static Web App task
description: Build and deploy an Azure Static Web App.
ms.topic: reference
ms.date: 02/24/2022
monikerRange: 'azure-devops'
---

# Azure Static Web App task

[!INCLUDE [version-eq-azure-devops](../../../includes/version-eq-azure-devops.md)]

Use this task to build and deploy an Azure Static Web App.

## YAML snippet

[!INCLUDE [temp](../includes/yaml/AzureStaticWebAppV0.md)]
## Arguments

| Parameters | Description |
|------------|-------------|
| `app_location`<br/>App location | (Optional) File path. Directory location of the application source code relative to working directory |
| `app_build_command`<br/>App build command | (Optional) String. Custom command for Oryx to run when building application source code. |
| `output_location`<br/>Output location | (Optional) String. Directory location of the compiled application code after building. |
| `api_location`<br/>API location | (Optional) String. Directory location of the Azure Functions source code relative to working directory. |
| `api_build_command`<br/>API build command | (Optional) String. Custom command for Oryx to run when building Azure Functions source code. |
| `config_file_location`<br/>API build command | (Optional) String. Custom command for Oryx to run when building Azure Functions source code. |
| `routes_location`<br/>Routes location | (Optional) String. Directory location where the routes.json file can be found, relative to working directory. Use `staticwebapp.config.json`. |
| `config_file_location`<br/>Config file location | (Optional) String. Directory location where the `staticwebapp.config.json` file can be found, relative to working directory. |
| `skip_app_build`<br/>Skip app build | (Optional) Boolean. Skips Oryx build for app folder.|
| `azure_static_web_apps_api_token`<br/>(Optional) Azure Static Web Apps api token | (Optional) Api token for deployment. Not required if passed as an environment variable.|


The following is an example YAML snippet to build and publish a static web app.

## Example

```YAML

trigger:
  - main

pool:
  vmImage: ubuntu-latest

steps:
  - checkout: self
    submodules: true
  - task: AzureStaticWebApp@0
    inputs:
      app_location: '/src'
      api_location: 'api'
      output_location: '/src'
      azure_static_web_apps_api_token: $(deployment_token)
```


## Open Source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.
