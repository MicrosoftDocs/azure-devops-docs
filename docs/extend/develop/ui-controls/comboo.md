---
title: Use the Combo Control | Extensions for Azure DevOps Services
description: Use the combo control to have an editable control with the drop down support like list, tree, date-time and multi-value.
ms.assetid: 03575E92-8FA7-7DC6-5699-2E5811A332CA
ms.prod: devops
ms.technology: devops-ecosystem
ms.topic: conceptual
ms.manager: jillfra
monikerRange: '>= tfs-2017'
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Use the combo control

This page shows different samples about the combo control. There are TypeScript and JavaScript examples. 

For more details, [see the Combo Control API reference.](../../reference/client/controls/combo.md)

## How to organize your code

In the `home` folder for your project, create a `main.html` file with the following contents:

``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
</head>

<body>
    <script src="sdk/scripts/VSS.SDK.js"></script>
    
    <script>
        VSS.init({ usePlatformScripts: true });

        VSS.ready(function() {
              require(["scripts/main.js"], function () { });
        });
    </script>

    <div class="sample-container"/>

</body>
</html> 
```

Ensure that the `VSS.SDK.js` file is inside the `sdk/scripts` folder so that the path is `home/sdk/scripts/VSS.SDK.js`.

Put the following code snippets into a `main.js` file in a `scripts` folder, so that the path is `home/scripts/main.js`. 

## Combos

<a name="list"></a>
### Plain list combo
This sample shows combo of type `list`. It also shows how `change` delegate is used to populate another combo. 
If the second combo does not have any source, its mode is changed to text to hide the unnecessary drop icon.


<ul class="nav nav-tabs" data-tabs="tabs">
<li class="active"><a data-toggle="tab" href="#typescript_list">TypeScript</a></li>
<li><a data-toggle="tab" href="#javascript_list">JavaScript</a></li>
</ul>

<div class="tab-content">
  <div id="typescript_list" class="tab-pane fade in active">
<pre><code class="lang-javascript">
import Controls = require("VSS/Controls");
import Combos = require("VSS/Controls/Combos");

var container = $(".sample-container");

var makeOptions = &lt;Combos.IComboOptions&gt;{
  width: "400px",
  source:
  ["Aston Martin", "Audi (3)", "Bentley", "BMW (2)", "Bugatti",
    "Ferrari", "Ford", "Honda", "Hyundai", "Kia", "Lamborghini",
    "Land Rover", "Lotus", "Maserati", "Mazda", "Mercedes",
    "Mitsubishi", "Nissan", "Porsche", "Toyota", "Volkswagen", "Volvo"],
  change: function () {
    var selected = this.getText();
    if (selected.indexOf("Audi") === 0) {
      modelCombo.setSource(["A3", "A4", "Q7"]);
      modelCombo.setMode("drop");
    }
    else if (selected.indexOf("BMW") === 0) {
      modelCombo.setSource(["325", "X5"]);
      modelCombo.setMode("drop");
    }
    else {
      modelCombo.setMode("text");
    }
    modelCombo.setText("");
  }
};

var modelOptions = &lt;Combos.IComboOptions&gt;{
  width: "400px",
  mode: "text"
};

// Make combo
$("&lt;label /&gt;").text("Make:").appendTo(container);
Controls.create(Combos.Combo, container, makeOptions);

// Model combo
$("&lt;label /&gt;").text("Model:").appendTo(container);
var modelCombo = Controls.create(Combos.Combo, container, modelOptions);
</code></pre>
  </div>
  <div id="javascript_list" class="tab-pane fade">
<pre><code class="lang-javascript">
VSS.require(["VSS/Controls", "VSS/Controls/Combos"], function(Controls, Combos) {
  var container = $(".sample-container");
  var makeOptions = {
    width: "400px",
    source:
    ["Aston Martin", "Audi (3)", "Bentley", "BMW (2)", "Bugatti",
    "Ferrari", "Ford", "Honda", "Hyundai", "Kia", "Lamborghini",
    "Land Rover", "Lotus", "Maserati", "Mazda", "Mercedes",
    "Mitsubishi", "Nissan", "Porsche", "Toyota", "Volkswagen", "Volvo"],
    change: function () {
      var selected = this.getText();
      if (selected.indexOf("Audi") === 0) {
        modelCombo.setSource(["A3", "A4", "Q7"]);
        modelCombo.setMode("drop");
      }
      else if (selected.indexOf("BMW") === 0) {
        modelCombo.setSource(["325", "X5"]);
        modelCombo.setMode("drop");
      }
      else {
        modelCombo.setMode("text");
      }
      modelCombo.setText("");
    }
  };
  var modelOptions = {
    width: "400px",
    mode: "text"
  };
  
 // Create the combo in a container element
 $("&lt;label /&gt;").text("Make:").appendTo(container);
 var makeCombo = Controls.create(Combos.Combo, container, makeOptions);
  
 // Create the combo in a container element
 $("&lt;label /&gt;").text("Model:").appendTo(container);
 var modelCombo = Controls.create(Combos.Combo, container, modelOptions);
 </code></pre>
  </div>
</div>

<div align="center" style="padding-top:15px">
<img alt="Basic list combo gif" src="_img/list_combo.gif" /> 
</div>

<a name="searchTree"></a>
### Tree combo
This sample shows combo of type `tree` which displays its source hierarchically by supporting expand/collapse. It also supports search by node.

<ul class="nav nav-tabs" data-tabs="tabs">
<li class="active"><a data-toggle="tab" href="#typescript_tree">TypeScript</a></li>
<li><a data-toggle="tab" href="#javascript_tree">JavaScript</a></li>
</ul>

<div class="tab-content">
  <div id="typescript_tree" class="tab-pane fade in active">
<pre><code class="lang-javascript">
import Controls = require("VSS/Controls");
import Combos = require("VSS/Controls/Combos");
import TreeView = require("VSS/Controls/TreeView");

var container = $(".sample-container");

var treeOptions: Combos.IComboOptions = {
  type: TreeView.SearchComboTreeBehaviorName,
  width: "400px",
  sepChar: ">",
  source: [
    {
      text: "wit",
      children: [{ text: "platform", children: [{ text: "client" }, { text: "server" }] }, { text: "te" }]
    }, {
      text: "vc"
    }, {
      text: "webaccess", children: [{ text: "platform" }, { text: "agile" }, { text: "requirements" }]
    }, {
      text: "etm"
    }, {
      text: "build"
    }
  ],
  change: function () {
    commandArea.prepend($("&lt;div /&gt;").text(this.getText()));
  }
};

$("&lt;label /&gt;").text("Area Path:").appendTo(container);
Controls.create(Combos.Combo, container, treeOptions);
var commandArea = $("&lt;div style='margin:10px' /&gt;").appendTo(container);
</code></pre>
  </div>
  <div id="javascript_tree" class="tab-pane fade">
<pre><code class="lang-javascript">
VSS.require(["VSS/Controls", "VSS/Controls/Combos", "VSS/Controls/TreeView"], function(Controls, Combos, TreeView) {
  var container = $(".sample-container");
  var treeOptions = {
  type: TreeView.SearchComboTreeBehaviorName,
  width: "400px",
  sepChar: ">",
  source: [
    {
      text: "wit",
      children: [{ text: "platform", children: [{ text: "client" }, { text: "server" }] }, { text: "te" }]
    }, {
      text: "vc"
    }, {
      text: "webaccess", children: [{ text: "platform" }, { text: "agile" }, { text: "requirements" }]
    }, {
      text: "etm"
    }, {
      text: "build"
    }
  ],
  change: function () {
    commandArea.prepend($("&lt;div /&gt;").text(this.getText()));
  }
};

$("&lt;label /&gt;").text("Area Path:").appendTo(container);
var makeCombo = Controls.create(Combos.Combo, container, treeOptions);
var commandArea = $("&lt;div style='margin:10px' /&gt;").appendTo(container);
</code></pre>
  </div>
</div>

<div align="center" style="padding-top:15px">
<img alt="Basic tree combo gif" src="_img/tree_combo.gif" /> 
</div>

<a name="date-time"></a>
### Datetime picker
This sample shows the usage of combo by type `date-time`. Please note that selecting different day from the picker will preserve the hour value.

<ul class="nav nav-tabs" data-tabs="tabs">
<li class="active"><a data-toggle="tab" href="#typescript_datetime">TypeScript</a></li>
<li><a data-toggle="tab" href="#javascript_datetime">JavaScript</a></li>
</ul>

<div class="tab-content">
  <div id="typescript_datetime" class="tab-pane fade in active">
<pre><code class="lang-javascript">
import Controls = require("VSS/Controls");
import Combos = require("VSS/Controls/Combos");

var container = $(".sample-container");

var dateTimeOptions:Combos.IDateTimeComboOptions = {
  value: "Tuesday, September 29, 1982 8:30:00 AM",
  type: "date-time",
   dateTimeFormat: "F",
  width: 300,
  change: function () {
    commandArea.prepend($("&lt;div /&gt;").text(dateTimeCombo.getValue<Date>().toString()));
  }
};

$("&lt;label /&gt;").text("Select your birthday:").appendTo(container);

var dateTimeCombo = Controls.create(Combos.Combo, container, dateTimeOptions);
var commandArea = $("&lt;div style='margin:10px' /&gt;").appendTo(container);
</code></pre>
  </div>
  <div id="javascript_datetime" class="tab-pane fade">
<pre><code class="lang-javascript">
VSS.require(["VSS/Controls", "VSS/Controls/Combos"], function(Controls, Combos) {
  var container = $(".sample-container");


var dateTimeOptions = {
  value: "Tuesday, September 29, 1982 8:30:00 AM",
  type: "date-time",
  dateTimeFormat: "F",
  width: 300,
  change: function () {
    commandArea.prepend($("&lt;div /&gt;").text(dateTimeCombo.getValue().toString()));
  }
};

$("&lt;label /&gt;").text("Select your birthday:").appendTo(container);

var dateTimeCombo = Controls.create(Combos.Combo, container, dateTimeOptions);
var commandArea = $("&lt;div style='margin:10px' /&gt;").appendTo(container);
});
</code></pre>
  </div>
</div>

<div align="center" style="padding-top:15px">
<img alt="Basic date time combo gif" src="_img/datetime_combo.gif" /> 
</div>


<a name="multi-value"></a>
### Multivalue combo
This sample shows the usage of combo by type `multi-value`.

<ul class="nav nav-tabs" data-tabs="tabs">
<li class="active"><a data-toggle="tab" href="#typescript_multivalue">TypeScript</a></li>
<li><a data-toggle="tab" href="#javascript_multivalue">JavaScript</a></li>
</ul>

<div class="tab-content">
  <div id="typescript_multivalue" class="tab-pane fade in active">
<pre><code class="lang-javascript">
import Controls = require("VSS/Controls");
import Combos = require("VSS/Controls/Combos");

var container = $(".sample-container");

var multiValueOptions: Combos.IComboOptions = {
  type: "multi-value",
  width: 500,
  source: [
    "English", "Chinese", "German", "Turkish", "Spanish",
    "Japanese", "Korean", "Russian", "Portuguese", "French",
    "Italian", "Arabic"],
  change: function () {
    // Displaying the selected value
    commandArea.prepend($("&lt;div /&gt;").text(this.getText()));
  }
};

$("&lt;label /&gt;").text("Select the supported languages:").appendTo(container);

var multiValueCombo = Controls.create(Combos.Combo, container, multiValueOptions);
var commandArea = $("&lt;div style='margin:10px' /&gt;").appendTo(container);
</code></pre>
  </div>
  <div id="javascript_multivalue" class="tab-pane fade">
<pre><code class="lang-javascript">
VSS.require(["VSS/Controls", "VSS/Controls/Combos"], function(Controls, Combos) {
  var container = $("#combo-container");

  var multiValueOptions = {
    type: "multi-value",
    width: 500,
    source: [
      "English", "Chinese", "German", "Turkish", "Spanish",
      "Japanese", "Korean", "Russian", "Portuguese", "French",
      "Italian", "Arabic"],
    change: function () {
      // Displaying the selected value
      commandArea.prepend($("&lt;div /&gt;").text(this.getText()));
    }
};

$("&lt;label /&gt;").text("Select the supported languages:").appendTo(container);

var multiValueCombo = Controls.create(Combos.Combo, container, multiValueOptions);
var commandArea = $("&lt;div style='margin:10px' /&gt;").appendTo(container);
});
</code></pre>
  </div>
</div>

<div align="center" style="padding-top:15px">
<img alt="Basic multivalue combo gif" src="_img/multivalue_combo.gif" /> 
</div>