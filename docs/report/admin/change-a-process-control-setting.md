---
title: Change a process control setting | Team Foundation Server 
description: Change a process control setting for the data warehouse or analysis services cube when connecting to an on-premises Team Foundation Server (TFS)  
ms.assetid: 48F5B9C9-66B4-4211-8622-5F93CDA9A19A  
ms.technology: devops-analytics
ms.topic: conceptual
ms.author: kaelli
author: KathrynEE
monikerRange: '< azure-devops' 
ms.date: 11/19/2020
---

# Change a process control setting for the data warehouse or Analysis Services cube

[!INCLUDE [temp](../includes/tfs-report-platform-version.md)] 

You can change the refresh frequency and time-out values that control the processing of the data warehouse. You change a process control setting only if you want to tune it for your specific deployment.

During processing, the warehouse adapters pull data from the operational store, transform it as necessary, and write it to the warehouse through the warehouse object model. During typical operations, the relational database (Tfs_Warehouse) is processed within two minutes of changes made to an operational store, and the SQL Server Analysis Services cube (Tfs_Analysis) is processed every two hours. 

You might want to decrease or increase the length of time between refreshes to reduce the processing time or reduce the resource demands on the server. You can view the current settings or change a process control setting by using the Warehouse Control Web service. 

You can determine the current settings and change a setting by using the Warehouse Control Web service. 

## Prerequisites 

- SQL Server Reporting Services must be configured for the Azure DevOps deployment. If it isn't, see [Add a report server](add-a-report-server.md).  

- You must be a member of the **Team Foundation Administrators** security group, or you must have the server-level **Administer warehouse** permission set to **Allow**. See [Set administrator permissions for Team Foundation Server](/azure/devops/server/admin/add-administrator).  

- The TFS Application Pool must be running for the Warehouse Control Web service to be available.

## Access the Warehouse Control Web Service

1. Log on to the application-tier server.

2. Open a web browser, type the following string in the Address bar, and then press ENTER:
	::: moniker range=">= azure-devops-2019"
	`http://localhost:8080/DefaultCollection/TeamFoundation/Administration/v3.0/WarehouseControlService.asmx`  
	::: moniker-end
	::: moniker range="< azure-devops-2019"
    ```
	http://localhost:8080/VirtualDirectory/DefaultCollection/TeamFoundation/Administration/v3.0/WarehouseControlService.asmx   
    ```
	For VirtualDirectory, type the IIS Virtual Directory that was specified when TFS was installed. By default, the virtual directory is **tfs**. 
	::: moniker-end
	If the project resides on a different project collection, specify the name of the collection in place of *DefaultCollection*.  

	The **WarehouseControlWebService** page opens.

## Change a process control setting

