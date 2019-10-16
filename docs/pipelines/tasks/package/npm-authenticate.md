---
title: npm Authenticate task (for task runners)
ms.custom: seodec18
description: Don't use this task if you're also using the npm task. Provides npm credentials to an .npmrc file in your repository for the scope of the build. This enables npm task runners like gulp and Grunt to authenticate with private registries.
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: ad884ca2-732e-4b85-b2d3-ed71bcbd2788
ms.manager: mijacobs
ms.author: vijayma
author: vijayma
ms.date: 05/04/2018
monikerRange: 'azure-devops'
---

# Package: npm Authenticate task (for task runners)

**Azure Pipelines**

Use this task in a build or release pipeline to provide npm credentials to an .npmrc file in your repository for the scope of the build. This enables npm, as well as npm task runners like gulp and Grunt, to authenticate with private registries.

>[!NOTE]
> If you are using the npm task, you do not need to use the npm authenticate task. Instead use the feed configuration parameters that are available in the npm task.

::: moniker range="> tfs-2018"

## YAML snippet

[!INCLUDE [temp](../_shared/yaml/NpmAuthenticateV0.md)]

::: moniker-end

## Arguments

| Argument                                                                                           | Description                                                         |
| -------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `workingFile`<br/>.npmrc file to authenticate   | Path to the .npmrc file that specifies the registries you want to work with. Select the file, not the folder e.g. &quot;/packages/mypackage.npmrc&quot;. |
| `customEndpoint`<br/>Credentials for registries outside this organization/collection | (Optional) Comma-separated list of <a href="~/pipelines/library/service-endpoints.md#sep-npm">npm service connection</a> names for registries outside this organization/collection. The specified .npmrc file must contain registry entries corresponding to the service connections. If you only need registries in this organization/collection, leave this blank; the build’s credentials are used automatically. |
| [!INCLUDE [temp](../_shared/control-options-arguments-md.md)] | |


## Examples

### Restore npm packages for your project from a registry within your organization

If the only authenticated registries you use are Azure Artifacts registries in your organization, you only need to specify the path to an .npmrc file to the npmAuthenticate task.

#### .npmrc
```
registry=https://pkgs.dev.azure.com/{organization}/_packaging/{feed}/npm/registry/
always-auth=true
```

#### npm
```YAML
- task: npmAuthenticate@0
  inputs:
    workingFile: .npmrc
- script: npm ci
# ...
- script: npm publish
```

### Restore and publish npm packages outside your organization
If your .npmrc contains Azure Artifacts registries from a different organization or use a third-party authenticated package repository, you'll need to set up <a href="~/pipelines/library/service-endpoints.md#sep-npm">npm service connections</a> and specify them in the `customEndpoint` input.
Registries within your Azure Artifacts organization will also be automatically authenticated.

#### .npmrc
```
registry=https://pkgs.dev.azure.com/{organization}/_packaging/{feed}/npm/registry/
@{scope}:registry=https://pkgs.dev.azure.com/{otherorganization}/_packaging/{feed}/npm/registry/
@{otherscope}:registry=https://{thirdPartyRepository}/npm/registry/
always-auth=true
```

#### npm
```YAML
- task: npmAuthenticate@0
  inputs:
    workingFile: .npmrc
    customEndpoint: OtherOrganizationNpmConnection, ThirdPartyRepositoryNpmConnection
- script: npm ci
# ...
- script: npm publish -registry https://pkgs.dev.azure.com/{otherorganization}/_packaging/{feed}/npm/registry/
```
where `OtherOrganizationNpmConnection` and `ThirdPartyRepositoryNpmConnection` are the names of <a href="~/pipelines/library/service-endpoints.md#sep-npm">npm service connections</a> that have been configured and authorized for use in your pipeline, and have URLs that match those in the specified .npmrc file.


<tr>
<th style="text-align: center" colspan="2"><a href="~/pipelines/process/tasks.md#controloptions">Control options</a></th>
</tr>

</table>

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.

## Q & A

<!-- BEGINSECTION class="md-qanda" -->
### How does this task work?

This task searches the specified .npmrc file for registry entries, then appends authentication details for the discovered registries to the end of the file. For all registries in the current organization/collection, the build's credentials are used. For  registries in a different organization or hosted by a third-party, the registry URIs will be compared to the URIs of the <a href="~/pipelines/library/service-endpoints.md#sep-npm">npm service connections</a> specified by the `customEndpoint` input, and the corresponding credentials will be used. The .npmrc file will be reverted to its original state at the end of the pipeline execution.

### When in my pipeline should I run this task?

This task must run before you use npm, or an npm task runner, to install or push packages to an authenticated npm repository such as Azure Artifacts. There are no other ordering requirements.

### I have multiple npm projects. Do I need to run this task for each .npmrc file?

This task will only add authentication details to one .npmrc file at a time. If you need authentication for multiple .npmrc files, you can run the task multiple times, once for each .npmrc file. Alternately, consider creating an .npmrc file that specifies all registries used by your projects, running npmAuthenticate on this .npmrc file, then setting an environment variable to designate this .npmrc file as the npm per-user configuration file.

```YAML
- task: npmAuthenticate@0
  inputs:
    workingFile: $(agent.tempdirectory)/.npmrc
- script: echo ##vso[task.setvariable variable=NPM_CONFIG_USERCONFIG]$(agent.tempdirectory)/.npmrc
- script: npm ci
  workingDirectory: project1
- script: npm ci
  workingDirectory: project2
```

### My agent is behind a web proxy. Will npmAuthenticate set up npm/gulp/Grunt to use my proxy?

No. While this task itself will work behind a web proxy <a href="~/pipelines/agents/proxy.md">your agent has been configured to use</a>, it does not configure npm or npm task runners to use the proxy.

To do so, you can either: 
* Set the environment variables `http_proxy`/`https_proxy` and optionally `no_proxy` to your proxy settings. See [npm config](https://docs.npmjs.com/misc/config#https-proxy) for details. Note that these are commonly used variables which other non-npm tools (e.g. curl) may also use.

* Add the proxy settings to the [npm configuration](https://docs.npmjs.com/misc/config), either manually, by using [npm config set](https://docs.npmjs.com/cli/config#set), or by setting [environment variables](https://docs.npmjs.com/misc/config#environment-variables) prefixed with `NPM_CONFIG_`.
  >**Caution:**  
  >npm task runners may not be compatible with all methods of proxy configuration supported by npm.

* Specify the proxy with a command line flag when calling npm
  ```YAML
  - script: npm ci --https-proxy $(agent.proxyurl)
  ```

If your proxy requires authentication, you may need to add an additional build step to construct an authenticated proxy uri.
```YAML
- script: node -e "let u = url.parse(`$(agent.proxyurl)`); u.auth = `$(agent.proxyusername):$(agent.proxypassword)`; console.log(`##vso[task.setvariable variable=proxyAuthUri;issecret=true]` + url.format(u))"
- script: npm publish --https-proxy $(proxyAuthUri)
```

<!-- ENDSECTION -->
