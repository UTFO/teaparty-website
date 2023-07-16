import AWS from "aws-sdk"

async function uploadFile(file) {
    // S3 Bucket Name
    const S3_BUCKET = process.env.REACT_APP_S3_BUCKET_NAME;

    // S3 Region
    const REGION = process.env.REACT_APP_S3_REGION;

    // S3 Credentials
    const creds = {
      accessKeyId: process.env.REACT_APP_S3_KEY_ID,
      secretAccessKey: process.env.REACT_APP_S3_SECRET_ACCESS_KEY,
    };

    const s3 = new AWS.S3({
      params: { Bucket: S3_BUCKET },
      region: REGION,
      credentials: creds,
    });

    // Files Parameters
    const params = {
      Bucket: S3_BUCKET,
      Key: file.name,
      Body: file,
    };

    var upload = s3
      .putObject(params)
      .on("httpUploadProgress", (evt) => {
        // File uploading progress
        console.log(
          "Uploading " + parseInt((evt.loaded * 100) / evt.total) + "%"
        );
      })
      .promise();

    const {err, data} = upload
    if (err) console.log(err)
    const returnUrl = `https://tea-party-images.s3.ca-central-1.amazonaws.com/${file.name} `
    return returnUrl
  };


export { uploadFile }