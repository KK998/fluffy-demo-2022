namespace oms.Entities
{
  public class OrderItem
  {
    public Guid orderItemId { get; init; }
    public DateTime createdDate { get; init; }
    public Guid? orderId { get; set; }
    public string? gtin { get; init; }
    public Int64? quantity { get; init; }
    public string? serialNumberType { get; init; }
    public List<string>? serialNumbers { get; init; }
    public string? templateId { get; init; }
  }
}
