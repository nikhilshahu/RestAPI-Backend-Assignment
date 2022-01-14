function productsAdd() {
    $("#productTable tbody").append("<tr>" + 
        "<td>My First Video</td>" +
        "<td>6/11/2015</td>" +
        "<td>www.pluralsight.com</td>" +
        "</tr>");
}

if ($("#productTable tbody").length == 0) {
    $("#productTable").append("<tbody></tbody>");
}
