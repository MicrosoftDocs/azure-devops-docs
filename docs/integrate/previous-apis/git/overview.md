---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2015 < azure-devops'
title: Git | REST API Reference for Team Foundation Server
description: Work with Git programmatically using the REST APIs for Team Foundation Server.
ms.assetid: 19DFAB3F-274F-41DF-ACD5-93DCEE626121
ms.manager: jillfra
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 06/22/2017
---

# Git API

[!INCLUDE [azure-devops](../_data/azure-devops-message.md)]

[!INCLUDE [API_version](../_data/version.md)]

Use these APIs to work with Git repositories in VSTS/TFS.
Repositories contain objects representing core Git concepts:

- blobs (files)
- trees (folders)
- commits
- refs (branches, lightweight tags)

and other resources that represent the history of those items or act on their state.

There are [code samples](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/Git) available for this area.

[!INCLUDE [ID_vs_Name](_data/id_or_name.md)]

## Common tasks
<table class="table table-striped; centered-table">
<thead class="thead-inverse">
    <tr>
        <th ="col-md-8">Areas</th>
        <th ="col-md-8">Common Tasks</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td>
            [Git Repositories](./repositories.md)
        </td>
        <td>
            <ul><li>Get a list of [repositories](./repositories.md#inateamproject) in a project.</li>
            <li>[Add a repository](./repositories.md#createarepository) to a project.</li>
            <li>[Delete a repository](./repositories.md#deletearepository) from a project.</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td>
            [Pull Requests](./pull-requests/pull-requests.md)
        </td>
        <td>
            <ul><li>[Complete pull requests](./pull-requests/pull-requests.md#create-a-pull-request)</li>
            <li>Get a [list of pull requests](./pull-requests/pull-requests.md#get-a-list-of-pull-requests-in-the-repository)</li>
            <li>[Create a pull request](./pull-requests/pull-requests.md#create-a-pull-request)</li>
            <li>[Update a pull request](./pull-requests/pull-requests.md#update-a-pull-request)</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td>
            [Commits](./commits.md)
        </td>
        <td>
            <ul><li>Get the [top commits](./commits.md#apageatatime), or the [commits in a date range](./commits.md#inadaterange).</li>
            <li>Get each [commit with the changes](./commits.md#withchangeditems) in that commit.</li>
            <li>You can also get the [differences](./diffs.md) between the committed version and the previous version.</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td>
            [Refs](./refs.md) (branches and tags)
        </td>
        <td>
            <ul><li>Get all [branches](./refs.md#just-branches).</li>
            <li>[Create, update, or delete](./refs.md#modify-one-or-more-refs) a branch.</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td>
            [Pushes](./pushes.md)
        </td>
        <td>
            <ul><li>Get a list of [pushes](./pushes.md).</li>
            <li>Get each [push with references](./pushes.md#withreferences) to the commits.
            <li>[Create a branch](./pushes.md#create-a-push) (Create a push/initial commit)</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td>
            [Items (Files)](./items.md)
        </td>
        <td>
            <ul><li>Download a single source file by getting the [item representing that file](./items.md#streamafile).</li>
            <li>Download a zip file containing a folder and its contents by getting the [item for that folder](./items.md#zipafolder).</li>
            <li>Get the metadata for the most recent version of each file or folder by getting the [items recursively](./items.md#afolderanditschildren).</li>
            <li>Get [different versions of the items](./items.md#getaspecificversion), too.</li>
            </ul>
        </td>
    </tr>
</tbody>
</table>

## All Git API areas
In case you're looking for something not found in the **Common tasks** section above, below is a list of all areas of the Git API.

* [Annotated tags](./annotatedTags.md)
* [Blobs](./blobs.md)
* [Commits](./commits.md)
* [Diffs](./diffs.md)
* [Import Requests](./import-requests.md)
* [Items](./items.md)
* [Pull Request Overview](./pull-requests/overview.md)
* [Pull Request Operations](./pull-requests/pull-requests.md)
* [Pull Request Comments](./pull-requests/threads.md)
* [Pull Request Iterations](./pull-requests/iterations.md)
* [Pull Request Reviewers](./pull-requests/reviewers.md)
* [Pull Request Work Items](./pull-requests/work-items.md)
* [Pushes](./pushes.md)
* [Refs](./refs.md)
* [Repositories](./repositories.md)
* [Stats](./stats.md)
* [Trees](./trees.md)

>[!NOTE]
>For more information on Git, see [Use Git with Visual Studio and Team Foundation Server](https://visualstudio.microsoft.com/docs/repos/git/overview).

