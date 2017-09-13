---
title: Learn about release views for package CI/CD
description: Release views enable continuous integration and delivery of NuGet and npm packages in Package Management for VSTS and Team Foundation Server
ms.assetid: 28527A09-8025-4615-A746-9D213CF8202C
ms.prod: vs-devops-alm
ms.technology: vs-devops-package
ms.topic: get-started-article
ms.manager: douge
ms.author: amullans
ms.date: 09/01/2017
---

# Learn about release views for package CI/CD

**VSTS**

*If you're familiar with the principles behind release views, you can jump to the [docs page](views.md) to quickly start using them.*

Release views enable you to communicate the quality of a package-version after that package-version has been tested and/or validated. 

## Package changes: communicating nature, risk, and quality

When creating packages in continuous integration and delivery scenarios, it's important to convey 3 pieces of information: the *nature* of the change, the *risk* of the change, and the *quality* of the package.

<p style="text-align: center;">
<img alt="A semantic version number: 1.2.3-beta2. The 1.2.3 represents the nature of the change; the -beta2, the risk of the change." src="_img/release-views-quality-nature.png" height="150px">
</p>

### Nature and risk

Because the nature and the risk of the change both pertain to the *change* itself&mdash;i.e. what you set out to do&mdash;they're both generally known at the outset of the work. You know if you're introducing new features, making updates to existing features, or patching bugs; this is the *nature* of your change. And, you know if you're still making changes to the API surface of your application; this is one facet of the *risk* of your change. Many NuGet users use [Semantic Versioning](http://semver.org) (SemVer) notation to convey these two pieces of information; SemVer is a widely used standard and does a good job of communicating this information.

### Quality

However, the *quality* of the *package* generally isn't known until validation, which comes after your change is built and packaged. Because of this, it's not feasible to communicate the quality in the version number, which is specified during packaging and before validation. There are workarounds to pre-validate (e.g. by consuming the build's DLLs directly before they're packaged; or, publishing packages to a "debug" or "CI" feed, validating, and re-publishing to a "release" feed), but none that we've seen can truly guarantee that the built package meets the correct quality standard. 

<p style="text-align: center;">
<img alt="Release views workflow: make changes, build, package, validation, release, and repeat." src="_img/release-views-flow.png" height="400px">
</p>

## Release views communicate quality

Release views enable you to communicate the quality of a package after it's been validated. You create SemVer-compliant packages in CI/CD that communicate the nature and risk of your changes using the build number, then promote the package into a release view to show your consumers that it's of a certain quality (e.g. `prerelease`, `release`, etc.). So, a release view enables your consumers to see only the subset of versions of each package that are tested, validated, and ready to go.

<p style="text-align: center;">
<img alt="With release views, the quality of the change is communicated by the release view, rather than as part of the version number." src="_img/release-views-quality-tags.png" height="150px">
</p>

Now, [get started](views.md) with release views.