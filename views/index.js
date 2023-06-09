function saveInventory() {
  // debugger;
  const data = {
    productName: document.getElementById("name").value,
    prodDesc: document.getElementById("desc").value,
    qty: document.getElementById("qty").value,
  };

  axios.post("http://localhost:3000/api/inventory", { ...data }).then((res) => {
    console.log("ressssssssssssssssssss", res);
    let ul = document.getElementById("InventoryListId");
    let li = document.createElement("li");
    li.innerHTML = `<span>${res.data.productName} </span>&nbsp;&nbsp;<span>${res.data.prodDesc} </span>&nbsp;&nbsp;<span> ${res.data.qty}</span>&nbsp;&nbsp; <button onclick="updateInventory1(${res.data.id})">Buy</button>`;
    li.setAttribute("id", res.data.id);
    ul.appendChild(li);
    // document.getElementById("name").value = "";
    // document.getElementById("desc").value = "";
    // document.getElementById("qty").value = "";
  });
}

function getInventory() {
  axios.get("http://localhost:3000/api/inventory").then((res) => {
    // console.log("ressss",res);
    renderInventoryList(res.data);
  });
}

function renderInventoryList(data) {
  let ul = document.getElementById("InventoryListId");
  data.forEach((item) => {
    let li = document.createElement("li");
    li.innerHTML = `<span>${item.productName} </span>&nbsp;&nbsp;<span>${item.prodDesc} </span>&nbsp;&nbsp;<span> ${item.qty}</span>&nbsp;&nbsp; <button onclick="updateInventory1(${item.id})">Buy </button> `;
    li.setAttribute("id", item.id);
    ul.appendChild(li);
  });
}

async function updateInventory1(id) {
  const getApiResult = await axios.get(
    `http://localhost:3000/api/inventory/${id}`
  );
  // console.log("getApiresult",getApiResult.data);

  axios
    .put(`http://localhost:3000/api/inventory/${id}`, {
      productName: getApiResult.data.productName,
      prodDesc: getApiResult.data.prodDesc,
      qty: getApiResult.data.qty,
    })
    .then((res) => {
      // console.log("ressssssss of update api", res);
      let li = document.getElementById(`${id}`);
      li.innerHTML = `<span>${res.data.productName} </span>&nbsp;&nbsp;<span>${res.data.prodDesc} </span>&nbsp;&nbsp;<span> ${res.data.qty}</span>&nbsp;&nbsp; <button onclick="updateInventory1(${id})">Buy</button>`;
    })
    .catch((err) => console.log(err));
}
