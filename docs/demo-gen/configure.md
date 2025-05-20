---
title: Demo Generator Overview
description: Learn how to create an Azure DevOps project using the Azure DevOps Demo Generator.
ms.subservice: azure-devops-new-user
ms.author: glmorale
author: gloridelmorales
ms.topic: conceptual
monikerRange: 'azure-devops'
ms.date: 02/28/2025
---

# Overview of Demo Generator

To run the Azure DevOps Demo Generator project as a console application or executable, follow these steps:

Ensure you have the following installed on your machine:

- [.NET 8 SDK](https://dotnet.microsoft.com/download/dotnet/8.0)
- [Visual Studio](https://visualstudio.microsoft.com/) or any other preferred IDE


## Steps

1. **Clone the Repository**

   If you haven't already, clone the [repository](https://github.com/microsoft/AzDevOpsDemoGenerator) to your local machine:

   ```sh
   git clone <repository-url>
   cd <repository-directory>
   ```

2. **Open the Solution**

   Open the **ADOGenerator.sln** solution file in Visual Studio or your preferred IDE.

3. **Set ADOGenerator as the Startup Project**

   In Visual Studio:

   - Right-click on the ADOGenerator project in the Solution Explorer.
   - Select Set as Startup Project.

4. **Build the Solution**

   Build the solution to ensure all dependencies are restored and the project compiles successfully:

   - In Visual Studio, right-click on the solution in the Solution Explorer and select `Build Solution`.
   - Alternatively, you can use the command line:
     ```sh
     dotnet build
     ```

5. **Run the Project**

   To run the project as a console application:

   - In Visual Studio, press `F5` or click on the Start button.
   - Alternatively, you can run the project from the command line:
     ```sh
     dotnet run --project src/ADOGenerator/ADOGenerator.csproj
     ```

6. **Publish the Project**

   To create an executable, publish the project:

   - In Visual Studio, right-click on the ADOGenerator project in the Solution Explorer and select `Publish`.
   - Follow the prompts to configure the publish settings (e.g., target folder, configuration, etc.).
   - Alternatively, you can use the command line:
     ```sh
     dotnet publish src/ADOGenerator/ADOGenerator.csproj -c Release -r win-x64 --self-contained
     ```

7. **Run the Executable**

   Navigate to the publish directory and run the executable:
   ```sh
   cd src/ADOGenerator/bin/Release/net8.0/win-x64/publish
   ./ADOGenerator.exe
   ```

## Additional Notes

- Ensure that any required configuration files (e.g., `appsettings.json`) are present in the output directory.
- If you encounter any issues, check the console output for error messages and resolve any missing dependencies or configuration issues.

By following these steps, you should be able to run the ADOGenerator project as a console application or executable.
