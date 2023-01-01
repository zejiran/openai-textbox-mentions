# OpenAI Text Box Mentions

## Index

- [Overview](#overview)
- [Used Technologies](#used-technologies)
- [Features](#features)
- [Usage](#usage)
- [License](#license)

## Overview

OpenAI GPT generator for storing mock users in Elasticsearch and show them in a React mentions style text box.

## Used Technologies

- JavaScript.
- NodeJS.
- React.
- OpenAI API.
- Elasticsearch.
- Google Cloud Platform
- Vercel

## Features

### AI User Generator

You can go to `http://<hostname>:<port>/generate/users` for testing the creation of 25 users with GPT, split them into customers or employees, and then store these in a Elasticsearch index.

[image]

## User Mentions Dashboard



## Usage

You can demo directly this project by going to https://[TODO] or instead configure your own deployment as explained below.

### Backend Initialization

1. cd `./ai-user-generator`.
2. Create an environment file with the following variables:
    - OPENAI_API_KEY.
    - CLOUD_ID.
    - ELASTIC_USER.
    - ELASTIC_PASS.
    - HOST.
    - PORT.
3. Install dependencies with `npm install`.
4. Run NodeJS server with `npm start`.

### Frontend Initialization

1. cd `./user-mentions-dashboard`.
2. Configure server hostname and port variables in `src/App.js`.
3. Install dependencies with `npm install`.
4. Run the app in the development mode with `npm start`.

## License

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

- **[MIT license](LICENSE)**
- Copyright 2022 © Juan Alegría
