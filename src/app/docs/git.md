```sh
git branch -r | grep -v '\->' | while read remote; do git branch --track "${remote#origin/}" "$remote"; done
git fetch --all
git pull --all
```


List git branches with commit date

```sh
git for-each-ref --sort=-committerdate refs/heads/

# Or using git branch (since version 2.7.0)
git branch --sort=-committerdate  # DESC
git branch --sort=committerdate  # ASC
```


Listing branch with advanced options 

```sh
git for-each-ref --sort=committerdate refs/heads/ --format='%(HEAD) %(color:yellow)%(refname:short)%(color:reset) - %(color:red)%(objectname:short)%(color:reset) - %(contents:subject) - %(authorname) (%(color:green)%(committerdate:relative)%(color:reset))'
```
