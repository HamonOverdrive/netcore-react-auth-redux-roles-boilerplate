namespace WebApi.Dtos
{

    // the way dtos works is that this is the actually data and it will be converted onthe actual database of Users.cs
    public class UserDto
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public string Role { get; set; }
    }
}
