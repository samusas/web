
function rol()
{
    let r = document.getElementsByClassName("person-com")[0].getElementsByTagName("li");
    let c = document.getElementsByClassName("person-img")[0].getElementsByTagName("li");
    
    for(let i=0; i < c.length; i++)
    {
        c[i].addEventListener("mouseover", function()
        {
            let index = this.getAttribute("data-index");
            
            
            for(let y=0; y < r.length; y++)
            {
               r[y].setAttribute("class", "hide");
            }
            
            r[index].setAttribute("class", "show");
        });
    }

}
