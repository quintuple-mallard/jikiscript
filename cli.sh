if [ $# -gt 1 ]; then
  echo "Usage: jiki [script]"
  echo "Usage: jiki"
elif [ $# -eq 1 ]; then
  node run.js "$1" "file"
else
  for (( ;; )); do
    echo -n "> "
    read -p "" command
    if [ "$command" = "" ]; then
      exit 0
    fi
    node run.js "$command" "command"
  done
fi
