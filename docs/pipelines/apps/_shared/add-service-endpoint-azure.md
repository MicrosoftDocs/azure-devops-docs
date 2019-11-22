---
ms.topic: include
---

<p>
If a subscription is not available, then add a service connection:
</p>

<ol>

<li>

![Manage](_img/azure-web-app-deployment-step-azure-subscription-manage.png)

</li>

<li>Click New service connection, and then click Azure.</li>

<li><p>On the Add Azure Subscription dialog box:</p><ol><li>Select Certificate.</li><li>Click the link to download your publishsettings xml file and then open the file.</li><li>Copy the ID and certificate values from the file and paste them into the Add Azure Subscription dialog box.</li></ol></li>

</ol>

<pre style="margin-bottom: 0px;"><code class="language-xml collapsed"><span class="pi"><span class="pi">&lt;?xml version="1.0" encoding="utf-8"?&gt;</span></span><br/>
<span class="tag"><span class="tag">&lt;</span><span class="title"><span class="tag"><span class="title">PublishData</span></span></span><span class="tag">&gt;</span></span><br/>
<span class="tag">&nbsp;&nbsp;</span><span class="tag"><span class="tag">&lt;</span><span class="title"><span class="tag"><span class="title">PublishProfile</span></span></span><br/>
<span class="tag">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="attribute"><span class="tag"><span class="attribute">SchemaVersion</span></span></span><span class="tag">=</span><span class="value"><span class="tag"><span class="value">"2.0"</span></span></span><br/>
<span class="tag">
<span class="tag">&nbsp;&nbsp;&nbsp;&nbsp;</span></span><span class="attribute"><span class="tag"><span class="attribute">PublishMethod</span></span></span><span class="tag">=</span><span class="value"><span class="tag"><span class="value">"AzureServiceManagementAPI"</span></span></span><span class="tag">&gt;</span></span><br/>
<span class="tag">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="tag"><span class="tag">&lt;</span><span class="title"><span class="tag"><span class="title">Subscription</span></span></span><br/>
<span class="tag">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="attribute"><span class="tag"><span class="attribute">ServiceManagementUrl</span></span></span><span class="tag">=</span><span class="value"><span class="tag"><span class="value">"https://management.core.windows.net"</span></span></span><br/>
<span class="tag">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="attribute"><span class="tag"><span class="attribute">Id</span></span></span><span class="tag">=</span><span class="value"><span class="tag"><span class="value">"<span style="font-weight:bold; background-color:yellow">{Copy_and_Paste_into_Subscription_id_field}</span>"</span></span></span><br/>
<span class="tag">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="attribute"><span class="tag"><span class="attribute">Name</span></span></span><span class="tag">=</span><span class="value"><span class="tag"><span class="value">"<span style="font-weight:bold; background-color:yellow">{Copy_and_paste_into_Name_field_or_use_another_name}</span>"</span></span></span><br/>
<br/>
<span class="attribute"><span class="tag"><span class="attribute">ManagementCertificate</span></span></span><span class="tag">=</span><span class="value"><span class="tag"><span class="value">"<span style="font-weight:bold; background-color:yellow">{Copy_and_paste_into_Subscription_certificate_field}</span>"</span></span></span><span class="tag"> /&gt;</span></span><br/>
<span class="tag">&nbsp;&nbsp;</span><span class="tag"><span class="tag">&lt;/</span><span class="title"><span class="tag"><span class="title">PublishProfile</span></span></span><span class="tag">&gt;</span></span><br/>
<span class="tag"><span class="tag">&lt;/</span><span class="title"><span class="tag"><span class="title">PublishData</span></span></span><span class="tag">&gt;</span></span>
</code></pre>
