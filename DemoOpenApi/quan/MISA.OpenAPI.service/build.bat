:: Generated by: https://openapi-generator.tech
::

@echo off

dotnet restore src\MISA.OAS.Finance.Service
dotnet build src\MISA.OAS.Finance.Service
echo Now, run the following to start the project: dotnet run -p src\MISA.OAS.Finance.Service\MISA.OAS.Finance.Service.csproj --launch-profile web.
echo.