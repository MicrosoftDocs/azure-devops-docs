
Use the **ListTeamProjectLibraryShares** command to list all *library shares* that are assigned to a team
project and that you have access to.

**Required Permissions:**

To use the ListTeamProjectLibraryShares command, you must have the
**View Lab Resources** permission at Team Project level. By default,
members of the TFS Administrators, Team Project Collection
Administrators, Team Project Administrators, Team Project Contributors,
and Team Project Readers groups have this permission. For more
information, see [Permission reference for Team Foundation Server](../../../security/permissions.md).


    TFSLabConfig ListTeamProjectLibraryShares
    Collection:collectionUrl
          /TeamProject:teamProjectName


### Parameters



| Option | Description |
| --- | --- |
| **Collection**:*collectionUrl* | Required. The URL of the team project collection on the application tier of Team Foundation Server that contains the team project. For example, ```/collection:http://abc:8080/TFS/DefaultCollection```.  |
| **TeamProject:**  *teamProjectName* | Required. The name of the team project. Use quotation marks if there are spaces in the name.  |
