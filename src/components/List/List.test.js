/* eslint-disable testing-library/no-debugging-utils */
import { render, screen } from "@testing-library/react";
import List from "./List";

// Gör ett Unit test som säkerställer att List komponenten visas för användaren. 
test('on initial render, the List component is displayed for the user', () => {
 render(<List />)

 screen.debug()

})