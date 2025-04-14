const data = {
  usuario: {
    email: 'juanperez@ejemplito.com',
    usuario: 'juanperez',
    contrasenia: 'supersegura123',
    fechaNacimiento: '1995-06-15',
    documento: 40123456,
    fotoPerfil: '/images/users/fotoPerfil.jpeg'
  },

  productos: [
    {
      id: 1,
      nombre: 'Mouse gamer RGB',
      descripcion: 'Mouse con luces LED, diseño ergonómico y múltiples botones para gaming.',
      imagen: '/images/products/mouseGamer.png',
      comentarios: [
        {
          nombreUsuario: 'maria123',
          texto: '¡Anda perfecto para jugar al Fortnite!',
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
      nombre: 'Mouse Pad extendido',
      descripcion: 'Alfombrilla para teclado y mouse con superficie antideslizante.',
      imagen: '/images/products/mousePadGame.png',
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
      nombre: 'Parlantes estéreo gamer',
      descripcion: 'Parlantes con diseño gamer y sonido envolvente RGB.',
      imagen: '/images/products/parlantesGame.png',
      comentarios: [
        {
          nombreUsuario: 'ana_rock',
          texto: 'El sonido de los parlantes es increíble.',
          imagenPerfil: '/images/users/default-image.png'
        }
      ]
    },
    {
      id: 4,
      nombre: 'Luces gamer LED RGB ',
      descripcion: 'Tira de luces LED para ambientar setups gamer con control remoto.',
      imagen: '/images/products/lucesLedGamer.png',
      comentarios: []
    },
    {
      id: 5,
      nombre: 'Escritorio gamer RGB',
      descripcion: 'Escritorio con soporte para monitor, auriculares y estructura resistente.',
      imagen: '/images/products/escritorioGame.png',
      comentarios: [
        {
          nombreUsuario: 'sonicman',
          texto: 'Muy cómodo.',
          imagenPerfil: '/images/users/default-image.png'
        }
      ]
    },
    {
      id: 6,
      nombre: 'Silla gamer ergonómica',
      descripcion: 'Silla con soporte lumbar, reclinable y apoyabrazos ajustables.',
      imagen: '/images/products/sillaGame.png',
      comentarios: []
    },
    {
      id: 7,
      nombre: 'Auriculares con micrófono',
      descripcion: 'Auriculares con sonido envolvente y micrófono retráctil.',
      imagen: '/images/products/auricularesGamer.png',
      comentarios: []
    },
    {
      id: 8,
      nombre: 'Teclado mecánico RGB teclas Cherry RED',
      descripcion: 'Teclado mecánico con iluminación LED y switches rojos.',
      imagen: '/images/products/tecladoGame.png',
      comentarios: [
        {
          nombreUsuario: 'musicfan',
          texto: 'Muy lindo y responde rápido.',
          imagenPerfil: '/images/users/default-image.png'
        }
      ]
    },
    {
      id: 9,
      nombre: 'Compu Gamer RGB',
      descripcion: 'Gabinete con panel de vidrio templado y ventiladores RGB incluidos.',
      imagen: '/images/products/cpuGame.png',
      comentarios: []
    },
    {
      id: 10,
      nombre: 'Monitor gamer 144Hz',
      descripcion: 'Monitor ultra ancho con alta tasa de refresco para juegos.',
      imagen: '/images/products/monitorGame.png',
      comentarios: [
        {
          nombreUsuario: 'lucas_fit',
          texto: 'Es muy bueno para juegos competitivos.',
          imagenPerfil: '/images/users/default-image.png'
        }
      ]
    }
  ]
};

module.exports = data;
