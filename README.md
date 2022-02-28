# Development instructions

Make sure you have installed yarn and docker.

For mac:

- yarn: `brew install yarn`
- docker: `brew install --cask docker`

# Docker setup

In root folder, run following:

```
docker compose up -d
yarn --cwd ./server
yarn --cwd ./server init-db
yarn --cwd ./server dev-server
yarn --cwd ./client
```

Now you can test the server at http://localhost:3005/ and you should get some generated data from the db. DB will be available at `postgres://root:root@127.0.0.1:5433/trustmary-codetest`.

When you stop developing and want to shut down the db run `docker compose down`

# Problem

We are tracking conversions on our customers sites and they are saved to the events table. A random car manufacturer called `mycompany` (`organization_id`) is using Trustmary to track conversions on their site. They want to show their customers how many persons have have been thinking about buying (type=`page_view`) and how many have bought (type=`conversion`) a car (path `/car/:car_id`).

Backend should only look at events from correct `organization_id` and with correct `path`.

Create a React frontend component that can be used to display this information on the customer website (eg. https://demo.trustmary.io/page-visitor-notification/).

_Extras_:

- +For a good looking design
- +Show only events that have occured in the last 7 days
- +Tests
- +What would be the next steps?

# How?

Clone this repository and create a private repository in Github. When you are ready add `@infr` (Kim Salmi) to the repository (Settings -> Collaborators).
