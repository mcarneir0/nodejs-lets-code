# ESLint + Prettier + TypeScript

## Primeiramente inicie um projeto npm com o comando: `npm init` ou `yarn init`

## Utilizando ESLint

1. Instalar o [ESlint](https://eslint.org/docs/user-guide/getting-started):

    ```node
    npm install eslint --save-dev

    # ou

    yarn add eslint --dev
    ```

2. Iniciar a configuração e definir as opções de acordo com o projeto:

    ```node
    npm init @eslint/config

    # ou

    yarn create @eslint/config
    ```

3. Instale a extensão para o VS Code: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint

## Utilizando o Prettier

1. Instalar o [Prettier](https://prettier.io/docs/en/install.html):

    ```node
    npm install --save-dev --save-exact prettier

    # ou

    yarn add --dev --exact prettier
    ```

2. Crie um arquivo de configurações vazio: `echo {}> .prettierrc.json`.

3. Crie um arquivo para indicar quais os arquivos e pastas não devem ser formatados: `.prettierignore.json`.

4. Instale a extensão para o VS Code: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode

## Utilizando TypeScript

1. Instalar o [TypeScript](https://www.typescriptlang.org/download):

    ```node
    npm install typescript --save-dev

    # ou

    yarn add typescript --dev
    ```
