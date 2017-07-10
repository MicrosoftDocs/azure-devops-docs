These properties are required:

<table class="table table-striped table-bordered">
<thead class="thead-inverse">
<tr>
<th>Property</th>
<th>Description</th>
<th>Notes</th>
</tr>
</thead>
<tbody>
<tr>
<td>**manifestVersion**</td>
<td>*A number corresponding to the version of the manifest format.*</td>
<td>This should be `1`.
</tr>
<tr>
<td>**id**</td>
<td>*The extension's identifier.*</td>
<td>This is a string that must be unique among extensions from the same publisher. It must start with an alphabetic or numeric character and contain 'A' through 'Z', 'a' through 'z', '0' through '9', and '-' (hyphen). Example: `sample-extension`. </td>
</tr>
<tr>
<td>**version**</td>
<td>*A string specifying the version of an extension.*</td>
<td>Should be in the format `major.minor.patch`, for example `0.1.2` or `1.0.0` </td>
</tr>
<tr>
<td>**name**</td>
<td>*A short, human-readable name of the extension. Limited to 200 characters.*</td>
<td>Example: `"Fabrikam Agile Board Extension"`</td>
</tr>
<tr>
<td>**publisher**</td>
<td>*The identifier of the publisher.*</td>
<td>This identifier must match the identifier the extension is published under. See [Create and manage a publisher](../publish/overview.md).</td>
</tr>
<tr>
<td>**targets**</td>
<td>*The products and services supported by your integration or extension.* See [installation targets](../develop/manifest.md#installation-targets) for more details.</td>
<td>This is an array of objects, where each object has an `id` field indicating one of the following:
<ul>
<li>`Microsoft.VisualStudio.Services` (extensions that works with Team Services or TFS)</li>
<li>`Microsoft.TeamFoundation.Server` (extension that works with TFS)</li>
<li>`Microsoft.VisualStudio.Services.Integration` (integrations that works with Team Services or TFS)</li>
<li>`Microsoft.TeamFoundation.Server.Integration` (integrations that work with TFS)</li>
</ul>
</td>
</tr>
</tbody>
</table>