# VerivoxFront

## Starting Project

if you want to use docker-compose - please put it in the same root directory with front folder:

- your folder
- - verivox-api
- - verivox-front

then run "docker-compose up" from "verivox-front"

otherwise, please run "npm run start"

### info

Didn't want to overcomplicate test task, so kept it simple.
to do:

- add .env file, separate .envs
- make more common components etc.
- more refactoring
- tried to complete it ASAP, might have missed smth, so check for any typos etc.

### features - please note: response from API comes with 1 second delay (to simulate real response)

1. used onPush change detection
2. created several custom components (standalone)
3. form using form-build
4. router with 2 pages
5. custom pipe to display euro currency
6. lazy loading module
7. service to handle async requests + store data (state)
8. docker uses nginx to run bundle
