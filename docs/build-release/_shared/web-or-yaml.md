## Web or config as code

Do you want to define your build process in your web browser or configure it as code in YAML?

# [Web](#tab/web)

**VSTS | TFS**

Choose this option if you prefer a graphical interface in your web browser.

![PowerShell script task says "Hello World"](_img/powershell-script-hello-world.png)

# [YAML](#tab/yaml)

**VSTS**

Choose this option if you want the advantages of configuration as code. This means your definition is versioned with your code and follows the same branching structure as your code. 

```YAML
steps:
- script: echo hello world 
```

This choice also offers parallel processing (fan out and fan in), and the ability to test and debug the process locally.

[Learn more about YAML builds](../actions/build-yaml.md).

---