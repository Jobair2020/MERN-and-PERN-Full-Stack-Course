// Initial products array
const initialProducts = [
  {
    id: 1,
    name: 'Laptop',
    quantity: 10,
    price: 800,
    vendor: 'Dell',
    category: 'Electronics',
  },
  {
    id: 2,
    name: 'Phone',
    quantity: 25,
    price: 500,
    vendor: 'Samsung',
    category: 'Electronics',
  },
  {
    id: 3,
    name: 'Desk Chair',
    quantity: 15,
    price: 150,
    vendor: 'Ikea',
    category: 'Furniture',
  },
];

let products = [...initialProducts];


function renderProducts(products) {
  const productTableBody = document.getElementById('productTableBody');
  productTableBody.innerHTML = '';

  products.forEach(product => {
    const tr = document.createElement('tr');

    tr.innerHTML = `
      <td class="py-2 px-4 border-b text-center">${product.name}</td>
      <td class="py-2 px-4 border-b text-center">${product.quantity}</td>
      <td class="py-2 px-4 border-b text-center">${'$'+product.price}</td>
      <td class="py-2 px-4 border-b text-center">${product.vendor}</td>
      <td class="py-2 px-4 border-b text-center">${product.category}</td>
      <td class="py-2 px-4 border-b text-center">
        <button class="bg-blue-500 text-white p-2 rounded mr-2" onclick="editProduct(${product.id})">Edit</button>
        <button class="bg-red-500 text-white p-2 rounded" onclick="deleteProduct(${product.id})">Delete</button>
      </td>
    `;

    productTableBody.appendChild(tr);
  });
}


function saveProduct(event) {
  event.preventDefault();

  const productId = document.getElementById('productId').value;
  const name = document.getElementById('productName').value;
  const quantity = document.getElementById('productQuantity').value;
  const price = document.getElementById('productPrice').value;
  const vendor = document.getElementById('productVendor').value;
  const category = document.getElementById('productCategory').value;

  if (productId) {
    
    const productIndex = products.findIndex(product => product.id == productId);
    products[productIndex] = { id: parseInt(productId), name, quantity, price, vendor, category };
  } else {
    
    const newProduct = {
      id: products.length ? products[products.length - 1].id + 1 : 1,
      name,
      quantity,
      price,
      vendor,
      category,
    };
    products.push(newProduct);
  }

  renderProducts(products);
  document.getElementById('productForm').reset();
}


function deleteProduct(productId) {
  products = products.filter(product => product.id !== productId);
  renderProducts(products);
}


function editProduct(productId) {
  const product = products.find(product => product.id === productId);
  document.getElementById('productId').value = product.id;
  document.getElementById('productName').value = product.name;
  document.getElementById('productQuantity').value = product.quantity;
  document.getElementById('productPrice').value = product.price;
  document.getElementById('productVendor').value = product.vendor;
  document.getElementById('productCategory').value = product.category;
}


document.getElementById('productForm').addEventListener('submit', saveProduct);
renderProducts(products);
