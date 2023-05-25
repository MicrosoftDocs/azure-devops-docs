---
title: Build a custom template
description: Learn how to build a custom template for the Azure DevOps Demo Generator.
ms.subservice: azure-devops-new-user
ms.author: sdanie
author: hsachinraj
ms.topic: conceptual
monikerRange: 'azure-devops'
ms.date: 05/24/2023
---

# Build a custom template

[!INCLUDE [version-eq-azure-devops](../includes/version-eq-azure-devops.md)] 

Azure DevOps Generator provides many out-of-the-box templates that support a wide variety of scenarios. The generator also allows users to make their own templates. You can convert your existing projects into templates and then create new projects using those templates. Custom templates can be useful in many scenarios, such as for building custom training materials, provisioning only certain artifacts, and so on.

## Prerequisites

You must have an [Azure DevOps project](../organizations/projects/create-project.md) that's ready for extraction. The extractor captures the contents of the project and saves them as JSON files, which get archived into a zip file.

## Build a custom template

1. Sign in to the generator with the query parameter **"enableextractor=true"** added to the URL: [https://azuredevopsdemogenerator.azurewebsites.net/?enableextractor=true](https://azuredevopsdemogenerator.azurewebsites.net/?enableextractor=true)

   :::image type="content" source="media/homepage.png" alt-text="Screenshot showing the Azure DevOps Generator home page.":::

2. Select **Build your template**.

   :::image type="content" source="media/build-your-template-link.png" alt-text="Screenshot showing the link on home page, Build your template, surrounded by red box.":::

3. Select the organization and project that you want to create the template from, and then select **Analyze**.

   :::image type="content" source="media/new-template-analyze.png" alt-text="Screenshot showing selections for new template and blue Analyze button.":::

   The Demo Generator validates whether the project is a supported type, Agile, Scrum, or Basic, and that all of the contents can be read. At the end of the analysis, a list of artifacts and count of items gets presented, so you can confirm the analysis.

4. If you wish to proceed, select **Generate Artifacts**. All project items get saved as JSON data. After all the items are extracted, the folder gets archived into a zip file.

   :::image type="content" source="media/analyze.png" alt-text="Screenshot showing artifacts analysis and blue Generate Artifacts button.":::

5. Download the zip file. It won't be available after you close the page. 

   :::image type="content" source="media/generated-file.png" alt-text="Screenshot showing where to select to download your file.":::

> [!NOTE]
> The Extractor supports only limited artifacts and work item types, so don't consider it as a migration tool for moving projects from one server to another. For more information, see [Common issues and workarounds](use-demo-generator-v2.md).

## Create your project from your custom template

1. Go back to the generator page with the query parameter **"enableextractor=true"** added to the URL: [https://azuredevopsdemogenerator.azurewebsites.net/?enableextractor=true](https://azuredevopsdemogenerator.azurewebsites.net/?enableextractor=true).

2. Select **Choose Template** 

3. Select **Private**.

   :::image type="content" source="media/private-tab.png" alt-text="Screenshot showing the Private tab.":::

4. Select the location from which you want to import your template: local drive, GitHub, or any https URL. If the URL or GitHub require authorization, provide the information. Select **Submit**. 

   GitHub
   :::image type="content" source="media/upload-from-github.png" alt-text="Screenshot showing upload screen with GitHub selected.":::   
   
   URL
   :::image type="content" source="media/upload-from-url.png" alt-text="Screenshot showing upload screen with URL selected.":::

5. If the validation is effective, your template gets accepted. In the **Selected Template** field, your template name shows.

Now you can create a project using your own template!

## Related articles

- [Get started using the Generator](use-demo-generator-v2.md)
- [About Demo Generator](index.md) 
