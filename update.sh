cd ../nuga2
yarn build
cat src/CurrentVersion.json

cd ../Concat17.github.io
find . -name "*.bak" -type f -delete
cp -r ../nuga2/dist/. ./
./commit.sh
