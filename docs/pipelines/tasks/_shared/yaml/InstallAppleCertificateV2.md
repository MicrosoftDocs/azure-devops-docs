```YAML
# Install Apple Certificate
# Install an Apple certificate required to build on a macOS agent
- task: InstallAppleCertificate@2
  inputs:
    certSecureFile: 
    #certPwd: # Optional
    #keychain: 'temp' # Options: default, temp, custom
    #keychainPassword: # Required when keychain == Custom || Keychain == Default
    #customKeychainPath: # Required when keychain == Custom
    #deleteCert: # Optional
    #deleteCustomKeychain: # Optional
    #signingIdentity: # Optional
```
