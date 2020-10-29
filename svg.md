# SVG notes

---

## What is SVG?

- SVG is short for **Scalable vector graphics**
- It provides perfect shapes that are independent to screen solution. It doesn't get pixilated when zooming in.

- SVG describes _two-dimensional_ graphics in **XML**. It allows two-dimensional images(texts,shapes...) to be described in code as _vector points_. As vectors describe _relative points_, they are easy-scalable to any size without losing any fidelity(meaning precision in picture).
- **Tiny** file scale compared to JPEG,GIF,PNG.

## SVG under the hood

- SVG is written in **Extensible Markup Language (XML)**.

  ## SVG tags:

  ### 1. svg tag `<svg>`

  - root element of every SVG.
  - _width & height_ attributes: create a viewport where we can define our shape. When size of content is greater than the viewport they defines, it's going to be hidden from the current view.
  - _viewbox_ attribute: defines the _coordinate system_ where all the shapes of SVG have to be placed.

    ```txt
    viewbox=" min-x min-y max-x max-y"
    ```

    With viewbox, we can _zoom in_ or _zoom our_ by changing the values of viewbox.

  - _xmlns(XML Namespace)_ It references the programs that generated it. Most of the time it's unneeded out of optimization process for reducing the size of SVG.

    Here's an example:

    ```xml
    <svg width="198px" height="198px" viewbox="0 0 99 94"  xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink">
    </svg>
    ```

  ### 2. svg title and desc tag `<title> and <desc>`

  - like "alt" attribute of `<image>` tag in HTML. They will describe the content when the graphics cannot been seen. They can be stripped to further reduce the file size.

    ```xml
    <title>A well-designed graphic</title>
      <desc>It describes what the graphic looks like</desc>
    ```

  ### 3. svg defs tag `<defs>`

  - An important and useful tag where can store definitions of _reusable content_ like gradients, symbols, path...

  ### 4. svg g tag `<g>`

  - It helps to group multiple shapes together.

  ## SVG shapes:

  Shapes available in SVG: _path, rect(rectangle), circle, ellipse(not-perfect circle), line, polyline, polygon(made by multiple lines)._

  Particularly, path in SVG consists of a number of connected points. (perfect for drawing!)

## Put SVGs in use

- using `<img>` tag
  `<img src="vector.svg" alt="this is an amazing shape!" />`
- surround with `<object>`tag **(Recommended!)**

  ```html
  <object data="assets/img/vector.svg" type="image/svg+xml">
    <!-- child objects will be treated as fallback elements  -->
    <span class="fallback-info">Sorry! Your browser don't support svg😢</span>

    <!-- Alternately, image can be used here as fallback background image -->
    <img class="fallback-img" src="#" alt="fallback image" />
  </object>
  ```

  This approach is better than the previous one for its scalability and it's accessible with JavaScript.

- inserting SVG as a background image

  ```css
  /*fall back style*/
  .item {
    background-image: url("./asset/bgImage.png");
  }

  /* style for modern browser */
  @support (fill:white) {
    .item {
      background-image: url("./asset/bgImage.svg");
    }
  }
  ```

  If the browser understand `@support (fill:white)` (`fill` is an SVG property), browser will override the upper class and apply SVG approach.

## Animating SVG

### SMIL animation

### Animation with JavaScript
