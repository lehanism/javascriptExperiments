//creates a chess board with n x n grid using new line characters to separate lines

/*var n = 8, board = "", count = 0;

while (count <= (n*n)) {
	if (board.length % n == 0) {
		board = board + "\n";
	} else if (board.length % 2 == 0) {
		board = board + "#";
	} else {
		board = board + "O";
	}

	count ++;
}

console.log(board);*/


// example code

var size = 9;

var board = "";

for (var y = 0; y < size; y++) {
  for (var x = 0; x < size; x++) {
    if ((x + y) % 2 == 0)
      board += " ";
    else
      board += "#";
  }
  board += "\n";
}

console.log(board);