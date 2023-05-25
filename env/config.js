import studio from "@theatre/studio";
import extension from "@theatre/r3f/dist/extension";

// create-react-app
if (process.env.NODE_ENV === "development") {
  studio.initialize();
  studio.extend(extension);
}
