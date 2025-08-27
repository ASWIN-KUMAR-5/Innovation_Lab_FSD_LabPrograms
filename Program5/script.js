document.getElementById("maintext").addEventListener("input",function(){
    const text = this.value;

    document.getElementById("charcount").innerText=text.length;

    const spaces = text.trim();
    const words = spaces === "" ? 0 : spaces.split(/\s+/).length;
    document.getElementById("wordcount").innerText=words;

})