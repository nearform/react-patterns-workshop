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
- You will find the solution to each step in the `src/solutions/step-{n}-{name}` folder
- When the project is running you can visit these pages at `http://localhost:3000/solutions/step-{n}-{name}`
- The 🏆 icon indicates bonus features
- The 💡 icon indicates hints

</div>

---

# Viewing the solutions

- Open the `src/solutions/step-{n}-{name}` directory

- Read through the source code (includes helpful comments throughout)

#### For example
The first solution can be viewed here: `src/pages/solutions/step-01-custom-hook.js`

---

# Step 1: Custom hooks

<div class="dense">

- TODO add intro about using a custom hook

</div>

---

# Step 1: Exercise 💻

<div class="dense">

Write a custom hook to query the most popular action movies from 2022

- Open the file `useMovieQueryChallenge.js` in `src/challenges/step-01-server-state`
- Use the fetch api to call "/api/discover?year=2022&page=1"
- You will need to use `useState` and `useEffect` 
- The hook should accept the current year as an argument and return: 
  - The list of movies
  - The loading status of the request

</div>

---

# Step 1: Solution

```jsx
const [isLoading, setIsLoading] = useState(true)
const [movieData, setMovieData] = useState()

useEffect(() => {
  const fetchData = async () => {
    setIsLoading(true)
    try {
      const response = await fetch(
        `/api/movies?year=${year}`
      )
      const data = await response.json()
      setMovieData(data.results)
    } finally {
      setIsLoading(false)
    }
  }
  fetchData()
}, [year])

return {
  data: movieData,
  isLoading
}
```

---

# Step 1: Trying it out

- Run `npm run dev` in your terminal
- Go to `http://localhost:3000` in your web browser

<img src="/images/screenshot-step-01.png" />

---

# Step 2: Context

<div class="dense">
- TODO info about the context api
</div>

---

# Step 2: Exercise 💻
- Open the file `FilterStateProviderChallenge.js` in `src/challenges/step-02-context`
- Use the `createContext` function from React to create a context for the filter state
- In the provider component setup a value that has the `year` and a `setYear` function
- In the hook, use the `useContext` hook to replace the hardcoded values

---

# Step 2: Solution

```jsx
const FilterStateContext = React.createContext(null)

export const FilterStateProviderSolution = ({ children }) => {
  const [state, setState] = useState({ year: DEFAULT_YEAR })

  const value = {
    year: state.year,
    setYear: year => setState({ year })
  }

  return (
    <FilterStateContext.Provider value={value}>
      {children}
    </FilterStateContext.Provider>
  )
}

export const useFilterStateSolution = () => {
  return useContext(FilterStateContext)
}
```
---

# Step 2: Trying it out

- Change the default year that's being setup in state
- Observe that the list of movies updates to reflect these changes
- This demonstrates that the filter data is being propogated throughout the app

---

# Step 3: Portals

<div class="dense">
- TODO info about portals and when to use
</div>

---

# Step 3: Exercise 💻
- Open the file `FilterModalChallenge.js` in `src/challenges/step-03-portals`
- Instead of directly returning the `ModalContainer` surround it in the `createPortal` HOC
- A div with the id `modal` has been setup already to be used as target dom element for the modal

---

# Step 3: Solution

```jsx
export const FilterModalChallenge = ({ children }) => {
  if (typeof window !== 'undefined') {
    return createPortal(
      <ModalContainer>{children}</ModalContainer>,
      document.getElementById('modal')
    )
  }
  return null
}
```

---

# Step 3: Trying it out
- Click on the "Show filters" button
- Observe that the modal now shows correctly above all other page content

---

# Step 4: Error boundary

<div class="dense">
- TODO info about error boundaries
</div>

---

# Step 4: Exercise 💻
- Open the file `ErrorBoundariesChallenge.js` in `src/challenges/step-04-error-boundaries`
- Create an error boundary class component by copying and pasting the boilerplate code from https://reactjs.org/docs/error-boundaries.html 
- Create a custom message to show when an error occurs
- Use this to surround the `children` in `ErrorBoundaryChallenge`

---

# Step 4: Solution

```jsx
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }
  static getDerivedStateFromError() {
    return { hasError: true }
  }
  componentDidCatch(error, errorInfo) {
    console.error(error, errorInfo)
  }
  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong!!!</h1>
    }
    return this.props.children
  }
}

export const ErrorBoundarySolution = ({ children }) => {
  return <ErrorBoundary>{children}</ErrorBoundary>
}
```

---

