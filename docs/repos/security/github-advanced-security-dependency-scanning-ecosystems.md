---
title: Supported package ecosystems for dependency scanning for GitHub Advanced Security for Azure DevOps 
titleSuffix: Azure Repos
description: Supported package ecosystems for dependency scanning for GitHub Advanced Security for Azure DevOps.
ms.service: azure-devops
ms.subservice: azure-devops-integration
ms.topic: reference 
ms.custom: cross-service
ms.author: laurajiang
author: laurajjiang
monikerRange: 'azure-devops'
ms.date: 07/31/2026
---

# Supported package ecosystems 

Dependency scanning supports both direct and transitive dependencies for all supported package ecosystems. Dependency scanning is unable to detect vendored dependencies in your repository. 

Due to how detection is run for dependency scanning, ensure you have a package restore step in your build pipeline so that the correct package version is determined, otherwise results may be missing or incomplete. 

## Ecosystems and versions

| Package manager  | Languages  | Supported formats | Development dependencies labeling | Supported versions |
|---|---|---|---|---|
|  [Cargo](#cargo) | Rust  | `Cargo.toml`, `Cargo.lock`  | Not supported | v1 |
|  CocoaPods | Swift  | `Podfile.lock`  | Not supported | n/a |
|  [Go modules](#go-modules) | Go  | `go.mod`, `go.sum`  | Not supported | n/a |
|  Gradle | Java  | `*.lockfile`  | Supported | n/a |
|  Maven | Java  | `pom.xml`  | Supported | n/a |
|  [npm](#npm) | JavaScript  | `package-lock.json`, `package.json`, `npm-shrinkwrap.json`, `lerna.json` | Supported | v6, v7 & lockfile <= v3 |
|  [NuGet](#nuget) | C# | `*.packages.config`,  `*.project.assets`, `*.csproj` | Not supported | n/a |
|  [pip](#pip) | Python  | `setup.py`, `requirements.txt`  | Not supported | n/a |
|  pnpm | JavaScript  | `package.json` | Supported | v7, v8 |
|  RubyGems | Ruby  |  `Gemfile.lock` | Not supported | n/a |
|  Yarn | JavaScript  | `package.json`  | Supported | v1, v2 |

## Cargo 

If `Cargo` cli installed with v1.77 or higher, `cargo metadata` is used, which is more accurate.

## Go modules

If using Go v1.17 or higher, `go.mod` is used directly, along with the `go cli` if it's present on the agent. Otherwise the `go.sum` file is scanned.

## Maven

Detection requires the `maven` CLI to be installed on the agent. 

Development dependencies are identified when they use the `test` dependency scope.

## npm

Dependency scanning detects any root `package.json` files but doesn't resolve specific package versions without a package restore at build time even if dependencies in the `package.json` aren't semantically versioned. 

Development dependencies are identified by the `devDependencies` property in `package.json` and the `dev` flag in `package-lock.json`.

## NuGet 

Without a package restore, dependency scanning doesn't resolve any specific package versions even if dependencies in the `*.csproj` aren't semantically versioned. 

## pip 

Use `pip v22.2.0` or higher to enable use of `pip report` scanning, which provides more accurate detection.

The environment variable `PIP_INDEX_URL` is used to determine what package feed should be used for `pip install --report detection`. The default value uses the PyPi index unless pip defaults are configured globally.

## pnpm

Development dependencies are identified by the `packages/{package}/dev` flag in the pnpm lockfile.

## Yarn

Development dependencies are identified by the `devDependencies` property in `package.json`.

## Related articles

- [Set up code scanning](github-advanced-security-code-scanning.md)
- [Set up dependency scanning](github-advanced-security-dependency-scanning.md)
- [Set up secret scanning](github-advanced-security-secret-scanning.md)
- [Learn about GitHub Advanced Security for Azure DevOps](github-advanced-security-security-overview.md)
