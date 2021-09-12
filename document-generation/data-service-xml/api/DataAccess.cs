public class DataAccess
{
    public DataAccess()
    {
        _cases = new List<CaseBackbone>();

        _cases.Add(new CaseBackbone
        {
            CaseId = "A1234",
            CaseType = "PAYM",
            CaseDescription = "Payment",
            CaseHandlers = new CaseBackboneCaseHandlers[]
            {
                    new CaseBackboneCaseHandlers{ HandlerId = "BOHAND", FirstName = "Bob", LastName = "Handlerson", Phone = "555 011 02", Email = "bob.test@company.com"}
            },
            CaseUsers = new CaseBackboneCaseUsers[]
            {
                    new CaseBackboneCaseUsers{UserName = "leetKid69", FirstName = "Timmy", LastName =  "McTest", Phone = "", Email = "leetkid69@badass.com"},
                    new CaseBackboneCaseUsers{UserName = "HMTQ", FirstName = "Elizabeth II", LastName = "Windsor", Phone = "1", Email = "queen@gov.co.uk"}
            }
        });
    }

    private List<CaseBackbone> _cases;

    public List<CaseBackbone> GetAllCases()
    {
        return _cases;
    }
    public CaseBackbone GetCaseById(string id)
    {
        return _cases.FirstOrDefault(x => x.CaseId == id) ?? new CaseBackbone();
    }
}