
Use the **ListTeamProjectCollectionLibraryShares** command to list the
library shares that have been assigned to a team project collection and
that you have read access to. Library shares are created in System
Center Virtual Machine Manager (SCVMM). and are assigned to a team
project collection by using the [TFSConfig Lab /LibraryShare Commands](lab-libraryshare.md). 
Team project collection library shares can be added to a team project by
using the **CreateTeamProjectLibraryShare** command. For more
information, see [TFSLabConfig CreateTeamProjectLibraryShare Command](createteamprojectlibraryshare.md).

**Required Permissions:**

To use the **ListTeamProjectCollectionLibraryShares** command, you must
have **View Lab Resources** permission at the Team Project collection
level. By default, members of the TFS Administrators and Team Project
Collection Administrators groups have this permission. For more
information, see [Permission reference for Team Foundation Server](../../../security/permissions.md).


    TFSLabConfig ListTeamProjectCollectionLibraryShares
    Collection:collectionUrl


### Parameter


| Option | Description |
| --- | --- |
| **Collection**:*collectionUrl* | Required. The URL of the team project collection on the application tier of Team Foundation Server that contains the team project. For example, ```/collection:http://abc:8080/TFS/DefaultCollection```.  |



### Example

For increased readability in the example, command options are listed on
separate lines. In a command prompt window, type all options for a
command on the same line.


    TFSLabConfig ListTeamProjectCollectionLibraryShares
        /collection:http://abc:8080/TFS/Collection0

