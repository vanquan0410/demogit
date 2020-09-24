using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.NetworkInformation;
using System.Threading.Tasks;

namespace MISA.cukCuk.model
{
    public class CustomerModel
    {
        public CustomerModel(String customerCode,String customerName,String companyName,String code,String address,String phone,String date)
        {
            customerID = Guid.NewGuid();
            this.customerCode = customerCode;
            this.customerName = customerName;
            this.companyName = companyName;
            this.code = code;
            this.address = address;
            this.phone = phone;
            this.date = date;
        }
        public CustomerModel()
        {
            customerID = Guid.NewGuid();
        }
        public static List<CustomerModel> listCustomer = new List<CustomerModel>()
        {
            new CustomerModel("kh10","Tran thi a", "cong ty rickit", "1934","phố Trần Duy Hưng, Cầu giấy, Hà nội","0988788776","10/10/2010"),
            new CustomerModel("kh11", "Tran thi b", "cong ty rickit", "1294", "phố Trần Duy Hưng, Cầu giấy, Hà nội", "0987588776", "10/10/2010"),
            new CustomerModel("kh12", "Tran thi c", "cong ty rickit", "1244", "phố Trần Duy Hưng, Cầu giấy, Hà nội", "0969788776", "10/10/2010"),
            new CustomerModel("kh13", "Tran thi d", "cong ty rickit", "1934", "phố Trần Duy Hưng, Cầu giấy, Hà nội", "0988478776", "10/10/2010"),
            new CustomerModel("kh14", "Tran thi e", "cong ty rickit", "1734", "phố Trần Duy Hưng, Cầu giấy, Hà nội", "0988798776", "10/10/2010"),
            new CustomerModel("kh15", "Tran thi f", "cong ty rickit", "1294", "phố Trần Duy Hưng, Cầu giấy, Hà nội", "0988778776", "10/10/2010"),
            new CustomerModel("kh16", "Tran thi g", "cong ty rickit", "1734", "phố Trần Duy Hưng, Cầu giấy, Hà nội", "0988799776", "10/10/2010"),
        };
        public Guid? customerID { get; set; }
        public String customerCode { get; set; }
        public String customerName { get; set; }
        public String companyName { get; set; }
        public String code { get; set; }
        public string address { get; set; }
        public String phone { get; set; }
        public String date { get; set; }
    }
}
