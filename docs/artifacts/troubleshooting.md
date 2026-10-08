---
title: Troubleshoot Azure Artifacts
description: Troubleshoot Azure Artifacts publishing, restore, upstream, and storage issues across supported package technologies.
ms.service: azure-artifacts
ms.topic: how-to
ms.date: 09/25/2026
monikerRange: "<=azure-devops"
"recommendations": "true"
zone_pivot_groups: artifacts-troubleshooting-technology
---

# Troubleshoot Azure Artifacts

[!INCLUDE [version-lt-eq-azure-devops](../includes/version-lt-eq-azure-devops.md)]

Use this article to troubleshoot the most common Azure Artifacts issues across NuGet, .NET, npm, Maven, Gradle, Python, Cargo, and Universal Packages. Start with the common feed checks if the failure affects multiple clients or multiple package types. If the issue is specific to one package manager, select the matching pivot and go directly to the package-specific guidance.

## Common checks for any package type

Before you troubleshoot a specific client, verify these service-level requirements:

1. Confirm that the feed URL in your client configuration matches the feed scope. Project-scoped feeds and organization-scoped feeds use different URLs, and the wrong endpoint usually causes authentication or package-not-found failures.

1. Confirm that your role matches the operation you are trying to perform. You need at least **Feed Publisher (Contributor)** to publish packages, **Feed and Upstream Reader (Collaborator)** to save packages from upstream sources, and feed owner or administrator permissions to change upstream source settings.

1. If you're installing packages through an upstream source, remember that readers can consume only packages that are already saved to the feed. The first save must be done by a collaborator or higher.

1. If a publish fails after a package version was already used, check whether the version already exists. Azure Artifacts package versions are immutable and can't be overwritten or reused, even if the package was later deleted.

