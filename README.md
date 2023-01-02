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
- Render.
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
2. Configure server URL variable in `src/App.js`.
3. Install dependencies with `npm install`.
4. Run the app in the development mode with `npm start`.

## Features

### AI User Generator

You can go to `https://<hostname>:<port>/generate/users` for testing the creation of 25 users with GPT, split them into customers or employees, and then store these in a Elasticsearch index.

First, this would generate names and emails using OpenAI API.

<img src="https://user-images.githubusercontent.com/30379522/210186577-b56cf047-8a8c-4246-b581-a7f40afb520d.png" alt="OpenAI User Generation" border="0" style="width: 50%">

Then store it in a Elasticsearch index.

<img src="https://user-images.githubusercontent.com/30379522/210186578-ee8acfea-a3d4-419d-bdcb-cb60e38c21f3.png" alt="Elasticsearch Storage" border="0" style="width: 70%">

### Users Endpoint

Go to `https://<hostname>:<port>/users` endpoint for obtaining the last 25 created users.

<img src="https://user-images.githubusercontent.com/30379522/210186579-641cb289-0e35-4ca2-b33c-ad69d2e71202.png" alt="Get Users Endpoint" border="0" style="width: 80%">

Go to `https://<hostname>:<port>/users?searchTerm=` for obtaining users according to a search term, send as a query param.

<img src="https://user-images.githubusercontent.com/30379522/210186576-c9ae2550-2856-49c5-94f4-647b142bc78a.png" alt="Search Term Endpoint" border="0" style="width: 80%">

### User Mentions Dashboard

In this dashboard you will find a generator button for creating 25 new users.

<img src="https://user-images.githubusercontent.com/30379522/210187703-9c04dadf-89eb-4842-a7ac-ef3a8dab4bbc.png" alt="Generator Button" border="0" style="width: 90%">

Here you can find two tables showing last customers and employees stored in Elasticsearch.

<img src="https://user-images.githubusercontent.com/30379522/210187704-6f3f1b01-b4fd-4d00-9eb4-2bcac7a786ca.png" alt="Last Generated Users" border="0" style="width: 90%">

Finally, you will find a text box where you can mention users by name, typing '@'.

<img src="https://user-images.githubusercontent.com/30379522/210187705-e77d7a3c-e90b-401c-8e38-fda37db97cb1.png" alt="Mention by Name" border="0" style="width: 90%">

When you click on a user from the list of match coincidences, their name will appear highlighted in the text box according to their role.

<img src="https://user-images.githubusercontent.com/30379522/210187706-e45584e3-74b6-4b6c-b2d5-eb5f38a3a58d.png" alt="Highlight by Role" border="0" style="width: 90%">

This text box also allows to search by email.

<img src="https://user-images.githubusercontent.com/30379522/210187707-f678a58e-4794-40c1-9dd0-568fe89ae9ed.png" alt="Mention by email" border="0" style="width: 90%">

## License

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

- **[MIT license](LICENSE)**
- Copyright 2022 © Juan Alegría
