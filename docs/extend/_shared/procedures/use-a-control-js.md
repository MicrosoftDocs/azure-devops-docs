1. Add a div element in the body of the page to contain the grid.

	```html
	<div id="grid-container"></div>
	```

1. In the script element, before calling ```VSS.notifyLoadSucceeded()```, initialize the VSS SDK.

	```javascript
    // Sets up the initial handshake with the host frame
    VSS.init({
        // Our extension explicitly notifies the host when we're done loading
        explicitNotifyLoaded: true,

        // We are using some Azure DevOps Services APIs, so we need the module loader to load them in
        usePlatformScripts: true,
        usePlatformStyles: true       
    });
	```

2. Create a grid and load it with data. (Replace your current call to ```VSS.notifyLoadSucceeded()``` with the following snippet)

	```javascript
    // Load Azure DevOps Services controls
	VSS.require(["VSS/Controls", "VSS/Controls/Grids"],
		function (Controls, Grids) {

		// Initialize the grid control with two columns, "key" and "value"
        var dataSource = [];
        dataSource.push({key: "key", value: "value"});

        Controls.create(Grids.Grid, $("#grid-container"), {
            height: "1000px", // Explicit height is required for a Grid control
            columns: [
                // text is the column header text. 
                // index is the key into the source object to find the data for this column
                // width is the width of the column, in pixels
                { text: "Property key", index: "key", width: 150 },
                { text: "Property value", index: "value", width: 600 }
            ],
            // This data source is rendered into the Grid columns defined above
            source: dataSource
        });
		VSS.notifyLoadSucceeded();
	});
	```

1. Refresh the page to see the grid.

	![Grid control on the hello world page](./_img/use-a-control/grid.png)