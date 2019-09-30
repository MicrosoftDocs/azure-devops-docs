steps:
- task: ContainerStructureTest@0
  displayName: 'Container Structure Test '
  inputs:
    dockerRegistryServiceConnection: 'Container_dockerHub'
    repository: adma/hellodocker
    tag: v1
    configFile: /home/user/cstfiles/fileexisttest.yaml
