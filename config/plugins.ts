export default ({ env }) => ({
  upload: {
    config: {
      provider: "aws-s3",
      providerOptions: {
        baseUrl: null,
        s3Options: {
          credentials: {
            accessKeyId: env("MINIO_ROOT_USER"),
            secretAccessKey: env("MINIO_ROOT_PASSWORD"),
          },
          forcePathStyle: true,
          endpoint: env("MINIO_PRIVATE_ENDPOINT"),
          region: env("MINIO_REGION"),
          params: {
            Bucket: env("MINIO_BUCKET"),
            ACL: process.env.ACL || "private",
            signedUrlExpires: process.env.SIGNED_URL_EXPIRES || 15 * 60,
          },
        },
      },
    },
  },
});
