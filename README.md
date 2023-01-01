# OpenAI Text Box Mentions

## Index

- [Overview](#overview)
- [Used Technologies](#used-technologies)
- [Usage](#usage)
- [Features](#features)
- [License](#license)

## Overview

OpenAI GPT generator for storing mock users in Elasticsearch and show them in a React mentions style text box.

## Used Technologies

- JavaScript.
- NodeJS.
- React.
- OpenAI API.
- Elasticsearch.
- Google Cloud Platform.
- Vercel.

## Usage

You can demo directly this project by going to [this website](https://openai-textbox-mentions.vercel.app/) or instead configure your own deployment as explained below.

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

## Features

### AI User Generator

You can go to `http://<hostname>:<port>/generate/users` for testing the creation of 25 users with GPT, split them into customers or employees, and then store these in a Elasticsearch index.

First, this would generate names and emails using OpenAI API.

<img src="https://user-images.githubusercontent.com/30379522/210186577-b56cf047-8a8c-4246-b581-a7f40afb520d.png" alt="OpenAI User Generation" border="0" style="width: 50%">

Then store it in a Elasticsearch index.

<img src="https://user-images.githubusercontent.com/30379522/210186578-ee8acfea-a3d4-419d-bdcb-cb60e38c21f3.png" alt="Elasticsearch Storage" border="0" style="width: 70%">

### Users Endpoint

There is an endpoint for obtaining the last 25 created users.

<img src="https://user-images.githubusercontent.com/30379522/210186579-641cb289-0e35-4ca2-b33c-ad69d2e71202.png" alt="Get Users Endpoint" border="0" style="width: 80%">

There is another endpoint for obtaining users according to a search term, send as a query param.

<img src="https://user-images.githubusercontent.com/30379522/210186576-c9ae2550-2856-49c5-94f4-647b142bc78a.png" alt="Search Term Endpoint" border="0" style="width: 80%">

## User Mentions Dashboard



## License

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

- **[MIT license](LICENSE)**
- Copyright 2022 © Juan Alegría
