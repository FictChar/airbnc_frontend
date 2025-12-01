# AirBNC

AirBNC is a page that allow you to book stays all over the UK. It's a personal project part of the NorthCoders Bootcamp I have completed.


## How it works

The project is dicided in two parts:

Backend: https://github.com/FictChar/airbnc_project
Frontend: this repo

The Backend has been hosted in Render: https://airbnc-project.onrender.com

And it has the following endpoints available:

GET:

Properties

/api/properties/

/api/properties/:id/

/api/properties/:id/reviews/

/api/properties/?maxprice=<max cost per night>

/api/properties/?minprice=<min cost per night>

/api/properties/?property_type=<property type>


Users

/api/users/:id/


POST:

/api/properties/:id/reviews/


DELETE:

/api/properties/:id/reviews/



## Pre-requisite

Before you begin, you will need to have the following tools installed on your machine: [Git] (https://git-scm.com), [Node.js] (https://nodejs.org/en/). In addition, it is good to have an editor to work with the code like [VSCode] (https://code.visualstudio.com/)

Once done copy the repository and open it on dev mode npm run dev.


## Tech Stack

To build this project I have used the following tools:

React
React Dom
React router (https://reactrouter.com/start/data/installation)
React router dom
Axios (https://axios-http.com/docs/intro)
Vite
ESlint
Cors (https://www.npmjs.com/package/cors)


## Roadmap

At the moment the endpoints and features are limited but I will be adding more. In the current roadmap are the following changes:

.Card pages where you can consult each property and see information about them and the host.
.A contact form.
.A user area (divided in host and guest).
.A banner effect that make the page look more modern.
