namespace oms.Entities
{
  public class Order
  {
    public Guid orderId { get; init; }
    public DateTime createdDate { get; init; }
    public DateTime? updatedDate { get; init; }
    public DateTime? deletedDate { get; init; }
    public string? omsId { get; init; }
    public int? factoryId { get; init; }
    public string? factoryName { get; init; }
    public string? factoryAddress { get; init; }
    public string? factoryCountry { get; init; }
    public string? productionLineId { get; init; }
    public string? productCode { get; init; }
    public string? productDescription { get; init; }
    public string? poNumber { get; init; }
    public string? expectedStartDate { get; init; }
    public List<OrderItem>? Products { get; set; }
  }
}