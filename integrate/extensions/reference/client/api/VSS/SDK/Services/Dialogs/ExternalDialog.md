---
title: VSS/SDK/Services/Dialogs ExternalDialog API | Extensions for Visual Studio Team Services
description: Represents a dialog which hosts an ExternalPart.
ms.assetid: 892ed410-f04f-320f-63b0-a3a5e0505bf0
ms.prod: vs-devops-alm
ms.technology: vs-devops-extensions-api
generated: true
ms.manager: douge
ms.author: elbatk
ms.date: 08/04/2016
---

[!INCLUDE [styleoverrides](../../../../_data/style-overrides.md)]

# ExternalDialog

[!INCLUDE [disclaimer](../../../../_data/disclaimer.md)]

Represents a dialog which hosts an ExternalPart.

### Methods

* [initializeOptions()](#method_initializeOptions)
* [initialize()](#method_initialize)
* [getContributionInstance&lt;T&gt;()](#method_getContributionInstance)
* [onOkClick()](#method_onOkClick)

<a name="method_initializeOptions"></a>
<h2 class='method'>initializeOptions()</h2>



### Syntax
<pre class='syntax'>
 void <b>initializeOptions</b>(options)
</pre>

### Parameters

* `options`: any. Optional. 


<a name="method_initialize"></a>
<h2 class='method'>initialize()</h2>



### Syntax
<pre class='syntax'>
 void <b>initialize</b>()
</pre>

### Parameters



<a name="method_getContributionInstance"></a>
<h2 class='method'>getContributionInstance&lt;T&gt;()</h2>

Gets an object registered in the dialog&#x27;s contribution control.

### Syntax
<pre class='syntax'>
 IPromise&lt;T&gt; <b>getContributionInstance</b>(instanceId, contextData)
</pre>

### Parameters

* `instanceId`: string. 
* `contextData`: any. Optional. 

### Returns

* [IPromise](../../../../VSS/References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;T&gt;

<a name="method_onOkClick"></a>
<h2 class='method'>onOkClick()</h2>



### Syntax
<pre class='syntax'>
 any <b>onOkClick</b>(e)
</pre>

### Parameters

* `e`: JQueryEventObject. Optional. 

### Returns

* any

