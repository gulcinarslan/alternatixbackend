module.exports = ({ env }) => ({
  upload: {
    provider: 'aws-s3',
    providerOptions: {
      accessKeyId: env('AKIAJ2BRX5EA62DSFPFQ'),
      secretAccessKey: env('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'),
      region: 'eu-west-2',
      params: {
        Bucket: 'alternatiknext',
      },
    },
  },
});