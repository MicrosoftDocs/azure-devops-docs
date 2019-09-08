# Project-scoped feeds

Historically, all feeds used to be scoped to a collection. However, to enable public feeds and to become more consistent with the rest of Aure DevOps, feeds created through the new create feed panel will now be scoped to a project. New collection will automatically have one feed scoped to the collection, and all subsequent feeds created will be scoped to a project. All existing collection-scoped feeds will remain collection-scoped.

## The differences between a collection-scoped feed and a project-scoped feed

A project-scoped feed is scoped to a project instead of a collection. Here are the main differences between the two feed types.

Project-scoped feeds will always use the visibility of the project. If a project is public, so is the feed and if the project is private, the feed will also be private. Collection-scoped feeds will always be private.

The URL of a project-scoped feed will include the project where collection-scoped feed URL won't.

Project-scoped feed:
https://feeds.codedev.ms/contoso/projectId/_apis/Packaging/Feeds

Collection-scoped feed:
https://feeds.codedev.ms/contoso/_apis/Packaging/Feeds

All collection-scoped feeds will show up in the feed list of the Artifacts feed UI. To see a project-scoped feed in the list you have to be navigated to the project the feed is scoped to.

All new feeds are recommended to be project-scoped, therefore, creating a new feed through the new create feed panel will always create a project-scoped feed.

### What can I do if I'm concerned about my project-scoped feed's visibility

There is an option to not allow public projects in an organization. It can be set in \_settings/policy.
If you're concerned that your project will be turned public in the future and you want to have a feed that will be remain private, you can use the automatically created collection-scoped feed for that purpose. Alternatively, you may use the [Create Feed API](https://docs.microsoft.com/en-us/rest/api/azure/devops/artifacts/feed%20%20management/create%20feed?view=azure-devops-rest-5.1) to manually create a new collection-scoped feed. Note that you will have to set some default permissions for the new feed manually as well. [Feed Permission API](https://docs.microsoft.com/en-us/rest/api/azure/devops/artifacts/feed%20%20management/set%20feed%20permissions?view=azure-devops-rest-5.1). Creating new collectio-scoped feeds is not recommended.
