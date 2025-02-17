# Incorrect State Update in useEffect Hook

This repository demonstrates a common error in React applications involving incorrect state updates within the useEffect hook. The bug showcases how directly modifying state variables within useEffect doesn't trigger re-renders, leading to a non-reactive UI.

## Bug Description

The provided `MyComponent` attempts to increment the `count` state variable directly within the useEffect hook.  This approach is incorrect because it does not use the `setCount` function provided by useState. Therefore, the UI does not reflect the changes made to the `count` variable.

## How to Reproduce

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the development server.
4. Observe that the count displayed on the screen remains at 0, even though the code attempts to increment it.

## Solution

The solution involves using the `setCount` function correctly within the useEffect hook to update the state properly, triggering the necessary re-renders.

## Learning Points

- Always use the state setter function (e.g., `setCount`) provided by `useState` to update state values.
- Directly manipulating state variables within an effect will not cause a re-render. 