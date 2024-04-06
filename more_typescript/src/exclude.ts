type keyButton = "atas" | "bawah" | "kanan" | "kiri";

type keyButton2D = Exclude<keyButton, "atas" | "bawah">;

const handle = (event: keyButton2D) => {
  console.log(`arahmu ke ${event}`);
};

handle("kanan");
