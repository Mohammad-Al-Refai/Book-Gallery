

let URL="https://www.googleapis.com/books/v1/volumes?q="+"java"
fetch(URL).then((v=>v.json())).then(data=>{
    console.log(data.items[0])
})


$(".search").click(()=>{
let value=$(".input").val()
    search(value)
})





 function search(value) {
     console.log(value)
    $(".list").empty()
    let URL="https://www.googleapis.com/books/v1/volumes?q="+value
    fetch(URL).then((v=>v.json())).then(data=>{
       
        data.items.map((item)=>{
            let d=item.volumeInfo;
           $(".list").append(inserOne(d.authors,d.imageLinks.thumbnail,d.description,item.accessInfo.webReaderLink))

        })

    })


}





function inserOne(authors,image,des,read){
    return ` <div class="item">
    <div class="item-image">
        <img src="${image}" class="img">
    </div>
    <div class="des">
        <div class="author">authors:<span style="background-color: transparent;">${authors}</span>
        </div>
        <h6 class="des-text">${des}
        </h6>
        <div class="react">
            <a href="${read}" class="read">read</a>
        </div>
    </div>

</div>`
}