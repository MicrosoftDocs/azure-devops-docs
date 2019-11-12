*to be converted to typescript* 

1. In the body of the page, initialize the helper functions.

	```html
	<script>
    VSS.init({
        explicitNotifyLoaded: true,
        setupModuleLoader: true
    });
	</script>
	```

1. Creates a grid and loads it with data, and then notify that the page is loaded.

	```javascript
	...
    VSS.require(["VSS/Controls", "VSS/Controls/Grids"], function (Controls, Grids) {

        var dataSource = [];
        dataSource.push({key: "key", value: "value"});

        Controls.create(Grids.Grid, $("#grid-container"), {
            height: "1000px",
            columns: [
                { text: "Property key", index: "key", width: 150 },
                { text: "Property value", index: "value", width: 600 }
            ],
            source: dataSource
        });
	</script>
	```

1. Notify that the page is loaded.

	```html
	...
	
    VSS.notifyLoadSucceeded();
    </script>
	```


