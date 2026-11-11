// ==========================================
// HAPPYMARKET - SCRIPT SIN LOS PRODUCTOS ELIMINADOS
// ==========================================

const productos = [
    // --- SUPERMERCADO & ALIMENTOS (16 productos) ---
    { id: 1, nombre: "Manzanas Rojas (1kg)", precio: 3.50, categoria: "supermercado", imagen: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=500&auto=format&fit=crop&q=60", palabrasClave: "manzana fruta fresca comida alimento dulce" },
    { id: 2, nombre: "Bananos Frescos (1 Ramo)", precio: 1.80, categoria: "supermercado", imagen: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=500&auto=format&fit=crop&q=60", palabrasClave: "platano guineo banano fruta alimento" },
    { id: 3, nombre: "Pan Molde Integral", precio: 2.20, categoria: "supermercado", imagen: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500&auto=format&fit=crop&q=60", palabrasClave: "pan integral panaderia comida desayuno" },
    { id: 4, nombre: "Leche Entera (1 Litro)", precio: 1.60, categoria: "supermercado", imagen: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=500&auto=format&fit=crop&q=60", palabrasClave: "leche lacteo bebida desayuno" },
    { id: 5, nombre: "Café Molido Premium (500g)", precio: 6.50, categoria: "supermercado", imagen: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=500&auto=format&fit=crop&q=60", palabrasClave: "cafe molido grano bebida desayuno" },
    { id: 7, nombre: "Aceite de Oliva (500ml)", precio: 7.90, categoria: "supermercado", imagen: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=500&auto=format&fit=crop&q=60", palabrasClave: "aceite oliva cocina ensalada comida" },
    { id: 8, nombre: "Arroz Blanco Premium (2kg)", precio: 3.00, categoria: "supermercado", imagen: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=500&auto=format&fit=crop&q=60", palabrasClave: "arroz grano alimento comida cena" },
    { id: 10, nombre: "Huevos Frescos (Docena)", precio: 2.80, categoria: "supermercado", imagen: "https://images.unsplash.com/photo-1516448620398-c5f44bf9f441?w=500&auto=format&fit=crop&q=60", palabrasClave: "huevos proteina desayuno cocina" },
    { id: 11, nombre: "Queso Cheddar Tajado", precio: 3.80, categoria: "supermercado", imagen: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=500&auto=format&fit=crop&q=60", palabrasClave: "queso lacteo tajadas sandwich" },
    { id: 12, nombre: "Jugo de Naranja Natural (1L)", precio: 2.50, categoria: "supermercado", imagen: "https://images.unsplash.com/photo-1613478223719-2ab802602423?w=500&auto=format&fit=crop&q=60", palabrasClave: "jugo naranja bebida fruto desayuno" },
    { id: 14, nombre: "Papas Fritas Snacks", precio: 1.50, categoria: "supermercado", imagen: "https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=500&auto=format&fit=crop&q=60", palabrasClave: "papas fritas chips snack botana fiesta" },
    { id: 15, nombre: "Chocolate Negro 70%", precio: 2.20, categoria: "supermercado", imagen: "https://images.unsplash.com/photo-1511381939415-e44015466834?w=500&auto=format&fit=crop&q=60", palabrasClave: "chocolate dulce postre snack cacao" },
    { id: 16, nombre: "Galletas de Avena y Miel", precio: 1.90, categoria: "supermercado", imagen: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=500&auto=format&fit=crop&q=60", palabrasClave: "galletas dulce merienda snack" },
    { id: 18, nombre: "Cereal de Chocolate", precio: 3.60, categoria: "supermercado", imagen: "https://images.unsplash.com/photo-1521483451569-e33803c0330c?w=500&auto=format&fit=crop&q=60", palabrasClave: "cereal chocolate leche desayuno" },
    { id: 19, nombre: "Té Verde Orgánico (Box)", precio: 3.10, categoria: "supermercado", imagen: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=500&auto=format&fit=crop&q=60", palabrasClave: "te verde infusiones caliente salud" },
    { id: 20, nombre: "Salsa de Tomate para Pasta", precio: 1.75, categoria: "supermercado", imagen: "https://images.unsplash.com/photo-1572449043416-55f4685c9bb7?w=500&auto=format&fit=crop&q=60", palabrasClave: "salsa tomate pasta cocina conserva" },

    // --- CUIDADO PERSONAL Y BELLEZA (13 productos) ---
    { id: 21, nombre: "Champú Hidratante (400ml)", precio: 4.50, categoria: "cuidadopersonal", imagen: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=500&auto=format&fit=crop&q=60", palabrasClave: "champu shampu cabello pelo aseo" },
    { id: 22, nombre: "Acondicionador Capilar", precio: 4.50, categoria: "cuidadopersonal", imagen: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=500&auto=format&fit=crop&q=60", palabrasClave: "acondicionador cabello crema pelo suave" },
    { id: 24, nombre: "Crema Hidratante Facial", precio: 8.90, categoria: "cuidadopersonal", imagen: "https://images.unsplash.com/photo-1608248597261-833244671656?w=500&auto=format&fit=crop&q=60", palabrasClave: "crema piel cara facial hidratacion skincare" },
    { id: 25, nombre: "Protector Solar SPF 50", precio: 12.00, categoria: "cuidadopersonal", imagen: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=500&auto=format&fit=crop&q=60", palabrasClave: "bloqueador sol protector solar piel playa" },
    { id: 27, nombre: "Cepillo de Dientes Bambú", precio: 2.50, categoria: "cuidadopersonal", imagen: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=500&auto=format&fit=crop&q=60", palabrasClave: "cepillo dientes bambu ecologico" },
    { id: 28, nombre: "Desodorante en Roll-On", precio: 3.20, categoria: "cuidadopersonal", imagen: "https://images.unsplash.com/photo-1619451334792-150fd785ee74?w=500&auto=format&fit=crop&q=60", palabrasClave: "desodorante axilas higiene fresco" },
    { id: 29, nombre: "Perfume Unisex Fresh", precio: 28.00, categoria: "cuidadopersonal", imagen: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=500&auto=format&fit=crop&q=60", palabrasClave: "perfume locion fragancia olor aroma" },
    { id: 31, nombre: "Bálsamo Labial Humectante", precio: 1.80, categoria: "cuidadopersonal", imagen: "https://images.unsplash.com/photo-1625093742435-6fa192b6fb10?w=500&auto=format&fit=crop&q=60", palabrasClave: "labial humectante labios suave" },
    { id: 32, nombre: "Crema para Manos", precio: 3.50, categoria: "cuidadopersonal", imagen: "https://images.unsplash.com/photo-1617897903246-719242758050?w=500&auto=format&fit=crop&q=60", palabrasClave: "crema manos suave piel humectante" },
    { id: 36, nombre: "Aceite Corporal Hidratante", precio: 6.80, categoria: "cuidadopersonal", imagen: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=500&auto=format&fit=crop&q=60", palabrasClave: "aceite cuerpo piel masaje humectante" },
    { id: 38, nombre: "Esmalte para Uñas Rojo", precio: 2.50, categoria: "cuidadopersonal", imagen: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=500&auto=format&fit=crop&q=60", palabrasClave: "esmalte unas cosmeticos manicura" },
    { id: 39, nombre: "Espuma de Afeitar", precio: 3.90, categoria: "cuidadopersonal", imagen: "https://images.unsplash.com/photo-1621607512214-68297480165e?w=500&auto=format&fit=crop&q=60", palabrasClave: "espuma afeitar barba rasurar cara" },
    { id: 40, nombre: "Esponja de Baño Suave", precio: 1.90, categoria: "cuidadopersonal", imagen: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=500&auto=format&fit=crop&q=60", palabrasClave: "esponja bano ducha esponja" },

    // --- TECNOLOGÍA (15 productos) ---
    { id: 41, nombre: "Audífonos Bluetooth", precio: 25.00, categoria: "tecnologia", imagen: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60", palabrasClave: "audifonos auriculares inalambricos musica bluetooth" },
    { id: 42, nombre: "Smartwatch Deportivo", precio: 45.00, categoria: "tecnologia", imagen: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60", palabrasClave: "smartwatch reloj inteligente pulsera deportes" },
    { id: 43, nombre: "Mouse Inalámbrico", precio: 15.00, categoria: "tecnologia", imagen: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500&auto=format&fit=crop&q=60", palabrasClave: "mouse raton inalambrico computadora pc" },
    { id: 44, nombre: "Smartphone", precio: 250.00, categoria: "tecnologia", imagen: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&auto=format&fit=crop&q=60", palabrasClave: "smartphone telefono celular movil" },
    { id: 45, nombre: "Laptop Ultradelgada", precio: 550.00, categoria: "tecnologia", imagen: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&auto=format&fit=crop&q=60", palabrasClave: "laptop computadora portatil pc" },
    { id: 46, nombre: "Cámara Digital Réflex", precio: 320.00, categoria: "tecnologia", imagen: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&auto=format&fit=crop&q=60", palabrasClave: "camara digital fotografias video reflex" },
    { id: 47, nombre: "Tablet 10 Pulgadas", precio: 190.00, categoria: "tecnologia", imagen: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&auto=format&fit=crop&q=60", palabrasClave: "tablet ipad pantalla tactil multimedia" },
    { id: 48, nombre: "Bocina Portátil RGB", precio: 35.00, categoria: "tecnologia", imagen: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&auto=format&fit=crop&q=60", palabrasClave: "bocina altavoz parlante bluetooth musica" },
    { id: 49, nombre: "Disco Duro Externo 1TB", precio: 65.00, categoria: "tecnologia", imagen: "https://images.unsplash.com/photo-1531492736227-7873377ceffa?w=500&auto=format&fit=crop&q=60", palabrasClave: "disco duro almacenamiento 1tb externo pc" },
    { id: 50, nombre: "Power Bank 20,000mAh", precio: 40.00, categoria: "tecnologia", imagen: "https://images.unsplash.com/photo-1609592424158-48b6f0c72e2a?w=500&auto=format&fit=crop&q=60", palabrasClave: "power bank bateria portatil cargador celular" },
    { id: 51, nombre: "Aparato de Lente VR 3D", precio: 38.00, categoria: "tecnologia", imagen: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=500&auto=format&fit=crop&q=60", palabrasClave: "vr realidad virtual lentes 3d juegos" },
    { id: 52, nombre: "Cargador Carga Rápida USB-C", precio: 18.00, categoria: "tecnologia", imagen: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=500&auto=format&fit=crop&q=60", palabrasClave: "cargador usb cable cel telefono" },
    { id: 53, nombre: "Soporte Ajustable para Laptop", precio: 22.00, categoria: "tecnologia", imagen: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&auto=format&fit=crop&q=60", palabrasClave: "soporte base laptop escritorio aluminio" },
    { id: 54, nombre: "Hub USB Multiport 5 en 1", precio: 24.00, categoria: "tecnologia", imagen: "https://images.unsplash.com/photo-1544652478-6653e09f18a2?w=500&auto=format&fit=crop&q=60", palabrasClave: "hub usb adaptador puerto pc laptop" },
    { id: 55, nombre: "Proyector Portátil HD", precio: 110.00, categoria: "tecnologia", imagen: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=500&auto=format&fit=crop&q=60", palabrasClave: "proyector cine hd video pantalla" },

    // --- ROPA Y ACCESORIOS (15 productos) ---
    { id: 56, nombre: "Camiseta Negra Algodón", precio: 18.00, categoria: "ropa", imagen: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=500&auto=format&fit=crop&q=60", palabrasClave: "camiseta camisa ropa moda negra" },
    { id: 57, nombre: "Mochila Impermeable", precio: 28.00, categoria: "ropa", imagen: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&auto=format&fit=crop&q=60", palabrasClave: "mochila bolso maleta urbano" },
    { id: 58, nombre: "Sudadera Gris con Capucha", precio: 35.00, categoria: "ropa", imagen: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=500&auto=format&fit=crop&q=60", palabrasClave: "sudadera abrigo capucha sueter ropa" },
    { id: 59, nombre: "Pantalón Jogger Algodón", precio: 29.00, categoria: "ropa", imagen: "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=500&auto=format&fit=crop&q=60", palabrasClave: "pantalon jogger deportivo ropa" },
    { id: 60, nombre: "Chaqueta Cortavientos", precio: 45.00, categoria: "ropa", imagen: "https://images.unsplash.com/photo-1544441893-675973e31985?w=500&auto=format&fit=crop&q=60", palabrasClave: "chaqueta abrigo chamarra ropa" },
    { id: 61, nombre: "Gorra Negra Clásica", precio: 14.00, categoria: "ropa", imagen: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=500&auto=format&fit=crop&q=60", palabrasClave: "gorra sombrero accesorio" },
    { id: 62, nombre: "Tenis Deportivos Blancos", precio: 55.00, categoria: "ropa", imagen: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=60", palabrasClave: "tenis zapatos zapatillas deportivos calzado" },
    { id: 63, nombre: "Bufanda Tejida Gris", precio: 16.00, categoria: "ropa", imagen: "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=500&auto=format&fit=crop&q=60", palabrasClave: "bufanda cuello frio ropa" },
    { id: 64, nombre: "Gafas de Sol Estilo UV", precio: 22.00, categoria: "ropa", imagen: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&auto=format&fit=crop&q=60", palabrasClave: "gafas lentes de sol accesorios" },
    { id: 65, nombre: "Cinturón de Cuero Negro", precio: 15.00, categoria: "ropa", imagen: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=500&auto=format&fit=crop&q=60", palabrasClave: "cinturon correa cuero accesorios" },
    { id: 66, nombre: "Reloj Elegante Análogo", precio: 48.00, categoria: "ropa", imagen: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=500&auto=format&fit=crop&q=60", palabrasClave: "reloj analogo pulsera accesorio moda" },
    { id: 67, nombre: "Pantalón Jean Mezclilla", precio: 34.00, categoria: "ropa", imagen: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500&auto=format&fit=crop&q=60", palabrasClave: "jean pantalon mezclilla ropa vaquero" },
    { id: 68, nombre: "Calcetines Deportivos Pack (3)", precio: 8.50, categoria: "ropa", imagen: "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?w=500&auto=format&fit=crop&q=60", palabrasClave: "medias calcetines ropa interior deportivo" },
    { id: 69, nombre: "Sombrero de Playa", precio: 16.50, categoria: "ropa", imagen: "https://images.unsplash.com/photo-1521369909029-2afed882baee?w=500&auto=format&fit=crop&q=60", palabrasClave: "sombrero sol playa accesorio" },
    { id: 70, nombre: "Chaqueta de Mezclilla", precio: 49.00, categoria: "ropa", imagen: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=500&auto=format&fit=crop&q=60", palabrasClave: "chaqueta jean mezclilla ropa estilo" },

    // --- VIDEOJUEGOS (14 productos) ---
    { id: 71, nombre: "Teclado Gamer Mecánico RGB", precio: 35.00, categoria: "videojuegos", imagen: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&auto=format&fit=crop&q=60", palabrasClave: "teclado gamer mecanico rgb juegos pc" },
    { id: 72, nombre: "Control para Consola", precio: 30.00, categoria: "videojuegos", imagen: "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?w=500&auto=format&fit=crop&q=60", palabrasClave: "control mando joystick consola videojuegos" },
    { id: 73, nombre: "Monitor Curvo 144Hz", precio: 180.00, categoria: "videojuegos", imagen: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&auto=format&fit=crop&q=60", palabrasClave: "monitor pantalla curvo gaming pc" },
    { id: 74, nombre: "Audífonos Gamer 7.1", precio: 40.00, categoria: "videojuegos", imagen: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=500&auto=format&fit=crop&q=60", palabrasClave: "audifonos gamer auriculares microfono juegos" },
    { id: 75, nombre: "Mousepad XL Escena Gaming", precio: 18.00, categoria: "videojuegos", imagen: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500&auto=format&fit=crop&q=60", palabrasClave: "mousepad alfombrilla escritorio gamer" },
    { id: 76, nombre: "Silla Gamer Ergonómica", precio: 150.00, categoria: "videojuegos", imagen: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=500&auto=format&fit=crop&q=60", palabrasClave: "silla gamer escritorio ergonomica" },
    { id: 77, nombre: "Micrófono USB para Streaming", precio: 75.00, categoria: "videojuegos", imagen: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=500&auto=format&fit=crop&q=60", palabrasClave: "microfono usb streaming podcast gamer" },
    { id: 79, nombre: "Tarjeta Gráfica RTX Pro", precio: 350.00, categoria: "videojuegos", imagen: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=500&auto=format&fit=crop&q=60", palabrasClave: "tarjeta grafica gpu video pc gamer" },
    { id: 80, nombre: "Lentes Anti Luz Azul", precio: 20.00, categoria: "videojuegos", imagen: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&auto=format&fit=crop&q=60", palabrasClave: "lentes gafas descanso luz azul gaming" },
    { id: 81, nombre: "Volante de Carreras + Pedales", precio: 120.00, categoria: "videojuegos", imagen: "https://images.unsplash.com/photo-1548611635-b6e7827d7d4a?w=500&auto=format&fit=crop&q=60", palabrasClave: "volante pedales carreras simulador juegos" },
    { id: 82, nombre: "Grip Ergonómico para Control", precio: 12.00, categoria: "videojuegos", imagen: "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?w=500&auto=format&fit=crop&q=60", palabrasClave: "grip fundas control mando silicona" },
    { id: 83, nombre: "Soporte para Audífonos RGB", precio: 19.00, categoria: "videojuegos", imagen: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=500&auto=format&fit=crop&q=60", palabrasClave: "soporte audifonos rgb luz gamer escritorio" },
    { id: 84, nombre: "Barra de Luz Monitor Gaming", precio: 29.00, categoria: "videojuegos", imagen: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&auto=format&fit=crop&q=60", palabrasClave: "luz barra monitor escritorio gamer led" },
    { id: 85, nombre: "Capturadora de Video 4K USB", precio: 42.00, categoria: "videojuegos", imagen: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=500&auto=format&fit=crop&q=60", palabrasClave: "capturadora video 4k usb streaming pc" },

    // --- HOGAR (15 pzas) ---
    { id: 86, nombre: "Lámpara LED de Escritorio", precio: 22.00, categoria: "hogar", imagen: "https://images.unsplash.com/photo-1534349762230-10cad6d63574?w=500&auto=format&fit=crop&q=60", palabrasClave: "lampara luz led escritorio hogar" },
    { id: 87, nombre: "Cafetera de Goteo", precio: 45.00, categoria: "hogar", imagen: "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=500&auto=format&fit=crop&q=60", palabrasClave: "cafetera cafe cocina electrodomestico" },
    { id: 88, nombre: "Organizador de Madera", precio: 15.00, categoria: "hogar", imagen: "https://images.unsplash.com/photo-1595515106967-1ce29566ff1c?w=500&auto=format&fit=crop&q=60", palabrasClave: "organizador escritorio orden hogar" },
    { id: 89, nombre: "Planta Decorativa en Maceta", precio: 12.00, categoria: "hogar", imagen: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=500&auto=format&fit=crop&q=60", palabrasClave: "planta decorativa maceta adorno hogar" },
    { id: 90, nombre: "Reloj de Pared Minimalista", precio: 20.00, categoria: "hogar", imagen: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=500&auto=format&fit=crop&q=60", palabrasClave: "reloj de pared hora decoracion hogar" },
    { id: 91, nombre: "Difusor de Aromas LED", precio: 28.00, categoria: "hogar", imagen: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=500&auto=format&fit=crop&q=60", palabrasClave: "difusor aromas aceites esenciales hogar" },
    { id: 92, nombre: "Juego de Cojines Suaves", precio: 25.00, categoria: "hogar", imagen: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=500&auto=format&fit=crop&q=60", palabrasClave: "cojines almohadas sala decoracion hogar" },
    { id: 93, nombre: "Jarra Térmica Acero", precio: 24.00, categoria: "hogar", imagen: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=500&auto=format&fit=crop&q=60", palabrasClave: "jarra termica botella agua cafe" },
    { id: 94, nombre: "Taza de Cerámica Blanca", precio: 10.00, categoria: "hogar", imagen: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=500&auto=format&fit=crop&q=60", palabrasClave: "taza ceramica cafe te vaso" },
    { id: 95, nombre: "Velas Aromáticas Vainilla", precio: 18.00, categoria: "hogar", imagen: "https://images.unsplash.com/photo-1603006905003-be475563bc59?w=500&auto=format&fit=crop&q=60", palabrasClave: "velas aromaticas decoracion hogar" },
    { id: 96, nombre: "Freidora de Aire Digital (4L)", precio: 79.00, categoria: "hogar", imagen: "https://images.unsplash.com/photo-1626509620264-161614798305?w=500&auto=format&fit=crop&q=60", palabrasClave: "air fryer freidora aire cocina electrodomestico" },
    { id: 97, nombre: "Licuadora de Alta Potencia", precio: 38.00, categoria: "hogar", imagen: "https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=500&auto=format&fit=crop&q=60", palabrasClave: "licuadora jugos batidos cocina electrodomestico" },
    { id: 98, nombre: "Juego de Sartenes Antiadherentes", precio: 42.00, categoria: "hogar", imagen: "https://images.unsplash.com/photo-1583778176476-4a8b02a64c00?w=500&auto=format&fit=crop&q=60", palabrasClave: "sartenes ollas cocina comida preparacion" },
    { id: 99, nombre: "Humidificador de Ambiente", precio: 26.00, categoria: "hogar", imagen: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=500&auto=format&fit=crop&q=60", palabrasClave: "humidificador aire vapor hogar salud" },
    { id: 100, nombre: "Cobija de Microfibra Suave", precio: 22.50, categoria: "hogar", imagen: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=500&auto=format&fit=crop&q=60", palabrasClave: "cobija manta cama suave descanso frio" }
];

let carrito = JSON.parse(localStorage.getItem("happymarket_carrito")) || [];
let favoritos = JSON.parse(localStorage.getItem("happymarket_favoritos")) || [];

let categoriaActual = "todos";
let busquedaActual = "";

// ==========================================
// SISTEMA DE AUDIO PERSONALIZADO
// ==========================================
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

function reproducirSonido(tipo) {
    if (!audioCtx) return;
    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }

    const osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    osc.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    const now = audioCtx.currentTime;

    if (tipo === 'click') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(300, now);
        osc.frequency.exponentialRampToValueAtTime(500, now + 0.04);
        gainNode.gain.setValueAtTime(0.04, now);
        gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.04);
        osc.start(now);
        osc.stop(now + 0.04);

    } else if (tipo === 'carrito') {
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(440, now);
        osc.frequency.setValueAtTime(880, now + 0.08);
        gainNode.gain.setValueAtTime(0.06, now);
        gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
        osc.start(now);
        osc.stop(now + 0.2);

    } else if (tipo === 'favorito') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(1046.50, now);
        osc.frequency.setValueAtTime(1318.51, now + 0.06);
        osc.frequency.setValueAtTime(1567.98, now + 0.12);
        gainNode.gain.setValueAtTime(0.07, now);
        gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
        osc.start(now);
        osc.stop(now + 0.3);

    } else if (tipo === 'exito') {
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(523.25, now);
        osc.frequency.setValueAtTime(659.25, now + 0.08);
        osc.frequency.setValueAtTime(783.99, now + 0.16);
        osc.frequency.setValueAtTime(1046.50, now + 0.24);
        gainNode.gain.setValueAtTime(0.08, now);
        gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.4);
        osc.start(now);
        osc.stop(now + 0.4);
    }
}

// ==========================================
// NORMALIZAR TEXTO Y TOAST
// ==========================================
function normalizarTexto(texto) {
    return texto
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
}

function mostrarToast(mensaje) {
    const toast = document.getElementById("toast");
    toast.textContent = mensaje;
    toast.classList.add("show");
    setTimeout(() => {
        toast.classList.remove("show");
    }, 2500);
}

// ==========================================
// MOSTRAR PRODUCTOS
// ==========================================
function mostrarProductos() {
    const contenedor = document.getElementById("productos");
    const orden = document.getElementById("ordenar").value;
    const contadorResultados = document.getElementById("contador-resultados");

    const textoBusquedaLimpio = normalizarTexto(busquedaActual);

    let resultados = productos.filter(producto => {
        const textoCompleto = normalizarTexto(producto.nombre + " " + producto.palabrasClave);
        const coincideBusqueda = textoCompleto.includes(textoBusquedaLimpio);
        const coincideCategoria = categoriaActual === "todos" || producto.categoria === categoriaActual;
        return coincideBusqueda && coincideCategoria;
    });

    if (orden === "menor") {
        resultados.sort((a, b) => a.precio - b.precio);
    } else if (orden === "mayor") {
        resultados.sort((a, b) => b.precio - a.precio);
    }

    contenedor.innerHTML = "";

    if (resultados.length === 0) {
        contenedor.innerHTML = `<p style="grid-column: 1/-1; text-align: center; padding: 30px; color: #718096;">No se encontraron productos coincidentes.</p>`;
        contadorResultados.textContent = "0 productos encontrados";
        return;
    }

    contadorResultados.textContent = `Mostrando ${resultados.length} productos`;

    resultados.forEach(producto => {
        const esFavorito = favoritos.includes(producto.id);

        contenedor.innerHTML += `
            <article class="producto">
                <img src="${producto.imagen}" alt="${producto.nombre}" loading="lazy" onclick="abrirModal(${producto.id})">
                <h3 onclick="abrirModal(${producto.id})">${producto.nombre}</h3>
                <p>$${producto.precio.toFixed(2)}</p>
                
                <button class="btn-agregar" onclick="agregarCarrito(${producto.id})">
                    🛒 Agregar
                </button>
                
                <button class="btn-favorito" onclick="cambiarFavorito(${producto.id})">
                    ${esFavorito ? "⭐ En favoritos" : "☆ Agregar a favoritos"}
                </button>
            </article>
        `;
    });
}

// ==========================================
// GESTIÓN DEL CARRITO
// ==========================================
function agregarCarrito(id) {
    const producto = productos.find(p => p.id === id);
    const existente = carrito.find(p => p.id === id);

    if (existente) {
        existente.cantidad++;
    } else {
        carrito.push({ ...producto, cantidad: 1 });
    }

    reproducirSonido('carrito');
    guardarLocalStorage();
    actualizarCarrito();
    mostrarToast(`✓ ${producto.nombre} agregado al carrito`);
}

function actualizarCarrito() {
    const lista = document.getElementById("lista-carrito");
    const cantidad = document.getElementById("cantidad");
    const totalElemento = document.getElementById("total");

    lista.innerHTML = "";
    let total = 0;
    let cantidadTotal = 0;

    carrito.forEach(producto => {
        total += producto.precio * producto.cantidad;
        cantidadTotal += producto.cantidad;

        lista.innerHTML += `
            <div class="elemento-carrito">
                <p><strong>${producto.nombre}</strong><br>$${producto.precio.toFixed(2)} x ${producto.cantidad}</p>
                <div style="display: flex; gap: 5px;">
                    <button onclick="cambiarCantidad(${producto.id}, -1)">−</button>
                    <button onclick="cambiarCantidad(${producto.id}, 1)">+</button>
                    <button onclick="eliminarProducto(${producto.id})" style="color: #E53E3E; border-color: #FEB2B2;">Eliminar</button>
                </div>
            </div>
        `;
    });

    if (carrito.length === 0) {
        lista.innerHTML = "<p style='color: #718096; text-align: center; padding: 10px;'>Tu carrito está vacío.</p>";
    }

    cantidad.textContent = cantidadTotal;
    totalElemento.textContent = total.toFixed(2);
}

function cambiarCantidad(id, cambio) {
    const producto = carrito.find(p => p.id === id);
    if (!producto) return;

    producto.cantidad += cambio;
    reproducirSonido('click');
    if (producto.cantidad <= 0) {
        eliminarProducto(id);
    } else {
        guardarLocalStorage();
        actualizarCarrito();
    }
}

function eliminarProducto(id) {
    carrito = carrito.filter(p => p.id !== id);
    reproducirSonido('click');
    guardarLocalStorage();
    actualizarCarrito();
    mostrarToast("Producto eliminado del carrito");
}

function mostrarCarrito() {
    reproducirSonido('click');
    document.getElementById("carrito").scrollIntoView({ behavior: "smooth" });
}

// ==========================================
// FAVORITOS Y LOCALSTORAGE
// ==========================================
function cambiarFavorito(id) {
    const producto = productos.find(p => p.id === id);
    const index = favoritos.indexOf(id);

    reproducirSonido('favorito');
    if (index > -1) {
        favoritos.splice(index, 1);
        mostrarToast(`☆ ${producto.nombre} eliminado de favoritos`);
    } else {
        favoritos.push(id);
        mostrarToast(`⭐ ${producto.nombre} guardado en favoritos`);
    }

    guardarLocalStorage();
    mostrarProductos();
}

function guardarLocalStorage() {
    localStorage.setItem("happymarket_carrito", JSON.stringify(carrito));
    localStorage.setItem("happymarket_favoritos", JSON.stringify(favoritos));
}

// ==========================================
// VENTANA MODAL
// ==========================================
function abrirModal(id) {
    const producto = productos.find(p => p.id === id);
    if (!producto) return;

    reproducirSonido('click');
    document.getElementById("modal-img").src = producto.imagen;
    document.getElementById("modal-cat").textContent = producto.categoria.toUpperCase();
    document.getElementById("modal-titulo").textContent = producto.nombre;
    document.getElementById("modal-precio").textContent = `$${producto.precio.toFixed(2)}`;
    
    const btnAgregarModal = document.getElementById("modal-btn-agregar");
    btnAgregarModal.onclick = function() {
        agregarCarrito(producto.id);
        cerrarModal();
    };

    document.getElementById("modal-producto").style.display = "flex";
}

function cerrarModal() {
    reproducirSonido('click');
    document.getElementById("modal-producto").style.display = "none";
}

window.onclick = function(event) {
    const modal = document.getElementById("modal-producto");
    if (event.target === modal) {
        cerrarModal();
    }
}

// ==========================================
// FILTROS Y EVENTOS
// ==========================================
function filtrarCategoria(categoria) {
    categoriaActual = categoria;
    document.getElementById("filtro-categoria").value = categoria;
    reproducirSonido('click');

    document.querySelectorAll(".categorias button").forEach(btn => btn.classList.remove("activo"));
    event && event.target.classList.add("activo");

    mostrarProductos();
}

function finalizarCompra() {
    if (carrito.length === 0) {
        alert("Tu carrito está vacío. ¡Agrega algún producto antes de continuar!");
        return;
    }

    reproducirSonido('exito');
    alert("🛍️ ¡Compra simulada con éxito en HappyMarket!\n\nGracias por probar este proyecto.");
    carrito = [];
    guardarLocalStorage();
    actualizarCarrito();
}

// Event Listeners
document.getElementById("buscador").addEventListener("input", (e) => {
    busquedaActual = e.target.value;
    mostrarProductos();
});

document.getElementById("btn-buscar").addEventListener("click", () => {
    busquedaActual = document.getElementById("buscador").value;
    reproducirSonido('click');
    mostrarProductos();
});

document.getElementById("filtro-categoria").addEventListener("change", (e) => {
    categoriaActual = e.target.value;
    mostrarProductos();
});

document.getElementById("ordenar").addEventListener("change", mostrarProductos);

// Inicializar tienda al cargar
mostrarProductos();
actualizarCarrito();