// Brew Haven Café
// Demo Order Form

const orderForm = document.getElementById("orderForm");

if (orderForm) {

    orderForm.addEventListener("submit", function(event) {

        // Prevent the page from refreshing
        event.preventDefault();


        // Get information from the form

        const name =
            document.getElementById("customerName").value.trim();

        const email =
            document.getElementById("customerEmail").value.trim();

        const item =
            document.getElementById("foodItem").value;

        const quantity =
            document.getElementById("quantity").value;

        const formMessage =
            document.getElementById("formMessage");


       // Check name
// Name should contain letters and spaces only

const namePattern = /^[\p{L}\p{M} .'-]+$/u;

if (
    name.length < 2 ||
    name.length > 50 ||
    !namePattern.test(name)
) {
    formMessage.className = "error-message";

    formMessage.innerHTML =
        "⚠️ Please enter a valid name between 2 and 50 characters.";

    return;
}


        // Check item selection

        if (item === "") {

            formMessage.className = "error-message";

            formMessage.innerHTML =
                "⚠️ Please select an item from the menu.";

            return;
        }


        // Successful demo order

        formMessage.className = "success-message";

        formMessage.innerHTML =
            "✅ Thank you, " + name +
            "! Your demo order for " +
            quantity + " × " + item +
            " has been received." +
            "<br><strong>No payment was taken and no information was stored.</strong>";


        // Clear form after successful submission

        orderForm.reset();

    });

}