git stash
git checkout -f gh-pages
git merge master --strategy-option theirs
npm run postinstall
git add bundle.js
git add bundle.js.map
git commit -m "Automatic autopublish"
git push origin gh-pages
git checkout master
git stash pop