---
ms.topic: include
ms.date: 02/24/2022
ms.subservice: azure-devops-pipelines-tasks
---

```yml
- task: AzureStaticWebApp@0
  inputs:
    app_location: # (Optional) File path. Directory location of the application source code relative to working directory
    app_build_command: # (Optional) String. Custom command for Oryx to run when building application source code.
    output_location: # (Optional) String. Directory location of the compiled application code after building.
    api_location: # (Optional) String. Directory location of the Azure Functions source code relative to working directory.
    api_build_command: # (Optional) Custom command for Oryx to run when building Azure Functions source code.
    routes_location: # (Optional) Directory location where the routes.json file can be found, relative to working directory. Use staticwebapp.config.json.
    config_file_location: # (Optional) Directory location where the staticwebapp.config.json file can be found, relative to working directory.
    skip_app_build: # (Optional) Skips Oryx build for app folder.
    verbose: # (Optional) Enables verbose logging.
    build_timeout_in_minutes: # (Optional) Time limit of Oryx app folder build in minutes.
    azure_static_web_apps_api_token: # (Optional) Api token for deployment. Not required if passed as an environment variable.
```