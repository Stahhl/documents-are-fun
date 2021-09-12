public static class ApiHelper
{
    public static void MapEndpoints(WebApplication app)
    {
        app.MapGet("cases", (DataAccess dataAcess) => dataAcess.GetAllCases());

        app.MapGet("cases/{id}", (string id, DataAccess dataAcess, XmlHelper xmlHelper) => 
        {
            var response = xmlHelper.Serialize(dataAcess.GetCaseById(id));

            return response;
        });
    }
}
