using Microsoft.AspNet.Builder;
using Microsoft.AspNet.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json.Serialization;
using Swashbuckle.SwaggerGen;

namespace <%= safeName %>.Web
{
    public class Startup
    {

        public Startup()
        {
            var builder = new ConfigurationBuilder()
                .AddJsonFile("appsettings.json")
                .AddEnvironmentVariables();
            Configuration = builder.Build();
        }

        public IConfigurationRoot Configuration { get; set; }
        
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddLogging();

            services.AddMvc().AddJsonOptions(options =>
            {
                options.SerializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();
            }); ;

            services.AddSwaggerGen();

            services.ConfigureSwaggerDocument(options =>
            {
                options.SingleApiVersion(new Info
                {
                    Version = "v1",
                    Title = "<%= safeName %>"
                });
            });
        }
        
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            
            app.UseIISPlatformHandler();

            app.UseStaticFiles();

            if (env.IsDevelopment())
            {
                app.UseRuntimeInfoPage();
                app.UseDeveloperExceptionPage();
            }

            app.UseSwaggerGen();
            app.UseSwaggerUi();

            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller=Home}/{action=Index}/{id?}");

                routes.MapRoute(
                    name: "spa",
                    template: "{*path}",
                    defaults: new { controller = "Home", action = "Index" });
            });
        }

        public static void Main(string[] args) => WebApplication.Run<Startup>(args);
    }
}
