---
title: Branch permissions prior to TFS 2017 Update 1
description: The previous list of Git branch permissions
ms.assetid: 7B4F74D5-953F-4A9D-8DD6-BB194E424135
ms.prod: vs-devops-alm
ms.technology: vs-devops-git 
ms.manager: douge
ms.author: sdanie
ms.date: 12/1/2016
---

# Git branch permissions prior to TFS 2017 Update 1

#### TFS 2017 RTM | TFS 2015

In TFS 2017 Update 1 (and VSTS), Git repository permissions have changed.
For those customers using previous versions of TFS, here are the old permissions.
Those using TFS 2017 Update 1 or VSTS should see the [latest list of permissions](branch-permissions.md).

<table valign="top" width="100%">
<tbody valign="top">
	<tr>
		<th width="30%">Permission</th>
		<th width="70%">Description</th>
	</tr>
	<tr>
		<th id="git-administer-permission">Administer</th>
		<td>
			Users with this permission can set branch permissions for other users,  delete the branch, and lock the branch.
		</td>
	</tr>
	<tr>
		<th id="git-contribute-permission">Contribute</th>
		<td>
			Users with this permission can push new commits to the branch. Users with this permission cannot rewrite the existing commits on the branch.
			Users with this permission can lock the branch.
		</td>
	</tr>
	<tr>
		<th id="git-exempt-from-policy-enforcement-permission">Exempt from policy enforcement</th>
		<td>
			Users with this permission are exempt from the [branch policy](branch-policies.md) set for the branch.
		</td>
	</tr>
	<tr>
		<th id="git-rewrite-and-destroy-history-permission">Rewrite and destroy history (force push)</th>
		<td>
			Can force push to a branch.
			This permission is also required to delete a branch.<br /><br />
			Users with this permission can modify the commit history of a branch.
		</td>
	</tr>
</tbody>
</table>
 