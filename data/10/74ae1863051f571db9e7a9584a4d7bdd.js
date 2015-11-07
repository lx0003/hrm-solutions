callback({
  "levelNumber": 10,
  "size": 9,
  "steps": 39,
  "successRatio": 1,
  "hash": "74ae1863051f571db9e7a9584a4d7bdd",
  "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 10-Octoplier-Suite - SIZE 9/9 - SPEED 36/36 --\n\n-- Multiply each inbox item by 8 by using copyto and add thrice, essentially\n-- finding the value of n * 2^3 in order of [n, 2n, 4n, 8n].\n\na:\n    INBOX   \n    COPYTO   0\n    ADD      0\n    COPYTO   0\n    ADD      0\n    COPYTO   0\n    ADD      0\n    OUTBOX  \n    JUMP     a\n\n"
});