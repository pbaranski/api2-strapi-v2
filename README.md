# 🚀 Getting started with API

[![Deploy Directly to Heroku](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/pbaranski/api2-strapi-v2)

## Requirements

To deploy this project on Heroku, you'll need:

- An Heroku account (Free)


### `develop`

Start your Strapi application with autoReload enabled. [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-develop)

```
npm run develop
# or
yarn develop
```
### Local and remote DB

By defalut SQLITE is used.
If you want to use PG add connection string to `.env` file (create it in project root if non existing):
```   
    DATABASE_URL=connection_string_form_heroku_database_settings&& strapi develop"
```

### `start`
Start was modified to use dev version on Heroku

### `build`

Build your admin panel. [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-build)

```
npm run build
# or
yarn build
```

## ⚙️ Deployment

Just use deploy button from the top of README
