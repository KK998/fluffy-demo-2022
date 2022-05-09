namespace oms.Repositories
{
  public interface IRepository<T>
  {
    T? FindById(Guid values);
    IEnumerable<T> FindAll();
    void Insert(T entity);
    // void Update(T entity);
    // void Delete(T entity);
  }
}

