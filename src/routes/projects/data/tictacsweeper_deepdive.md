This project started out as a reverse engineering exercise. The professor gave us his undocumented assembly code that ran a normal game of tic tac toe on a 3x3 board and “tasked us” with figuring out how it worked and then expanding its functionality. The gameplay was straightforward, but there was this strange block of data in his source code that will be the main focus of this deep dive.

```nasm
a  db   2,1,6,3,8,4,9,9, \
        2,0,4,7,9,9,9,9, \
        1,0,6,4,8,5,9,9, \
        5,4,6,0,9,9,9,9, \
        5,3,6,2,7,1,8,0, \
        4,3,8,2,9,9,9,9, \
        3,0,4,2,8,7,9,9, \
        4,1,8,6,9,9,9,9, \
        4,0,5,2,7,6,9,9
b  equ  a+7
c  db   5,3,5, \
        3,7,3, \
        5,3,5
```

He claimed that starting over from scratch would actually take less time than reverse engineering his code, but my ambition had other plans. These two arrays haunted me for days as I tried to reason about how the rest of the program would use them. Eventually, I discovered the following:

- `b` is the total number of turns remaining in the game,
- `c` is `2 x <number of possible winning lines in tic tac toe for the corresponding spot> - 1`, and
- `a` is used after every move to “check win conditions.”

What does all this mean? The win-checking subroutine takes advantage of the values of ASCII of a players’ marks (`X` or `O`) and the _relatively_ limited scope of win conditions in tic tac toe. `a` is a kind of (hard-coded) map for all the potential three-in-a-row options based on where the most recent play was made. As it’s laid out visually in the code, the row indicates where the piece was played and the columns are all the other spots to check that could lead to a win. Following is a visual example of how the algorithm does this. It shows the progression of program’s processing of the game board over time, from left to right.

<div class="multiColumn" style="flex-wrap: nowrap; overflow-x: scroll;">
<div>

```plaintext
O| |
-----
 |X|X
-----
O| |
```

The current game state.

</div>
<div>

```plaintext
O| |
-----
X|X|X
-----
O| |
```

Player **X** choses the middle-left spot (index 3) to win the game.

The algorithm checks `c` at index 3 (which is 3), then starts checking game board positions listed in `a`, starting at row 3, column 3 and working backwards to row 3, column 0.

</div>
<div>

```plaintext
?| |
-----
X|X|X
-----
O| |
```

At row 3, column 3, we have `0`, so we check position 0, which has an `O`.

</div>
<div>

```plaintext
O| |
-----
X|X|X
-----
?| |
```

Then row 3, col 2: `6`.

Those two spots didn’t match player `X`'s character.

</div>
<div>

```plaintext
O| |
-----
X|?|X
-----
O| |
```

Now check row 3, col 1: `4`.

</div>
<div>

```plaintext
O| |
-----
X|X|?
-----
O| |
```

And finally, row 3, col 0: `5`.

Those last two both matched, Player `X` got three in a row and wins!

</div>
</div>

### Expansion

The additional functionality part of the assignment included the following:

- [x] Allow each player to place a “mine” on the game board that, if their opponent chose that spot, would eliminate them.
- [x] Support tic tac toe games on 4x4 and 5x5 boards, in addition to the 3x3.
- [x] Add extra debugging features to the program.
- [x] Make user input “bullet proof.” _(sort of)_
- [ ] Avoid using too much memory

As you might imagine, in order to make that win-checking algorithm work for the 4x4 and 5x5 games, we’d need a lot more data. While I’m sure there’s a better way to accomplish this (I haven’t taken the time yet to try), the following is what I derived for my working 4x4 and 5x5 tic tac toe gameplay:

<div class="multiColumn" style="flex-wrap: nowrap; overflow-x: scroll;">
<div>

