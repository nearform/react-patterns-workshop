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

# Workshop structure

<div class="dense">

- This workshop is made of multiple, incremental modules
- Each module builds on top of the previous one
- At each step you are asked to add features and solve problems
- The `src/challenges` folder is where you should write your code
- The `src/solutions` folder contains the solutions to the challenges
- The 🏆 icon indicates bonus features
- The 💡 icon indicates hints

</div>

---

# Addressing the challenges

- Start the application and browse to `http://localhost:3000` to see your code running

---

# Viewing the solutions

- Read the code in the `src/solutions/step-{n}-{name}` folder
- Visit the solution pages at `http://localhost:3000/solutions/step-{n}-{name}`

---

# Step 1: Custom hooks

<div class="dense">

- React provides `hooks` to "hook" into the lifecycle of the React runtime
- These hooks can be abstracted into custom hooks to allow easier sharing of stateful and effectful logic
- We'll use this exercise to get familiar with the code base and create a custom hook to fetch from our sample movies API

</div>

---

# Step 1: Exercise 💻

<div class="dense">

Write a custom hook to query the most popular action movies from the current year from the [TMDB](https://www.themoviedb.org/) API.

- A local version of the API is provided
- Use the [fetch api](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) to request `/api/discover?year=2022`
- You will need to use the built-in `useState` and `useEffect` hooks
- The hook should accept the `year` as an argument, defaulting to the current year, and return:
  - The list of movies
  - The loading status of the request
- Whenever the `year` changes, a new request should be made

</div>

---

# Step 1: Trying it out

- Run `npm run dev` in your terminal
- Go to `http://localhost:3000` in your web browser
- See the list of movies appearing on the page

---

# Step 2: Context

<div class="dense">

- Hooks are a great way to share logic, but the data returned by each call to a hook is isolated
- This means two different components that call the same hook do not necessarily have access to the same data
- To give multiple components access to the same data, we could pass the data as props from a shared parent
- React also provides [context](https://reactjs.org/docs/context.html), which can be used to manage state across component trees

</div>

---

# Step 2: Exercise 💻

- Implement filters for the list of movies
- Use the `createContext` function from React to create a context for the filter state
- In the provider component, setup a value that has a `year` numeric value and a `setYear` function and wrap the children in the context provider
- In the hook, use the `useContext` hook to replace the hardcoded values

---

# Step 2: Trying it out

- Change the default year that's being setup in state in the JS code
- Observe that the list of movies updates to reflect these changes
- This demonstrates that the filter data is being propagated throughout the app

---

# Step 3: Portals

<div class="dense">

- Components are usually rendered by React as children of other components with a shared parent in the DOM
- It is sometimes necessary to render components outside of this hierarchy (e.g. for message dialogs)
- [Portals](https://reactjs.org/docs/portals.html) make it possible to render components inside different parent components in the DOM

</div>

---

# Step 3: Exercise 💻

- Replace the form in the `ToggleModalChallenge` with a button that triggers the modal
- 💡 You will need to import the `useModal` hook and call it's `toggle` method to open the dialog
- Instead of directly returning the `ModalContainer` component, surround it in the `createPortal` built-in Higher Order Component (HOC)
- A div with the id `modal` has been setup already to be used as target DOM element for the modal. Check it out in `src/pages/_document.js`

---

# Step 3: Trying it out

- Click on the "Show filters" button
- Observe that the modal shows correctly above all other page content

---

# Step 4: Error boundaries

<div class="dense">

- Errors in a React component can cause the whole application to break
- We can improve the user experience by catching the error early, and showing an error state when a component in our application encounters a problem
- In React this can be achieved using [error boundaries](https://reactjs.org/docs/error-boundaries.html)

</div>

---

# Step 4: Exercise 💻

- Create an error boundary class component by copying and pasting the boilerplate code from [error boundaries](https://reactjs.org/docs/error-boundaries.html)
- Create a custom message to show when an error occurs
- Use this to surround the `children` in `ErrorBoundaryChallenge`

---

# Step 4: Trying it out

- Add `ExampleComponentWithError` as a sibling of `children` in the `ErrorBoundaryChallenge` component
- Load the page
- Observe that the error is now caught and will display your custom component if this happens
- Remove the `ExampleComponentWithError` before proceeding to allow the app to run as normal

---

# Step 5: Uncontrolled components

<div class="dense">

- It's normal to use controlled components to implement forms with React
- In controlled components, React manages the form data
- This is not always desirable or possible (e.g. for file input data)
- Instead, we can create uncontrolled components
- The form's data is then managed by the DOM and can be accessed using React [refs](https://reactjs.org/docs/refs-and-the-dom.html)

</div>

---

# Step 5: Exercise 💻

- Create a form containing a text input field with name `year`
- Create a ref using `useRef` and assign it to the input field
- Add an event handler to the form for the `onSubmit` event
- In this read the current value from the year input ref
- Use this value to update the filter state using the `useFilterStateChallenge` hook from the previous steps

---

# Step 5: Trying it out

- Click on the "Show filters" button
- Type a year into the text box
- Click submit
- The list of movies should change to show movies from the year you entered
- Notice that the component doesn't rerender when typing in the input box

---

# Step 6: Forwarding refs

<div class="dense">

- We've previously used `refs` to access the value of an uncontrolled component
- It is sometimes useful for a parent component to define a ref and pass it to a child component
- This gives the parent access to the ref that is assigned to a child component
- React provides [forwardRef](https://reactjs.org/docs/forwarding-refs.html) to help achieve this

</div>

---

# Step 6: Before you start

- This step builds upon the form you created in the last step
- Copy and paste the code from the form component in `FilterFormChallenge.js` into the form component in `FilterFormWithStyledInput.js`
- If you didn't manage to complete the last step you can copy and paste the code from `FilterFormSolution.js` instead

---

# Step 6: Exercise 💻

- Replace the year input component with the `FancyInput` component
- Fix the error output by React by wrapping your `FancyInput` component in the `forwardRef` component

---

# Step 6: Trying it out

- Click on the "Show filters" button
- You will see the input component now has a custom styling
- But also allows access to the underlying DOM element

---

# Step 7: Refs and the DOM

<div class="dense">

- `refs` provide access to the DOM node for a component after it has been rendered
- After accessing the DOM node, we can interact with it
- In this example, we'll ensure a form input receives the browser's focus after it has been rendered

</div>

---

# Step 7: Before you start

- This step builds upon the form you created in the last step
- Copy and paste the code from the form component in `FilterFormWithStyledInputChallenge.js` into the form component in `FilterFormWithAutofocusChallenge.js`
- If you didn't manage to complete the last step you can copy and paste the code from `FilterFormWithStyledInputSolution.js` instead

---

# Step 7: Exercise 💻

- Make the year input element autofocus when it appears
- 💡 You will need to use `useEffect` along with the input ref created in the previous step
- 💡 An input element can be focused by calling the `.focus()` method on it

---

# Step 7: Trying it out

- Click on the "Show filters" button
- The year input element will autofocus when it appears

---

# Step 8: Code splitting

<div class="dense">

- [Code splitting](https://reactjs.org/docs/code-splitting.html) allows to optimize the initial bundle size of the app
- Using `React.lazy` and `Suspense` modules can be delayed from loading until they are needed by the application

</div>

---

# Step 8: Exercise 💻

- Instead of directly importing the `HelpBox` component, lazy load it by using the React `lazy` HOC
- Add a `Suspense` container and display a placeholder component with a "Loading..." message

---

# Step 8: Trying it out

- To see the effect of loading the component lazily it's best to simulate a slow connection
- It can be set in the Network tab of the dev tools in Chrome (screenshot in next slide)
- You will now briefly see a loading message when you open the modal
- You can also see the request for the javascript file in the network tab

---

# Step 8: The network tab in Chrome dev tools

<img src="/images/simulate-slow-network.png" style="width: 100%;">

---

# Step 9: Optimizing re-renders using `useMemo` and `memo`

<div class="dense">

- Application performance can be affected if the code performs expensive calculations on each render
- Passing functions to child components can cause React to re-render them unnecessarily
- React provides a few hooks to help improve performance in these scenarios

</div>

---

# Step 9: Before you start

- We will be optimizing the rerendering of `DarkModeButtonChallenge` so we need to know when it renders
- A simple way to do this is to add a console log to the component. E.g. `console.log("dark mode button rendered")`
- Another way would be to use the React dev tools chrome extension (see next slide)
- Initially clicking the "Show filters" button will cause a re-render of the Dark mode button as a side effect
- ***

# Step 9: Show component rerenders in React dev tools

<img src="/images/react-dev-tools.png" style="width: 100%;">

---

# Step 9: Exercise

- Wrap the `DarkModeButtonChallenge` button in the `memo` HOC to make sure the component only renders when the props change
- Use the `useMemo` hook to optimize the 'ThemeProviderChallenge' context

---

# Step 9: Trying it out

- Click the "Dark mode" button
- Notice that the dark mode button logs a rendered message
- Now click the "Show filters" button
- The dark mode button no longer logs a rendered message
- This shows that it has been optimized and doesn't render unnecessarily

---

# Step 10: Server side rendering (SSR)

<div class="dense">

- We can improve the performance of our apps by performing an initial render on the server
- This gives the client less work to do before it has something to display
- React can then take over on the client side, so we still benefit from our client side code
- [Next.js](https://nextjs.org/) provides functionality to perform server side renders, but the principles apply regardless of the framework you use

</div>

---

# Step 10: Before you start

- Please note in this step you will need to update the code in "src/pages/index.js" to enable SSR functionality so open this file to get started
- Look for the `useMovieQueryChallenge` hook and replace it with a call to `useMovieQueryWithPreloadedData` passing the same first parameter but also including `preloadedMoviesForDefaultYear` as a second parameter

---

# Step 10: Exercise

- In `src/pages/index.js` add a `getServerSideProps` async function that asynchronously calls the `movieResultsFromDefaultYear()` function
- Return an object with a `props` property that has a nested `preloadedMovies` property with the movies data from `movieResultsFromDefaultYear()`. E.g.

```js
{
  props: {
    preloadedMovies: dataFromFunctionCall
  }
}
```

---

# Step 10: Trying it out

<div class="dense">
- Open the network tab of chrome dev tools (or equivalent in your browser of choice) 
- Refresh the page
- Notice that the `movies?year=2022` is no longer called 
- The endpoint will only be called if you change the year in the filters
</div>

# Thanks For Having Us!

## 👏👏👏
