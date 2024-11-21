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
ms.date: 10/24/2024
---

# Supported package ecosystems 

Dependency scanning supports both direct and transitive dependencies for all supported package ecosystems. Dependency scanning is unable to detect vendored dependencies in your repository. 

Due to how detection is run for dependency scanning, ensure you have a package restore step in your build pipeline so that the correct package version is determined, otherwise results may be missing or incomplete. 

| Package manager  | Languages  | Supported formats | Supported versions |
|---|---|---|---|
|  [Cargo](./#cargo) | Rust  | `Cargo.toml`, `Cargo.lock`  | v1 |
|  CocoaPods | Swift  | `Podfile.lock`  | n/a |
|  [Go modules](#go-modules) | Go  | `go.mod`, `go.sum`  | n/a |
|  Gradle | Java  | `*.lockfile`  | n/a |
|  Maven | Java  | `pom.xml`  | n/a |
|  [npm](./#npm) | JavaScript  | `package-lock.json`, `package.json`, `npm-shrinkwrap.json`, `lerna.json` | v6, v7 & lockfile <= v3 |
|  [NuGet](./#nuget) | C# | `*.packages.config`,  `*.project.assets`, `*.csproj` | n/a |
|  [pip](./#pip) | Python  | `setup.py`, `requirements.txt`  | n/a |
|  pnpm | JavaScript  | `package.json` | v7, v8 |
|  RubyGems | Ruby  |  `Gemfile.lock` | n/a |
|  Yarn | JavaScript  | `package.json`  | v1, v2 |

## Cargo 

If `Cargo` cli installed with v1.77 or higher, `cargo metadata` is used, which is more accurate.

## Go modules

If using Go v1.17 or higher, `go.mod` is used directly, along with the `go cli` if it's present on the agent. Otherwise the `go.sum` file is scanned.

## Maven

Detection requires the `maven` CLI to be installed on the agent. 

## npm

Dependency scanning detects any root `package.json` files but doesn't resolve specific package versions without a package restore at build time even if dependencies in the `package.json` aren't semantically versioned. 

## NuGet 

Without a package restore, dependency scanning doesn't resolve any specific package versions even if dependencies in the `*.csproj` aren't semantically versioned. 

## pip 

Use `pip v22.2.0` or higher to enable use of `pip report` scanning, which provides more accurate detection.

The environment variable `PIP_INDEX_URL` is used to determine what package feed should be used for `pip install --report detection`. The default value uses the PyPi index unless pip defaults are configured globally.
