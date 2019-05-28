import React from "react";
import renderer from "react-test-renderer";
import { UkriHeader } from "./index";
describe("UkriHeader", () => {
    it("renders correctly", () => {
        const tree = renderer.create(React.createElement(UkriHeader, { routes: {} })).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
