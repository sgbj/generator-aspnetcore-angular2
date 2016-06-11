using Microsoft.AspNetCore.Mvc;

namespace <%= safeName %>.Api
{
    [Route("api/[controller]")]
    public class CharactersController : Controller
    {
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(new[] {
                "Gollum",
                "Gandalf",
                "Legolas",
                "Aragorn",
                "Frodo Baggins",
                "Bilbo Baggins",
                "Saruman",
                "Gimli",
                "Galadriel"
            });
        }
    }
}
