import React, { Suspense } from "react";
import { ThreeObject } from "./canvas"; // Adjust the import path

function LazyThreeObject() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ThreeObject />
    </Suspense>
  );
}

export default LazyThreeObject;
