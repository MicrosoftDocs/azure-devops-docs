---
title: DevOps with VSTS for Java - Hands-on-Labs
description: DevOps with Visual Studio Team Services for Java - Hands-on-Labs
ms.prod: devops
ms.technology: devops-cicd
ms.topic: conceptual
ms.custom: java
ms.manager: douge
ms.author: douge 
author: erickson-doug
ms.date: 01/25/2018
monikerRange: '>= tfs-2017'
---


[Visual Studio Team Services (VSTS)](https://www.visualstudio.com/products/visual-studio-team-services-vs) and [Team Foundation Server (TFS)](https://www.visualstudio.com/tfs/) provide an integrated set of services and tools to manage your software projects, from planning and development through testing and deployment to speed the development and delivery of your software applications across platforms, including iOS, Android, Java, Linux or Windows.

# About the Java Hands-on Labs

These hands-on labs are provided to give you a first-hand, technical experience on how you can leverage the Microsoft DevOps platform for Java development. The labs cover:

- Creating a new VSTS account
- Using the Agile  tools to plan and track work items
- Using VSTS with your Eclipse and IntelliJ
- Running Junit tests and analyzing code coverage with Jacoco and Cobertura
- Continuous Integration with Team Build or Jenkins
- Managing Technical Debt with SonarQube
- Deploying Docker containers to Azure with an Automated delivery pipeline

## Virtual Machine

Our partner [NorthWest Cadence](https://www.nwcadence.com/) has built a virtual machine image that is pre-configured with all the software you require to run through the labs. You can find instructions on provisioning and connecting to the virtual machine [here](https://github.com/nwcadence/java-dev-vsts).

## Target Audience

The image and the accompanying hand-on-labs is for a technical audience. As such, familiarity with Visual Studio Team Services, Java and Linux operating system would be preferred although it is not a strict prerequisite.

## Provisioning the Project using VSTSDemoGenerator

You can use [Visual Studio Team Services Demo Generator](https://vstsdemogenerator.azurewebsites.net) to provision a project with pre-defined data on to your VSTS account to follow the hands-on-labs. Choose **MyShuttle2** template from the dropdown.

## Hands on Labs

The labs should be followed in the following order, though there are some equivalent labs that allow you a "choose your adventure" experience:

<table width="70%">
   <thead>
      <tr>
         <th width="75%"><b>Lab Name</b></th>
      </tr>
   </thead>
   <tr>
      <td><a href="settingvstsproject/index.md">Setting up a new project on VSTS</a></td>
   </tr>
   <tr>
      <td><a href="agile/index.md">Creating an Agile workflow</a></td>
   </tr>
   <tr>
      <td><a href="dockerbuildagent/index.md">Set up a Docker build agent</a></td>
   </tr>
   <tr>
      <td><a href="intellijgit/index.md">Cloning a VSTS Repo - IntelliJ</a></td>
   </tr>
   <tr>
      <td><a href="eclipsegit/index.md">Cloning a VSTS Repo - Eclipse</a></td>
   </tr>
   <tr>
      <td><a href="mavenpmjenkins/index.md">Maven Package Management with VSTS and Jenkins</a></td>
   </tr>
   <tr>
      <td><a href="mavenpmvsts/index.md">Maven Package Management with VSTS Team Build</a></td>
   </tr>
   <tr>
      <td><a href="builddocker/index.md">Build Docker containers with VSTS</a></td>
   </tr>
   <tr>
      <td><a href="sonarqube/index.md">Managing Technical Debt with SonarQube and VSTS Team Build</a></td>
   </tr>
   <tr>
      <td><a href="releasemanagement/index.md">Release Management with VSTS</a></td>
   </tr>
   <tr>
      <td><a href="e2eintellij/index.md">End to End Workflow - IntelliJ</a></td>
   </tr>
   <tr>
      <td><a href="e2eeclipse/index.md">End to End Workflow - Eclipse</a></td>
   </tr>
</table>
