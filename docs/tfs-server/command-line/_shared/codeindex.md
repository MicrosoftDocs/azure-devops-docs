>**Command availability:** TFS 2015 and TFS 2013

Use the CodeIndex command to manage code indexing on Team Foundation Server.
For example, you might want to reset the index to fix CodeLens information, or turn off indexing to investigate server performance issues.

	TFSConfig CodeIndex /indexingStatus | /setIndexing:[ on | off | keepupOnly ] |
		/ignoreList:[ add | remove | removeAll | view ] ServerPath |
		/listLargeFiles [/fileCount:FileCount] [/minSize:MinSize] |
		/reindexAll | /destroyCodeIndex [/noPrompt] |
		/temporaryDataSizeLimit:[ view | <SizeInGBs> | disable ] |
		/indexHistoryPeriod:[ view | all | <NumberOfMonths> ] [/collectionName:CollectionName | /collectionId:CollectionId]

<table Responsive="true">
<tr>
    <th>
        Option
	</th>
    <th>
        Description
    </th>
</tr>
<tr>
    <td data-th="Option">
    <p>
        <strong>/indexingStatus</strong>
    </p>
    </td>
    <td data-th="Description">
    <p>Show the status and configuration of the code indexing service.</p>
    </td>
</tr>
<tr>
    <td data-th="Option">
    <p>
        <strong>/setIndexing:</strong>[ on | off | keepupOnly ]</p>
    </td>
    <td data-th="Description">
    <ul>
        <li>
        <p>
            <strong>on</strong>: Start indexing all changesets.</p>
        </li>
        <li>
        <p>
            <strong>off</strong>: Stop indexing all changesets.</p>
        </li>
        <li>
        <p>
            <strong>keepupOnly</strong>: Stop indexing previously created changesets and start indexing new changesets only.</p>
        </li>
    </ul>
    </td>
</tr>
<tr>
    <td data-th="Option">
    <p>
        <strong>/ignoreList:</strong>[ add | remove | removeAll | view ] <span class="parameter">ServerPath</span></p>
   
    </td>
    <td data-th="Description">
    <p>Specifies a list of code files and their paths that you don't want indexed.</p>
    <ul>
        <li>
        <p>
            <strong>add</strong>: Add the file that you don't want indexed to the ignored file list.</p>
        </li>
        <li>
        <p>
            <strong>remove</strong>: Remove the file that you want indexed from the ignored file list.</p>
        </li>
        <li>
        <p>
            <strong>removeAll</strong>: Clear the ignored file list and start indexing all files.</p>
        </li>
        <li>
        <p> <strong>view</strong>: See all the files that aren't being indexed.</p>
        </li>
		<li>
		<p><strong>ServerPath</strong>: Specifies the path to a code file.</p>
		<p>You can use the wildcard character (*) at the start, end, or both ends of the server path.</p>
		</li>
     </ul>
    </td>
</tr>
<tr>
    <td data-th="Option">
    <p>
        <strong>/listLargeFiles [/fileCount:</strong>
        <span class="parameter">FileCount</span>
        <strong>/minSize:</strong>
        <span class="parameter">MinSize</span>]</p>
    </td>
    <td data-th="Description">
    <p>Shows the specified number of files that exceeds the specified size in KB. You can then use the <strong>/ignoreList</strong> option to exclude these files from indexing.</p>
    <p>For this, you'll need <a href="http://go.microsoft.com/fwlink/?LinkId=506638" target="_blank">Team Foundation Server 2013 with Update 3</a>.</p>
    </td>
</tr>
<tr>
    <td data-th="Option">
    <p>
        <strong>/reindexAll</strong>
    </p>
    </td>
    <td data-th="Description">
    <p>Clear previously indexed data and restart indexing.</p>
    </td>
</tr>
<tr>
    <td data-th="Option">
    <p>
        <strong>/destroyCodeIndex [/noPrompt]</strong>
    </p>
    </td>
    <td data-th="Description">
    <p>Delete the code index and remove all indexed data. Does not require confirmation if you use the <strong>/noPrompt</strong> option.</p>
    </td>
