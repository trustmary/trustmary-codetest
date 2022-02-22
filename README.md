# Development instructions

Make sure you have installed yarn and docker.

For mac:

- yarn: `brew install yarn`
- docker: `brew install --cask docker`

# Docker setup

In root folder, run:

```
make up
make install
make init-db
make dev-server
```

Now you can test the server at http://localhost:3005/ and you should get some generated data from the db. DB will be available at `postgres://root:root@127.0.0.1:5433/trustmary-codetest`.

When you stop developing and want to shut down the db run `make down`

# Problem

We are tracking conversions on our customers sites and they are saved to the events table. A random car manufacturer called `mycompany` is using Trustmary to track conversions on their site. They want to show their customers how many persons have have been thinking about buying (type=page_view) and how many have bought (type=conversion) a car (path /car/:car_id).

Create a React frontend component that can be used to
wants to see what https://demo.trustmary.io/page-visitor-notification/
