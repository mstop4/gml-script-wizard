# [GML Script Wizard](https://mstop4.github.io/gml-script-template-generator/)

As a GML coder who writes a lot of scripts, do you like to document your code using JSDoc and assigning all your arguments to local variables? For example:

    /// @function area_triangle
    /// @description Calculates the area of a triangle
    /// @param {real} base The length of the base of the triangle
    /// @param {real} height The height of the triangle
    /// @returns {real} The calculated area
    
    var _base = arguemnt[0];
    var _height = argument[1];
    
    /* Script body goes here... */

Now, do you find it tedious to write those headers over and over again for each script you create? And what about when you want to rearrange the order of those argument down the line?

**GML Script Template Generator** will be a tool that will help you generate and modify script templates just be filling in a few fields.

* Conforms to GMS 2 JSDoc guidelines for documenting scripts
* Add, remove, and rearrange arguments and additional local variables with ease
