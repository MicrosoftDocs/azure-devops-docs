
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
<td>**scopes**</td>
<td>*An array of authorization scopes (strings) listing permissions required by your extension. See [supported scopes](#scopes).*</td>
<td>For example, `vso.work` and `vs.code_write` indicates your extension needs read-only access to work items and read/write access to source code (and related resource). Scopes are presented to the user when installing your extension.</td>
</tr>
<tr>
<td>**demands**</td>
<td>*An array of demands (strings) listing the capabilities required by your extension.*</td>
<td>For example, `api-version/3.0` indicates your extension uses version 3.0 APIs and therefore cannot run in older products that do not support this version. See [supported demands](#demands)</td>
</tr>
<tr>
<td>**baseUri**</td>
<td>*(Optional) base URL for all relative URLs specified by the extension's contributions.*</td>
<td>For example: ```https://myapp.com/{{account.name}}/```. This property should be left empty if your extension's contents are packaged with your extension. 
</tr>
<tr>
<td>**contributions**</td>
<td>*An array of contributions to the system.*</td>
<td>See [contributions](#contributions) for details of contribution properties.</td>
</tr>
<tr>
<td>**contributionTypes**</td>
<td>*An array of contribution types defined by the extension*</td>
<td>See [contribution types](#contributionTypes) for details of contribution type properties.</td>
</tr>
</tbody>
</table>


