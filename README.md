# [GML Script Wizard](https://mstop4.github.io/gml-script-wizard/)

[![dependencies Status](https://david-dm.org/mstop4/gml-script-wizard/status.svg)](https://david-dm.org/mstop4/gml-script-wizard)
[![devDependencies Status](https://david-dm.org/mstop4/gml-script-wizard/dev-status.svg)](https://david-dm.org/mstop4/gml-script-wizard?type=dev)

As a GML coder who writes a lot of scripts, do you like to document your code using JSDoc and assigning all your arguments to local variables? For example:

    /// @function     collision_line_list(x1, y1, x2, y2, obj, prec, notme)
    /// @description  Returns a ds_list populated with the ids of instances colliding with a given line.
    /// @param        {real}    x1     start point of the collision line
    /// @param        {real}    y1    
    /// @param        {real}    x2     end point of the collision line
    /// @param        {real}    y2    
    /// @param        {object}  obj    object to check for collision (or all)
    /// @param        {boolean} prec   true for precise collision checking
    /// @param        {boolean} notme  true to ignore the calling instance

    var _x1 = argument[0];
    var _y1 = argument[1];
    var _x2 = argument[2];
    var _y2 = argument[3];
    var _obj = argument[4];
    var _prec = argument[5];
    var _notme = argument[6];

    var _dsid, _i;

    /* Script body goes here */

Now, do you find it tedious to write those headers over and over again for each script you create? And what about when you want to rearrange the order of those argument down the line?

**GML Script Wizard** is a tool that will help you generate and modify script templates just be filling in a few fields.

* Conforms to both GM:S 1.4 and GMS 2 (JSDoc) documentation styles for documenting scripts.
* Add, remove, and rearrange arguments and additional local variables with ease.
* Copy the script template with a simple click of a button to paste it into the GameMaker Studio IDE or the script editor, or your choice.
