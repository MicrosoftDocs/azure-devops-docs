---
title: FAQ for Android Studio with Azure DevOps Services and TFS
description: Frequently Asked Questions about Android Studio with Azure DevOps Services and TFS
ms.prod: devops
ms.technology: devops-cicd
ms.topic: reference
ms.custom: java
ms.manager: jillfra
ms.author: dastahel
author: davidstaheli
ms.reviewer: dastahel
ms.date: 01/31/2018
monikerRange: '>= tfs-2015'
---


# Android Studio Plug-in for Azure DevOps Services & TFS Frequently Asked Questions (FAQ)


* [Where can I learn more about installing the Android Studio plug-in?](#where-can-i-learn-more-about-installing-the-android-studio-plug-in)
* [Does the Android Studio plug-in support TFVC?](#does-the-android-studio-plug-in-support-tfvc)
  * [TFVC support](#tfvc-support)
  * [TFVC setup requirements](#tfvc-setup-requirements)
  * [Setting TFVC as the version control system](#setting-tfvc-as-the-version-control-system)
* [How can I import my Android Studio project into Azure DevOps?](#how-can-i-import-my-android-studio-project-into-azure-devops)
* [How can I checkout an Azure Repos Git repo from within Android Studio?](#how-can-i-checkout-an-azure-repos-git-repo-from-within-android-studio)
* [How can I create a pull request using the Android Studio plugin?](#how-can-i-create-a-pull-request-using-the-android-studio-plugin)
* [Where can I learn more about the Azure Repos Git Pull Request feature?](#where-can-i-learn-more-about-the-azure-repos-git-pull-request-feature)
* [What if I can't see any repositories after signing in?](#what-if-i-cant-see-any-repositories-after-signing-in)
* [When I test the tf executable, I get a warning that the version detected is 0.0.0. How can I make it detect the actual version?](#when-i-test-the-tf-executable-i-get-a-warning-that-the-version-detected-is-000-how-can-i-make-it-detect-the-actual-version)
* [How do I collect logs to help troubleshoot an issue?](#how-do-i-collect-logs-to-help-troubleshoot-an-issue)


### Where can I learn more about installing the Android Studio plug-in?

Watch a how-to video on installing the plugin on our [YouTube channel](https://www.youtube.com/watch?v=vhDNLyMsXGk).

### Does the Android Studio plug-in support TFVC?

Yes, TFVC support is available in the Android Studio plug-in.

* [TFVC support](#tfvc-support)
* [TFVC setup requirements](#tfvc-setup-requirements)
* [Setting TFVC as the version control system](#setting-tfvc-as-the-version-control-system)

#### TFVC support
 The current TFVC features supported are:
* Checkout a TFVC repository from Azure DevOps Services or Team Foundation Server 2015+.
* Execute all basic version control actions such as add, delete, rename, move, etc.
* View local changes and history for your files.
* Create, view, and edit your workspace.
* Checkin and update local files.
* Merge conflicts from updates.
* Create and merge branches.
* Create labels.
* Lock and unlock files and directories.
* Associate work items with checkins.
* Supports using a TFS proxy.
* Local workspace support only.

The TFVC functionality is available from the `VCS` dropdown menu in the toolbar or from right clicking in the Project window. A `TFVC`
menu item will display the options available for you to use. A demo of the TFVC features can be found <a href="https://youtu.be/va5rM5ZaXIg" target="_blank">here</a>.

#### TFVC setup requirements
You must have the <a href="https://github.com/Microsoft/team-explorer-everywhere/releases" target="_blank">TF command line tool</a> installed to be able
to use TFVC features. The minimum version supported by the plugin is 14.0.3. To install the tool, download the latest "TEE-CLC-14.\*.\*.zip" file and extract it
to a known location. After extracting the files, you must accept the license agreement. To do so, open a Command Prompt/Terminal
window, navigate to the extracted directory, and run `tf eula`. After reading the EULA, enter `y` to accept it. **NOTE**: If you forget to do this,
the plugin may fail to load with a RuntimeException.

For the tool to be detected by the plugin, you must set the location of the executable in the Settings/Preferences menu by following these instructions:

1. Go to `File` then `Settings` in the toolbar for Windows and Linux. For Mac, go to `Android Studio` then `Preferences`.
2. Choose `Version Control` from the left menu then `TFVC`.
3. In the `Path to tf executable` text field, navigate to the location of the tf executable.
4. Click `Test` to test that the executable has been found and is working as expected.
5. Click `Apply` then `OK` to save and exit.

If you intend to use the `tf` tools from the command line, you may want to add this folder to your `PATH` environment variable as well.

If you do not want to get prompted to enter your credentials for each `tf` command that you run, set the `TF_AUTO_SAVE_CREDENTIALS` environment variable to `1`.

#### Setting TFVC as the version control system
If TFVC does not come up as your version control system (VCS) then it can be set manually. Go to the `VCS` dropdown menu in the toolbar
and select `Enable Version Control Integration`. Select TFVC from the dropdown menu and click `OK`.



### How can I import my Android Studio project into Azure DevOps?

Watch a how-to video on importing projects on our [YouTube channel](https://www.youtube.com/watch?v=D7bpC6KwrA4).

### How can I checkout an Azure Repos Git repo from within Android Studio?

Watch a how-to video on checking out projects on our [YouTube channel](https://www.youtube.com/watch?v=dzGVkna-Nzs).

### How can I create a pull request using the Android Studio plugin?

Watch a how-to video on pull requests on our [YouTube channel](https://www.youtube.com/watch?v=lcSXH23xrY8).

### Where can I learn more about the Azure Repos Git Pull Request feature?

This [Conduct a Git pull request](../repos/git/pullrequest.md) tutorial provides more details.

### What if I can't see any repositories after signing in?

In some rare cases, the list of repositories is empty after signing in with your Microsoft or Azure Active Directory account.  If that happens, you can click the **Team Foundation Server** tab and enter the URL to your organization in the **Server URL** textbox and then click **Connect**.  If you don't know the URL to your organization, the Microsoft and Azure AD accounts you have access to will be listed at [https://app.vssps.visualstudio.com](https://app.vssps.visualstudio.com).

### When I test the tf executable, I get a warning that the version detected is 0.0.0. How can I make it detect the actual version?

This has been seen in version 14.0.3 and below of the TF Command Line Tool when it defaults to not use English for the output. This has been fixed in the newer versions of the tool which can be  downloaded from [GitHub](https://github.com/Microsoft/team-explorer-everywhere/releases).


### How do I collect logs to help troubleshoot an issue?

First enable logging for `com.microsoft.alm`, reproduce the issue and send us the `idea.log` file:
1. Help->Configure Debug Log Settings...
2. In the **Custom Debug Log Configuration** textbox, add the following on its own line:
    `com.microsoft.alm`
3. Click OK
4. Try to reproduce the issue you encountered.
5. Help->Show Log in Finder/Explorer/File Manager
6. The file `idea.log` should be highlighted.  You can open it with a text editor to review its contents for sensitive information and to make sure there are entries containing `microsoft`.
7. Compress the file.
8. Create a [GitHub issue](https://github.com/Microsoft/vso-intellij/issues/new) and attach the file to it.
