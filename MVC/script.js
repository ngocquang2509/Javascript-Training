model = { items: [] };

view = {
  addItem: (e) => {
    if (e.code == "Enter") {
      if (
        document.getElementById("add-item").value != "" &&
        document.getElementById("add-item").value != " "
      ) {
        item = document.getElementById("add-item").value;
        controller.addItem(item);
        return false;
      }
    }
  },
  clearList: function () {
    var range = document.createRange();
    range.selectNodeContents(document.getElementById("list"));
    range.deleteContents();
  },
};

controller = {
  init: () => {
    view.render();
  },
  addItem: function (item) {
    list_item = { text: item, completed: false };
    model.items.push(list_item);
    console.log(list_item);
    document.getElementById("add-item").value = "";
    view.render();
  },
};
