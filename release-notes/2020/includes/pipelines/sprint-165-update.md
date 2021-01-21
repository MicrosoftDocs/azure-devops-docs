---
ms.topic: include
---

### Preview fully parsed YAML document without committing or running the pipeline

We've added a **preview but don't run** mode for YAML pipelines. Now, you can try out a YAML pipeline without committing it to a repo or running it. Given an existing pipeline and an optional new YAML payload, this new API will give you back the full YAML pipeline. In future updates, this API will be used in a new editor feature. 

For developers: POST to `dev.azure.com/<org>/<project>/_apis/pipelines/<pipelineId>/runs?api-version=5.1-preview` with a JSON body like this:
```yaml
{
  "PreviewRun": true,
  "YamlOverride": "
# your new YAML here, optionally
"
}
```
The response will contain the rendered YAML.

### Disable automatic agents upgrades at a pool level

Currently, pipelines agents will automatically update to the latest version when required. This typically happens when there is a new feature or task which requires a newer agent version to function correctly. With this update, we're adding the ability to disable automatic upgrades at a pool level. In this mode, if no agent of the correct version is connected to the pool, pipelines will fail with a clear error message instead of requesting agents to update. This feature is mostly of interest for customers with self-hosted pools and very strict change-control requirements. Automatic updates are enabled by default, and we don’t recommend most customers disable them.

> [!div class="mx-imgBorder"]
> ![Disable automatic agents upgrades at a pool level.](../../media/165_02.png)

### Azure File Copy Task now supports AzCopy V10

The Azure file copy task can be used in a build or release pipeline to copy files to Microsoft storage blobs or virtual machines (VMs). The task uses **AzCopy**, the command-line utility build for fast copying of data from and into Azure storage accounts. With this update, we've added support for AzCopy V10 which is the [latest version of AzCopy](/azure/storage/common/storage-use-azcopy-v10).

The `azcopy copy` command supports only the [arguments](/azure/storage/common/storage-ref-azcopy-copy?toc=%2fazure%2fstorage%2fblobs%2ftoc.json#options) associated with it. Because of the change in syntax of AzCopy, some of the existing capabilities are not available in AzCopy V10. These include:

  * Specifying log location
  * Cleaning log and plan files after the copy
  * Resume copy if job fails

The additional capabilities supported in this version of the task are:

  * Wildcard symbols in the file name/path of the source
  * Inferring the content type based on file extension when no arguments are provided
  * Defining the log verbosity for the log file by passing an argument