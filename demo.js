// learn git in the terminal and persevere

// a version control system
// lets us save our work at any point in time
// let's us save the state of our project
// stores the difference between files
// each commit is based on the previous commit and the previous commit before that


// it stores one copy and then all the differences between that and the previous version
// lets us have multiple versions of the same file
// may want same code deployed to differnet places under slightly different brands for example
// or a version for testing
// and a version to send to the end user
// git handles lots of versions of the same code base
// git is a DISTRUBTED system. 
// code lives in many different places and can be in many different versions
// can pull content from git to computer, work on it and create newer versions
// someone else can do the same
// lots of versions working in to the future that then can get merged back together. 


// GETTING SET UP

// NORMAL
// new repo in git
// copy URL
// use git clone 'paste URL'

// LOCAL
// git init
// go to github and make new repo
// name it, create repo
// take commands in first block and paste them in commmand line.

// BETTER TO DO NORMAL WAY. 
// easier as then it's all linked from the start

// if not storing in cloud you can just store on your computer 

// making a git repo is a one time thing. 
// may not need to make your own if it's already initialised

//CLONING
//AUTHENTICATE by HTTPS  - you may need to verify yourself 
// automatically normally via github sign in
// this is predominant

// OR can also do clone by SSH 
// this is more secure 
// if someone has compromised https then this is better
// some companies may insist but HTTPS is most common

// how to know somethings a git repo?
// has a .git file inside it.
// git repos are hidden 
// show hidden items on windows or mac
// cmd shift .  on a mac for hidden files
// they are hidden for a reason - you shouldn't mess with them without good reason

// if you delete git file you're stopping it being a git repo. don't usually do that



//DOTIFLES
// there are mamy we dont want on github
// we have a git ignore file that sohuld contain files we dont want to send to the cloud
// node modules - code from third parties
// .DS store - config file on a mac 
// *.log
// .env - secret info - never on github
// dist - built product - version for user, not working files 


//GIT IGNORE 
// in create repo option have a git ignore option
// can select language you need and add a git ignore file to your repo. 
// it includes allsorts of files you wont want to put in github
// this is common - some bits of sensitive info you don't want on github
// examples of git ignore files in slides, can often use the one github provides

// LARGE FILES
// dont store very large files on github because you get charged (they got bought out way back by Msoft and now you get charged)

// git attributes file - contains info about how files should be stored on github
// e.g. way files are layed out between windows or mac is different sometimes even where line breaks are
// can cause some issues. but this can be solved by specifying in git attributes file

// the 3 trees of git

// working tree
// all the files in the explorer in vs code
// the tree of files on the left

// index (staging)
// files we have told github we want to commit at some point in the future 
// we can tell github they exist but ask not to save to actual version just yet 

// head
// latest version of code. 


// HOW PROCESS WORKS
// once you have a local copy
// you have working tree
// make changes to files
// we add them to git
// we commit them - the state of these files i want to keep forever - to your local repo
// we can make many commits
// then we can push them to a remote repo - sends them up to the cloud. 

// 3 stage process: stage > commit > push 

// stage one ADD all files
// git add . 
// take all files and folders in current directory and add them to the staging area

// git commit -m "message relevant to changes"
// saving a copy of changes
// can have multiple commits before pushing if you wish

// git push 
// send it up to remote repo. 

// WHAT HAPPENS IF YOU DONT DO IT RIGHT?

// if you commit with no add - error there are untracked files.
// you can use git add . for all files
// or use git add nameoffile.extension - for specific files 

// if you try and push without committing you will get an error too


// SEEING CHANGES/ STATE

// git status - can see if you've modified but not yet commited 
// M appears next to file in the explorer too to give you a hint 

// git log - shows you all previous versions
// can see hash keys for each commit - they all have a unique identifier.
// means we can go back and look at them 
// if have so many it gpes of screen type q and you can exit it

//more obscure but can be useful. 
// can getgraphs and statistics showing all the different things 
// you can show differences between two files 


// UNTRACKED FILES
// need to use git add to track them
// can use git clean to remove them. 

//COMMIT CHANGES
// use commit -m 
// can use commit --amend-m to edit the prior commit message. 
// last commit you did is called the HEAD
// each commit gets a SHA - the unique number - usually just the last 8 digits or so are on git but can be seen in URL in full

// UNDOING COMMIT CHANGES
// git reset HEAD~1 (remove last commit)
// takes back to previous point 
// check status after

// can use soft, mixed or hard
// these still only work on your computer - if youve pushed ot github they wont work
// need git revert for that.

//--------------------------------------

// CHECKOUT 
// let's us move forwards and backwards in the history of the repo
// run git log to pull up previous commits and their SHA.
// take hash from stage you want to go back to. (copy)
// run git checkout 'hash key from step to return to'
// the files go back to the state before. it rewinds back the point in time you asked it to.

// it creates a detached head state of the previous time 
// so you're not overwriting a time in the past
// because if you do, how does the future state make sense?
// so really, the prior commit is pulled up as a copy of sorts. 

// HOW to deal? 
// type git checkout master
// it puts you back to the future, back to where you originally were
// it's ok to go back to look at code in the past but if you want to change it in the past you have a new set of issues- see below
// to do that you need git checkout -b<new-branch-name> which becomes a new branch you would merge in with main part later

// REVERSING CHANGES 
// git rm to remove something
// git reset to a step back
// can go back to a certain hash identifier

//REVERT
// what we want is to go back to the past, make a copy of it and bring it in to the future.
// git revert <sha> brings past code forwards to now. 
// is a copy of what we had before that lives in the here and now. 

//--------------------------------------------

//BRANCHES
// branch is just a version of the code.
// you can branch off from the master code and make many commits
// git branch



