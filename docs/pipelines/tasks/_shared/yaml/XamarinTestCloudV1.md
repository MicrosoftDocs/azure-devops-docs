```YAML
# Xamarin Test Cloud
# [Deprecated] Testing mobile apps with Xamarin Test Cloud using Xamarin.UITest - recommended task is now AppCenterTest
- task: XamarinTestCloud@1
  inputs:
    appFile: 
    #dsymFile: # Optional
    teamApiKey: 
    email: 
    devices: 
    #series: 'master' 
    testAssemblyDirectory: 
    #parallelizationOption: 'none' # Options: none, --Fixture-Chunk, --Test-Chunk
    #localeOption: 'en_US' # Options: da_DK, nl_NL, en_GB, en_US, fr_FR, de_DE, ja_JP, ru_RU, es_MX, es_ES, user
    #userDefinedLocale: # Optional
    #testCloudFile: '**/packages/**/tools/test-cloud.exe' 
    #optionalArgs: # Optional
    #publishNUnitResults: true # Optional
```
