---
title: Configure and run the Azure DevOps Demo Generator locally
description: Learn how to set up and run the Azure DevOps Demo Generator as a console application or executable on your local machine.
ms.subservice: azure-devops-new-user
ms.author: chcomley
author: chcomley
ms.topic: how-to
monikerRange: 'azure-devops'
ai-usage: ai-assisted
ms.date: 10/31/2025
---

# Configure and run the Azure DevOps Demo Generator locally

[!INCLUDE [version-eq-azure-devops](../includes/version-eq-azure-devops.md)]

[!INCLUDE [demo-generator-discontinued-note](includes/demo-generator-discontinued-note.md)]

You can run the Azure DevOps Demo Generator project as a console application or executable on your local machine. This approach gives you more control over the tool's execution and allows you to customize its behavior for specific scenarios.

## Prerequisites

Before you begin, ensure you have these components installed on your machine:

- [.NET 8 SDK](https://dotnet.microsoft.com/download/dotnet/8.0)
- [Visual Studio](https://visualstudio.microsoft.com/) or another preferred IDE
- [Git](https://git-scm.com/) for cloning the repository

## Set up the Demo Generator locally

Follow these steps to configure and run the Demo Generator on your local machine:

1. Clone the [Azure DevOps Demo Generator repository](https://github.com/microsoft/AzDevOpsDemoGenerator) to your local machine:

   ```sh
   git clone https://github.com/microsoft/AzDevOpsDemoGenerator.git
   cd AzDevOpsDemoGenerator
   ```

2. Open the **ADOGenerator.sln** solution file in Visual Studio or your preferred IDE.

3. In Visual Studio, set the startup project:
   1. Right-click on the **ADOGenerator** project in the Solution Explorer.
   2. Select **Set as Startup Project**.

4. Build the solution to restore all dependencies and ensure the project compiles successfully:

   1. **In Visual Studio:** Right-click on the solution in the Solution Explorer and select **Build Solution**.
   2. **From the command line:**
   ```sh
   dotnet build
   ```

5. Run the project as a console application using one of these methods:
   1. **In Visual Studio:** Press `F5` or select the **Start** button.
   2. **From the command line:**
   ```sh
   dotnet run --project src/ADOGenerator/ADOGenerator.csproj
   ```

## Create an executable

Create a standalone executable that you can distribute or run on machines without the .NET SDK:

### Publish the project

**In Visual Studio:**
1. Right-click on the **ADOGenerator** project in the Solution Explorer.
2. Select **Publish**.
3. Follow the prompts to configure the publish settings (target folder, configuration, runtime).

**From the command line:**
```sh
dotnet publish src/ADOGenerator/ADOGenerator.csproj -c Release -r win-x64 --self-contained
```

### Run the executable

Go to the published directory and run the executable:

```sh
cd src/ADOGenerator/bin/Release/net8.0/win-x64/publish
./ADOGenerator.exe
```

## Configuration considerations

When running the Azure DevOps Demo Generator locally, keep these factors in mind:

- **Configuration files**: Ensure that required configuration files (such as `appsettings.json`) are present in the output directory.
- **Dependencies**: Verify that all necessary dependencies are included in the build output.
- **Permissions**: The application requires appropriate permissions to access Azure DevOps services.
- **Network access**: Ensure your machine can connect to Azure DevOps Services over HTTPS.

## Troubleshooting

If you encounter issues while setting up or running the Demo Generator:

1. **Check console output**: Review error messages in the console for specific issues.
2. **Verify dependencies**: Ensure all required packages and dependencies are properly restored.
3. **Validate configuration**: Check that configuration files contain correct settings and values.
4. **Review connectivity**: Verify network connectivity to Azure DevOps Services.
5. **Check .NET version**: Confirm you're using the correct .NET SDK version.

## Alternative approaches

Since Microsoft no longer actively develops the Demo Generator, consider these alternatives for project automation:

- **[Azure DevOps CLI](../cli/index.md)** for scripted project setup and management
- **[REST API automation](../integrate/index.md)** for custom project provisioning solutions
- **PowerShell scripts** using Azure DevOps REST APIs
- **Azure Resource Manager templates** for infrastructure and project setup

## Related content

- [Use the Demo Generator](use-demo-generator-v2.md)
- [Build your own template](build-your-own-template.md)
- [Azure DevOps CLI overview](../cli/index.md)
- [Azure DevOps REST API reference](../integrate/index.md)
