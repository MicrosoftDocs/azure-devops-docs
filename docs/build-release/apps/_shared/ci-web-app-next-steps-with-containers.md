You've just put your own CI build process in place to automatically build and validate whatever code is checked in by your team.

### Extend to other Git workflows

Now that you have a CI build process for your master branch, you can extend the process to work with other branches in your repository, or to validate all pull requests. See:

* [CI builds for Git in VSTS](../../actions/ci-build-git.md)

* [CI builds for GitHub](../../actions/ci-build-github.md)

### Deploy your app

| If you want to deploy to a... | Then publish your artifact as a...|
|-|-|
| Azure web app or to an IIS server | .ZIP file. In this case you're already good to go after following the above steps. Next step is one of the following: <ul><li>[Deploy to Azure Web App](../cd/deploy-webdeploy-webapps.md)</li><li>[Deploy to a Windows VM](../cd/deploy-webdeploy-iis-deploygroups.md)</li></ul> | 
| Linux VM | Simple folder. To do this, remove the **Archive files** task from your build definition. |
| Container service (such as Azure web apps for containers, or a Kubernetes cluster) | Container. Next step: [Build and push a container for your app](../containers/build.md).|
