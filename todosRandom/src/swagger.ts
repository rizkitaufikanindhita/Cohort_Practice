export const swaggerDocument = {
  swagger: "2.0",
  info: {
    title: "Todo API",
    version: "1.0.0",
    description: "API untuk mendapatkan daftar tugas acak",
  },
  paths: {
    "/": {
      get: {
        summary: "Get random list of todo tasks",
        description: "Mengembalikan daftar tugas acak",
        responses: {
          "200": {
            description: "Data fetched successfully",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    msg: {
                      type: "array",
                      items: {
                        $ref: "#/components/schemas/Todo",
                      },
                    },
                    data: {
                      type: "string",
                      example: "Data fetched successfully",
                    },
                    about: {
                      type: "string",
                      example: "Todo task random API",
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
  components: {
    schemas: {
      Todo: {
        type: "object",
        properties: {
          id: {
            type: "integer",
            description: "ID dari tugas",
          },
          title: {
            type: "string",
            description: "Judul dari tugas",
          },
          completed: {
            type: "boolean",
            description: "Status apakah tugas telah selesai",
          },
        },
        required: ["id", "title", "completed"],
      },
    },
  },
};
