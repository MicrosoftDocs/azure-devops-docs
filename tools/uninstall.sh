#!/bin/sh

GitRoot=$(git rev-parse --show-toplevel)
GitCommitMessageHookPath="$GitRoot/.git/hooks/commit-msg"
BackedUpCommitMessageHook="$GitCommitMessageHookPath.previous"

echo "Uninstalling Git commit-msg hook..."

if [ -e $GitCommitMessageHookPath ]; then
    rm $GitCommitMessageHookPath

    if [ -e $BackedUpCommitMessageHook ]; then
        echo "Putting back your previous commit-msg hook."
        mv $BackedUpCommitMessageHook $GitCommitMessageHookPath
    fi
else
    echo "No commit-msg hook found, nothing to do."
fi

echo "Done."