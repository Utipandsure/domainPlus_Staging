function openNav() {
    document.getElementById("sideBar").style.width = "100%";
    document.getElementById("sideNav").style.width = "60%";
  }
  
  /*Close navigation*/
  function exitNav() {
    document.getElementById("sideBar").style.width = "0%";
    document.getElementById("sideNav").style.width = "0%";
  }

  document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('myForm');

    // form.addEventListener('submit', function(event) {
    //     event.preventDefault(); // Prevent the form from submitting

    //     // Perform form validation
    //     // Example: Check if input fields are not empty
    //     const name = document.getElementById('name').value.trim();
    //     const email = document.getElementById('email').value.trim();
    //     const message = document.getElementById('message').value.trim();
    //     const select = document.getElementById('select').value.trim();

    //     if (!name || !email || !message || !select) {
    //         alert('Please fill out all fields.'); // Display an error message
    //         return;
    //     }

    //     // Form data is valid, you can submit the form data or perform other actions here
    //     alert('Form submitted successfully!'); // Display success message
    //     // Clear all form fields
    //     form.reset();
    // });
});


const slideshow = document.getElementById('slideshow');
const images = [
    './images/slider-mainbg-01.jpg',
    // '/images/slider-mainbg-02.jpg',
    './images/pagetitle-bg.jpg',
    // Add more image URLs as needed
];
let index = 0;

// function changeBackground() {
//     index = (index + 1) % images.length;
//     slideshow.style.backgroundImage = "url('" + images[index] + "')";
//     setTimeout(changeBackground, 5000); // Change image every 5 seconds
// }

// changeBackground(); // Start the slideshow
  

//arrow up section
// Function to scroll to the top of the page
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Function to toggle button visibility based on scroll position
window.addEventListener('scroll', function() {
    var button = document.getElementById('go-up');
    if (window.scrollY > 200) { // Adjust the scroll position threshold as needed
        button.style.opacity = '1';
    } else {
        button.style.opacity = '0';
    }
});



document.addEventListener("DOMContentLoaded", function() {
    const options = {
        threshold: 0.5 // Change the threshold as needed (0.5 means halfway into the viewport)
    };

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                startCounting(entry.target);
            }
        });
    }, options);

    const elements = document.querySelectorAll("#years-experience, #industry-deployment, #projects-completed, #certified-consultants");
    elements.forEach(element => {
        observer.observe(element);
    });

    function startCounting(element) {
        const initialValue = parseInt(element.textContent);
        let count = 0;
        const interval = setInterval(() => {
            count++;
            element.textContent = count + "+";
            if (count === initialValue) {
                clearInterval(interval);
            }
        }, 1); // Adjust the interval as needed
    }
});


document.addEventListener('DOMContentLoaded', () => {
    const supportButton = document.getElementById('supportButton');
    const supportModal = document.getElementById('supportModal');
    const closeModalButton = document.getElementById('closeModalButton');

    // supportButton.addEventListener('click', () => {
    //     supportModal.classList.remove('hidden');
    // });

    // closeModalButton.addEventListener('click', () => {
    //     supportModal.classList.add('hidden');
    // });

    // Close modal when clicking outside of it
    window.addEventListener('click', (event) => {
        if (event.target === supportModal) {
            supportModal.classList.add('hidden');
        }
    });
});







document.addEventListener('DOMContentLoaded', () => {
    const supportOptions = document.querySelectorAll('.support-option');

    supportOptions.forEach(option => {
        option.addEventListener('mouseenter', () => {
            option.classList.add('transform', 'scale-105');
        });
        option.addEventListener('mouseleave', () => {
            option.classList.remove('transform', 'scale-105');
        });
    });
});



document.addEventListener('DOMContentLoaded', () => {
    const supportForm = document.getElementById('supportForm');
    const confirmationMessage = document.getElementById('confirmationMessage');

    // supportForm.addEventListener('submit', (event) => {
    //     event.preventDefault();

    //     // Clear form fields
    //     supportForm.reset();

    //     // Display confirmation message
    //     confirmationMessage.classList.remove('hidden');

    //     // Hide confirmation message after 5 seconds
    //     setTimeout(() => {
    //         confirmationMessage.classList.add('hidden');
    //     }, 5000);
    // });
});