You can change the refresh frequency of the data warehouse or other process control setting. All settings are listed under [Process control settings](#process_control_settings). 

### To change the refresh frequency of the data warehouse

1. From the **WarehouseControlWebService** page, choose **ChangeSetting**. 

2. In the **settingID** box, type: **RunIntervalSeconds**.  

3. In the **newValue** box, type the new number in seconds, and then click **Invoke**.  

	A confirmation Web page appears and indicates that the **RunIntervalSeconds** setting has been changed.  

### To change the refresh frequency of the cube

1. From the **WarehouseControlWebService** page, choose **ChangeSetting**.   

2. In the **settingID** box, type:  

	**IncrementalProcessIntervalSeconds**  

3. In the **newValue** box, type the new number in seconds, and then click **Invoke**.  

	> [!IMPORTANT]  
	> If you reduce the interval to less than the default of two hours (7200 seconds), processing of the data warehouse will consume server resources more frequently. Depending on the volume of data that your deployment has to process, you may want to reduce the interval to one hour (3600 seconds) or increase it to more than two hours.  
 
   A confirmation Web page appears and indicates that the **IncrementalProcessIntervalSeconds** setting has been changed.

### To change another process control setting 

1. From the **WarehouseControlWebService** page, choose **ChangeSetting**. 

2. On the **ChangeSetting** page, type an entry for the **settingID** and **newValue**, and then click **Invoke**. 

   For a description of each setting and the default values and measures that are assigned to each setting, see the table under [Process control settings](#process_control_settings). 

   A browser window will open. The service indicates that the setting has been changed to the new value. 

<a id="process_control_settings"/>

## Process control settings

All reportable data from all team projects that are defined in all team project collections for an on-premises TFS deployment is written to a single relational database (Tfs\_Warehouse). Data from that warehouse is then processed and written to the SQL Server Analysis Services cube (Tfs\_Analysis). 

You should leave most of these settings at their default assignments. However, on occasion, you may have to modify a setting to meet your specific deployment requirements. 

The following table describes each process control setting and provides the SettingID, default value, and unit of measure.


---
:::row:::
   :::column span="1":::
      **SettingID**
   :::column-end:::
   :::column span="3":::
      **Description**
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      AnalysisSchemaUpdateWaitSeconds
   :::column-end:::
   :::column span="3":::
      Specifies the time-out that determines how long a job will wait in a running state to perform an update to the cube. If the time-out expires before the schema change finishes, the job quits and restarts later. This time-out interval supports jobs that require exclusive access to the data warehouse resources during the schema change stage.<br/><br/>
      **Default value**=3600 (seconds)
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      AnalysisServicesProcessingTimeout
   :::column-end:::
   :::column span="3":::
      Specifies the time-out, measured in seconds, that determines how long a job will wait for a processing call to Analysis Services to finish.<br/><br/>
      **Default value**=86400 (seconds)
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      DailyFullProcessingTime
   :::column-end:::
   :::column span="3":::
      Specifies the time of day when the full processing of the Analysis Services cube is started. By default, it is set to 2 AM.<br/><br/>
      **Default value**=02:00:00.0000000-08:00
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      DataUpdateWaitSeconds
   :::column-end:::
   :::column span="3":::
      Specifies the time-out that determines how long a job will wait in a running state for another adapter that is making schema changes to finish, or for the analysis processing job that changes the cube schema to finish. This time-out is used by jobs to acquire shared access to the warehouse resources during the data change stage. If the time-out expires before the schema change process finishes, the job quits and restarts later.<br/><br/>
      **Default value**=30 (seconds)
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      FullProcessIntervalSeconds
   :::column-end:::
   :::column span="3":::
      Specifies the frequency at which the cube is fully processed. The default value corresponds to 24 hours.<br/><br/>
      **Default value**=86400 (seconds)
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      IncrementalProcessIntervalSeconds
   :::column-end:::
   :::column span="3":::
      Specifies the frequency at which the cube is incrementally updated. The default value corresponds to two hours.<br/><br/>
      **Default value**=7200 (seconds)
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      MaxParallelASProcessingCommands
   :::column-end:::
   :::column span="3":::
      Indicates the maximum number of commands that can run in parallel when Team Foundation processes calls to SQL Server Analysis Services. If set to 0, the instance of SQL Server determines the optimal number based on the number of processors that are available on the computer.<br/><br/>
      **Default value**=0
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      RunIntervalSeconds
   :::column-end:::
   :::column span="3":::
      Specifies the frequency at which the relational database is updated.<br/><br/>
      **Default value**=120 (seconds)
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      SchemaUpdateWaitSeconds
   :::column-end:::
   :::column span="3":::
      Specifies the time-out that determines how long a job will wait in a running state to acquire exclusive access to the schema change method. If the time-out expires before the schema change finishes, the job quits and restarts later.<br/><br/>
      **Default value**=120 (seconds)
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      WarehouseCommandSqlTimeout
   :::column-end:::
   :::column span="3":::
      Specifies the time-out that determines how long a job will wait to acquire an exclusive access to a data warehouse resource.<br/><br/>
      **Default value**=3600 (seconds)
   :::column-end:::
:::row-end:::
---
  

## Related articles

- [Manage reports data warehouse cube](manage-reports-data-warehouse-cube.md) 
- [Manually process the Azure DevOps data warehouse and analysis services cube](manually-process-data-warehouse-and-cube.md) 