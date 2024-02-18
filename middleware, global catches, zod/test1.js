const express = require("express");
const app = express();
const port = 3000;

// zod itu untuk validasi(butuh schema, input, safeParse(untuk membandingkan))
// schema bisa di taruh difile lain lalu diimport
const { z } = require("zod");

// kalau pakai req.body harus pakai express.json()
// app.use(express.json());

// buat schema zod
const userSchema = z.object({
  nama: z.string().min(2),
  umur: z.number(),
  kelamin: z.literal("Male").or(z.literal("Female")),
  email: z.string().email().endsWith("@kemenkeu.go.id"),
});

const biodata = [
  {
    nama: "rizki",
    umur: 28,
  },
];
// konsep next
// dengan next akan berlanjut ke function 2
// tanpa next akan berhenti di function 1
// app.get(
//   "/",
//   (req, res, next) => {
//     console.log("function 1");
//     next();
//   },
//   (req, res) => {
//     console.log("function 2");
//   }
// );

// middleware
const userMiddleware = (req, res, next) => {
  const { role } = req.query;
  if (role == "admin") {
    next();
  } else {
    res.json({
      message: "data not found",
    });
  }
};

// opsi satu penggunaan middleware (satu satu pada app)
// app.get("/show", userMiddleware, (req, res) => {
//   res.json(biodata);
// });

// opsi dua penggunaan middleware
// app.use(userMiddleware);

// opsi ketiga penggunaan middleware (lebih dari satu middleware)
const middleware = [express.json(), userMiddleware];
app.use(...middleware);

app.get("/show", (req, res) => {
  res.json(biodata);
});

app.post("/post", (req, res) => {
  // return dari userData itu true atau false
  const userData = userSchema.safeParse(req.body); // cek kesesuaian
  if (userData.success) {
    res.json(userData.data);
  } else {
    res.json(userData.error.errors);
  }
});

// global catches
app.use((err, req, res, next) => {
  res.json({ message: `ada error karena ${err}`, status: 404 });
});

app.listen(port, () => {
  console.log(`server up in ${port}`);
});

// middleware tidak lebih dari fungsi (satpam)
// global catches itu untuk menangkap error secara global
// zod itu untuk validasi(butuh schema, input, safeParse(untuk membandingkan))

// const a = [1,2]
// const schema = z.array(z.number())

// const middleware = [express.json(), userMiddleware]
// app.use(...middleware)
