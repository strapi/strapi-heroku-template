# 🚀 Getting started with Strapi

This repository contains a basic Strapi application which is quickly and easily deployable on Heroku through a one-click deploy button

<a href="https://www.heroku.com/deploy/?template=https://github.com/strapi/strapi-heroku-template">
<img src="https://assets.strapi.io/uploads/Deploy_button_heroku_b1043fc67d.png" />
</a>

## Requirements

To deploy this project on Heroku, you'll need:

- An Heroku account (Free)
- A Cloudinary account for hosting your assets (Free)

## Database

This project will use the [postgresql Heroku addons](https://elements.heroku.com/addons/heroku-postgresql). The database configuration can be found in the `config/database.js` file. Using the existing configuration means that you project will also use the production postgresql database when running locally on your machine. 
You will need to have the same `DATABASE_URL` that the addon will create on your Heroku project if you want to use the postresql database locally.

  - Create an `.env` file at the root of your project containing the following code:

```
DATABASE_URL=...
```

If you want to use an SQLite database just for editing your collection-types, configurations locally on your machine, please comment the postgresql configuration in the `config/database.js` file and uncomment the SQLite one. 
You can also create a `config/env/production/database.js` file containing the postgresql connection and only keep the SQLite connection in your `config/database.js`. This way you'll have two different database connection depending on the environment.

## Upload

This project will upload your assets on your Cloudinary account. The configuration can be found in the `config/plugins.js` file. Using the existing configuration means that you project will also use the cloudinary upload provider when running locally on your machine.
You will need to have the same `CLOUDINARY_NAME`, `CLOUDINARY_KEY` and `CLOUDINARY_SECRET` variables in an `.env` file locally on your machine.

  - Create an `.env` file at the root of your project containing the following code:

```
CLOUDINARY_NAME=...
CLOUDINARY_KEY=...
CLOUDINARY_SECRET=...
```

If you want to upload your assets on your computer when running locally on your machine, please comment the content of your `config/plugins.js` file. 
You can also create a `config/env/production/plugins.js` file containing the cloudinary provider and delete your `config/plugins.js`. This way you'll have two different upload providers depending on the environment.

Strapi comes with a full featured [Command Line Interface](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html) (CLI) which lets you scaffold and manage your project in seconds.

### `develop`

Start your Strapi application with autoReload enabled. [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-develop)

```
npm run develop
# or
yarn develop
```

### `start`

Start your Strapi application with autoReload disabled. [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-start)

```
npm run start
# or
yarn start
```

### `build`

Build your admin panel. [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-build)

```
npm run build
# or
yarn build
```

## ⚙️ Deployment

Strapi gives you many possible deployment options for your project. Find the one that suits you on the [deployment section of the documentation](https://docs.strapi.io/developer-docs/latest/setup-deployment-guides/deployment.html).

## 📚 Learn more

- [Resource center](https://strapi.io/resource-center) - Strapi resource center.
- [Strapi documentation](https://docs.strapi.io) - Official Strapi documentation.
- [Strapi tutorials](https://strapi.io/tutorials) - List of tutorials made by the core team and the community.
- [Strapi blog](https://docs.strapi.io) - Official Strapi blog containing articles made by the Strapi team and the community.
- [Changelog](https://strapi.io/changelog) - Find out about the Strapi product updates, new features and general improvements.

Feel free to check out the [Strapi GitHub repository](https://github.com/strapi/strapi). Your feedback and contributions are welcome!

## ✨ Community

- [Discord](https://discord.strapi.io) - Come chat with the Strapi community including the core team.
- [Forum](https://forum.strapi.io/) - Place to discuss, ask questions and find answers, show your Strapi project and get feedback or just talk with other Community members.
- [Awesome Strapi](https://github.com/strapi/awesome-strapi) - A curated list of awesome things related to Strapi.

---

<sub>🤫 Psst! [Strapi is hiring](https://strapi.io/careers).</sub>
