@echo off

set version=1.0

node genapi.js --cfgScripts=accounts.js,profiles.js --cfgApisUrl=%1 --cfgApiVersion=%version%

node genapi.js --cfgScripts=buildBuilds.js,buildDefinitions.js,buildQualities.js,buildQueues.js,buildRequests.js

node genapi.js --cfgScripts=chatMessages.js,chatRooms.js,chatUsers.js

node genapi.js --cfgScripts=gitBlobs.js,gitBranchStats.js,gitCommitDiffs.js,gitCommits.js,gitItems.js,gitPullRequests.js,gitPushes.js,gitRefs.js,gitRepositories.js,gitTrees.js

node genapi.js --cfgScripts=hooks.js

identityMru.js
taggingTags.js

projectCollections.js
projects.js
teams.js
teamMembers.js

reporting.js

testPlans.js
testPoints.js
testResults.js
testRuns.js
testSuites.js

tfvcBranches.js
tfvcChangesets.js
tfvcItems.js
tfvcLabels.js
tfvcShelvesets.js
tfvcWorkspaces.js

witAttachments.js
witMetadata.js
witQueries.js
witWorkItems.js
