callback({
  "levelNumber": 19,
  "size": 44,
  "steps": 65,
  "successRatio": 1,
  "type": "unroll",
  "legal": true,
  "worky": true,
  "author": "viamodulo",
  "hash": "ea641aceab6e439b000855f9056879f8",
  "path": "19-Countdown-10.82/44.65.unroll-viamodulo.asm",
  "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 19-Countdown - SIZE 44/10 - SPEED 65/82 --\n\n-- Based on 25.66.unroll-mrflip.asm\n\n    INBOX   \n    JUMPZ    d\n    COPYTO   0\n    JUMPN    b\n    OUTBOX  \n    BUMPDN   0\n    JUMPZ    k\n    OUTBOX  \n    BUMPDN   0\n    JUMPZ    e\n    OUTBOX  \n    BUMPDN   0\n    JUMPZ    j\n    OUTBOX  \n    BUMPDN   0\n    JUMPZ    l\n    OUTBOX  \n    BUMPDN   0\n    JUMPZ    f\n    JUMP     p\na:\nb:\nc:\n    OUTBOX  \n    BUMPUP   0\n    JUMPN    c\nd:\ne:\nf:\ng:\nh:\ni:\nj:\nk:\nl:\nm:\nn:\no:\n    OUTBOX  \n    INBOX   \n    JUMPZ    o\n    COPYTO   0\n    JUMPN    a\np:\nq:\n    OUTBOX  \n    BUMPDN   0\n    JUMPZ    g\n    OUTBOX  \n    BUMPDN   0\n    JUMPZ    h\n    OUTBOX  \n    BUMPDN   0\n    JUMPZ    i\n    OUTBOX  \n    BUMPDN   0\n    JUMPZ    m\n    OUTBOX  \n    BUMPDN   0\n    JUMPZ    n\n    JUMP     q\n\n\n"
});