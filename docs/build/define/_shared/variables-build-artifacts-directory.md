<p style="font-size:80%">The local path on the agent where any artifacts are copied to before being pushed to their destination. For example: `c:\agent\_work\1\a`.
</p>
<p style="font-size:80%">A typical way to use this folder is to publish your build artifacts with the [Copy files](../../steps/utility/copy-files.md) and [Publish build artifacts](../../steps/utility/publish-build-artifacts.md) steps.</p>
<p style="font-size:80%">**Note:** This directory is purged before each new build, so you don't have to clean it up yourself.</p>
<p style="font-size:80%">Build.ArtifactStagingDirectory and Build.StagingDirectory are interchangeable.</p>
<p style="font-size:80%">See [Artifacts in Team Build](../../concepts/definitions/build/artifacts.md)</p>
