# Cleanup any existing template files
rm -Rf ./tmp-template

# Clone the template into a temp directory
git clone https://github.com/atlantabitdevs/bitdevs-upgrade.git ./tmp-template

# Sync template files into the current directory, excluding unique content
rsync -av --exclude .git/ --exclude .next/ --exclude .contentlayer/ --exclude content/ --exclude public/ --exclude summaries/ --exclude meetup.ts --exclude meetup.js ./tmp-template/* ./

# Cleanup the template directory
rm -Rf ./tmp-template