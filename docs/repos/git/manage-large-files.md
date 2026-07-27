---
title: Manage and Store Large Files in Git
titleSuffix: Azure Repos
description: Learn where to store large files in Git, when to use Azure Artifacts or Git LFS, and how to clean history. Follow these steps to optimize your repo.
ms.service: azure-devops-repos
ms.custom: support-driven-update, support
ai-usage: ai-assisted
ms.topic: how-to
ms.date: 07/21/2026
monikerRange: '<= azure-devops'
ms.subservice: azure-devops-repos-git
---


# Work with large files in your Git repo

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Use Git for source files, Azure Artifacts for dependencies, and Git LFS for large binary files that change often. If your repo already contains large files, this article helps you decide what to keep in Git, what to move out, and when to remove binaries from history.

## Decide where to store each file

If you're deciding what to do with files that are already in a repo, start here:

- Keep source files, scripts, and text files in Git.
- Move dependencies and reusable packages to [Azure Artifacts package management](../../artifacts/start-using-azure-artifacts.md).
- Use Git LFS for large binary files that change often and don't diff well.
- Remove large binaries from the repository history if they're already checked in and no longer belong there. See [Remove large files from a repo](remove-binaries.md).

If your repo is already large, review the repository and push limits before you choose a storage approach. See [Git limits](limits.md) for the file, push, and path limits that affect large repos.

## Choose the right storage option for Git, package management, and Git LFS

Use this table to pick the best fit.

| File type or scenario | Use |
|---|---|
| Source code, scripts, and text files | Git |
| Dependencies and reusable packages | Azure Artifacts package management |
| Large binary files that change often | Git LFS |
| Azure DevOps Server Git LFS and Kerberos | See the Kerberos guidance in this article and the linked article at the end |

Git works best for text-based source files and other content that changes in small, readable increments.

Large binaries aren't a good fit for regular Git storage because:

- Git stores version differences efficiently for source code, scripts, and text files.
- Large files that change entirely between versions don't compress or diff well.
- Big binary files increase clone, fetch, branch, and checkout times.

If you add large, undiffable files such as binaries to your repo, you keep a full copy of those files in your repo every time you commit a change to them.
If many versions of these files exist in your repo, they dramatically increase the time to check out, branch, fetch, and clone your code.  

## Which files belong in Git?

Use the simplest option that fits the file type and how often it changes.

### Keep source code in Git, not dependencies

Use Git for files your team edits directly. Keep dependencies out of the repo and deliver them through [package management](../../artifacts/start-using-azure-artifacts.md).

- Put source files in Git.
- Store DLLs, library files, and other dependencies outside the repo.
- Use package management to version and deploy dependencies.

Package management bundles your dependencies and installs the files on your system when you deploy the package.
Packages are versioned to ensure that code tested in one environment runs the same in another environment, as long as the environments have the same installed packages.

### Don't commit build outputs

Use Git for source, not build output or test artifacts.

- Don't commit binaries, logs, tracing output, or diagnostic data.
- Share logs and trace information through [work item tracking](../../boards/work-items/view-add-work-items.md) or team file sharing.

### Store small binary files in Git

Use Git for small binary files only when they change infrequently.

- Good examples include web images, icons, and other small art assets.
- Keeping these files in Git preserves a consistent workflow for the team.

> [!IMPORTANT]
> Even small binaries can cause problems if they're updated often. For example, 100 changes to a 100-KB binary file use as much storage as 10 changes to a 1-MB binary. Due to the frequency of updates, the smaller binary file slows down branching performance more often than the large binary file.

### Avoid large, frequently updated binary assets

Git can't efficiently store large binaries because these files often change between versions and are usually already compressed.

- Git stores the full contents of each version.
- The repository size grows over time.
- Clone, branch, fetch, and checkout operations slow down.

Because Git must store the full contents of each version, deltification and compression don't help much.
As these files accumulate, the repository gets larger, branching gets slower, and clone times increase.

## Strategies for large binary source files

- Don't commit compressed archives. Uncompress the data and commit the diffable sources instead.
- Avoid committing compiled code and other binary dependencies. Build them or supply them through package management.
- Store configuration and other structured data in diffable plain-text formats such as JSON.

## What is Git Large File Storage (Git LFS)?

Use [Git Large File Storage (LFS)](https://git-lfs.github.com/) for source files that change often and differ significantly between versions.

Git LFS:

- Stores pointers to large files in your repo instead of the full file contents.
- Stores the binary content in separate remote storage.
- Downloads the correct version when you clone or switch branches.
- Keeps your normal Git workflow for large binaries without moving the full file contents through every clone and branch change.

### Git LFS benefits

Git LFS keeps the Git workflow while moving large file content out of the main repo.

- Your team can keep using the same end-to-end Git workflow.
- Large files stay out of the main repository history, which helps keep the repo manageable.
- File locking supports shared work on large, undiffable assets like videos, sounds, and game maps.

Azure DevOps Services fully supports Git LFS and offers it for free.
To use LFS, install the [Git LFS client](https://git-lfs.github.com/), configure tracking for the files you want to store in LFS, and then push your changes to Azure Repos.

For Azure DevOps Server and Kerberos-specific guidance, see [Kerberos and Git LFS](lfs-kerberos.md).

### Git LFS limitations

Git LFS still has a few tradeoffs to plan for:

- Every Git client must install the Git LFS client and understand its [tracking configuration](https://github.com/github/git-lfs/tree/main/docs).
- If the client isn't installed or configured correctly, clones download pointer data instead of the binary file.
- Git can't merge different versions of a binary file, so teammates still need to coordinate changes.
- Git LFS provides [file locking](https://github.com/git-lfs/git-lfs/wiki/File-Locking), but users still need to pull the latest copy before they begin work.
- Azure Repos doesn't support Secure Shell (SSH) for repos with Git LFS tracked files.
- Dragging a binary file into the web interface commits the binary to the repo, not the LFS pointer.
- Large uploads can be constrained by available free space, current workload, and the one-hour upload limit.

### Git LFS file format

The file you write into your repo for a Git LFS tracked file has a few lines with a key/value pair on each line:

```
version https://git-lfs.github.com/spec/v1
oid a747cfbbef63fc0a3f5ffca332ae486ee7bf77c1d1b9b2de02e261ef97d085fe
size 4923023
```

> [!NOTE]
> - The GitHub URL included for the version value only defines the LFS pointer file type. It's not a link to your binary file.
> - For Git LFS earlier than 2.10.0 with Azure DevOps Server, upgrade to Git LFS 2.10.0 or later to use Kerberos authentication. For current guidance, see [Kerberos and Git LFS](lfs-kerberos.md) and [Reconfigure Azure DevOps Server to use Kerberos instead of NTLM](https://devblogs.microsoft.com/devops/reconfigure-azure-devops-server-to-use-kerberos-instead-of-ntlm/).

## Plan for Azure DevOps Server and Kerberos

If you use Azure DevOps Server and Windows Authentication, plan for Kerberos when you use Git LFS. Git LFS 2.10.0 and later supports Kerberos authentication.

If you need to update older Azure DevOps Server guidance, start with [Kerberos and Git LFS](lfs-kerberos.md) and the linked Azure DevOps Server authentication guidance.

## Related content

- [Kerberos and Git LFS](lfs-kerberos.md)
- [Manage repository limits](limits.md)
- [Remove large files from a repo](remove-binaries.md)
