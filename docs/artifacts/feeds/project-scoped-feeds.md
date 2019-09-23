# Project-scoped feeds

Historically, all feeds used to be scoped to a organization. However, to enable public feeds and to become more consistent with the rest of Azure DevOps, feeds created through the new create feed panel will now be scoped to a project. New organization will automatically have one feed scoped to the organization, and all subsequent feeds created will be scoped to a project. All existing organization-scoped feeds will remain organization-scoped.

## The differences between a organization-scoped feed and a project-scoped feed

A project-scoped feed is scoped to a project instead of an organization. Here are the main differences between the two feed types.

* Project-scoped feeds will always use the visibility of the project. If a project is public, so is the feed and if the project is private, the feed will also be private. Organization-scoped feeds will always be private.

* The URL of a project-scoped feed will include the project where organization-scoped feed URL won't.

    * Project-scoped feed:
    ```
    https://feeds.codedev.ms/contoso/projectId/_apis/Packaging/Feeds
    ```

    * Organization-scoped feed:
    ```
    https://feeds.codedev.ms/contoso/_apis/Packaging/Feeds
    ```


* All organization-scoped feeds will show up in the feed list of the Artifacts feed UI. To see a project-scoped feed in the list you have to be navigated to the project the feed is scoped to.

* All new feeds are recommended to be project-scoped, therefore, creating a new feed through the new create feed panel will always create a project-scoped feed.

### What can I do if I'm concerned about my project-scoped feed's visibility

There is an option to not allow public projects in an organization. It can be set under Security policies in [Organization Policy Settings](https://docs.microsoft.com/en-us/azure/devops/organizations/accounts/change-application-access-policies?view=azure-devops#change-application-access-policies).
If you're concerned that your project will be turned public in the future and you want to have a feed that will be remain private, you can use the automatically created organization-scoped feed for that purpose. Alternatively, you may use the [Create Feed API](https://docs.microsoft.com/en-us/rest/api/azure/devops/artifacts/feed%20%20management/create%20feed?view=azure-devops-rest-5.1) to manually create a new organization-scoped feed. Note that you will have to set some default permissions for the new feed manually as well. [Feed Permission API](https://docs.microsoft.com/en-us/rest/api/azure/devops/artifacts/feed%20%20management/set%20feed%20permissions?view=azure-devops-rest-5.1). Creating new collectio-scoped feeds is not recommended.
