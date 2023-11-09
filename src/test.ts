import fs from "fs";
import refParser from "json-schema-ref-parser";

const inputFile = "src/swagger.yaml"; // Replace with your OpenAPI spec file
const outputFile = "swagger.json"; // Replace with the output file name

// Resolve and dereference the OpenAPI spec
refParser.dereference(inputFile, (err, dereferencedSpec) => {
  if (err) {
    console.error("Error while dereferencing:", err);
  } else {
    // Write the dereferenced spec to an output file
    fs.writeFileSync(
      outputFile,
      JSON.stringify(dereferencedSpec, null, 2),
      "utf8"
    );
    console.log(`Dereferenced OpenAPI spec saved to ${outputFile}`);
  }
});
