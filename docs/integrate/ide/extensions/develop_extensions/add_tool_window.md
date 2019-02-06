---
ms.prod: devops
ms.technology: devops-ecosystem
ms.topic: conceptual
title: I want to add a custom tool window
description: A walkthrough to show you how to create a custom tool window.
ms.assetid: 66F28F7A-3369-4238-BF01-E63C912827A1
ms.manager: jillfra
monikerRange: '>= tfs-2013'
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# I want to add a custom tool window

1.	Create a VSIX project named FirstWindow.
2.	When the project opens, add a tool window item template named FirstWindow.
  1.  In the Solution Explorer, right-click the project node and select Add / New Item.
  2.  In the Add New Item dialog, go to Visual C# / Extensibility and select Custom Tool Window.
  3.  In the Name field at the bottom of the window, change the tool window file name to FirstWindow.cs.
3.	Build the project and start debugging.
4.	In the Experimental Instance, go to View / Other Windows. 
5.  You should see a menu item for FirstWindow. Click it.
6.  You should see a tool window with the title FirstWindow and a button saying Click Me!.
