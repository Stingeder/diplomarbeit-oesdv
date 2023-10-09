using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.AspNetCore.Hosting.Server;
using System.Collections.Concurrent;
using System.Collections.Generic;

namespace backend.Database
{
    public class DataContext : IdentityDbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            base.OnConfiguring(optionsBuilder);
            optionsBuilder.UseNpgsql($"User ID = postgres; Password = postgres; Server = localhost; Port = 5432; Database = postgres; Integrated Security = true; Pooling = true; ");
        }

        public DbSet<Meal> Meals => Set<Meal>();

        public DbSet<OrderDate> OrderDate => Set<OrderDate>();

        public DbSet<OrderItem> OrderItem => Set<OrderItem>();
    }
}