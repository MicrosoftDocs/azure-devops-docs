**Label sources:** Select either **On successful build** or **On every build** if you want to label your source code files to enable your team to easily identify which version of each file is included in the completed build.

In the **Label format** you can use user-defined and predefined variables that have a scope of "All." For example:

```
$(Build.DefinitionName)_$(Build.DefinitionVersion)_$(Build.BuildId)_$(Build.BuildNumber)_$(My.Variable)
```

The first three variables are predefined. `My.Variable` is defined by you on the [variables tab](../variables.md).