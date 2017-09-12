You can use the **TfsConfig Lab /LibraryShare** command to add, remove, or edit the assignment
of a library share from System Center Virtual Machine Manager (SCVMM) to a team project collection.
You can also use this command set properties that are specific to Visual Studio Lab Management
and to display the library shares that are currently assigned to a collection in Lab Management or to display all the library shares in SCVMM.

	TfsConfig Lab /LibraryShare
		/CollectionName:collectionName
		{ /Add 
		    /SCVMMLibraryShare:librarySharePath 
		    /Name:name 
		    [/AutoProvision:{True|False}]
		| /Delete 
		    /Name:name 
		    [/NoPrompt]
		| /Edit 
		    /Name:name 
		    /AutoProvision:{True|False} 
		    [/NoPrompt]
		| /List
		| /ListSCVMMLibraryShares }

|Option|Description|
|---|---|
|**Add**|Adds the specified library share to the team project collection. You must specify the **/SCVMMLibraryShare** and **/Name** options with **Add**.|
|**Delete**|Removes the specified library share from the team project collection. You must specify the **/Name** option with **Delete**.|
|**Edit**|Sets or clears the AutoProvision property of the library share. You must specify the **/Name** and **/AutoProvision** options with **Edit**.<br /><br />By default, library shares are assigned to the team projects in a collection.<br /><br />**Note:** Changing auto-provision does impact existing team projects.|
|**CollectionName:** collectionName|Required. Specify the name of the team project collection on the application-tier Team Foundation Server.|
|**SCVMMLibraryShare:** librarysharePath|Required with **Add**. Specifies the path to the Virtual Machine Manager library share.|
|**Name:** libraryShareName|Required with **Add**, **Delete**, and **Edit**. Specifies the name of library share in the team project collection.|
|**AutoProvision**|Optional with **Add**; required with **Edit**. Specifies whether the library shares are automatically assigned to each team project in the collection. By default, library shares are assigned to the team projects.|
|**NoPrompt**|Optional with **Add** and **Edit**. Do not prompt the user for confirmation.|
|**List**|Lists all library shares that are assigned to the specified team project collection.|
|**ListSCVMMLibraryShares**|Lists all library shares that are available in Virtual Machine Manager.|

### Remarks

A library share is a designated share on a Virtual Machine Manager library server.
A library share provides access to file-based resources for virtual Lab Management environments that are stored on your library servers,
such as ISO images and virtual hard disks.
Library shares are created in Virtual Machine Manager.
Visual Studio Lab Management uses library shares to provision virtual machines in the lab.

Use only one of the **/Add**, **/Edit**, or **/Delete** options on a TfsConfig Lab /LibraryShare command line.
Use separate **TfsConfig Lab /LibraryShare** command lines to assign multiple library shares to a collection.

By default, library shares in a team project collection are automatically assigned to each of the team projects in the collection.
You can use the **/AutoProvision** option with the **/Add** and **/Edit** commands to change the library shares are assigned.

-   Set the **/AutoProvision** option to **False** to disable the automatic assignment of the library share to team projects.
To assign or remove a library share in an individual team project,
use the **TfsLabConfig** [TFSLabConfig CreateTeamProjectLibraryShare Command](createteamprojectlibraryshare.md).

-   Set the **/AutoProvision** option to **True** to enable the automatic assignments.
