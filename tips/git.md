## Running Git

- opening a folder using Git Bash
- enter the `init` command
- create file example.txt `touch example.txt`
- display the file list `ls`
- check status `git status`
- change branch name from master to main `git branch -m master main`
- add files `git add .`
- commit `git commit -m "Commit message"`
- push `git push origin main`
- vim exit <kbd>Esc</kbd> `:q!`

<br>

## Git Commands

| Command                                                                                           | Description                   |
| :------------------------------------------------------------------------------------------------ | :---------------------------- |
| git init                                                                                          | Create a new local repository |
| git config --global user.name "John Smith" <br> git config --global user.email `john@example.com` | Tell Git who you are          |
| git add `filename` <br> git add .                                                                 | Add files                     |
| git branch -m master main                                                                         | Change branch name            |
| git commit -m `"Commit message"`                                                                  | Commit                        |
| git push origin main                                                                              | Push                          |
| git status                                                                                        | Status                        |

<br>

## Git

| Command                                                | Description                              |
| :----------------------------------------------------- | :--------------------------------------- |
| git log                                                | history repository changes               |
| git log --oneline                                      | show commit history in a one-line format |
| git revert                                             | back the effects of a previous commit    |
| git clone <URL>                                        | copying a repository                     |
| git merge <URL>                                        | connects the branch to the active branch |
| git branch                                             | listing of available branches            |
| git branch <branch-name>                               | creating a new branch                    |
| git branch -d <branch-name>                            | branch removal                           |
| git checkout <branch-name>                             | switch from one branch to another        |
| git checkout -b <branch-name>                          | creates a new branch and goes to it      |
| git push origin <branch-name>                          | pushing a branch to the repository       |
| git commit --amend                                     | add changes to the last commit           |
| git commit --amend -m "new message"                    | edit last comitet news                   |
| echo "Hello, World!"                                   | simple text display                      |
| echo "Some example text" >> index.txt                  | create a file with the text inside       |

<br>

## Useful links

- [Git](https://git-scm.com/docs)
- [Wprowadzenie do Git i GitHub](https://www.udemy.com/course/kurs-git-i-github-od-podstaw)
- [Learn Git with Bitbucket Cloud](https://www.atlassian.com/git/tutorials/learn-git-with-bitbucket-cloud)
- [Conventional Commits (pl)](https://highlab.pl/conventional-commits/)
- [Git (jaktestowac.pl)](https://jaktestowac.pl/git/)
- [Git course (YouTube-pl)](https://www.youtube.com/watch?v=AjCwB0CiCfE&list=PL2zsrr3O56spOLrXjhOKTx7l-g9UhEe64)
- [Czym jest Git?](https://www.youtube.com/watch?v=D6EI7EbEN4Q&list=PLjHmWifVUNMKIGHmaGPVqSD-L6i1Zw-MH)
- [Pull requests](https://www.youtube.com/watch?v=VsaiEXGjjkI)
