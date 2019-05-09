#!/bin/sh
#
# Verifies that the ms.date in the header is within the past 5 days
# or is in the future.
#
# You can say "nofreshen" anywhere in the commit message to skip processing.

# Redirect output to stderr.
exec 1>&2

# If "nofreshen" appears in the message, skip further processing
NOFRESHEN_MSG="nofreshen"
if grep -Fiq "nofreshen" "$1"; then
  exit 0
fi

ALLOW_LAST_N_DAYS=5
if [ "$(uname)" == "Darwin" ]; then
  # POSIX `date` isn't as featureful as GNU `date`
  FLOOR_DATE=$(ALLOW_LAST_N_DAYS=$ALLOW_LAST_N_DAYS python -c 'from datetime import datetime, timedelta; import os; print((datetime.now() - timedelta(int(os.environ["ALLOW_LAST_N_DAYS"]))).strftime("%s"))')
else
  FLOOR_DATE=$(date --date="$ALLOW_LAST_N_DAYS days ago" +%s)
fi

if [ -t 1 ]; then
  RESTORE="\033[0m"
  RED="\033[00;31m"
  YELLOW="\033[00;33m"
else
  RESTORE=""
  RED=""
  YELLOW=""
fi

REJECT=0

for i in $(git diff --cached --name-only); do
  FILE_DATE=$(git show :$i | grep '^ms.date:' | awk '{print $2}')
  if [[ -n "$FILE_DATE" ]]; then
    if [ "$(uname)" == "Darwin" ]; then
      # POSIX `date` isn't as featureful as GNU `date`
      FILE_DATE_AS_EPOCH=$(FILE_DATE=$FILE_DATE python -c 'from datetime import datetime; import os; print(datetime.strptime(os.environ["FILE_DATE"], "%m/%d/%Y").strftime("%s"))')
    else
      FILE_DATE_AS_EPOCH=$(date --date="$FILE_DATE" +%s)
    fi
    let DELTA_DATES=$FILE_DATE_AS_EPOCH-$FLOOR_DATE
    if (( $DELTA_DATES < 0 )); then
      echo -e "${YELLOW}$i has an ms.date of $FILE_DATE${RESTORE}"
      REJECT=1
    fi
	fi
done

if (( $REJECT == 1 )); then
  echo -e "${RED}commit rejected. add '${NOFRESHEN_MSG}' to the message to skip validation${RESTORE}"
fi

exit $REJECT