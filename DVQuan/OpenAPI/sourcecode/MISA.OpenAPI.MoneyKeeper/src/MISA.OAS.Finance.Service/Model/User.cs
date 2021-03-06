/* 
 * UserApi
 *
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 * Generated by: https://github.com/openapitools/openapi-generator.git
 */


using System;
using System.Linq;
using System.IO;
using System.Text;
using System.Text.RegularExpressions;
using System.Collections;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Runtime.Serialization;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using System.ComponentModel.DataAnnotations;
using OpenAPIDateConverter = MISA.OAS.Finance.Service.Client.OpenAPIDateConverter;

namespace MISA.OAS.Finance.Service.Model
{
    /// <summary>
    /// User
    /// </summary>
    [DataContract]
    public partial class User :  IEquatable<User>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="User" /> class.
        /// </summary>
        /// <param name="userId">mã người dùng.</param>
        /// <param name="userName">tên người dùng.</param>
        /// <param name="userAddress">địa chỉ người dùng.</param>
        /// <param name="userDateOfBirth">ngày sinh.</param>
        public User(Guid userId = default(Guid), string userName = default(string), string userAddress = default(string), DateTime userDateOfBirth = default(DateTime))
        {
            this.UserId = userId;
            this.UserName = userName;
            this.UserAddress = userAddress;
            this.UserDateOfBirth = userDateOfBirth;
        }
        
        /// <summary>
        /// mã người dùng
        /// </summary>
        /// <value>mã người dùng</value>
        [DataMember(Name="UserId", EmitDefaultValue=false)]
        public Guid UserId { get; set; }

        /// <summary>
        /// tên người dùng
        /// </summary>
        /// <value>tên người dùng</value>
        [DataMember(Name="UserName", EmitDefaultValue=false)]
        public string UserName { get; set; }

        /// <summary>
        /// địa chỉ người dùng
        /// </summary>
        /// <value>địa chỉ người dùng</value>
        [DataMember(Name="UserAddress", EmitDefaultValue=false)]
        public string UserAddress { get; set; }

        /// <summary>
        /// ngày sinh
        /// </summary>
        /// <value>ngày sinh</value>
        [DataMember(Name="UserDateOfBirth", EmitDefaultValue=false)]
        [JsonConverter(typeof(OpenAPIDateConverter))]
        public DateTime UserDateOfBirth { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class User {\n");
            sb.Append("  UserId: ").Append(UserId).Append("\n");
            sb.Append("  UserName: ").Append(UserName).Append("\n");
            sb.Append("  UserAddress: ").Append(UserAddress).Append("\n");
            sb.Append("  UserDateOfBirth: ").Append(UserDateOfBirth).Append("\n");
            sb.Append("}\n");
            return sb.ToString();
        }
  
        /// <summary>
        /// Returns the JSON string presentation of the object
        /// </summary>
        /// <returns>JSON string presentation of the object</returns>
        public virtual string ToJson()
        {
            return JsonConvert.SerializeObject(this, Formatting.Indented);
        }

        /// <summary>
        /// Returns true if objects are equal
        /// </summary>
        /// <param name="input">Object to be compared</param>
        /// <returns>Boolean</returns>
        public override bool Equals(object input)
        {
            return this.Equals(input as User);
        }

        /// <summary>
        /// Returns true if User instances are equal
        /// </summary>
        /// <param name="input">Instance of User to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(User input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.UserId == input.UserId ||
                    (this.UserId != null &&
                    this.UserId.Equals(input.UserId))
                ) && 
                (
                    this.UserName == input.UserName ||
                    (this.UserName != null &&
                    this.UserName.Equals(input.UserName))
                ) && 
                (
                    this.UserAddress == input.UserAddress ||
                    (this.UserAddress != null &&
                    this.UserAddress.Equals(input.UserAddress))
                ) && 
                (
                    this.UserDateOfBirth == input.UserDateOfBirth ||
                    (this.UserDateOfBirth != null &&
                    this.UserDateOfBirth.Equals(input.UserDateOfBirth))
                );
        }

        /// <summary>
        /// Gets the hash code
        /// </summary>
        /// <returns>Hash code</returns>
        public override int GetHashCode()
        {
            unchecked // Overflow is fine, just wrap
            {
                int hashCode = 41;
                if (this.UserId != null)
                    hashCode = hashCode * 59 + this.UserId.GetHashCode();
                if (this.UserName != null)
                    hashCode = hashCode * 59 + this.UserName.GetHashCode();
                if (this.UserAddress != null)
                    hashCode = hashCode * 59 + this.UserAddress.GetHashCode();
                if (this.UserDateOfBirth != null)
                    hashCode = hashCode * 59 + this.UserDateOfBirth.GetHashCode();
                return hashCode;
            }
        }

        /// <summary>
        /// To validate all properties of the instance
        /// </summary>
        /// <param name="validationContext">Validation context</param>
        /// <returns>Validation Result</returns>
        IEnumerable<System.ComponentModel.DataAnnotations.ValidationResult> IValidatableObject.Validate(ValidationContext validationContext)
        {
            yield break;
        }
    }

}
