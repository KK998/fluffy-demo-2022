using oms.Entities;

namespace oms.Repository
{
  public class InMemoryOrderItemsRepository : IRepository<OrderItem>
  {
      // Instead of a list here, we should fetch from a DB
    private readonly List<OrderItem> orderItems = new()
      {
        new OrderItem { orderItemId=new Guid(), createdDate=DateTime.UtcNow, quantity=1, gtin="Random" },
      };

    public IEnumerable<OrderItem> FindAll()
    {
      return this.orderItems;
    }

    public OrderItem? FindById(Guid orderItemId)
    {
      return this.orderItems.Find(
          delegate (OrderItem oi)
          {
            return oi.orderItemId == orderItemId;
          }
      );
    }

    public void Insert(OrderItem io)
    {
      this.orderItems.Add(io);
    }
  }
}


