document.addEventListener("DOMContentLoaded", function () {
    const containers = document.querySelectorAll(".custom-image-slider");

    containers.forEach(container => {
      const afterImage = container.querySelector(".slider-after");
      const handle = container.querySelector(".slider-handle");

      // Set initial handle position and clipPath
      const initialPercentage = 75;
      handle.style.left = `${initialPercentage}%`;
      afterImage.style.clipPath = `inset(0 ${100 - initialPercentage}% 0 0)`;

      let dragging = false;
      let lastX = 0;

      // Add mouse event listeners
      handle.addEventListener("mousedown", (e) => {
        dragging = true;
        lastX = e.clientX;
        e.preventDefault();
      });

      document.addEventListener("mouseup", () => {
        dragging = false;
      });

      document.addEventListener("mouseleave", () => {
        dragging = false;
      });

      document.addEventListener("mousemove", (e) => {
        if (!dragging) return;

        const rect = container.getBoundingClientRect();
        const x = e.clientX - rect.left;
        let widthPercentage = (x / rect.width) * 100;

        // Add constraint to keep the handle within 1% of either edge
        widthPercentage = Math.max(0, Math.min(widthPercentage, 100));

        // Update handle position using requestAnimationFrame
        window.requestAnimationFrame(() => {
          handle.style.left = `${widthPercentage}%`;
          afterImage.style.clipPath = `inset(0 ${100 - widthPercentage}% 0 0)`;
        });

        lastX = x;
      });

      // Add touch event listeners
      handle.addEventListener("touchstart", (e) => {
        dragging = true;
        lastX = e.touches[0].clientX;
        e.preventDefault();
      });

      document.addEventListener("touchend", () => {
        dragging = false;
      });

      container.addEventListener("touchcancel", () => {
        dragging = false;
      });

      container.addEventListener("touchmove", (e) => {
        if (!dragging) return;

        const rect = container.getBoundingClientRect();
        const x = e.touches[0].clientX - rect.left;
        let widthPercentage = (x / rect.width) * 100;

        // Add constraint to keep the handle within 1% of either edge
        widthPercentage = Math.max(0, Math.min(widthPercentage, 100));

        // Update handle position using requestAnimationFrame
        window.requestAnimationFrame(() => {
          handle.style.left = `${widthPercentage}%`;
          afterImage.style.clipPath = `inset(0 ${100 - widthPercentage}% 0 0)`;
          });

        lastX = x;
      });
    });
});