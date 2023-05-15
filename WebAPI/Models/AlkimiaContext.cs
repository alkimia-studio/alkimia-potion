﻿using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace WebAPI.Models;

public partial class AlkimiaContext : DbContext
{
    public AlkimiaContext()
    {
    }

    public AlkimiaContext(DbContextOptions<AlkimiaContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Collaborator> Collaborators { get; set; }

    public virtual DbSet<Equipment> Equipments { get; set; }

    public virtual DbSet<EquipmentType> EquipmentTypes { get; set; }

    public virtual DbSet<Permit> Permits { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlite("DataSource=sqllite/Alkimia.db");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Collaborator>(entity =>
        {
            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Address)
                .HasColumnType("text(2147483647)")
                .HasColumnName("address");
            entity.Property(e => e.Cf)
                .HasColumnType("nvarchar(50)")
                .HasColumnName("cf");
            entity.Property(e => e.Docnumber)
                .HasColumnType("nvarchar(50)")
                .HasColumnName("docnumber");
            entity.Property(e => e.Email)
                .HasColumnType("nvarchar(50)")
                .HasColumnName("email");
            entity.Property(e => e.Emailpec)
                .HasColumnType("nvarchar(50)")
                .HasColumnName("emailpec");
            entity.Property(e => e.Emailpersonal)
                .HasColumnType("nvarchar(50)")
                .HasColumnName("emailpersonal");
            entity.Property(e => e.Iban)
                .HasColumnType("varchar")
                .HasColumnName("iban");
            entity.Property(e => e.Name)
                .HasColumnType("nvarchar(50)")
                .HasColumnName("name");
            entity.Property(e => e.Note)
                .HasColumnType("text(2147483647)")
                .HasColumnName("note");
            entity.Property(e => e.Surname)
                .HasColumnType("nvarchar(50)")
                .HasColumnName("surname");
            entity.Property(e => e.Tel)
                .HasColumnType("nvarchar(50)")
                .HasColumnName("tel");
        });

        modelBuilder.Entity<Equipment>(entity =>
        {
            entity.Property(e => e.Id)
                .ValueGeneratedNever()
                .HasColumnName("id");
            entity.Property(e => e.Collaborator).HasColumnName("collaborator");
            entity.Property(e => e.Description)
                .HasColumnType("text(2147483647)")
                .HasColumnName("description");
            entity.Property(e => e.Invoice)
                .HasColumnType("nvarchar(50)")
                .HasColumnName("invoice");
            entity.Property(e => e.Name)
                .HasColumnType("nvarchar(50)")
                .HasColumnName("name");
            entity.Property(e => e.Note)
                .HasColumnType("text(2147483647)")
                .HasColumnName("note");
            entity.Property(e => e.Price)
                .HasColumnType("float")
                .HasColumnName("price");
            entity.Property(e => e.Purchasedate)
                .HasColumnType("datetime")
                .HasColumnName("purchasedate");
            entity.Property(e => e.Serialnumber)
                .HasColumnType("nvarchar(50)")
                .HasColumnName("serialnumber");
            entity.Property(e => e.Type).HasColumnName("type");

            entity.HasOne(d => d.CollaboratorNavigation).WithMany(p => p.Equipment).HasForeignKey(d => d.Collaborator);

            entity.HasOne(d => d.TypeNavigation).WithMany(p => p.Equipment)
                .HasForeignKey(d => d.Type)
                .OnDelete(DeleteBehavior.ClientSetNull);
        });

        modelBuilder.Entity<EquipmentType>(entity =>
        {
            entity.ToTable("EquipmentType");

            entity.HasIndex(e => e.Id, "IX_EquipmentType_Id").IsUnique();

            entity.Property(e => e.Id).ValueGeneratedNever();
        });

        modelBuilder.Entity<Permit>(entity =>
        {
            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Allday)
                .HasColumnType("bit")
                .HasColumnName("allday");
            entity.Property(e => e.Collaborator).HasColumnName("collaborator");
            entity.Property(e => e.From)
                .HasColumnType("datetime")
                .HasColumnName("from");
            entity.Property(e => e.Note)
                .HasColumnType("text(2147483647)")
                .HasColumnName("note");
            entity.Property(e => e.Timestamp).HasColumnName("timestamp");
            entity.Property(e => e.To)
                .HasColumnType("datetime")
                .HasColumnName("to");
            entity.Property(e => e.Torecover)
                .HasColumnType("bit")
                .HasColumnName("torecover");
            entity.Property(e => e.Type)
                .HasColumnType("nvarchar(50)")
                .HasColumnName("type");

            entity.HasOne(d => d.CollaboratorNavigation).WithMany(p => p.Permits).HasForeignKey(d => d.Collaborator);
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
