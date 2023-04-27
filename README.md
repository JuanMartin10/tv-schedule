
## How can I run this project?
This project shows a television channel schedule planning whose data comes from MockAPI. In order to view this project locally, you need to access its repository and download it by following the instructions in its readme at https://github.com/NoriginMedia/candidate-tester#mock-api.

This project displays the schedule planning of television channels along with their respective timings, and allows you to access the details of a program, indicating whether it is currently airing or not.
 

The application has two views:

- Home view
- Program view

### Step 1: Installation
```sh
yarn  install
```

### Step 2: Development
#### Development mode
```sh
yarn  dev
```
Then, Your browser will open at http://localhost:5173 to view it, and it will reload when you make any changes. Remember to have the MockAPI server up and running.
#### Production mode
```sh
yarn  build && yarn  run  preview
```
Then, Your browser will open at http://localhost:4173 to view it.

### Step 3: Testing
```sh
yarn  run  test
```

Run test coverage:
```sh
yarn  run  coveage
```
