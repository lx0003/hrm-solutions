callback({
  "levelNumber": 24,
  "size": 11,
  "steps": 51,
  "successRatio": 1,
  "author": "jwueller",
  "hash": "14c319dda5156f75368b8c7e9a4daada",
  "path": "24-Mod-Module-12.57/11.50-jwueller.asm",
  "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 24-Mod-Module - SIZE 11/12 - SPEED 50/57 --\n\n    JUMP     b\na:\n    ADD      1\n    OUTBOX  \nb:\n    INBOX   \n    COPYTO   0\n    INBOX   \n    COPYTO   1\n    COPYFROM 0\nc:\n    SUB      1\n    JUMPN    a\n    JUMP     c\n\n"
});