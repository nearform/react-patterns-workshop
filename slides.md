---
theme: slidev-theme-nearform
layout: default
highlighter: shiki
lineNumbers: false
---

<img class=logo src="/images/nearform.svg">

# React Patterns Workshop

<img src="/images/react.svg" style="width: 15%;">

<div class="copyright">

© Copyright 2022 NearForm Ltd. All Rights Reserved.

</div>
---

# Introduction: React patterns 

<div class="dense">

- Solve common problems

- Etc.

</div>

---

# Introduction: Why React patterns

<div class="dense">
- No need to reinvent the wheel
</div>

---

# Getting setup

<div class="dense">

#### Requirements

- Node LTS
- npm >= 7

#### Setup

```bash
git clone https://github.com/nearform/react-patterns-workshop
npm i

# make sure you're all set
npm run build
```

</div>

---

# Workshop structure

<div class="dense">

- This workshop is made of multiple, incremental modules
- Each module builds on top of the previous one
- At each step you are asked to add features and solve problems
- You will find the solution to each step in the `src/pages/solutions/step-{n}-{name}.js` file
- When the project is running you can visit these pages at `http://localhost:3000/solutions/step-{n}-{name}`
- The 🏆 icon indicates bonus features
- The 💡 icon indicates hints

</div>

---

# Viewing the solutions

- Open `src/pages/solutions/step-{n}-{name}.js`

- Read through the source code (includes helpful comments throughout)

#### For example
The first solution can be viewed here: `src/pages/solutions/step-01-server-state.jsx`

---

# Step 1: Server state

<div class="dense">

- A common concern in developing modern React apps is managing server state
- A good approach to this is to use a tool designed for the job
- A good example of this is (react-query)[https://react-query.tanstack.com/]

</div>

---

# Step 1: Exercise 💻

<div class="dense">

Use react query to fetch the most popular action movies from 2022

- The url to call is "/api/discover?year=2022&genre=28&order_by=popularity.desc&page=1"
- The hook to use is useQuery and this takes an identifier key and an async function
- List the titles of the movies in a list
- Bonus: show an image of each movie

</div>

---

# Step 1: Solution /1

```jsx
// 01-server-state.jsx
const Step1ServerState = () => {
  const discoverQuery = useQuery(['discovery'], () =>
    fetch('/api/discover?page=1&year=2020&genre=Action').then(response =>
      response.json()
    )
  )

  if (!discoverQuery.data) {
    return null
  }
```

---


# Step 1: Solution /2

```jsx
  return (
  <ul>
    {discoverQuery.data.results.map(result => (
      <li key={result.id}>
        <h3>{result.title}</h3>
        <img src={result.image} alt={result.title} width={100} height={100}/>
      </li>
    ))}
  </ul>
)
}
export default Step01ServerState
```

---

# Step 1: Trying it out

- Run `npm run dev` in your terminal
- Go to `http://localhost:3000` in your web browser

<img src="/images/screenshot-step-01.png" />

---

# Step 2: Global state with query params

<div class="dense">

- Often developers reach for redux or the React context api to manage global state
- Sometimes there are more suitable options that can be overlooked
- Here we will explore using url query parameters to share state between components

</div>

---

# Step 2: Trying it out

- Run `npm run dev` in your terminal
- Go to `http://localhost:3000?year=1985` in your web browser

<img src="/images/screenshot-step-01.png" />

---

# Thanks For Having Us!

## 👏👏👏
