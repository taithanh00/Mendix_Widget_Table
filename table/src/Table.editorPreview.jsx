import { createElement } from "react";
// import { HelloWorldSample } from "./components/HelloWorldSample";
import { Table } from "./Table";
export function preview({ sampleText }) {
    return <Table />;
}
export function getPreviewCss() {
    return require("./ui/Table.css");
}
