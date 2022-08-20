import { ReactNode } from "react";
import Footerr from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <Navbar />
            {children}
            <Footerr />
        </>

    );
};
export default Layout;