---
title: Git permissions prior to TFS 2017 Update 1
description: The previous list of Git permissions
ms.prod: vs-devops-alm
ms.technology: vs-devops-tfs
ms.assetid: EF010374-22A9-4179-B49F-9B601ACBB5A0
toc: hide
ms.manager: douge
ms.author: douge
ms.date: 12/1/2016
---

# Git permissions prior to TFS 2017 Update 1

In TFS 2017 Update 1 (and VSTS), Git repository permissions have changed.
For those customers using previous versions of TFS, here are the old permissions.
Those using TFS 2017 Update 1 or VSTS should see the [latest list of permissions](permissions.md#git-repository).

These permissions appear only for a team project including a Git repository.

<img src="_img/permissions/git-permissions-prior-to-2017.png" style="border: 1px solid #CCCCCC" />

Set permissions across all Git repositories by making changes to the top-level **Git repositories** entry.  

Individual repositories inherit permissions from the top-level **Git Repositories** entry.     

Branches inherit permissions from assignments made at the repository level.   

By default, the team project level and collection level Readers groups have only Read permissions.

<table valign="top" width="100%">
<tbody valign="top">
	<tr>
		<th width="30%">Permission</th>
		<th width="70%">Description</th>
	</tr>
	<tr>
		<th id="git-administer-permission">Administer</th>
		<td>
			Can rename and delete the repository. If assigned to the top-level **Git repositories** entry, can add additional repositories.
			<br /><br />
			At the branch level, users can set permissions for the branch and unlock the branch.
			<blockquote>
				<b>TFS 2013, TFS 2015</b>: The Administer permission set on a individual Git repository does not grant the ability to rename or delete the repository. These tasks require
				Administer permissions at the top-level **Git repositories** entry. 
			</blockquote>
		</td>
	</tr>
	<tr>
		<th id="git-branch-creation-permission">Branch Creation</th>
		<td>
			Can create and publish branches in the repository.<br />
			Lack of this permission does not limit users from creating branches in their local repository;
			it merely prevents them from publishing local branches to the server.<br />
			When a user creates a new branch on the server,
			they have Administer, Contribute, and Force permissions for that branch by default.
		</td>
	</tr>
	<tr>
		<th id="git-contribute-permission">Contribute</th>
		<td>
			At the repository level, can push their changes to branches in the repository. Does not override restrictions in place from <a href="https://www.visualstudio.com/docs/git/branch-policies">branch policies</a>.<br /><br />
			At the branch level, can push their changes to the branch and lock the branch.
		</td>
	</tr>
	<tr>
		<th id="git-note-management-permission">Note Management</th>
		<td>
			Can push and edit Git notes to the repository.
			They can also remove notes from items if they have the Force permission.
			See <a href="http://git-scm.com/2010/08/25/notes.html">this topic</a> for more details on notes.
		</td>
	</tr>
	<tr>
		<th id="git-read-permission">Read</th>
		<td>
			Can clone, fetch, pull, and explore the contents of the repository.
		</td>
	</tr>
	<tr>
		<th id="git-rewrite-and-destroy-history-permission">Rewrite and destroy history (force push)</th>
		<td>
			Can force an update to a branch and delete a branch. A force update can overwrite commits added from any user.<br /><br />
			Users with this permission can modify the commit history of a branch.
		</td>
	</tr>
	<tr>
		<th id="git-tag-creation-permission">Tag Creation</th>
		<td>
			Can push tags to the repository,
			and can also edit or remove tags if they have the Force permission.
		</td>
	</tr>
</tbody>
</table>
