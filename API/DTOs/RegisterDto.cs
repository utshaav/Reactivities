using System.ComponentModel.DataAnnotations;

namespace API.DTOs
{
    public class RegisterDto
    {
        [Required]
        public string DisplayName { get; set; }
        [Required]
        [EmailAddress]
        public string Email { get; set; }
        [Required]
        [RegularExpression("(?=.*\\d)(?=.*[a-z])(?=.*[a-z]).{4,8}$", ErrorMessage ="Password is not complex enough")]
        public string Password { get; set; }
        [Required]
        public string UserName { get; set; }
    }
}