# Step 4: Trying it out
- Add `ExampleComponentWithError` as a sibling of `children` in the `ErrorBoundaryChallenge` component
- Load the page
- Observe that the error is now caught and will display your custom component if this happens
- Remove the `ExampleComponentWithError` before proceeding to allow the app to run as normal
---

# Step 5: Uncontrolled components

<div class="dense">
- TODO info about uncontrolled components
</div>

---

# Step 5: Exercise 💻
- Open the file `FilterFormChallenge.js` in `src/challenges/step-05-uncontrolled-components`
- Create a form input of type text with name `year`
- Create a ref using `useRef`
- Add an event handler to the form for the `onSubmit` event
- In this read the current value from the year input ref
- Use this value to update the filter state using the hook from the previous step

---

# Step 5: Solution /1

```jsx
export const FilterFormSolution = () => {
  const filterState = useFilterStateSolution()
  const inputRef = useRef()

  const handleSubmit = event => {
    // TODO: consider using FormData
    event.preventDefault()
    if (!inputRef.current.value) {
      return
    }
    const parsed = Number(inputRef.current.value)
    if (Number.isInteger(parsed)) {
      filterState.setYear(parsed)
    }
  }
```

---

# Step 5: Solution /2  

```jsx

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Year:
        <input name="year" type="text" ref={inputRef} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  )
}
```

---

# Step 5: Trying it out
- Click on the "Show filters" button
- Type a year into the text box
- Click submit
- The list of movies should change to show movies from the year you entered

---

# Step 6: Forwarding refs

<div class="dense">
- TODO info about uncontrolled components
</div>

---

# Step 6: Before you start
- This step builds upon the form you created in the last step
- Copy and paste the code from the form component in `FilterFormChallenge.js` into the form component in `FilterFormWithStyledInput.js`
- If you didn't manage to complete the last step please copy and paste the code from  `FilterFormSolution.js` in `src/solutions/step-05-uncontrolled-components`

---

# Step 6: Exercise 💻
- Open the file `FilterFormWithStyledInputChallenge.js` in `src/challenges/step-06-forwarding-refs`
- Replace the year input component with the `FancyInput` component
- Fix the error output by React by wrapping your `FancyInput` component in the `forwardRef` component
- Refer to the React docs for the exact api: https://reactjs.org/docs/forwarding-refs.html 

---

# Step 6: Solution

```jsx
const FancyInput = forwardRef(function FancyInput (props, ref) {
  return (
    <input
      {...props}
      ref={ref}
      style={{
        padding: '16px',
        fontWeight: 'bold',
        border: '1px solid azure',
        fontSize: '24px'
      }}
    />
  )
})
```


# Step 6: Trying it out
- Click on the "Show filters" button
- You will see the input component now has a custom styling
- But also allows access to the underlying dom element

---

# Step 7: Refs and the DOM

<div class="dense">
- TODO info about refs and the DOM
</div>

---

# Step 7: Before you start
- This step builds upon the form you created in the last step
- Copy and paste the code from the form component in `FilterFormWithStyledInputChallenge.js`  into the form component in `FilterFormWithAutofocusChallenge.js`
- If you didn't manage to complete the last step please copy and paste the code from  `FilterFormWithStyledInputSolution.js` in `src/solutions/step-06-forwarding-refs`

---

# Step 7: Exercise 💻
- Open the file `FilterFormWithAutofocusChallenge.js` in `src/challenges/step-06-refs-and-the-dom`
- Make the year input element autofocus when it appears
- 💡 You will need to use `useEffect` along with the input ref created in a previous step
- 💡 An input element can be focussed by calling the `.focus()` method

---

# Step 7: Solution

```jsx
useEffect(() => {
  inputRef.current?.focus()
}, [])

```

---

# Step 7: Trying it out
- Click on the "Show filters" button
- The year input element will autofocus when it appears

---

# Step 8: Code splitting

<div class="dense">
- TODO info about code splitting
</div>

---

# Step 8: Exercise 💻
- Open the file `DetailedHelpBoxChallenge.js` in `src/challenges/step-08-code-splitting`
- Instead of directly importing the `HelpBox` component lazy load it by using the React `lazy` HOC
- Add a `Suspense` boundary and add a placeholder component with a "Loading..." message

---

# Step 8: Solution

```jsx
const DetailedHelpBox = React.lazy(() =>
  import('../../components/DetailedHelpBox/DetailedHelpBox')
)

export const DetailedHelpBoxSolution = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DetailedHelpBox />
    </Suspense>
  )
}
```

---

# Step 8: Trying it out
- Click on the "Show filters" button
- The year input element will autofocus when it appears

---


# Thanks For Having Us!

## 👏👏👏
