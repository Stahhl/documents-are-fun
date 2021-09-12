# Set-ExecutionPolicy -ExecutionPolicy Unrestricted -Scope process -Force

$tool = "C:\Program Files (x86)\Microsoft SDKs\Windows\v7.0A\bin\xsd.exe"
$files = "C:\Utveckling\documents-are-fun\document-generation\data-service\api\Models"

Get-ChildItem -Path $files -Filter *.xsd -Recurse -File | ForEach-Object {
    Invoke-Expression "& ""${tool}""  $($_.FullName) /c -outputdir:${files}"
}