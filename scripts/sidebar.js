const symbols = document.querySelectorAll('.symbols');
let swap = true;

setInterval(() => {
  symbols.forEach(symbol => {
    symbol.textContent = swap ? '?' : '!';
  });
  swap = !swap;
}, 1000);

const sidebarIcons = document.querySelectorAll('.sidebar-icon');
sidebarIcons.forEach(icon => {
  icon.addEventListener('click',  function()  {

    // remove active attribute from sidebar icons
    sidebarIcons.forEach(icon => {
      icon.classList.remove('active');
    });
    
    // add active attribute to sidebar icon
    this.classList.add('active');
  });

  icon.addEventListener('mouseenter',  function()  {

    // remove active attribute from sidebar icons
    sidebarIcons.forEach(icon => {
      icon.classList.remove('hover');
    });
    
    // add active attribute to sidebar icon
    this.classList.add('hover');
  });

  icon.addEventListener('mouseleave',  function()  {

    // remove active attribute from sidebar icons
    sidebarIcons.forEach(icon => {
      icon.classList.remove('hover');
    });
    
    // add active attribute to sidebar icon
    this.classList.remove('hover');
  });
});
