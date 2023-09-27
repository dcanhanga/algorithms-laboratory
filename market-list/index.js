const $inputItem = document.querySelector('#item');
const $shoppingListForm = document.querySelector('#shopping-list-form');
const $listShopping = document.querySelector('#list-shopping');
const $info = document.querySelector('#info');
let listShopping = [];

const renderItemList = (itemList) => {
    itemList.forEach((item) => {
        const li = document.createElement('li');
        li.innerText = item;
        $listShopping.appendChild(li);
    });
};

const showInfoMessage = (message, className, duration) => {
    $info.innerText = message;
    $info.classList.add('active', className);

    setTimeout(() => {
        $info.classList.remove('active', className);
    }, duration);
};

const addItemInListShopping = (item) => {
    const newListShopping = [...listShopping, item];

    if (newListShopping.length <= 10) {
        listShopping = newListShopping;
        showInfoMessage(`Item ${listShopping.length} adicionado com sucesso`, 'success', 1500);
        $inputItem.focus();
    } else {
        showInfoMessage(`Já existem ${listShopping.length} itens na sua lista`, 'warning', 1500);
        $inputItem.blur();
        return
    }

    if (listShopping.length === 10) {
        renderItemList(listShopping);
    }
};

$shoppingListForm.addEventListener('submit', (event) => {
    event.preventDefault();
    addItemInListShopping($inputItem.value);
    console.log(listShopping);
    $shoppingListForm.reset();
});
