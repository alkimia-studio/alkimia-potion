BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS "Collaborators" (
	"id"	integer NOT NULL,
	"name"	nvarchar(50) NOT NULL COLLATE NOCASE,
	"surname"	nvarchar(50) NOT NULL COLLATE NOCASE,
	"email"	nvarchar(50) NOT NULL COLLATE NOCASE,
	"emailpersonal"	nvarchar(50) COLLATE NOCASE,
	"emailpec"	nvarchar(50) COLLATE NOCASE,
	"tel"	nvarchar(50) COLLATE NOCASE,
	"cf"	nvarchar(50) NOT NULL COLLATE NOCASE,
	"docnumber"	nvarchar(50) COLLATE NOCASE,
	"address"	text(2147483647) COLLATE NOCASE,
	"iban"	varchar COLLATE NOCASE,
	"note"	text(2147483647) COLLATE NOCASE,
	PRIMARY KEY("id" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "Equipments" (
	"id"	integer NOT NULL,
	"collaborator"	integer,
	"name"	nvarchar(50) NOT NULL COLLATE NOCASE,
	"description"	text(2147483647) COLLATE NOCASE,
	"serialnumber"	nvarchar(50) COLLATE NOCASE,
	"purchasedate"	datetime,
	"type"	integer NOT NULL,
	"price"	float,
	"invoice"	nvarchar(50) COLLATE NOCASE,
	"note"	text(2147483647) COLLATE NOCASE,
	FOREIGN KEY("collaborator") REFERENCES "Collaborators"("id"),
	PRIMARY KEY("id" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "Permits" (
	"id"	integer NOT NULL,
	"collaborator"	integer,
	"from"	datetime NOT NULL,
	"to"	datetime NOT NULL,
	"allday"	bit,
	"timestamp"	blob NOT NULL,
	"note"	text(2147483647) COLLATE NOCASE,
	"torecover"	bit,
	"type"	nvarchar(50) NOT NULL COLLATE NOCASE,
	FOREIGN KEY("collaborator") REFERENCES "Collaborators"("id"),
	PRIMARY KEY("id" AUTOINCREMENT)
);
COMMIT;