using Microsoft.AspNetCore.Mvc;

[Route("api/[controller]")]
[ApiController]
public class ClientsController : ControllerBase
{
    private readonly IClientRepository _repository;

    public ClientsController(IClientRepository repository)
    {
        _repository = repository;
    }

    [HttpGet]
    public async Task<IActionResult> GetClients() => Ok(await _repository.GetAllAsync());

    [HttpPost]
    public async Task<IActionResult> AddClient([FromBody] Client client)
    {
        var newClient = await _repository.AddAsync(client);
        return CreatedAtAction(nameof(GetClients), new { id = newClient.Id }, newClient);
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteClient(int id)
    {
        await _repository.DeleteAsync(id);
        return NoContent();
    }
}