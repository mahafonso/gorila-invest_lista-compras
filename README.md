# AppListaCompras

# Sobre
Esta aplicação foi gerada com [Angular CLI](https://github.com/angular/angular-cli) versão 6.1.3 e [NPM](https://www.npmjs.com/) versão 5.6.0.

# Funcionamento
A aplicação possui uma tela de cadastro (/register), onde usuários novos podem se cadastrar e logar para começar a usar a lista de compras. Essa tela possui um link para a tela de login, caso o usuário já tenha cadastro.
A aplicação possui uma tela de login (/login), onde usuários já cadastrados devem logar para visualizar sua lista de compras. Essa tela possui um link para a tela de cadastro, caso o usuário ainda não tenha cadastro.
Ao fazer o login ou o cadastro, se não houver erros (que serão exibidos nos respectivos formulários), o usuário é automaticamente logado no site e redirecionado para a página principal (/list). Nela existe um formulário de cadastro dos produtos na lista, onde o usuário deve colocar o nome e a quantidade do produto. Quando existirem produtos cadastrados na lista do usuário, eles serão listados. Para cada produto existe um botão para removê-lo. Também é possível selecionar mais de um produto para ser removido ao mesmo tempo ou também remover todos os produtos da lista.

## Instalação
Para começar a usar a aplicação, instale o Angular CLI ('npm i @angular/cli'). Em seguida instale os pacotes da aplicação ('npm i').
Após isso, a aplicação está pronta para rodar (próximo passo).

## Servidor local
Para rodar a aplicação na sua máquina, em modo developer, rode 'ng serve' na pasta raiz da aplicação. 
A aplicação abrirá em http://localhost:4200/.
A aplicação atualizará automaticamente nesse endereço quando houver qualquer alteração em qualquer arquivo fonte.

## Build
Para gerar o build da aplicação na sua máquina, rode 'ng build' na pasta raiz da aplicação. 
Para gerar o build de produção da aplicação na sua máquina, rode 'ng build --prod' na pasta raiz da aplicação. 
Os arquivos do build estarão na pasta 'dist/app-lista-compras'.

## Link
Aplicação disponível em: https://gorilainvestlistacompras.firebaseapp.com
