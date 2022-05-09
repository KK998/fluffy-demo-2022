using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using oms.Entities;
using oms.Repositories;

namespace oms.Controllers
{
  [ApiController]
  [Route("[controller]")]

  public class OrdersController : ControllerBase
  {
    private readonly ILogger<OrdersController> _logger;
    public OrdersController(ILogger<OrdersController> logger)
    {
      _logger = logger;
    }

    [Authorize]
    [HttpGet(Name = "GetOrders")]
    public IEnumerable<Order> GetAll()
    {
      return new InMemoryOrdersRepository().FindAll();
    }

    [Authorize]
    [HttpGet(Name = "GetOrder")]
    public Order? Get(Guid orderId)
    {
      return new InMemoryOrdersRepository().FindById(orderId);
    }

    [Authorize]
    [HttpPost(Name = "AddOrder")]
    public void Add(Order o)
    {
      new InMemoryOrdersRepository().Insert(o);
    }

    [Authorize]
    [HttpPatch(Name = "PatchOrder")]
    public void Patch(Guid orderId, Order o)
    {

    }

    [Authorize]
    [HttpDelete(Name = "DeleteOrder")]
    public void Delete(Guid orderId)
    {

    }
  }
}

