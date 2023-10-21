// all images imported from images directory

import product_01_image_01 from "../images/product_01.jpg";
import product_01_image_02 from "../images/product_01.1.jpg";
import product_01_image_03 from "../images/product_01.3.jpg";

import product_02_image_01 from "../images/product_2.1.jpg";
import product_02_image_02 from "../images/product_2.2.jpg";
import product_02_image_03 from "../images/product_2.3.jpg";

import product_03_image_01 from "../images/product_3.1.jpg";
import product_03_image_02 from "../images/product_3.2.jpg";
import product_03_image_03 from "../images/product_3.3.jpg";

import product_04_image_01 from "../images/product_4.1.jpg";
import product_04_image_02 from "../images/product_4.2.jpg";
import product_04_image_03 from "../images/product_4.3.png";

import product_05_image_01 from "../images/product_5.1.jpg";
import product_05_image_02 from "../images/product_5.2.jpg";
import product_05_image_03 from "../images/product_5.3.jpg";

import product_06_image_01 from "../images/bread(1).png";
import product_06_image_02 from "../images/bread(2).png";
import product_06_image_03 from "../images/bread(3).png";

const products = [
  // {
  //   id: "01",
  //   title: "Chicken Burger",
  //   price: 24.0,
  //   image01: product_01_image_01,
  //   image02: product_01_image_02,
  //   image03: product_01_image_03,
  //   category: "Burger",

  //   desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque. ",
  // },

  {
    id: "02",
    title: "Lash Lifting - Permanente de Cílios",
    price: 34.99,
    image01: product_02_image_01,
    image02: product_02_image_02,
    image03: product_02_image_03,
    category: "Embelezamento do Olhar",
    
    desc: "1h • Descontos que você pode aproveitar agendando esse serviço: ◼ Preço normal de tabela SEM AGENDAR:R$49,99 ◼ Preço com desconto para clientes que AGENDAREM e pagarem em CARTÃO de DÉBITO ou CRÉDITO:R$44,99 (até 3x sem juros) ◼ Preço com desconto para clientes que AGENDAREM e pagarem em PIX ou DINHEIRO:R$34,99",
  },

  {
    id: "03",
    title: "Botox Capilar",
    price: 150.0,
    image01: product_03_image_01, 
    image02: product_03_image_02,
    image03: product_03_image_03,
    category: "Tratamento Capilares",
    
    desc: "1h 30min. Essa promoção é válida para cabelos de qualquer comprimento, EXCLUSIVAMENTE para pagamentos em Dinheiro ou PIX e com HORA MARCADA",
  },

  {
    id: "04",
    title: "Alongamento de Unha em Gel",
    price: 79.0,
    image01: product_04_image_01,
    image02: product_04_image_02,
    image03: product_04_image_03,
    category: "Alongamento de Unhas",
    
    desc: "1h 30min • Female only Manutenção de Acrílico",
  },

  // {
  //   id: "05",
  //   title: "Cheese Burger",
  //   price: 24.0,
  //   image01: product_05_image_01,
  //   image02: product_05_image_02,
  //   image03: product_05_image_03,
  //   category: "Burger",

  //   desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  // },
  // {
  //   id: "06",
  //   title: "Royal Cheese Burger",
  //   price: 24.0,
  //   image01: product_01_image_01,
  //   image02: product_01_image_02,
  //   image03: product_01_image_03,
  //   category: "Burger",

  //   desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  // },

  {
    id: "07",
    title: "Revitalização Facial",
    price: 59.99,
    image01: product_05_image_02,
    image02: product_05_image_01,
    image03: product_05_image_03,
    category: "Estética",
    
    desc: "A hidratação facial deixará a sua pele mais bonita e radiante. Esse serviço inclui higienização facial, esfoliação, tonificação, máscara de hidratação e é finalizado com uma maravilhosa massagem facial.",
  },

  {
    id: "08",
    title: "Escova Progressiva",
    price: 110.0,
    image01: product_01_image_01,
    image02: product_01_image_02,
    image03: product_01_image_03,
    category: "Alisamentos",
    
    desc: "Leia até o fim. Descontos que você pode aproveitar agendando esse serviço: ◼ Preço normal de tabela SEM AGENDAR:R$179,99 ◼ Preço com desconto para clientes que AGENDAREM e pagarem em CARTÃO de DÉBITO ou CRÉDITO:R$147,99 (até 3x sem juros) ◼ Preço com desconto para clientes que AGENDAREM e pagarem em PIX ou DINHEIRO:R$129,99 ◼ Promoção válida para cabelos de QUALQUER COMPRIMENTO",
  },

  {
    id: "09",
    title: "Cortes & Finalizações",
    price: 69.99,
    image01: product_06_image_02,
    image02: product_06_image_01,
    image03: product_06_image_03,
    category: "Tratamento Capilares",
    
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  // {
  //   id: "10",
  //   title: "Classic Hamburger",
  //   price: 24.0,
  //   image01: product_05_image_02,
  //   image02: product_05_image_01,
  //   image03: product_05_image_03,
  //   category: "Burger",

  //   desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  // },

  // {
  //   id: "11",
  //   title: "Crunchy Bread ",
  //   price: 35.0,
  //   image01: product_06_image_01,
  //   image02: product_06_image_02,
  //   image03: product_06_image_03,
  //   category: "Bread",

  //   desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  // },

  // {
  //   id: "13",
  //   title: "Loaf Bread ",
  //   price: 35.0,
  //   image01: product_06_image_03,
  //   image02: product_06_image_02,
  //   image03: product_06_image_03,
  //   category: "Bread",

  //   desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  // },
];

export default products;
