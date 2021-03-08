addEventListener('DOMContentloaded',inicio(),false);
function inicio(){
    const elemento = document.querySelectorAll('button').forEach(btn=>{
        btn.addEventListener('click',()=>{
            const modalm = document.getElementById("modal-menu");
            const modalu = document.getElementById("modal-user");
            if(btn.id==="btn-user"){
                    if(modalm.className==="activo"){
                        if(modalu.className==="none"){
                            btn.style="border-radius: 0;background-color: none;"
                            modalu.className="activo";
                        }else{
                            modalu.className="none";
                            btn.style="border-radius: 100px;background-color: rgba(0,0,0,0.1);"
                        }
                    }else{
                            modalm.className="activo";
                            document.getElementById('btn-menu').style="border-radius: 0;background-color: none;";
                            if(modalu.className==="none"){
                                btn.style="border-radius: 0;background-color: none;"
                                modalu.className="activo";
                            }else{
                                modalu.className="none";
                                btn.style="border-radius: 100px;background-color: rgba(0,0,0,0.1);"
                            }
                        }
              /*  if(modalm.className==="activo"){
                    modalu.className==="none"?modalu.className="activo":modalu.className="none";
                    }else{
                        modalm.className="activo";
                        modalu.className==="none"?modalu.className="activo":modalu.className="none";
                    }
                 */
            }
            if(btn.id==="btn-menu"){
                if(modalu.className==="activo"){
                    if(modalm.className==="none"){
                        btn.style="border-radius: 0;background-color: none;"
                        modalm.className="activo";
                    }else{
                        modalm.className="none";
                        btn.style="border-radius: 100px;background-color: rgba(0,0,0,0.1);"
                    }
                }else{
                    modalu.className="activo";
                    document.getElementById('btn-user').style="border-radius: 0;background-color: none;";
                    if(modalm.className==="none"){
                        btn.style="border-radius: 0;background-color: none;"
                        modalm.className="activo";
                    }else{
                        modalm.className="none";
                        btn.style="border-radius: 100px;background-color: rgba(0,0,0,0.1);"
                    }
                }
            }
        })
    });
    const closemodal = document.querySelectorAll('section');
    for (main of closemodal){
        main.addEventListener('click',(e)=>{
            if(e.target.className==="main"){
                const modal = document.querySelectorAll('nav').forEach(modo=>{
                    modo.classList="activo";
                })
            }
        });
            
    }
    const login = document.getElementById('formulario').addEventListener("submit",(e)=>{
        e.preventDefault();
        let datos = new FormData(document.getElementById('formulario'));
        datos.forEach(data=>{
            console.log(data);
        })
        //http://localhost/Modal Usuario/php/login.php
        fetch('http://localhost/Modal Usuario/php/login.php',{
            method:'post',
            body: datos
        }).then(res=>res.json())
        .catch(error=>{
            console.log(error+"error en la recepcion de datos del php")
        }).then(data=>{
            console.log(data);
            logeo(data);

        })
    })
    const seepass = document.getElementById('seepass').addEventListener('click',()=>{
        var tipo = document.getElementById('password');
        if(tipo.type =="password"){
            tipo.type="text";
        }else{
            tipo.type="password";
        }
    })
    
}

function logeo(data){
    document.getElementById("iniciar-sesion").className="logout";
    document.getElementById("datos-usuario").className="login";
    document.getElementById("user-name").innerHTML=`${data.first_name} ${data.last_name}`;
    document.getElementById("user-email").innerHTML=data.email;
    document.getElementById("user-type").innerHTML=data.level;


}

    
  