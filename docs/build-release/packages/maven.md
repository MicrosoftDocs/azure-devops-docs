---
title: Use Team Build with Maven Package Mangement feeds | Visual Studio Team Services
description: Use Maven artifacts with Team Build in Visual Studio Team Services or Team Foundation Server
ms.prod: vs-devops-alm
ms.technology: vs-devops-package
ms.assetid: fc81d7ee-fa9a-4c04-ac8c-6269d91987d3
ms.manager: douge
ms.author: elbatk
ms.reviewer: dastahel
ms.date: 01/31/2018
---

# Set up Team Build and Maven

This guide covers the basics of using Team Build to work with Maven artifacts in Package Management feeds.
 
This walkthrough assumes that you've already added the correct build service identity to your feed. 

1. Create a new build definition and select the **Maven** template.
<br>
2. Fill in the path to your `POM.xml`, configure the Maven goal you'd like for your build.  Authentication to your VSTS feed should happen automatically.
<br>
