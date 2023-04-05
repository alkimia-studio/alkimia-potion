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

    public virtual DbSet<Permit> Permits { get; set; }

//    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
//#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
//        => optionsBuilder.UseSqlServer("Server=localhost\\SQLEXPRESS02;Database=alkimia;Trusted_Connection=True;TrustServerCertificate=True;");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Collaborator>(entity =>
        {
            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Address)
                .HasColumnType("text")
                .HasColumnName("address");
            entity.Property(e => e.Cf)
                .HasMaxLength(50)
                .HasColumnName("cf");
            entity.Property(e => e.Docnumber)
                .HasMaxLength(50)
                .HasColumnName("docnumber");
            entity.Property(e => e.Email)
                .HasMaxLength(50)
                .HasColumnName("email");
            entity.Property(e => e.Emailpec)
                .HasMaxLength(50)
                .HasColumnName("emailpec");
            entity.Property(e => e.Emailpersonal)
                .HasMaxLength(50)
                .HasColumnName("emailpersonal");
            entity.Property(e => e.Iban)
                .IsUnicode(false)
                .HasColumnName("iban");
            entity.Property(e => e.Name)
                .HasMaxLength(50)
                .HasColumnName("name");
            entity.Property(e => e.Note)
                .HasColumnType("text")
                .HasColumnName("note");
            entity.Property(e => e.Surname)
                .HasMaxLength(50)
                .HasColumnName("surname");
            entity.Property(e => e.Tel)
                .HasMaxLength(50)
                .HasColumnName("tel");
        });

        modelBuilder.Entity<Permit>(entity =>
        {
            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Allday).HasColumnName("allday");
            entity.Property(e => e.Collaborator).HasColumnName("collaborator");
            entity.Property(e => e.From)
                .HasColumnType("datetime")
                .HasColumnName("from");
            entity.Property(e => e.Note)
                .HasColumnType("text")
                .HasColumnName("note");
            entity.Property(e => e.Timestamp)
                .IsRowVersion()
                .IsConcurrencyToken()
                .HasColumnName("timestamp");
            entity.Property(e => e.To)
                .HasColumnType("datetime")
                .HasColumnName("to");
            entity.Property(e => e.Torecover).HasColumnName("torecover");
            entity.Property(e => e.Type)
                .HasMaxLength(50)
                .HasColumnName("type");

            entity.HasOne(d => d.CollaboratorNavigation).WithMany(p => p.Permits)
                .HasForeignKey(d => d.Collaborator)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_Permits_Collaborators");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
