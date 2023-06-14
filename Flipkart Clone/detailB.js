const imgs = document.querySelectorAll('.img-select a');
const imgBtns = [...imgs];
let imgId = 1;

imgBtns.forEach((imgItem) => {
    imgItem.addEventListener('click', (event) => {
        event.preventDefault();
        imgId = imgItem.dataset.id;
        slideImage();
    });
});

function slideImage(){
    const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;

    document.querySelector('.img-showcase').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
}

window.addEventListener('resize', slideImage);

const addToCartButton = document.querySelector('.btn');
      const quantityInput = document.querySelector('input[type="number"]');

      // Add event listener to the add to cart button
      addToCartButton.addEventListener('click', addToCart);

      // Function to handle the add to cart button click event
      function addToCart() {
        // Get the quantity value from the input
        const quantity = parseInt(quantityInput.value);

        // Perform your desired actions here
        // For example, you can send an AJAX request to add the product to the cart or update a shopping cart object

        // Display a message to indicate the product has been added to the cart
        alert(`Added ${quantity} item(s) to the cart`);
      }