USE [master]
GO
/****** Object:  Database [alkimia]    Script Date: 19/04/2023 13:07:42 ******/
CREATE DATABASE [alkimia]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'alkimia', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.SQLEXPRESS02\MSSQL\DATA\alkimia.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'alkimia_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.SQLEXPRESS02\MSSQL\DATA\alkimia_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO
ALTER DATABASE [alkimia] SET COMPATIBILITY_LEVEL = 150
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [alkimia].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [alkimia] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [alkimia] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [alkimia] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [alkimia] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [alkimia] SET ARITHABORT OFF 
GO
ALTER DATABASE [alkimia] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [alkimia] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [alkimia] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [alkimia] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [alkimia] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [alkimia] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [alkimia] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [alkimia] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [alkimia] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [alkimia] SET  DISABLE_BROKER 
GO
ALTER DATABASE [alkimia] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [alkimia] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [alkimia] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [alkimia] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [alkimia] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [alkimia] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [alkimia] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [alkimia] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [alkimia] SET  MULTI_USER 
GO
ALTER DATABASE [alkimia] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [alkimia] SET DB_CHAINING OFF 
GO
ALTER DATABASE [alkimia] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [alkimia] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [alkimia] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [alkimia] SET QUERY_STORE = OFF
GO
USE [alkimia]
GO
/****** Object:  Table [dbo].[Collaborators]    Script Date: 19/04/2023 13:07:42 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Collaborators](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [nvarchar](50) NOT NULL,
	[surname] [nvarchar](50) NOT NULL,
	[email] [nvarchar](50) NOT NULL,
	[emailpersonal] [nvarchar](50) NULL,
	[emailpec] [nvarchar](50) NULL,
	[tel] [nvarchar](50) NULL,
	[cf] [nvarchar](50) NOT NULL,
	[docnumber] [nvarchar](50) NULL,
	[address] [text] NULL,
	[iban] [varchar](max) NULL,
	[note] [text] NULL,
 CONSTRAINT [PK_Collaborators] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Equipments]    Script Date: 19/04/2023 13:07:42 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Equipments](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[collaborator] [int] NULL,
	[name] [nvarchar](50) NOT NULL,
	[description] [text] NULL,
	[serialnumber] [nvarchar](50) NULL,
	[purchasedate] [datetime] NULL,
	[type] [int] NOT NULL,
	[price] [float] NULL,
	[invoice] [nvarchar](50) NULL,
	[note] [text] NULL,
 CONSTRAINT [PK_Equipments] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Permits]    Script Date: 19/04/2023 13:07:42 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Permits](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[collaborator] [int] NULL,
	[from] [datetime] NOT NULL,
	[to] [datetime] NOT NULL,
	[allday] [bit] NULL,
	[timestamp] [timestamp] NOT NULL,
	[note] [text] NULL,
	[torecover] [bit] NULL,
	[type] [nvarchar](50) NOT NULL,
 CONSTRAINT [PK_Permits] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[Equipments]  WITH CHECK ADD  CONSTRAINT [FK_Equipments_Collaborators] FOREIGN KEY([collaborator])
REFERENCES [dbo].[Collaborators] ([id])
GO
ALTER TABLE [dbo].[Equipments] CHECK CONSTRAINT [FK_Equipments_Collaborators]
GO
ALTER TABLE [dbo].[Permits]  WITH CHECK ADD  CONSTRAINT [FK_Permits_Collaborators] FOREIGN KEY([collaborator])
REFERENCES [dbo].[Collaborators] ([id])
GO
ALTER TABLE [dbo].[Permits] CHECK CONSTRAINT [FK_Permits_Collaborators]
GO
USE [master]
GO
ALTER DATABASE [alkimia] SET  READ_WRITE 
GO