</tr>
<tr>
    <td data-th="Option">
    <p>
        <strong>/temporaryDataSizeLimit</strong>:[ view | &lt;<span class="parameter">SizeInGBs</span>&gt; | disable ]</p>
    </td>
    <td data-th="Description">
    <p>Control how much temporary data that CodeLens creates when processing changesets. The default limit is 6 GB (2 GB in Update 5).</p>
    <ul>
        <li>
        <p>
            <strong>view</strong>: Show the current size limit. </p>
        </li>
        <li>
        <p>
            <span class="parameter">SizeInGBs</span>: Change the size limit.</p>
        </li>
        <li>
        <p>
            <strong>disable</strong>: Remove the size limit.</p>
        </li>
    </ul>
    <p>This limit is checked before CodeLens processes a new changeset. If temporary data exceeds this limit, CodeLens will pause processing past changesets, not new ones. CodeLens will restart processing after the data is cleaned up and falls below this limit. Cleanup runs automatically once a day. This means temporary data might exceed this limit until cleanup starts running.</p>
    <p>For this, you'll need <a href="http://go.microsoft.com/fwlink/?LinkId=517392" target="_blank">Team Foundation Server 2013 with Update 4</a>.</p>
    </td>
</tr>
<tr>
    <td data-th="Option">
    <p>
        <strong>/indexHistoryPeriod</strong>:[ view | all | &lt;<span class="parameter">NumberOfMonths</span>&gt; ]</p>
    </td>
    <td data-th="Description">
    <p>Control how long to index your change history. This affects how much history CodeLens shows you. The default limit is 12 months. This means CodeLens shows your change history from the last 12 months only.</p>
    <ul>
        <li>
        <p>
            <strong>view</strong>: Show the current number of months.</p>
        </li>
        <li>
        <p>
            <strong>all</strong>: Index all change history.</p>
        </li>
        <li>
        <p>
            <span class="parameter">NumberOfMonths</span>: Change the number of months used to index change history.</p>
        </li>
    </ul>
    <p>For this, you'll need <a href="http://go.microsoft.com/fwlink/?LinkId=517392" target="_blank">Team Foundation Server 2013 with Update 4</a>.</p>
    </td>
</tr>
<tr>
    <td data-th="Option">
    <p>
        <strong>/collectionName:</strong>
        <span class="parameter">CollectionName</span>
    </p>
    </td>
    <td data-th="Description">
    <p>Specifies the name of the team project collection on which to run the <strong>CodeIndex</strong> command. Required if you don't use <strong>/CollectionId</strong>.</p>
    </td>
</tr>
<tr>
    <td data-th="Option">
    <p>
        <strong>/collectionId:</strong>
        <span class="parameter">CollectionId</span>
    </p>
    </td>
    <td data-th="Description">
    <p>Specifies the identification number of the team project collection on which to run the <strong>CodeIndex</strong> command. Required if you don't use <strong>/CollectionName</strong>.</p>
    </td>
</tr>
</table>

### Required permissions

To use the CodeIndex command, you must be a member of the Team Foundation Administrators security group. See Permission reference for Team Foundation Server.

### Examples

To see the code indexing status and configuration:

	TFSConfig CodeIndex /indexingStatus /collectionName:"Fabrikam Web Site"

To start indexing all changesets:

	TFSConfig CodeIndex /setIndexing:on /collectionName:"Fabrikam Web Site"

To stop indexing previously created changesets and start indexing new changesets only:

	TFSConfig CodeIndex /setIndexing:keepupOnly /collectionName:"Fabrikam Web Site"

To find up to 50 files that are larger than 10 KB:

	TFSConfig CodeIndex /listLargeFiles /fileCount:50 /minSize:10 /collectionName:"Fabrikam Web Site"

To exclude a specific file from indexing and add it to the ignored file list:

	TFSConfig CodeIndex /ignoreList:add "$/Fabrikam Web Site/Catalog.cs" /collectionName:"Fabrikam Web Site"

To see all the files that aren't indexed:

	TFSConfig CodeIndex /ignoreList:view

To clear previously indexed data and restart indexing:

	TFSConfig CodeIndex /reindexAll /collectionName:"Fabrikam Web Site"

To save all changeset history:

	TFSConfig CodeIndex /indexHistoryPeriod:all /collectionName:"Fabrikam Web Site"

To remove the size limit on CodeLens temporary data and continue indexing regardless of temporary data size:

	TFSConfig CodeIndex /temporaryDataSizeLimit:disable /collectionName:"Fabrikam Web Site"

To delete the code index with confirmation:

	TFSConfig CodeIndex /destroyCodeIndex /collectionName:"Fabrikam Web Site"
