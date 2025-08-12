USE master

IF EXISTS (SELECT name FROM sys.databases WHERE name = 'Elemental')
BEGIN
    DROP DATABASE [Elemental]
	USE master
END

CREATE DATABASE [Elemental]
GO

USE [Elemental]
GO

CREATE TABLE [dbo].[Members]
(
	MemberId	INT PRIMARY KEY IDENTITY (1, 1),
	FirstName	VARCHAR(100) NOT NULL,
	LastName	VARCHAR(100) NOT NULL,
	Element		VARCHAR(10) NOT NULL,	
	Role		VARCHAR(15) NOT NULL,
	BirthDate	DATETIME NOT NULL
)
GO


/*---------------------------- SELECTS ----------------------------*/
SELECT * FROM [dbo].[Members]
