DOCKER_REPO := dogmatiq/example-web-app

-include .makefiles/Makefile
-include .makefiles/pkg/docker/v1/Makefile
-include .makefiles/pkg/js/v1/Makefile
-include .makefiles/pkg/js/v1/with-yarn.mk
-include .makefiles/pkg/js/v1/with-webpack.mk

.makefiles/%:
	@curl -sfL https://makefiles.dev/v1 | bash /dev/stdin "$@"
