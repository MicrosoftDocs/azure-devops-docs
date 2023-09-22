---
ms.topic: include
ms.service: azure-devops-pipelines
ms.manager: mijacobs
ms.author: jukullam
author: juliakm
ms.date: 02/14/2020
---

- <p>MSBuild Arguments: Leave it set to the default:</p>
<pre style="margin-bottom: 0px;">`/p:AppxBundlePlatforms=&quot;$(BuildPlatform)&quot; /p:AppxPackageDir=&quot;$(Build.BinariesDirectory)\AppxPackages&amp;quot; /p:AppxBundle=Always
`</pre>
<p><strong>Q:</strong> Why do I need these arguments? <strong>A:</strong></p>
<ul>
- `/p:AppxBundlePlatforms=&quot;$(BuildPlatform)&quot;` The template is setup with BuildPlatform=&quot;x86|x64|ARM&quot; so the bundle will include all three platforms.
</br>
- `/p:AppxPackageDir=&quot;$(Build.BinariesDirectory)\AppxPackages\&quot;` Location where the bundle directories are created.
</br>
- `/p:AppxBundle=Always` Always produce a bundle.
</br>
</ul>
</br>
- Platform: Leave it blank. (The bundle platforms are specified in the above MSBuild Arguments.)
</br>
- <p>Configuration: Leave it set to `$(BuildConfiguration)`</p>
<p>Note: By default BuildConfiguration is set to `release` on the Variables tab. With the Universal Windows Platform, there is now a new native compiler that will improve the runtime performance of your app. With this change, it is highly recommended that you test your app in this compilation environment. By default, the Release build configuration enables the .NET native toolchain, so it is important to test your app with this Release configuration and check that your app behaves as expected.
</p>
</br>
