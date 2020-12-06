import { v4 as uuidv4 } from "uuid";

function chillHop() {
  return [
    {
      name: "Beaver Creek",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/10/efaa848553d09b4d9fc0752844456e41b34de276-1024x1024.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=8518",
      artist: "Philantrope, Fujitsu",
      color: "#EF8EA9, #ab417f",
      id: uuidv4(),
      active: true,
    },
    {
      name: "Going Back",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/10/737bb830d34592344eb4a2a1d2c006cdbfc811d9-1024x1024.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10310",
      artist: "Sworn",
      color: "#CD607D, #c94043",
      id: uuidv4(),
      active: false,
    },
    {
      name: "Beaver",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/10/23fdd99adc3e16abcb67b004ea3e748ebf433a49-1024x1024.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10448",
      artist: "Aviino",
      color: "#EF8EA9, #ab417f",
      id: uuidv4(),
      active: false,
    },
    {
      name: "Firs",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/88e7eb711f8c71d87fc102e97cf91e36f692348d-1024x1024.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9915",
      artist: "Leavv",
      color: "#CD607D, #c94043",
      id: uuidv4(),
      active: false,
    },
  ];
}

export default chillHop;
