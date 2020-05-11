import React from 'react';
import Dropdown from "./App"

import { render, fireEvent, waitforElement, wait, screen } from "@testing-library/react";
import App from "./App";

test("renders App without crashing", () => {
    render(<App />)
});