document.addEventListener('DOMContentLoaded', function() {
    const summaries = document.querySelectorAll('summary');

    summaries.forEach(summary => {
        summary.addEventListener('click', function() {
            this.parentNode.querySelector('details').toggleAttribute('open');
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('supportModal');
    const openModalButton = document.getElementById('openModalButton');
    const closeModalButton = document.getElementById('closeModalButton');

    // openModalButton.addEventListener('click', function() {
    //     modal.classList.remove('hidden');
    // });

    // closeModalButton.addEventListener('click', function() {
    //     modal.classList.add('hidden');
    // });
});



// Add any necessary JavaScript code here
document.addEventListener('DOMContentLoaded', function() {
  const subscribeButton = document.querySelector('#sButton');
//   subscribeButton.addEventListener('click', function() {
//     const emailInput = document.querySelector('input[name="email"]');
//     if (emailInput.value) {
//       alert(`Subscribed with email: ${emailInput.value}`);
//       emailInput.value = '';
//     } else {
//       alert('Please enter a valid email address.');
//     }
//   });
});




// scripts.js
document.addEventListener("DOMContentLoaded", function() {
    const goUpButton = document.getElementById('go-up');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            goUpButton.classList.remove('opacity-0');
            goUpButton.classList.add('opacity-100');
        } else {
            goUpButton.classList.remove('opacity-100');
            goUpButton.classList.add('opacity-0');
        }
    });
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}



//services modal section

document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('#serviceModal');
    const openModalButton = document.getElementById('openModalButton');
    const closeModalButton = document.getElementById('serviceModalButton');

    // openModalButton.addEventListener('click', function() {
    //     modal.classList.remove('hidden');
    // });

    // closeModalButton.addEventListener('click', function() {
    //     modal.classList.add('hidden');
    // });
});


//testing new modal code

document.addEventListener("DOMContentLoaded", () => {
    const detailsElements = document.querySelectorAll("details");
    const modal = document.getElementById("modal");
    const modalContent = document.getElementById("modal-content");
    const closeModalButton = document.getElementById("close-modal");
  
    detailsElements.forEach(details => {
      const summary = details.querySelector("summary");
      summary.addEventListener("click", (event) => {
        event.preventDefault();
        modalContent.innerHTML = details.innerHTML;
        modal.classList.remove("hidden");
      });
    });
  
    // closeModalButton.addEventListener("click", () => {
    //   modal.classList.add("hidden");
    // });
  
    window.addEventListener("click", (event) => {
      if (event.target === modal) {
        modal.classList.add("hidden");
      }
    });
  });


  document.addEventListener('DOMContentLoaded', function() {
    const scrollContainer = document.getElementById('scrollContainer');
    const scrollLeftButton = document.getElementById('scrollLeft');
    const scrollRightButton = document.getElementById('scrollRight');

    // Function to scroll left
    // scrollLeftButton.addEventListener('click', () => {
    //     scrollContainer.scrollBy({
    //         left: -200,  // Adjust this value based on your needs
    //         behavior: 'smooth'
    //     });
    });

    // Function to scroll right
    // scrollRightButton.addEventListener('click', () => {
    //     scrollContainer.scrollBy({
    //         left: 200,  // Adjust this value based on your needs
    //         behavior: 'smooth'
    //     });
    // });

    // Enable mouse drag to scroll
    let isDown = false;
    let startX;
    let scrollLeft;

    // scrollContainer.addEventListener('mousedown', (e) => {
    //     isDown = true;
    //     scrollContainer.classList.add('active');
    //     startX = e.pageX - scrollContainer.offsetLeft;
    //     scrollLeft = scrollContainer.scrollLeft;
    // });

    // scrollContainer.addEventListener('mouseleave', () => {
    //     isDown = false;
    //     scrollContainer.classList.remove('active');
    // });

    // scrollContainer.addEventListener('mouseup', () => {
    //     isDown = false;
    //     scrollContainer.classList.remove('active');
    // });

    // scrollContainer.addEventListener('mousemove', (e) => {
    //     if (!isDown) return;
    //     e.preventDefault();
    //     const x = e.pageX - scrollContainer.offsetLeft;
    //     const walk = (x - startX) * 3; // Adjust the scroll speed as needed
    //     scrollContainer.scrollLeft = scrollLeft - walk;
    // });

    // Enable touch to scroll
    let startTouchX;

    // scrollContainer.addEventListener('touchstart', (e) => {
    //     startTouchX = e.touches[0].pageX;
    //     scrollLeft = scrollContainer.scrollLeft;
    // });

    // scrollContainer.addEventListener('touchmove', (e) => {
    //     const x = e.touches[0].pageX;
    //     const walk = (x - startTouchX) * 3; // Adjust the scroll speed as needed
    //     scrollContainer.scrollLeft = scrollLeft - walk;
    // });



