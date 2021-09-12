using Xunit;
using System.Xml.Serialization;
using Xunit.Abstractions;
using System.IO;

namespace test
{
    public class Test
    {
        [Fact]
        public void Xml()
        {
            //Given
            var dataAccess = new DataAccess();
            var xmlHelper = new XmlHelper();
            var myObject = dataAccess.GetCaseById("A1234");

            // Serialize object to xml
            string output = Path.Combine(@"C:\Utveckling\documents-are-fun\document-generation\data-service\test\output", "output.xml");
            string serialization = xmlHelper.Serialize(myObject);

            File.WriteAllText(output, serialization);

            var deserialization = xmlHelper.Deserialize<CaseBackbone>(serialization);

            //Then
            Assert.Equal(myObject.CaseId, deserialization.CaseId);
        }
    }
}

