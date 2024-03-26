import type { Edge, EdgeTypes } from "reactflow";

export const initialEdges = [
    { id: "a->c", source: "a", target: "c", animated: true },
    { id: "a->b", source: "a", target: "b", label: "User Submits Form" },
    { id: "b->d", source: "b", target: "d", animated: true },
    { id: "c->d", source: "c", target: "d", animated: true },
    { id: "c->e", source: "c", target: "e", animated: true },
    { id: "d->e", source: "d", target: "e", animated: true },
] satisfies Edge[];

export const edgeTypes = {
    // Add your custom edge types here!
} satisfies EdgeTypes;