document.addEventListener('DOMContentLoaded', function () {
    const popup = document.getElementById('popup');
    const openPopupButton = document.getElementById('openPopup');
    const closePopupButton = document.getElementById('closePopup');

    // openPopupButton.addEventListener('click', function () {
    //     console.log("clicked")
    //   popup.classList.remove('hidden');
    // });

    // closePopupButton.addEventListener('click', function () {
    //   popup.classList.add('hidden');
    // });

    // Optional: Close the pop-up when clicking outside of it
    window.addEventListener('click', function (e) {
      if (e.target === popup) {
        popup.classList.add('hidden');
      }
    });
  });

const openModal = ()=>{
    const popup = document.getElementById('popup');
    popup.classList.remove('hidden');
}


const closeModal = () =>{
    const popup = document.getElementById('popup');
    popup.classList.add('hidden');
}

const openModals = ()=>{
    const popup = document.getElementById('popups');
    popup.classList.remove('hidden');
}


const closeModals = () =>{
    const popup = document.getElementById('popups');
    popup.classList.add('hidden');
}

const openModalone = ()=>{
    const popup = document.getElementById('popupone');
    popup.classList.remove('hidden');
}


const closeModalone = () =>{
    const popup = document.getElementById('popupone');
    popup.classList.add('hidden');
}

const openModaltwo = ()=>{
    const popup = document.getElementById('popuptwo');
    popup.classList.remove('hidden');
}


const closeModaltwo = () =>{
    const popup = document.getElementById('popuptwo');
    popup.classList.add('hidden');
}

const openModalthree = ()=>{
    const popup = document.getElementById('popupthree');
    popup.classList.remove('hidden');
}


const closeModalthree = () =>{
    const popup = document.getElementById('popupthree');
    popup.classList.add('hidden');
}

const openModalfour = ()=>{
    const popup = document.getElementById('popupfour');
    popup.classList.remove('hidden');
}


const closeModalfour = () =>{
    const popup = document.getElementById('popupfour');
    popup.classList.add('hidden');
}

const openModalfive = ()=>{
    const popup = document.getElementById('popupfive');
    popup.classList.remove('hidden');
}


const closeModalfive = () =>{
    const popup = document.getElementById('popupfive');
    popup.classList.add('hidden');
}

const openModalsix = ()=>{
    const popup = document.getElementById('popupsix');
    popup.classList.remove('hidden');
}


const closeModalsix = () =>{
    const popup = document.getElementById('popupsix');
    popup.classList.add('hidden');
}

const openSupportModal = () => {
    console.log('this is being clicked');
    const  Modal = document.getElementById('Modal')
    Modal.classList.remove('hidden')
}

const closeSupportModal = () => {
    const  Modal = document.getElementById('Modal')
    Modal.classList.add('hidden')
}


// readmore
function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }

  // readmore
function myFunction1() {
    var dots1 = document.getElementById("dots1");
    var moreText = document.getElementById("more1");
    var btnText = document.getElementById("myBtn1");
  
    if (dots1.style.display === "none") {
      dots1.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots1.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }
function myFunction2() {
    var dots1 = document.getElementById("dots2");
    var moreText = document.getElementById("more2");
    var btnText = document.getElementById("myBtn2");
  
    if (dots1.style.display === "none") {
      dots1.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots1.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }















