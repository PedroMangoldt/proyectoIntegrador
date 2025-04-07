const data = {
    usuario: {
      email: 'juanperez@ejemplito.com',
      usuario: 'juanperez',
      contrasenia: 'supersegura123',
      fechaNacimiento: '1995-06-15',
      documento: 40123456,
      fotoPerfil: '/images/users/img-home-banner.jpg'
    },
  
    productos: [
      {
        id: 1,
        nombre: 'Cafetera Moulinex',
        descripcion: 'Cafetera eléctrica con filtro permanente y diseño elegante.',
        imagen: '/images/products/img-cafetera-moulinex.jpg',
        comentarios: [
          {
            nombreUsuario: 'maria123',
            texto: '¡Hace el café rapidísimo!',
            imagenPerfil: '/images/users/default-image.png'
          },
          {
            nombreUsuario: 'coffeeLover',
            texto: 'Me encanta su diseño.',
            imagenPerfil: '/images/users/default-image.png'
          }
        ]
      },
      {
        id: 2,
        nombre: 'MacBook Pro 2019',
        descripcion: 'Notebook Apple con chip Intel i7 y 16GB de RAM.',
        imagen: '/images/products/img-macbook-pro-2019.jpg',
        comentarios: [
          {
            nombreUsuario: 'techie88',
            texto: 'Excelente para edición de video.',
            imagenPerfil: '/images/users/default-image.png'
          }
        ]
      },
      {
        id: 3,
        nombre: 'Samsung Galaxy S10',
        descripcion: 'Smartphone Android con triple cámara y pantalla AMOLED.',
        imagen: '/images/products/img-samsung-galaxy-s10.jpg',
        comentarios: [
          {
            nombreUsuario: 'ana_rock',
            texto: 'El modo nocturno es genial.',
            imagenPerfil: '/images/users/default-image.png'
          }
        ]
      },
      {
        id: 4,
        nombre: 'Smart TV Samsung 55"',
        descripcion: 'Televisor 4K UHD con acceso a Netflix, YouTube y más.',
        imagen: '/images/products/img-tv-samsung-smart.jpg',
        comentarios: []
      },
      {
        id: 5,
        nombre: 'Auriculares Sony WH-1000XM4',
        descripcion: 'Auriculares con cancelación activa de ruido y Bluetooth.',
        imagen: '/images/products/default-image.png',
        comentarios: [
          {
            nombreUsuario: 'sonicman',
            texto: 'El sonido es increíble.',
            imagenPerfil: '/images/users/default-image.png'
          }
        ]
      },
      {
        id: 6,
        nombre: 'Teclado mecánico Redragon',
        descripcion: 'Teclado con switches rojos y retroiluminación RGB.',
        imagen: '/images/products/default-image.png',
        comentarios: []
      },
      {
        id: 7,
        nombre: 'Monitor LG 29" UltraWide',
        descripcion: 'Pantalla ultra panorámica para multitarea y gaming.',
        imagen: '/images/products/default-image.png',
        comentarios: []
      },
      {
        id: 8,
        nombre: 'Parlante JBL Flip 5',
        descripcion: 'Parlante Bluetooth resistente al agua con gran sonido.',
        imagen: '/images/products/default-image.png',
        comentarios: [
          {
            nombreUsuario: 'musicfan',
            texto: 'Ideal para la playa.',
            imagenPerfil: '/images/users/default-image.png'
          }
        ]
      },
      {
        id: 9,
        nombre: 'Impresora Epson EcoTank',
        descripcion: 'Impresora a tinta continua económica y fácil de recargar.',
        imagen: '/images/products/default-image.png',
        comentarios: []
      },
      {
        id: 10,
        nombre: 'Reloj inteligente Xiaomi Mi Band 6',
        descripcion: 'Monitor de actividad con pantalla AMOLED y gran autonomía.',
        imagen: '/images/products/default-image.png',
        comentarios: [
          {
            nombreUsuario: 'lucas_fit',
            texto: 'Lo uso todos los días para correr.',
            imagenPerfil: '/images/users/default-image.png'
          }
        ]
      }
    ]
  };
  
  module.exports = data;
  