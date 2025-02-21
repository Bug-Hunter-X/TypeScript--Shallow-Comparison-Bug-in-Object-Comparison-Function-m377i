# TypeScript: Shallow Comparison Bug

This repository demonstrates a common bug in TypeScript when comparing objects: a shallow comparison instead of a deep comparison. The `compareObjects` function in `bug.ts` incorrectly identifies objects with different nested structures as equal because it only compares top-level properties. The corrected version in `bugSolution.ts` addresses this using recursion for a deep comparison.

## Bug Description
The `compareObjects` function performs a shallow comparison, failing to accurately compare nested objects or arrays.  This leads to incorrect equality checks when dealing with complex data structures.

## How to reproduce
Clone the repository and run `tsc` to compile. Run the code to observe the incorrect comparison result for objects with different nested structures. The solution demonstrates how to fix this.