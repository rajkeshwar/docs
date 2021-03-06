1) To add username and email 
````
git config --global user.name "Rajkeshwar"
git config --global user.email "rajkeshwar.pd@gmail.com"
````

2) To initialize a git project
```
git init projectname
```

3) To remove from the stagging 
git rm --cached file-1.txt

4) To commit the changes
```
git commit -m "Initial commit"
```

5) To see the commit log
```
git log
```

6) To see the log oneline 
```
git log --oneline
```

7) To see the difference
```
git diff
```

8) To see the difference after commit
```
git diff --cached
```

9) Creating SSH key from git bash 
```
ssh-keygen -t rsa -C "rajkeshwar.pd@gmail.com"
```

10) To check the SSH connection
```
ssh -T git@github.com
ssh -vT git@github.com (With full log)
```

11) Adding local project to origin
```
git remote add origin git@github.com:rajkeshwar/rajkeshwar-repo.git
```

12) To push changes in github 
```
git push origin master
```

13) To list all the branches
```
git branch
```

14) To create a new branch
```
git branch r2_release
```

15) To switch to another branch
```
git checkout r2_release
```

16) To merge (If you are on r2_release branch)
```
git merge master
```

17) When log is very long and you wanna come out of it
```
shift + ZZ
```

18) To merge the changes from remote repo
```
git pull github master
```

19) Creating another branch and checkout 
```
git checkout master
git checkout r2_release
git merge master
```
20) Setting new url
```
git remote set-url origin git@github.com:USERNAME/REPOSITORY.git
```

`git push origin master -f`

21) Deploy gh-pages branch

https://github.com/kadirahq/mantra/blob/master/resources/push-to-gh-pages.sh

