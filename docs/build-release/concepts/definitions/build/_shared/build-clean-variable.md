<a name="#build_clean_variable"></a>
### How can I clean the repository in a different way?

If you want the Clean switch described above to work differently, then on the **Variables** tab, set the ```Build.Clean``` variable to:

* ```all``` if you want to delete Agent.BuildDirectory, which is the entire working folder that contains the sources folder, binaries folder, artifact folder, and so on.

* ```source``` if you want to delete Build.SourcesDirectory.

* ```binary``` If you want to delete Build.BinariesDirectory.
