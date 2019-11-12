1. Create an ASP.NET application.

	![New project dialog with ASP.NET Web Application selected](./_img/create-hub-app-asp5/create-web-app.png)

2. Use the empty template.

	![New ASP.NET dialog with the ASP.NET 5 Preview Empty template selected](./_img/create-hub-app-asp5/empty-template.png)

3. Add the web page that you want to display as a hub. We're doing a simple Hello World page here.

	![Hello world page in the code window and solution explorer](./_img/create-hub-app-asp5/hello-world-page.png)

4. Add a 58x58 pixel image to your web app that identifies your extension.

	![fabrikam logo](./_img/fabrikam-logo.png)

	If you have the image published on another site, you don't need to add it to your extension. You'll be able to reference it from that site.

5. Add three more pages - one the describes your extension, one that provides support information, and one that describes your terms of service.

	```
	info.html
	support.html
	terms-of-service.html
	```

	Like the image, if you have any of these pages on another site, you can use them instead of adding them to your extension.

6. Enable https for your web app.

	![Properties dialog with SSL enabled](./_img/create-hub-app-asp5/enable-ssl.png)

