import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div><h1>Home</h1>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;