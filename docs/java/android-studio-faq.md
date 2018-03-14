---
title: FAQ for Android Studio with VSTS and TFS
description: Frequently Asked Questions about Android Studio with VSTS and TFS
ms.prod: vs-devops-alm
ms.technology: vs-devops-build 
ms.manager: douge
ms.author: douge
ms.reviewer: dastahel
ms.date: 01/31/2018
---
[//]: # (monikerRange: '>= tfs-2015')

# Android Studio Plug-in for VSTS & TFS Frequently Asked Questions (FAQ)

**Q: Where can I learn more about installing the Android Studio plug-in?**

**A:** Watch a how-to video on installing the plugin on our [YouTube channel](https://www.youtube.com/watch?v=vhDNLyMsXGk).

**Q: How can I import my Android Studio project into VSTS?**

**A:** Watch a how-to video on importing projects on our [YouTube channel](https://www.youtube.com/watch?v=D7bpC6KwrA4).

**Q: How can I checkout a VSTS Git repo from within Android Studio?**

**A:** Watch a how-to video on checking out projects on our [YouTube channel](https://www.youtube.com/watch?v=dzGVkna-Nzs).

**Q: How can I create a pull request using the Android Studio plugin?**

**A:** Watch a how-to video on pull requests on our [YouTube channel](https://www.youtube.com/watch?v=lcSXH23xrY8).

**Q: Where can I learn more about the VSTS Pull Request feature?**

**A:** This [Conduct a Git pull request](/vsts/git/tutorial/pullrequest) tutorial provides more details.

**Q: What if I can't see any repositories after signing in?**

**A:** In some rare cases, the list of repositories is empty after signing in with your VSTS account.  If that happens, you can click the **Team Foundation Server** tab and enter the URL to your VSTS account in the **Server URL** textbox and then click **Connect**.  If you don't know the URL to your VSTS account, the VSTS accounts you have access to will be listed at [https://app.vssps.visualstudio.com](https://app.vssps.visualstudio.com).

**Q: When I test the `tf` executable, I get a warning that the version detected is 0.0.0. How can I make it detect the actual version?**

**A:** This has been seen in version 14.0.3 and below of the TF Comand Line Tool when it defaults to not use English for the output. This has been fixed in the newer versions of the tool which can be  downloaded from [GitHub](https://github.com/Microsoft/team-explorer-everywhere/releases).

**Q: How do I collect logs to help troubleshoot an issue?**

**A:** First enable logging for `com.microsoft.alm`, reproduce the issue and send us the `idea.log` file:
1. Help->Configure Debug Log Settings...
2. In the **Custom Debug Log Configuration** textbox, add the following on its own line:
    `com.microsoft.alm`
3. Click OK
4. Try to reproduce the issue you encountered.
5. Help->Show Log in Finder/Explorer/File Manager
6. The file `idea.log` should be highlighted.  You can open it with a text editor to review its contents for sensitive information and to make sure there are entries containing `microsoft`.
7. Compress the file.
8. Create a [GitHub issue](https://github.com/Microsoft/vso-intellij/issues/new) and attach the file to it.
