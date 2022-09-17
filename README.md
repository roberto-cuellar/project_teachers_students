# project teachers students

Version control of physics projects in undergraduated courses.

## Git Use

>To project use **Git Flow** to manage the version control. So you can take a look in the official page of [Git Flow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow#:~:text=Gitflow%20is%20a%20legacy%20Git,software%20development%20and%20DevOps%20practices. "Git Flow Page") for reference.
**Release branchs** are created from the **develop** branch, and the **features** are created from the release branchs. Only the **release branch** is allowed to merge in to the **develop** branch, and the **features** are only allowed to merge in to the **release** branch. Once the sprint is complete, the **develop** branch is merged into the **main** branch for their respective deployment. If some errors occur in the **main** branch (a.k.a production branch), a new branch is creted from the **main** branch with the name **hotfix/issue**. This branch have to be merged into the **main** branch once the issue is solved. 
