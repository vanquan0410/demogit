#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/core/aspnet:3.1-buster-slim AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/core/sdk:3.1-buster AS build
WORKDIR /src
COPY ["MISA.cukCuk/MISA.cukCuk.csproj", "MISA.cukCuk/"]
RUN dotnet restore "MISA.cukCuk/MISA.cukCuk.csproj"
COPY . .
WORKDIR "/src/MISA.cukCuk"
RUN dotnet build "MISA.cukCuk.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "MISA.cukCuk.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "MISA.cukCuk.dll"]