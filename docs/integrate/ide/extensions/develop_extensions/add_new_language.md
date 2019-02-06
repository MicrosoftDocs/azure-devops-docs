---
ms.prod: devops
ms.technology: devops-ecosystem
ms.topic: conceptual
title: I want to add a new language to Visual Studio
description: Information about adding language support to Visual Studio, with links to Java and Python repositories.
ms.assetid: 116E0CE9-F387-4614-B1C7-AB26E7060DF6
ms.manager: jillfra
monikerRange: '>= tfs-2013'
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# I want to add a new language to Visual Studio
Adding support for a new language to Visual Studio can contain:
* Syntax highlighting
* Statement completion
* Project/item templates
* Compile/run integration
* Debugger support

As a starting point take a look at these open source examples on GitHub
* [Python Tools for Visual Studio](https://github.com/Microsoft/PTVS)
* [Node.js Tools for Visual Studio](https://github.com/Microsoft/nodejstools)
* [Java Tools for Visual Studio](https://github.com/tunnelvisionlabs/JavaForVS)


The Visual Studio Common Project System (CPS) is a unified, extensible, scalable, and performant project system that ships in the box with Visual Studio. It is also rehostable to other hosts such as console apps and Azure web applications. It provides a rich, managed API that offers clients the ability to query and manipulate project data, as well as an extensible framework for project type authors to customize project behavior to suit their needs. For more information, see [Visual Studio Project System Extensibility Documentation](https://github.com/Microsoft/VSProjectSystem).

For additional information about adding a new language to Visual Studio, see [Language Service Essentials.](/visualstudio/extensibility/internals/legacy-language-service-essentials)

# See also

* [Publish your extension](../publish_extensions/publish.md)
* [SDK reference](../sdk.md)
* [Help - FAQ](../help/help.md)