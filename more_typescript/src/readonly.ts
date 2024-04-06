interface Config {
  readonly jwtSecret: string;
  readonly routeUser: string;
}

const config: Readonly<Config> = {
  jwtSecret: "superSecret",
  routeUser: "api/v1/user",
};

// config.jwtSecret = "newsecret"
// cannot assign karena readonly
// bisa digunakan untuk setting jwt, route yang diletakkan di .env
