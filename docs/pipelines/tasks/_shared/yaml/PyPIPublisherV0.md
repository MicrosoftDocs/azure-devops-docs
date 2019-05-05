```YAML
# PyPI Publisher
# Create and upload an sdist or wheel to a PyPI-compatible index using Twine.
- task: PyPIPublisher@0
  inputs:
    pypiConnection: 
    packageDirectory: 
    #alsoPublishWheel: false # Optional
```
