In order to talk to VSTS feeds, you'll need to put a token on your local machine that Maven can pick up and pass to VSTS.  

1. Navigate to the feed that you'd like to use and select **Connect to feed**.<br><br>
![Connect to feed button in the upper-right of the page](../_img/connect-to-feed.png)<br><br>
2. Open the **Maven** tab, click *Generate Maven credentials*, and copy the generated credentials. (images below) <br><br>
3. Maven pulls credentials from your `settings.xml` file:
    * The `settings.xml` file's path is `"${user.home}/.m2/settings.xml"` for Linux and `"%USERPROFILE%/.m2/settings.xml"` for Windows.  If the file doesn't exist, create one now.<br><br>
4. Beneath the `<settings>` and `<servers>` tags in the file, paste the credentials you copied in **Step 3** above.

**Sample settings.xml:**

```xml
<settings>
  <servers>
    <server>
      <id>yourAccount-visualstudio.com-yourFeedName</id>
      <configuration>
        <httpHeaders>
          <property>
            <name>Authorization</name>
            <!--The generated token expires on or before 7/19/2017-->
            <value>Basic Y2Fqb…</value>
          </property>
        </httpHeaders>
      </configuration>
    </server>
  </servers>
</settings>
```

>**NOTE:** You can find more info on the `settings.xml` file in the 
>[settings.xml reference](https://maven.apache.org/settings.html).