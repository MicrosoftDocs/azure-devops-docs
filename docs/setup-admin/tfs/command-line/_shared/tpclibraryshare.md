
> **Note:**
> These commands only work on SCVMM 2012 server, and are not supported on
> SCVMM 2008 R2 server.

Use the **TPCLibraryShare** command to add or remove a library share
from a team project collection, or to modify the lab management settings
of the library share.

To run these commands, you must be a member of Team Project Collection
Administrators group in Team Foundation Server for the collection you
specify. In addition, you must be a member of Administrator or Delegated
Administrator role in the SCVMM Server from which you are adding the
host groups. Furthermore, you must ensure that no other team project
collection in any Team Foundation Server is already using the same SCVMM
library share.

    TfsLabConfig TPCLibraryShare
          /collection:collectionUrl
          [/add 
                /scvmmLibraryShare:vmmLibrarySharePath
                /name:libraryShareName
                [/autoprovision:{True|False}]]
          [/delete 
                /name:libraryShareName
                [/noprompt]]
          [/edit 
                /name:libraryShareName
                [/autoprovision:{True|False}]
                [/noprompt]]
          [/list]
          [/listscvmmlibraryshares]


### Parameters

| Option | Description |
| --- | --- |
| **Collection**:*collectionUrl* | Required. Specifies the URL of the team project collection on the application-tier of the Team Foundation Server.  |
| **add** | Adds the specified library share to the team project collection. You must specify the **/collection**, **/scvmmlibraryshare**, and **/name** options with **/add**. |
| **scvmmLibraryShare**: *vmmLibrarySharePath* | Required with **/add**. Specifies the fully qualified domain name (FQDN) of the VMM share. The FDQN path can be retrieved by using the VMM Admin Console. |
| **name**: *libraryShareName* | Required with **/add**, **/edit**, and **/delete**. Specifies the name of the library share in the team project collection. |
| **autoProvision:True &#124; False** | Optional with **/add** or **/edit**. Specifies whether the library share is automatically assigned to each team project in the collection. By default, **/autoProvision** is set to True, and library share is automatically assigned to every team project in the collection. The **/autoProvision** option only affects existing team projects. |
| **Delete** | Removes the specified library share from the team project collection. You must specify the **/collection** and **/name** options. |
| **noPrompt** | Optional with **/add**, **/edit**, or **/delete**. Suppresses display progress and result data from the command window. |
| **edit** | Changes Lab Management settings of the library share. You must specify the **/collection** and **/name** options. |
| **list** | Lists all library shares that are assigned to the specified team project collection. | 
| **listscvmmlibraryshares** | Lists all library shares that are available in VMM. |


### Example

In this example, a library share is added to a team project collection.


    TFSLabConfig TPCLibraryShare
         /collection:http://abc:8080/TFS/Collection0
         /add
         /scvmmLibraryShare:"LibraryShares\LibraryShare1"
         /name:LibraryShare1
