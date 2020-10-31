# [Biblia Online](https://bibliaonline.es)

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
![](https://github.com/hiperative/onlinebible/workflows/Frontend%20CI/badge.svg)

## About

Biblia Online is an application (Web + API) to help churches and religious organizations get rid of complexity.

We know that creating unique content ends up competing with basic tasks such making devotions, verses, comments, social networking nurture, and so many other day-to-day tasks available.

We believe that we can offer many of these services free of charge, with professional quality and focused on the word of God.

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
