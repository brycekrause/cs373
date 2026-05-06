let education = document.getElementById("education");
let experience = document.getElementById("experience");

let edu_button = document.getElementById("edu-btn");
let exp_button = document.getElementById("exp-btn");

education.style.display = 'none';
let selected = 'exp';

if (education.style.display == 'none'){
    exp_button.style.backgroundColor = 'white';
    exp_button.style.color = 'black';
}else if (experience.style.display == 'none'){
    edu_button.style.backgroundColor = 'white';
    edu_button.style.color = 'black';
}

edu_button.addEventListener('click', function(){
    experience.style.display = 'none';
    education.style.display = 'block';

    edu_button.style.backgroundColor = 'white';
    edu_button.style.color = 'black';

    exp_button.style.backgroundColor = '#2D2E2E';
    exp_button.style.color = 'white';

    selected = 'edu';
  
    });
exp_button.addEventListener('click', function(){
    education.style.display = 'none';
    experience.style.display = 'block';

    exp_button.style.backgroundColor = 'white';
    exp_button.style.color = 'black';

    edu_button.style.backgroundColor = '#2D2E2E';
    edu_button.style.color = 'white';

    selected = 'exp';

});

exp_button.addEventListener('mouseover', function(){
    if (selected == 'exp'){
    }else{
        exp_button.style.backgroundColor = 'white';
        exp_button.style.color = 'black';        
    }
});

exp_button.addEventListener('mouseleave', function(){
    if (selected == 'exp'){
    }else{
        exp_button.style.backgroundColor = '#2D2E2E';
        exp_button.style.color = 'white';   
    };
});


edu_button.addEventListener('mouseover', function(){
    if (selected == 'edu'){
    }else{
        edu_button.style.backgroundColor = 'white';
        edu_button.style.color = 'black';        
    }
});
edu_button.addEventListener('mouseleave', function(){
    if (selected == 'edu'){
    }else{
        edu_button.style.backgroundColor = '#2D2E2E';
        edu_button.style.color = 'white';   
    }
});