---
title: FAQ for Team Explorer Everywhere and Eclipse
description: Frequently Asked Questions for Team Explorer Everywhere and Java Eclipse
ms.prod: devops
ms.technology: devops-cicd
ms.topic: reference 
ms.custom: java
ms.manager: jillfra
ms.author: dastahel
author: davidstaheli
ms.reviewer: dastahel
ms.date: 01/31/2018
monikerRange: '>= tfs-2013'
---


# Eclipse Plug-in for Azure DevOps Services & TFS Frequently Asked Questions (FAQ)

* [Is there a Beginner's Guide for TEE?](#is-there-a-beginners-guide-for-tee)
* [Is there a way to view local repos in TEE 2015 in Eclipse (Mars) or is it assumed one would use the other Git tooling for Eclipse?](#is-there-a-way-to-view-local-repos-in-tee-2015-in-eclipse-mars-or-is-it-assumed-one-would-use-the-other-git-tooling-for-eclipse)
* [Also, is there an easy way (using TEE) to "import" a local Git repo and push it up to Azure DevOps Services? Or is the Git command-line the way to do it?](#also-is-there-an-easy-way-using-tee-to-import-a-local-git-repo-and-push-it-up-to-azure-devops-services-or-is-the-git-command-line-the-way-to-do-it)
* [Where can I learn more about the Azure Toolkit for Eclipse?](#where-can-i-learn-more-about-the-azure-toolkit-for-eclipse)
* [The TEE Command Line Client has removed the "tf profile" command. How can I connect to TFS without having to repeatedly type my credentials?](#the-tee-command-line-client-has-removed-the-tf-profile-command-how-can-i-connect-to-tfs-without-having-to-repeatedly-type-my-credentials)
* [How can I fix the "Authentication not supported" error when using Eclipse to perform Git operations with TFS?](#how-can-i-fix-the-authentication-not-supported-error-when-using-eclipse-to-perform-git-operations-with-tfs)
* [Does the Eclipse plug-in support TFVC?](#does-the-eclipse-plug-in-support-tfvc)

### Is there a Beginner's Guide for TEE?

Absolutely.  You can find it on MSDN at [Team Foundation Server Plug-in for Eclipse - Beginner's Guide](https://msdn.microsoft.com/library/hh913026(v=vs.120).aspx).

### Is there a way to view local repos in TEE 2015 in Eclipse (Mars) or is it assumed one would use the other Git tooling for Eclipse?

It is expected that one would use the standard eGit tooling in Eclipse to view local repos, but TEE does have a "Repositories" view in which you can see which repos are available on the server.

### Also, is there an easy way (using TEE) to "import" a local Git repo and push it up to Azure DevOps Services? Or is the Git command-line the way to do it?

There's documentation on how to do it in TEE at [Sharing Eclipse Projects in Team Foundation Server](https://msdn.microsoft.com/library/hh568708(v=vs.120).aspx).
That article specifically shows TFVC but when you go to Share the project, you'll be prompted to choose a repository type (Git or TFVC).

### Where can I learn more about the Azure Toolkit for Eclipse?

[Azure Toolkit for Eclipse web page](https://msdn.microsoft.com/library/azure/hh694271.aspx)

### The TEE Command Line Client has removed the "tf profile" command. How can I connect to TFS without having to repeatedly type my credentials?

You can use Kerberos for authentication to a TFS server. More information can be found [here](https://msdn.microsoft.com/library/gg475929%28v=vs.120%29.aspx). This article mentions the "tf profile" command because it still existed at that time this article was written but that step can be skipped now all together.

### How can I fix the "Authentication not supported" error when using Eclipse to perform Git operations with TFS?

Eclipse's EGit is built on JGit, and unfortunately, recent versions of JGit actively reject NTLM authentication, resulting in "Authentication not supported" when connecting to on-premises installations of TFS that require NTLM.  We're working to improve this situation in the next version of TEE, but until then, you can do one of the following:
* Use [Cntlm](http://cntlm.sourceforge.net/), a locally-installed proxy that adds NTLM authentication on-the-fly
* Use an older version of Eclipse/EGit/JGit
* [Enable basic authentication with SSL in IIS on your TFS server](https://github.com/Microsoft/tfs-cli/blob/master/docs/configureBasicAuth.md) 
* Enable Kerberos authentication in IIS on your TFS server (the default for the next version of TFS after TFS 2015):
  1. In IIS manager, click on the TFS site on the left under Connections and open up the "Authentication" section under IIS.  Set "ASP.NET Impersonation" to Enabled and "Windows Authentication" to Enabled.
  2. Under "Windows Authentication" right click and select "Providers."  Add/enable the "Negotiate" and "NTLM" providers.
  3. Under "Windows Authentication" right click and select "Advanced Settings."  Uncheck "Enable Kernel-mode" because it is incompatible with Kerberos.

### Does the Eclipse plug-in support TFVC?

Yes, see [Share your code in TFVC using Eclipse](../repos/tfvc/share-your-code-in-tfvc-eclipse.md) for details.
