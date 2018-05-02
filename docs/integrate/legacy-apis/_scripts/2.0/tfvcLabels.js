var apiwriter = require('apiwriter');

exports.getContext = function() {
    return {
        labelId: null,
		name: "Th*Label",
		person: "fabrikamfiber3@hotmail.com",
		item: "$/Fabrikam-Fiber-TFVC/AuthSample-Dev/Code/AuthSample.cs",
		skip: 2,
        top: 2
    };
};

exports.submitRequests = function () 
{
	apiwriter.setEnableWrite(true);
	 
	apiwriter.getJson('/tfvc/labels',
        function (context, result) {
            context.labelId = result.responseBody.value[1].id;
        });

	apiwriter.getJson('/tfvc/labels?name={name}');

	apiwriter.getJson('/tfvc/labels?owner={person}');

	apiwriter.getJson('/tfvc/labels?itemLabelFilter={item}');

	apiwriter.getJson('/tfvc/labels?$skip={skip}&$top={top}');

	apiwriter.getJson('/tfvc/labels/{labelId}');

	apiwriter.getJson('/tfvc/labels/{labelId}?maxItemCount=100');

	apiwriter.getJson('/tfvc/labels/{labelId}/items');

	apiwriter.getJson('/tfvc/labels/{labelId}/items?$top={top}&$skip={skip}');
}