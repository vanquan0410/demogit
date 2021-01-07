import ServiceSign from "@/api/etax/signusbtoken.js";
import { sign } from "@/signnature/mintaxsign.js";

const SignMinTax = async (TaxCode, DataToSign ) => {  
      //Kiểm tra đơn vị đã đăng ký TVan chưa
      var Tvan = await ServiceSign.checkUsingTvan(TaxCode);
      if (Tvan.data.Data.TVanStatus == 1) {
        //Tạo đối tượng chứa thông tin tờ khai để gửi service check thông tin tờ khai có giống với đăng ký MTax không
        // const data = {
        //   DeclarationID: DataToSign.DeclarationID, // ID tờ khai
        //   GroupType: DataToSign.GroupType, // Loại tờ khai
        //   TaxCode: TaxCode, // Mã số thuế đơn vị
        //   PeriodType: 1, // loại kì kê khai
        // };
        const data = DataToSign
        //chú ý kiểm data object request validate report
        //const checkdeclar = await ServiceSign.validateReport({ DeclarationID : data, TaxCode : TaxCode});
        const checkdeclar = true;
        //CHÚ Ý
        //Sau xóa bỏ 1 === 1 do service hiện chưa đáp ứng mapping loại tờ khai từ client vs MTax
        if (
          // checkdeclar &&
          //   checkdeclar.data.inActive &&
          //   checkdeclar.data.isValidReport &&
          //   checkdeclar.data.validPeriodDate &&
          //   checkdeclar.data.isValidPeriodType ||
          //1 === 1
          checkdeclar
        ) {
          var Declarations = [];
          Declarations = [...data]
          sign.getCertificatesDeclaration(Declarations, TaxCode);
        } else {
          return true;
        }
      } else {
        return false;
    }
};

export { SignMinTax }