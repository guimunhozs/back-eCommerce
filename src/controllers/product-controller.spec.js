var path = require('path');
var dotEnvPath = path.resolve('./.env');
require('dotenv').config({ path: dotEnvPath })


const request = require('supertest');
const express = require('express');

var productController = require('./product-controller');

describe('Product Controller', function () {

  const result = {
    "total": 2,
    "page": 1,
    "pageSize": 5,
    "products": [
      {
        "image": [
          "https://img.elo7.com.br/product/zoom/28F6F1B/capa-de-almofada-veludo-45x45-capa.jpg",
          "https://www.vivain.com.br/image/cache/data/Produtos/Almofadas/Capa-de-almofada-liso-veludo-cotele-bege_4002811_47x47-800x800.jpg",
          "https://lojatrousseau.vteximg.com.br/arquivos/ids/217954-400-400/0297012110_418_2-CAPA-ALMOFADA-BRANDO-GIOLA.jpg?v=636903268091800000",
          "https://www.encantosenxovais.com.br/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/4/9/49899893_2239640599639987_6530882752961576960_n.jpg"
        ],
        "_id": "5de6a3bb66867411144eb286",
        "name": "Capa de Almofada Veludo Cotele 38",
        "category": "Capa de Almofada Teste",
        "price": 119,
        "discount": 10,
        "__v": 0
      },
      {
        "image": [
          "https://http2.mlstatic.com/edredom-solteiro-preto-malha-penteada-100-algodo-D_NQ_NP_791577-MLB29619947979_032019-F.jpg",
          "https://images.yampi.me/assets/stores/bordabordados/uploads/images/edredom-solteiro-kit-day-by-day-dupla-face-02-pecas-fenomeno-5ac60b1056aff-medium.jpg",
          "https://io.convertiez.com.br/m/essencialenxovais/shop/products/images/9265/medium/edredom-cama-solteiro-menina-provence-rose-02-pecas_21156.jpg",
          "https://http2.mlstatic.com/edredom-solteiro-dupla-face-malha-manta-silicone-liverpool-D_NQ_NP_424711-MLB20626527063_032016-F.jpg"
        ],
        "_id": "5de6a3bb66867411144eb295",
        "name": "Edredom Colorido Queen 31 Teste",
        "category": "Edredom",
        "price": 350,
        "discount": 7,
        "__v": 0
      }
    ]
  }

  it('should return products by category', function () {
    const query = {
      page: 1,
      limit: 5,
      category: 'teste'
    };

    request(productController)
      .get('/')
      .query(query)
      .expect('Content-Type', /json/)
      .expect(200, result);
  });


  it('should return products by name', function () {
    const query = {
      page: 1,
      limit: 5,
      name: 'teste'
    };

    request(productController)
      .get('/')
      .query(query)
      .expect('Content-Type', /json/)
      .expect(200, result);
  });


  it('should return 16 products without query', function () {

    const result = {
      "total": 110,
      "page": 1,
      "pageSize": 16,
      "products": [
        {
          "image": [
            "https://img.elo7.com.br/product/zoom/28F6F1B/capa-de-almofada-veludo-45x45-capa.jpg",
            "https://www.vivain.com.br/image/cache/data/Produtos/Almofadas/Capa-de-almofada-liso-veludo-cotele-bege_4002811_47x47-800x800.jpg",
            "https://lojatrousseau.vteximg.com.br/arquivos/ids/217954-400-400/0297012110_418_2-CAPA-ALMOFADA-BRANDO-GIOLA.jpg?v=636903268091800000",
            "https://www.encantosenxovais.com.br/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/4/9/49899893_2239640599639987_6530882752961576960_n.jpg"
          ],
          "_id": "5de6a3bb66867411144eb2b2",
          "name": "Capa de Almofada Veludo Cotele 11",
          "category": "Capa de Almofada",
          "price": 119,
          "discount": 10,
          "__v": 0
        },
        {
          "image": [
            "https://img.elo7.com.br/product/zoom/28F6F1B/capa-de-almofada-veludo-45x45-capa.jpg",
            "https://www.vivain.com.br/image/cache/data/Produtos/Almofadas/Capa-de-almofada-liso-veludo-cotele-bege_4002811_47x47-800x800.jpg",
            "https://lojatrousseau.vteximg.com.br/arquivos/ids/217954-400-400/0297012110_418_2-CAPA-ALMOFADA-BRANDO-GIOLA.jpg?v=636903268091800000",
            "https://www.encantosenxovais.com.br/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/4/9/49899893_2239640599639987_6530882752961576960_n.jpg"
          ],
          "_id": "5de6a3bb66867411144eb2d3",
          "name": "Capa de Almofada Veludo Cotele 11",
          "category": "Capa de Almofada",
          "price": 119,
          "discount": 10,
          "__v": 0
        },
        {
          "image": [
            "https://img.elo7.com.br/product/zoom/28F6F1B/capa-de-almofada-veludo-45x45-capa.jpg",
            "https://www.vivain.com.br/image/cache/data/Produtos/Almofadas/Capa-de-almofada-liso-veludo-cotele-bege_4002811_47x47-800x800.jpg",
            "https://lojatrousseau.vteximg.com.br/arquivos/ids/217954-400-400/0297012110_418_2-CAPA-ALMOFADA-BRANDO-GIOLA.jpg?v=636903268091800000",
            "https://www.encantosenxovais.com.br/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/4/9/49899893_2239640599639987_6530882752961576960_n.jpg"
          ],
          "_id": "5de6a3bb66867411144eb2bd",
          "name": "Capa de Almofada Veludo Cotele 18",
          "category": "Capa de Almofada",
          "price": 119,
          "discount": 10,
          "__v": 0
        },
        {
          "image": [
            "https://img.elo7.com.br/product/zoom/28F6F1B/capa-de-almofada-veludo-45x45-capa.jpg",
            "https://www.vivain.com.br/image/cache/data/Produtos/Almofadas/Capa-de-almofada-liso-veludo-cotele-bege_4002811_47x47-800x800.jpg",
            "https://lojatrousseau.vteximg.com.br/arquivos/ids/217954-400-400/0297012110_418_2-CAPA-ALMOFADA-BRANDO-GIOLA.jpg?v=636903268091800000",
            "https://www.encantosenxovais.com.br/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/4/9/49899893_2239640599639987_6530882752961576960_n.jpg"
          ],
          "_id": "5de6a3bb66867411144eb2e9",
          "name": "Capa de Almofada Veludo Cotele 18",
          "category": "Capa de Almofada",
          "price": 119,
          "discount": 10,
          "__v": 0
        },
        {
          "image": [
            "https://img.elo7.com.br/product/zoom/28F6F1B/capa-de-almofada-veludo-45x45-capa.jpg",
            "https://www.vivain.com.br/image/cache/data/Produtos/Almofadas/Capa-de-almofada-liso-veludo-cotele-bege_4002811_47x47-800x800.jpg",
            "https://lojatrousseau.vteximg.com.br/arquivos/ids/217954-400-400/0297012110_418_2-CAPA-ALMOFADA-BRANDO-GIOLA.jpg?v=636903268091800000",
            "https://www.encantosenxovais.com.br/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/4/9/49899893_2239640599639987_6530882752961576960_n.jpg"
          ],
          "_id": "5de6a3bb66867411144eb2a7",
          "name": "Capa de Almofada Veludo Cotele 28",
          "category": "Capa de Almofada",
          "price": 119,
          "discount": 10,
          "__v": 0
        },
        {
          "image": [
            "https://img.elo7.com.br/product/zoom/28F6F1B/capa-de-almofada-veludo-45x45-capa.jpg",
            "https://www.vivain.com.br/image/cache/data/Produtos/Almofadas/Capa-de-almofada-liso-veludo-cotele-bege_4002811_47x47-800x800.jpg",
            "https://lojatrousseau.vteximg.com.br/arquivos/ids/217954-400-400/0297012110_418_2-CAPA-ALMOFADA-BRANDO-GIOLA.jpg?v=636903268091800000",
            "https://www.encantosenxovais.com.br/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/4/9/49899893_2239640599639987_6530882752961576960_n.jpg"
          ],
          "_id": "5de6a3bb66867411144eb2c8",
          "name": "Capa de Almofada Veludo Cotele 30",
          "category": "Capa de Almofada",
          "price": 119,
          "discount": 10,
          "__v": 0
        },
        {
          "image": [
            "https://img.elo7.com.br/product/zoom/28F6F1B/capa-de-almofada-veludo-45x45-capa.jpg",
            "https://www.vivain.com.br/image/cache/data/Produtos/Almofadas/Capa-de-almofada-liso-veludo-cotele-bege_4002811_47x47-800x800.jpg",
            "https://lojatrousseau.vteximg.com.br/arquivos/ids/217954-400-400/0297012110_418_2-CAPA-ALMOFADA-BRANDO-GIOLA.jpg?v=636903268091800000",
            "https://www.encantosenxovais.com.br/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/4/9/49899893_2239640599639987_6530882752961576960_n.jpg"
          ],
          "_id": "5de6a3bb66867411144eb2de",
          "name": "Capa de Almofada Veludo Cotele 31",
          "category": "Capa de Almofada",
          "price": 119,
          "discount": 10,
          "__v": 0
        },
        {
          "image": [
            "https://img.elo7.com.br/product/zoom/28F6F1B/capa-de-almofada-veludo-45x45-capa.jpg",
            "https://www.vivain.com.br/image/cache/data/Produtos/Almofadas/Capa-de-almofada-liso-veludo-cotele-bege_4002811_47x47-800x800.jpg",
            "https://lojatrousseau.vteximg.com.br/arquivos/ids/217954-400-400/0297012110_418_2-CAPA-ALMOFADA-BRANDO-GIOLA.jpg?v=636903268091800000",
            "https://www.encantosenxovais.com.br/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/4/9/49899893_2239640599639987_6530882752961576960_n.jpg"
          ],
          "_id": "5de6a3bb66867411144eb286",
          "name": "Capa de Almofada Veludo Cotele 38",
          "category": "Capa de Almofada Teste",
          "price": 119,
          "discount": 10,
          "__v": 0
        },
        {
          "image": [
            "https://img.elo7.com.br/product/zoom/28F6F1B/capa-de-almofada-veludo-45x45-capa.jpg",
            "https://www.vivain.com.br/image/cache/data/Produtos/Almofadas/Capa-de-almofada-liso-veludo-cotele-bege_4002811_47x47-800x800.jpg",
            "https://lojatrousseau.vteximg.com.br/arquivos/ids/217954-400-400/0297012110_418_2-CAPA-ALMOFADA-BRANDO-GIOLA.jpg?v=636903268091800000",
            "https://www.encantosenxovais.com.br/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/4/9/49899893_2239640599639987_6530882752961576960_n.jpg"
          ],
          "_id": "5de6a3bb66867411144eb291",
          "name": "Capa de Almofada Veludo Cotele 38",
          "category": "Capa de Almofada",
          "price": 119,
          "discount": 10,
          "__v": 0
        },
        {
          "image": [
            "https://img.elo7.com.br/product/zoom/28F6F1B/capa-de-almofada-veludo-45x45-capa.jpg",
            "https://www.vivain.com.br/image/cache/data/Produtos/Almofadas/Capa-de-almofada-liso-veludo-cotele-bege_4002811_47x47-800x800.jpg",
            "https://lojatrousseau.vteximg.com.br/arquivos/ids/217954-400-400/0297012110_418_2-CAPA-ALMOFADA-BRANDO-GIOLA.jpg?v=636903268091800000",
            "https://www.encantosenxovais.com.br/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/4/9/49899893_2239640599639987_6530882752961576960_n.jpg"
          ],
          "_id": "5de6a3bb66867411144eb29c",
          "name": "Capa de Almofada Veludo Cotele 9",
          "category": "Capa de Almofada",
          "price": 119,
          "discount": 10,
          "__v": 0
        },
        {
          "image": [
            "https://a-static.mlcdn.com.br/618x463/cobertor-home-design-aveludado-marvin-cinza-casal-180-x-220-corttex/larconnect/2490/dde639da77600fddbf213b738017bf74.jpg",
            "https://static3.tcdn.com.br/img/img_prod/207304/kit_de_cobertores_casal_padrao_manta_de_microfibra_02_pecas_toque_aveludado_vermelho_32833_1_20190326172217.jpg",
            "https://www.pontofrio-imagens.com.br/CamaMesaBanho/CobertoreManta/cobertorCasal/11638733/1122587328/cobertor-casal-raschel-aveludado-azul-corttex-11638733.jpg",
            "https://static3.tcdn.com.br/img/img_prod/627709/cobertor_casal_manta_de_microfibra_01_peca_toque_aveludado_tabaco_25533_1_20190717103244.jpg"
          ],
          "_id": "5de6a3bb66867411144eb2ca",
          "name": "Cobertor Aveludado Casal 1",
          "category": "Cobertor",
          "price": 280,
          "discount": 2,
          "__v": 0
        },
        {
          "image": [
            "https://a-static.mlcdn.com.br/618x463/cobertor-home-design-aveludado-marvin-cinza-casal-180-x-220-corttex/larconnect/2490/dde639da77600fddbf213b738017bf74.jpg",
            "https://static3.tcdn.com.br/img/img_prod/207304/kit_de_cobertores_casal_padrao_manta_de_microfibra_02_pecas_toque_aveludado_vermelho_32833_1_20190326172217.jpg",
            "https://www.pontofrio-imagens.com.br/CamaMesaBanho/CobertoreManta/cobertorCasal/11638733/1122587328/cobertor-casal-raschel-aveludado-azul-corttex-11638733.jpg",
            "https://static3.tcdn.com.br/img/img_prod/627709/cobertor_casal_manta_de_microfibra_01_peca_toque_aveludado_tabaco_25533_1_20190717103244.jpg"
          ],
          "_id": "5de6a3bb66867411144eb2a9",
          "name": "Cobertor Aveludado Casal 11",
          "category": "Cobertor",
          "price": 280,
          "discount": 2,
          "__v": 0
        },
        {
          "image": [
            "https://a-static.mlcdn.com.br/618x463/cobertor-home-design-aveludado-marvin-cinza-casal-180-x-220-corttex/larconnect/2490/dde639da77600fddbf213b738017bf74.jpg",
            "https://static3.tcdn.com.br/img/img_prod/207304/kit_de_cobertores_casal_padrao_manta_de_microfibra_02_pecas_toque_aveludado_vermelho_32833_1_20190326172217.jpg",
            "https://www.pontofrio-imagens.com.br/CamaMesaBanho/CobertoreManta/cobertorCasal/11638733/1122587328/cobertor-casal-raschel-aveludado-azul-corttex-11638733.jpg",
            "https://static3.tcdn.com.br/img/img_prod/627709/cobertor_casal_manta_de_microfibra_01_peca_toque_aveludado_tabaco_25533_1_20190717103244.jpg"
          ],
          "_id": "5de6a3bb66867411144eb2e0",
          "name": "Cobertor Aveludado Casal 11",
          "category": "Cobertor",
          "price": 280,
          "discount": 2,
          "__v": 0
        },
        {
          "image": [
            "https://a-static.mlcdn.com.br/618x463/cobertor-home-design-aveludado-marvin-cinza-casal-180-x-220-corttex/larconnect/2490/dde639da77600fddbf213b738017bf74.jpg",
            "https://static3.tcdn.com.br/img/img_prod/207304/kit_de_cobertores_casal_padrao_manta_de_microfibra_02_pecas_toque_aveludado_vermelho_32833_1_20190326172217.jpg",
            "https://www.pontofrio-imagens.com.br/CamaMesaBanho/CobertoreManta/cobertorCasal/11638733/1122587328/cobertor-casal-raschel-aveludado-azul-corttex-11638733.jpg",
            "https://static3.tcdn.com.br/img/img_prod/627709/cobertor_casal_manta_de_microfibra_01_peca_toque_aveludado_tabaco_25533_1_20190717103244.jpg"
          ],
          "_id": "5de6a3bb66867411144eb2eb",
          "name": "Cobertor Aveludado Casal 13",
          "category": "Cobertor",
          "price": 280,
          "discount": 2,
          "__v": 0
        },
        {
          "image": [
            "https://a-static.mlcdn.com.br/618x463/cobertor-home-design-aveludado-marvin-cinza-casal-180-x-220-corttex/larconnect/2490/dde639da77600fddbf213b738017bf74.jpg",
            "https://static3.tcdn.com.br/img/img_prod/207304/kit_de_cobertores_casal_padrao_manta_de_microfibra_02_pecas_toque_aveludado_vermelho_32833_1_20190326172217.jpg",
            "https://www.pontofrio-imagens.com.br/CamaMesaBanho/CobertoreManta/cobertorCasal/11638733/1122587328/cobertor-casal-raschel-aveludado-azul-corttex-11638733.jpg",
            "https://static3.tcdn.com.br/img/img_prod/627709/cobertor_casal_manta_de_microfibra_01_peca_toque_aveludado_tabaco_25533_1_20190717103244.jpg"
          ],
          "_id": "5de6a3bb66867411144eb2bf",
          "name": "Cobertor Aveludado Casal 20",
          "category": "Cobertor",
          "price": 280,
          "discount": 2,
          "__v": 0
        },
        {
          "image": [
            "https://a-static.mlcdn.com.br/618x463/cobertor-home-design-aveludado-marvin-cinza-casal-180-x-220-corttex/larconnect/2490/dde639da77600fddbf213b738017bf74.jpg",
            "https://static3.tcdn.com.br/img/img_prod/207304/kit_de_cobertores_casal_padrao_manta_de_microfibra_02_pecas_toque_aveludado_vermelho_32833_1_20190326172217.jpg",
            "https://www.pontofrio-imagens.com.br/CamaMesaBanho/CobertoreManta/cobertorCasal/11638733/1122587328/cobertor-casal-raschel-aveludado-azul-corttex-11638733.jpg",
            "https://static3.tcdn.com.br/img/img_prod/627709/cobertor_casal_manta_de_microfibra_01_peca_toque_aveludado_tabaco_25533_1_20190717103244.jpg"
          ],
          "_id": "5de6a3bb66867411144eb288",
          "name": "Cobertor Aveludado Casal 22",
          "category": "Cobertor",
          "price": 280,
          "discount": 2,
          "__v": 0
        }
      ]
    }

    request(productController)
      .get('/')
      .query()
      .expect('Content-Type', /json/)
      .expect(200, result);
  });

});