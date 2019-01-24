---
title: TFS/Work/RestClient WorkHttpClient2_2 API | Extensions for Azure DevOps Services
ms.assetid: 5e8b67ac-1688-5e70-deb8-860c5ca502e5
ms.prod: devops
ms.technology: devops-ecosystem
generated: true
ms.manager: jillfra
author: elbatk
ms.topic: article
ms.author: elbatk
ms.date: 08/04/2016
---

[!INCLUDE [styleoverrides](../../../_data/style-overrides.md)]

# WorkHttpClient2_2

[!INCLUDE [disclaimer](../../../_data/disclaimer.md)]



Module path: `TFS/Work/RestClient`

### Initialization sample
``` javascript
  import RestClient = require("TFS/Work/RestClient");

  // Get an instance of the client
  var client = RestClient.getClient();
    
  // Call a method on the client
  // e.g. client.getResource(...).then(...);
```

### Methods

* [deleteTeamIteration()](#method_deleteTeamIteration)
* [getBoard()](#method_getBoard)
* [getBoardCardRuleSettings()](#method_getBoardCardRuleSettings)
* [getBoardCardSettings()](#method_getBoardCardSettings)
* [getBoardChart()](#method_getBoardChart)
* [getBoardCharts()](#method_getBoardCharts)
* [getBoardColumns()](#method_getBoardColumns)
* [getBoardRows()](#method_getBoardRows)
* [getBoards()](#method_getBoards)
* [getCapacities()](#method_getCapacities)
* [getCapacity()](#method_getCapacity)
* [getColumnSuggestedValues()](#method_getColumnSuggestedValues)
* [getRowSuggestedValues()](#method_getRowSuggestedValues)
* [getTeamDaysOff()](#method_getTeamDaysOff)
* [getTeamFieldValues()](#method_getTeamFieldValues)
* [getTeamIteration()](#method_getTeamIteration)
* [getTeamIterations()](#method_getTeamIterations)
* [getTeamSettings()](#method_getTeamSettings)
* [postTeamIteration()](#method_postTeamIteration)
* [replaceCapacities()](#method_replaceCapacities)
* [setBoardOptions()](#method_setBoardOptions)
* [updateBoardCardRuleSettings()](#method_updateBoardCardRuleSettings)
* [updateBoardCardSettings()](#method_updateBoardCardSettings)
* [updateBoardChart()](#method_updateBoardChart)
* [updateBoardColumns()](#method_updateBoardColumns)
* [updateBoardRows()](#method_updateBoardRows)
* [updateCapacity()](#method_updateCapacity)
* [updateTeamDaysOff()](#method_updateTeamDaysOff)
* [updateTeamFieldValues()](#method_updateTeamFieldValues)
* [updateTeamSettings()](#method_updateTeamSettings)

<a name="method_deleteTeamIteration"></a>
<h2 class='method'>deleteTeamIteration()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;void&gt; <b>deleteTeamIteration</b>(teamContext, id)
</pre>

### Parameters

* `teamContext`: [TFS_Core_Contracts.TeamContext](../../../TFS/Core/Contracts/TeamContext.md). The team context for the operation
* `id`: string. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;void&gt;

<a name="method_getBoard"></a>
<h2 class='method'>getBoard()</h2>

 Get board

### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.Board&gt; <b>getBoard</b>(teamContext, id)
</pre>

### Parameters

* `teamContext`: [TFS_Core_Contracts.TeamContext](../../../TFS/Core/Contracts/TeamContext.md). The team context for the operation
* `id`: string. identifier for board, either category plural name (Eg:&quot;Stories&quot;) or guid

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.Board](../../../TFS/Work/Contracts/Board.md)&gt;

<a name="method_getBoardCardRuleSettings"></a>
<h2 class='method'>getBoardCardRuleSettings()</h2>

 Get board card Rule settings for the board ID or board by name

### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.BoardCardRuleSettings&gt; <b>getBoardCardRuleSettings</b>(teamContext, board)
</pre>

### Parameters

* `teamContext`: [TFS_Core_Contracts.TeamContext](../../../TFS/Core/Contracts/TeamContext.md). The team context for the operation
* `board`: string. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.BoardCardRuleSettings](../../../TFS/Work/Contracts/BoardCardRuleSettings.md)&gt;

<a name="method_getBoardCardSettings"></a>
<h2 class='method'>getBoardCardSettings()</h2>

 Get board card settings for the board ID or board by name

### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.BoardCardSettings&gt; <b>getBoardCardSettings</b>(teamContext, board)
</pre>

### Parameters

* `teamContext`: [TFS_Core_Contracts.TeamContext](../../../TFS/Core/Contracts/TeamContext.md). The team context for the operation
* `board`: string. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.BoardCardSettings](../../../TFS/Work/Contracts/BoardCardSettings.md)&gt;

<a name="method_getBoardChart"></a>
<h2 class='method'>getBoardChart()</h2>

 Get a board chart

### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.BoardChart&gt; <b>getBoardChart</b>(teamContext, board, name)
</pre>

### Parameters

* `teamContext`: [TFS_Core_Contracts.TeamContext](../../../TFS/Core/Contracts/TeamContext.md). The team context for the operation
* `board`: string. Identifier for board, either category plural name (Eg:&quot;Stories&quot;) or Guid
* `name`: string. The chart name

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.BoardChart](../../../TFS/Work/Contracts/BoardChart.md)&gt;

<a name="method_getBoardCharts"></a>
<h2 class='method'>getBoardCharts()</h2>

 Get board charts

### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.BoardChartReference[]&gt; <b>getBoardCharts</b>(teamContext, board)
</pre>

### Parameters

* `teamContext`: [TFS_Core_Contracts.TeamContext](../../../TFS/Core/Contracts/TeamContext.md). The team context for the operation
* `board`: string. Identifier for board, either category plural name (Eg:&quot;Stories&quot;) or Guid

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.BoardChartReference](../../../TFS/Work/Contracts/BoardChartReference.md)[]&gt;

<a name="method_getBoardColumns"></a>
<h2 class='method'>getBoardColumns()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.BoardColumn[]&gt; <b>getBoardColumns</b>(teamContext, board)
</pre>

### Parameters

* `teamContext`: [TFS_Core_Contracts.TeamContext](../../../TFS/Core/Contracts/TeamContext.md). The team context for the operation
* `board`: string. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.BoardColumn](../../../TFS/Work/Contracts/BoardColumn.md)[]&gt;

<a name="method_getBoardRows"></a>
<h2 class='method'>getBoardRows()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.BoardRow[]&gt; <b>getBoardRows</b>(teamContext, board)
</pre>

### Parameters

* `teamContext`: [TFS_Core_Contracts.TeamContext](../../../TFS/Core/Contracts/TeamContext.md). The team context for the operation
* `board`: string. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.BoardRow](../../../TFS/Work/Contracts/BoardRow.md)[]&gt;

<a name="method_getBoards"></a>
<h2 class='method'>getBoards()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.BoardReference[]&gt; <b>getBoards</b>(teamContext)
</pre>

### Parameters

* `teamContext`: [TFS_Core_Contracts.TeamContext](../../../TFS/Core/Contracts/TeamContext.md). The team context for the operation

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.BoardReference](../../../TFS/Work/Contracts/BoardReference.md)[]&gt;

<a name="method_getCapacities"></a>
<h2 class='method'>getCapacities()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.TeamMemberCapacity[]&gt; <b>getCapacities</b>(teamContext, iterationId)
</pre>

### Parameters

* `teamContext`: [TFS_Core_Contracts.TeamContext](../../../TFS/Core/Contracts/TeamContext.md). The team context for the operation
* `iterationId`: string. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.TeamMemberCapacity](../../../TFS/Work/Contracts/TeamMemberCapacity.md)[]&gt;

<a name="method_getCapacity"></a>
<h2 class='method'>getCapacity()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.TeamMemberCapacity&gt; <b>getCapacity</b>(teamContext, iterationId, teamMemberId)
</pre>

### Parameters

* `teamContext`: [TFS_Core_Contracts.TeamContext](../../../TFS/Core/Contracts/TeamContext.md). The team context for the operation
* `iterationId`: string. 
* `teamMemberId`: string. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.TeamMemberCapacity](../../../TFS/Work/Contracts/TeamMemberCapacity.md)&gt;

<a name="method_getColumnSuggestedValues"></a>
<h2 class='method'>getColumnSuggestedValues()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.BoardSuggestedValue[]&gt; <b>getColumnSuggestedValues</b>(project)
</pre>

### Parameters

* `project`: string. Optional. Project ID or project name

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.BoardSuggestedValue](../../../TFS/Work/Contracts/BoardSuggestedValue.md)[]&gt;

<a name="method_getRowSuggestedValues"></a>
<h2 class='method'>getRowSuggestedValues()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.BoardSuggestedValue[]&gt; <b>getRowSuggestedValues</b>(project)
</pre>

### Parameters

* `project`: string. Optional. Project ID or project name

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.BoardSuggestedValue](../../../TFS/Work/Contracts/BoardSuggestedValue.md)[]&gt;

<a name="method_getTeamDaysOff"></a>
<h2 class='method'>getTeamDaysOff()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.TeamSettingsDaysOff&gt; <b>getTeamDaysOff</b>(teamContext, iterationId)
</pre>

### Parameters

* `teamContext`: [TFS_Core_Contracts.TeamContext](../../../TFS/Core/Contracts/TeamContext.md). The team context for the operation
* `iterationId`: string. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.TeamSettingsDaysOff](../../../TFS/Work/Contracts/TeamSettingsDaysOff.md)&gt;

<a name="method_getTeamFieldValues"></a>
<h2 class='method'>getTeamFieldValues()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.TeamFieldValues&gt; <b>getTeamFieldValues</b>(teamContext)
</pre>

### Parameters

* `teamContext`: [TFS_Core_Contracts.TeamContext](../../../TFS/Core/Contracts/TeamContext.md). The team context for the operation

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.TeamFieldValues](../../../TFS/Work/Contracts/TeamFieldValues.md)&gt;

<a name="method_getTeamIteration"></a>
<h2 class='method'>getTeamIteration()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.TeamSettingsIteration&gt; <b>getTeamIteration</b>(teamContext, id)
</pre>

### Parameters

* `teamContext`: [TFS_Core_Contracts.TeamContext](../../../TFS/Core/Contracts/TeamContext.md). The team context for the operation
* `id`: string. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.TeamSettingsIteration](../../../TFS/Work/Contracts/TeamSettingsIteration.md)&gt;

<a name="method_getTeamIterations"></a>
<h2 class='method'>getTeamIterations()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.TeamSettingsIteration[]&gt; <b>getTeamIterations</b>(teamContext, timeframe)
</pre>

### Parameters

* `teamContext`: [TFS_Core_Contracts.TeamContext](../../../TFS/Core/Contracts/TeamContext.md). The team context for the operation
* `timeframe`: string. Optional. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.TeamSettingsIteration](../../../TFS/Work/Contracts/TeamSettingsIteration.md)[]&gt;

<a name="method_getTeamSettings"></a>
<h2 class='method'>getTeamSettings()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.TeamSetting&gt; <b>getTeamSettings</b>(teamContext)
</pre>

### Parameters

* `teamContext`: [TFS_Core_Contracts.TeamContext](../../../TFS/Core/Contracts/TeamContext.md). The team context for the operation

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.TeamSetting](../../../TFS/Work/Contracts/TeamSetting.md)&gt;

<a name="method_postTeamIteration"></a>
<h2 class='method'>postTeamIteration()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.TeamSettingsIteration&gt; <b>postTeamIteration</b>(iteration, teamContext)
</pre>

### Parameters

* `iteration`: [Contracts.TeamSettingsIteration](../../../TFS/Work/Contracts/TeamSettingsIteration.md). 
* `teamContext`: [TFS_Core_Contracts.TeamContext](../../../TFS/Core/Contracts/TeamContext.md). 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.TeamSettingsIteration](../../../TFS/Work/Contracts/TeamSettingsIteration.md)&gt;

<a name="method_replaceCapacities"></a>
<h2 class='method'>replaceCapacities()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.TeamMemberCapacity[]&gt; <b>replaceCapacities</b>(capacities, teamContext, iterationId)
</pre>

### Parameters

* `capacities`: [Contracts.TeamMemberCapacity](../../../TFS/Work/Contracts/TeamMemberCapacity.md)[]. 
* `teamContext`: [TFS_Core_Contracts.TeamContext](../../../TFS/Core/Contracts/TeamContext.md). 
* `iterationId`: string. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.TeamMemberCapacity](../../../TFS/Work/Contracts/TeamMemberCapacity.md)[]&gt;

<a name="method_setBoardOptions"></a>
<h2 class='method'>setBoardOptions()</h2>

 Update board options

### Syntax
<pre class='syntax'>
 IPromise&lt;{[key: string]: string}&gt; <b>setBoardOptions</b>(options, teamContext, id)
</pre>

### Parameters

* `options`: {[key: string]: string}. options to updated
* `teamContext`: [TFS_Core_Contracts.TeamContext](../../../TFS/Core/Contracts/TeamContext.md). 
* `id`: string. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;{[key: string]: string}&gt;

<a name="method_updateBoardCardRuleSettings"></a>
<h2 class='method'>updateBoardCardRuleSettings()</h2>

 Update board card Rule settings for the board ID or board by name

### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.BoardCardRuleSettings&gt; <b>updateBoardCardRuleSettings</b>(boardCardRuleSettings, teamContext, board)
</pre>

### Parameters

* `boardCardRuleSettings`: [Contracts.BoardCardRuleSettings](../../../TFS/Work/Contracts/BoardCardRuleSettings.md). 
* `teamContext`: [TFS_Core_Contracts.TeamContext](../../../TFS/Core/Contracts/TeamContext.md). 
* `board`: string. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.BoardCardRuleSettings](../../../TFS/Work/Contracts/BoardCardRuleSettings.md)&gt;

<a name="method_updateBoardCardSettings"></a>
<h2 class='method'>updateBoardCardSettings()</h2>

 Update board card settings for the board ID or board by name

### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.BoardCardSettings&gt; <b>updateBoardCardSettings</b>(boardCardSettingsToSave, teamContext, board)
</pre>

### Parameters

* `boardCardSettingsToSave`: [Contracts.BoardCardSettings](../../../TFS/Work/Contracts/BoardCardSettings.md). 
* `teamContext`: [TFS_Core_Contracts.TeamContext](../../../TFS/Core/Contracts/TeamContext.md). 
* `board`: string. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.BoardCardSettings](../../../TFS/Work/Contracts/BoardCardSettings.md)&gt;

<a name="method_updateBoardChart"></a>
<h2 class='method'>updateBoardChart()</h2>

 Update a board chart

### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.BoardChart&gt; <b>updateBoardChart</b>(chart, teamContext, board, name)
</pre>

### Parameters

* `chart`: [Contracts.BoardChart](../../../TFS/Work/Contracts/BoardChart.md). 
* `teamContext`: [TFS_Core_Contracts.TeamContext](../../../TFS/Core/Contracts/TeamContext.md). 
* `board`: string. 
* `name`: string. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.BoardChart](../../../TFS/Work/Contracts/BoardChart.md)&gt;

<a name="method_updateBoardColumns"></a>
<h2 class='method'>updateBoardColumns()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.BoardColumn[]&gt; <b>updateBoardColumns</b>(boardColumns, teamContext, board)
</pre>

### Parameters

* `boardColumns`: [Contracts.BoardColumn](../../../TFS/Work/Contracts/BoardColumn.md)[]. 
* `teamContext`: [TFS_Core_Contracts.TeamContext](../../../TFS/Core/Contracts/TeamContext.md). 
* `board`: string. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.BoardColumn](../../../TFS/Work/Contracts/BoardColumn.md)[]&gt;

<a name="method_updateBoardRows"></a>
<h2 class='method'>updateBoardRows()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.BoardRow[]&gt; <b>updateBoardRows</b>(boardRows, teamContext, board)
</pre>

### Parameters

* `boardRows`: [Contracts.BoardRow](../../../TFS/Work/Contracts/BoardRow.md)[]. 
* `teamContext`: [TFS_Core_Contracts.TeamContext](../../../TFS/Core/Contracts/TeamContext.md). 
* `board`: string. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.BoardRow](../../../TFS/Work/Contracts/BoardRow.md)[]&gt;

<a name="method_updateCapacity"></a>
<h2 class='method'>updateCapacity()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.TeamMemberCapacity&gt; <b>updateCapacity</b>(patch, teamContext, iterationId, teamMemberId)
</pre>

### Parameters

* `patch`: [Contracts.CapacityPatch](../../../TFS/Work/Contracts/CapacityPatch.md). 
* `teamContext`: [TFS_Core_Contracts.TeamContext](../../../TFS/Core/Contracts/TeamContext.md). 
* `iterationId`: string. 
* `teamMemberId`: string. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.TeamMemberCapacity](../../../TFS/Work/Contracts/TeamMemberCapacity.md)&gt;

<a name="method_updateTeamDaysOff"></a>
<h2 class='method'>updateTeamDaysOff()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.TeamSettingsDaysOff&gt; <b>updateTeamDaysOff</b>(daysOffPatch, teamContext, iterationId)
</pre>

### Parameters

* `daysOffPatch`: [Contracts.TeamSettingsDaysOffPatch](../../../TFS/Work/Contracts/TeamSettingsDaysOffPatch.md). 
* `teamContext`: [TFS_Core_Contracts.TeamContext](../../../TFS/Core/Contracts/TeamContext.md). 
* `iterationId`: string. 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.TeamSettingsDaysOff](../../../TFS/Work/Contracts/TeamSettingsDaysOff.md)&gt;

<a name="method_updateTeamFieldValues"></a>
<h2 class='method'>updateTeamFieldValues()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.TeamFieldValues&gt; <b>updateTeamFieldValues</b>(patch, teamContext)
</pre>

### Parameters

* `patch`: [Contracts.TeamFieldValuesPatch](../../../TFS/Work/Contracts/TeamFieldValuesPatch.md). 
* `teamContext`: [TFS_Core_Contracts.TeamContext](../../../TFS/Core/Contracts/TeamContext.md). 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.TeamFieldValues](../../../TFS/Work/Contracts/TeamFieldValues.md)&gt;

<a name="method_updateTeamSettings"></a>
<h2 class='method'>updateTeamSettings()</h2>



### Syntax
<pre class='syntax'>
 IPromise&lt;Contracts.TeamSetting&gt; <b>updateTeamSettings</b>(teamSettingsPatch, teamContext)
</pre>

### Parameters

* `teamSettingsPatch`: [Contracts.TeamSettingsPatch](../../../TFS/Work/Contracts/TeamSettingsPatch.md). 
* `teamContext`: [TFS_Core_Contracts.TeamContext](../../../TFS/Core/Contracts/TeamContext.md). 

### Returns

* [IPromise](../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[Contracts.TeamSetting](../../../TFS/Work/Contracts/TeamSetting.md)&gt;

