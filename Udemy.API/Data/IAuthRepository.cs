﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Udemy.API.Models;

namespace Udemy.API.Data
{
	public interface IAuthRepository
	{
		Task<User> Register(User user, string password);
		Task<User> Login(string username, string password);
		Task<bool> UserExist(string username);
	}
}
