---
title: Visual Studio Online updates - Feb 28
description: VSTS release notes for February 28 2014
ms.prod: devops
ms.technology: devops-release-notes
ms.manager: douge
ms.assetid: 6b3bfa29-ef59-4d97-85cb-f604e6ba9052
ms.date: 06/01/2016
ms.author: douge
author: yukom
---

# Visual Studio Online updates - Feb 28

Today’s update delivers some nice capabilities for teams developing Java projects on Visual Studio Online. This update coincides with the release of [Team Explorer Everywhere 2013 Update 1](https://www.microsoft.com/download/details.aspx?id=40785). The combination together enable more options for where you can build and manage Java. The key service-specific highlights are described below. See [Brian Harry's blog](http://blogs.msdn.com/b/bharry/) to learn more about how to start using some of these new features.

## Build support for Java code managed in Git

With today’s update, Java code managed in a Git repository on Visual Studio Online can be built on the hosted build controller using Ant or Maven. Prior to this, only Java code in Team Foundation Version Control (TF VC) projects could be built. Team Explorer Everywhere 2013 Update 1 provides support for creating a build definition for Git-based projects, and just like with a .NET build defined in Visual Studio, you can control how the build is triggered and, in the case of Continuous Integration (CI), you can control what branches a code push will trigger a build on.

![Build support for Java code managed in Git](_img/2_28_01.png)

## Java JDK, Ant, and Maven libraries preinstalled in hosted build

The latest versions of the Oracle Java JDK, Apache Ant, and Apache Maven libraries are now available on the hosted build controller and no longer need to be checked into version control. This greatly simplifies the setup process for new Java builds and speeds up build time due to these libraries not needing to be extracted on every build.

For existing small and medium Java projects being built on the service today, a noticeable improvement in build time should be seen once you update your build definitions and exclude the Java JDK and Ant libraries from the build workspace and remove the ANTServerPath and JavaServerPath properties from your tfsbuild.proj files.

## Maven support for TF version control projects

Maven can now be used to build Java projects managed in TF VC projects on Visual Studio Online. Previously, the only build technology option available for Java projects on a hosted build controller was Ant.

To learn more about setting up a build for Java project on Visual Studio Online, see the Build your Eclipse projects page on the Get Started area of visualstudio.com.

Thanks,

Jamie Cool