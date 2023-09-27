# Exercício de Lista de Compras

## Descrição

Você deve criar um sistema de gerenciamento de lista de compras que permita aos usuários adicionar itens à lista de compras. O sistema deve fornecer feedback ao usuário por meio de mensagens de notificação exibidas no canto superior direito da página.

## Requisitos Funcionais

1. **Interface de Usuário:**
   - Você deve criar uma interface de usuário que inclua os seguintes elementos:
     - Um campo de entrada de texto que permita ao usuário digitar um item de supermercado.
     - Um botão "Adicionar Item" que permita ao usuário adicionar o item à lista de compras.
     - Uma área onde os itens da lista de compras serão exibidos.
     - Uma área no canto superior direito da página para exibir mensagens de notificação.

2. **Lista de Compras:**
   - Você deve implementar uma lista de compras que pode conter no máximo 10 itens.
   - Quando o usuário adicionar um item à lista, ele deve ser exibido na área de itens da lista de compras.

3. **Mensagens de Notificação:**
   - Quando um item é adicionado com sucesso à lista de compras, uma mensagem de notificação de sucesso deve ser exibida.
   - Se a lista de compras já tiver 10 itens, uma mensagem de aviso deve ser exibida, informando ao usuário que a lista está cheia.

4. **Interação do Usuário:**
   - Após adicionar um item à lista de compras, o campo de entrada de texto deve ser limpo automaticamente.
   - O foco deve ser mantido no campo de entrada de texto para que o usuário possa continuar adicionando itens.
   - A lista de compras deve ser atualizada dinamicamente sempre que um novo item é adicionado.

## Requisitos Técnicos

- O sistema deve ser implementado usando HTML, CSS e JavaScript.
- As mensagens de notificação devem deslizar da direita para a esquerda ao serem exibidas.
- As mensagens de notificação devem desaparecer automaticamente após um curto período de tempo.
- O sistema não deve causar overflow no corpo da página.

## Exemplo de Código

Aqui está um exemplo de código que pode ser usado como ponto de partida para a implementação do sistema:

**HTML (index.html):**
```html
<!DOCTYPE html>
<html lang="pt-AOz">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./index.css">
    <script defer src="./index.js"></script>
    <title>Market List</title>
</head>
<body>
    <main class="container">
        <h1 class="title">Lista de Compras</h1>
        <form id="shopping-list-form">
            <label for="item">Digite um item de supermercado:</label>
            <input type="text" id="item" required>
            <button type="submit" id="add-item">Adicionar Item</button>
        </form>
        <h2 class="title">Itens:</h2>
        <ul id="list-shopping"></ul>
    </main>
    <div class="info" id="info">
        <!-- Aqui serão exibidas as mensagens de notificação -->
    </div>
</body>
</html>
```

**CSS (index.css):**
```css
/* Estilos CSS aqui */
```

**JavaScript (index.js):**
```javascript
// Código JavaScript aqui
```

Você pode usar este enunciado como guia para a implementação do sistema de gerenciamento de lista de compras. Certifique-se de que a interface do usuário seja clara e amigável, e que a interação com o sistema seja suave e eficiente.