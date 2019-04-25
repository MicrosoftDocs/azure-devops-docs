```yaml
# at the top of your YAML file 
# set some variables that you'll need when you deploy
variables:
  # the name of the service connection that you created above
  serviceConnectionToAzure: name-of-your-service-connection
  # the name of your web app here is the same one you used above
  # when you created the web app using the Azure CLI
  appName: my-app-name
  
# ...
```