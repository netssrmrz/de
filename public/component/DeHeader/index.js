import Utils from "/component/Utils.js";

class DeHeader extends HTMLElement
{
  static tname = "de-header";

  constructor()
  {
    super();
    //Utils.Bind(this, "On_");
  }

  connectedCallback()
  {
    this.Render();
  }

  On_Click_Hamburger()
  {
    const link_elem = document.getElementById("link");
    if (link_elem)
      link_elem.play();
  }

  Render()
  {
    this.innerHTML = `
      <header class="header">
        <div class="logo"><img src="images-de/logo.svg" alt="Image"></div>
        <span class="phone" hidden>t: +380 83 857 5 577</span>
        <a href="mailto:it@dulceeng.com.au" target="_blank" class="phone" >it@dulceeng.com.au</a>
        <div cid="hamburger" class="hamburger" id="hamburger">
          <div class="hamburger__line hamburger__line--01">
            <div class="hamburger__line-in hamburger__line-in--01"></div>
          </div>
          <div class="hamburger__line hamburger__line--02">
            <div class="hamburger__line-in hamburger__line-in--02"></div>
          </div>
          <div class="hamburger__line hamburger__line--03">
            <div class="hamburger__line-in hamburger__line-in--03"></div>
          </div>
          <div class="hamburger__line hamburger__line--cross01">
            <div class="hamburger__line-in hamburger__line-in--cross01"></div>
          </div>
          <div class="hamburger__line hamburger__line--cross02">
            <div class="hamburger__line-in hamburger__line-in--cross02"></div>
          </div>
        </div>
        <div hidden class="equalizer"> <span></span> <span></span> <span></span> <span></span> </div>
        <ul class="language" hidden>
          <li><a href="#">EN</a></li>
          <li><a href="#">RU</a></li>
        </ul>
      </header>
    `;
    Utils.Set_Id_Shortcuts(this, this, "cid");

    this.hamburger.addEventListener('click', this.On_Click_Hamburger);

    $('.hamburger-navigation li a').on('click', function(e) 
    {
      const elmHamburger = document.querySelector('.hamburger');
      elmHamburger.click();
      //$('.transition-overlay').toggleClass("show-me");

      var goTo = this.getAttribute("href"); 
      setTimeout(function() {window.location = goTo;},1000);       
      e.preventDefault();                  
    });

  }
}

Utils.Register_Element(DeHeader);
export default DeHeader;