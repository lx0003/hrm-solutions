callback({
  "levelNumber": 37,
  "size": 32,
  "steps": 21,
  "successRatio": 1,
  "type": "exploit",
  "author": "WolfWings",
  "hash": "1df6e87a940b9f0eb4ec50be4f168aa6",
  "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 37-Scavenger-Chain - SIZE 32/8 - SPEED 20/63 --\n\n-- This solution is an exploit. All it does is outbox a predetermined message,\n-- either ESCAPEAPE or APEESCAPE depending on whether 0 or 23 comes up first.\n\n    INBOX   \n    JUMPZ    a\n    COPYFROM 23\n    OUTBOX  \n    COPYFROM 10\n    OUTBOX  \n    COPYFROM 20\n    OUTBOX  \n    COPYFROM 0\n    OUTBOX  \n    COPYFROM 13\n    OUTBOX  \n    COPYFROM 3\n    JUMP     b\na:\n    COPYFROM 0\n    OUTBOX  \n    COPYFROM 13\n    OUTBOX  \n    COPYFROM 3\n    OUTBOX  \n    COPYFROM 23\n    OUTBOX  \n    COPYFROM 10\n    OUTBOX  \n    COPYFROM 20\nb:\n    OUTBOX  \n    COPYFROM 23\n    OUTBOX  \n    COPYFROM 10\n    OUTBOX  \n    COPYFROM 20\n    OUTBOX  \n\n"
});