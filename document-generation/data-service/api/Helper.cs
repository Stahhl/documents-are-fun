public static class Helper
{
    public static void MapEndpoints(WebApplication app)
    {
        app.MapGet("/hello", () => "World!");
    }
}