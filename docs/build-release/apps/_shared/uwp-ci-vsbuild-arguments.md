---
ms.topic: include
---

<li><p>MSBuild Arguments: Leave it set to the default:</p>
<pre style="margin-bottom: 0px;"><code>/p:AppxBundlePlatforms="$(BuildPlatform)" /p:AppxPackageDir="$(Build.BinariesDirectory)\AppxPackages\\" /p:AppxBundle=Always
</code></pre>
<p><strong>Q:</strong> Why do I need these arguments? <strong>A:</strong></p>
<ul>
<li>```/p:AppxBundlePlatforms="$(BuildPlatform)"``` The template is setup with BuildPlatform="x86|x64|ARM" so the bundle will include all three platforms.
</li>
<li>```/p:AppxPackageDir="$(Build.BinariesDirectory)\AppxPackages\\"``` Location where the bundle directories are created.
</li>
<li>```/p:AppxBundle=Always``` Always produce a bundle.
</li>
</ul>
</li>
<li>Platform: Leave it blank. (The bundle platforms are specified in the above MSBuild Arguments.)
</li>
<li><p>Configuration: Leave it set to ```$(BuildConfiguration)```</p>
<p>Note: By default BuildConfiguration is set to ```release``` on the Variables tab. With the Universal Windows Platform, there is now a new native compiler that will improve the runtime performance of your app. With this change, it is highly recommended that you test your app in this compilation environment. By default, the Release build configuration enables the .NET native toolchain, so it is important to test your app with this Release configuration and check that your app behaves as expected.
</p>
</li>
