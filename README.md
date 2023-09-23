# Etch-a-Sketch(4th-Project)

**Project Title:** Etch-a-sketch

**Description:**
The Etch-a-sketch project is a simple web application that allows users to draw and sketch on a grid of squares. Users can choose their own drawing colors using a color picker and also have the option to erase their drawings with an eraser tool. The grid consists of 16x16 squares, and users can interact with it by hovering over the squares to draw or erase.

**HTML Structure:**
- `<!DOCTYPE html>`: Defines the document type and version.
- `<html lang="en">`: The root element of the HTML document, specifying the language as English.
- `<head>`: Contains metadata and links to external resources.
  - `<title>Etch-a-sketch</title>`: Sets the title of the webpage.
  - Internal CSS styles are defined within `<style>` tags in the `<head>` section.

**CSS Styles:**
- Styling is applied to the `body`, `h1`, and the grid elements (`grid-item`) to create the appearance of an Etch-a-sketch.
- Background image is set using `background-image`.
- The grid is created using CSS Grid with 16 rows and 16 columns.
- Each grid item (`grid-item`) has a white background and a thin black border.
- Color transitions are applied for smooth drawing effect.

**JavaScript:**
- It handles the functionality of the Etch-a-sketch:
  - The current drawing color is set initially to black.
  - Event listeners are used to change the drawing color using the color picker and to activate the eraser tool.
  - A loop creates the 16x16 grid of squares.
  - Event listeners are added to each grid square to change their background color when hovered over, using the current drawing color or the eraser color.

**User Interaction:**
- Users can choose colors from the color picker.
- The "Eraser" button switches the drawing color to white for erasing.
- Hovering over grid squares allows users to draw with the selected color or erase with the eraser tool.

**Overall Functionality:**
- The project provides a basic digital sketching experience with a grid-based canvas where users can draw and erase using different colors. It's a simplified version of the traditional Etch-a-sketch toy.