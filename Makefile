test:
	npm run dev

prod:
	npm run build

install:
	npm install

report:
	npm run build --report


#### not useful in an existing project ###

# install and save vuex
install-vuex:
	npm install vuex --save

# install and save vuex router-sync
install-vuex-router-sync:
	npm install vuex-router-sync --save

# install support for `...` (spread) operator in javascript code
# only save-dev because production code will be expanded
install-three-dots:
	npm install babel-preset-stage-2 --save-dev
	# then also need to add `["stage-2"]` after `["env": ... ]` in .babelrc

# (for creating <project-name> in current dir)
init:
	vue init webpack <project-name>
