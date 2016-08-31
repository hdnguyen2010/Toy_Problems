/*
Island Count
Given a string representation of a 2d map, return the number of islands in the map. Land spaces are denoted by a zero, while water is denoted by a dot. Two land spaces are considered connected if they are adjacent (but not diagonal).

(!!!) NOTICE: Newline characters in the inputs have been replaced with <br /> tags to make the value easier to read. In other words, when you see a break, it's actually a

\n
character. Check your console when submitting to see the input for yourself.
Examples
Input		Output
mapStr: 	2
.0...
.00..
....0
		
mapStr: 	3
..000.
..000.
..000.
.0....
..000.

mapStr: 	2
..000.
..0...
..0.0.
..0...
..000.

mapStr: 	5
0...0
..0..
0...0
*/

function countIslands(mapStr) {
	var mapSplit = mapStr.split('\n');
	var rowLen = mapSplit[0].length;
	mapSplit = mapSplit.join('');
	mapSplit = mapSplit.split('');
	var islands = 0;
	for (var i = 0; i < mapSplit.length; i++) {
		if (mapSplit[i] === '0') {
			islands++;
			path(i + rowLen);
			path(i + 1);
			if(i%rowLen !== 0) {
				path(i - 1);
			}
			path(i - rowLen)
		}
	}
	function path(coord) {
		if(mapSplit[coord] === '0') {
			mapSplit[coord] = '.';
			path(coord + rowLen);
			path(coord - rowLen);
			path(coord + 1);
			if(i%rowLen !== 0) {
				path(coord - 1);
			}
		}
	}
	return islands;
}
