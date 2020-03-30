cutmuetia/azure DevOps---
title: Create a readme for your Git repo
titleSuffix: Azure Repos
description: Tips, advice, and suggestions on how to create a great readme file for your Git repo.
ms.assetid: fcd84ee1-909c-4837-9c39-bf036afe6232
toc: show
ms.technology: devops-code-git 
ms.author: sdanie
author: apawast
ms.topic: conceptual
ms.date: 03/14/2018
monikerRange: '>= tfs-2013'
---


# Create a README for your repo

#### Azure Repos | Azure DevOps Server 2019 | TFS 2018 | TFS 2017 | TFS 2015

Your Git repo should have a readme file so that viewers know what your code does and how they can get started using it. 
Your readme should speak to the following audiences:

- Users that just want to run your code
- Developers that want to build and test your code. Developers are also users.
- Contributors that want to submit changes to your code. Contributors are both developers and users.

Write your readme in [Markdown](../../project/wiki/markdown-guidance.md) instead of plain text. Markdown makes it easy to format text, include images, and link as needed to additional documentation from your readme.

Here are some great readmes that use this format and speak to all three audiences, for reference and inspiration:

- [ASP.NET Core](https://github.com/aspnet/Home)
- [Visual Studio Code](https://github.com/Microsoft/vscode)
- [Chakra Core](https://github.com/Microsoft/ChakraCore)

## Create an intro

Start your readme off with a short explanation describing your project. Add a screenshot or animated GIF in your intro if your project has a user interface. 
If your code relies on another application or library, make sure to state those dependencies in the intro or right below it. 
Apps and tools that run only on specific platforms should have the supported operating system versions noted in this section of the readme.

## Help your users get started

Guide users through getting your code up and running on their own system in the next section of your readme. 
Stay focused on the essential steps to get started with your code.
Link to the required versions of any prerequisite software so users can get to them easily.
If you have complex setup steps, document those outside your readme and link to them.

Point out where to get the latest release of your code. A binary installer or instructions on using your code through packaging tools is best.
If your project is a library or an interface to an API, put a code snippet showing basic usage and show sample output for the code in that snippet.   

## Provide build steps for developers

Use the next section of your readme to show developers how to build your code from a fresh clone of the repo and run any included tests.
Give details about the tools needed to build the code and document the steps to configure them to get a clean build. 
Break out dense or complex build instructions into a separate page in your documentation and link to it if needed.   

Provide the commands to run any test cases provided with the source code after the build is successful. 
Developers lean on these test cases to ensure that they don't break your code as they make changes. 
Good test cases also serve as samples developers can use to build their own test cases when adding new functionality.

## Help users contribute

The last section of your readme helps users and developers get involved to report problems and suggest ideas to make your code better.
Users should be linked to channels where they can open up bugs, request features, or get help using your code.   

Developers need to know what rules they need to follow to contribute changes, such as coding/testing guidelines and pull request requirements.
If you require a contributor agreement to accept pull requests or enforce a community code of conduct, this process should be linked to or documented in this section.
State what license the code is released under and link to the full text of the license.
