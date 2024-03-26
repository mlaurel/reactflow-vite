import type { Node, NodeTypes } from "reactflow";
import { PositionLoggerNode } from "./PositionLoggerNode";

export const initialNodes = [
    {
        id: "a",
        type: "input",
        position: { x: 0, y: 0 },
        data: { label: "Pardot Form Handler" }
    },
    {
        id: "b",
        type: "output, position-logger",
        position: { x: -150, y: 110 },
        data: { label: "User Submits Form" },
    },
    {
        id: "c",
        position: { x: 100, y: 100 },
        data: { label: "Xata.io Database Capture" }
    },
    {
        id: "d",
        type: "output",
        position: { x: 0, y: 200 },
        data: { label: "Mapbox Geolocation" },
    },
    {
        id: "e",
        type: "output, input, position-logger",
        position: { x: 200, y: 200 },
        data: { label: "Render User on Dealer Locator" },
    }
] satisfies Node[];

export const nodeTypes = {
    "position-logger": PositionLoggerNode,
    // Add any of your custom nodes here!
} satisfies NodeTypes;
