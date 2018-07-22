test:
	npm run serve

prod:
	npm run build

install:
	npm install

lint:
	npm run lint

report:
	npm run build --report


#### not useful in an existing project ###

# install and save vue framework
install-vue:
	npm install vue --save

# install and save all extra packages
install-pkg:
	npm install vue-router vuex vuex-router-sync vue-picture-swipe vue-resource --save

# install and save vue router
install-vue-router:
	npm install vue-router --save

# install and save vuex
install-vuex:
	npm install vuex --save

# install and save vuex router-sync
install-vuex-router-sync:
	npm install vuex-router-sync --save

# install and save vue photoswipe port
install-vue-picture-swipe:
	npm install vue-picture-swipe --save

# install and save vue resource
install-vue-resource:
	npm install vue-resource --save

# (for creating <project-name> in current dir)
new:
	vue create <project-name>
