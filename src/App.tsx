import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div>
      <p className="text-2xl font-bold">Hello, App!</p>
      <Outlet />
    </div>
  );
};

export default App;
