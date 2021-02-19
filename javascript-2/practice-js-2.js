/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

//CODE HERE

var gitDefinition = 'git is an open source project that allows many software and website developers to maintain control and operations';

//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

//CODE HERE

let gitHubDefinition = 'github serves as a platform for internet hosting, developing software and websites, and allowing for version control and maintinence';

//////////////////PROBLEMS 3 - 9////////////////////
/*
    For the next several problems you will be creating objects containing information about different git 
    commands.  Each object should contain 'description' and 'code' properties.  The 'description' property 
    will be a string with a description of what that git command does.  The 'code' property should be a 
    string of the actual command (what you type into your terminal).
*/

//////////////////PROBLEM 3////////////////////
/*
    Create an object called 'init' with 'description' and 'code' properties 
    following the guidelines above to describe the init command.
*/

//CODE HERE

let initObj = {
    description: 'the init command is used to create a new or convert an existing repository'
    code: git init (enter)
}

//////////////////PROBLEM 4////////////////////
/*
    Create an object called 'clone' with 'description' and 'code' properties 
    following the guidelines above to describe the clone command.
*/

//CODE HERE

let initObj = {
    description: 'the clone command is used to bring down a repository from github to be put onto your machine locally'
    code: git clone (enter)
}

//////////////////PROBLEM 5////////////////////
/*
    Create an object called 'status' with 'description' and 'code' properties 
    following the guidelines above to describe the status command.
*/

//CODE HERE

let statusObj = {
    description: 'the status command is used to check the state of the immediate directory and staging area'
    code: git status (enter)
}

//////////////////PROBLEM 6////////////////////
/*
    Create an object called 'add' with 'description' and 'code' properties 
    following the guidelines above to describe the add command.
*/

//CODE HERE

let addObj = {
    description: 'the add command is used to update the index with the immediate content found in the working tree'
    code: git add (enter)
}

//////////////////PROBLEM 7////////////////////
/*
    Create an object called 'commit' with 'description' and 'code' properties
    following the guidelines above to describe the commit command.
*/

//CODE HERE

let commitObj = {
    description: 'the commit command is used to apply any changes one has made to some code to the local machine. this can then be used to be pushed to github to update any project on a server'
    code: git commit (enter)
}

//////////////////PROBLEM 8////////////////////
/*
    Create an object called 'addRemote' with 'description' and 'code' properties
    following the guidelines above to describe the command to add a remote location to your git repository.
*/

//CODE HERE

let addRemoteObj = {
    description: 'the remote add command will make a new connection record to a remote repository. after the fact you will be able to use is as a shortcut for in other git commands'
    code: git remote add (enter)
}

//////////////////PROBLEM 9////////////////////
/*
    Create an object called 'push' with 'description' and 'code' properties 
    following the guidelines above to describe the push command.
*/

//CODE HERE

let pushObj = {
    description: 'the push command will allow a user to update the github repository with the changes that they have made on they"re local machine which will allow others to see the changes'
    code: git push (enter)
}
