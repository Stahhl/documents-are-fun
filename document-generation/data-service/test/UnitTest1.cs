using Xunit;
using System.Xml.Serialization;
using Xunit.Abstractions;
using System.IO;

namespace test
{
    public class FooTest
    {
        [Fact]
        public void Xml()
        {
            //Given
            var myObject = new CaseBackbone
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
            };

            // Serialize object to xml
            var mySerializer = new XmlSerializer(typeof(CaseBackbone));
            string output = Path.Combine(@"C:\Utveckling\documents-are-fun\document-generation\data-service\test\output", "output.xml");
            string result = "";

            using (var myWriter = new StringWriter())
            {
                mySerializer.Serialize(myWriter, myObject);
                result = myWriter.ToString();
            }

            File.WriteAllText(output, result);
            // using(var myFileStream = new FileStream("myFileName.xml", FileMode.Open))
            // {

            // }
            //Then
        }
    }
}

