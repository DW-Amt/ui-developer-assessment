import * as React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen,fireEvent } from "@testing-library/react";
import { NewComponent } from "..//new/newComponent";

describe("<NewComponent />", () => {
    test("check to find if buttons have rendered", async () => {
        render(<div><div id="old"> </div><div id='new'></div></div>);
        const loginForm = screen.getByTestId("new");
        expect(loginForm)
    });
});