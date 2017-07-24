<h3 id="set-in-script">Define and modify your variables in a script</h3>

To define or modify a variable from a script, use the `task.setvariable` logging command.

> [!TIP]
> 
> You can run a script on a:
> 
> * [Windows agent](../../../actions/agents/v2-windows.md) using either a [Batch script task](../../../steps/utility/batch-script.md) or [PowerShell script task](../../../steps/utility/powershell.md).
> * [macOS](../../../actions/agents/v2-osx.md) or [Linux](../../../actions/agents/v2-linux.md) agent using a [Shell script task](../../../steps/utility/shell-script.md).

<div style="background-color: #f2f0ee;padding-top:10px;padding-bottom:10px;">
<ul class="nav nav-pills" style="padding-right:15px;padding-left:15px;padding-bottom:5px;vertical-align:top;font-size:18px;">
<li style="float: right"><a style="max-width: 374px;min-width: 120px;vertical-align: top;margin: 0px 0px 0px 8px;min-width:90px;border: solid 2px #AEAEAE;border-radius: 0;padding: 3px;font-size:14px;font-weight:400" data-toggle="pill" href="#shell-script-set-variable">![icon](../../../steps/utility/_img/shell-script.png) Shell</a></li>
<li class="active" style="float: right;"><a style="max-width: 374px;min-width: 120px;vertical-align: top;margin: 0px 0px 0px 0px;min-width:90px;border: solid 2px #AEAEAE;border-radius: 0;padding: 3px;font-size:14px;font-weight:400" data-toggle="pill" href="#ps-script-set-variable">![icon](../../../steps/utility/_img/powershell.png) PowerShell</a></li>
<li style="float: right;"><a style="max-width: 374px;min-width: 120px;vertical-align: top;margin: 0px 0px 0px 0px;min-width:90px;border: solid 2px #AEAEAE;border-radius: 0;padding: 3px;font-size:14px;font-weight:400" data-toggle="pill" href="#batch-script-set-variable">![icon](../../../steps/utility/_img/batch-script.png) Batch</a></li>
</ul>

<div class="tab-content in fade" id="changeexample" style="background-color: #ffffff;margin-left: 15px;margin-right:15px;padding: 5px 5px 5px 5px;">

<div class="tab-pane fade" id="batch-script-set-variable">
<h6>Batch script</h6>

<p>![Batch icon](../../../steps/utility/_img/batch-script.png) Set the `sauce` and `secretSauce` variables</p>
<pre>
<code class="language-bat">@echo ##vso[task.setvariable variable=sauce]crushed tomatoes
@echo ##vso[task.setvariable variable=secretSauce;issecret=true]crushed tomatoes with garlic
</code></pre><br/>

<p>![Batch icon](../../../steps/utility/_img/batch-script.png) Read the variables</p>
<ul>
<li>Arguments
<pre>
<code>"$(sauce)" "$(secretSauce)"
</code></pre>
</li>
<li>Script
<pre>
<code class="language-bat">@echo off
set sauceArgument=%~1
set secretSauceArgument=%~2
@echo No problem reading %sauceArgument% or %SAUCE%
@echo But I cannot read %SECRETSAUCE%
@echo But I can read %secretSauceArgument% (but the log is redacted so I do not spoil the secret)
</code></pre>
</li>
</ul>
</div>


<div class="tab-pane fade in active" id="ps-script-set-variable">
<h6>PowerShell script</h6>

<p>![PowerShell icon](../../../steps/utility/_img/powershell.png) Set the `sauce` and `secretSauce` variables</p>
<pre>
<code class="language-ps">Write-Host "##vso[task.setvariable variable=sauce]crushed tomatoes"
Write-Host "##vso[task.setvariable variable=secretSauce;issecret=true]crushed tomatoes with garlic"
</code></pre><br/>

<p>![PowerShell icon](../../../steps/utility/_img/powershell.png) Read the variables</p>
<ul>
<li>Arguments
<pre>
<code>-sauceArgument "$(sauce)" -secretSauceArgument "$(secretSauce)"
</code></pre>
</li>
<li>Script
<pre>
<code class="language-ps">Param(
   [string]$sauceArgument,
   [string]$secretSauceArgument
)
Write-Host No problem reading $env:sauce or $sauceArgument
Write-Host But I cannot read $env:secretSauce
Write-Host But I can read $secretSauceArgument "(but the log is redacted so I do not spoil the secret)"
</code></pre>
</li>
</ul>

</div>

<div class="tab-pane fade" id="shell-script-set-variable">
<h6>Shell script</h6>

<p>![icon](../../../steps/utility/_img/shell-script.png) Set the `sauce` and `secretSauce` variables</p>
<pre>
<code class="language-bash">#!/bin/bash
echo "##vso[task.setvariable variable=sauce]crushed tomatoes"
echo "##vso[task.setvariable variable=secretSauce;issecret=true]crushed tomatoes with garlic"
</code></pre><br/>

<p>![icon](../../../steps/utility/_img/shell-script.png) Read the variables</p>
<ul>
<li>Arguments
<pre>
<code>"$(sauce)" "$(secretSauce)"
</code></pre>
</li>
<li>Script
<pre>
<code class="language-bash">#!/bin/bash
echo "No problem reading $1 or $SAUCE"
echo "But I cannot read $SECRETSAUCE"
echo "But I can read $2 (but the log is redacted so I do not spoil the secret)"
</code></pre>
</li>
</ul>
</div>

</div></div><br/>

Console output from reading the variables:

```
No problem reading crushed tomatoes or crushed tomatoes
But I cannot read 
But I can read ******** (but the log is redacted so I do not spoil the secret)
```