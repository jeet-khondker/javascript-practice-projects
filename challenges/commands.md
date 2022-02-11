# Directory Creation & Navigation
mkdir challenges
cd challenges

# Documents Creation
- commands.md

# Git Initialization
git init

# Created a GitIgnore File

# Checking Any Remote Git Repositories Connection
git remote -v

# Create A New Repository In Github
# Create A README File

# Connecting Remote Repository With Local Repository
git remote add origin https://github.com/jeet-khondker/javascript-challenges.git

# Pulling the Remote Repository Contents In Local
git pull origin dev

# Checking out to new default 'dev' branch
git checkout -b dev origin/dev

# Deleting original master branch (as dev is the default master branch)
git branch -d master

# Checking the existing branches
git branch

# Checking Git Status
git status

# Adding The Files To Git
git add <file-name>

# Commit With A Tag & A Message
git commit -m "tag: Message"

# Pushing the code to Remote
git push

# Creating a new branch 'feature'
git branch feature

# Checking the existing branches
git branch

# Pushing The New Branch To Remote Git
git push origin feature

# Checking Out To The New Created Branch
git checkout feature

# Pushing the code to Remote Branch 'feature' (For the 1st Time)
git push --set-upstream origin feature

# Checking out to 'dev' branch
git checkout dev

# Merging 'feature' branch with 'dev' branch
- Note: "-no-ff" tells Git to retain all commit messages prior to the merge.
- This will make tracking changes easier in the future.
git merge feature --no-ff

# Commit with a Tag & Message of why the merge is necessary
"tag: Message"
- Enter 'i'
- After finishing, press 'esc' and type ':wq'

# Pushing Local Contents To Git Remote
git push

# Checking out to 'feature'
git checkout feature

# Making all branches aligned with 'dev' branch (If Any - Must Exist)
git checkout dev
git pull
git checkout <your-branch>
git merge dev
git push

# To edit the most recent commit (if not pushed to remote)
git commit --amend -m "New Commit Message"