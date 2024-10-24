---
title: Supported package ecosystems for dependency scanning for GitHub Advanced Security for Azure DevOps 
titleSuffix: Azure Repos
description: Supported package ecosystems for dependency scanning for GitHub Advanced Security for Azure DevOps
ms.service: azure-devops
ms.subservice: azure-devops-integration
ms.topic: reference 
ms.custom: cross-service
ms.author: laurajiang
author: laurajjiang
monikerRange: 'azure-devops'
ms.date: 09/20/2023
---

# Supported package ecosystems 

Dependency scanning supports both direct and transitive dependencies for all supported package ecosystems. 

| Package manager  | Languages  | Supported formats |
|---|---|---|
|  Cargo | Rust  | `Cargo.toml`, `Cargo.lock`  | 
|  CocoaPods | Swift  | `Podfile.lock`  | 
|  Go modules | Go  | `go.mod`, `go.sum`  | 
|  Gradle | Java  | `*.lockfile`  | 
|  Maven | Java  | `pom.xml`  | 
|  npm | JavaScript  | `package-lock.json`, `package.json`, `npm-shrinkwrap.json`, `lerna.json` | 
|  NuGet | C# | `*.packages.config`,  `*.project.assets`, `*.csproj` | 
|  pip | Python  | `setup.py`, `requirements.txt`  | 
|  pnpm | JavaScript  | `package.json` | 
|  RubyGems | Ruby  |  `Gemfile.lock` | 
|  Yarn | JavaScript  | `package.json`  | 


