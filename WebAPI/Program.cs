using Microsoft.AspNetCore;
using Microsoft.EntityFrameworkCore;
using WebAPI;
using WebAPI.Models;

public class Program
{
    public static void Main(string[] args)
    {
        CreateWebHostBuilder(args).Build().Run();
    }

    public static IWebHostBuilder CreateWebHostBuilder(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
            .ConfigureServices((hostContext, services) =>
            {
 
                _ = services.AddDbContext<AlkimiaContext>(options =>
                    options.UseSqlite(hostContext.Configuration.GetConnectionString("DefaultConnection").Replace("{AppDir}", AppDomain.CurrentDomain.BaseDirectory)));
                services.AddControllers();

            })
            .UseStartup<Startup>()
            .ConfigureLogging(logging =>
            {
                logging.AddDebug();
            });
}
