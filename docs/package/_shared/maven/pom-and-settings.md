---
ms.topic: include
---

To talk to VSTS feeds, you'll need a token on your local machine that Maven can pick up and pass to VSTS.  

1. Navigate to the feed that you'd like to use and select **Connect to feed**.

   ![Connect to feed button in the upper-right of the page](../_img/connect-to-feed.png)

1. Open the **Maven** tab, choose **Generate Maven credentials**, and copy the generated credentials. (images below)

   * Maven pulls credentials from your **settings.xml** file.
   
   * On Linux, the file path is usually `"${user.home}/.m2/settings.xml"`
   
   * On macOS, the file path is usually `"~/.m2/settings.xml"`
   
   * On Windows, the file path is usually `"%USERPROFILE%/.m2/settings.xml"`
   
   * If the file doesn't exist, create one now.

1. Inside the `<settings>` and `<servers>` elements in the file, paste the credentials you copied in **Step 3** above.

**Sample settings.xml:**

```xml
<settings>
  <servers>
    <!-- Copy this section from the Maven section of the "Connect to Feed" dialog" -->
    <server>
      <id>yourAccount-visualstudio.com-yourFeedName</id>
      <configuration>
        <httpHeaders>
          <property>
            <name>Authorization</name>
            <!--The generated token expires on or before 7/19/2017-->
            <value>Basic Y2Fqb...</value>
          </property>
        </httpHeaders>
      </configuration>
    </server>
  </servers>
</settings>
```

>**NOTE:** You can find more information about the **settings.xml** file in the [settings.xml reference](https://maven.apache.org/settings.html).
