```YAML
# Archive Files
# Compress files into .7z, .tar.gz, or .zip.
- task: ArchiveFiles@2
  inputs:
    #rootFolderOrFile: '$(Build.BinariesDirectory)' 
    #includeRootFolder: true 
    #archiveType: 'zip' # Options: zip, 7z, tar, wim
    #tarCompression: 'gz' # Optional. Options: gz, bz2, xz, none
    #archiveFile: '$(Build.ArtifactStagingDirectory)/$(Build.BuildId).zip' 
    #replaceExistingArchive: true 
    #verbose: # Optional
    #quiet: # Optional
```
