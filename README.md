
## How can I see this project on production?
This project is hosted on Vercel, you can view it at this URL:
```sh
https://tv-schedule-one.vercel.app/
```
## How can I run this project?
This project shows a television channel schedule planning whose data comes from MockAPI.

This project displays the schedule planning of television channels along with their respective timings, and allows you to access the details of a program, indicating whether it is currently airing or not.
 
In order to view this project locally.

The application has two views:

- Home view
- Program view

* Note: Channel images are not displayed because the link returned by the API is broken.

### Step 1: Installation
```sh
yarn install
```

### Step 2: Development
#### Development mode
```sh
yarn dev
```
Then, Your browser will open at http://localhost:5173 to view it, and it will reload when you make any changes. Remember to have the MockAPI server up and running.
#### Production mode
```sh
yarn build:all
```
Then, Your browser will open at http://localhost:4173 to view it.

### Step 3: Testing
```sh
yarn run test
```

Run test coverage:
```sh
yarn run coveage
```
