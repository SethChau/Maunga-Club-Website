// Function to create a snowflake element
function createSnowflake() {
    const snowflake = document.createElement("div");
    snowflake.classList.add("snowflake");
    snowflake.innerText = "❄";
    snowflake.style.left = Math.random() * window.innerWidth + "px";
    snowflake.style.animationDuration = Math.random() * 3 + 2 + "s";
    document.body.appendChild(snowflake);
  
    // Remove the snowflake element once it's out of view
    snowflake.addEventListener("animationend", () => {
      snowflake.remove();
    });
  }
  
  // Generate snowflakes at an interval
  setInterval(createSnowflake, 1000);
  
