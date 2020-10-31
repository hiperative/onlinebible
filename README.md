# [Biblia Online](https://bibliaonline.es)

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
![](https://github.com/hiperative/onlinebible/workflows/Frontend%20CI/badge.svg)

## About

Biblia Online is an open platform for building developer portals.

The philosophy behind Biblia Online is simple: Don't expose your engineers to the full complexity of your infrastructure tooling. Engineers should be shipping code — not figuring out a whole new toolset every time they want to implement the basics. Biblia Online allows you add "stuff" (tooling, services, features, etc.) by adding a plugin, instead of building a new tool. This saves you work and avoids the need of your team to learn how to use and support yet another tool.

![headline](headline.png)

For more information go to [bibliaonline.es](https://bibliaonline.es)

## Getting started

To run the Biblia Online frontend, you will need to have the following installed:

- [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- [NodeJS](https://nodejs.org/en/download/) - Active LTS Release, currently v12
- [yarn](https://classic.yarnpkg.com/en/docs/install)

Open a terminal window and start the web app using the following commands from the project root:

```bash
$ yarn install # may take a while

$ yarn start
```

The final `yarn start` command should open a local instance of Biblia Online in your browser, otherwise open one of the URLs printed in the terminal.

### (Optional)Try on Docker

Run the following commands if you have Docker environment

```bash
$ docker build . -t hiperative/onlinebible
$ docker run --rm -it -p 80:80 hiperative/onlinebible
```

Then open http://localhost/ on your browser.

## License

Copyright 2020 BibliaOnline S.A.

Licensed under the Apache License, Version 2.0: http://www.apache.org/licenses/LICENSE-2.0