1. If your organization uses a firewall or proxy, allow the Azure Artifacts endpoints listed in [Allowed address lists and network connections](../organizations/security/allow-list-ip-url.md#azure-artifacts).

::: zone pivot="nuget-dotnet"

## Troubleshoot NuGet and .NET

Use this pivot for `nuget.exe` and the .NET CLI because both clients depend on the same feed URLs, permissions, package immutability rules, and Azure Artifacts authentication patterns.

### Authentication prompt doesn't appear

Ensure the Azure Artifacts Credential Provider is installed and you're using NuGet version `4.8.0.5385` or later. If you're using `nuget.exe`, see [Connect to Azure Artifacts feeds with NuGet.exe](nuget/nuget-exe.md). If you're using the .NET CLI, confirm that your project setup follows [Project setup (dotnet)](nuget/dotnet-setup.md).

### Publish fails because the version already exists

Azure Artifacts doesn't allow you to overwrite an existing package version. Update the package version, rebuild the package, and publish again.

### Publish fails with a 403 error

This error usually means one of two things:

- Your account doesn't have the **Feed Publisher (Contributor)** role or higher.
- You're trying to publish a version that was already used and is now permanently reserved.

If the permissions are correct and the version is new, verify that your target URL points to the expected project-scoped or organization-scoped feed.

### Publish or restore fails behind a firewall or proxy

Allow the Azure Artifacts domain URLs and IP addresses described in [Allowed address lists and network connections](../organizations/security/allow-list-ip-url.md#azure-artifacts), and then retry the operation.

### Push command requires an API key even though Azure Artifacts ignores it

This requirement is expected. NuGet still requires a nonempty `-ApiKey` argument for push commands, but Azure Artifacts ignores the value when the real authentication is handled by the credential provider.

### Packages can't be searched through upstream sources in NuGet Package Explorer

This limitation is expected. Searching upstream packages from NuGet Package Explorer isn't supported.

### Related setup and task articles

- [Project setup (dotnet)](nuget/dotnet-setup.md)
- [Project setup (NuGet.exe)](nuget/nuget-exe.md)
- [Publish NuGet packages (dotnet)](nuget/dotnet-exe.md)
- [Publish NuGet packages (NuGet.exe)](nuget/publish.md)

::: zone-end

::: zone pivot="npm"

## Troubleshoot npm

### `vsts-npm-auth` isn't recognized

On Windows, this error usually means the npm global tools folder isn't on your `PATH`. Rerun the Node.js setup and select **Add to PATH**, or add `%APPDATA%\npm` for Command Prompt or `$env:APPDATA\npm` for PowerShell.

### npm returns `E401` or can't authenticate

If you're using Windows and `vsts-npm-auth`, refresh the token:

```cmd
vsts-npm-auth -config .npmrc -F
```

Azure Artifacts npm tokens in the user-level `.npmrc` can expire. Rerun `vsts-npm-auth -config .npmrc` to refresh the token.

### Authentication still fails after refreshing the token

Reset the Windows helper configuration:

1. Uninstall `vsts-npm-auth`.
1. Clear the npm cache.
1. Delete the current `.npmrc` file.
1. Reinstall `vsts-npm-auth` from the public npm registry.

If you're on macOS, Linux, or Azure DevOps Server, don't use `vsts-npm-auth`. Those flows require a PAT in the user-level `.npmrc` file instead.

### Publish fails with a 403 error

If the error happens during `npm publish`, first verify that you have the **Feed Publisher (Contributor)** role or higher. If permissions are correct, update the package version in `package.json` and publish again because npm package versions in Azure Artifacts are immutable.

### Packages restore from the wrong registry or not at all

npm supports only one `registry` setting per config context. If you need packages from more than one source, use [upstream sources](npm/upstream-sources.md) or [scopes](npm/scopes.md) instead of defining multiple `registry` entries.

### Credentials are in the wrong `.npmrc` file

Keep the feed URL in the project-level `.npmrc` next to `package.json` and keep credentials in the user-level `.npmrc`. This prevents accidental check-in of credentials and aligns with the supported Azure Artifacts npm setup.

### Related setup and task articles

- [Project setup](npm/npmrc.md)
- [Publish npm packages](npm/publish.md)
- [Restore npm packages](npm/restore-npm-packages.md)
- [Use packages from the npm registry](npm/upstream-sources.md)

::: zone-end

::: zone pivot="maven-gradle"

## Troubleshoot Maven and Gradle

Use this pivot for Maven and Gradle package workflows because both rely on the same Maven feed endpoint and the same upstream-source limitations.

### Authentication fails or Maven returns 401 errors

Make sure the repository `id` in `pom.xml` matches the server `id` in your user-level `settings.xml`. Azure Artifacts uses that identifier to map the repository entry to the credentials stored in `settings.xml`.

Also verify that the PAT in `settings.xml` has **Packaging** > **Read & write** scope and that the file stays local to the machine instead of being committed to source control.

### Publish or restore targets the wrong feed

Verify that the feed URL matches the scope of the feed you created. Project-scoped and organization-scoped feeds use different endpoints in Azure DevOps Services, and Azure DevOps Server uses a different host path again.

### Publish or restore fails behind a firewall or proxy

If your organization filters outbound traffic, allow the Azure Artifacts endpoints listed in [Allowed address lists and network connections](../organizations/security/allow-list-ip-url.md#azure-artifacts).

### Upstream packages work, but snapshots don't

This behavior is expected. Azure Artifacts upstream sources don't support Maven snapshots.

### Team-shared `settings.xml` exposes credentials

Keep credentials in a local `settings.xml`. If you must share the file format with a team, use Maven password encryption rather than storing a plain-text PAT.

### Related setup and task articles

- [Project setup - Maven](maven/project-setup-maven.md)
- [Project setup - Gradle](maven/project-setup-gradle.md)
- [Publish packages - Maven](maven/publish-packages-maven.md)
- [Publish artifacts with Gradle](maven/publish-with-gradle.md)
- [Restore Maven packages](maven/install.md)

::: zone-end

::: zone pivot="python"

## Troubleshoot Python

### Authentication fails with pip or Twine

Install the Azure Artifacts keyring support first:

```cmd
pip install keyring artifacts-keyring
```

For supported authentication, use pip version `19.2` or later and Twine version `1.13.0` or later.

### Python authentication fails on Linux

The Python keyring flow depends on additional Linux prerequisites described by `artifacts-keyring`. If pip or Twine can see the feed URL but can't authenticate, verify that those prerequisites are installed before troubleshooting the feed itself.

### Packages install from the public index instead of your feed

For pip, add the Azure Artifacts `index-url` to the `pip.ini` or `pip.conf` file inside the virtual environment you actually use. If you place the configuration elsewhere, pip can keep resolving packages from another index.

### A private package is published to the public PyPI index by mistake

Remove the `[pypi]` section from `.pypirc` if it already contains public PyPI credentials, and publish with an explicit feed alias such as `twine upload -r <FEED_NAME> dist/*`.

### Upstream PyPI packages aren't visible to readers

This condition usually means nobody with **Feed and Upstream Reader (Collaborator)** or higher saved the package into the feed yet. Install the package once by using a collaborator account so Azure Artifacts saves a local copy.

### Related setup and task articles

- [Project setup](python/project-setup-python.md)
- [Publish Python packages (CLI)](quickstarts/python-cli.md)
- [Install Python packages (CLI)](quickstarts/install-python-packages.md)
- [Use packages from PyPI](python/use-packages-from-pypi.md)

::: zone-end

::: zone pivot="cargo"

## Troubleshoot Cargo

### Authentication or restore fails before Cargo can reach the feed

Azure Artifacts requires Cargo `1.74.0` or later. In Azure DevOps Services, that requirement means stable `registry-auth` support included in Rust 1.74 or later. In Azure DevOps Server 2022, Cargo support is still in preview and can require the nightly toolchain together with:

```toml
[unstable]
registry-auth = true
```

### Cargo can't find packages in the expected registry

Verify your `.cargo/config.toml` entries:

- Use the `sparse+https://pkgs.dev.azure.com/.../Cargo/index/` registry URL that matches your feed scope.
- Add `[source.crates-io] replace-with = "FEED_NAME"` only when you want crates.io traffic to flow through your Azure Artifacts feed.
- If you're consuming a private crate directly from the feed, specify the registry name in the dependency entry.

### Linux publish fails with `GLib-GObject-CRITICAL` or `libsecret-CRITICAL`

Make sure `libsecret` is installed, make sure `gnome-keyring` is running, and verify that the Linux credential provider entry uses `cargo:libsecret`.

### Sign in succeeds, but publish or restore still fails

Confirm that your user-level credential helper is configured for the operating system you use:

- Windows: `cargo:wincred`
- Linux: `cargo:libsecret`
- macOS: `cargo:macos-keychain`

Then authenticate again by using either a PAT with `cargo login --registry <FEED_NAME>` or an Azure CLI bearer token if that is the flow you configured.

### Related setup and task articles

- [Project setup](cargo/project-setup-cargo.md)
- [Publish Cargo packages](cargo/cargo-publish.md)
- [Restore Cargo packages](cargo/cargo-restore.md)
- [Use packages from Crates.io](cargo/cargo-upstream-source.md)

::: zone-end

::: zone pivot="universal-packages"

## Troubleshoot Universal Packages

### Azure CLI or Azure DevOps extension commands aren't available

Install Azure CLI first, then install or update the Azure DevOps extension:

```azurecli
az extension add --name azure-devops
az extension update --name azure-devops
```

Universal Packages require Azure DevOps extension version `0.14.0` or later.

### Authentication fails when using the Azure CLI

If you're using Azure DevOps Services on Windows, the supported setup is to run `az login` and then set defaults with `az devops configure --defaults ...`. If Microsoft Entra or MSA sign-in doesn't work for your environment, switch to PAT-based authentication with `az devops login`.

### Publish fails because the package name or version is invalid

Universal Package names and versions must be lowercase. Package names must start and end with a letter or number, and versions can't include build metadata such as a `+` suffix.

### Publish fails for very large package trees

If the content includes about 100,000 files or more, the publish operation can fail because of file-count overhead even when the total size is within limits. Bundle the content into a `.zip` or `.tar` archive first, and then publish the archive as the Universal Package payload.

### Related setup and task articles

- [Project setup](universal-packages/project-setup-universal-packages.md)
- [Universal Packages quickstart](quickstarts/universal-packages.md)
- [Download Universal Packages](quickstarts/download-universal-packages.md)
- [Universal Packages upstream sources](universal-packages/universal-packages-upstream.md)

::: zone-end

## FAQ - Storage and billing

#### What counts toward billed storage?

All package types stored in Azure Artifacts count toward billed storage, including packages saved from upstream sources. Pipeline Artifacts and Pipeline Caching don't count toward Azure Artifacts storage charges.

#### Do packages in the recycle bin still count?

Yes. Deleted packages continue to count toward storage until Azure Artifacts permanently removes them from the recycle bin. This removal normally happens after 30 days, or when you delete them from the recycle bin earlier.

#### Why does storage show as 0 GiB even though the feed contains packages?

Storage is displayed in GiB. If your usage is below 1 GiB, the UI can still show 0 GiB.

#### How long does it take for deleted packages to stop affecting billed storage?

Storage metrics usually refresh within 24 hours, but the update can take up to 48 hours. The **Artifacts** storage view refreshes more frequently than the **Billing** page, so the two views can briefly disagree.

#### What happens if I remove the Azure subscription from my Azure DevOps organization?

If your organization is using more than the free 2 GiB tier, packages become read-only until you either reduce usage below the free threshold or reconnect billing and set the usage limit appropriately. For billing steps, see [Set up billing for your organization](../organizations/billing/set-up-billing-for-your-organization-vs.md#set-up-billing-for-your-organization).

## FAQ - Upstream sources

#### Why can't I find a package that exists in an upstream source?

Feed readers can't see packages from upstream sources until a collaborator or higher role installs them and Azure Artifacts saves a copy into the feed.

#### Why can't I find the feed I want to add as an upstream source?

If the source feed is in another organization, the owner of that feed must share the target view with **All feeds and people in organizations associated with my Microsoft Entra tenant** before you can select it as an upstream source.

#### Can feed readers download packages directly from an upstream source?

No. Feed readers can download only packages that are already saved to the feed. A collaborator, contributor, or owner must save the package first.

#### What happens if a package saved from an upstream source is deleted, unpublished, or deprecated upstream?

If the saved upstream package is deleted or unpublished, that version becomes unavailable and the version number remains permanently reserved. If the upstream package is deprecated, Azure Artifacts adds the deprecation warning to the saved package metadata.

> [!NOTE]
> Maven snapshots aren't supported in upstream sources.

## Related content

- [Manage feed permissions](feeds/feed-permissions.md)
- [Set up upstream sources](how-to/set-up-upstream-sources.md)
- [Delete and recover packages](how-to/delete-and-recover-packages.md)
