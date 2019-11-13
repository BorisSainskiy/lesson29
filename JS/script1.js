class playList {
  constructor(author, song) {
    this.author = author;
    this.song = song;
  }
}

let arr = [
  new playList("LED ZEPPELIN", "STAIRWAY TO HEAVEN"),
  new playList("QUEEN", "BOHEMIAN RHAPSODY"),
  new playList("LYNYRD SKYNYRD", "FREE BIRD"),
  new playList("DEEP PURPLE", "SMOKE ON THE WATER"),
  new playList("JIMI HENDRIX", "ALL ALONG THE WATCHTOWER"),
  new playList("AC/DC", "BACK IN BLACK"),
  new playList("QUEEN", "WE WILL ROCK YOU"),
  new playList("METALLICA", "ENTER SANDMAN")
];

class OlTable {
  constructor(arr) {
    this.arr = arr;
  }

  getHTML() {
    let ol = document.createElement("ol");
    document.body.appendChild(ol);
    for (let obj of arr) {
      let li = document.createElement("li");
      li.innerText = `${obj.author}: ${obj.song}`;
      ol.appendChild(li);
    }
  }
}

let html = new OlTable(arr);
html.getHTML();
