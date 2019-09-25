#!/bin/sh

GitRoot=$(git rev-parse --show-toplevel)
GitCommitMessageHookPath="$GitRoot/.git/hooks/commit-msg"

NewCommitMessageHookFile="/hooks/commit-msg"
NewCommitMessageHookPath="$GitRoot/tools/$NewCommitMessageHookFile"

if [ ! -e $NewCommitMessageHookPath ]; then
    echo "Something's gone wrong, I can't find $NewCommitMessageHookPath"
    exit 1
fi

echo "Installing Git commit-msg hook..."

if [ -e $GitCommitMessageHookPath ]; then
    BackedUpCommitMessageHook="$GitCommitMessageHookPath.previous"
    echo "You already have a Git commit-msg hook installed."
    echo "Backing it up as $BackedUpCommitMessageHook"
    if [ -e $BackedUpCommitMessageHook ]; then
        rm $BackedUpCommitMessageHook
    fi
    mv $GitCommitMessageHookPath $BackedUpCommitMessageHook
fi

cp $NewCommitMessageHookPath $GitCommitMessageHookPath
echo "Done."
