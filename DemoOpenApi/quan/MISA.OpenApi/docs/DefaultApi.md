# MISA.OAS.OpenApi.SDK.Api.DefaultApi

All URIs are relative to *http://localhost:3000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**EmployeesDelete**](DefaultApi.md#employeesdelete) | **DELETE** /employees | xóa nhân viên
[**EmployeesPost**](DefaultApi.md#employeespost) | **POST** /employees | thêm nhân viên
[**EmployeesPut**](DefaultApi.md#employeesput) | **PUT** /employees | sửa nhân viên
[**GetEmployees**](DefaultApi.md#getemployees) | **GET** /employees | lấy danh sách nhân viên


<a name="employeesdelete"></a>
# **EmployeesDelete**
> ResponseResult EmployeesDelete (Guid userID)

xóa nhân viên

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using MISA.OAS.OpenApi.SDK.Api;
using MISA.OAS.OpenApi.SDK.Client;
using MISA.OAS.OpenApi.SDK.Model;

namespace Example
{
    public class EmployeesDeleteExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost:3000";
            var apiInstance = new DefaultApi(config);
            var userID = new Guid(); // Guid | ID người dùng

            try
            {
                // xóa nhân viên
                ResponseResult result = apiInstance.EmployeesDelete(userID);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling DefaultApi.EmployeesDelete: " + e.Message );
                Debug.Print("Status Code: "+ e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userID** | [**Guid**](Guid.md)| ID người dùng | 

### Return type

[**ResponseResult**](ResponseResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Xóa nhân viên. |  -  |
| **400** | Bad Request |  -  |
| **500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="employeespost"></a>
# **EmployeesPost**
> ResponseResult EmployeesPost (ExchangeRateObjectParam exchangeRateObjectParam = null)

thêm nhân viên

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using MISA.OAS.OpenApi.SDK.Api;
using MISA.OAS.OpenApi.SDK.Client;
using MISA.OAS.OpenApi.SDK.Model;

namespace Example
{
    public class EmployeesPostExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost:3000";
            var apiInstance = new DefaultApi(config);
            var exchangeRateObjectParam = new ExchangeRateObjectParam(); // ExchangeRateObjectParam |  (optional) 

            try
            {
                // thêm nhân viên
                ResponseResult result = apiInstance.EmployeesPost(exchangeRateObjectParam);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling DefaultApi.EmployeesPost: " + e.Message );
                Debug.Print("Status Code: "+ e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **exchangeRateObjectParam** | [**ExchangeRateObjectParam**](ExchangeRateObjectParam.md)|  | [optional] 

### Return type

[**ResponseResult**](ResponseResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | thêm thành công. |  -  |
| **400** | Bad Request |  -  |
| **500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="employeesput"></a>
# **EmployeesPut**
> ResponseResult EmployeesPut (Guid employeeId, ExchangeRateObjectParam exchangeRateObjectParam = null)

sửa nhân viên

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using MISA.OAS.OpenApi.SDK.Api;
using MISA.OAS.OpenApi.SDK.Client;
using MISA.OAS.OpenApi.SDK.Model;

namespace Example
{
    public class EmployeesPutExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost:3000";
            var apiInstance = new DefaultApi(config);
            var employeeId = new Guid(); // Guid | ID người dùng
            var exchangeRateObjectParam = new ExchangeRateObjectParam(); // ExchangeRateObjectParam |  (optional) 

            try
            {
                // sửa nhân viên
                ResponseResult result = apiInstance.EmployeesPut(employeeId, exchangeRateObjectParam);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling DefaultApi.EmployeesPut: " + e.Message );
                Debug.Print("Status Code: "+ e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employeeId** | [**Guid**](Guid.md)| ID người dùng | 
 **exchangeRateObjectParam** | [**ExchangeRateObjectParam**](ExchangeRateObjectParam.md)|  | [optional] 

### Return type

[**ResponseResult**](ResponseResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | cập nhật thành công. |  -  |
| **400** | Bad Request |  -  |
| **500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="getemployees"></a>
# **GetEmployees**
> List&lt;Employee&gt; GetEmployees ()

lấy danh sách nhân viên

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using MISA.OAS.OpenApi.SDK.Api;
using MISA.OAS.OpenApi.SDK.Client;
using MISA.OAS.OpenApi.SDK.Model;

namespace Example
{
    public class GetEmployeesExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost:3000";
            var apiInstance = new DefaultApi(config);

            try
            {
                // lấy danh sách nhân viên
                List<Employee> result = apiInstance.GetEmployees();
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling DefaultApi.GetEmployees: " + e.Message );
                Debug.Print("Status Code: "+ e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**List&lt;Employee&gt;**](Employee.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | trả dữu liệu thành công |  -  |
| **400** | Bad Request |  -  |
| **500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

