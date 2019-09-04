# check-connection
react hook to check connection status

## Setup 🛠

`yarn add check-connection`

or

`npm install check-connection`

## Usage 🤓

`import useConnectionStatus from "check-connection";`

```jsx
function App() {
  return (
    <div className="App">
      <h1>Hello you're {useConnectionStatus() ? "online" : "offline"}</h1>
    </div>
  );
}
```


 [![Edit elated-wu-wt4tr](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/elated-wu-wt4tr?fontsize=14&hidenavigation=1)
