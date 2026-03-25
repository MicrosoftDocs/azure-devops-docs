---
title: Create a README File for Your Git Repo
titleSuffix: Azure Repos
description: Tips, advice, and suggestions on how to create a README file for your Git repo.
ms.assetid: fcd84ee1-909c-4837-9c39-bf036afe6232
toc: show
ms.service: azure-devops-repos
ms.custom: wiki, devdivchpfy22
ms.topic: how-to
ms.date: 06/13/2022
monikerRange: '<= azure-devops'
ms.subservice: azure-devops-repos-git
---


# Create a README file for your repo

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Your Git repo should have a README file so that viewers know what your code does and how they can get started using it. Your README file should speak to the following audiences:

- Users who want to run your code.
- Developers who want to build and test your code. Developers are also users.
- Contributors who want to submit changes to your code. Contributors are both developers and users.

Write your README file in [Markdown](../../project/wiki/markdown-guidance.md) instead of plain text. Markdown makes it easy to format text, include images, and link to more documentation from your README file.

Here are some README files that use this format and speak to all three audiences. Use them for reference and inspiration:

- [ASP.NET Core](https://github.com/aspnet/Home)
- [Visual Studio Code](https://github.com/Microsoft/vscode)
- [Chakra Core](https://github.com/Microsoft/ChakraCore)

## Prerequisites

[!INCLUDE [azure-repos-prerequisites](includes/azure-repos-prerequisites.md)]

## Create an introduction

Begin your README file with a short explanation that describes your project. Add a screenshot or animated GIF in your introduction if your project has a user interface. If your code relies on another application or library, make sure to state those dependencies in the introduction or right underneath it. Apps and tools that run only on specific platforms should have the supported operating system versions noted in this section of the README file.

## Help your users get started

In the next section of your README file, guide users through getting your code up and running on their own system. Stay focused on the essential steps to get started with your code. Link to the required versions of any prerequisite software so that users can get to them easily. If you have complex setup steps, document those steps outside your README file and link to them.

Tell readers where to get the latest release. Provide one of the following items:

- A link to a binary installer or prebuilt package.
- Installation instructions by using a package manager (for example, npm install, pip install, or dotnet add package).

If your project is a library or an API wrapper, include a minimal code snippet that shows basic usage, followed by the expected output. This information helps readers verify their setup and understand what the library does at a glance.

## Provide build steps for developers

Use the next section of your README file to show developers how to build your code from a fresh clone of the repo and run any included tests. Do the following steps:

- Give details about the tools needed to build the code and document the steps to configure them to get a clean build.
- Break out dense or complex build instructions into a separate page in your documentation and link to it if needed.
- Run through the instructions as you write them to verify that the instructions work for a new contributor.

Remember, you might be the developer who relies on these instructions after not working on a project for some time.

Include the commands to run any test cases that are provided with the source code after the build is successful. Developers lean on these test cases to ensure that they don't break your code as they make changes. Good test cases also serve as samples that developers can use to build their own test cases when they add new functionality.

## Help users contribute

The last section of your README file helps users and developers to get involved in reporting problems and suggesting ideas to make your code better. Users should be linked to channels where they can open up bugs, request features, or get help using your code.

Developers need to know what rules they need to follow to contribute changes, such as coding/testing guidelines and pull request requirements. If you require a contributor agreement to accept pull requests or enforce a community code of conduct, this process should be linked to or documented in this section. State what license the code is released under, and link to the full text of the license.
