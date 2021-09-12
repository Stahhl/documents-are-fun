using System.Xml.Serialization;

public class XmlHelper
{
    public string Serialize(CaseBackbone obj)
    {
        var mySerializer = new XmlSerializer(typeof(CaseBackbone));

        using (var myWriter = new StringWriter())
        {
            mySerializer.Serialize(myWriter, obj);
            return myWriter.ToString();
        }
    }

    public T? Deserialize<T>(string value)
    {
        var mySerializer = new XmlSerializer(typeof(T));

        using (var myWriter = new StringReader(value))
        {
            var obj = (T)mySerializer.Deserialize(myWriter);
            return obj;
        }
    }
}