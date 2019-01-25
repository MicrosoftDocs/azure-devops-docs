---
ms.prod: devops
ms.technology: devops-ecosystem
title: VSS SDK Reference for Azure DevOps Services
description: An overview of the VSS SDK in Azure DevOps Services Integration
ms.assetid: 19744f62-02a9-479b-8b9c-e52800e6c24c
ms.manager: jillfra
ms.author: elbatk
author: elbatk
ms.topic: article
monikerRange: '>= tfs-2017'
ms.date: 08/25/2016
---

# VSS SDK Reference 

### Methods

* [getAccessToken()](#method_getAccessToken)
* [getAppToken()](#method_getAppToken)
* [getConfiguration()](#method_getConfiguration)
* [getContribution()](#method_getContribution)
* [getExtensionContext()](#method_getExtensionContext)
* [getRegisteredObject()](#method_getRegisteredObject)
* [getService&lt;T&gt;()](#method_getService)
* [getServiceContribution()](#method_getServiceContribution)
* [getServiceContributions()](#method_getServiceContributions)
* [getWebContext()](#method_getWebContext)
* [init()](#method_init)
* [notifyLoadFailed()](#method_notifyLoadFailed)
* [notifyLoadSucceeded()](#method_notifyLoadSucceeded)
* [ready()](#method_ready)
* [register()](#method_register)
* [require()](#method_require)
* [resize()](#method_resize)

<a name="method_init"></a>
<h2 class='method'>init()</h2>

Initiates the handshake with the host window.

### Syntax
<pre class='syntax'>
 void <b>VSS.init</b>(options)
</pre>

### Parameters

* `options`: [IExtensionInitializationOptions](../../References/VSS_SDK_Interfaces/IExtensionInitializationOptions.md). Initialization options for the extension.


<a name="method_require"></a>
<h2 class='method'>require()</h2>

Ensures that the AMD loader from the host is configured and fetches a script (AMD) module 
(and its dependencies)  . If no callback is supplied, this will still perform an asynchronous
fetch of the module (unlike AMD require which returns synchronously). This method has no return value.

Usage:

VSS.require([&quot;VSS/Controls&quot;, &quot;VSS/Controls/Grids&quot;], function(Controls, Grids) {
   ...
});

### Syntax
<pre class='syntax'>
 void <b>VSS.require</b>(modules, callback)
</pre>

### Parameters

* `modules`: string[] or string. A single module path (string) or array of paths (string[])
* `callback`: Function. Optional. Method called once the modules have been loaded.


<a name="method_ready"></a>
<h2 class='method'>ready()</h2>

Register a callback that gets called once the initial setup/handshake has completed.
If the initial setup is already completed, the callback is invoked at the end of the current call stack.

### Syntax
<pre class='syntax'>
 void <b>VSS.ready</b>(callback)
</pre>

### Parameters

* `callback`: (): void. 


<a name="method_notifyLoadSucceeded"></a>
<h2 class='method'>notifyLoadSucceeded()</h2>

Notifies the host that the extension successfully loaded (stop showing the loading indicator)

### Syntax
<pre class='syntax'>
 void <b>VSS.notifyLoadSucceeded</b>()
</pre>



<a name="method_notifyLoadFailed"></a>
<h2 class='method'>notifyLoadFailed()</h2>

Notifies the host that the extension failed to load

### Syntax
<pre class='syntax'>
 void <b>VSS.notifyLoadFailed</b>(e)
</pre>

### Parameters

* `e`: any. 


<a name="method_getWebContext"></a>
<h2 class='method'>getWebContext()</h2>

Get the web context from the parent host

### Syntax
<pre class='syntax'>
 WebContext <b>VSS.getWebContext</b>()
</pre>


### Returns

* [WebContext](../../References/SDK_Interfaces/WebContext.md)

<a name="method_getConfiguration"></a>
<h2 class='method'>getConfiguration()</h2>

Get the configuration data passed in the initial handshake from the parent frame

### Syntax
<pre class='syntax'>
 any <b>VSS.getConfiguration</b>()
</pre>


### Returns

* any

<a name="method_getExtensionContext"></a>
<h2 class='method'>getExtensionContext()</h2>

Get the context about the extension that owns the content that is being hosted

### Syntax
<pre class='syntax'>
 IExtensionContext <b>VSS.getExtensionContext</b>()
</pre>


### Returns

* [IExtensionContext](../../References/VSS_SDK_Interfaces/IExtensionContext.md)

<a name="method_getContribution"></a>
<h2 class='method'>getContribution()</h2>

Gets the information about the contribution that first caused this extension to load.

### Syntax
<pre class='syntax'>
 Contribution <b>VSS.getContribution</b>()
</pre>


### Returns

* [Contribution](../../References/SDK_Interfaces/Contribution.md)

<a name="method_getService"></a>
<h2 class='method'>getService&lt;T&gt;()</h2>

Get a contributed service from the parent host.

### Syntax
<pre class='syntax'>
 IPromise&lt;T&gt; <b>VSS.getService</b>(contributionId, context)
</pre>

### Parameters

* `contributionId`: string. 
* `context`: Object. Optional. 

### Returns

* [IPromise](../../References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;T&gt;

<a name="method_getServiceContribution"></a>
<h2 class='method'>getServiceContribution()</h2>

Get the contribution with the given contribution id. The returned contribution has a method to get a registered object within that contribution.

### Syntax
<pre class='syntax'>
 IPromise&lt;IServiceContribution&gt; <b>VSS.getServiceContribution</b>(contributionId)
</pre>

### Parameters

* `contributionId`: string. ID of the contribution to get

### Returns

* [IPromise](../../References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[IServiceContribution](../../References/VSS_SDK_Interfaces/IServiceContribution.md)&gt;

<a name="method_getServiceContributions"></a>
<h2 class='method'>getServiceContributions()</h2>

Get contributions that target a given contribution id. The returned contributions have a method to get a registered object within that contribution.

### Syntax
<pre class='syntax'>
 IPromise&lt;IServiceContribution[]&gt; <b>VSS.getServiceContributions</b>(targetContributionId)
</pre>

### Parameters

* `targetContributionId`: string. Contributions that target the contribution with this ID will be returned

### Returns

* [IPromise](../../References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[IServiceContribution](../../References/VSS_SDK_Interfaces/IServiceContribution.md)[]&gt;

<a name="method_register"></a>
<h2 class='method'>register()</h2>

Register an object (instance or factory method) that this extension exposes to the host frame.

### Syntax
<pre class='syntax'>
 void <b>VSS.register</b>(instanceId, instance)
</pre>

### Parameters

* `instanceId`: string. unique ID of the registered object
* `instance`: Object or &lt;unknown_object_signature_kind&gt;. Either: (1) an object instance, or (2) a function that takes optional context data and returns an object instance.


<a name="method_getRegisteredObject"></a>
<h2 class='method'>getRegisteredObject()</h2>

Get an instance of an object registered with the given id

### Syntax
<pre class='syntax'>
 Object <b>VSS.getRegisteredObject</b>(instanceId, contextData)
</pre>

### Parameters

* `instanceId`: string. unique ID of the registered object
* `contextData`: Object. Optional. Optional context data to pass to the constructor of an object factory method

### Returns

* Object

<a name="method_getAccessToken"></a>
<h2 class='method'>getAccessToken()</h2>

Fetch an access token which will allow calls to be made to other Azure DevOps Services services

### Syntax
<pre class='syntax'>
 IPromise&lt;ISessionToken&gt; <b>VSS.getAccessToken</b>()
</pre>


### Returns

* [IPromise](../../References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[ISessionToken](../../References/VSS_SDK_Interfaces/ISessionToken.md)&gt;

<a name="method_getAppToken"></a>
<h2 class='method'>getAppToken()</h2>

Fetch an token which can be used to identify the current user

### Syntax
<pre class='syntax'>
 IPromise&lt;ISessionToken&gt; <b>VSS.getAppToken</b>()
</pre>


### Returns

* [IPromise](../../References/VSS_WebPlatform_Interfaces/IPromise.md)&lt;[ISessionToken](../../References/VSS_SDK_Interfaces/ISessionToken.md)&gt;

<a name="method_resize"></a>
<h2 class='method'>resize()</h2>

Requests the parent window to resize the container for this extension based on the current extension size.

### Syntax
<pre class='syntax'>
 void <b>VSS.resize</b>()
</pre>



