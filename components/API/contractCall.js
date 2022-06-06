import { ethers } from "ethers";
import contractData from "../../contractData.json";
import compiledContract from "../../compiledContract.json";

//Provider
const provider = new ethers.providers.JsonRpcProvider("");
//Signer
const wallet = new ethers.Wallet(
  "e23b2d073aa65b8a57d98525ed241c4767afdd5a4048ec064df4a04dff43730c",
  provider
);
//Conrtact
const myContract = new ethers.Contract(
  contractData["mainContract"],
  compiledContract["abi"],
  provider
);

const mySignerContract = myContract.connect(wallet);

class ContractCall {
  constructor(inputParams) {
    this.inputParams = inputParams;
    this.responseObject = {
      addEmployee: "",
      modifyPrimaryData: "",
      personalDetails: "",
      secondaryDetails: "",
      joiningDetails: "",
      bankDetails: "",
      workingDetails: "",
      docsDetails: "",
    };
  }
  async addEmployee() {
    let response = await mySignerContract
      .addEmployee(
        this.inputParams["Full Name"],
        this.inputParams["Date of Birth"],
        this.inputParams["Father's Name"],
        this.inputParams["Aadhar Number"]
      )
      .then((res) => {
        this.responseObject["addEmployee"] = "Success";
        return res;
      })
      .catch((err) => {
        this.responseObject["addEmployee"] = err;
        return "Server error";
      });
    return response;
  }
  async modifyPrimaryData() {
    let response = await mySignerContract
      .addEmployee(
        this.inputParams["Aadhar Number"],
        this.inputParams["Full Name"],
        this.inputParams["Date of Birth"],
        this.inputParams["Father's Name"]
      )
      .then((res) => {
        this.responseObject["modifyPrimaryData"] = "Success";
        return res;
      })
      .catch((err) => {
        this.responseObject["modifyPrimaryData"] = err;
        return "Server error";
      });
    return response;
  }
  async personalDetails() {
    let response = await mySignerContract
      .personalDetails(
        this.inputParams["Aadhar Number"],
        this.inputParams["Address"],
        this.inputParams["Mobile Number"],
        this.inputParams["Gender"],
        this.inputParams["Upload Photo"],
        this.inputParams["Upload Aadhar Card"]
      )
      .then((res) => {
        this.responseObject["personalDetails"] = "Success";
        return res;
      })
      .catch((err) => {
        this.responseObject["personalDetails"] = err;
        return "Server error";
      });
    return response;
  }
  async secondaryDetails() {
    let response = await mySignerContract
      .secondaryDetails(
        this.inputParams["Aadhar Number"],
        this.inputParams["Qualification"],
        this.inputParams["Railway ID"],
        this.inputParams["Category"]
      )
      .then((res) => {
        this.responseObject["secondaryDetails"] = "Success";
        return res;
      })
      .catch((err) => {
        this.responseObject["secondaryDetails"] = err;
        return "Server error";
      });
    return response;
  }
  async joiningDetails() {
    let response = await mySignerContract
      .joiningDetails(
        this.inputParams["Aadhar Number"],
        this.inputParams["Date of Joining"],
        this.inputParams["Designation"],
        this.inputParams["Offered Salary"],
        this.inputParams["HRA"]
      )
      .then((res) => {
        this.responseObject["joiningDetails"] = "Success";
        return res;
      })
      .catch((err) => {
        this.responseObject["joiningDetails"] = err;
        return "Server error";
      });
    return response;
  }
  async bankDetails() {
    let response = await mySignerContract
      .bankDetails(
        this.inputParams["Aadhar Number"],
        this.inputParams["Bank A/C Number"],
        this.inputParams["Bank Name"],
        this.inputParams["Enter IFSC Code"],
        this.inputParams["Upload Soft Copy of Passbook"]
      )
      .then((res) => {
        this.responseObject["bankDetails"] = "Success";
        return res;
      })
      .catch((err) => {
        this.responseObject["bankDetails"] = err;
        return "Server error";
      });
    return response;
  }
  async workingDetails() {
    let response = await mySignerContract
      .workingDetails(
        this.inputParams["Aadhar Number"],
        this.inputParams["Site Name"],
        this.inputParams["Depot"],
        this.inputParams["Work Status"]
      )
      .then((res) => {
        this.responseObject["workingDetails"] = "Success";
        return res;
      })
      .catch((err) => {
        this.responseObject["workingDetails"] = err;
        return "Server error";
      });
    return response;
  }
  async docsDetails() {
    let response = await mySignerContract
      .docsDetails(
        this.inputParams["Aadhar Number"],
        this.inputParams["Form 11"],
        this.inputParams["Form 2"],
        this.inputParams["Form1 Under E5"],
        this.inputParams["Form of nomination for unpaid wages"]
      )
      .then((res) => {
        this.responseObject["docsDetails"] = "Success";
        return res;
      })
      .catch((err) => {
        this.responseObject["docsDetails"] = err;
        return "Server error";
      });
    return response;
  }

  async checkAadhar() {
    let response = await mySignerContract
      .employeeAadharToId(this.inputParams["Aadhar Number"])
      .then((res) => {
        this.responseObject["checkAadhar"] = "Success";
        return res;
      })
      .catch((err) => {
        this.responseObject["checkAadhar"] = err;
        return "Server error";
      });
    return response;
  }

  async submitData() {
    await this.addEmployee();
    await this.personalDetails();
    await this.personalDetails();
    await this.secondaryDetails();
    await this.joiningDetails();
    await this.bankDetails();
    await this.workingDetails();
    await this.docsDetails();
    return this.responseObject;
  }
}

export default ContractCall;
