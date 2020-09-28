using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.NetworkInformation;
using System.Threading.Tasks;

namespace MISA.cukCuk.model
{
    public class CustomerModel
    {
        public CustomerModel(String customerCode, String customerName,String email, String companyName, Double code, String address, String phone, String date)
        {
            customerID = Guid.NewGuid();
            this.CustomerCode = customerCode;
            this.FullName = customerName;
            this.Email = email;
            this.CompanyName = companyName;
            this.Money = code;
            this.Address = address;
            this.Phone = phone;
            this.DateOfBirth = date;
        }
        public CustomerModel()
        {
            customerID = Guid.NewGuid();
            DateTime dt = new DateTime();
            dt.ToString("dd/MM/yyyy");
        }
        public static List<CustomerModel> listCustomer = new List<CustomerModel>()
        {
            new CustomerModel("kh10","Tran thi a", "abc@gmail.com", "Công ty cổ phần",10000000,"phố Trần Duy Hưng, Cầu giấy, Hà nội","0988788776", "10/10/2000"),
            new CustomerModel("kh11","Tran thi a", "abc@gmail.com", "Công ty cổ phần",10000000,"phố Trần Duy Hưng, Cầu giấy, Hà nội","0988788776", "10/10/2000"),
            new CustomerModel("kh12","Tran thi a", "abc@gmail.com", "Công ty cổ phần",10000000,"phố Trần Duy Hưng, Cầu giấy, Hà nội","0988788776","10/10/2000"),
            new CustomerModel("kh13","Tran thi a", "abc@gmail.com", "Công ty cổ phần",10000000,"phố Trần Duy Hưng, Cầu giấy, Hà nội","0988788776","10/10/2000"),
            new CustomerModel("kh14","Tran thi a", "abc@gmail.com", "Công ty cổ phần",10000000,"phố Trần Duy Hưng, Cầu giấy, Hà nội","0988788776","10/10/2000"),
            new CustomerModel("kh15","Tran thi a", "abc@gmail.com", "Công ty cổ phần",10000000,"phố Trần Duy Hưng, Cầu giấy, Hà nội","0988788776","10/10/2000"),

        };
        public Guid? customerID { get; set; }
        public String CustomerCode { get; set; }
        public String FullName { get; set; }
        public String Email { get; set; }
        public String CompanyName { get; set; }
        public double Money { get; set; }   
        public string Address { get; set; }
        public String Phone { get; set; }
        public String DateOfBirth { get; set; }
    }
}
