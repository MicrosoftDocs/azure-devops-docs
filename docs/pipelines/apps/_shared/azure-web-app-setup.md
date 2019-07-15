---
ms.topic: include
---

### Create the Azure app service

An [Azure App Service](https://azure.microsoft.com/documentation/articles/app-service-value-prop-what-is/) is where you'll deploy your application. Technically speaking, an app service is a resource with a specific pricing tier in Azure that can then host multiple, distinct applications. In this example we'll use a [Web App](https://azure.microsoft.com/documentation/articles/app-service-web-overview/).
If you're creating a new App Service for this example, you can use the [Free pricing tier](https://azure.microsoft.com/pricing/details/app-service/).

To create a new Web App, simply go to the App Services blade on the Azure portal, click **+Add**, select the **Web App** template, click **Create**, and enter a name and other details. The web app URL will then be `{name}.azurewebsites.net.`

<p><a data-toggle="collapse" href="#expando-existing-azure-account">Can I use an existing Azure account? &#x25BC;</a></p>
<div class="collapse" id="expando-existing-azure-account">
If you have an existing Azure account, you can certainly use a new or existing App Service in that account for this walkthrough.
<p></p>
</div>

<p><a data-toggle="collapse" href="#create-azure-account">How do I create a new Azure account with free credits? &#x25BC;</a></p>
<div class="collapse" id="create-azure-account">
If you don&#39;t yet have an Azure account, you can get started for free through <a href="https://visualstudio.microsoft.com/dev-essentials/" data-raw-source="[Visual Studio Dev Essentials](https://visualstudio.microsoft.com/dev-essentials/)">Visual Studio Dev Essentials</a>.
<p></p>
</div>

<p><a data-toggle="collapse" href="#try-azure">Can I just use a temporary App Service instead? &#x25BC;</a></p>
<div class="collapse" id="try-azure">
 Yes, just visit <a href="https://tryappservice.azure.com/" data-raw-source="[Create your Azure App Service App](https://tryappservice.azure.com/)">Create your Azure App Service App</a> to set up a Web App for temporary use (1 hour). On that page, do the following:

<ol>
<li>Select <b>Web App</b> and choose <b>Next</b>.</li>
<li>Select <b>Empty Site</b> and choose <b>Create</b> (we use an empty site because you already have the necessary application code in your Visual Studio project).</li>
<li> Enter your Microsoft account credentials when requested.</li>
</ol>
In a few moments the site will then give you a URL such as <code>https://df8381c9-0ee0-4-aaa-aaaa.azurewebsites.net/</code>. This is the URL of your live site to which we&#39;ll deploy the application.
<p></p>
</div>

Learn more at the [Web Apps Overview](https://azure.microsoft.com/documentation/articles/app-service-web-overview/).
