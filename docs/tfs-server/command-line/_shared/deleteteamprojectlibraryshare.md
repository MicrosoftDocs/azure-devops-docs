
Use the **DeleteTeamProjectLibraryShare** command to remove the
assignment of a library share from an individual team project. A library
share provides access to file-based resources for virtual environments
such as ISO images and virtual hard disks., Library shares are created
by System Center Virtual Machine Manager (SCVMM). In Visual Studio Lab
Management,??library shares are assigned to one or more team project
collections and then to one or more team projects in the collections.
The **DeleteTeamProjectLibraryShare** command does not remove the
assignment of the library share to the team project collection.

**Required Permissions:**

To use the **DeleteTeamProjectLibraryShare** command, you must have
**Delete Lab Locations** permission for that Team Project Library Share.
By default, members of the Team Foundation Server Administrators,
Project Collection Administrators and Team Project Administrators groups
have this permission. For more information, see [Permission reference for Team Foundation Server](../../../security/permissions.md).


    TFSLabConfig DeleteTeamProjectLibraryShare
    Collection:collectionUrl
          /TeamProject:{* |teamProjectName}
          /Name:{* |teamProjectLibraryShareName}
          [/NoPrompt]


### Parameters

| Option | Description |
| --- | --- |
| **Collection**:*collectionUrl* | Required. The URL of the team project collection on the application tier of Team Foundation Server that contains the team project. For example, ```/collection:http://abc:8080/TFS/DefaultCollection```.  |
| **TeamProject:**{ * &#124; *teamProjectName*} | Required. The name of the team project that contains the library share that you want to delete. Use quotation marks if there are spaces in the name. Use an asterisk (*) to specify all team projects in the team project collection. |
| **Name:** *teamProjectHostGroupName* | Required. The name of the library share to delete from a team project. Use quotation marks if there are spaces in the name. Use an asterisk (*) to specify all library shares of the team project. |
| **NoPrompt** | Optional. Do not prompt the user for confirmation. |


### Example

For increased readability in the example, command options are listed on
separate lines. In a command prompt window, type all options for a
command on the same line.

In the first example, all the library shares assigned to each of the
team project in the team project collection are removed. In the second
example, one library share is removed from a specific team project.

    REM First example
    TFSLabConfig DeleteTeamProjectLibraryShare
        /collection:http://abc:8080/TFS/DefaultCollection
        /teamProject:*
        /name:*

    REM Second example
    TFSLabConfig DeleteTeamProjectLibraryShare
        /collection:http://abc:8080/TFS/DefaultCollection
        /teamProject:Project1
        /name:ls1

