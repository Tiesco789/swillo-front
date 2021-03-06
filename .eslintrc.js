module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/vue3-essential", "eslint:recommended", "@vue/prettier"],
  parserOptions: {
    parser: "babel-eslint",
  },
  rules: {
    "no-unused-vars": "off",
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "vue/multi-word-component-names": [
      "error",
      {
        ignores: [
          "Loja",
          "Barra",
          "Login",
          "Home",
          "Cadastro",
          "Carrinho",
          "Contato",
          "CadastrarProduto",
          "Modal",
        ],
      },
    ],
  },
};
