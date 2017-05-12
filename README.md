# jekyll-webpack-starter
Starter Kit for Jekyll projects

This project will remain in pre-alpha until Bootstrap 4 is officially released.

```shell
# put this in your bash config
alias dock=docker-compose

# start dev environment
dock build
dock up -d # run in detached mode

# stop dev environment
dock down

# build production assets
docker exec jekyll.node yarn build -- -p

# if you need to work inside the containers...
docker exec -it jekyll.node /bin/bash
docker exec -it jekyll.ruby /bin/bash
```