```nasm
a4x4  db   3, 2, 1,12, 8, 4,15,10, 5,16,16,16,16,16,16,16, \
           3, 2, 0,13, 9, 5,16,16,16,16,16,16,16,16,16,16, \
           3, 1, 0,14,10, 6,16,16,16,16,16,16,16,16,16,16, \
           2, 1, 0,12, 9, 6,15,11, 7,16,16,16,16,16,16,16, \
           7, 6, 5,12, 8, 0,16,16,16,16,16,16,16,16,16,16, \
           7, 6, 4,13, 9, 1,15,10, 0,16,16,16,16,16,16,16, \
           7, 5, 4,14,10, 2,12, 9, 3,16,16,16,16,16,16,16, \
           6, 5, 4,15,11, 3,16,16,16,16,16,16,16,16,16,16, \
           11,10, 9,12, 4, 0,16,16,16,16,16,16,16,16,16,16, \
           11,10, 8,12, 6, 3,13, 5, 1,16,16,16,16,16,16,16, \
           11, 9, 8,14, 6, 2,15, 5, 0,16,16,16,16,16,16,16, \
           10, 9, 8,15, 7, 3,16,16,16,16,16,16,16,16,16,16, \
           8, 4, 0, 9, 6, 3,15,14,13,16,16,16,16,16,16,16, \
           9, 5, 1,15,14,12,16,16,16,16,16,16,16,16,16,16, \
           10, 6, 2,15,13,12,16,16,16,16,16,16,16,16,16,16, \
           10, 5, 0,11, 7, 3,14,13,12,16,16,16,16,16,16,16
b4x4  equ  a4x4+15
c4x4  db   8,5,5,8, \
           5,8,8,5, \
           5,8,8,5, \
           8,5,5,8
```

</div>
<div>

```nasm
a5x5  db   4, 3, 2, 1,20,15,10, 5,24,18,12, 6,25,25,25,25, \
           4, 3, 2, 0,21,16,11, 6,25,25,25,25,25,25,25,25, \
           4, 3, 1, 0,22,17,12, 7,25,25,25,25,25,25,25,25, \
           4, 2, 1, 0,23,18,13, 8,25,25,25,25,25,25,25,25, \
           3, 2, 1, 0,20,16,12, 8,24,19,14, 9,25,25,25,25, \
           9, 8, 7, 6,20,15,10, 0,25,25,25,25,25,25,25,25, \
           9, 8, 7, 5,21,16,11, 1,24,18,12, 0,25,25,25,25, \
           9, 8, 6, 5,22,17,12, 2,25,25,25,25,25,25,25,25, \
           9, 7, 6, 5,20,16,12, 4,23,18,13, 3,25,25,25,25, \
           8, 7, 6, 5,24,19,14, 4,25,25,25,25,25,25,25,25, \
           14,13,12,11,20,15, 5, 0,25,25,25,25,25,25,25,25, \
           14,13,12,10,21,16, 6, 1,25,25,25,25,25,25,25,25, \
           14,13,11,10,20,16, 8, 4,22,17, 7, 2,24,18, 6, 0, \
           14,12,11,10,23,18, 8, 3,25,25,25,25,25,25,25,25, \
           13,12,11,10,24,19, 9, 4,25,25,25,25,25,25,25,25, \
           19,18,17,16,20,10, 5, 0,25,25,25,25,25,25,25,25, \
           19,18,17,15,20,12, 8, 4,21,11, 6, 1,25,25,25,25, \
           19,18,16,15,22,12, 7, 2,25,25,25,25,25,25,25,25, \
           19,17,16,15,23,13, 8, 3,24,12, 6, 0,25,25,25,25, \
           18,17,16,15,24,14, 9, 4,25,25,25,25,25,25,25,25, \
           15,10, 5, 0,16,12, 8, 4,24,23,22,21,25,25,25,25, \
           16,11, 6, 1,24,23,22,20,25,25,25,25,25,25,25,25, \
           17,12, 7, 2,24,23,21,20,25,25,25,25,25,25,25,25, \
           18,13, 8, 3,24,22,21,20,25,25,25,25,25,25,25,25, \
           18,12, 6, 0,19,14, 9, 4,23,22,21,20,25,25,25,25
b5x5  equ  a5x5+15
c5x5  db   11, 7, 7, 7,11, \
           7,11, 7,11, 7, \
           7, 7,15, 7, 7, \
           7,11, 7,11, 7, \
           11, 7, 7, 7,11
```

</div>
</div>

After all was said and done, I received a half-decent grade on the project. If my memory serves me correctly, the professor did not want us to use R8–R15 registers (oops) and he didn’t quite appreciate my clunky error handling, though I earned some respect for reverse engineering his algorithm.
