---
title: Set up your client's npmrc
description: Authenticating to feeds with npm in VSTS
ms.assetid: A5364E3A-3918-4318-AAE0-430EA91AD5F1
ms.prod: vs-devops-alm
ms.technology: vs-devops-package
ms.manager: douge
ms.author: amullans
ms.date: 09/01/2017
---

[//]: # (monikerRange: '>= tfs-2017') 

# Set up your client's npmrc

**VSTS** | **TFS 2018** | **TFS 2017**

[!INCLUDE [](../_shared/availability-npm.md)]

All Package Management feeds require authentication, so you'll need to store credentials for the feed before you can install or publish packages. npm uses [.npmrc configuration files](https://docs.npmjs.com/files/npmrc) to store feed URLs and credentials.

## Where are my **_.npmrc_** files?

VSTS recommends using two **_.npmrc_** files: 

1. One at the root of your project that contains *configuration* that's shared with the whole team.
2. One in your user profile folder (`$home`, `~`, etc. depending on your shell) that contains *credentials* and never leaves your machine.

This enables you to share your configuration with the whole team while keeping your credentials secure. 

## Set up authentication on your dev box
At this point you should have a project specific **_.npmrc_** containing only your Feed’s registry information that you discovered from the CtF dialog.  There should be no credentials in this file and the file itself is usually adjacent to your project’s **_package.json_**.  

> **IMPORTANT:** There can only be a single “registry=” line in your **_.npmrc_**.  Multiple registries are possible with scopes (discussed later) and our new upstream feature (discussed here).

### Windows
If you are developing on Windows, we recommend that you use `vsts-npm-auth` to fetch credentials and inject them into your **_~/.npmrc_** on a periodic basis.  The easiest way to set this up is to install `vsts-npm-auth` globally (i.e. `npm install -g vsts-npm-auth`) and then add a run script in your project’s **_package.json_**.  

```json
"scripts": {
    "refreshVSToken ": "vsts-npm-auth -config .npmrc"
}
```

###\*nix
If you are developing on \*nix, `vsts-npm-auth` is not supported and we recommend generating a token in the following manner for your **_$HOME/.npmrc_**

### macOS, Linux, Windows Bash Shell, and all TFS users
For **macOS, Linux, and Windows Bash Shell** users on **VSTS**, and all **Team Foundation Server** users, the *Connect to feed* dialog will generate an appropriately-formatted token that you can place into your **_.npmrc_** file.

[!INCLUDE [](../_shared/npm/npmrc.md)]

## Set up authentication in a build task

### Without a Task Runner
* We need to get some screenshots of a simple npm install using “Feeds in my .npmrc” can use buildcanary
* Need to get some screenshots of a simple npm install using “Feeds I select here”  can use buildcanary

### With a Task Runner (e.g. make gulp work)
* Need to demonstrate how to use “NPM Authenticate” to inject credentials into a .npmrc.  We have an example on su0 an buildcanary

## Troubleshooting `vsts-npm-auth`

If you receive an error like:

* Command Prompt: `'vsts-npm-auth' is not recognized as an internal or external command, operable program or batch file.`
* PowerShell: `vsts-npm-auth : The term 'vsts-npm-auth' is not recognized as the name of a cmdlet, function, script file, or operable program.`

then it's likely that the npm modules folder is not in your path. 

To fix this, re-run Node.js setup and ensure the `Add to PATH` option and its child options are selected for installation.

![Add to PATH install option in Node.js setup](_img/node-setup.png)

Alternatively, you can edit the PATH variable to add `%APPDATA%\npm` (Command Prompt) or `$env:APPDATA\npm` (PowerShell).