const url = "https://api.pinata.cloud/pinning/pinFileToIPFS";
const pinataApiKey = "a4d3530ad71b3ccefc2d";
const pinataSecretApiKey =
  "258bcd80596c72b6a48dd0f3272791c2c611d3eb30287848cc1d3300c65eb53e";

const uploadFile = async (file) => {
  let formData = new FormData();
  formData.append("file", file);
  let response = await fetch(url, {
    method: "POST",
    body: formData,
    maxContentLength: Infinity,
    headers: {
      pinata_api_key: pinataApiKey,
      pinata_secret_api_key: pinataSecretApiKey,
    },
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      return "Server error";
    });
  return response;
};

export default uploadFile;
