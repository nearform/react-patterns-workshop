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

- This workshop is made of multiple, incremental steps
- It's built on top of [Next.js](https://nextjs.org/), a convenient way to kickstart React applications
- At each step you are asked to add features and solve problems
- The `src/challenges` folder is where you should write your code
- The `src/solutions` folder contains the solutions to the challenges
- The 💡 icon indicates hints

</div>

---

# Viewing the solutions

<div class="dense">

- Read the code in the `src/solutions/step-{n}-{name}` folder
- Visit the solution pages at `http://localhost:3000/solutions/step-{n}-{name}`
- If you are running on CodeSandbox, replace `http://localhost:3000` with the url of your sandbox

</div>

---

<div class="slidev-layout intro">

# Let's get started! 🚀

</div>

---

# Step 1: Custom hooks

<div class="dense">

- React provides [Hooks](https://reactjs.org/docs/hooks-intro.html) to "hook" into the lifecycle of the React runtime
- These hooks can be abstracted into custom hooks to allow easier sharing of stateful and _effectful_ logic
- We'll use this exercise to get familiar with the codebase and create a custom hook to fetch from our sample movies API
- 💡 You will work in `src/challenges/step-01-custom-hooks`

</div>

---

# Step 1: Exercise 💻

<div class="dense">

Complete a custom Hook to query the most popular action movies of the current year from the [TMDB](https://www.themoviedb.org/) API.

- A local version of the API is already provided
- Use the native browser's [fetch api](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) to request `/api/movies?year={year}`
- You will need to use the built-in `useState` and `useEffect` hooks
- The hook should accept the `year` as an argument, defaulting to the current year, and return:
  - The list of movies
  - The loading status of the request
- Whenever the `year` changes, a new request should be made
- 💡 The list of movies is in the `results` property of the response body

</div>

---

# Step 1: Trying it out

<div class="dense">

## If you are running locally

<br/>

- Run `npm run dev` in your terminal
- Go to `http://localhost:3000` in your web browser
- See the list of movies appearing on the page

## If you are running on CodeSandbox

<br/>

- Go to your sandbox url
- See the list of movies appearing on the page

</div>

---

<div class="slidev-layout intro">
 
# Congratulations! 🎉

## You have completed the first challenge, ready to move on to the next one?

</div>

---

# Step 2: Context

<div class="dense">

- Hooks are a great way to share logic, but the data stored inside a Hook is isolated
- This means that two components using the same Hook are not necessarily accessing the same data
- To give multiple components access to the same data, we could pass the data as props from a shared parent
- React also provides [context](https://reactjs.org/docs/context.html), which can be used to share state across components (and Hooks)

</div>

---

# Step 2: Exercise 💻

<div class="dense">

- Implement a year filter for the list of movies
- Use React's [createContext](https://reactjs.org/docs/context.html#reactcreatecontext) to create a context for storing the filter state
- In the **Provider** component, keep a local `useState` whose value is an object with a `year` property
- Populate the context provider `value` property with an object that has a `year` numeric value and a `setYear` function, and wrap the children in the context provider
- 💡 You can use `useMemo` for optimal performance
- In the hook, use the `useContext` hook to replace the hardcoded values
- 💡 You can always check out the solution for each challenge in the `src/solutions` folder, and see the running solution at `{baseUrl}/solutions/{step name}`

</div>

---

# Step 2: Trying it out

<div class="dense">

- Change the year in the top right of the app interface and press Enter or click the GO button
- Observe that the list of movies updates to reflect these changes
- This demonstrates that the filter data is being propagated throughout the app

</div>

---

# Step 3: Portals

<div class="dense">

- Components are usually rendered by React as children of other components with a shared parent in the DOM
- It is sometimes necessary to render components outside of this hierarchy (e.g. for message dialogs)
- [Portals](https://reactjs.org/docs/portals.html) make it possible to render components outside of the current DOM tree while still allowing access to props inside of React's component tree

</div>

---

# Step 3: Exercise 💻

<div class="dense">

- Replace the whole body of `ToggleModalChallenge` with a button labeled **Show Filters** that opens a modal dialog
- 💡 You will need to import the `useModal` hook in `src/context/ModalContext.js` and call its `toggle` method to open the dialog
- 💡 You are replacing the filter form with a simple button - a new version of the form will be added to the modal in a later step
- In `FilterModalChallenge`, instead of directly returning the `ModalContainer` component, surround it with the [`createPortal`](https://reactjs.org/docs/portals.html) built-in Higher Order Component (HOC)
- A div with the id `modal` has been setup already to be used as target DOM element for the modal. Check it out in `src/pages/_document.js`

</div>

---

# Step 3: Trying it out

<div class="dense">

- Click on the **Show filters** button
- Observe that the modal shows correctly above all other page content

</div>

---

# Step 4: Error boundaries

<div class="dense">

- Errors in a React component can cause the whole application to break
- We can improve the user experience by catching the error early, and showing an error state when a component in our application encounters a problem
- In React this can be achieved using [error boundaries](https://reactjs.org/docs/error-boundaries.html)

</div>

---

# Step 4: Exercise 💻

<div class="dense">

- Create an `ErrorBoundary` class component by copying and pasting the boilerplate code from [error boundaries](https://reactjs.org/docs/error-boundaries.html)
- `console.error` the error in `componentDidCatch`
- Surround the `children` in `ErrorBoundaryChallenge` with this component

</div>

---

# Step 4: Trying it out

<div class="dense">

- Render `ExampleComponentWithError` as a sibling of `children` in the `ErrorBoundaryChallenge` component
- Observe that the error is now caught and will display your custom component if this happens
- Remove the `ExampleComponentWithError` before proceeding to allow the app to run as normal

</div>

---

# Step 5: Uncontrolled components

<div class="dense">

- It's normal to use controlled components to implement forms with React
- In controlled components, React manages the component's state
- This is not always desirable or possible (e.g. for file input data)
- Instead, we can create uncontrolled components
- The component state is then managed by the DOM and can be accessed using React [refs](https://reactjs.org/docs/refs-and-the-dom.html)

</div>

---

# Step 5: Exercise 💻

<div class="dense">

- Create a form containing a **numeric** input field with name `year`
- Create a ref using `useRef` and assign it to the input field
- Add an event handler to the form for the `onSubmit` event
- 💡 Prevent the default behavior of the form submit event
- Read the current value from the year input ref as a number
- Use this value to update the filter state using the `useFilterStateChallenge` hook from the previous steps
- 💡 Inspire from the solution code for helper components you can use

</div>

---

# Step 5: Trying it out

<div class="dense">

- Click on the **Show filters** button
- Type a year into the text box
- Press Enter or click submit
- The list of movies should change to show movies from the year you entered
- Notice that the component doesn't rerender when typing in the input box. This is thanks to the use of uncontrolled components
- 💡 You can use React Dev Tools to visualize component rerenders. More on this later

</div>

---

# Step 6: Forwarding refs

<div class="dense">

- We've previously used `refs` to access the value of an uncontrolled component
- It is sometimes useful for a parent component to define a ref and pass it to a child component
- This gives the parent access to the ref that the child component assigns to one of its children
- React provides [forwardRef](https://reactjs.org/docs/forwarding-refs.html) to help achieve this

</div>

---

# Step 6: Before you start

<div class="dense">

- This step builds upon the form you created in the last step
- **Replace** the body of the `FilterFormWithStyledInput.js` component with the code of `FilterFormChallenge.js` from the previous step
- If you didn't manage to complete the last step you can copy and paste the code from `FilterFormSolution.js` instead

</div>

---

# Step 6: Exercise 💻

<div class="dense">

- Replace the original year input component with the `FancyInput` component
- Click the **Show filters** button. This should generate a React error in the browser's console
- Fix the error by wrapping the `FancyInput` component in the `forwardRef` HOC and making the necessary adjustments

</div>

---

# Step 6: Trying it out

<div class="dense">

- Click on the **Show filters** button
- You will see the input component now has a custom styling
- But also allows access to the underlying DOM element

</div>

---

# Step 7: Refs and the DOM

<div class="dense">

- `refs` provide access to the DOM node for a component after it has been rendered
- After accessing the DOM node, we can interact with it
- In this example, we'll ensure a form input receives the browser's focus after it has been rendered

</div>

---

# Step 7: Before you start

<div class="dense">

- This step builds upon the form you created in the last step
- Copy and paste the code of the previous step from `FilterFormWithStyledInputChallenge.js` into `FilterFormWithAutofocusChallenge.js`
- If you didn't manage to complete the last step you can copy and paste the code from `FilterFormWithStyledInputSolution.js` instead

</div>

---

# Step 7: Exercise 💻

<div class="dense">

- Make the year input element autofocus when it appears
- 💡 You will need to use `useEffect` along with the input ref created in the previous step
- 💡 An input element can be focused by calling the `.focus()` method on it

</div>

---

# Step 7: Trying it out

<div class="dense">

- Click on the **Show filters** button
- The year input element should be automatically focused

</div>

---

# Step 8: Code splitting

<div class="dense">

- [Code splitting](https://reactjs.org/docs/code-splitting.html) allows you to optimize the initial bundle size of the app
- Using `React.lazy` and `Suspense`, modules can be delayed from loading until they are needed by the application

</div>

---

# Step 8: Exercise 💻

<div class="dense">

- Render the `DetailedHelpBox` component provided in `src/components`
- Instead of directly importing it, lazy load it by using the React `lazy` HOC
- Wrap it in a `Suspense` container and display a placeholder component with a "Loading..." message
- Click on the **Show filters** button and observe the network request for a new javascript file

</div>

---

# Step 8: Trying it out

<div class="dense">

- To see the effect of loading the component lazily it's best to simulate a slow connection
- It can be set in the Network tab of the dev tools in Chrome (screenshot in next slide)
- You will now briefly see a loading message when you open the modal
- You can also see the request for the javascript file in the network tab

</div>

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

<div class="dense">

- We will be optimizing the rerendering of `DarkModeButtonChallenge` so we need to know when it renders
- A simple way to do this is to add a console log to the component's body. E.g. `console.log("dark mode button rendered")`
- Another way would be to use the React dev tools chrome extension (see next slide)
- Clicking the **Show filters** button will cause a re-render of the Dark mode button as a side effect. This is unnecessary and we'll learn how to prevent it from happening

</div>

---

# Step 9: Show component rerenders in React dev tools

<img src="/images/react-dev-tools.png" style="width: 100%;">

---

# Step 9: Exercise

<div class="dense">

- Wrap the `DarkModeButtonChallenge` button in the `memo` HOC to make sure the component only renders when its props change. This will prevent the component from rendering unless its props have changed
- 💡 Note that the component will still render when its internal state changes
- Use the `useMemo` hook to optimize the `ThemeProviderChallenge` context
- 💡 This will prevent the Provider's `value` from changing at each render, thereby causing a render of all the users of the `useTheme` hook

</div>

---

# Step 9: Trying it out

<div class="dense">

- Click the **Dark mode** button
- Notice that the dark mode button logs a rendered message
- Now click the **Show filters** button
- The dark mode button no longer logs a rendered message
- This shows that it has been optimized and doesn't render unnecessarily

</div>

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

<div class="dense">

- Please note in this step you will need to update the code in `src/pages/index.js` to enable SSR functionality so open this file to get started
- Look for the `useMovieQueryChallenge` hook and replace it with a call to `useMovieQueryWithPreloadedData` passing the same first parameter but also including `preloadedMoviesForDefaultYear` as a second parameter

</div>

---

# Step 10: Exercise

<div class="dense">

- In `src/pages/index.js` export a `getServerSideProps` async function that asynchronously calls the `movieResultsFromDefaultYear()` function
- Return an object with a `props` property that has a nested `preloadedMovies` property with the movies data from `movieResultsFromDefaultYear()`. E.g.

```js
{
  props: {
    preloadedMovies: dataFromFunctionCall
  }
}
```

</div>

---

# Step 10: Trying it out

<div class="dense">

- Open the network tab of chrome dev tools (or equivalent in your browser of choice)
- Refresh the page
- Notice that the `movies?year=2022` is no longer called
- The endpoint will only be called if you change the year in the filters

</div>

---

<div class="slidev-layout intro">

# Congratulations!

# 👏👏👏

</div>

---

<div class="slidev-layout intro">

# Thanks for having us!

# 🙏🙏🙏

</div>
