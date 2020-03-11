CREATE TYPE "gender" AS ENUM (
  'male',
  'female'
);

CREATE TABLE "user_account" (
  "user_account_identifier" integer PRIMARY KEY,
  "first_name" varchar,
  "middle_name" varchar,
  "last_name" varchar,
  "adress" varchar,
  "nationai_id_number" integer,
  "gender" gender,
  "email" varchar
);

CREATE TABLE "next_of_kin" (
  "next_of_kin_identifier" integer PRIMARY KEY,
  "first_name" varchar,
  "middle_name" varchar,
  "last_name" varchar,
  "kin_relationship" varchar,
  "user_account_identifier" integer
);

ALTER TABLE "next_of_kin" ADD FOREIGN KEY ("user_account_identifier") REFERENCES "user_account" ("user_account_identifier");

COMMENT ON COLUMN "next_of_kin"."user_account_identifier" IS 'this is a foreign key';
