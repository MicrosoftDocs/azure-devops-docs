[!INCLUDE [styleoverrides](../../../../_data/style-overrides.md)]




* [startWait()](#method_startWait)
* [endWait()](#method_endWait)
* [cancelWait()](#method_cancelWait)
* [setMessage()](#method_setMessage)
* [isCancelled()](#method_isCancelled)


<a name="method_startWait"></a>
<h3 class='method'>startWait()</h3>

Starts waiting by displaying message box and overlay in the target element.


#### Returns

void

#### Parameters

* `cancellable`: Utils_Core.Cancelable. Optional. 

<a name="method_endWait"></a>
<h3 class='method'>endWait()</h3>

Ends waiting by removing message box and overlay.


#### Returns

void


<a name="method_cancelWait"></a>
<h3 class='method'>cancelWait()</h3>

Cancels waiting by removing message box and overlay.


#### Returns

void


<a name="method_setMessage"></a>
<h3 class='method'>setMessage()</h3>

Sets a new message for the displayed message box.


#### Returns

void

#### Parameters

* `message`: string. Message to be displayed.

<a name="method_isCancelled"></a>
<h3 class='method'>isCancelled()</h3>

Indicates whether the operation is cancelled or not.


#### Returns

boolean


