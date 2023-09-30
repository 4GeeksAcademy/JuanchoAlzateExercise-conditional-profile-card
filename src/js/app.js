import { name } from "file-loader";
import "../style/index.css";

/**
 *  EDIT ONLY INSIDE THIS RENDER FUNCTION
 *  This function is called every time the user changes types or changes any input
 * 
    {
        includeCover: true, // if includeCover is true the algorithm should show the cover image
        background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da", // this is the image's url that will be used as a background for the profile cover
        avatarURL: "https://randomuser.me/api/portraits/women/42.jpg", // this is the url for the profile avatar
        socialMediaPosition: "right", // social media bar position (left or right)
        
        twitter: null, // social media usernames
        github: null,
        linkedin: null,
        instagram: null,

        name: null,
        lastName: null,
        role: null,
        country: null,
        city: null
    }
 */
function render(variables = {}) {
  console.log("These are the current variables: ", variables); // print on the console
  // here we ask the logical questions to make decisions on how to build the html
  // if includeCover==false then we reset the cover code without the <img> tag to make the cover transparent.
  let cover = `<div class="cover"><img src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDlc1G5gnBmX91RUp2qEQxtGz7XUhAfbMy8w&usqp=CAU ${variables.background}" /></div>`;
  if (variables.includeCover == false) cover = "<div class='cover'></div>";

  // reset the website body with the new html output
  document.querySelector("#widget_content").innerHTML = `<div class="widget">
            ${cover}
          <img src="${variables.avatarURL}" class="photo" />
          <h1>${variables.name} ${variables.lastName}</h1>
          <h2>${variables.role}</h2>
          <h3>${variables.city}</h3>
          <ul class="position-right">
            <li><a href="https://twitter.com/${variables.twitter}"><i class="fab fa-twitter"></i></a></li>
            <li><a href="https://github.com/${variables.github}"><i class="fab fa-github"></i></a></li>
            <li><a href="https://linkedin.com/school/${variables.linkedin}"><i class="fab fa-linkedin"></i></a></li>
            <li><a href="https://instagram.com/${variables.instagram}"><i class="fab fa-instagram"></i></a></li>
          </ul>
        </div>
    `;
}

/**
 * Don't change any of the lines below, here is where we do the logic for the dropdowns
 */
window.onload = function() {
  window.variables = {
    // if includeCover is true the algorithm should show the cover image
    includeCover: true,
    // this is the image's url that will be used as a background for the profile cover
    background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da",
    // this is the url for the profile avatar
    avatarURL:
      "data:image/jpeg;base64,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",
    // social media bar position (left or right)
    socialMediaPosition: "position-left",
    // social media usernames
    twitter: null,
    github: null,
    linkedin: null,
    instagram: null,
    name: "Your name",
    lastName: "Your lastname",
    role: "Web Developer",
    country: "Colombia",
    city: "Medellin, Colombia"
  };
  render(window.variables); // render the card for the first time

  document.querySelectorAll(".picker").forEach(function(elm) {
    elm.addEventListener("change", function(e) {
      // <- add a listener to every input
      const attribute = e.target.getAttribute("for"); // when any input changes, collect the value
      let values = {};
      values[attribute] =
        this.value == "" || this.value == "null"
          ? null
          : this.value == "true"
          ? true
          : this.value == "false"
          ? false
          : this.value;
      render(Object.assign(window.variables, values)); // render again the card with new values
    });
  });
};
