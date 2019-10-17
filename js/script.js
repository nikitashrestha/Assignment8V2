var COLORS = ['#FF4500','#FF4500','#FF4500', '#FF7F50', '#FF7F50', '#FF7F50', '#FF6347','#FF6347','#FF6347','#FF6347'];
 
//Canvas height and width for helix1 and helix2 respectively
var WIDTH = [320, 640];
var HEIGHT = [320, 520];

var ROWS = [10, 20];
var COLS = [15, 30];

helix1 = new Helix('canvas1', WIDTH[0], HEIGHT[0], ROWS[0], COLS[0], COLORS);
helix1.loop();

helix2 = new Helix('canvas2', WIDTH[1], HEIGHT[1], ROWS[1], COLS[1], COLORS);
helix2.loop();