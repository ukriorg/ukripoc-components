import React from "react";
import renderer from "react-test-renderer";
import { UkriFooter } from "./index";
describe("UkriFooter", () => {
    it("renders correctly", () => {
        const tree = renderer.create(React.createElement(UkriFooter, null)).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
