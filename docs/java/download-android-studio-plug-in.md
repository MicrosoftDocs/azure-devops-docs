---
title: Get the Android Studio Azure DevOps Services plug-in
description: Information and download links for the Android Studio Azure DevOps Services plug-in
ms.prod: devops
ms.technology: devops-cicd 
ms.topic: conceptual
ms.custom: java
ms.manager: jillfra
ms.author: dastahel
author: davidstaheli
ms.reviewer: dastahel
ms.date: 01/31/2018
monikerRange: '>= tfs-2015'
---


# Azure DevOps Services Plugin for Android Studio

The Azure DevOps Services Plugin for Android Studio allows you to connect to your Git repositories on Azure DevOps Services and Team Foundation Server (TFS) in a seamless and intuitive way. You can also use this plugin to import your android development projects into Azure DevOps Services or create pull requests in your Azure DevOps Services/TFS Git repository.

*The plugin is compatible with `Android Studio 1.2 and up`.*


**Android Studio** is the official IDE for Android app development, based on IntelliJ IDEA. You can find out more about it at [http://developer.android.com/tools/studio/index.html](http://developer.android.com/tools/studio/index.html). 

The Azure DevOps Services plugin for Android Studio is available in the [Android Studio Plugin Repository](http://plugins.jetbrains.com/plugin/7981?pr=androidstudio).
The plugin can be installed from Android Studio by browsing the Plugin Repository.

1. In Android Studio, open plugin settings:
    - Linux: from the `File` menu, select `Settings...` then `Plugins`
    - Mac: from the `Android Studio` menu, select `Preferences...` then `Plugins`
    - Windows: from the `File` menu, select `Settings...` then `Plugins`
1. Click the `Browse repositories...` button and search for "Visual Studio Team Services". 
1. Click the `Install plugin` button and restart Android Studio. 

 You can also download the plugin to disk from the [Android Studio Plugin Repository](http://plugins.jetbrains.com/plugin/7981?pr=androidstudio) and install the downloaded JAR file.

1. In Android Studio, open plugin settings:
    - Linux: from the `File` menu, select `Settings...` then `Plugins`
    - Mac: from the `Android Studio` menu, select `Preferences...` then `Plugins`
    - Windows: from the `File` menu, select `Settings...` then `Plugins`
1. Click the `Install plugin from disk...` button and browse to the JAR file on disk.
1. Click the `Install plugin` button and restart Android Studio. 

## Next Steps

- Learn more about the Android Studio plugin by reading [Create a Git repo with IntelliJ or Android Studio](/azure/devops/repos/git/create-repo-intellij).

## Frequently Asked Questions (FAQ)

**Q:  What versions of Android Studio are supported?**

**A:** The plugin is supported and tested on Android Studio version 1.2 and later

**Q:  Is there support for TFVC repositories?**

**A:** The plugin supports both Git and TFVC. For more information on TFVC support, see the TFVC specific features listed [here](http://plugins.jetbrains.com/plugin/7981?pr=androidstudio).

**Q:  Is the source code for the plugin available?**

**A:** The source code is available on [GitHub](https://github.com/Microsoft/vso-intelliJ). It is open sourced under the MIT license and we welcome contributions.  
