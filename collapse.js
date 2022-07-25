class Collapse {

  constructor( rootElement, label, content) {
    this.rootElement = rootElement;
    this.label = label;
    this.content = content;

    this.collapsed = true;
  }

  render() {
    // HTML text Fragment !

    // 1. primitive approach
    //       .innerHTML = 'html text fragment'
    // neajunsuri - browser must parse / correct the text
    //            - element states are reset
    // this.rootElement.innerHTML = `
    //   <div class="collapse">
    //     <button> ${this.label} </button>
    //   </div>
    // `;

    // DOM Fragment
    let div = document.createElement('div');
    div.className = 'collapse';

    let button = document.createElement('button');
    button.innerText = this.label;

    div.appendChild(button);

    this.rootElement.appendChild(div);

    button.addEventListener('click', this.clickHandler.bind(this));

// HW4: create the next DOM fragment
      // <div class="collapse-content">
      //   <p>${this.content}</p>
      // </div>
      // and append it to div.collapse
      
    let divInner = document.createElement('div');
      divInner.className = 'collapse-content';

      let p = document.createElement('p');
      p.innerText = this.content;

      divInner.appendChild(p);

      if(!this.collapsed) {
      

      // Hint: try to find out if the button was rendered

      // .removeChild
      
      div.appendChild(divInner);
      
      div.removeChild(div.firstElementChild);
    } 
    else {
      // divInner.removeChild(divInner.firstElementChild);
      this.rootElement.appendChild(div);
    }
 
    
  }

  

  clickHandler() {
   
    this.collapsed = !this.collapsed;
    //  console.log(this);
    
    this.render();

  }

}