---
ms.prod: devops
ms.technology: devops-ecosystem
ms.topic: conceptual
title: FAQ for Visual Studio extensions
description: Frequently asked questions (FAQ) for building Visual Studio extensions.
ms.assetid: 58B3A4FE-7188-450F-8402-EA9DFCD878E3
ms.manager: jillfra
monikerRange: '>= tfs-2013'
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# FAQ

If you don't find an answer to your question here, try the [ExtendVS Gitter forum](https://gitter.im/Microsoft/extendvs).

<!-- BEGINSECTION class="md-qanda" -->

## General
<a name="marketplace"></a>
#### Q: How do I add my extension to the Visual Studio Marketplace?

A: The Visual Studio Marketplace is currently in preview. Continue managing your Visual Studio extensions through the [Gallery](https://visualstudiogallery.msdn.microsoft.com/). Once the Marketplace is ready, your extension will be automatically migrated to the Marketplace.


<a name="add_2013_support"></a>
#### Q: I have a Visual Studio 2015 Extension, how do I add Visual Studio 2013 support for it?

A: Reference the 2013 assembly when you build instead of the 2015 assembly. Visual Studio 2015 contains a binding redirect to ensure it continues to work when you run it within Visual Studio 2015.

##Features and bugs
<a name="feature"></a>
#### Q: I have a feature request, how do I report it?

A: Submit your feature request at [Visual Studio UserVoice](https://visualstudio.uservoice.com/forums/121579-visual-studio-2015/category/115698-extensibility).

<a name="bug"></a>
#### Q: I found a bug, how do I report it?

A: Submit your bug report through the [report a problem option within Visual Studio](/visualstudio/ide/how-to-report-a-problem-with-visual-studio-2017).

<!-- ENDSECTION -->
