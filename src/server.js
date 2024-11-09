const Hapi = require("@hapi/hapi");
const routes = require("./routes"); // Mengimpor konfigurasi routes

const init = async () => {
  // Membuat instance server
  const server = Hapi.server({
    port: 5000,
    host: process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  // Menambahkan konfigurasi route ke dalam server
  server.route(routes); // Menggunakan route yang sudah didefinisikan

  // Memulai server
  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`); // Menampilkan URI server setelah server berjalan
};

init(); // Memanggil fungsi init untuk menjalankan server
