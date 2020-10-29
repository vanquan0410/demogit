# MISA.OAS.Finance.SDK.Api.UsersApi

All URIs are relative to *http://localhost:3000/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**UsersGet**](UsersApi.md#usersget) | **GET** /users | lấy danh sách tất cả người dùng


<a name="usersget"></a>
# **UsersGet**
> List&lt;User&gt; UsersGet ()

lấy danh sách tất cả người dùng

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using MISA.OAS.Finance.SDK.Api;
using MISA.OAS.Finance.SDK.Client;
using MISA.OAS.Finance.SDK.Model;

namespace Example
{
    public class UsersGetExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost:3000/v2";
            var apiInstance = new UsersApi(config);

            try
            {
                // lấy danh sách tất cả người dùng
                List<User> result = apiInstance.UsersGet();
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling UsersApi.UsersGet: " + e.Message );
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

[**List&lt;User&gt;**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | mảng danh sách người dùng |  -  |
| **400** | Bad request |  -  |
| **500** | Internal Server Error |  -  |
| **0** | unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

