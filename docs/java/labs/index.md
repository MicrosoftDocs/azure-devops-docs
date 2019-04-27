---
title: DevOps with Azure DevOps Services for Java - Hands-on-Labs
description: DevOps with Azure DevOps Services for Java - Hands-on-Labs
ms.prod: devops
ms.technology: devops-cicd
ms.topic: conceptual
ms.custom: java
ms.manager: jillfra
ms.author: dastahel 
author: davidstaheli
ms.date: 01/25/2018
monikerRange: '>= tfs-2017'
---

# About the Java Hands-on Labs

[Azure DevOps Services](https://dev.azure.com), [Azure DevOps Server](https://visualstudio.microsoft.com/tfs/), and [Team Foundation Server (TFS)](https://visualstudio.microsoft.com/tfs/) provide an integrated set of services and tools to manage your software projects, from planning and development through testing and deployment to speed the development and delivery of your software applications across platforms, including iOS, Android, Java, Linux or Windows.


These hands-on labs are provided to give you a first-hand, technical experience on how you can leverage the Microsoft DevOps platform for Java development. The labs cover:

- Creating a new organization in Azure DevOps
- Using the Agile Boards to plan and track work items
- Using Azure DevOps Services with your Eclipse and IntelliJ
- Running Junit tests and analyzing code coverage with Jacoco and Cobertura
- Continuous Integration with Azure Pipelines or Jenkins
- Deploying Docker containers to Azure with an Automated delivery pipeline

## Virtual Machine

Our partner [NorthWest Cadence](https://www.nwcadence.com/) has built a virtual machine image that is pre-configured with all the software you require to run through the labs. You can find instructions on provisioning and connecting to the virtual machine [here](https://github.com/nwcadence/java-dev-vsts).

## Target Audience

The image and the accompanying hand-on-labs is for a technical audience. As such, familiarity with Azure DevOps Services, Java and Linux operating system would be preferred although it is not a strict prerequisite.

## Provisioning a project using Azure DevOps Demo Generator

You can use [Azure DevOps Demo Generator](https://azuredevopsdemogenerator.azurewebsites.net) to provision a project with pre-defined data on to your organization to follow the hands-on-labs. Choose **MyShuttle2** template from the dropdown.

## Hands on Labs

The labs should be followed in the following order, though there are some equivalent labs that allow you a "choose your adventure" experience:

<table width="70%">
   <thead>
      <tr>
         <th width="75%"><b>Lab Name</b></th>
      </tr>
   </thead>
   <tr>
      <td><a href="settingvstsproject/index.md">Setting up a new project on Azure DevOps Services</a></td>
   </tr>
   <tr>
      <td><a href="agile/index.md">Creating an Agile workflow</a></td>
   </tr>
   <tr>
      <td><a href="dockerbuildagent/index.md">Set up a Docker build agent</a></td>
   </tr>
   <tr>
      <td><a href="intellijgit/index.md">Cloning an Azure DevOps Services Repo - IntelliJ</a></td>
   </tr>
   <tr>
      <td><a href="eclipsegit/index.md">Cloning an Azure DevOps Services Repo - Eclipse</a></td>
   </tr>
   <tr>
      <td><a href="mavenpmjenkins/index.md">Maven Package Management with Azure DevOps Services and Jenkins</a></td>
   </tr>
   <tr>
      <td><a href="mavenpmvsts/index.md">Maven Package Management with Azure Pipelines</a></td>
   </tr>
   <tr>
      <td><a href="builddocker/index.md">Build Docker containers with Azure DevOps Services</a></td>
   </tr>
   <tr>
      <td><a href="releasemanagement/index.md">Release Management with Azure DevOps Services</a></td>
   </tr>
   <tr>
      <td><a href="e2eintellij/index.md">End to End Workflow - IntelliJ</a></td>
   </tr>
   <tr>
      <td><a href="e2eeclipse/index.md">End to End Workflow - Eclipse</a></td>
   </tr>
</table>
