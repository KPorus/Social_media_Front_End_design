import { RouterProvider } from "react-router-dom";
import { route } from "./Router/Route";

function App() {
 
  return (
    <div>
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
