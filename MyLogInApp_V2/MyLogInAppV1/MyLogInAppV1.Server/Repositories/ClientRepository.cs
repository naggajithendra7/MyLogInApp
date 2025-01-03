using Microsoft.EntityFrameworkCore;

public class ClientRepository : IClientRepository
{
    private readonly ClientContext _context;

    public ClientRepository(ClientContext context)
    {
        _context = context;
    }

    public async Task<IEnumerable<Client>> GetAllAsync() => await _context.Clients.ToListAsync();

    public async Task<Client> GetByIdAsync(int id) => await _context.Clients.FindAsync(id);

    public async Task<Client> AddAsync(Client client)
    {
        _context.Clients.Add(client);
        await _context.SaveChangesAsync();
        return client;
    }

    public async Task DeleteAsync(int id)
    {
        var client = await _context.Clients.FindAsync(id);
        if (client != null)
        {
            _context.Clients.Remove(client);
            await _context.SaveChangesAsync();
        }
    }
}