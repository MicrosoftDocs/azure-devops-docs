<a id="core" />
These properties are required:

| Property | Description | Notes |
|---------------------|-------------|-------|
| **manifestVersion** | *A number corresponding to the version of the manifest format.*  | This should be `1`. |
| **id** | *The extension's identifier.* | This is a string that must be unique among extensions from the same publisher. It must start with an alphabetic or numeric character and contain 'A' through 'Z', 'a' through 'z', '0' through '9', and '-' (hyphen). Example: `sample-extension`. |
| **version** | *A string specifying the version of an extension.* | Should be in the format `major.minor.patch`, for example `0.1.2` or `1.0.0`. |
| **name** | *A short, human-readable name of the extension. Limited to 200 characters.* | Example: `"Fabrikam Agile Board Extension"`. |
| **publisher** | *The identifier of the publisher.* | This identifier must match the identifier the extension is published under. See [Create and manage a publisher](../publish/overview.md). |
| **targets** | *The products and services supported by your integration or extension.* See [installation targets](../develop/manifest.md#installation-targets) for more details. | This is an array of objects, where each object has an `id` field indicating one of the following: `Microsoft.VisualStudio.Services` (extensions that works with VSTS or TFS), `Microsoft.TeamFoundation.Server` (extension that works with TFS), `Microsoft.VisualStudio.Services.Integration` (integrations that works with VSTS or TFS), `Microsoft.TeamFoundation.Server.Integration` (integrations that work with TFS) |