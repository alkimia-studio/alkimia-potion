using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Logging;
using Microsoft.OpenApi.Models;


namespace WebAPI
{
    public class Startup
    {
        private IWebHostEnvironment? environment;

        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors(); // Make sure you call this previous to AddMvc
            _ = services.AddMvc(options => options.EnableEndpointRouting = false)
                .SetCompatibilityVersion(CompatibilityVersion.Version_3_0)
                .AddDataAnnotationsLocalization()
                .ConfigureApiBehaviorOptions(options =>
                {
                    options.InvalidModelStateResponseFactory = context =>
                    {
                        if (this.environment.IsStaging() || this.environment.IsDevelopment())
                        {
                            return new BadRequestObjectResult(context.ModelState);
                        }
                        else
                        {
                            return new BadRequestResult();
                        }
                    };
                });
            services.AddMemoryCache();

            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "Alkimia API", Version = "v1" });
                c.CustomSchemaIds(GetSchemaIdForSwagger);
            });
        }

        private string GetSchemaIdForSwagger(Type t)
        {
            return t.Name;
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            this.environment = env;
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                IdentityModelEventSource.ShowPII = true;
            }

            app.UseRouting();

            // Make sure you call this before calling app.UseMvc()
            app.UseCors(
                options => options.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader()
            );

            // Uncomment the following in order to enable antiforgery tokens.
            // Currently the authentication is based on the X-Token heander so it is not subject to CSRF attacks.
            // In case there is the need to change the autentication so that relies on a cookie, the antiforgery token
            // must be implemented.
            //app.UseMiddleware<AntiforgeryTokenMiddleware>(); 

            app.UseAuthentication();
            app.UseAuthorization();
            app.UseHttpsRedirection();

            app.UseMvc();

            var version = "." + Configuration["AppVersion"];
            app.UseSwagger();
            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "Alkimia API V1" + version);
            });
        }
    }
}
