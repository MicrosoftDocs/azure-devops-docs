
> **Note:**
> These commands only work on SCVMM 2012 server, and are not supported on
> SCVMM 2008 R2 server.

Use the **TPLibraryShare** command to assign or unassign a library share
from a team project collection to an individual team project in the
collection. A library share provides access to file-based resources for
virtual environments such as ISO images and virtual hard disks. Library
shares are created in System Center Virtual Machine Manager (SCVMM) and
assigned to project collection by Visual Studio Lab Management.

To run these commands, you must be a member of Team Project Collection
Administrators group in Team Foundation Server for the collection you
specify. In addition, you must be a member of Administrator or Delegated
Administrator role in the SCVMM Server from which you are adding the
host groups.


    TfsLabConfig TPLibraryShare
          /collection:collectionUrl
          /teamProject:* | teamProjectName
          [/add 
                /teamProjectCollectionLibraryShare:* | teamProjectCollectionLibraryShare
                /name:teamProjectLibraryShareName
                [/noprompt]]
          [/delete 
                /name:* | teamProjectLibraryShareName
                [/noprompt]]
          [/list]

### Parameters



| Option | Description |
| --- | --- |
| **Collection**:*collectionUrl* | Required. Specifies the URL of the team project collection on the application-tier of the Team Foundation Server.  |
| **add** | Assigns the specified library share to the team project. |
| **teamProjectCollectionLibraryShare**: *teamProjectCollectionLibraryShare* | The name of the team project collection library share. |
| **name**: *libraryShareName* | Tthe name of the library share. |
| **Delete** | Removes the specified library share from the team project collection.  |
| **noPrompt** | Suppresses display progress and result data from the command window. |
| **list** | Lists all library shares that are assigned to the specified team project collection. |

