# Install

1. `git clone https://github.com/jambardnishvili/vue-express-typescript-boilerplate`  
2. `cd client && yarn install`
3. `cd server && yarn install`


## Development setup

1. `cd client && yarn serve`
2. `cd server && yarn dev`

## Production build

Before any build delete `./server/build` directory

### Run from root directory

Build frontend `yarn build:client`  
Build backend `yarn build:server`  
Build app `yarn build:app`  
Run node server from build folder `yarn server`