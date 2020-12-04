type Api = {
  baseUrl: string;
};

type Config = {
  api: Api;
};

const config: Config = {
  api: {
    baseUrl: "http://localhost:5000",
  },
};

export default config;
