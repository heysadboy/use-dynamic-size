# Dynamic Size

This package can be used get the window size dynamically as a state to change the contents of your React App as screen resizes. 

Example of this package is [here](https://cocky-sinoussi-e8fd74.netlify.app/).
You can see width and height changing as you resize the browser window.

### Installation
```
npm i use-dynamic-size
```
```
yarn add use-dynamic-size
```

### Code Example

```
import useDynamicSize from "use-dynamic-size";

const Example = () => {
  const [width, height] = useDynamicSize();

  return (
    <div>
      <p>Width: {width}</p>
      <p>Height: {height}</p>
    </div>
  );
};

export default Example;
```

You can use this package to render different JSX components based on the screen size to make the code compatible for various screen sizes.
