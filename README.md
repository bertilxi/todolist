<br />
<p align="center">
  <a href="https://github.com/bertilxi/todolist">
    <img src="packages/ui/public/todo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">TodoList</h3>

  <p align="center">
    Simple to do list
    <br />
  </p>
</p>

## About the project

Quick and simple project to demonstrate the integration between a SPA webpage and a rest api server. This aim to be a functional and responsive proof of concept.

### Points to improve

- [ ] Add unit and integration tests in both UI and API packages.
- [ ] Share types and possibly other resources between UI and API.
- [ ] Add search and filtering in UI.
- [ ] Allow to change todo states to other than `DONE`.
- [ ] Soft delete todos, allow to recover them from the UI.
- [ ] Add Server Side Rendering for the UI.
- [ ] Add internationalization.
- [ ] Add css transitions and animations.
- [ ] Add documentation.
- [ ] Add PWA support.
- [ ] Use a better DBMS like Postgres or MariaDB.
- [ ] Extract logic from controllers to a service in API.
- [ ] Extract logic from store to a service in UI.

### Built With

#### UI

- React
- Mobx
- Grommet

#### API

- Fastify
- Objection
- SQLite

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

- node (v12 recommended)
- yarn
- sqlite 3

### Installation

1. Clone the repo

```sh
git clone https://github.com/bertilxi/todolist.git
```

2. Install project dependencies

```sh
yarn
```

3. Run migrations

```sh
yarn --cwd packages/api knex migrate:latest
```

4. Start local dev servers

```sh
yarn dev
```
