#!/usr/bin/env bash
set -o errexit

VERSION='6666'
# age='45'
# list=(1 2 3 4 5)

# length=${#list[@]}

# # echo $version $age
# gitlist=$(git branch)

# # echo -n -e $gitlist

# echo "请选择你要切换的分支"
# select branch in $gitlist;do
# break
# done
# git checkout $branch
# echo "777" $? https://juejin.cn/post/6844904022080667661#heading-17

# if [ $? == 0 ] 
#     then
#         echo "已经切换到 $branch 分支"
# else
#     echo "你的命令错误" 
# fi

VERSION=$VERSION npm run test
echo $VERSION