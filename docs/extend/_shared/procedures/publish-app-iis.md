1. If you haven't already, install IIS.

2. Run Visual Studio as administrator.

3. Publish your web app from the solution explorer.

	![Solution explorer, web app context menu, publish web site](_img/publish-app-iis/publish-web-app.png)

4. Use the custom target.

	![Custom publish target in the profile page of the publish web wizard](_img/publish-app-iis/publish-profile.png)

4. Set the connection info.

	![Connection page of the publish web wizard](_img/publish-app-iis/publish-connection.png)

	Verify that and then step through the rest of the publish wizard.

5. In the IIS Manager, select your web site and add an HTTPs binding if you don't already have one.

	![IIS with the Default Web Site selected in the connections pane, .NET Authorization in the main page, and Bindings in the actions pane](_img/publish-app-iis/ssl-bindings.png)

6. Open SSL Settings to require SSL for your web site.

	![IIS Manager with SSL Settings selected, Open Feature](_img/publish-app-iis/ssl-settings.png)
