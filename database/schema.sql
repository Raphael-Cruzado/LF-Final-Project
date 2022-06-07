set client_min_messages to warning;
-- DANGER: this is NOT how to do it in the real world.
-- `drop schema` INSTANTLY ERASES EVERYTHING.
drop schema "public" cascade;
create schema "public";

CREATE TABLE "users" (
    "userId" serial NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL UNIQUE,
    "hashedPassword" TEXT NOT NULL,
    CONSTRAINT "users_pk" PRIMARY KEY ("userId")
) WITH (
  OIDS=FALSE
);
CREATE TABLE "decks" (
    "deckId" serial NOT NULL,
    "deckName" TEXT NOT NULL,
    "userId" integer NOT NULL,
    CONSTRAINT "decks_pk" PRIMARY KEY ("deckId")
) WITH (
  OIDS=FALSE
);
CREATE TABLE "cards" (
    "cardId" serial NOT NULL,
    "frontContent" TEXT NOT NULL,
    "backContent" TEXT NOT NULL,
    "deckId" integer NOT NULL,
    CONSTRAINT "cards_pk" PRIMARY KEY ("cardId")
) WITH (
  OIDS=FALSE
);
ALTER TABLE "decks" ADD CONSTRAINT "decks_fk0" FOREIGN KEY ("userId") REFERENCES "users"("userId");
ALTER TABLE "cards" ADD CONSTRAINT "cards_fk0" FOREIGN KEY ("deckId") REFERENCES "decks"("deckId");
