import { makeTree } from "./lib/make_tree.js";
import structure from "./data.json" assert { type: "json" };

const result = makeTree(structure);
console.log(result);