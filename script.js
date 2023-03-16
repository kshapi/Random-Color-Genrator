const refresh = document.getElementById('btn');
const ul = document.getElementById('myUl');
const li = ul.querySelectorAll('li');

//Number Of boxs
const length = 9;

const genratColor = ()=> {
  ul.innerHTML = '';
  
  for(let i = 0;i < length; i++){
    //Random Color
    const random = Math.floor(Math.random() * 12345678);
    const color = `#${random.toString(16)}`;
    
    //Color Box
    const box = document.createElement('li');
    box.style.backgroundColor = color;
    
    //PoopUp of Copy
    const popUp = document.createElement('span');
    popUp.className = 'copy';
    popUp.textContent = 'Copied!';
    
    //HexCode
    const hex = document.createElement('div');
    hex.className = 'hex-code';
    hex.textContent = color;
    
    //Append Each Other
    box.appendChild(hex);
    box.appendChild(popUp);
    ul.appendChild(box);
    
    //Add Listener to box
    box.addEventListener('click',()=> {
      copy(hex, popUp);
    });
  
  };
};
genratColor();

refresh.addEventListener('click',genratColor);


const copy = (hex, popUp)=> {
  const hexCode = hex.textContent.toUpperCase();
  //Copy HexCode
  navigator.clipboard.writeText(hexCode);
  popUp.style.display = 'flex';
  
  //Remove popUp Box after One Minute
  setTimeout(()=> {
    popUp.style.display = 'none';
  }, 700);
  
};
//kshapi