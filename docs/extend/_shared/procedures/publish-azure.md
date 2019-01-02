1. If you don't have an Azure subscription, create one.
You can use the [free trial](http://azure.microsoft.com/pricing/free-trial/).

1. Create a web app in Microsoft Azure to host your extension.

	![Microsoft Azure portal, create a web app](./_img/publish-azure/create-web-app.png)

1. Publish your web site from the solution explorer.

	![Solution explorer, project context menu, publish web site](./_img/publish-azure/publish-web-site.png)

1. Publish to Azure.

	![Publish web dialog box](./_img/publish-azure/publish-web.png)

1. Pick the web app that you set up to host your extension.

	![Select existing web site dialog box with the web site selected](./_img/publish-azure/select-website.png)

	If your web site doesn't show up, use the **Manage subscriptions** dialog to connect your Visual Studio organization to your Microsoft Azure subscription.

1. Publish your extension.

	![Publish button on the Publish web dialog box](./_img/publish-azure/publish.png)

1. Change your extension manifest to use your Microsoft Azure web app instead of localhost.

	```json
    "baseUri": "https://fabrikam-vso-extensions.azurewebsites.net/",
	```

1. [Install](../../get-started/visual-studio.md#install) your extension again and try it out.