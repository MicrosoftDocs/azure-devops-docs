>**Command availability:** TFS 2015

You use the **RepairJobQueue** command to fix scheduled jobs that have stopped running for deployment and collection hosts.

	TfsConfig repairJobQueue

### Required permissions

To use the **RepairJobQueue** command, you must be a member of the local administrators group on the machine running **TfsConfig**. 
You must also be a member of the sysadmin security role for all the SQL Server instances used by the TFS deployment. 

### Remarks

You would typically use the **RepairJobQueue** command if you notice any scheduled jobs are not running.  
The command does not take any arguments, and requires the TFS deployment to be configured.

### Example

	TFSConfig repairJobQueue