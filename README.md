# React Redux Typescript

This project is a go to starting boilerplate for a React Redux Typescript project.

It tries to solve, all those configurations / boilerplates I always had to look up when setting up a similar project.

This project handles:

- Data Fetching from state with redux connectors with derived typings.
- Actions / Reducers typings in a smart way where you can infer payloads inside switch statements
- Async operations like API data fetching triggered by actions with redux-thunks
- Combined states into a root state for organizing better multiple app features with independent states
- Setting up @reduxjs/toolkit for HMR with redux state

But in sum it's still a ~create-react-app~ react-scripts app, so in order to get it up and running

```
yarn
yarn start
```

Simple as that
Happy coding ⭐️