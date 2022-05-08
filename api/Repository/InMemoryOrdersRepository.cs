using oms.Entities;

namespace oms.Repository
{
  public class InMemoryOrdersRepository : IRepository<Order>
  {
    // Instead of a list here, we should fetch from a DB
    private readonly List<Order> orders = new()
      {
        new Order { orderId=new Guid(), omsId="RandomOmsId1", createdDate=DateTime.UtcNow }
      };

    public IEnumerable<Order> FindAll()
    {
      return this.orders;
    }

    public Order? FindById(Guid orderId)
    {
      return this.orders.Find(
          delegate (Order o)
          {
            return o.orderId == orderId;
          }
      );
    }

    public void Insert(Order o)
    {
      this.orders.Add(o);
    }
  }
}


