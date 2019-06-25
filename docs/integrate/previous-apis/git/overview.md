---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2015 < azure-devops'
title: Git | REST API Reference for Team Foundation Server
description: Work with Git programmatically using the REST APIs for Team Foundation Server.
ms.assetid: 19DFAB3F-274F-41DF-ACD5-93DCEE626121
ms.manager: jillfra
ms.topic: article
ms.author: chcomley
author: chcomley
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
        &lt;th =&quot;col-md-8&quot;&gt;Areas</th>
        &lt;th =&quot;col-md-8&quot;&gt;Common Tasks</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td>
            <a href="./repositories.md" data-raw-source="[Git Repositories](./repositories.md)">Git Repositories</a>
        </td>
        <td>
            <ul><li>Get a list of <a href="./repositories.md#inateamproject" data-raw-source="[repositories](./repositories.md#inateamproject)">repositories</a> in a project.</li>
            <li><a href="./repositories.md#createarepository" data-raw-source="[Add a repository](./repositories.md#createarepository)">Add a repository</a> to a project.</li>
            <li><a href="./repositories.md#deletearepository" data-raw-source="[Delete a repository](./repositories.md#deletearepository)">Delete a repository</a> from a project.</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td>
            <a href="./pull-requests/pull-requests.md" data-raw-source="[Pull Requests](./pull-requests/pull-requests.md)">Pull Requests</a>
        </td>
        <td>
            <ul><li><a href="./pull-requests/pull-requests.md#create-a-pull-request" data-raw-source="[Complete pull requests](./pull-requests/pull-requests.md#create-a-pull-request)">Complete pull requests</a></li>
            <li>Get a <a href="./pull-requests/pull-requests.md#get-a-list-of-pull-requests-in-the-repository" data-raw-source="[list of pull requests](./pull-requests/pull-requests.md#get-a-list-of-pull-requests-in-the-repository)">list of pull requests</a></li>
            <li><a href="./pull-requests/pull-requests.md#create-a-pull-request" data-raw-source="[Create a pull request](./pull-requests/pull-requests.md#create-a-pull-request)">Create a pull request</a></li>
            <li><a href="./pull-requests/pull-requests.md#update-a-pull-request" data-raw-source="[Update a pull request](./pull-requests/pull-requests.md#update-a-pull-request)">Update a pull request</a></li>
            </ul>
        </td>
    </tr>
    <tr>
        <td>
            <a href="./commits.md" data-raw-source="[Commits](./commits.md)">Commits</a>
        </td>
        <td>
            <ul><li>Get the <a href="./commits.md#apageatatime" data-raw-source="[top commits](./commits.md#apageatatime)">top commits</a>, or the <a href="./commits.md#inadaterange" data-raw-source="[commits in a date range](./commits.md#inadaterange)">commits in a date range</a>.</li>
            <li>Get each <a href="./commits.md#withchangeditems" data-raw-source="[commit with the changes](./commits.md#withchangeditems)">commit with the changes</a> in that commit.</li>
            <li>You can also get the <a href="./diffs.md" data-raw-source="[differences](./diffs.md)">differences</a> between the committed version and the previous version.</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td>
            <a href="./refs.md" data-raw-source="[Refs](./refs.md)">Refs</a> (branches and tags)
        </td>
        <td>
            <ul><li>Get all <a href="./refs.md#just-branches" data-raw-source="[branches](./refs.md#just-branches)">branches</a>.</li>
            <li><a href="./refs.md#modify-one-or-more-refs" data-raw-source="[Create, update, or delete](./refs.md#modify-one-or-more-refs)">Create, update, or delete</a> a branch.</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td>
            <a href="./pushes.md" data-raw-source="[Pushes](./pushes.md)">Pushes</a>
        </td>
        <td>
            <ul><li>Get a list of <a href="./pushes.md" data-raw-source="[pushes](./pushes.md)">pushes</a>.</li>
            <li>Get each <a href="./pushes.md#withreferences" data-raw-source="[push with references](./pushes.md#withreferences)">push with references</a> to the commits.
            <li><a href="./pushes.md#create-a-push" data-raw-source="[Create a branch](./pushes.md#create-a-push)">Create a branch</a> (Create a push/initial commit)</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td>
            <a href="./items.md" data-raw-source="[Items (Files)](./items.md)">Items (Files)</a>
        </td>
        <td>
            <ul><li>Download a single source file by getting the <a href="./items.md#streamafile" data-raw-source="[item representing that file](./items.md#streamafile)">item representing that file</a>.</li>
            <li>Download a zip file containing a folder and its contents by getting the <a href="./items.md#zipafolder" data-raw-source="[item for that folder](./items.md#zipafolder)">item for that folder</a>.</li>
            <li>Get the metadata for the most recent version of each file or folder by getting the <a href="./items.md#afolderanditschildren" data-raw-source="[items recursively](./items.md#afolderanditschildren)">items recursively</a>.</li>
            <li>Get <a href="./items.md#getaspecificversion" data-raw-source="[different versions of the items](./items.md#getaspecificversion)">different versions of the items</a>, too.</li>
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

