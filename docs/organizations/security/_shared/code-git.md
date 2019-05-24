::: moniker range=">= tfs-2017"

Set permissions across all Git repositories by making changes to the top-level **Git repositories** entry. Individual repositories inherit permissions from the top-level **Git Repositories** entry. Branches inherit a subset of permissions from assignments made at the repository level. For branch permissions and policies, see [Set branch permissions](/azure/devops/repos/git/branch-permissions) and [Improve code quality with branch policies](/azure/devops/repos/git/branch-policies).

<table>

<tr valign="bottom">
<th width="49%">Task</th>
<th width="9%">Readers</th>
<th width="14%">Contributors</th>
<th width="14%">Build Admins</th>
<th width="14%">Project Admins</th>
</tr>
<tbody valign="top" align="center">
<tr>
<td align="left">Clone, fetch, contribute to pull requests, and explore the contents of a repository
</td>
<td><img src="_img/checkmark.png" alt="checkmark"/></td>
<td><img src="_img/checkmark.png" alt="checkmark"/></td>
<td><img src="_img/checkmark.png" alt="checkmark"/></td>
<td><img src="_img/checkmark.png" alt="checkmark"/></td>
</tr>

<tr>
<td align="left">Contribute to a repository, create branches, create tags, manage notes
</td>
<td> </td>
<td><img src="_img/checkmark.png" alt="checkmark"/></td>
<td><img src="_img/checkmark.png" alt="checkmark"/></td>
<td><img src="_img/checkmark.png" alt="checkmark"/></td>
</tr>

<tr>
<td align="left">Create, delete, and rename repositories 
</td>
<td>  </td>
<td>  </td>
<td>  </td>
<td><img src="_img/checkmark.png" alt="checkmark"/></td>
</tr>

<tr>
<td align="left">Edit policies, Manage permissions, Remove others&#39; locks
</td>
<td>  </td>
<td>  </td>
<td>  </td>
<td><img src="_img/checkmark.png" alt="checkmark"/></td>
</tr>

<tr>
<td align="left">Bypass policies when completing pull requests, Bypass policies when pushing, Force push (rewrite history, delete branches and tags)  <em>(not set for any security group)</em> 
</td>
<td>  </td>
<td>  </td>
<td>  </td>
<td> </td>
</tr>


</tbody>
</table>
::: moniker-end


::: moniker range="tfs-2015"

Set permissions across all Git repositories by making changes to the top-level <strong>Git repositories</strong> entry. Individual repositories inherit permissions from the top-level <strong>Git Repositories</strong> entry. Branches inherit a subset of permissions from assignments made at the repository level. For branch permissions and policies, see <a href="/azure/devops/repos/git/branch-permissions" data-raw-source="[Set branch permissions](/azure/devops/repos/git/branch-permissions)">Set branch permissions</a> and <a href="/azure/devops/repos/git/branch-policies" data-raw-source="[Improve code quality with branch policies](/azure/devops/repos/git/branch-policies)">Improve code quality with branch policies</a>.

By default, the project-level Readers groups have read-only permissions.

<table>

<tr valign="bottom">
<th width="55%">Task</th>
<th width="15%">Contributors</th>
<th width="15%">Build Admins</th>
<th width="15%">Project Admins</th>
</tr>

<tbody valign="top" align="center">

<tr>
<td align="left"><strong>Branch Creation</strong>: At the repository level, can push their changes to branches in the repository. Does not override restrictions in place from <a href="/azure/devops/repos/git/branch-policies" data-raw-source="[branch policies](/azure/devops/repos/git/branch-policies)">branch policies</a>. At the branch level, can push their changes to the branch and lock the branch.
</td>
<td><img src="_img/checkmark.png" alt="checkmark"/></td>
<td><img src="_img/checkmark.png" alt="checkmark"/></td>
<td><img src="_img/checkmark.png" alt="checkmark"/></td>
</tr>

<tr>
<td align="left"><strong>Contribute</strong>: At the repository level, can push their changes to branches in the repository. Does not override restrictions in place from <a href="/azure/devops/repos/repos/git/branch-policies" data-raw-source="[branch policies](/azure/devops/repos/repos/git/branch-policies)">branch policies</a>. At the branch level, can push their changes to the branch and lock the branch.
</td>
<td><img src="_img/checkmark.png" alt="checkmark"/></td>
<td><img src="_img/checkmark.png" alt="checkmark"/></td>
<td><img src="_img/checkmark.png" alt="checkmark"/></td>
</tr>

<tr>
<td align="left"><strong>Note Management</strong>: Can push and edit Git notes to the repository. They can also remove notes from items if they have the Force permission.
</td>
<td><img src="_img/checkmark.png" alt="checkmark"/></td>
<td><img src="_img/checkmark.png" alt="checkmark"/></td>
<td><img src="_img/checkmark.png" alt="checkmark"/></td>
</tr>

<tr>
<td align="left"><strong>Tag Creation</strong>: Can push tags to the repository, and can also edit or remove tags if they have the Force permission.
</td>
<td><img src="_img/checkmark.png" alt="checkmark"/></td>
<td><img src="_img/checkmark.png" alt="checkmark"/></td>
<td><img src="_img/checkmark.png" alt="checkmark"/></td>
</tr>

<tr>
<td align="left"><strong>Administer</strong>: Delete and rename repositories
<p>If assigned to the top-level <strong>Git repositories</strong> entry, can add additional repositories. At the branch level, users can set permissions for the branch and unlock the branch. The Administer permission set on an individual Git repository does not grant the ability to rename or delete the repository. These tasks require
Administer permissions at the top-level <strong>Git repositories</strong> entry. 
</td>
<td>  </td>
<td>  </td>
<td><img src="_img/checkmark.png" alt="checkmark"/></td>
</tr>

<tr>
<td align="left"><strong>Rewrite and destroy history (force push)</strong>: Can force an update to a branch and delete a branch. A force update can overwrite commits added from any user. Users with this permission can modify the commit history of a branch.
</td>
<td>  </td>
<td>  </td>
<td><img src="_img/checkmark.png" alt="checkmark"/></td>
</tr>


</tbody>
</table>

::: moniker-end

<a name="pcbs-has-read-by-default"></a>
The Project Collection Build Service can read from all repositories by default.
Any pipeline which runs with project collection scope can potentially read any repository in the organization/collection.
You can remove this permission for a repository: set "Read" to "Deny" for the Project Collection Build Service.