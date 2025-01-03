using Microsoft.EntityFrameworkCore;

public class ClientContext : DbContext
{
    public DbSet<Client> Clients { get; set; }

    public ClientContext(DbContextOptions<ClientContext> options) : base(options) { }
}

public class Client
{
    public int Id { get; set; }
    public string Name { get; set; }
}