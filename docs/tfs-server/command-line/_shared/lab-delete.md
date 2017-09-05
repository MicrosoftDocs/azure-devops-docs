Use the **TfsConfig Lab /Delete** option to remove all group hosts, library shares, and environments from a specified team project collection.
By default, the associated objects in the System Center Virtual Machine Manager (SCVMM) are not deleted.
You can add the **/External** option to the command line to remove the objects from the project collection and from SCVMM.

	TfsConfig Lab /Delete /CollectionName:collectionName [/External] [/NoPrompt]

|Option|Description|
|---|---|
|**CollectionName**:collectionName|Required. Specifies the name of the team project collection on the application tier of Team Foundation Server.|
|**External**|Optional. When specified, removes the library shares and host groups in SCVMM in addition to the objects in the team project collection. When **/External** is not specified, the **TfsConfig Lab /Delete** command only removes the objects in the team project collection.|
|**NoPrompt**|Optional. When specified, does not display progress and success information.|

### Remarks

Use the **/Delete** command to remove the lab assets from a project collection when you want to detach the lab configuration of a project collection. This is useful when moving a project collection from one Team Foundation Server (TFS) instance to another, and where the new Team Foundation Server instance uses a different SCVMM server than the original one. In this case, you will have to delete all the lab assets and reconfigure lab for the project collection.

>**Note:**  
>The **/Delete** option works on all lab assets in a team project collection only when the **/LibraryShare** and **/GroupHost** options are not specified on the command line. For more information, see [TFSConfig Lab /LibraryShare Commands](#lab-libraryshare)(../tfsconfig-cmd.md#lab-libraryshare) and [TFSConfig Lab /HostGroup Commands](../tfsconfig-cmd.md#lab-libraryshare).

### Example

In the following example, all lab objects in the DefaultCollection team project collection are removed. Because the **/External** option is not specified, the objects are retained in SCVMM.

    tfsconfig lab /delete /collectionName:DefaultCollection 
