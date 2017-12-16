test:
	npm run dev

prod:
	npm run build

# install vuex
vuex:
	npm install vuex --save

# install vuex router-sync
install-vuex-router-sync:
	npm install vuex-router-sync --save

# install support for `...` (spread) operator in javascript code
install-three-dots:
	npm install babel-preset-stage-2 --save-dev
	# also need to add `["stage-2"]` after `["env": ... ]` code in .babelrc file

# not useful in an existing project
# for creating a new project in a dir in `.`
#init:
#	vue init webpack <project-name>
