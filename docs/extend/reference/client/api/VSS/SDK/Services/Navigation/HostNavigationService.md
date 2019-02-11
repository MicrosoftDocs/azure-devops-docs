---
title: VSS/SDK/Services/Navigation HostNavigationService API | Extensions for Azure DevOps Services
description: Service which allows interaction with the browser location and navigation of the host frame
ms.assetid: 2eb91c1e-0665-771c-e764-8a1982fdf35e
ms.prod: devops
ms.technology: devops-ecosystem
generated: true
ms.manager: jillfra
ms.author: elbatk
author: elbatk
ms.topic: article
monikerRange: '>= tfs-2017'
ms.date: 08/04/2016
---

# HostNavigationService

Service which allows interaction with the browser location and navigation of the host frame

## Example
[!INCLUDE [x](../../../../../samples/client-services/HostNavigationService.md)]

## Methods

* [updateHistoryEntry()](#method_updateHistoryEntry)
* [getCurrentState()](#method_getCurrentState)
* [attachNavigate()](#method_attachNavigate)
* [detachNavigate()](#method_detachNavigate)
* [onHashChanged()](#method_onHashChanged)
* [getHash()](#method_getHash)
* [reload()](#method_reload)
* [setHash()](#method_setHash)
* [replaceHash()](#method_replaceHash)
* [setWindowTitle()](#method_setWindowTitle)
* [openNewWindow()](#method_openNewWindow)
* [navigate()](#method_navigate)

<a name="method_updateHistoryEntry"></a>
### updateHistoryEntry()

Update the current history entry

#### Syntax
<pre class='syntax'>
 void <b>updateHistoryEntry</b>(action, data, replaceHistoryEntry, mergeWithCurrentState, windowTitle, suppressNavigate)
</pre>

#### Parameters

* `action`: string. The &quot;action&quot; state parameter. This is the _a key in the url or &quot;action&quot; in the current state dictionary
* `data`: IDictionaryStringTo&lt;any&gt;. Optional. The history entry&#x27;s new state key/value pairs
* `replaceHistoryEntry`: boolean. Optional. If true, replace the current history entry. Otherwise, add a new history entry.
* `mergeWithCurrentState`: boolean. Optional. If true, the supplied data just modify the existing/current state. If false, they replace all existing key/value pairs.
* `windowTitle`: string. Optional. The new window title. A null or empty value indicates to leave the title unchanged.
* `suppressNavigate`: boolean. Optional. If true, don&#x27;t trigger any of the attached navigate event handlers due to this update.


<a name="method_getCurrentState"></a>
### getCurrentState()

Get the current navigation state dictionary. Uses query parameters and hash parameters.

#### Syntax
<pre class='syntax'>
 any <b>getCurrentState</b>()
</pre>

#### Parameters


### Returns

* any

<a name="method_attachNavigate"></a>
### attachNavigate()

Attach a new navigate handler

#### Syntax
<pre class='syntax'>
 void <b>attachNavigate</b>(action, handler, checkCurrentState)
</pre>

#### Parameters

* `action`: string. The action that the handler applies to (or null to listen for all events)
* `handler`: IFunctionPPR&lt;any, any, void&gt;. The method called whenever a navigation event occurs with the matching action value
* `checkCurrentState`: boolean. Optional. If true, immediately invoke the handler if the current state is appropriate (has the matching action value)


<a name="method_detachNavigate"></a>
### detachNavigate()

Remove a navigate handler

#### Syntax
<pre class='syntax'>
 void <b>detachNavigate</b>(action, handler)
</pre>

#### Parameters

* `action`: string. The action that the handler applies to (or null for global handlers)
* `handler`: IFunctionPPR&lt;any, any, void&gt;. Optional. The method called whenever a navigation event occurs with the matching action value


<a name="method_onHashChanged"></a>
### onHashChanged()

Add a callback to be invoked each time the hash navigation has changed

#### Syntax
<pre class='syntax'>
 void <b>onHashChanged</b>(callback)
</pre>

#### Parameters

* `callback`: (hash: string): void. Method invoked on each navigation hash change


<a name="method_getHash"></a>
### getHash()

Gets the current hash.

#### Syntax
<pre class='syntax'>
 Q.Promise&lt;string&gt; <b>getHash</b>()
</pre>

#### Parameters


#### Returns

* Q.Promise&lt;string&gt;

<a name="method_reload"></a>
### reload()

Reloads the parent frame

#### Syntax
<pre class='syntax'>
 void <b>reload</b>()
</pre>

#### Parameters



<a name="method_setHash"></a>
### setHash()

Sets the provided hash from the hosted content.

#### Syntax
<pre class='syntax'>
 void <b>setHash</b>(hash)
</pre>

#### Parameters

* `hash`: string. 


<a name="method_replaceHash"></a>
### replaceHash()

Replace existing hash with the provided hash from the hosted content.

#### Syntax
<pre class='syntax'>
 void <b>replaceHash</b>(hash)
</pre>

#### Parameters

* `hash`: string. 


<a name="method_setWindowTitle"></a>
### setWindowTitle()

Update the host document&#x27;s title (appears as the browser tab title).

#### Syntax
<pre class='syntax'>
 void <b>setWindowTitle</b>(title)
</pre>

#### Parameters

* `title`: string. The new title of the window


<a  name="method_openNewWindow"></a>
### openNewWindow()
  
opens a new browser window. The target will always be _blank.
  
#### Syntax
<pre  class='syntax'>
void <b>openNewWindow</b>(url, specs)
</pre>
  
#### Parameters
  
* `url`: string. Specifies the URL of the page to open. If no URL is specified, a new window with about:blank is opened.
* `specs`: string. A comma-separated list of items, no whitespaces. For details see window.open of JavaScript documentation.


<a  name="method_navigate"></a>
### navigate()
  
navigates to the url.
  
#### Syntax
<pre  class='syntax'>
void <b>navigate</b>(url)
</pre>
  
#### Parameters
  
* `url`: string. Specifies the URL to navigate to.

