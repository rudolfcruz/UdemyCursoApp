using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Udemy.API.Data;
using Udemy.API.Dtos;
using Udemy.API.Models;

namespace Udemy.API.Controllers
{
    [Route("api/[controller]")]
	[ApiController]
	public class AuthController : ControllerBase
    {
		private readonly IAuthRepository _repository;

		public AuthController(IAuthRepository repository)
		{
			_repository = repository;
		}

		[HttpPost("register")]
		public async Task<IActionResult> Register(UserForRegisterDto userForRegisterDto)
		{
			//validate request
			//if (!ModelState.IsValid)
			//	return BadRequest(ModelState);

			userForRegisterDto.Username = userForRegisterDto.Username.ToLower();

			if (await _repository.UserExist(userForRegisterDto.Username))
				return BadRequest("Username Already exists");

			var userToCreate = new User {

				Username = userForRegisterDto.Username
			};

			var createdUser = await _repository.Register(userToCreate, userForRegisterDto.Password);
			return StatusCode(201);
		}
    }
}