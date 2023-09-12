

const getDataToLS =()=>{
    const bookmarks = localStorage.getItem('bookmarks');
    if(bookmarks){
        return JSON.parse(bookmarks)
    }
    return [];
}





const saveDataToLS = id=>{
    const bookmarks = getDataToLS();
    bookmarks.push(id);
    // convert to stringify and then sent local storage 
    const bookmarksStr = JSON.stringify(bookmarks)
    localStorage.setItem('bookmarks',bookmarksStr)

}


export{saveDataToLS,getDataToLS}